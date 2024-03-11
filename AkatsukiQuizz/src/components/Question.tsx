import IQuestion from "../interfaces/IQuestion";

const questionsArr: Array<IQuestion> = [
    {
        id: 1,
        question: "What is your MBTI?",
        answers: ["INFP", "INTJ", "ENFP", "ISTJ"]
    },
    {
        id: 2,
        question: "What is your favorite color?",
        answers: ["red", "blue", "green", "yellow"]
    },
    {
        id: 3,
        question: "What is your favorite movie?",
        answers: ["Lord of the rings", "Harry potter", "Dune", "Star Wars"]
    }
];
function Question(props: {Id: number}) {
    const {Id} = props;
    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>This is Question</h1>
                {Id ? <p>Question {questionsArr.find(q => q.id === Id)?.question}</p> : null} {/* it should be checked first if arr[Id] exists/*/}
                <ul style={{listStyleType: "none", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center"}}>
                    {questionsArr.find(q => q.id === Id)?.answers.map((answer, index) => <li key={index}><button >{answer}</button></li>)}
                </ul>
            </div>
        </>
    );
}
export default Question