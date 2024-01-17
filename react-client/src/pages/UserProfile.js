import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile({ currentUser }) {
  const [profile, setProfile] = useState({});
  const { profileID } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (currentUser) {
          const response = await fetch(`/users/${profileID}`);
          const returnedData = await response.json();
          setProfile(returnedData);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [profileID, currentUser]);

  if (!currentUser || Object.keys(profile).length === 0) {
    return <div>Loading...</div>;
  }

  const { profile_img, first_name, last_name, username } = profile;

  return (
    <div>
      <img src={profile_img} alt={`${first_name} ${last_name}`} />
      <p>{username}</p>
      <p>{first_name}</p>
      <p>{last_name}</p>
    </div>
  );
}

export default UserProfile;


