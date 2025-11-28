"use client";

import { useState } from "react";
import { Loader2, SendHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<ContactState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus("submitting");
    setMessage("");

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      requirement: formData.get("requirement"),
    };

    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send");
      event.currentTarget.reset();
      setStatus("success");
      setMessage("Message sent. Our team will respond within 24 hours.");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "We couldn't send your message. Please retry or email us directly.",
      );
    } finally {
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-white/10 bg-[#040a1c]/80 p-6 shadow-[0_25px_80px_rgba(5,12,33,0.6)]"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@organization.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+91 90000 00000"
            required
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="requirement">Issue / Project Requirement</Label>
          <Textarea
            id="requirement"
            name="requirement"
            placeholder="Tell us about your campus, hardware needs, timelines, budgets..."
            required
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <SendHorizontal className="ml-2 size-4" />
          </>
        )}
      </Button>
      {status !== "idle" && (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

