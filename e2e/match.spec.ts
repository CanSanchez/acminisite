import { test, expect } from '@playwright/test'

//Match page test

//test url
let urlHome = "http://localhost:3000";
let urlMatch = "http://localhost:3000/match";

//test before and after all
test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

//test for header area
test.describe('Header area', () => {
    //test title tag
    test('The title tag', async({ page }) => {
        await page.goto(urlMatch)

        await expect(page).toHaveTitle('Hello Neighbour: Match Making');
    })
    //test meta tag
    test('The meta tag', async ({ page }) => { 
        await page.goto(urlMatch)
        
        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Meet your neighbours from Animal Crossing New Horizon")

        const metaDescriptionTwo = page.locator('meta[name="author"]');
        await expect(metaDescriptionTwo).toHaveAttribute("content", "Can Sanchez")
    })
    //test link tag
    test('The link tag', async ({ page }) => {
        await page.goto(urlMatch)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/aclogo.png')
    })
})

test.describe('Main area', () => {
    //test how many form elements are on the page
    test('Form Elements', async({ page }) => {
        await page.goto(urlMatch)

        const formElements = page.locator('form');
        await expect(formElements).toHaveCount(1)
    })    

    //test how many select elements are on the page
    test('Select Elements', async({ page }) => {
        await page.goto(urlMatch)

        const selectElements = page.locator('select');
        await expect(selectElements).toHaveCount(3)
    })
})

//test for home button to navigate back to home page
test('should navigate to the home page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/match')
    // Find a button with the name "Go to Home" and click it
    const homeButton = page.getByRole('button', { name:'Go to Home' });
    await homeButton.click();
    // The new URL should be "/about" (baseURL is used there)
    await expect(page).toHaveURL('http://localhost:3000/')
    // The new page should contain a header image with the alt tag 'Hello Neighbour Header
    const imageAltTag = page.locator('img[alt="Hello Neighbour Header"]');
    await expect(imageAltTag).toHaveAttribute('src', '/images/header.png')
})
