import React, { MutableRefObject } from "react";
import { useState, useRef } from "react";
import { GrFormClose } from "react-icons/gr";
import { ThreeDots } from "react-loader-spinner";
import convertFileToBase64 from "../../features/fileConvert";
import { toast } from "react-toastify";
interface Props {
  open: boolean;
  setIsOpen: any;
}

function PostFormModal({ open, setIsOpen }: Props) {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [uploadImg, setUploadImg] = useState<any>("");
  const imgRef = useRef() as MutableRefObject<HTMLInputElement>;

  const [formData, setFormData] = useState({
    img: "",
    desc: "",
  });

  const handleFileUpload = async (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    setUploadImg(URL.createObjectURL(file));
    const base64 = await convertFileToBase64(file);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: base64,
    }));
  };

  const handleDescChange = (e: any) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleClose() {
    setIsOpen(false);
    setUploadImg("");
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setButtonLoading(true);
    if (formData.img === "" || formData.desc === "") {
      toast("Please fill atleast one the following input field");
    } else {
      console.log(formData);

      import("../../services/serverCalls").then((module) => {
        module.setNewPost({
          img: formData.img,
          desc: formData.desc,
        });
      });
    }
    if (Error()) {
      setButtonLoading(false);
    }
  };

  return (
    <>
      {open ? (
        <div className="fixed z-50 w-screen h-screen flex justify-center items-center border border-green-400 backdrop-blur-md">
          <div className="bg-white rounded-2xl shadow-xl min-h-fit max-h-[650px] w-10/12 min-w-fit max-w-lg">
            <form>
              <div className="flex h-12 justify-between items-center border-b-2">
                <h1 className="text-2xl ml-5 h-fit font-lato text-gray-400 font-semibold">
                  Create Post
                </h1>
                <button
                  onClick={handleClose}
                  className="text-3xl flex justify-center mr-1 items-center hover:bg-orange-500/30 w-10 h-10 rounded-full"
                >
                  <GrFormClose />
                </button>
              </div>
              <div className="w-10/12 mx-auto flex flex-col">
                {uploadImg.length === 0 ? (
                  <></>
                ) : (
                  <img
                    width={300}
                    height={300}
                    src={uploadImg}
                    alt="upload photos here"
                    className="w-80 h-60 object-contain max-w-xl object-center mx-auto my-5"
                  />
                )}
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    imgRef.current.click();
                  }}
                  className="w-fit h-10 text-lg mt-5 px-3 mx-auto rounded-full bg-gray-400"
                >
                  Upload Image
                </button>
                <input
                  type="file"
                  ref={imgRef}
                  name="img"
                  className="hidden"
                  accept=".jpeg, .png, .jpg"
                  onChange={handleFileUpload}
                />
              </div>
              <div className="w-10/12 mx-auto flex flex-col">
                <label className="text-xl text-center font-lato font-semibold my-4 text-gray-600">
                  Description
                </label>
                <textarea
                  maxLength={280}
                  name="desc"
                  onChange={handleDescChange}
                  className="rounded-lg scrollbar-hide focus:ring-2 resize-none focus:border-white  focus:ring-orange-500"
                />
              </div>
              <div className="w-full flex items-center justify-center mt-10 mb-5">
                {buttonLoading ? (
                  <button
                    className="rounded-full mx-auto h-10 px-4 w-24 bg-orange-500 text-white text-2xl
                        hover:border-orange-500 hover:border-2"
                  >
                    <ThreeDots
                      height="15"
                      width="70"
                      radius="3"
                      color="#ffffff"
                      ariaLabel="three-dots-loading"
                      visible={true}
                    />
                  </button>
                ) : (
                  <button
                    onClick={onSubmit}
                    type="button"
                    className="rounded-full mx-auto h-10 px-4 w-24 bg-orange-500 text-white text-2xl hover:bg-white hover:text-orange-500
                          hover:border-orange-500 hover:border-2 duration-200"
                  >
                    Post
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default PostFormModal;
