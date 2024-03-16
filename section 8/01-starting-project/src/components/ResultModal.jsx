import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import {} from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targerTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targerTime*1000)) * 100);

  useImperativeHandle(ref, () => {
    console.log('Test')
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>your Score: {score}</h2>}
      <p>
        The target time was <strong>{targerTime}</strong> seconds
      </p>
      <p>
        You stopped the timer with <strong>{formatedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
