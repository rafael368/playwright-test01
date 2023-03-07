import { test, expect } from '@playwright/test'
import { HomePage } from './support/pages/index'
import { LoginPage } from './support/pages/Login'
import { CheckboxPage } from './support/pages/checkbox'
import { DropdownPage } from './support/pages/dropdown'

require('dotenv').config()

const login = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
}
const varApp = {
    Option1: 'Option 1'
}

let homePage: HomePage
let loginPage: LoginPage
let checkboxPage: CheckboxPage
let dropdown: DropdownPage

test.beforeEach(({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    checkboxPage = new CheckboxPage(page)
    dropdown = new DropdownPage(page)
})

test('Made the Login with sucessfull', async ({ }) => {
    await homePage.go()
    await loginPage.Login(login.username, login.password)
});

test('Checkbox', async ({ }) => {
    await homePage.go()
    await checkboxPage.Checkbox()
});

test('Dropdown', async ({ page }) => {
    await homePage.go()
    await dropdown.Dropdown(varApp.Option1)
});
