import Providers from "@/components/Providers";
import ThemsComponents from "@/components/Theme";
import {Metadata} from "next";
import {Inter} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import "./globals.css";
const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: "nextjs13-template",
  description: "nextjs13-template: 基于nextjs13+ 和 tailwindcss 创建的一个项目脚手架",
};
const name = "YanPengJu"; // 名称，根据需要修改
export const siteTitle = "Blog by YanPengJu"; // 网站标题，根据需要修改
interface Props {
  children: React.ReactNode;
  home?: boolean;
}
export default function RootLayout({children, home}: Props) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} min-h-screen w-full bg-globalBg overflow-y-auto`}>
        <Providers>
          <ThemsComponents />
          <div className="max-w-2xl mx-auto px-4 mt-12 mb-24">
            <div className="flex flex-col items-center">
              {home ? (
                <>
                  <div>
                    <Image priority src="/images/author.png" className="" height={144} alt={name} />
                    <h1 className="text-5xl font-extrabold tracking-tighter my-4">{name}</h1>
                  </div>
                </>
              ) : (
                <>
                  <Image
                    priority
                    src="/images/author.png"
                    className="rounded-full"
                    height={144}
                    width={144}
                    alt={name}
                  />
                  <h2 className="text-2xl my-4">
                    <a>{name}</a>
                  </h2>
                </>
              )}
            </div>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            {!home && (
              <div className="mt-12">
                <Link href="/">← 返回首页</Link>
              </div>
            )}
          </div>
        </Providers>
      </body>
    </html>
  );
}
