import { useContext } from "react";
import { Context } from "../context";

const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const { setMovieOpt, movieObj } = useContext(Context);

  const lastPage = Math.ceil(+pages / 10);

  const onClick = (page) => {
    setCurrentPage(page);
    setMovieOpt({ ...movieObj, page });
  };

  return (
    <div className="pagination">
      <button
        onClick={(e) => {
          onClick(+currentPage - 1);
        }}
        disabled={+currentPage === 1}
      >
        &laquo;
      </button>
      {Array.from({ length: +lastPage })
        .fill(1)
        .map((e, i) => e + i)
        .slice(
          +currentPage < 4
            ? 0
            : +currentPage + 4 >= +lastPage
            ? +lastPage > 9
              ? +lastPage - 9
              : 0
            : +currentPage - 4,

          +currentPage < 4
            ? +currentPage + (8 - +currentPage)
            : 4 + +currentPage
        )
        .map((e) => (
          <button
            value={e}
            key={"page" + e}
            color="link"
            disabled={+currentPage === e}
            onClick={(e) => {
              onClick(+e.target.value);
            }}
          >
            {e}
          </button>
        ))}
      {+lastPage > 7 && 3 + +currentPage < +lastPage - 1 && (
        <>
          {+currentPage + 3 !== +lastPage - 2 && <button disabled>...</button>}

          <button
            value={+lastPage}
            onClick={(e) => {
              onClick(+e.target.value);
            }}
            color="link"
          >
            {+lastPage}
          </button>
        </>
      )}
      <button
        color="link"
        disabled={+currentPage === +lastPage || lastPage === 0}
        onClick={(e) => {
          onClick(+currentPage + 1);
        }}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
