function runEngine() {

  // === GET INPUT VALUES ===
  const baseline = parseFloat(document.getElementById("baseline").value);
  const peak = parseFloat(document.getElementById("peak").value);
  const ondemand = parseFloat(document.getElementById("ondemand").value);
  const spDiscount = parseFloat(document.getElementById("spDiscount").value) / 100;
  const riDiscount = parseFloat(document.getElementById("riDiscount").value) / 100;
  const growth = parseFloat(document.getElementById("growth").value) / 100;
  const volatility = parseFloat(document.getElementById("volatility").value) / 100;

  // === STEP 1: ESTIMATE STEADY USAGE ===
  const steadyUsage = baseline * (1 + growth);

  // === STEP 2: TEST COVERAGE OPTIONS ===
  const coverageOptions = [0.5, 0.6, 0.7, 0.8];

  let bestOption = null;
  let bestScore = -Infinity;

  coverageOptions.forEach(coverage => {

    // === COMMITTED PORTION ===
    const committedUsage = steadyUsage * coverage;

    // === COST CALCULATIONS ===
    const spCost = committedUsage * (1 - spDiscount);
    const riCost = committedUsage * (1 - riDiscount);

    // pick better discount
    const commitmentCost = Math.min(spCost, riCost);

    const uncoveredUsage = steadyUsage - committedUsage;
    const uncoveredCost = uncoveredUsage;

    const totalCost = commitmentCost + uncoveredCost;

    const savings = ondemand - totalCost;

    // === STEP 3: RISK SIMULATION ===
    const lowDemand = steadyUsage * (1 - volatility);
    const wastedCommitment = Math.max(0, committedUsage - lowDemand);

    const risk = wastedCommitment;

    // === STEP 4: SCORE TRADEOFF ===
    const score = savings - risk;

    if (score > bestScore) {
      bestScore = score;
      bestOption = {
        coverage,
        savings,
        risk,
        strategy: spCost < riCost ? "Savings Plan" : "Reserved Instances"
      };
    }

  });

  // === STEP 5: CONFIDENCE ===
  let confidence = "Medium";
  if (volatility < 0.1) confidence = "High";
  if (volatility > 0.25) confidence = "Low";

  // === STEP 6: OUTPUT ===
  document.getElementById("strategy").innerText = bestOption.strategy;
  document.getElementById("coverage").innerText = Math.round(bestOption.coverage * 100) + "%";
  document.getElementById("savings").innerText = "$" + Math.round(bestOption.savings).toLocaleString();
  document.getElementById("risk").innerText = "$" + Math.round(bestOption.risk).toLocaleString();
  document.getElementById("confidence").innerText = confidence;

  document.getElementById("rationale").innerText =
    "The recommended coverage balances savings and risk. Given the current demand volatility, this level of commitment captures meaningful savings while limiting underutilization exposure.";

}
