import {useDispatch, useSelector} from 'react-redux';

import {get} from '../utils';

import SearchBar from "./SearchBar";

import {changeSearchField} from "../slice";

import {useNavigate} from "react-router-dom";

export default function SearchBarContainer() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const searched = useSelector(get('searched'));

  const handleChange = ({value}) => {
    dispatch(changeSearchField({value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searched}`);

  };

  return (
    <>
      <SearchBar
        searched={searched}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
