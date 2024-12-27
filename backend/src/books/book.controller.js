const Book = require("./book.model");
const logger = require("../logger/logging.js"); // Importing the logger
const postABook = async (req, res) => {
    logger.info("Request to post a new book", { body: req.body });
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        logger.info("Book posted successfully", { book: newBook });
        res.status(200).send({message: "Book posted successfully", book: newBook})
    } catch (error) {
        logger.error("Error while creating book", { error: error.message, stack: error.stack });
        res.status(500).send({message: "Failed to create book"})
    }
}

// get all books
const getAllBooks =  async (req, res) => {
    logger.info("Request to get all books");
    try {
        const books = await Book.find().sort({ createdAt: -1});
        logger.info("Fetched all books successfully", { count: books.length });
        res.status(200).send(books)
        
    } catch (error) {
        logger.error("Error in getting all books", { error: error.message, stack: error.stack });
        res.status(500).send({message: "Failed to fetch books"})
    }
}

const getSingleBook = async (req, res) => {
    const {id} = req.params;
    logger.info("Request to get a single book", { bookId: id });
    try {
        const book =  await Book.findById(id);
        if(!book){
            logger.warn("Book not found", { bookId: id });
            return res.status(404).send({message: "Book not Found!"});
        }
        logger.info("Fetched single book successfully", { book });
        res.status(200).send(book)
        
    } catch (error) {
        logger.error("Error in fetching the book", { error: error.message, stack: error.stack });
        res.status(500).send({message: "Failed to fetch book"})
    }

}

// update book data
const UpdateBook = async (req, res) => {
    const {id} = req.params;
    logger.info("Request to update a book", { bookId: id, body: req.body });
    try {
        const updatedBook =  await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook) {
            logger.warn("Book not found for updating", { bookId: id });
            return res.status(404).send({message: "Book is not Found!"});
        }
        logger.info("Book details updated successfully", { book: updatedBook });
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })
    } catch (error) {
        logger.error("Error in updating the book", { error: error.message, stack: error.stack });
        res.status(500).send({message: "Failed to update a book"})
    }
}

const deleteABook = async (req, res) => {
    const { id } = req.params;
    logger.info("Request to delete a book", { bookId: id });
    try {
        const deletedBook =  await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            logger.warn("Book not found for deletion", { bookId: id });
            return res.status(404).send({message: "Book is not Found!"});
        }
        logger.info("Book deleted successfully", { book: deletedBook });
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        })
    } catch (error) {
        logger.error("Error in deleting the book", { error: error.message, stack: error.stack });
        res.status(500).send({message: "Failed to delete a book"})
    }
};

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook
}