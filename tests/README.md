# E2E Tests for DivScout.com

End-to-end tests for the DivScout.com website using Playwright.

## Test Coverage

- **Homepage Tests** (`homepage.spec.js`)
  - Page load and title
  - Hero section content
  - Featured blog post
  - Feature cards
  - Tech stack section
  - How it works section
  - CTA section

- **About Page Tests** (`about.spec.js`)
  - Page load and header
  - Content sections
  - GitHub repo links
  - Disclaimer
  - Data quality information

- **Navigation Tests** (`navigation.spec.js`)
  - Header navigation
  - Page navigation
  - Footer links
  - External links (divscout.app, GitHub, DEV Community)
  - www to non-www redirect

## Running Tests

Install dependencies:
```bash
npm install
npx playwright install
```

Run all tests:
```bash
npm test
```

Run tests with UI:
```bash
npm run test:ui
```

Run tests in headed mode:
```bash
npm run test:headed
```

View test report:
```bash
npx playwright show-report
```

## Test Configuration

Tests run on:
- Chromium (Desktop)
- Firefox (Desktop)
- WebKit (Desktop Safari)
- Mobile (iPhone 13)

Base URL: `https://divscout.com`
