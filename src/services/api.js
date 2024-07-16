import axios from "axios";

export const getDailyBoxOffice = async () => {
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

    // kobis에서 영화명, 랭크, 예매율만 뽑아오기
    const kobis_arr =
      kobis_response.data.boxOfficeResult.dailyBoxOfficeList.map((movie) => {
        return {
          movieNm: movie.movieNm,
          rank: movie.rank,
          booking_rate: movie.salesShare,
        };
      });
    console.log('?', kobis_arr);

    const requests = kobis_response.data.boxOfficeResult.dailyBoxOfficeList.map(
      async (movie) => {
        const response = await axios.get(
          `//api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${
            import.meta.env.VITE_KMDB_API_KEY
          }&releaseDts=${movie.openDt.replace(/-/g, "")}&query=${movie.movieNm}`
        );
        return response;
      }
    );

    const response = await Promise.all(requests);
    const resArr = response.map((res) => res.data.Data[0].Result[0]);

    // 대표 포스터, @@ 관람가 출력
    const kmdb_arr = resArr.map((movie) => {
      return {
        posters: movie.posters.split("|")[0],
        rating: movie.rating,
        nation : movie.nation,
        runtime: movie.runtime
      };
    });
    // kobis 객체와 kmdb 객체 통합
    const boxOfficeArr = kmdb_arr.map((kmdb, index) => {
      const kobis = kobis_arr[index];
      return {
        posters: kmdb.posters,
        rating: kmdb.rating,
        nation:kmdb.nation,
        runtime: kmdb.runtime,
        movieNm: kobis.movieNm,
        rank: kobis.rank,
        booking_rate: kobis.booking_rate,
      };
    });
    console.log('왜?', boxOfficeArr)
    return boxOfficeArr;
  } catch (err) {
    console.error(err);
  }
  return;
};
