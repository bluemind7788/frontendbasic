require.config({
　　　　paths: {
　　　　　　"a": "a",
　　　　　　"b": "b"
　　　　}
});
require(['a'], function (a){
        console.log('main');
        //console.log(a);
});