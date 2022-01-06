import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export default function NotFound() {
  const history = useHistory();
  const backtoHome = () =>{ 
    history.push(`/`);
  }
    return (
      <Container>
            <Img src='/imgs/404.png' />
            <Wrapper>
              <h1>404 Not Fonud</h1>
              <Button onClick={() => backtoHome()}>Go Back</Button>
            </Wrapper>
      </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    height : 100%;
`

const Img = styled.img`
  width: 500px;
  min-width: 200px;
  height: 500px;
  min-height: 200px;
`

const Button  = styled.button`
  display: inline-block;
  border: 3px solid;
  border-radius: 7px;
  background-color: #ffffff;
  padding : 20px;
  width: calc(100% + 50px);
  cursor: pointer;
  font-family: 'Nunito'
`
const Wrapper  = styled.div`
  display: flex;
  flex-direction: colunm;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center;
`
