import React from "react";
import UserProfile from "../component/userProfile";
import "../../styles/profile.css";

const Profile = () => {
  return (
    <div className="container profile-main pt-5 vh-100">
      <UserProfile />
    </div>
  );
};
export default Profile;
