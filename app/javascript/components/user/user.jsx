import React from "react";
import axios from "axios";
import ProfilesContainer from "../ProfilesContainer/ProfilesContainer";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null, githubProfile: {} };
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    return axios.get('http://localhost:3000/api/users/1')
      .then((response) => {
        this.setState({currentUser: response.data.user });
        this.getGithubProfile(response.data.user);
      })
      .catch((error) => {
        console.log(error);
        return undefined
      })
  };

  getGithubProfile = (username) => {
    return axios.get(`https://api.github.com/users/${username}`)
      .then((response) => {
        let entriesObject = {};
        Object.entries(response.data).map((key) => {
          entriesObject[key[0]] = key[1];
        });
        this.setState({ githubProfile: entriesObject })
      })
      .catch((error) => {
        console.log(error);
        return undefined
      })
  };

  renderData = (profile) => (
    Object.entries(profile).map((key) => (
      <div>
        <label>{key}</label>
        <span key={key}>{profile[key]}</span>
      </div>
    ))
  );

  render() {
    const currentUser = this.state.currentUser;
    const githubProfile = this.state.githubProfile;

    return (
      <div>
        <p>Hello ! {currentUser}</p>

        <ProfilesContainer />

        {this.renderData(githubProfile)}
      </div>
    )
  }
}

export default User;