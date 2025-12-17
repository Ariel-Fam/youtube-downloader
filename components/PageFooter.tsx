import React from "react";

import Image from "next/image";

import Styles from "@/app/home.module.css"


function PageFooter() {
    return ( 
    
    <div className= {`bg-white h-200 w-screen mt-20 flex flex-col items-center justify-center `}>

        <div className="flex flex-row items-center justify-center sm:flex sm:flex-col sm:items-center sm:justify-center xs:flex xs:flex-col xs:items-center xs:justify-center xs:scale-75">

            <div className="flex flex-col ">

                <div className="flex flex-col items-center justify-center bg-gray-600 w-100 h-100 mr-10 mb-10 rounded-3xl sm:flex sm:flex-col sm:items-center sm:justify-center xs:flex xs:flex-col xs:items-center xs:justify-center xs:scale-75 ">

                    <Image



                    src={"/video_ID.png"}
                    alt="img"
                    width={400}
                    height={400}

                    className="xs:flex xs:flex-col xs:items-center xs:justify-center xs:scale-75"

                    />

                    

                    
                    

                </div>


                <h3 className=" text-2xl xs:scale-40 xm:scale-40 sm:scale-50">Download videos using their Youtube ID</h3>

                



            </div>

            <div className="flex flex-col ">

                <div className="flex flex-col items-center justify-center bg-gray-600 w-100 h-100 mr-10 mb-10 rounded-3xl">

                    <Image

                    className={"xs:flex xs:flex-col xs:items-center xs:justify-center xs:scale-75"}

                    src={"/sideBar.png"}
                    alt="img"
                    width={400}
                    height={400}

                  

                    />

                    

                    
                    

                </div>


                <h3 className=" text-2xl wi">Video downloads are found in the sidebar</h3>

                



            </div>


            

        </div>

    </div> );
}

export default PageFooter;