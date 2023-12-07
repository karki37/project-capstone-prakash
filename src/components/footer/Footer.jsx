import styles from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon} from "@heroicons/react/outline"

const Footer = () => {
  return (
    <div className={styles.cFooterWrappper}>
        <hr />
        <div className={styles.cfooter}>
            <div className={styles.clogo}>
                <img src={Logo} alt="" />
                <span>Amazon</span>
            </div>
            <div className={styles.block}>
                <div className={styles.detail}>
                    <span>Contact Us</span>
                    <span className={styles.pngLine}>
                    <LocationMarkerIcon className={styles.icon}/>
                    <span>123 Ashburn City, VA 20148</span>
                    </span>

                    <span className={styles.pngLine}>
                        {" "}
                    <PhoneIcon className={styles.icon}/>
                    <a href="tel:123-456-7890">123-456-7890</a>
                    </span>

                    <span className={styles.pngLine}>
                    
                    <InboxIcon className={styles.icon}/>
                    <a href="mailto:support@amazon.com">support@amazon.com</a>
                    </span>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.detail}>
                    <span>Account</span>
                    <span className={styles.pngLine}>
                        <LoginIcon className={styles.icon} />
                        Sign In
                    </span>
                    

                    <div className={styles.block}>
                <div className={styles.detail}>
                    <span>Company</span>
                    <span className={styles.pngLine}>
                        <UsersIcon className={styles.icon} />
                        <a href="/about">
                            <p>About us</p>
                        </a>
                    </span>
                </div>
                </div>

            
            <div className={styles.block}>
                <div className={styles.detail}>
                    <span>Resources</span>
                    <span className={styles.pngLine}>
                        <LinkIcon className={styles.icon} />
                        <p>Safety privacy and terms</p>
                    </span>
                    </div>
                    </div>
                    </div>
                    
                    <div className={styles.copyRight}>
               
                    <span>Copyright ©2022 by Amazon, Inc</span>
                 <span>All Rights Reserved.</span>
                        </div>
                        </div>
                        </div>
                        </div>
                    
  )
}

export default Footer
