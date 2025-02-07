# Cocktail List

A small interview application to test the applicants Angular skills.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Task
Extend example application which can be found at: https://github.com/nexus49/cocktails
This current app lists a number of cocktail recipies and their ingredients.
Implement the following tasks:
- Add a detail view to display data of a single cocktail
- On the detail page display the image and the instructions of selected cocktail
- Improve data model by transforming ingredients attributes into a ingredients array.
- Improve UI design by adding https://material.angular.io for the table
Please consider the following guidelines:
- Use Angular
- the data for this page can be retrieved from: 
  - List of cocktails `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  - A single Cocktail `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
Tips:
- Share your thinking process, what needs to be done
- Check and understand the existing code first, before you start
- Feel free to use google in case of doubts :-)
