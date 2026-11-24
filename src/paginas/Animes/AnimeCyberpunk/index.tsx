import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeCyberpunk() {
    
    const genero = [
        "Cyberpunk", "Ficção Científica", "Ação", "Drama"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Cyberpunk_Edgerunners.png"
                titulo={<>Cyberpunk <br/> Edgerunners</>}
                temporada="1°"
                episodios={10}
                lancamento={2022}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "Cyberpunk: Edgerunners é ambientado em Night City, uma metrópole autossuficiente localizada no Estado Livre da Califórnia assolada por corrupção, vícios por cibernéticas e violência de gangues. Em uma distopia dominada por corrupção, crime e implantes cibernéticos, um garoto de rua impulsivo mas talentoso chamado David perde tudo o que tem em um tiroteio. Depois disso, ele faz a escolha de sobreviver do lado errado da lei como um mercenário; um agente fora da lei capacitado com alta tecnologia do mercado negro também conhecido como cyberpunk"
            />

        </ AreaPrincipal>
    );
}