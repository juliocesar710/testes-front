import { useState } from "react"



function Titulo ({cor}){
const [texto, setTexto] = useState("Um título do estado inicial")
const[inputText,setInputText] = useState("")

function Clicou(){

    setTexto(inputText)
}
    return (
    <div>
       <h1 style = {{color: cor}}>Um titulo qualquer... {texto}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae neque id hic ad? Earum cumque, delectus similique in quis voluptatem impedit molestiae exercitationem, aut accusantium illo repellat corrupti deserunt saepe?</p>
        <input value = {inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
        <button onClick={Clicou}>Mudar</button>
    </div>

)
}

export default Titulo