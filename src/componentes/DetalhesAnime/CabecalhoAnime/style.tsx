export const style = {
    caixa: `
        relative
        flex
        flex-row
        text-[var(--Cor-Branco)]
        gap-2

        lg:gap-5
    `,

    capa: `
        rounded-2xl
        overflow-hidden

        border-3
        border-[var(--Cor-Azul-Winter)]

        w-40
        h-full

        lg:w-80
        lg:h-full
        lg:border-4
    `,

    C: `
        lg:w-full
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

        lg:w-15
        lg:h-auto
        lg:p-2
        lg:top-0
        lg:right-0

        xl:top-[-5px]
        xl:right-[-5px]
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
        
        mt-7
        w-full

        font-bold
        text-[2.2vh]
        text-center

        lg:mt-5
        lg:text-[3.5vh]

        xl:mt-10
        xl:text-[5vh]
    `,

    outro: `
        flex
        flex-row

        justify-between
        items-center

        w-full
        mb-3

        text-sm

        lg:mb-5
        lg:text-[1.8vh]
        lg:px-5

        xl:px-20
    `,

    caixaEsquerda: `
        flex
        flex-col
        gap-1
        w-full

        lg:gap-2
        
        xl:w-[80%]

        xl:justify-center
        xl:items-star
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

        lg:gap-5
        lg:p-2
        lg:border-l-4
        lg:pl-6

    `,

    status:`
        w-full
        text-center
        px-2

        xl:text-[2vh]
    `,

    s:`
        bg-[var(--Cor-Verde)]
        rounded-2xl

        xl:py-2
        xl:mx-50
        
    `,

    idiomas:`
        flex
        flex-row
        gap-2

        lg:gap-6
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