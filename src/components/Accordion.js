import { useState } from "react";
import he from 'he';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ trivias }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (passedIndex => {
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === passedIndex) {
                return -1;
            } else {
                return passedIndex;
            }
        })
    });

    const renderedItems = trivias.map((trivia, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="icon">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            <div className="accordion" key={index}>
                    <div onClick={() => { handleClick(index) }} className="question-div">
                        {he.decode(trivia.question)}
                        {icon}
                    </div>
             

                {isExpanded &&
                    <div className="answer-div">
                        <p>{he.decode(trivia.correct_answer)}</p>
                        <p>Level: {trivia.difficulty}</p>
                    </div>
                }
            </div>


        )
    })

    return (
        <div className="accordion accordion-flush accordion-div" id="accordionFlushExample">{renderedItems}</div>
    )
};

export default Accordion;