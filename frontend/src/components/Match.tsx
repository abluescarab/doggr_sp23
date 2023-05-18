import { Profile } from "@/components/Profile.tsx";
import InitialState, { getRandomProfile } from "@/InitialState.ts";
import { useEffect, useState } from "react";

export const Match = () => {
  const [currentProfile, setCurrentProfile] = useState(
    InitialState.currentProfile
  );
  const [likeHistory, setLikeHistory] = useState(InitialState.likeHistory);

  const onLikeButtonClick = () => {
    const newLikeHistory = [...likeHistory, currentProfile];
    setLikeHistory(newLikeHistory);
    const newProfile = getRandomProfile();
    setCurrentProfile(newProfile);
  };

  const onPassButtonClick = () => {
    const newProfile = getRandomProfile();
    setCurrentProfile(newProfile);
  };

  useEffect(() => {
    console.log("Match rerendered");
  });

  const profile = (
    <Profile
      {...currentProfile}
      onLikeButtonClick={onLikeButtonClick}
      onPassButtonClick={onPassButtonClick}
    />
  );

  return (
    <>
      <div>"MATCH PAGE"</div>
      {profile}
    </>
  );
};
