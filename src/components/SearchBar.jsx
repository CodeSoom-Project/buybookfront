function SearchBar({ searched, onChange, onSubmit }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ value });
  }

  return (
    <div>
      <input
        type="text"
        id="search-bar"
        name="SearchBar"
        value={searched}
        onChange={handleChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        검색
      </button>
    </div>
  );
}

export default SearchBar;
