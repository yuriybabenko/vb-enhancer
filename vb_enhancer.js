// aggregate a list of ignored usernames that have posted in this thread
// TODO: ajax call to profile page to build list of ignored users from
// that data, instead
var usernames = new Array();
$('#postlist li.postbitignored').each(function (i, post_wrapper) {
  var post_wrapper = $(post_wrapper);

  var name = $('a.username strong', post_wrapper).text();

  usernames.push(name);
});

// find all quoted blocks of text, and remove the quotes from ignored
// users
$('blockquote.postcontent .bbcode_container').each(function (i, quote_wrapper) {
  var quote_wrapper = $(quote_wrapper);

  var name = $('.bbcode_postedby > strong', quote_wrapper).text();

  if (jQuery.inArray(name, usernames) != -1) {
    quote_wrapper.remove();
  }
});

// remove ignored posts themselves
$('#postlist li.postbitignored').remove();
