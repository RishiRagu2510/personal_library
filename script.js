let Book={
    title:'',
    author:'',
    yearpublished:'',
    readstatus:'',
    getSummary:function(){
        return "Title :"+this.title+"\tAuthor :"+this.author+"\tyear published :"+this.yearpublished+"\tRead status :"+this.readstatus;
    },
    toggleReadStatus:function(){
            this.readstatus=!this.readstatus;
    }
}
let library=[];
function addBook(title,author,yearpublished,readstatus){
    let book1={
        title:title,
        author:author,
        yearpublished:yearpublished,
        readstatus:readstatus,
    };
    library.push(book1);
}
function removeLast(){
    library.pop();
}
function addBookToFront(book){
    library.push(book);
}
function removeFrontBook(){
    library.shift();
}
function getAllTitles()
{
    let title1=booktitle=>booktitle.title;
    let TName=library.map(title1);
    return TName;
    
}
addBook("leo","Lokesh",2023,false);
addBook("MS Dhoni","Neeraj",2016,true);
addBook("Vikram","Lokesh",2023,true);
addBook("kaithi","Neeraj",2016,true)
addBook("Managaram","Neeraj",2016,true)
addBook("Bigil","Atlee",2019,true);
addBook("jailer","Nelson",2023,true);
addBook("Vikram2","Lokesh",2025,false);
addBook("kaithi2","Lokesh",2014,false)
addBook("Leo2","Lokesh",2027,false)
console.log(getAllTitles());
console.log(getAllTitles());

function getBookbyAuthor(auth)
{
    const filteredBooks=library.filter(
        book => book.author==auth
    )
    return filteredBooks;
}
let auth=getBookbyAuthor("Lokesh");
for(var i=0;i<auth.length;i++)
{
    console.log(auth[i]);
}


function getTotalBooksPublishedBefore(year)
{
    const numOfBooks=library.filter(book=>book.yearpublished<year);
    return numOfBooks;
}
let tBooksByYear=getTotalBooksPublishedBefore(2023);
console.log(tBooksByYear.length);


function removeBookByTitle(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
      library.splice(index, 1);
    }
  }
removeBookByTitle("Vikram");
console.log(getAllTitles());

function BooksByRaedStatus(status){
    const bookStatus=library.filter(book=>book.readstatus===status);
    return bookStatus;
}
let bookStatus1=BooksByRaedStatus(true);
for(var i=0;i<bookStatus1.length;i++)
{
    console.log(bookStatus1[i]);
}
function getSubLibrary(start,end){
    let port=library.slice(start,end);
    return port;
}
let portion=getSubLibrary(1,3);
for(var i=0;i<portion.length;i++){
    console.log(portion[i]);
}