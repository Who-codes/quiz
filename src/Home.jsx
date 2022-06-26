import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Quiz from "./Quiz";

const Home = () => {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    const res = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await res.json();
    setQuiz(data);
    console.log(quiz);
  };

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      {quiz.results.map((item, index) => (
        <Quiz {...item} key={index} />
      ))}
    </main>
  );
};

export default Home;
