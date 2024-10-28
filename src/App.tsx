import { Command } from '@tauri-apps/plugin-shell'

function App() {
  const handleGreet = async (): Promise<void> => {
    // const msg = await greet({ name: 'World' })
    // if (msg.error !== undefined) {
    //   alert(msg.error)
    //   return
    // }
    // alert(msg.data)

    const output = await Command.create('echo', ['Hello', 'World']).execute()
    alert(output.stdout)
    console.log(output)
  }

  return (
    <main>
      <h1>Hello</h1>
      <button type='button' onClick={handleGreet}>
        Greet
      </button>
    </main>
  )
}

export default App
