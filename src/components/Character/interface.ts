import * as THREE from "three";

export interface IArmMeshes {
  upperArm: THREE.Mesh<THREE.BoxGeometry, THREE.Material>;
  lowerArm: THREE.Mesh<THREE.BoxGeometry, THREE.Material>;
  thumb: THREE.Mesh<THREE.BoxGeometry, THREE.Material>;
  fingers: THREE.Mesh<THREE.BoxGeometry, THREE.Material>;
}
