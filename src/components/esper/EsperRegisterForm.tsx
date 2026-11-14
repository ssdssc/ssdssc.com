"use client";

import { useState, useRef } from "react";
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

  // Research Team additional members (up to 4)
  member2Name: string;
  member2Contact: string;
  member3Name: string;
  member3Contact: string;
  member4Name: string;
  member4Contact: string;
  member5Name: string;
  member5Contact: string;

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

  member2Name: "",
  member2Contact: "",
  member3Name: "",
  member3Contact: "",
  member4Name: "",
  member4Contact: "",
  member5Name: "",
  member5Contact: "",

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
  const [buildTeamPdf, setBuildTeamPdf] = useState<File | null>(null);
  const [photographerPhoto, setPhotographerPhoto] = useState<File | null>(null);

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
    }));
  };

  const clearSchoolLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSchoolLogo(null);
    if (schoolLogoInputRef.current) schoolLogoInputRef.current.value = "";
  };

  const clearPdfUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBuildTeamPdf(null);
    if (buildTeamPdfInputRef.current) buildTeamPdfInputRef.current.value = "";
  };

  const clearPhotoUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPhotographerPhoto(null);
    if (photographerPhotoInputRef.current) photographerPhotoInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const data = new FormData();
      data.append("registrationType", type);
      data.append("awardCategory", formData.awardCategory);
      data.append("confirmation", String(formData.confirmation));

      if (type === "popular") {
        data.append("schoolName", formData.schoolName);
        data.append("presidentName", formData.presidentName);
        data.append("contactNumber", formData.contactNumber);
        data.append("emailAddress", formData.emailAddress);
      } else if (type === "inter") {
        data.append("schoolName", formData.schoolName);
        data.append("presidentName", formData.presidentName);
        data.append("contactNumber", formData.contactNumber);
        data.append("applicantName", formData.applicantName);
        data.append("grade", formData.grade);
        data.append("applicantPhone", formData.applicantPhone);
        data.append("emailAddress", formData.emailAddress);
        if (schoolLogo) data.append("schoolLogo", schoolLogo);

        if (formData.awardCategory === "article-writer") {
          data.append("articleDocLink", formData.articleDocLink);
        } else if (formData.awardCategory === "research-team") {
          data.append("researchDriveLink", formData.researchDriveLink);
          if (formData.member2Name) data.append("member2Name", formData.member2Name);
          if (formData.member2Contact) data.append("member2Contact", formData.member2Contact);
          if (formData.member3Name) data.append("member3Name", formData.member3Name);
          if (formData.member3Contact) data.append("member3Contact", formData.member3Contact);
          if (formData.member4Name) data.append("member4Name", formData.member4Name);
          if (formData.member4Contact) data.append("member4Contact", formData.member4Contact);
          if (formData.member5Name) data.append("member5Name", formData.member5Name);
          if (formData.member5Contact) data.append("member5Contact", formData.member5Contact);
        } else if (formData.awardCategory === "graphic-designer") {
          data.append("designerDriveLink", formData.designerDriveLink);
        } else if (formData.awardCategory === "edu-coder") {
          data.append("coderGithubLink", formData.coderGithubLink);
          data.append("coderHostedLink", formData.coderHostedLink);
          data.append("coderYoutubeLink", formData.coderYoutubeLink);
        } else if (formData.awardCategory === "young-inventor") {
          data.append("inventorDriveLink", formData.inventorDriveLink);
        }
      } else if (type === "intra") {
        data.append("applicantName", formData.applicantName);
        data.append("grade", formData.grade);
        data.append("contactNumber", formData.contactNumber);
        data.append("emailAddress", formData.emailAddress);

        if (formData.awardCategory === "young-inventor") {
          data.append("inventorDriveLink", formData.inventorDriveLink);
        } else if (formData.awardCategory === "article-writer") {
          data.append("articleDocLink", formData.articleDocLink);
        }
      } else if (type === "open") {
        data.append("applicantName", formData.applicantName);
        data.append("age", formData.age);
        data.append("contactNumber", formData.contactNumber);
        data.append("emailAddress", formData.emailAddress);

        if (formData.awardCategory === "build-team") {
          data.append("buildTeamDriveLink", formData.buildTeamDriveLink);
          if (buildTeamPdf) data.append("buildTeamPdf", buildTeamPdf);
        } else if (formData.awardCategory === "short-film") {
          data.append("shortFilmDriveLink", formData.shortFilmDriveLink);
        } else if (formData.awardCategory === "photographer") {
          if (photographerPhoto) data.append("photographerPhoto", photographerPhoto);
          if (formData.photoDescription) data.append("photoDescription", formData.photoDescription);
        }
      }

      const res = await fetch("/api/esper/register", {
        method: "POST",
        body: data,
      });

      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result.error || `Submission failed with status ${res.status}`);
      }

      setStatusMessage({
        type: "success",
        text: "Registration submitted successfully!",
      });

      // Reset form
      setFormData({
        ...initialFormFields,
        registrationType: type,
        schoolName: type === "intra" ? "D. S. Senanayake College" : "",
      });
      setSchoolLogo(null);
      setBuildTeamPdf(null);
      setPhotographerPhoto(null);
      if (schoolLogoInputRef.current) schoolLogoInputRef.current.value = "";
      if (buildTeamPdfInputRef.current) buildTeamPdfInputRef.current.value = "";
      if (photographerPhotoInputRef.current) photographerPhotoInputRef.current.value = "";
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
      {/* Subheader Hero with Video Background */}
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

        {/* Inner Page Header */}
        <Header />

        <div className="relative z-10 max-w-[1160px] mx-auto px-6 pt-28 md:pt-36 pb-16 md:pb-20 flex flex-col items-center text-center gap-3">
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

      {/* Main Registration Form Body */}
      <main className="page-container">
        {statusMessage && (
          <div
            id="form-message"
            style={{
              display: "block",
              width: "100%",
              maxWidth: isPopular ? "580px" : "1040px",
              margin: "0 auto 24px auto",
              textAlign: "center",
              fontSize: "14px",
              borderRadius: "8px",
              padding: "14px 20px",
              backgroundColor: statusMessage.type === "success" ? "#d4edda" : "#f8d7da",
              color: statusMessage.type === "success" ? "#155724" : "#721c24",
              border: statusMessage.type === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
            }}
          >
            {statusMessage.text}
          </div>
        )}

        <form
          className="registration-form"
          id="esper-registration-form"
          onSubmit={handleSubmit}
          style={isPopular ? { maxWidth: "580px", margin: "0 auto" } : {}}
        >
          <input name="registrationType" type="hidden" value={type} />

          {isPopular ? (
            /* POPULAR AWARDS: Single Centered Column Form matching commit 358b26e */
            <>
              <div className="form-row">
                <label htmlFor="award-category">Award Category</label>
                <div className="input-wrapper">
                  <select
                    className="form-control"
                    id="award-category"
                    name="awardCategory"
                    required
                    value={formData.awardCategory}
                    onChange={handleCategoryChange}
                  >
                    <option disabled value="">Select an award category...</option>
                    <option value="quiz-team">Most Popular School Science Quiz Team</option>
                    <option value="science-union">Most Popular School Science Union</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="school-name">School Name</label>
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    id="school-name"
                    name="schoolName"
                    placeholder="e.g., D. S. Senanayake College"
                    required
                    type="text"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="president-name">President Name</label>
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    id="president-name"
                    name="presidentName"
                    placeholder="Science Union / Society President"
                    required
                    type="text"
                    value={formData.presidentName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="contact-number">Contact Number</label>
                <div className="input-wrapper phone-input">
                  <span className="country-code">+94</span>
                  <input
                    className="form-control"
                    id="contact-number"
                    name="contactNumber"
                    placeholder="XX XXX XXXX"
                    required
                    type="tel"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="email-address">Email Address</label>
                <div className="input-wrapper">
                  <input
                    className="form-control"
                    id="email-address"
                    name="emailAddress"
                    placeholder="official@schoolunion.com"
                    required
                    type="email"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </>
          ) : (
            /* 2-COLUMN FORMS: INTER, INTRA, OPEN */
            <div className="form-columns">
              {/* Left Column */}
              <div className="form-column" id={type === "inter" ? "column-school-details" : "column-applicant-details"}>
                {type === "inter" && (
                  <>
                    <div className="form-row">
                      <label htmlFor="school-name">School Name</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="school-name"
                          name="schoolName"
                          placeholder="e.g., D. S. Senanayake College"
                          required
                          type="text"
                          value={formData.schoolName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <label htmlFor="president-name">President Name</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="president-name"
                          name="presidentName"
                          placeholder="Science Union / Society President"
                          required
                          type="text"
                          value={formData.presidentName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <label htmlFor="contact-number">President Contact Number</label>
                      <div className="input-wrapper phone-input">
                        <span className="country-code">+94</span>
                        <input
                          className="form-control"
                          id="contact-number"
                          name="contactNumber"
                          placeholder="XX XXX XXXX"
                          required
                          type="tel"
                          value={formData.contactNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* School Logo */}
                    <div className="form-row">
                      <label htmlFor="school-logo">School Logo</label>
                      <div className="input-wrapper">
                        <label className={`file-upload-box ${schoolLogo ? "has-file" : ""}`} htmlFor="school-logo">
                          <div className="file-upload-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                          </div>
                          <div className="file-upload-text">
                            <span className="file-upload-title" id="school-logo-filename">
                              {schoolLogo ? `${schoolLogo.name} (${(schoolLogo.size / 1024).toFixed(1)} KB)` : "Click or drag & drop to upload school logo"}
                            </span>
                            <span className="file-upload-hint">PNG, JPG, or WebP (Recommended transparent PNG)</span>
                          </div>
                          {schoolLogo && (
                            <button
                              type="button"
                              className="file-upload-clear"
                              title="Remove logo"
                              onClick={clearSchoolLogo}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          )}
                          <input
                            ref={schoolLogoInputRef}
                            className="file-input-hidden"
                            id="school-logo"
                            name="schoolLogo"
                            type="file"
                            accept="image/png,image/jpeg,image/webp"
                            onChange={(e) => setSchoolLogo(e.target.files?.[0] || null)}
                          />
                        </label>
                      </div>
                    </div>
                  </>
                )}

                {/* Applicant Name */}
                <div className="form-row">
                  <label htmlFor="applicant-name">Name</label>
                  <div className="input-wrapper">
                    <input
                      className="form-control"
                      id="applicant-name"
                      name="applicantName"
                      placeholder="Full name"
                      required
                      type="text"
                      value={formData.applicantName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Grade (Inter / Intra) or Age (Open) */}
                {type === "open" ? (
                  <div className="form-row">
                    <label htmlFor="applicant-age">Age</label>
                    <div className="input-wrapper">
                      <input
                        className="form-control"
                        id="applicant-age"
                        name="age"
                        placeholder="Must be 20 or under"
                        min="1"
                        max="20"
                        required
                        type="number"
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
                      />
                    </div>
                  </div>
                ) : (
                  <div className="form-row">
                    <label htmlFor="grade">Grade</label>
                    <div className="input-wrapper">
                      <select
                        className="form-control"
                        id="grade"
                        name="grade"
                        required
                        value={formData.grade}
                        onChange={handleChange}
                      >
                        <option disabled value="">Select Grade...</option>
                        {[...Array(13)].map((_, i) => (
                          <option key={i + 1} value={`Grade ${i + 1}`}>
                            Grade {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Phone Number */}
                <div className="form-row">
                  <label htmlFor={type === "inter" ? "applicant-phone" : "contact-number"}>
                    {type === "inter" ? "Phone Number" : "Phone Number"}
                  </label>
                  <div className="input-wrapper phone-input">
                    <span className="country-code">+94</span>
                    <input
                      className="form-control"
                      id={type === "inter" ? "applicant-phone" : "contact-number"}
                      name={type === "inter" ? "applicantPhone" : "contactNumber"}
                      placeholder="XX XXX XXXX"
                      required
                      type="tel"
                      value={type === "inter" ? formData.applicantPhone : formData.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="form-row">
                  <label htmlFor="email-address">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      className="form-control"
                      id="email-address"
                      name="emailAddress"
                      placeholder="yourname@gmail.com"
                      required
                      type="email"
                      value={formData.emailAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Submission Details & Dynamic Category Fields */}
              <div className="form-column" id="column-submission-details">
                {/* Award Category */}
                <div className="form-row">
                  <label htmlFor="award-category">Award Category</label>
                  <div className="input-wrapper">
                    <select
                      className="form-control"
                      id="award-category"
                      name="awardCategory"
                      required
                      value={formData.awardCategory}
                      onChange={handleCategoryChange}
                    >
                      <option disabled value="">Select an award category...</option>
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
                  <div className="form-row">
                    <label>Competition Guidelines</label>
                    <div className="input-wrapper">
                      <a
                        className="file-upload-box pdf-download-box"
                        href={rulesPdfUrl}
                        download={rulesPdfUrl.split("/").pop()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="file-upload-icon">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <div className="file-upload-text">
                          <span className="file-upload-title">Click to download Rules &amp; Regulations</span>
                          <span className="file-upload-hint">PDF Document (Official Competition Rulebook)</span>
                        </div>
                        <div className="file-download-arrow">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                )}

                {/* DYNAMIC SUBMISSION FIELDS: Matching Commit 358b26e */}

                {/* Article Writer (Inter & Intra) */}
                {formData.awardCategory === "article-writer" && (
                  <div className="category-fields-group" id="fields-article-writer">
                    <div className="form-row">
                      <label htmlFor="article-doc-link">Google Docs Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="article-doc-link"
                          name="articleDocLink"
                          placeholder="https://docs.google.com/document/d/..."
                          required
                          type="url"
                          value={formData.articleDocLink}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-subtext">Please ensure the Google Doc link sharing setting is set to &ldquo;Anyone with the link can view&rdquo;.</span>
                    </div>
                  </div>
                )}

                {/* Best Research Team of the Year (Inter) */}
                {formData.awardCategory === "research-team" && (
                  <div className="category-fields-group" id="fields-research-team">
                    <div className="form-row">
                      <label htmlFor="research-drive-link">Google Drive Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="research-drive-link"
                          name="researchDriveLink"
                          placeholder="https://drive.google.com/drive/folders/..."
                          required
                          type="url"
                          value={formData.researchDriveLink}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-subtext">Please ensure the Google Drive folder link sharing setting is set to &ldquo;Anyone with the link can view&rdquo;.</span>
                    </div>

                    {/* Additional Team Members (Up to 4) - as shown in original form */}
                    <div style={{ marginTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "16px" }}>
                      <label style={{ fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "rgba(255, 255, 255, 0.9)", display: "block", marginBottom: "4px" }}>
                        ADDITIONAL TEAM MEMBERS (UP TO 4)
                      </label>
                      <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)", margin: "0 0 16px 0", lineHeight: "1.4" }}>
                        Team Leader is registered on the left. Enter remaining members below (optional if team has fewer than 5 members).
                      </p>

                      {/* Member 2 */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                        <div className="form-row">
                          <label htmlFor="member2-name" style={{ fontSize: "12px" }}>Member 2 Full Name</label>
                          <div className="input-wrapper">
                            <input
                              className="form-control"
                              id="member2-name"
                              name="member2Name"
                              placeholder="Full name"
                              type="text"
                              value={formData.member2Name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <label htmlFor="member2-contact" style={{ fontSize: "12px" }}>Member 2 Contact</label>
                          <div className="input-wrapper phone-input">
                            <span className="country-code">+94</span>
                            <input
                              className="form-control"
                              id="member2-contact"
                              name="member2Contact"
                              placeholder="XX XXX XXXX"
                              type="tel"
                              value={formData.member2Contact}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Member 3 */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                        <div className="form-row">
                          <label htmlFor="member3-name" style={{ fontSize: "12px" }}>Member 3 Full Name</label>
                          <div className="input-wrapper">
                            <input
                              className="form-control"
                              id="member3-name"
                              name="member3Name"
                              placeholder="Full name"
                              type="text"
                              value={formData.member3Name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <label htmlFor="member3-contact" style={{ fontSize: "12px" }}>Member 3 Contact</label>
                          <div className="input-wrapper phone-input">
                            <span className="country-code">+94</span>
                            <input
                              className="form-control"
                              id="member3-contact"
                              name="member3Contact"
                              placeholder="XX XXX XXXX"
                              type="tel"
                              value={formData.member3Contact}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Member 4 */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                        <div className="form-row">
                          <label htmlFor="member4-name" style={{ fontSize: "12px" }}>Member 4 Full Name</label>
                          <div className="input-wrapper">
                            <input
                              className="form-control"
                              id="member4-name"
                              name="member4Name"
                              placeholder="Full name"
                              type="text"
                              value={formData.member4Name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <label htmlFor="member4-contact" style={{ fontSize: "12px" }}>Member 4 Contact</label>
                          <div className="input-wrapper phone-input">
                            <span className="country-code">+94</span>
                            <input
                              className="form-control"
                              id="member4-contact"
                              name="member4Contact"
                              placeholder="XX XXX XXXX"
                              type="tel"
                              value={formData.member4Contact}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Member 5 */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <div className="form-row">
                          <label htmlFor="member5-name" style={{ fontSize: "12px" }}>Member 5 Full Name</label>
                          <div className="input-wrapper">
                            <input
                              className="form-control"
                              id="member5-name"
                              name="member5Name"
                              placeholder="Full name"
                              type="text"
                              value={formData.member5Name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <label htmlFor="member5-contact" style={{ fontSize: "12px" }}>Member 5 Contact</label>
                          <div className="input-wrapper phone-input">
                            <span className="country-code">+94</span>
                            <input
                              className="form-control"
                              id="member5-contact"
                              name="member5Contact"
                              placeholder="XX XXX XXXX"
                              type="tel"
                              value={formData.member5Contact}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Graphic Designer of the Year (Inter) */}
                {formData.awardCategory === "graphic-designer" && (
                  <div className="category-fields-group" id="fields-graphic-designer">
                    <div className="form-row">
                      <label htmlFor="designer-drive-link">Google Drive Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="designer-drive-link"
                          name="designerDriveLink"
                          placeholder="https://drive.google.com/drive/folders/..."
                          required
                          type="url"
                          value={formData.designerDriveLink}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-subtext">Please ensure the Google Drive portfolio link sharing setting is set to &ldquo;Anyone with the link can view&rdquo;.</span>
                    </div>
                  </div>
                )}

                {/* EDU Coder of the Year (Inter) */}
                {formData.awardCategory === "edu-coder" && (
                  <div className="category-fields-group" id="fields-edu-coder">
                    <div className="form-row">
                      <label htmlFor="coder-github-link">GitHub Repository Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="coder-github-link"
                          name="coderGithubLink"
                          placeholder="https://github.com/username/repository"
                          required
                          type="url"
                          value={formData.coderGithubLink}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <label htmlFor="coder-hosted-link">Hosted Project Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="coder-hosted-link"
                          name="coderHostedLink"
                          placeholder="https://your-project.vercel.app"
                          required
                          type="url"
                          value={formData.coderHostedLink}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <label htmlFor="coder-youtube-link">YouTube Explanation Video Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="coder-youtube-link"
                          name="coderYoutubeLink"
                          placeholder="https://www.youtube.com/watch?v=..."
                          required
                          type="url"
                          value={formData.coderYoutubeLink}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-subtext">Ensure the video is set to Public or Unlisted so the judges can view it.</span>
                    </div>
                  </div>
                )}

                {/* Best Young Inventor of the Year (Inter & Intra) */}
                {formData.awardCategory === "young-inventor" && (
                  <div className="category-fields-group" id="fields-young-inventor">
                    <div className="form-row">
                      <label htmlFor="inventor-drive-link">Google Drive Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="inventor-drive-link"
                          name="inventorDriveLink"
                          placeholder="https://drive.google.com/drive/folders/..."
                          required
                          type="url"
                          value={formData.inventorDriveLink}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-subtext">Please ensure the Google Drive link sharing setting is set to &ldquo;Anyone with the link can view&rdquo;.</span>
                    </div>
                  </div>
                )}

                {/* Best Build Team (Debunked) of the Year (Open) */}
                {formData.awardCategory === "build-team" && (
                  <div className="category-fields-group" id="fields-build-team">
                    <div className="form-row">
                      <label htmlFor="build-team-drive-link">Google Drive Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="build-team-drive-link"
                          name="buildTeamDriveLink"
                          placeholder="https://drive.google.com/drive/folders/..."
                          required
                          type="url"
                          value={formData.buildTeamDriveLink}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-subtext">Please ensure the Google Drive link sharing setting is set to &ldquo;Anyone with the link can view&rdquo;.</span>
                    </div>
                    <div className="form-row">
                      <label htmlFor="build-team-pdf">Upload Project PDF</label>
                      <div className="input-wrapper">
                        <label className={`file-upload-box ${buildTeamPdf ? "has-file" : ""}`} htmlFor="build-team-pdf">
                          <div className="file-upload-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                          </div>
                          <div className="file-upload-text">
                            <span className="file-upload-title" id="build-team-pdf-filename">
                              {buildTeamPdf ? `${buildTeamPdf.name} (${(buildTeamPdf.size / 1024).toFixed(1)} KB)` : "Click or drag & drop to upload PDF"}
                            </span>
                            <span className="file-upload-hint">PDF Document (Official build report)</span>
                          </div>
                          {buildTeamPdf && (
                            <button
                              type="button"
                              className="file-upload-clear"
                              title="Remove file"
                              onClick={clearPdfUpload}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          )}
                          <input
                            ref={buildTeamPdfInputRef}
                            className="file-input-hidden"
                            id="build-team-pdf"
                            name="buildTeamPdf"
                            type="file"
                            accept="application/pdf"
                            onChange={(e) => setBuildTeamPdf(e.target.files?.[0] || null)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Best Short Film of the Year (Open) */}
                {formData.awardCategory === "short-film" && (
                  <div className="category-fields-group" id="fields-short-film">
                    <div className="form-row">
                      <label htmlFor="short-film-drive-link">Google Drive Link</label>
                      <div className="input-wrapper">
                        <input
                          className="form-control"
                          id="short-film-drive-link"
                          name="shortFilmDriveLink"
                          placeholder="https://drive.google.com/drive/folders/..."
                          required
                          type="url"
                          value={formData.shortFilmDriveLink}
                          onChange={handleChange}
                        />
                      </div>
                      <span className="field-subtext">Please ensure the Google Drive video file or folder link sharing setting is set to &ldquo;Anyone with the link can view&rdquo;.</span>
                    </div>
                  </div>
                )}

                {/* Best Scientific Photographer of the Year (Open) */}
                {formData.awardCategory === "photographer" && (
                  <div className="category-fields-group" id="fields-photographer">
                    <div className="form-row">
                      <label htmlFor="photographer-photo">Upload Photograph</label>
                      <div className="input-wrapper">
                        <label className={`file-upload-box ${photographerPhoto ? "has-file" : ""}`} htmlFor="photographer-photo">
                          <div className="file-upload-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <polyline points="17 8 12 3 7 8"></polyline>
                              <line x1="12" y1="3" x2="12" y2="15"></line>
                            </svg>
                          </div>
                          <div className="file-upload-text">
                            <span className="file-upload-title" id="photographer-photo-filename">
                              {photographerPhoto ? `${photographerPhoto.name} (${(photographerPhoto.size / 1024).toFixed(1)} KB)` : "Click or drag & drop to upload photo"}
                            </span>
                            <span className="file-upload-hint">PNG, JPG, or WebP (Recommended High Resolution)</span>
                          </div>
                          {photographerPhoto && (
                            <button
                              type="button"
                              className="file-upload-clear"
                              title="Remove photo"
                              onClick={clearPhotoUpload}
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </button>
                          )}
                          <input
                            ref={photographerPhotoInputRef}
                            className="file-input-hidden"
                            id="photographer-photo"
                            name="photographerPhoto"
                            type="file"
                            accept="image/png,image/jpeg,image/webp,image/tiff"
                            onChange={(e) => setPhotographerPhoto(e.target.files?.[0] || null)}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="form-row">
                      <label htmlFor="photo-description">
                        Description <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "normal", fontSize: "13px" }}>(Optional)</span>
                      </label>
                      <div className="input-wrapper">
                        <textarea
                          className="form-control"
                          id="photo-description"
                          name="photoDescription"
                          rows={3}
                          placeholder="Tell us about this scientific photograph, camera settings, context, or subject..."
                          style={{ height: "auto", minHeight: "100px", padding: "14px 20px", resize: "vertical" }}
                          value={formData.photoDescription}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Registration Note */}
          <div className="registration-note">
            <p>
              {type === "open"
                ? "Please ensure all contact details and submitted files/links are accurate and accessible."
                : "This registration must be submitted by an officially appointed Science Union / Science Society representative (e.g., President, Secretary or Teacher-in-charge nominee)"}
            </p>
          </div>

          {/* Checkbox Row */}
          <label className="checkbox-row">
            <input
              name="confirmation"
              required
              type="checkbox"
              checked={formData.confirmation}
              onChange={handleChange}
            />
            <span>
              {type === "open"
                ? "I confirm all submitted information and materials are accurate and my own work."
                : "I confirm I am an official representative of the school’s Science Union and have the authority to register."}
            </span>
          </label>

          {/* Action Section */}
          <div className="action-section">
            <button className="submit-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Now"}
            </button>
          </div>
        </form>

        {/* Helpline */}
        <div className="helpline">
          Need help with registration?<br />
          <a href="tel:+94707670676">Helpline: +94 70 767 0676</a>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Authentic Form Styles Scoped to ESPER Registration Form */}
      <style jsx global>{`
        :root {
          --esper-gray-text: rgba(255, 255, 255, 0.7);
          --esper-accent-orange: #ff773d;
          --esper-accent-orange-dark: #c53900;
          --esper-accent-gold: #a67c00;
          --font-playfair: 'Playfair Display', serif;
          --font-inter: 'Inter', sans-serif;
          --font-instrument: 'Instrument Sans', sans-serif;
        }

        .page-container {
          color: #ffffff;
          width: 100%;
          max-width: 1160px;
          margin: 60px auto 100px auto;
          padding: 0 20px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          position: relative;
        }

        .registration-form {
          width: 100%;
          max-width: 1040px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          width: 100%;
          align-items: start;
        }

        .form-column {
          display: flex;
          flex-direction: column;
          gap: 22px;
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          align-items: flex-start;
          gap: 10px;
        }

        .form-row label {
          font-weight: 500;
          font-size: 14px;
          color: #fff;
        }

        .input-wrapper {
          width: 100%;
          position: relative;
        }

        .phone-input .country-code {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #fff;
          font-family: var(--font-inter);
          font-size: 15px;
          pointer-events: none;
          z-index: 5;
        }

        .phone-input .form-control {
          padding-left: 60px;
        }

        .form-control {
          width: 100%;
          height: 56px;
          padding: 0 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          font-family: var(--font-inter);
          font-size: 15px;
          transition: all 0.2s ease;
          box-sizing: border-box;
          outline: none;
        }

        .form-control:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        select.form-control {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22rgba(255,255,255,0.5)%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 48px;
          cursor: pointer;
        }

        select.form-control option {
          background-color: #0c0c0c;
          color: #fff;
          padding: 10px;
        }

        .file-upload-box {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          min-height: 64px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1.5px dashed rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
          box-sizing: border-box;
        }

        .file-upload-box:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.35);
        }

        .file-upload-box.has-file {
          border-style: solid;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.06);
        }

        .file-upload-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          flex-shrink: 0;
        }

        .file-upload-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
          flex: 1;
        }

        .file-upload-title {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .file-upload-hint {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.4);
        }

        .file-upload-clear {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          background: none;
          color: rgba(255, 255, 255, 0.6);
          border: none;
          cursor: pointer;
          margin-left: auto;
          flex-shrink: 0;
          transition: all 0.2s ease;
          position: relative;
          z-index: 5;
          padding: 0;
        }

        .file-upload-clear svg {
          pointer-events: none;
          display: block;
        }

        .file-upload-clear:hover {
          background: none;
          border: none;
          color: #ff4d4d;
          transform: scale(1.2);
        }

        .file-input-hidden {
          position: absolute;
          width: 0;
          height: 0;
          opacity: 0;
          pointer-events: none;
        }

        .pdf-download-box {
          text-decoration: none;
          justify-content: flex-start;
        }

        .file-download-arrow {
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.8);
          flex-shrink: 0;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .pdf-download-box:hover .file-download-arrow {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        .category-fields-group {
          display: flex;
          flex-direction: column;
          gap: 22px;
          width: 100%;
          animation: fadeInCategory 0.3s ease;
        }

        @keyframes fadeInCategory {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .field-subtext {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 4px;
          line-height: 1.4;
        }

        .registration-note {
          background: rgba(255, 255, 255, 0.03);
          position: relative;
          padding: 20px 20px 20px 24px;
          border-radius: 8px 12px 12px 8px;
          margin: 20px auto 10px auto;
          max-width: 880px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }

        .registration-note::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #f3d09a 0%, #a67c00 100%);
        }

        .registration-note p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: var(--esper-gray-text);
        }

        .checkbox-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 20px auto;
          max-width: 880px;
          width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        }

        .checkbox-row input {
          width: 20px;
          height: 20px;
          accent-color: var(--esper-accent-gold);
        }

        .checkbox-row span {
          font-size: 14px;
          color: var(--esper-gray-text);
        }

        .action-section {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .submit-btn {
          background: linear-gradient(180deg, #ffd885 0%, #d49326 50%, #a66e0a 100%);
          color: #000000;
          padding: 16px 48px;
          border-radius: 100px;
          font-weight: 700;
          font-family: var(--font-instrument), 'Inter', sans-serif;
          font-size: 18px;
          letter-spacing: 0.5px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, filter 0.2s;
          box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.4), 0 4px 20px rgba(212, 147, 38, 0.4);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.5), 0 6px 24px rgba(212, 147, 38, 0.55);
        }

        .submit-btn:active {
          transform: translateY(0);
          filter: brightness(0.96);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .helpline {
          margin-top: 80px;
          color: #888;
          font-size: 14px;
          text-align: center;
        }

        .helpline a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          margin-top: 10px;
          margin-left: 0;
        }

        .helpline a:hover {
          text-decoration: underline;
        }

        @media (max-width: 860px) {
          .page-container {
            margin: 30px auto 60px auto !important;
            padding: 0 16px !important;
          }

          .registration-form {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
            gap: 20px !important;
          }

          .form-columns {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 20px !important;
          }

          .form-column {
            width: 100% !important;
            max-width: 100% !important;
            gap: 18px !important;
          }

          .form-row {
            grid-template-columns: 1fr !important;
            width: 100% !important;
            max-width: 100% !important;
            gap: 8px !important;
          }

          .input-wrapper {
            width: 100% !important;
            max-width: 100% !important;
          }

          .form-control {
            width: 100% !important;
            max-width: 100% !important;
            font-size: 15px !important;
          }

          .file-upload-box {
            width: 100% !important;
            max-width: 100% !important;
            padding: 12px 14px !important;
          }

          .registration-note {
            width: 100% !important;
            max-width: 100% !important;
            margin: 16px 0 !important;
            padding: 16px !important;
          }

          .checkbox-row {
            width: 100% !important;
            max-width: 100% !important;
            margin: 16px 0 !important;
            align-items: flex-start !important;
          }

          .checkbox-row input {
            margin-top: 3px !important;
            flex-shrink: 0 !important;
          }

          .action-section {
            width: 100% !important;
            max-width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            margin-top: 24px !important;
          }

          .submit-btn {
            width: 100% !important;
            max-width: 320px !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .file-upload-box {
            padding: 10px 12px !important;
            gap: 10px !important;
          }

          .file-upload-title {
            font-size: 13px !important;
          }

          .file-upload-hint {
            font-size: 11px !important;
          }
        }
      `}</style>
    </div>
  );
}
