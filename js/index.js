var birth = new Date('12/04/2001');
var check = new Date();

var milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;


var ageInDays = (check - birth) / milliDay;

var ageInYears = Math.floor(ageInDays / 365);

document.getElementById("age").innerHTML = ageInYears;

// fetch('https://api.github.com/users/Thomas-Houtrique/repos?sort=created&per_page=3')
//     .then((resp) => resp.json())
//     .then(function (data) {
//         const final = data.map(elem => [elem.name, elem.description, elem.created_at, elem.html_url]);
//         document.querySelectorAll('.flip-card-front > h3').forEach(function (Element, i) {
//             Element.innerHTML = final[i][0]
//         })
//         document.querySelectorAll('.flip-card-front > p').forEach(function (Element, i) {
//             Element.innerHTML = final[i][1]
//         })
//         document.querySelectorAll('.flip-card-back > p > .date').forEach(function (Element, i) {
//             epoch = Date.parse(final[i][2])
//             date = new Date(epoch)
//             var options = { year: "numeric", month: "long", day: "numeric" }
//             Element.innerHTML = date.toLocaleString('fr-FR', options)
//         })
//         document.querySelectorAll('.flip-card-back > a').forEach(function (Element, i) {
//             Element.href = final[i][3]
//         })
//     })

const button = document.querySelector(".reverse");
const contact_link = document.querySelectorAll(".reveal-icons")
button.addEventListener("click", function (e) {
    button.classList.add('disapear');
    button.addEventListener('transitionend', () => {
        button.style.display = 'none';
        contact_link.forEach(function (element) {
            element.style.height = "auto";
            element.querySelector('.contact').style.fontSize = '30px';
            element.classList.add('reveal-visible');
        });
    });
}, false);