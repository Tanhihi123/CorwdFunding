import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {}, name = "" }) => {
  const [haveImg,setHaveImg] = useState(null);
  const handleUploadImg = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=1354c230dd40a7043dbe4307c3df1bc3",
      data: bodyFormData,
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can't upload image to imgbbAPI");
    }
    const objImg = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      url: imageData.url,
    };
    setHaveImg(objImg);
    onChange(name, objImg);
    console.log(haveImg.url);
  };
  return (
    <label className="w-[300px] h-[300px] rounded-full border border-gray-200 border-dashed cursor-pointer flex items-center justify-center overflow-hidden">
      {!haveImg && (
        <>
          <input type="file" onChange={handleUploadImg} className="hidden" />
          <img src="/img-upload.png" alt="" className="w-24 h-24" />
        </>
      )} 
      {haveImg && (
        <img src={haveImg.url} alt="" className="object-cover w-full h-full" />
      )}
    </label>
  );
};

export default ImageUpload;
