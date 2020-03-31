import * as request from 'request-promise';

describe('Web api test', () => {

    it('should get object with local json file', async () => {

        const jsonFile = require('../../db.json');

        const response = await request.get('http://localhost:3000/blogposts');
        const jsonResponse = JSON.parse(response);

        console.log(`jsonFile.blogposts: ${JSON.stringify(jsonFile.blogposts)}`);
        console.log(`jsonResponse: ${JSON.stringify(jsonResponse)}`);

        expect(jsonResponse[0].id).toBe(jsonFile.blogposts[0].id)

    });

});
