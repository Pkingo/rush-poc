import { StepIcon, SvgIcon, StepIconProps } from "@material-ui/core";
import React from "react";

interface CustomStepIconProps extends StepIconProps {
  completed: boolean;
}

export const CustomStepIcon = ({
  completed,
  ...props
}: CustomStepIconProps): React.ReactElement => {
  if (completed) {
    return (
      <SvgIcon viewBox="0 0 24 24" color="primary" width="24" height="24">
        <circle cx="12" cy="12" r="12" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.6726 7.24408C18.998 7.56951 18.998 8.09715 18.6726 8.42259L10.7559 16.3393C10.4305 16.6647 9.90285 16.6647 9.57741 16.3393L6.24408 13.0059C5.91864 12.6805 5.91864 12.1528 6.24408 11.8274C6.56951 11.502 7.09715 11.502 7.42259 11.8274L10.1667 14.5715L17.4941 7.24408C17.8195 6.91864 18.3472 6.91864 18.6726 7.24408Z"
          fill="white"
        />
      </SvgIcon>
    );
  }
  return <StepIcon {...props} />;
};
