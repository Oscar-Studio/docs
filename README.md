# Oscar Studio Docs

Oscar Studio 统一文档站 — Docusaurus + xAI 设计语言。

教学工具 / 益智游戏 / AI 三个分类，共 37 个产品的官方文档。

**部署后域名**：`docs.oscarstudio.cn`

## 技术栈

- [Docusaurus 3.10](https://docusaurus.io/) (TypeScript, classic preset)
- MDX（React 组件嵌入）
- xAI 风格主题（参考 `xai-design/DESIGN.md`）
- 本地搜索：`@easyops-cn/docusaurus-search-local`
- 字体：Inter（display / body）+ JetBrains Mono（eyebrow / labels），Google Fonts CDN

## 本地开发

```bash
cd docs
npm install            # 安装依赖
npm start              # 启动 dev server，默认 http://localhost:3000
```

## 生产构建

```bash
npm run build          # 产物输出到 build/
npm run serve          # 本地预览构建产物
```

构建产物在 `build/` 目录，包含：

- 完整静态站点（HTML / CSS / JS）
- `CNAME` 文件（值 `docs.oscarstudio.cn`）

## 目录结构

```
docs/
├── docs/                          # MDX 内容根
│   ├── intro.mdx                  # 首页（routeBasePath=/）
│   ├── teaching-tools/            # 教学工具（25 个）
│   │   ├── _category_.json
│   │   ├── index.mdx              # 分类总览
│   │   ├── 科学计算器.mdx         # 完整示范
│   │   └── ...                    # 24 个 stub
│   ├── games/                     # 益智游戏（11 个）
│   │   ├── _category_.json
│   │   ├── index.mdx
│   │   ├── 2048.mdx               # 完整示范
│   │   └── ...                    # 10 个 stub
│   └── ai/                        # AI（1 个）
│       ├── _category_.json
│       ├── index.mdx
│       └── AI Studio.mdx          # 完整示范
├── src/
│   ├── css/custom.css             # xAI 主题覆盖
│   └── components/
│       ├── PillButton/            # pill 按钮组件
│       └── ToolCard/              # 工具卡片
├── static/CNAME                   # docs.oscarstudio.cn
├── docusaurus.config.ts
├── sidebars.ts
└── package.json
```

## 添加 / 修改文档

1. 编辑 `docs/<分类>/<工具名>.mdx`
2. 前置元数据 frontmatter：
   ```yaml
   ---
   title: 工具中文名
   description: 一句话描述（搜索结果显示用）
   sidebar_position: <数字，sidebar 中排序>
   tags: [标签1, 标签2]
   ---
   ```
3. 主体可使用：
   - `<PillButton href="..." variant="primary">Try it →</PillButton>`
   - `<ToolCard icon="📐" name="..." description="..." href="..." tags={[...]} liveUrl="..." />`
   - `<div className="eyebrow-mono">CATEGORY</div>` 写大写 mono 标签
4. 保存后 dev server 热更新；推送到 GitHub 后构建并发布到 GitHub Pages

## 部署

> ⚠️ 部署由用户处理，本 README 只描述流程。

1. 在 GitHub 创建新仓库（建议名 `docs`），启用 Pages 指向 `gh-pages` 分支或 `/build` 目录
2. 本地构建：`npm run build`，产物在 `build/`
3. 推送 `build/` 到 `gh-pages` 分支（或用 `npm run deploy`）
4. DNS 添加 CNAME 记录 `docs.oscarstudio.cn` → `<user>.github.io`
5. GitHub Pages 设置中填入自定义域名 `docs.oscarstudio.cn`

## 设计参考

- `xai-design/DESIGN.md` — xAI 设计 tokens（颜色、字体、间距、组件）
- `AI/index.html` — Inter + JetBrains Mono 字体加载范式
- `src/css/custom.css` — Docusaurus Infima 变量覆盖

## 内容状态

| 分类 | 完整 | Stub | 总计 |
|---|---|---|---|
| 教学工具 | 1 (科学计算器) | 24 | 25 |
| 益智游戏 | 1 (2048) | 10 | 11 |
| AI | 1 (AI Studio) | 0 | 1 |
| **合计** | **3** | **34** | **37** |

Stub 文件含 frontmatter + PillButton / Try it 占位，**正文 TODO 待填**。
