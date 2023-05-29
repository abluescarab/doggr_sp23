import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SendMessage = () => {
  const [profile, setProfile] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getProfile = () => {
      setProfile(location.state.profile);
    };

    getProfile();
  }, [location.state.profile]);

  const sendMessage = () => {
    // TODO: send message
  };

  if (profile) {
    return (
      <div
        className={
          "flex flex-row items-center rounded-box bg-slate-700 w-4/5 mx-auto p-5"
        }>
        <div className={"flex flex-row items-center w-2/12"}>
          <img
            className="rounded w-128 h-128 w-6/12"
            src={profile.imgUri}
            alt="Profile of pet"
          />
          <p className={"font-bold pl-5 w-6/12"}>{profile.name}</p>
        </div>
        <div className={"flex-1"}>
          <input
            className={"p-3 w-11/12 border-0 rounded-box"}
            type={"text"}
            placeholder={"Enter your message here..."}
          />
        </div>
        <div className={"w-1/12"}>
          <button className="btn btn-circle" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SendMessage;
