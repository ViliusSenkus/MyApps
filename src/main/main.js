import LogoFoto from "./content/img/foto_logo.png"
import style from "./main.module.css";

const Main = () => {
    return  <div className={style.header}>
                <div className={style.center}>
                    <h1>Hi, I'm Vilius</h1>
                    <div className={style.headerInfo}>Full Stack developer</div>
                </div>
                <div>
                    <img src={LogoFoto} alt="my portrait" />
                </div>
            </div>
}

export default Main