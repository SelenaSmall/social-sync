import React from "react";
import axios from "axios";

import Profile from "../Profile/Profile"

class ProfilesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profiles: [] };
    this.getAllProfiles();
  }

  getAllProfiles = () => {
    return axios.get('http://localhost:3000/api/profiles')
      .then((response) => {
        console.log(response);
        this.setState({ profiles: response.data });
      })
      .catch((error) => {
        console.log(error);
        return undefined
      })
  };

  render() {
    const profiles = this.state.profiles;

    return (
      <div>
        { profiles.map((profile) => (
          <Profile
            name={profile.name}
            url={profile.url}
            logo={profile.logo} 
          />
        )) }
      </div>
    )
  }
}

export default ProfilesContainer;