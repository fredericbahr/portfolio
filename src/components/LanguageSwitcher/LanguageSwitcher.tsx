import { Translate } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { LanguageMenu } from "./LanguageMenu";
import styled from "styled-components"

const StyledTranslate = styled(Translate)`
    color: white;
`

export const LanguageSwitcher = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <StyledTranslate />
      </IconButton>
      <LanguageMenu anchorElement={anchorElement} onClose={handleClose} open={open} handleClose={handleClose} />
    </>
  );
};
