// Your updated component
export default function PlayButton() {
  return (
    <button className="relative w-40 h-40 rounded-full bg-blue-400 flex items-center justify-center z-20">
      {/* Ripple circles */}
      <div className="ripple-circle w-full h-full"></div>
      <div className="ripple-circle w-full h-full"></div>
      <div className="ripple-circle w-full h-full"></div>
      
      {/* Your existing button content */}
      <div className="w-28 h-28 rounded-full bg-blue-500 text-white flex items-center justify-center z-30">
        <div className="w-20 h-20 rounded-full bg-blue-800 text-white flex items-center justify-center z-40">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </div>
      </div>
    </button>
  );
}