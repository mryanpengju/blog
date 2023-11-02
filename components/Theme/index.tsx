"use client";
import theme from "@/theme";
import {ConfigProvider} from "antd";
import {useTheme} from "next-themes";
import Image from "next/image";
import {useState} from "react";
const ThemsComponents = () => {
  const {systemTheme, theme: mytheme, setTheme} = useTheme();
  const currentTheme = mytheme === "system" ? systemTheme : mytheme;
  const [nowTheme, SetNowTheme] = useState(currentTheme);
  return (
    <ConfigProvider theme={theme}>
      {/* {currentTheme === "dark" ? (
        <div
          className="cursor-pointer text-yellow-400"
          onClick={() => {
            setTheme("light");
          }}
        >
          set light
        </div>
      ) : (
        <div
          className="cursor-pointer text-slate-700"
         
        >
          set dark
        </div>
      )}
      <Button>Button</Button> */}
      <div className="float-right flex items-center mr-10 cursor-pointer">
        <span>主题切换：</span>
        <Image
          priority
          src="/images/change.svg"
          height={32}
          width={32}
          alt={"主题切换"}
          onClick={() => {
            currentTheme === "dark" ? setTheme("light") : setTheme("dark");
          }}
        />
      </div>
    </ConfigProvider>
  );
};
export default ThemsComponents;
