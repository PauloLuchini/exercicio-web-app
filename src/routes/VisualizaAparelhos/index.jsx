
import { listaAparelhos } from "../../components/listaAparelhos"
import { useParams} from "react-router-dom"
import celular from "../../assets/Celular.png"
import notebook from "../../assets/Notebook.jpg"
import tablet from "../../assets/tablet.jpg"
import pc from "../../assets/pc-gamer.jpg"
import micro_ondas from "../../assets/micro-ondas.jpg"
export default function VisualizaAparelhos(){
    
    const list = listaAparelhos
    const {id} = useParams()
    
    if(id == 1){
    return(
            <main class = 'celular'>
                <h1>Celular</h1>
                <img src= {celular} alt="Celular"/>
            </main>
    
    )
    }else if(id == 2){
      return(  
        <main class = 'Tablet'>
            <h1>Tablet</h1>
            <img src= {tablet} alt="Tablet" />
        </main>
      )
    }else if(id == 3){
        return(  
            <main class = 'Notebook'>
                <h1>Notebook</h1>
                <img src= {notebook} alt="Notebook" />
            </main>
          )
    }else if(id == 4){
        return(  
            <main class = 'Pc'>
                <h1>PC</h1>
                <img src={pc} alt="Pc" />
            </main>
          )
    }else if(id == 5){
        return(  
            <main class = 'Micro'>
                <h1>Micro-ondas</h1>
                <img src={micro_ondas} alt="Micro-Ondas" />
            </main>
          )
    }
}