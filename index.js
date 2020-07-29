let quotes = [{
            name: '- David Gilmour',
            quote: '<em>Brick&Co.</em> really did an amazing job in putting another brick in the wall. It keeps us on the run.'
        },
        {
            name: '- Tom Morello',
            quote: 'I highly appreciate <em>Brick&Co.</em> for their ecstatic design. The gap between design and tech\'s capabilities is only fictional to them.'
        },
        {
            name: '- Jonny Greenwood',
            quote: 'These guys are weirdly genius. It\'s an instant paranoia just by staring at them.'
        },
        {
            name: '- Joel Embiid',
            quote: 'I don\'t know man, I don\'t really follow these guys, all I do is ball, nad I trust the process. '
        },
        {
            name: '- Benny Goodman',
            quote: 'They put great arts by putting both black and white as their signature models. What a perfect harmony they create. '
        }
    ],
    backgroundColors = [{
            base: '#0a4552',
            gradient: 'grey'
        },
        {
            base: '#400082',
            gradient: '#cf1b1b'
        },
        {
            base: 'black',
            gradient: '#fa7d09'
        },
        {
            base: '#2f2519',
            gradient: '#ff5722'
        },
        {
            base: '#2b509c',
            gradient: '#363434'
        },
        {
            base: '#f0b917',
            gradient: '#ff5722'
        },
        {
            base: '#363434',
            gradient: '#f0a500'
        },
        {
            base: '#ff5722',
            gradient: '#006a71'
        }, {
            base: '#cf1b1b',
            gradient: '#353e55'
        }
    ],
    tag = [
        'Different, indeed.',
        'Twice the size.',
        'Dedicated, period.',
        'No excuses.'
    ];
/**************************************************/
let DOM = {
    quote: '.quotes p',
    quoter: '.quoter',
    heading: 'header',
    photos2: '.photos-2',
    footer: 'footer',
    navButton: '.navButton',
    photoQuote: '.photo',
    tagLine: '.tagline',
    buildingPhotos: '.photos-1',
    modalBox: '.modal-page',
    modalBoxcontent: '.modal-content',
    footerTags: '.tags a'

}
let selectQuotes = document.querySelector(DOM.quote),
    selectQuoter = document.querySelector(DOM.quoter),
    selectHeadingColor = document.querySelector(DOM.heading),
    selectBoxColor = document.querySelector(DOM.photos2),
    selectFooter = document.querySelector(DOM.footer),
    selectNavButton = Array.from(document.querySelectorAll(DOM.navButton)),
    selectPhoto = document.querySelector(DOM.photoQuote),
    selectTag = document.querySelector(DOM.tagLine),
    selectBuilding = document.querySelector(DOM.buildingPhotos),
    selectModal = document.querySelector(DOM.modalBox),
    selectModalContent = document.querySelector(DOM.modalBoxcontent),
    selectFooterTags = Array.from(document.querySelectorAll(DOM.footerTags));

/**************************************************************/
let randomize = (key) => Math.floor(Math.random() * key.length);
/**************************************************************/
let colorChange = () => {
        let num3 = randomize(backgroundColors);
        selectHeadingColor.style.backgroundImage = `linear-gradient(to top, ${backgroundColors[num3].base}, ${backgroundColors[num3].gradient})`;
        selectBoxColor.style.boxShadow = `inset 0px 0px 0px 20px ${backgroundColors[num3].base}, inset 0px 0px 0px 40px ${backgroundColors[num3].gradient}, inset -5px 0 45px rgba(0, 0, 0, .4)`;
        selectFooter.style.backgroundImage = `linear-gradient(to bottom, ${backgroundColors[num3].base}, ${backgroundColors[num3].gradient})`;
        selectNavButton[0].style.color = `${backgroundColors[num3].gradient}`;
        selectModalContent.style.boxShadow = `.3rem .3rem 1rem ${backgroundColors[num3].gradient}, -.3rem .3rem 1rem ${backgroundColors[num3].gradient}`;
        selectQuotes.style.textShadow = `-.5px 1px 3.5px ${backgroundColors[num3].gradient}`;

    },
    photoChange = () => {
        let amountOfBuildingPhotos1 = Math.floor(Math.random() * 2) + 1;
        let numPhoto = Math.floor(Math.random() * 5) + 1;
        selectPhoto.src = `img/photos/photo-${numPhoto}.jpg`;
        selectBuilding.style.backgroundImage = `url(img/building/building-${amountOfBuildingPhotos1}.png)`;
    },
    quotesChange = () => {
        let num = randomize(quotes);
        selectQuoter.innerHTML = quotes[num].name;
        selectQuotes.innerHTML = quotes[num].quote;
        selectTag.innerHTML = tag[randomize(tag)];
        console.log(quotes[num].name)
    };

function allChange() {
    photoChange()
    colorChange()
    quotesChange()
}
/**************************************************/
//General change
document.addEventListener('click', (e) => {
    if (e.target.localName !== 'a' &&
        e.target.localName !== 'i' &&
        e.target.className !== 'close-button' &&
        e.target.localName !== 'textarea' &&
        e.target.localName !== 'input' &&
        selectModal.style.display !== 'block' &&
        e.target.className !== 'modal-page') {
        allChange();
    }

});
//Modal Button
document.addEventListener('click', (e) => {
    if (e.target.className === 'close-button') {
        selectModal.style.display = 'none';
    }
});
for (var i = 0; i < selectFooterTags.length; i++) {
    selectFooterTags[i].addEventListener('click', () => {
        document.querySelector(".modal-body p").innerHTML = 'For more information, please send your queries  by email to the following address: abuabdillatief@gmail.com';
        selectModal.style.display = 'block';
    })
}
selectModal.addEventListener('click', (e) => {
    if (e.target.className == 'modal-page') {
        selectModal.style.display = 'none';
    }
});
for (var i = 1; i < selectNavButton.length; i++) {
    selectNavButton[i].addEventListener('click', (e) => {
        let targetTag = e.target.innerHTML;
        document.querySelector(".modal-body p").innerHTML = 'For more information, please send your queries  by email to the following address: abuabdillatief@gmail.com'

        // if (targetTag === 'Contact') {
        //     document.querySelector(".modal-body p").innerHTML = 'For more information, please send your queries  by email to the following address: abuabdillatief@gmail.com'
        // } else if (targetTag === 'Pricing') {
        //     document.querySelector(".modal-body p").innerHTML = 'halo ini saya tes untuk pricing'
        // } else if (targetTag === 'About') {
        //     document.querySelector(".modal-body p").innerHTML = 'halo ini saya tes untuk pricing'
        // }
        selectModal.style.display = 'block';
    })
}
// //Current Time
// function currentTime() {
//     let date = new Date()
//     let jam = date.getHours();
//     let menit = date.getMinutes();
//     let detik = date.getSeconds();
//     if (jam.length < 2) {
//         jam = '0' + jam.toString();
//     }
//     if (menit.toString().length < 2) {
//         menit.toString();
//         menit += '0';
//     }
//     if (detik.length < 2) {
//         detik = '0' + detik.toString();
//     }

//     document.querySelector('.second-column').innerHTML = `<h1>${jam}:${menit}:${detik}</h1>`
// }
// currentTime();