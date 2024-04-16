import { feedback, testimonials } from "../constants";
import styles from "../style";
import FeedBackCard from './FeedbackCard'


const Testimonials = () => (
   <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    {testimonials.map((testimonials) => (
      <div key={testimonials.id} className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>{testimonials.content1} <br className="sm:block hidden"/> {testimonials.content2}</h1>
        <div className="w-full md:mt-0 mt-6">
         <p className={`${styles.paragraph} text-left max-w-[450px]`}>{testimonials.paragraph}</p>
        </div>
      </div>
    ))}

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card}/>
      ))}
    </div>
    
   </section>
  )


export default Testimonials