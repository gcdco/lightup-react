
class Solution {
    constructor(board) {
      this.board = board;
    }

  }
  
  /** Given a sought-for val, return sum of dice of that val.
   *
   * Used for rules like "sum of all ones"
   */
  
//   class TotalOneNumber extends Solution {
//     evalRoll = dice => {
//       return this.val * this.count(dice, this.val);
//     };
//   }

// const verify = (board, whiteSpaces, NumberSpaces, lightSpaces) => {
//     console.log('verify')
//     return 'verify'

// };
/*
      id: 7,
      light: false,
      lit: false,
      number: false,
      black: false,
      value: null
    },
*/
/*
  # Call after rendering board
  def verify(self):
    white_space_bool = True
    numbered_space_bool = True
    light_bool = True
    # Check that white spaces are all lit
    for n in self.white_spaces:
      if n.color != YELLOW:
        if n.color != LIGHT:
          white_space_bool = False
    # Check that numbered spaces have appropriate number of lights adjacent
    for n in self.numbered_spaces:
      if (self.verify_numbered_space(n) == False):
        numbered_space_bool = False
    # Check for collisions
    for head in self.lights:
      if (not self.verify_light_space(head, goLeft)):
        light_bool = False
        head.color = LIGHT_ERROR
      if (not self.verify_light_space(head, goRight)):
        light_bool = False
        head.color = LIGHT_ERROR
      if (not self.verify_light_space(head, goUp)):
        light_bool = False
        head.color = LIGHT_ERROR
      if (not self.verify_light_space(head, goDown)):
        light_bool = False
        head.color = LIGHT_ERROR

*/







export { Solution };