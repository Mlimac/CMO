import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 45px;
  background: #ffffff53;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #000000;
  font-weight: 600;
  margin-top: 10px;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    width: 90%;
    height: 50px;
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.597);
    border-radius: 40px;
    font-size: 16px;
    color: #ffffff5c;
    padding: 0 20px;
    outline: none;
    transition: border-color 0.3s, transform 0.3s;

    &:focus {
      border-color: #ffffff;
      transform: scale(1.05);
    }

    &::placeholder {
      color: white;
    }
  }
`;

export const Fundo = styled.div`
  width: 420px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
  padding: 30px 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;
  text-align: center;
  backdrop-filter: blur(10px);
`;
