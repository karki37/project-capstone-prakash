import styles from '../hero/Hero.module.css'
import hero from '../../assets/hero.png'
import { IoCartOutline } from "react-icons/io5"
import { BsArrowRight } from "react-icons/bs"
const Hero = () => {
  return (
    <div className={styles.container}> 

    {/* left side text/styling */}
    <div className={styles.leftside}>
      <span>Skin Protection Cream</span>

      <div className={styles.leftside2}>
        <span>Trendy Collection</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, et?</span>
      </div>
    </div>

{/* middle part hero image */}
<div className={styles.wrapper}>
  <div className={styles.blueCircle}></div>
  <img src={hero} alt="" width={500}/>
  <div className={styles.cart2}>
  <IoCartOutline />

<div className={styles.signup}>
  <span>Best Signup Offers</span>
  <div>
  <BsArrowRight />
  </div>

</div>
  </div>

</div>
{/* right side  */}
<div className={styles.rightside}>
  <div className={styles.traffic}> 
  <span>1.5m</span>
  <span>Monthly Traffic</span>

  </div>
  <div className={styles.customers}>
    <span>100K</span>
    <span>Happy Customers</span> 

  </div>

</div>
    </div>
  )
}

export default Hero
