function move(img) {
    img.style.position = "fixed";
  
    function moveToCoordinates(left, bottom) {
      img.style.left = left + "px";
      img.style.bottom = bottom + "px";
    }
  
    function moveWithWASD(left, bottom, onDirectionChange) {
      let direction = null;
      let x = left;
      let y = bottom;
  
      img.style.left = x + "px";
      img.style.bottom = y + "px";
  
      function moveCharacter() {
        if (direction === "west") {
          x--;
        }
        if (direction === "north") {
          y++;
        }
        if (direction === "east") {
          x++;
        }
        if (direction === "south") {
          y--;
        }
  
        img.style.left = x + "px";
        img.style.bottom = y + "px";
      }
  
      setInterval(moveCharacter, 1);
  
      document.addEventListener("keydown", function (e) {
        if (e.repeat) return;
  
        if (e.key === "a") {
          direction = "west";
        }
        if (e.key === "w") {
          direction = "north";
        }
        if (e.key === "d") {
          direction = "east";
        }
        if (e.key === "s") {
          direction = "south";
        }
        onDirectionChange(direction)
      });
  
      document.addEventListener("keyup", function (e) {
        direction = null;
        onDirectionChange(direction)
      });
    }
  
    return {
      to: moveToCoordinates,
      withWASD: moveWithWASD,
    };
  }