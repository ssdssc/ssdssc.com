"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

interface Props {
  type: "inter" | "intra" | "open";
  title: string;
  description: string;
  rulesPdfUrl: string;
}

export default function EsperRegisterForm({
  type,
  title,
  description,
  rulesPdfUrl,
}: Props) {
  const [formData, setFormData] = useState<Record<string, any>>({
    registrationType: type,
    schoolName: type === "intra" ? "D. S. Senanayake College" : "",
    presidentName: "",
    contactNumber: "",
    applicantName: "",
    grade: "",
    applicantPhone: "",
    emailAddress: "",
    awardCategory: "",
    age: "",
    inventorDriveLink: "",
    photoDescription: "",
    confirmation: false,
  });

  const [schoolLogo, setSchoolLogo] = useState<File | null>(null);
  const [submissionFile, setSubmissionFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type: fieldType } = e.target;
    if (fieldType === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        body.append(key, String(val));
      });

      if (schoolLogo) {
        body.append("schoolLogo", schoolLogo);
      }
      if (submissionFile) {
        body.append("submissionFile", submissionFile);
      }

      const res = await fetch("/api/esper/register", {
        method: "POST",
        body,
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        setStatusMessage({
          type: "error",
          text: json.error || "Failed to submit registration. Please check your inputs.",
        });
      } else {
        setStatusMessage({
          type: "success",
          text: "Registration submitted successfully! Thank you for participating in ESPER.",
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: "error",
        text: err?.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white flex flex-col selection:bg-[#ffd57e]/30 selection:text-[#ffd57e]">
      {/* Subheader Hero */}
      <section className="relative w-full overflow-hidden bg-[#070707] border-b border-[#ffd57e]/15">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/esper/images/subheader-poster.png"
            className="w-full h-full object-cover object-center"
          >
            <source src="/esper/subheader-vid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/85 via-[#070707]/65 to-[#070707]" />
        </div>

        <Header />

        <div className="relative z-10 max-w-[1160px] mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center gap-3">
          <span className="font-['Nebula',sans-serif] text-[12px] md:text-[13px] tracking-[0.22em] uppercase text-[#ffd57e]">
            OFFICIAL REGISTRATION PORTAL
          </span>
          <h1 className="font-['Constantine',serif] text-4xl sm:text-5xl text-white tracking-[0.02em] font-normal m-0">
            {title}
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/80 max-w-xl">
            {description}
          </p>
        </div>
      </section>

      {/* Form Container */}
      <main className="w-full max-w-[1160px] mx-auto px-6 py-12 md:py-16 flex-1">
        {statusMessage && (
          <div
            className={`w-full max-w-2xl mx-auto mb-8 p-4 rounded-xl border text-center font-medium ${
              statusMessage.type === "success"
                ? "bg-green-950/40 border-green-500/40 text-green-300"
                : "bg-red-950/40 border-red-500/40 text-red-300"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Column 1: School / Applicant Details */}
            <div className="flex flex-col gap-5">
              <h3 className="font-['Constantine',serif] text-xl text-[#ffd57e] tracking-[0.04em] mb-1">
                {type === "inter" ? "School & Applicant Information" : "Participant Information"}
              </h3>

              {type === "inter" && (
                <>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/90">School Name *</label>
                    <input
                      type="text"
                      name="schoolName"
                      required
                      placeholder="e.g., D. S. Senanayake College"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/90">President Name *</label>
                    <input
                      type="text"
                      name="presidentName"
                      required
                      placeholder="Science Union / Society President"
                      value={formData.presidentName}
                      onChange={handleChange}
                      className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/90">President Contact Number *</label>
                    <div className="relative w-full">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 text-[15px] pointer-events-none">
                        +94
                      </span>
                      <input
                        type="tel"
                        name="contactNumber"
                        required
                        placeholder="XX XXX XXXX"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="w-full h-14 pl-16 pr-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/90">School Logo</label>
                    <label className="flex items-center gap-4 p-4 rounded-xl border border-dashed border-white/20 bg-white/[0.03] cursor-pointer hover:border-[#ffd57e]/50 transition-colors">
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        className="hidden"
                        onChange={(e) => setSchoolLogo(e.target.files?.[0] || null)}
                      />
                      <div className="text-sm">
                        <span className="text-[#ffd57e] font-medium block">
                          {schoolLogo ? schoolLogo.name : "Click to upload School Logo"}
                        </span>
                        <span className="text-white/50 text-xs">PNG, JPG, or WebP</span>
                      </div>
                    </label>
                  </div>
                </>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Participant Name *</label>
                <input
                  type="text"
                  name="applicantName"
                  required
                  placeholder="Full name"
                  value={formData.applicantName}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                />
              </div>

              {type !== "open" ? (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/90">Grade *</label>
                  <select
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-xl bg-[#0c0c0c] border border-white/10 text-white text-[15px] outline-none focus:border-white/30 transition-all cursor-pointer"
                  >
                    <option value="" disabled>Select Grade...</option>
                    {[...Array(13)].map((_, i) => (
                      <option key={i + 1} value={String(i + 1)}>
                        Grade {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/90">Age *</label>
                  <input
                    type="number"
                    name="age"
                    required
                    placeholder="e.g., 18"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Phone Number *</label>
                <div className="relative w-full">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 text-[15px] pointer-events-none">
                    +94
                  </span>
                  <input
                    type="tel"
                    name="applicantPhone"
                    required
                    placeholder="XX XXX XXXX"
                    value={formData.applicantPhone}
                    onChange={handleChange}
                    className="w-full h-14 pl-16 pr-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Email Address *</label>
                <input
                  type="email"
                  name="emailAddress"
                  required
                  placeholder="yourname@gmail.com"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>

            {/* Column 2: Category & Submission */}
            <div className="flex flex-col gap-5">
              <h3 className="font-['Constantine',serif] text-xl text-[#ffd57e] tracking-[0.04em] mb-1">
                Submission & Verification
              </h3>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Award Category *</label>
                <select
                  name="awardCategory"
                  required
                  value={formData.awardCategory}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-xl bg-[#0c0c0c] border border-white/10 text-white text-[15px] outline-none focus:border-white/30 transition-all cursor-pointer"
                >
                  <option value="" disabled>Select an award category...</option>
                  {type === "inter" && (
                    <>
                      <option value="article-writer">Best Article Writer of the Year Award</option>
                      <option value="research-team">Best Research Team of the Year</option>
                      <option value="graphic-designer">Graphic Designer of the Year</option>
                      <option value="edu-coder">EDU Coder of the Year</option>
                      <option value="popular-union">Most Popular Science Union of the Year</option>
                    </>
                  )}
                  {type === "intra" && (
                    <>
                      <option value="young-inventor">Best Young Inventor of the Year</option>
                      <option value="article-writer">Best Article Writer of the Year</option>
                    </>
                  )}
                  {type === "open" && (
                    <>
                      <option value="short-film">Best Short Film of the Year</option>
                      <option value="photographer">Wildlife Photographer of the Year</option>
                      <option value="build-team">Best Build Team of the Year</option>
                    </>
                  )}
                </select>
              </div>

              {/* Guidelines Download */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">Competition Guidelines</label>
                <a
                  href={rulesPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#ffd57e]/50 hover:bg-[#ffd57e]/5 transition-all text-white/90 no-underline"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffd57e]">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <div>
                    <span className="block text-sm font-medium">Download Competition Rulebook (PDF)</span>
                    <span className="block text-xs text-white/50">Read guidelines before submitting</span>
                  </div>
                </a>
              </div>

              {/* Drive link / Submission URL */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/90">
                  Project / Portfolio / Drive Link (Optional)
                </label>
                <input
                  type="url"
                  name="inventorDriveLink"
                  placeholder="https://drive.google.com/..."
                  value={formData.inventorDriveLink}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="flex items-start gap-3 mt-4">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  required
                  checked={formData.confirmation}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 rounded border border-white/30 bg-black/60 accent-[#ffd57e] cursor-pointer"
                />
                <label htmlFor="confirmation" className="text-sm text-white/80 leading-relaxed cursor-pointer">
                  I hereby confirm that all submitted details are authentic and represent official school or individual entry for the ESPER &apos;26 competition.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 mt-4 rounded-full font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase text-black font-semibold bg-gradient-to-b from-[#ffd885] via-[#d49326] to-[#a66e0a] shadow-[0_4px_20px_rgba(212,147,38,0.35)] hover:brightness-110 hover:scale-[1.01] transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                {isSubmitting ? "Submitting Registration..." : "Complete Official Registration"}
              </button>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
