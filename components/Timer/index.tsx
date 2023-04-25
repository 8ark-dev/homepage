import styled from "@emotion/styled";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import koLocale from "dayjs/locale/ko";


export const Timer = () => {
    const [timer, setTimer] = useState(dayjs());
    useEffect(() => {
        const counter = setInterval(() => {
            //format으로 아래에서 해결하기
            setTimer(dayjs());
        }, 1000);

        //console.log('timer:', timer.split(' '));
        return () => {
            clearInterval(counter);
        };
    }, []);
    return (
        <TimerContainer>
            {/* 시간 저장 */}
            <div className="time">
                {/* 시간 */}
                <div className="time-left">
                    {/* 12시간제로 */}
                    {timer.format('hh : mm')}
                </div>

                {/* 오전 오후 / 초 */}
                <div className="time-right">
                    <div className="time">
                        {timer.format('A')}
                    </div>

                    <div className="not_time"/>

                    <div className="sec time">{timer.format('ss')}</div>
                </div>
            </div >
            {/* 날짜 저장 */}
            <div className="date">
                {timer.locale(koLocale).format('YYYY년 MM월 DD일 dddd')}
            </div >
        </TimerContainer>
    )
}

const TimerContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    zIndex: 1, //배경 이미지보다 위에 있어야 함


    '& .time': {
        width: '100%',
        height: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        '& .time-left': {
            width: '25%',
            height: '100%',
            
            fontSize: '9rem',
            fontWeight: 'bold',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },

        '& .time-right': {
            width: '4%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            

            rowGap: '1rem',


            '& .time': {
                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',


                fontWeight: 'light',
                fontSize: '3rem',

                color: 'rgba(255,255,255,0.5)',
            },

            '& .not_time' :{
                width: '100%',
                height: '1px',

                backgroundColor: 'rgba(255,255,255,0.3)',
            },
            
            '& .sec': {
                width: '100%',
                height: '100%',
                fontWeight: 'lighter',
                color: 'white',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        }
    },

    '& .date': {
        fontSize: '1.5rem',
        fontWeight: 'lighter',
    },

})

