import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  color: #000000;

  h1 {
    margin: 20px 0;
    font-size: 48px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 40px;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 100%;

    figure {
      width: 200px;
      height: 200px;
      border: 1px solid #a8a8b3;
      border-radius: 4px;
      padding: 5px;
      margin: 10px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: capitalize;

      box-shadow: 1px 1px 7px 2px #a8a8b3;
      transition: transform 0.2s;

      :hover {
        transform: scale(1.1);
        /* background-color: ${(props) => props.theme.secondaryLight}; */
        box-shadow: 0px 0px 4px 0px ${(props) => props.theme.primaryDark};
      }
      a {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-decoration: none;

        figcaption {
          margin-left: 5px;
          font-size: 22px;
          font-weight: 700;
          margin-top: 10px;
          text-transform: capitalize;
        }
      }
    }
  }
`;
