import { NextResponse } from "next/server";
import { Resend } from "resend";
import { clientConfig } from "@/config/client";

export const runtime = "nodejs";

const resendApiKey = process.env.RESEND_API_KEY;
const leadNotificationEmail = process.env.LEAD_NOTIFICATION_EMAIL ?? clientConfig.contact.email;
const leadFromEmail = process.env.LEAD_FROM_EMAIL;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const hasEmailNotificationsConfigured = Boolean(
  resend && leadFromEmail && leadNotificationEmail,
);

function getMissingEmailConfig() {
  const missing: string[] = [];

  if (!resendApiKey) {
    missing.push("RESEND_API_KEY");
  }

  if (!leadFromEmail) {
    missing.push("LEAD_FROM_EMAIL");
  }

  if (!leadNotificationEmail) {
    missing.push("LEAD_NOTIFICATION_EMAIL or clientConfig.contact.email");
  }

  return missing;
}

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const lead = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      company: sanitize(body.company),
      service: sanitize(body.service),
      budget: sanitize(body.budget),
      message: sanitize(body.message),
      utmSource: sanitize(body.utmSource),
      utmCampaign: sanitize(body.utmCampaign),
      gclid: sanitize(body.gclid),
      submittedAt: new Date().toISOString(),
    };

    if (!lead.name || !lead.phone || !lead.service || !lead.message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const logPayload = [
      "New lead received",
      `Name: ${lead.name}`,
      `Email: ${lead.email || "n/a"}`,
      `Phone: ${lead.phone}`,
      `Company: ${lead.company || "n/a"}`,
      `Service: ${lead.service}`,
      `Budget: ${lead.budget || "n/a"}`,
      `Message: ${lead.message}`,
      `UTM Source: ${lead.utmSource || "n/a"}`,
      `UTM Campaign: ${lead.utmCampaign || "n/a"}`,
      `GCLID: ${lead.gclid || "n/a"}`,
      `Submitted At: ${lead.submittedAt}`,
    ].join("\n");

    console.info(logPayload);

    if (!hasEmailNotificationsConfigured) {
      console.warn(
        `Lead email notification skipped. Missing configuration: ${getMissingEmailConfig().join(", ")}`,
      );
    }

    if (resend && leadFromEmail && leadNotificationEmail) {
      const safeMessage = escapeHtml(lead.message).replaceAll("\n", "<br />");

      try {
        await resend.emails.send({
          from: leadFromEmail,
          to: [leadNotificationEmail],
          replyTo: lead.email || undefined,
          subject: `New lead from ${clientConfig.businessName}: ${lead.service}`,
          text: logPayload,
          html: `
            <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.6;">
              <h2 style="margin-bottom: 16px;">New lead received</h2>
              <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(lead.email || "n/a")}</p>
              <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
              <p><strong>Company:</strong> ${escapeHtml(lead.company || "n/a")}</p>
              <p><strong>Service:</strong> ${escapeHtml(lead.service)}</p>
              <p><strong>Budget:</strong> ${escapeHtml(lead.budget || "n/a")}</p>
              <p><strong>Message:</strong><br />${safeMessage}</p>
              <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
              <p><strong>UTM Source:</strong> ${escapeHtml(lead.utmSource || "n/a")}</p>
              <p><strong>UTM Campaign:</strong> ${escapeHtml(lead.utmCampaign || "n/a")}</p>
              <p><strong>GCLID:</strong> ${escapeHtml(lead.gclid || "n/a")}</p>
              <p><strong>Submitted At:</strong> ${escapeHtml(lead.submittedAt)}</p>
            </div>
          `,
        });
      } catch (error) {
        console.error("Lead email notification failed", error);
      }
    }

    return NextResponse.json({ ok: true, notificationConfigured: hasEmailNotificationsConfigured });
  } catch {
    return NextResponse.json(
      { error: "We couldn’t submit your request. Please try again." },
      { status: 500 },
    );
  }
}
