// app/vids/[...urls]/page.tsx

// app/vids/[...urls]/page.tsx

"use client"

import { useEffect } from "react";
import { DownloadButton }from "@/components/Download";
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
        <div className="min-h-screen bg-black text-white">
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 md:py-12">
                {videoUrl && (
                    <div className="overflow-hidden flex flex-col items-center justify-center rounded-2xl border border-white/10 shadow-2xl">
                        <video controls width="100%" height="auto" src={videoUrl} className="h-auto w-full" />
                        <div>{<DownloadButton src={videoUrl} filename={title} />}</div>
                    </div>

                    
                )}

                <h1 className="text-3xl md:text-4xl font-semibold text-center">{title}</h1>
                <p className="rounded-2xl bg-gray-800 p-6 text-base md:text-lg leading-relaxed text-center md:text-left shadow-lg">
                    {description}
                </p>

                <div className="space-y-4 rounded-2xl bg-gray-900/70 p-6 shadow-xl md:p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center">Download instructions</h3>
                    <p className="text-sm md:text-base text-gray-200 text-center">
                        Locate the download button shown below.
                    </p>
                    <video className="w-full rounded-xl shadow-lg" src={"/downloadHere.mp4"} autoPlay muted loop playsInline></video>
                </div>
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