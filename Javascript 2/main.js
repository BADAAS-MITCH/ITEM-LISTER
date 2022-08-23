var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

//Form Submit Event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click', removeItem)
//filter Event
filter.addEventListener('keyup', filterItems)
//Add Item
function addItem(e){
    e.preventDefault();

    //get input
    var newItem = document.getElementById('item').value;

    //Create new li Element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //Add text node
    li.appendChild(document.createTextNode(newItem));

    //Create button element
    var deleteBtn = document.createElement('button');

    //Addclass
    deleteBtn.className = 'btn btn-danger btn-sm delete float-right ';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    //append deleteBtn
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
};    

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        };
    };
};

// Filter Items
function filterItems(e){
    //convert text to lower case
    var text = e.target.value.toLowerCase();
    //Get lis
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.backgroundColor = 'green';
        }else{
            item.style.background = 'grey';
        }
    });
};

// ES5
// function deleteElement(str){
//     var item = 2;
// }

// ES6
// const deleteElement = (str) => {
//     var item1 = 2
//     var item2 = 3
    
//     return item1 + item2;
// }
