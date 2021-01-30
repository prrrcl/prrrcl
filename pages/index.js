import Link from 'components/elements/link'
import styles from 'styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Link href="/test">
        ir a test
      </Link>
    </div>
  )
}
