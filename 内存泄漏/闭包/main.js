$("#start_button").click(function(){
    if(leak !== null || leak !== undefined){
        return;
    }
  leak = new Leaker();
  leak.init();
});
 
$("#destroy_button").click(function(){
    leak.destroy();
    leak = null;
});
 
var leak = new Leaker();
leak.init();