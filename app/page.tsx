"use client";
import StepsComponents from "@/components/Steps";
import theme from "@/theme";
import {ConfigProvider} from "antd";
import {useTheme} from "next-themes";
import {useState} from "react";
const Home = () => {
  const {systemTheme, theme: mytheme, setTheme} = useTheme();
  const currentTheme = mytheme === "system" ? systemTheme : mytheme;
  const [nowTheme, SetNowTheme] = useState(currentTheme);
  return (
    <ConfigProvider theme={theme}>
      <StepsComponents />
    </ConfigProvider>
  );
};
export default Home;
