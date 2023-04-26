import styled from '@emotion/styled'
import React from 'react'

export const TodoModal = () => {
  return (
    <ModalContainer>
        <p>할 일 목록</p>

        <div>
            <input 
                type="text"
                placeholder="할 일을 입력하세요"
            />
        </div>
    </ModalContainer>
  )
}

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

    '& input': {
        width: '100%',
        height: '100%',
        border: 'none',
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
        }
    }




    
})