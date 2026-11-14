"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export type RegistrationType = "inter" | "intra" | "open" | "popular";

interface Props {
  type: RegistrationType;
  title: string;
  description: string;
  rulesPdfUrl?: string;
}

interface FormFields {
  // Shared
  registrationType: RegistrationType;
  schoolName: string;
  presidentName: string;
  contactNumber: string;
  emailAddress: string;
  awardCategory: string;
  confirmation: boolean;

  // Inter / Intra / Open common
  applicantName: string;
  applicantPhone: string;
  grade: string;
  age: string;

  // Inter conditional links
  articleDocLink: string;
  researchDriveLink: string;
  designerDriveLink: string;
  coderGithubLink: string;
  coderHostedLink: string;
  coderYoutubeLink: string;
  inventorDriveLink: string;

  // Open conditional links & text
  buildTeamDriveLink: string;
  shortFilmDriveLink: string;
  photoDescription: string;
}

const initialFormFields: FormFields = {
  registrationType: "inter",
  schoolName: "",
  presidentName: "",
  contactNumber: "",
  emailAddress: "",
  awardCategory: "",
  confirmation: false,

  applicantName: "",
  applicantPhone: "",
  grade: "",
  age: "",

  articleDocLink: "",
  researchDriveLink: "",
  designerDriveLink: "",
  coderGithubLink: "",
  coderHostedLink: "",
  coderYoutubeLink: "",
  inventorDriveLink: "",

  buildTeamDriveLink: "",
  shortFilmDriveLink: "",
  photoDescription: "",
};

export default function EsperRegisterForm({
  type,
  title,
  description,
  rulesPdfUrl,
}: Props) {
  const [formData, setFormData] = useState<FormFields>({
    ...initialFormFields,
    registrationType: type,
    schoolName: type === "intra" ? "D. S. Senanayake College" : "",
  });

  // File uploads
  const [schoolLogo, setSchoolLogo] = useState<File | null>(null);
  const [schoolLogoPreview, setSchoolLogoPreview] = useState<string | null>(null);
  const [buildTeamPdf, setBuildTeamPdf] = useState<File | null>(null);
  const [photographerPhoto, setPhotographerPhoto] = useState<File | null>(null);
  const [photographerPhotoPreview, setPhotographerPhotoPreview] = useState<string | null>(null);

  const schoolLogoInputRef = useRef<HTMLInputElement>(null);
  const buildTeamPdfInputRef = useRef<HTMLInputElement>(null);
  const photographerPhotoInputRef = useRef<HTMLInputElement>(null);

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

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setFormData((prev) => ({
      ...prev,
      awardCategory: newCategory,
      // Reset category-specific fields when category changes
      articleDocLink: "",
      researchDriveLink: "",
      designerDriveLink: "",
      coderGithubLink: "",
      coderHostedLink: "",
      coderYoutubeLink: "",
      inventorDriveLink: "",
      buildTeamDriveLink: "",
      shortFilmDriveLink: "",
      photoDescription: "",
    }));
    // Reset file uploads for open category if switching away
    if (newCategory !== "build-team") {
      setBuildTeamPdf(null);
      if (buildTeamPdfInputRef.current) buildTeamPdfInputRef.current.value = "";
    }
    if (newCategory !== "photographer") {
      setPhotographerPhoto(null);
      setPhotographerPhotoPreview(null);
      if (photographerPhotoInputRef.current) photographerPhotoInputRef.current.value = "";
    }
  };

  const handleSchoolLogoChange = (file: File | null) => {
    setSchoolLogo(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setSchoolLogoPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setSchoolLogoPreview(null);
    }
  };

  const clearSchoolLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSchoolLogo(null);
    setSchoolLogoPreview(null);
    if (schoolLogoInputRef.current) schoolLogoInputRef.current.value = "";
  };

  const handlePhotoUploadChange = (file: File | null) => {
    setPhotographerPhoto(file);
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setPhotographerPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPhotographerPhotoPreview(null);
    }
  };

  const clearPhotoUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotographerPhoto(null);
    setPhotographerPhotoPreview(null);
    if (photographerPhotoInputRef.current) photographerPhotoInputRef.current.value = "";
  };

  const handlePdfUploadChange = (file: File | null) => {
    setBuildTeamPdf(file);
  };

  const clearPdfUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBuildTeamPdf(null);
    if (buildTeamPdfInputRef.current) buildTeamPdfInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    // Validate category selection
    if (!formData.awardCategory) {
      setStatusMessage({
        type: "error",
        text: "Please select an award category to proceed.",
      });
      setIsSubmitting(false);
      return;
    }

    // Validate open category file uploads if applicable
    if (type === "open") {
      if (formData.awardCategory === "build-team" && !buildTeamPdf) {
        setStatusMessage({
          type: "error",
          text: "Please upload your project PDF document.",
        });
        setIsSubmitting(false);
        return;
      }
      if (formData.awardCategory === "photographer" && !photographerPhoto) {
        setStatusMessage({
          type: "error",
          text: "Please upload your contest photograph.",
        });
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        body.append(key, String(val));
      });

      if (schoolLogo) {
        body.append("schoolLogo", schoolLogo);
      }
      if (buildTeamPdf) {
        body.append("buildTeamPdf", buildTeamPdf);
      }
      if (photographerPhoto) {
        body.append("photographerPhoto", photographerPhoto);
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
        // Reset form
        setFormData({
          ...initialFormFields,
          registrationType: type,
          schoolName: type === "intra" ? "D. S. Senanayake College" : "",
        });
        setSchoolLogo(null);
        setSchoolLogoPreview(null);
        setBuildTeamPdf(null);
        setPhotographerPhoto(null);
        setPhotographerPhotoPreview(null);
        if (schoolLogoInputRef.current) schoolLogoInputRef.current.value = "";
        if (buildTeamPdfInputRef.current) buildTeamPdfInputRef.current.value = "";
        if (photographerPhotoInputRef.current) photographerPhotoInputRef.current.value = "";
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setStatusMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isPopular = type === "popular";

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

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5, delay: 0.1 }}
          className="relative z-10 max-w-[1160px] mx-auto px-6 pt-28 md:pt-36 pb-16 md:pb-20 flex flex-col items-center text-center gap-3"
        >
          <span className="font-['Nebula',sans-serif] text-[12px] md:text-[13px] tracking-[0.22em] uppercase text-[#ffd57e]">
            OFFICIAL REGISTRATION PORTAL
          </span>
          <h1 className="font-['Constantine',serif] text-4xl sm:text-5xl text-white tracking-[0.02em] font-normal m-0">
            {title}
          </h1>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-base md:text-lg text-white/80 max-w-xl">
            {description}
          </p>
        </motion.div>
      </section>

      {/* Main Registration Form */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 60, mass: 0.5, delay: 0.2 }}
        className="w-full max-w-[1160px] mx-auto px-6 py-12 md:py-16 flex-1"
      >
        {statusMessage && (
          <div
            className={`w-full max-w-2xl mx-auto mb-8 p-4 rounded-xl border text-center font-medium ${
              statusMessage.type === "success"
                ? "bg-[#d4edda] border-[#c3e6cb] text-[#155724]"
                : "bg-[#f8d7da] border-[#f5c6cb] text-[#721c24]"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-[1040px] mx-auto">
          {isPopular ? (
            /* POPULAR AWARDS: Single Centered Column Form */
            <div className="max-w-[560px] mx-auto flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="award-category" className="text-sm font-medium text-white/90">
                  Award Category *
                </label>
                <div className="relative w-full">
                  <select
                    id="award-category"
                    name="awardCategory"
                    required
                    value={formData.awardCategory}
                    onChange={handleCategoryChange}
                    className="w-full h-14 px-5 pr-12 rounded-xl bg-white/[0.05] border border-white/10 text-white text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba(255,255,255,0.5)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 16px center",
                      backgroundSize: "18px",
                    }}
                  >
                    <option value="" disabled>Select an award category...</option>
                    <option value="quiz-team">Most Popular School Science Quiz Team</option>
                    <option value="science-union">Most Popular School Science Union</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="school-name" className="text-sm font-medium text-white/90">
                  School Name *
                </label>
                <input
                  id="school-name"
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
                <label htmlFor="president-name" className="text-sm font-medium text-white/90">
                  President Name *
                </label>
                <input
                  id="president-name"
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
                <label htmlFor="contact-number" className="text-sm font-medium text-white/90">
                  Contact Number *
                </label>
                <div className="relative w-full">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 text-[15px] pointer-events-none">
                    +94
                  </span>
                  <input
                    id="contact-number"
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
                <label htmlFor="email-address" className="text-sm font-medium text-white/90">
                  Email Address *
                </label>
                <input
                  id="email-address"
                  type="email"
                  name="emailAddress"
                  required
                  placeholder="official@schoolunion.com"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div className="relative p-5 rounded-lg bg-white/[0.03] border-l-4 border-[#ffd57e] mt-2">
                <p className="text-xs md:text-sm text-white/70 leading-relaxed m-0">
                  This registration must be submitted by an officially appointed Science Union / Science Society representative (e.g., President, Secretary or Teacher-in-charge nominee).
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer mt-1">
                <input
                  type="checkbox"
                  name="confirmation"
                  required
                  checked={formData.confirmation}
                  onChange={handleChange}
                  className="w-5 h-5 mt-0.5 rounded border border-white/30 bg-black/60 accent-[#d49326] cursor-pointer shrink-0"
                />
                <span className="text-xs md:text-sm text-white/80 leading-relaxed">
                  I confirm I am an official representative of the school’s Science Union and have the authority to register.
                </span>
              </label>

              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-[320px] h-14 rounded-full font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase text-black font-semibold bg-gradient-to-b from-[#ffd885] via-[#d49326] to-[#a66e0a] shadow-[0_4px_20px_rgba(212,147,38,0.35)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? "Submitting..." : "Submit Now"}
                </button>
              </div>
            </div>
          ) : (
            /* 2-COLUMN FORMS: INTER, INTRA, OPEN */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Column 1: School / Applicant Details */}
              <div className="flex flex-col gap-5">
                <h3 className="font-['Constantine',serif] text-xl text-[#ffd57e] tracking-[0.04em] mb-1">
                  {type === "inter" ? "School Details" : "Applicant Details"}
                </h3>

                {type === "inter" && (
                  <>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="school-name" className="text-sm font-medium text-white/90">
                        School Name *
                      </label>
                      <input
                        id="school-name"
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
                      <label htmlFor="president-name" className="text-sm font-medium text-white/90">
                        President Name *
                      </label>
                      <input
                        id="president-name"
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
                      <label htmlFor="contact-number" className="text-sm font-medium text-white/90">
                        President Contact Number *
                      </label>
                      <div className="relative w-full">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 text-[15px] pointer-events-none">
                          +94
                        </span>
                        <input
                          id="contact-number"
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

                    {/* School Logo Upload */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="school-logo" className="text-sm font-medium text-white/90">
                        School Logo
                      </label>
                      <label
                        htmlFor="school-logo"
                        className={`flex items-center gap-4 p-3 md:p-4 rounded-xl border border-dashed cursor-pointer transition-all ${
                          schoolLogo
                            ? "bg-white/[0.07] border-white/30"
                            : "bg-white/[0.04] border-white/20 hover:border-white/40 hover:bg-white/[0.06]"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0 overflow-hidden">
                          {schoolLogoPreview ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={schoolLogoPreview} alt="Preview" className="w-full h-full object-contain" />
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-sm font-medium text-white truncate">
                            {schoolLogo ? schoolLogo.name : "Click or drag & drop to upload school logo"}
                          </span>
                          <span className="block text-xs text-white/50">PNG, JPG, or WebP (Recommended transparent PNG)</span>
                        </div>
                        {schoolLogo && (
                          <button
                            type="button"
                            onClick={clearSchoolLogo}
                            title="Remove logo"
                            className="p-1.5 text-white/60 hover:text-red-400 hover:scale-110 transition-all shrink-0"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        )}
                        <input
                          ref={schoolLogoInputRef}
                          id="school-logo"
                          name="schoolLogo"
                          type="file"
                          accept="image/png,image/jpeg,image/webp"
                          className="hidden"
                          onChange={(e) => handleSchoolLogoChange(e.target.files?.[0] || null)}
                        />
                      </label>
                    </div>
                  </>
                )}

                {/* Participant Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="applicant-name" className="text-sm font-medium text-white/90">
                    Name *
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    name="applicantName"
                    required
                    placeholder="Full name"
                    value={formData.applicantName}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                  />
                </div>

                {/* Grade or Age */}
                {type === "open" ? (
                  <div className="flex flex-col gap-2">
                    <label htmlFor="applicant-age" className="text-sm font-medium text-white/90">
                      Age *
                    </label>
                    <input
                      id="applicant-age"
                      type="number"
                      name="age"
                      required
                      min={1}
                      max={20}
                      placeholder="Must be 20 or under"
                      value={formData.age}
                      onChange={(e) => {
                        const val = parseInt(e.target.value, 10);
                        if (val > 20) {
                          setFormData((prev) => ({ ...prev, age: "20" }));
                        } else if (val < 1 && e.target.value !== "") {
                          setFormData((prev) => ({ ...prev, age: "" }));
                        } else {
                          handleChange(e);
                        }
                      }}
                      className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <label htmlFor="grade" className="text-sm font-medium text-white/90">
                      Grade *
                    </label>
                    <div className="relative w-full">
                      <select
                        id="grade"
                        name="grade"
                        required
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full h-14 px-5 pr-12 rounded-xl bg-white/[0.05] border border-white/10 text-white text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all cursor-pointer appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba(255,255,255,0.5)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                          backgroundSize: "18px",
                        }}
                      >
                        <option value="" disabled>Select Grade...</option>
                        {[...Array(13)].map((_, i) => (
                          <option key={i + 1} value={String(i + 1)}>
                            Grade {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={type === "inter" ? "applicant-phone" : "contact-number"}
                    className="text-sm font-medium text-white/90"
                  >
                    Phone Number *
                  </label>
                  <div className="relative w-full">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 text-[15px] pointer-events-none">
                      +94
                    </span>
                    <input
                      id={type === "inter" ? "applicant-phone" : "contact-number"}
                      type="tel"
                      name={type === "inter" ? "applicantPhone" : "contactNumber"}
                      required
                      placeholder="XX XXX XXXX"
                      value={type === "inter" ? formData.applicantPhone : formData.contactNumber}
                      onChange={handleChange}
                      className="w-full h-14 pl-16 pr-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-address" className="text-sm font-medium text-white/90">
                    Email Address *
                  </label>
                  <input
                    id="email-address"
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

              {/* Column 2: Submission & Dynamic Category Details */}
              <div className="flex flex-col gap-5">
                <h3 className="font-['Constantine',serif] text-xl text-[#ffd57e] tracking-[0.04em] mb-1">
                  Submission Details
                </h3>

                {/* Award Category Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="award-category" className="text-sm font-medium text-white/90">
                    Award Category *
                  </label>
                  <div className="relative w-full">
                    <select
                      id="award-category"
                      name="awardCategory"
                      required
                      value={formData.awardCategory}
                      onChange={handleCategoryChange}
                      className="w-full h-14 px-5 pr-12 rounded-xl bg-white/[0.05] border border-white/10 text-white text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all cursor-pointer appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba(255,255,255,0.5)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        backgroundSize: "18px",
                      }}
                    >
                      <option value="" disabled>Select an award category...</option>
                      {type === "inter" && (
                        <>
                          <option value="article-writer">Best Article Writer of the Year Award</option>
                          <option value="research-team">Best Research Team of the Year</option>
                          <option value="graphic-designer">Graphic Designer of the Year</option>
                          <option value="edu-coder">EDU Coder of the Year</option>
                          <option value="young-inventor">Best Young Inventor of the Year</option>
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
                          <option value="build-team">Best Build Team (Debunked) of the Year</option>
                          <option value="short-film">Best Short Film of the Year</option>
                          <option value="photographer">Best Scientific Photographer of the Year</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Competition Guidelines Download Box */}
                {rulesPdfUrl && (
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-white/90">Competition Guidelines</label>
                    <a
                      href={rulesPdfUrl}
                      download={rulesPdfUrl.split("/").pop()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 md:p-4 rounded-xl border border-white/10 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.06] transition-all text-white/90 no-underline group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0 group-hover:scale-105 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-medium text-white truncate">Click to download Rules &amp; Regulations</span>
                        <span className="block text-xs text-white/50">PDF Document (Official Competition Rulebook)</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:bg-white/10 group-hover:text-white transition-all shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </div>
                    </a>
                  </div>
                )}

                {/* DYNAMIC CATEGORY FIELD GROUPS */}
                <AnimatePresence mode="wait">
                  {/* 1. Article Writer (Inter & Intra) */}
                  {formData.awardCategory === "article-writer" && (
                    <motion.div
                      key="fields-article-writer"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2"
                    >
                      <label htmlFor="article-doc-link" className="text-sm font-medium text-white/90">
                        Google Docs Link *
                      </label>
                      <input
                        id="article-doc-link"
                        type="url"
                        name="articleDocLink"
                        required
                        placeholder="https://docs.google.com/..."
                        value={formData.articleDocLink}
                        onChange={handleChange}
                        className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </motion.div>
                  )}

                  {/* 2. Research Team (Inter) */}
                  {formData.awardCategory === "research-team" && (
                    <motion.div
                      key="fields-research-team"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2"
                    >
                      <label htmlFor="research-drive-link" className="text-sm font-medium text-white/90">
                        Google Drive Link *
                      </label>
                      <input
                        id="research-drive-link"
                        type="url"
                        name="researchDriveLink"
                        required
                        placeholder="https://drive.google.com/..."
                        value={formData.researchDriveLink}
                        onChange={handleChange}
                        className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </motion.div>
                  )}

                  {/* 3. Graphic Designer (Inter) */}
                  {formData.awardCategory === "graphic-designer" && (
                    <motion.div
                      key="fields-graphic-designer"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2"
                    >
                      <label htmlFor="designer-drive-link" className="text-sm font-medium text-white/90">
                        Google Drive Link *
                      </label>
                      <input
                        id="designer-drive-link"
                        type="url"
                        name="designerDriveLink"
                        required
                        placeholder="https://drive.google.com/..."
                        value={formData.designerDriveLink}
                        onChange={handleChange}
                        className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </motion.div>
                  )}

                  {/* 4. EDU Coder (Inter) */}
                  {formData.awardCategory === "edu-coder" && (
                    <motion.div
                      key="fields-edu-coder"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="coder-github-link" className="text-sm font-medium text-white/90">
                          GitHub Repository Link *
                        </label>
                        <input
                          id="coder-github-link"
                          type="url"
                          name="coderGithubLink"
                          required
                          placeholder="https://github.com/..."
                          value={formData.coderGithubLink}
                          onChange={handleChange}
                          className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="coder-hosted-link" className="text-sm font-medium text-white/90">
                          Hosted Project Link *
                        </label>
                        <input
                          id="coder-hosted-link"
                          type="url"
                          name="coderHostedLink"
                          required
                          placeholder="https://yourproject.com"
                          value={formData.coderHostedLink}
                          onChange={handleChange}
                          className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="coder-youtube-link" className="text-sm font-medium text-white/90">
                          YouTube Explanation Video Link *
                        </label>
                        <input
                          id="coder-youtube-link"
                          type="url"
                          name="coderYoutubeLink"
                          required
                          placeholder="https://youtube.com/watch?v=..."
                          value={formData.coderYoutubeLink}
                          onChange={handleChange}
                          className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* 5. Young Inventor (Inter & Intra) */}
                  {formData.awardCategory === "young-inventor" && (
                    <motion.div
                      key="fields-young-inventor"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2"
                    >
                      <label htmlFor="inventor-drive-link" className="text-sm font-medium text-white/90">
                        Google Drive Link *
                      </label>
                      <input
                        id="inventor-drive-link"
                        type="url"
                        name="inventorDriveLink"
                        required
                        placeholder="https://drive.google.com/..."
                        value={formData.inventorDriveLink}
                        onChange={handleChange}
                        className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </motion.div>
                  )}

                  {/* 6. Build Team (Open) */}
                  {formData.awardCategory === "build-team" && (
                    <motion.div
                      key="fields-build-team"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="build-team-drive-link" className="text-sm font-medium text-white/90">
                          Google Drive Link *
                        </label>
                        <input
                          id="build-team-drive-link"
                          type="url"
                          name="buildTeamDriveLink"
                          required
                          placeholder="https://drive.google.com/..."
                          value={formData.buildTeamDriveLink}
                          onChange={handleChange}
                          className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="build-team-pdf" className="text-sm font-medium text-white/90">
                          Upload Project PDF *
                        </label>
                        <label
                          htmlFor="build-team-pdf"
                          className={`flex items-center gap-4 p-3 md:p-4 rounded-xl border border-dashed cursor-pointer transition-all ${
                            buildTeamPdf
                              ? "bg-white/[0.07] border-white/30"
                              : "bg-white/[0.04] border-white/20 hover:border-white/40 hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-sm font-medium text-white truncate">
                              {buildTeamPdf ? buildTeamPdf.name : "Click or drag & drop to upload PDF"}
                            </span>
                            <span className="block text-xs text-white/50">PDF Document (Max 15MB)</span>
                          </div>
                          {buildTeamPdf && (
                            <button
                              type="button"
                              onClick={clearPdfUpload}
                              title="Remove PDF"
                              className="p-1.5 text-white/60 hover:text-red-400 hover:scale-110 transition-all shrink-0"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          )}
                          <input
                            ref={buildTeamPdfInputRef}
                            id="build-team-pdf"
                            name="buildTeamPdf"
                            type="file"
                            accept="application/pdf"
                            className="hidden"
                            onChange={(e) => handlePdfUploadChange(e.target.files?.[0] || null)}
                          />
                        </label>
                      </div>
                    </motion.div>
                  )}

                  {/* 7. Short Film (Open) */}
                  {formData.awardCategory === "short-film" && (
                    <motion.div
                      key="fields-short-film"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2"
                    >
                      <label htmlFor="short-film-drive-link" className="text-sm font-medium text-white/90">
                        Google Drive Link *
                      </label>
                      <input
                        id="short-film-drive-link"
                        type="url"
                        name="shortFilmDriveLink"
                        required
                        placeholder="https://drive.google.com/..."
                        value={formData.shortFilmDriveLink}
                        onChange={handleChange}
                        className="w-full h-14 px-5 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                      />
                    </motion.div>
                  )}

                  {/* 8. Photographer (Open) */}
                  {formData.awardCategory === "photographer" && (
                    <motion.div
                      key="fields-photographer"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex flex-col gap-2">
                        <label htmlFor="photographer-photo" className="text-sm font-medium text-white/90">
                          Upload Photograph *
                        </label>
                        <label
                          htmlFor="photographer-photo"
                          className={`flex items-center gap-4 p-3 md:p-4 rounded-xl border border-dashed cursor-pointer transition-all ${
                            photographerPhoto
                              ? "bg-white/[0.07] border-white/30"
                              : "bg-white/[0.04] border-white/20 hover:border-white/40 hover:bg-white/[0.06]"
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/80 shrink-0 overflow-hidden">
                            {photographerPhotoPreview ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={photographerPhotoPreview} alt="Preview" className="w-full h-full object-contain" />
                            ) : (
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <polyline points="21 15 16 10 5 21"></polyline>
                              </svg>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="block text-sm font-medium text-white truncate">
                              {photographerPhoto ? photographerPhoto.name : "Click or drag & drop to upload photograph"}
                            </span>
                            <span className="block text-xs text-white/50">PNG, JPG, or WebP</span>
                          </div>
                          {photographerPhoto && (
                            <button
                              type="button"
                              onClick={clearPhotoUpload}
                              title="Remove photograph"
                              className="p-1.5 text-white/60 hover:text-red-400 hover:scale-110 transition-all shrink-0"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          )}
                          <input
                            ref={photographerPhotoInputRef}
                            id="photographer-photo"
                            name="photographerPhoto"
                            type="file"
                            accept="image/png,image/jpeg,image/webp"
                            className="hidden"
                            onChange={(e) => handlePhotoUploadChange(e.target.files?.[0] || null)}
                          />
                        </label>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="photo-description" className="text-sm font-medium text-white/90">
                          Description (Optional)
                        </label>
                        <textarea
                          id="photo-description"
                          name="photoDescription"
                          rows={3}
                          placeholder="Brief details about the photo (e.g., location, gear, story)..."
                          value={formData.photoDescription}
                          onChange={handleChange}
                          className="w-full p-4 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-[15px] outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all resize-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Span: Registration Note, Checkbox & Submit Button */}
              <div className="md:col-span-2 flex flex-col gap-5 mt-2">
                {/* Note */}
                <div className="relative p-5 rounded-lg bg-white/[0.03] border-l-4 border-[#ffd57e]">
                  <p className="text-xs md:text-sm text-white/70 leading-relaxed m-0">
                    {type === "inter" &&
                      "Please ensure all contact details and submitted links are accurate and publicly accessible via Google Drive / YouTube."}
                    {type === "intra" &&
                      "Please ensure all contact details and submitted links are accurate and accessible."}
                    {type === "open" &&
                      "Please ensure all contact details and submitted files/links are accurate and accessible."}
                  </p>
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    name="confirmation"
                    required
                    checked={formData.confirmation}
                    onChange={handleChange}
                    className="w-5 h-5 mt-0.5 rounded border border-white/30 bg-black/60 accent-[#d49326] cursor-pointer shrink-0"
                  />
                  <span className="text-xs md:text-sm text-white/80 leading-relaxed">
                    {type === "inter" &&
                      "I confirm all submitted information is accurate and authorized by the school’s Science Union."}
                    {type === "intra" &&
                      "I confirm all submitted information is accurate and represents my original work."}
                    {type === "open" &&
                      "I confirm all submitted information and materials are accurate and my own work."}
                  </span>
                </label>

                {/* Submit Button */}
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full max-w-[320px] h-14 rounded-full font-['Nebula',sans-serif] text-[13px] tracking-[0.08em] uppercase text-black font-semibold bg-gradient-to-b from-[#ffd885] via-[#d49326] to-[#a66e0a] shadow-[0_4px_20px_rgba(212,147,38,0.35)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Now"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Official Helpline */}
        <div className="mt-16 text-center text-xs md:text-sm text-white/40">
          Need help with registration?
          <br />
          <a
            href="tel:+94707670676"
            className="text-white/80 font-medium hover:text-[#ffd57e] transition-colors inline-block mt-1 underline"
          >
            Helpline: +94 70 767 0676
          </a>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
