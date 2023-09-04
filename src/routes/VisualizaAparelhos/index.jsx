
import { listaAparelhos } from "../../components/listaAparelhos"
import { useParams, useNavigate } from "react-router-dom"

export default function VisualizaAparelhos(){
    
    const list = listaAparelhos
    const {id} = useParams()
    
    if(id == 1){
    return(
            <main>
                <h1>Celular</h1>
            </main>
    
    )
    }else if(id == 2){
      return(  
        <main>
            <h1>Tablet</h1>
        </main>
      )
    }else if(id == 3){
        return(  
            <main>
                <h1>Notebook</h1>
            </main>
          )
    }else if(id == 4){
        return(  
            <main>
                <h1>PC</h1>
            </main>
          )
    }else if(id == 5){
        return(  
            <main>
                <h1>Micro-ondas</h1>
            </main>
          )
    }
}