import React from "react";
import Image from "next/image";


function HeadObject() {
    return (  
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Image
          className="h-auto w-40 md:w-56 lg:w-64 drop-shadow-lg"
          src={"/youtubeLogo.png"}
          width={400}
          height={400}
          alt="Youtube logo"
          priority
        />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white">
          Youtube Downloader
        </h1>
        <p className="text-base md:text-lg text-white/80 max-w-2xl">
          Paste a YouTube video ID, generate download options, and grab the file
          from the sidebar. Works across phones, tablets, and desktops.
        </p>
      </div>
    );
}

export default HeadObject;