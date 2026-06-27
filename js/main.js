var products = {
  headset: {
    label: "AW725H 耳机",
    title: "Alienware AW725H 耳机",
    desc: "2.4GHz 低延迟无线、Bluetooth 5.3、USB-C 有线三模连接，支持 Dolby Atmos、AI 降噪麦克风、AlienFX RGB 和固件更新。",
    visual: "image",
    views: [
      { src:"public/images/headset-right-front-mic-in.webp", label:"右前侧 麦克风收入", callouts:[
        { key:"power", label:"电源按钮", desc:"开关机、蓝牙配对", x:58,y:25, lx:78,ly:18 },
        { key:"volume", label:"音量控制轮", desc:"调节总音量", x:68,y:46, lx:78,ly:36 },
        { key:"balance", label:"游戏/聊天平衡", desc:"调整游戏和语音比例", x:54,y:38, lx:78,ly:54 },
        { key:"micarm", label:"伸缩式麦克风", desc:"拉出收音，收入静音", x:35,y:25, lx:8,ly:24 },
        { key:"usbc", label:"USB-C 充电端口", desc:"充电和 USB-C 有线连接", x:65,y:65, lx:78,ly:70 },
      ]},
      { src:"public/images/headset-right-front-mic-out.webp", label:"右前侧 麦克风拉出", callouts:[
        { key:"power", label:"电源按钮", desc:"长按开关机", x:57,y:24, lx:78,ly:18 },
        { key:"volume", label:"音量控制轮", desc:"上滚增大，下滚减小", x:67,y:45, lx:78,ly:36 },
        { key:"balance", label:"游戏/聊天平衡", desc:"上推游戏音，下推聊天音", x:53,y:37, lx:78,ly:54 },
        { key:"micarm", label:"伸缩式麦克风", desc:"距嘴约 2cm", x:28,y:18, lx:8,ly:15 },
        { key:"usbc", label:"USB-C 充电端口", desc:"支持充电", x:64,y:64, lx:78,ly:70 },
      ]},
      { src:"public/images/headset-left.webp", label:"左侧", callouts:[
        { key:"micarm", label:"伸缩式麦克风", desc:"收入自动静音", x:60,y:22, lx:78,ly:18 },
        { key:"led", label:"LED 指示灯", desc:"电源、电量和充电状态", x:52,y:40, lx:78,ly:36 },
        { key:"jack", label:"3.5mm 音频端口", desc:"连接内联音频线", x:56,y:60, lx:78,ly:54 },
        { key:"mute", label:"麦克风静音按钮", desc:"麦克风伸出时有效", x:48,y:52, lx:78,ly:70 },
      ]},
      { src:"public/images/headset-back.webp", label:"后侧", callouts:[] },
      { src:"public/images/headset-mic-detail.webp", label:"麦克风细节", callouts:[
        { key:"micarm", label:"伸缩式麦克风", desc:"拉出收音，收入静音", x:45,y:48, lx:72,ly:48 },
      ]},
    ],
    features: {
      "tri-mode": { title:"Tri-Mode 连接", desc:"2.4GHz 无线、Bluetooth 5.3、USB-C 有线三种连接方式。", steps:[
        "2.4GHz：插入 USB-C 无线适配器，开机后自动连接，适合游戏低延迟场景。",
        "Bluetooth：长按电源键进入配对，系统蓝牙列表选择 AW725H。",
        "USB-C 有线：使用 USB-C 线连接电脑，可边用边充。",
        "3.5mm 内联线：连接 PlayStation、Xbox、手机等模拟音频设备。"
      ]},
      dolby: { title:"Dolby Atmos 空间音效", desc:"通过 Dolby Access 激活耳机空间音效。", steps:[
        "安装并打开 Dolby Access。",
        "连接 AW725H 后确认应用识别到耳机。",
        "在 Windows 空间音效中选择 Dolby Atmos for Headphones。",
        "按游戏、电影或音乐场景选择对应预设。"
      ]},
      "ai-mic": { title:"AI 降噪麦克风", desc:"伸缩式麦克风配合降噪算法，过滤键盘、人声背景和环境噪声。", steps:[
        "将麦克风完全拉出并放在距嘴约 2cm 的位置。",
        "麦克风收入时自动静音，静音按钮此时不生效。",
        "静音按钮红灯亮表示麦克风处于静音。",
        "在 Alienware Command Center 中调整降噪和麦克风相关设置。"
      ]},
      rgb: { title:"AlienFX RGB 灯效", desc:"通过 AWCC 管理灯效、颜色和亮度。", steps:[
        "打开 Alienware Command Center。",
        "选择 AW725H 设备页。",
        "进入 AlienFX 灯效设置。",
        "选择颜色、呼吸、渐变等效果；使用 3.5mm 内联线时灯效可能不显示。"
      ]},
      controls: { title:"按键和接口", desc:"耳机上的每个按钮和接口都有独立用途，标注点会指向对应说明。", steps:[
        "电源按钮：开关机和蓝牙配对。",
        "音量控制轮：调节总音量。",
        "游戏/聊天平衡：改变游戏音和聊天音比例。",
        "静音按钮：麦克风伸出时切换静音。",
        "USB-C 与 3.5mm：分别用于充电/有线连接和模拟音频连接。"
      ]},
      firmware: { title:"固件更新", desc:"耳机和无线适配器都可能需要固件更新。", steps:[
        "首选方法：连接耳机和 2.4GHz 无线适配器，打开 Alienware Command Center，进入 AW725H 设备页，按提示更新固件。",
        "支持网站方法：进入 Dell 支持网站，搜索 AW725H，下载适用于该型号的固件或驱动更新工具。",
        "更新前确认耳机电量充足，更新中不要拔掉适配器、USB 线或关闭电脑。",
        "更新完成后重启 AWCC，必要时重新插拔无线适配器并重新配对。"
      ]}
    },
    scenes: {
      connect: { title:"连接问题排查", desc:"2.4GHz 断连、蓝牙配对失败或有线无响应。", steps:[
        "确认无线适配器直连电脑，不优先使用扩展坞或无源 HUB。",
        "让适配器远离路由器、金属遮挡和高干扰 USB 设备。",
        "蓝牙配对失败时，清除系统中旧的 AW725H 记录后重新配对。",
        "USB-C 有线连接无响应时换线、换端口，并确认端口支持数据。"
      ]},
      audio: { title:"声音异常排查", desc:"无声、声音不平衡、音质差或 Dolby 无效果。", steps:[
        "Windows 输出设备选择 AW725H Game，通讯设备选择 AW725H Chat。",
        "检查应用内输出设备，会议软件可能独立保存音频设备。",
        "使用 3.5mm 内联线时确认插头完全插入。",
        "Dolby 无效果时确认 Dolby Access 已识别设备并已启用空间音效。"
      ]},
      battery: { title:"电池和充电", desc:"充电、低电量提示、续航和边充边用。", steps:[
        "首次使用建议充满电。",
        "低电量时 LED 会以琥珀色提示。",
        "充电时保持线缆连接稳定，不要在高温环境下充电。",
        "如果电池状态异常，先更新固件，再观察一次完整充放电循环。"
      ]},
      mic: { title:"麦克风问题", desc:"对方听不到、声音小、噪声大或静音状态不对。", steps:[
        "确认麦克风杆完全拉出并靠近嘴边。",
        "检查静音按钮红灯；红灯亮表示静音。",
        "Windows 输入设备选择 AW725H Chat。",
        "会议软件里单独确认输入设备和降噪设置。"
      ]},
      awcc: { title:"AWCC 识别问题", desc:"Alienware Command Center 无法识别耳机或设置不生效。", steps:[
        "确认耳机已经通过无线适配器或 USB-C 连接到电脑。",
        "关闭并重新打开 AWCC。",
        "重新插拔无线适配器并重启耳机。",
        "仍无法识别时，更新 AWCC、相关组件和耳机固件。"
      ]},
      firmware: { title:"固件更新失败", desc:"更新卡住、失败或更新后设备异常。", steps:[
        "重新连接耳机、无线适配器和 USB 线，避免通过扩展坞更新。",
        "关闭会议软件、游戏和音频占用程序后重试。",
        "用 Dell 支持网站下载的固件工具重试。",
        "更新后重新配对无线适配器，并检查 AWCC 是否显示新版本。"
      ]}
    },
    usage: [
      "2.4GHz：插入 USB-C 无线适配器，开机即连，适合低延迟游戏。",
      "Bluetooth：进入系统蓝牙设置，选择 AW725H 配对。",
      "USB-C：用 USB-C 线连接电脑，可进行有线音频和充电。",
      "3.5mm：插入内联音频线，兼容主机、手机等设备。",
      "Dolby Atmos：安装 Dolby Access 并启用 Windows 空间音效。",
      "固件更新：通过 AWCC 或 Dell 支持网站完成耳机和适配器固件更新。"
    ],
    guides: [
      { id:"power", label:"电源按钮", pos:"右耳罩外侧上部", func:"长按开关机；进入蓝牙配对。", usage:"断开连接一段时间后耳机会自动关机，重新按电源键开机。" },
      { id:"volume", label:"音量控制轮", pos:"右耳罩后侧", func:"向上滚动增大音量，向下滚动减小音量。", usage:"建议保持系统音量较高，再用耳机控制轮微调。" },
      { id:"balance", label:"游戏/聊天平衡按钮", pos:"右耳罩外侧", func:"调整游戏音和聊天音之间的比例。", usage:"上推偏向游戏音，下推偏向聊天音。" },
      { id:"micarm", label:"伸缩式麦克风", pos:"左耳罩前方", func:"拉出使用，收入自动静音。", usage:"收音时让麦克风距嘴约 2cm。" },
      { id:"usbc", label:"USB-C 充电端口", pos:"右耳罩底部", func:"充电和 USB-C 有线连接。", usage:"更新固件或长时间使用时优先保持电量充足。" },
      { id:"led", label:"LED 指示灯", pos:"左耳罩外侧", func:"显示电源、电量、充电和状态。", usage:"低电量、充电和充满状态会有不同灯效提示。" },
      { id:"jack", label:"3.5mm 音频端口", pos:"左耳罩底部", func:"连接内联音频线。", usage:"用于主机、手机或其他模拟音频设备。" },
      { id:"mute", label:"麦克风静音按钮", pos:"左耳罩外侧", func:"切换麦克风静音。", usage:"麦克风伸出时有效；红灯亮表示静音。" }
    ]
  },
  cp: {
    label: "Dell CP 面板",
    title: "Dell CP 控制面板",
    desc: "面向外设连接、音频控制和快捷操作的 CP 面板。这里按接口和功能区拆分，避免把耳机功能误指到 CP 本体上。",
    visual: "diagram",
    diagram: "cp",
    views: [
      { label:"CP 正面", callouts:[
        { key:"status_display", label:"状态显示屏", desc:"显示音量、静音和模式", x:50,y:28, lx:70,ly:18 },
        { key:"volume_knob", label:"音量旋钮", desc:"旋转调节音量，按下静音", x:70,y:43, lx:76,ly:42 },
        { key:"function_keys", label:"自定义按键区", desc:"绑定应用、快捷键或音频模式", x:50,y:60, lx:70,ly:66 },
        { key:"headset_jack", label:"耳机接口", desc:"3.5mm 音频输入输出", x:27,y:43, lx:7,ly:34 },
        { key:"usb_c_upstream", label:"USB-C 上行", desc:"连接主机", x:34,y:74, lx:7,ly:72 },
        { key:"usb_a_downstream", label:"USB-A 下行", desc:"连接 U 盘、键鼠等外设", x:66,y:74, lx:68,ly:82 },
      ]}
    ],
    features: {
      headset_jack: { title:"耳机接口", desc:"3.5mm 标准音频接口，用于连接有线耳机或耳麦。", steps:[
        "插入 CTIA 标准 3.5mm 耳机或耳麦。",
        "系统自动切换音频输入/输出后，在声音设置中确认设备。",
        "拔出时握住插头根部，避免拉扯线缆。",
        "如果麦克风无效，确认耳机为四段式插头。"
      ]},
      volume_knob: { title:"音量旋钮", desc:"物理旋钮控制音量，部分机型支持按下静音。", steps:[
        "顺时针旋转增大音量，逆时针旋转减小音量。",
        "按下旋钮可切换静音，具体取决于驱动和设备支持。",
        "如果音量无变化，检查系统音量、默认播放设备和驱动状态。"
      ]},
      function_keys: { title:"自定义按键区", desc:"通过 Dell Peripheral Manager 配置快捷操作。", steps:[
        "安装并打开 Dell Peripheral Manager。",
        "选择 CP 设备，进入按键自定义。",
        "为按键绑定启动应用、网页、快捷键或音频模式。",
        "修改后点击应用，并确认软件后台运行。"
      ]},
      usb_c_upstream: { title:"USB-C 上行接口", desc:"用于连接主机，承担数据通信与供电。", steps:[
        "使用 USB-C 数据线连接电脑。",
        "确认电脑 USB-C 端口支持数据传输。",
        "如使用 USB-A 转接头，速率可能降低。",
        "连接不稳定时换线、换端口并关闭 USB 省电。"
      ]},
      usb_a_downstream: { title:"USB-A 下行接口", desc:"连接 U 盘、键盘、鼠标、手机等外设。", steps:[
        "直接插入 USB-A 外设。",
        "高带宽设备优先连接到高速接口。",
        "传输慢时检查设备和线缆是否支持 USB 3.x。",
        "多个设备同时传输会共享带宽。"
      ]},
      status_display: { title:"状态显示屏", desc:"显示音量值、静音状态和音频模式。", steps:[
        "CP 上电后屏幕自动点亮。",
        "旋转音量旋钮时显示音量变化。",
        "静音时显示对应提示。",
        "显示异常时优先更新固件并重新插拔设备。"
      ]},
      firmware: { title:"CP 固件更新", desc:"CP 面板固件通过 Dell 软件或支持网站更新。", steps:[
        "将 CP 面板直接连接到电脑，避免通过扩展坞或无源 HUB 更新。",
        "打开 Dell Peripheral Manager，选择 CP 设备，查看是否出现固件更新提示。",
        "如果软件没有提示，进入 Dell 支持网站，按服务标签或型号下载固件、驱动或 DPM 更新包。",
        "更新期间不要拔掉 USB-C 线或关闭电脑；完成后重新插拔 CP 面板并确认版本。"
      ]}
    },
    scenes: {
      power: { title:"CP 无反应", desc:"无灯、无屏幕、系统不识别。", steps:[
        "确认 USB-C 线完全插入 CP 和电脑。",
        "更换支持数据传输的 USB-C 线。",
        "换电脑直连 USB-C 端口，不通过 HUB。",
        "检查设备管理器和 Dell Peripheral Manager 是否识别设备。"
      ]},
      audio: { title:"音频接口异常", desc:"耳机无声、麦克风无输入或接触不良。", steps:[
        "确认 3.5mm 插头完全插入。",
        "检查系统输出和输入设备是否切到 CP 对应音频设备。",
        "确认耳麦插头标准兼容。",
        "更换耳机测试是否为耳机或线材问题。"
      ]},
      usb: { title:"USB 外设异常", desc:"U 盘不识别、键鼠断连或传输慢。", steps:[
        "确认 CP 上行接口已连接主机。",
        "将外设插到电脑直连口排除外设故障。",
        "使用高质量 USB 线并避免延长线。",
        "关闭 USB 选择性暂停或省电设置。"
      ]},
      keys: { title:"自定义按键异常", desc:"按键无响应或绑定不生效。", steps:[
        "确认 Dell Peripheral Manager 正在后台运行。",
        "重新进入按键自定义页面，确认配置已保存。",
        "更新 DPM 和 CP 固件后重试。",
        "如果单个按键无响应，记录按键位置并走硬件检测。"
      ]},
      firmware: { title:"固件更新异常", desc:"软件找不到更新、更新失败或更新后仍异常。", steps:[
        "用电脑直连 CP，不使用扩展坞。",
        "关闭占用设备的软件后重新打开 Dell Peripheral Manager。",
        "从 Dell 支持网站下载对应型号固件更新包手动执行。",
        "更新后断电重连 CP，并再次检查设备版本。"
      ]}
    },
    usage: [
      "用 USB-C 上行线连接 CP 面板和电脑。",
      "将耳机、U 盘、键鼠等外设连接到对应接口。",
      "用音量旋钮和自定义按键完成常用音频或快捷操作。",
      "用 Dell Peripheral Manager 配置按键、检查设备状态并执行固件更新。"
    ],
    guides: []
  }
};

products.cp.guides = Object.keys(products.cp.features)
  .filter(function(key) { return key !== "firmware"; })
  .map(function(key) {
    var item = products.cp.features[key];
    return { id:key, label:item.title, pos:"CP 面板", func:item.desc, usage:item.steps.join(" ") };
  });

var currentProductKey = "headset";
var currentView = 0;
var currentManual = "overview";

var productSwitcher = document.getElementById("product-switcher");
var thumbs = document.getElementById("thumbs");
var productImg = document.getElementById("product-img");
var productDiagram = document.getElementById("product-diagram");
var calloutSvg = document.getElementById("callout-svg");
var featureRow = document.getElementById("feature-row");
var sceneRow = document.getElementById("scene-row");
var manualRow = document.getElementById("manual-row");
var detailTitle = document.getElementById("detail-title");
var detailDesc = document.getElementById("detail-desc");
var detailSteps = document.getElementById("detail-steps");
var manualTitle = document.getElementById("manual-title");
var manualDesc = document.getElementById("manual-desc");
var manualContent = document.getElementById("manual-content");

var manualTabs = [
  { key:"overview", label:"产品概览" },
  { key:"usage", label:"使用方法" },
  { key:"troubleshoot", label:"常见问题" },
  { key:"guides", label:"按钮/接口" },
  { key:"firmware", label:"固件更新" }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function(ch) {
    return { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch];
  });
}

function getProduct() {
  return products[currentProductKey];
}

function renderButtons(container, items, className, activeKey) {
  container.innerHTML = items.map(function(item) {
    var active = item.key === activeKey ? " active" : "";
    return '<button class="' + className + active + '" data-key="' + item.key + '">' + escapeHtml(item.label) + '</button>';
  }).join("");
}

function renderProductSwitcher() {
  renderButtons(productSwitcher, Object.keys(products).map(function(key) {
    return { key:key, label:products[key].label };
  }), "product-btn", currentProductKey);
}

function renderThumbs() {
  var product = getProduct();
  thumbs.innerHTML = product.views.map(function(view, index) {
    var active = index === currentView ? " active" : "";
    var image = view.src ? '<img src="' + escapeHtml(view.src) + '" alt="' + escapeHtml(view.label) + '">' : '<span>' + escapeHtml(view.label) + '</span>';
    return '<button class="thumb' + active + '" data-view="' + index + '">' + image + '</button>';
  }).join("");
}

function renderDiagram() {
  var product = getProduct();
  if (product.visual !== "diagram") {
    productDiagram.innerHTML = "";
    productDiagram.hidden = true;
    productImg.hidden = false;
    return;
  }
  productImg.hidden = true;
  productDiagram.hidden = false;
  productDiagram.innerHTML = '<div class="cp-device">' +
    '<div class="cp-display">VOL 42</div>' +
    '<div class="cp-jack"></div>' +
    '<div class="cp-knob"></div>' +
    '<div class="cp-keys"><span></span><span></span><span></span></div>' +
    '<div class="cp-port cp-usbc"></div>' +
    '<div class="cp-port cp-usba"></div>' +
    '</div>';
}

function renderFeatureButtons(activeKey) {
  var product = getProduct();
  renderButtons(featureRow, Object.keys(product.features).map(function(key) {
    return { key:key, label:product.features[key].title };
  }), "func-btn", activeKey);
}

function renderSceneButtons(activeKey) {
  var product = getProduct();
  renderButtons(sceneRow, Object.keys(product.scenes).map(function(key) {
    return { key:key, label:product.scenes[key].title.replace("排查", "") };
  }), "scene-btn", activeKey);
}

function renderManualButtons() {
  renderButtons(manualRow, manualTabs, "manual-btn", currentManual);
}

function renderSteps(steps) {
  detailSteps.innerHTML = steps.map(function(step) {
    return "<li>" + escapeHtml(step) + "</li>";
  }).join("");
}

function showDetail(type, key) {
  var product = getProduct();
  var data = type === "scene" ? product.scenes[key] : product.features[key];
  if (!data) return;
  detailTitle.textContent = data.title;
  detailDesc.textContent = data.desc;
  renderSteps(data.steps || []);
  renderFeatureButtons(type === "feature" ? key : "");
  renderSceneButtons(type === "scene" ? key : "");
}

function renderCallouts() {
  var product = getProduct();
  var view = product.views[currentView];
  var w = calloutSvg.clientWidth;
  var h = calloutSvg.clientHeight;
  var isMobile = w < 820;
  var html = "";
  calloutSvg.setAttribute("viewBox", "0 0 " + w + " " + h);
  (view.callouts || []).forEach(function(callout) {
    var dx = callout.x / 100 * w;
    var dy = callout.y / 100 * h;
    var lx = callout.lx / 100 * w;
    var ly = callout.ly / 100 * h;
    var labelWidth = Math.max(callout.label.length * (isMobile ? 10 : 12) + 18, isMobile ? 64 : 70);
    var labelHeight = isMobile ? 22 : 24;
    var gap = isMobile ? 6 : 8;
    var lxStart = lx + gap;
    if (lxStart + labelWidth > w - gap) lxStart = lx - labelWidth - gap;
    lxStart = Math.max(gap, Math.min(lxStart, w - labelWidth - gap));
    var lyStart = Math.max(gap, Math.min(ly - labelHeight / 2, h - labelHeight - gap));
    html += '<line class="callout-line" x1="' + dx + '" y1="' + dy + '" x2="' + lx + '" y2="' + ly + '"/>';
    html += '<circle class="callout-dot" data-key="' + escapeHtml(callout.key) + '" cx="' + dx + '" cy="' + dy + '" r="' + (isMobile ? 6 : 8) + '"><title>' + escapeHtml(callout.label + ": " + callout.desc) + '</title></circle>';
    html += '<rect class="callout-label-bg" x="' + lxStart + '" y="' + lyStart + '" width="' + labelWidth + '" height="' + labelHeight + '"/>';
    html += '<text class="callout-label-text" x="' + (lxStart + 5) + '" y="' + (lyStart + labelHeight / 2) + '" font-size="' + (isMobile ? 10 : 11) + '">' + escapeHtml(callout.label) + '</text>';
  });
  calloutSvg.innerHTML = html;
}

function switchView(index) {
  var product = getProduct();
  currentView = index;
  renderThumbs();
  if (product.visual === "image") productImg.src = product.views[index].src;
  renderDiagram();
  setTimeout(renderCallouts, 40);
}

function renderList(items) {
  return '<ol class="manual-list">' + items.map(function(item) {
    return '<li>' + escapeHtml(item) + '</li>';
  }).join("") + '</ol>';
}

function renderCards(items) {
  return '<div class="manual-cards">' + items.map(function(item) {
    return '<article class="manual-card"><h4>' + escapeHtml(item.title || item.problem || item.label) + '</h4><p>' + escapeHtml(item.desc || item.solution || item.func) + '</p></article>';
  }).join("") + '</div>';
}

function renderGuides(selectedKey) {
  var product = getProduct();
  return '<div class="button-guide">' + product.guides.map(function(item) {
    var selected = item.id === selectedKey ? " selected" : "";
    return '<article class="button-item' + selected + '">' +
      '<div class="button-item-title">' + escapeHtml(item.label) + '</div>' +
      '<div class="button-item-meta">' + escapeHtml(item.pos) + '</div>' +
      '<p>' + escapeHtml(item.func) + '</p>' +
      '<p class="button-item-usage">' + escapeHtml(item.usage) + '</p>' +
    '</article>';
  }).join("") + '</div>';
}

function renderGallery() {
  var product = getProduct();
  if (product.visual !== "image") {
    return renderCards(Object.keys(product.features).filter(function(key) {
      return key !== "firmware";
    }).map(function(key) {
      return { title:product.features[key].title, desc:product.features[key].desc };
    }));
  }
  return '<div class="manual-gallery">' + product.views.filter(function(view) {
    return view.src;
  }).map(function(view) {
    return '<figure><img src="' + escapeHtml(view.src) + '" alt="' + escapeHtml(view.label) + '"><figcaption>' + escapeHtml(view.label) + '</figcaption></figure>';
  }).join("") + '</div>';
}

function showManual(key, selectedGuideKey) {
  var product = getProduct();
  currentManual = key;
  renderManualButtons();
  if (key === "usage") {
    manualTitle.textContent = "使用方法";
    manualDesc.textContent = "按当前产品整理的连接、配置和日常使用步骤。";
    manualContent.innerHTML = renderList(product.usage);
    return;
  }
  if (key === "troubleshoot") {
    manualTitle.textContent = "常见问题";
    manualDesc.textContent = "当前产品的故障定位和处理顺序。";
    manualContent.innerHTML = renderCards(Object.keys(product.scenes).map(function(sceneKey) {
      return { title:product.scenes[sceneKey].title, desc:product.scenes[sceneKey].steps.join(" ") };
    }));
    return;
  }
  if (key === "guides") {
    manualTitle.textContent = currentProductKey === "headset" ? "按钮功能" : "接口功能";
    manualDesc.textContent = "点击左侧标注点会自动定位到对应说明。";
    manualContent.innerHTML = renderGuides(selectedGuideKey);
    return;
  }
  if (key === "firmware") {
    manualTitle.textContent = "固件更新方法";
    manualDesc.textContent = product.features.firmware.desc;
    manualContent.innerHTML = renderList(product.features.firmware.steps);
    return;
  }
  manualTitle.textContent = product.title;
  manualDesc.textContent = product.desc;
  manualContent.innerHTML = renderGallery();
}

function switchProduct(key) {
  if (!products[key]) return;
  currentProductKey = key;
  currentView = 0;
  currentManual = "overview";
  renderProductSwitcher();
  renderFeatureButtons("");
  renderSceneButtons("");
  renderManualButtons();
  switchView(0);
  showDetail("feature", Object.keys(getProduct().features)[0]);
  showManual("overview");
}

productSwitcher.addEventListener("click", function(event) {
  var button = event.target.closest("button[data-key]");
  if (button) switchProduct(button.dataset.key);
});

thumbs.addEventListener("click", function(event) {
  var button = event.target.closest("button[data-view]");
  if (button) switchView(parseInt(button.dataset.view, 10));
});

featureRow.addEventListener("click", function(event) {
  var button = event.target.closest("button[data-key]");
  if (button) showDetail("feature", button.dataset.key);
});

sceneRow.addEventListener("click", function(event) {
  var button = event.target.closest("button[data-key]");
  if (button) showDetail("scene", button.dataset.key);
});

manualRow.addEventListener("click", function(event) {
  var button = event.target.closest("button[data-key]");
  if (button) showManual(button.dataset.key);
});

calloutSvg.addEventListener("click", function(event) {
  var dot = event.target.closest(".callout-dot");
  if (!dot) return;
  var key = dot.dataset.key;
  if (getProduct().features[key]) showDetail("feature", key);
  showManual("guides", key);
});

window.addEventListener("resize", function() {
  renderCallouts();
});

switchProduct("headset");
