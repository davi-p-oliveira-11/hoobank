import { card } from '../assets';
import { cardDeal } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
    {cardDeal.map((cardDeal) => (
       <div key={cardDeal.id} className={layout.sectionInfo}>
         <h2 className={styles.heading2}>{cardDeal.content1} <br className="sm:block"/>{cardDeal.content2}</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{cardDeal.paragraph}</p>
         <Button styles="mt-10"/>
       </div>
    ))} 
     
       <div className={layout.sectionImg}>
         <img src={card} alt="card" className='w-[100%] h-[100%]' />
       </div>
    </section>
  )

export default CardDeal