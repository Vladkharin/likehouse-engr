import "./app.css";
import "./fonts/stylesheet.css";

function App() {
  return (
    <>
      <nav className={`nav`}>
        <div className="container">
          <div className="nav__wrapper">
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
              Бьем сваи <br /> копаем септики
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
              <a href="#map">
                <button>Хочу посмотреть дом</button>
              </a>
            </div>
          </div>
        </div>
        <div className="animation">
          <img src="./icons/partner.svg?ver=1" alt="partner" className="animation__spin" />
        </div>
      </div>
    </>
  );
}

export default App;
