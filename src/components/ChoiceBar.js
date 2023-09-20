function ChoiceBar({onSubmit}) {

const handleClick = (e) =>{
    e.preventDefault();
    onSubmit()
}

    return (
        <div>
            <form onSubmit={handleClick}>
                <button className="trivia-btn">Trivia</button>
            </form>
        </div>
    )
};

export default ChoiceBar;