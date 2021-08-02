export const API_ROOT_URL = 'https://api.covid19india.org/v5/min';

export const LOCALE_SHORTHANDS = {
  english: 'en-US',
  hindi: 'hi',
  telugu: 'te',
  kannada: 'en-US',
  gujarati: 'gu',
  marathi: 'en-US',
  tamil: 'ta',
  bengali: 'bn',
  punjabi: 'en-US',
  malayalam: 'en-US',
  odiya: 'en-US',
};

export const STATISTIC_DEFINITIONS = {
  total: {
    displayName: 'Cases registered',
    ts_displayName: 'Cases Registered (Year on Year)',
    table_displayName: 'Cases registered',
    color: '#646f6f', //'#ff073a', // 'd8cfc7#',
    format: 'int',
    options: {key: 'total'},
    x_label: 'Case registration year',
  },
  pending: {
    displayName: 'Pending cases',
    ts_displayName: 'Percentage of cases pending from each year',
    table_displayName: 'Pending cases',
    color: '#646f6f', //'#28a745', //#007bff',
    format: 'int',
    options: {key: 'pending'},
    hideDelta: true,
  },
  disposed: {
    displayName: 'Disposed cases',
    ts_displayName: 'Cases disposed (percent) till date',
    table_displayName: 'Disposed cases',
    color: '#646f6f', //'#f9b950', //#28a745',
    format: 'int',
    options: {key: 'disposed'},
  },
  judgement: {
    displayName: 'Cases with judgement',
    ts_displayName: 'cases_with_judgement',
    table_displayName: 'Cases with judgement',
    color: '#646f6f', //'#bd4227', //#6c757d',
    format: 'int',
    options: {key: 'judgement'},
  },
  pending_agg: {
    displayName: 'pending_cumulative',
    ts_displayName: 'Overall case pendency',
    table_displayName: 'Cases pending (end of year)',
    color: '#646f6f',
    format: 'int',
    options: {key: 'pending_agg'},
    x_label: 'Year'
  },
  pending_before: {
    displayName: 'pending_before',
    ts_displayName: 'earlier_cases',
    table_displayName: 'Cases pending till date ',
    color: '#646f6f',
    format: 'int',
    options: {key: 'pending_before'},
  },
  disposed_yearly: {
    displayName: 'disposed_yearly',
    ts_displayName: 'Cases Disposed (Year on Year)',
    table_displayName: 'Cases disposed this year',
    color: '#646f6f',
    format: 'int',
    options: {key: 'disposed_yearly'},
    x_label: 'Case disposal year',
  },
  pendency: {
    displayName: 'pendency',
    ts_displayName: 'Time taken (in years) by the courts to dispose a case',
    table_displayName: 'pendency',
    color: '#646f6f', //'#ff073a',
    format: 'int',
    options: {key: 'pendency'},
  },
  act: {
    displayName: 'related acts',
    ts_displayName: 'related acts',
    table_displayName: 'related acts',
    color: '#646f6f', //'#ff073a',
    format: 'int',
    options: {key: 'act'},
  },
  section: {
    displayName: 'section',
    ts_displayName: 'section',
    table_displayName: 'section',
    color: '#646f6f', //'#ff073a',
    format: 'int',
    options: {key: 'section'},
  },
  other: {
    displayName: 'other',
    color: '#fd7e14',
    format: 'int',
    options: {key: 'other'},
  },
  intpen: {
    displayName: 'Internet Penetration(per million)',
    ts_displayName: 'Internet Penetration(per million)',
    table_displayName: 'internet penetration(per million)',
    color: '#646f6f', //'#ff073a',
    format: 'int',
    options: {key: 'intpen'},
  }, 
  tested: {
    displayName: 'tested',
    color: '#4b1eaa',
    format: 'short',
    options: {key: 'tested'},
  },
  testedStates: {
    displayName: 'sum of state tests',
    color: '#fd7e14',
    format: 'short',
    options: {key: 'tested_states'},
  },
  positives: {
    displayName: 'positive samples',
    color: '#fd7e14',
    format: 'short',
    options: {key: 'positives'},
  },
  activeRatio: {
    displayName: 'active ratio',
    color: '#fd7e14',
    format: '%',
    options: {
      key: 'active',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  recoveryRatio: {
    displayName: 'recovery ratio',
    color: '#fd7e14',
    format: '%',
    options: {
      key: 'recovered',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  cfr: {
    displayName: 'case fatality ratio',
    color: '#fd7e14',
    format: '%',
    options: {
      key: 'deceased',
      normalizeByKey: 'confirmed',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  tpr: {
    displayName: 'test positivity ratio',
    color: '#fd7e14',
    format: '%',
    options: {
      key: 'positives',
      normalizeByKey: 'tested',
      multiplyFactor: 100,
    },
    hideDelta: true,
  },
  population: {
    displayName: 'population',
    color: '#fd7e14',
    format: 'short',
    options: {key: 'population'},
    hideDelta: true,
  },
};

const definitions = Object.keys(STATISTIC_DEFINITIONS).reduce(
  (acc, statistic) => {
    const {options, ...config} = STATISTIC_DEFINITIONS[statistic];
    acc.options[statistic] = options;
    acc.configs[statistic] = config;
    return acc;
  },
  {options: {}, configs: {}}
);

export const STATISTIC_CONFIGS = definitions.configs;
export const STATISTIC_OPTIONS = definitions.options;

export const PER_MILLION_OPTIONS = {
  normalizeByKey: 'population',
  multiplyFactor: 1e6,
};

export const NAN_STATISTICS = ['tested', 'testedStates', 'tpr', 'population'];

export const PRIMARY_STATISTICS = [
  'total',
  'pending',
  'disposed',
  'judgement',
];

export const TABLE_STATISTICS = [...PRIMARY_STATISTICS];

export const TABLE_STATISTICS_EXPANDED = Object.keys(
  STATISTIC_DEFINITIONS
).filter((statistic) => !['positives', 'testedStates'].includes(statistic));

export const TIMESERIES_STATISTICS = [
  'total',
  'disposed_yearly',
  'pending_agg',
  //'pending',
  //'disposed',
];

export const TRENDBAR_STATISTICS = [
  //'total',
  //'disposed_yearly',
  //'pending_agg',
  'pending',
  //'disposed',
];

export const PENDENCY_STATISTICS = [
  'pendency',
];


export const RELACTS_STATISTICS = [
  'act',
];

export const SECTIONS_STATISTICS = [
  'section',
];

export const TIMESERIES_TABLE_STATISTICS = [
  'total',
  'pending_before',
  'disposed_yearly',
  'pending_agg',
];

export const INTPEN_STATISTICS = [
  'intpen',
];


export const UPDATES_COUNT = 5;

export const DISTRICT_TABLE_COUNT = 30;

export const D3_TRANSITION_DURATION = 300;

export const MINIGRAPH_LOOKBACK_DAYS = 20;

export const UNASSIGNED_STATE_CODE = 'UN';

export const UNKNOWN_DISTRICT_KEY = 'Unknown';

export const INDIA_ISO_SUFFIX = 'T00:00:00+05:30';

export const SPRING_CONFIG_NUMBERS = {clamp: true, precision: 1};

export const TIMESERIES_CHART_TYPES = {
  total: 'Cumulative',
  delta: 'Daily',
};

export const TIMESERIES_LOOKBACKS = {
  BEGINNING: 'Beginning',
  MONTH: '1 Month',
  TWO_WEEKS: '2 Weeks',
};

export const MAP_VIZS = {
  CHOROPLETH: 0,
  BUBBLES: 1,
};

export const MAP_VIEWS = {
  STATES: 0,
  DISTRICTS: 1,
};

export const MAP_TYPES = {
  COUNTRY: 0,
  STATE: 1,
};

export const MAPS_DIR =
  process.env.NODE_ENV === 'production' ? '/mini_maps' : '/projected_maps';

export const MAP_META = {
  AP: {
    geoDataFile: `${MAPS_DIR}/andhrapradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  AR: {
    geoDataFile: `${MAPS_DIR}/arunachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  AS: {
    geoDataFile: `${MAPS_DIR}/assam.json`,
    mapType: MAP_TYPES.STATE,
  },
  BR: {
    geoDataFile: `${MAPS_DIR}/bihar.json`,
    mapType: MAP_TYPES.STATE,
  },
  CT: {
    geoDataFile: `${MAPS_DIR}/chhattisgarh.json`,
    mapType: MAP_TYPES.STATE,
  },
  GA: {
    geoDataFile: `${MAPS_DIR}/goa.json`,
    mapType: MAP_TYPES.STATE,
  },
  GJ: {
    geoDataFile: `${MAPS_DIR}/gujarat.json`,
    mapType: MAP_TYPES.STATE,
  },
  HR: {
    geoDataFile: `${MAPS_DIR}/haryana.json`,
    mapType: MAP_TYPES.STATE,
  },
  HP: {
    geoDataFile: `${MAPS_DIR}/himachalpradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  JK: {
    geoDataFile: `${MAPS_DIR}/jammukashmir.json`,
    mapType: MAP_TYPES.STATE,
  },
  JH: {
    geoDataFile: `${MAPS_DIR}/jharkhand.json`,
    mapType: MAP_TYPES.STATE,
  },
  KA: {
    geoDataFile: `${MAPS_DIR}/karnataka.json`,
    mapType: MAP_TYPES.STATE,
  },
  KL: {
    geoDataFile: `${MAPS_DIR}/kerala.json`,
    mapType: MAP_TYPES.STATE,
  },
  MP: {
    geoDataFile: `${MAPS_DIR}/madhyapradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  MH: {
    geoDataFile: `${MAPS_DIR}/maharashtra.json`,
    mapType: MAP_TYPES.STATE,
  },
  MN: {
    geoDataFile: `${MAPS_DIR}/manipur.json`,
    mapType: MAP_TYPES.STATE,
  },
  ML: {
    geoDataFile: `${MAPS_DIR}/meghalaya.json`,
    mapType: MAP_TYPES.STATE,
  },
  MZ: {
    geoDataFile: `${MAPS_DIR}/mizoram.json`,
    mapType: MAP_TYPES.STATE,
  },
  NL: {
    geoDataFile: `${MAPS_DIR}/nagaland.json`,
    mapType: MAP_TYPES.STATE,
  },
  OR: {
    geoDataFile: `${MAPS_DIR}/odisha.json`,
    mapType: MAP_TYPES.STATE,
  },
  PB: {
    geoDataFile: `${MAPS_DIR}/punjab.json`,
    mapType: MAP_TYPES.STATE,
  },
  RJ: {
    geoDataFile: `${MAPS_DIR}/rajasthan.json`,
    mapType: MAP_TYPES.STATE,
  },
  SK: {
    geoDataFile: `${MAPS_DIR}/sikkim.json`,
    mapType: MAP_TYPES.STATE,
  },
  TN: {
    geoDataFile: `${MAPS_DIR}/tamilnadu.json`,
    mapType: MAP_TYPES.STATE,
  },
  TG: {
    geoDataFile: `${MAPS_DIR}/telangana.json`,
    mapType: MAP_TYPES.STATE,
  },
  TR: {
    geoDataFile: `${MAPS_DIR}/tripura.json`,
    mapType: MAP_TYPES.STATE,
  },
  UT: {
    geoDataFile: `${MAPS_DIR}/uttarakhand.json`,
    mapType: MAP_TYPES.STATE,
  },
  UP: {
    geoDataFile: `${MAPS_DIR}/uttarpradesh.json`,
    mapType: MAP_TYPES.STATE,
  },
  WB: {
    geoDataFile: `${MAPS_DIR}/westbengal.json`,
    mapType: MAP_TYPES.STATE,
  },
  AN: {
    geoDataFile: `${MAPS_DIR}/andamannicobarislands.json`,
    mapType: MAP_TYPES.STATE,
  },
  CH: {
    geoDataFile: `${MAPS_DIR}/chandigarh.json`,
    mapType: MAP_TYPES.STATE,
  },
  DN: {
    geoDataFile: `${MAPS_DIR}/dnh-and-dd.json`,
    mapType: MAP_TYPES.STATE,
  },
  DL: {
    geoDataFile: `${MAPS_DIR}/delhi.json`,
    mapType: MAP_TYPES.STATE,
  },
  LA: {
    geoDataFile: `${MAPS_DIR}/ladakh.json`,
    mapType: MAP_TYPES.STATE,
  },
  LD: {
    geoDataFile: `${MAPS_DIR}/lakshadweep.json`,
    mapType: MAP_TYPES.STATE,
  },
  PY: {
    geoDataFile: `${MAPS_DIR}/puducherry.json`,
    mapType: MAP_TYPES.STATE,
  },
  TT: {
    geoDataFile: `${MAPS_DIR}/india.json`,
    mapType: MAP_TYPES.COUNTRY,
  },
};

export const MAP_LEGEND_HEIGHT = 50;

export const STATE_NAMES = {
  AP: 'Andhra Pradesh',
  AR: 'Arunachal Pradesh',
  AS: 'Assam',
  BR: 'Bihar',
  CT: 'Chhattisgarh',
  GA: 'Goa',
  GJ: 'Gujarat',
  HR: 'Haryana',
  HP: 'Himachal Pradesh',
  JH: 'Jharkhand',
  KA: 'Karnataka',
  KL: 'Kerala',
  MP: 'Madhya Pradesh',
  MH: 'Maharashtra',
  MN: 'Manipur',
  ML: 'Meghalaya',
  MZ: 'Mizoram',
  NL: 'Nagaland',
  OR: 'Odisha',
  PB: 'Punjab',
  RJ: 'Rajasthan',
  SK: 'Sikkim',
  TN: 'Tamil Nadu',
  TG: 'Telangana',
  TR: 'Tripura',
  UT: 'Uttarakhand',
  UP: 'Uttar Pradesh',
  WB: 'West Bengal',
  AN: 'Andaman and Nicobar Islands',
  CH: 'Chandigarh',
  DN: 'Dadra and Nagar Haveli and Daman and Diu',
  DL: 'Delhi',
  JK: 'Jammu and Kashmir',
  LA: 'Ladakh',
  LD: 'Lakshadweep',
  PY: 'Puducherry',
  TT: 'India',
  [UNASSIGNED_STATE_CODE]: 'Unassigned',
};

const stateCodes = [];
const stateCodesMap = {};
Object.keys(STATE_NAMES).map((key, index) => {
  stateCodesMap[STATE_NAMES[key]] = key;
  stateCodes.push({code: key, name: STATE_NAMES[key]});
  return null;
});
export const STATE_CODES = stateCodesMap;
export const STATE_CODES_ARRAY = stateCodes;
