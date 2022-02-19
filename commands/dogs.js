const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("강아지")
    .setDescription("랜덤으로 강아지 사진을 보여줍니다"),
  async execute(interaction) {
    await interaction.deferReply();
		const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());
		await interaction.editReply({ files: [message] });
  },
};