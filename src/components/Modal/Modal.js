import s from './Modal.module.css'

export const Modal = ({ img, onClick }) => {
  return (
    <div className={s.modal} onClick={onClick}>
      <img src={`https://image.tmdb.org/t/p/w780/${img}`} alt="" width="780" />
    </div>
  )
}
