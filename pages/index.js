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
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;


export default function Home() {
  const router = useRouter();
  let [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground backgroundImage={config.bg}>
        <Head>
          <title>Alura Quiz</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

        </Head>
        <QuizContainer>
          <QuizLogo/>
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
                <Input  onChange={(evt) => setName(evt.target.value)} placeholder="Diz ai seu nome" /><br/>
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
