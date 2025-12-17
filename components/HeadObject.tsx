import React from "react";
import Image from "next/image";


function HeadObject() {
    return (  

        <div className="flex flex-col items-center p-20 justify-center ">
        
        
        <Image 
        className="xs:flex xs:flex-col xs:items-center xs:justify-center xm:scale-10"
        src={"/youtubeLogo.png"}
        width={400}
        height={400}
        alt="Img"
        />


        <h1 className="text-center text-7xl text-white"> Youtube Downloader</h1>


        
        </div>

        
    );
}

export default HeadObject;