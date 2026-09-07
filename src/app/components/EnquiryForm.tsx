'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

type EnquiryFormProps = {
  id?: string;
  submitLabel?: string;
  note?: string;
};

export default function EnquiryForm({
  id = 'enquiry-form',
  submitLabel = 'Send Enquiry',
  note = 'We usually reply within 1–2 working days.',
}: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="border border-[#e8e2d8] bg-white p-8">
        <Check size={22} className="mb-3 text-[#7E1323]" />
        <p className="mb-1 font-display text-2xl text-[#1D1F1F]">Thank you.</p>
        <p className="section-copy">Your message is in. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-4 border border-[#e8e2d8] bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your name"
          className="w-full border border-[#e8e2d8] bg-[#FDFAF6] px-4 py-3 font-ui text-sm outline-none focus:border-[#7E1323]"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          className="w-full border border-[#e8e2d8] bg-[#FDFAF6] px-4 py-3 font-ui text-sm outline-none focus:border-[#7E1323]"
        />
      </div>
      <input
        name="phone"
        placeholder="Phone (optional)"
        className="w-full border border-[#e8e2d8] bg-[#FDFAF6] px-4 py-3 font-ui text-sm outline-none focus:border-[#7E1323]"
      />
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell us what you need"
        className="w-full resize-y border border-[#e8e2d8] bg-[#FDFAF6] px-4 py-3 font-ui text-sm outline-none focus:border-[#7E1323]"
      />
      <button type="submit" disabled={status === 'loading'} className="btn-primary">
        {submitLabel}
        <ArrowRight size={14} />
      </button>
      <p className="font-ui text-[11px] font-light text-[#8B6B4E]">{note}</p>
    </form>
  );
}
