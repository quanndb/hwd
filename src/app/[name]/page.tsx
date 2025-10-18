import AutoImageSlider from "@/components/auto-image";
import CloudFloatWrapper from "@/components/cloud-wapper";
import FallInWrapper from "@/components/fallin-wapper";
import RotateInCornerWrapper from "@/components/rotate-corner-wrapper";
import RotateInWrapper from "@/components/rotate-wapper";
import SmartText from "@/components/smart-text";
import SwayWrapper from "@/components/sway-wrapper";
import USERS from "@/const/users";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function NamePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const user = USERS.find((user) => user.id === name);
  if (!user) return notFound();
  try {
    // check local or prod to run api
    await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_API_URL
          : "http://localhost:3000"
      }/api/session`,
      {
        method: "POST",
        body: JSON.stringify({ name: user.name }),
      }
    );
  } catch (e) {
    console.log(e);
  }
  return (
    <div className="relative h-screen bg-gradient-to-b from-sky-200 via-white to-rose-100 overflow-hidden text-black">
      {/* decoration */}
      <React.Fragment>
        <SwayWrapper className="absolute -bottom-[2%] left-0 h-[22%]">
          <Image
            width={282}
            height={136}
            src={"/assets/hoaMo.png"}
            alt="hoa mo"
            className="w-auto h-full"
          />
        </SwayWrapper>
        <Image
          src={"/assets/may2.png"}
          width={601}
          height={301}
          alt="may"
          className="absolute bottom-0 right-0 w-auto h-[50%]"
        />
        <React.Fragment>
          <RotateInWrapper
            delay={1}
            from="bottom-right"
            rotationDirection="clockwise"
            className="absolute w-auto h-[25%] md:h-[35%] -bottom-[7%] -right-[4%] z-2"
          >
            <Image
              src={"/assets/pbi.png"}
              width={453}
              height={311}
              alt="pbi"
              className="w-auto h-full"
            />
          </RotateInWrapper>
          <SwayWrapper className="absolute -bottom-[12%] right-[45%] md:right-[15%] h-[25%] md:h-[35%] z-3">
            <FallInWrapper
              direction="up"
              delay={1.2}
              duration={1.5}
              className="w-full h-full"
            >
              <Image
                src={"/assets/hoa.png"}
                alt="hoa"
                width={177}
                height={210}
                className="w-auto h-[70%]"
              />
            </FallInWrapper>
          </SwayWrapper>
        </React.Fragment>
        <CloudFloatWrapper
          className="absolute h-[80%] top-[10%] -left-[7%]"
          amplitudeX={-30}
          direction="left"
          duration={10}
        >
          <Image
            src={"/assets/may1.png"}
            width={599}
            height={520}
            alt="may"
            className="w-auto h-full"
          />
        </CloudFloatWrapper>
      </React.Fragment>
      <div className="container mx-auto px-4 h-full relative z-1 text-center flex justify-center md:items-center">
        <div className="w-full h-fit flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mt-[25%] md:mt-0">
          {/* text */}
          <div className="flex flex-col items-center gap-y-[5px] md:gap-y-5">
            <FallInWrapper delay={0.3}>
              <div className="relative">
                <h1 className="font-charm text-[#ff8091] font-bold text-2xl sm:text-3xl md:text-4xl">
                  Chúc Mừng
                </h1>
                <Image
                  src={"/assets/buom.webp"}
                  alt="buom"
                  width={361}
                  height={262}
                  className="w-[20%] absolute top-[-10%] left-[-8%] rotate-25"
                />
              </div>
            </FallInWrapper>
            <FallInWrapper delay={0.2}>
              <h2 className="font-livvic text-[#0077a4] font-bold text-2xl sm:text-3xl md:text-5xl">
                Ngày Phụ Nữ
              </h2>
              <div className="relative">
                <h2 className="font-livvic text-[#0077a4] font-bold text-2xl sm:text-3xl md:text-5xl">
                  Việt Nam
                </h2>
                <Image
                  src={"/assets/blink.png"}
                  width={369}
                  height={202}
                  alt="blink"
                  className="absolute top-[100%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
                />
              </div>
            </FallInWrapper>
            <FallInWrapper>
              <h2 className="font-trirong text-[#ff8091] text-4xl sm:text-5xl md:text-7xl font-thin">
                20/10
              </h2>
            </FallInWrapper>
          </div>
          {/* paper */}
          <RotateInCornerWrapper
            duration={0.4}
            delay={2}
            corner="bottom-right"
            className="bg-[#fbfaf8] w-full md:w-[50%] h-fit shadow-md/30 rounded-md"
          >
            <div className="w-full h-full p-5 flex flex-col items-center justify-center gap-3">
              <div className="flex flex-col items-center">
                <AutoImageSlider images={user.images} />
                <p className="font-charm my-2">
                  Kính gửi: <span className="text-[#ff8091]">{user.name}</span>
                </p>
              </div>
              <span>
                <SmartText
                  className="font-charm text-justify"
                  quoteStyle={{ color: "#ff8091" }}
                >
                  {user.message}
                </SmartText>
              </span>

              <p className="font-charm text-justify">
                Cảm ơn những{" "}
                <span className="text-[#ff8091]">hy sinh và yêu thương</span> mà
                {user.id === "emiu"
                  ? " em"
                  : user.id === "meiu"
                  ? " mẹ"
                  : " chị/em"}{" "}
                đã mang đến cho cuộc sống này và làm nó trở nên tràn đầy sức
                sống.
              </p>
            </div>
          </RotateInCornerWrapper>
        </div>
      </div>
    </div>
  );
}
