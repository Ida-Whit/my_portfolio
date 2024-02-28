import axios from 'axios';

// Use axios to get public repositories from my GitHub
const search = (query) =>
  axios.get(`https://api.github.com/repos/Ida-Whit/${query}`);

export default search;