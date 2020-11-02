module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/app/**/*.ts'],
    coverageReporters: ['json', 'lcov', 'text'],
    roots: ['<rootDir>/tests'],
    reporters: ['jest-tap-reporter'],
    transform: { '^.+\\.tsx?$': 'ts-jest'},
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: './coverage'
}