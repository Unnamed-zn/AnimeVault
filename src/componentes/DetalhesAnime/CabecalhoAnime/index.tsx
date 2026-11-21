import { useState } from "react";
import { style } from "./style";

type CabecalhoProps = {
    capa: string;
    titulo: string;
    temporada: string;

    episodios: number;
    lancamento: number;

    status: "Completo" | "Em lançamento" | "Cancelado";
    dub: boolean;
    leg: boolean;
};

export function CabecalhoAnime(
    {capa, titulo, temporada, episodios, lancamento, status, dub, leg }: CabecalhoProps
){

    return(
        <div className={style.caixa}>
            <div className={style.capa}> /* CAPA DO ANIME */
                <img src={capa} alt={titulo} />
            </div>

            <button> /* BOTÂO DE SALVAR */
                <img src="" />
            </button>

            <div className={style.info}> /* TITULO DO ANIME */
                <div className={style.titulo}>
                    <h1>{titulo}</h1>
                </div>

                <div className={style.outro}>
                    <div className={style.caixaEsquerda}>
                        <h3>
                            Temporada: <span className={style.Destaque}>{temporada}</span>
                        </h3>
                        <h3>
                            Episódios: <span className={style.Destaque}>{episodios}</span>
                        </h3>
                        <h3>
                            Lançado em: <span className={style.Destaque}>{lancamento}</span>
                        </h3>
                    </div>

                    <div className={style.caixaDireita}>

                        <div className={style.idiomas}>
                            <h2 className={style.status}>{status}</h2>

                            {dub && (
                                <h2 className={style.texto}>DUB</h2>
                            )}

                            {leg && (
                                <h2 className={style.texto}>LEG</h2>
                            )}
                        </div>

                    </div>
                </div> /* Fecha a div outros */

            </div> /* Fecha a div info */

        </div> /* Fehca a div caixa */

    );
}