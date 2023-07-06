import { useEffect, useState } from 'react';
import data from './data';
import SingleQuestion from './components/SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <h1 className="title">questions</h1>
      <section>
        {questions.map((question) => (
          <SingleQuestion key={question.id} {...question} />
        ))}
      </section>
    </main>
  );
};
export default App;
