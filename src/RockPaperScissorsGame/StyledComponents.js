import styled from 'styled-components'

export const GameContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  padding-top: 20px;
  padding: 10px;
`
export const ScoreCardSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #ffffff solid;
  width: 90%;
  padding: 5px;
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
`
export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 25px;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 25px;
`
export const Score = styled(ScoreText)`
  font-size: 30px;
  font-family: 'Roboto';
`
export const ChoiceButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 70%;
  margin-top: 30px;
`
export const PopupContainer = styled.div`
  background-color: white;
  width: 90%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PopupImage = styled.img`
  width: 90%;
`
export const Trigger = styled.button`
  border-width: 0px;
  background-color: #ffffff;
  padding: 10px;
  font-family: 'Bree serif';
  border-radius: 5px;
  align-self: flex-end;
`
export const GameResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  width: 20%;
`
export const ImageSection = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Result = styled.p`
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 30px;
`

export const YouOpponentChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const YouOpponentText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
`

export const PlayAgain = styled.button`
  background-color: #ffffff;
  border-width: 0px;
  padding: 10px;
  font-family: 'Roboto';
  color: #223a5f;
  border-radius: 5px;
  font-size: 20px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`
