import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";


const products = ({ productt, onChange, onDecrement, onIncrement, onDelete }) => {
    return (
        <div id='container' className={styles.product} >
            <p >Product Name:{productt.title}</p>
            <p >Product Price:{productt.price} </p>
            <input className={styles.input} type='text' onChange={onChange} value={productt.title}></input>
            <span className={styles.value}>   {productt.quantity}</span>

            <button onClick={onDecrement} className={`${styles.button} ${productt.quantity === 1 && styles.decr}`}>
                {productt.quantity > 1 ? '-' : <BiTrash  />}
            </button>
            <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement}>+</button>
            <button className={`${styles.button} ${styles.delete}`} onClick={onDelete}>Delete </button>
        </div >
    );
}
export default products;