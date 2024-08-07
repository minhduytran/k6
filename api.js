import http from 'k6/http';
export const options = {
  vus: 2,
  duration: '1s',
};
export default function () {
  const headers = { 'Content-Type': 'application/json' };
  http.get('https://starship-web-test.coin98.dev/community-sales/load-test-guarantee-launchpad-29032024');
}
