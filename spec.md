# FinLit India

## Current State
The app has 14 pages/routes:
- `/` Home, `/about` About, `/india-stats` India Stats
- `/schemes` Government Schemes, `/tools/budget` Budget Planner, `/tools/investment` Investment Calculator
- `/quiz` Quiz, `/tips` Pro Financial Tips, `/retirement` Retirement Planning
- `/contact` Contact, `/dashboard` Dashboard, `/admin` Admin Panel
- `/login` Login, `/signup` Signup

Missing from the 14-topic curriculum the user requested:
- Banking System (India-focused)
- Digital Payments & FinTech
- Saving & Investment Basics
- Credit & Loans
- Financial Fraud & Security
- Taxes (Simple Version)

## Requested Changes (Diff)

### Add
- `/banking` - Banking System page: types of accounts (Savings, Current, FD, RD), how to open an account, ATM/Debit/Credit card, interest rates, net banking & mobile banking
- `/digital-payments` - Digital Payments & FinTech page: UPI explained, PhonePe/GPay/Paytm apps, QR payments, Wallets vs UPI, safe online transactions
- `/savings-investing` - Saving & Investment Basics page: saving vs investing difference, FD/MF/Stocks/Gold, risk vs return, power of compounding
- `/credit-loans` - Credit & Loans page: CIBIL score explained, types of loans (personal/home/education), EMI concept, good vs bad debt, debt traps
- `/fraud-security` - Financial Fraud & Security page: UPI/OTP scams, phishing & fake calls, safe password practices, how to report fraud in India, RBI guidelines
- `/taxes` - Taxes page: Income Tax basics, PAN card, GST basics, why tax matters, filing basics
- New navbar links for all 6 pages (organized under dropdowns or extended nav)

### Modify
- `Navbar.tsx` - Add links to 6 new pages, possibly grouped under "Learn" dropdown to keep nav manageable
- `App.tsx` - Add 6 new lazy-loaded routes

### Remove
- Nothing removed

## Implementation Plan
1. Create 6 new page components with content-rich, card-based layouts matching existing design
2. Register all 6 routes in App.tsx with lazy imports
3. Add a "Learn" dropdown in Navbar that groups Banking, Digital Payments, Saving & Investing, Credit & Loans, Fraud & Security, Taxes
4. Validate, typecheck, and deploy
