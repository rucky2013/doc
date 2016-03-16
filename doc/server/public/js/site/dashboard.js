$(function(){
  $("form").submit(function() {
    var md5Pass = '{MD5}' + b64_md5($("#password2").val()) + '=='
    console.log(md5Pass)
    $("#password").val(md5Pass)
    $("#password2").attr("disabled", "true")
    return true
  })
})