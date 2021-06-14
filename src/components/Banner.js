import React from "react";
import styled from "styled-components";
import { breakpoints } from "../variables";

export const CloseButton = styled.button`
  position: absolute;
  right: 12px;
  top: 10px;
  background: none;
  border: none;
  outline: none;

  :hover {
    cursor: pointer;
  }

  > img {
    width: 14px;
    height: 14px;

    :hover {
      filter: invert(100%);
    }
  }
`;

export const InfoButton = styled.button`
  border-radius: 4px;
  padding: 4px 10px;
  border: 1px solid #fff;
  font-size: 12px;
`;

const Wrapper = styled.div`
  background: #00b4cd;
  position: absolute;
  z-index: 1000;
  top: 24px;
  font-size: 14px;
  left: 30px;

  max-width: 400px;
  border-radius: 4px;
  padding: 12px;
  > div {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  > p {
    margin-right: 30px;
    color: #fff;
    a {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    left: 10px;
    right: 10px;
  }
`;

export const Banner = ({ setShowBanner, showBanner }) => {
  return (
    <Wrapper>
      <p>
        Zajímá vás svět kryptoměn? Holky v kryptu ve spolupráci s ReactGirls vás
        zvou na online přednásku Soni Parke.
      </p>
      <div>
        <InfoButton
          onClick={() =>
            window.open(
              "https://www.darujbitcoin.cz/uvod-do-sveta-kryptomen-from-zero-to-hero/?fbclid=IwAR2DNx_dI2aJcFv_A_x4tD60FBC8mxR6UCMYRsx6_pOmsSlZS0cYc0sZSIA",
              "_blank"
            )
          }
        >
          Pro Více info
        </InfoButton>
      </div>

      <CloseButton onClick={() => setShowBanner(!showBanner)}>
        <img src="/images/icons/close-white.svg" />
      </CloseButton>
    </Wrapper>
  );
};
