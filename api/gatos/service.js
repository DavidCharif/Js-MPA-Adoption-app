
export const getData = async url => {
  // Llamar al servicio
  const res = await fetch(url)
  const data = await res.json()
  console.log(data);
  return data
}
