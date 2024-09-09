import React from 'react';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'

export class Button extends React.Component {
  constructor(props) {
    super(props);

    // console.log('constructor')

    this.getIcon = this.getIcon.bind(this);
    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  getIcon() {
    const theme = this.props.theme;
    const icon = theme === 'dark'
      ? <BsSunFill color='#FFAD33'/>
      : <BsMoonStarsFill color='#00'/>

    return icon
  }

  handleToggleTheme() {
    const theme = this.props.theme;
    const newValue = theme === 'dark' ? 'light' : 'dark'
    this.props.onToggleTheme(newValue)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log('prevProps', prevProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log('nextProps', nextProps)

    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  
  render() {
    // console.log('render')

    return (
      <button onClick={this.handleToggleTheme} type="button">
        {this.getIcon()}
      </button>
    )
  }
}