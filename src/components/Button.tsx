import styles from '../styles/Button.module.css'

interface ButtonProps {
  value: string
  onClick: () => void
}

function Button(props: ButtonProps) {
  return (
    <button className={styles.button} onClick={props.onClick}>{props.value}</button>
  )
}

export default Button
