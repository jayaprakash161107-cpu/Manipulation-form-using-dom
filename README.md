# DOM Manipulation With Form

A simple form project created using **HTML, CSS, and JavaScript**.

This project helped me practice JavaScript DOM manipulation by collecting user input and displaying the submitted data dynamically in a table.

## Features

- User details form
- First Name and Last Name
- Email
- Address
- Pin Code
- Gender
- State and Country
- Food preference selection using radio buttons
- Form validation using `required`
- Dynamically creates table rows
- Displays submitted data in a history table
- Clears the form after submission
- Responsive table with horizontal scrolling

## Technologies Used

- HTML5
- CSS3
- JavaScript

## JavaScript Concepts Used

In this project, I practiced:

- `getElementById()`
- `querySelector()`
- `querySelectorAll()`
- `addEventListener()`
- `preventDefault()`
- `.value`
- `:checked`
- `createElement()`
- `innerHTML`
- `appendChild()`
- `form.reset()`

## How It Works

1. The user enters their personal details.
2. The user selects Veg Food, Non-Veg Food, and Fruit.
3. The user clicks the **Submit** button.
4. JavaScript prevents the default form refresh.
5. JavaScript gets all the entered values.
6. The selected radio button values are collected using `:checked`.
7. A new table row is created.
8. The submitted information is displayed in the history table.
9. The form is cleared using `form.reset()`.

## Example JavaScript

```javascript
const Vegfood = document.querySelector(
    'input[name="Veg Food"]:checked'
);

const nonveg = document.querySelector(
    'input[name="Non veg"]:checked'
);

const fruits = document.querySelector(
    'input[name="Fruits"]:checked'
);
