import React from 'react';
import s from'./App.module.css';

function App() {
  return (
    <div className={s.body}>
      <div className={s.wrapper}>
        <div className={s.initialWrapper}>
          <div className={s.boxHeader}>
            <div className={s.timeOrder}>
              <p>ЗАКАЗ № <b>234234</b></p>
              <p><b>20:34</b> 18.08.20</p>
            </div>
            <div className={s.infoOrder}>
              <p className={s.item}>КОЛ-ВО ТОВАРОВ: <b>9</b></p>
              <p className={s.item}>УПАКОВКА: <b>коробка</b></p>
              <p className={s.item}>СУММА ЗАКАЗА: <b>52 руб</b></p>
            </div>
            <p className={s.timeLeft}>осталось <b>25:48</b></p>
            <div className={s.printIcon}>
              <i className="fa fa-print" aria-hidden="true" style={{
                fontSize: 20 + 'px',
                marginTop: 2 + 'px',
                marginLeft: 4 + 'px',
                color: '#000'
              }}></i>
            </div>
          </div>
          <div className={s.boxContent}>
              <div className={s.tableTop}>
                <p>код</p>
                <p>название</p>
                <p>шт</p>
              </div>
              <div className={s.tableContent}>
                <div className={s.tableItem}>
                  <p className={s.id}>000234</p><span className={s.stick}></span>
                  <p className={s.desc}>Котлеты Мираторг правильные, из куриного филе, 300г</p><span className={s.stick}></span>
                  <p className={s.piece}>2</p>
                </div>
                <div className={s.tableItem}>
                  <p className={s.id}>036847</p><span className={s.stick}></span>
                  <p className={s.desc}>Пельмени мираторг домашние, 400г</p><span className={s.stick}></span>
                  <p className={s.piece}>1</p>
                </div>
                <div className={s.tableItem}>
                  <p className={s.id}>020740</p><span className={s.stick}></span>
                  <p className={s.desc}>Вода Святой Источник негазированная питьевая, <br/>5л</p><span className={s.stick}></span>
                  <p className={s.piece}>1</p>
                </div>
                <div className={s.tableItem}>
                  <p className={s.id}>000274</p><span className={s.stick}></span>
                  <p className={s.desc}>Лапша Роллтон с курицей, 90г</p><span className={s.stick}></span>
                  <p className={s.piece}>5</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
