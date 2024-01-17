import {MouseEventHandler} from "react";
import IconRoundedRight from "@fash-q/assets/icon/IconRoundedRight";

interface IAppHeaderBack {
  onClick?: MouseEventHandler;
  className?: string;
}

function AppHeaderBack({onClick, className}: IAppHeaderBack) {
  return (
    <button className={className} onClick={onClick}>
      <IconRoundedRight className="w-5 h-5 text-textPrimary" />
    </button>
  );
}

export default AppHeaderBack;
