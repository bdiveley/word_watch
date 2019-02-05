import $ from 'jquery'


function getTopWord() {
  $.ajax({
  type: 'GET',
  url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
  success: function(word) {
    $(".word-count").html(`<h3>${Object.keys(word.word)[0]}</h3>`)
  },
  error: function(response) {
    debugger;
    alert(response.responseJSON.error);
  }
  })
}

$(document).ready(() => {
  getTopWord();
});
