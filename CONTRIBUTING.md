# Contributing to DivScout.com

Thank you for your interest in contributing to DivScout.com! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Test your changes locally
6. Submit a pull request

## Development Setup

```bash
cd public_html
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview your changes.

## Code Style

- Use consistent indentation (2 spaces)
- Write semantic HTML5
- Keep CSS organized by section
- Comment complex logic
- Test responsiveness on mobile and desktop

## Testing

Run end-to-end tests before submitting:

```bash
npm install
npx playwright install
npm test
```

Ensure all 84 tests pass across browsers.

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Update documentation if you're changing functionality
3. Run tests and verify the site builds without errors
4. Provide a clear description of your changes
5. Reference any related issues

## Content Guidelines

- Keep content accurate and up-to-date
- Maintain professional tone
- Include the educational disclaimer where appropriate
- Link to official sources (SEC, GitHub repos)

## Reporting Issues

- Use the GitHub issue tracker
- Provide detailed reproduction steps
- Include screenshots if applicable
- Specify browser/device information for UI issues

## Questions?

Feel free to open an issue for questions or discussion about potential contributions.

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
