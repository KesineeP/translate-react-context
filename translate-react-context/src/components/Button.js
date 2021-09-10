import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //   static contextType = LanguageContext; Dont need this when use Consumer

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => (value === "English" ? "Submit" : "ตกลง")}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    // const text = this.context === "English" ? "Submit" : "ตกลง";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
