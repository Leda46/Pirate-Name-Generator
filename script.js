// Arrays for pirate name components
const pirateAdjectives = ["fiercest", "most fearsome", "strongest", "smartest", "most powerful"];
const pirateTitles = ["Captain", "First Mate", "Bosun", "Swashbuckler", "Quartermaster"];
const pirateNouns = ["treasure", "jewel", "weapon", "diamond", "secret"];




// Generate Pirate Name
function generatePirateName() {
  const randomAdjective = pirateAdjectives[Math.floor(Math.random() * pirateAdjectives.length)];
  const randomTitle = pirateTitles[Math.floor(Math.random() * pirateTitles.length)];
  const randomNoun = pirateNouns[Math.floor(Math.random() * pirateNouns.length)];
  const realName = document.getElementById("realName").value;
  const favoriteColor = document.getElementById("favoriteColor").value;
  const favoriteAnimal = document.getElementById("favoriteAnimal").value;
  const pirateNames = [
    `${randomTitle} ${realName} of the ${favoriteColor} ${favoriteAnimal}s`,
    `${favoriteColor} Beard the ${favoriteAnimal}`,
    `Black ${favoriteAnimal} of the ${favoriteColor} Seas`,
];


  // Validate inputs
  if (!realName || !favoriteColor || !favoriteAnimal) {
    document.getElementById("result").innerHTML = "Please fill out all fields!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * pirateNames.length);
  const pirateName = pirateNames[randomIndex];
  
  // Generate a pirate backstory
  const backstory = `Legend has it, ${pirateName} once sailed the high seas with a loyal crew of ${favoriteAnimal}s, pillaging ships for ${randomNoun}s as magical as the stars! Beware of their wrath, for they're the ${randomAdjective} buccaneer on the seven seas.`;

  // Display result
  document.getElementById("result").innerHTML = `
    <strong>Your Pirate Name:</strong> ${pirateName}<br><br>
    <em>${backstory}</em>
  `;
}
// Global hat color variable
let hatColor = "#000000"; // Default to black

const canvas = document.getElementById("pirateAvatar");
const ctx = canvas.getContext("2d");

// Randomize Avatar and Draw on Canvas
function drawAvatar() {
  const avatarX = canvas.width / 2; // Center of the canvas horizontally
  const avatarY = canvas.height / 2; // Position vertically (adjust for appearance)
  
  // Customistaion features
  const hatColor = document.getElementById("hatColor").value;
  const showBeard = document.getElementById("toggleBeard").checked;
  const eyePatchColor = document.getElementById("eyePatchColor").value;
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Add crossed swords in the background
    ctx.strokeStyle = "#7e9cb6";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(avatarX - 60, avatarY + 30); // First sword
    ctx.lineTo(avatarX + 60, avatarY - 30);
    ctx.moveTo(avatarX + 60, avatarY + 30); // Second sword
    ctx.lineTo(avatarX - 60, avatarY - 30);
    ctx.stroke();    

    // Draw the face (head)
    ctx.fillStyle = "#f4c2c2"; // Skin tone
    ctx.beginPath();
    ctx.arc(avatarX, avatarY, 50, 0, Math.PI * 2); // Circle for the head
    ctx.fill();
    ctx.strokeStyle = "#000"; // Outline
    ctx.stroke();

    
    // Draw the pirate hat
    ctx.fillStyle = hatColor;
    ctx.beginPath();
    ctx.moveTo(avatarX - 60, avatarY - 50); // Left edge
    ctx.quadraticCurveTo(avatarX, avatarY - 90, avatarX + 60, avatarY - 50); // Top curve
    ctx.lineTo(avatarX + 50, avatarY - 30); // Right side
    ctx.lineTo(avatarX - 50, avatarY - 30); // Bottom edge
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Add a skull to the hat
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(avatarX, avatarY - 60, 10, 0, Math.PI * 2); // Skull circle
    ctx.fill();

    // Skull eyes
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(avatarX - 5, avatarY - 60, 2, 0, Math.PI * 2); // Left eye
    ctx.arc(avatarX + 5, avatarY - 60, 2, 0, Math.PI * 2); // Right eye
    ctx.fill();

    // Skull mouth (crossbones)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(avatarX - 7, avatarY - 55); // Left crossbone
    ctx.lineTo(avatarX + 7, avatarY - 65);
    ctx.moveTo(avatarX - 7, avatarY - 65); // Right crossbone
    ctx.lineTo(avatarX + 7, avatarY - 55);
    ctx.stroke();

    // Draw the eyes
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(avatarX - 20, avatarY - 10, 7, 0, Math.PI * 2); // Left eye white
    ctx.arc(avatarX + 20, avatarY - 10, 7, 0, Math.PI * 2); // Right eye white
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(avatarX - 20, avatarY - 10, 3, 0, Math.PI * 2); // Left pupil
    ctx.arc(avatarX + 20, avatarY - 10, 3, 0, Math.PI * 2); // Right pupil
    ctx.fill();

    // Add an eye patch
    ctx.fillStyle = eyePatchColor;
    ctx.beginPath();
    ctx.arc(avatarX - 20, avatarY - 10, 9, 0, Math.PI * 2); // Left eye covered
    ctx.fill();

    // Eye patch strap
    ctx.strokeStyle = eyePatchColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(avatarX - 50, avatarY - 20); // Strap start
    ctx.lineTo(avatarX - 20, avatarY - 10); // Strap end
    ctx.lineTo(avatarX + 50, avatarY - 30); // Strap end
    ctx.stroke();

    // Add a shirt
    ctx.fillStyle = "#3B89CF"; // Blue shirt
    ctx.beginPath();
    ctx.moveTo(avatarX - 50, avatarY + 50); // Left shoulder
    ctx.lineTo(avatarX + 50, avatarY + 50); // Right shoulder
    ctx.lineTo(avatarX + 40, avatarY + 80); // Bottom right
    ctx.lineTo(avatarX - 40, avatarY + 80); // Bottom left
    ctx.closePath();
    ctx.fill();

    if (showBeard) {
      ctx.fillStyle = "#8B4513"; // Beard color
      ctx.beginPath();
      ctx.moveTo(avatarX - 30, avatarY + 30); // Left side near jaw
      ctx.quadraticCurveTo(avatarX - 40, avatarY + 50, avatarX - 15, avatarY + 70); // Curve down on the left
      ctx.quadraticCurveTo(avatarX, avatarY + 80, avatarX + 15, avatarY + 70); // Curve up toward the middle
      ctx.quadraticCurveTo(avatarX + 40, avatarY + 50, avatarX + 30, avatarY + 30); // Curve down on the right
      ctx.closePath();
      ctx.fill();
    }  

    // Add a smile
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(avatarX, avatarY + 8, 13, 0, Math.PI, false); // Smiling mouth
    ctx.stroke();

    // Add earrings
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(avatarX - 50, avatarY + 5, 5, 0, Math.PI * 2); // Left earring
    ctx.closePath()
    
    ctx.strokeStyle = "gold";
    ctx.lineWidth = 3;
    ctx.beginPath()
    ctx.arc(avatarX + 50, avatarY + 5, 5, 0, Math.PI * 2); // Right earring
    ctx.stroke();
    ctx.closePath()

    

    
  };


function downloadAvatar() {
  const link = document.createElement("a");
  link.download = "pirate_avatar.png";
  link.href = canvas.toDataURL();
  link.click();
}

// Event Listeners
document.getElementById("hatColor").addEventListener("input", drawAvatar); // Update avatar when color changes
document.getElementById("updateAvatar").addEventListener("click", drawAvatar);

// Call the function to draw the avatar
drawAvatar(); 


