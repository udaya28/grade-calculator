import { getLocalStorage } from '../../../util/LocalStorage'

// const localFetchedData = getLocalStorage('fetchedData')

const localMainData = getLocalStorage('mainData')
let localFetchedData = getLocalStorage('fetchedData')

const getGrade = (semester: string, currentSubject: any, state: any, payload: any) => {
    if (!state || Object.keys(state.semesters).length === 0) return ''
    let storedData: any = {}

    if (
        localMainData &&
        localMainData.college === payload.college &&
        localMainData.regulation === payload.regulation &&
        localMainData.department === payload.department
    ) {
        storedData = localMainData
    } else if (localFetchedData) {
        storedData = localFetchedData
    } else {
        return ''
    }

    const {
        college: localFetchedCollege,
        regulation: localFetchedRegulation,
        department: localFetchedDepartment,
        semesters: localFetchedSemesters,
    } = storedData

    if (!localFetchedCollege || !localFetchedRegulation || !localFetchedDepartment) return ''

    if (
        localFetchedCollege !== payload.college ||
        localFetchedRegulation !== payload.regulation ||
        localFetchedDepartment !== payload.department
    ) {
        return ''
    }

    if (!localFetchedSemesters) return ''
    const { subject } = localFetchedSemesters[semester]
    if (!subject) return ''
    const storedSubject: any = subject.find((s: any) => s.subject === currentSubject.subject)
    if (!storedSubject) return ''
    const { grade } = storedSubject
    return grade
}

const addGrade = (payload: any, state: any): any => {
    localFetchedData = getLocalStorage('fetchedData')
    const { semesters } = payload
    console.log('state.semesters', state.semesters[1])
    const data: any = {}
    if (!semesters) return data
    Object.keys(semesters).forEach((semester) => {
        data[semester] = {
            ...semesters[semester],
            // eslint-disable-next-line arrow-body-style
            subject: semesters[semester].subject.map((sub: any) => {
                return {
                    ...sub,
                    grade: getGrade(semester, sub, state, payload),
                    // grade: '',
                }
            }),
        }
    })

    return data
}

function reducer(state: any, action: any) {
    console.log({ state }, { action })
    switch (action.type) {
        case 'ADD': {
            return {
                ...action.payload,
            }
        }

        case 'SET_REGULATION': {
            return {
                ...state,
                regulation: action.payload,
            }
        }

        case 'SET_DEPARTMENT': {
            return {
                ...state,
                department: action.payload,
            }
        }

        case 'SET_COLLEGE': {
            return {
                ...state,
                college: action.payload,
            }
        }

        case 'SET_FETCHED_DATA': {
            const data = {
                ...action.payload,
            }
            return data
        }

        case 'SET_FETCHED_DATA_WITHOUT_GRADE': {
            const data = {
                ...action.payload,
                semesters: addGrade(action.payload, state),
                // semesters:  state.semesters,
            }
            return data
        }

        case 'UPDATE_GRADE_DETAILS': {
            const currentSemesterNumber = action.payload.semesterNumber
            console.log(state.semesters, currentSemesterNumber)
            const data = {
                ...state,
                semesters: {
                    ...state.semesters,
                    [currentSemesterNumber]: {
                        ...state.semesters[currentSemesterNumber],
                        subject: state.semesters[currentSemesterNumber].subject.map((subject: any) => {
                            if (subject.subject === action.payload.subjectName) {
                                console.log(action.payload.grade)
                                return {
                                    ...subject,
                                    grade: action.payload.grade,
                                }
                            }
                            return subject
                        }),
                    },
                },
            }
            console.log(data)
            return data
        }
        default:
            return state
    }
}

export default reducer
