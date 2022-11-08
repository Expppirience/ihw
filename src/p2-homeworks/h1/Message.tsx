import React, { FC } from "react";
import "./Message.css";

interface MessageProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
}

export const Message: FC<MessageProps> = ({ avatar, name, message, time }) => {
  return (
    <div className={"message"}>
      <div className={"message__img"}>
        <img src={avatar} alt="profilePic" />
      </div>
      <div className="message__body body-message">
        <div className="body-message__content">
          <span className="body-message__name">{name}</span>
          <span className="body-message__text">{message}</span>
        </div>
        <time className="body-message__time">{time}</time>
      </div>
    </div>
  );
};
