# groenwinkel

The project was built in JavaScript, but express and http-server were installed to become able to read the local json file. You can see this project running without Node or to running with Node. Although when the project is runned with Node the delete functionality does not work, while this problem does not happen in the other way.


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


