
function chirp(n){
  // FIX ME
  if(n === 1){
    return "chirp";
  }
  return "chirp " + chirp(--n);
};

$(document).ready(function(){
  $("#result").html(chirp(3));
});