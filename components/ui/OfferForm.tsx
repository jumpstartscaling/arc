"use client";

import React, { useState } from 'react';
import { captureLead } from '@/app/actions/leads';

interface OfferFormProps {
  palette?: 'gold' | 'emerald' | 'blue';
  ctaText?: string;
  successMessage?: string;
}

export default function OfferForm({ 
  palette = 'gold', 
  ctaText = 'SUBMIT APPLICATION & BOOK CALL',
  successMessage = "THANKS! WE'LL BE IN TOUCH."
}: OfferFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const colors = {
    gold: {
      accent: '#D4AF37',
      text: 'text-black',
      bg: 'bg-[#D4AF37]',
      border: 'border-[#D4AF37]',
      focus: 'focus:border-[#D4AF37]'
    },
    emerald: {
      accent: '#00FF94',
      text: 'text-black',
      bg: 'bg-[#00FF94]',
      border: 'border-[#00FF94]',
      focus: 'focus:border-[#00FF94]'
    },
    blue: {
      accent: '#3B82F6',
      text: 'text-white',
      bg: 'bg-blue-600',
      border: 'border-blue-600',
      focus: 'focus:border-blue-600'
    }
  };

  const theme = colors[palette];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    
    try {
      await captureLead(formData);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
         <div>
            <label className={`block font-mono text-xs ${palette === 'blue' ? 'text-blue-400' : `text-[${theme.accent}]`} tracking-wider mb-2 uppercase`}>NAME</label>
            <input required name="name" className={`w-full bg-black border border-[#333] text-white p-4 rounded-lg focus:outline-none ${theme.focus} transition-colors`} type="text" placeholder="Full Name" />
         </div>
         <div>
            <label className={`block font-mono text-xs ${palette === 'blue' ? 'text-blue-400' : `text-[${theme.accent}]`} tracking-wider mb-2 uppercase`}>WEBSITE</label>
            <input required name="website" className={`w-full bg-black border border-[#333] text-white p-4 rounded-lg focus:outline-none ${theme.focus} transition-colors`} type="url" placeholder="https://" />
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <div>
            <label className={`block font-mono text-xs ${palette === 'blue' ? 'text-blue-400' : `text-[${theme.accent}]`} tracking-wider mb-2 uppercase`}>ANNUAL REVENUE</label>
            <select name="revenue" className={`w-full bg-black border border-[#333] text-white p-4 rounded-lg focus:outline-none ${theme.focus} appearance-none transition-colors`}>
              <option value="">Select Range</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m+">$5M+</option>
            </select>
         </div>
         <div>
            <label className={`block font-mono text-xs ${palette === 'blue' ? 'text-blue-400' : `text-[${theme.accent}]`} tracking-wider mb-2 uppercase`}>BUDGET</label>
            <select name="budget" className={`w-full bg-black border border-[#333] text-white p-4 rounded-lg focus:outline-none ${theme.focus} appearance-none transition-colors`}>
              <option value="">Select Budget</option>
              <option value="5k+">$5k+</option>
              <option value="10k+">$10k+</option>
              <option value="20k+">$20k+</option>
            </select>
         </div>
      </div>

      <div>
        <label className={`block font-mono text-xs ${palette === 'blue' ? 'text-blue-400' : `text-[${theme.accent}]`} tracking-wider mb-2 uppercase`}>WHAT IS THE &quot;FIRE&quot; WE NEED TO PUT OUT?</label>
        <textarea name="problem" className={`w-full bg-black border border-[#333] text-white p-4 rounded-lg focus:outline-none ${theme.focus} transition-colors`} rows={4} placeholder="Zapier costs, Broken App, Data issues?"></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'loading' || status === 'success'}
        style={{ backgroundColor: status === 'success' ? '#333' : theme.accent, color: status === 'success' ? '#666' : palette === 'blue' ? 'white' : 'black' }}
        className={`w-full py-5 font-black uppercase tracking-widest rounded-xl border ${theme.border} hover:bg-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {status === 'loading' ? 'PROCESSING...' : status === 'success' ? successMessage : ctaText}
      </button>
      
      {status === 'error' && (
        <p className="text-red-500 text-center text-sm font-mono mt-4">Something went wrong. Please try again or email us.</p>
      )}
    </form>
  );
}
