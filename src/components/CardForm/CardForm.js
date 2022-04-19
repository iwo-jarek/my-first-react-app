import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
  const [title, setTitle] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title });
    setTitle('');
    ;
  };

  return (
    <div className={styles.cardForm}>
      <form onSubmit={handleSubmit}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <Button>Add column</Button>
      </form>
    </div>
  );
};

export default CardForm;