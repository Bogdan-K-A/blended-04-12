import PropTypes from 'prop-types'
import s from './FilmList.module.css'
import { FilmsListItem } from '../FilmsListItem/FilmsListItem'

export const FilmList = ({ films, onClick }) => {
  return (
    <ul className={s.filmList}>
      {films.map(({ id, title, img, watched }) => {
        return (
          <li key={id}>
            <FilmsListItem
              onClick={onClick}
              title={title}
              img={`https://image.tmdb.org/t/p/w400/${img}`}
              watched={watched}
            />
          </li>
        )
      })}
    </ul>
  )
}

FilmList.propTypes = {
  onClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
}
