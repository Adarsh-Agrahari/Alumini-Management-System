import React from "react";
// import { useAuth } from "../context/AuthContext";

const Profile = () => {
  // const { user, logout } = useAuth();
  const user = null;

  if (!user) {
    return <p className="text-center mt-8 text-red-500">You are not logged in.</p>;
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <img
          src={user.picture}
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className="text-gray-700">{user.email}</p>
        <button
          // onClick={logout}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
