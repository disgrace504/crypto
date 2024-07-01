import Card from '../Card/Card'
import CoinsList from '../CoinsList/CoinsList'
import styles from './styles.module.css'
import FilterBlock from '../FilterBlock/FilterBlock'

const Main = ({ coins, setCoins, balance, setBalance }) => {
  return (
    <main className={styles.main}>
      <Card balance={balance} setBalance={setBalance}></Card>
      <FilterBlock setCoins={setCoins} />
      {coins.length > 0 ? <CoinsList></CoinsList> : <div>Loading...</div>}
    </main>
  )
}

export default Main
