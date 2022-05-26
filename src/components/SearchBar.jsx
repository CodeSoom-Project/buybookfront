import styled from '@emotion/styled';

const SearchBarContainer = styled.div`
  postion : relative;
  width: 15em;
  height: 3em;
  background: #f2f2f2;
  border-radious: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.31em;
  transition: all 0.3s ease;
`;
//
// const SearchInput = styled.input`
//   padding-left: 48px;
//   border: yellowgreen;
//   //postion: absolute;
// `;

function SearchBar({ searched, onChange, onSubmit }) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ value });
  }

  return (
    <SearchBarContainer>
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
    </SearchBarContainer>
  );
}

export default SearchBar;
