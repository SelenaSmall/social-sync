import React from "react";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: this.props.profileId, name: null, url: null, logo: null};
    this.getProfile()
  }

  getProfile = () => {
    return axios.get(`http://localhost:3000/api/profiles/${this.state.id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          name: response.data.profile.name,
          url: response.data.profile.url,
          logo: response.data.profile.logo
        });
      })
      .catch((error) => {
        console.log(error);
        return undefined
      })
  };

  render() {
    const id = this.state.id;
    const name = this.state.name;
    const url = this.state.url;
    const logo = this.state.logo;

    return (
      <div>
        <p>Profile ID: {id}</p>
        <p>Name: {name}</p>
        <p>Url: {url}</p>
        <p>Logo: {logo}</p>
      </div>
    )
  }
}

export default Profile;