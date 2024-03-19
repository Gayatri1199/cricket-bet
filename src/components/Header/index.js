import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  .header-wrapper {
    max-width: 1440px;
    margin: auto;
    padding: 16px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
      padding: 16px;
    }
    .menu {
      a {
        padding: 10px;
        color: #ffffff;
        font-size: 12px;
        background: #1cc343;
        margin-right: 10px;
        text-decoration: none;
        @media screen and (min-width: 768px) {
          margin-right: 20px;
          padding: 15px 25px;
          letter-spacing: 4.5px;
          font-size: 16px;
        }
      }
    }
    .logo {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-wrapper">
        <div className="logo">
          <img
            src="https://mahakalofficialbook.com/uploads/setting/0aaf7dea9e0d84a016304fc1fca73d46.png"
            alt="Logo"
          />
        </div>
        <div className="menu">
          <a href="/#">PARTNERS</a>
          <a href="https://wa.me/917690030405">LET'S TALK</a>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
