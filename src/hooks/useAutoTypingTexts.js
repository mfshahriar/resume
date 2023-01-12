import { useEffect, useState } from "react";

const useAutoTypingTexts = ({
  strings,
  writingSpeed = 100,
  deletingSpeed = 20,
  waitTime = 1000,
}) => {
  const [autoText, setAutoText] = useState("");
  const States = { Typing: "Typing", Paused: "Paused", Deleting: "Deleting" };
  const [state, setState] = useState(States.Typing);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeOut;
    if (state === States.Typing) {
      timeOut = setTimeout(() => {
        setAutoText(strings[index].slice(0, autoText.length + 1));
        if (autoText.length === strings[index].length) {
          setState(States.Paused);
        }
      }, writingSpeed);
    } else if (state === States.Paused) {
      timeOut = setTimeout(() => {
        setState(States.Deleting);
      }, waitTime);
    } else {
      const timeOut = setTimeout(() => {
        setAutoText(strings[index].slice(0, autoText.length - 1));
        if (autoText.length === 0) {
          setState(States.Typing);
          setAutoText("");
          setIndex((index + 1) % strings.length);
        }
      }, deletingSpeed);
    }
  }, [autoText, state, index]);

  return autoText;
};
export default useAutoTypingTexts;
