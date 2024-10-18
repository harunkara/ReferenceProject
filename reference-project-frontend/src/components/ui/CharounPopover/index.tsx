import { Popover, PopoverProps } from "antd";
import { ReactNode } from "react";

interface IProps extends PopoverProps {
  children: ReactNode;
}
export default function CharounPopover({ children, ...attributes }: IProps) {
  return <Popover {...attributes}>{children}</Popover>;
}
