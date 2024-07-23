"use client";
import React from "react";

export const MutableContext = React.createContext();

function MutableProvider({ children }) {
  const [isMuted, setIsMuted] = React.useState(true);

  const toggleMute = React.useCallback(() => {
    setIsMuted((currentMute) => !currentMute);
  });

  return (
    <MutableContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </MutableContext.Provider>
  );
}

export function useMutable() {
  const data = React.useContext(MutableContext);

  if (!data) {
    throw new Error("useMutable must be used within a MutableProvider");
  }

  return data;
}

export default MutableProvider;
