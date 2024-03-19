import { ClassAttributes, HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface IProps
  extends HTMLAttributes<HTMLInputElement>,
    ClassAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: HTMLInputTypeAttribute | undefined;
}
export default function CharounInput({
  placeholder,
  type,
  ...attributes
}: IProps) {
  return (
    <>
      <input type={type} placeholder={placeholder} {...attributes}></input>
    </>
  );
}
