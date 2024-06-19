const nodemailer = require('nodemailer');
const htmlContent = require("../data/mailHtml")

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,   
  port: process.env.SMTP_PORT,               
  secure: process.env.SMTP_PORT == 465,           
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS   
  }
});

const sendEmail = async (to) => {
  try {
    await transporter.sendMail({
      from: `"Newsstand" <${process.env.SMTP_USER}>`, 
      to: to,                                          
      subject: "Welcome to Newsstand",                                  
      html: htmlContent                                
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };