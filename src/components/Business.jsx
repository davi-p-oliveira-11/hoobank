import { features, business } from "../constants"
import styles, { layout } from "../style"
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {business.map((business) => (
        <div key={business.id}  className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{business.content1}<br className="sm:block hidden"/>{business.content2}</h2>
        <p className={`${styles.paragraph} max-w[470px] mt-5`}>{business.paragraph}</p>

        <Button styles="mt-10"/>
      </div>
      ))}  
    </section>
  )
}

export default Business