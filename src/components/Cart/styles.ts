import styled from 'styled-components';

interface ContainerProps {
  windowHeight: number;
  windowWidth: number;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: column;

  color: #000000;
  background-color: #ffffff;
  border: 2px solid #dddddd;
  min-width: 430px;

  max-height: ${(props) => `${props.windowHeight * 0.75}px`};
  text-transform: capitalize;
  transition: border 0.2s;

  :hover {
    border: 4px solid #dddddd;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;
    box-shadow: 1px 1px 5px #dddddd;
    margin-bottom: 4px;

    h1 {
      padding: 20px 8px;
      font-size: 26px;
      font-weight: 700;
    }
  }

  ul {
    width: 100%;
    height: 100%;

    box-shadow: 1px 1px 5px #dddddd;
    overflow-x: hidden;
    overflow-x: auto;
  }

  footer {
    width: 100%;
    height: 150px;
    margin-bottom: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 90%;
      margin: 15px 20px;

      strong {
        font-size: 18px;
      }

      figure {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
          width: 25px;
          height: 25px;
        }

        figcaption {
          margin-left: 2px;
          font-size: 18px;
        }
      }
    }

    button {
      width: 85%;
      height: 45px;
      border-radius: 4px;
      color: #ffffff;
      font-weight: 700;
      font-size: 16px;
      background-color: ${(props) => props.theme.primary};
      transition: background-color 0.2s;

      :hover {
        background-color: ${(props) => props.theme.primaryLight};
      }

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
