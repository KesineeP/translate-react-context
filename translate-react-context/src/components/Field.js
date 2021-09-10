import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "English" ? "Name" : "ชื่อ";
    return (
      <div className="ui feild">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
export default Field;
