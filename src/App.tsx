import { AgendaHeader } from "./components/agenda-header"
import { AgendaManha } from "./components/agenda-manha"
import { AgendaTarde } from "./components/agenda-tarde"
import { Header } from "./components/header"

function App() {
  
  return (
    <>
    <Header /> 
    <AgendaHeader />
    <AgendaManha />
    <AgendaTarde />
    </>
  )
}

export default App
