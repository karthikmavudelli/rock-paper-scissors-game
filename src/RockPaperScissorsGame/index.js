import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import ChoiceButton from '../ChoiceButton'

import {
  GameContainer,
  ScoreCardSection,
  ChoicesContainer,
  Heading,
  ScoreCard,
  ScoreText,
  Score,
  ChoiceButtonsContainer,
  PopupContainer,
  PopupImage,
  Trigger,
  GameResult,
  Image,
  ImageSection,
  Result,
  PlayAgain,
  CloseButton,
  YouOpponentChoice,
  YouOpponentText,
} from './StyledComponents'

class RockPaperScissorsGame extends Component {
  state = {
    score: 0,
    isGameOver: false,
    yourChoice: '',
    opponentChoice: '',
    result: '',
  }

  renderGame = () => {
    const {choicesList} = this.props
    return (
      <ChoiceButtonsContainer>
        {choicesList.map(eachItem => (
          <ChoiceButton
            key={eachItem.id}
            choiceItemDetails={eachItem}
            gameOver={this.gameOver}
          />
        ))}
      </ChoiceButtonsContainer>
    )
  }

  getResult = (yourChoice, opponentChoice) => {
    console.log(yourChoice)
    console.log(opponentChoice)
    if (yourChoice === opponentChoice) {
      this.setState({result: 'DRAW'})
    } else if (yourChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          result: 'WON',
          score: prevState.score + 1,
        }))
      } else if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          result: 'LOSE',
          score: prevState.score - 1,
        }))
      }
    } else if (yourChoice === 'SCISSORS') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          result: 'LOSE',
          score: prevState.score - 1,
        }))
      } else if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          result: 'WON',
          score: prevState.score + 1,
        }))
      }
    } else if (yourChoice === 'ROCK') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          result: 'LOSE',
          score: prevState.score - 1,
        }))
      } else if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          result: 'WON',
          score: prevState.score + 1,
        }))
      }
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameOver: false,
      yourChoice: '',
      opponentChoice: '',
      result: '',
    })
  }

  renderResult = () => {
    const {choicesList} = this.props
    const {yourChoice, opponentChoice, result} = this.state
    console.log(result)
    const yourChoiceImage = choicesList.filter(
      eachItem => eachItem.id === yourChoice,
    )
    const opponentChoiceImage = choicesList.filter(
      eachItem => eachItem.id === opponentChoice,
    )
    return (
      <GameResult>
        <ImageSection>
          <YouOpponentChoice>
            <YouOpponentText>YOU</YouOpponentText>
            <Image src={yourChoiceImage[0].image} alt="your choice" />
          </YouOpponentChoice>
          <YouOpponentChoice>
            <YouOpponentText>OPPONENT</YouOpponentText>
            <Image src={opponentChoiceImage[0].image} alt="opponent choice" />
          </YouOpponentChoice>
        </ImageSection>
        <Result>{result === 'DRAW' ? 'IT IS DRAW' : `YOU ${result}`}</Result>
        <PlayAgain type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgain>
      </GameResult>
    )
  }

  gameOver = id => {
    const {choicesList} = this.props
    const randomNumber = Math.ceil(Math.random() * 100) % 3
    const opponentChoice = choicesList[randomNumber].id
    this.getResult(id, opponentChoice)
    this.setState({
      yourChoice: id,
      isGameOver: true,
      opponentChoice,
    })
  }

  render() {
    const {score, isGameOver} = this.state
    return (
      <GameContainer>
        <ScoreCardSection>
          <ChoicesContainer>
            <Heading>
              Rock <br />
              Paper <br />
              Scissors
            </Heading>
          </ChoicesContainer>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreCard>
        </ScoreCardSection>
        {isGameOver ? this.renderResult() : this.renderGame()}
        <Popup modal trigger={<Trigger>Rules</Trigger>} position="top right">
          {close => (
            <PopupContainer>
              <CloseButton onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>

              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </GameContainer>
    )
  }
}
export default RockPaperScissorsGame
