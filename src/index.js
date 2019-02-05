import $ from 'jquery'

function getTopWord() {
  $.ajax({
  type: 'GET',
  url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
  success: function(word) {
    var top_word = Object.keys(word.word)[0]
    $(".word-count").html(`<h3>${top_word}: ${word.word[top_word]}</h3>`)
  },
  error: function(response) {
    debugger;
    alert(response.responseJSON.error);
  }
  })
}

function postWord(input) {
  $.ajax({
  type: 'POST',
  url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
  data: { "word": { "value": input } },
  success: function(response) {
  },
  error: function(response) {
    alert(response.responseJSON.error);
  }
  })
}

function splitWords() {
    var words = document.getElementById("message").value.trim().split(" ");
    words.forEach(function(word) {
      postWord(word);
    })
}

$(document).ready(() => {
  getTopWord();

$("#breakdown-btn").on('click', function(){
  splitWords();
});

});
