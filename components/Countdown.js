import { useEffect, useState } from 'react'
import { getRemainTime } from '@utils/countdown'

function CountdownTime ({ time, label }) {
  return <div className='flex flex-col w-16 items-center gap-3 md:w-24 lg:w-32'>
    <div>{time}</div>
    <p className='text-xs md:text-lg lg:text-xl'>{label}</p>
  </div>
}

export function Countdown ({ eventDate }) {
  const [date, setDate] = useState(getRemainTime(eventDate))
  useEffect(function () {
    const interval = setInterval(() => setDate(getRemainTime(eventDate), 1000))

    return () => clearInterval(interval)
  }, [eventDate])

  return <div className='flex items-center justify-center w-full h-auto md:h-32 text-2xl md:text-4xl lg:text-6xl font-bold text-white'>
    <CountdownTime time={date.remainDays} label="días" />
    <div>:</div>
    <CountdownTime time={date.remainHours} label="horas" />
    <div>:</div>
    <CountdownTime time={date.remainMinutes} label="minutos" />
    <div>:</div>
    <CountdownTime time={date.remainSeconds} label="segundos" />
  </div>
}
