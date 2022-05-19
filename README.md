# Work modern, compile legacy

You can write your code in a modern style like **TypeScript** and then compile it to **ES5**, also you can combine your project into one single file.

## Installation

First, you need to install a few packages by running the following command:

```bash
npm install
```

## /src folder

here you can write your code and separate it into multi-files and multi-folders, you can use all features of **TypeScript** and modern **ECMAScript**, also you can use any additional **npm packages**

## Run your code

you can run your code by running the following command:

```bash
npm run dev
```

and by using the **nodemon** package you don't need to re-run your code for every change.

## Compile your code from TypeScript to JavaScript

Run:

```bash
npm run tsc
```

this will generate a new folder named **/dist** and compile your ts files to js files.

also, you can change the type of compiled files to any **ECMA Script** version, by changing the **target** flag in **./tsconfig.json** file

## Build

combine your project into one file by running:

```bash
npm run build
```

this will generate a new folder named **/build** and a new file **bundle.js** that contains all your project codes.

you can change the directory and the file name by changing the **scripts.build** flag in **./package.json** file, after -o tag.

## Shortcut/Compile

if you finish with your code you can just run:

```bash
npm run compile
```

this command will compile your TypeScript files and combine them into one file.
