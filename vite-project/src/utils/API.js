import axios from 'axios';

// Use axios to get public repositories from my GitHub
const search = (user) =>
  axios.get(`https://api.github.com/users/${user}/repos`);

//Use axios to get single repositories from GitHub
const searchRepo = (repo) =>
    axios.get(`https://api.github.com/repos/Ida-Whit/${repo}`);


export default { search, searchRepo };