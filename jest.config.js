module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "collectCoverage": true,
    "coverageReporters": ["json", "html"],
    "collectCoverageFrom": [
        "**/*.{ts,tsx}",
        "!**/node_modules/**"
      ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
};