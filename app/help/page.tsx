import Link from 'next/link';
import styles from '../page.module.css';

export default function Page() {
    return (
            <div className={styles.page}>
                <h2>
                    Need help, please contact <Link href="mailto:support@machinename.dev?subject=Support%20Request&body=Please%20describe%20your%20issue%20here." className={styles.textTerms}>support</Link>
                </h2>
            </div>
    )
} 