import CloseIcon from "@mui/icons-material/Close";
import LaptopIcon from "@mui/icons-material/Laptop";
import { IconButton, lighten, Popover, Tooltip } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { EmptyIcon } from "../../../assets/Icons/EmptyIcon";
import { HorizontalLine } from "./HorizontalLine";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GadgetWrapper = styled.div`
  display: flex;
`;

const StyledEmptyIcon = styled(EmptyIcon)`
  width: 15px;
  height: 15px;
  padding: 10px;
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.25)};

  & g {
    fill: ${(props) => props.theme.colors.whitefontcolor};
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 15px;
  height: 15px;
  padding: 10px;
  color: ${(props) => props.theme.colors.whitefontcolor};
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.25)};
`;

const StyledLine = styled(HorizontalLine)`
  height: 1px;
  width: 50px;
  margin-left: 5px;
`;

const StyledTooltip = styled(Tooltip)`
  padding: 0;
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  margin: 0 5px;
`;

const StyledLaptopIcon = styled(LaptopIcon)`
  width: 15px;
  height: 15px;
  padding: 10px;
  color: ${(props) => props.theme.colors.whitefontcolor};
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.1)};
`;

const MenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
`;

const StyledPopover = styled(Popover)`
  & .MuiPaper-root {
    background-color: transparent;
    margin-right: 10px;
  }
`;

//TODO: add menu
// https://blog.activision.com/call-of-duty/2020-04/Create-the-Ultimate-Weapon-in-Gunsmith-Customs-Now-Live-in-Modern-Warfare
// https://www.artstation.com/artwork/nQyVk1
// https://codepen.io/eroxburgh/full/gOayPKV
export const GadgetSelector = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <GadgetWrapper>
        <StyledTooltip title={t("miniMe.gadget")} placement="bottom">
          <IconButton onClick={handleClick}>{open ? <StyledCloseIcon /> : <StyledEmptyIcon />}</IconButton>
        </StyledTooltip>
        {open && (
          <StyledPopover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
          >
            <StyledIconButton>
              <StyledLaptopIcon />
            </StyledIconButton>
            <StyledIconButton>
              <StyledLaptopIcon />
            </StyledIconButton>
          </StyledPopover>
        )}
      </GadgetWrapper>

      {/* <StyledLine /> */}
    </Wrapper>
  );
};
