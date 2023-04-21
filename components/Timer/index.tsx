import styled from "@emotion/styled";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const Timer = () => {
    const [timer, setTimer] = useState(dayjs().format('YYYY-MM-DD ddd HH:mm:ss'));

    useEffect(() => {
        const counter = setInterval(() => {
            setTimer(dayjs().format('YYYY-MM-DD ddd HH:mm:ss'));
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
                    {timer.split(' ')[2].split(':')[0] >= '12'
                        ? parseInt(timer.split(' ')[2].split(':')[0]) - 12
                        : timer.split(' ')[2].split(':')[0]}
                    :{timer.split(' ')[2].split(':')[1]}
                </div>

                {/* 오전 오후 / 초 */}
                <div className="time-right">
                    <div>
                        {timer.split(' ')[2].split(':')[0] >= '12' ? 'PM' : 'AM'}
                    </div>

                    <div className="sec">{timer.split(' ')[2].split(':')[2]}</div>
                </div>
            </div >
            {/* 날짜 저장 */}
            <div className="date">
                {timer.split(' ')[0].split('-')[0]}년 
                {timer.split(' ')[0].split('-')[1]}월 
                {timer.split(' ')[0].split('-')[2]}일 
                {timer.split(' ')[1] === 'Mon' ? '월요일' : ''}
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
            
            fontSize: '11rem',
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
            justifyContent: 'center',
            alignItems: 'center',
            
            padding: '0 1rem',

            rowGap: '1rem',


            '& div': {
                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',


                fontSize: '3rem',
                color: 'rgba(255,255,255,0.5)',
            },
            
            '& .sec': {
                width: '100%',
                height: '100%',
                fontWeight: 'lighter',

                borderTop: '1px solid rgba(255,255,255,0.3)',

                fontSize: '3rem',
                color: 'white',
            }
        }
    },

    '& .date': {
        fontSize: '1.5rem',
        fontWeight: 'lighter',
    },

})

