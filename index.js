function tileImg(url, top, left, width, height) {
  let bgDiv = document.createElement("div");
  bgDiv.style.backgroundImage = `url('${url}')`;
  bgDiv.style.backgroundRepeat = "repeat";
  bgDiv.style.position = "fixed";
  bgDiv.style.top = top;
  bgDiv.style.left = left;
  bgDiv.style.width = width;
  bgDiv.style.height = height;
  document.body.append(bgDiv);
}

tileImg("assets/sky.png", "0px", "0px", "100%", "48%");
tileImg("assets/grass.png", "48%", "0px", "100%", "67%");

move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);

// Create the inventory
const returnedInventory = newInventory();
move(returnedInventory).to(0, 0);

// Create everything else
const character = newImage("assets/green-character/static.gif");

function handleDirectionChange(direction) {
  if (direction === null) {
    character.src = "assets/green-character/static.gif";
  }
  if (direction === "west") {
    character.src = "assets/green-character/west.gif";
  }
  if (direction === "north") {
    character.src = "assets/green-character/north.gif";
  }
  if (direction === "east") {
    character.src = "assets/green-character/east.gif";
  }
  if (direction === "south") {
    character.src = "assets/green-character/south.gif";
  }
}

move(character).withWASD(100, 250, handleDirectionChange);

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300);

// have the NPC start walking east immediately
npc.walkNorth(1400, () => {
  npc.walkEast(1200, () => {
    npc.walkSouth(300, () => {
      npc.walkEast(1500, () => {
        npc.walkSouth(1500, () => {
          npc.walkWest(2700, () => {
            npc.walkNorth(400);
          });
        });
      });
    });
  });
});
