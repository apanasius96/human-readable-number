module.exports = function toReadable (number) {
    const strNumber = number.toString();
    const length = number.toString().length;
    let result;
      if (length === 1){
       switch(number){
        case 1:
        result = 'one';
        break;
        case 2:
        result = 'two';
        break;
        case 3:
        result = 'three';
        break;
        case 4:
        result = 'fore';
        break;
        case 5:
        result = 'five';
        break;
        case 6:
        result = 'six';
        break;
        case 7:
        result = 'seven';
        break;
        case 8:
        result = 'eight';
        break;
        case 9:
        result = 'nine';
        break;
        case 0:
        result = 'zero';
        break;
        }
      }
    if (length === 2){
      if (strNumber[0] === '1'){
        switch(number){
          case 11:
          result = 'eleven';
          break;
          case 12:
          result = 'twelve';
          break;
          case 13:
          result = 'thirteen';
          break;
          case 14:
          result = 'fourteen';
          break;
          case 15:
          result = 'fifteen';
          break;
          case 16:
          result = 'sixteen';
          break;
          case 17:
          result = 'seventeen';
          break;
          case 18:
          result = 'eighteen';
          break;
          case 19:
          result = 'nineteen';
          break;

        }
      }
      else if (strNumber[1] === '0'){
        switch(number){
          case 10:
          result = 'ten';
          break;
          case 20:
          result = 'twenty';
          break;
          case 30:
          result = 'thirty';
          break;
          case 40:
          result = 'forty';
          break;
          case 50:
          result = 'fifty';
          break;
          case 60:
          result = 'sixty';
          break;
          case 70:
          result = 'seventy';
          break;
          case 80:
          result = 'eighty';
          break;
          case 90:
          result = 'ninety';
          break;
        }
      }
    }
  return result;
};

