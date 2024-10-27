import { greet } from './api'

function App() {
  async function handleClick(): Promise<void> {
    const msg = await greet({ name: 'world' })
    alert(msg)
  }

  return (
    <main>
      <h1>Hello</h1>
      <button onClick={handleClick} type='button'>
        Greet
      </button>
    </main>
  )
}

export default App
