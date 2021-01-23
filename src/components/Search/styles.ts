import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  height: 45px;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.primayDark};
  background: #fff;
  transition: color 0.2s;

  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    background: #f1f1f1;
    input {
      background: #f1f1f1;
    }
    svg {
      color: ${(props) => props.theme.primaryDark};
    }
  }

  input {
    width: 100%;
    outline: none;
    border: none;

    ::placeholder {
      color: #a8a8b3;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
      font-weight: 400;
    }
  }

  svg {
    color: ${(props) => props.theme.primary};
    padding-left: 5px;
  }

  @media (max-width: 1024px) {
    width: 45%;
  }
`;
