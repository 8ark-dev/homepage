import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { Container } from '../components/Container';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

const enToday = {
  Mon: '월요일',
  Tue: '화요일',
  Wed: '수요일',
  Thu: '목요일',
  Fri: '금요일',
  Sat: '토요일',
  Sun: '일요일',
};

export default function Home() {
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
    <BaseContainer>
      <div className="background" />
      {/* 상단 우측 사용 의견 */}
      <div></div>

      {/* 가운데 메인 콘텐츠 */}
      <div className={classNames('mid-container')}>
        {/* 검색 창 */}
        <SearchBox>
          <input type="text" placeholder="검색어를 입력하세요" maxLength={25} />{' '}
          <a href="https://www.naver.com" target="_self">
            N
          </a>
        </SearchBox>

        {/* 타이머 및 슬라이더 */}
        <div className="timer-container">
          {/* 시간 저장 */}
          <div>
            {/* 시간 */}
            <div>
              {/* 12시간제로 */}
              {timer.split(' ')[2].split(':')[0] >= '12'
                ? parseInt(timer.split(' ')[2].split(':')[0]) - 12
                : timer.split(' ')[2].split(':')[0]}
              :{timer.split(' ')[2].split(':')[1]}
            </div>

            {/* 오전 오후 / 초 */}
            <div>
              <div>
                {timer.split(' ')[2].split(':')[0] >= '12' ? 'PM' : 'AM'}
              </div>

              <div>{timer.split(' ')[2].split(':')[2]}</div>
            </div>
          </div>
          {/* 날짜 저장 */}
          <div>
            {timer.split(' ')[0].split('-')[0]}년
            {timer.split(' ')[0].split('-')[1]}월
            {timer.split(' ')[0].split('-')[2]}일
            {timer.split(' ')[1] === 'Mon' ? '월요일' : ''}
          </div>
        </div>
      </div>

      {/* 하단 우측 메뉴 + 좌측 카피라이트*/}
      <div></div>
    </BaseContainer>
  );
}

const BaseContainer = styled(Container)({
  width: '100%',
  height: '100%',
  minHeight: '100vh',

  backgroundImage:
    'url(https://whale-store.pstatic.net/20220712_39/16576213813075atU5_JPEG/386280053685.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  overflow: 'hidden',

  zIndex: -1,

  '& .mid-container': {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& .timer-container': {
      width: '100%',
      height: '100%',

      backgroundColor: 'blue,',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      color: 'white',
      fontSize: '2rem',

      marginTop: '10%',
    },
  },

  '& .background': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',

    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

const SearchBox = styled.div({
  width: '100%',
  height: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  zIndex: 1,

  marginTop: '10%',

  '& a': {
    height: '48px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    textDecoration: 'none',

    position: 'relative',
    right: '29%',

    fontWeight: 'extra-bold',

    color: 'white',
  },

  '& input': {
    width: '30%',
    height: '48px',

    boxSizing: 'border-box',

    backgroundColor: 'rgba(255, 255, 255, 0.5)',

    border: 'none',
    borderRadius: '5px',
    paddingLeft: '4rem',

    fontWeight: 'lighter',
    fontSize: '1rem',

    '&::placeholder': {
      color: 'white',
    },

    '&:focus': {
      outline: 'none',
      backgroundColor: 'white',
      transition: 'background-color 0.4s ease-in-out',

      '&::placeholder': {
        color: 'gray',
      },

      '& + a': {
        color: '#2DB400',
      },
    },
  },
});
