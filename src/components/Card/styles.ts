import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  width: 225px;
  height: 320px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 5px;
  margin: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;

  box-shadow: 1px 1px 7px 2px #dddddd;
  transition: transform 0.2s;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 4px 0px ${(props) => props.theme.primary};
  }

  figure {
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: ${(props) => props.theme.primaryLight};

    ::after {
      content: '';
      display: block;
      width: 75%;
      height: 50%;
      border-radius: 50%;
      background-color: #ffffff;
      opacity: 0.7;
      position: absolute;
      top: 8%;
      left: 13%;
    }
    button.button-info {
      width: 100%;

      display: flex;
      justify-content: flex-end;

      padding-right: 10px;

      border: none;
      background: none;

      svg.info-icon {
        width: 20px;
        height: 20px;
        color: #ffffff;

        :hover {
          width: 25px;
          height: 25px;
          color: #dddddd;
        }
      }
    }

    img {
      width: 70%;
      height: 50%;
      z-index: 1;
    }

    figcaption {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90%;

      strong {
        margin-top: 8px;
        margin-bottom: 8px;
        font-size: 1.2em;
        color: ${(props) => props.theme.textColor};
        font-family: 'Roboto', sans-serif;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
        }
        span {
          color: ${(props) => props.theme.textColor};
          padding-left: 5px;
          font-size: 20px;
          font-weight: 500;
        }
      }

      button {
        width: 100%;
        height: 36px;
        border-radius: 5px;
        margin-top: 10px;
        font-weight: 700;
        font-size: 14px;
        text-transform: uppercase;
        background: #ffffff;
        border: 2px solid ${(props) => props.theme.textColor};
        color: ${(props) => props.theme.primary};
        transition: all 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;

        :hover {
          background: ${shade(0.2, '#ffffff')};
          border: 2px solid ${(props) => shade(0.2, props.theme.textColor)};
        }

        svg {
          padding-left: 5px;
        }
      }
    }
  }
`;
