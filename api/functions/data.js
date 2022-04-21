/* eslint-disable */
import Data from '../../data/Data.js'
export async function handler(event, context) {
    console.log(event.queryStringParameters)
    const { college, regulation, department } = event.queryStringParameters;
    if (college && regulation && department) {
        const data = Data[college]?.[regulation]?.[department]
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    }
    if (college && regulation) {
        const data = Object.keys(Data[college]?.[regulation])
        return {
            statusCode: 200,
            body: JSON.stringify({ departments: data }),
        }
    }
    if (college) {
        const data = Object.keys(Data[college])
        return {
            statusCode: 200,
            body: JSON.stringify({ regulations: data }),
        }
    }
    const data = Object.keys(Data)
    return {
        statusCode: 200,
        body: JSON.stringify({ colleges: data }),
    }
}