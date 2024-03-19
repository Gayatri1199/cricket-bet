import React from "react";
import styled from "styled-components";

const PayementSectionStyle = styled.div`
  padding: 32px;
  @media screen and (min-width: 768px) {
    padding: 100px;
  }
  .payment-section {
    max-width: 1440px;
    margin: auto;

    text-align: center;

    img {
      min-width: 220px;
      @media screen and (min-width: 1260px) {
        min-width: 25%;
      }
    }
    span {
      text-transform: uppercase;
      font-size: 13px;
      color: #1cc343;
      letter-spacing: 1.5px;
      font-weight: bold;
    }

    h2 {
      font-size: 38px;
      text-transform: capitalize;
      letter-spacing: 1.5px;
      @media screen and (min-width: 768px) {
        font-size: 48px;
      }
    }
  }
  .screenshots {
    margin-top: 20px;
    @media screen and (min-width: 768px) {
      margin-top: 100px;
    }
  }

  .screenshot {
    display: flex;
    gap: 20px;
    overflow: scroll hidden;
    scrollbar-width: none;
  }
`;

const PaymentSection = () => {
  return (
    <PayementSectionStyle>
      <div className="payment-section">
        <span>PAYMENT</span>
        <h2>PAYMENT PROOF (SCREENSHOT)</h2>
        <div className="screenshots">
          <div className="screenshot">
            <img
              src="https://mahakalofficialbook.com/uploads/slider/e5014559b648f988792efda918d1af96.jpg"
              alt="payment"
            />
            <img
              src="https://mahakalofficialbook.com/uploads/slider/8000c48780c4631b90f63437853270c7.jpg"
              alt="payment"
            />
            <img
              src="https://mahakalofficialbook.com/uploads/slider/7f6aba66e4cd9c6eaa6704b33ddeee11.jpg"
              alt="payment"
            />
            <img
              src="https://mahakalofficialbook.com/uploads/slider/3658a1d286894b2739e2e073e0d787e6.jpg"
              alt="payment"
            />
          </div>
        </div>
      </div>
    </PayementSectionStyle>
  );
};

export default PaymentSection;
