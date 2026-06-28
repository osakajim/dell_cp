# Thread 019f09af handoff

旧会话：`019f09af-82e2-7ba1-94a1-c2d188b895c1`

## 已完成

- 接手前一个卡死会话 `019f08d6-a09b-7170-adce-b6d4cfdbefd3` 的 AW520H 部署。
- 将运行态图片资源切到轻量 WebP，并确认页面引用里没有 `.png/.jpg/.jpeg`。
- 配置 GitHub remote 为 `git@github.com:osakajim/dell_cp.git`。
- 按“先 GitHub，再上传服务器”的流程推送并部署：
  - `6a9a7b6 Update lightweight training resources`
  - `8a3b60b Fix product hotspots and generated views`
  - `a050135 Keep mobile hotspots compact`
- 校准 AW520H、AW725H 等产品热点。
- 为 AW720M、AW620M、AW510K、KB216、KM5221W 增加或替换 AI 生成图。

## 本次补全

- 把旧会话卡住的 7 张 AI 图重新确认为透明背景 WebP：
  - `product/aw510k/ai-generated/bottom-feet.webp`
  - `product/aw620m/ai-generated/bottom.webp`
  - `product/aw720m/ai-generated/bottom.webp`
  - `product/kb216/ai-generated/front.webp`
  - `product/km5221w/ai-generated/keyboard.webp`
  - `product/km5221w/ai-generated/set.webp`
  - `product/km5221w/ai-generated/underside.webp`
- 新增 AW510K 正面 AI 图：
  - `product/aw510k/ai-generated/front.webp`
- 将 AW510K 页面主图和第一个视角切到新的 AI 正面图。
- 检查透明通道：相关图四角 alpha 均为 0，没有白底底板。
- 检查 JS 语法、页面图片引用和 AW510K 热点预览。

## 后续规则

- 新请求先看本文件、`AGENTS.md`、Git 历史和当前代码引用。
- 图片生成只保存文件和摘要，不把大图片响应塞回对话。
- 继续保持“先 GitHub，后服务器同步”的部署顺序。
