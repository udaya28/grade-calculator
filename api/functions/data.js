/* eslint-disable */
import Data from '../../data/Data.js'

function send(data) {
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET",
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        }
    }
}

export async function handler(event, context) {
    const { college, regulation, department } = event.queryStringParameters;
    console.log({ college, regulation, department })


    if (college && regulation && department) {
        const data = { semesters: Data[college]?.[regulation]?.[department] }
        return send(data)
    }

    if (college && regulation) {
        const data = { departments: Object.keys(Data[college]?.[regulation]) }
        return send(data)
    }

    if (college) {
        const data = { regulations: Object.keys(Data[college]) }
        return send(data)
    }

    const data = { colleges: Object.keys(Data) }
    return send(data)
}