const VideoDiscription = ({ mainMovie }) => {
    
  return (
    <div className='absolute top-56 pl-20 w-2/5'>
        <h1 className="text-6xl text-white text-shadow-lg/30">{mainMovie?.original_title}</h1>
        <p className='text-white text-lg text-shadow-lg py-5'>{mainMovie?.overview.length >200 ? mainMovie?.overview.slice(0, 200)+"...": mainMovie?.overview}</p>
        <div>
            <button className="w-40 h-12 text-xl bg-white text-black rounded-lg mr-4">▶&nbsp;Play</button>
            <button className="w-40 h-12 text-xl bg-gray-600 text-white rounded-lg bg-opacity-60">&nbsp;More Info</button>
        </div>
    </div>
  )
}

export default VideoDiscription