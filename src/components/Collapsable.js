import React from "react";


class Collapsable extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      isHidden: false
    };
  

    this.HandleCollapsableClick = this.HandleCollapsableClick.bind(this);
  }

  HandleCollapsableClick(){
    this.setState({
    isHidden: !this.state.isHidden
  });
}
  render(){
    const hiddenCollapsable = this.state.isHidden ? 'hidden' : '';
  return(
    <div className={`js-hidden ${hiddenCollapsable}`}>
    <div className="collapsable__header container js-collapsible" onClick={this.HandleCollapsableClick}>
      <i className={this.props.icon}></i>
      <h2 className="collapsable__header--title">{this.props.title}</h2>
    <i className="fas fa-chevron-up hidden__icon"></i>
    </div>
    <div>{this.props.children}</div>
        </div>
      
  );
  }
}
export default Collapsable;

//