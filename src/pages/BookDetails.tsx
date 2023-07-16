import {  useParams, useNavigate } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/books/bookApi";

const BookDetails = () => {
  const { id } = useParams();
  const userEmail= localStorage.getItem("email")
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetSingleBookQuery(id);

  const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();

  const handleEdit = () => {
    navigate(`/edit-book/${id}`);
  };

  const handleDelete = async () => {
      if (userEmail !== data?.data.addedBy) {
        alert("You are not authorized to delete this book");
        return;
      }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    // console.log("userEmail",data)

  

    if (confirmDelete) {
      try {
        await deleteBook(id);
        navigate("/books");
      } catch (error) {
        console.log("Error occurred while deleting the book:", error);
      }
    }
    
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Title: {data?.data.title}</h2>
          <p className="mb-2">Author: {data?.data.author}</p>
          <p className="mb-2">Genre: {data?.data.genre}</p>
          <p className="mb-2">Publication Date: {data?.data.publicationYear}</p>

          <h3 className="text-xl font-bold mb-2">Reviews:</h3>
          {data?.data.reviews.length > 0 ? (
            <ul className="list-disc pl-6">
              {data?.data.reviews.map((review) => (
                <li key={review._id} className="mb-2">
                  {review.comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reviews found.</p>
          )}

          <div>
            <button
              onClick={handleEdit}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
            >
              Edit Book
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete Book"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetails;
