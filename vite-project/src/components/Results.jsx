
// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function ResultList({ results }) {
  return (
    <ul className="list-group">
     <div>
      {results.map((item, index) => (
        <div key={index}>
          <a href={item.html_url}>{item.html_url}</a>
        </div>
      ))}
    </div>
    </ul>
  );
}

export default ResultList;
