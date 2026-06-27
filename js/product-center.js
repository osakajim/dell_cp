const products = {
  aw520h: {
    name: "AW520H",
    type: "有线游戏耳机",
    icon: "H",
    summary: "高解析音频认证驱动、Dolby Atmos、可伸缩麦克风，支持 USB Type-A 与 3.5 mm 连接。",
    image: "product/aw520h/aw520h-product.webp",
    views: ["product/aw520h/aw520h-product.webp"],
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
      "product/aw720m/views/view-1.webp",
      "product/aw720m/views/view-3.webp",
      "product/aw720m/views/view-bottom.webp"
    ],
    viewNames: ["正面（按键面）", "左侧（侧键）", "前端（接口）", "反面（底部）"],
    viewScales: [0.88, 0.9, 0.86, 1.02],
    viewFeatures: {
      0: [[0, 39, 32, 8, 25], [1, 50, 27, 40, 10], [2, 61, 32, 76, 25]],
      1: [[7, 20, 57, 5, 70], [8, 49, 43, 68, 32], [9, 55, 50, 73, 49]],
      2: [[7, 50, 64, 64, 78]],
      3: [[3, 31, 49, 5, 46], [4, 50, 68, 18, 80], [5, 50, 42, 61, 29], [6, 69, 49, 78, 60]]
    },
    imageScale: 0.78,
    facts: [["连接", "2.4GHz / 蓝牙 / 有线"], ["DPI", "800–3200 五档"], ["软件", "AWCC 自定义"]],
    features: [
      ["左键", "标准主按键。", 38, 30, 10, 26],
      ["滚轮", "滚动与中键操作。", 50, 27, 38, 10],
      ["右键", "标准副按键。", 62, 30, 73, 26],
      ["三模选择开关", "底部切换 2.4GHz、蓝牙或有线模式。", 37, 70, 7, 68],
      ["DPI 调整按钮", "底部切换五档 DPI。", 47, 73, 25, 84],
      ["DPI 指示器", "底部指示当前 DPI 档位。", 55, 72, 52, 86],
      ["电源按钮", "底部电源开关。", 64, 70, 72, 83],
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
      "product/aw725h/views/view-2.webp"
    ],
    viewNames: ["整体 / 麦克风", "左右耳罩控制区"],
    viewScales: [0.9, 0.9],
    viewFeatures: {
      0: [[3, 18, 82, 4, 88]],
      1: [
        [7, 36, 61, 5, 54],
        [6, 36, 70, 5, 68],
        [4, 36, 79, 5, 81],
        [5, 36, 85, 5, 89],
        [0, 65, 60, 78, 52],
        [1, 65, 67, 79, 65],
        [2, 65, 76, 78, 80]
      ]
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
      "product/aw620m/views/view-2.webp",
      "product/aw620m/views/view-bottom.webp"
    ],
    viewNames: ["正面（按键面）", "左侧（侧键）", "反面（底部）"],
    viewScales: [0.88, 0.92, 1.04],
    viewFeatures: {
      0: [[0, 40, 30, 9, 21], [1, 51, 25, 41, 8], [2, 62, 30, 76, 21], [3, 51, 36, 70, 39]],
      1: [[5, 18, 61, 4, 73], [6, 54, 43, 68, 31], [7, 61, 45, 76, 48]],
      2: [[4, 65, 48, 77, 61]]
    },
    imageScale: 0.8,
    facts: [["连接", "2.4GHz / 有线"], ["充电", "USB-C"], ["软件", "AWCC 自定义"]],
    features: [
      ["左键", "标准主按键。", 41, 29, 12, 22],
      ["滚轮", "滚动与中键操作。", 53, 25, 45, 8],
      ["右键", "标准副按键。", 64, 30, 75, 22],
      ["DPI 调整按钮", "快速切换 DPI 档位。", 54, 34, 72, 40],
      ["电源按钮", "底部电源开关。", 52, 72, 62, 85],
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
    image: "product/aw510k/views/view-top.webp?v=1",
    views: [
      "product/aw510k/views/view-top.webp?v=1",
      "product/aw510k/views/view-1.webp?v=2"
    ],
    viewNames: ["顶视功能区", "侧后结构"],
    viewScales: [0.96, 0.92],
    viewFeatures: {
      0: [
        [0, 18, 46, 4, 35],
        [1, 25, 52, 4, 49],
        [2, 23, 59, 4, 64],
        [3, 50, 58, 42, 73],
        [4, 49, 32, 42, 20],
        [5, 82, 40, 71, 24],
        [6, 88, 53, 77, 69]
      ],
      1: [[7, 66, 62, 74, 75]]
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
  }
};

const state = {
  product: new URLSearchParams(location.search).get("product") || "aw520h",
  section: "features",
  feature: 0,
  view: 0
};
if (!products[state.product]) state.product = "aw520h";

const els = {
  switcher: document.getElementById("productSwitcher"),
  type: document.getElementById("productType"),
  name: document.getElementById("productName"),
  summary: document.getElementById("productSummary"),
  index: document.getElementById("productIndex"),
  image: document.getElementById("productImage"),
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
  state.view = 0;
  const url = new URL(location.href);
  url.searchParams.set("product", key);
  history.replaceState({}, "", url);
  render();
}

function renderProduct() {
  const product = products[state.product];
  const index = Object.keys(products).indexOf(state.product) + 1;
  els.type.textContent = `ALIENWARE ${product.type}`;
  els.name.textContent = product.name;
  els.summary.textContent = product.summary;
  els.index.textContent = `${String(index).padStart(2, "0")} / ${String(Object.keys(products).length).padStart(2, "0")}`;
  const views = product.views || [product.image];
  state.view = Math.min(state.view, views.length - 1);
  els.image.src = views[state.view];
  els.image.alt = `${product.name} ${product.type}`;
  els.image.style.transform = `scale(${product.viewScales?.[state.view] || product.imageScale || 1})`;
  const currentViewName = product.viewNames?.[state.view] || "产品视图";
  els.viewBadge.textContent = `${product.name} · ${currentViewName}`;
  els.viewBadge.hidden = views.length === 1;
  els.viewSwitcher.innerHTML = views.length > 1 ? views.map((src, index) => `
    <button class="view-button ${index === state.view ? "active" : ""}" data-view="${index}" type="button">
      ${product.viewNames?.[index] || (index === 0 ? "功能" : `视角 ${index + 1}`)}
    </button>
  `).join("") : "";
  els.viewSwitcher.querySelectorAll(".view-button").forEach(button => {
    button.addEventListener("click", () => selectView(Number(button.dataset.view)));
  });
  els.stageHint.textContent = views.length > 1
    ? "点击编号；左右拖动切换视角"
    : "点击编号查看对应功能";
  els.facts.innerHTML = product.facts.map(([name, value]) => `<div class="fact"><strong>${name}</strong><span>${value}</span></div>`).join("");
}

function renderHotspots() {
  const product = products[state.product];
  const visible = state.section === "features";
  els.lines.innerHTML = "";
  els.layer.innerHTML = "";
  els.stage.classList.toggle("no-hotspots", !visible);
  if (!visible) return;

  const entries = product.viewFeatures?.[state.view]
    || product.features.map((feature, index) => [index, ...feature.slice(2)]);
  const availableIndexes = entries.map(([index]) => index);
  if (!availableIndexes.includes(state.feature)) state.feature = availableIndexes[0];

  entries.forEach(([index, x, y, lx, ly]) => {
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

function selectView(index) {
  const product = products[state.product];
  const views = product.views || [product.image];
  state.view = (index + views.length) % views.length;
  const entries = product.viewFeatures?.[state.view];
  if (entries?.length) state.feature = entries[0][0];
  renderProduct();
  renderSection();
  renderHotspots();
}

function selectFeature(index, scroll = false) {
  const product = products[state.product];
  let viewChanged = false;
  if (product.viewFeatures) {
    const targetView = Object.entries(product.viewFeatures)
      .find(([, entries]) => entries.some(([featureIndex]) => featureIndex === index));
    if (targetView && Number(targetView[0]) !== state.view) {
      state.view = Number(targetView[0]);
      viewChanged = true;
    }
  }
  state.feature = index;
  if (viewChanged) renderProduct();
  renderHotspots();
  els.content.querySelectorAll("[data-feature]").forEach(element => {
    element.classList.toggle("active", Number(element.dataset.feature) === index);
  });
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
    els.content.innerHTML = `<div class="content-list"><article class="content-card warning"><strong>资料范围说明</strong><p>AW510K 在 PPT 中包含功能和诊断内容，没有独立固件更新页面。可通过 AWCC 检查驱动、灯效配置与可用更新。</p></article></div>`;
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

function renderSource(product) {
  els.kicker.textContent = "SOURCE DECK";
  els.sectionTitle.textContent = `${product.name} PPT 原始资料`;
  els.sectionDescription.textContent = "以下为演示文稿对应原页。点击页面可放大，结构化内容均依据这些原始资料整理。";
  els.content.innerHTML = `<div class="source-grid">${product.source.map(page => `
    <button class="source-page" data-src="product/source/slide-${page}.webp" type="button">
      <img src="product/source/slide-${page}.webp" alt="PPT 第 ${page} 页" loading="lazy" decoding="async">
      <span>第 ${page} 页 · 点击放大</span>
    </button>
  `).join("")}</div>`;
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
els.image.addEventListener("pointerdown", event => {
  dragStartX = event.clientX;
  els.image.setPointerCapture(event.pointerId);
});
els.image.addEventListener("pointerup", event => {
  if (dragStartX === null) return;
  const distance = event.clientX - dragStartX;
  dragStartX = null;
  if (Math.abs(distance) < 45) return;
  selectView(state.view + (distance < 0 ? 1 : -1));
});
els.image.addEventListener("pointercancel", () => {
  dragStartX = null;
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
