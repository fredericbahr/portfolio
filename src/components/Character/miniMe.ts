import * as THREE from "three";
import { mergeMeshes } from "./characterUtils";
import {
  anklePositonY,
  ankleSizeX,
  ankleSizeY,
  ankleSizeZ,
  beltPositionY,
  beltSizeX,
  beltSizeY,
  beltSizeZ,
  bodyPositionY,
  bodySizeX,
  bodySizeY,
  bodySizeZ,
  buckleSizeX,
  buckleSizeY,
  buckleSizeZ,
  eyePositionY,
  eyeSizeX,
  eyeSizeY,
  eyeSizeZ,
  fingerSizeX,
  fingerSizeY,
  fingerSizeZ,
  footPositionY,
  footPositionZ,
  footSizeX,
  footSizeY,
  footSizeZ,
  headPositionY,
  headSize,
  legPositionY,
  legSeperatorSizeX,
  legSeperatorSizeY,
  legSeperatorSizeZ,
  legSizeX,
  legSizeY,
  legSizeZ,
  lowerArmSizeX,
  lowerArmSizeY,
  lowerArmSizeZ,
  mainHairSizeX,
  mainHairSizeY,
  mainHairSizeZ,
  mouthPositionY,
  thumbSizeX,
  thumbSizeY,
  thumbSizeZ,
  upperArmSizeX,
  upperArmSizeY,
  upperArmSizeZ,
} from "./units";

export class MiniMe {
  public character: THREE.Group;

  private skinMat: THREE.Material;
  private eyeMat: THREE.Material;
  private retinaMat: THREE.Material;
  private eyeBrownMat: THREE.Material;
  private oralCavityMat: THREE.Material;
  private tongueMat: THREE.Material;
  private teethMat: THREE.Material;
  private glassMat: THREE.Material;
  private earMat: THREE.Material;
  private shirtMat: THREE.Material;
  private beltMat: THREE.Material;
  private buckleMat: THREE.Material;
  private legMat: THREE.Material;
  private legSeperatorMat: THREE.Material;
  private footMat: THREE.Material;
  private hairMat: THREE.Material;

  constructor() {
    this.character = new THREE.Group();

    this.skinMat = new THREE.MeshLambertMaterial({ color: "#e0bea5" });
    this.eyeMat = new THREE.MeshLambertMaterial({ color: "#fbfffe" });
    this.retinaMat = new THREE.MeshLambertMaterial({ color: "#0aa5ff" });
    this.eyeBrownMat = new THREE.MeshLambertMaterial({ color: "#5a3825" });
    this.oralCavityMat = new THREE.MeshLambertMaterial({ color: "#181114" });
    this.tongueMat = new THREE.MeshLambertMaterial({ color: "#cc0e00" });
    this.teethMat = new THREE.MeshLambertMaterial({ color: "#fbfffe" });
    this.glassMat = new THREE.MeshLambertMaterial({
      color: "#181114",
      side: THREE.DoubleSide,
    });
    this.earMat = new THREE.MeshLambertMaterial({ color: "#deb08e" });
    this.shirtMat = new THREE.MeshLambertMaterial({ color: "#cc0e00" });
    this.beltMat = new THREE.MeshLambertMaterial({ color: "#181114" });
    this.buckleMat = new THREE.MeshLambertMaterial({
      color: "808080",
      side: THREE.DoubleSide,
    });
    this.legMat = new THREE.MeshLambertMaterial({ color: "#003049" });
    this.legSeperatorMat = new THREE.MeshLambertMaterial({ color: "#181114" });
    this.footMat = new THREE.MeshLambertMaterial({ color: "#f77f00" });
    this.hairMat = new THREE.MeshLambertMaterial({ color: "#bf9e37", side: THREE.DoubleSide });

    this.draw();
  }

  public setShirtMat(colorIndex: number) {
    const colors = ["#cc0e00", "#0aa5ff"];
    this.shirtMat = new THREE.MeshLambertMaterial({
      color: colors[colorIndex],
    });
  }

  /**
   * Transforms degree to a radian value
   * @param degrees the degrees to transform
   * @returns degrees as radian value
   */
  private deg2rad = (degrees: number) => {
    const halfCircleDegree = 180;
    return degrees * (Math.PI / halfCircleDegree);
  };

  private createHead = () => {
    /**
     * Head
     */
    const headGeometry = new THREE.BoxGeometry(headSize, headSize, headSize * 0.75);
    const head = new THREE.Mesh(headGeometry, this.skinMat);
    head.position.set(0, headPositionY, 0);

    const [eyes, eyeBrowns]: THREE.Group[] = this.createEyesAndEyebrowns(head);
    const mouth: THREE.Group = this.createMouth(head);
    const [glasses, ears]: THREE.Group[] = this.createGlassesAndEars(head);

    head.add(eyes, eyeBrowns, mouth, glasses, ears);
    this.character.add(head);
  };

  private createEyesAndEyebrowns = (head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>): THREE.Group[] => {
    const eyeGeometry = new THREE.BoxGeometry(eyeSizeX, eyeSizeY, eyeSizeZ);
    const eyes = this.createEyes(head, eyeGeometry);
    const eyeBrowns = this.createEyeBrowns(head, eyeGeometry);

    return [eyes, eyeBrowns];
  };

  private createEyes = (
    head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>,
    eyeGeometry: THREE.BoxGeometry,
  ): THREE.Group => {
    const eyes = new THREE.Group();

    const leftEye = new THREE.Mesh(eyeGeometry, this.eyeMat);
    leftEye.position.set(head.geometry.parameters.width / 4, eyePositionY, -head.geometry.parameters.depth / 2 - 2);

    const rightEye = new THREE.Mesh(eyeGeometry, this.eyeMat);
    rightEye.position.set(-head.geometry.parameters.width / 4, eyePositionY, -head.geometry.parameters.depth / 2 - 2);

    const [leftRetina, rightRetina]: THREE.Mesh<THREE.BoxGeometry, THREE.Material>[] = this.createRetinas();
    leftEye.add(leftRetina);
    rightEye.add(rightRetina);

    eyes.add(leftEye, rightEye);

    return eyes;
  };

  private createRetinas = (): THREE.Mesh<THREE.BoxGeometry, THREE.Material>[] => {
    const retinaGeometry = new THREE.BoxGeometry(7.5, 7.5, 1);

    const leftRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    leftRetina.position.set(-2.5, -5, -1);

    const rightRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    rightRetina.position.set(2.5, -5, -1);

    return [leftRetina, rightRetina];
  };

  private createEyeBrowns = (
    head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>,
    eyeGeometry: THREE.BoxGeometry,
  ): THREE.Group => {
    const eyeBrowns = new THREE.Group();
    const eyeBrownGeometry = new THREE.BoxGeometry(40, 10, 1);
    const leftEyeBrown = new THREE.Mesh(eyeBrownGeometry, this.eyeBrownMat);
    leftEyeBrown.position.set(
      head.geometry.parameters.width / 4,
      eyeGeometry.parameters.height + eyeGeometry.parameters.height * 0.5,
      -head.geometry.parameters.depth / 2 - 1,
    );
    leftEyeBrown.rotateZ(this.deg2rad(2));

    const rightEyeBrown = new THREE.Mesh(eyeBrownGeometry, this.eyeBrownMat);
    rightEyeBrown.position.set(
      -head.geometry.parameters.width / 4,
      eyeGeometry.parameters.height + eyeGeometry.parameters.height * 0.5,
      -head.geometry.parameters.depth / 2 - 1,
    );
    rightEyeBrown.rotateZ(this.deg2rad(-2));

    eyeBrowns.add(leftEyeBrown, rightEyeBrown);

    return eyeBrowns;
  };

  private createMouth = (head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>): THREE.Group => {
    const mouth = new THREE.Group();
    const oralCavityGeometry = new THREE.CircleGeometry(25, 5, Math.PI, Math.PI);
    const teethGeometry = new THREE.BoxGeometry(48, 5, 1);
    const tongueGeometry = new THREE.BoxGeometry(15, 5, 1);

    const oralCavity = new THREE.Mesh(oralCavityGeometry, this.oralCavityMat);
    oralCavity.material.side = THREE.DoubleSide;
    oralCavity.position.set(0, mouthPositionY, -head.geometry.parameters.depth / 2 - 1);

    const teeth = new THREE.Mesh(teethGeometry, this.teethMat);
    teeth.position.set(0, mouthPositionY, -head.geometry.parameters.depth / 2 - 1);

    const tongue = new THREE.Mesh(tongueGeometry, this.tongueMat);
    tongue.position.set(0, -46, -head.geometry.parameters.depth / 2 - 1);

    mouth.add(oralCavity, teeth, tongue);

    return mouth;
  };

  private createGlassesAndEars = (head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>): THREE.Group[] => {
    const glassGeometry = new THREE.RingGeometry(27, 32, 4);
    const glasses = this.createGlasses(head, glassGeometry);
    const ears = this.createEars(head, glassGeometry);

    return [glasses, ears];
  };

  private createGlasses = (head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>, glassGeometry: THREE.RingGeometry) => {
    const glasses = new THREE.Group();
    const middleConnectorGeometry = new THREE.BoxGeometry(5, 30, 1);
    const outerConnectorGeometry = new THREE.BoxGeometry(5, 17, 1);
    const sideConnectorGeometry = new THREE.BoxGeometry(5, head.geometry.parameters.depth / 2, 1);

    const leftGlass = new THREE.Mesh(glassGeometry, this.glassMat);
    leftGlass.position.set(head.geometry.parameters.width / 4, eyePositionY, -head.geometry.parameters.depth / 2 - 1);
    leftGlass.rotateZ(this.deg2rad(45));

    const rightGlass = new THREE.Mesh(glassGeometry, this.glassMat);
    rightGlass.position.set(-head.geometry.parameters.width / 4, eyePositionY, -head.geometry.parameters.depth / 2 - 1);
    rightGlass.rotateZ(this.deg2rad(45));

    const middleConnector = new THREE.Mesh(middleConnectorGeometry, this.glassMat);
    middleConnector.position.set(0, glassGeometry.parameters.outerRadius / 2, -head.geometry.parameters.depth / 2 - 1);
    middleConnector.rotateZ(this.deg2rad(90));

    const leftOuterConnector = new THREE.Mesh(outerConnectorGeometry, this.glassMat);
    leftOuterConnector.position.set(
      leftGlass.position.x + leftGlass.geometry.parameters.innerRadius + 2,
      glassGeometry.parameters.outerRadius / 2,
      -head.geometry.parameters.depth / 2 - 1,
    );
    leftOuterConnector.rotateZ(this.deg2rad(90));

    const rightOuterConnector = new THREE.Mesh(outerConnectorGeometry, this.glassMat);
    rightOuterConnector.position.set(
      rightGlass.position.x - rightGlass.geometry.parameters.innerRadius - 2,
      glassGeometry.parameters.outerRadius / 2,
      -head.geometry.parameters.depth / 2 - 1,
    );
    rightOuterConnector.rotateZ(this.deg2rad(90));

    const leftSideConnector = new THREE.Mesh(sideConnectorGeometry, this.glassMat);
    leftSideConnector.position.set(
      head.geometry.parameters.width / 2,
      glassGeometry.parameters.outerRadius / 2,
      -head.geometry.parameters.depth / 4,
    );
    leftSideConnector.rotateY(this.deg2rad(90));
    leftSideConnector.rotateZ(this.deg2rad(90));

    const rightSideConnector = new THREE.Mesh(sideConnectorGeometry, this.glassMat);
    rightSideConnector.position.set(
      -head.geometry.parameters.width / 2,
      glassGeometry.parameters.outerRadius / 2,
      -head.geometry.parameters.depth / 4,
    );
    rightSideConnector.rotateY(this.deg2rad(90));
    rightSideConnector.rotateZ(this.deg2rad(90));

    glasses.add(
      leftGlass,
      rightGlass,
      middleConnector,
      leftOuterConnector,
      rightOuterConnector,
      leftSideConnector,
      rightSideConnector,
    );

    return glasses;
  };

  private createEars = (
    head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>,
    glassGeometry: THREE.RingGeometry,
  ): THREE.Group => {
    const ears = new THREE.Group();
    const earGeometry = new THREE.BoxGeometry(10, 30, 25);

    const leftEar = new THREE.Mesh(earGeometry, this.earMat);
    leftEar.position.set(
      head.geometry.parameters.width / 2 + earGeometry.parameters.width / 2,
      glassGeometry.parameters.outerRadius / 2,
      -4,
    );

    const rightEar = new THREE.Mesh(earGeometry, this.earMat);
    rightEar.position.set(-head.geometry.parameters.width / 2, glassGeometry.parameters.outerRadius / 2, -4);

    ears.add(leftEar, rightEar);

    return ears;
  };

  private createHairs = () => {
    const hair: THREE.Group = new THREE.Group();
    let mainHair: THREE.Mesh;
    let detailHair: THREE.Mesh;
    const mainHairs: THREE.Group = new THREE.Group();
    let detailHairs: THREE.Group;
    let mainHairGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ);

    const maxTopHair = headSize / mainHairSizeX;
    this.createTopHair(mainHairs, mainHairGeometry, maxTopHair);

    const backHair = headSize / mainHairSizeX + 2;
    this.createBackHair(mainHairs, backHair);

    const maxSideHair = (headSize * 0.75) / mainHairSizeX;
    this.createSideHair(mainHairs, mainHairGeometry, maxSideHair);
    this.createSideHair(mainHairs, mainHairGeometry, maxSideHair, false);

    detailHairs = this.getDetailHairs();

    mainHair = mergeMeshes(mainHairs, this.hairMat);
    detailHair = mergeMeshes(detailHairs, this.hairMat);

    hair.add(mainHair, detailHair);
    this.character.add(hair);
  };

  private createTopHair = (mainHairs: THREE.Group, mainHairGeometry: THREE.BoxGeometry, maxTopHair: number) => {
    for (let i = 0; i < maxTopHair; i++) {
      const hair = new THREE.Mesh(mainHairGeometry, this.hairMat);
      const hairPositionX = headSize / 2 - mainHairSizeX / 2 - i * mainHairSizeX;
      const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 2;
      hair.position.set(hairPositionX, hairPositionY, 0);
      mainHairs.add(hair);
    }
  };

  private createBackHair = (mainHairs: THREE.Group, backHair: number) => {
    for (let i = 0; i < backHair; i++) {
      const backHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ * 0.6);
      const hair = new THREE.Mesh(backHairGeometry, this.hairMat);
      const hairPositionX = headSize / 2 + mainHairSizeX / 2 - i * mainHairSizeX;
      const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY - backHairGeometry.parameters.depth / 2;
      const hairPositionZ = mainHairSizeZ / 2;
      hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      hair.rotateX(this.deg2rad(90));
      mainHairs.add(hair);
    }
  };

  private createSideHair = (
    mainHairs: THREE.Group,
    mainHairGeometry: THREE.BoxGeometry,
    maxSideHair: number,
    isLeftSide: boolean = true,
  ) => {
    for (let i = 0; i < maxSideHair; i++) {
      let hair: THREE.Mesh;
      const sideMultiplier = isLeftSide ? 1 : -1;
      const hairPositionX = sideMultiplier * (headSize / 2 + mainHairSizeX / 2);
      const hairPositionZ = (-headSize * 0.75) / 2 + i * mainHairSizeX;

      if (i === 12) {
        mainHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 25);
        hair = new THREE.Mesh(mainHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 23.1;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i === 0) {
        mainHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 10);
        hair = new THREE.Mesh(mainHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 15.6;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i === 1) {
        mainHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 7.5);
        hair = new THREE.Mesh(mainHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 14.35;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i >= 10) {
        mainHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 10);
        hair = new THREE.Mesh(mainHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 15.6;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i < 4 || i >= 8) {
        mainHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2);
        hair = new THREE.Mesh(mainHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 10.6;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else {
        mainHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ * 0.4 + 3);
        hair = new THREE.Mesh(mainHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 6.5;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      }

      hair.rotateY(this.deg2rad(90));
      hair.rotateX(this.deg2rad(90));
      mainHairs.add(hair);
    }
  };

  private getDetailHairs = () => {
    const detailHairs: THREE.Group = new THREE.Group();
    let hairGeometry = new THREE.BoxGeometry(headSize * 0.8, mainHairSizeY, 10);
    const hairPositionZ = (-headSize * 0.75) / 2 - hairGeometry.parameters.depth / 2;

    this.createFrontHairParting(detailHairs, hairPositionZ, hairGeometry);

    this.createFrontHairRightSideDetails(detailHairs, hairPositionZ);

    this.createBackHairDetails(detailHairs);

    return detailHairs;
  };

  private createFrontHairParting = (
    detailHairs: THREE.Group,
    hairPositionZ: number,
    hairGeometry: THREE.BoxGeometry,
  ) => {
    // hair lowest stripe
    let hair = new THREE.Mesh(hairGeometry, this.hairMat);
    let hairPositionX = headSize / 2 - hairGeometry.parameters.width / 2 + mainHairSizeX;
    let hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 2 - hairGeometry.parameters.height;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    detailHairs.add(hair);

    // hair parting second lowest stripe
    hairGeometry = new THREE.BoxGeometry(headSize * 0.75, mainHairSizeY, 10);
    hair = new THREE.Mesh(hairGeometry, this.hairMat);
    hairPositionX = headSize / 2 - hairGeometry.parameters.width / 2 + mainHairSizeX;
    hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 2;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    detailHairs.add(hair);

    // hair parting third lowest stripe
    hairGeometry = new THREE.BoxGeometry(headSize * 0.63, mainHairSizeY, 10);
    hair = new THREE.Mesh(hairGeometry, this.hairMat);
    hairPositionX = headSize / 2 - hairGeometry.parameters.width / 2 + mainHairSizeX;
    hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 2 + hairGeometry.parameters.height;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    detailHairs.add(hair);
  };

  private createFrontHairRightSideDetails = (detailHairs: THREE.Group, hairPositionZ: number) => {
    let hairGeometry = new THREE.BoxGeometry(headSize / 4, mainHairSizeY, 10);
    let hair = new THREE.Mesh(hairGeometry, this.hairMat);
    let hairPositionX = -headSize / 2 - mainHairSizeX / 2;
    let hairPositionY = headPositionY + headSize / 2 - mainHairSizeY + 1.2;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    hair.rotateZ(this.deg2rad(90));
    detailHairs.add(hair);

    hairGeometry = new THREE.BoxGeometry(headSize * 0.225, mainHairSizeY, 10);
    hair = new THREE.Mesh(hairGeometry, this.hairMat);
    hairPositionX = -headSize / 2 - mainHairSizeX / 2 + hairGeometry.parameters.depth;
    hairPositionY = headPositionY + headSize / 2 - 6.5;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    hair.rotateZ(this.deg2rad(90));
    detailHairs.add(hair);

    hairGeometry = new THREE.BoxGeometry(headSize / 5, mainHairSizeY, 10);
    hair = new THREE.Mesh(hairGeometry, this.hairMat);
    hairPositionX = -headSize / 2 - mainHairSizeX / 2 + 2 * hairGeometry.parameters.depth;
    hairPositionY = headPositionY + headSize / 2 - 3;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    hair.rotateZ(this.deg2rad(90));
    detailHairs.add(hair);

    hairGeometry = new THREE.BoxGeometry(headSize / 5, mainHairSizeY, 10);
    hair = new THREE.Mesh(hairGeometry, this.hairMat);
    hairPositionX = -headSize / 2 - mainHairSizeX / 2 + 3 * hairGeometry.parameters.depth;
    hairPositionY = headPositionY + headSize / 2 - 3;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    hair.rotateZ(this.deg2rad(90));
    detailHairs.add(hair);

    hairGeometry = new THREE.BoxGeometry(headSize / 5, mainHairSizeY, 10);
    hair = new THREE.Mesh(hairGeometry, this.hairMat);
    hairPositionX = -headSize / 2 - mainHairSizeX / 2 + 4 * hairGeometry.parameters.depth;
    hairPositionY = headPositionY + headSize / 2 - 3;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    hair.rotateZ(this.deg2rad(90));
    detailHairs.add(hair);

    hairGeometry = new THREE.BoxGeometry(headSize * 0.16, mainHairSizeY, 10);
    hair = new THREE.Mesh(hairGeometry, this.hairMat);
    hairPositionX = -headSize / 2 - mainHairSizeX / 2 + 5 * hairGeometry.parameters.depth;
    hairPositionY = headPositionY + headSize / 2;
    hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
    hair.rotateZ(this.deg2rad(90));
    detailHairs.add(hair);
  };

  private createBackHairDetails = (detailHairs: THREE.Group) => {
    const maxBackDetailsHair = headSize / mainHairSizeX + 2;
    for (let i = 0; i < maxBackDetailsHair; i++) {
      const half = Math.floor((maxBackDetailsHair - 1) / 2);
      const sameStartSameEndIdx = i > half ? half - (i - half) : i;
      const base = 12;
      const step = 7;
      let factor = this.getFactorForBackHairDetails(sameStartSameEndIdx);

      const backHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ * 0.6);
      const hair = new THREE.Mesh(backHairGeometry, this.hairMat);
      const hairPositionX = headSize / 2 + mainHairSizeX / 2 - i * mainHairSizeX;
      const hairPositionZ = mainHairSizeZ / 2;
      const hairPositionY =
        headPositionY + headSize / 2 + mainHairSizeY - backHairGeometry.parameters.depth / 2 - (base + factor * step);

      hair.rotateX(this.deg2rad(90));
      hair.position.set(hairPositionX, hairPositionY, hairPositionZ);

      detailHairs.add(hair);
    }
  };

  private getFactorForBackHairDetails = (idx: number): number => {
    if (idx <= 1) return 0;

    if (idx <= 3) return 1;

    if (idx <= 5) return 2;

    return 3;
  };

  private createBody = () => {
    const corpusGeometry = new THREE.BoxGeometry(bodySizeX, bodySizeY, bodySizeZ);
    const body = new THREE.Group();

    const corpus = new THREE.Mesh(corpusGeometry, this.shirtMat);
    corpus.position.set(0, bodyPositionY, 0);

    const [leftArm, rightArm]: THREE.Group[] = this.createArms(corpus);

    corpus.add(leftArm, rightArm);

    body.add(corpus);
    this.character.add(body);
  };

  private createArms = (corpus: THREE.Mesh<THREE.BoxGeometry, THREE.Material>): THREE.Group[] => {
    const upperArmGeometry = new THREE.BoxGeometry(upperArmSizeX, upperArmSizeY, upperArmSizeZ);
    const lowerArmGeometry = new THREE.BoxGeometry(lowerArmSizeX, lowerArmSizeY, lowerArmSizeZ);
    const thumbGeometry = new THREE.BoxGeometry(thumbSizeX, thumbSizeY, thumbSizeZ);
    const fingerGeometry = new THREE.BoxGeometry(fingerSizeX, fingerSizeY, fingerSizeZ);

    const leftArm = this.createArm(corpus.geometry, upperArmGeometry, lowerArmGeometry, thumbGeometry, fingerGeometry);
    const rightArm = this.createArm(
      corpus.geometry,
      upperArmGeometry,
      lowerArmGeometry,
      thumbGeometry,
      fingerGeometry,
      false,
    );

    return [leftArm, rightArm];
  };

  private createArm = (
    corpus: THREE.BoxGeometry,
    upperArmGeometry: THREE.BoxGeometry,
    lowerArmGeometry: THREE.BoxGeometry,
    thumbGeometry: THREE.BoxGeometry,
    fingerGeometry: THREE.BoxGeometry,
    isLeftArm: boolean = true,
  ) => {
    const arm = new THREE.Group();
    const hand = new THREE.Group();
    const sideModificator = isLeftArm ? 1 : -1;

    const { upperArm, lowerArm, thumb, fingers } = this.createArmMeshes(
      upperArmGeometry,
      lowerArmGeometry,
      thumbGeometry,
      fingerGeometry,
    );
    hand.add(thumb, fingers);

    upperArm.position.set(
      sideModificator * (corpus.parameters.width / 2 + upperArmGeometry.parameters.width / 2),
      corpus.parameters.height / 2 - upperArmGeometry.parameters.height / 2,
      0,
    );
    lowerArm.position.set(
      sideModificator * (corpus.parameters.width / 2 + upperArmGeometry.parameters.width / 2),
      upperArm.position.y - upperArmGeometry.parameters.height / 2 - lowerArm.geometry.parameters.height / 2,
      0,
    );
    thumb.position.set(
      sideModificator *
        (corpus.parameters.width / 2 + upperArmGeometry.parameters.width / 2 + thumbGeometry.parameters.width / 2),
      lowerArm.position.y - lowerArmGeometry.parameters.height / 2,
      0,
    );
    fingers.position.set(
      sideModificator *
        (corpus.parameters.width / 2 + upperArmGeometry.parameters.width / 2 - fingerGeometry.parameters.width / 2),
      lowerArm.position.y - lowerArmGeometry.parameters.height / 2,
      0,
    );

    arm.add(upperArm, lowerArm, hand);

    return arm;
  };

  private createArmMeshes = (
    upperArmGeometry: THREE.BoxGeometry,
    lowerArmGeometry: THREE.BoxGeometry,
    thumbGeometry: THREE.BoxGeometry,
    fingerGeometry: THREE.BoxGeometry,
  ) => {
    const upperArm = new THREE.Mesh(upperArmGeometry, this.shirtMat);
    const lowerArm = new THREE.Mesh(lowerArmGeometry, this.skinMat);
    const thumb = new THREE.Mesh(thumbGeometry, this.skinMat);
    const fingers = new THREE.Mesh(fingerGeometry, this.skinMat);

    return { upperArm, lowerArm, thumb, fingers };
  };

  private createBelt = () => {
    const beltGeometry = new THREE.BoxGeometry(beltSizeX, beltSizeY, beltSizeZ);
    const buckleGeometry = new THREE.BoxGeometry(buckleSizeX, buckleSizeY, buckleSizeZ);

    const belt = new THREE.Mesh(beltGeometry, this.beltMat);
    belt.position.set(0, beltPositionY, 0);

    const buckle = new THREE.Mesh(buckleGeometry, this.buckleMat);
    buckle.position.z = -1 * (beltGeometry.parameters.depth / 2 + 1);

    belt.add(buckle);
    this.character.add(belt);
  };

  private createLegs = () => {
    const legs = new THREE.Group();
    const legGeometry = new THREE.BoxGeometry(legSizeX, legSizeY, legSizeZ);
    const legSeperatorGeometry = new THREE.BoxGeometry(legSeperatorSizeX, legSeperatorSizeY, legSeperatorSizeZ);

    const leftLeg = new THREE.Mesh(legGeometry, this.legMat);
    leftLeg.position.set(legGeometry.parameters.width / 2, legPositionY, 0);

    const rightLeg = new THREE.Mesh(legGeometry, this.legMat);
    rightLeg.position.set(-legGeometry.parameters.width / 2, legPositionY, 0);

    const legSeperator = new THREE.Mesh(legSeperatorGeometry, this.legSeperatorMat);
    legSeperator.position.set(0, legPositionY - legSeperatorGeometry.parameters.height / 2, 0);

    legs.add(leftLeg, rightLeg, legSeperator);
    this.character.add(legs);
  };

  private createFeet = () => {
    const feet = new THREE.Group();
    const ankleGeometry = new THREE.BoxGeometry(ankleSizeX, ankleSizeY, ankleSizeZ);
    const footGeometry = new THREE.BoxGeometry(footSizeX, footSizeY, footSizeZ);

    const leftAnkle = new THREE.Mesh(ankleGeometry, this.footMat);
    leftAnkle.position.set(legSizeX / 2, anklePositonY, 0);
    const rightAnkle = new THREE.Mesh(ankleGeometry, this.footMat);
    rightAnkle.position.set(-legSizeX / 2, anklePositonY, 0);

    const leftFoot = new THREE.Mesh(footGeometry, this.footMat);
    leftFoot.position.set(legSizeX / 2, footPositionY, footPositionZ);
    const rightFoot = new THREE.Mesh(footGeometry, this.footMat);
    rightFoot.position.set(-legSizeX / 2, footPositionY, footPositionZ);

    feet.add(leftAnkle, rightAnkle, leftFoot, rightFoot);
    this.character.add(feet);
  };

  public draw = () => {
    this.createHead();
    this.createHairs();
    this.createBody();
    this.createBelt();
    this.createLegs();
    this.createFeet();
  };
}
