import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchStr } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const [searchString, setSearchString] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchStr( searchString ));
  };
  
  const dispatch = useDispatch();

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;