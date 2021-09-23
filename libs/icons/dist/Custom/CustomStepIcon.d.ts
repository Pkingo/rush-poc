import { StepIconProps } from "@material-ui/core";
import React from "react";
interface CustomStepIconProps extends StepIconProps {
    completed: boolean;
}
export declare const CustomStepIcon: ({ completed, ...props }: CustomStepIconProps) => React.ReactElement;
export {};
