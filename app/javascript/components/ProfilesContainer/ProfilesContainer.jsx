import React from "react";
import axios from "axios";

import Profile from "../Profile/Profile"

class ProfilesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profileIds: [] };
    this.getAllProfiles();
  }

  getAllProfiles = () => {
    return axios.get('http://localhost:3000/api/profiles')
      .then((response) => {
        console.log(response);
        let profileIds = [];

        response.data.map((profile) => {
          profileIds.push(profile.id);
        });
        this.setState({ profileIds: profileIds });
      })
      .catch((error) => {
        console.log(error);
        return undefined
      })
  };

  render() {
    const profileIds = this.state.profileIds;

    return (
      <div>
        { profileIds.map((profileId) => (<Profile profileId={profileId} />)) }
      </div>
    )
  }
}

export default ProfilesContainer;