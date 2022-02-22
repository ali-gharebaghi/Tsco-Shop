 import styles from '../Nav_bar/NavBar.module.css'

 const navBar= ({totalItem})=>{
    return(
        <header className={styles.navBar}>
            <h2>Tsco Shopping Center</h2>
            <span>{totalItem}</span>
            
        </header>
    )
}

export default navBar;