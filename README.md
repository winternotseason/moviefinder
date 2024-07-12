## 🎬 MOVIE FINDER - Find attractive movies!  
![MOVIEFINDER](https://github.com/user-attachments/assets/76b88152-2911-4132-9d66-70c7720b6a5a)


### TMDB Open API를 활용한 영화 검색 앱 MOVIE FINDER 입니다.
#### 나만의 매력적인 영화들을 찾아보세요!

  
## ✍️ 개요

- 📄 프로젝트 명: MOVIE FINDER
- 📅 개발 기간: 2024.05.30-2024.06.11
- 🔨 도구: React, Styled-components ···
- 👩🏻‍💻 개발자: 황서연 (개인개발)


   
## 💾 배포 주소



   
## ⚒️ 기술 스택

### Environment
![Visual Studio Code](https://img.shields.io/badge/visual%20studio%20code-297ACC?style=flat-square&logo=visualstudiocode&logoColor=white)
![GitHub](https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white)

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)

### Development
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white)
![Styled-components](https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)



   
## 📺 화면 구성

| 페이지  |   |                                                                                         
|-----------|-------------------------|
|  **Main**   | <img width="1788" alt="스크린샷 2024-07-12 18 06 19" src="https://github.com/user-attachments/assets/3a47dcab-ec54-42de-97cd-7927c0d5c57f"> |
| **Modal**   | <img width="1788" alt="스크린샷 2024-07-12 18 07 17" src="https://github.com/user-attachments/assets/e58f458e-9605-4856-b13d-2ae2b3dd4068"> | 
| **Results**   | <img width="1788" alt="스크린샷 2024-07-12 18 07 40" src="https://github.com/user-attachments/assets/af776703-a867-4872-923c-70d8c904a534"> | 
| **Detail**   | <img width="1788" alt="스크린샷 2024-07-12 18 07 59" src="https://github.com/user-attachments/assets/f838f7d0-d98b-4d7c-b9b7-404615990ec2"> | 



## 🔑 주요 기능

- ↔ **서버와의 통신**: 비동기 통신 라이브러리 axios를 이용하여 TMDB Open API 서버로부터 데이터 수신
- ✨ **영화 검색**: 사용자의 검색 query를 받고 쿼리를 담은 POST 호출을 함으로써 영화의 목록들을 불러 옴
- 🎬 **메인 차트 기능**: 최신 영화 순위, 개봉 예정 영화들을 서버 통신으로 불러와 slider 형태로 구현
- 🛒 **영화 세부 내용 확인**: 사용자가 찾고자하는 단일 영화를 줄거리, 크레딧, 대표 사진등으로 결과 표현 


   
## 📁 파일 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜intern.jpeg
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜CommendMovie.jsx
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┣ 📜PopularChart.jsx
 ┃ ┃ ┗ 📜UpComingChart.jsx
 ┃ ┣ 📂Modal
 ┃ ┃ ┗ 📜SearchModal.jsx
 ┃ ┣ 📂UI
 ┃ ┃ ┗ 📜Chart.jsx
 ┃ ┣ 📜DetailContent.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜Loading.jsx
 ┃ ┣ 📜ResultsList.jsx
 ┃ ┗ 📜SideBar.jsx
 ┣ 📂pages
 ┃ ┣ 📜DetailMovie.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Layout.jsx
 ┃ ┣ 📜MovieSearchResult.jsx
 ┃ ┗ 📜Notfound.jsx
 ┣ 📂services
 ┃ ┗ 📜api.js
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```


       
## 📄 블로그 정리
[![무제(2)](https://github.com/user-attachments/assets/12436066-bfe2-4d2c-8b36-d7e9f26cff45)](https://seodevelopment.tistory.com/68)

