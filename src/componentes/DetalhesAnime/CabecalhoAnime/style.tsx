export const style = {
    caixa: `
        relative
        flex
        flex-row
        text-[var(--Cor-Branco)]
        gap-2
    `,

    capa: `
        rounded-2xl
        overflow-hidden

        border-3
        border-[var(--Cor-Azul-Winter)]

        w-40
        h-full
    `,

    botaoSalvar: `
        absolute
        overflow-hidden
        top-[1px]
        right-[1px]
        
        w-7
        h-6
        p-1

        flex

        items-center
        justify-center
        rounded-full
        bg-[var(--Cor-Azul-Winter)]
    `,

    info: `
        flex
        flex-col
        flex-1
        justify-between
    `,

    titulo: `
        flex
        items-center
        justify-center
        
        mt-3
        w-full

        font-bold
        text-[2.2vh]
        text-center
    `,

    outro: `
        flex
        flex-row

        justify-between
        items-center

        w-full
        mb-3

        text-sm
    `,

    caixaEsquerda: `
        flex
        flex-col
        gap-1
        w-full
        
    `,

    caixaDireita: `
        flex
        flex-col
        items-center
        justify-center

        border-l-2
        border-[var(--Cor-Branco)]
 
        gap-2
        w-full
    `,

    status:`
        w-full
        text-center
        px-2
    `,

    s:`
        bg-[var(--Cor-Verde)]
        rounded-2xl
        
    `,

    idiomas:`
        flex
        flex-row
        gap-2
    `,

    texto: `
        text-center
        font-bold
        bg-[var(--Cor-Azul-Winter)]
        px-2
        py-1
        rounded-2xl
    `,

    Destaque:`
        font-bold
    `,
};