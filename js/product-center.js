const products = {
  aw520h: {
    name: "AW520H",
    type: "有线游戏耳机",
    icon: "H",
    summary: "高解析音频认证驱动、Dolby Atmos、可伸缩麦克风，支持 USB Type-A 与 3.5 mm 连接。",
    image: "product/aw520h/views/gallery-2.webp",
    views: [
      "product/aw520h/views/gallery-2.webp",
      "product/aw520h/views/gallery-9.webp",
      "product/aw520h/views/gallery-8.webp",
      "product/aw520h/views/gallery-5.webp",
      "product/aw520h/views/gallery-6.webp"
    ],
    viewNames: ["正面（佩戴面）", "反面（控制区）", "左侧（麦克风）", "右侧（标志灯）", "线缆 / 转接头"],
    viewScales: [0.9, 0.92, 0.9, 0.88, 0.88],
    viewFeatures: {
      0: [[4, 50, 78, 62, 84]],
      1: [[0, 35, 60, 12, 56]],
      2: [[1, 64, 62, 78, 54], [2, 67, 71, 80, 72], [4, 38, 76, 13, 78]],
      3: [[0, 53, 70, 65, 62], [4, 50, 84, 64, 84]],
      4: [[3, 27, 73, 7, 74], [4, 72, 78, 77, 87]]
    },
    imageScale: 0.9,
    facts: [["连接", "USB Type-A / 3.5 mm"], ["平台", "Windows / 主机 / 移动设备"], ["软件", "Alienware Command Center"]],
    features: [
      ["LED 指示灯", "左耳罩 Alienware 标志灯，显示耳机工作状态；使用 3.5 mm 连接时不亮属于正常现象。", 35, 51, 5, 43],
      ["麦克风静音按钮", "左耳罩背面的红色按键，用于快速切换麦克风静音。", 51, 51, 62, 42],
      ["音量控制", "右耳罩背面的滚轮，上下滚动调节系统输出音量。", 67, 59, 78, 67],
      ["可伸缩麦克风", "麦克风杆末端收音头，拉出后靠近嘴部使用。", 37, 78, 5, 82],
      ["USB Type-A 线缆", "右耳罩底部线缆出口，另一端 USB Type-A 用于电脑直连、AWCC 识别和固件更新。", 51, 61, 43, 82]
    ],
    diagnosis: [
      ["先判断正常现象", ["3.5 mm 模式 LED 不亮属于正常现象", "3.5 mm 模式 AWCC 不识别属于正常限制", "先确认连接方式：USB / 3.5 mm"]],
      ["基础排查", ["检查默认播放与录音设备", "确认麦克风静音、音量滚轮和线缆状态", "重新插拔并更换 USB 端口或设备测试"]],
      ["USB 模式异常", ["USB 直连识别异常或功能不稳定时可尝试固件更新", "更新前建议关闭 AWCC 和其他音频管理软件"]],
      ["售后判断", ["多设备测试后仍无声或单边无声", "麦克风持续失效且静音按钮无效", "线缆、插头、耳罩或头梁存在物理损坏"]]
    ],
    firmware: [
      ["连接耳机", "使用 USB Type-A 线缆将 AW520H 直接连接 Windows 电脑。"],
      ["下载更新工具", "访问 Dell 支持网站，搜索 AW520H 并下载固件更新工具。"],
      ["解压运行", "解压 ZIP 文件，双击运行 AW520HFirmwareUpdater.exe。"],
      ["确认设备", "工具显示耳机已连接后再继续。"],
      ["执行更新", "点击 Update，更新过程中不要拔出耳机或关闭工具。"],
      ["完成与失败处理", "看到 Update successfully 后退出；失败时更换 USB 端口或电脑并重试。"]
    ],
    source: [1, 2, 3]
  },
  aw720m: {
    name: "AW720M",
    type: "三模无线游戏鼠标",
    icon: "M",
    summary: "2.4GHz、蓝牙和有线三模连接，轻量舒适设计，支持五档 DPI、宏按键与便捷充电。",
    image: "product/aw720m/views/view-2.webp",
    views: [
      "product/aw720m/views/view-2.webp",
      "product/aw720m/ai-generated/bottom.webp",
      "product/aw720m/views/view-1.webp",
      "product/aw720m/views/view-3.webp",
      "product/aw720m/views/view-4.webp"
    ],
    viewNames: ["正面（按键面）", "反面（底部）", "左侧（侧键）", "前端（USB-C）", "后侧外观"],
    viewScales: [0.88, 1.08, 0.9, 0.86, 0.9],
    viewFeatures: {
      0: [[0, 39, 32, 8, 25], [1, 50, 27, 40, 10], [2, 61, 32, 76, 25]],
      1: [[3, 37, 46, 13, 50], [4, 50, 63, 27, 70], [5, 50, 39, 67, 37], [6, 63, 46, 75, 52]],
      2: [[8, 49, 43, 68, 32], [9, 55, 50, 73, 49]],
      3: [[7, 50, 64, 64, 78]],
      4: []
    },
    imageScale: 0.78,
    facts: [["连接", "2.4GHz / 蓝牙 / 有线"], ["DPI", "800–3200 五档"], ["软件", "AWCC 自定义"]],
    features: [
      ["左键", "标准主按键。", 38, 30, 10, 26],
      ["滚轮", "滚动与中键操作。", 50, 27, 38, 10],
      ["右键", "标准副按键。", 62, 30, 73, 26],
      ["三模选择开关", "底部切换 2.4GHz、蓝牙或有线模式。", 37, 46, 13, 50],
      ["DPI 调整按钮", "底部切换五档 DPI。", 50, 63, 27, 70],
      ["DPI 指示器", "底部指示当前 DPI 档位。", 50, 39, 67, 37],
      ["电源按钮", "底部电源开关。", 63, 46, 75, 52],
      ["USB-C 端口", "有线连接与充电。", 50, 12, 42, 3],
      ["前进键", "侧面浏览前进按键。", 30, 53, 5, 50],
      ["后退键", "侧面浏览后退按键。", 31, 61, 6, 61]
    ],
    diagnosis: [
      ["先确认连接方式与基础状态", ["区分 2.4GHz、蓝牙与有线模式", "确认电源开启、接收器插入且按键有响应", "2.4GHz 模式确认 USB 接收器距离"]],
      ["基础排查", ["关闭并重启鼠标", "更换 USB 端口，等待驱动识别", "重启电脑后再次测试", "确认传感器无脏污、无遮挡"]],
      ["场景化判断", ["光标不动/乱跳：清洁传感器并更换鼠标垫表面", "按键/滚轮异常：检查异物卡住并跨设备测试", "灯不亮：检查电量与 AWCC 灯效设置"]],
      ["仍异常进入售后", ["多设备、多模式测试均异常", "存在断键、失灵、滚轮功能异常", "存在明显外观损坏或进液"]]
    ],
    firmware: [
      ["安装并打开 AWCC", "使用 Alienware Command Center 管理设备。"],
      ["正确连接", "USB 加密狗连接电脑，鼠标通过 USB 数据线连接电脑。"],
      ["进入设备页面", "在 AWCC 中进入 AlienFX / System / Setting / Update。"],
      ["检查版本", "对比 Current Dongle Version 与 Current Mouse Version。"],
      ["执行升级", "点击 Update，等待升级完成；更新前关闭其他程序。"],
      ["可解决问题", "连接稳定性、光标/传感器异常、滚轮或按键响应、兼容识别及功耗表现。"]
    ],
    source: [4, 5, 6]
  },
  aw725h: {
    name: "AW725H",
    type: "三模式无线游戏耳机",
    icon: "H",
    summary: "2.4GHz、蓝牙与 3.5 mm 三模式切换，支持伸缩麦克风、游戏/聊天平衡和 Dolby Atmos。",
    image: "product/aw725h/views/view-1.webp",
    views: [
      "product/aw725h/views/view-1.webp",
      "product/aw725h/views/view-2.webp",
      "product/aw725h/views/view-3.webp"
    ],
    viewNames: ["整体 / 麦克风", "左右耳罩控制区", "侧面外观"],
    viewScales: [0.9, 0.9, 0.9],
    viewFeatures: {
      0: [[3, 31, 86, 7, 82], [4, 35, 75, 7, 75]],
      1: [
        [7, 37.0, 69.8, 12, 73],
        [6, 37.8, 76.2, 12, 82],
        [4, 38.4, 82.0, 12, 90],
        [0, 67.5, 68.5, 76, 73],
        [1, 67.5, 71.1, 76, 76],
        [2, 65.4, 74.8, 76, 85]
      ],
      2: [[0, 60, 75, 78, 78], [5, 33, 79, 8, 88]]
    },
    imageScale: 0.82,
    facts: [["连接", "2.4GHz / 蓝牙 / 3.5 mm"], ["充电", "USB-C"], ["软件", "AWCC / Dolby Atmos"]],
    features: [
      ["LED 指示灯", "显示连接、充电与工作状态。", 70, 50, 76, 35],
      ["电源 / 蓝牙按钮", "开关机并进入蓝牙配对。", 30, 53, 5, 40],
      ["音量控制轮", "调节耳机音量。", 70, 61, 77, 68],
      ["伸缩式麦克风", "收纳式麦克风，拉出使用。", 23, 70, 4, 76],
      ["USB-C 充电端口", "为耳机充电并支持数据连接。", 69, 72, 74, 82],
      ["内嵌音频线端口", "连接 3.5 mm 内嵌音频线。", 30, 72, 4, 86],
      ["游戏 / 聊天平衡按钮", "在游戏声音与聊天声音之间调整平衡。", 31, 61, 4, 62],
      ["麦克风静音按钮", "快速切换麦克风静音。", 32, 66, 4, 69]
    ],
    diagnosis: [
      ["耳机没有声音", ["确认当前使用 2.4GHz / 蓝牙 / 3.5 mm 哪种模式", "2.4GHz 检查接收器与默认输出设备", "蓝牙检查配对状态；有线检查插头完全插入"]],
      ["对方听不到我", ["拉出麦克风并靠近嘴部约 2 cm", "确认麦克风静音按钮未开启", "检查系统默认录音设备"]],
      ["杂音 / 断线 / 范围短", ["检查耳罩开孔是否堵塞并调整音量", "2.4GHz 接收器保持在 10 m 范围内", "蓝牙关闭其他干扰源", "3.5 mm 确认插头完全插入"]],
      ["灯不亮 / AWCC 不识别", ["3.5 mm 模式下按钮与 LED 不工作属于正常现象", "蓝牙模式无法使用 AWCC 功能", "AWCC 需通过 USB 无线接收器或 USB 数据线连接"]]
    ],
    firmware: [
      ["更新前检查", "保持耳机电量，退出其他耳麦或音频设备，优先完成三种模式交叉测试。"],
      ["下载工具", "进入 Dell 支持站点搜索 AW725H，下载耳机固件更新工具。"],
      ["同时连接设备", "使用 USB 数据线连接耳机，并把 USB-C 无线显示转换器/接收器插入电脑。"],
      ["识别设备", "打开更新工具，确认耳机与接收器均被识别。"],
      ["点击 Update", "等待更新完成，过程中不要断开设备或关闭工具。"],
      ["可解决问题", "2.4GHz 或蓝牙连接、AWCC 识别、音频异常、麦克风或按钮异常、兼容性与稳定性。"]
    ],
    source: [7, 8, 9]
  },
  aw620m: {
    name: "AW620M",
    type: "无线游戏鼠标",
    icon: "M",
    summary: "2.4GHz 无线与有线双模式，USB-C 充电，支持 DPI 快速调节和 AWCC 自定义。",
    image: "product/aw620m/views/view-1.webp",
    views: [
      "product/aw620m/views/view-1.webp",
      "product/aw620m/ai-generated/bottom.webp",
      "product/aw620m/views/view-2.webp",
      "product/aw620m/views/view-3.webp",
      "product/aw620m/views/view-4.webp"
    ],
    viewNames: ["正面（按键面）", "反面（底部）", "左侧（侧键）", "右后侧外观", "前端（USB-C）"],
    viewScales: [0.88, 1.08, 0.92, 0.92, 0.94],
    viewFeatures: {
      0: [[0, 40, 30, 9, 21], [1, 51, 25, 41, 8], [2, 62, 30, 76, 21], [3, 51, 36, 70, 39]],
      1: [[4, 62, 46, 74, 52]],
      2: [[6, 54, 43, 68, 31], [7, 61, 45, 76, 48]],
      3: [],
      4: [[5, 86, 52, 4, 73]]
    },
    imageScale: 0.8,
    facts: [["连接", "2.4GHz / 有线"], ["充电", "USB-C"], ["软件", "AWCC 自定义"]],
    features: [
      ["左键", "标准主按键。", 41, 29, 12, 22],
      ["滚轮", "滚动与中键操作。", 53, 25, 45, 8],
      ["右键", "标准副按键。", 64, 30, 75, 22],
      ["DPI 调整按钮", "快速切换 DPI 档位。", 54, 34, 72, 40],
      ["电源按钮", "底部电源开关。", 62, 46, 74, 52],
      ["USB-C 端口", "有线连接与充电。", 55, 11, 46, 3],
      ["前进键", "侧面前进按键。", 29, 52, 5, 48],
      ["后退键", "侧面后退按键。", 30, 60, 5, 60]
    ],
    diagnosis: [
      ["无法连接 / 无线使用", ["确认鼠标电源和电量", "无线模式更换 USB 端口并重插接收器", "有线模式更换 USB 线或端口", "重启电脑后重新连接"]],
      ["光标不动 / 乱跳 / 卡顿", ["清洁传感器底部", "更换鼠标垫或使用平滑干净表面", "远离干扰源并靠近接收器", "在另一台电脑测试"]],
      ["按键无反应 / 滚轮异常", ["检查按键和滚轮是否有异物", "在另一台设备复现", "检查 AWCC 设置", "更新驱动与固件"]],
      ["灯不亮 / AWCC 异常", ["确认电量或改用有线连接", "安装并运行 AWCC", "重启 AWCC 或电脑", "无线与有线模式交叉测试"]]
    ],
    firmware: [
      ["安装 AWCC", "未安装时从 Dell 支持网站或 Windows 更新完成安装。"],
      ["正确连接", "USB 接收器插入电脑，同时用 USB 线连接 AW620M。"],
      ["进入更新页面", "AWCC → AlienFX / Settings → Update。"],
      ["执行更新", "完成鼠标和接收器固件更新，过程中不要断开。"],
      ["可解决问题", "连接稳定性、卡顿跳帧、灯效/AWCC 配置、DPI/按键映射、功耗与兼容性。"],
      ["不能解决的问题", "外壳、进液、掉漆、接口损坏等物理损坏及明显脏污异物。"]
    ],
    source: [10, 11, 12]
  },
  aw510k: {
    name: "AW510K",
    type: "矮轴 RGB 机械游戏键盘",
    icon: "K",
    summary: "Cherry MX 矮轴红轴、AlienFX 单键 RGB、全尺寸布局、多媒体与音量控制、1000 Hz 轮询率。",
    image: "product/aw510k/ai-generated/front.webp",
    views: [
      "product/aw510k/ai-generated/front.webp",
      "product/aw510k/views/view-1.webp?v=2",
      "product/aw510k/ai-generated/bottom-feet.webp"
    ],
    viewNames: ["正面功能区", "侧后结构", "底部支撑脚"],
    viewScales: [0.96, 0.92, 0.96],
    viewFeatures: {
      0: [
        [0, 33, 51, 7, 45],
        [1, 37, 45, 7, 31],
        [2, 48, 50, 38, 72],
        [3, 43, 55, 36, 81],
        [4, 46, 33, 38, 19],
        [5, 82, 39, 72, 24],
        [6, 86, 54, 73, 73]
      ],
      1: [],
      2: [[7, 23, 37, 38, 25]]
    },
    imageScale: 0.94,
    facts: [["轴体", "Cherry MX 矮轴红轴"], ["灯效", "AlienFX 单键 RGB"], ["连接", "双 USB / AWCC"]],
    features: [
      ["浮键架构设计", "低矮浮键结构，便于清洁并突出 RGB 灯效。"],
      ["Cherry MX 矮轴红轴", "矮轴机械开关，触发行程短，输入更迅速。"],
      ["可编程按键 / 全键无冲突", "支持按键与宏自定义，并提供全键无冲突。"],
      ["AlienFX 每键 RGB 背光", "每个按键均可通过 AWCC 配置 RGB 灯效。"],
      ["编织线缆", "键盘后部双 USB 编织线缆，用于键盘连接与数据直通。"],
      ["多媒体键与音量控制", "右上区域提供独立多媒体键和音量滚轮。"],
      ["全尺寸键位布局", "包含导航区、方向键与数字小键盘。"],
      ["三角可调撑脚", "键盘底部撑脚支持三档高度调节。"]
    ],
    diagnosis: [
      ["键盘没反应", ["确认键盘 USB 已连接电脑 USB 3.0 端口", "更换 USB 端口测试", "重启电脑并重新连接", "确认数据与供电线正确连接"]],
      ["个别按键失灵 / 连击", ["检查是否有异物卡键", "轻按多次确认回弹手感", "关闭宏与自定义设置后测试", "记事本输入并换电脑复测"]],
      ["灯不亮 / 灯效异常", ["确认键盘已正常供电", "检查亮度和灯效开关", "打开 AWCC 检查 AlienFX 配置并保存", "重启 AWCC 或电脑", "必要时更新驱动或固件"]],
      ["多媒体键 / 音量异常", ["确认静音与音量加减是否生效", "检查系统默认播放设备", "在其他应用中测试", "重启系统并重新插拔键盘"]]
    ],
    firmware: [],
    source: [13, 14]
  },
  kb216: {
    name: "KB216",
    type: "有线键盘",
    icon: "K",
    summary: "Dell 有线多媒体键盘，全尺寸布局，USB 即插即用，适合日常办公、服务台和固定工位使用。",
    image: "product/kb216/ai-generated/front.webp",
    views: [
      "product/kb216/ai-generated/front.webp",
      "product/kb216/ai-views/bottom-reference.webp"
    ],
    viewNames: ["正面（AI 生成）", "反面（AI 补全参考）"],
    viewScales: [0.9, 1.0],
    viewFeatures: {
      0: [[0, 44, 57, 7, 66], [1, 61, 46, 68, 39], [2, 78, 57, 78, 74], [3, 54, 32, 63, 20], [4, 38, 54, 12, 47], [5, 51, 68, 10, 84]],
      1: [[3, 50, 24, 57, 18], [5, 50, 51, 60, 64]]
    },
    imageScale: 1.08,
    facts: [["连接", "USB-A 有线"], ["布局", "全尺寸键盘"], ["适用", "Windows / 日常办公"]],
    features: [
      ["全尺寸键位布局", "包含主键区、方向键、导航区和数字小键盘，适合高频录入与表格场景。", 49, 63, 6, 72],
      ["多媒体快捷键", "键盘顶部提供常用多媒体快捷功能，便于快速控制音量和播放。", 66, 58, 70, 43],
      ["数字小键盘", "右侧数字键区用于财务、报表和客服录入场景。", 78, 65, 73, 82],
      ["USB 连接线", "通过 USB-A 线缆连接电脑，无需单独配对或充电。", 52, 25, 60, 17],
      ["低轮廓按键", "低轮廓键帽兼顾手感和清洁便利，适合长时间办公输入。", 35, 64, 7, 46],
      ["薄型办公机身", "紧凑外壳便于桌面摆放，减少固定工位占用。", 51, 78, 7, 88]
    ],
    diagnosis: [
      ["键盘无反应", ["确认 USB 插头完全插入电脑接口", "更换 USB 端口，优先使用主机直连端口", "重启电脑并等待系统重新识别 HID 设备", "换到另一台电脑测试，区分电脑端与键盘端问题"]],
      ["个别按键失灵 / 连击", ["检查键帽周围是否有异物、灰尘或液体残留", "在记事本中连续测试问题按键", "关闭可能影响输入的第三方热键或宏软件", "跨设备仍复现时按硬件故障处理"]],
      ["快捷键 / 多媒体键异常", ["确认当前应用支持对应快捷键", "检查系统音量、静音和播放设备状态", "尝试 Fn 或多媒体键组合操作", "更新系统 HID 键盘驱动后重试"]],
      ["售后判断", ["线缆、USB 插头或外壳有明显损坏", "多设备测试仍完全无输入", "进液、异味、按键卡死或大面积失灵"]]
    ],
    firmware: [],
    source: [
      { src: "product/source/kb216-overview.webp", label: "KB216 功能与说明" },
      { src: "product/source/desktop-input-troubleshooting.webp", label: "键鼠常见问题诊断" }
    ]
  },
  ms116: {
    name: "MS116",
    type: "有线鼠标",
    icon: "M",
    summary: "Dell 有线光电鼠标，USB 即插即用，左右键、滚轮和光学追踪结构清晰，适合标准办公场景。",
    image: "product/ms116/ms116-product.webp",
    views: [
      "product/ms116/ai-views/top-reference.webp",
      "product/ms116/ms116-product.webp",
      "product/ms116/views/view-bottom.webp"
    ],
    viewNames: ["正面（AI 补全参考）", "侧面（PPT 原图）", "反面（Dell 支持实拍）"],
    viewScales: [0.86, 0.98, 1.02],
    viewFeatures: {
      0: [[0, 39, 39, 9, 26], [1, 50, 37, 39, 15], [2, 61, 39, 76, 26], [3, 50, 6, 61, 15]],
      1: [[0, 37, 47, 8, 34], [1, 44, 44, 12, 20], [2, 54, 45, 73, 25], [3, 17, 63, 6, 76], [5, 73, 54, 77, 69]],
      2: [[3, 6, 50, 5, 36], [4, 49, 49, 61, 40], [5, 54, 73, 69, 84]]
    },
    imageScale: 0.98,
    facts: [["连接", "USB-A 有线"], ["追踪", "光学传感器"], ["按键", "左右键 / 滚轮"]],
    features: [
      ["左键", "标准主按键，用于选择、拖拽和确认操作。", 37, 47, 8, 34],
      ["滚轮 / 中键", "滚动页面，按下可作为中键使用。", 44, 44, 12, 20],
      ["右键", "标准副按键，用于打开快捷菜单。", 54, 45, 73, 25],
      ["USB 连接线", "通过 USB-A 线缆连接电脑，插入后系统自动识别。", 17, 63, 6, 76],
      ["光学传感器", "底部传感器负责移动追踪，保持镜头清洁可减少光标漂移。", 59, 72, 67, 84],
      ["人体工学外形", "对称外形兼顾左右手操作，适合长时间办公。", 73, 54, 77, 69]
    ],
    diagnosis: [
      ["鼠标无反应", ["确认 USB 插头插紧并更换电脑 USB 端口", "观察系统是否识别为 HID 鼠标", "换到另一台电脑测试，排除主机端问题", "避免通过故障扩展坞或松动接口连接"]],
      ["光标不动 / 跳动", ["清洁鼠标底部光学传感器", "更换鼠标垫或使用平整、非反光表面", "检查线缆是否被拉扯或压住", "在另一台电脑复测定位硬件问题"]],
      ["按键或滚轮异常", ["检查按键缝隙和滚轮处是否有异物", "在系统设置中确认主副键没有被交换", "跨应用测试滚轮滚动与中键按压", "持续连击、卡键或无回弹时进入售后判断"]],
      ["售后判断", ["线缆、外壳、USB 端口或滚轮存在物理损坏", "多设备测试后仍无法识别", "进液、异味、明显摔损或按键结构异常"]]
    ],
    firmware: [],
    source: [
      { src: "product/source/ms116-overview.webp", label: "MS116 功能与说明" },
      { src: "product/source/desktop-input-troubleshooting.webp", label: "键鼠常见问题诊断" }
    ]
  },
  km5221w: {
    name: "KM5221W",
    type: "无线键鼠套装",
    icon: "K+M",
    summary: "Dell 专业无线键盘和鼠标套装，2.4GHz 接收器连接，包含全尺寸键盘、无线鼠标和 Dell Peripheral Manager 支持。",
    image: "product/km5221w/ai-generated/set.webp",
    views: [
      "product/km5221w/ai-generated/set.webp",
      "product/km5221w/ai-generated/keyboard.webp",
      "product/km5221w/ai-generated/underside.webp"
    ],
    viewNames: ["整套顶视（AI 生成）", "键盘顶视（AI 生成）", "底部 / 接收器（AI 生成）"],
    viewScales: [0.98, 0.98, 0.98],
    viewFeatures: {
      0: [[0, 40, 55, 7, 43], [2, 74, 56, 82, 47], [3, 75, 63, 82, 66], [7, 42, 68, 12, 78]],
      1: [[0, 43, 56, 7, 67], [1, 62, 47, 68, 35], [7, 50, 69, 18, 82]],
      2: [[4, 82, 57, 83, 72], [5, 45, 67, 50, 82], [6, 42, 36, 48, 20]]
    },
    imageScale: 1.0,
    facts: [["连接", "2.4GHz 无线接收器"], ["组合", "键盘 + 鼠标"], ["软件", "Dell Peripheral Manager"]],
    features: [
      ["全尺寸无线键盘", "包含数字小键盘和常用办公键区，适合桌面固定工位。", 38, 52, 6, 32],
      ["多媒体 / 快捷键区", "顶部快捷键可用于音量、播放和常用系统操作。", 62, 42, 69, 27],
      ["无线鼠标按键", "鼠标提供左右键和滚轮，满足标准办公点击、滚动和中键操作。", 73, 66, 78, 50],
      ["DPI / 指示控制", "鼠标支持灵敏度和状态相关控制，便于适配不同桌面表面。", 72, 72, 82, 67],
      ["鼠标底部开关", "底部电源开关用于开启、关闭或节省电量。", 77, 77, 78, 84],
      ["USB 无线接收器", "接收器插入电脑 USB-A 端口后连接键盘和鼠标。", 58, 68, 47, 82],
      ["电池仓", "键盘和鼠标均使用电池供电，低电量时应优先更换电池排查。", 32, 68, 7, 80],
      ["薄型办公机身", "低轮廓键盘和紧凑鼠标组合，便于桌面摆放。", 42, 73, 18, 84]
    ],
    diagnosis: [
      ["键盘或鼠标无法连接", ["确认 USB 接收器已插入电脑并靠近设备", "检查键盘、鼠标电源开关和电池方向", "更换新电池后重新测试", "更换 USB 端口或电脑进行交叉验证"]],
      ["输入延迟 / 断连", ["避免接收器被主机、显示器或金属物遮挡", "减少 2.4GHz 干扰源，必要时使用 USB 延长线靠近桌面", "确认电池电量充足", "重启电脑后重新识别接收器"]],
      ["按键、滚轮或光标异常", ["清洁鼠标传感器和键盘按键缝隙", "在系统设置中确认鼠标按键、指针速度和键盘布局", "关闭冲突的第三方键鼠管理软件", "使用 Dell Peripheral Manager 检查配置"]],
      ["售后判断", ["键盘和鼠标跨设备仍无法连接", "接收器遗失、损坏或接口变形", "存在进液、摔损、按键卡死或鼠标按键无回弹"]]
    ],
    firmware: [],
    source: [
      { src: "product/source/km5221w-overview.webp", label: "KM5221W 功能与说明" },
      { src: "product/source/desktop-input-troubleshooting.webp", label: "键鼠常见问题诊断" }
    ]
  },
  da326: {
    name: "DA326",
    type: "七合一 USB-C 移动适配器",
    icon: "HUB",
    summary: "Dell Pro 七合一 USB-C 移动适配器，集成 USB、网口、HDMI、DisplayPort 与 USB-C 供电，适合移动办公扩展。",
    image: "product/da326/da326-product.webp",
    views: [
      "product/da326/views/view-2.webp",
      "product/da326/views/view-1.webp",
      "product/da326/views/view-3.webp",
      "product/da326/views/view-4.webp",
      "product/da326/views/view-5.webp"
    ],
    viewNames: ["双 USB-A 面", "USB-C / DP 面", "网口 / 显示接口", "线缆 / USB-A 面", "顶部 RFID 区"],
    viewScales: [0.98, 0.98, 0.98, 0.86, 0.86],
    viewFeatures: {
      0: [[1, 14, 55, 7, 36], [3, 50, 59, 38, 82], [4, 88, 55, 74, 77]],
      1: [[2, 12, 55, 6, 75], [6, 50, 59, 38, 82]],
      2: [[5, 10, 54, 5, 74], [7, 50, 61, 39, 82], [6, 88, 57, 74, 78]],
      3: [[0, 35, 72, 7, 86], [3, 52, 57, 38, 82], [4, 86, 55, 74, 77]],
      4: [[8, 50, 52, 61, 70]]
    },
    imageScale: 1.04,
    facts: [["连接", "USB-C 上行"], ["扩展", "USB / RJ45 / DP / HDMI"], ["显示", "最高 4K60 级输出"]],
    features: [
      ["USB-C 上行线缆", "连接电脑的主线缆，负责数据、显示和供电协商。"],
      ["USB 3.2 Gen 2 USB-C 端口", "用于连接 USB-C 外设，支持高速数据传输。"],
      ["USB-C 电源输入", "连接 USB-C 电源适配器，为电脑提供电源直通。"],
      ["USB 3.2 Gen 2 USB-A 端口", "用于 U 盘、键鼠、移动硬盘等 USB-A 外设。"],
      ["USB 3.2 Gen 1 USB-A 端口", "用于键鼠、U 盘等常见 USB-A 外设连接。"],
      ["以太网端口", "RJ45 有线网络接口，适合会议室、工位和弱无线环境。"],
      ["DisplayPort 端口", "连接外接显示器或投影设备，支持高分辨率输出。"],
      ["HDMI 端口", "连接电视、显示器或会议投屏设备。"],
      ["RFID 标签预留位置", "顶部区域用于企业资产管理标签粘贴和识别。"]
    ],
    diagnosis: [
      ["适配器无反应", ["确认 USB-C 插头完全插入电脑", "检查电脑 USB-C 端口是否支持数据传输或视频输出", "去掉其他转接头，直接连接电脑测试", "重启电脑后重新插拔适配器"]],
      ["外接显示无画面", ["确认显示器输入源选择 HDMI 或 DisplayPort", "检查电脑 USB-C 端口是否支持 DP Alt Mode", "更换 HDMI / DP 线缆并降低刷新率测试", "只连接一台显示器确认基础输出"]],
      ["USB 外设或网口不可用", ["检查外设单独连接电脑是否正常", "RJ45 需确认网线、交换机端口和系统网络适配器状态", "移动硬盘供电不足时连接外部电源或减少同时接入设备", "更新系统芯片组、USB 和网卡驱动"]],
      ["PD 充电异常", ["使用原装或足功率 USB-C 电源适配器", "确认充电线支持对应功率", "部分主机或电源会扣除适配器自身功耗，实际入电脑功率会低于标称", "高温或满载时可能触发保护，冷却后再测试"]],
      ["售后判断", ["USB-C 线缆、接口或外壳存在明显损坏", "多台电脑测试均无法识别", "所有端口同时失效或设备异常发热"]]
    ],
    firmware: [],
    source: [
      { src: "product/source/da326-overview.webp", label: "DA326 功能与说明" },
      { src: "product/source/da326-troubleshooting.webp", label: "DA326 常见问题诊断" }
    ]
  }
};

const state = {
  product: new URLSearchParams(location.search).get("product") || "aw520h",
  section: "features",
  feature: 0,
  view: 0
};
if (!products[state.product]) state.product = "aw520h";
state.view = getDefaultView(products[state.product]);

const els = {
  switcher: document.getElementById("productSwitcher"),
  type: document.getElementById("productType"),
  count: document.getElementById("productCount"),
  name: document.getElementById("productName"),
  summary: document.getElementById("productSummary"),
  index: document.getElementById("productIndex"),
  image: document.getElementById("productImage"),
  rotationFrame: document.getElementById("rotationFrame"),
  viewBadge: document.getElementById("viewBadge"),
  stage: document.getElementById("productStage"),
  lines: document.getElementById("hotspotLines"),
  layer: document.getElementById("hotspotLayer"),
  viewSwitcher: document.getElementById("viewSwitcher"),
  stageHint: document.getElementById("stageHint"),
  facts: document.getElementById("quickFacts"),
  tabs: [...document.querySelectorAll(".section-tab")],
  kicker: document.getElementById("sectionKicker"),
  sectionTitle: document.getElementById("sectionTitle"),
  sectionDescription: document.getElementById("sectionDescription"),
  content: document.getElementById("sectionContent"),
  sourceButton: document.getElementById("sourceButton"),
  dialog: document.getElementById("sourceDialog"),
  dialogImage: document.getElementById("dialogImage"),
  dialogClose: document.getElementById("dialogClose")
};

function renderSwitcher() {
  if (els.count) els.count.textContent = `${Object.keys(products).length} PRODUCTS`;
  els.switcher.innerHTML = Object.entries(products).map(([key, product], index) => `
    <button class="product-chip ${key === state.product ? "active" : ""}" data-product="${key}" type="button">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div><strong>${product.name}</strong><small>${product.type}</small></div>
    </button>
  `).join("");
  els.switcher.querySelectorAll(".product-chip").forEach(button => {
    button.addEventListener("click", () => selectProduct(button.dataset.product));
  });
}

function selectProduct(key) {
  state.product = key;
  state.section = "features";
  state.feature = 0;
  state.view = getDefaultView(products[key]);
  const url = new URL(location.href);
  url.searchParams.set("product", key);
  history.replaceState({}, "", url);
  render();
}

function getRotationCols(product) {
  return product.rotation?.cols || product.rotation?.frames || 1;
}

function getRotationRows(product) {
  return product.rotation?.rows || 1;
}

function getDefaultView(product) {
  if (!product.rotation) return 0;
  return (product.rotation.initialRow || 0) * getRotationCols(product);
}

function getViews(product) {
  if (product.rotation) {
    return Array.from({ length: getRotationCols(product) * getRotationRows(product) }, (_, index) => product.views?.[index] || product.image);
  }
  return product.views || [product.image];
}

function getFramePosition(product) {
  const cols = getRotationCols(product);
  const rows = getRotationRows(product);
  const col = state.view % cols;
  const row = Math.floor(state.view / cols);
  return {
    x: cols <= 1 ? "0%" : `${(col / (cols - 1)) * 100}%`,
    y: rows <= 1 ? "0%" : `${(row / (rows - 1)) * 100}%`
  };
}

function getViewName(product, index = state.view) {
  if (!product.rotation) return product.viewNames?.[index] || "产品视图";
  const cols = getRotationCols(product);
  const col = index % cols;
  const row = Math.floor(index / cols);
  const rowName = product.rotation.rowNames?.[row] || `层级 ${row + 1}`;
  const colName = product.rotation.colNames?.[col] || `角度 ${col + 1}`;
  return `${rowName} · ${colName}`;
}

function syncFeatureCards() {
  els.content.querySelectorAll("[data-feature]").forEach(element => {
    element.classList.toggle("active", Number(element.dataset.feature) === state.feature);
  });
}

function renderProduct() {
  const product = products[state.product];
  const index = Object.keys(products).indexOf(state.product) + 1;
  els.type.textContent = `ALIENWARE ${product.type}`;
  els.name.textContent = product.name;
  els.summary.textContent = product.summary;
  els.index.textContent = `${String(index).padStart(2, "0")} / ${String(Object.keys(products).length).padStart(2, "0")}`;
  const views = getViews(product);
  const isRotation = Boolean(product.rotation);
  state.view = Math.min(state.view, views.length - 1);
  els.stage.classList.toggle("rotation-mode", isRotation);
  els.image.hidden = isRotation;
  els.rotationFrame.hidden = !isRotation;
  if (isRotation) {
    const framePosition = getFramePosition(product);
    els.rotationFrame.style.backgroundImage = `url("${product.rotation.sprite}")`;
    els.rotationFrame.style.setProperty("--frame-cols", getRotationCols(product));
    els.rotationFrame.style.setProperty("--frame-rows", getRotationRows(product));
    els.rotationFrame.style.setProperty("--frame-x", framePosition.x);
    els.rotationFrame.style.setProperty("--frame-y", framePosition.y);
    els.rotationFrame.style.transform = `scale(${product.viewScales?.[state.view] || product.imageScale || 1})`;
    els.rotationFrame.setAttribute("aria-label", `${product.name} ${product.type}`);
  } else {
    els.image.src = views[state.view];
  }
  els.image.alt = `${product.name} ${product.type}`;
  els.image.style.transform = `scale(${product.viewScales?.[state.view] || product.imageScale || 1})`;
  const currentViewName = getViewName(product);
  els.viewBadge.textContent = `${product.name} · ${currentViewName}`;
  els.viewBadge.hidden = views.length === 1;
  els.viewSwitcher.innerHTML = isRotation ? product.rotation.rowNames.map((name, row) => {
    const cols = getRotationCols(product);
    const currentRow = Math.floor(state.view / cols);
    const currentCol = state.view % cols;
    return `
    <button class="view-button ${row === currentRow ? "active" : ""}" data-view="${row * cols + currentCol}" type="button" title="${name}">
      ${name}
    </button>
  `;
  }).join("") : (views.length > 1 ? views.map((src, index) => `
    <button class="view-button ${index === state.view ? "active" : ""}" data-view="${index}" type="button">
      ${product.viewNames?.[index] || (index === 0 ? "功能" : `视角 ${index + 1}`)}
    </button>
  `).join("") : "");
  els.viewSwitcher.querySelectorAll(".view-button").forEach(button => {
    const viewIndex = Number(button.dataset.view);
    button.title = getViewName(product, viewIndex);
  });
  els.viewSwitcher.querySelectorAll(".view-button").forEach(button => {
    button.addEventListener("click", () => selectView(Number(button.dataset.view)));
  });
  els.stageHint.textContent = isRotation
    ? "左右拖动旋转；上下拖动看顶部 / 底部"
    : (views.length > 1 ? "点击编号；左右拖动切换视角" : "点击编号查看对应功能");
  els.facts.innerHTML = product.facts.map(([name, value]) => `<div class="fact"><strong>${name}</strong><span>${value}</span></div>`).join("");
}

function renderHotspots() {
  const product = products[state.product];
  const visible = state.section === "features";
  els.lines.innerHTML = "";
  els.layer.innerHTML = "";
  els.stage.classList.toggle("no-hotspots", !visible);
  if (!visible) return;

  const entries = product.viewFeatures
    ? (product.viewFeatures[state.view] || [])
    : product.features.map((feature, index) => [index, ...feature.slice(2)]);
  const availableIndexes = entries.map(([index]) => index);
  if (!entries.length) return;
  if (!availableIndexes.includes(state.feature)) state.feature = availableIndexes[0];

  entries.forEach(([index, x, y, lx = x, ly = y]) => {
    const feature = product.features[index];

    const button = document.createElement("button");
    button.className = `hotspot ${index === state.feature ? "active" : ""}`;
    button.dataset.feature = index;
    button.type = "button";
    button.style.setProperty("--x", `${x}%`);
    button.style.setProperty("--y", `${y}%`);
    button.textContent = index + 1;
    button.addEventListener("click", () => selectFeature(index, true));
    els.layer.appendChild(button);

    if (index !== state.feature) return;

    const label = document.createElement("button");
    label.className = "hotspot-label active";
    label.dataset.feature = index;
    label.type = "button";
    label.style.setProperty("--lx", `${lx}%`);
    label.style.setProperty("--ly", `${ly}%`);
    label.textContent = `${index + 1} · ${feature[0]}`;
    label.addEventListener("click", () => selectFeature(index, true));
    els.layer.appendChild(label);

    requestAnimationFrame(() => drawActiveLine(button, label, index));
  });
}

function drawActiveLine(button, label, index) {
  const stageRect = els.stage.getBoundingClientRect();
  const pointRect = button.getBoundingClientRect();
  const labelRect = label.getBoundingClientRect();
  const startX = ((pointRect.left + pointRect.width / 2 - stageRect.left) / stageRect.width) * 1000;
  const startY = ((pointRect.top + pointRect.height / 2 - stageRect.top) / stageRect.height) * 1000;
  const labelIsLeft = labelRect.left < pointRect.left;
  const endX = (((labelIsLeft ? labelRect.right : labelRect.left) - stageRect.left) / stageRect.width) * 1000;
  const endY = ((labelRect.top + labelRect.height / 2 - stageRect.top) / stageRect.height) * 1000;
  const elbowX = startX + (endX - startX) * 0.55;
  const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
  line.setAttribute("class", "hotspot-line active");
  line.dataset.feature = index;
  line.setAttribute("d", `M ${startX} ${startY} L ${elbowX} ${startY} L ${endX} ${endY}`);
  els.lines.replaceChildren(line);
}

function selectView(index, updateSection = true) {
  const product = products[state.product];
  const views = getViews(product);
  state.view = (index + views.length) % views.length;
  const entries = product.viewFeatures?.[state.view];
  if (entries?.length) state.feature = entries[0][0];
  renderProduct();
  if (updateSection) renderSection();
  else syncFeatureCards();
  renderHotspots();
}

function selectOrbitView(product, col, row, updateSection = true) {
  const cols = getRotationCols(product);
  const rows = getRotationRows(product);
  const nextCol = (col + cols) % cols;
  const nextRow = Math.max(0, Math.min(rows - 1, row));
  selectView(nextRow * cols + nextCol, updateSection);
}

function selectFeature(index, scroll = false) {
  const product = products[state.product];
  let viewChanged = false;
  if (product.viewFeatures) {
    const currentViewHasFeature = product.viewFeatures[state.view]
      ?.some(([featureIndex]) => featureIndex === index);
    const targetView = currentViewHasFeature ? null : Object.entries(product.viewFeatures)
      .find(([, entries]) => entries.some(([featureIndex]) => featureIndex === index));
    if (targetView && Number(targetView[0]) !== state.view) {
      state.view = Number(targetView[0]);
      viewChanged = true;
    }
  }
  state.feature = index;
  if (viewChanged) renderProduct();
  renderHotspots();
  syncFeatureCards();
  if (scroll) {
    const card = els.content.querySelector(`[data-feature="${index}"]`);
    if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function getFeatureViewName(product, featureIndex) {
  if (!product.viewFeatures) return "产品图";
  const match = Object.entries(product.viewFeatures)
    .find(([, entries]) => entries.some(([index]) => index === featureIndex));
  return match ? product.viewNames?.[Number(match[0])] || "产品图" : "产品图";
}

function renderFeatures(product) {
  els.kicker.textContent = "FUNCTIONS / CONTROLS";
  els.sectionTitle.textContent = `${product.name} 功能与部件`;
  els.sectionDescription.textContent = "点击左侧产品图上的编号，或点击下方功能卡片，查看对应物理位置与用途。";
  els.content.innerHTML = `<div class="content-list">${product.features.map((feature, index) => `
    <article class="content-card ${index === state.feature ? "active" : ""}" data-feature="${index}">
      <span class="feature-location">位置：${getFeatureViewName(product, index)}</span>
      <strong>${index + 1} · ${feature[0]}</strong>
      <p>${feature[1]}</p>
    </article>
  `).join("")}</div>`;
  els.content.querySelectorAll("[data-feature]").forEach(card => {
    card.addEventListener("click", () => selectFeature(Number(card.dataset.feature)));
  });
}

function renderDiagnosis(product) {
  els.kicker.textContent = "TROUBLESHOOTING / JD SCENARIOS";
  els.sectionTitle.textContent = `${product.name} 常见问题诊断`;
  els.sectionDescription.textContent = "按照“确认连接与正常限制 → 基础排查 → 交叉测试 → 售后判断”的顺序处理。";
  els.content.innerHTML = `<div class="content-list">${product.diagnosis.map(([title, bullets], index) => `
    <article class="content-card ${index === product.diagnosis.length - 1 ? "warning" : ""}">
      <strong>${String.fromCharCode(65 + index)} · ${title}</strong>
      <ul>${bullets.map(item => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("")}</div>`;
}

function renderFirmware(product) {
  els.kicker.textContent = "FIRMWARE UPDATE";
  els.sectionTitle.textContent = `${product.name} 固件更新`;
  if (!product.firmware.length) {
    els.sectionDescription.textContent = "本次 PPT 未提供该产品独立固件更新页。";
    els.content.innerHTML = `<div class="content-list"><article class="content-card warning"><strong>资料范围说明</strong><p>${product.name} 在本次资料中包含功能和诊断内容，没有独立固件更新页面。可优先通过 Dell 支持网站、Dell Peripheral Manager 或 AWCC 检查可用驱动、配置与更新。</p></article></div>`;
    return;
  }
  els.sectionDescription.textContent = "更新前保持设备供电与连接稳定，更新过程中不要拔出设备、关闭工具或切换连接模式。";
  els.content.innerHTML = `<div class="content-list">${product.firmware.map(([title, text], index) => `
    <article class="content-card ${index === product.firmware.length - 1 ? "success" : ""}">
      <span class="step-number">${index + 1}</span>
      <strong>${title}</strong>
      <p>${text}</p>
    </article>
  `).join("")}</div>`;
}

function openSource(src) {
  els.dialogImage.src = src;
  els.dialog.showModal();
}

function getSourcePage(page) {
  if (typeof page === "object") return page;
  return {
    src: `product/source/slide-${page}.webp`,
    label: `第 ${page} 页 · 点击放大`
  };
}

function renderSource(product) {
  els.kicker.textContent = "SOURCE DECK";
  els.sectionTitle.textContent = `${product.name} PPT 原始资料`;
  els.sectionDescription.textContent = "以下为演示文稿对应原页。点击页面可放大，结构化内容均依据这些原始资料整理。";
  els.content.innerHTML = `<div class="source-grid">${product.source.map(page => {
    const source = getSourcePage(page);
    return `
    <button class="source-page" data-src="${source.src}" type="button">
      <img src="${source.src}" alt="${source.label}">
      <span>${source.label}</span>
    </button>
  `;
  }).join("")}</div>`;
  els.content.querySelectorAll(".source-page").forEach(button => {
    button.addEventListener("click", () => openSource(button.dataset.src));
  });
}

function renderSection() {
  const product = products[state.product];
  els.tabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.section === state.section);
    tab.classList.toggle("disabled", tab.dataset.section === "firmware" && !product.firmware.length);
  });
  if (state.section === "features") renderFeatures(product);
  if (state.section === "diagnosis") renderDiagnosis(product);
  if (state.section === "firmware") renderFirmware(product);
  if (state.section === "source") renderSource(product);
}

function render() {
  renderSwitcher();
  renderProduct();
  renderHotspots();
  renderSection();
}

els.tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    state.section = tab.dataset.section;
    renderSection();
    renderHotspots();
  });
});
els.sourceButton.addEventListener("click", () => {
  state.section = "source";
  renderSection();
  renderHotspots();
});
els.dialogClose.addEventListener("click", () => els.dialog.close());
els.dialog.addEventListener("click", event => {
  if (event.target === els.dialog) els.dialog.close();
});

let dragStartX = null;
let dragStartY = null;
let dragStartView = 0;
function canDragStage(event) {
  if (event.button !== undefined && event.button !== 0) return false;
  if (event.target.closest("button, a, dialog")) return false;
  const product = products[state.product];
  return getViews(product).length > 1;
}
els.stage.addEventListener("pointerdown", event => {
  if (!canDragStage(event)) return;
  const product = products[state.product];
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  dragStartView = state.view;
  els.stage.classList.add("dragging");
  els.stage.setPointerCapture(event.pointerId);
  if (product.rotation) event.preventDefault();
});
els.stage.addEventListener("pointermove", event => {
  if (dragStartX === null || dragStartY === null) return;
  const product = products[state.product];
  if (!product.rotation) return;
  const cols = getRotationCols(product);
  const startCol = dragStartView % cols;
  const startRow = Math.floor(dragStartView / cols);
  const offsetCol = Math.trunc((dragStartX - event.clientX) / (product.rotation.dragStepX || product.rotation.dragStep || 28));
  const offsetRow = Math.trunc((event.clientY - dragStartY) / (product.rotation.dragStepY || 52));
  if (!offsetCol && !offsetRow) return;
  selectOrbitView(product, startCol + offsetCol, startRow + offsetRow, false);
});
els.stage.addEventListener("pointerup", event => {
  if (dragStartX === null || dragStartY === null) return;
  const distance = event.clientX - dragStartX;
  const product = products[state.product];
  dragStartX = null;
  dragStartY = null;
  els.stage.classList.remove("dragging");
  if (product.rotation || Math.abs(distance) < 45) return;
  selectView(state.view + (distance < 0 ? 1 : -1));
});
els.stage.addEventListener("pointercancel", () => {
  dragStartX = null;
  dragStartY = null;
  els.stage.classList.remove("dragging");
});

let lineResizeFrame;
new ResizeObserver(() => {
  cancelAnimationFrame(lineResizeFrame);
  lineResizeFrame = requestAnimationFrame(() => {
    const button = els.layer.querySelector(".hotspot.active");
    const label = els.layer.querySelector(".hotspot-label");
    if (button && label) drawActiveLine(button, label, Number(button.dataset.feature));
  });
}).observe(els.stage);

render();
