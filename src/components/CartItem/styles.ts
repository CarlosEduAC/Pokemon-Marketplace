import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 180px;
  width: 95%;
  align-items: center;
  margin: 8px;
  font-size: 18px;
  background-color: #f1f1f1;

  img {
    width: 50px;
    margin-left: 5px;
  }

  strong {
    font-size: 16px;
    padding-left: 5px;
  }

  div.cart-item {
    display: flex;
    align-items: center;
    justify-content: center;

    div.cart-qtd {
      display: flex;
      justify-content: space-between;
      border-radius: 4px;
      border: 2px solid #dddddd;
      margin-right: 10px;

      span {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        width: 25px;
        height: 25px;
        transition: background-color 0.2s;

        :hover {
          background-color: ${shade(0.1, '#f1f1f1')};
        }
      }

      input {
        width: 25px;
        height: 25px;
        border: none;
        text-align: center;
      }
    }
    figure {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      img {
        width: 20px;
        height: 20px;
      }

      figcaption {
        padding-left: 5px;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;
