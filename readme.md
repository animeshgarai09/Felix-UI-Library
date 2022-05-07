<div align="center">

<img alt="felix ui logo" src="logo/felix.png"  height="60px" />

<h1 align="center">Build modern websites better with speed </h1>

[![GitHub issues](https://img.shields.io/github/issues/animeshgarai09/Felix-UI-Vanilla?color=%233bb77e&style=for-the-badge)](https://github.com/animeshgarai09/Felix-UI-Library/issues)
![Forks](https://img.shields.io/github/forks/animeshgarai09/Felix-UI-Library?color=%233bb77e&style=for-the-badge)
![Stars](https://img.shields.io/github/stars/animeshgarai09/Felix-UI-Library?color=%233bb77e&style=for-the-badge)

</div>

---

Felix UI is an open source react component library which extends as a CSS styling framework, which helps developers to use best styles and components, by using pre-defined classnames. Felix UI helps you to quickly build your dream project, by focusing much on functionality, because we take care of your designs.

## Looking for documentation? 📝

For examples and code samples, check out in depth [Documentation](https://felix-ui.vercel.app/)

---

## Installing Felix UI

To use Felix UI components in react, all you need to do is install the `react-felix-ui` package.

```sh
$ npm i react-felix-ui
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `FelixProvider` provided by
   **react-felix-ui**.

```jsx
import { FelixProvider } from "react-felix-ui"

// Do this at the root of your application
function App({ children }) {
    return <FelixProvider>{children}</FelixProvider>
}
```

2. Felix UI ships with easy to use utility classes. To add CSS `Import` global CSS file from the package, in your `index.js` file.

```jsx
// import Felix UI global CSS file
import "react-felix-ui/dist/cjs/index.css"

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
```

3. Now you can start using components like so!:

```jsx
import { Button } from "react-felix-ui"

function Example() {
    return <Button>Created a button</Button>
}
```

## Use as a styling framework

Felix UI can be used as a styling framework for your vanilla HTML CSS projects also. To start using the components in your project, Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

```html
<link rel="stylesheet" href="https://felix-ui-dev.netlify.app/components/main.css" />
```

### Introduction to Felix UI

-   [Colors](#colors)
-   [Typography](#Typography)

### UI Components

-   [Alert](#alert)
-   [Avatar](#avatar)
-   [Badge](#badge)
-   [Button](#button)
-   [Card](#card)
-   [Grid](#grid)
-   [Image](#image)
-   [Input](#input)
-   [List](#list)
-   [Modal](#modal)
-   [Navigation](#navigation)
-   [Rating](#rating)
-   [Toast](#toast)
-   [Slider](#slider)

---

### Colors

Colors are integral part of a UI and UX. Felix UI ship with aesthetically pleasing color pallet.

To find more detail on the below topics visit documentation on [Colors](https://felix-ui.vercel.app/documentation/colors)

| Color     | Hex                                                              |
| --------- | ---------------------------------------------------------------- |
| Primary   | ![#3bb77e](https://via.placeholder.com/10/3bb77e?text=+) #3bb77e |
| Secondary | ![#2d3748](https://via.placeholder.com/10/2d3748?text=+) #2d3748 |
| Gray      | ![#626262](https://via.placeholder.com/10/626262?text=+) #626262 |
| Success   | ![#20a779](https://via.placeholder.com/10/20a779?text=+) #20a779 |
| Error     | ![#fd4e4e](https://via.placeholder.com/10/fd4e4e?text=+) #fd4e4e |
| Warning   | ![#f8aa1c](https://via.placeholder.com/10/f8aa1c?text=+) #f8aa1c |
| Info      | ![#007bc3](https://via.placeholder.com/10/007bc3?text=+) #007bc3 |

-   Detailed color pallet
-   Utility classes for colors

---

### Typography

Use Typography to format text content on your web site.

To find more detail on the below topics visit documentation on [Typography](https://felix-ui.vercel.app/documentation/typography)

-   Display
-   Headings
-   Alignment
-   Inline text elements

---

### Alert

Alerts are used to communicate a state that affects a system, feature or page. Alerts can be used to important messages to the user.

To find more detail on the below topics visit documentation on [Alert](https://felix-ui.vercel.app/documentation/alert)

-   Primary alert
-   Error alert
-   Info alert
-   Success alert
-   Warning alert

---

### Avatar

Avatar is used to represent a user, and displays the profile picture or initials.

To find more detail on the below topics visit documentation on [Avatar](https://felix-ui.vercel.app/documentation/avatar)

-   Name initials avatars
-   Different sized avatars
-   Avatar groups
-   Avatar with badge for status

---

### Badge

Badges are used to highlight an item's status for quick recognition. Badge can be used to show notification count.

To find more detail on the below topics visit documentation on [Badge](https://felix-ui.vercel.app/documentation/badge)

-   Badge on icons
-   Badge on text

---

### Button

The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

To find more detail on the below topics visit documentation on [Button](https://felix-ui.vercel.app/documentation/button)

-   Solid primary buttons
-   Outlined primary buttons
-   Link button
-   Icon button

---

### Card

Card are used to show user related data collectively, like product details. Cards can be proved very useful while building websites with huge data.

To find more detail on the below topics visit documentation on [Card](https://felix-ui.vercel.app/documentation/card)

-   Horizontal text card
-   Vertical item card
-   Text overlay card
-   Dismiss card

---

### Grid

CSS Grid can be used to structure elements in columns.

To find more detail on the below topics visit documentation on [Grid](https://felix-ui.vercel.app/documentation/grid)

-   Two columns grid
-   Three columns grid

---

### Image

Image can be used to display large picture on the website.

To find more detail on the below topics visit documentation on [Image](https://felix-ui.vercel.app/documentation/image)

-   Responsive image
-   Round image

---

### Input

The input is used to get user input in a text field to feed into the system.

To find more detail on the below topics visit documentation on [Input](https://felix-ui.vercel.app/documentation/input)

-   Form input
-   Form input with validation

---

### List

List can be used to show a list of items.

To find more detail on the below topics visit documentation on [List](https://felix-ui.vercel.app/documentation/list)

-   Numbered list
-   Lowercase alpha list
-   Uppercase alpha list
-   Disc list
-   Square list
-   Circle list
-   NO pre-styled list

---

### Modal

Modal can be used for creating dialog boxes, to communicate with user.

To find more detail on the below topics visit documentation on [Modal](https://felix-ui.vercel.app/documentation/modal)

-   Modal component
-   Modal demo

---

### Navigation

Navigation can be used to give the user facility to navigate between different pages.

To find more detail on the below topics visit documentation on [Navigation](https://felix-ui.vercel.app/documentation/navigation)

-   Desktop variation

---

### Rating

Rating can be used to show ratings on the product, or it can also be used for taking ratings from the user.

To find more detail on the below topics visit documentation on [Rating](https://felix-ui.vercel.app/documentation/rating)

-   Filled rating

---

### Toast

Toast can be used to show notifications to the user.

To find more detail on the below topics visit documentation on [Toast](https://felix-ui.vercel.app/documentation/toast)

-   Success toast
-   Error toast
-   Warning toast
-   Info toast

---

### Slider

Sliders are used to decide range for something like sound in videos, price in shopping sites, etc.

To find more detail on the below topics visit documentation on [Slider](https://felix-ui.vercel.app/documentation/slider)

-   Custom slider

## 👨‍💻 Connect with me

<a href="https://animesh-designs.vercel.app/"><img src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white"/></a>
<a href="https://twitter.com/animeshgarai09"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/animesh-garai-29a5251b4"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href="mailto:animeshgarai09@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
