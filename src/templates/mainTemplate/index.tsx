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
        </div>
    );
}