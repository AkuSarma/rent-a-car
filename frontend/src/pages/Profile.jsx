import { useAuth } from "../context/authContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const {user, logout} = useAuth();
  const navigate = useNavigate();

  if (!user){
    navigate("/registration");
  }

  return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.createdAt}</p>
        <button onClick={logout}>Logout</button>
      </div>
  );
};

export default Profile;