function isNumber(evt) {
   var iKeyCode = (evt.which) ? evt.which : evt.keyCode
   if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
   {
      return false;
   }
   {
      return true;
   }
}   

function isAlphabet(evt) {
   var iKeyCode = (evt.which) ? evt.which : evt.keyCode
   if ((iKeyCode > 64 && iKeyCode < 91) || (iKeyCode > 96 && iKeyCode < 123))
   {
      return true;
   }
   {
      return false;
   }
}   