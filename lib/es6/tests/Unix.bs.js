// Generated by ReScript, PLEASE EDIT WITH CARE


function gettimeofday(param) {
  return Date.now();
}

function sleep(ms) {
  return new Promise((function (resolve, _reject) {
                setTimeout((function (param) {
                        return resolve(undefined);
                      }), ms);
                
              }));
}

function localtime(time) {
  var seconds = new Date(time).getSeconds();
  var seconds$1 = seconds | 0;
  var minutes = new Date(time).getMinutes();
  var minutes$1 = minutes | 0;
  var hours = new Date(time).getHours();
  var hours$1 = hours | 0;
  return [
          seconds$1,
          minutes$1,
          hours$1
        ];
}

export {
  gettimeofday ,
  sleep ,
  localtime ,
  
}
/* No side effect */
