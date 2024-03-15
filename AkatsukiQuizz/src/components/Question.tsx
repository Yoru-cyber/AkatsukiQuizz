import { useTranslation } from "react-i18next";
import IQuestion from "../interfaces/IQuestion";
import { Button, ButtonGroup } from "@mui/material";

const questionsArr: Array<IQuestion> = [
  {
    id: 1,
    question: "What is your motivation?🏁",
    answers: [
      "To achieve peace through world domination.",
      "To collect and utilize powerful creatures for personal gain.",
      "To prove your artistic merit through explosive creations.",
      "To find a way to cheat death and live forever.",
      "To protect your loved ones, even at a great cost.",
    ],
  },
  {
    id: 2,
    question: "What is your favorite color?",
    answers: ["red", "blue", "green", "yellow"],
  },
  {
    id: 3,
    question: "What is your favorite movie?",
    answers: ["Lord of the rings", "Harry potter", "Dune", "Star Wars"],
  },
];
function Question(props: { Id: number }) {
    const {t} =useTranslation(["test"]);
  const { Id } = props;
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "250px" }}>
        {questionsArr.find((question) => question.id === Id)?(
            <>
            <h2>{questionsArr.find((question) => question.id === Id)?.question}</h2>
              <p>{questionsArr.find((question) => question.id === Id)?.answers.map((answer) => <ButtonGroup><Button>{answer}</Button></ButtonGroup>)}</p>
              </>
        ) : <p>{t("Question.Error.NotFound")}</p>}
        {/* it should be checked first if arr[Id] exists/*/}
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {questionsArr
            .find((q) => q.id === Id)
            ?.answers.map((answer, index) => (
              <li key={index}>
                <button>{answer}</button>
              </li>
            ))} */}
        </ul>
      </div>
    </>
  );
}
export default Question;
