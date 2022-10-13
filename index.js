let inputField = document.getElementById('inputField');
let addbtn = document.getElementById('addBtn');
let tasks = document.getElementById('task');

addbtn.addEventListener('click', () => {
  let para = document.createElement('p');
  para.innerHTML = inputField.value;
  para.classList.add('para-styling');
  tasks.appendChild(para);

  console.log(tasks);

  para.addEventListener('click', () => {
    para.style.textDecoration = 'line-through';
  })

  para.addEventListener('dblclick', () => {
    tasks.removeChild(para);
  })
})