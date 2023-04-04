![dsl-header](dsl-header.png)

# DSL - Node Exercises 

* Download this folder
* Open this folder in visual studio code
* Open a terminal
* execute each script in turn, read and understand its output eg : 

```
$ node exercise1.js
> Hello
```


## Exercise 0 
([Help - NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/))

* What file did you create with the previous command?
* What is the role of this file?

## Exercise 1 
([Help - console](https://nodejs.org/api/console.html))

In a file `exercise1.js`:

Create a code that displays `hello` in the console.

To launch this file, type in your terminal `node exercise1.js`.


## Exercise 2 
([Help - fs](https://nodejs.org/api/fs.html))

In a file `exercise2.js`:

Using the `writeFile` function, write `hello` in a file called `test.html`.


## Exercise 3 
([Help - fs](https://nodejs.org/api/fs.html))

In a file `exercise3.js`:

Using the `readFile` function, read the file `test.html` and display the content in the console.


## Exercise 4 
([Help - fs](https://nodejs.org/api/fs.html))

In a file `exercise4.js`:

Write the work done in the previous exercises in ES5 or ES6 (depending which version you used).


## Exercise 5 
([Help - http](https://nodejs.org/api/http.html))

In a file `exercise5.js`:

This will launch a (tiny) web server - Run the file, and then go and look at : ([Help - http](https://127.0.0.1:3000))


## Exercise 6
([Help - NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/))
* Create a NEW FOLDER called example6
* Open the terminal in the new folder
* run the command : 
``` npm init ```
* What files did you create with the previous command?
* What is the role of this file?
* run the command : 
``` npm install chalk ```
* check the package.json file again - Can you see the reference to chalk?
* what other files were downloded?
* copy exercise6.js into the new folder
* add ``` "type": "module" ``` to your ```package.json```
* run ``` node exercise7.js ```

## Exercise 7
([Help - NPM](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/))
* Create a NEW FOLDER called example7
* Open the terminal in the new folder
* run the command : 
``` npm init ```
* What files did you create with the previous command?
* What is the role of this file?
* run the command : 
``` npm install chalk readline-sync```
* check the package.json file again - Can you see the reference to chalk and readline-sync?
* what other files were downloded?
* copy exercise7.js into the new folder
* add ``` "type": "module" ``` to your ```package.json```
* run ``` node exercise7.js ```

## Exercise 8
parseInt() is used to convert the strings to numbers



## Exercise 9
This uses node-opcua
The default end-point is from prosys simulation server

---

### Notes

``` "type": "module" ``` has been added to ```package.json``` to allow the use of import syntax

### Credits
Initially Forked from  : https://github.com/feychou/baby-node



![dsl-footer](dsl-footer.png)
