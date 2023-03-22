// assets and stylesheets
import logo from '../../assets/logo.svg'
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Meow Meow <br/> Beans</h1>
      <img src={logo} alt="A meow meow bean" />
    </main>
  )
}

export default Landing
