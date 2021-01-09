var birth = new Date('12/04/2001');
var check = new Date();

var milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;


var ageInDays = (check - birth) / milliDay;

var ageInYears = Math.floor(ageInDays / 365);

document.getElementById("age").innerHTML = ageInYears;

const threshold = .5
const options = {
    root: null,
    rootMargin: '0px',
    threshold
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > threshold) {
            entry.target.classList.add('animate__fadeInUp')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)
const targets = document.querySelectorAll('.reveal')
targets.forEach(function (target) {
    observer.observe(target)
})

fetch('https://api.github.com/users/Thomas-Houtrique/repos?sort=created&per_page=3')
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data)
        const final = data.map(elem => [elem.name, elem.description, elem.created_at, elem.html_url]);
        document.querySelectorAll('.flip-card-front > h3').forEach(function(Element, i){
            Element.innerHTML = final[i][0]
        })
        document.querySelectorAll('.flip-card-front > p').forEach(function(Element, i){
            Element.innerHTML = final[i][1]
        })
        document.querySelectorAll('.flip-card-back > p > .date').forEach(function(Element, i){
            epoch = Date.parse(final[i][2])
            date = new Date(epoch)
            var options = {year: "numeric", month: "long", day: "numeric"}
            Element.innerHTML = date.toLocaleString('fr-FR', options)
        })
        document.querySelectorAll('.flip-card-back > a').forEach(function(Element, i){
            Element.href = final[i][3]
        })
    })
