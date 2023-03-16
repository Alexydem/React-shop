import React from 'react';
import "./Reviews.scss"
import { useState } from 'react';
import Review from './Review';
import {getCommitsList} from '../../services/firebase'


const Reviews = () => {
    const [reviews, setReviews] = useState([
        {   
            id: 1,
            title: 'Поездка на болотоходах',
            img: '../../img/swamp_ride1.jpg',
            name: 'Анастасия Седова',
            text: 'Спасибо огромное за море эмоций, которые мы испытали при поездке на болотоходе! Отдельная благодарность организаторам, за их заботу об участниках, обеспечили тёплой одеждой, напоили горячим чаем с вкусняшками)и все это под зажигательную музыку и съемки на квадрокоптере👍 особенно понравилось детям👬'
        },
        {   
            id: 2,
            title: 'Вечер в куполе',
            img:'../../img/evening_in_the_dome1.jpg',
            name: 'Катерина Голикова',
            text: 'Вчера провели романтический вечер в куполе под открытым небом! Очень понравилось. Приятная атмосфера, тёплая уютная обстановка. Мы остались очень довольны! Спасибо🧡🌹🌷'
        },
        {   
            id: 3,
            title: 'Полет на мотопараплане',
            img: '../../img/paragliding_flight1.jpg',
            name: 'Анастасия Королева',
            text: 'Хотим выразить огромную благодарность вашей команде. Летали сегодня на аэрошюте. Эмоций море, видели вблизи пролетающих птиц, деревья,которые казались размером с муравья. Всё было круто!! Даже погода нам не помешала) Большое вам спасибо 🧡🧡🧡'
        },
        {   
            id: 4,
            title: 'Полет в аэротрубе',
            img: '../../img/flight_in_a_wind_tunnel1.jpg',
            name: 'Екатерина Мороз',
            text: 'Добрый день🌞спасибо огромное за подаренные эмоции! Они бесценны🥰🥰🥰 всё очень понравилось, ребята инструктора большие молодцы😊 даже 3-х летний сынишка почувствовал себя пилотом, тк ему дали примерить шлем 😍🥰'
        }
    ])

  
    getCommitsList()
    .then((data) => {
      const dataList = data
      console.log(Object.values(dataList)[0].card)
      //...
    })
    .catch((error) => {
      console.error(error)
    })

    return (
        <div className="reviews container">
            <h1 className="reviews__header">ОТЗЫВЫ</h1>
                <Review reviews={reviews}/>
        </div>
    );
};

export default Reviews;