---
title: 更新日志
description: Oscar Studio 所有工具、游戏、AI 应用的发布历史与新功能公告。
sidebar_position: 0
---

import Link from '@docusaurus/Link';

<div className="eyebrow-mono">CHANGELOG · INDEX</div>

# 更新日志

按发布日期倒序记录所有可感知的产品变更。点击日期查看当天完整记录。

<div style={{display: "flex", gap: "0.5rem", margin: "1rem 0 2rem", flexWrap: "wrap"}}>
  <Link className="button button--primary button--lg" to="/changelog/2026-09-29">查看最新</Link>
</div>

## [2026-09-29](/changelog/2026-09-29)

- ✨ [霓虹音游](https://games.oscarstudio.cn/neon-pulse/) 上线，游戏大厅第 14 个游戏（[文档](/games/霓虹音游)）：参考 Phigros 玩法的浏览器音游，**音乐全部由内置合成器实时生成**、谱面从同一张音乐事件表派生，音画同步是结构性保证
- ✨ 同上：2K–12K 任意键数、点按 / 长按 / 双押、EASY / NORMAL / HARD 三档难度与内置 3 首曲子；手机平板直接用手指点轨道就能玩，双押两根手指同时按
- ✨ 同上：可导入本地音频（mp3 / wav / ogg / m4a）自动节拍检测扒谱；支持延迟校准，敲 20 下即测出实际感知延迟并补偿

## [2026-09-28](/changelog/2026-09-28)

- 🐛 [骰子模拟器](https://edu.oscarstudio.cn/骰子模拟器/) 修复投掷时闪出硬边矩形的渲染伪影（[文档](/teaching-tools/骰子模拟器)）：去掉透视根上的非等比缩放与逐面背面剔除两处合成层脆弱写法
- ⚠️ 同上更正文档里一处不准确的说法：拼出实心骰子靠的是正面遮挡，从不需要背面剔除

## [2026-09-27](/changelog/2026-09-27)

- ✨ [骰子模拟器](https://edu.oscarstudio.cn/骰子模拟器/) 换成真 3D 骰子（[文档](/teaching-tools/骰子模拟器)）：实心立方体 + 抛起翻滚回弹 + 阴影随高度缩放；朝上的面由掷出的点数反解姿态得到，恒等于结果
- ⚠️ [骰子模拟器](https://edu.oscarstudio.cn/骰子模拟器/) 「最大点数」改为「骰子面数」2–6：旧版允许填到 20，但画面只循环显示 1–6 点阵、总数却按 20 算，两者对不上；D20 需要二十面体，要的话另做
- ✨ [memoquest](/ai/memoquest) 上线（[memoquest.oscarstudio.cn](https://memoquest.oscarstudio.cn)）：会板书的 AI 老师——讲解时重点按节奏贴到黑板上，讲到关键处停下来抽问，答完看完解析才继续
- ✨ [正则表达式工作台](https://tools.oscarstudio.cn/regex/) 上线（[文档](/tools/正则表达式工作台)）：实时高亮匹配、逐条拆解数字组与命名组、替换结果预览，内置 13 条常用片段；pattern 与 flags 可编进分享链接
- ✨ [图片压缩器](https://tools.oscarstudio.cn/image-compressor/) 上线（[文档](/tools/图片压缩器)）：批量拖入压缩并逐张对比前后体积，支持 JPEG / WebP / PNG、质量滑块与最大尺寸限制，图片全程不上传
- ✨ [颜文字大全](https://tools.oscarstudio.cn/kaomoji/) 上线（[文档](/tools/颜文字大全)）：796 条颜文字、30 类情境，用 `qwen3-embedding-8b` 做语义检索，搜「无语到不想说话」也能命中；分类浏览走本地过滤零延迟
- ✨ 文档站补建 [实用工具](/tools) 栏目：此前教学工具与游戏都有文档页，唯独工具站缺失，这次补上 10 个工具的概览与隐私说明对照表
- ⚡ [memoquest](https://memoquest.oscarstudio.cn) 可选模型：模型都能选，价格实时从服务端拉；实时显示本次消耗、占今日额度比例和余额，超额直接拦下
- ⚡ [memoquest](https://memoquest.oscarstudio.cn) 界面换成暖米色 + 珊瑚色，模型选择器改弹窗式（挂 FREE / THINK 徽章）
- 🐛 [memoquest](https://memoquest.oscarstudio.cn) 修复 MiniMax 系：思考混进正文、讲稿被思考吃光截断两个问题
- 🐛 [memoquest](https://memoquest.oscarstudio.cn) 修复「讲解讲到一半停住」：根因是输出上限只给 600 tokens，现在的模型光思考就要 1600+，直接导致正文为空。已提到 2500，并换掉两个已下线的默认模型
- ⚡ [AI Studio](/ai/AI Studio) 和 [memoquest](https://memoquest.oscarstudio.cn) 的免费模型列表改为实时读取 OpenRouter 官方接口：清掉 13 个已下线的死条目、补上 14 个新模型，OpenAI/Google/Claude 三家不再展示；顺带修掉「免费模型被静默扣额度」和「启动失败锁死 6 小时」两个静默 bug

## [2026-09-26](/changelog/2026-09-26)

- ⚡ [媒体播放器](/teaching-tools/media-player) 重做：音视频合并成一套控件，播放模式收成单个循环按钮，网页全屏生效
- ⚡ [待办清单](https://tools.oscarstudio.cn/todo/) 快速添加边打字边高亮日期时间，截止日期/时间改用自绘选择器（深色主题不再白底）并补上清除
- 🐛 [待办清单](https://tools.oscarstudio.cn/todo/) 修复深色模式下快速添加输入框看不见字（高亮不再依赖 JS 才显示文字）
- 🐛 [智能点名器](/teaching-tools/智能点名器) 修复界面整体偏左、长名字被裁掉，新增静音开关
- 🐛 文档站 [更新日志](/changelog)、[标签](/tags)、[益智游戏](/games)、[AI](/ai)、[教学工具](/teaching-tools) 章节首页恢复直链访问

## [2026-09-25](/changelog/2026-09-25)

- ✨ [六冲程汽油机工作循环模拟器](/teaching-tools/六冲程汽油机工作循环模拟器) 上线：完整六冲程循环演示 + 实时缸压/温度仪表盘

## [2026-09-20](/changelog/2026-09-20)

- ⚡ [心算记忆](/games/心算记忆) 加入倒计时机制，按难度 60 / 120 / 180 秒分级

## [2026-09-19](/changelog/2026-09-19)

- ✨ [心算记忆](/games/心算记忆) 上线：10 级难度的工作记忆训练游戏
- ✨ [位似图形](/teaching-tools/位似图形) 上线：2D / 3D 位似变换交互演示

## [2026-09-13](/changelog/2026-09-13)

- ⚡ [二十四点](/games/二十四点) 重新制作，界面与交互逻辑全面优化

## [2026-09-12](/changelog/2026-09-12)

- ✨ 更新日志模块上线，docs 主页新增「最近更新」卡片

> 每篇只记录用户能感知到的变更。新增 / 优化 / 修复分别用 ✨ / ⚡ / 🐛 前缀；内部重构、依赖升级一般不列。
