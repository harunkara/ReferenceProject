import { ClassAttributes, HTMLAttributes, ReactNode } from "react";
import "./styles.module.css";

interface IProps
  extends HTMLAttributes<HTMLDivElement>,
    ClassAttributes<HTMLDivElement> {
  children: ReactNode;
}

function CharounContainer({ children, ...attributes }: IProps) {
  return <div {...attributes}>{children}</div>;
}

export default CharounContainer;
