const { Client } = require('discord.js')


module.exports = {
    name: "ready",
    once: true,
    /**
    * @param {Client} client
    */
    execute(client) {
        console.log('Bot carregado com sucesso!')
        client.user.setActivity("Prefix: ...", {type:"WATCHING"})
    }
}