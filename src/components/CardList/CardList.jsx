import CardItem from "../CardItem/CardItem"

import styles from './CardList.module.css'

export default function CardList({data}) {

    return (
        <div className={styles['cards']}>
            {data.map((character, idx) => (
              <CardItem key={idx} data={character}></CardItem>
            ))}
          </div>
    )
}
     
