// app/page.tsx

"use client"

import Image from "next/image";
import HeadObject from "@/components/HeadObject";
import EntryForm from "@/components/EntryForm"
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";

import SideBar from "@/components/SideBar";

import PageFooter from "@/components/PageFooter";

import Link from "next/link";

const RAPIDAPI_API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_API_KEY;




const API_OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
    "x-rapidapi-key": `${RAPIDAPI_API_KEY}`
  }
}



interface Videos{


  
}

interface Format {
  url: string;
  // Add other properties of a format object if you use them
}

interface VidsObject {
  id: string;
  title: string;
  thumbnail: { url: string }[]; // assume array of objects with url
  formats: Format[]; // Add formats array to the interface
  [key: string]: any; // optional catch-all for other fields
  videoUrl?: string
}




export default function Home() {

  const [loading, setLoading] = useState(false)

  const [videoID, setVideoID] = useState("");


  const [vidsObject, setVidsObject] = useState<VidsObject | null>(null);



  

  const handleSubmit = async ({ videoID }: { videoID: string }) => {
    
  setLoading(true);

  try {
    const res = await fetch(`/api/dl?id=${videoID}&cgeo=DE`);
    const data = await res.json();
    setVidsObject(data);
  } catch (e) {
    console.error(e);
  } finally {

    setTimeout(()=>{setLoading(false);}, 5000)
    
  }
  };

  useEffect(() => {
  const id = vidsObject?.id === "aye"
  console.log("New video object:", vidsObject);
  console.log(vidsObject?.formats[0]?.url) // Access the 'url' property here
  console.log(vidsObject?.title)
  console.log(vidsObject?.description)
  console.log(id)
  }, [vidsObject]);


  // Ensure videoUrl is a string before passing
  const videoUrlToPass = vidsObject?.formats?.[0]?.url;


  return (


    <div className="flex flex-col items-center justify-center">


      <Link href={`/vids/`}>
      
      </Link>

    {/* Pass the actual URL string to SideBar */}
    <SideBar 
      imgSrc={vidsObject?.thumbnail?.[0]?.url} 
      titleText={vidsObject?.title} 
      videoDescription={vidsObject?.description} 
      videoUrl={videoUrlToPass}  
    />

    

    <HeadObject />

    {/* <EntryForm onSubmit={handleSubmit}  /> */}

    <EntryForm
    onSubmit={handleSubmit}
    videoIDValue={videoID}
    onVideoIDChange={setVideoID}
/>

    <div className="text-4xl">{loading ? <Spinner />: "Enter a video ID above."} </div>

    <div className="text-2xl">{loading ? "verify side bar for download": ""}</div>
    

    <div >

    <PageFooter />
    </div>

    </div>
  );
}











// "use client"

// import Image from "next/image";
// import HeadObject from "@/components/HeadObject";
// import EntryForm from "@/components/EntryForm"
// import Spinner from "@/components/Spinner";
// import { useEffect, useState } from "react";

// import SideBar from "@/components/SideBar";

// import PageFooter from "@/components/PageFooter";

// import Link from "next/link";

// const RAPIDAPI_API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_API_KEY;




// const API_OPTIONS = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "yt-api.p.rapidapi.com",
//     "x-rapidapi-key": `${RAPIDAPI_API_KEY}`
//   }
// }



// interface Videos{


  
// }

// interface VidsObject {
//   id: string;
//   title: string;
//   thumbnail: { url: string }[]; // assume array of objects with url
//   [key: string]: any; // optional catch-all for other fields
//   videoUrl?: string
// }




// export default function Home() {

//   const [loading, setLoading] = useState(false)

//   const [videoID, setVideoID] = useState("");


//   const [vidsObject, setVidsObject] = useState<VidsObject | null>(null);



  

//   const handleSubmit = async ({ videoID }: { videoID: string }) => {
//   setLoading(true);

//   try {
//     const res = await fetch(`/api/dl?id=${videoID}&cgeo=DE`);
//     const data = await res.json();
//     setVidsObject(data);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     setLoading(false);
//   }
//   };

//   useEffect(() => {
//   const id = vidsObject?.id === "aye"
//   console.log("New video object:", vidsObject);
//   console.log(vidsObject?.formats[0].url)
//   console.log(vidsObject?.title)
//   console.log(vidsObject?.description)
//   console.log(id)
//   }, [vidsObject]);



  

//   return (
//     <div className="flex flex-col items-center justify-center">


//       <Link href={`/vids/`}>
      
//       </Link>

//     <SideBar imgSrc={vidsObject?.thumbnail?.[0]?.url} titleText={vidsObject?.title} videoDescription={vidsObject?.description} videoUrl={vidsObject?.formats[0].url}  />

    

//     <HeadObject />

//     {/* <EntryForm onSubmit={handleSubmit}  /> */}

//     <EntryForm
//     onSubmit={handleSubmit}
//     videoIDValue={videoID}
//     onVideoIDChange={setVideoID}
// />

//     <div className="text-4xl">{loading ? <Spinner />: "Enter a video ID above."} </div>
    


//     <PageFooter />

//     </div>
//   );
// }
















// // old code logic:

// // const handleSubmit = (data: {videoID: string}) => {



//   //   console.log(data.videoID)

//   //   let getVids = async (videoID:string) => {

//   //   setLoading(true)


//   //   try{

//   //     // const request = await fetch(Url, API_OPTIONS)

//   //     // if (!request){

//   //     //   throw new Error("Unable to connect")

//   //     // }

//   //     // const data = await request.json()

//   //     // setVidsObject(data)

//   //     // console.log(vidsObject)

//   //     const res = await fetch(`/api/dl?id=${videoID}&cgeo=DE`)
//   //     const data = await res.json()

//   //     setVidsObject(data)

//   //     const vidid = data.videoID

//   //     console.log(vidsObject)



//   //   }catch(e){
//   //     // console.error(`Unable to connect to the API: ${e}`)
//   //     console.error(e)
//   //   }

    
//   //   finally{
//   //     setLoading(false)
//   //   }


//   // }

//   // getVids(data.videoID)

//   // }

//   // const Url = `https://yt-api.p.rapidapi.com/dl?id=${videoID}&cgeo=DE`

//   // let getVids = async () => {

//   //   setLoading(true)


//   //   try{

//   //     // const request = await fetch(Url, API_OPTIONS)

//   //     // if (!request){

//   //     //   throw new Error("Unable to connect")

//   //     // }

//   //     // const data = await request.json()

//   //     // setVidsObject(data)

//   //     // console.log(vidsObject)

//   //     const res = await fetch(`/api/dl?id=${videoID}&cgeo=DE`)
//   //     const data = await res.json()

//   //     setVidsObject(data)

//   //     console.log(vidsObject)



//   //   }catch(e){
//   //     // console.error(`Unable to connect to the API: ${e}`)
//   //     console.error(e)
//   //   }

    
//   //   finally{
//   //     setLoading(false)
//   //   }


//   // }


//   // useEffect(()=>{
//   //   getVids()

//   // },[videoID])