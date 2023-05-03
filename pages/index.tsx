import classNames from 'classnames';

import { Container } from '../components/Container';
import { TodoModal } from '@/components/Todo/modal';
import { Todo } from '@/components/Todo';
import { Timer } from '@/components/Timer';

import { Settings, Target, HelpCircle } from '@geist-ui/icons';
import styled from '@emotion/styled';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import { LocationModal } from '@/components/Location/Modal';

const Links = [
  'https://whale-store.pstatic.net/20220712_252/1657621381328rppU4_JPEG/742483520452.jpeg',
  'https://whale-store.pstatic.net/20220712_39/16576213813075atU5_JPEG/386280053685.jpeg',
  'https://whale-store.pstatic.net/20220712_49/1657621381331w5tiO_JPEG/1604987781540.jpeg',
  'https://whale-store.pstatic.net/20220712_236/1657621381337AvvcW_JPEG/228759100076.jpeg',
]

export default function Home() {
  const [text, setText] = useState('');
  const [istodo, setIstodo] = useState(false);
  const [islocation, setIslocation] = useState(false);

  const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && text.trim() !== '') {
      e.preventDefault();
      window.open(`https://search.naver.com/search.naver?query=${text}`, '_self');
    }
  }

  return (
    <BaseContainer>

      <div className='author' onClick={() => {
        window.open('https://store.whale.naver.com/detail/bec154a88dd44b68adc050eb0e20c00f', '_self');
      }}>
        <div style={
          {
            marginBottom: '10px',
            color: 'white',
          }
        }>Summer Memories</div>
        <div>권희정 </div>
      </div>


      <div className="background" />
      {/* 상단 우측 사용 의견 */}
      <div className='opinion' onClick={() => {
        window.open('https://forum.whale.naver.com/', '_self');
      }}>
        <div>
          <HelpCircle
            color='white'
          />
        </div>
        <p>사용 의견</p>

      </div>

      {/* 가운데 메인 콘텐츠 */}
      <div className={classNames('mid-container')}>
        {/* 검색 창 */}
        <SearchBox>
          <input type="text" placeholder="검색어를 입력하세요" maxLength={25}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
            onKeyDown={onKeyEnter}
          />
          <a href="https://www.naver.com" target="_self">
            N
          </a>
        </SearchBox>

        {/* 타이머 및 슬라이더 */}
        <div className="timer-container">
          <Timer />
        </div>
      </div>

      {/* 우측 하단  */}
      <div className='option'>
        {/* 위치 설정 버튼 */}
        <div className='icon'>
            <Target 
              onClick={() => {
                setIslocation(!islocation);
              }}
            />
        </div>
        <div className='modal'>
          {islocation && <LocationModal/>}
        </div>

        {/* 할 일 목록 */}
        <div 
        className='text' 
        onClick={() => {
          setIstodo(!istodo);
        }}>
          <Todo/>        
        </div>
        {istodo &&
        <div
          className='modal'
        >
          <TodoModal />
        </div>
        }

        {/* 설정 */}
        <div className='icon'>
          <Settings />
        </div>
      </div>
    </BaseContainer>
  );
}

const BaseContainer = styled(Container)({
  width: '100%',
  height: '100%',
  minHeight: '100vh',

  backgroundImage: `url(${Links[Math.floor(Math.random() * Links.length)]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

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
    background: 'linear-gradient( to bottom, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0.7) )'
  },

  '& .author': {
    position: 'absolute',
    bottom: 40,
    left: 40,

    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.5)',

    fontWeight: 'lighter',
    fontSize: '0.8rem',

    zIndex: 1,

    transition: 'opacity 2s ease-in-out',
    //hover 시 opacity 조정
    '&:hover': {
      cursor: 'pointer',
      color: 'rgba(255, 255, 255, 1)',
    },
    '&:hover ~ .background, &:hover ~ .mid-container, &:hover ~ .opinion, &:hover ~ .option': {
      opacity: 0,
      transition: 'opacity 1s ease-in-out',
    },
    '& ~ .background, & ~ .mid-container, & ~ .opinion, & ~ .option': {
      transition: 'opacity 1s ease-in-out',
    },

  },

  '& .opinion': {
    position: 'absolute',
    top: 10,
    right: 10,
    overflow: 'hidden',

    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 1,

    '& p': {
      color: 'white',
      fontWeight: 'lighter',
      fontSize: '0.8rem',

      position: 'relative',
      right: '-150px',
    },
    '& div': {
      width: '40px',
      height: '40px',

      marginLeft: '10px',
      borderRadius: '5px',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      zIndex: 1,

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',

        //hover 시 위의 p태그를 우측에서 날아오는 애니메이션
        '& ~ p': {
          right: '0px',
          transition: 'right 0.3s ease-in-out',
        }
      },

      '& ~ p': {
        transition: 'right 0.3s ease-in-out',
      },

      '& > *': {
        width: '25px',
        height: '25px',

        opacity: '0.8',
      }

    }
  },

  '& .option': {
    position: 'absolute',
    bottom: 30,
    right: 30,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    color: 'white',
    fontSize: '0.8rem',
    fontWeight: 'lighter',


    //modal 제외 영역 hover 시 opacity 조정 modal 클래스 제외
    '& > div:hover:not(.modal)': {
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },

    '& .icon': {
      width: '30px',
      height: '30px', 

      position: 'relative',

      boxSizing: 'border-box',
      padding: '5px',

      marginLeft: '5px',
      borderRadius: '5px',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      zIndex: 1,
    },

    '& .text': {
      width: '70px',
      height: '30px',

      marginLeft: '10px',
      borderRadius: '5px',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
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
