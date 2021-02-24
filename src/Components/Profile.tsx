import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/pedroso2x.png" alt="Rogerio Pedroso"/>
            <div>
                <strong>Rogerio Pedroso</strong>
                <p>
                    <img src="icons/level.svg" alt="lvl"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}