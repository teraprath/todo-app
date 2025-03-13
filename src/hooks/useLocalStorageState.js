import { useState, useEffect } from "react";

const useLocalStorageState = (key, initialValue, reviver) => {

  // Lade gespeicherte Daten aus localStorage
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (!storedValue) return initialValue;
      return JSON.parse(storedValue, reviver); // ✅ Reviver-Funktion für Date-Umwandlung
    } catch (error) {
      console.error("Fehler beim Laden aus localStorage:", error);
      return initialValue;
    }
  });

  // Speichere den State in localStorage, wenn sich `state` ändert
  
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Fehler beim Speichern in localStorage:", error);
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageState;
