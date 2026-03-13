import { test } from '../../_fixtures/fixtures';
import { generateNewArticleData } from '../../../src/common/testData/generateNewArticleData';
import { signUpUser } from '../../../src/ui/actions/auth/signUpUser';
import { faker } from '@faker-js/faker';

let article;

test.beforeEach(async ({ page, user, logger }) => {
  article = generateNewArticleData(logger);

  await signUpUser(page, user);
});

test('Log out user', async ({
  homePage,
  settingsPage,
}) => {
  await homePage.clickSettingsLink();

  await settingsPage.clickLogoutButton();
  await homePage.assertYourFeedTabIsHidden();
});
