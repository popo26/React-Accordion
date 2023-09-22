import he from 'he';
import { RxTriangleDown, RxTriangleLeft } from "react-icons/rx";

function Accordion({ trivias, expandedIndex, handleExpand, isTimerStarted }) {

    const renderedItems = trivias.map((trivia, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className="icon">
            {isExpanded ? <RxTriangleDown /> : <RxTriangleLeft />}
        </span>

        return (
            <div className="accordion" key={index}>
                <div onClick={() => { handleExpand(index) }} className="question-div">
                    <div className="trivia-question">{he.decode(trivia.question)} <span className="span"> {icon}</span> </div>
                </div>

                {isExpanded &&
                    <div className="answer-div">
                        <p className="answer">{he.decode(trivia.correct_answer)}</p>
                        <p>Level: {trivia.difficulty}</p>
                    </div>
                }
            </div>
        )
    });

    return (
        <div
            className="accordion accordion-flush accordion-div"
            id="accordionFlushExample">{renderedItems}
        </div>
    )
};

export default Accordion;