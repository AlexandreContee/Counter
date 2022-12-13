import { useState } from 'react'
import Button from '../components/Button'
import Counter from '../components/Counter'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [counter, setCounter] = useState(0)

  const handleDec = () => setCounter(counter - 1)
  const handleInc = () => setCounter(counter + 1)
  const handleSub10 = () => setCounter(counter - 10)
  const handleSum10 = () => setCounter(counter + 10)

  return (
    <div className={styles.home}>
      <h1>Contador</h1>
      <Counter value={counter} />
      <div>
        <div>
          <Button value='-1' onClick={handleDec} />
          <Button value='+1' onClick={handleInc} />
        </div>
        <div>
          <Button value='-10' onClick={handleSub10} />
          <Button value='+10' onClick={handleSum10} />
        </div>
      </div>
    </div>
  )
}
