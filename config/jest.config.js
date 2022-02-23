module.exports = {
    rootDir: '../',
    setupFilesAfterEnv: ["./config/jest.setup.js"],
    testEnvironment: './config/custom-jest-environment.js',
    transform: {
        '\\.js$': ['babel-jest', { configFile: './config/.babelrc' }]
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
    verbose: true,
    collectCoverage: true,
    coveragePathIgnorePatterns: [ "<rootDir>/config/test-utils.js" ]
};