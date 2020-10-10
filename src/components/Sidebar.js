import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <div className="user-profile">
          <div className="avatar">
            <img src="https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg" />
          </div>
          <div>Tushar</div>
        </div>

        <hr className="sidebar-spacer" />

        <div className="channels">
          <div className="header">Channels</div>

          <ul className="channels-list">
            <li>#design-feedback</li>
            <li>#events</li>
            <li>#announcements</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
