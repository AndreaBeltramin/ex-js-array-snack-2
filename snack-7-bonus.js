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

// Snack 7 (Bonus) - Analizza i tag
// Usa reduce per creare un oggetto (tagCounts) che
// conta quante volte ogni tag viene usato tra i libri.

const tagCounts = books.reduce((acc, book) => {
	book.tags.forEach((tag) => {
		// se non esiste il tag lo inizializzo a 0
		if (!acc[tag]) {
			acc[tag] = 0;
		}
		// e poi lo incremento, se esiste già il tag lo incremento e basta
		acc[tag]++;
	});
	return acc;
}, {});
console.log(tagCounts);
