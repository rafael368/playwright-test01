import { Page, Locator , expect } from "@playwright/test"

export class HomePage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async go(){
        await this.page.goto('')
        await expect(this.page).toHaveTitle('The Internet')
        await expect(this.page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible();
        await this.page.waitForTimeout(1000)
    }
}