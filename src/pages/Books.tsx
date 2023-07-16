import { useState } from "react";
import { useGetBooksQuery } from "../redux/features/books/bookApi";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [filterYear, setFilterYear] = useState("");
  const { data, isLoading, error } = useGetBooksQuery({
    searchTerm,
    genre: filterGenre,
    year: filterYear,
  });

  const handleSearch = () => {
    setSearchTerm(searchText);
  };

  const handleFilterGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterGenre(e.target.value);
  };

  const handleFilterYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterYear(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex m-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by title..."
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </div>
        <div className="flex m-4">
          <label htmlFor="genre-select" className="mr-2">
            Genre:
          </label>
          <select
            id="genre-select"
            value={filterGenre}
            onChange={handleFilterGenre}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="comic">Comic</option>
          </select>
          <label htmlFor="year-input" className="ml-4 mr-2">
            Year:
          </label>
          <input
            type="text"
            value={filterYear}
            onChange={handleFilterYear}
            placeholder="Filter by year..."
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <Link to="/add-new-book"
        className="m-4 px-4 py-2 bg-green-500 text-white rounded-md inline-block"
      >
        Add New
      </Link>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Genre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Publication Year
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.data.map((book) => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{book.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{book.author}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{book.genre}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {book.publicationYear}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
