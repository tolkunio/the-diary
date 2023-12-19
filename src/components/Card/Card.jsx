import s from 'Card.module.css'

const Card = () => {
    return (
        <div className={s.card}>
            <h2 className={s.cardHeader}></h2>
            <div className={s.cardBody}>
                <span className={s.cardBodyDate}></span>
                <span className={s.cardBodyText}></span>
            </div>
        </div>
    );
};

export default Card;