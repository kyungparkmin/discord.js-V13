const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("가위바위보")
    .setDescription("가위바위보 게임")
    .addUserOption(option => option.setName('가위').setDescription('가위'))
    .addUserOption(option => option.setName('바위').setDescription('바위'))
    .addUserOption(option => option.setName('보').setDescription('보')),
  async execute(interaction) {
    await interaction.reply(``);
  },
};