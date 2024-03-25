import NavBar from "../components/NavBar";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

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
