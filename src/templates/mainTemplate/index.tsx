import { style } from "./style";

type props = {
    sidebar: React.ReactNode;
    header?: React.ReactNode;
    content?: React.ReactNode;
}

export function MainTemplate({ sidebar,header,content}: props) {
    return (
        <div className={style.body}>
            {sidebar}
            {header? header : <div />}
            {content? content : <div />}
        </div>
    );
}