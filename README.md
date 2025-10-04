# DivScout.com

Business profile website for DivScout - a dividend tracking platform that extracts and validates dividend data from SEC EDGAR filings.

## Overview

This is a Jekyll-based static site that showcases the DivScout project, which consists of:
- **Backend**: Python parser that extracts dividend data from SEC XBRL filings
- **Frontend**: Web dashboard for browsing and analyzing dividend payment histories

## Live Sites

- **Marketing Site**: [divscout.com](https://divscout.com)
- **Web Dashboard**: [divscout.app](https://divscout.app)

## Related Repositories

- [DivScout Backend](https://github.com/chonito7919/DivScout) - Python SEC data parser
- [DivScout Web](https://github.com/chonito7919/divscout-web) - Vanilla JS frontend dashboard

## Tech Stack

- Jekyll 4.3
- HTML5/CSS3
- Responsive design
- Hosted on Namecheap Stellar

## Local Development

```bash
cd public_html
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview the site.

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

## Disclaimer

This website is for educational and informational purposes only. The content does not constitute financial advice, investment recommendations, or any form of professional guidance.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
