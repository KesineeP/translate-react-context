import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("English")}
        />
        <i
          className="flag th"
          onClick={() => this.props.onLanguageChange("Thai")}
        />
      </div>
    );
  }
}
export default LanguageSelector;
