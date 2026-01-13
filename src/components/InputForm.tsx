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
      alert('Please fill all required fields')
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
    <div className="w-full bg-surface/50 backdrop-blur-sm border border-surfaceHover rounded-xl p-8 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">
              Token Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background border border-surfaceHover rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none placeholder:text-text-muted/50"
              placeholder="e.g. Bitcoin"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-secondary mb-1.5">
              Contract Address
            </label>
            <input
              type="text"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              className="w-full bg-background border border-surfaceHover rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none font-mono text-sm placeholder:text-text-muted/50"
              placeholder="0x..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Genesis Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-background border border-surfaceHover rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">
                Genesis Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-background border border-surfaceHover rounded-lg px-4 py-3 text-text-primary focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3.5 rounded-lg transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-primary/20"
        >
          Reveal Identity
        </button>
      </form>

      <p className="text-center mt-6 text-xs text-text-muted tracking-wide">
        FOR ENTERTAINMENT PURPOSES ONLY
      </p>
    </div>
  )
}
