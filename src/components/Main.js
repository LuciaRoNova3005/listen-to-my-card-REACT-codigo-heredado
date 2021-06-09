import React from "react";
import MainPreview from "./MainPreview";
import MainForm from "./MainForm";
import defaultAvatar from '../images/listen-logo.png';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatar: defaultAvatar };
    this.updateAvatar = this.updateAvatar.bind(this);
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }
  render(){
 
  return (
    <main className="main wrapper">
      <MainPreview avatar={this.state.avatar}/>
      <MainForm avatar={this.state.avatar} updateAvatar={this.updateAvatar}/>
    </main>
  );
}
}

export default Main;

/*
import React from "react";
import "../stylesheets/App.scss";
import MainPreview from "./MainPreview";
import MainForm from "./MainForm";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      palette: "",
      name: "",
      job: "",
      image: "",
      email: "",
      phone: "",
      linkedin: "",
      github: ""
    };
  }

  handleChange(ev) {
    const inputName = ev.target.name;
    const inputJob = ev.target.job;
    this.setState({
      [inputName]: ev.target.value,
    });
    this.setState({
      [inputJob]: ev.target.value,
    });
  }

  render() {
    return (
      <>
        <MainPreview
          name={this.state.name}
          job={this.state.job}
        />
        <MainForm
        handleChange={this.handleChange}
          name={this.state.name}
          job={this.state.job}
        />
      </>
    );
  }
}

export default Main;
*/
