import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 388px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #ffffff;
`;
export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
export const TitleLogin = styled.p`

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
`;

export const SubtitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;
  color: #ffffff;
`;

export const JaTenho = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #FFFFFF;
`;

export const FazerLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin-left: 5px;

  &:hover {
    text-decoration:underline;
    cursor:pointer;
}

 

  color: #23dd7a;
`;

export const Description = styled.p`
  height: 75px;
  width: 372px;
  left: 750px;
  top: 498px;
  border-radius: nullpx;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 35px;
  margin-top: 15px;
  line-height: 25px;
  color: #ffffff;
`;
