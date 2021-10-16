class Solution {
    constructor(board) {
      this.board = board.board;
      this.lightSpaces = board.lightSpaces;
      this.whiteSpaces = board.whiteSpaces;
      this.numberSpaces = board.numberSpaces;
      this.hasWon = true;
    }

    verifyAllWhiteSpacesAreLit(){
      for(const space of this.whiteSpaces){
        if(!space.lit && !space.light) {
          return false;
        }
      }
      return true;
    }

    verifyAllNumberSpacesHaveLights(){
      for(const space of this.numberSpaces){
        const [y,x] = space.coord.split('-').map(Number);
        let numberOfLights = 0;
        //space above
        if(y-1 >= 0) {
          if(this.board[y-1][x].light !== undefined && this.board[y-1][x].light === true){
            numberOfLights++;
          }
        }
        // space right
        if(x+1 < this.board[0].length) {
          if(this.board[y][x+1].light !== undefined && this.board[y][x+1].light === true){
            numberOfLights++;
          }
        }
        // space down
        if(y+1 < this.board.length) {
          if(this.board[y+1][x].light !== undefined && this.board[y+1][x].light === true){
            numberOfLights++;
          }
        }
        // space left
        if(x-1 >= 0) {
          if(this.board[y][x-1].light !== undefined && this.board[y][x-1].light === true){
            numberOfLights++;
          } 
        }
        if(numberOfLights < space.value) return false;
       }
      return true;
    }

    verifyAllLightSpacesAreNotLit(){
      for(const space of this.lightSpaces){
        if(space.lit) return false;
      }
      return true;
    }

    verify(){
      const whiteSpacesLit = this.verifyAllWhiteSpacesAreLit();
      const numberSpacesHaveLights = this.verifyAllNumberSpacesHaveLights();
      const lightSpacesAreNotLit = this.verifyAllLightSpacesAreNotLit();
      return whiteSpacesLit && numberSpacesHaveLights && lightSpacesAreNotLit;
    }
  }

export { Solution };