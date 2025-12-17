import React from "react"; // No useState needed if fully controlled
import { FolderDown } from 'lucide-react';
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";




type Entry = {
  onSubmit: (data: { videoID: string }) => void;
  videoIDValue: string;
  onVideoIDChange: (newId: string) => void;
};

export default function EntryForm({ onSubmit, videoIDValue, onVideoIDChange }: Entry) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ videoID: videoIDValue });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <Textarea
        placeholder="Enter a Youtube Video ID"
        value={videoIDValue}
        onChange={(e) => onVideoIDChange(e.target.value)}
        className="w-full min-h-32 md:min-h-36 bg-white/90 text-foreground rounded-2xl shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
      />
      <div className="flex justify-end">
        <Button className="inline-flex items-center gap-2 px-4 py-2 text-base md:text-lg shadow-md" type="submit">
          <FolderDown /> Download
        </Button>
      </div>
    </form>
  );
}







//old code:



// type Entry = {
//     onSubmit: (data: { videoID: string }) => void;
//     // The value of the textarea, controlled by the parent
//     videoIDValue?: string;
//     // Handler for when the textarea content changes
//     onVideoIDChange?: (newId: string) => void;
//     setVideo?: (e:string) => void;
//     initialID?: string
// };

// function EntryForm({ onSubmit, videoIDValue, onVideoIDChange, setVideo, initialID="" }: Entry) {

//     const [videoID, setVideoID] = useState(initialID)

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // When submitting, use the current controlled value
//         onSubmit({ videoID: videoID});
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <Textarea
//                 placeholder="Enter a Video ID"
//                 value={videoID} // Use the prop directly
//                 onChange={(e) => setVideoID(e.target.value)} // Notify parent of changes
//                 className="w-100 h-40 mb-4 bg-amber-50"
//             />
//             <Button className="ml-64 mb-17 scale-150" type="submit">
//                 {<FolderDown />} Download
//             </Button>
//         </form>
//     );
// }

// export default EntryForm;


// import React, {useState} from "react";
// import { FolderDown } from 'lucide-react';




// import { Button} from "./ui/button";
// import { Textarea } from "./ui/textarea";
// import { Target } from "lucide-react";

// type Entry = {

//     onSubmit: (data: {
//         videoID: string

//     }) => void

//     video?:string
// }



// function EntryForm({onSubmit, video =""}: Entry) {

    

//     const [videoID, setVideoID] = useState(video)


//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()

//         onSubmit({videoID: videoID})
//     }


    


//     return (  

//         <form onSubmit={handleSubmit}>


//             <Textarea
//             placeholder="Enter a Video ID"

//             value={videoID}

//             onChange={(e)=> setVideoID(e.target.value)}

//             className="w-100 h-40 mb-4 bg-amber-50"
            
//             />



//             <Button className="ml-64 mb-17 scale-150" type="submit"> {<FolderDown /> } Download</Button>

        
//         </form>
//     );
// }

// export default EntryForm;



