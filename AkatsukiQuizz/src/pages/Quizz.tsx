import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Question from "../components/Question";
// import { useForm, SubmitHandler } from "react-hook-form";
// type IUserAnswers = {
//     firstAnswer: string;
// }
function Quizz() {
    const {questionId}  = useParams();
    // const onSubmit: SubmitHandler<IUserAnswers> = data => {
    //     for (const [key, value] of Object.entries(data)) {
    //         console.log(`${key}: ${value}`);
    //     }
    // };
    // const { register, handleSubmit, setValue} = useForm<IUserAnswers>();
    // const getClickedValue = (value: string) => {
    //     setValue("firstAnswer", value)
    //     register("firstAnswer", {value: value})
    // }
    return (
        <>
            <NavBar />
            <div>
                {questionId ? <Question Id={parseInt(questionId)} /> : <a href="/quizz/question/1">Do Quizz</a>}
                {/* {questionId ? <p>Question {questionsArr.find(q => q.id === parseInt(questionId))?.question}</p> : null} */}
                {/* <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <label htmlFor="Answer">Select an option</label>
                    <button onClick={()=>getClickedValue("INFP")}>INFP</button>
                    <button onClick={()=>getClickedValue("INTJ")}>INTJ</button>
                    <input type="submit" />
                </form> */}
            </div>
        </>
    );
}
export default Quizz;