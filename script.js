import vegetables from './vegetables.json' assert { type: "json" };

console.log("TEST", vegetables)

// const vegetables = [
//     {
//         "vegetable": "appel",
//         "price": 1.90,
//         "unit": "kg"
//     },
//     {
//         "vegetable": "banana",
//         "price": 0.90,
//         "unit": "kg"
//     },
//     {
//         "vegetable": "papaya",
//         "price": 2,
//         "unit": "piece"
//     },
//     {
//         "vegetable": "pineapple",
//         "price": 1,
//         "unit": "kg"
//     },
//     {
//         "vegetable": "broccoli",
//         "price": 1.50,
//         "unit": "kg"
//     }
// ];

const list = document.getElementById("vegetables");
const rows = document.getElementsByTagName("tr");
const addButton = document.getElementById("add");
addButton.addEventListener("click",selectVegetable);

// With this forEach all vegetables options are created ar the select tag.
vegetables.forEach((vegetable, index) => {
    let option = document.createElement('option');
    option.innerHTML = `${vegetable.vegetable.charAt(0).toUpperCase() + 
        vegetable.vegetable.slice(1)} (${vegetable.price}/${vegetable.unit})`;
    option.setAttribute("value", `${index}`);
    list.append(option);
});

// This funciton get user's options and save or update table's informaiton
function selectVegetable(){
    const amount= document.getElementById("amount").value;
    const total = amount * vegetables[list.value].price;
    if(amount > 0){
        const optionSelected = [
            vegetables[list.value].vegetable.charAt(0).toUpperCase() + vegetables[list.value].vegetable.slice(1), 
            amount, 
            vegetables[list.value].price.toFixed(2), 
            total.toFixed(2)
        ];

        if(checkVegetableIsAtTable(optionSelected)){
            let index = checkVegetableIsAtTable(optionSelected);
            updateVegetableSelectes(index, optionSelected);
        }else{
            addVegetaltoTable(optionSelected);
        }
    }
}

// This funciton create a new vegetable in the table
function addVegetaltoTable(data){
    let table = document.getElementById("vegetablesTable");
    const rowIndex = rows.length - 1;
    const row = table.insertRow(rowIndex);

    data.forEach((info, index) => {
        let cell = row.insertCell(index);
        cell.innerHTML = info;
    });

    const lastCell = row.insertCell(4);
    lastCell.innerHTML = "<button class='delete' onClick=deleteVegetablefromTable(this)>Delete</button>";
    calculateTotal();

}

// This funciton delete vegetables selected by user from the table
function deleteVegetablefromTable(r) {
    const i = r.parentNode.parentNode.rowIndex;
    document.getElementById("vegetablesTable").deleteRow(i);
    calculateTotal();
}

// This funciton calculate the total that user needs to pay for vegetables
function calculateTotal(){
    let total = 0;

    for(let i = 1; i <= rows.length - 2; i++){
        total = parseFloat(rows[i].cells[3].firstChild.nodeValue) + total;
    }

    rows[rows.length - 1].cells[3].innerHTML = total.toFixed(2);
}

// This funciton check if vegetable selected by user existes in the table
function checkVegetableIsAtTable(data){
    for(let i = 1; i <= rows.length - 1; i++){
        
        if(rows[i].cells[0].firstChild.nodeValue === data[0]){
            return i;
        }
    }

}

// This funcitono update vagetable information from the table
function updateVegetableSelectes(index, data){
    rows[index].cells[1].innerHTML = data[1];
    rows[index].cells[3].innerHTML = data[3];
    calculateTotal();
}


