import { BsFilePost } from "react-icons/bs";

function PostCreate({ open, setIsOpen }: any) {
  return (
    <div
      className={
        open ? "" : "absolute flex justify-center items-center rounded-2xl"
      }
    >
      <div
        className={
          open ? "hidden" : "fixed bottom-0 md:bottom-12 right-12 z-10"
        }
      >
        <button
          onClick={() => setIsOpen(true)}
          className={
            open
              ? "hidden"
              : "absolute bottom-8 md:bottom-0 right-0 flex items-center justify-center bg-orange-500 text-4xl text-white h-16 w-16 rounded-full cursor-pointer shadow-xl hover:scale-105 hover:duration-300"
          }
        >
          <BsFilePost />
        </button>
      </div>
    </div>
  );
}

export default PostCreate;
