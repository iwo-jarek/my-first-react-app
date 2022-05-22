import clsx from 'clsx';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {

  const favoriteCard = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
  };

  const remove = e => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  }
  const dispatch = useDispatch();
  
  const favoriteClassName = props.isFavorite ? 'fa fa-star' : 'fa fa-star-o';

  return (
    <li className={styles.card}>
      <div className={styles.title}>{props.title}</div>
      <button onClick={favoriteCard} className={styles.button}>
        <span className={favoriteClassName} />
      </button>
      <button onClick={remove} className={ clsx(styles.remove, styles.button) }>
        <span className='fa fa-trash' />
      </button>
    </li>
  );
};

export default Card;

