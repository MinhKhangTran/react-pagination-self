import React from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

export default function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = React.useState(0);
  const [followers, setFollowers] = React.useState([]);

  React.useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const prevPage = () => {
    setPage((oldPage) => {
      let index = oldPage - 1;
      if (index < 0) {
        index = data.length - 1;
      }
      return index;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let index = oldPage + 1;
      if (index > data.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  return (
    <div className="text-center mt-12 mb-4">
      <h1 className="text-2xl underline text-blue-500 font-bold mb-4">{`${
        loading ? "Loading..." : "Pagination"
      }`}</h1>
      <section className="grid md:grid-cols-5 grid-cols-2 gap-4 w-11/12 md:w-4/5 mx-auto">
        {followers.map((item, index) => {
          return <Follower key={item.id} {...item} />;
        })}
      </section>
      {!loading && (
        <div>
          <button
            onClick={prevPage}
            className="bg-blue-600 text-blue-100 rounded px-2 my-2 mx-2 hover:bg-blue-900 hover:text-blue-300 transition transition-all duration-300 ease-in-out"
          >
            Prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                className={`${
                  index === page
                    ? "bg-blue-900 text-blue-300 rounded px-2 my-2 mx-2 hover:bg-blue-900 hover:text-blue-300 transition transition-all duration-300 ease-in-out"
                    : "bg-blue-600 text-blue-100 rounded px-2 my-2 mx-2 hover:bg-blue-900 hover:text-blue-300 transition transition-all duration-300 ease-in-out"
                }`}
                onClick={() => {
                  setPage(index);
                }}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            onClick={nextPage}
            className="bg-blue-600 text-blue-100 rounded px-2 my-2 mx-2 hover:bg-blue-900 hover:text-blue-300 transition transition-all duration-300 ease-in-out"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
