img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses)
}

function draw() {
	game()
}

function modelLoaded()
{
	console.log('Model Loaded!');
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log(results);
	}
}






