export const Books = [
    {
        id: 1,
        AuthorName: "Gagan",
        BookName: "Hum Nalaik",
        image: "/book.jpeg",
        handler: () => {
            alert("You are Hacked");
            let bark = document.getElementById("dogBark");
            bark.play();
        }
    },
    {
        id: 2,
        AuthorName: "Jagnoor",
        BookName: "Sada Haq",
        image: "/book.jpeg",
        handler: () => {
            alert("You are Hacked");
            let bark = document.getElementById("dogBark");
            bark.play();

        }
    },
    {
        id: 3,
        AuthorName: "Vishav",
        BookName: "Love is Life",
        image: "/book.jpeg",
        handler: () => {
            alert("You are Hacked");
            let bark = document.getElementById("dogBark");
            bark.play();

        }
    },
    {
        id: 4,
        AuthorName: "Sukhraj",
        BookName: "Love is Technical",
        image: "/book.jpeg",
        handler: () => {
            alert("You are Hacked");
            let bark = document.getElementById("dogBark");
            bark.play();

        }
    }


];



//we are exporting the Books 
//and we import this object where we want ti use this
//Note : we can only have one default export
//where as we can have many export values