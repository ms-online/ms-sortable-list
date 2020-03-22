// 获取节点
const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Bernard Arnault",
  "Warren Buffett",
  "Mark Zuckerberg",
  "Amancio Ortega",
  "Larry Ellison",
  "Larry Page",
  "Steve Ballmer",
  "Carlos Slim Helu"
];
// 存储所有list
const listItems = [];

let dragStartIndex;

createList();

// const numbers = [1, 3, 9, 10, 160, 302];
// console.log(
//   numbers.sort(function(a, b) {
//     return a - b;
//   })
// );
// 创建createList函数，将li插入到DOM节点中
function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      //   console.log(person);
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class ="draggable" draggable ="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;

      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
}
