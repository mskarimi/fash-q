import {ReactNode} from "react";
import classNames from "classnames";

interface IAppHeader {
  right?: ReactNode;
  body?: ReactNode;
  left?: ReactNode;
  classNameLeft?: string;
  classNameRight?: string;
  classNameBody?: string;
  classNameContainer?: string;
}

function AppHeader(props: IAppHeader) {
  const {
    left,
    right,
    body,
    classNameRight = "",
    classNameLeft = "",
    classNameBody = "",
    classNameContainer = "",
  } = props;

  const container = classNames({
    "flex relative items-center text-textPrimary h-headerNormal px-screenSpace":
      true,
    "justify-between": !body,
    [classNameContainer]: classNameContainer,
  });

  const rightClassName = classNames({
    "flex items-center": true,
    [classNameRight]: classNameRight,
  });

  const bodyClassName = classNames({
    "flex flex-1 items-center justify-center font-semibold text-[15px]": true,
    [classNameBody]: classNameBody,
  });
  const leftClassName = classNames({
    "flex items-center": true,
    [classNameLeft]: classNameLeft,
  });

  return (
    <div className={container}>
      {right ? <div className={rightClassName}>{right}</div> : null}
      {body ? <div className={bodyClassName}>{body}</div> : null}
      {left ? <div className={leftClassName}>{left}</div> : null}
    </div>
  );
}

export default AppHeader;
