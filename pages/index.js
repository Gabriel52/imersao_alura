import styled from 'styled-components'
import config from "../config.json"
import Widget from "../src/components/Widget"
import Footer from "../src/components/Footer"
import GitHubCorner from "../src/components/GitHubCorner"
import QuizBackground from "../src/components/QuizBackground"


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
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
`;


export default function Home() {
  return (
    <>
      <QuizBackground backgroundImage={config.bg} >
          <QuizContainer>
            <Widget>
              <Widget.Header>
                <h1>The legend of zelda</h1>
              </Widget.Header>
              <Widget.Content>
                <p>Loren ipsun...</p>
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
            <Footer/>
          </QuizContainer>
          <GitHubCorner projectUrl = "https:github.com/gabriel52"/>
      </QuizBackground>
    </>
  ) 
}
