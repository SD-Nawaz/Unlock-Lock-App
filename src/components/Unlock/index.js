import {useState} from 'react'

import {UnlockContainer, Paragraph,Button} from './styledComponents'

const Unlock = () => {
  const [toggle, setToggle] = useState(false)

  const onClickToggle = () => {
    setToggle(prevState => !prevState)
  }

  const imageUrl = toggle
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altName = toggle ? 'unlock' : 'lock'

  const paragraph = toggle ? 'Your Device is Unlocked' : 'Your Device is Locked'

  const buttonText = toggle ? 'Lock' : 'Unlock'

  return (
    <UnlockContainer>
      <img src={imageUrl} alt={altName} />
      <Paragraph>{paragraph}</Paragraph>
      <Button type="button" onClick={onClickToggle}>
        {buttonText}
      </Button>
    </UnlockContainer>
  )
}

export default Unlock
