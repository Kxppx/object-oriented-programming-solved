/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSummary = function () {
  return `The Book: ${this.title}, was made in ${this.year} by ${this.author}.`;
};
Book.prototype.isClassic = function () {
  if (2025 - this.year > 50) {
    return true;
  } else {
    return false;
  }
};
Book.prototype.updateYear = function (newYear) {
  this.year = newYear;
  console.log(`Publication year updated to ${this.year}`);
};
Book.prototype.changeGenre = function (newGenre) {
  this.genre = newGenre;
  console.log(`Genre updated to ${this.genre}`);
};

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
console.log(book1);

console.log(book1.getSummary());

console.log(book1.isClassic());

book1.updateYear(2023);
console.log(book1.getSummary());

book1.changeGenre("Horror");
console.log(book1);
