import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { getCoins } from './api/api'
import { CoinsContext } from './context/coinsContext'

function App() {
  const [balance, setBalance] = useState(50000)
  const [coins, setCoins] = useState([])
  const [filteredCoins, setfilteredCoins] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins()
      setCoins(data.coins)
      setfilteredCoins(data.coins)
    }

    fetchData()
  }, [])

  const addBalance = useCallback(() => {
    setBalance((prev) => prev + 1000)
  }, [])

  return (
    <>
      <CoinsContext.Provider value={{ coins, filteredCoins }}>
        <Header></Header>
        <Main
          setCoins={setfilteredCoins}
          coins={coins}
          balance={balance}
          setBalance={addBalance}
          filteredCoins={filteredCoins}></Main>
      </CoinsContext.Provider>
    </>
  )
}

export default App
