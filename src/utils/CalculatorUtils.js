export const initialMemory = 0;
export const initialValue = "0";

export const handlePress = (label, value, setValue, memory, setMemory) => {
  console.log('Pressed:', label);
  console.log(value);

  if (label !== 'C' && label !== 'M+' && label !== 'M-' && label !== 'MR' && label !== 'MC' && label !== '=' && label !== 'CE' && value !== 'Error') {
    if ((value === '0' && label !== '0') || value !== '0') {
      if (value === '0' && label !== '.' && label !== '÷' && label !== 'x' && label !== '-' && label !== '+' && label !== '^') {
        setValue(label);
        return;
      }
      let oldValue = value;
      setValue(oldValue + label);
      return;
    }
  } else if (label === 'C') {
    setValue("0");
    return;

  } else if (value === "Error") {
    return;

  } else if (label === 'M+') {
    const current = parseFloat(value) || 0;
    setMemory(prev => prev + current);
    return;

  } else if (label === 'M-') {
    const current = parseFloat(value) || 0;
    setMemory(prev => prev - current);
    return;

  } else if (label === 'MR') {
    if (value === "0") {
      setValue(memory.toString());
    } else {
      setValue(value + memory.toString());
    }
    return;

  } else if (label === 'MC') {
    setMemory(0);
    return;

  } else if (label === 'CE') {
    if (value.length > 1) {
      setValue(value.slice(0, -1));
    } else {
      setValue("0");
    }
    return;

  } else if (label === '=') {
    try {
      const result = eval(
        value
          .replace(/x/g, '*')
          .replace(/÷/g, '/')
          .replace(/\^/g, '**')
          .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
          .replace(/π/g, 'Math.PI')
      );

      if (isNaN(result) || !isFinite(result)) {
        setValue("Error");
        return;
      }

      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  }
};

export const toggleExpanded = (expanded, setExpanded) => {
  setExpanded(!expanded);
};
