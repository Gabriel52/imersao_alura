/* eslint-disable react/prop-types */
/* eslint-disable*/
import React from 'react';
import config from '../config.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';




function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        Pagina em carregamento
      </Widget.Content>
    </Widget>
  );
}


function QuestionWidget({ questionIndex, question, totalQuestions, onSubmit }){
  const questionId = `question__${questionIndex}`
  return(
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width:'100%',
          height:'150px',
          objectFit:'cover'
        }}
        src="https://www.oficinadanet.com.br/imagens/post/15974/gif_1.gif"
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form 
          onSubmit={(infodoEvento)=>{
            infodoEvento.preventDefault()
            onSubmit()
          }}
        >
          {question.alternatives.map((alternative, index, alternativeIndex)=>{
            console.log("Pare de reclamar")
            const alternativeId = `alternative__${alternativeIndex}`
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  //  style={display: "none"}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />              
              {alternative}
              </Widget.Topic>
            )
          })}

  {/*         
          Serve para debugar o codigo
          <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}

          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  )
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = config.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = config.questions[questionIndex];

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={config.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
    </QuizBackground>
  );
}