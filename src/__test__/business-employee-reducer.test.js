import reducer from '../reducer/business-employees.js'

describe('businessEmployee reducer', () => {
  test('the intial state shuld be []', () => {
    let state = reducer(undefined, {type: ''})
    expect(state).toEqual([])
  })

  test('should create the employee', () => {
    let action  = {
      type: 'EMPLOYEE_CREATE',
      payload: {
        firstName: 'yumi',
        lastName: 'fukuzawa',
        title: 'manager',
        email: 'yumi@lillian.net',
        phoneNumber: '206-453-2435',
        hoursPerWeek: 30,
        salaryPerHour: 20,
      },
    }
    let state = reducer(undefined, action)
    expect(state).toEqual([action.payload])
  })

  test('create should fail with no payload', () => {
    let shouldFail = () => {
      reducer(undefined, {type: 'EMPLOYEE_CREATE'})
    }
    expect(shouldFail).toThrow('Employee required')
  })

  test('create should fail with invalid payload', () => {
    let shouldFail = () => {
      reducer(undefined, {
        type: 'EMPLOYEE_CREATE',
        payload: {},
      })
    }
    expect(shouldFail).toThrow('Employee requires a first name, last name, title, email, phone number, hours-per-week, and salary-per-hour')
  })

  test('should return the state', () => {
    let state = reducer('hello world', {type: ''})
    expect(state).toEqual('hello world')
  })

  // test('should set the photo', () => {
  //   let action  = {
  //     type: 'CLIENT_PROFILE_SET',
  //     payload: {
  //       account: '5a0401d086f4a6053e0ef617',
  //       firstName: 'Usagi',
  //       lastName: 'Tsukino',
  //       city: 'Seattle',
  //       state: 'WA',
  //       donationGoal: 200,
  //       moneySpent: 100,
  //       bio: 'In the name of the moon',
  //       photo: 'https://charity-choice.s3-us-west-1.amazonaws.com/db30e2a68ca17a4e763391a802428927.kitten.jpg',
  //     },
  //   }
  //   let state = reducer(undefined, action)
  //   expect(state).toEqual(action.payload)
  // })
})
