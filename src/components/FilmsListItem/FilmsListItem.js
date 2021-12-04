import PropTypes from 'prop-types'
import s from './FilmsListItem.module.css'

export const FilmsListItem = ({ title, img, onClick, watched }) => {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <img src={img} alt="" onClick={() => onClick(img)} />
      <p className={s.status}>
        Watched: <span>{`${watched}`}</span>
      </p>
    </>
  )
}

FilmsListItem.propTypes = {
  watched: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
