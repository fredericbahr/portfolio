import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

const isMesh = (obj: THREE.Object3D): obj is THREE.Mesh => {
  return obj.type === "Mesh";
};

export const mergeMeshes = (group: THREE.Group, material: THREE.Material) => {
  const geometries: THREE.BufferGeometry[] = [];
  group.children.forEach((obj: THREE.Object3D) => {
    if (isMesh(obj)) {
      const geometry = obj.geometry.clone();
      obj.updateMatrix();
      geometry.applyMatrix4(obj.matrix);
      geometries.push(geometry);
    }
  });

  return new THREE.Mesh(mergeBufferGeometries(geometries, true), material);
};
