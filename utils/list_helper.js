const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 1) return blogs[0].likes

  let sum = 0

  //   for (let i = 0; i < blogs.length; i++) {
  //     sum += blogs[i].likes
  //   }

    blogs.forEach((a) => (sum += a.likes))

    
  return blogs.length === 0 ? 0 : sum
}

module.exports = {
  dummy,
  totalLikes,
}
