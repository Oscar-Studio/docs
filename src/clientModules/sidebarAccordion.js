// Sidebar accordion: keep only the top-level category that contains the
// active document expanded; collapse all other top-level categories.
//
// Docusaurus 3 auto-loads every file under src/clientModules/. We patch
// history.pushState/replaceState and listen to popstate so that SPA
// navigation (the kind performed by <Link>/<NavLink>) triggers a re-check
// shortly after React re-renders the sidebar.

(function () {
  if (typeof window === 'undefined' || typeof history === 'undefined') return;
  const SELECTORS = {
    sidebar: '.theme-doc-sidebar-container',
    activeLink: '.menu__link--active',
    collapsible: '.menu__list-item-collapsible',
  };

  function run() {
    const sidebar = document.querySelector(SELECTORS.sidebar);
    if (!sidebar) return;

    const topMenu = sidebar.querySelector('nav.menu > ul.menu__list');
    if (!topMenu) return;
    const topCategories = topMenu.querySelectorAll(
      ':scope > li.theme-doc-sidebar-item-category-level-1'
    );
    if (topCategories.length === 0) return;

    const activeLink = sidebar.querySelector(SELECTORS.activeLink);
    if (!activeLink) return; // home / no matching doc, leave state alone

    let keep = null;
    for (const li of topCategories) {
      if (li.contains(activeLink)) {
        keep = li;
        break;
      }
    }
    if (!keep) return;

    for (const li of topCategories) {
      if (li === keep) continue;
      if (li.classList.contains('menu__list-item--collapsed')) continue;
      const btn = li.querySelector(
        ':scope > ' + SELECTORS.collapsible + ' > button'
      );
      if (!btn) continue;
      // Docusaurus 3 uses React's synthetic event system; a plain
      // element.click() does not fire the onClick handler, so call
      // the React props' onClick directly.
      const propsKey = Object.keys(btn).find(function (k) {
        return k.indexOf('__reactProps') === 0;
      });
      if (!propsKey) continue;
      const onClick = btn[propsKey] && btn[propsKey].onClick;
      if (typeof onClick !== 'function') continue;
      onClick({
        preventDefault: function () {},
        stopPropagation: function () {},
      });
    }
  }

  function schedule() {
    setTimeout(run, 50);
  }

  const origPush = history.pushState.bind(history);
  history.pushState = function () {
    const r = origPush.apply(history, arguments);
    schedule();
    return r;
  };
  const origReplace = history.replaceState.bind(history);
  history.replaceState = function () {
    const r = origReplace.apply(history, arguments);
    schedule();
    return r;
  };
  window.addEventListener('popstate', schedule);

  if (document.readyState === 'complete') {
    schedule();
  } else {
    window.addEventListener('load', schedule);
  }
})();
