export default function LoadingAnimation() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan rounded-lg blur opacity-50 animate-pulse" />
        
        <div className="relative bg-void-light border-2 border-neon-purple rounded-lg p-12 backdrop-blur-sm">
          <div className="text-center space-y-6">
            {/* Spinning hexagram */}
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin" />
                <div className="absolute inset-4 border-4 border-neon-purple border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-chinese text-4xl text-neon-purple animate-pulse">
                    卦
                  </span>
                </div>
              </div>
            </div>

            {/* Loading text */}
            <div className="space-y-2">
              <p className="font-orbitron text-2xl font-bold text-neon-cyan animate-pulse">
                ANALYZING...
              </p>
              <div className="font-mono text-sm text-neon-cyan/60 space-y-1">
                <p className="animate-pulse" style={{ animationDelay: '0s' }}>
                  {'>'} 解析合约地址哈希值...
                </p>
                <p className="animate-pulse" style={{ animationDelay: '0.3s' }}>
                  {'>'} 计算紫微命盘...
                </p>
                <p className="animate-pulse" style={{ animationDelay: '0.6s' }}>
                  {'>'} 推演西方星盘...
                </p>
                <p className="animate-pulse" style={{ animationDelay: '0.9s' }}>
                  {'>'} 生成运势报告...
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative h-2 bg-void rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full animate-pulse" 
                   style={{ width: '100%', animation: 'pulse 1.5s ease-in-out infinite' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
