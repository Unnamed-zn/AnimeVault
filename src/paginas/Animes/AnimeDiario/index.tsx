import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";

export default function AnimeDiario() {
    
    const genero = [
        "Misterio"
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
            
        </ AreaPrincipal>
    );
}