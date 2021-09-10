import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  //   static contextType = LanguageContext; Dont need this when use Consumer

  render() {
    // const text = this.context === "English" ? "Submit" : "ตกลง";
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => (value === "English" ? "Submit" : "ตกลง")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}
export default Button;
