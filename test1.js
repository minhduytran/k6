import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    // Key configurations for spike in this section
    stages: [
      { duration: '30s', target: 100000 }, // fast ramp-up to a high point
      // No plateau
      { duration: '10s', target: 0 }, // quick ramp-down to 0 users
    ],
  };

  export default function() {
    http.get('https://starship-web-test.coin98.dev/community-sales/load-test-guarantee-launchpad-29032024');
    sleep(1);
  }