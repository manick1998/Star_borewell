import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { company } from "../data/site";

const serviceOptions = [
  "போர்வெல் துளையிடல்",
  "விவசாய போர்வெல்",
  "குடியிருப்பு போர்வெல்",
  "தொழில்துறை போர்வெல்",
  "கம்ப்ரஸர் சுத்தம்",
  "மோட்டார் பொருத்துதல்",
  "சப்மெர்சிபிள் பம்ப் பொருத்துதல்",
  "பைப்லைன் பொருத்துதல்",
  "போர்வெல் பழுது",
  "நீர் வரத்து சோதனை",
  "வருடாந்திர பராமரிப்பு",
  "பிற",
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
      `வணக்கம் ஸ்டார் போர்வெல், விசாரிக்க விரும்புகிறேன்:\n\nபெயர்: ${form.name}\nதொலைபேசி: ${form.phone}\nஇடம்: ${form.location}\nசேவை: ${form.service}\nசெய்தி: ${form.message}`,
    );
    window.open(`https://wa.me/${company.whatsappRaw}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-navy-900/10 bg-navy-50/60 p-12 text-center">
        <CheckCircle2 className="h-14 w-14 text-green-600" />
        <h3 className="text-xl font-bold text-navy-900">நன்றி, {form.name.split(" ")[0] || "நண்பரே"}!</h3>
        <p className="max-w-sm text-sm text-ink-500">
          உங்கள் விசாரனை WhatsApp மூலம் அனுப்பப்பட்டது. எங்கள் குழு விரைவில் உங்களைத் தொடர்புகொள்ளும். நேரடியாகவும் அழைக்கலாம்:{" "}
          <a href={`tel:${company.phoneRaw}`} className="font-bold text-accent-600">
            {company.phoneDisplay}
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-2 rounded-full border border-navy-900/15 px-6 py-2.5 text-sm font-semibold text-navy-800 hover:border-accent-500 hover:text-accent-600"
        >
          மறுபடியும் விசாரிக்க
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-[0_2px_20px_rgba(10,23,48,0.06)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">முழு பெயர் *</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="உங்கள் முழு பெயரை உள்ளிடவும்"
            className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">தொலைபேசி எண் *</label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="10 இலக்க மொபைல் எண்"
            className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">இடம் / கிராமம் *</label>
          <input
            required
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="உ.ம். சிவகாசி, விருதுநகர்..."
            className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">தேவையான சேவை *</label>
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
        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-500">உங்கள் தேவை</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="உங்கள் போர்வெல் தேவை, மனை அளவு, அல்லது பிரச்சினை பற்றி சுருக்கமாக சொல்லுங்கள்..."
          className="w-full resize-none rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-sm font-bold text-white shadow-accent transition-all hover:-translate-y-0.5 hover:bg-accent-600"
      >
        WhatsApp மூலம் விசாரனை அனுப்பு
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="text-center text-xs text-ink-500">
        சமர்ப்பிக்கும்போது, எங்கள் குழுவுடன் உடனடியாக விசாரனையை உறுதிப்படுத்த WhatsApp-க்கு திருப்பி அனுப்பப்படுவீர்கள்.
      </p>
    </form>
  );
}
