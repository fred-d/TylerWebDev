export default function restrict_to_path(path, callback) {
  if(window.location.pathname === path) {
    callback();
  }
}
