<?php require __DIR__ . '/partials/header.php' ?>

<section>
    <h2><small><img class="svg icon" src="/img/icons/network.svg" alt=""></small>Hello World</h2>
    <p>Tyler Web Dev is a community of developers, programmers, designers,
        and marketers operating in the heart of East Texas. We are passionate
        about the web and open to the public, welcoming new members of all skill
        levels. Whether you're a senior developer or a clueless beginner anxious
        to learn, there is a place for you here. Join us at our next meetup
        to get involved in fun projects and meet other people from your
        community who share your interests in web development.</p>
    <p>If you're interested in any aspect of web development, why not join our
        organization? We're regsitered through Meetup.com, which you can find below.
        You can also find us on various social media outlets.</p>
    <a class="button" href="http://www.meetup.com/Tyler-Web-Dev" target="_blank"
       onclick="ga('send', 'event', {'eventCategory':'Social','eventAction':'Click','event': 'Join Our Metup'});">Join Our Meetup</a>
    <ul class="social-list">
        <li>
            <a target="_blank" href="https://twitter.com/TylerWebDev">
                <img class="svg icon" src="/img/icons/twitter.svg" alt="Twitter">
            </a>
        </li>
        <li>
            <a target="_blank" href="https://www.facebook.com/Tyler-Web-Dev-416205281908784/">
                <img class="svg icon" src="/img/icons/facebook.svg" alt="Facebook">
            </a>
        </li>
        <li>
            <a target="_blank" href="https://github.com/TylerWebDev">
                <img class="svg icon" src="/img/icons/github.svg" alt="Github">
            </a>
        </li>
    </ul>
</section>
<hr>
<section>
    <h2><small><img class="svg icon" src="/img/icons/location-pin.svg" alt=""></small>The Meetup</h2>
    <p>Twice a month, our community meets to exchange ideas and learn from each other. These
        meetups generally last about two hours, and have free snacks.</p>
</section>
<div id="map-component"></div>
<section>
    <p>For more information, you can find our group on Meetup.com</p>
</section>
<section class="split justify no-indent">
    <div class="left invert">
        <h3>Giving Back to the Community<small>Free Websites for Non-Profit Organizations</small></h3>
        <p>Tyler Web Dev is an organization of East Texas natives, and we use our skills
            to help make our community a better place. If you are a non-profit organization
            and you don't have a website, or you're unhappy with your current site, let Tyler Web Dev
            put our skills to work for you.</p>
    </div>
    <div class="right">
        <div id="form"></div>
    </div>
</section>
<section>
    <h2><small><img class="svg icon" src="/img/icons/mask.svg" alt=""></small>Our Members</h2>
    <p>We have meetup members from all over East Texas. Each and every one of us
        are truly passionate about web development, and we each bring our own unique
        set of skills to the group.</p>
    <div id="list-wrapper"></div>
</section>

<?php require __DIR__ . '/partials/footer.php';
