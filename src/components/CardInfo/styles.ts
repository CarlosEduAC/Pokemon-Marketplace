import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

  width: 100%;
  margin: 0 20px;

  display: flex;

  color: #000000;
  text-transform: capitalize;

  padding-top: 30px;

  div.poke-back {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    button.back-catalog {
      border: none;
      background: none;
      color: #000000;
      width: 25%;

      svg {
        padding-right: 5px;
      }
    }
  }

  h1 {
    font-size: 30px;
  }

  img {
    width: 256px;
    height: 256px;
  }

  div.poke-price {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
    }
    span {
      padding-left: 5px;
      font-size: 16px;
      font-weight: 500;
    }
  }

  button {
    width: 40%;
    height: 36px;
    border-radius: 5px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    background: ${(props) => props.theme.primary};
    border: 2px solid #000000;
    color: ${(props) => props.theme.textColor};
    transition: all 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      background: ${(props) => props.theme.primaryLight};
      border: 2px solid ${(props) => shade(0.2, props.theme.textColor)};
    }

    svg {
      padding-left: 5px;
    }
  }

  div.block {
    display: flex;
    flex-direction: column;
    width: 95%;

    p {
      width: 11%;
      margin: 10px 0;
      font-size: 18px;
      font-weight: 500;
      border-bottom: 2px solid ${(props) => props.theme.primary};
    }

    div {
      display: flex;
      flex-wrap: wrap;

      span {
        margin-left: 15px;
        margin-bottom: 10px;
        padding: 5px 10px;
        border: 1px solid #000000;
        background-color: #dddddd;
        border-radius: 10px;
      }
    }

    div.moves {
      height: 200px;
      overflow-y: scroll;
      margin-bottom: 20px;
    }
  }
`;
