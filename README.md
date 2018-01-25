# Shaw and Partners Full-Stack test - Raphael Lupchinski

Simple Node server to get if a provided phrase is a palindrome.
Simple React.js app to make requests to the API.

This is part of the admission test for Shaw and Partners.

## Guidelines

Application should follow some patterns, as per provided e-mail:

* Create a Restful service in NodeJS to handle requests with a word or phrase and return response with status code 200 if it is a palindrome and 400 if it’s not a palindrome.
* Finish in less than 2 hours.
* Deliver this as PR in the repo.

### Installing

This code was developed using [Yarn](https://yarnpkg.com/pt-BR/) as its package manager. It can be installed with:
```
npm install -g yarn
```

After this, run:
```
yarn install
```
to download all project dependencies.

The project runs locally using [Webpack](https://webpack.js.org/).
Webpack-dev-server will create the development server to host the index file and Cross-env will make sure our CLI commands will run properly on all OS.

Now with Yarn installed, run:
```
yarn dev
```
to run both server and client code. Should be available on http://localhost:8082.
Change the port in the package.json file if needed.


### Troubleshooting

In case I forgot to list a package that was not found, please 'yarn add' it or 'npm install -g' it so the scripts can run properly.

### Project Details

This is a very simple project made with Node and React. The idea is that you can type a phrase in the input box and check if that phrase is a palindrome or not. A palindrome is a word or phrase that when written backwards, follows the same charater order than the original text did.

React app was written in a single client.js file, basically rendering the input and performing the API call with Axios to the Node server.
The request looks like:
```
/api/palindrome?phrase=THIS_IS_NOT_A_PALINDROME
```

Attention to the UI/UX was purposefully not given, as the requirements were more funcional than esthetical. This means that this app has that nice 80's feeling to it :)

## Author

* **Raphael Lupchinski** - [LinkedIn](https://www.linkedin.com/in/rlupchinski/)
