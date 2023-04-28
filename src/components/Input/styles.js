import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  max-width: 275px;
  height: 30px;
  border-bottom: 1px solid #3b3450;
  font-size: 20px;
  color: #8647ad;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin: 5px 0;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  width: 100%;
  border: 0;
  height: 30px;
  font-size:16px;

  ::placeholder {
    height: 25px;
    width: 135px;
    left: 27px;
    top: 0px;
    border-radius: nullpx;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

    color: #ffffff;
  }
`;
