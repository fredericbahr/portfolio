import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MiniMe } from "./miniMe";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "../../styles/globalStyles";

const StyledDiv = styled.div`
  cursor: crosshair;
`;

export const Character = () => {
  const ref = useRef<HTMLDivElement>(null);
  const character = new MiniMe();
  const shouldAnimate = useRef(true);
  const mediaQuery = useMediaQuery(`(min-width: ${breakpoints.md})`);

  useEffect(() => {
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

    ref?.current?.replaceChildren(renderer.domElement);

    const init = () => {
      window.addEventListener("load", () => {});
    };

    const createLight = () => {
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.7);
      const ambientLight = new THREE.AmbientLight(0x404040, 1.2);

      scene.add(hemiLight);
      scene.add(ambientLight);
    };

    const createCharacter = () => {
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
      requestAnimationFrame(animate);

      if (shouldAnimate.current) {
        character.animate();
        shouldAnimate.current = false;
      }

      resizeCanvasToDisplaySize();
      controls.update();
      renderer.render(scene, camera);
    };

    init();
    createLight();
    createCharacter();
    animate();
  }, [mediaQuery]);

  return mediaQuery ? <StyledDiv ref={ref} id="character"></StyledDiv> : null;
};
