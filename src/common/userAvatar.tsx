import React from "react";
import { Avatar, Tooltip } from "flowbite-react";
import avatar_24 from "../styles/assets/avatar/avatar_24.png";

export default function MainAvatar() {
  return (
    <div className="cursor-pointer">
      <Tooltip
        content="Username"
        placement="bottom"
        trigger="hover"
        animation="duration-300"
        // eslint-disable-next-line react/style-prop-object
        style="light"
        arrow={false}
      >
        <Avatar img={avatar_24} size="lg" rounded={true} />
      </Tooltip>
    </div>
  );
}
