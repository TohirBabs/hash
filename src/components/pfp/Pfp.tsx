import Image from "next/image";
import React from "react";
import { StatusProgress } from "./StatusProgress";

export const Pfp = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <div className="w-12 h-12 absolute bg-black rounded-full">
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
