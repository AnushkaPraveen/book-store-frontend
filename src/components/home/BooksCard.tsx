import BookSingleCard from './BookSingleCard';
import { Book } from '../../util/Types';

const BooksCard: React.FC<{ books: Book[] }> = ({ books }) => {
    console.log(books);

    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((item) => (
                <BookSingleCard key={item._id} book={item} />
            ))}

        </div>
    )
}

export default BooksCard
