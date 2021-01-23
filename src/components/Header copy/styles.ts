import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 85px;
  padding: 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.primary};

  figure {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 45px;
      height: 45px;
    }

    figcaption {
      margin-left: 5px;
      font-size: 22px;
      font-weight: 700;
      text-transform: capitalize;

      :hover {
        color: ${shade(0.2, '#ffffff')};
      }
    }
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;

    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    transition: color 0.2s;

    :hover {
      color: ${shade(0.2, '#ffffff')};
    }

    svg {
      color: '#ffffff';
      padding-right: 5px;
    }
  }
`;
