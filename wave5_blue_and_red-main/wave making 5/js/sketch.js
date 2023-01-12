//setting all the variables 
let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05; // the amount to incerment the offset each frame
let offset = 0; //the amount offset from the beginning of wave
let amplitude;
let frequency;
let maxAngle;


//creating values for the hieght and wedith of the waves. frequency and amplitude.
function setup() {
    createCanvas(windowWidth, windowHeight);
    amplitude = windowHeight / 100;
    frequency = windowWidth / 2;
    maxAngle = (windowWidth / frequency) * TWO_PI;
}

function draw() {
    //settign background to black and removing black border from the circles 
    background(0);
    noStroke();
    //while loop to animate the wave,
    while (theta < maxAngle + offset) {
        //makes the cone shape pattern. from small to big left to right
        amplitude = ((theta - offset) / maxAngle) * (windowHeight / 2);
        //makes small to big right to left. the reverse.
        let reverseAmplitude = windowHeight / 2 - amplitude
        let length = 28;
        
        //sright line down
        y = sin(theta - 0.5) + amplitude;
        fill(50, 20, 20);
        ellipse(x, y + height / 2, 16);
        //stright line up 
        y = sin(theta - 0.5) - amplitude;
        fill(50, 20, 20);
        ellipse(x, y + height / 2, 16);
        //straight line middle 
        y = sin(theta - 0.5) / amplitude;
        fill(10, 100, 60);
        ellipse(x, y + height / 2, 16);

        // sin with trail red one.
        for (i = length; i > 0; i--) {
            y = sin(theta - (i * 0.06)) * amplitude;
            fill(195 - (195 / length * i), 0, 0);
            ellipse(x, y + height / 2, 16);

        }
        //sin wave 2, brihgter red. and out of sync no trail.
        y = sin(theta - 0.5) * -amplitude;
        fill(250, 0, 0);
        ellipse(x, y + height / 2, 16);

        // // out of sycn sin wave 
        // //using math.min to make it so it reaches the highet of the page and then contines at that side.
        //  math min returens the smallest of the two. 
        let half = Math.min(amplitude * 2, windowHeight);
        y = sin(theta - (i * 0.06)) * half + 10;
        fill(195 - (195 / length * i), 0, 0);
        ellipse(x, y + height / 2, 25);


        //sin wave - going revese way - purple
        y = sin(theta - 0.5) * reverseAmplitude;
        fill(100, 0, 100);
        ellipse(x, y + height / 2, 16);

        // cosine wave with trail - red to purple.
        for (i = length; i > 0; i--) {

            y = cos(theta - (i * 0.06)) * amplitude;
            fill(100, 0, 50 - (50 / length * i));
            ellipse(x, y + height / 2, 16);
        }

        // cosine wave with trail -going the other way-  small blue one.
        for (i = length; i > 0; i--) {

            y = cos(theta - (i * 0.06)) * reverseAmplitude / 8;
            fill(50 - (50 / length * i), 0, 100);
            ellipse(x, y + height / 2, 10);
        }


        //cosine wave 2 - dark red
        y = cos(theta - 0.5) * -amplitude;
        fill(100, 0, 0);
        ellipse(x, y + height / 2, 16);


        //out of sycn cosine wave reverse- dark red larger. 
        for (i = length; i > 0; i--) {

            y = cos(theta - 0.5) * reverseAmplitude * 2;
            fill(065, 0, 0);
            ellipse(x, y + height / 2, 25);

        }

        // tan wave - blue
        y = tan(theta - 0.5) * amplitude;
        fill(10, 10, 100);
        ellipse(x, y + height / 2, 16);



        theta += 0.2;
        //x needs to say the same and set a percentage of the page to map out where my dots will go.
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    //have to set the offset to inc so that it changes everytime and it knows how much to add to to make a complete cylce. 
    offset += inc;
    theta = offset;
}