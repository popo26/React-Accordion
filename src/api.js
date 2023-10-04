import axios from 'axios';

const triviaResults = async (term) => {
    const response = await axios.get("https://opentdb.com/api.php?amount=3&type=boolean");
    
    return response.data.results;
}



export default triviaResults;