import React, { FC } from "react";

interface messageOption {
  id: number;
  text: string;
}

interface AlternativeMessageProps {
  message: {
    avatar: string;
    name: string;
    message: string;
    time: string;
    options: messageOption[];
  };
}

export const AlternativeMessage: FC<AlternativeMessageProps> = ({
  message,
}) => {
  return (
    <div className={"message"}>
      <div className={"message__img"}>
        <img src={message.avatar} alt="profilePic" />
      </div>
      <div className="message__body body-message">
        <div className="body-message__content">
          <span className="body-message__name">{message.name}</span>
          <span className="body-message__text">{message.message}</span>
          <ul className="body-message__list">
            {message.options.map((option) => {
              return <li className="body-message__item">{option.text}</li>;
            })}
          </ul>
        </div>
        <time className="body-message__time">{message.time}</time>
      </div>
    </div>
  );
};
