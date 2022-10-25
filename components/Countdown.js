import { useEffect, useState } from 'react'
import { getRemainTime } from '@utils/countdown'

function CountdownTime ({ time, label }) {
  return <div className='flex flex-col items-center w-24 gap-3 lg:w-32'>
    <div>{time}</div>
    <p className='text-lg md:text-xl'>{label}</p>
  </div>
}

export function Countdown ({ eventDate }) {
  const [date, setDate] = useState(getRemainTime(eventDate))
  useEffect(function () {
    const interval = setInterval(() => setDate(getRemainTime(eventDate), 1000))

    return () => clearInterval(interval)
  }, [eventDate])

  return <div className='flex items-center justify-center w-full h-32 text-5xl font-bold tracking-wider text-white'>
  <CountdownTime time={date.remainDays} label="días" />
  <div>:</div>
  <CountdownTime time={date.remainHours} label="horas" />
  <div>:</div>
  <CountdownTime time={date.remainMinutes} label="minutos" />
  <div>:</div>
  <CountdownTime time={date.remainSeconds} label="segundos" />
</div>
}
