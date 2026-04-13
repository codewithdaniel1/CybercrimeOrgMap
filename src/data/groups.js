export const GROUP_TYPES = [
  'ransomware',
  'banking-theft',
  'carding',
  'bec-fraud',
  'darknet-market',
  'state-linked-theft',
  'hybrid',
  'access-brokerage',
];

export const TYPE_META = {
  ransomware: {
    label: 'Ransomware',
    color: '#ff4d73',
    bg: 'rgba(255, 77, 115, 0.14)',
    border: 'rgba(255, 77, 115, 0.28)',
  },
  'banking-theft': {
    label: 'Banking Theft',
    color: '#ff9d42',
    bg: 'rgba(255, 157, 66, 0.14)',
    border: 'rgba(255, 157, 66, 0.28)',
  },
  carding: {
    label: 'Carding',
    color: '#ffd166',
    bg: 'rgba(255, 209, 102, 0.14)',
    border: 'rgba(255, 209, 102, 0.28)',
  },
  'bec-fraud': {
    label: 'BEC / Fraud',
    color: '#40d5c8',
    bg: 'rgba(64, 213, 200, 0.14)',
    border: 'rgba(64, 213, 200, 0.28)',
  },
  'darknet-market': {
    label: 'Darknet Market',
    color: '#b9ff66',
    bg: 'rgba(185, 255, 102, 0.14)',
    border: 'rgba(185, 255, 102, 0.28)',
  },
  'state-linked-theft': {
    label: 'State-linked Theft',
    color: '#8e8bff',
    bg: 'rgba(142, 139, 255, 0.14)',
    border: 'rgba(142, 139, 255, 0.28)',
  },
  hybrid: {
    label: 'Hybrid',
    color: '#ff6f91',
    bg: 'rgba(255, 111, 145, 0.14)',
    border: 'rgba(255, 111, 145, 0.28)',
  },
  'access-brokerage': {
    label: 'Access Brokerage',
    color: '#72a8ff',
    bg: 'rgba(114, 168, 255, 0.14)',
    border: 'rgba(114, 168, 255, 0.28)',
  },
};

export const ORIGIN_METHOD_NOTE =
  'Origins reflect public attribution. When reporting is only country-level, the pin is anchored to the national capital for map readability.';

const COUNTRY_CAPITAL_PIN = 'Country-level attribution pinned to capital';
const CITY_PIN = 'City-level attribution from public reporting';

export const GROUPS = [
  {
    id: 'lockbit',
    name: 'LockBit',
    type: 'ransomware',
    country: 'Russia',
    city: 'Moscow',
    lat: 55.7558,
    lng: 37.6173,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2019,
    scope: 'Global',
    aliases: ['LockBitSupp', 'GOLD MYSTIC'],
    tags: ['RaaS', 'double extortion'],
    knownFor:
      'Operating one of the most prolific ransomware-as-a-service programs on record, with thousands of victims across more than 100 countries.',
    attribution:
      'U.S. prosecutors identified Russian national Dmitry Khoroshev as LockBit’s alleged developer and administrator in 2024.',
    sourceLabel: 'DOJ, May 2024',
  },
  {
    id: 'evil-corp',
    name: 'Evil Corp',
    type: 'banking-theft',
    country: 'Russia',
    city: 'Moscow',
    lat: 55.7558,
    lng: 37.6173,
    originPrecision: CITY_PIN,
    firstSeen: 2009,
    scope: 'Global',
    aliases: ['Indrik Spider', 'Dridex crew'],
    tags: ['Dridex', 'BitPaymer'],
    knownFor:
      'Large-scale credential theft, bank fraud, and later ransomware activity tied to the Dridex malware ecosystem.',
    attribution:
      'The U.S. Treasury described Evil Corp as a Russia-based cybercriminal organization operating as a business from Moscow.',
    sourceLabel: 'U.S. Treasury, Dec 2019 / Oct 2024',
  },
  {
    id: 'wizard-spider',
    name: 'Wizard Spider',
    type: 'ransomware',
    country: 'Russia',
    city: 'Moscow',
    lat: 55.7558,
    lng: 37.6173,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2016,
    scope: 'Global',
    aliases: ['GOLD BLACKBURN', 'Grim Spider', 'FIN12'],
    tags: ['TrickBot', 'Ryuk', 'Conti'],
    knownFor:
      'Building the TrickBot ecosystem and running major ransomware campaigns against hospitals, enterprises, and public-sector targets.',
    attribution:
      'MITRE ATT&CK tracks Wizard Spider as a Russia-based financially motivated threat group.',
    sourceLabel: 'MITRE ATT&CK, updated Mar 2025',
  },
  {
    id: 'trickbot',
    name: 'TrickBot Group',
    type: 'access-brokerage',
    country: 'Russia',
    city: 'Moscow',
    lat: 55.7558,
    lng: 37.6173,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2016,
    scope: 'Global',
    aliases: ['Trickbot operators'],
    tags: ['malware platform', 'ransomware enablement'],
    knownFor:
      'Running a malware ecosystem used to steal money, compromise networks, and hand access to ransomware crews.',
    attribution:
      'Treasury and DOJ actions in 2023 described Trickbot as a Russia-based cybercrime group with links to Russian intelligence services.',
    sourceLabel: 'U.S. Treasury / DOJ, Sep 2023',
  },
  {
    id: 'danabot',
    name: 'DanaBot Organization',
    type: 'banking-theft',
    country: 'Russia',
    city: 'Novosibirsk',
    lat: 55.0084,
    lng: 82.9357,
    originPrecision: CITY_PIN,
    firstSeen: 2018,
    scope: 'Global',
    aliases: ['DanaBot operators'],
    tags: ['banking trojan', 'fraud infrastructure'],
    knownFor:
      'Operating malware that infected hundreds of thousands of machines and enabled fraud, credential theft, and ransomware delivery.',
    attribution:
      'The 2025 U.S. indictment describes DanaBot as controlled by a Russia-based cybercrime organization and names operators from Novosibirsk.',
    sourceLabel: 'DOJ, May 2025',
  },
  {
    id: 'mario-kart',
    name: 'Mario Kart',
    type: 'access-brokerage',
    country: 'Russia',
    city: 'Tolyatti',
    lat: 53.5078,
    lng: 49.4204,
    originPrecision: CITY_PIN,
    firstSeen: 2017,
    scope: 'Global',
    aliases: ['TA551', 'Shathak', 'GOLD CABIN'],
    tags: ['botnet sales', 'spam delivery'],
    knownFor:
      'Building a spam-delivered botnet and selling access to other actors who used that access for ransomware extortion.',
    attribution:
      'DOJ described Mario Kart as a Russia-based cybercriminal group and tied a co-manager to Tolyatti, Russia.',
    sourceLabel: 'DOJ, Mar 2026',
  },
  {
    id: 'hydra-market',
    name: 'Hydra Market',
    type: 'darknet-market',
    country: 'Russia',
    city: 'Moscow',
    lat: 55.7558,
    lng: 37.6173,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2015,
    scope: 'Regional',
    aliases: ['Hydra'],
    tags: ['darknet marketplace', 'criminal services'],
    knownFor:
      'Serving Russian-speaking criminal users with illicit goods, stolen data, money-laundering services, and hacking tools.',
    attribution:
      'The DOJ described Hydra as the largest darknet market at the time of its 2022 seizure and linked it to a Russian resident.',
    sourceLabel: 'DOJ, Apr 2022',
  },
  {
    id: 'fin7',
    name: 'FIN7',
    type: 'carding',
    country: 'Ukraine',
    city: 'Kyiv',
    lat: 50.4501,
    lng: 30.5234,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2013,
    scope: 'Global',
    aliases: ['Carbon Spider', 'GOLD NIAGARA', 'Carbanak-linked'],
    tags: ['POS intrusions', 'front company'],
    knownFor:
      'Stealing payment-card data from retail and hospitality targets before expanding into big-game hunting ransomware operations.',
    attribution:
      'MITRE tracks FIN7 as financially motivated and says part of the group operated through the Combi Security front company; DOJ cases charged multiple Ukrainian nationals.',
    sourceLabel: 'MITRE ATT&CK / DOJ',
  },
  {
    id: 'gorgon-group',
    name: 'Gorgon Group',
    type: 'hybrid',
    country: 'Pakistan',
    city: 'Islamabad',
    lat: 33.6844,
    lng: 73.0479,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2018,
    scope: 'Regional',
    aliases: [],
    tags: ['criminal + targeted', 'phishing'],
    knownFor:
      'Running mixed campaigns that blend financially motivated intrusions with more targeted operations against government and business victims.',
    attribution:
      'MITRE ATT&CK assesses the group as Pakistan-based or otherwise connected to Pakistan.',
    sourceLabel: 'MITRE ATT&CK, updated Apr 2025',
  },
  {
    id: 'lazarus-group',
    name: 'Lazarus Group',
    type: 'state-linked-theft',
    country: 'North Korea',
    city: 'Pyongyang',
    lat: 39.0392,
    lng: 125.7625,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2009,
    scope: 'Global',
    aliases: ['HIDDEN COBRA', 'Diamond Sleet', 'ZINC'],
    tags: ['crypto theft', 'state-backed'],
    knownFor:
      'Conducting destructive attacks, espionage, and high-value cryptocurrency theft campaigns attributed to North Korea.',
    attribution:
      'MITRE ATT&CK tracks Lazarus as a North Korean state-sponsored group tied to the Reconnaissance General Bureau.',
    sourceLabel: 'MITRE ATT&CK',
  },
  {
    id: 'apt38',
    name: 'APT38',
    type: 'state-linked-theft',
    country: 'North Korea',
    city: 'Pyongyang',
    lat: 39.0392,
    lng: 125.7625,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2014,
    scope: 'Global',
    aliases: ['Bluenoroff', 'BeagleBoyz', 'Sapphire Sleet'],
    tags: ['bank heists', 'SWIFT theft'],
    knownFor:
      'Specializing in financial cyber operations against banks, casinos, exchanges, and ATM/SWIFT infrastructure worldwide.',
    attribution:
      'MITRE ATT&CK attributes APT38 to North Korea and describes it as a group focused on financial theft.',
    sourceLabel: 'MITRE ATT&CK, updated Jan 2025',
  },
  {
    id: 'gold-skyline',
    name: 'GOLD SKYLINE',
    type: 'bec-fraud',
    country: 'Nigeria',
    city: 'Abuja',
    lat: 9.0765,
    lng: 7.3986,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2016,
    scope: 'Global',
    aliases: ['Wire-Wire Group 1'],
    tags: ['BEC', 'wire fraud'],
    knownFor:
      'Stealing high-value wire transfers through business email compromise, spoofing, and social engineering.',
    attribution:
      'Secureworks describes GOLD SKYLINE as a financially motivated group operating from Nigeria.',
    sourceLabel: 'Secureworks CTU',
  },
  {
    id: 'gold-galleon',
    name: 'GOLD GALLEON',
    type: 'bec-fraud',
    country: 'Nigeria',
    city: 'Abuja',
    lat: 9.0765,
    lng: 7.3986,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2017,
    scope: 'Global',
    aliases: [],
    tags: ['maritime BEC', 'credential theft'],
    knownFor:
      'Running BEC schemes against shipping and maritime organizations, often intercepting invoices and payment instructions.',
    attribution:
      'Secureworks assesses with high confidence that GOLD GALLEON is based in Nigeria.',
    sourceLabel: 'Secureworks CTU, Apr 2018 / profile',
  },
  {
    id: 'grandoreiro',
    name: 'Grandoreiro',
    type: 'banking-theft',
    country: 'Brazil',
    city: 'Brasilia',
    lat: -15.7939,
    lng: -47.8828,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2017,
    scope: 'Regional',
    aliases: ['Grandoreiro operation'],
    tags: ['banking trojan', 'phishing'],
    knownFor:
      'Targeting banks in Latin America and Europe with malware that supports manual fraud, screen blocking, and operator-driven theft.',
    attribution:
      'ESET and Brazil’s Federal Police publicly tied the operation to Brazilian operators during the 2024 disruption effort.',
    sourceLabel: 'ESET / Brazil Federal Police',
  },
  {
    id: 'guildma',
    name: 'Guildma',
    type: 'banking-theft',
    country: 'Brazil',
    city: 'Brasilia',
    lat: -15.7939,
    lng: -47.8828,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2015,
    scope: 'Regional',
    aliases: ['Astaroth-linked family'],
    tags: ['banking trojan', 'credential theft'],
    knownFor:
      'Stealing banking and account credentials at high volume in Brazil and across Latin America through email-delivered malware.',
    attribution:
      'ESET identifies Guildma as one of the most impactful Latin American banking trojans and reports concentrated activity against Brazil.',
    sourceLabel: 'ESET, Mar 2020',
  },
  {
    id: 'vadokrist',
    name: 'Vadokrist',
    type: 'banking-theft',
    country: 'Brazil',
    city: 'Brasilia',
    lat: -15.7939,
    lng: -47.8828,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2018,
    scope: 'Regional',
    aliases: [],
    tags: ['banking trojan', 'Brazil-focused'],
    knownFor:
      'Targeting Brazilian financial institutions through spam-delivered malware with backdoor functionality and shared Latin American banking-trojan tradecraft.',
    attribution:
      'ESET reported Vadokrist as specifically focused on Brazil and grouped it with other regional banking-trojan operators.',
    sourceLabel: 'ESET, Jan 2021',
  },
  {
    id: 'gold-barondale',
    name: 'GOLD BARONDALE',
    type: 'access-brokerage',
    country: 'China',
    city: 'Beijing',
    lat: 39.9042,
    lng: 116.4074,
    originPrecision: COUNTRY_CAPITAL_PIN,
    firstSeen: 2022,
    scope: 'Global',
    aliases: [],
    tags: ['opportunistic exploitation', 'initial access'],
    knownFor:
      'Compromising internet-facing systems at scale and monetizing intrusions after opportunistic scanning and exploitation.',
    attribution:
      'Secureworks assesses with moderate confidence that GOLD BARONDALE is based in China.',
    sourceLabel: 'Secureworks CTU',
  },
  {
    id: 'nemesis-market',
    name: 'Nemesis Market',
    type: 'darknet-market',
    country: 'Iran',
    city: 'Tehran',
    lat: 35.6892,
    lng: 51.389,
    originPrecision: CITY_PIN,
    firstSeen: 2021,
    scope: 'Global',
    aliases: ['Nemesis'],
    tags: ['dark web', 'criminal services'],
    knownFor:
      'Selling illegal drugs and cybercrime services such as stolen data, fake documents, counterfeit currency, and malware.',
    attribution:
      'DOJ charged the marketplace’s founder and operator as a Tehran-based Iranian national in 2025.',
    sourceLabel: 'DOJ, Apr 2025',
  },
];

export function getTypeMeta(type) {
  return TYPE_META[type] ?? TYPE_META.hybrid;
}

export function scopeWeight(scope) {
  if (scope === 'Global') return 3;
  if (scope === 'Regional') return 2;
  return 1;
}
