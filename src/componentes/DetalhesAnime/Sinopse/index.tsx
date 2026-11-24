import { style } from "./style";

type TextoProps = {
    Texto: string;
};

export default function Sinopse ({Texto}: TextoProps) {
    return (
        <div className={style.caixa}>

            <div className={style.ZonaTexto}>

                <p className={style.P}>
                    {Texto}
                </p>

            </div>

        </div>
    );
}