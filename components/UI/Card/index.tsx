import React from "react";
interface Props {
  children: React.ReactNode;
  className: string;
}
const Card: React.FC<Props> = ({ className, children }) => {
  return <div className={`${className} card`}>{children}</div>;
};
export default Card;
