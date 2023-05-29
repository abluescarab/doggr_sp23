import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { httpClient } from "@/Services/HttpClient.tsx";
import { useAuth } from "@/Services/Auth.tsx";

const SendMessage = () => {
  const [profile, setProfile] = useState(null);
  const [responseText, setResponseText] = useState("");
  const location = useLocation();
  const auth = useAuth();

  const message = useRef<HTMLInputElement>(null);
  const responseBox = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const getProfile = () => {
      setProfile(location.state.profile);
    };

    getProfile();
  }, [location.state.profile]);

  const sendMessage = (e) => {
    e.preventDefault();
    responseBox.current.classList.remove("hidden");

    if (auth.userId === profile.id) {
      setResponseText("You cannot send a message to yourself.");
      return;
    }

    httpClient
      .post("/messages", {
        sender_id: auth.userId,
        receiver_id: profile.id,
        message: message.current.value,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setResponseText("Message sent.");
        } else {
          setResponseText(`Failed to send message: ${response.statusText}`);
        }
      });
  };

  if (profile) {
    return (
      <div
        className={"flex flex-col items-center bg-slate-700 w-4/5 mx-auto p-5"}>
        <div className={"flex flex-1 flex-row items-center w-full"}>
          <img
            className="rounded w-128 h-128 w-1/12"
            src={`http://localhost:9000/doggr/${profile.imgUri}`}
            alt="Profile of pet"
          />
          <p className={"font-bold pl-5 w-1/12"}>{profile.name}</p>
          <input
            className={"p-3 w-9/12 border-0 rounded-box mx-5"}
            type={"text"}
            placeholder={"Enter your message here..."}
            ref={message}
          />
          <button className="btn btn-circle" onClick={sendMessage}>
            Send
          </button>
        </div>
        <div className={"w-100 p-0 m-0 hidden"} ref={responseBox}>
          <p>{responseText}</p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SendMessage;
