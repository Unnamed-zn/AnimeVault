import { style } from "./style";

type TipoGeneroProps = {
    G: string[];
};

export function Generos ({ G }: TipoGeneroProps){
    return(
        <div className={style.caixa}>

            <div className={style.Titulo}>  { /* Ti */ }
                <h2>Gêneros:</h2>
            </div>

            <div className={style.generos}>
                {G.map((genero, i) => (
                    <h3 className={style.TipoGenero} key={i}>
                        {genero}
                    </h3>
                ))}
            </div>

        </div>

    );
}