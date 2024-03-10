import NavBar from "../components/NavBar";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
const Title = styled.h1`
  font-family: "Sedgwick Ave Display";
  color: var(--primary-1);

`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-image: url("src/assets/background.webp");
  background-size: cover;
  background-position: center;`
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
  margin-top: 10px;`
const Button = styled.button`
border-radius: 5px;
border: 2px solid var(--primary-1);
background-color: var(--background-color);
color: var(--foreground-color);
padding: 10px 20px;
margin-top: 20px;
transition: transform 0.2s ease-in-out;
font-family: 'Inter', sans-serif;
font-weight: bold;
&:hover {
  cursor: pointer;
  transform: scale(1.1);
}
`;
let isFirstTime = isFirstTimeUser();
function isFirstTimeUser(){
  if(localStorage.getItem("isFirstTimeUser") === null){
    localStorage.setItem("isFirstTimeUser", "true");
    return true;
  }
  return false;
}


function Home() {
  const {t} = useTranslation(["test"]);

  return (
    <>
    {isFirstTime === true && window.alert("You look lonely. I can fix that.")}
    <Suspense>
    
      <FlexContainer>
      <NavBar />
      <Title>Akatsuki Quizz</Title>
      <ImgContainer>
      <img style={{marginTop: "10px"}} src="src/assets/orochimaru-chibi.webp"></img>
      </ImgContainer>
      <h2 style={{fontWeight: "500", textShadow: "2px 2px 10px black"}}>{t("Home.SecondTitle")}</h2>
      <Button onClick={() => window.location.href = "/quizz"}>{t("Home.Quizz")}</Button>
      </FlexContainer>
      </Suspense>
    </>
  );
}
export default Home;
