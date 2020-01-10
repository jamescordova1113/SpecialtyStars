export default (value) => {
  const specialty = new specialty(value)
  return specialty.toLocaleString(['en-US'], {})
}