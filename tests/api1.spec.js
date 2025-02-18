import { test, expect } from '@playwright/test';

test('api', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2'); 
    expect(response.status()).toBe(200);  
    const text = await response.text();
    expect(text).toContain('janet');  
    console.log(await response.json());  
});
