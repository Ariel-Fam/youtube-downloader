import React from "react";
import Image from "next/image";




type SideBarCardProps = {
  imgSrc?: string;
  titleText?: string;
};

function SideBarCard({ imgSrc, titleText }: SideBarCardProps) {
  return (
    <div className="mb-4 p-2 bg-gray-500 rounded-xl">
      {imgSrc && (
        <Image
          src={imgSrc}
          alt="Thumbnail"
          width={200}
          height={120}
          className="rounded-lg"
        />
      )}
      <h2 className="text-white mt-2">{titleText}</h2>
    </div>
  );
}

export default SideBarCard;











//old code:


// interface videoProps {
//     imgSrc?: string
//     titleText?: string
// }


// function SideBarCard(vid: videoProps) {
//     return ( 

//         <div className="flex flex-row items-center bg-gray-500 mb-7">

//         <Image
//         src={"/space_pointer.png"}

//         width={100}
//         height={100}
//         alt="img"
//         className="pr-4"
//         />

        
//         <h3>Title</h3>

            


//         </div>
//      );
// }

// export default SideBarCard;
