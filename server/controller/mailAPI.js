var nodemailer = require("nodemailer");

function sendMail(userDetails, page) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shakapnorshweta@gmail.com",
      pass: "9867595141",
    },
  });
  let subject = "Welcome Message From Friend Finder Application";
  let html =
    "<h1>Hi We will connect you soon from Friend Finder Application</h1>";

  if (page === "signUp") {
    subject = "Welcome Message From Friend Finder Application";
    html =
      "<h1>Welcome to Friend Finder Application</h1><p>You have successfully registered to our application , your authentication details are attached below</p><h2>Username : " +
      userDetails.username +
      "</h2><h2>Password : " +
      userDetails.password +
      "</h2>";
  }

  var mailOptions = {
    from: "shakapnorshweta@gmail.com",
    to: userDetails.username || userDetails.email,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendMail;
