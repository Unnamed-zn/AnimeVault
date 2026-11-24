import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeAOT() {
    
    const genero = [
        "Ação", "Fantasia Sombria", "Pós-Apocalíptico", "Drama"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Attack_on_Titan.png"
                titulo="Attack on Titan"
                temporada="1°"
                episodios={25}
                lancamento={2013}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "Em um mundo onde a humanidade vive dentro de cidades cercadas por enormes Muralhas que os protegem dos Titãs , criaturas humanóides gigantes que devoraram humanos aparentemente sem motivo. A história gira em torno de Eren Jaeger , sua irmã adotiva Mikasa Ackerman e seu amigo de infância Armin Arlert , cujas vidas mudam para sempre após um certo evento, que provoca uma grande destruição de sua cidade. Jurando a recuperação do mundo dos Titãs."
            />

        </ AreaPrincipal>
    );
}