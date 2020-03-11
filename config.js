module.exports = {
  questions: [
    {
      type: "input",
      name: "description",
      message: "Enter project description:",
      validate: input => {
        return /^[^"]+$/.test(input) && !input.endsWith("\\") || "Invalid description!";
      }
    }
  ],
  files: [
    ["package*.json", (answers, options) => ({
      name: options.directory,
      description: answers.description
    })],
    ["README.md", (answers, options) => ({
      name: options.directory,
      repo: options.repo
    })]
  ]
};
