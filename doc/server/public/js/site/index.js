$(function(){
  $("form").submit(function() {
    var md5Pass = '{MD5}' + b64_md5($("#password").val()) + '=='
    console.log(md5Pass)
    $("#clientPass").val(md5Pass)
    $("#password").attr("disabled", "true")
    return true
  })
})