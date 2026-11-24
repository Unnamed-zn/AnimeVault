import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeChainsaw() {
    
    const genero = [
        "Ação", "Fantasia Sombria", "Comédia", "Terror"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Chainsaw_Man.png"
                titulo="Chainsaw Man"
                temporada="1°"
                episodios={12}
                lancamento={2022}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "Denji é um adolescente que mora com Pochita, o Demônio da Motosserra. Por conta das dívidas que herdou de seu pai, ele vive na miséria, exterminando outros demônios com Pochita para pagar as contas. Até que, um dia, Denji é traído e morre. Em seus últimos momentos de consciência, ele firma um contrato com Pochita e renasce como o Homem-Motosserra - um humano com coração de demônio."
            />

        </ AreaPrincipal>
    );
}