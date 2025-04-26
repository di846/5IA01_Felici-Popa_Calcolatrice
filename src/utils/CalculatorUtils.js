// Valore iniziale della memoria
export const initialMemory = 0;
// Valore iniziale della calcolatrice
export const initialValue = "0";

// Gestisce la pressione dei pulsanti della calcolatrice
export const handlePress = (label, value, setValue, memory, setMemory) => {
  /*console.log('Pressed:', label); 
  console.log(value);*/

  // Gestione dei pulsanti numerici e operatori
  if (label !== 'C' && label !== 'M+' && label !== 'M-' && label !== 'MR' && label !== 'MC' && label !== '=' && label !== 'CE' && value !== 'Error') {
    if ((value === '0' && label !== '0') || value !== '0') {
      if (value === '0' && label !== '.' && label !== '÷' && label !== 'x' && label !== '-' && label !== '+' && label !== '^') {
        setValue(label); // Sostituisce il valore iniziale "0"
        return;
      }
      let oldValue = value;
      setValue(oldValue + label); // Aggiunge il nuovo input al valore corrente
      return;
    }
  } 
  // Gestione del pulsante "C" (reset)
  else if (label === 'C') {
    setValue("0");
    return;
  } 
  // Ignora input se il valore è "Error"
  else if (value === "Error") {
    return;
  } 
  // Gestione del pulsante "M+" (aggiunge alla memoria)
  else if (label === 'M+') {
    if(calculateResult(value) !== "Error") {
        const current = parseFloat(value) || 0;
        setMemory(prev => prev + current); // Aggiunge il valore corrente alla memoria
    }
    setValue(calculateResult(value)); 
    return;
  } 
  // Gestione del pulsante "M-" (sottrae dalla memoria)
  else if (label === 'M-') {
    if(calculateResult(value) !== "Error") {
        const current = parseFloat(value) || 0;
        setMemory(prev => prev - current); // Sottrae il valore corrente dalla memoria
    }
    setValue(calculateResult(value)); // Calcola il risultato
    return;
  } 
  // Gestione del pulsante "MR" (richiama il valore della memoria)
  else if (label === 'MR') {
    if (value === "0") {
      setValue(memory.toString()); // Mostra il valore della memoria
    } else {
      setValue(value + memory.toString()); // Aggiunge il valore della memoria al valore corrente
    }
    return;
  } 
  // Gestione del pulsante "MC" (resetta la memoria)
  else if (label === 'MC') {
    setMemory(0);
    return;
  } 
  // Gestione del pulsante "CE" (cancella l'ultimo carattere)
  else if (label === 'CE') {
    if (value.length > 1) {
      setValue(value.slice(0, -1)); // Rimuove l'ultimo carattere
    } else {
      setValue("0"); // Resetta a "0" se c'è un solo carattere
    }
    return;
  } 
  // Gestione del pulsante "=" (calcola il risultato)
  else if (label === '=') {
    setValue(calculateResult(value)); 
    return;
  }
};

// Calcola il risultato dell'espressione
export const calculateResult = (value) => {
    try {
        const result = eval(
            value
                .replace(/x/g, '*') // Sostituisce "x" con "*"
                .replace(/÷/g, '/') // Sostituisce "÷" con "/"
                .replace(/\^/g, '**') // Sostituisce "^" con "**"
                .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)') // Gestisce la radice quadrata
                .replace(/π/g, 'Math.PI') // Sostituisce "π" con il valore di Math.PI
        );

        if (isNaN(result) || !isFinite(result)) {
            return "Error"; // Ritorna "Error" se il risultato non è valido
        }

        return result.toString(); // Ritorna il risultato come stringa
    } catch (error) {
        return "Error"; // Ritorna "Error" in caso di errore
    }
};

// Alterna lo stato di espansione della calcolatrice
export const toggleExpanded = (expanded, setExpanded) => {
  setExpanded(!expanded); 
};
