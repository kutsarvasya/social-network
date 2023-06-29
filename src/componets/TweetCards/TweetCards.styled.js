import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;
  width: 308px;
  height: 404px;
  background: linear-gradient(to left, #471ca9 100%, #5736a3 50%, #4b2a99 100%);
  border-radius: 20px;
  padding: 28px 36px;
`;

export const ImgGoIT = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const ImgLogo = styled.img`
  width: 308px;
  height: 168px;
  margin-bottom: 88px;
`;
export const Line = styled.div`
  position: absolute;
  left: 0;
  background-color: #fbf8ff;
  width: 380px;
  height: 8px;
  top: 214px;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;
export const ImgAvatar = styled.img`
  width: 80px;
  height: 80px;
  z-index: 9;
  border-radius: 50px;
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translate(-50%);
`;
export const Title = styled.h2`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 26px;
  }
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;
  border: none;
  border-radius: 10px;
  padding: 14px, 28px, 14px, 28px;
  background-color: #ebd8ff;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  background-color: ${(props) =>
    props.children === "FOLLOW" ? "#EBD8FF" : "#5CD3A8"};
`;
export const Border = styled.img`
  width: 90px;
  height: 90px;
  z-index: 10;
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translate(-50%);
`;
