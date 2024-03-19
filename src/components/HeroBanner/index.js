import React from "react";
import styled from "styled-components";

const HeroBannerStyle = styled.div`
  .herobanner-wrapper {
    max-width: 1440px;
    margin: auto;
    margin-top: 100px;

    justify-content: space-between;
    padding: 0px 32px;

    @media screen and (min-width: 1260px) {
      display: flex;
    }

    .content {
      text-align: center;
      @media screen and (min-width: 1260px) {
        text-align: left;
      }
      span {
        text-transform: uppercase;
        font-size: 13px;
        color: #1cc343;
        letter-spacing: 1.5px;
        font-weight: bold;
      }

      h1 {
        font-size: 48px;
        text-transform: capitalize;
        letter-spacing: 1.5px;
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
    }

    .images {
      max-width: 800px;
      animation: MoveUpDown 5s linear infinite;
      display: none;
      @media screen and (min-width: 1260px) {
        display: block;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100px);
    }
  }
`;

const HeroBanner = () => {
  return (
    <HeroBannerStyle>
      <div className="herobanner-wrapper">
        <div className="content">
          <span>Join Largest Company of Asia</span>
          <h1>India's most biggest and trusted book</h1>
          <p>Now directly take ID from WhatsApp</p>
          <div className="buttons">
            <a href="https://wa.me/917690030405">+91 7690030405</a>
            <a href="https://wa.me/917691030405">+91 7691030405</a>
          </div>
        </div>
        <div className="images">
          <img
            src="https://nuts.themerex.net/wp-content/uploads/2023/03/124_1-slot-machine.png"
            alt="Hero Banner"
          />
        </div>
      </div>
    </HeroBannerStyle>
  );
};

export default HeroBanner;
