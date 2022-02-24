/* eslint-disable */

import VCET from '../data/VCET.js'

export async function handler(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello world! test', VCET }),
    }
}
