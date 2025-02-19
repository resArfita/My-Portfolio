import profilepict from "../../assets/profilePict.png";

const ProfilePict = () => {
  return (
    <>
        <div className="my-5" >
          <img
            src={profilepict}
            alt="my profile pict"
            className="size-30 rounded-full object-cover"
          />
        </div>
    </>
  );
};

export default ProfilePict;
