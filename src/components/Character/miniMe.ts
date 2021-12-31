import * as THREE from "three";

export class MiniMe {
  public group: THREE.Group;
  private skinMat: THREE.Material;
  private eyeMat: THREE.Material;
  private retinaMat: THREE.Material;
  private eyeBrownMat: THREE.Material;
  private oralCavityMat: THREE.Material;
  private tongueMat: THREE.Material;
  private teethMat: THREE.Material;
  private glassMat: THREE.Material;

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
    this.oralCavityMat = new THREE.MeshLambertMaterial({
      color: "#181114",
    });
    this.tongueMat = new THREE.MeshLambertMaterial({
      color: "#cc0e00",
    });
    this.teethMat = new THREE.MeshLambertMaterial({
      color: "#fbfffe",
    });
    this.glassMat = new THREE.MeshLambertMaterial({
      color: "#181114",
      side: THREE.DoubleSide,
    });

    this.init();
  }

  private deg2rad = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };

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
      15,
      -head.geometry.parameters.depth / 2 - 2,
    );

    const rightEye = new THREE.Mesh(eyeGeometry, this.eyeMat);
    rightEye.position.set(
      -head.geometry.parameters.width / 4,
      15,
      -head.geometry.parameters.depth / 2 - 2,
    );

    /**
     * Retina
     */
    const retinaGeometry = new THREE.BoxGeometry(7.5, 7.5, 1);

    const leftRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    leftRetina.position.set(-2.5, -5, -1);

    const rightRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    rightRetina.position.set(2.5, -5, -1);

    rightEye.add(rightRetina);
    leftEye.add(leftRetina);

    /**
     * EyeBrowns
     */
    const eyeBrownGeometry = new THREE.BoxGeometry(40, 10, 1);
    const leftEyeBrown = new THREE.Mesh(eyeBrownGeometry, this.eyeBrownMat);
    leftEyeBrown.position.set(
      head.geometry.parameters.width / 4,
      eyeGeometry.parameters.height + eyeGeometry.parameters.height * 0.75,
      -head.geometry.parameters.depth / 2 - 1,
    );
    leftEyeBrown.rotateZ(this.deg2rad(2));

    const rightEyeBrown = new THREE.Mesh(eyeBrownGeometry, this.eyeBrownMat);
    rightEyeBrown.position.set(
      -head.geometry.parameters.width / 4,
      eyeGeometry.parameters.height + eyeGeometry.parameters.height * 0.75,
      -head.geometry.parameters.depth / 2 - 1,
    );
    rightEyeBrown.rotateZ(this.deg2rad(-2));

    /**
     * Mouth
     */
    const mouth = new THREE.Group();
    const oralCavityGeometry = new THREE.CircleGeometry(
      25,
      5,
      Math.PI,
      Math.PI,
    );
    const teethGeometry = new THREE.BoxGeometry(48, 5, 1);
    const tongueGeometry = new THREE.BoxGeometry(15, 5, 1);

    const oralCavity = new THREE.Mesh(oralCavityGeometry, this.oralCavityMat);
    oralCavity.material.side = THREE.DoubleSide;
    oralCavity.position.set(0, -25, -head.geometry.parameters.depth / 2 - 1);

    const teeth = new THREE.Mesh(teethGeometry, this.teethMat);
    teeth.position.set(0, -25, -head.geometry.parameters.depth / 2 - 1);

    const tongue = new THREE.Mesh(tongueGeometry, this.tongueMat);
    tongue.position.set(0, -46, -head.geometry.parameters.depth / 2 - 1);

    mouth.add(oralCavity);
    mouth.add(teeth);
    mouth.add(tongue);

    /**
     * Glasses
     */
    const glasses = new THREE.Group();
    const glassGeometry = new THREE.RingGeometry(27, 32, 4);
    const middleConnectorGeometry = new THREE.BoxGeometry(5, 30, 1);
    const outerConnectorGeometry = new THREE.BoxGeometry(5, 30, 1);
    const sideConnectorGeometry = new THREE.BoxGeometry();
      5,
      head.geometry.parameters.depth / 2,
      1,
    );

    const leftGlass = new THREE.Mesh(glassGeometry, this.glassMat);
    leftGlass.position.set(
      head.geometry.parameters.width / 4,
      15,
      -head.geometry.parameters.depth / 2 - 1,
    );
    leftGlass.rotateZ(this.deg2rad(45));

    const rightGlass = new THREE.Mesh(glassGeometry, this.glassMat);
    rightGlass.position.set(
      -head.geometry.parameters.width / 4,
      15,
      -head.geometry.parameters.depth / 2 - 1,
    );
    rightGlass.rotateZ(this.deg2rad(45));

    const middleConnector = new THREE.Mesh(
      middleConnectorGeometry,
      this.glassMat,
    );
    middleConnector.position.set(
      0,
      glassGeometry.parameters.outerRadius / 2,
      -head.geometry.parameters.depth / 2 - 1,
    );
    middleConnector.rotateZ(this.deg2rad(90));

    glasses.add(leftGlass);
    glasses.add(rightGlass);
    glasses.add(middleConnector);
    /**
     * Combine parts
     */
    head.add(glasses);
    head.add(rightEyeBrown);
    head.add(leftEyeBrown);
    head.add(rightEye);
    head.add(leftEye);
    head.add(mouth);
    headGroup.add(head);

    this.group.add(headGroup);
  };

  private init = () => {
    this.createHead();
  };
}
