export const Mapper = (films) => {
  return films.map(({ title, id, backdrop_path: img }) => ({
    title,
    id,
    img,
    watched: true,
  }))
}
