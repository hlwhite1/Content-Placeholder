const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = 
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Lorem Fake dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsem dolor sit amet concorn adapt eliti. Doloris was here'
    profile_img.innerHTML = 'img src="https://randomuser.me/api/portriats/men/45.jpg" alt="" />'
    name.innerHTML = 'Jhon Doe'
    date.innerHTML = 'Feb 05, 2022'

    animated_bgs.forEach((bg) => bg.classList.remove(animated-bg))
    animated_bg_texts.forEach((bg) => bg.classList.remove(animated-bg-text))
}
