import { useState } from 'react'
import heart from './assets/heart.png'
import './App.css'

function App() {
  const [step, setStep] = useState(0)
  const [notButtonShow, setNotButtonShow] = useState(0);

  const texts = [
    {
      title: 'Boa noite, gatinha 👀',
      subtitle: 'Você se chama Mariana Batista Monteiro?',
    },
    {
      title: 'Gostou do presentinho?',
      subtitle: 'Saiba que você é muito especial para quem te deu este presente'
    },
    {
      title: 'Que ótimo 😍',
      subtitle: 'Podemos te fazer uma pergunta?'
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
