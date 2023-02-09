import React from "react";
import Header from "./comp/Header";
import Question from "./comp/Question";
import { StylesObject } from "./types/types";

const questions = [
  {
    _id: "63e2755fd22f4c16edab08a4",
    image:
      "https://images.unsplash.com/photo-1671531009361-8846ff0d7ae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    text: "deserunt id officia excepteur ut et dolor sint aute",
    answers: [
      {
        _id: "63e2768072e07842886e2c4a",
        text: "eiusmod voluptate et duis nostrud Lorem anim ea magna",
        selected: false,
      },
      {
        _id: "63e27694c21d9adc0b6953da",
        text: "labore dolor aliqua ullamco quis minim",
        selected: false,
      },
      {
        _id: "63e276f9c1898486966fdf00",
        text: "magna aliqua ad ut commodo duis ut",
        selected: false,
      },
      {
        _id: "63e27767353ceb711d851aba",
        text: "culpa duis excepteur veniam",
        selected: false,
      },
    ],
  },
  {
    _id: "63e2755fd5b8e864993e82e3",
    image:
      "https://images.unsplash.com/photo-1659196931146-ecbf1dbdc58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "veniam occaecat exercitation nostrud occaecat sint reprehenderit qui quis",
    answers: [
      {
        _id: "63e276c60072a5defd80bc9a",
        text: "proident sit dolor aute duis aliqua consectetur Lorem irure",
        selected: false,
      },
      {
        _id: "63e27694630fedcc9ec69a1c",
        text: "fugiat culpa consequat esse velit id",
        selected: false,
      },
      {
        _id: "63e276f9456f92c58119436f",
        text: "incididunt do sint et adipisicing non duis",
        selected: false,
      },
      {
        _id: "63e27767fe0fb1d620cb2e28",
        text: "consectetur adipisicing esse nostrud",
        selected: false,
      },
    ],
  },
  {
    _id: "63e2755f59ae797d5ef1f131",
    image:
      "https://images.unsplash.com/photo-1644487120030-12621cf3c254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "do non commodo consectetur Lorem consequat mollit ex id",
    answers: [
      {
        _id: "63e276c65a9a3cdaacf2b42f",
        text: "dolor anim veniam qui ea tempor incididunt proident culpa",
        selected: false,
      },
      {
        _id: "63e276948c10397859ff0a10",
        text: "excepteur minim aute velit laborum nisi",
        selected: false,
      },
      {
        _id: "63e276f9272bc4d57160ceaa",
        text: "enim officia laborum duis quis sunt mollit",
        selected: false,
      },
      {
        _id: "63e27767c521006771beb2b0",
        text: "reprehenderit amet ad dolor",
        selected: false,
      },
    ],
  },
  {
    _id: "63e2755f857c9d9ca50c5ceb",
    image:
      "https://images.unsplash.com/photo-1645216755684-c946ce202427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    text: "do in dolore non fugiat laboris ex esse laborum",
    answers: [
      {
        _id: "63e276c66d96e9ad0e79e159",
        text: "Lorem elit amet ea consectetur commodo commodo aliquip dolore",
        selected: false,
      },
      {
        _id: "63e276acd77ac6377a596bd9",
        text: "quis ut ipsum esse culpa aute",
        selected: false,
      },
      {
        _id: "63e276f92d2c8d008bb6a1da",
        text: "duis elit ea id aliquip minim ea",
        selected: false,
      },
      {
        _id: "63e27767f92c3850dab94a78",
        text: "dolor adipisicing minim eiusmod",
        selected: false,
      },
    ],
  },
  {
    _id: "63e2755f73628eaf33a81d02",
    image:
      "https://images.unsplash.com/photo-1652774637312-16933904b685?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80",
    text: "nisi ut quis consectetur tempor voluptate consequat aliquip culpa",
    answers: [
      {
        _id: "63e276c626ef45d28ad6e58c",
        text: "consequat minim ut eiusmod culpa do dolor laborum ad",
        selected: false,
      },
      {
        _id: "63e276ac9703529171a1f6e4",
        text: "velit adipisicing consectetur irure labore laborum",
        selected: false,
      },
      {
        _id: "63e276f9cc2954a44a171d4e",
        text: "incididunt amet adipisicing eiusmod sit aliquip enim",
        selected: false,
      },
      {
        _id: "63e277678b56d5848bbc7e6d",
        text: "qui ex quis voluptate",
        selected: false,
      },
    ],
  },
  {
    _id: "63e2755fd0673a8dc776d192",
    image:
      "https://images.unsplash.com/photo-1651822264517-4f7431d7fe46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80",
    text: "occaecat dolore excepteur nostrud laboris enim nisi in qui",
    answers: [
      {
        _id: "63e276c67d9fdd72869e0c5c",
        text: "quis ut ut labore irure occaecat fugiat do quis",
        selected: false,
      },
      {
        _id: "63e276acbe9771770df4ac8a",
        text: "non amet adipisicing ea deserunt do",
        selected: false,
      },
      {
        _id: "63e276f9cc9248bcb6b19ec2",
        text: "Lorem qui ut consequat id sint ut",
        selected: false,
      },
      {
        _id: "63e27767c4ef8debd8202663",
        text: "excepteur dolore aliquip irure",
        selected: false,
      },
    ],
  },
];

const getStyles = (): StylesObject => {
  return {
    questionsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
};

function App() {
  const { questionsContainer } = getStyles();

  return (
    <div className="App">
      <Header></Header>
      <div style={questionsContainer}>
        {questions.map((question, i) => {
          const { _id } = question;
          return <Question key={_id} question={question} index={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
