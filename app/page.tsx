import React from "react";
import Image from "next/image";
import image from "@/public/image.png";

export default function Home() {
  return (
    <div className="h-screen flex items-center p-10">
      <div className="flex flex-col gap-4 justify-center items-start px-4 w-1/2 h-48">
      <h1 className="font-bold text-blue-700 text-[44px]"> PRIMARY & SECONDARY SCHOOL</h1>
      <p className="font-Inter text-[32px] text-left">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
      </p>
      <button className="text-white text-2xl w-[200px] h-[60px] px-2 py-4 bg-blue-500 rounded-lg"> Visit For More</button>
      </div>
      <div className="flex flex-col justify-center px-4 w-1/2 h-48">
        <Image src={image} alt="image" height={465} width={502} />
      </div>
    </div>
  );
}
