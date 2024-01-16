import type {Metadata} from "next";
import StyledComponentsRegistry from "@fash-q/lib/antd/AntdRegistry";
import AntdProvider from "@fash-q/lib/antd/AntdProvider";
import {iranSans} from "@fash-q/assets/fonts/iranSansFont";
import {PropsWithChildren} from "react";
import "@fash-q/app/globals.scss";

export const metadata: Metadata = {
  title: "fash question",
  description: "fash question",
};

const className = `template antialiased ${iranSans.variable} font-IranSans bg-mainBg text-base text-textPrimary`;

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={className}>
        <StyledComponentsRegistry>
          <AntdProvider>{children}</AntdProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
