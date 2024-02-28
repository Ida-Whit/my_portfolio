import { useState, useEffect } from 'react';

// Import search method
import search from '../utils/API'

const SearchResultContainer = () => {
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGitHub = async (query) => {
    const { data } = await search(query);
    setResults(data.data);
  };

//   useEffect(() => {
//     searchGiphy('kittens');
//   }, []);

//   return (
//     <div>
//       {/* Pass our results to the ResultsList component to map over */}
//       <ResultList results={results} />
//     </div>
//   );
};

export default SearchResultContainer;
