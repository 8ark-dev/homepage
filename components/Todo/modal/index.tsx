import styled from '@emotion/styled';
import React from 'react';

export const TodoModal = () => {
  return (
    <ModalContainer>
      <p>할 일 목록</p>

      <div>
        <a>+</a>
        <input type="text" placeholder="할 일을 입력하세요" />
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div({
  width: '460px',
  height: '350px',

  borderRadius: '20px',
  boxSizing: 'border-box',
  padding: '20px',

  color: 'black',

  backgroundColor: 'white',

  position: 'absolute',

  bottom: 35,
  right: 125,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '&>p': {
    width: '100%',
    height: '30px',
  },

  '&>div': {
    width: '100%',
    height: '30px',

    position: 'relative',

    '&>a': {
      width: '20px',
      height: '20px',

      borderRadius: '50%',
      backgroundColor: '#05c3a7',

      position: 'absolute',
      left: 10,
      top: 6,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      color: 'white',
      fontWeight: 'bolder',
    },

    '& input': {
      width: '90%',
      height: '100%',

      border: '2px solid #05c3a7',
      borderRadius: '20px',

      paddingLeft: '40px',

      color: 'gray',

      '&:focus': {
        outline: 'none',
      },
    },
  },

  animation: 'modalOpen 0.1s ease-in-out',
  '@keyframes modalOpen': {
    '0%': {
      width: '0px',
      height: '0px',
    },
    '100%': {
      width: '460px',
      height: '350px',
    },
  },
});
