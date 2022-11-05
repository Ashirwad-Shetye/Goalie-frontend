import React from "react";
import { useState } from "react";
import avatar from "../../avatar.json";
import { useDispatch } from "react-redux";
import { setAvatarId } from "../../store/slices/avatarSlice";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const length = avatar.length;

  const dispatch = useDispatch();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    const avatarId = document.getElementsByTagName("img")[1].getAttribute("id");
    // dispatch(avatarId);
    console.log(avatarId);
    if (avatarId) localStorage.setItem("avatarID", avatarId);
    console.log(document.getElementsByTagName("img")[1].getAttribute("id"));
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    dispatch(setAvatarId(current));
  };

  if (!Array.isArray(avatar) || avatar.length <= 0) {
    return null;
  }

  return (
    <section className="w-48 h-28 mx-auto justify-center align-middle">
      <div className="absolute h-10 mt-10 w-48 flex items-center justify-center space-x-32">
        <AiOutlineLeft
          onClick={prevSlide}
          className="z-10 cursor-pointer text-3xl text-slate-700 select-none hover:text-orange-500
                    hover:scale-110 duration-150"
        />

        <AiOutlineRight
          onClick={nextSlide}
          className="z-10 cursor-pointer text-3xl text-slate-700 select-none hover:text-orange-500
                    hover:scale-110 duration-150"
        />
      </div>

      {avatar &&
        avatar.map((avatar, index) => {
          return (
            <div
              key={avatar.id}
              className={
                index === current
                  ? "opacity-100 duration-1000 scale-105"
                  : "opacity-0 duration-1000"
              }
            >
              {index === current && (
                <img
                  id={avatar.id}
                  src={avatar.icon}
                  alt="avatar slider"
                  className="w-28 h-28 rounded-full mx-auto"
                />
              )}
            </div>
          );
        })}
    </section>
  );
}

export default ImageSlider;
