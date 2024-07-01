import { useContext } from 'react'
import './styles.css'
import React from 'react'
import { CoinsContext } from '../../context/coinsContext'
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins'

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext)
  const { coins } = coinsContext

  const { value, setValue } = useFilterCoins(coins, setCoins)

  return (
    <div className='filter-box'>
      <label className='label'>Filter: </label>
      <input
        className='input'
        type='text'
        placeholder='bitcoin'
        value={value}
        onChange={(e) => setValue(e.target.value)}></input>
    </div>
  )
}

export default React.memo(FilterBlock)
