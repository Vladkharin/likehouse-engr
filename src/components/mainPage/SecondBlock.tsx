import React from "react";

type list = listItem[];

type listItem = {
  value: string;
  text: string;
  uniqueId: number;
};

// const firstListItems: list = [
//   {
//     value: "01",
//     text: "Выезд специалиста на участок",
//     uniqueId: 410,
//   },
//   {
//     value: "02",
//     text: "Экскурсии на строящиеся и готовые объекты",
//     uniqueId: 411,
//   },
//   {
//     value: "03",
//     text: "Видео обзоры проектов",
//     uniqueId: 412,
//   },
//   {
//     value: "04",
//     text: "Строим по своим и индивидуальным проектам",
//     uniqueId: 413,
//   },
//   {
//     value: "05",
//     text: "Адаптируем проект под особенности вашего участка",
//     uniqueId: 414,
//   },
//   {
//     value: "06",
//     text: "Полный спектр услуг по коммуникациям",
//     uniqueId: 415,
//   },
// ];

const secondListItems: list = [
  {
    value: "с 2016",
    text: "года на рынке строительства",
    uniqueId: 97,
  },
  {
    value: "400",
    text: "автонономных канализаций в год",
    uniqueId: 98,
  },
  {
    value: "20000",
    text: "метров пробуренных скважин",
    uniqueId: 99,
  },
  {
    value: "50000",
    text: "забитых свай ежегодно",
    uniqueId: 100,
  },
];

export function SecondBlock() {
  return (
    <div className="secondBlock">
      <div className="container">
        <div className="secondBlock__wrapper">
          <div className="secondBlock__header"> О нас</div>
          <div className="secondBlock__title">
            Лайк Хаус Инжиниринг — это строительная компания, которая работает по принципу открытых цен и без скрытых платежей.{" "}
            <br />
            <span>МЫ ЧЕСТНО УКАЗЫВАЕМ ЦЕНЫ НА САЙТЕ И ПО ТЕЛЕФОНУ.</span>
            При выборе услуг по монтажу автономных канализаций, забивке свай, установке септиков или услуге по бурению скважин в
            первую очередь стоит обращать внимание не только на стоимость, но и на комплектацию, а также объём включённых в
            стоимость материалов и работ. <br /> В Стоимость наших монтажей включено все, чтобы вы могли закопать септик, кессон,
            пробурить скважину или смонтировать сваи без лишних платежей. Обычно компании не говорят о том, что для монтажа
            септика или кессона нужен песок, бетон. Так же часто компании не включают в стоимость компрессоры и пластиковые
            крышки. При монтаже свай многие компании не говорят, что для строительства дома нужны оголовки, а при бурении скважины
            используют не подходящую трубу. Работая с нами, вы можете быть уверенны в том, что в момент монтажа автономной
            канализации (септика), кессона или скважины у вас будут отсутствовать скрытые платежи, а менеджер на другом конце
            телефонной линии честен с вами.
          </div>
          <SecondBlockLists />
        </div>
      </div>
    </div>
  );
}

// function SecondBlockFirstItem(item: listItem): JSX.Element {
//   return (
//     <React.Fragment key={item.uniqueId}>
//       <div className="secondBlock__item">
//         <div className="secondBlock__item-number">{item.value}</div>
//         <div className="secondBlock__item-title">{item.text}</div>
//       </div>
//     </React.Fragment>
//   );
// }

function SecondBlockSecondItem(item: listItem): JSX.Element {
  return (
    <React.Fragment key={item.uniqueId}>
      <div className="line"></div>
      <div className="secondBlock__secondListItem">
        <div className="secondBlock__secondItem-number">{item.value}</div>
        <div className="secondBlock__item-title2">{item.text}</div>
      </div>
    </React.Fragment>
  );
}

function SecondBlockLists(): JSX.Element {
  return (
    <>
      {/* <div className="secondBlock__list" key={999}>
        {firstListItems.map((item: listItem) => SecondBlockFirstItem(item))}
      </div> */}
      <div className="secondBlock__secondList" key={998}>
        {secondListItems.map((item: listItem) => SecondBlockSecondItem(item))}
      </div>
    </>
  );
}
