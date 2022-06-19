const filterHobby = (hobbyUser, hobbyList) => {
  let resFilter = []
  hobbyUser?.map(data => {
    resFilter.push(data.hobby)
  })
  let resFilter2 = []
  hobbyList?.map(data => resFilter2.push(data.hobby))

  const filter = resFilter.filter(data => resFilter2.includes(data))
  return filter
}

export default filterHobby
