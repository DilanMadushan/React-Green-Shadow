import { useEffect, useState } from "react";

interface ImagePickerProps {
    getImage:(image:string)=>void
}

const ImagePicker = ({getImage}:ImagePickerProps) => {

  const [image,setImage] = useState("");



    function encodeImageFileAsURL(element) {
        let file = element.files[0];
        let reader = new FileReader();
        reader.onloadend = function() {
            getImage(reader.result);
            setImage(reader.result)
        }
        reader.readAsDataURL(file);
      }

  return (
    
    <div className="mb-5 flex flex-col justify-center w-[40%]">

        <img src={image || "https://image.pngaaa.com/13/1887013-middle.png"} alt="" className="mb-5" id="imagePreview" />
    
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id="file_input"
        type="file"
        onChange={(e) => {
            encodeImageFileAsURL(e.target);
            // setImage(URL.createObjectURL(e.target.files[0]))
          }}
      />
    </div>
  );
};

export default ImagePicker;
