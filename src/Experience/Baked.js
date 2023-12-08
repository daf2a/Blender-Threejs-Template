import * as THREE from "three";

import Experience from "./Experience.js";
import vertexShader from "./shaders/baked/vertex.glsl";
import fragmentShader from "./shaders/baked/fragment.glsl";

export default class CoffeeSteam {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    // Debug
    if (this.debug) {
      this.debugFolder = this.debug.addFolder({
        title: "User Controls",
        expanded: false,
      });
    }

    this.setModel();
  }

  setModel() {
    this.model = {};

    this.model.mesh = this.resources.items.roomModel.scene.children[0];

    this.model.bakedDayTexture = this.resources.items.bakedDayTexture;
    this.model.bakedDayTexture.encoding = THREE.sRGBEncoding;
    this.model.bakedDayTexture.flipY = false;

    this.model.bakedNightTexture = this.resources.items.bakedNightTexture;
    this.model.bakedNightTexture.encoding = THREE.sRGBEncoding;
    this.model.bakedNightTexture.flipY = false;

    this.model.bakedNeutralTexture = this.resources.items.bakedNeutralTexture;
    this.model.bakedNeutralTexture.encoding = THREE.sRGBEncoding;
    this.model.bakedNeutralTexture.flipY = false;

    this.model.material = new THREE.ShaderMaterial({
      uniforms: {
        uBakedDayTexture: { value: this.model.bakedDayTexture },
        uBakedNightTexture: { value: this.model.bakedNightTexture },
        uBakedNeutralTexture: { value: this.model.bakedNeutralTexture },
        uLightMapTexture: { value: this.model.lightMapTexture },

        uNightMix: { value: 0},
        uNeutralMix: { value: 0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

    this.model.mesh.traverse((_child) => {
      if (_child instanceof THREE.Mesh) {
        _child.material = this.model.material;
      }
    });

    this.scene.add(this.model.mesh);

    // Debug
    if (this.debug) {
      this.debugFolder.addInput(
        this.model.material.uniforms.uNightMix,
        "value",
        { label: "Night", min: 0, max: 1 }
      );

      this.debugFolder.addInput(
        this.model.material.uniforms.uNeutralMix,
        "value",
        { label: "Neutral", min: 0, max: 1 }
      );
    }
  }
}
