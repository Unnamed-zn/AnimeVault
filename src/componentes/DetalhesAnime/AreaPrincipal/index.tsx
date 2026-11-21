import { style } from "./style";

type ConteudoProps = {
    children: React.ReactNode;
};

export default function AreaPrincipal({children}: ConteudoProps) {
    return(
        <div className={style.caixa}>
            <main className={style.principal}>
                {children}
            </main>
        </div>
    );
}