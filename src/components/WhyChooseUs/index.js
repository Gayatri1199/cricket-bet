import React from "react";
import styled from "styled-components";

const WhyChooseUsStyle = styled.div`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.5) 36%,
    rgb(73 14 42) 100%
  );
  padding: 32px;
  @media screen and (min-width: 768px) {
    padding: 100px 50px;
  }

  .why-choose-us-wrapper {
    max-width: 1280px;
    margin: auto;
    display: flex;
    gap: 100px;
    flex-direction: column-reverse;
    text-align: center;

    .image {
      display: flex;
      overflow: scroll hidden;
      gap: 20px;
      scrollbar-width: none;
      a {
        display: block;
        min-width: 230px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      padding-top: 50px;
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

      ul {
        padding-top: 20px;
        li {
          font-size: 20px;

          max-width: 210px;
          margin: auto;
          margin-bottom: 20px;
          @media screen and (min-width: 768px) {
            max-width: 300px;
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
    }
  }
`;

const WhyChooseUs = () => {
  return (
    <WhyChooseUsStyle>
      <div className="why-choose-us-wrapper">
        <div className="image">
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/f276b2d8899bbb0f9b6a5ba58ece06d2.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/61f975b664342e421368b5f7f1a745eb.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/c619d0babdf62daf62908631f7fd3266.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/ee365a8a37db2c1c111ed21bc967717b.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/f276b2d8899bbb0f9b6a5ba58ece06d2.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/61f975b664342e421368b5f7f1a745eb.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/c619d0babdf62daf62908631f7fd3266.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/61f975b664342e421368b5f7f1a745eb.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/c619d0babdf62daf62908631f7fd3266.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/ee365a8a37db2c1c111ed21bc967717b.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/f276b2d8899bbb0f9b6a5ba58ece06d2.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/61f975b664342e421368b5f7f1a745eb.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
          <a target="_blank" href="https://wa.me/917690030405">
            <img
              src="https://mahakalofficialbook.com/uploads/images/c619d0babdf62daf62908631f7fd3266.jpg"
              alt="MAHAKAL book official website"
            />
          </a>
        </div>
        <div className="content">
          <span>Why choose us</span>
          <h2>Get unlimited access to top games!</h2>
          <p>Here are the ways you can contact us!!</p>
          <ul>
            <li>Multiple Categories</li>
            <li>Flexible Price Plans</li>
            <li>Gambler's Community</li>
          </ul>
          <a href="https://wa.me/917690030405">CONTACT US</a>
        </div>
      </div>
    </WhyChooseUsStyle>
  );
};

export default WhyChooseUs;
