import { Input, InputProps } from "antd";
import { HTMLInputTypeAttribute } from "react";

interface IProps extends InputProps {
  placeholder?: string;
  type?: HTMLInputTypeAttribute | undefined;
}
export default function CharounInput({
  placeholder,
  type = "text",
  ...attributes
}: IProps) {
  return (
    <>
      <Input type={type} placeholder={placeholder} {...attributes}></Input>
    </>
  );
}
