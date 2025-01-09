module.exports = {
    branches: ['main'], // فرع العمل الأساسي
    repositoryUrl: 'https://github.com/EnMajed/conventional-commit.git',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@semantic-release/github',
      '@semantic-release/git',
      '@semantic-release/npm',




      

    ],
  };