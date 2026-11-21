import AreaPrincipal from "../../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../../componentes/DetalhesAnime/CabecalhoAnime";


export default function AnimeDiario() {
    return (
        <AreaPrincipal >
            children=
            <CabecalhoAnime
                capa="/animes/diarios/capa.jpg"
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