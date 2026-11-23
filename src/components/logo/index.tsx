import { style } from "./style";

export function Logo() {
    return (
        <div className={style.container}>
            <img src="/animeVaultIcon.png" className="h-full" />
            <h1 className={style.title}>AnimeVault</h1>
        </div>
    )
}