import { ClassAttributes, ReactNode } from "react";
import { Card, CardProps } from "antd";

interface IProps extends CardProps, ClassAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
}

function CharounCard({ children, title, ...attributes }: IProps) {
  return (
    <Card
      title={title}
      {...attributes}
      style={{
        height: "fit-content",
        ...attributes?.style,
      }}
    >
      {children}
    </Card>
  );
}

export default CharounCard;
