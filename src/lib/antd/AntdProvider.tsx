import {ConfigProvider, ThemeConfig} from "antd";
import {PropsWithChildren} from "react";
import {fontFamily} from "tailwindcss/defaultTheme";
import {iranSans} from "@fash-q/assets/fonts/iranSansFont";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#2bac5f",
    borderRadius: 10,
    fontFamily: `var(${iranSans.variable}), ${fontFamily.sans.join(", ")}`,
    colorText: "#252a3c",
    colorLinkActive: "#2bac5f",
    colorLinkHover: "#2bac5f",
  },
};

function AntdProvider({children}: PropsWithChildren) {
  return (
    <ConfigProvider direction="rtl" theme={theme}>
      {children}
    </ConfigProvider>
  );
}

export default AntdProvider;
