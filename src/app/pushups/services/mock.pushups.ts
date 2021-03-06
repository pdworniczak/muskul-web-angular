import { Test, Training, Scope } from "../training";

const mockData: { [token: string]: { trainings: Array<Training | Test> } } = {
  'token1': {
    trainings: [{
      date: new Date('2019-05-01'),
      scope: Scope.TEST,
      day: null,
      serie: {
        count: 12
      }
    }]
  },
  'token2': {
    trainings: [{
      date: new Date('2019-05-01'),
      scope: Scope.TEST,
      day: null,
      serie: {
        count: 22
      }
    }, {
      date: new Date('2019-05-03'),
      scope: Scope.SCOPE_21_TO_25,
      day: 1,
      serie: {
        1: 12,
        2: 17,
        3: 13,
        4: 13,
        5: 17
      }
    }, {
      date: new Date('2019-05-05'),
      scope: Scope.SCOPE_21_TO_25,
      day: 2,
      serie: {
        1: 14,
        2: 19,
        3: 14,
        4: 14,
        5: 19
      }
    }]
  },
  'token3': {
    trainings: [{
      date: new Date('2019-05-01'),
      scope: Scope.TEST,
      day: null,
      serie: {
        count: 22
      }
    }, {
      date: new Date('2019-05-03'),
      scope: Scope.SCOPE_21_TO_25,
      day: 1,
      serie: {
        1: 12,
        2: 17,
        3: 13,
        4: 13,
        5: 17
      }
    }, {
      date: new Date('2019-05-05'),
      scope: Scope.SCOPE_21_TO_25,
      day: 2,
      serie: {
        1: 14,
        2: 19,
        3: 14,
        4: 12,
        5: 0
      }
    }]
  }
}

export { mockData };