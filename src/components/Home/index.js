import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './style'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        const topicsList = [
          {
            id: 'ARTS_AND_CULTURE',
            displayText: 'Arts and Culture',
          },
          {
            id: 'CAREER_AND_BUSINESS',
            displayText: 'Career and Business',
          },
          {
            id: 'EDUCATION_AND_LEARNING',
            displayText: 'Education and Learning',
          },
          {
            id: 'FASHION_AND_BEAUTY',
            displayText: 'Fashion and Learning',
          },
          {
            id: 'GAMES',
            displayText: 'Games',
          },
        ]

        const dn = topicsList.filter(
          e => e.id === topic || e.displayText === topic,
        )
        console.log(dn)
        return (
          <div>
            <Header />

            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {dn[0].displayText}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Link to="/register">
                  <Button onClick={onRegister}>Register</Button>
                </Link>

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
