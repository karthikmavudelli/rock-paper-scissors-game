import {Button, ChoiceImage} from './StyledComponents'

const ChoiceButton = props => {
  const {choiceItemDetails, gameOver} = props
  const {id, image} = choiceItemDetails

  const onClickChoicebutton = () => {
    gameOver(id)
  }

  return (
    <Button
      data-testid={`${id.toLowerCase()}Button`}
      onClick={onClickChoicebutton}
    >
      <ChoiceImage src={image} alt={id} />
    </Button>
  )
}

export default ChoiceButton
