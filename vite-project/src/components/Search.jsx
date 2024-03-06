import { useState, useEffect } from 'react';
import ResultList from './Results';
import search from '../utils/API';


const SearchResultContainer = () => {
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGitHub = async (query) => {
    try {
      const { data } = await search.search(query);
      setResults(data);
      console.log(data[0].html_url);
    } catch (error) {
      console.error('Error Fetching Data:', error);
    }
  };

  useEffect(() => {
    searchGitHub();
 }, []);

  return (
    <div>
      {/* Pass our results to the Portfolio component to map over */}
      {results && results.length > 0 && < ResultList results ={results} />}
    </div>
  );
};


export default SearchResultContainer;
