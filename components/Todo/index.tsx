import styled from "@emotion/styled";
import { useState } from "react";

export const Todo = ( {todonum} ) => {
  return (
    <TodoContainer
    >
      할 일 목록 <strong>{todonum || false}</strong>
    </TodoContainer>
  )
}

const TodoContainer = styled.div({
  width: '100%',
  height: '100%',
  zIndex: 1,

  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',

  '& strong': {
    fontWeight: 'bolder',
  }
})
