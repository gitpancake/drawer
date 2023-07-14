import React, { Dispatch, SetStateAction, useEffect } from "react";
import Confetti from "../components/Confetti";

interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

interface IConfettiContext {
  confetti: boolean;
  setConfetti: Dispatch<SetStateAction<boolean>>;
}

export const useConfettiContext = () => React.useContext(ConfettiContext);

export const ConfettiContext = React.createContext<IConfettiContext>({
  confetti: false,
  setConfetti: () => {},
});

const ConfettiContextProvider = ({ children }: Props) => {
  const [confetti, setConfetti] = React.useState(false);

  useEffect(() => {
    if (confetti) {
      setTimeout(() => setConfetti(false), 10000);
    }
  }, [confetti]);

  return (
    <ConfettiContext.Provider
      value={{
        confetti,
        setConfetti,
      }}
    >
      {confetti && <Confetti />}
      {children}
    </ConfettiContext.Provider>
  );
};

export default ConfettiContextProvider;
