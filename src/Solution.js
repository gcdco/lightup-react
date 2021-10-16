
class Solution {
    constructor(board) {
      this.board = board;
      this.lightSpaces = this.board.lightSpaces;
      this.whiteSpaces = this.board.whiteSpaces;
      this.numberSpaces = this.board.numberSpaces;
      this.hasWon = true;
    }

    verifyAllWhiteSpacesAreLit(){
      //let allLit = true;
      for(const space of this.whiteSpaces){
        if(!space.lit) return false;
      }
      return true;
    }

    verifyAllNumberSpacesHaveLights(){
      //let hasWon = true;
      for(const space of this.numberSpaces){
        let [y,x] = space.coord.split('-').map(Number);
        let numberOfLights = 0;
        // space above
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
      console.log('verify')
      //Verify all white spaces are lit
      this.hasWon = this.verifyAllWhiteSpacesAreLit()
      //Verify all number spaces have the correct number of lights next to them
      //this.hasWon = this.verifyAllNumberSpacesHaveLights()
      console.log(this.numberSpaces)
      //Verify all lights are not lit
      this.hasWon = this.verifyAllLightSpacesAreNotLit()
      return this.hasWon;
    }
  }

export { Solution };