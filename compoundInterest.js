// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;
  rate = (form.elements['rate'].valueAsNumber) / 100;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value</th></tr>';

// ---> Write your code here to generate the table and show it in the page
var endValue = amount;
for (var i = 1; i <= years; i++) {

  table +=
    `<tr> <td>${i}</td>` + // year
    //  `<td>${endValue}</td>`; // starting value;
    `<td>$${Number(Math.round( endValue + 'e2')+'e-2')}</td>`; // starting value;

  var interestGain  = endValue * rate
  endValue += interestGain
  table +=
    //  `<td>${interestGain}</td>` + // interest earnted
    `<td>$${Number(Math.round( interestGain + 'e2')+'e-2')}</td>` +
    // `<td>${endValue + interestGain}</th></td>`;
    `<td>$${Number(Math.round( endValue + 'e2')+'e-2')}</td> </tr>`;


}
// END TABLE
table += "</table>"


const result = document.getElementById('result');
result.innerHTML = table;

} // end generateTable
