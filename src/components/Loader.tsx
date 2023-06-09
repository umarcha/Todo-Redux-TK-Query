import spinner from "../assets/spinner-solid.svg"

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <img src={spinner} alt="" className='w-16 h-16 animate-spin-slow' />
    </div>
  )
}

export default Loader