// ============================================================
// main.js —  Three.js 3D 场景 + 热点交互 + 信息面板
// ============================================================
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { hotspotData, hotspotPositions, hotspotGroups } from "./data.js";

// ===== DOM 引用 =====
const canvas = document.getElementById("three-canvas");
const viewerContainer = document.getElementById("viewer-container");
const panelPlaceholder = document.getElementById("panel-placeholder");
const panelContent = document.getElementById("panel-content");
const partNameEl = document.getElementById("part-name");
const partDescEl = document.getElementById("part-desc");
const usageStepsEl = document.getElementById("usage-steps");
const troubleshootListEl = document.getElementById("troubleshoot-list");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// ===== Three.js 初始化 =====
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 50);
camera.position.set(2.2, 1.5, 3.5);
camera.lookAt(0, 0, 0);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 2.0;
controls.maxDistance = 8.0;
controls.maxPolarAngle = Math.PI * 0.7;
controls.target.set(0, 0, 0);
controls.update();

// ===== 光照 =====
// 环境光
const ambientLight = new THREE.AmbientLight("#4a6a8a", 1.5);
scene.add(ambientLight);

// 半球光（天空 + 地面）
const hemiLight = new THREE.HemisphereLight("#8899cc", "#334455", 1.0);
scene.add(hemiLight);

// 主方向光（带阴影）
const keyLight = new THREE.DirectionalLight("#ffffff", 4.0);
keyLight.position.set(5, 8, 5);
keyLight.castShadow = true;
keyLight.shadow.mapSize.width = 1024;
keyLight.shadow.mapSize.height = 1024;
keyLight.shadow.camera.near = 0.5;
keyLight.shadow.camera.far = 30;
keyLight.shadow.camera.left = -8;
keyLight.shadow.camera.right = 8;
keyLight.shadow.camera.top = 8;
keyLight.shadow.camera.bottom = -8;
keyLight.shadow.bias = -0.0001;
scene.add(keyLight);

// 补光（蓝色调）
const fillLight = new THREE.DirectionalLight("#4a9eff", 1.8);
fillLight.position.set(-3, 2, -2);
scene.add(fillLight);

// 底部反射光
const rimLight = new THREE.DirectionalLight("#aaccee", 2.0);
rimLight.position.set(0, -1, 3);
scene.add(rimLight);

// ===== 地面 =====
const groundGeo = new THREE.PlaneGeometry(12, 12);
const groundMat = new THREE.MeshStandardMaterial({
    color: "#1a1d2e",
    roughness: 0.6,
    metalness: 0.1,
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -1.5;
ground.receiveShadow = true;
scene.add(ground);

// 网格辅助线（弱化版）
const gridHelper = new THREE.PolarGridHelper(4, 32, 24, 64, "#2a2d3a", "#1e2030");
gridHelper.position.y = -1.49;
scene.add(gridHelper);

// ===== 构建 CP 占位模型 =====
const cpGroup = new THREE.Group();
cpGroup.name = "cp-model";
scene.add(cpGroup);

// 材质预设
const matBody = new THREE.MeshStandardMaterial({
    color: "#2c2f3a",
    roughness: 0.35,
    metalness: 0.7,
});
const matAccent = new THREE.MeshStandardMaterial({
    color: "#3a3f4a",
    roughness: 0.3,
    metalness: 0.8,
});
const matDisplay = new THREE.MeshStandardMaterial({
    color: "#1a1d24",
    roughness: 0.15,
    metalness: 0.3,
});
const matPort = new THREE.MeshStandardMaterial({
    color: "#4a4f5a",
    roughness: 0.3,
    metalness: 0.9,
});
const matKnob = new THREE.MeshStandardMaterial({
    color: "#555a66",
    roughness: 0.25,
    metalness: 0.85,
});

// --- CP 主体 ---
const bodyGeo = new THREE.BoxGeometry(1.2, 0.55, 0.85);
const body = new THREE.Mesh(bodyGeo, matBody);
body.position.set(0, 0, 0);
body.castShadow = true;
body.receiveShadow = true;
body.name = "body";
cpGroup.add(body);

// --- 前面板斜面 ---
const frontPanelGeo = new THREE.BoxGeometry(1.1, 0.42, 0.04);
const frontPanel = new THREE.Mesh(frontPanelGeo, matAccent);
frontPanel.position.set(0, 0.02, 0.425);
frontPanel.castShadow = true;
frontPanel.name = "front-panel";
cpGroup.add(frontPanel);

// --- 状态显示屏 ---
const displayGeo = new THREE.BoxGeometry(0.5, 0.15, 0.02);
const display = new THREE.Mesh(displayGeo, matDisplay);
display.position.set(0, 0.36, 0.44);
display.name = "display";
cpGroup.add(display);

// 屏幕发光效果
const screenGlowGeo = new THREE.PlaneGeometry(0.46, 0.12);
const screenGlowMat = new THREE.MeshBasicMaterial({
    color: "#4a9eff",
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide,
});
const screenGlow = new THREE.Mesh(screenGlowGeo, screenGlowMat);
screenGlow.position.set(0, 0.36, 0.455);
cpGroup.add(screenGlow);

// --- 音量旋钮 ---
const knobBaseGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.04, 32);
const knobBase = new THREE.Mesh(knobBaseGeo, matPort);
knobBase.position.set(0.45, 0.25, 0.44);
knobBase.rotation.x = Math.PI / 2;
knobBase.name = "knob-base";
cpGroup.add(knobBase);

const knobGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.06, 32);
const knob = new THREE.Mesh(knobGeo, matKnob);
knob.position.set(0.45, 0.25, 0.47);
knob.rotation.x = Math.PI / 2;
knob.name = "volume-knob";
cpGroup.add(knob);

// --- 自定义按键（3个） ---
for (let i = 0; i < 3; i++) {
    const keyGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.03, 24);
    const key = new THREE.Mesh(keyGeo, matPort);
    key.position.set(-0.15 + i * 0.15, -0.08, 0.44);
    key.rotation.x = Math.PI / 2;
    key.name = `func-key-${i}`;
    cpGroup.add(key);
}

// --- 耳机接口（左侧） ---
const jackGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.06, 24);
const jack = new THREE.Mesh(jackGeo, matPort);
jack.position.set(-0.48, 0.25, 0.35);
jack.rotation.z = Math.PI / 2;
jack.name = "headset-jack";
cpGroup.add(jack);

// 接口环
const jackRingGeo = new THREE.TorusGeometry(0.03, 0.008, 12, 16);
const jackRing = new THREE.Mesh(jackRingGeo, matKnob);
jackRing.position.set(-0.48, 0.25, 0.38);
jackRing.name = "headset-jack-ring";
cpGroup.add(jackRing);

// --- USB-C 上行接口（左侧下方） ---
const usbCGeo = new THREE.BoxGeometry(0.06, 0.03, 0.04);
const usbC = new THREE.Mesh(usbCGeo, matPort);
usbC.position.set(-0.48, -0.22, 0.38);
usbC.name = "usb-c-up";
cpGroup.add(usbC);

// --- USB-A 下行接口（右侧） ---
for (let i = 0; i < 2; i++) {
    const usbAGeo = new THREE.BoxGeometry(0.05, 0.04, 0.04);
    const usbA = new THREE.Mesh(usbAGeo, matPort);
    usbA.position.set(0.48, -0.12 - i * 0.1, 0.38);
    usbA.name = `usb-a-down-${i}`;
    cpGroup.add(usbA);
}

// --- 顶部装饰条 ---
const topBarGeo = new THREE.BoxGeometry(1.0, 0.02, 0.75);
const topBar = new THREE.Mesh(topBarGeo, matAccent);
topBar.position.set(0, 0.28, 0);
topBar.name = "top-bar";
cpGroup.add(topBar);

// --- 底部底座 ---
const baseGeo = new THREE.BoxGeometry(1.3, 0.04, 0.95);
const base = new THREE.Mesh(baseGeo, matAccent);
base.position.set(0, -0.29, 0);
base.receiveShadow = true;
base.castShadow = true;
base.name = "base";
cpGroup.add(base);

// --- 橡胶脚垫 ---
for (let cx = -0.45; cx <= 0.45; cx += 0.9) {
    for (let cz = -0.3; cz <= 0.3; cz += 0.6) {
        const footGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.02, 12);
        const foot = new THREE.Mesh(footGeo, new THREE.MeshStandardMaterial({
            color: "#1a1a1a",
            roughness: 0.9,
            metalness: 0.0,
        }));
        foot.position.set(cx, -0.33, cz);
        foot.name = "foot";
        cpGroup.add(foot);
    }
}

// ===== Alienware AW725H 耳机产品展示（贴图平面） =====
const headsetGroup = new THREE.Group();
headsetGroup.position.set(-1.2, 0.0, -0.15);
headsetGroup.name = "headset-aw725h";

// 正面产品图
const textureLoader = new THREE.TextureLoader();
const frontTex = textureLoader.load("assets/aw725h_front.webp");
frontTex.colorSpace = THREE.SRGBColorSpace;
const frontPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(0.55, 0.55),
    new THREE.MeshBasicMaterial({ map: frontTex, transparent: true, side: THREE.DoubleSide })
);
frontPlane.position.set(0, 0, 0);
frontPlane.name = "headset-front";
headsetGroup.add(frontPlane);

// 侧面产品图（旋转 30deg 展示立体感）
const sideTex = textureLoader.load("assets/aw725h_side.webp");
sideTex.colorSpace = THREE.SRGBColorSpace;
const sidePlane = new THREE.Mesh(
    new THREE.PlaneGeometry(0.40, 0.55),
    new THREE.MeshBasicMaterial({ map: sideTex, transparent: true, side: THREE.DoubleSide })
);
sidePlane.position.set(0.32, 0, -0.35);
sidePlane.rotation.y = -Math.PI / 6;
sidePlane.name = "headset-side";
headsetGroup.add(sidePlane);

scene.add(headsetGroup);

// 充电底座占位（右侧）
const dockPlaceholderGroup = new THREE.Group();
dockPlaceholderGroup.position.set(1.3, -0.35, -0.1);
dockPlaceholderGroup.name = "dock-placeholder";
{
    const dockGeo = new THREE.CylinderGeometry(0.18, 0.20, 0.06, 32);
    const dock = new THREE.Mesh(dockGeo, matBody);
    dock.position.y = 0.03;
    dockPlaceholderGroup.add(dock);

    const dockTopGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.02, 32);
    const dockTop = new THREE.Mesh(dockTopGeo, new THREE.MeshStandardMaterial({
        color: "#3a3040",
        roughness: 0.2,
        metalness: 0.4,
    }));
    dockTop.position.y = 0.07;
    dockPlaceholderGroup.add(dockTop);

    // 充电指示灯
    const ledGeo = new THREE.SphereGeometry(0.015, 8, 8);
    const led = new THREE.Mesh(ledGeo, new THREE.MeshBasicMaterial({ color: "#f0a040" }));
    led.position.set(0.12, 0.04, 0.12);
    dockPlaceholderGroup.add(led);
}
scene.add(dockPlaceholderGroup);

// ===== 热点标记系统 =====
const hotspotMeshes = [];  // { mesh, key, pulseRing }

// 热点小球几何（复用）
const hotspotGeo = new THREE.SphereGeometry(0.04, 16, 16);
// 脉冲环几何
const pulseGeo = new THREE.RingGeometry(0.05, 0.07, 32);

for (const [key, pos] of Object.entries(hotspotPositions)) {
    // 标记小球
    const material = new THREE.MeshStandardMaterial({
        color: pos.color,
        roughness: 0.2,
        metalness: 0.3,
        emissive: pos.color,
        emissiveIntensity: 0.5,
    });
    const marker = new THREE.Mesh(hotspotGeo, material);
    marker.position.set(pos.x, pos.y, pos.z);
    marker.name = `hotspot-${key}`;
    marker.userData = { hotspotKey: key };
    scene.add(marker);

    // 脉冲环
    const pulseMat = new THREE.MeshBasicMaterial({
        color: pos.color,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
    });
    const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
    pulseRing.position.copy(marker.position);
    pulseRing.userData = { hotspotKey: key, baseScale: 1 };
    scene.add(pulseRing);

    hotspotMeshes.push({ mesh: marker, pulseRing, key });
}

// ===== 射线检测 =====
const raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 0.1;
raycaster.params.Line.threshold = 0.1;
const mouse = new THREE.Vector2();

let hoveredHotspot = null;
let selectedHotspot = null;

function getIntersections(event) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const targets = hotspotMeshes.map(h => h.mesh);
    return raycaster.intersectObjects(targets, false);
}

canvas.addEventListener("click", (event) => {
    const intersects = getIntersections(event);
    if (intersects.length > 0) {
        const key = intersects[0].object.userData.hotspotKey;
        if (key) selectHotspot(key);
    }
});

canvas.addEventListener("mousemove", (event) => {
    const intersects = getIntersections(event);
    if (intersects.length > 0) {
        const key = intersects[0].object.userData.hotspotKey;
        if (hoveredHotspot !== key) {
            resetHotspotHover();
            hoveredHotspot = key;
            highlightHotspot(key, true);
            viewerContainer.style.cursor = "pointer";
        }
    } else {
        if (hoveredHotspot !== null) {
            resetHotspotHover();
            hoveredHotspot = null;
            viewerContainer.style.cursor = "grab";
        }
    }
});

function highlightHotspot(key, hover) {
    for (const h of hotspotMeshes) {
        if (h.key === key) {
            h.mesh.material.emissiveIntensity = hover ? 1.2 : 0.5;
            h.mesh.scale.setScalar(hover ? 1.4 : 1);
            h.pulseRing.material.opacity = hover ? 0.9 : 0.6;
            h.pulseRing.scale.setScalar(hover ? 1.5 : 1);
        }
    }
}

function resetHotspotHover() {
    if (hoveredHotspot) {
        highlightHotspot(hoveredHotspot, false);
    }
}

function selectHotspot(key) {
    // 重置上一个选中
    if (selectedHotspot) {
        resetHotspotSelect(selectedHotspot);
    }
    selectedHotspot = key;
    // 高亮选中
    for (const h of hotspotMeshes) {
        if (h.key === key) {
            h.mesh.material.emissiveIntensity = 1.5;
            h.mesh.scale.setScalar(1.5);
            h.pulseRing.material.opacity = 1.0;
            h.pulseRing.scale.setScalar(1.8);
        }
    }
    updatePanel(key);
}

function resetHotspotSelect(key) {
    for (const h of hotspotMeshes) {
        if (h.key === key) {
            h.mesh.material.emissiveIntensity = 0.5;
            h.mesh.scale.setScalar(1);
            h.pulseRing.material.opacity = 0.6;
            h.pulseRing.scale.setScalar(1);
        }
    }
}

// ===== 信息面板更新 =====
function updatePanel(key) {
    const data = hotspotData[key];
    if (!data) return;

    // 切换占位/内容
    panelPlaceholder.classList.add("hidden");
    panelContent.classList.remove("hidden");

    // 填充数据
    partNameEl.textContent = data.name;
    partDescEl.textContent = data.desc;

    // 使用方法
    usageStepsEl.innerHTML = "";
    data.usage.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        usageStepsEl.appendChild(li);
    });

    // 问题与解决
    troubleshootListEl.innerHTML = "";
    data.troubleshoot.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="problem-title">${item.problem}</div>
            <div class="problem-solution">${item.solution}</div>
        `;
        troubleshootListEl.appendChild(li);
    });

    // 重置到功能说明标签
    switchTab("function");
}

// ===== 标签切换 =====
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        switchTab(tab.dataset.tab);
    });
});

function switchTab(tabName) {
    tabs.forEach(t => t.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    const targetTab = document.querySelector(`.tab[data-tab="${tabName}"]`);
    const targetContent = document.getElementById(`tab-${tabName}`);
    if (targetTab) targetTab.classList.add("active");
    if (targetContent) targetContent.classList.add("active");
}

// ===== 动画循环 =====
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const dt = Math.min(clock.getDelta(), 0.1);
    const elapsed = performance.now() * 0.001;

    controls.update();

    // 脉冲动画
    hotspotMeshes.forEach(({ pulseRing }) => {
        const scale = 1 + Math.sin(elapsed * 3) * 0.15;
        pulseRing.scale.setScalar(scale);
        pulseRing.material.opacity = 0.3 + Math.sin(elapsed * 3) * 0.2;
    });

    // 屏幕微光呼吸
    screenGlow.material.opacity = 0.1 + Math.sin(elapsed * 2) * 0.05;

    // 耳机轻微悬浮
    headsetGroup.position.y = -0.05 + Math.sin(elapsed * 1.5) * 0.03;

    // 充电底座 LED 呼吸
    if (dockPlaceholderGroup.children.length > 2) {
        const led = dockPlaceholderGroup.children[2];
        led.material.opacity = 0.6 + Math.sin(elapsed * 2.5) * 0.4;
    }

    renderer.render(scene, camera);
}

// ===== 响应式处理 =====
window.addEventListener("resize", () => {
    const width = viewerContainer.clientWidth;
    const height = viewerContainer.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
});

// 初始尺寸设置
function initSize() {
    const width = viewerContainer.clientWidth;
    const height = viewerContainer.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
}
initSize();

// ===== 启动 =====
animate();

console.log("Dell CP 3D Viewer initialized.");
console.log("Hotspots:", Object.keys(hotspotPositions).join(", "));
