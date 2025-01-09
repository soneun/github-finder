import { createContext, useState } from "react";

const GithubContext = createContext();

//깃허브 주소와 토큰 변수지정
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
//프로바이더가 전역으로 컨텍스트를 적용한다
export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  //키워드로 유저찾기
  const searchUsers = (text) => {
    setLoading(true);
    const params = new URLSearchParams({ q: text });
    fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
        setLoading(false); //데이터 로딩완료
      })
      .catch((err) => console.log(err));
  };

  //깃허브 아이디로 유저찾기
  const getUser = (login) => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_GITHUB_URL}/users${login}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false); //데이터 로딩완료
      })
      .catch((err) => (window.location = "/notfound"));
  };
  return (
    <GithubContext.Provider
      value={{ users, user, loading, searchUsers, getUser }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
