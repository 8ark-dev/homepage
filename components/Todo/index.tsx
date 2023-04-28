import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export const Todo = () => {
  const [totallen, setTotallen] = useState<number>(0);
  useEffect(() => {
    setTotallen(Number(localStorage.getItem('total')));
  },[totallen])
  return (
    <TodoContainer
    >
      할 일 목록 <strong>{totallen || false}</strong>
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
