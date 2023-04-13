"use strict";

// task #1
let head = $('h2.head');
head.each(function (i, el) {
    $(el).css('background-color', 'green');
    $('.inner').css('font-size', '35px');
});
// end

// task #2
let link = $('a#link');
let href = link.attr('href');
let checkHref = /https:\/\//.test(href);
if (checkHref) {
    link.attr('target', '_blank');
}
// end

// task #3
let h3f = $('h3').first();
let divf = $('div').first();
h3f.before(divf);
let h3l = $('h3').last();
let divl = $('div').last();
h3l.before(divl);
// end

// task #4
let counter = 0;
$('input').click(function () {
    counter += 1;
    if (counter == 3) {
        $('input').each(function (i, el) {
            $('input').attr('disabled', 'true');
        })
    }
})
// end