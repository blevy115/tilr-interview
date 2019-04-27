exports.seed = async (knex) => {
  await knex.batchInsert('questions', [
    { text: 'Are the Leafs ever going to win the Stanley Cup again?' , tag:'hocke'},
    { text: 'Is pineapple an appropriate pizza topping?', tag:'pizza' },
    { text: 'Is beer an appropriate breakfast drink?', tag:'beer'}
  ])
}
