import { browser } from 'k6/experimental/browser';

export const options = {
  scenarios: {
    ui: {
      executor: 'constant-vus',
      exec: 'browserTest',
      vus: 2,
      duration: '1s',
      options: {
        browser: {
          type: 'chromium',
          args: ['--no-sandbox'],
        },

      },
    },
  },
};



export async function browserTest() {
  const page = browser.newPage();

  try {
    await page.goto('https://starship-web-test.coin98.dev/');
    // const submitButton = page.locator('div[class="bg-backgroundWhite"]');

    page.waitForSelector('div[class="bg-backgroundWhite"]');


  } finally {
    page.screenshot({ path: 'screenshots/screenshot.png' });
    page.close();
  }
}
