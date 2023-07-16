import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery, useUpdateBookMutation } from "../redux/features/books/bookApi";

const EditBook = () => {
    const {id}= useParams()
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");

  const { data, isLoading: getLoading, error } = useGetSingleBookQuery(id);

  const userEmail= localStorage.getItem("email")



  useEffect(() => {
    if (data) {
      setTitle(data.data.title);
      setAuthor(data.data.author);
      setGenre(data.data.genre);
      setPublicationYear(data.data.publicationYear.toString());
    }
  }, [data]);


  const [updateBook, { isLoading, isError, isSuccess }] = useUpdateBookMutation();

  if (isSuccess) {
    toast.success("Book Updated successfully!");
  }

  if (isError) {
    toast.error("Something went wrong!");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookData = {
      id,
      data: {
        title,
        author,
        genre,
        publicationYear: parseInt(publicationYear),
      },
    };

    updateBook(bookData);
  };

  if (data.data.addedBy !== userEmail){
    return (
        <div>You are not authenticated to edit this book</div>
    )
  }
    return (
      <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Author:
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Genre:
            </label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Publication Year:
            </label>
            <input
              type="number"
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Edit Book
          </button>
        </form>
        <ToastContainer />
      </div>
    );
};

export default EditBook;
