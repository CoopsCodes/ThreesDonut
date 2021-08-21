import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel";

async function loadDonuts() {
  const loader = new GLTFLoader();

  const [donutData] = await Promise.all([
    loader.loadAsync("/models/BasicDonut.glb"),
  ]);

  const donut = setupModel(donutData);
  donut.position.set(0, 0, 2.5);
  donut.scale.set(20, 20, 20);

  return { donut };
}

export { loadDonuts };
