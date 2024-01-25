// The purpose of this emotional wheel is to help the user discover their true emotion at any point in time. Too often we 
// declare a general emotion without uncovering the true emotion, which would help us truly acknowledge and feel 
// said emotion. 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const validEmotions = ['bad', 'fearful', 'angry', 'disgusted', 'sad', 'happy', 'surprised'];

rl.question("What's your name? ", function(name) {
  console.log(`Hello, ${name}!`);

  const askEmotion = () => {
    rl.question("What is your current (general) emotional state? (Bad, fearful, angry, disgusted, sad, happy, or surprised) ", function(emotionalState) {
      if (validEmotions.includes(emotionalState.toLowerCase())) {
        console.log(`${name}, you may think you are feeling ${emotionalState}, but that is a surface-level emotion. Let's dive deeper.`);
        rl.close();
      } else {
        console.log("Please enter a valid emotional state: Bad, fearful, angry, disgusted, sad, happy, or surprised.");
        askEmotion(); // Ask again
      }
    });
  };

  askEmotion();
});
