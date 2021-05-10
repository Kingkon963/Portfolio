import styles from '../styles/Header.module.scss';

export default function Header(){
    return(<>
        <div className={styles.headerContainer}>
                <h1 className={styles.title}>HI!<br/>I'm Naim
                    <img src="/me.svg" alt="" className={styles.profilePic}/>
                </h1>
                <h2 className={styles.subTitle}>a front-end Developer</h2>                
        </div>
    
    <style jsx>{`


    `}</style>
    </>)
}