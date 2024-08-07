import axios from "axios";

export const kobisDailyBoxOffice = async () => {
  // 오늘 날짜 객체 생성
  let today = new Date();

  // 년, 월, 일 추출
  let year = today.getFullYear();
  let month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줌
  let day = today.getDate() - 1; // 어제 박스오피스 불러오기

  // 월과 일이 한 자리 숫자인 경우 앞에 0을 추가
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  // YYYYMMDD 형식으로 문자열 조합
  let formattedDate = year + "" + month + "" + day;
  try {
    // kobis 영화 데이터
    const kobis_response = await axios.get(
      "//www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
      {
        params: {
          key: import.meta.env.VITE_KOBIS_API_KEY,
          targetDt: formattedDate,
        },
      }
    );
    return kobis_response.data.boxOfficeResult.dailyBoxOfficeList;
  } catch (error) {
    console.error(error);
  }
};

export const kobisWeeklyBoxOffice = async () => {
  // 오늘 날짜 객체 생성
  let today = new Date();

  // 오늘의 요일 인덱스
  const dayIndex = today.getDay();

  // 만약 오늘이 일요일이면, 저번 일요일은 7일 전임
  const daysSinceLastSunday = dayIndex === 0 ? 7 : dayIndex;

  const lastSunday = new Date(today);
  lastSunday.setDate(today.getDate() - daysSinceLastSunday);

  // YYYYMMDD 형태로 변환
  let year = lastSunday.getFullYear();
  let month = lastSunday.getMonth() + 1;
  let day = lastSunday.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  // 저번주 일요일 날짜의 YYYYMMDD
  let formattedDate = year + "" + month + "" + day;

  try {
    // kobis 영화 데이터
    const kobis_response = await axios.get(
      "//www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json",
      {
        params: {
          key: import.meta.env.VITE_KOBIS_API_KEY,
          targetDt: formattedDate,
        },
      }
    );
    return kobis_response.data.boxOfficeResult.weeklyBoxOfficeList;
  } catch (error) {
    console.error(error);
  }
};

export const getDailyBoxOffice = async () => {
  try {
    const kobis_data = await kobisDailyBoxOffice();
    // kobis에서 영화명, 랭크, 예매율만 뽑아오기
    const kobis_arr = kobis_data.map((movie) => {
      return {
        movieNm: movie.movieNm,
        rank: movie.rank,
        booking_rate: movie.salesShare,
      };
    });

    const requests = kobis_data.map(async (movie) => {
      // eslint-disable-next-line
      const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

      const response = await axios.get(
        `https://movie-api-seven-chi.vercel.app/api?releaseDts=${movie.openDt.replace(
          /-/g,
          ""
        )}&query=${movie.movieNm.replace(regExp, "")}`
      );

      return response;
    });

    const response = await Promise.all(requests);
    const resArr = response.map((res) => res.data.Data[0].Result[0]);

    // 대표 포스터, @@ 관람가 출력
    const kmdb_arr = resArr.map((movie) => {
      return {
        posters: movie.posters.split("|")[0],
        rating: movie.rating,
        nation: movie.nation,
        runtime: movie.runtime,
        repRlsDate: movie.repRlsDate,
      };
    });
    // kobis 객체와 kmdb 객체 통합
    const boxOfficeArr = kmdb_arr.map((kmdb, index) => {
      const kobis = kobis_arr[index];
      return {
        posters: kmdb.posters,
        rating: kmdb.rating,
        nation: kmdb.nation,
        runtime: kmdb.runtime,
        repRlsDate: kmdb.repRlsDate,
        movieNm: kobis.movieNm,
        rank: kobis.rank,
        booking_rate: kobis.booking_rate,
      };
    });
    
    return boxOfficeArr;
  } catch (err) {
    console.error(err);
  }
  return;
};

export const getWeeklyBoxOffice = async () => {
  try {
    const kobis_data = await kobisWeeklyBoxOffice();
    // kobis에서 영화명, 랭크, 예매율만 뽑아오기
    const kobis_arr = kobis_data.map((movie) => {
      return {
        movieNm: movie.movieNm,
        rank: movie.rank,
        booking_rate: movie.salesShare,
      };
    });

    const requests = kobis_data.map(async (movie) => {
      // eslint-disable-next-line
      const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

      const response = await axios.get(
        `https://movie-api-seven-chi.vercel.app/api?releaseDts=${movie.openDt.replace(
          /-/g,
          ""
        )}&query=${movie.movieNm.replace(regExp, "")}`
      );

      return response;
    });
    const response = await Promise.all(requests);
    const resArr = response.map((res) => res.data.Data[0].Result[0]);

    // 대표 포스터, @@ 관람가 출력
    const kmdb_arr = resArr.map((movie) => {
      return {
        posters: movie.posters.split("|")[0],
        rating: movie.rating,
        nation: movie.nation,
        runtime: movie.ratings.rating[0].runtime,
        repRlsDate: movie.repRlsDate,
      };
    });
    // kobis 객체와 kmdb 객체 통합
    const boxOfficeArr = kmdb_arr.map((kmdb, index) => {
      const kobis = kobis_arr[index];
      return {
        posters: kmdb.posters,
        rating: kmdb.rating,
        nation: kmdb.nation,
        runtime: kmdb.runtime,
        repRlsDate: kmdb.repRlsDate,
        movieNm: kobis.movieNm,
        rank: kobis.rank,
        booking_rate: kobis.booking_rate,
      };
    });

    return boxOfficeArr;
  } catch (err) {
    console.error(err);
  }
  return;
};

export const getDetailMovieInfo = async (movieName, releaseDt) => {
  // 영화이름과 개봉일을 받아서 영화 정보들을 불러온다.
  try {
    // vercel/api/detail
    // eslint-disable-next-line
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

    const res = await axios.get(
      `https://movie-api-seven-chi.vercel.app/api/detail?releaseDts=${releaseDt.replace(
        /-/g,
        ""
      )}&title=${movieName.replace(regExp, "")}`
    );

    const kmdb_arr = res.data.Data[0].Result[0];
    const beforeClearTitle = kmdb_arr.title;
    // 타이틀 정규표현식으로 깔끔하게 만들기
    const title_remove_HS = beforeClearTitle.replace(/\s{1}!HS\s{1}/g, "");
    const title_remove_HE = title_remove_HS.replace(/\s{1}!HE\s{1}/g, "");
    const title = title_remove_HE.trim();
    const posters = kmdb_arr.posters.split("|");
    const stlls = kmdb_arr.stlls.split("|");
    const titleEng = kmdb_arr.titleEng;
    const releaseDate = kmdb_arr.repRlsDate;
    const runtime = kmdb_arr.ratings.rating[0].runtime.split("|")[0];
    const company = kmdb_arr.company;
    const genre = kmdb_arr.genre;
    const nation = kmdb_arr.nation;
    const rating = kmdb_arr.rating;
    const plots = kmdb_arr.plots.plot;
    const director = kmdb_arr.directors.director[0].directorNm;
    const actors = kmdb_arr.actors.actor.slice(0, 10);
    const awards = kmdb_arr.Awards1.split("|");
    return {
      title,
      posters,
      stlls,
      titleEng,
      releaseDate,
      runtime,
      company,
      nation,
      rating,
      genre,
      plots,
      director,
      actors,
      awards,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getMovieListFromQuery = async (query) => {
  try {
    // vercel/api/detail
    // eslint-disable-next-line
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

    const res = await axios.get(
      `https://movie-api-seven-chi.vercel.app/api/search?title=${query}`
    );

    const kmdb_arr = res.data.Data[0].Result;
    // 각각 결과들에는 영화이름, 포스터, 개봉날짜가 들어있어야함
    const result = kmdb_arr.map((movie) => {
      {
        const beforeClearTitle = movie.title;
        const title_remove_HS = beforeClearTitle.replace(/\s{1}!HS\s{1}/g, "");
        const title_remove_HE = title_remove_HS.replace(/\s{1}!HE\s{1}/g, "");
        const title = title_remove_HE.trim();
        const poster = movie.posters.split("|")[0];
        const releaseDate = movie.repRlsDate;
        return { title, poster, releaseDate };
      }
    });
    const resResult = result.filter(
      (movie) => movie.title && movie.releaseDate
    );
    //const beforeClearTitle = kmdb_arr.title;
    // 타이틀 정규표현식으로 깔끔하게 만들기
    //const title_remove_HS = beforeClearTitle.replace(/\s{1}!HS\s{1}/g, "");
    //const title_remove_HE = title_remove_HS.replace(/\s{1}!HE\s{1}/g, "");
    //const title = title_remove_HE.trim();
    return resResult;
  } catch (err) {
    console.error(err);
  }
};
