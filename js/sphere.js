document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('sphere-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const textureLoader = new THREE.TextureLoader();
  const logoTexture = textureLoader.load('/assets/ball1.png');

  const geometry = new THREE.SphereGeometry(2, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    map: logoTexture,
    metalness: 0.1,
    roughness: 1
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 7.5);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.015;
    renderer.render(scene, camera);
  }
  animate();
});
