# DivScout.com

Business profile website for DivScout - an open-source dividend tracking platform that extracts and validates dividend data from SEC EDGAR filings using XBRL data.

## Overview

This Jekyll-based static site showcases the DivScout project:
- **Backend**: Python 3.8+ parser extracting dividend data from SEC CompanyFacts and Submissions APIs
- **Frontend**: Vanilla JavaScript dashboard displaying validated dividend histories and statistics
- **Database**: PostgreSQL storing 14,778 dividend records across 404 companies with 94.7% verification rate

## Live Sites

- **Marketing Site**: [divscout.com](https://divscout.com)
- **Web Dashboard**: [divscout.app](https://divscout.app)

## Related Repositories

- [DivScout Backend](https://github.com/chonito7919/DivScout) - Python SEC data parser
- [DivScout Web](https://github.com/chonito7919/divscout-web) - Vanilla JS frontend dashboard
- [DivScout Site](https://github.com/chonito7919/divscout-site) - Marketing website (this repo)

## Tech Stack

- Jekyll 4.3 static site generator
- HTML5/CSS3 with responsive design
- Playwright for end-to-end testing
- Hosted on Namecheap Stellar
- Apache 2.0 License

## Local Development

```bash
cd public_html
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview the site.

## Testing

Run end-to-end tests:

```bash
npm install
npx playwright install
npm test
```

84 tests cover homepage, about page, navigation, and all external links across Chrome, Firefox, Safari, and mobile.

## Deployment

Deploy to production:

```bash
./deploy.sh
```

This builds the Jekyll site and rsyncs it to the Namecheap Stellar hosting server.

## Project Structure

```
public_html/
├── _config.yml          # Jekyll configuration
├── _layouts/            # HTML templates
│   └── default.html
├── assets/
│   └── css/
│       └── style.css    # Site styling
├── index.html           # Landing page
├── about.html           # About page
├── .htaccess            # Apache config (www redirect, HTTPS)
└── Gemfile              # Ruby dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Project Statistics

- 404 companies tracked across major sectors
- 14,778 total dividend records processed
- 14,001 verified dividends (94.7% quality rate)
- 696 low-confidence entries flagged for review
- Average 36.6 dividend records per company

## Disclaimer

THIS SOFTWARE IS FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY. DivScout does not constitute financial advice, investment recommendations, or professional guidance. Always conduct thorough research and consult qualified financial professionals before making investment decisions.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

### Why Apache 2.0?

We chose Apache License 2.0 for its:
- Permissive terms allowing free use, modification, and distribution
- Business-friendly licensing without restrictive copyleft requirements
- Explicit patent rights protection
- Compatibility with most other open source licenses

DivScout's open-source approach ensures transparency in dividend data processing, enables community contributions, and builds trust through code auditability.
