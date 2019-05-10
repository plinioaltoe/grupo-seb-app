import React from 'react'
import { Link } from 'react-router-dom'
import personIcon from '../../assets/person_outline.png'
// import { logout } from '../../services/auth'
import { Container, Menu, Content } from './styles'

// import { str } from '../../resources/locales/ptBR/strings'

const Header = ({}) => (
  <Container>
    <Content>
      <h1 />
      <label id="counter">qtd</label>
    </Content>
    <Menu>
      <img src={personIcon} alt="profile" />
      <ul>
        <li>
          <Link onClick={() => {}} to="/" id="logout">
            Logout
          </Link>
        </li>
      </ul>
    </Menu>
  </Container>
)

export default Header
