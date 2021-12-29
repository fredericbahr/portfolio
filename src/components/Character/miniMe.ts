import * as THREE from "three";

export class MiniMe {
  public group: THREE.Group;
  private skinMat: THREE.Material;
  private eyeMat: THREE.Material;
  private retinaMat: THREE.Material;
  private eyeBrownMat: THREE.Material;

  constructor() {
    this.group = new THREE.Group();
    this.skinMat = new THREE.MeshLambertMaterial({
      color: "#e0bea5",
    });
    this.eyeMat = new THREE.MeshLambertMaterial({
      color: "#fbfffe",
    });
    this.retinaMat = new THREE.MeshLambertMaterial({
      color: "#0aa5ff",
    });
    this.eyeBrownMat = new THREE.MeshLambertMaterial({
      color: "#5a3825",
    });

    this.init();
  }

  private createHead = () => {
    const headGroup = new THREE.Group();

    /**
     * Head
     */
    const headGeometry = new THREE.BoxGeometry(150, 150, 150);
    const head = new THREE.Mesh(headGeometry, this.skinMat);
    head.position.set(0, 400, 0);

    /**
     * Eyes
     */
    const eyeGeometry = new THREE.BoxGeometry(30, 30, 1);

    const leftEye = new THREE.Mesh(eyeGeometry, this.eyeMat);
    leftEye.position.set(
      head.geometry.parameters.width / 4,
      20,
      -head.geometry.parameters.depth / 2,
    );

    const rightEye = new THREE.Mesh(eyeGeometry, this.eyeMat);
    rightEye.position.set(
      -head.geometry.parameters.width / 4,
      20,
      -head.geometry.parameters.depth / 2,
    );

    /**
     * Retina
     */
    const retinaGeometry = new THREE.BoxGeometry(7.5, 7.5, 1);

    const leftRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    leftRetina.position.set(-2.5, -5, 0);

    const rightRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    rightRetina.position.set(2.5, -5, 0);

    rightEye.add(rightRetina);
    leftEye.add(leftRetina);

    /**
     * EyeBrowns
     */
    const eyeBrownGeometry = new THREE.BoxGeometry(40, 10, 1);
    const leftEyeBrown = new THREE.Mesh(eyeBrownGeometry, this.eyeBrownMat);
    leftEyeBrown.position.set(
      head.geometry.parameters.width / 4,
      eyeGeometry.parameters.height + eyeGeometry.parameters.height / 2,
      -head.geometry.parameters.depth / 2,
    );
    leftEyeBrown.rotateZ(0.025);

    const rightEyeBrown = new THREE.Mesh(eyeBrownGeometry, this.eyeBrownMat);
    rightEyeBrown.position.set(
      -head.geometry.parameters.width / 4,
      eyeGeometry.parameters.height + eyeGeometry.parameters.height / 2,
      -head.geometry.parameters.depth / 2,
    );
    rightEyeBrown.rotateZ(-0.025);

    /**
     * Combine parts
     */
    head.add(rightEyeBrown);
    head.add(leftEyeBrown);
    head.add(rightEye);
    head.add(leftEye);
    headGroup.add(head);

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
