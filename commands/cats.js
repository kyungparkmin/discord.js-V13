const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("고양이")
    .setDescription("랜덤으로 고양이 사진을 보여줍니다"),
  async execute(interaction) {
    await interaction.deferReply();
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		await interaction.editReply({ files: [file] });
  },
};