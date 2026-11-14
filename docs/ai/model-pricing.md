---
title: AI 模型价格、模态与积分
description: AI Studio 对话模型的官方定价、缓存费用、输入模态与调用限制
---

核验日期为 **2026 年 11 月 14 日**。价格来自服务商的公开定价与模型接口，表内的「输入」指缓存未命中的输入。所有对话模型均输出文本。

## 积分与请求上限

**1 积分 = ¥0.001 的模型用量，即单价为 ¥1／百万 token 时的 1,000 token。** 系统分别计算普通输入、缓存读取、缓存写入和输出的费用。用量按千分之一积分结算，思考 token 随上游计入输出。旧的日用量以原整数存储单位保留，展示时除以 1,000。

| 账户 | 每日积分 |
| --- | ---: |
| standard | 100 |
| pro | 300 |
| promax | 600 |
| ultra | 1,000 |
| 访客 | 3 |

一次模型调用最多输入 **20,000 token**，输入与输出合计最多 **100,000 token**。输入包含随请求发送的历史消息、系统提示和工具定义。服务端按照本地 token 估算校验输入，媒体用量以预留量估算，结算优先读取上游返回的用量。输出上限同时受模型限制、剩余上下文、余额和调用方指定的限制约束。付费请求按输入和允许的最大输出预留积分，返回用量后结算并释放差额。免费模型同样受长度限制，积分消耗为零。

## 国内直连模型

单位为 **人民币／百万 token**。「—」表示没有单列的缓存写入费用。

| 模型 | 输入 | 输出 | 缓存读取 | 缓存写入 | 上游输入模态 |
| --- | ---: | ---: | ---: | ---: | --- |
| `deepseek-flash`（高峰） | 2.00 | 8.00 | 0.04 | — | 文本、图片 |
| `deepseek-flash`（空闲） | 1.00 | 4.00 | 0.02 | — | 文本、图片 |
| `MiniMax-M3` | 2.10 | 8.40 | 0.42 | — | 文本、图片、视频 |
| `MiniMax-M3.1-Flash` | 1.00 | 4.00 | 0.10 | — | 文本、图片、视频 |
| `mimo-v2.6-pro` | 3.00 | 6.00 | 0.025 | 0（限时） | 文本、图片、音频、视频 |
| `mimo-v2.6-flash` | 1.00 | 2.00 | 0.02 | 0（限时） | 文本、图片、音频、视频 |

- DeepSeek 的积分表沿用国内高峰价。上游空闲价为高峰价的一半。旧 ID `deepseek-v4-flash` 由 Flash 接管并使用同一价格。历史兼容 ID `deepseek-v4-pro` 仍有官方服务，支持文本，高峰输入／输出／缓存读取分别为 ¥9／¥27／¥0.30，空闲分别为 ¥4.50／¥13.50／¥0.15。使用文件解析、搜索等增值接口有独立费用。 [DeepSeek 国内定价](https://api-docs.deepseek.com/zh-cn/quick_start/pricing/) · [图片输入](https://api-docs.deepseek.com/zh-cn/guides/vision/)
- MiniMax M3 采用标准服务的 ≤512k 档，超过 512k 的分档在本站 20k 输入限制下不会触发。M3 和 M3.1 Flash 的对话请求使用官方 `max_completion_tokens` 字段。M3.1 Flash 始终开启推理，短答按较低思考强度请求。 [MiniMax 国内定价](https://platform.minimax.cn/docs/pricing/overview) · [对话补全与输入示例](https://platform.minimax.cn/docs/api-reference/text-chat-openai)
- MiMo 使用国内实时推理费率。图片仍用 `image_url`，音频由 API 适配为 `input_audio`。对话用量里分别报告音频、图片和视频 token。 [MiMo 国内定价](https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go) · [图片](https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/multimodal-understanding/image-understanding) · [音频](https://mimo.mi.com/docs/en-US/quick-start/usage-guide/multimodal-understanding/audio-understanding) · [视频](https://mimo.mi.com/docs/zh-CN/quick-start/usage-guide/multimodal-understanding/video-understanding)

## OpenRouter 付费模型

单位为 **美元／百万 token**。输入、输出与缓存读价取自官方模型目录快照，本站按 **USD 1 = CNY 7.2** 换算成积分价。各路由的实际结算价与可用模态可能随端点变化。缓存写价格取自公布该费用的端点，「—」表示核验时未找到单列价格。 [模型目录](https://openrouter.ai/api/v1/models) · [官方字段说明](https://openrouter.ai/docs/api/api-reference/models/list-all-models-and-their-properties)

| 模型 | 输入 | 输出 | 缓存读取 | 缓存写入 | 上游输入模态 |
| --- | ---: | ---: | ---: | ---: | --- |
| [Qwen3.8 Flash](https://openrouter.ai/qwen/qwen3.8-flash) | 0.15 | 0.47 | 0.016 | 0.20 | 文本、图片、视频 |
| [Qwen3.8 27B](https://openrouter.ai/qwen/qwen3.8-27b) | 0.15 | 1.875 | 0.0375 | 0.53125 | 文本、图片、视频 |
| [GLM-5.3-Flash](https://openrouter.ai/z-ai/glm-5.3-flash) | 0.0399 | 0.0784 | 0.03 | — | 文本、图片、视频 |
| [GLM-5.3](https://openrouter.ai/z-ai/glm-5.3) | 0.084 | 3.60 | 0.079 | 2.10 | 文本 |
| [Hy3](https://openrouter.ai/tencent/hy3) | 0.132 | 0.528 | 0.033 | — | 文本 |
| [Hy4](https://openrouter.ai/tencent/hy4) | 0.417 | 1.2505 | 0.021 | — | 文本、图片 |
| [Grok 4.3](https://openrouter.ai/x-ai/grok-4.3) | 1.25 | 2.50 | 0.20 | — | 文本、图片、文件 |
| [Kimi K2.7 Code](https://openrouter.ai/moonshotai/kimi-k2.7-code) | 0.60 | 3.50 | 0.16 | — | 文本、图片 |
| [Kimi K2.6](https://openrouter.ai/moonshotai/kimi-k2.6) | 0.65 | 3.41 | 0.15 | — | 文本、图片 |
| [Kimi K2.5](https://openrouter.ai/moonshotai/kimi-k2.5) | 0.50 | 2.50 | 0.15 | — | 文本、图片 |
| [Mistral Nemo](https://openrouter.ai/mistralai/mistral-nemo)（自动标题） | 0.029 | 0.03 | — | — | 文本 |

缓存写端点明细可见 [Qwen3.8 Flash](https://openrouter.ai/api/v1/models/qwen/qwen3.8-flash/endpoints)、[Qwen3.8 27B](https://openrouter.ai/api/v1/models/qwen/qwen3.8-27b/endpoints)、[GLM-5.3](https://openrouter.ai/api/v1/models/z-ai/glm-5.3/endpoints)。

## OpenRouter 免费模型

下表是核验当日带 `:free` 后缀且符合本站目录规则的文本输出模型。输入与输出价格均为 0，目录未列独立缓存读取或写入价格。实际可选列表由 API 定期刷新。 [OpenRouter 免费目录](https://openrouter.ai/models?fmt=free)

| 模型 ID | 上游输入模态 |
| --- | --- |
| `inclusionai/ling-3.2-flash:free` | 文本、图片 |
| `baidu/ernie-5.5-flash-preview:free` | 文本 |
| `thinkingmachines/inkling-2-small:free` | 文本、图片 |
| `liquid/lfm-3-1.7b:free` | 文本 |
| `particle-ai/particle-1:free` | 文本、图片 |
| `recursive/flint-v1.0:free` | 文本 |
| `nvidia/nemotron-3.5-super-vl:free` | 文本、图片、视频 |
| `dots-studio/dots-3-note-preview:free` | 文本、图片 |
| `nvidia/nemotron-3.5-lightning:free` | 文本 |
| `cohere/north-mini-code:free` | 文本 |
| `nvidia/nemotron-3-ultra-550b-a55b:free` | 文本 |
| `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` | 文本、音频、图片、视频 |

Qwen3.8 27B 免费版的资料页仍可访问，实查模型目录无该 ID，端点 API 返回空列表。AI Studio 提供付费 27B，MemoQuest 的免费讲解默认使用 Nemotron 3 Ultra。 [Qwen 免费端点](https://openrouter.ai/api/v1/models/qwen/qwen3.8-27b:free/endpoints)

## 代码核对

- 旧 Qwen 3.6／3.7 已退出选择器，原 AI Studio 偏好转到 Qwen3.8 Flash。付费模型用目录快照配置，免费清单以 OpenRouter 响应为准。
- 对话代理读取 DeepSeek 的 `prompt_cache_hit_tokens` 或兼容接口的 `prompt_tokens_details.cached_tokens`，并读取 OpenRouter 的 `cache_write_tokens`。缺少缓存用量时按普通输入单价结算。 [DeepSeek 缓存](https://api-docs.deepseek.com/zh-cn/guides/kv_cache/) · [OpenRouter 缓存](https://openrouter.ai/blog/tutorials/prompt-caching-sticky-routing/)
- AI Studio 的附件选择器按模型提供图片与 MiMo 音频。视频与原始文件输入列在上游能力表里，本站对话暂未开放这两类上传。语音输入另外走转写接口。
- 实测部分 OpenRouter 路由会在启用思考时超过请求中的输出上限。Grok 4.3 和 Kimi K2.5 未开启深度思考时会显式关闭推理。启用深度思考后的实际输出与结算仍取决于上游。
- 视觉或音频的实际 token 取决于上游的媒体编码规则。20k 与 100k 的服务端预检以本地估算执行，无法在请求前精确复现所有上游分词器和媒体编码器。 [DeepSeek token 用量计算](https://api-docs.deepseek.com/zh-cn/quick_start/token_usage/)

## 专用模型

这些端点负责语音或向量检索，使用各自的计费方式。

| 模型 | 输入 → 输出 | 官网上游价格 |
| --- | --- | --- |
| [MAI-Transcribe 2](https://openrouter.ai/microsoft/mai-transcribe-2) | 音频 → 文本 | $0.10／音频小时 |
| [Eleven v4 Turbo](https://openrouter.ai/elevenlabs/eleven-v4-turbo) | 文本 → 音频 | $40／百万字符 |
| [MiMo V2.5 TTS 系列](https://mimo.mi.com/docs/zh-CN/price/pay-as-you-go) | 文本合成、参考音频克隆、文本音色设计 → 音频 | 限时免费 |
| [Qwen3 Embedding 8B](https://openrouter.ai/qwen/qwen3-embedding-8b) | 文本 → 向量 | $0.01／百万输入 token |
