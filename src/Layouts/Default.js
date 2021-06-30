import { useEffect } from 'react'

import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Default.module.css'

const Default = ({ children, isPrivate = false }) => {
    useEffect(() => {
        if (isPrivate) {
            console.log("test")
        }
    }, [isPrivate])

    return (<>
        <header>
            <Navbar />
        </header>
        <main className={styles.front}>
            { children }
        </main>
        <footer>
            <section className="container txt-center txt-size-11 mt-30">
                Tous droits réservés &copy; 2021 overconsulting.net
            </section>
        </footer>
    </>)
}

export default Default