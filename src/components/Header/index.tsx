import { useNavigate } from 'react-router-dom'
import Pokebola from '../../assets/images/Pokebola.svg'
import * as S from './styles'

const Header = () => {
  const navigate = useNavigate()
  const handleGoHome = () => {
    navigate('/')
  }
  return (
    <S.Wrapper>
      <img src={Pokebola} onClick={() => handleGoHome()} alt="Logo Pokebola" />
    </S.Wrapper>
  )
}

export default Header
