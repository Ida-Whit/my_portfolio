import { useState, useEffect } from 'react';
import Results from './Results';

// Import our search method
import search from '../utils/API'

const SearchResultContainer = () => {
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGitHub = async (query) => {
    const { data } = await search(query);
    setResults(data.data);
    console.log(data);
  };

  useEffect(() => {
    if (results.length === 0) {
    searchGitHub('Ida-Whit');
  }
 }, [results]);

  return (
    <div>
      {/* Pass our results to the Portfolio component to map over */}
      {results && results.length > 0 && < Results results ={results} />}
    </div>
  );
};


export default SearchResultContainer;
