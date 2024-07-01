import { useEffect, useState } from 'react'

export const useDebouncedFilter = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    // Устанавливаем таймер
    const handlerTimeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Очищаем таймер при изменении значения или при размонтировании
    return () => {
      clearTimeout(handlerTimeout)
    }
  }, [value, delay])

  return debouncedValue
}
