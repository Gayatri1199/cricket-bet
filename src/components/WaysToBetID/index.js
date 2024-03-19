import React from "react";
import styled from "styled-components";

const WaysToBetIDStyle = styled.div`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.5) 36%,
    rgb(73 14 42) 100%
  );
  padding: 100px;
  text-align: center;
  .ways {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-item: center;
    justify-content: center;
  }
  span {
    text-transform: uppercase;
    font-size: 13px;
    color: #1cc343;
    letter-spacing: 1.5px;
    font-weight: bold;
  }

  h2 {
    font-size: 48px;
    text-transform: capitalize;
    letter-spacing: 1.5px;
  }
  .ways {
    margin-top: 50px;
  }
  .way {
    background: #120d1c;
    padding: 3.2em 2em 1.2em;
    max-width: 252px;
    width: 100%;
    cursor: pointer;
    .image {
      max-width: 100px;
      margin: auto;
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  a {
    padding: 15px 25px;
    color: #ffffff;
    letter-spacing: 4.5px;
    background: rgb(248, 47, 119);
    margin-right: 20px;
    text-decoration: none;
    margin-top: 20px;
    display: inline-block;
  }
  .info {
    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

const WaysToBetID = () => {
  return (
    <WaysToBetIDStyle>
      <div className="ways-to-bet">
        <span>WELCOME</span>
        <h2>How to place Your bet in our IDs</h2>
        <p>
          With Our Step-By-Step Guide For Beginners, Get Started Playing. Start
          Learning Now.. 24/7 ACTIVE.{" "}
        </p>

        <div className="info">
          <a class="a_play flex" href="#Underage">
            <img
              src="https://www.mahakalofficialbook.com/assets/md/images/plus18.webp"
              class="clb_play"
              alt=""
              width="25px"
            />
            <span> --Underage gambling is an offence-- &nbsp; &nbsp;</span>
          </a>
          <a class="a_play flex" href="#Restricted-territories">
            <img
              src="https://www.mahakalofficialbook.com/assets/md/images/restricted.webp"
              class="clb_play"
              alt=""
              width="25px"
            />
            <span>--Restricted Territories--</span>
          </a>
        </div>

        <div className="ways">
          <div className="way">
            <div className="image">
              <img src="../WaysToBet/cricket.png" alt="Cricket" />
            </div>
            <div className="content">
              <span>Cricket</span>
            </div>
          </div>
          <div className="way">
            <div className="image">
              <img src="../WaysToBet/cricket.png" alt="Cricket" />
            </div>
            <div className="content">
              <span>Cricket</span>
            </div>
          </div>
          <div className="way">
            <div className="image">
              <img src="../WaysToBet/cricket.png" alt="Cricket" />
            </div>
            <div className="content">
              <span>Cricket</span>
            </div>
          </div>
          <div className="way">
            <div className="image">
              <img src="../WaysToBet/cricket.png" alt="Cricket" />
            </div>
            <div className="content">
              <span>Cricket</span>
            </div>
          </div>
          <div className="way">
            <div className="image">
              <img src="../WaysToBet/cricket.png" alt="Cricket" />
            </div>
            <div className="content">
              <span>Cricket</span>
            </div>
          </div>
        </div>
        <p>We deal only on Whatsapp</p>
        <a href="https://wa.me/917690030405">CONTACT US</a>
      </div>
    </WaysToBetIDStyle>
  );
};

export default WaysToBetID;
