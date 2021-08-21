import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { setupModel } from "./setupModel.js";

async function loadDonuts() {
  const loader = new GLTFLoader();

  const [donutData] = await Promise.all([
    loader.loadAsync("/models/BasicDonut.glb"),
  ]);

  const donut = setupModel(donutData);
  donut.position.set(0, 0, 2.5);

  return { donut };
}

export { loadDonuts };
