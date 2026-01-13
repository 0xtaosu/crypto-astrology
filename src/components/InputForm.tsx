import { useState } from 'react'
import { TokenInput } from '../types'
import { translations } from '../lib/translations'

interface InputFormProps {
  onSubmit: (input: TokenInput) => void
  t: typeof translations.en
}

export default function InputForm({ onSubmit, t }: InputFormProps) {
  const [name, setName] = useState('')
  const [contractAddress, setContractAddress] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !contractAddress || !date || !time) {
      alert(t.form_error)
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
    <div className="border-2 border-white p-1 bg-black w-full max-w-lg mx-auto">
      <div className="bg-[#000088] text-white px-2 py-1 font-bold mb-4 flex justify-between items-center">
        <span>{t.form_title}</span>
        <span className="cursor-pointer">X</span>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-4 font-mono text-sm">
        <div className="flex flex-col gap-1">
          <label className="text-[#00FF00]">
            {t.form_name_label}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="retro-input p-1"
            placeholder={t.form_name_ph}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[#00FF00]">
            {t.form_addr_label}
          </label>
          <input
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            className="retro-input p-1"
            placeholder="0x..."
            required
          />
        </div>

        <fieldset className="border border-white p-2">
          <legend className="text-[#FFFF00] px-2">{t.form_genesis_legend}</legend>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[#00FF00]">{t.form_date}</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="retro-input p-1"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#00FF00]">{t.form_time}</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="retro-input p-1"
                required
              />
            </div>
          </div>
        </fieldset>

        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            className="retro-button px-8 py-2 font-bold text-lg active:translate-y-1"
          >
            {t.form_submit}
          </button>
        </div>
      </form>
    </div>
  )
}
