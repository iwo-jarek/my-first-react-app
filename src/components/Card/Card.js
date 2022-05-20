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

  const star = props.isFavorite ? 'fa fa-star' : 'fa fa-star-o';
  return (
    <li className={styles.card}>{props.title}
      <button onClick={favoriteCard} className={clsx(styles.button, props.isFavorite, styles.isFavorite)}>
        <span className={'fa fa-star-o' + star } />
      </button>
      <button onClick={remove} className={styles.remove}>
        <span className='fa fa-trash' />
      </button>
    </li>
  );
};

export default Card;

