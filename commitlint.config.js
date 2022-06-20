module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['Feat', 'Fix', 'Perf', 'Build', 'CI', 'Docs', 'Refactor', 'Style', 'Test']],
        'type-case': [2, 'always', 'sentence-case'],
        'subject-min-length': [2, 'always', 5],
        'subject-case': [2, 'always', 'sentence-case']
    },
};
