import NavBar from "../components/NavBar";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const Button = styled.button`
  border-radius: 5px;
  border: 2px solid var(--primary-1);
  background-color: var(--background-color);
  color: var(--foreground-color);
  padding: 10px 20px;
  margin-top: 20px;
  transition: transform 0.2s ease-in-out;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

function Home() {
  const { t } = useTranslation(["test"]);

  return (
    <>
      <Suspense>
        <main className="flex flex-col items-center w-svw h-svh bg-[url('src/assets/background.webp')] bg-cover bg-center">
          <NavBar />
          <h1
            className="text-3xl text-red-700"
            style={{ fontFamily: "Sedgwick Ave Display" }}
          >
            Akatsuki Quizz
          </h1>
          <img className="" src="src/assets/orochimaru-chibi.webp"></img>
          <h2 style={{ fontWeight: "500", textShadow: "2px 2px 10px black" }}>
            {t("Home.SecondTitle")}
          </h2>
          <button
            className="h-10 w-36 rounded-lg text-white font-bold bg-black border-red-700 border-2 hover:animate-pulse"
            onClick={() => (window.location.href = "/quizz")}
          >
            {t("Home.Quizz")}
          </button>
        </main>
      </Suspense>
    </>
  );
}
export default Home;
