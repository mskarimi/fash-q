import {ReactNode} from "react";
import IconRoundedLeft from "@fash-q/assets/icon/IconRoundedLeft";
import IconProfile from "@fash-q/assets/icon/IconProfile";
import IconCurrentLocation from "@fash-q/assets/icon/IconCurrentLocation";

export interface IIConsProps {
  className: string;
}

export type TIcons = (props: IIConsProps) => ReactNode;

export {IconRoundedLeft, IconProfile, IconCurrentLocation};
