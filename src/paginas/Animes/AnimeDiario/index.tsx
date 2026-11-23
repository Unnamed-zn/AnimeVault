import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";

export default function AnimeDiario() {
    return (
        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Diarios_de_uma_Apotecaria.png"
                titulo="Diários de uma Apotecária"
                temporada="1°"
                episodios={24}
                lancamento={2023}
                status="Completo"
                dub={true}
                leg={true}
            />
        </ AreaPrincipal>
    );
}