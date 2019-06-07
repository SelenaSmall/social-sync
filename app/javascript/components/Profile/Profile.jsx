import React from "react";

const Profile = ({ name, url, logo }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Url: {url}</p>
      <p>Logo: {logo}</p>
    </div>
  )
};

export default Profile;