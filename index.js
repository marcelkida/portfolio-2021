var dir = 1
var logoanim = bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'data.json',
})
logoanim.onComplete = function () {
  console.log("complete");
  if (dir == 1) {
    logoanim.setDirection(-1)
    logoanim.goToAndPlay(48, true)
    dir = -1
    console.log('b');
  } else{
    logoanim.setDirection(1)
    logoanim.goToAndPlay(0, true)
    dir = 1
    console.log('f');
  }
}