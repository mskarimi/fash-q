import {ReactNode} from "react";
import IconRoundedLeft from "@fash-q/assets/icon/IconRoundedLeft";
import IconProfile from "@fash-q/assets/icon/IconProfile";

export interface IIConsProps {
  className: string;
}

export type TIcons = (props: IIConsProps) => ReactNode;

export {IconRoundedLeft, IconProfile};
