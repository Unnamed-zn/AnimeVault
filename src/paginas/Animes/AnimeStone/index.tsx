import AreaPrincipal from "../../../componentes/DetalhesAnime/AreaPrincipal";
import { CabecalhoAnime } from "../../../componentes/DetalhesAnime/CabecalhoAnime";
import { Generos } from "../../../componentes/DetalhesAnime/Generos";
import Sinopse from "../../../componentes/DetalhesAnime/Sinopse";

export default function AnimeStone() {
    
    const genero = [
        "Aventura", "Ficção Científica", "Comédia", "Pós-Apocalíptico"
    ];
    
    return (

        <AreaPrincipal >
            
            <CabecalhoAnime
                capa="/Posters/Dr_Stone.png"
                titulo="Dr. Stone"
                temporada="1°"
                episodios={24}
                lancamento={2019}
                status="Completo"
                dub={true}
                leg={true}
            />

            <Generos
                G = {genero}
            />

            <Sinopse
                Texto = "Num mundo devastado por um misterioso fenômeno que petrificou toda a humanidade por milênios, surge Senku Ishigami, um gênio científico que desperta determinado a reerguer a civilização. Junto de Taiju Oki, seu leal amigo de infância com força sobre-humana, ele embarca numa jornada épica para reviver a sociedade usando apenas o poder da ciência. Desde acender a primeira chama até reinventar tecnologias modernas, cada avanço é uma batalha contra um planeta que regrediu à Idade da Pedra. Enquanto Senku decifra os segredos por trás da petrificação, sua equipe enfrenta desafios que vão da produção de medicamentos à reconstrução de máquinas essenciais – tudo partindo do zero. Dr. Stone combina aventura e conhecimento científico, mostrando como a humanidade pode recomeçar através da curiosidade e da inovação. Dr. Stone celebra o espírito inventivo humano em uma narrativa que atravessa dois milhões de anos de progresso – agora nas mãos de um garoto que acredita que a ciência é a resposta para tudo."
            />

        </ AreaPrincipal>
    );
}