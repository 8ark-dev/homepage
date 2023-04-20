import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { Container } from '../components/Container'
import styled from '@emotion/styled'
import dayjs from 'dayjs'

export default function Home() {
  const [timer, setTimer] = useState(123);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimer((prev) => prev + 1)
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   }
  // }, []);

  return (
    <BaseContainer>
      <div className='background' />
      {/* 상단 우측 사용 의견 */}
      <div>

      </div>

      {/* 가운데 메인 콘텐츠 */}
      <div className={classNames('mid-container')}>
        {/* 검색 창 */}
        <SearchBox>

          <input
            type="text"
            placeholder="검색어를 입력하세요"
            maxLength={25}
          />          <a
            href="https://www.naver.com"
            target="_self"
          >N</a>
        </SearchBox>

        {/* 타이머 및 슬라이더 */}
        <div>{timer}</div>
      </div>

      {/* 하단 우측 메뉴 + 좌측 카피라이트*/}
      <div>

      </div>
    </BaseContainer>
  )
}


const BaseContainer = styled(Container)({
  width: '100%',
  height: '100%',
  minHeight: '100vh',

  backgroundImage: 'url(https://whale-store.pstatic.net/20220712_39/16576213813075atU5_JPEG/386280053685.jpeg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  overflow: 'hidden',

  zIndex: -1,

  '& .mid-container': {
    width: '100%',
    height: '50%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },

  '& .background': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',

    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  }
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
      }
    }
  }
});