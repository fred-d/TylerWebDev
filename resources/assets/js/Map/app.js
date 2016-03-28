import restrict_to_path from '../helpers/restrict_to_path.js';

import Map from './Components/Map.jsx';

restrict_to_path('/', () => {
  ReactDOM.render(<Map origin={{
    lat: 32.285448,
    lng: -95.280382
  }} />, document.getElementById('map-component'));
});
