var authorName = 'Toke Høiland-Jørgensen';
var authorEmail = 'toke@toke.dk';

var authorHTML = [
    '<img src="./reveal.js/images/cs-logo.svg" />',
    '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">',
    '<i class="icon-cc-1"></i>',
    '<i class="icon-cc-by"></i>',
    '<i class="icon-cc-sa"></i>',
    '</a><span class="authors"> - ',
    authorName, ' &lt;', authorEmail, '&gt;  &nbsp;</span>'].join('');

function addAuthor(selector) {
    return function() {
        var elems = document.querySelectorAll(selector);
        elems.forEach(function (e) {
            var author = document.createElement('div');
            author.className = 'authorbox';
            author.innerHTML = authorHTML;
            e.appendChild(author);
        });
    }
}

window.addEventListener('load', addAuthor('.reveal .slides > section > section'));
window.addEventListener('load', addAuthor('#sec-title-slide'));


