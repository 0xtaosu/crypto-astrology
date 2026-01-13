export default function LoadingAnimation() {
  return (
    <div className="w-full text-center p-8 border border-white bg-black">
      <div className="flex justify-center mb-4">
        <img src="/src/assets/yinyang.png" alt="Loading" className="w-16 h-16 animate-spin" />
      </div>

      <div className="font-mono text-yellow-400 text-xl blink">
        CALCULATING KARMA... PLEASE WAIT...
      </div>
      <div className="text-[#00FF00] text-xs mt-2">
        [====================] 50%
      </div>
    </div>
  )
}

