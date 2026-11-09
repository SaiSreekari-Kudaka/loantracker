# 🌿 TribalEase — Loan Tracking & Financial Assistance Platform

> **A multilingual, voice-enabled financial assistance web application designed to help users calculate loan costs, track borrowings, compare loan options, and understand financial information more easily.**

**TribalEase** is a client-side financial management and loan assistance platform built to simplify access to essential loan-related information and tools. The application is designed with accessibility and ease of use in mind, providing a unified interface for calculating loan repayments, tracking active loans, recording payments, comparing loan options, exploring bank information, and interacting through voice-enabled features.

The platform supports **Telugu, Hindi, and English**, making financial tools more accessible to users who may prefer interacting in their regional language.

---

## 📌 Overview

Managing loans and understanding interest calculations can be difficult, especially when users need to compare multiple options, track repayments, and understand how additional payments affect their financial commitments.

TribalEase brings these capabilities together in a single web application.

### The platform allows users to:

- Calculate EMI and loan repayment information
- View interest and remaining balance details
- Explore amortization data visually
- Track multiple loans
- Record loan payments
- Compare different loan options
- Export financial information as PDF
- Use voice input and speech output
- Access multilingual financial tools
- Explore bank and loan-related information

---

# ✨ Key Features

## 🧮 Interest & EMI Calculator

Calculate important loan information using:

- Principal amount
- Interest rate
- Loan duration
- Additional monthly payments

The calculator provides information about:

- Monthly EMI
- Total repayment amount
- Total interest payable
- Remaining loan balance
- Impact of additional monthly payments

---

## 📈 Amortization Analysis & Visualizations

TribalEase generates an amortization schedule to help users understand how their loan changes over time.

The application calculates:

- Monthly payments
- Principal paid
- Interest paid
- Remaining balance

Financial information is also visualized using interactive charts.

### Visualized Data

```text
Loan Amount
     │
     ▼
Monthly EMI Calculation
     │
     ├──► Monthly Interest
     │
     ├──► Principal Repayment
     │
     ▼
Remaining Loan Balance
```

The chart helps users understand how the outstanding balance and interest change throughout the loan period.

---

## 📋 Loan Tracker

Users can maintain and manage information about multiple loans.

The Loan Tracker supports:

- Adding loans
- Viewing saved loans
- Searching loan records
- Tracking repayment information
- Recording payments
- Viewing individual loan details

Loan data is stored locally in the browser using:

```text
localStorage
```

This allows loan information to persist across browser sessions on the same device.

---

## 💳 Payment Recording

Users can record payments made toward their loans.

This helps track:

- Loan repayment progress
- Payment history
- Remaining financial obligations

The feature provides a more practical alternative to using the application only as a loan calculator.

---

## ⚖️ Compare Loans

The Loan Comparison feature allows users to evaluate different loan options.

Users can compare loans based on information such as:

- Loan amount
- Interest rate
- Loan duration
- Monthly repayment
- Total repayment cost

The application helps identify which option may result in lower borrowing costs.

```text
        Loan A                    Loan B
           │                         │
           ▼                         ▼
      EMI Calculation          EMI Calculation
           │                         │
           └──────────┬──────────────┘
                      ▼
              Cost Comparison
                      ▼
              Better Loan Option
```

---

## 🎙️ Voice Interaction

TribalEase includes browser-based voice features to make the application easier to use.

### Voice Input

Users can provide input using speech recognition.

The application uses:

```text
Web Speech API
```

Voice recognition can process supported spoken input and use the result within the application.

### Voice Output

Financial results and summaries can also be spoken using browser text-to-speech functionality.

```text
Financial Result
       │
       ▼
Speech Synthesis
       │
       ▼
🔊 Spoken Response
```

---

## 🌐 Multilingual Support

TribalEase supports three languages:

- 🇮🇳 **Telugu**
- 🇮🇳 **Hindi**
- 🇬🇧 **English**

The selected language is stored locally so that the user's preference can persist between sessions.

The multilingual interface improves accessibility and makes the application more approachable for users who are more comfortable with regional languages.

---

## 📄 PDF Export

Users can export supported financial calculations and results as PDF documents.

This feature allows users to:

- Save calculation results
- Share financial information
- Maintain offline records

The application uses **jsPDF** for PDF generation.

---

## 📷 OCR Support

The project integrates **Tesseract.js** to support browser-based Optical Character Recognition capabilities.

OCR can be extended to help process text from financial or loan-related documents.

---

## 🏦 Bank Information

The application includes a dedicated Bank Information section to provide users with access to loan-related banking information.

This feature is designed to help users explore and understand available financial and loan options more easily.

---

## 🎨 Light & Dark Mode

TribalEase supports both:

- 🌙 Dark Mode
- ☀️ Light Mode

The selected theme is stored locally using browser storage.

---

## ⌨️ Keyboard Shortcuts

The application includes keyboard navigation shortcuts.

Users can navigate between primary sections using:

```text
Ctrl + 1 → Interest Calculator
Ctrl + 2 → Loan Tracker
Ctrl + 3 → Compare Loans
Ctrl + 4 → Voice
Ctrl + 5 → Bank Information
```

---

#
