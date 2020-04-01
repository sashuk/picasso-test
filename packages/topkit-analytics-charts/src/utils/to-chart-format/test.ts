import toChartFormat from './'

const RAW_CHART_DATA = [
  {
    id: 'projects',
    values: {
      '2020-10-20': 1.7,
      '2020-10-21': 2,
      '2020-10-22': 1.7,
      '2020-10-23': 2,
      '2020-10-24': 1.5,
      '2020-10-25': 1.3,
      '2020-10-26': 1.6,
      '2020-10-27': 2.7,
      '2020-10-28': 3.7,
      '2020-10-29': 1.7,
      '2020-10-30': 1.5,
      '2020-10-31': 1.6,
      '2020-11-01': 2,
      '2020-11-02': 1.5,
      '2020-11-03': 1.3,
      '2020-11-04': 1.5,
      '2020-11-05': 1.5,
      '2020-11-06': 1.8,
      '2020-11-07': 1.6,
      '2020-11-08': 2,
      '2020-11-09': 2,
      '2020-11-10': 3.1,
      '2020-11-11': 1.9,
      '2020-11-12': 1.4,
      '2020-11-13': 1.6,
      '2020-11-14': 2,
      '2020-11-15': 1.7,
      '2020-11-16': 1.4,
      '2020-11-17': 1.5,
      '2020-11-18': 1.7,
      '2020-11-19': 1.3
    }
  }
]
const EXPECTED_CHART_DATA = [
  { x: '2020-10-20', projects: 1.7 },
  { x: '2020-10-21', projects: 2 },
  { x: '2020-10-22', projects: 1.7 },
  { x: '2020-10-23', projects: 2 },
  { x: '2020-10-24', projects: 1.5 },
  { x: '2020-10-25', projects: 1.3 },
  { x: '2020-10-26', projects: 1.6 },
  { x: '2020-10-27', projects: 2.7 },
  { x: '2020-10-28', projects: 3.7 },
  { x: '2020-10-29', projects: 1.7 },
  { x: '2020-10-30', projects: 1.5 },
  { x: '2020-10-31', projects: 1.6 },
  { x: '2020-11-01', projects: 2 },
  { x: '2020-11-02', projects: 1.5 },
  { x: '2020-11-03', projects: 1.3 },
  { x: '2020-11-04', projects: 1.5 },
  { x: '2020-11-05', projects: 1.5 },
  { x: '2020-11-06', projects: 1.8 },
  { x: '2020-11-07', projects: 1.6 },
  { x: '2020-11-08', projects: 2 },
  { x: '2020-11-09', projects: 2 },
  { x: '2020-11-10', projects: 3.1 },
  { x: '2020-11-11', projects: 1.9 },
  { x: '2020-11-12', projects: 1.4 },
  { x: '2020-11-13', projects: 1.6 },
  { x: '2020-11-14', projects: 2 },
  { x: '2020-11-15', projects: 1.7 },
  { x: '2020-11-16', projects: 1.4 },
  { x: '2020-11-17', projects: 1.5 },
  { x: '2020-11-18', projects: 1.7 },
  { x: '2020-11-19', projects: 1.3 }
]

test('convert chart data', () => {
  const convertedChartData = toChartFormat(RAW_CHART_DATA, 'x')
  expect(convertedChartData).toEqual(EXPECTED_CHART_DATA)
})
