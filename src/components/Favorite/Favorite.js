import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {

  const favoriteCard = useSelector(getFavoriteCards);
  if(favoriteCard.length === 0)
  return (
    <div>
      <h1>There's nothing here!</h1>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1>Favorite</h1>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCard.map(card => <Card key={card.id} {...card} />)}
        </ul>
      </div>
    </div>
  )
};

export default Favorite;