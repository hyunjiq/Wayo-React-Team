//Calender.js
import React, { useState, useEffect } from 'react';


const specialDates = new Map([
    [0, [1]],
    [1, [9, 10, 11, 12]],
    [2, [1]],
    [3, [10]],
    [4, [1, 5, 6, 15]],
    [5, [6]],
    [7, [15]],
    [8, [16, 17, 18]],
    [9, [3, 9]],
    [11, [25]]
]);

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    const renderCalendar = () => {
        const prevLast = new Date(viewYear, viewMonth, 0);
        const thisLast = new Date(viewYear, viewMonth + 1, 0);

        const PLDate = prevLast.getDate();
        const PLDay = prevLast.getDay();
        const TLDate = thisLast.getDate();
        const TLDay = thisLast.getDay();

        const prevDates = [];
        const thisDates = [...Array(TLDate + 1).keys()].slice(1);
        const nextDates = [];

        if (PLDay !== 6) {
            for (let i = 0; i < PLDay + 1; i++) {
                prevDates.unshift(PLDate - i);
            }
        }

        for (let i = 1; i < 7 - TLDay; i++) {
            nextDates.push(i);
        }

        const dates = prevDates.concat(thisDates, nextDates);
        const firstDateIndex = dates.indexOf(1);
        const lastDateIndex = dates.lastIndexOf(TLDate);

        return dates.map((date, i) => {
            const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
            const dayClass = (i % 7 === 0) ? 'sunday' : (i % 7 === 6) ? 'saturday' : ''; // 일요일과 토요일 확인
            let specialClass = '';

            // 오늘 날짜 확인
            const today = new Date();
            const isToday = condition === 'this' && today.getDate() === date && today.getMonth() === viewMonth && today.getFullYear() === viewYear;


            // 주말 날짜에 회색 원을 적용하고 클릭할 수 없도록 설정
            if (dayClass) {
                specialClass = 'gray-circle'; // 주말인 경우 회색 원 클래스 추가
            } else if (specialDates.has(viewMonth) && specialDates.get(viewMonth).includes(date)) {
                specialClass = 'red-circle'; // 예약 불가능 날짜에 빨간 원
            } else if (selectedDate === date && i >= firstDateIndex && i < lastDateIndex + 1) {
                specialClass = 'blue-circle'; // 선택된 날짜에 파란 원
            }

            // 오늘 날짜에는 고정된 파란색 원 추가
            if (isToday) {
                specialClass += ' blue-circle'; // 오늘 날짜에 파란 원 클래스 추가
            }

            return (
                <div className="date" key={i}>
                    <span 
                        className={`${condition} ${dayClass} ${specialClass}`} 
                        onClick={specialClass !== 'gray-circle' && specialClass !== 'red-circle' ? () => selectDate(date) : undefined} // 주말과 예약 불가능 날짜 클릭 비활성화
                    >
                        {date}
                    </span>
                </div>
            );
        });
    };

    const selectDate = (clickedDate) => {
        setSelectedDate(clickedDate);
        // 선택된 날짜를 Formtage의 입력 필드에 입력하는 로직 추가
        const formattedDate = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(clickedDate).padStart(2, '0')}`;
        document.getElementById("datepicker").value = formattedDate; // <---- 분홍색 태그: 선택한 날짜를 입력 필드에 설정
    };

    const prevMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth() - 1)));
        setSelectedDate(null);
    };

    const nextMonth = () => {
        setDate(new Date(date.setMonth(date.getMonth() + 1)));
        setSelectedDate(null);
    };

    const goToday = () => {
        setDate(new Date());
        setSelectedDate(null);
    };

    const dates = renderCalendar();

    useEffect(() => {
        goToday(); // 처음 로드 시 오늘 날짜로 이동
    }, []);

    return (
        <div className="zindex d-flex flex-column align-items-center justify-content-center col-lg-6 col-ms-6">
            <div className="calendar d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-center header">
                    <button className="nav-btn go-prev" onClick={prevMonth}>&lt;</button>
                    <div className="year-month go-today" onClick={goToday}>
                    {viewMonth + 1}월
                    </div>
                    <button className="nav-btn go-next" onClick={nextMonth}>&gt;</button>
                </div>
                <div className="main">
                    <div className="days">
                        <div className="day">일</div>
                        <div className="day">월</div>
                        <div className="day">화</div>
                        <div className="day">수</div>
                        <div className="day">목</div>
                        <div className="day">금</div>
                        <div className="day">토</div>
                    </div>
                    <div className="dates">
                        {dates}
                    </div>
                </div>
                
            </div>
            <div className="d-flex align-items-center ms-4 font">
                    <p className="d-flex align-items-center me-3">
                        <span className="d-block me-1 booking"></span>예약가능
                    </p>
                    <p className="d-flex align-items-center me-3">
                        <span className="d-block me-1 notbooking"></span>예약불가능
                    </p>
                    <p className="d-flex align-items-center me-3">
                        <span className="d-block me-1 rest"></span>휴무
                    </p>
                </div>
        </div>
    );
};


export default Calendar;