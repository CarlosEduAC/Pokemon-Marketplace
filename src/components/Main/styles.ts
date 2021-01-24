import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin: 30px;
  margin-right: 40px;

  strong {
    color: black;
  }
`;

export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 90%;
    height: 50px;
    border: 0;
    border-radius: 4px;
    margin: 20px 0;
    font-weight: 700;
    font-size: 16px;

    color: #ffffff;
    background-color: ${(props) => props.theme.primary};
    transition: background-color 0.2s;

    :hover {
      background-color: ${(props) => props.theme.primaryLight};
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
`;
