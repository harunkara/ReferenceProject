import { Button, ButtonProps } from "antd";
import { ClassAttributes } from "react";

interface IProps extends ButtonProps, ClassAttributes<HTMLButtonElement> {
  buttonText: string;
}

function CharounButton({ buttonText, ...attributes }: IProps) {
  return <Button {...attributes}>{buttonText}</Button>;
}

export default CharounButton;
