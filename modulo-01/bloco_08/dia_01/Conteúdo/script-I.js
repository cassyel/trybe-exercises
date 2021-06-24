const wakeUp = () => 'Acordando!!';

const breakFast = () => 'Bora tomar café!!!';

const sleep = () => 'Partiu dormir!!';

const doingThis = (func) => {
  const result = func();
  console.log(result);
};

doingThis(wakeUp);
doingThis(breakFast);
doingThis(sleep);