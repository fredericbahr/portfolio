import KeyboardIcon from "@mui/icons-material/Keyboard";
import LaptopIcon from "@mui/icons-material/Laptop";
import { IconButton, lighten, Stack, Tooltip, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EmptyIcon } from "../../assets/Icons/EmptyIcon";
import { breakpoints } from "../../styles/globalStyles";
import { GadgetSelector } from "./GadgetSelector/GadgetSelector";
import { HorizontalLine } from "./GadgetSelector/HorizontalLine";
import { MiniMe } from "./miniMe";

interface IGadget {
  id: number;
  icon: JSX.Element;
  name: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledDiv = styled.div`
  cursor: crosshair;
  width: 100%;
  height: 100%;
`;

const GadgetWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 38%;
  left: 15%;
`;

const StyledHorizontalLine = styled(HorizontalLine)`
  width: 2.5rem;
`;

const StyledEmptyIcon = styled(EmptyIcon)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.25)};

  & g {
    fill: ${(props) => props.theme.colors.whitefontcolor};
  }
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  margin: 0 5px;
`;

const StyledLaptopIcon = styled(LaptopIcon)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${(props) => props.theme.colors.whitefontcolor};
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.1)};
`;

const StyledKeyboardIcon = styled(KeyboardIcon)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${(props) => props.theme.colors.whitefontcolor};
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.1)};
`;

const StyledTooltip = styled(Tooltip)`
  padding: 0;
`;

export const Character = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [gadgetIconIndex, setGadgetIconIndex] = useState(0);
  const shouldAnimate = useRef(true);
  const mediaQuery = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const character = new MiniMe();
  const { t } = useTranslation();

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
  }, [ref, character]);

  useEffect(() => {
    character.setGadget(gadgetIconIndex);
  }, [gadgetIconIndex]);

  const gadgets: IGadget[] = [
    {
      id: 0,
      icon: <StyledEmptyIcon />,
      name: "empty",
    },
    {
      id: 1,
      icon: <StyledLaptopIcon />,
      name: "laptop",
    },
    {
      id: 2,
      icon: <StyledKeyboardIcon />,
      name: "keyboard",
    },
  ];

  const renderGadgets = () => {
    return gadgets
      .filter((gadget: IGadget) => gadget.id !== gadgetIconIndex)
      .map((gadget: IGadget) => (
        <StyledTooltip title={t(`miniMe.${gadget.name}` as any)}>
          <StyledIconButton onClick={() => setGadgetIconIndex(gadget.id)}>{gadget.icon}</StyledIconButton>
        </StyledTooltip>
      ));
  };

  return mediaQuery ? (
    <Wrapper>
      <StyledDiv ref={ref} id="character"></StyledDiv>
      <GadgetWrapper>
        <Stack direction="row" spacing={2}>
          <GadgetSelector anchorIcon={gadgets[gadgetIconIndex].icon}>{renderGadgets()}</GadgetSelector>
          <StyledHorizontalLine />
        </Stack>
      </GadgetWrapper>
    </Wrapper>
  ) : null;
};
