'use strict';

$(document).ready(function () {
  $('.delete-todo').on('click', function (e) {
    $target = $(e.target);
    var id = $target.attr('data-id');
    $.ajax({
      type: 'GET',
      url: '/todo/delete/' + id,
      success: function success(response) {
        window.location.href = '/';
      },
      error: function error(_error) {
        console.log(_error.responseText);
      }
    });
  });
});