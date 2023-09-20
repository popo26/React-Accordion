import './style.css';
import { useState } from 'react';
import Accordion from "./components/Accordion";
import ChoiceBar from "./components/ChoiceBar";
import triviaResults from './api';


function App(){

const [trivias, setTrivias] = useState([]);
const [doneFirstQuiz, setDoneFirstQuiz] = useState(false)

    const handleSubmit = async () => {
        const results = await triviaResults();
        setTrivias(results);
        console.log(results)
        setDoneFirstQuiz(true);
    };

    const greeting = <h1 className="greeting">Welcome to Trivia!</h1>

    return (
        <div>
            <ChoiceBar onSubmit={handleSubmit}/>
            {doneFirstQuiz ? <Accordion trivias={trivias}/> : greeting }
           
        </div>
    )
};

export default App;