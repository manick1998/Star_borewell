import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { company } from "../data/site";

const serviceOptions = [
  "Borewell Drilling",
  "Agricultural Borewell",
  "Residential Borewell",
  "Industrial Borewell",
  "Compressor Cleaning",
  "Motor Installation",
  "Submersible Pump Installation",
  "Pipeline Installation",
  "Borewell Repair",
  "Water Yield Testing",
  "Maintenance",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", location: "", service: serviceOptions[0], message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Star Borewell, I would like to enquire:\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nService: ${form.service}\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/${company.whatsappRaw}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-navy-900/10 bg-navy-50/60 p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-600" />
        <h3 className="text-xl font-bold text-navy-900">Thank you, {form.name.split(" ")[0] || "there"}!</h3>
        <p className="max-w-sm text-sm text-ink-500">
          Your enquiry has been sent via WhatsApp. Our team will get back to you shortly. You can also call us directly at{" "}
          <a href={`tel:${company.phoneRaw}`} className="font-bold text-accent-600">
            {company.phoneDisplay}
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-full border border-navy-900/15 px-6 py-2.5 text-sm font-semibold text-navy-800 hover:border-accent-500 hover:text-accent-600"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-[0_2px_20px_rgba(10,23,48,0.06)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">Full Name *</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">Phone Number *</label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">Location / Village *</label>
          <input
            required
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Sivakasi, Virudhunagar..."
            className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">Service Required *</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          >
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">Your Requirement</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us briefly about your borewell requirement, plot size, or issue..."
          className="w-full resize-none rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-sm font-bold text-white shadow-accent transition-all hover:-translate-y-0.5 hover:bg-accent-600"
      >
        Send Enquiry via WhatsApp
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-center text-xs text-ink-500">
        By submitting, you'll be redirected to WhatsApp to confirm your enquiry with our team instantly.
      </p>
    </form>
  );
}
