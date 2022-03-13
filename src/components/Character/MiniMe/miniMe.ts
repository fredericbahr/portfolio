import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { mergeMeshes } from "../characterUtils";
import { IArmMeshes } from "../interface";
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
  buttonSizeX,
  buttonSizeY,
  buttonSizeZ,
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
  keyboardPositionX,
  keyboardPositionY,
  keyboardPositionZ,
  keyboardScale,
  laptopPositionX,
  laptopPositionY,
  laptopPositionZ,
  laptopScale,
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
} from "../units";

/**
 * Class for creating the replication of myself
 */
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
  private buttonMat: THREE.Material;
  private gadget: THREE.Group | null;

  /**
   * defines the materials and calls draw
   */
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
      color: "#808080",
      side: THREE.DoubleSide,
    });
    this.legMat = new THREE.MeshLambertMaterial({ color: "#003049" });
    this.legSeperatorMat = new THREE.MeshLambertMaterial({ color: "#181114" });
    this.footMat = new THREE.MeshLambertMaterial({ color: "#f77f00" });
    this.hairMat = new THREE.MeshLambertMaterial({ color: "#ad9032" });
    this.buttonMat = new THREE.MeshLambertMaterial({ color: "#808080", side: THREE.DoubleSide });

    this.gadget = null;

    this.draw();
  }

  /**
   * Sets the material of the color
   * @param colorIndex the index of the color that is set
   */
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

  /**
   * creates the head of the character
   */
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

  /**
   * Creates the eyes and eyebrowns of the character
   * @param head the mesh representing the head of the character
   * @returns {THREE.Group} an array containing the eyes and eyeBrowns
   */
  private createEyesAndEyebrowns = (head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>): THREE.Group[] => {
    const eyeGeometry = new THREE.BoxGeometry(eyeSizeX, eyeSizeY, eyeSizeZ);
    const eyes = this.createEyes(head, eyeGeometry);
    const eyeBrowns = this.createEyeBrowns(head, eyeGeometry);

    return [eyes, eyeBrowns];
  };

  /**
   * Creates the eyes of the character
   * @param head the mesh representing the head of the character
   * @param eyeGeometry the geometry for the eyes
   * @returns {THREE.Group} the eyes of the character
   */
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

  /**
   * Creates the retinas of the character
   * @returns an array containing the meshes representing the left and right retina
   */
  private createRetinas = (): THREE.Mesh<THREE.BoxGeometry, THREE.Material>[] => {
    const retinaGeometry = new THREE.BoxGeometry(7.5, 7.5, 1);

    const leftRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    leftRetina.position.set(-2.5, -5, -1);

    const rightRetina = new THREE.Mesh(retinaGeometry, this.retinaMat);
    rightRetina.position.set(2.5, -5, -1);

    return [leftRetina, rightRetina];
  };

  /**
   * Creates the eyebrowns of the character
   * @param head the mesh representing the head of the character
   * @param eyeGeometry the geometry of the eyes
   * @returns {THREE.Group} the eyebrowns of hte character
   */
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

  /**
   * Creates the mouth of the character
   * @param head  the mesh representing the head of the character
   * @returns the mouth of the character
   */
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

  /**
   * Creates the glasses and ears of the character
   * @param head the mesh representing the head of the character
   * @returns an array containing the glasses and ears
   */
  private createGlassesAndEars = (head: THREE.Mesh<THREE.BoxGeometry, THREE.Material>): THREE.Group[] => {
    const glassGeometry = new THREE.RingGeometry(27, 32, 4);
    const glasses = this.createGlasses(head, glassGeometry);
    const ears = this.createEars(head, glassGeometry);

    return [glasses, ears];
  };

  /**
   * Creates the glasses of the character
   * @param head the mesh representing the head of the character
   * @param glassGeometry the geometry of the glasses
   * @returns the glasses of the character
   */
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

  /**
   * Creates the ears of the character
   * @param head the mesh representing the head of the character
   * @param glassGeometry the geometry of classes
   * @returns the ears of the character
   */
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

  /**
   * Creates the hairs of the character
   */
  private createHairs = () => {
    const hair: THREE.Group = new THREE.Group();
    let mainHair: THREE.Mesh;
    const basicHairs: THREE.Group = new THREE.Group();
    let detailHairs: THREE.Group;
    let baiscHairGeometry: THREE.BoxGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ);

    const maxTopHair = headSize / mainHairSizeX;
    this.createTopHair(basicHairs, baiscHairGeometry, maxTopHair);

    const maxBackHair = headSize / mainHairSizeX + 2;
    this.createBackHair(basicHairs, maxBackHair);

    const maxSideHair = (headSize * 0.75) / mainHairSizeX;
    this.createSideHair(basicHairs, baiscHairGeometry, maxSideHair);
    this.createSideHair(basicHairs, baiscHairGeometry, maxSideHair, false);

    detailHairs = this.createDetailHairs();

    mainHair = mergeMeshes(basicHairs, this.hairMat);

    hair.add(mainHair, detailHairs);
    this.character.add(hair);
  };

  /**
   * Creates the basic top hair of the character
   * @param basicHairs the group containing the basic hairs of the character
   * @param baiscHairGeometry the geometry of the basic hair
   * @param maxTopHair how many blocks are needed for the top hairs
   */
  private createTopHair = (basicHairs: THREE.Group, baiscHairGeometry: THREE.BoxGeometry, maxTopHair: number) => {
    const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 2;
    for (let i = 0; i < maxTopHair; i++) {
      const hair = new THREE.Mesh(baiscHairGeometry, this.hairMat);
      const hairPositionX = headSize / 2 - mainHairSizeX / 2 - i * mainHairSizeX;
      hair.position.set(hairPositionX, hairPositionY, 0);
      basicHairs.add(hair);
    }
  };

  /**
   * Creates the basic back hair of the character
   * @param basicHairs the group containing the basic hairs of the character
   * @param maxBackHair how many blocks are needed for the back hairs
   */
  private createBackHair = (basicHairs: THREE.Group, maxBackHair: number) => {
    for (let i = 0; i < maxBackHair; i++) {
      const backHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ * 0.6);
      const hair = new THREE.Mesh(backHairGeometry, this.hairMat);
      const hairPositionX = headSize / 2 + mainHairSizeX / 2 - i * mainHairSizeX;
      const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY - backHairGeometry.parameters.depth / 2;
      const hairPositionZ = mainHairSizeZ / 2;
      hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      hair.rotateX(this.deg2rad(90));
      basicHairs.add(hair);
    }
  };

  /**
   * Creates the basic side hairs of the character
   * @param basicHairs the group containing the basic hairs of the character
   * @param baiscHairGeometry  the geometry of basic hairs
   * @param maxSideHair how many blocks are needed for the side hairs
   * @param {boolean} isLeftSide whether it should be rendered on the left or right side
   */
  private createSideHair = (
    basicHairs: THREE.Group,
    baiscHairGeometry: THREE.BoxGeometry,
    maxSideHair: number,
    isLeftSide: boolean = true,
  ) => {
    for (let i = 0; i < maxSideHair; i++) {
      let hair: THREE.Mesh;
      const sideMultiplier = isLeftSide ? 1 : -1;
      const hairPositionX = sideMultiplier * (headSize / 2 + mainHairSizeX / 2);
      const hairPositionZ = (-headSize * 0.75) / 2 + i * mainHairSizeX;

      if (i === 12) {
        baiscHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 25);
        hair = new THREE.Mesh(baiscHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 23.1;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i === 0) {
        baiscHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 10);
        hair = new THREE.Mesh(baiscHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 15.6;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i === 1) {
        baiscHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 7.5);
        hair = new THREE.Mesh(baiscHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 14.35;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i >= 10) {
        baiscHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2 + 10);
        hair = new THREE.Mesh(baiscHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 15.6;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else if (i < 4 || i >= 8) {
        baiscHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ / 2);
        hair = new THREE.Mesh(baiscHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 10.6;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      } else {
        baiscHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ * 0.4 + 3);
        hair = new THREE.Mesh(baiscHairGeometry, this.hairMat);
        const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 4 - mainHairSizeY - 6.5;
        hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
      }

      hair.rotateY(this.deg2rad(90));
      hair.rotateX(this.deg2rad(90));
      basicHairs.add(hair);
    }
  };

  /**
   * Creates the detail hairs of the character
   * @returns the detail hairs of the character
   */
  private createDetailHairs = (): THREE.Group => {
    const detailHairs: THREE.Group = new THREE.Group();
    let hairGeometry = new THREE.BoxGeometry(headSize * 0.8, mainHairSizeY, 10);
    const hairPositionZ = (-headSize * 0.75) / 2 - hairGeometry.parameters.depth / 2;

    this.createFrontHairParting(detailHairs, hairPositionZ, hairGeometry);

    this.createFrontHairRightSideDetails(detailHairs, hairPositionZ);

    this.createBackHairDetails(detailHairs);

    return detailHairs;
  };

  /**
   * Creates the hair parting on the front left side
   * @param detailHairs the group containing the detail hairs of the character
   * @param hairPositionZ the position of the hair on the z-axis
   * @param hairGeometry the geometry of the hair
   */
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

  /**
   * Creates the details on the right side
   * @param detailHairs the group containing the detail hairs of the character
   * @param hairPositionZ the position of the hair on the z-axis
   */
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

  // private createTopHairDetails = (detailHairs: THREE.Group) => {
  //   const maxTopHairDetails = (headSize * 0.63) / topHairDetailsSizeX - 1;
  //   const geometry = new THREE.BoxGeometry(topHairDetailsSizeX, topHairDetailsSizeY, topHairDetailsSizeZ);
  //   const hairPositionY = headPositionY + headSize / 2 + mainHairSizeY / 2 + topHairDetailsSizeY;
  //   const hairPositionZ = (-headSize * 0.75) / 2 + topHairDetailsSizeZ / 2;

  //   for (let i = 0; i < maxTopHairDetails; i++) {
  //     const hairPositionX = headSize / 2 - mainHairSizeX / 2 + topHairDetailsSizeX - i * topHairDetailsSizeX;
  //     const hair = new THREE.Mesh(geometry, this.hairMat);
  //     hair.position.set(hairPositionX, hairPositionY, hairPositionZ);
  //     detailHairs.add(hair);
  //   }
  // };

  /**
   * Creates the detail hairs on the back
   * @param detailHairs the group containing the detail hairs of the character
   */
  private createBackHairDetails = (detailHairs: THREE.Group) => {
    const maxBackDetailsHair = headSize / mainHairSizeX + 2;
    const backHairGeometry = new THREE.BoxGeometry(mainHairSizeX, mainHairSizeY, mainHairSizeZ * 0.6);
    const half = Math.floor((maxBackDetailsHair - 1) / 2);
    const base = 12;
    const step = 7;

    for (let i = 0; i < maxBackDetailsHair; i++) {
      const sameStartSameEndIdx = i > half ? half - (i - half) : i;
      let factor = this.getFactorForBackHairDetails(sameStartSameEndIdx);

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

  /**
   * Gets the factor for positioning the back side hair blocks
   * @param idx the index of the loop
   * @returns {number} the factor for the positioning
   */
  private getFactorForBackHairDetails = (idx: number): number => {
    if (idx <= 1) return 0;

    if (idx <= 3) return 1;

    if (idx <= 5) return 2;

    return 3;
  };

  /**
   * Creates the body of the character
   */
  private createBody = () => {
    const corpusGeometry = new THREE.BoxGeometry(bodySizeX, bodySizeY, bodySizeZ);
    const body = new THREE.Group();

    const corpus = new THREE.Mesh(corpusGeometry, this.shirtMat);
    corpus.position.set(0, bodyPositionY, 0);

    const [leftArm, rightArm]: THREE.Group[] = this.createArms(corpus);

    const buttons: THREE.Group = this.createButtons();

    corpus.add(leftArm, rightArm, buttons);

    body.add(corpus);
    this.character.add(body);
  };

  /**
   * Creates the buttons on the shirt
   * @returns the buttons created
   */
  private createButtons = (): THREE.Group => {
    const buttons: THREE.Group = new THREE.Group();

    const totalButtons = 4;

    for (let i = 0; i < totalButtons; i++) {
      const button = this.createButton(i);
      buttons.add(button);
    }

    return buttons;
  };

  /**
   * Creates a single button of the shirt
   * @param factor the factor for positiong
   * @returns a single button of the shirt
   */
  private createButton = (factor: number): THREE.Mesh => {
    const buttonPositionYOffset = -35;
    const buttonPositionYStep = 50;
    const buttonGeometry = new THREE.BoxGeometry(buttonSizeX, buttonSizeY, buttonSizeZ);
    const button = new THREE.Mesh(buttonGeometry, this.buttonMat);
    const buttonPositionZ = -bodySizeZ / 2 - 1;
    const buttonPositionX = 0;
    const buttonPositionY = buttonPositionYOffset + bodySizeY / 2 - factor * buttonPositionYStep;
    button.position.set(buttonPositionX, buttonPositionY, buttonPositionZ);

    return button;
  };

  /**
   * Creates the arms of the character
   * @param corpus the mesh representing the corpus of the character
   * @returns an array containing the left and right arm
   */
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

  /**
   * Creates one arm
   * @param corpus the mesh representing the corpus of the character
   * @param upperArmGeometry the geometry of the upper arm
   * @param lowerArmGeometry the geometry of the lower arm
   * @param thumbGeometry the geometry of the thumb
   * @param fingerGeometry the geometry of the finger
   * @param {boolean} isLeftArm whether its the left or right arm
   * @returns the created arm
   */
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

    if (!isLeftArm) {
      if (this.gadget) {
        hand.add(this.gadget);
      }
    }

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

  /**
   * Creates the arm meshes
   * @param upperArmGeometry the geometry of the upper arm
   * @param lowerArmGeometry the geomtry of the lower arm
   * @param thumbGeometry the geometry of the thumb
   * @param fingerGeometry the geometry of the finger
   * @returns an object containing the meshes
   */
  private createArmMeshes = (
    upperArmGeometry: THREE.BoxGeometry,
    lowerArmGeometry: THREE.BoxGeometry,
    thumbGeometry: THREE.BoxGeometry,
    fingerGeometry: THREE.BoxGeometry,
  ): IArmMeshes => {
    const upperArm = new THREE.Mesh(upperArmGeometry, this.shirtMat);
    const lowerArm = new THREE.Mesh(lowerArmGeometry, this.skinMat);
    const thumb = new THREE.Mesh(thumbGeometry, this.skinMat);
    const fingers = new THREE.Mesh(fingerGeometry, this.skinMat);

    return { upperArm, lowerArm, thumb, fingers };
  };

  /**
   * Creates the belt of the character
   */
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

  /**
   * Creates the leg of the character
   */
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

  /**
   * creates the feet of the character
   */
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

  private transform = () => {
    this.character.translateY(-75);
  };

  private createLaptop = async () => {
    const loader = new GLTFLoader();
    const laptop = await loader.loadAsync("src/assets/models/laptop/closed-laptop.gltf");

    laptop.scene.scale.set(laptopScale, laptopScale, laptopScale);
    laptop.scene.position.set(laptopPositionX, laptopPositionY, laptopPositionZ);
    laptop.scene.rotation.set(this.deg2rad(90), 0, this.deg2rad(-90));

    this.gadget = laptop.scene;
    this.draw();
  };

  /**
   * Creates the keyboard
   * Loads the model and transforms it to correct position/size
   */
  private createKeyboard = async () => {
    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    const materials = await mtlLoader.loadAsync("./src/assets/models/keyboard/keyboard.mtl");
    materials.preload();
    objLoader.setMaterials(materials);

    const keyboard = await objLoader.loadAsync("./src/assets/models/keyboard/keyboard.obj");
    keyboard.scale.set(keyboardScale, keyboardScale, keyboardScale);
    keyboard.position.set(keyboardPositionX, keyboardPositionY, keyboardPositionZ);
    keyboard.rotation.set(this.deg2rad(90), 0, this.deg2rad(-90));

    this.gadget = keyboard;

    console.log(this.gadget);
    this.draw();
  };

  /**
   * Resets the character
   * Resets position and deletes children
   */
  private reset = () => {
    this.character.clear();
    this.character.position.set(0, 0, 0);
  };

  /**
   * draws the character
   */
  public draw = () => {
    this.reset();
    this.createHead();
    this.createHairs();
    this.createBody();
    this.createBelt();
    this.createLegs();
    this.createFeet();
    this.transform();
  };

  /**
   * Set gadget of the character in the right arm
   * @param idx the index of the gadget
   */
  public setGadget = async (idx: number) => {
    const gadgets = [null, this.createLaptop, this.createKeyboard];

    const gadget = gadgets[idx];
    if (gadget) {
      await gadget();
    }
  };
}
