import * as THREE from "three";

export class MiniMe {
  public group: THREE.Group;
  private skinMat: THREE.Material;
  private eyeMat: THREE.Material;

  constructor() {
    this.group = new THREE.Group();
    this.skinMat = new THREE.MeshLambertMaterial({
      color: "#e0bea5",
    });
    this.eyeMat = new THREE.MeshLambertMaterial({
      /* color: "#fbfffe", */
      color: "#ffffff",
    });

    this.init();
  }

  private createHead = () => {
    const headGroup = new THREE.Group();

    const headGeometry = new THREE.BoxGeometry(150, 150, 150);
    const head = new THREE.Mesh(headGeometry, this.skinMat);
    head.position.set(0, 400, 0);
    head.rotateY(-5);
    head.rotateZ(-3);

    const eyeGeometry = new THREE.BoxGeometry(1, 30, 30);
    const leftEye = new THREE.Mesh(eyeGeometry, this.eyeMat);
    leftEye.position.set(40, head.position.y + 25, -150);
    leftEye.rotateY(-5);
    leftEye.rotateZ(-3);
    const leftEyeBox = new THREE.BoxHelper( leftEye, 0xffff00 );

    headGroup.add(head);
    headGroup.add(leftEyeBox);

    this.group.add(headGroup);
  };

  private test = () => {
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: "0x00ff00" });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(0, 0, 0);

    this.group.add(cube);
  };

  private init = () => {
    this.createHead();
    this.test();
  };
}
