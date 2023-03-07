import { Page, Locator , expect } from "@playwright/test"

export class DropdownPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async Dropdown(Option){
        await this.page.getByRole('link', { name: 'Dropdown' }).click();
        await expect (this.page.getByRole('heading', { name: 'Dropdown List' })).toBeVisible();
        await this.page.locator('#dropdown').selectOption({label: Option });
        await expect(this.page.locator('xpath=//option[@selected="selected"]')).toHaveText(Option)
    }
}