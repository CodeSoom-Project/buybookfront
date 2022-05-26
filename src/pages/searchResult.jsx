import styled from '@emotion/styled';
import SearchedItem from './searchItem';

const ProductList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  background: 'lightgray',
});

function SearchResult({ searched, data }) {
  if (!data) return null;

  const filtered = data.filter((item) => item.title.toLowerCase().includes(searched));

  return (

    <ProductList>
      {filtered?.map((itemList) => (
        <SearchedItem key={itemList.id} {...itemList} />
      ))}
    </ProductList>

  );
}
export default SearchResult;
