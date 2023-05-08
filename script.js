document.querySelector("#bridal").addEventListener("click", function () {
  swal(
    "Hey people this is a bridal makeup here i am mentioning some key points of doing bridal makeup"
  );
});

document.querySelector("#hair").addEventListener("click", function () {
  swal("Hey guyz here we can make ur hair beautiful");
});

document.querySelector("#party").addEventListener("click", function () {
  swal("Hey guyz here we can make ur party look beautiful");
});

document.querySelector("#facial").addEventListener("click", function () {
  swal("Hey guyz here we can make ur facial look beautiful");
});

document.querySelector("#frmSbt").addEventListener("click", function () {
  swal({
    title: "YAY!",
    text: "Successfully Submitted!",
    icon: "success",
    button: "Aww yiss!",
  });
});
