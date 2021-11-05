const getTime = () => {
  const dateContainer = document.getElementById("date-displayer");
  const date = new Date();
  let hour = date.getHours();
  let mins = date.getMinutes();
  let seconds = date.getSeconds();
  let time = `${hour}:${mins}:${seconds}`;
  dateContainer.innerHTML = `Fun fact!. Today's date is: ${date.toDateString()} ${time}`;
};

setInterval(()=> {
    getTime()
}, 1000);
