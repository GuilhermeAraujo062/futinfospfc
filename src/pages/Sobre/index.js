import Header from "components/Header";
import styles from "./Sobre.module.css";

function Sobre() {
    return (
        <section>
            <Header />
            <section className={styles.sobre}>
                <section className={styles.historia}>
                    <h1>Desde 1930</h1>
                    <p>Fundado em 25 de janeiro de 1930 e marcado por histórias de superação, como a refundação do clube em 1935 ou os tempos difíceis da construção do MorumBIS, o Tricolor Mais Querido do planeta é o único clube brasileiro a ter conquistado a América e o Mundo por três vezes. É ainda o único Tricampeão consecutivo do Campeonato Brasileiro e o primeiro a conquistá-lo por seis vezes. Tri-Hexacampeão Brasileiro.</p>

                    <p>Dentro das quatro linhas, foi vestindo o manto tricolor que o goleiro Caxambu inventou a ponte, que Roberto Dias tornou-se o maior marcador de Pelé, que Raí e Telê comemoraram a vitória sobre o Barcelona, que Müller marcou o gol que fez o italiano Costacurta perder o rumo de Milão, que Rogério Ceni passou a ser o Maior Goleiro Artilheiro do Mundo, além de tantos outros grandes momentos da gloriosa trajetória são-paulina!</p>

                    <p>Foi também defendendo as cores do São Paulo que o saltador Adhemar Ferreira da Silva chegou ao ouro olímpico e bateu duas vezes o recorde mundial do salto triplo, e que Éder Jofre, o Galo de Ouro dos 50 nocautes, surgiu para os ringues que um dia estariam a seus pés.</p>

                    <p>Fora de campo, o Tricolor desafiou os críticos e a lógica e construiu o maior estádio particular do Brasil, o MorumBIS. Seguiu pioneiro em sua aposta na infraestrutura como pilar da excelência no esporte, erguendo ao longo do tempo seu Centro de Treinamento e o Centro de Formação de Atletas. O resultado? O mundo conheceu três vezes.</p>

                    <p>Dono de um patrimônio invejável, detentor de títulos inalcançáveis para muitos e em movimento constante em busca da excelência, o Tricolor Paulista faz jus a seu hino: dentre os grandes, és o primeiro!</p>
                </section>

                <section className={styles.patrocinadores}>
                    <div>
                        <h2>Patrocinador Máster</h2>
                        <div><img src="https://cdn.saopaulofc.net/2024/01/superbet.png" alt="logo"></img></div>
                    </div>

                    <div>
                        <h2>Estádio</h2>
                        <div><img src="https://cdn.saopaulofc.net/2024/01/morumbis-2.png" alt="logo"></img></div>
                    </div>

                    <div>
                        <h2>Patrocinadores</h2>
                        <div>
                            <div className={styles.logos}>
                                <img src="https://cdn.saopaulofc.net/2024/01/newbalance-e1706125292382.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2024/01/ademicon-e1706125299461.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2024/01/abc-1.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2024/08/blue.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2024/07/konami-e1720189092459.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2025/02/logo-viva-tricolor_site-e1739563049186.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2024/12/elgin-logo-2-2-e1735217506442.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2024/11/texas-e1730495282329.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2024/12/matrix-e1733406786994.png" alt="logo"></img>
                                <img src="https://cdn.saopaulofc.net/2025/03/bis-1-e1741275211355.png" alt="logo"></img>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.presidencia}>
                    <h2>Presidência</h2>
                    <div className={styles.info}>
                        <div>
                            <img src="https://cdn.saopaulofc.net/2022/08/julio-casares.jpg" alt="foto"></img>
                            <h3>Julio Casares</h3>
                            <h4>Presidente</h4>
                        </div>
                        <div>
                            <img src="https://cdn.saopaulofc.net/2022/08/massis.jpg" alt="foto"></img>
                            <h3>Harry Massis Junior</h3>
                            <h4>Vice-Presidente</h4>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Sobre;