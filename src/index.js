import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css';
// setup vars
const books =
[
    {
        title:'A Letter From Your Teacher: On the Last Day',
        author:'Shannon Olsen',
        img:"https://images-na.ssl-images-amazon.com/images/I/61AqjgMxpLL._AC_UL604_SR604,400_.jpg"
    },
    {
        title:'I Love You to the Moon and Back',
        author:'Amelia Hepworth',
        img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg"
    }
];

const names = ['john','peter','susan'];
const newNames = names.map((name)=>{
    return <h1>{name}</h1>
});
console.log(newNames);
function BookList(){
    return (
        <section className='booklist'> 
            {newNames}
        </section>
    );
}

const Book = (property) =>{
    const {img,title,author} = property;
    console.log(property);
    return <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
};

ReactDOM.render(<BookList/>,document.getElementById('root'));