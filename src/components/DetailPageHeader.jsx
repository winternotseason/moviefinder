import PropTypes from "prop-types";
const DetailPageHeader = ({ movieArr }) => {
  return (
    <div className="w-full h-72 md:h-[40rem] bg-black/100 flex justify-center items-end">
      <div className="flex mb-8 w-full md:max-w-[70rem]">
        <div className="w-24 md:w-60 ml-4 rounded-xl overflow-hidden">
          <img src={`${movieArr.posters[0]}`} className="w-full" />
        </div>

        <div className="text-white flex flex-col self-end w-56 md:w-96 ml-4 md:ml-10">
          <div>
            <p className="text-base md:text-3xl font-bold">{movieArr.title}</p>
            <p className="text-xs md:text-base font-extralight text-white/60">
              {movieArr.titleEng}
            </p>
          </div>
          <div className="mt-2 text-[0.7rem] md:text-sm flex flex-col font-light text-white/80">
            <div className="flex">
              <p>
                {movieArr.releaseDate.slice(0, 4) +
                  "." +
                  movieArr.releaseDate.slice(4, 6) +
                  "." +
                  movieArr.releaseDate.slice(6, 8)}{" "}
              </p>
              <p className="ml-1">∙ {movieArr.runtime}분</p>
              <p className="ml-1">∙ {movieArr.rating}</p>
            </div>
            <div className=" text-white/80 mt-1">
              <p className="mr-1">{movieArr.genre}</p>
            </div>{" "}
            <div className=" text-white/80 mt-1">
              <p>{movieArr.company}</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageHeader;

DetailPageHeader.propTypes = {
  movieArr: PropTypes.object.isRequired,
};
