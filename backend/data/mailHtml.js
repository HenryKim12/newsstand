const currentYear = new Date().getFullYear();
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }
    .container {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .content {
      font-size: 16px;
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #888888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Newsstand!</h1>
    </div>
    <div class="content">
      <p>Dear User,</p>
      <p>Thank you for signing up for our service. We are excited to have you on board.</p>
      <p>If you have any questions, feel free to reply to this email.</p>
      <p>Best regards,</p>
      <p>Newsstand</p>
    </div>
    <div class="footer">
      <p>&copy; ${currentYear} Your Company. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

module.exports = htmlContent