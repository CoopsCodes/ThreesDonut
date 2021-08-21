import { loadDonuts } from "../components/donuts/donut";
import { createScene } from "../components/scene";
import { createLights } from "../components/lights";
import { createCamera } from "../components/camera";

import { Loop } from "./systems/Loop";
import { Resizer } from "./systems/Resizer";
import { createControls } from "./systems/controls";
import { createRenderer } from "./systems/renderer";

let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }
  async init() {
    const { donut } = await loadDonuts();
    console.log({ donut });

    controls.target.copy(donut.position);

    scene.add(donut);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
