import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Button} from "@mui/material";
function NavBar() {
  const NavBar = styled.nav`
    margin: 0;
    padding: 0;
    width: 100%;
  `;
  const Ul = styled.ul`
    list-style-type: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  `;
  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }
  const {i18n, t} = useTranslation(["test"]);
  return (
    <NavBar>
      <Ul>
        
          <Button variant="text" style={{color:"white"}} onClick={changeLanguage}>{i18n.language}</Button>
   
        
        <li>
          <Link className="Link" to="/home">
            {t("NavBar.Home")}
          </Link>
        </li>
        <li>
          <Link className="Link" to="/about">
            {t("NavBar.About")}
          </Link>
        </li>
        <li>
          <Link className="Link" to="/quizz">
            Quizz
          </Link>
        </li>
      </Ul>
      <style>
        {`.Link{
        text-decoration: none;
        color: var(--foreground-color);
        font-size: 20px;
        
      }
      li{
        transition: transform 0.5s;
      }
      li:hover{
        transform: scale(1.5);
      }
      `}
      </style>
    </NavBar>
  );
}

export default NavBar;
