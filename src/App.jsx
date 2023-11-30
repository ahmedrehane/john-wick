import './App.css'
import person from "./person"
import Card from './components/Card'
function App (){
    return (
        <>
          
  
            <Card person={person[0]}/>
            <Card person={person[1]}/>
            <Card person={person[2]}/>
            <Card person={person[3]}/>
            <Card person={person[4]}/>
  
        </>
  
    )
  }
  
  export default App
