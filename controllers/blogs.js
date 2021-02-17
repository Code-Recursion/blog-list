const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

blogsRouter.get('/', (request, response, next) => {
  Blog.find({})
    .then((blogs) => {
      response.json(blogs)
    })
    .catch((error) => next(error))
})

blogsRouter.post('/', (request, response, next) => {
  const body = request.body
  console.log('body', body)
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  })

  blog
    .save()
    .then((result) => {
      response.json(result).end()
    })
    .catch((error) => next(error))
})

blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then((blog) => {
      if (blog) {
        response.json(blog).end()
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

blogsRouter.delete('/:id', (request, response, next) => {
  Blog.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

module.exports = blogsRouter