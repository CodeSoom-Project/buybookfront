const SearchResult = ({searched, data}) => {


  if (!data) return null;

  const filtered = data.filter((item) => {
    return item.title.toLowerCase().includes(searched)
  });


  return (
    <>
      <ul>
        {filtered?.map((itemList) => {
          return <li key={itemList.id} {...itemList} />;
        })}
      </ul>
    </>
  )
}
export default SearchResult;
