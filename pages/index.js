/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import config from '../config.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

/* eslint-disable */
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
// const BackgroundImage = styled.div`
//   background-image: url(${config.bg});
//   flex: 1;
//   background-size: cover;
// `
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`
export const Button = styled.button`
    margin-top: 4%;
    border-radius: 4px;
    padding: 8px;
    border: solid 2px #00e676;
    margin: 10px;
    line-height: 24px;
    border-radius: 10px;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 400ms ease;
    &:before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 0px;
      height: 43px;
      background: rgb(153, 51, 153, 0.2);
      border-radius: 10px;
      transition: all 2s ease;
    }
    &:hover&:before{
      width: 100%;
    
    }
`


export default function Home() {
  const router = useRouter();
  let [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground backgroundImage={config.bg}>
        <Head>
          <title>Alura Quiz</title>

        </Head>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>The legend of zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function(evt){
                evt.preventDefault()
              
                
                router.push(`/quiz?name=${name}`)
                console.log("oie")

              }}> 
                <input className="form-control" onChange={function(evt){
                  
                  console.log(evt.target.value)
                  setName(evt.target.value)
                
                }} placeholder="Diz ai seu nome" /><br/>
                <Button type="submit" disabled={name.length === 0}>
                  Vamos jogar {name}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>

              <p>Loren ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/gabriel52" />
      </QuizBackground>
    </>
  );
}
