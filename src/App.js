import { MessengerChat } from 'react-messenger-chat-plugin'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>BELMORABOT</p>

        <MessengerChat pageId='103856575835224' appId='637122637933810' />
      </header>
    </div>
  )
}

export default App
