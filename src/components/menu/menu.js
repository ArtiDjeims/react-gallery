import React, { Component } from 'react';
import MenuContent from '../menu-content';

import './menu.css';

class Menu extends Component {

  state = {
    opened: false
  };

  onMenuClick = () => {
    this.setState((state) => {
      return {
        opened: !state.opened
      }
    });
  };

  render() {
    const { opened } = this.state;

    const menuContent = this.state.opened ?
      <MenuContent /> :
      null;

    const menuStyle = {
      width: opened ? '100%' : '5%'
    }

    const logoStyle = {
      display: opened ? 'none' : 'block'
    }

    return (
      <div className={opened ? "menu opened" : "menu"} style={menuStyle}>
        <div className={opened ? 'hamburger change' : 'hamburger'} onClick={this.onMenuClick}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div style={logoStyle} className="logo">Something</div>
        {menuContent}
      </div>
    );
  }
};

export default Menu;