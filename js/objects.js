(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Eric",
        lastName: "Townes",
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return `G'Day, ${this.firstName} ${this.lastName}!`;
    }
    console.log(person);
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    let discountPercent;
    shoppers.forEach(person => {
        person.amount > 200 ? discountPercent = 12 : discountPercent = 0;
        console.log(person.name + " has spend " + person.amount + " - discount is " + discountPercent + "%.\n" +
            "The final bill is " + person.amount * (1-(discountPercent/100)));
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Phil",
                lastName: "Klay"
            }
        },
        {
            title: "Redeployment",
            author: {
                firstName: "JD",
                lastName: "Salinger"
            }
        },
        {
            title: "Where the Crawdads Sing",
            author: {
                firstName: "Delia",
                lastName: "Owens"
            }
        },
        {
            title: "The Silent Patient",
            author: {
                firstName: "Alex",
                lastName: "Michaelides"
            }
        }
    ];
    console.log(books);
    console.log(books[2].title);
    console.log(books[2].author.firstName);
    console.log(books[2].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach((book, index) => {
        console.log("Book # " + (index + 1) + "\n" +
                    "Title: " + book.title + "\n" +
                    "Author: " + book.author.firstName + " " + book.author.lastName);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        const firstName = author.split(" ")[0];
        const lastName = author.split(" ")[1];
        return {
            title: title,
            author: {
                firstName, lastName
            }
        }
    }
    console.log(createBook("The Yellow Birds", "Kevin Powers"));

    const books2 = [];
    books2.push(createBook("The Yellow Birds", "Kevin Powers"));
    books2.push(createBook("Atomic Habits", "James Clear"));
    books2.push(createBook("The Power of Habit", "Charles Duhigg"));
    console.log(books2);

    console.log("-----showBookInfo-----");
    function showBookInfo(book){
        return(
            "Title: " + book.title + "\n" +
            "Author: " + book.author.firstName + " " + book.author.lastName);
    }
    console.log(showBookInfo(books2[0]));

    console.log("-----showBookInfo 2-----");
    books2.forEach((book, index) => {
        console.log("Book # " + (index+1) + "\n" + showBookInfo(book));
        showBookInfo(book);
    });

})();
