$(document).ready(() => {
  $('.delete-todo').on('click', (e) => {
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type: 'GET',
      url: '/todo/delete/' + id,
      success: (response) => {
        window.location.href = '/';
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  });
});
