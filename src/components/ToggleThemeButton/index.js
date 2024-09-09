import React from "react";
import { ThemeContext } from "../../styles/AppThemeProvider";
import { Button } from "./Button";

export class ToggleThemeButton extends React.Component {

  content() {
    return (
      ({theme, onToggleTheme}) => (
        <Button theme={theme} onToggleTheme={onToggleTheme}/>
      )
    )
  }

  render() {

    return (
      <ThemeContext.Consumer>
        {this.content()}
      </ThemeContext.Consumer>
    )
  }
}