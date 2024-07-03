import React from 'react';

const LastReadBooks: React.FC = () => {
    // Exemplo de dados. Você pode substituir por dados reais.
    const books = [
        { id: 1, title: 'Livro 1', author: 'Autor 1' },
        { id: 2, title: 'Livro 2', author: 'Autor 2' },
        { id: 3, title: 'Livro 3', author: 'Autor 3' },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Últimos Livros Lidos</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id} className="mb-4">
                        <h3 className="text-xl">{book.title}</h3>
                        <p className="text-gray-700">por {book.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LastReadBooks;
