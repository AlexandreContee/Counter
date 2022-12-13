interface CounterProps {
  value: number
}

function Counter(props: CounterProps) {
  return (
    <h1>{props.value}</h1>
  )
}

export default Counter
