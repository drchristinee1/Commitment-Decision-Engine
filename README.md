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
