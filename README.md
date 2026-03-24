# Commitment Decision Engine

A FinOps decision-support prototype that evaluates commitment-based discount strategies under uncertainty.

This project is designed to help cloud finance, engineering, and leadership teams answer a critical question:

**How much cloud usage should we commit to, given forecast uncertainty, savings opportunity, and financial risk?**

Instead of treating Reserved Instances and Savings Plans as simple discount purchases, this engine treats commitment strategy as a governed economic decision.

---

## Why this project exists

Many organizations approach commitment strategy as a one-time cost savings exercise.

But in reality, commitment decisions require balancing:

- baseline usage stability
- forecast growth
- demand volatility
- coverage levels
- savings opportunity
- underutilization risk
- uncovered on-demand exposure

This prototype models those tradeoffs and produces a recommendation that is easier to explain to engineering, finance, and executive leadership.

---

## What this engine does

The Commitment Decision Engine:

- estimates steady-state usage from baseline and peak demand inputs
- tests multiple commitment coverage levels
- compares on-demand cost to discounted commitment options
- simulates stable, low-demand, and high-demand scenarios
- quantifies projected savings and financial risk
- recommends a commitment strategy with rationale

---

## Core question it answers

**What commitment strategy gives us the best balance between savings and flexibility?**

---

## Business value

This engine is intended to support FinOps capabilities such as:

- commitment planning
- budgeting and forecasting
- cloud financial governance
- executive business case development
- engineering-finance decision alignment

It moves the conversation from:

> “How much can we save?”

to:

> “What level of commitment is financially prudent given how this workload behaves?”

---

## Architecture flow

```text
Usage Baseline
   ↓
Coverage Modeling
   ↓
Scenario Simulation
   ↓
Risk Analysis
   ↓
Commitment Recommendation
   ↓
Executive Decision Output

Inputs

The engine accepts the following business inputs:

Baseline Monthly Usage
The estimated steady monthly usage level
Peak Monthly Usage
The higher-end usage observed or expected during spikes
Current On-Demand Cost
The monthly cloud cost if no commitment is purchased
Savings Plan Discount %
Expected discount rate under a Savings Plan strategy
Reserved Instance Discount %
Expected discount rate under an RI strategy
Forecast Growth %
Expected growth in workload demand
Demand Volatility %
The expected variability in usage over time
Target Coverage %
The initial commitment target to evaluate

Decision logic

The engine evaluates commitment strategy using a simple but useful tradeoff model.

Step 1: Estimate usable baseline

It starts by identifying the portion of usage that appears stable enough to support commitment.

Step 2: Model coverage options

It tests multiple coverage levels, such as:

50%
60%
70%
80%
Step 3: Simulate scenarios

It evaluates strategy under different demand conditions:

Stable demand
Low demand
High demand
Step 4: Quantify tradeoffs

For each option, the engine calculates:

projected savings
underutilization risk
uncovered on-demand exposure
net financial benefit
Step 5: Recommend strategy

It selects the most balanced option based on:

savings captured
volatility tolerance
waste risk
coverage prudence
Example output
{
  "recommended_strategy": "1-year Savings Plan",
  "recommended_coverage": "70%",
  "projected_annual_savings": 420000,
  "risk_exposure": 85000,
  "confidence": "High",
  "rationale": "Usage baseline is stable and forecast volatility is within acceptable range. A 70% coverage target balances savings capture with flexibility for variable demand."
}

Sample use case

A cloud team wants to decide whether to commit to a higher level of Savings Plans coverage.

They know:

their workload has a stable baseline
there is some monthly growth expected
demand varies, but not unpredictably
leadership wants savings without overcommitting

This engine helps them compare options and explain the decision in business terms.

Why this matters in FinOps

Commitment strategy is not just a procurement action.

It is a financial governance decision that sits at the intersection of:

workload behavior
forecasting
cloud pricing
risk tolerance
operating margin

A strong FinOps practice should be able to answer:

how much of demand is truly commit-worthy
what coverage level is safe
what savings are realistic
what downside risk exists if forecasts change

This prototype was built to make that logic more visible, testable, and explainable.

Leadership framing

This project reflects a broader FinOps philosophy:

Cloud financial operations should not stop at visibility.
They should produce governed, decision-ready economic signals.

In that sense, this engine is not just a savings calculator.
It is a prototype for commitment strategy governance.

Intended users

This project is relevant for:

FinOps leaders
cloud financial analysts
engineering managers
infrastructure leaders
finance business partners
procurement stakeholders
Future enhancements

Planned enhancements include:

support for multiple cloud providers
workload segmentation by team or business unit
integration with forecasting models
recommendation scoring by confidence band
dashboard visualization for executive reporting
scenario comparison across commitment types
linkage to allocation and unit economics models
Repository structure
commitment-decision-engine/
├── README.md
├── index.html
├── style.css
├── script.js
├── data/
│   └── sample_inputs.json
├── engine/
│   └── decision_logic.js
└── outputs/
    └── sample_output.json

Current status

Version 1 focuses on:

baseline usage estimation
coverage scenario comparison
savings calculation
risk tradeoff modeling
commitment recommendation output
Author perspective

This project was built as part of a broader FinOps portfolio focused on turning cloud cost management into an operating model.

The goal is to move beyond reactive reporting and toward systems that help organizations make more disciplined, explainable, and financially aligned cloud decisions.
