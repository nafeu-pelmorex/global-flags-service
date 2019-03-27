const _ = require('lodash');
const moment = require('moment');

const DATE_FORMAT = 'MMMM Do, YYYY @ h:ma';

const flags = [
    {
        key: 'en_382_audience_inventory_prediction',
        label: '[EN-382] Add Audience Segments dimension to Inventory Prediction API',
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
            'Tactics Ad Form',
            'Ad Form',
            'Ad Presets Page',
            'Inventory Prediction Page',
            'Overview Page'
        ],
    },
    {
        key: 'en_394_new_poi_categories',
        label: '[EN-394] POI Categories are being recategorized to match PDS Categories',
        env: [
            {
                name: 'development',
                enabled: true,
                stable: false,
                released: moment('Mar 5th, 2019 @ 11:00am', DATE_FORMAT).toISOString(),
            },
            {
                name: 'production',
                enabled: true,
                stable: false,
                released: moment('Mar 5th, 2019 @ 11:00am', DATE_FORMAT).toISOString(),
            },
        ],
        changes: [
            'Ad Form Points of Interests module'
        ],
    },
    {
        key: 'en_430_analytics_permormance_redesign',
        label: '[EN-430] Analytics metrics dedesign',
        env: [
            {
                name: 'development',
                enabled: false,
                stable: false,
                released: null,
            },
            {
                name: 'production',
                enabled: false,
                stable: false,
                released: null,
            },
        ],
        changes: [
            'Analytics'
        ],
    },
    {
        key: 'en_481_ad_setup_layout_redesign',
        label: '[EN-481] Ad Setup Layout Redesign',
        env: [
            {
                name: 'development',
                enabled: false,
                stable: false,
                released: null,
            },
            {
                name: 'production',
                enabled: false,
                stable: false,
                released: null,
            },
        ],
        changes: [
            'Ad Form'
        ],
    },
    {
        key: 'en_495_billings_name_changes',
        label: '[EN-495] Spend/Revenue naming change',
        env: [
            {
                name: 'development',
                enabled: false,
                stable: false,
                released: null,
            },
            {
                name: 'production',
                enabled: false,
                stable: false,
                released: null,
            },
        ],
        changes: [
            'dashbord',
            'campaign overview',
            'real-time progress',
            'performance reports',
            'account',
            'stormman',
            'analytics'
        ],
    },
];

module.exports = flags;
