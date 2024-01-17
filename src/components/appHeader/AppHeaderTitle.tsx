import classNames from "classnames";

interface IAppHeaderTitle {
  title: string;
  className?: string;
}

function AppHeaderTitle({title, className = ""}: IAppHeaderTitle) {
  const container = classNames({
    "absolute inset-0 flex items-center justify-center pointer-events-none":
      true,
    [className]: className,
  });
  return <div className={container}>{title}</div>;
}

export default AppHeaderTitle;
