import { Page, Locator , expect } from "@playwright/test"

export class CheckboxPage{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async Checkbox(){
        await this.page.getByRole('link', { name: 'Checkboxes' }).click();
        await expect(this.page.getByRole('heading', { name: 'Checkboxes' })).toBeVisible();

        const Check1 = this.page.locator(`xpath=//form[@id="checkboxes"]//input[1]`)
        const Check2 = this.page.locator(`xpath=//form[@id="checkboxes"]//input[2]`)

        await Check1.check();
        await Check2.uncheck();
        //Then the system show the checkbox 1 select and checkbox 2 unselect
        await expect(Check1).toBeChecked();
        await expect(Check2).not.toBeChecked();
    }
}