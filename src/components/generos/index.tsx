import { styles } from "./style";

type SecoesProps = {
  capa: string;
  titulo: string;
};

export default function Secoes({ capa, titulo }: SecoesProps) {
  return (
    <div className="px-12">
      <div className={styles.caixa}>
        <div className={styles.caixaComCor}>
          <h2 className={styles.titulo}>{titulo}</h2>
          <div className={styles.ajustador}>
            <img src={capa} className={styles.imagem} />
          </div>
        </div>
      </div>
    </div>
  );
}
