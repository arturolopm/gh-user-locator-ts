const MainButton = ({
  text,
  onClick
}: {
  text: string
  onClick?: () => void
}) => {
  return (
    <button
      onClick={onClick}
      type='submit'
      className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
      {text}
    </button>
  )
}

export default MainButton
