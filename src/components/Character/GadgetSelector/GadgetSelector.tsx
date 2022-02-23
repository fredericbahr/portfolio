import CloseIcon from "@mui/icons-material/Close";
import { IconButton, lighten, Popover, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface IProps {
  anchorIcon: React.ReactNode;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GadgetWrapper = styled.div`
  display: flex;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 10px;
  color: ${(props) => props.theme.colors.whitefontcolor};
  background-color: ${(props) => lighten(props.theme.colors.mainblack, 0.25)};
`;

const StyledTooltip = styled(Tooltip)`
  padding: 0;
`;

const StyledPopover = styled(Popover)`
  & .MuiPaper-root {
    background-color: transparent;
  }
`;

//TODO: add menu
// https://blog.activision.com/call-of-duty/2020-04/Create-the-Ultimate-Weapon-in-Gunsmith-Customs-Now-Live-in-Modern-Warfare
// https://www.artstation.com/artwork/nQyVk1
// https://codepen.io/eroxburgh/full/gOayPKV
export const GadgetSelector = ({ children, anchorIcon }: IProps) => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    handleClose()
  }, [anchorIcon])

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
          <IconButton onClick={open ? handleClose : handleClick}>{open ? <StyledCloseIcon /> : anchorIcon}</IconButton>
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
            {children}
          </StyledPopover>
        )}
      </GadgetWrapper>

      {/* <StyledLine /> */}
    </Wrapper>
  );
};
