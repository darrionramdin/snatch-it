function snatch(){
  var url = document.getElementById("url").value;
  var api_key = "ZmU1MGI1ZTA1YWQyNDBkMmFlMTI4ZmJkYTlkNWQzNTY=";
  GrabzIt(api_key).ConvertURL(url,
{"format": "pdf", "download": 1}).Create();
}
