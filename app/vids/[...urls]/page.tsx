// app/vids/[...urls]/page.tsx

// app/vids/[...urls]/page.tsx

"use client"

import { useEffect } from "react";
import SideBar from "@/components/SideBar";
// No need to import React just for React.use() if we're not using it.

function VideoDisplay({ params }: { params: { urls: string[] } }) {
    

   
    // Access params directly as it's a Client Component
    const videoUrl = decodeURIComponent(params.urls[0]);
    const title = decodeURIComponent(params.urls[1]);
    const description = decodeURIComponent(params.urls[2]);

    useEffect(() => {
        console.log("Video URL:", videoUrl);
        console.log("Title:", title);
        console.log("Description:", description);
    }, [videoUrl, title, description]);

    

     

    return (
        <div className="flex flex-col items-center h-500 w-screen bg-black text-white sm:text-center sm:p-7">
            {videoUrl && (
                <video controls width="100%" height="auto" src={videoUrl} className="rounded-4xl">
                    Your browser does not support the video tag.
                </video>
            )}

            <h1 className="text-4xl mt-10 mb-20">{title}</h1>
            <h3 className="w-200 bg-gray-600 p-14 rounded-3xl sm:scale-75 xs-scale-7m xm:scale-75">{description}</h3>

            <div className="flex flex-col w-screen h-auto items-center justify-center  ">

                <h3 className="mt-32 mb-10 text-4xl">Download Instructions: Where to find the download button</h3>

                <video className="scale-70 rounded-2xl" src={"/downloadHere.mp4"} autoPlay muted loop></video>
            </div>

        </div>
    );
}

export default VideoDisplay;











// // app/vids/[...urls]/page.tsx

// "use client"

// import { useEffect } from "react";

//     function VideoDisplay({ params }: { params: { urls: string[] } }) {
//     // Decode the URL components
//     const videoUrl = decodeURIComponent(params.urls[0]);
//     const title = decodeURIComponent(params.urls[1]);
//     const description = decodeURIComponent(params.urls[2]);

//     useEffect(() => {
//         console.log("Video URL:", videoUrl);
//         console.log("Title:", title);
//         console.log("Description:", description);
//     }, [videoUrl, title, description]);

//     return (
//         <div className="flex flex-col items-center h-500 w-screen bg-black text-white ">
//             {videoUrl && (
//                 <video controls width="100%" height="auto" src={videoUrl}>
//                     Your browser does not support the video tag.
//                 </video>
//             )}

//             <h1>{title}</h1>
//             <h3>{description}</h3>
//         </div>
//     );
// }

// export default VideoDisplay;





// old code

// // "use client"

// async function  VideoDisplay({params}: {params: {urls: string[]}}) {


  


//     return ( <div className="flex flex-col items-center h-500 w-screen bg-black text-white ">

//         <video src={params.urls[0]}></video>

//         <h1>{params.urls[1].toString()}</h1>

//         <h3>{params.urls[2].toString()}</h3>

//     </div> );
// }

// export default VideoDisplay;