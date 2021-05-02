import React, { useEffect } from 'react'
import { rest } from 'msw'
import { worker } from '../../../../.storybook/mock'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'

const Container = styled.div`
  width: 95vw;
  height: 95vh;
`

////////////////////////////////////////

const ItemBox = styled.div`
  background-color: red;
  border-radius: 0.5rem;
  min-height: 2rem;
`

type ItemProps = {
  children: string
}

const Item = ({ children }: ItemProps) => {
  return <ItemBox>{children}</ItemBox>
}

///////////////////////////////////////

type HeaderProps = {}

const HeaderBox = styled.div`
  width: 100%;
  height: 4rem;
  background-color: rgb(34, 166, 153);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 0.5rem;
`

const HeaderButton = styled.div`
  margin-left: 0.5rem;
  color: #f0f0f0;
  border-radius: 0.5rem;
  background-color: rgb(255, 131, 0);
  box-sizing: border-box;
  padding: 0.5rem;
`

const HeaderInput = styled.input`
  width: inherit;
  border-radius: 0.5rem;
  min-height: 2rem;
  border: none;
`

const Header = ({}: HeaderProps) => {
  return (
    <HeaderBox>
      <HeaderInput />
      <HeaderButton>Add</HeaderButton>
    </HeaderBox>
  )
}

///////////////////////////////////////

const Box = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ background }) => background ?? '#bad3cf'};
  border-radius: 0.5rem;
  overflow: hidden;
`

const ItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > * {
    margin: 0.5rem 0.5rem 0;
  }
`

type TodoListProps = {
  items: string[]
  background: string
}

const TodoList = ({ items, background }: TodoListProps) => {
  useEffect(() => {
    async function runTest () {
      const res = await fetch(`http://localhost:6006/user/5`, {
        method: 'GET'
      })
      console.log(res)
      console.log(await res.json())
    }
    runTest()
  }, [])

  return (
    <Box background={background}>
      <Header />
      <ItemsBox>
        {items.map(item => (
          <Item key={item}>{item}</Item>
        ))}
      </ItemsBox>
    </Box>
  )
}

////////////////////////////////////////

export default {
  title: 'TodoList Whatever',
  component: TodoList
} as Meta

const Template: Story<TodoListProps> = args => (
  <Container>
    <TodoList {...args} />
  </Container>
)

export const InitialWhatever = Template.bind({})
InitialWhatever.args = {
  background: '#bad3cf',
  items: ['foo', 'bar', 'foobar']
}

export const InitialAnother = Template.bind({})
InitialAnother.args = {
  background: 'black',
  items: ['Hello Gilad']
}
