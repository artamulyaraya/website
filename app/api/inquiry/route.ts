import { NextResponse } from "next/server";
import { Resend } from "resend";

const {
  RESEND_API_KEY,
  FROM_EMAIL,
  CONTACT_EMAIL,
} = process.env;


if (!RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}

if (!FROM_EMAIL) {
  throw new Error("Missing FROM_EMAIL");
}

if (!CONTACT_EMAIL) {
  throw new Error("Missing CONTACT_EMAIL");
}

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      company,
      country,
      email,
      phone,
      product,
      quantity,
      destination,
      requirements,
    } = body;

if (
  !fullName ||
  !company ||
  !country ||
  !email ||
  !product ||
  !requirements
) {
  return NextResponse.json(
    {
      success: false,
      message: "Missing required fields.",
    },
    {
      status: 400,
    }
  );
}

await resend.emails.send({
    from: FROM_EMAIL!,
    to: CONTACT_EMAIL!,
    replyTo: email,

    subject: `New Buyer Inquiry | ${company}`,

      html: `
        <h2>New Buyer Inquiry</h2>

        <table cellpadding="8" cellspacing="0">

          <tr>
            <td><strong>Full Name</strong></td>
            <td>${fullName}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${company}</td>
          </tr>

          <tr>
            <td><strong>Country</strong></td>
            <td>${country}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone || "-"}</td>
          </tr>

          <tr>
            <td><strong>Product</strong></td>
            <td>${product}</td>
          </tr>

          <tr>
            <td><strong>Quantity</strong></td>
            <td>${quantity || "-"}</td>
          </tr>

          <tr>
            <td><strong>Destination</strong></td>
            <td>${destination || "-"}</td>
          </tr>

          <tr>
            <td><strong>Requirements</strong></td>
            <td>${requirements}</td>
          </tr>

        </table>
      `,
    });

return NextResponse.json(
  {
    success: true,
    message: "Inquiry sent successfully.",
  },
  {
    status: 200,
  }
);

} catch (error) {
  
  console.error("Inquiry API Error:", error);

  return NextResponse.json(
    {
      success: false,
      message: "Internal Server Error",
    },
    {
      status: 500,
    }
  );
}
}