const container = document.querySelector(".model__fly");
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(
  50,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.z = 1.7;
camera.position.y = 0.01;
camera.rotation.x = 0;
camera.rotation.y = 0;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);

const pl1 = new THREE.PointLight(0xffffff, 100);
pl1.castShadow = true;
pl1.position.set(0, 0, 2);
const pl2 = new THREE.PointLight(0xffffff, 100);
pl2.castShadow = true;
pl2.position.set(-2, -0.5, -3);
const pl3 = new THREE.PointLight(0xffffff, 100);
pl3.castShadow = true;
pl3.position.set(0, 0, 5);

const al = new THREE.AmbientLight(0xffffff, 500);
scene.add(pl1, pl2, pl3);

const loader = new THREE.GLTFLoader();
loader.load(
  "/model/untitled.glb",
  function (gltf) {
    city1 = gltf.scene;
    city1.scale.set(0.2, 0.2, 0.2);
    // city1.position.z = 2.23;
    // city1.position.x = 2.23;
    scene.add(city1);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = Math.PI / 2; // Ограничение для камеры чтобы не уходить под землю
controls.minPolarAngle = Math.PI / 2; // Ограничение для камеры чтобы не уходить под землю
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;
controls.enableDamping = true;

const helper = new THREE.CameraHelper(pl1.shadow.camera);
// scene.add(helper);

let lt = new Date();
const loop = function () {
  let now = new Date(),
    secs = (now - lt) / 1500;
  lt = now;
  requestAnimationFrame(loop);
  renderer.render(scene, camera);
};

loop();
function animate() {
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
container.appendChild(renderer.domElement);

new WOW().init();
