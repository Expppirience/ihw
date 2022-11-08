import React from "react";
import { Message } from "./Message";
import { AlternativeMessage } from "./AlternativeMessage";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Some Name",
  message: "some text",
  time: "22:00",
};

const optionsMessageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Some Name",
  message: "Check out this options: ",
  time: "22:00",
  options: [
    { id: 1, text: "first option" },
    { id: 2, text: "second option" },
    { id: 3, text: "third option" },
  ],
};

function HW1() {
  return (
    <div>
      <hr />
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      <AlternativeMessage message={optionsMessageData} />
      <hr />
    </div>
  );
}

export default HW1;
