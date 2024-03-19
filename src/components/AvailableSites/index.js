import React from "react";
import styled from "styled-components";

const AvailableSitesStyle = styled.div`
  background: #0000004d;
  padding: 50px;
  margin-top: 100px;
  .available-sites-wrapper {
    max-width: 1440px;
    margin: auto;
    text-align: center;

    span {
      text-transform: uppercase;
      font-size: 13px;
      color: #1cc343;
      letter-spacing: 1.5px;
      font-weight: bold;
    }

    h2 {
      font-size: 40px;
      letter-spacing: 1.5px;
      font-weight: bold;
    }

    .sites {
      text-align: center;
      margin-top: 80px;
      .site {
        min-width: 100px;
        height: 64px;
        overflow: hidden;
        display: inline-block;
        margin-right: 100px;
      }

      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 20px;
        letter-spacing: 1.5px;
      }
    }
  }
`;

const AvailableSites = () => {
  return (
    <AvailableSitesStyle>
      <div className="available-sites-wrapper">
        <span>WELCOME</span>
        <h2>The Best Casino Experience</h2>
        <div className="sites">
          <div className="site">
            <a href="/#">
              <h3>MAHAKALBOOK247 👑</h3>
            </a>
          </div>
          <div className="site">
            <a href="/#">
              <img
                src="https://www.mahakalofficialbook.com/assets/md/images/spritessites.webp"
                alt="Site"
              />
            </a>
          </div>
          <div className="site">
            <a href="/#">
              <h3>JETEXCHANGE ✈️</h3>
            </a>
          </div>
          <div className="site">
            <a href="/#">
              <h3>👑 BETBOOK247</h3>
            </a>
          </div>
        </div>
      </div>
    </AvailableSitesStyle>
  );
};

export default AvailableSites;
