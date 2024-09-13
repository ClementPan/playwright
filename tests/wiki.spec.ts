import { test, expect } from '@playwright/test';

function getRandomScreenShotFileName() {
  return `./${Date.now()}.png`;
}

const CaseMeta = {
  Title: 'Playwright (software)',
  TargetUrl: 'https://www.wikipedia.org/',
};

test.describe('Wikipedia', () => {
  test.use({ viewport: { width: 1600, height: 1200 } });

  test('Test Desktop', async ({ page }) => {
    await page.goto(CaseMeta.TargetUrl);

    await page.getByLabel('Search Wikipedia').click();
    await page.getByLabel('Search Wikipedia').fill(CaseMeta.Title);
    await page.getByRole('button', { name: 'Search' }).click();

    await page.waitForSelector('h1#firstHeading');

    const pageTitleContainer = await page.getByRole('heading', { name: CaseMeta.Title });
    const pageTitle = await pageTitleContainer.textContent();
    expect(pageTitle).toContain(CaseMeta.Title);

    await page.screenshot({ path: `./screenshots/${getRandomScreenShotFileName()}` });
    await page.close();
  });
});

test.describe('Wikipedia', () => {
  test.use({ viewport: { width: 768, height: 844 } });

  test('Test Pad', async ({ page }) => {
    await page.goto(CaseMeta.TargetUrl);

    // 切換到另一種語言版本（例如從英文切換到中文）

    await page.getByLabel('Search Wikipedia').click();
    await page.getByLabel('Search Wikipedia').fill(CaseMeta.Title);
    await page.getByRole('button', { name: 'Search' }).click();

    await page.waitForSelector('h1#firstHeading');

    const pageTitleContainer = await page.getByRole('heading', { name: CaseMeta.Title });
    const pageTitle = await pageTitleContainer.textContent();
    expect(pageTitle).toContain(CaseMeta.Title);

    await page.screenshot({ path: `./screenshots/${getRandomScreenShotFileName()}` });
    await page.close();
  });
});

test.describe('Wikipedia', () => {
  test.use({ viewport: { width: 1600, height: 1200 } });

  test('Test Change Language', async ({ page }) => {
    await page.goto(CaseMeta.TargetUrl);

    // 查詢「星際大戰」
    await page.getByLabel('Search Wikipedia').click();
    await page.getByLabel('Search Wikipedia').fill('星際大戰');
    await page.getByRole('button', { name: 'Search' }).click();

    // 等待頁面加載完成
    await page.waitForSelector('h1#firstHeading');

    // 點擊第一個搜尋結果
    await page
      .locator(
        'div.mw-search-results-container > div > ul > li:nth-child(1) > div.mw-search-result-heading > a'
      )
      .click();

    // 切換到另一種語言版本

    // 模擬網絡條件並重新加載頁面

    // 驗證外部連結

    // await page.screenshot({ path: `./screenshots/${getRandomScreenShotFileName()}` });
    // await page.close();
  });
});
