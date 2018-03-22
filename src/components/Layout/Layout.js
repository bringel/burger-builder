import React, { Component } from 'react';
import { css } from 'react-emotion';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerOpenHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const content = css`
      margin-top: 72px;
    `;

    return (
      <React.Fragment>
        <Toolbar toggleButtonClicked={this.sideDrawerOpenHandler} />
        <SideDrawer show={this.state.showSideDrawer} close={this.sideDrawerClosedHandler} />
        <main className={content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
