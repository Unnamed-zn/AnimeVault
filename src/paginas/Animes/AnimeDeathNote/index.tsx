import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeDeathNote() {
    
    const genero = [
        "Suspense", "Mistério", " Drama Psicológico", "Sobrenatural"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Death_Note.png"
                titulo="Death Note"
                temporada="1°"
                episodios={37}
                lancamento={2006}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "A história centra-se na trajetória de Light Yagami, um estudante do ensino médio genial que descobre um caderno sobrenatural chamado Death Note, capaz de matar qualquer pessoa que seu usuário deseje. Cansado da monotonia e das injustiças do mundo, Light decide exterminar todos os que um dia cometeram crimes e criar um mundo onde não exista o mal sob o pseudônimo de Kira, um justiceiro, como se declara. Porém, assim que a polícia declara Kira como o maior serial killers da história e o caso se torna global, seus planos são interrompidos por L, um famoso detetive particular, que crava uma guerra de estratégias com Kira, que tenta matá-lo a todo custo."
            />

        </ AreaPrincipal>
    );
}