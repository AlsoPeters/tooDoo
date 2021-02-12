function addTodo() {
  let inputVal = document.getElementById('inputVal').value,
  listNode = document.getElementById('todoList'),
  liNode = document.createElement('li'),
  inputNode = document.createTextNode(inputVal);
  if(inputVal == null || inputVal == '') {
    //need custom alert box
    alert('Input is blank');
    return false;
  }
  console.log(inputVal)

  liNode.appendChild(inputNode);
  listNode.appendChild(liNode);
}