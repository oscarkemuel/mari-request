import { useState } from 'react'
import heart from './assets/heart.png'
import './App.css'

function App() {
  const [step, setStep] = useState(0)
  const [notButtonShow, setNotButtonShow] = useState(0);

  const texts = [
    {
      title: 'Boa noite, Mari 👀',
      subtitle: 'Está gostando da noite?'
    },
    {
      title: 'Que ótimo 😍',
      subtitle: 'Posso te perguntar um negócio?'
    },
    {
      title: 'Quer namorar comigo?',
      subtitle: 'Aceitas? 👉🏻👈🏻'
    }
  ]

  const handleClickStep = () => {
    setStep((count) => count + 1)
    setNotButtonShow(0)
  }

  const handleNotButton = () => {
    setNotButtonShow((prev) => prev === 1 ? 0 : prev + 1)
  }


  return (
    <div className="App">
      {step === texts.length -1 && (
        <div>
          <a>
            <img src={heart} className="heart" alt="heart" />
          </a>
        </div>
      )}

      <h1>{texts[step].title}</h1>
      <h2>{texts[step].subtitle}</h2>

      {step < texts.length -1 && (
        <>
          <div className="card">
            <button onClick={handleClickStep} className="success-button">
              SIM
            </button>

            {notButtonShow === 0 && (
              <button onClick={handleNotButton} className="danger-button">
                NÃO
              </button>
            )}
          </div>

          <div className="card">
            {notButtonShow === 1 && (
              <button onClick={handleNotButton} className="danger-button">
                NÃO
              </button>
            )}
           </div>
        </>
      )}
    </div>
  )
}

export default App
