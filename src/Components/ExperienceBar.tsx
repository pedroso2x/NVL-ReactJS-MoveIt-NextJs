import styles from '../styles/components/ExperienceBar.module.css'
export function ExperienceBar() {

    return(
            <header className='experience-bar'>
            <span>0 xp</span>
            <div>
                <div id='xpbar' className={styles.experienceBar} style={{width: '60%'}} />
                <span id='exp' className={styles.currentExperience} style={{left: '60%'}}>300xp</span>
            </div>
            <span> 600xp</span>

        </header>


    );
}