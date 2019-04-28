exports.seed = async (knex) => {
  await knex.batchInsert('users', [
    {name:'guest', password:'password'},
    {name:'guest2', password:'password2'}
  ])
}
