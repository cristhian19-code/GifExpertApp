export const GridItem = ({url,title}) => {
  return (
    <div className="w-72 shadow-md rounded-lg">
      <img className="w-72 h-60 rounded-lg" src={url} alt="" />
      <p className="px-2 py-3 text-center text-lg font-bold">{ title }</p>
    </div>
  )
}
