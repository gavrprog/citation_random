This project created for executinf a tast case.

This application get by API random citation by pressing a button


# Simple NEXTjs app that displays rendom citations

This simpl website shows a random citation by pressing the button "NEW CITATION". Eech new citation is got throught API. In additional in the website footr is placed a visitiors counter that shows new visitors and visitors which visit the site again. In this project is used [NEXTjs](https://nextjs.org/docs) with [Teilwind](https://tailwindcss.com/docs/installation) and [Prisma](https://www.prisma.io/docs/guides) using a [SQLite](https://www.sqlite.org/docs.html) database. You can find the database file with some dummy data at [`./prisma/dev.db`](./prisma/dev.db). Like a store space for marking a new/old visitor is used the Local Storage.

## Getting started

### 1. Clone the repository

Clone this repository:

```
git clone https://github.com/gavrprog/citation_random.git
```

Install npm dependencies:

```
cd citation_random
npm install
```

### 2. Initialise the database with zero values

Run the following command to create your zero SQLite database file:

```
node prisma/seed.js
```

### 3. Run the script

Execute the website with this command: 

```
npm run dev
```

The website will be accessble "http://localhost:3000/"

## Steps to reproduce the effects of the website

#### For a new citation to appear:

1. Push the button "NEW CITATION"

#### TO check the visitor count:

1. When the site is loaded in first time the Local Storage has`t any mark in the Local Storage and in the site footer there is a new visitor "new: 1".
2. Reload the webpage (F5 or alt+F5). This will be a second visit on the site and the visitirs count change its value: "new: 1, revisit:1".
3. Call the DevTolls by pressing F12 and chooce "Application - Local storage - http://localhost:3000" and by right mouse button - "Clear".
4. For the websiate now the visitor is new again.
5. Reload the webpage. The counter shows an another one visitor.
