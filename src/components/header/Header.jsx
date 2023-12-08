import styles from '../header/Header.module.css'
import logo from '../../assets/logo.svg'
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <span>Amazon</span>
      </div>
      <div className={styles.right}>
        <div className={styles.menu}>
          <ul className={styles.menu}>
            <li><a href='#'>Collections</a></li>
            <li><a href='#'>Brands</a></li>
            <li><a href='#'>New</a></li>
            <li><a href='#'>Sales</a></li>
            
          </ul>
          </div>

          <input type="text" className={styles.search} placeholder='Search Amazon'/>
         <FaShoppingCart className={styles.cart} />
      

      </div>
     </div>
  )
}

export default Header
