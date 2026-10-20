// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Vinay Sharma',
  role: 'Database Reliability Engineer',
  email: 'sharma.vinay1206@gmail.com',
  tagline: 'I keep databases fast, patched and boring.',
  description:
    'Database Reliability Engineer with 5+ years running Cassandra, SQL Server, Redis and MarkLogic for enterprise clients, on premises and in Azure.',
  status: 'Open to Senior DBA, DBRE and SRE roles · Noida, India',
  social: [
    { label: 'GitHub', href: 'https://github.com/vks77' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vinaysharma17' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;

// Numbers shown on the homepage. Edit freely.
export const STATS = [
  { value: '800+', label: 'databases managed' },
  { value: '4 TB', label: 'largest SQL Server estate' },
  { value: '400+', label: 'servers, one installer' },
  { value: '<30 ms', label: 'Cassandra latency' },
] as const;

export const EXPERIENCE = [
  {
    org: 'Accenture',
    role: 'Systems Engineer, Infrastructure Managed Services',
    period: 'Jan 2024 – present',
    points: [
      'Now: Cassandra and data infrastructure, covering DataStax Enterprise, MySQL and Postgres.',
      'Before: DBA team for SQL Server, Redis and MarkLogic, including patching, tuning and incident response.',
    ],
  },
  {
    org: 'Tata Consultancy Services',
    role: 'Systems Engineer',
    period: 'Apr 2021 – Dec 2023',
    points: [
      'Three-person team running 800+ databases for a major international travel agency.',
      'Owned 4 TB SQL Server environments, including AlwaysOn availability groups and transactional replication.',
    ],
  },
] as const;

export const EDUCATION = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'IIMT College of Engineering (AKTU), Greater Noida',
  period: '2016 – 2020',
} as const;

export const STACK = [
  { group: 'Databases', items: ['Cassandra DSE', 'SQL Server', 'Redis', 'MarkLogic', 'MySQL', 'Postgres'] },
  { group: 'Cloud and automation', items: ['Azure PaaS / IaaS', 'Azure Automation', 'PowerShell', 'Bash', 'T-SQL', 'Python'] },
  { group: 'Reliability and ops', items: ['AlwaysOn AG', 'Replication', 'Query tuning', 'Incident management', 'Root cause analysis'] },
  { group: 'Systems and tools', items: ['RHEL / CentOS / Ubuntu', 'Windows Server', 'Git', 'Azure DevOps', 'AZ-900'] },
] as const;
