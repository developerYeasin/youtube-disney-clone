import React from "react";
import styled from "styled-components";
import Styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="./images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Discription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            impedit nisi error ab placeat veritatis, odit reprehenderit neque,
            aspernatur debitis doloribus. Nemo perspiciatis quam porro,
            explicabo, dicta
          </Discription>
          <CTALogoTwo src="./images/cta-logo-two.png" all="" />
        </CTA>
        <BgIamge />
      </Content>
    </Container>
  );
};

const Container = Styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
heigh: 100vh;
`;
const Content = Styled.div`
/* margin-bottom: 10vw; */
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;
const BgIamge = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition: all 0.4s ease-in-out;
  width: 100%;
`;
const CTALogoOne = styled.img`
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  display: block;
  margin-bottom: 12px;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;

  &:hover {
    background: #0483ee;
    cursor: pointer;
  }
`;
const Discription = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  transition: all .4s ease-in-out;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
