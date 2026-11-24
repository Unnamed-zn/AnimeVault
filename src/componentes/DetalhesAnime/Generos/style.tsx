export const style = {
    caixa:`
        flex
        flex-col
        w-full
        mt-4
        mb-4
        px-4
        text-[var(--Cor-Branco)]

        lg:mt-7
    `,

    Titulo:`
        text-lg
        font-bold
        mb-2

        lg:mb-4
        lg:text-[2vh]

        xl:text-[2.6vh]
    `,

    generos:`
        w-full
        grid
        grid-cols-3
        gap-3

        lg:grid-cols-4
        lg:gap-6
        lg:text-[1.7vh]

        xl:grid-cols-7
        xl:text-[2vh]
    `,

    TipoGenero:`
        text-center
        p-1

        bg-[var(--Cor-Azul-Winter)]
        rounded-2xl

        lg:py-2
        lg:mx-1
    `,
};