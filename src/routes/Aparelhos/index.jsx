import { Link } from "react-router-dom"
import { listaAparelhos } from "../../components/listaAparelhos"

export default function Aparelhos(){

    return(
        <main>
            <h1>Aparelhos</h1>
            {listaAparelhos.map( aparelho => (
                <div key ={aparelho.id}>
                    <Link to={`/Aparelhos/Visualizar/${aparelho.id}`}>
                        Visualizar produto: {aparelho.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}