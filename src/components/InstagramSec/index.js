import React from "react";
import styled from "styled-components";

const InstagramsecStyle = styled.div`
  padding: 100px;
  text-align: center;
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
  .image-sec {
    text-align: center;

    img {
      max-width: 300px;
      display: inline-block;
      margin-right: 20px;
    }
  }
`;

const Instagramsec = () => {
  return (
    <InstagramsecStyle>
      <div className="inst-sec">
        <span>INSTAGRAM</span>
        <h2>Social Presence</h2>
        <div className="image-sec">
          <img
            alt="MAHAKAL book on instagram"
            src="https://mahakalofficialbook.com/uploads/images/c9f4e624a0c45847a0a5c7a6e95b37b9.jpg"
          />
          <img
            alt="MAHAKAL book on instagram"
            src="https://mahakalofficialbook.com/uploads/images/c9f4e624a0c45847a0a5c7a6e95b37b9.jpg"
          />
          <img
            alt="MAHAKAL book on instagram"
            src="https://mahakalofficialbook.com/uploads/images/c9f4e624a0c45847a0a5c7a6e95b37b9.jpg"
          />
          <img
            alt="MAHAKAL book on instagram"
            src="https://mahakalofficialbook.com/uploads/images/c9f4e624a0c45847a0a5c7a6e95b37b9.jpg"
          />
        </div>
      </div>
    </InstagramsecStyle>
  );
};

export default Instagramsec;
