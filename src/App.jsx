import { useState } from 'react';
import data from './data';
import SingleQuestion from './components/SingleQuestion';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(1);

  const toggleActiveId = (id) => {
    // id === activeId ? setActiveId(0) : setActiveId(id);
    setActiveId(id === activeId ? 0 : id);
  };

  return (
    <main>
      <div>
        <h1 className="title">questions</h1>
        <section>
          {questions.map((question) => (
            <SingleQuestion
              key={question.id}
              {...question}
              activeId={activeId}
              setActiveId={setActiveId}
              toggleActiveId={toggleActiveId}
            />
          ))}
        </section>
      </div>
    </main>
  );
};
export default App;
