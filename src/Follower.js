import React from "react";

const Follower = ({ login, html_url, avatar_url }) => {
  return (
    <div className=" bg-blue-300 rounded">
      <div className="h-24 w-24 mx-auto my-2">
        <img
          className="h-full w-full rounded-full"
          src={avatar_url}
          alt={login}
        />
      </div>
      <h1 className="font-semibold">{login}</h1>
      <button className="bg-blue-600 text-blue-100 rounded px-3 py-1 hover:bg-blue-900 hover:text-blue-300 transition transition-all duration-300 ease-in-out my-4">
        <a href={html_url}>View Profile</a>
      </button>
    </div>
  );
};

export default Follower;
