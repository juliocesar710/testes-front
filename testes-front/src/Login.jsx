import { MdOutlineMinimize } from "react-icons/md";
import {useState} from "react"


function Login (){
const [telefone,setTelefone] = useState ("")
const [senha,setSenha] = useState ("")


return (

    <div className="Login">
        <h1>Login</h1>

        <form class = "inputs">
        <input id = "telefone" placeholder="Telefone" value = {telefone} type="text" onChange={(e)=>{setTelefone(e.target.value)}}/>
        <input id = "senha" placeholder="Senha" value = {senha} type="text" onChange={(e)=>{setSenha(e.target.value)}}/>
        </form>
        
        <a className="Esqueceu" href="">Esqueceu a senha?</a>

        <button className="Entrar" type="submit">Entrar</button>
    

             <p> <MdOutlineMinimize /> Ou <MdOutlineMinimize /> </p>
             

        <button className="Google"> <img className = "logo_google" src="logoGoogle1.png" alt = "Logo do Google" width={22}  /> Entrar com o Google</button>

    </div>
)
    
}

export default Login