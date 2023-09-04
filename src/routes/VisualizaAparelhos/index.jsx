
import { listaAparelhos } from "../../components/listaAparelhos"
import { useParams, useNavigate } from "react-router-dom"

export default function VisualizaAparelhos(){
    
    const lista = listaAparelhos
    const navegacao = useNavigate()
    const {id} = useParams()



    return(
        <main>
            <h1>Aparelhos</h1>
        </main>

    )
}