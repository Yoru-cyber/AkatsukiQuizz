import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function NavBar() {
  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };
  const { i18n, t } = useTranslation(["test"]);
  return (
    <nav className="text-white flex flex-row gap-4 text-center justify-center items-center mb-5">
      
         <button
          className="w-8 text-white hover:scale-110"
          style={{ color: "white" }}
          onClick={changeLanguage}
        >
          {i18n.language}
        </button> 

        <Link className="hover:scale-105" to="/home">
          {t("NavBar.Home")}
        </Link>

        <Link className="hover:scale-105" to="/about">
          {t("NavBar.About")}
        </Link>

        <Link className="hover:scale-105" to="/quizz">
          Quizz
        </Link>
      </nav>
  );
}

export default NavBar;
