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
    value: "150",
    text: "счастливых семей в год",
    uniqueId: 98,
  },
  {
    value: "бла",
    text: "бла",
    uniqueId: 99,
  },
  {
    value: "",
    text: "без скрытых платежей",
    uniqueId: 100,
  },
];

export function SecondBlock() {
  return (
    <div className="secondBlock">
      <div className="container">
        <div className="secondBlock__wrapper">
          <div className="secondBlock__header"> О нас</div>
          <div className="secondBlock__title">Крутые сваи, септики</div>
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
