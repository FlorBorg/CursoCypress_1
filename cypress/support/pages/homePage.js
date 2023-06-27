export class HomePage {
    constructor() {
        this.OnlineShopBtn = "Online Shop"

    }

    clickOnlineShopButton() {
        cy.contains(this.OnlineShopBtn).click();
    };
};