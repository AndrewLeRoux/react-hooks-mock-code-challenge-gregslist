import React, {useState} from "react";

function Search({onSubmit}) {

  const [input, setInput] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(input)
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
