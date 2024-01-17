import Link from "next/link";
import {IconProfile} from "@fash-q/assets/icon";

interface IAppHeaderProfile {
  className?: string;
}

function AppHeaderProfile({className}: IAppHeaderProfile) {
  return (
    <Link href="/profile" className={className}>
      <IconProfile className="w-5 h-5 text-textPrimary" />
    </Link>
  );
}

export default AppHeaderProfile;
