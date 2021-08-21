const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight;
  //   camera.updateProjectionMatrix();

  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio, 2);
};

class Resizer {
  constructor(container, camera, renderer) {
    setSize(container, camera, renderer);

    window.addEventListener("resize", () => {
      setSize(container, camera, renderer);

      this.onResize();
    });
  }

  onResize() {}
}

export { Resizer };
