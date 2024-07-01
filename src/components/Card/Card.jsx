import './styles.css'
import WithRuBalance from '../../helpers/hoc/withRuBalance'

const Card = ({ balance, setBalance, ruBalance }) => {
  console.log(ruBalance)
  return (
    <div className='card'>
      <div className='card-block'>
        <p>CRYPTO-FINANCE</p>
        <button onClick={setBalance} className='btn'>
          Add money
        </button>
      </div>

      <div className='card-block'>
        <p>NAME SURNAME</p>
        <p>{balance} $</p>
      </div>
    </div>
  )
}

export default WithRuBalance(Card)
