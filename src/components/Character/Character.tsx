import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MiniMe } from "./miniMe";
import styled from "styled-components"

const StyledDiv = styled.div`
  cursor: crosshair;
`

export const Character = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouse = {
      x: {
        current: 0,
        previous: 0,
        calc: 0,
      },
      y: {
        current: 0,
        previous: 0,
        calc: 0,
      },
    };

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 4000);

    camera.position.set(0, 400, -1000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const axesHelper = new THREE.AxesHelper(2000);
    scene.add(axesHelper);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    ref?.current?.appendChild(renderer.domElement);

    const init = () => {
      window.addEventListener("load", () => {
        document.addEventListener("mousemove", mousemove, false);
      });
    };

    const mousemove = (event: MouseEvent) => {
      mouse.x.current = event.clientX;
      mouse.y.current = event.clientY;
      mouse.x.calc = mouse.x.current - window.innerWidth / 2;
      mouse.y.calc = mouse.y.current - window.innerHeight / 2;
    };

    const createLight = () => {
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
      dirLight.position.set(200, 200, 200);
      dirLight.castShadow = true;

      const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
      backLight.position.set(-200, 200, 50);
      backLight.castShadow = true;

      scene.add(backLight);
      scene.add(hemiLight);
      scene.add(dirLight);
    };

    const createCharacter = () => {
      const character = new MiniMe();
      scene.add(character.character);
    };

    function resizeCanvasToDisplaySize() {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        // you must pass false here or three.js sadly fights the browser
        renderer.setSize(width, height, true);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    }

    const animate = function () {
      resizeCanvasToDisplaySize();
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    init();
    createLight();
    createCharacter();
    animate();
  }, []);

  return <StyledDiv ref={ref} id="character"></StyledDiv>;
};
