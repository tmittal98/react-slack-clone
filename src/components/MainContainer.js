import React, { Component } from 'react';

class MainContainer extends Component {
  render() {
    return (
      <div id="main-container">
        <div className="about-channel">
          <div className="channel-name"># announcements ✨</div>
          <div className="channel-desc">All latest announcements</div>
        </div>

        <div className="message-list">
          <div className="message">
            <div className="left-block">
              <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72" />
            </div>
            <div className="right-block">
              <div className="user">
                <div>Roshani Singh</div>
                <span>8:38 PM</span>
              </div>
              <div className="user-msg">
                Hey <span className="user-tag">@Vivek</span>, How are you
                today?Can you give me quick status about the Facelift Project?
              </div>
            </div>
          </div>

          <div className="message">
            <div className="left-block">
              <img src="https://ca.slack-edge.com/T0188513NTW-U01867WD8GK-ga631e27835b-72" />
            </div>
            <div className="right-block">
              <div className="user">
                <div>Vivek Agnihotri</div>
                <span>9:15 PM</span>
              </div>
              <div className="user-msg">
                Hey Roshni, don't worry, that is in progress
                <span className="user-tag"> @Rounak</span> is working on it.😃
              </div>
            </div>
          </div>
        </div>

        <div className="message-box">
          <textarea placeholder="Message #announcements"></textarea>
        </div>
      </div>
    );
  }
}

export default MainContainer;
