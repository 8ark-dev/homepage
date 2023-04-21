import classNames from 'classnames';

import { Container } from '../components/Container';
import { Timer } from '@/components/Timer';

import styled from '@emotion/styled';

export default function Home() {


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
          <Timer/>
        </div>
      </div>

      {/* 하단 우측 메뉴 + 좌측 카피라이트*/}
      {/* https://store.whale.naver.com/detail/bec154a88dd44b68adc050eb0e20c00f */}
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

      marginTop: '8%',
    },
  },

  '& .background': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',

    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient( to bottom, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0.7) )'
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

    fontWeight: 'bolder',

    color: 'white',
  },

  '& input': {
    width: '30%',
    height: '48px',

    boxSizing: 'border-box',

    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',

    border: 'none',
    borderRadius: '10px',
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
