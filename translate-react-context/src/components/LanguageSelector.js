import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("English")}
        />
        <i
          className="flag th"
          onClick={() => this.context.onLanguageChange("Thai")}
        />
      </div>
    );
  }
}
export default LanguageSelector;
