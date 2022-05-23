import SearchResult from "./searchResult";
import {useSelector} from "react-redux";
import {get} from "../utils";
import {useQuery} from "react-query";
import {fetcher, QueryKeys} from "../queryClient";

const SearchResultContainer = () => {

  const searched = useSelector(get('searched'));

  const {data} = useQuery([QueryKeys.PRODUCTS], () =>
    fetcher({
      method: 'GET',
      path: `/products/`
    }),
  )

  return (
    <>
      <h2>검색 결과</h2>
      <SearchResult
        searched={searched}
        data={data}
      />
    </>

  );
};

export default SearchResultContainer;
