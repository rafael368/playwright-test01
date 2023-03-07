import { Page, Locator , expect } from "@playwright/test"

export class LoginPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async Login(Login, password){
        await this.page.getByRole('link', { name: 'Form Authentication' }).click();
        await this.page.getByLabel('Username').fill(Login);
        await this.page.getByLabel('Password').fill(password);
        await this.page.click('xpath=//button[@type="submit"]')
        await expect(this.page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })).toBeVisible();

    }
}