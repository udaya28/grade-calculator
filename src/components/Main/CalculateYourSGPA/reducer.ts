function reducer(state: any, action: any) {
    console.log({ state }, { action })
    switch (action.type) {
        case 'ADD': {
            return {
                ...action.payload,
            }
        }
        case 'DEFAULT': {
            return {
                college: 'None',
                regulation: '',
                department: '',
                semesters: {},
            }
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
