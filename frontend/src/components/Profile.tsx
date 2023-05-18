export type ProfileProps = {
  id: number;
  imgUri: string;
  name: string;
  onLikeButtonClick: () => void;
  onPassButtonClick: () => void;
};

export const Profile = (props: ProfileProps) => {
  const { imgUri, name, onLikeButtonClick, onPassButtonClick } = props;

  return (
    <div>
      <img src={imgUri} alt={"Profile of pet"} />
      <h2>{name}</h2>
      <div>
        <button onClick={onPassButtonClick}>Pass</button>
        <button onClick={onLikeButtonClick}>Like</button>
      </div>
    </div>
  );
};
