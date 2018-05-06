const ignores = ['/node_modules/', '/fixtures/', '__mocks__'];

const testDir = ['src/withClickOutside/**/*.js'];

module.exports = {
  collectCoverageFrom: [...testDir],
  testMatch: ['**/__tests__/**/*.js'],
  testPathIgnorePatterns: [...ignores],
  coveragePathIgnorePatterns: [...ignores, 'src/withClickOutside/**/*.js$'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  coverageDirectory: './coverage',
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
