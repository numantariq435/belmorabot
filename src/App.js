import { useState } from 'react'
import { MessengerChat } from 'react-messenger-chat-plugin'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Alert from 'react-bootstrap/Alert'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function App () {
  const [show, setShow] = useState(true)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>BELMORABOT</p>
      </header>

      <Alert show={show} variant='success'>
        <Alert.Heading>Chat Bot</Alert.Heading>
        <p>
          You can communicate with Bot in English and Spanish. The bot will act
          like a Doctor and you can ask from the bot about your pains and
          medicines.
        </p>
        <hr />
        <div className='d-flex justify-content-end'>
          <Button onClick={() => setShow(false)} variant='outline-success'>
            Close me y'all!
          </Button>
        </div>
      </Alert>

      <Accordion defaultActiveKey='0'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Headache</Accordion.Header>
          <Accordion.Body>
            Headaches are a very common condition that most people will
            experience many times during their lives. The main symptom of a
            headache is pain in your head or face. There are several types of
            headaches, and tension headaches are the most common. While most
            headaches aren’t dangerous, certain types can be a sign of a serious
            underlying condition.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Menstrual Cramps</Accordion.Header>
          <Accordion.Body>
            Menstrual cramps (dysmenorrhea) are throbbing or cramping pains in
            the lower abdomen. Many women have menstrual cramps just before and
            during their menstrual periods. For some women, the discomfort is
            merely annoying. For others, menstrual cramps can be severe enough
            to interfere with everyday activities for a few days every month.
            Conditions such as endometriosis or uterine fibroids can cause
            menstrual cramps. Treating the cause is key to reducing the pain.
            Menstrual cramps that aren't caused by another condition tend to
            lessen with age and often improve after giving birth.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <MessengerChat pageId='103856575835224' appId='637122637933810' />
    </div>
  )
}

export default App
