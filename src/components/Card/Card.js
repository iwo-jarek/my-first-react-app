import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';

const Card = props => {

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };
  
  const dispatch = useDispatch();

  const star = props.isFavorite ? 'fa fa-star' : 'fa fa-star-o';
  return (
    <li className={styles.card}>{props.title}
      <button onClick={handleSubmit} className={clsx(styles.button, props.isFavorite, styles.isFavorite)}>
        <span className={'fa fa-star-o' + star } />
      </button>
    </li>
  );
};

export default Card;