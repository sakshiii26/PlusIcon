document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("myTable");

  // Example of dynamically adding a new row
  const newRow = table.insertRow();
  for (let i = 0; i < 6; i++) {
    const newCell = newRow.insertCell();
    newCell.textContent = `Row 3, Cell ${i + 1}`;
  }

  // Example of dynamically updating cell content
  table.rows[1].cells[0].textContent = "Updated Cell 1";
});
// document.addEventListener("DOMContentLoaded", function () {
//   const table = document.getElementById("myTable");
//   const addRowButton = document.getElementById("addRowButton");

//   addRowButton.addEventListener("click", function () {
//     const newRow = table.insertRow();
//     for (let i = 0; i < 6; i++) {
//       const newCell = newRow.insertCell();
//       newCell.textContent = `Row ${table.rows.length - 1}, Cell ${i + 1}`;
//     }
//     alert("New row created");
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const addRowButton = document.getElementById("addRowButton");
  const table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  addRowButton.addEventListener("click", function () {
    const newRow = table.insertRow();

    for (let i = 0; i < 6; i++) {
      const newCell = newRow.insertCell();
      const input = document.createElement("input");
      input.type = "text";
      newCell.appendChild(input);
    }

    alert("New row created!");
  });
});
