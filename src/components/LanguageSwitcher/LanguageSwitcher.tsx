import { Translate } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { LanguageMenu } from "./LanguageMenu";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledTranslate = styled(Translate)`
  color: white;
`;

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
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
      <Tooltip title={t("languageMenu.tooltip") as string}>
        <IconButton onClick={handleClick}>
          <StyledTranslate />
        </IconButton>
      </Tooltip>
      <LanguageMenu anchorElement={anchorElement} onClose={handleClose} open={open} handleClose={handleClose} />
    </>
  );
};
