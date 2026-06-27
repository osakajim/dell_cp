// ============================================================
// data.js —  CP 配件数据定义
// 这里定义每个可交互部件的：名称、功能说明、使用方法、常见问题
// ============================================================

export const hotspotData = {
    // ---- 耳机接口 ----
    headset_jack: {
        name: "耳机接口 (Headset Jack)",
        desc: "3.5mm 标准音频接口，用于连接有线耳机或头戴式耳麦。支持音频输入/输出，兼容 CTIA 标准。",
        usage: [
            "将耳机 3.5mm 插头对准接口轻轻插入，听到「咔嗒」声表示到位。",
            "系统会自动识别耳机并切换音频输出。",
            "在系统「声音」设置中可调整输入/输出音量。",
            "拔出时握住插头根部，避免拉扯线缆。",
        ],
        troubleshoot: [
            {
                problem: "插入耳机后没有声音",
                solution: "检查系统音频输出设备是否已切换到耳机。右键任务栏音量图标 →「声音设置」→ 输出设备选择「扬声器/耳机」。"
            },
            {
                problem: "麦克风无法收音",
                solution: "确认耳机插头为 CTIA 四段式（三段式无麦克风）。在「声音设置」→「输入」中选择对应麦克风设备。"
            },
            {
                problem: "接触不良 / 声音断断续续",
                solution: "清洁接口内部灰尘；检查耳机插头是否完全插入；尝试更换耳机确认是否为接口硬件问题。"
            },
        ],
    },

    // ---- 音量旋钮 ----
    volume_knob: {
        name: "音量旋钮 (Volume Knob)",
        desc: "物理旋钮式音量控制器，顺时针旋转增大音量，逆时针减小。按下旋钮可快速静音/取消静音。",
        usage: [
            "顺时针旋转：增大音量，LED 指示灯随音量变化。",
            "逆时针旋转：减小音量。",
            "按下旋钮：切换静音状态（静音时 LED 闪烁）。",
            "旋钮支持无极旋转，手感阻尼适中。",
        ],
        troubleshoot: [
            {
                problem: "旋转旋钮音量无变化",
                solution: "检查操作系统音量是否被其他软件锁定；尝试重启音频服务（services.msc → Windows Audio → 重启）。"
            },
            {
                problem: "旋钮按下无法静音",
                solution: "旋钮的按下功能需要通过驱动支持。前往 Dell 官网下载最新 CP 配件驱动。"
            },
            {
                problem: "旋钮松动或旋转手感异常",
                solution: "如仍在保修期内，建议联系 Dell 售后更换。旋钮内部为编码器结构，不建议自行拆卸。"
            },
        ],
    },

    // ---- 自定义按键区 ----
    function_keys: {
        name: "自定义按键区 (Function Keys)",
        desc: "三颗可编程功能按键，通过 Dell Peripheral Manager 软件自定义功能，例如：启动特定应用、切换音频场景、发送快捷键组合。",
        usage: [
            "安装 Dell Peripheral Manager（Dell 官网可下载）。",
            "打开软件 → 选择 CP 设备 → 进入「按键自定义」。",
            "点击任意按键图标，在下拉菜单中选择希望绑定的功能。",
            "支持：启动程序、网页链接、快捷键、音频模式切换等。",
        ],
        troubleshoot: [
            {
                problem: "自定义按键无响应",
                solution: "确认 Dell Peripheral Manager 已安装并正在后台运行（任务栏可看到图标）。尝试重启软件。"
            },
            {
                problem: "按键功能与设置不符",
                solution: "进入 Dell Peripheral Manager 检查按键配置是否正确。新设置需要点击「应用」才会生效。"
            },
            {
                problem: "软件无法识别 CP 设备",
                solution: "重新插拔 USB 线缆；更换 USB 端口（优先使用主板直连端口）；重装 Dell Peripheral Manager。"
            },
        ],
    },

    // ---- USB-C 上行接口 ----
    usb_c_upstream: {
        name: "USB-C 上行接口",
        desc: "用于连接主机的 USB-C 接口，承担数据通信与供电。支持 USB 3.2 Gen2 10Gbps，兼容 Thunderbolt 3/4。",
        usage: [
            "使用附赠的 USB-C to USB-C 线缆连接主机。",
            "连接后 CP 面板自动上电，无需额外供电。",
            "如主机仅支持 USB-A，可使用 USB-A to USB-C 转接头（速率会降至 5Gbps）。",
            "支持热插拔，拔出前无需「安全弹出」。",
        ],
        troubleshoot: [
            {
                problem: "CP 面板无任何反应（无灯、无响应）",
                solution: "检查线缆是否完全插入；尝试更换 USB-C 端口；确认主机 USB-C 端口支持数据传输（部分设备仅支持充电）。"
            },
            {
                problem: "连接不稳定、间歇性断开",
                solution: "更换高质量 USB-C 线缆；避免使用延长线或 HUB；检查主机 USB 电源管理设置，关闭「允许计算机关闭此设备以节约电源」。"
            },
        ],
    },

    // ---- USB-A 下行接口 ----
    usb_a_downstream: {
        name: "USB-A 下行接口",
        desc: "两个 USB-A 3.2 Gen2 下行接口，用于连接外设（U 盘、键鼠、手机等），最高速率 10Gbps。",
        usage: [
            "直接插入 USB-A 设备即可使用。",
            "两个接口均支持 BC 1.2 快充协议，可为手机等设备充电。",
            "建议将高带宽设备（移动硬盘）连接到此处而非主机前面板。",
        ],
        troubleshoot: [
            {
                problem: "插入 U 盘无反应",
                solution: "确认 CP 面板与主机连接正常（上行口灯亮）；将 U 盘插入主机直连 USB 确认 U 盘正常；尝试更换接口。"
            },
            {
                problem: "传输速度慢",
                solution: "确认设备本身支持 USB 3.x 速率；检查线缆是否为 USB 3.0 规格；避免同时大量传输多个设备。"
            },
        ],
    },

    // ---- 状态显示屏 ----
    status_display: {
        name: "状态显示屏 (Status Display)",
        desc: "小型 LCD 屏幕，显示当前音量值、静音状态、当前音频模式等信息。亮度自适应环境光，强光照射时自动提亮。",
        usage: [
            "屏幕在 CP 上电后自动点亮。",
            "旋转音量旋钮时屏幕实时显示音量数值（0-100）。",
            "静音状态时屏幕显示「MUTE」图标。",
            "自定义按键切换音频模式时，屏幕显示对应模式名称（如 Music / Gaming / Voice）。",
        ],
        troubleshoot: [
            {
                problem: "屏幕不亮",
                solution: "确认 CP 已正常上电（其他指示灯亮）。如仅屏幕不亮，尝试重启计算机或重插 USB 线缆。"
            },
            {
                problem: "屏幕显示内容与实际不符",
                solution: "可能是固件版本过低。前往 Dell 官网下载最新固件并更新。"
            },
        ],
    },

    // ===== 预留：耳机模型 =====
    headset: {
        name: "耳机 (Headset)",
        desc: "【预留】配套无线耳机。支持 2.4GHz 低延迟无线连接 + 蓝牙 5.3，续航约 30 小时。将来接入耳机 3D 模型后，此区域展示耳机详细参数与使用指南。",
        usage: [
            "【预留步骤 1】充电：将耳机放入充电底座或使用 USB-C 线缆充电。",
            "【预留步骤 2】配对：长按电源键 3 秒进入配对模式。",
            "【预留步骤 3】切换：2.4GHz 模式下按连接键切换设备。",
        ],
        troubleshoot: [
            {
                problem: "【预留】耳机无法配对",
                solution: "待耳机模型接入后补充具体排查步骤。"
            },
            {
                problem: "【预留】声音延迟",
                solution: "待耳机模型接入后补充具体排查步骤。"
            },
        ],
    },

    // ===== 预留：充电底座 =====
    charging_dock: {
        name: "充电底座 (Charging Dock)",
        desc: "【预留】耳机配套充电底座，支持 Qi 无线充电。将耳机放置于底座上即可自动充电，底座 LED 显示充电状态。",
        usage: [
            "【预留步骤 1】将充电底座连接 USB-C 电源适配器。",
            "【预留步骤 2】将耳机放置在底座上，磁吸对准会自动吸附。",
            "【预留步骤 3】充电时底座 LED 为橙色，充满后变为绿色。",
        ],
        troubleshoot: [
            {
                problem: "【预留】耳机放上底座不充电",
                solution: "待充电底座模型接入后补充具体排查步骤。"
            },
        ],
    },
};

// 部件在 3D 空间中的位置定义（相对于 CP 模型中心，单位与模型尺度匹配）
// 这些位置用于放置热点标记（小球 + 标签）
export const hotspotPositions = {
    headset_jack:       { x: -0.55, y: 0.25, z: 0.35, color: "#4a9eff" },
    volume_knob:        { x: 0.55,  y: 0.25, z: 0.35, color: "#a0d0ff" },
    function_keys:      { x: 0.0,   y: -0.25, z: 0.45, color: "#ffb347" },
    usb_c_upstream:    { x: -0.55, y: -0.35, z: 0.35, color: "#40c880" },
    usb_a_downstream:   { x: 0.55,  y: -0.35, z: 0.35, color: "#40c880" },
    status_display:     { x: 0.0,   y: 0.5,   z: 0.40, color: "#ff6b6b" },
    headset:            { x: -1.2,  y: 0.0,   z: -0.2, color: "#c084fc" },
    charging_dock:      { x: 1.2,   y: -0.4,  z: -0.1, color: "#f0a040" },
};

// 热点分组（用于 UI 标记）
export const hotspotGroups = {
    "CP 本体": ["headset_jack", "volume_knob", "function_keys", "usb_c_upstream", "usb_a_downstream", "status_display"],
    "Alienware 配件": ["headset", "charging_dock"],
};
