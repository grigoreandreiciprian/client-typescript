import React from 'react'
import Book from '../../models/BookModel';

interface BooksList {

    book:{id:number;title:string,author:string,gendre:string,year:number}
}

const TableBody: React.FC<BooksList> = props => {

    const book = props.book

   
  return (
    <>
    
   
    <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.gendre}</td>
        <td>{book.year}</td>
        <td> 
            <button className="add btn3">Update</button>
        </td>

        <td>
        <button className="cancel btn3">Delete</button>
        </td>
    </tr>

   

    </>
  )
}

export default TableBody