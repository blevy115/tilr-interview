const express = require('express')
const knex = require('knex')(require('./knexfile'))

const router = express.Router()

router.get('/questions', async (req, res) => {
  try {
    const questions = await knex.select().table('questions')
    res.json(questions)
  } catch (err) {
    res.status(500)
  }
})

router.post('/questions', async (req, res) => {
  const text = req.body.text;
  const tag= req.body.tag;
  try {
    const question = await knex('questions').insert({ text, tag }, '*')
    res.json(question)
  } catch (err) {
    res.status(text ? 500 : 400)
  }
})

router.post('/answers', async (req, res) => {
  debugger
})

module.exports = router
