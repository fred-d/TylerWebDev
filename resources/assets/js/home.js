import restrict_to_path from './helpers/restrict_to_path.js';

restrict_to_path('/', () => {
    document.getElementById('scroll-down-button').addEventListener('click', function() {
        d3.transition()
            .duration(2000)
            .tween("scroll", scrollTween(window.innerHeight));

        function scrollTween(offset) {
            return function() {
                var i = d3.interpolateNumber(window.pageYOffset || document.documentElement.scrollTop, offset);
                return function(t) {
                    scrollTo(0, i(t));
                };
            };
        }
    });
    
  function generateMemberList(response) {
    var members = response.results;
    var membersList = document.createElement('ul');
    membersList.className = 'members-list';

    members.forEach(function(member) {
      var memberEntry = document.createElement('li');
      var name        = document.createElement('strong');
      var duration    = document.createElement('p');
      var avatar      = document.createElement('div');
      avatar.className        = 'avatar';
      avatar.style.background = 'url(' + (member.photo_url || '/img/Logo-Placeholder-Inv.png') + ')';

      var nameText     = document.createTextNode(member.name);

      name.appendChild(nameText);

      memberEntry.appendChild(avatar);
      memberEntry.appendChild(name);
      memberEntry.appendChild(duration);

      membersList.appendChild(memberEntry);
    });

    document.getElementById('list-wrapper').appendChild(membersList);
  }

  (function() {
    /**
     * =========================================================================
     * Create the Members List
     * =========================================================================
     */
    fetch('/members')
      .then(function(response) { return response.json(); }).then(generateMemberList);
  })();

  /**
   * =========================================================================
   * Create the patterned background
   * =========================================================================
   */
  var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    x_colors: 'YlGnBu',
    cell_size: 120
  });

  var tris = document.getElementById('tris');

  if (window.innerWidth >= 600) {
    tris.appendChild(pattern.svg());

    d3.select('#tris > svg')
      .selectAll('path')
      .attr('opacity', 0)
      .attr('stroke-opacity', 0)
      .transition()
      .delay(function(d, i) { return Math.floor(Math.random() * 1000) + 1; })
      .duration(2500)
      .attr('opacity', 1)
      .attr('stroke-opacity', 1);

    window.onresize = function() {
      tris.removeChild(tris.lastChild);
      tris.appendChild(pattern.svg());
    };
  }
  else {
    tris.appendChild(pattern.canvas());

    window.onresize = function() {
      tris.removeChild(tris.lastChild);
      tris.appendChild(pattern.svg());
    };
  }


  /**
   * TODO: setup websocket server.
   */
  if(false)
    (function() {
      /**
       * =========================================================================
       * Play around with nyan cats
       * =========================================================================
       */

      // Setup a container for nyans
      var initialNyans = {};

      // Establish a WS connection to the nyan dispatcher
      var socket = io('http://localhost:9000');

      // Wrap the WS in an RX stream
      var eventStream = Rx.Observable.create(function(observer) {
        socket.on('event', function(data) {
          observer.onNext(data);
        });
      });

      // Establish an event stream that pushes mouse positions to the nyan dispatcher
      // on 100 ms intervals
      var movementStream = Rx.Observable
        .fromEvent(document.body, 'mousemove')
        .map(function(event) {
          return {
            x: event.pageX,
            y: event.pageY
          }
        })
        .scan(function(coordWithHistory, newCoord) {
          return {
            prevX: coordWithHistory.x || 0,
            prevY: coordWithHistory.y || 0,
            x: newCoord.x,
            y: newCoord.y
          }
        })
        .sample(100);

      // Given a current nyanState and an event packet, figure out what to do
      var updateNyans = function(nyanState, eventPacket) {
        switch (eventPacket.action) {
          case 'disconnect':
            delete nyanState[eventPacket.source];

            return nyanState;
          case 'move':
            nyanState[eventPacket.source] = {
              x: eventPacket.packet.x,
              y: eventPacket.packet.y,
              rot: Math.atan2(eventPacket.packet.x - eventPacket.packet.prevX, eventPacket.packet.y - eventPacket.packet.prevY) / (Math.PI / 180)
            };

            return nyanState;
        }
      };

      // Listen to the event stream from the WS and update the nyanState depending
      // on what it says is going on in the rest of the world
      var nyanState = eventStream
        .scan(updateNyans, initialNyans)
        .startWith(initialNyans);

      // Every time we move the mouse on a 100 ms interval, alert the nyan dispatcher
      // that we've moved our mouse so it can tell everyone else
      movementStream.subscribe(function(coord) {
        socket.emit('move', coord);
      });

      // Whenver the nyanState changes, redraw all the nyans
      nyanState.subscribe(function(nyanCats) {
        for (nyan in nyanCats) {
          var cat = document.getElementById(nyan);

          if (cat === null) {
            cat           = document.createElement('div');
            cat.id        = nyan;
            cat.className = 'nyan';

            document.getElementById('nyans').appendChild(cat);
          }

          cat.style.left = nyanCats[nyan].x + 'px';
          cat.style.top  = nyanCats[nyan].y + 'px';
        }
      });
    })();
});
