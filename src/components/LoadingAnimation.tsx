export default function LoadingAnimation() {
  return (
    <div className="w-full max-w-md mx-auto p-12 text-center">
      <div className="inline-block relative w-16 h-16 mb-8">
        <div className="absolute inset-0 border-2 border-surfaceHover rounded-full"></div>
        <div className="absolute inset-0 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>

      <h3 className="font-serif text-2xl text-text-primary mb-2">
        Analyzing Star Charts
      </h3>
      <p className="text-text-muted text-sm animate-pulse">
        Deciphering on-chain destiny...
      </p>
    </div>
  )
}
