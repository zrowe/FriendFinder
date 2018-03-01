# Friend Finder

A Node.js &amp; MySQL based Marketplace.  This cli application presents items of an inventory for purchase by a customer.  It includes a 'Manager' tool to update inventory and add additional products.

## Getting Started

To use, just clone down the repo, install the NPM modules, start the server, and enjoy.

### Prerequisites

Friend Finder was built and tested with the following nodeJS NPM packages:

| NPM Package     | Version |
| --------------- | ------- |
| express         | 4.16.2  |


### Installing

1. Clone the repo to your system.

1. Run `npm install`


### Starting the Server

From within the root of the project, type: `node server.js`

By default, the sever will start listening on port 3000.  If PORT is present in the environment, it will honor that port number.  This is typical when running within cloud servers like Heroku, Azure, Amazon, and so forth.

If you want the server to listen on a different port, pass the port number when starting the server like so: `PORT=9999 node server.js` 

### Usage

Launch a browser (preferably, Chrome) and direct it to your server and port (by default, `localhost:3000`).

The user is greeted by the welcome screen:

![Welcome Screen](screenshots/welcome.png "Welcome Screen")

From this screen you can:

1. Chose to take the survey (by pressing the Go To Survey button),
1. See the raw list of recorded 'friends' in the database by clicking on the API Friends List hyperlink, or;
1. See the repo by clicking on the GitHub Repo hyperlink.

#### Take the Survey

To start your survey, press the !screenshots/GoToSurvey.png "Button" which will send the user to a questionaire with 10 simple questions.

The user is presented with the list of current products.  Using the product ID, the customer may select a product to purchase and is then asked for a quantity.  The transaction is processed and the amount of the sale presented.  

This cycle iterates until the customer chooses to leave the application by entering a "Q" at any prompt.  

![Customer Demonstration](screenshots/customer.gif "The Customer's View")


#### Manager View

Usage is `node bamazonManager.js`

The user is presented with a menu of command options:

```
? What would you like to do?? (Use arrow keys)
> View Products for Sale
  View Low Inventory
  Add to Inventory
  Add new Product
  Quit
```

* **View Products for Sale** displays the list of all products
* **View Low Inventory** displays only those products that have fewer than 5 usints remaining in inventory.
* **Add to Inventory** allows the user to enter a quantity to **add** to the current inventory. 
* **Add new Product** allows the user to add a new product to the inventory by entering a product name, department, quantity, and price.

Note that only existing departments can be selected.  TO add departments, one needs to update the departments table via a different application.

Upon completing a transaction, the application returns to the main menu and iterates until the user quits the application.


![Manager Demonstration](screenshots/manager.gif "The Manager's View")

## Authors

* **Paul Rowe** - *Initial work* - [zrowe](https://github.com/zrowe)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* UC Berkeley Coding BootCamp
* Trilogy
