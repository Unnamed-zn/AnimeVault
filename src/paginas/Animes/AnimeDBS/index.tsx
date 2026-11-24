import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeDBS() {
    
    const genero = [
        "Ação", "Aventura", "Artes Marciais", "Comédia", "Fantasia"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Dragon_Ball_Super.png"
                titulo={<>Dragon Ball<br />Super</>}
                temporada="1°"
                episodios={14}
                lancamento={2015}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "Depois de finalmente destruir Majin Boo, Goku retornou para a sua vida normal e a Terra pode novamente experimentar a paz. Mas a missão dele está longe de ter acabado: agora o Kakaroto precisará defender o planeta de destrutivas e altamente perigosas, inclusive de universos paralelos."
            />

        </ AreaPrincipal>
    );
}