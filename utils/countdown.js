export const getRemainTime = eventTime => {
  const now = new Date()
  const event = new Date(eventTime)
  const remainTime = (event - now + 1000) / 1000
  const remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)
  const remainMinutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2)
  const remainHours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2)
  const remainDays = ('0' + Math.floor(remainTime / 3600 / 24)).slice(-2)
  const remainMonths = event.getMonth() - now.getMonth()

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainMonths: '0' + remainMonths,
  }
}
