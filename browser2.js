import { group, sleep } from 'k6';
import { browser } from 'k6/experimental/browser';

export default function () {
  group('Load homepage', function () {
    const res = browser.get('https://example.com');
    console.log(res.status);
    sleep(3);
  });
}
