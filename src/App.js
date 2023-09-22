import './style.css';
import { useState, useEffect, useRef } from 'react';
import Accordion from "./components/Accordion";
import ChoiceBar from "./components/ChoiceBar";
import Timer from './components/Timer';
import triviaResults from './api';


function App() {
    const [trivias, setTrivias] = useState([]);
    const [doneFirstQuiz, setDoneFirstQuiz] = useState(false)
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const [isTimerStarted, setTimerStarted] = useState(false);

    const [countdown, setCountdown] = useState(30);
    const previousCount = useRef(countdown);
    const timesUp = useRef("")

    const handleSubmit = async () => {
        const results = await triviaResults();
        setTrivias(results);
        startCount();
        setExpandedIndex(-1);
        setDoneFirstQuiz(true);
    };

    const handleClickExpand = (passedIndex => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === passedIndex) {
                return -1;
            } else {
                return passedIndex;
            }
        })
    });

    const startCount = () => {
        if (timesUp.current) {
            clearInterval(timesUp.current);
            console.log("timer reset!")
            setTimerStarted(true);
            previousCount.current = 30;
            setCountdown(previousCount.current)
        }
        setTimerStarted(true)

        return timesUp.current = setInterval(function () {
            // setTimerStarted(true)
            if (previousCount.current > 0) {
                previousCount.current = previousCount.current - 1;
                setCountdown(previousCount.current);
                console.log(previousCount.current);
            } else {
                clearInterval(timesUp.current);
                previousCount.current = 30;
                setCountdown(previousCount.current);
                setTimerStarted(false);
                setTimeout(() => handleSubmit(), 3000)
                // handleSubmit();
                
            }
        }, 1000);
    };

    // const stopTimer = () => {
    //     clearInterval(timesUp.current)
    // }

    // function debounce(func) {
    //     let existingTimer;
    //     console.log(`existingTime: ${existingTimer}`)
    //     return function () {
    //         if (existingTimer){
    //             clearTimeout(existingTimer);
    //         }
    //         existingTimer = setTimeout(func, 10000);
    //     }

    // }

    // useEffect(() => {
    //     previousCount.current = 10;
    //     setCountdown(previousCount.current)
    // }, [])


    const greeting = <h1 className="greeting">Welcome to Trivia!</h1>

    //const timesUpScreen = <div><h1>Times Up!</h1></div>;


    return (
        <div>
            <ChoiceBar onSubmit={handleSubmit} />
            <Timer 
            countdown={countdown} 
            previousCount={previousCount} 
            isTimerStarted={isTimerStarted} 
            doneFirstQuiz={doneFirstQuiz}
            />
            {doneFirstQuiz ? <Accordion
                trivias={trivias}
                expandedIndex={expandedIndex}
                handleExpand={handleClickExpand}
                isTimerStarted={isTimerStarted} /> : greeting}
          
        </div>
    )
};

export default App;