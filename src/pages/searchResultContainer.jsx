import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import SearchResult from './searchResult';
import { get } from '../utils';
import { fetcher, QueryKeys } from '../queryClient';

function SearchResultContainer() {
  const searched = useSelector(get('searched'));

  const { data } = useQuery(
    [QueryKeys.PRODUCTS],
    () => fetcher({
      method: 'GET',
      path: '/products/',
    }),
  );

  return (
    <>
      <h2>검색 결과</h2>
      <SearchResult
        searched={searched}
        data={data}
      />
    </>

  );
}

export default SearchResultContainer;
