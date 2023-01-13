# groenwinkel

It is a project built using vanilla JavaScript which goal is to alow the user places an order at a vegetable shop in Groenwinkel.html. The main functionalities from the page are:

* Add the vegetable selected in the table with amount specified by the user;
* Update vegetable's amount;
* Remove vegetable selecetd from table;
* Show price from vegetable selected and total price that the user needs to pay;
* User can write only number in the input;

but express and http-server were installed to read the local json file. You can see this project running without Node or to running with Node. Although when the project is runned with Node the delete functionality does not work, while this problem does not happen in the other way.


Steps to run the project with Node:

1. Run npm install;
2. Rum http-server -c-1;
4. Remove comments from: 
```
// import vegetables from './vegetables.json' assert { type: "json" };
```
5. Add comments from line 3 until 29;
6. Change ``` <script src="script.js"></script> ``` to ``` <script type="module" src="script.js"></script> ```
3. Go to http://127.0.0.1:8080


