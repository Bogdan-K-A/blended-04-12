import { Component } from 'react'
import { FilmList } from './components/FilmList/FilmList'
import { Modal } from './components/Modal/Modal'
import films from './data/films.json'
import { Mapper } from './helpers/Mapper'

class App extends Component {
  state = {
    films: [...Mapper(films)],
    img: '',
  }

  handelOpenModal = (img) => {
    this.setState({ img: img })
  }

  clearModal = () => {
    this.setState({ img: '' })
  }

  changeStatus = () => {
    // Домашнее задание, прослушать в видео
  }

  render() {
    const { films, img } = this.state

    return (
      <>
        <FilmList films={films} onClick={this.handelOpenModal} />

        {img && <Modal img={img} onClick={this.clearModal} />}
      </>
    )
  }
}

export default App
