// import { useState } from "react";

// import { uploadImage } from "../../services/imageService";

// export default function ImageUploadTest() {

//   const [image, setImage] = useState("");

//   const [loading, setLoading] = useState(false);

//   async function handleUpload(

//     e: React.ChangeEvent<HTMLInputElement>

//   ) {

//     if (!e.target.files?.length) return;

//     setLoading(true);

//     try {

//       const url = await uploadImage(

//         e.target.files[0]

//       );

//       setImage(url);

//     } catch (error) {

//       console.error(error);

//       alert("Upload failed");

//     }

//     setLoading(false);

//   }

//   return (

//     <div className="bg-white rounded-xl shadow-lg p-6">

//       <h2 className="text-2xl font-bold mb-6">

//         Supabase Upload Test

//       </h2>

//       <input

//         type="file"

//         accept="image/*"

//         onChange={handleUpload}

//       />

//       {loading && (

//         <p className="mt-4">

//           Uploading...

//         </p>

//       )}

//       {image && (

//         <div className="mt-6">

//           <img

//             src={image}

//             alt="Uploaded"

//             className="rounded-xl w-72"

//           />

//           <p className="text-sm mt-4 break-all">

//             {image}

//           </p>

//         </div>

//       )}

//     </div>

//   );

// }


interface Props {

  imageUrl: string;

  onImageUploaded: (
    url: string
  ) => void;

}

export default function ImageUploader({

  imageUrl,

}: Props) {

  return (

    <div className="border-2 border-dashed rounded-xl p-8 text-center">

      <p className="text-gray-500">

        Image upload will be implemented here.

      </p>

      {imageUrl && (

        <img

          src={imageUrl}

          alt="Product"

          className="w-40 mx-auto mt-6 rounded-xl"

        />

      )}

    </div>

  );

}