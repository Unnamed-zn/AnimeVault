import { Logo } from "../logo";
import { style } from "./style";

export function Sidebar() {
    return (
        <aside className={style.sidebarContainer}>
            <div className={style.logoContainer}>
                <Logo />
            </div>
        </aside>
    );
}