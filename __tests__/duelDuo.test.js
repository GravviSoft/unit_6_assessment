const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});


describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});


describe('Confirm choices div exists', () => {
  it('should display the "choices" div when the "Draw" button is clicked', async () => {
    await driver.get("http://localhost:8000")
    const drawButton = await driver.findElement(By.id('draw'));
    // const submitButton = driver.findElement(By.xpath("/html/body/button[2]"));
    const choicesDiv = await driver.findElement(By.id('choices'));
    await drawButton.click();
    await driver.wait(until.elementIsVisible(choicesDiv), 1000); // Wait for up to 10 seconds.
    await driver.sleep(5000);
  });
});


describe('Confirm player-duo div exists', () => {
  it('Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    await driver.get("http://localhost:8000")
    const drawButton = await driver.findElement(By.id('draw')); 
    await drawButton.click();
    const botBtn = await driver.findElement(By.className('bot-btn'))
    await botBtn.click();
    const playerDuo = await driver.findElement(By.id('player-duo')); 
    await driver.wait(until.elementIsVisible(playerDuo), 1000); // Wait for up to 10 seconds.
    await driver.sleep(5000);
  });
});
