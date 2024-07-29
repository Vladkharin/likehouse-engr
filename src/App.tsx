import "./app.css";
import { SecondBlock } from "./components/mainPage/SecondBlock";
import { ThirdBlock } from "./components/mainPage/ThirdBlock";
import "./fonts/stylesheet.css";

function App() {
  return (
    <>
      <nav className={`nav`}>
        <div className="container">
          <div className="nav__wrapper">
            <div className="nav__links">
              <a href="#" className="menu__link">
                Септики
              </a>
              <a href="#" className="menu__link">
                Скважины
              </a>
              <a href="#" className="menu__link">
                Сваи
              </a>
              <a href="#" className="menu__link">
                Кессоны
              </a>
            </div>
            <div className="nav__icons">
              <a href="https://teleg.run/Like_House_org" className="nav__icon">
                <img src="./icons/TelegramIcon.svg" alt="" />
              </a>
              <a href="https://wa.clck.bar/79251047452" className="nav__icon">
                <img src="./icons/WhatsappIcon.svg" alt="" />
              </a>
              <a id="phone" href="tel:+74951277452" className="nav__icon">
                <img src="./icons/PhoneIcon.svg" alt="" />
              </a>
              <a href="https://www.youtube.com/@likehouse_org" className="nav__icon">
                <img src="./icons/YouTubeIcon.svg" alt="" />
              </a>
              <a href="mailto:info@likehouse.org" className="nav__icon">
                <img src="./icons/EmailIcon.svg" alt="" />
              </a>
              <a href="https://vk.com/like_house" className="nav__icon">
                <img src="./icons/VKIcon.svg" alt="" />
              </a>
            </div>
            <div className="nav__item-title">
              <a className="nav__item-linkWithOutdecoration" href="tel:+79251047452">
                +7 (925) 104-74-52
              </a>
              <br />
              <a className="nav__item-linkWithOutdecoration margin" href="tel:+74951277452">
                +7 (495) 127-74-52
              </a>
              <br />
              <span>(WhatsApp)</span>
            </div>
          </div>
        </div>
      </nav>
      <div className="firstBlock">
        <div className="container">
          <div className="firstBlock__wrapper">
            <div className="firstBlock__header">
              Лайк <span className="firstSpan">Хаус</span> <span className="secondSpan">Инжиниринг</span>
            </div>
            <div className="line smallLine"></div>
            <h1 className="firstBlock__title">
              Монтируем инженерные коммуникации и фундаменты <br /> с ориентированием на честное отношение к клиентам
            </h1>
          </div>
          <div className="firstBlock__buttons">
            <div className="firstBlock__buttonMediaMax940px">
              <a href="tel:+74951277452">
                <button>Позвонить</button>
              </a>
            </div>
            <div className="firstBlock__buttonMediaMin940px">
              <button>Бесплатная консультация</button>
            </div>
            <div className="firstBlock__buttonMap">
              <a href="https://likehouse.org/" target="_blank">
                <button>Хочу посмотреть дом</button>
              </a>
            </div>
          </div>
        </div>
        <div className="animation">
          <img src="./icons/partner.svg?ver=1" alt="partner" className="animation__spin" />
        </div>
      </div>

      <ThirdBlock />
      <SecondBlock />

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__img" />
            <div className="footer__items">
              <div className="footer__item">
                <div className="footer__item-header">АДРЕС</div>
                <div className="footer__item-title">
                  Офис: г. Подольск <br />
                  ул. Советская 33/44 <br />
                  <a className="footer__item-linkWithdecoration" href="https://yandex.ru/maps/-/CDaJyP8G">
                    Показать на карте
                  </a>
                </div>
              </div>
              <div className="footer__item">
                <div className="footer__item-header">КОНТАКТЫ</div>
                <div className="footer__item-title">
                  <a className="footer__item-linkWithOutdecoration" href="mailto:info@likehouse.org">
                    INFO@LIKEHOUSE.ORG
                  </a>{" "}
                  <br />
                  <a className="footer__item-linkWithOutdecoration" href="tel:+79251047452">
                    +7 (925) 104-74-52
                  </a>{" "}
                  <br />
                  <a className="footer__item-linkWithOutdecoration" href="tel:+74951277452">
                    +7 (495) 127-74-52
                  </a>{" "}
                  <br />
                  <span>(WhatsApp)</span>
                </div>
              </div>
              <div className="footer__socialItem">
                <div className="footer__item-header">СОЦ.СЕТИ</div>
                <div className="footer__socials">
                  <a href="https://vk.com/like_house">
                    <img src="../icons/VKIcon.svg" alt="" className="footer__social" />
                  </a>
                  <a href="https://wa.clck.bar/79251047452">
                    <img src="../icons/WhatsappIcon.svg" alt="" className="footer__social" />
                  </a>
                  <a href="https://www.youtube.com/@likehouse_org">
                    <img src="../icons/YouTubeIcon.svg" alt="" className="footer__social" />
                  </a>
                  <a href="https://teleg.run/Like_House_org">
                    <img src="../icons/TelegramIcon.svg" alt="" className="footer__social" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
