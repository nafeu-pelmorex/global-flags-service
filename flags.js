const moment = require('moment');

const DATE_FORMAT = 'MMMM Do, YYYY @ h:ma';

const flags = [
    {
        key: 'A_001_feature_name',
        label: '[A-001] Feature description',
        env: [
            {
                name: 'development',
                enabled: true,
                stable: false,
                released: moment('Mar 19th, 2019 @ 9:00am', DATE_FORMAT).toISOString(),
            },
            {
                name: 'production',
                enabled: true,
                stable: false,
                released: moment('Mar 19th, 2019 @ 9:00am', DATE_FORMAT).toISOString(),
            },
        ],
        changes: [
            'Change A',
            'Change B',
            'Change C',
        ],
    },
    {
        key: 'A_002_feature_name',
        label: '[A-002] Feature description',
        env: [
            {
                name: 'development',
                enabled: true,
                stable: false,
                released: null
            },
            {
                name: 'production',
                enabled: true,
                stable: false,
                released: null
            },
        ],
        changes: [
            'Change A',
            'Change B',
            'Change C',
        ],
    },
];

module.exports = flags;
