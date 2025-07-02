document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById('sphere-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect will be set later
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  container.appendChild(renderer.domElement);
  renderer.setClearColor(0x000000, 0); // Transparent background

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

  function resizeRendererToContainer() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Update renderer size
    renderer.setSize(width, height);

    // Update camera aspect ratio and projection
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function animate() {
    requestAnimationFrame(animate);

    resizeRendererToContainer(); // Keep canvas synced with container

    sphere.rotation.y += 0.015;
    renderer.render(scene, camera);
  }

  animate();

  // Recheck size if window resizes
  window.addEventListener("resize", resizeRendererToContainer);
});
