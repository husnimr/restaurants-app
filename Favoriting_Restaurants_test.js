const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#resto-item');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');

  I.seeElement('#resto-item');
  const favoritedRestoTitle = await I.grabTextFrom('#resto-title');

  assert.strictEqual(firstRestoTitle.trim(), favoritedRestoTitle.trim());
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#resto-item');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');

  I.click(firstResto);
  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');

  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
});

