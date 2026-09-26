---
title: 2026-09-19 · 心算记忆 + 位似图形
description: 新增 games 心算记忆（10 级难度工作记忆训练）与 edu 位似图形（2D/3D 位似变换交互演示）。
---

import Link from '@docusaurus/Link';

<div className="eyebrow-mono">CHANGELOG · 2026-09-19</div>

# 心算记忆 + 位似图形

今天同时上线两个新东西：games 一款工作记忆训练游戏，edu 一款位似变换交互演示。

## games

- 🧠 **心算记忆** — 10 级难度（等级 = 需要回忆多少轮前的答案），算式复杂度随轮次递增：一位数± → 两位数± → 一位数× → 混合×±。按 Claude 设计系统重做界面（暖米色画布 + 珊瑚 CTA + 深海军回顾面板）；移动端 0-9 数字键盘 + 桌面键盘输入。

## teaching-tools

- 📐 **位似图形** — 任意多边形 + 自动吸附位似中心 + 沿射线选位似比，2D/3D 双视图（3D 支持鼠标旋转 / 缩放 / 平移）。实时显示位似比 `k`、`|k|`、`k²`（面积比）。

## 文档

- 📚 **docs** · 新增 <Link to="/games/心算记忆">心算记忆</Link> 页面
- 📚 **docs** · 新增 <Link to="/teaching-tools/位似图形">位似图形</Link> 页面
- 📚 **docs** · games 概览卡片数 12 → 13
- 📚 **docs** · teaching-tools 概览卡片数 25 → 26