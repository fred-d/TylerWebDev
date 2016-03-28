<footer>
    <ul class="footer-icons">
        <li>
            <a href="/"><img class="icon" src="/img/Logo-White.png" alt="Home"></a>
        </li>
        <li class="divider"></li>
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
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/0.9.0/fetch.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/trianglify/0.2.1/trianglify.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/4.0.1/rx.lite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/immutable/3.7.5/immutable.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAQF_pP8XZoZPZUihJxL02jBE85Bu0LZY"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/CSSPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineLite.min.js"></script>
<script src="https://cdn.jsdelivr.net/svginjector/1.1.3/svg-injector.min.js"></script>
<script src="/js/main.js"></script>
<script>
    (function() {
        var timeline = new TimelineLite();
            timeline.pause();
            
        var navTrigger = document.getElementById('nav-trigger');
        var hamburger  = document.getElementById('hamburger');
        var listItems  = [].slice.call(document.querySelectorAll('#navigation li'));
        var listLinks  = [].slice.call(document.querySelectorAll('#navigation li a'));
        
        listItems.forEach(function(element, i) {
            timeline.to(element, 0.1, {top: i * 48 + 90}, "-=0.05");
        });
        
        listItems.forEach(function(element, i) {
            timeline.to(element, 0.25, {'max-width': 200}, "-=0.1");
        });
        
        listLinks.forEach(function(element, i) {
            timeline.to(element, 0.25, {'opacity': 1}, "-=0.1");
        });

        document.addEventListener('DOMContentLoaded', function(){
            SVGInjector(document.querySelectorAll('img.svg'));
            
            navTrigger.addEventListener('click', function(event) {
                if (navTrigger.className !== 'open') {
                    navTrigger.className = 'open';
                    hamburger.className = 'open';
                    timeline.play();
                }        
                else {
                    navTrigger.className = '';
                    hamburger.className = '';
                    timeline.reverse();
                }
                
                event.preventDefault(); return false;
            });
        });
    })();

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-32417744-2', 'auto');
    ga('send', 'pageview');
</script>

</div>
</body>
</html>
