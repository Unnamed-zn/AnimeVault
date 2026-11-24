import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeAOT() {
    
    const genero = [
        "Ação", "Comédia Romântica", "Sobrenatural", "Ficção Científica"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Dan_da_Dan.png"
                titulo="Dan da Dan"
                temporada="1°"
                episodios={12}
                lancamento={2024}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "Momo uma adolescente que foi criada por uma família de médiums e seu amigo Okarun, que é fissurado por ocultismo desafiam um ao outro a investigar se suas crenças são reais ou não. A menina jura que fantasmas são reais, mas não acredita em alienígenas, enquanto o garoto é o oposto. Por isso, como parte da aposta, Momo visita o local de uma suposta aparição de OVNI e Okarun entra em um túnel assombrado. O desafio inocente acaba levando a dupla a embarcar em uma aventura pelo sobrenatural que vai além da compreensão normal dos humanos. Tudo ainda fica mais surreal quando os poderes ocultos de Momo despertam e Okarun ganha o poder de uma maldição para superar esse desafio."
            />

        </ AreaPrincipal>
    );
}