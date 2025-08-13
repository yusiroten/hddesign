"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  try {
    // In a real app, you would send an email, save to a database, etc.
    console.log("Form submission received:", values);

    // Simulate a successful submission
    return { success: true, message: "Pesan berhasil dikirim." };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, message: "Gagal mengirim pesan." };
  }
}
