var song 
var fft
var button
function preload(){
    song = loadSound('pt.mp3')
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index","-1")
  fft = new p5.FFT()
  button = createButton('CALIFORNIAN');
  button.style("margin-left","100px")
  button.style("position","absolute")
  button.style("bottom","10px")
  button.style("right","50px")
  button.style("z-index","2")
  button.mouseOver(btnhover);
  button.mouseOut(btnout);
  button.mousePressed(togglePlaying);
}
function btnhover(){
    button.style("scale","1.2")
    button.style("transition","0.2s")}
function btnout(){
    button.style("scale","1")
}
function draw() {
    background(250, 255, 218)
    stroke(0)
    noFill()
    var wave = fft.waveform()
    beginShape()
    for (var i = 0; i < width; i++) {
        var index = floor(map(i, 0 , width, 0 , wave.length))
        var x = i
        var y = wave[index] * 300 + height/2
        vertex(x,y)
    }
    endShape()
}

function togglePlaying(){
    if (song.isPlaying()){
        button.html("CALIFORNIAN")
        song.pause()
        noLoop()
    } else{  
    button.html("PAUSE")
    song.setVolume(0.2)
    song.play();
    loop()}
    }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }
