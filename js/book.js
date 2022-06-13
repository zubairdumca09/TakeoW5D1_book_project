function createBookData() {
    let title = document.getElementById('title').value;
    let writer = document.getElementById('writer').value;
    let publisher = document.getElementById('publisher').value;
    let isbn = document.getElementById('isbn').value;
    let subject = document.getElementById('subject').value;
    let numPages = document.getElementById('numPages').value;
    let obj = {
        title: title,
        writer: writer,
        publisher: publisher,
        isbn: isbn,
        subject: subject,
        numPages: numPages
    }

    console.log(obj)
}