'use strict';

const list = document.querySelector('ul');

function strNum(str) {
  const result = str
    .slice(1)
    .split(',')
    .reduce((a, b) => a + b);

  return +result;
}

function sortList(someList) {
  const items = Array.from(someList.getElementsByTagName('li'));

  items.sort(
    (a, b) =>
      strNum(b.getAttribute('data-salary')) -
      strNum(a.getAttribute('data-salary')),
  );
  someList.innerHTML = '';
  items.forEach((el) => someList.appendChild(el));
}

function getEmployees(someList) {
  const items = Array.from(someList.getElementsByTagName('li'));

  return items.map((el) => ({
    ...someList,
    'data-salary': strNum(el.getAttribute('data-salary')),
  }));
}

sortList(list);
getEmployees(list);
