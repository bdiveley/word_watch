import $ from 'jquery'

function getTopWord() {
  $.ajax({
  type: 'GET',
  url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
  success: function(word) {
    var top_word = Object.keys(word.word)[0]
    $(".word-count").html(`<h3>${top_word}<br> word count: ${word.word[top_word]}</h3>`)
  },
  error: function(response) {
    $('#flash-container').append(`Error: ${response.responseJSON.error}.`);
    clearFlash()
  }
  })
}

function postWord(input) {
  $.ajax({
    type: 'POST',
    url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
    data: { "word": { "value": input } },
    success: function(response) {
      $('#flash-container').append(`<h5>${response.message}<br></h5>`)
      clearFlash();
    },
    error: function(response) {
      $('#flash-container').append(`Error: ${response.responseJSON.error}`);
      clearFlash()
    }
  })
}

function clearFlash() {
  setTimeout(function(){
    $('#flash-container').remove();
  }, 3000);
}

function splitWords() {
    var words = document.getElementById("message").value.trim().split(" ");
    words.forEach(function(word) {
      var cleanWord = word.replace(/[&\/\\#,+!()$~%.'":*?<>{}]/g, '');
      postWord(cleanWord)
    })
}

$(document).ready(() => {
  getTopWord();

$("#breakdown-btn").on('click', function(){
  splitWords();
});
});
