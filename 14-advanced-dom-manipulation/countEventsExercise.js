// https://developer.mozilla.org/en-US/docs/Web/Events
let count = 0;
let tables = document.querySelectorAll(".standard-table");

for (let i=0; i<tables.length; i++) {
  let table = tables[i];
  let trs = table.getElementsByTagName("tr");
  count += trs.length;
}
console.log(count);
