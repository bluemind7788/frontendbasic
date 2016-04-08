document.getElementById('xxaa').onclick = function() {debugger;
	alert('aa')}
document.getElementById('xxaa').onclick = function() {debugger;
	alert('bb')}
document.getElementById('xxaa').addEventListener('click', function(){debugger;
	alert('ccc')})
document.getElementById('xxaa').addEventListener('click', function(){alert('ddd')})

function myAddEvent(obj, ev, fn)
{
    if(obj.attachEvent)
   {
      obj.attachEvent('on'+ev, fn);
   }
   else
   {
      obj.addEventListener(ev, fn,false);
   }
}
