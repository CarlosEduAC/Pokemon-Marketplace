import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => props.theme.primary};

  figure {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50px;
      height: 50px;

      :hover {
        width: 45px;
        height: 45px;
      }
    }

    figcaption {
      padding-left: 5px;
      font-size: 26px;
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
