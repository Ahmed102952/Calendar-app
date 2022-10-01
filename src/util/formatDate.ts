export const formatDate = (date:string): string => {
  const arr = date.split("-").reverse()
  const output = arr.join("-")
  
  return output
}