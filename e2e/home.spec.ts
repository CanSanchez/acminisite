import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlMatch = "http://localhost:3000/match";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Hello Neighbour: Home');
    })

    test('The meta tag', async ({ page }) => { 
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Meet your neighbours from Animal Crossing New Horizon")

        const metaDescriptionTwo = page.locator('meta[name="author"]');
        await expect(metaDescriptionTwo).toHaveAttribute("content", "Can Sanchez")
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/aclogo.png')
    })
})

test.describe('Main area', () => {
    //test header tag
    test('Header Tag', async({ page }) => {
        await page.goto(urlHome)

        //test image alt tag
        const imageAltTag = page.locator('img[alt="Hello Neighbour Header"]');
        await expect(imageAltTag).toHaveAttribute('src', '/images/header.png')
    })

    //test button tag to push to match page
    test('Button Tag', async({ page }) => {
        await page.goto(urlHome)

        await page.getByRole('button', { name:'Match Maker' }).click();
    })

    //test search bar
    test('Search Bar', async({ page }) => {
        await page.goto(urlHome)

        await page.fill('input[placeholder="Search by name"]', 'Admiral');
        await page.keyboard.press('Enter');
    })
    
})

test('should navigate to the match page', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/')
    // Find an element with the text 'About Page' and click on it
    const matchButton = page.getByRole('button', { name:'Match Maker' });
    await matchButton.click();
    // The new URL should be "/about" (baseURL is used there)
    await expect(page).toHaveURL('http://localhost:3000/match')
    // The new page should contain a button with the text 'Go to Home'
    await expect(page.getByRole('button',  { name:'Go to Home' })).toContainText('Go to Home')
})
