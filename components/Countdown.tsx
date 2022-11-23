import {useEffect, useState} from 'react'
import {useTranslation} from 'next-i18next'

import {getRemainTime} from '@utils/countdown'

interface CountdownTimeProps {
  time: string
  label: string
}

interface CountdownProps {
  eventDate: Date
}

const CountdownTime: React.FC<CountdownTimeProps> = ({time, label}) => {
  return <div className='flex flex-col items-center w-16 gap-3 md:w-24 lg:w-32'>
    <div>{time}</div>
    <p className='text-xs md:text-lg lg:text-xl'>{label}</p>
  </div>
}

export const Countdown: React.FC<CountdownProps> = ({eventDate}) => {
  const [date, setDate] = useState(getRemainTime(eventDate))
  const {t} = useTranslation(['common'])

  useEffect(function () {
    if (date.remainDays !== '0' && date.remainHours !== '0' && date.remainMinutes !== '0' && date.remainSeconds !== '0') {
      const interval = setInterval(() => setDate(getRemainTime(eventDate)), 1000)

      return () => clearInterval(interval)
    }
  }, [eventDate, date])

  return <div className='flex items-center justify-center w-full h-auto text-2xl font-bold text-white md:h-32 md:text-4xl lg:text-6xl'>
    <CountdownTime label={t('days')} time={date.remainDays} />
    <div>:</div>
    <CountdownTime label={t('hours')} time={date.remainHours} />
    <div>:</div>
    <CountdownTime label={t('minutes')} time={date.remainMinutes} />
    <div>:</div>
    <CountdownTime label={t('seconds')} time={date.remainSeconds} />
  </div>
}
