import { style } from "./style";

type props = {
    logo: React.ReactNode;
    sidebar: React.ReactNode;
}

export function MainTemplate({ sidebar, logo }: props) {
    return (
        <div className={style.body}>
            <div className={style.logoContainer}>
                {logo}
            </div>
            <div></div>
            {sidebar}
<<<<<<< HEAD
            {header? header : <div />}
            {content? content : <div />}
=======
>>>>>>> parent of 9f6febc (Main template semi-pronto)
        </div>
    );
}