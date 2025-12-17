// components/SideBar.tsx

"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarGroup,
    // SidebarGroupContent // Not used directly, can be removed if not needed elsewhere
} from "@/components/ui/sidebar"

import Image from "next/image"

import React, {useEffect, useState} from "react"

import SideBarCard from "./SideBardCard"
import Link from "next/link"






type Videos = {

    imgSrc?: string
    titleText?: string
    videoUrl?: string // This should now always be a string
    videoDescription?: string
}






function SideBar({imgSrc, titleText, videoUrl, videoDescription}: Videos) {

    const [videoStore, setVideoStore] = useState({})

    const [videoItems, setVideoItems] = useState<Videos[]>([]);


    // const addVideos = async () => {

    //     setVideoStore({imgSrc: videos.imgSrc, titleText: videos.titleText}
    //     )

        
    //     return videoStore


        
    // }
    



    
    // useEffect(() => {

    //     const vids = addVideos()

    //     const storeVids = () => {

    //         setVideoItems([vids])
    //     }

    //     storeVids()
        
    // }, [videos.imgSrc, videos.titleText])



    useEffect(() => {
    if (imgSrc && titleText && videoUrl) { // Add videoUrl to dependency
        setVideoItems([{ imgSrc, titleText, videoUrl, videoDescription }]); // Include videoUrl and videoDescription
    }
    }, [imgSrc, titleText, videoUrl, videoDescription]);


    

    
    
    



    return ( 
        
        <Sidebar>

            <SidebarHeader>


                <div className="flex flex-col items-center mb-4">

                <Image
                    src="/space_pointer.png"
                    alt="Vidlab Logo"
                    height={400}
                    width={400}
                    quality={99}
                    
                />

                <h1 className="text-4xl text-white">Downloads</h1>
                </div>



            </SidebarHeader>



            <SidebarContent>

                <SidebarGroup>


                {videoItems.map((video, index) =>(



          


                    <div key={index}>
                    {/* Encode URL components to handle special characters */}
                    <Link 
                      key={index} 
                      href={`/vids/${encodeURIComponent(video.videoUrl || '')}/${encodeURIComponent(video.titleText || '')}/${encodeURIComponent(video.videoDescription || '')}`}
                    >
                    
                    <SideBarCard
                    key={index}
                    titleText={video.titleText}
                    imgSrc={video.imgSrc}
                    />
                    </Link>


                    </div>



                ))}
                  
             
                    


                </SidebarGroup>

            </SidebarContent>

        </Sidebar>

     );
}

export default SideBar;








// "use client"
// import {
//     Sidebar,
//     SidebarContent,
//     SidebarFooter,
//     SidebarHeader,
//     SidebarGroup,
//     // SidebarGroupContent // Not used directly, can be removed if not needed elsewhere
// } from "@/components/ui/sidebar"

// import Image from "next/image"

// import React, {useEffect, useState} from "react"

// import SideBarCard from "./SideBardCard"
// import Link from "next/link"






// type Videos = {

//     imgSrc?: string
//     titleText?: string
//     videoUrl?: string
//     videoDescription?: string
// }






// function SideBar({imgSrc, titleText, videoUrl, videoDescription}: Videos) {

//     const [videoStore, setVideoStore] = useState({})

//     const [videoItems, setVideoItems] = useState<Videos[]>([]);


//     // const addVideos = async () => {

//     //     setVideoStore({imgSrc: videos.imgSrc, titleText: videos.titleText}
//     //     )

        
//     //     return videoStore


        
//     // }
    



    
//     // useEffect(() => {

//     //     const vids = addVideos()

//     //     const storeVids = () => {

//     //         setVideoItems([vids])
//     //     }

//     //     storeVids()
        
//     // }, [videos.imgSrc, videos.titleText])



//     useEffect(() => {
//     if (imgSrc && titleText) {
//         setVideoItems([{ imgSrc, titleText }]);
//     }
//     }, [imgSrc, titleText]);


    

    
    
    



//     return ( 
        
//         <Sidebar>

//             <SidebarHeader>


//                 <div className="flex flex-col items-center mb-4">

//                 <Image
//                     src="/space_pointer.png"
//                     alt="Vidlab Logo"
//                     height={400}
//                     width={400}
//                     quality={99}
                    
//                 />

//                 <h1 className="text-4xl text-white">Downloads</h1>
//                 </div>



//             </SidebarHeader>



//             <SidebarContent>

//                 <SidebarGroup>


//                 {videoItems.map((video, index) =>(



          


//                     <div key={index}>

//                     <Link key={index} href={`/vids/${videoUrl}/${titleText}/${videoDescription}`}>
                    
//                     <SideBarCard
//                     key={index}
//                     titleText={video.titleText}
//                     imgSrc={video.imgSrc}
//                     />
//                     </Link>


//                     </div>



//                 ))}
                  
             
                    


//                 </SidebarGroup>

//             </SidebarContent>

//         </Sidebar>

//      );
// }

// export default SideBar;