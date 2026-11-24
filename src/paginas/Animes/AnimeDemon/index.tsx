import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeDemon() {
    
    const genero = [
        "Ação", "Aventura", "Fantasia Sombria", "Sobrenatural"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Demon_Slayer.png"
                titulo="Demon Slayer"
                temporada="1°"
                episodios={26}
                lancamento={2019}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "a história gira em torno de Tanjiro Kamado, um garoto bondoso e inteligente que vive junto com sua mãe, Kie Kamado, e seus 5 irmãos mais novos, ganhando dinheiro vendendo carvão, assim como seu falecido pai, tanjuro Kamado. Certo dia, ao voltar para casa após ter ido a uma cidade vender carvão, Tanjiro descobre que perdeu toda sua família durante um ataque de onis. Uma de suas irmãs, Nezuko, é a única que sobreviveu ao ataque. Nezuko então passa a ser um oni, mas ela surpreendentemente ainda demonstra sinais de emoções e pensamentos humanos. Tanjirō decide então se tornar um caçador de onis para descobrir mais sobre eles."
            />

        </ AreaPrincipal>
    );
}