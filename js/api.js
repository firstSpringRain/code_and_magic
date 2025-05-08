const getData = (onSuccess) => {
  fetch('https://25.javascript.htmlacademy.pro/code-and-magick/data')
    .then((response) => response.json())
    .then((wizards) => {
      onSuccess(wizards);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.htmlacademy.pro/code-and-magick',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
