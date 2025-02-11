import { Profile } from "@/Components/Profile.tsx";
import { ProfileType } from "@/DoggrTypes.ts";
import { useAuth } from "@/Services/Auth.tsx";
import { getNextProfileFromServer } from "@/Services/HttpClient.tsx";
import { MatchService } from "@/Services/MatchService.tsx";
import { PassService } from "@/Services/PassService.tsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Match = () => {
  const [currentProfile, setCurrentProfile] = useState<ProfileType>();
  const auth = useAuth();
  const navigate = useNavigate();

  const fetchProfile = () => {
    getNextProfileFromServer()
      .then((response) => setCurrentProfile(response))
      .catch((err) => console.log("Error in fetch profile", err));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const onLikeButtonClick = () => {
    MatchService.send(auth.userId, currentProfile.id)
      .then(fetchProfile)
      .catch((err) => {
        console.error(err);
        fetchProfile();
      });
  };

  const onPassButtonClick = () => {
    PassService.send(auth.userId, currentProfile.id)
      .then(fetchProfile)
      .catch((err) => {
        console.error(err);
        fetchProfile();
      });
  };

  const onTalkButtonClick = () => {
    navigate("/message", { state: { profile: currentProfile } });
  };

  const profile = (
    <Profile
      {...currentProfile}
      onLikeButtonClick={onLikeButtonClick}
      onPassButtonClick={onPassButtonClick}
    />
  );

  return (
    <>
      {profile}
      <div className={"my-5 flex justify-center"}>
        <button className={"btn btn-circle"} onClick={onTalkButtonClick}>
          Talk
        </button>
      </div>
    </>
  );
};
