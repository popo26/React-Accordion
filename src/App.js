import './style.css';
import { useState } from 'react';
import Accordion from "./components/Accordion";
import ChoiceBar from "./components/ChoiceBar";
import triviaResults from './api';


function App(){

const [trivias, setTrivias] = useState([]);

    const handleSubmit = async () => {
        const results = await triviaResults();
        setTrivias(results);
        console.log(results)
    }

    return (
        <div>
            <ChoiceBar onSubmit={handleSubmit}/>
            <Accordion trivias={trivias}/>
        </div>
    )
};

export default App;