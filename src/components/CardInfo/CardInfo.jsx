import styles from './CardInfo.module.css'

export function CardInfo({data}) {
    return (
        <div className='cardInfoBlock'>
        <div className={styles['cardInfo']}>
            <img src={data.images[0]} alt={data.name} width='200px'></img>   
            <div className={styles['info']}>
                <p>Name:</p>
                <p>{data.name}</p>
            </div>
            <div className={styles['info']}>
                <p>Clan:</p>
                <p>{data.personal.clan ? data.personal.clan : 'Unknown'}</p>
            </div>
            <div className={styles['info']}>
                <p>Sex:</p>
                <p>{data.personal.sex}</p>
            </div>
            <div className={styles['info']}>
                <p>Birthday:</p>
                <p>{data.personal.birthdate ? data.personal.birthdate : 'Unknown'}</p>   
            </div> 
        </div>
        </div>
    )
}