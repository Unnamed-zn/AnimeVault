import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeAkame() {
    
    const genero = [
        "Ação", "Fantasia Sombria", "Shounen", "Drama", "Aventura"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Akame_ga_Kill.png"
                titulo="Akame ga Kill"
                temporada="1°"
                episodios={24}
                lancamento={2014}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "Tatsumi é um jovem guerreiro que parte em uma jornada para ajudar sua pobre aldeia, mas que acaba por ser enganado e roubado por uma linda mulher, mas sua má sorte parece ter acabado quando uma garota igualmente linda o convida para se hospedar em sua mansão. No entanto, um grupo de assassinos invade a mansão para eliminar a família da garota, e cabe ao rapaz proteger sua anfitriã da fria assassina chamada Akame. Mas neste mundo as coisas não são o que parecem... E após ser resgatado pelo o grupo de assassinos, ele se junta à luta deles contra o governo corrupto."
            />

        </ AreaPrincipal>
    );
}