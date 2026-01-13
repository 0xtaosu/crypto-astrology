import { useState } from 'react'
import { TokenInput } from '../types'

interface InputFormProps {
  onSubmit: (input: TokenInput) => void
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [name, setName] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !contractAddress || !date || !time) {
      alert('请填写所有必填字段 / Please fill all required fields')
      return
    }

    const genesisDate = new Date(`${date}T${time}`)
    
    onSubmit({
      name,
      contractAddress,
      genesisDate,
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        {/* Glowing border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan rounded-lg blur opacity-30 animate-glow" />
        
        <form 
          onSubmit={handleSubmit}
          className="relative bg-void-light border-2 border-neon-cyan rounded-lg p-8 backdrop-blur-sm"
        >
          <div className="space-y-6">
            {/* Token Name */}
            <div>
              <label className="block text-neon-cyan font-mono text-sm mb-2">
                {'>'} TOKEN NAME <span className="text-neon-red">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-void border border-neon-cyan/50 rounded px-4 py-3 text-neon-cyan font-mono focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                placeholder="Enter token name..."
                required
              />
            </div>

            {/* Contract Address */}
            <div>
              <label className="block text-neon-cyan font-mono text-sm mb-2">
                {'>'} CONTRACT ADDRESS <span className="text-neon-red">*</span>
              </label>
              <input
                type="text"
                value={contractAddress}
                onChange={(e) => setContractAddress(e.target.value)}
                className="w-full bg-void border border-neon-cyan/50 rounded px-4 py-3 text-neon-cyan font-mono text-xs focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                placeholder="0x..."
                required
              />
            </div>

            {/* Genesis Date */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-neon-cyan font-mono text-sm mb-2">
                  {'>'} GENESIS DATE <span className="text-neon-red">*</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-void border border-neon-cyan/50 rounded px-4 py-3 text-neon-cyan font-mono focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                  required
                />
              </div>
              
              <div>
                <label className="block text-neon-cyan font-mono text-sm mb-2">
                  {'>'} TIME <span className="text-neon-red">*</span>
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-void border border-neon-cyan/50 rounded px-4 py-3 text-neon-cyan font-mono focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-void border-2 border-neon-cyan rounded-lg px-8 py-4 font-orbitron text-lg font-bold text-neon-cyan group-hover:text-neon-purple transition-colors">
                <span className="mr-2">启动占卜</span>
                <span className="text-sm">INITIATE DIVINATION</span>
              </div>
            </button>
          </div>

          {/* Terminal decoration */}
          <div className="absolute top-2 right-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-neon-red" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-neon-cyan" />
          </div>
        </form>
      </div>

      {/* Info text */}
      <p className="text-center mt-6 text-neon-cyan/40 font-mono text-xs">
        [ 基于链上时空数据的赛博玄学分析 · FOR ENTERTAINMENT PURPOSES ONLY ]
      </p>
    </div>
  )
}
