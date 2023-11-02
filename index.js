// Initializing the canvas
var canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

// Setting the width and height of the canvas, basically fullscreen.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
let letters =
  "§µÆßÞĦŊŒƦƧƸȤȠЄЊЖЩЮѠѬԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆښܜऐऔकखगघङचछजझञटঔকখগঘঙচছজঝঞઔકખગઘઙஆஇஈஉஊకఖగఘఙచජඣඤඥႴႵႶႷጶጷጸᐂᑝᑞᑟᗗᗈᠦᠧΩ∑ABCDEFGHIJKLMNOABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ一二三四五六七八九十百千円日月火水木金土本人男女子大学学校先文字音楽美術映画本物語詩小説作家術美容服飾家具家庭食器飲食料理料일이삼사오육칠팔구십백천만원날달화수목금토학교선생학생친경생활식사건강운동여행언어글자음악미술영화책이야기시소설작가극장연기예술미용옷가구가전가정사용품부엌욕실화장실예산교통비국제국로신호표경찰교통경찰관경찰서주차장एकदोतीनचारपांचछःसातआठनौदससौबारहसौहज़ररहनहस्वप्नसवयरखतबूढ़ाप्रजातिजीवनकिशोरमातापित";
letters = letters.split("");

// Setting up the columns
let fontSize = 27,
  columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 0;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 24px "dragon_alphabet" , sans-serif';

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];

    // Generate a random index to pick from the colors (they are all green).
    let randomIndex = Math.floor(Math.random() * 3);

    // Colors list of green in different tonalities to achieve that white-ish green.
    let colors = ["rgb(0, 255, 0)", "rgb(102, 255, 79)", "rgb(144, 255, 119)"];

    // Use the randomly selected color
    ctx.fillStyle = colors[randomIndex];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 40);
