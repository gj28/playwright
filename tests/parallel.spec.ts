import {test,expect } from '@playwright/test'
test.describe.configure({mode:'serial'});

test.describe ('A, run in parallel with B', ()=>{
test('in order A1',async({page})=>{});
test('in order A2',async({page})=>{});
});

test.describe ('B, run in parallel with A', ()=>{
    test('in order B1',async({page})=>{});
    test('in order B2',async({page})=>{});
    });