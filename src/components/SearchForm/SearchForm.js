import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchStr } from '../../redux/store';

const SearchForm = () => {
  const searchFormStr = useSelector(state => state.searchString.searchString);
  const [searchString, setSearchString] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchStr({ searchString }));
    setSearchString();
  };

  const dispatch = useDispatch();

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder={searchFormStr} value={searchString} onChange={e => setSearchString(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;