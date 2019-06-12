enum Scope {
  TEST = 'TEST',
  SCOPE_0_TO_5 = '0-5',
  SCOPE_6_TO_10 = '6-10',
  SCOPE_11_TO_20 = '11-20',
  SCOPE_21_TO_25 = '21-25',
  SCOPE_26_TO_30 = '26-30',
  SCOPE_31_TO_35 = '31-35',
  SCOPE_36_TO_40 = '36-40',
  SCOPE_41_TO_45 = '41-45',
  SCOPE_46_TO_50 = '46-50',
  SCOPE_51_TO_50 = '51-50',
  SCOPE_56_TO_60 = '56-60',
  SCOPE_60_TO_100 = '60-100'
}

interface SerieTest {
  count: number
}

interface Serie3Day {
  1: number,
  2: number,
  3: number
}

interface Serie5Day {
  1: number,
  2: number,
  3: number,
  4: number,
  5: number
}

interface Test {
  date: Date,
  scope: Scope.TEST,
  day: 0,
  serie: SerieTest
}

interface Training {
  date: Date,
  scope: Scope,
  day: number,
  serie: Serie3Day | Serie5Day
}

interface Plan {
  scope: Scope,
  day: number,
  serie: Serie3Day | Serie5Day
}

interface TestPlan {
  scope: Scope
}

export {
  Scope,
  Plan,
  TestPlan,
  Training,
  Test,
  Serie5Day,
  Serie3Day,
  SerieTest
}