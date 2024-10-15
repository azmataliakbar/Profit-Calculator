function calculateProfit() {
  // Get the values entered by the user
  const investment = parseFloat(document.getElementById("investment").value);
  const profitPercent = parseFloat(document.getElementById("profitPercent").value);

  // Validate the input
  if (isNaN(investment) || isNaN(profitPercent) || investment <= 0 || profitPercent <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid values for both fields.";
    return;
  }

  // Calculate profit before tax
  const profit = (investment * profitPercent) / 100;

  // Calculate profit after 15% tax deduction for filer
  const profitAfter15Tax = profit - (profit * 15 / 100);

  // Calculate profit after 30% tax deduction for filer
  const profitAfter30Tax = profit - (profit * 30 / 100);

  // Display the results
  document.getElementById("result").innerHTML = `
    <p>Original Profit:</p>
    <p>Rs.  ${profit.toFixed(2)}</p>
    <p>------</p>
    <p>For Filer</p>
    <p>(15% tax deduction) :</p>
    <p> Profit: Rs.  ${profitAfter15Tax.toFixed(2)}</p>
    <p>------</p>
    <p>For Non Filer</p>
    <p>(30% tax deduction) :</p>
    <p>Profit: Rs. ${profitAfter30Tax.toFixed(2)}</p>
  `;
}
