import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
`;

export const ContainerStyle = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(53, 58, 63, 0.2) 0%,
    rgba(18, 19, 22, 0.2) 100%
  );
  box-shadow: 0px 50px 38px rgba(0, 0, 0, 0.25);
`;

export const ButtonStyle = styled.button`
  width: 30%;
  height: 10%;
  position: absolute;
  bottom: 0;
  right: 50%;
  background: linear-gradient(180deg, #dd4d0a -110%, #bd220d 100%);
  box-shadow: 0px 50px 38px rgba(0, 0, 0, 0.25);
  border-radius: 37px;
  transform: translate(50%, 50%);
  border: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */

  color: #ffffff;

  text-shadow: 0px 0px 9px #ffffff;
`;
