import TextInput from "./components/TextInput"
import style from './App.module.css'

function App() {
  return (
    <div className={style.appContainer}>
      <TextInput placeholder={'O que está acontecendo?'} maxLength={50} />
    </div>
  )  
}

export default App
