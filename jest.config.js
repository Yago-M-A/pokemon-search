module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/App.tsx',
    '!src/react-app-env.d.ts',
    '!src/index.tsx',
    '!src/**/stories.tsx',
    '!src/pages/**/*.ts(x)?',
    '!src/styles/**/*.ts',
    '!src/utils/*.ts',
    '!src/utils/apollo.ts',
    '!src/utils/apolloCache.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js',
    '^.+\\.svg$': 'jest-svg-transformer' //yarn add jest-svg-transformer
  }
}
