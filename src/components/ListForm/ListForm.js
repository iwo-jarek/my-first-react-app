import styles from './ListForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  };
  const dispatch = useDispatch();

  return (
    <div className={styles.listForm}>
      <form onSubmit={handleSubmit}>
        <span>Title:</span> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <span>Description:</span> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add List</Button>
      </form>
    </div>
  );
}

export default ListForm;
