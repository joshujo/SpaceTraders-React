import styles from '../../CSS_Modules/saveduserPanel.module.css'

export default function SavedUser(props: any) {

    return (
        <div className={styles.saveduserPanel}
        style={{
            width: "95%",
            height: "150px",
            backgroundColor: "#11223d",
            border: "2px solid #000000",
            borderRadius: "10px",
        }}
        >
            <h2 className={styles.h2} style={{
                color: "#ffffffff",
                fontSize: "1.5rem",
            }}
            >{props.symbol}</h2>
            <p
            style={{
                color: "#454545",
                fontSize: "0.59rem",
            
            }}
            >{props.token}</p>
        </div>
    )
}