import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  .header-wrapper {
    max-width: 1440px;
    margin: auto;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu {
      a {
        padding: 15px 25px;
        color: #ffffff;
        letter-spacing: 4.5px;
        background: #1cc343;
        margin-right: 20px;
        text-decoration: none;
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
