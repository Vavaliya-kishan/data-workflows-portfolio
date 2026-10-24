# Kishan Vavaliya — static portfolio

Open `index.html` locally, or publish these files together. This deployment folder is flat for browser-based repository uploads. Include `.nojekyll`. There is no build step, framework, tracking, form backend or paid dependency.

## Site files

- `index.html`, `styles.css`, `script.js`: responsive portfolio and accessible project tabs.
- `import-report.html`: saved report from the executed synthetic import demonstration.
- `import-accepted.csv`, `import-rejected.csv`, `import-run-summary.json`: saved import evidence.
- `import-sample-orders.csv`: synthetic input fixture.
- `main.py`, `test_main.py`, `import-README.md`: Python source, seven automated tests and sample instructions.
- `migration-demo.sql`, `migration-expected-results.json`, `migration-verify-fixtures.cjs`, `migration-README.md`: T-SQL fixture and independent expected-result verification.

## Verification status

Import: 12 input rows, five accepted and seven rejected; seven automated tests pass. SQLite is used for the local demonstration. It is not a live SQL Server connector.

Migration: 25 source rows, 26 target rows and 10 expected discrepancy entries. Fixture verified; SQL Server execution pending. The verifier checks fixture arithmetic without executing T-SQL.

All samples are synthetic. No paid client engagements, measured production results or guaranteed outcomes are claimed.

Keep all filenames unchanged so links continue to resolve. A static host should serve the code samples as plain text or downloads. The Fiverr button opens the confirmed profile.
