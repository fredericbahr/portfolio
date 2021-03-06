import { Close } from "@mui/icons-material";
import {
  alpha,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { darken } from "@mui/system";
import React, { useEffect, useState } from "react";
import { TFunction, useTranslation } from "react-i18next";
import styled from "styled-components";
import { IChatForm, IChatFormElement } from "../interface";

const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: ${(props) => props.theme.colors.mainblack};
    color: ${(props) => props.theme.colors.whitefontcolor};
  }
`;

const StyledTitleWrapper = styled.div`
  margin-right: 40px;
`;

const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: ${(props) => darken(props.theme.colors.mainblack, 0.3)};
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-bottom-color: ${(props) => props.theme.colors.mainwhite};
`;

const StyledClose = styled(Close)`
  color: ${(props) => props.theme.colors.whitefontcolor};
`;

const StyledDialogContent = styled(DialogContent)`
  margin-top: 10px;
`;

const StyledDialogContentText = styled(DialogContentText)`
  color: ${(props) => props.theme.colors.whitefontcolor};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  margin: 10px 0;

  & label {
    color: ${(props) => props.theme.colors.whitefontcolor};
  }

  & label.Mui-focused {
    color: #fbfffe;
  }

  & .MuiOutlinedInput-root {
    color: #fbfffe;

    & fieldset {
      border-color: ${alpha("#fbfffe", 0.5)};
    }

    &:hover fieldset {
      border-color: #fbfffe;
    }

    &.Mui-focused fieldset {
      border-color: #fbfffe;
    }
  }
`;

const StyledDialogActions = styled(DialogActions)`
  padding: 8px 24px;
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const renderFormElements = (formElements: IChatFormElement[], t: TFunction<"translation", undefined>) => {
  return formElements.map((formElement: IChatFormElement, idx: number) => {
    const renderedFormElement =
      formElement.type === "textarea" ? (
        <StyledTextField
          autoFocus={idx === 0}
          multiline
          minRows={3}
          size="small"
          name={formElement.name.toString()}
          required={formElement.required}
          label={t(formElement.label as any)}
        />
      ) : (
        <StyledTextField
          autoFocus={idx === 0}
          type={formElement.type}
          name={formElement.name.toString()}
          required={formElement.required}
          label={t(formElement.label as any)}
          size="small"
        />
      );
    return renderedFormElement;
  });
};

export const ChatFormMessage = ({ formElements, formSubmitID }: IChatForm) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsDialogOpen(true), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} TransitionComponent={Transition}>
      <StyledDialogTitle>
        <StyledTitleWrapper>
          <Typography gutterBottom component="p">
            Message me
          </Typography>
          <Typography variant="caption" component="p">
            I will get back to you as soon as possible.
          </Typography>
        </StyledTitleWrapper>
        <StyledIconButton onClick={() => setIsDialogOpen(false)}>
          <StyledClose />
        </StyledIconButton>
      </StyledDialogTitle>
      <StyledDialogContent>
        <StyledDialogContentText></StyledDialogContentText>
        <StyledForm method="POST" action={`https://formsubmit.co/${formSubmitID}`} id="contact-form">
          {renderFormElements(formElements, t)}
          <input type="hidden" name="_next" value="https://fredericbahr.github.io" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_template" value="table"></input>
        </StyledForm>
      </StyledDialogContent>
      <StyledDialogActions>
        <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
        <Button type="submit" form="contact-form">
          Send
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};
