import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  open: boolean;
  anchorElement: null | HTMLElement;
  onClose: () => void;
  handleClose: () => void;
}

export const LanguageMenu = ({ open, anchorElement, onClose, handleClose }: IProps) => {
  const { t, i18n } = useTranslation();
  const handleClick = (language: string) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <Menu open={open} anchorEl={anchorElement} onClose={onClose}>
      <MenuItem onClick={() => handleClick("en")}>{t("languageMenu.english")}</MenuItem>
      <MenuItem onClick={() => handleClick("de")}>{t("languageMenu.german")}</MenuItem>
    </Menu>
  );
};
