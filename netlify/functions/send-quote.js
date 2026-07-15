const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    const formData = JSON.parse(event.body);

    const {
      name,
      phone,
      email,
      address,
      service,
      message,
      photos
    } = formData;


    await resend.emails.send({
      from: "TUFCO Website <onboarding@resend.dev>",
      to: "tufcolandscaping@gmail.com",
      subject: `New Quote Request From ${name}`,

      html: `
      <h2>New TUFCO Quote Request</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Phone:</strong> ${phone}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Address:</strong> ${address}</p>

      <p><strong>Service:</strong> ${service}</p>

      <h3>Project Details:</h3>
      <p>${message}</p>

      <h3>Photos:</h3>
      <p>${photos || "No photos uploaded"}</p>
      `
    });


    return {
      statusCode: 200,
      body: JSON.stringify({
        success:true
      })
    };


  } catch(error){

    return {
      statusCode:500,
      body:JSON.stringify({
        error:error.message
      })
    };

  }
};
