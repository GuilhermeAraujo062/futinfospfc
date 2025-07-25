import styles from "./JogadoresReservas.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const reservas = [
    { nome: "Jandrey", img: "https://i.pinimg.com/736x/e0/b5/18/e0b518e87363f8891fd43e5eae6c4323.jpg" },
    { nome: "Maik", img: "https://i.pinimg.com/736x/45/51/76/45517665164813de6e74bb2b92fb7912.jpg" },
    { nome: "Wendell", img: "https://i.pinimg.com/736x/4b/e2/da/4be2da0cfa9791f10a7e01759c6bb710.jpg" },
    { nome: "P.Lanza", img: "https://i.pinimg.com/736x/37/bb/31/37bb314aad9f0827b57759fe91ee045b.jpg" },
    { nome: "Ferraresi", img: "https://i.pinimg.com/736x/e3/6b/19/e36b199afa709c32dff6f1ccebd69fce.jpg" },
    { nome: "Sabino", img: "https://i.pinimg.com/736x/cf/bf/8c/cfbf8c507b7bc2ceda57fc7b3d39b0d3.jpg" },
    { nome: "D.Bobadilla", img: "https://i.pinimg.com/736x/6d/48/5d/6d485d16f575a2895c4d0180fa5026ca.jpg" },
    { nome: "M.Antônio", img: "https://i.pinimg.com/736x/13/22/7e/13227ee83b87b360c7661579b9ee5bd2.jpg" },
    { nome: "L.Gustavo", img: "https://i.pinimg.com/736x/73/20/43/732043c17945aa9936fedac2b31e0b6d.jpg" },
    { nome: "Luan", img: "https://i.pinimg.com/736x/ad/31/dd/ad31dd4ba7762143ee7dcbf3a6f14cbd.jpg" },
    { nome: "Negrucci", img: "https://i.pinimg.com/736x/ea/28/40/ea284008516dfe7308df204457310e48.jpg" },
    { nome: "Rodriguinho", img: "https://i.pinimg.com/736x/67/94/d4/6794d4b9eb419a3f61ee5855377fe65a.jpg" },
    { nome: "Ferreirinha", img: "https://i.pinimg.com/736x/3f/3e/97/3f3e979a76aaf8477a13c196880c323e.jpg" },
    { nome: "G.Tapia", img: "https://i.pinimg.com/736x/21/1c/f1/211cf14c4a815bd5dbbee64cd200d92b.jpg" },
    { nome: "A.Silva", img: "https://i.pinimg.com/736x/de/26/15/de2615b4cbc4f5914a33b04f51fc4ce0.jpg" },
    { nome: "J.Dinenno", img: "https://i.pinimg.com/736x/0b/6b/90/0b6b90961b3000681a9471bb74a5f9ab.jpg" },
    { nome: "Lucca", img: "https://i.pinimg.com/736x/46/18/e1/4618e1f5f2f2663e816785a7dbcda80d.jpg" },
    { nome: "L.Ferreira", img: "https://i.pinimg.com/736x/b1/08/e7/b108e7fa34c6fc1d6080ada9cbb6e066.jpg" },
    { nome: "R.Francisco", img: "https://i.pinimg.com/736x/ad/fb/cb/adfbcb9e11cf0d328b7242502d5dbfdb.jpg" }
];


function JogadoresReservas() {
    return (
        <div className={styles.reservas}>

            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {reservas.map((jogador, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.jogador}>
                            <img
                                src={jogador.img}
                                alt={jogador.nome}
                                className={styles.img_jogador}
                            />
                            <span className={styles.nome}>{jogador.nome}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default JogadoresReservas;