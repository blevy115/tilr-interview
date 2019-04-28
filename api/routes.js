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

router.post('/users', async (req, res) => {
  const name = req.body.name
  const password = req.body.password
  try {
    const user = await knex('users').insert({name, password}, '*')
    res.json(user)
  } catch (err) {
    res.status(500)
  }
})

router.get('/users', async (req, res) => {
  try {
    const users = await knex.select().table('users')
    res.json(users)
  } catch (err) {
    res.status(500)
  }
})

router.post('/answers', async (req, res) => {
  const user_id = req.body.user_id
  const question_id = req.body.question_id
  const is_yes = req.body.is_yes
  try {
    const answer = await knex('answers').insert({user_id, question_id, is_yes}, '*')
    res.json(answer)
  } catch(err){
    console.log(err);
  }
})

router.get('/answers', async (req, res) => {
  const user_id = req.query.user_id
  try {
    const answers = await knex.select().table('answers').where({user_id})
    res.json(answers)
  } catch(err) {
    console.log(err);
  }
})

module.exports = router
