import { expect, test, type Page } from '@playwright/test';

async function openCard(page: Page, size: 'narrow' | 'wide') {
  await page.goto('/iframe.html?id=components-productcard--' + size);
  const card = page.getByTestId('product-card');
  await expect(card).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  const photo = card.getByRole('img', { name: 'Кофемолка' });
  await expect(photo).toBeVisible();
  await photo.evaluate((img: HTMLImageElement) => img.decode());
  return card;
}

for (const [size, width] of [['narrow', 220], ['wide', 320]] as const) {
  test('visual · ' + size, async ({ page }) => {
    const card = await openCard(page, size);
    await expect(card).toHaveCSS('width', width + 'px');
    await expect(card).toHaveScreenshot(size + '-card.png');
  });
}

test('корзина · narrow', async ({ page }) => {
  const card = await openCard(page, 'narrow');
  await card.getByRole('button', { name: 'Добавить в корзину' }).click();
  await expect(page.getByText('В корзине: 1', { exact: true })).toBeVisible();
});
