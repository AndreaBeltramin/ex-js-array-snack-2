const books = [
	{
		title: "React Billionaire",
		pages: 250,
		author: {
			name: "Alice",
			age: 35,
		},
		available: false,
		price: "101€",
		tags: ["advanced", "js", "react", "senior"],
	},
	{
		title: "Advanced JS",
		pages: 500,
		author: {
			name: "Bob",
			age: 20,
		},
		available: true,
		price: "25€",
		tags: ["advanced", "js", "mid-senior"],
	},
	{
		title: "CSS Secrets",
		pages: 320,
		author: {
			name: "Alice",
			age: 17,
		},
		available: true,
		price: "8€",
		tags: ["html", "css", "junior"],
	},
	{
		title: "HTML Mastery",
		pages: 200,
		author: {
			name: "Charlie",
			age: 50,
		},
		available: false,
		price: "48€",
		tags: ["html", "advanced", "junior", "mid-senior"],
	},
];

// Snack 2 - Il primo libro scontato
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const availableBooks = books.filter((book) => book.available);
console.log("availableBooks: ", availableBooks);

const discountedBooks = availableBooks.map((book) => {
	const discountedPrice = (
		parseFloat(book.price) -
		parseFloat(book.price) * 0.2
	).toFixed(2);
	const finalDiscountedPrice = discountedPrice.toString() + "€";
	return { ...book, price: finalDiscountedPrice };
});
console.log(discountedBooks);

const fullPricedBook = discountedBooks.find((book) => {
	const fullPrice = parseFloat(book.price);
	return Number.isInteger(fullPrice);
});
console.log(fullPricedBook);
