export function sortedByDate (items) {
  const sortedItems = items.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return sortedItems
}
