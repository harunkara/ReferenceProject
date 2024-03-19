import { ClassAttributes, HTMLAttributes } from "react";

interface IProps
  extends HTMLAttributes<HTMLButtonElement>,
    ClassAttributes<HTMLButtonElement> {
  buttonText: string;
}

function CharounButton({ buttonText, ...attributes }: IProps) {
  return <button {...attributes}>{buttonText}</button>;
}

export default CharounButton;
