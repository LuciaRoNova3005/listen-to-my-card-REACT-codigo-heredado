import React from "react";
import MainPreview from "../Card/MainPreview";
import MainForm from "../Card/MainForm";
import defaultAvatar from "../../images/listen-logo.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pallete: "1",
      name: "",
      job: "",
      avatar: defaultAvatar,
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    };
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleInputData = this.handleInputData.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleColor(value) {
    this.setState({
      pallete: value,
    });
  }

  updateAvatar(avatar) {
    this.setState({ avatar: avatar });
  }

  handleInputData(ev) {
    const key = ev.currentTarget.id;
    this.setState({
      [key]: ev.currentTarget.value,
    });
  }

  handleReset(ev) {
    ev.preventDefault();
 
    this.setState({
      pallete: "1",
      name: "",
      job: "",
      avatar: defaultAvatar,
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    });


  
  }

  render() {
   
    return (
      <main className="main wrapper">
        <MainPreview
          name={this.state.name}
          job={this.state.job}
          avatar={this.state.avatar}
          email={this.state.email}
          phone={this.state.phone}
          linkedin={this.state.linkedin}
          github={this.state.github}
          pallete={this.state.pallete}
          handleReset={this.handleReset}
        />
        <MainForm
          name={this.state.name}
          job={this.state.job}
          avatar={this.state.avatar}
          email={this.state.email}
          phone={this.state.phone}
          linkedin={this.state.linkedin}
          github={this.state.github}
          pallete={this.state.pallete}
          handleInputData={this.handleInputData}
          updateAvatar={this.updateAvatar}
          handleColor={this.handleColor}
          // handleReset={this.handleReset} 
        />
      </main>
    );
  }
}

export default Main;
