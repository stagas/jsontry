exports.parse = function(s) {
  var o
  try {
    o = JSON.parse(s)
  } catch(e) {
    o = s
  }
  return o
}