import styled from '@emotion/styled';
import { Target } from '@geist-ui/icons';
import React, { useMemo } from 'react'

export const LocationModal = () => {
  return (
    <ModalContainer>
      <div className='header'>
        <div>위치 변경 <Target
          size={20}
        /></div>
        
        <div onClick={() => {
          
        }}> X </div>
      </div>

      <div className='input'>
        <input type='text' disabled value={'시/도'}/>
        <input type='text' disabled value={'시/군/구'}/>
        <input type='text' disabled value={'읍/면/동'}/>
        <input type='button' value={'적용'}/>
      </div>

      <div className='body'>

      </div>
    </ModalContainer>
  )
}

const ModalContainer = styled.div({
    width: 440,
    height: 360,

    borderRadius: 10,
    //absolute
    position: 'absolute',

    bottom: '50%',
    right: '50%',

    backgroundColor: 'white',

    color: 'black',
    fontSize: '0.9rem',

    display: 'flex',
    flexDirection: 'column',

    boxSizing: 'border-box',
    padding: 20,

    zIndex: 100,

    '& .header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      fontWeight: 'normal',

      marginBottom: 40,
      
      '&>div' :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },

    '& .input': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      marginBottom: 10,

      '& input[type=text]': {
        width: 100,
        height: 30,
      },

      '& input[type=button]': {
        width: 60,
        height: 30,

        backgroundColor: '#34cdab',
      },
    },
});