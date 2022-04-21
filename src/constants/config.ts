const environment = process.env.ENV;
let url;
switch (environment) {
    case 'development':
        url = 'http://grade-api-dev.netlify.app';
        break;
    case 'production':
        url = 'http://grade-api-prod.netlify.app';
        break;
    default:
        url = 'http://localhost:9000';
        break;
}

// eslint-disable-next-line import/prefer-default-export
export const URL = {
    BASE_URL: url,
    FULL_URL: `${url}/.netlify/functions`
}
