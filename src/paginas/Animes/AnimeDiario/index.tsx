import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeDiario() {
    
    const genero = [
        "Drama", "Mistério", "Romance", "Histórico"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Diarios_de_uma_Apotecaria.png"
                titulo={<>Diários de uma <br /> Apotecária</>}
                temporada="1°"
                episodios={24}
                lancamento={2023}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto= "Em Diários de uma Apotecária, Maomao é uma curandeira que vivia com seu pai, um boticário renomado. No entanto, sua vida muda totalmente quando ela é vendida como criada para o palácio do imperador. Infeliz com o novo cargo, a jovem acaba tomando medidas drásticas quando os herdeiros imperiais adoecem, embarcando em uma missão para encontrar a cura, fazendo o que realmente gosta. Sua inteligência e audácia chamam a atenção de Jinshi, um belo funcionário do palácio que decide ajudá-la nessa missão. Agora, Maomao usa seus conhecimentos de remédios como curandeira para desvendar mistérios, envolvendo-se em intrigas médicas enquanto sua fama se espalha pelos corredores do palácio."
            />

        </ AreaPrincipal>
    );
}