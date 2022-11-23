export const getRemainTime = (event) => {
  const now = new Date()
  const remainTime = (event - now + 1000) / 1000

  if (remainTime < 0) {
    return {
      remainSeconds: '0',
      remainMinutes: '0',
      remainHours: '0',
      remainDays: '0',
      remainMonths: '0',
    }
  }

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
