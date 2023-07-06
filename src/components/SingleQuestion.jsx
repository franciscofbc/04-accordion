// import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const SingleQuestion = ({
  id,
  title,
  info,
  activeId,
  setActiveId,
  toggleActiveId,
}) => {
  // const [showAnswer, setShowAnswer] = useState(false);
  const showAnswer = id === activeId;

  return (
    <article>
      <div className="question">
        <h5>{title}</h5>
        <button
          type="button"
          onClick={() => {
            // setShowAnswer(!showAnswer);
            // setActiveId(id);
            toggleActiveId(id);
          }}
        >
          {showAnswer ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
