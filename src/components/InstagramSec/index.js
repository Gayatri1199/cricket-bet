import React from "react";
import styled from "styled-components";

const InstagramsecStyle = styled.div`
  padding: 32px;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 100px;
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
  .image-sec {
    text-align: center;
    white-space: nowrap;
    overflow: scroll;
    scrollbar-width: none;
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
          <a href="https://instagram.com/mahakal_official_book1?igshid=OTJhZDVkZWE=">
            <img
              class="i1"
              alt="MAHAKAL book on instagram"
              src="https://mahakalofficialbook.com/uploads/images/c9f4e624a0c45847a0a5c7a6e95b37b9.jpg"
            />
          </a>
          <a href="https://www.instagram.com/mahakal_official_book1/?igshid=OTJhZDVkZWE%3D">
            <img
              class="i1"
              alt="MAHAKAL book on instagram"
              src="https://mahakalofficialbook.com/uploads/images/dd44c7b3f026d28236b6c847cf2060fb.jpg"
            />
          </a>
          <a href="https://www.instagram.com/mahakal_official_book1/?igshid=OTJhZDVkZWE%3D">
            <img
              class="i1"
              alt="MAHAKAL book on instagram"
              src="https://mahakalofficialbook.com/uploads/images/a59d6fcd4674fc2db6b43b1db35f3474.jpg"
            />
          </a>
          <a href="https://www.instagram.com/mahakal_official_book1/?igshid=OTJhZDVkZWE%3D">
            <img
              class="i1"
              alt="MAHAKAL book on instagram"
              src="https://mahakalofficialbook.com/uploads/images/ccb6ab35a42b3c49c98114dcbfaaecd3.jpg"
            />
          </a>
        </div>
      </div>
    </InstagramsecStyle>
  );
};

export default Instagramsec;
