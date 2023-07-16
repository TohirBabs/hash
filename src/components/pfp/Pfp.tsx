import Image from "next/image";
import React from "react";
import { StatusProgress } from "./StatusProgress";

export const Pfp = () => {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="w-11 h-11 absolute bg-black rounded-full overflow-hidden">
        <Image
          src="/assets/images/selfie.jpg"
          alt="profile picture"
          fill
          objectFit="cover"
        />
      </div>

      <StatusProgress />
    </div>
  );
};
