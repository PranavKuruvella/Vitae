import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";

const LaTeXTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    };

    return (
        <div
            className="mx-auto bg-white text-black font-[Charter] text-[13.3px] leading-normal w-[8.5in] p-[0.8cm]"
            style={{
                boxSizing: "border-box",
                pageBreakAfter: "always",
            }}
        >
            {/* Header */}
            <header className="text-center mb-[0.5cm]">
                <h1 className="text-[25pt] font-bold mb-[0.2cm]" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "John Doe"}
                </h1>

                <div className="flex flex-wrap justify-center gap-x-[0.5cm] text-[10pt] text-black">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="size-3" style={{ color: accentColor }} />
                            <span className="break-all">{data.personal_info.website}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="size-3" style={{ color: accentColor }} />
                            <span className="break-all">{data.personal_info.linkedin}</span>
                        </div>
                    )}
                    {data.personal_info?.github && (
                        <div className="flex items-center gap-1">
                            <Github className="size-3" style={{ color: accentColor }} />
                            <span className="break-all">{data.personal_info.github}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Summary */}
            {data.professional_summary && (
                <section className="mb-[0.3cm]">
                    <h2 className="font-bold text-[13pt] border-b mb-[0.2cm] pb-[1pt]" style={{ borderColor: accentColor, color: accentColor }}>
                        Summary
                    </h2>
                    <p>{data.professional_summary}</p>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-[0.3cm]">
                    <h2 className="font-bold text-[13pt] border-b mb-[0.2cm] pb-[1pt]" style={{ borderColor: accentColor, color: accentColor }}>
                        Education
                    </h2>
                    {data.education.map((edu, index) => (
                        <div key={index} className="mb-[0.15cm]">
                            <div className="flex justify-between">
                                <div>
                                    <strong>{edu.institution}</strong>, {edu.degree} {edu.field && `in ${edu.field}`}
                                </div>
                                <div className="text-[10pt]">
                                    {formatDate(edu.graduation_date)}
                                </div>
                            </div>
                            {edu.gpa && <div>GPA: {edu.gpa}</div>}
                        </div>
                    ))}
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-[0.3cm]">
                    <h2 className="font-bold text-[13pt] border-b mb-[0.2cm] pb-[1pt]" style={{ borderColor: accentColor, color: accentColor }}>
                        Experience
                    </h2>
                    {data.experience.map((exp, index) => (
                        <div key={index} className="mb-[0.25cm]">
                            <div className="flex justify-between">
                                <div>
                                    <strong>{exp.position}</strong>, {exp.company}
                                </div>
                                <div className="text-[10pt]">
                                    {formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                </div>
                            </div>
                            {exp.description && (
                                <ul className="list-disc ml-[17pt] mt-[0.1cm] ">
                                    {exp.description.split("\n").map((line, i) => (
                                        <li key={i}>{line}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-[0.3cm]">
                    <h2 className="font-bold text-[13pt] border-b mb-[0.2cm] pb-[1pt]" style={{ borderColor: accentColor, color: accentColor }}>
                        Projects
                    </h2>
                    {data.project.map((proj, index) => (
                        <div key={index} className="mb-[0.25cm]">
                            <div className="flex justify-between">
                                <strong>{proj.name}</strong>
                                {proj.link && (
                                    <a href={proj.link} className="text-[10pt] underline" style={{ color: accentColor }}>
                                        {proj.link}
                                    </a>
                                )}
                            </div>
                            <ul className="list-disc ml-[10pt] mt-[0.1cm] space-y-[0.05cm]">
                                {proj.description.split("\n").map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            )}

            {/* Publications */}
            {data.publications && data.publications.length > 0 && (
                <section className="mb-[0.3cm]">
                    <h2 className="font-bold text-[13pt] border-b mb-[0.2cm] pb-[1pt]" style={{ borderColor: accentColor, color: accentColor }}>
                        Publications
                    </h2>
                    {data.publications.map((pub, index) => (
                        <div key={index} className="mb-[0.25cm]">
                            <div className="flex justify-between">
                                <strong>{pub.title}</strong>
                                <span className="text-[10pt]">{formatDate(pub.date)}</span>
                            </div>
                            <div className="italic">{pub.authors}</div>
                            {pub.link && (
                                <a href={pub.link} className="text-[10pt] underline" style={{ color: accentColor }}>
                                    {pub.link}
                                </a>
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Technologies */}
            {data.skills && data.skills.length > 0 && (
                <section>
                    <h2 className="font-bold text-[13pt] border-b mb-[0.2cm] pb-[1pt]" style={{ borderColor: accentColor, color: accentColor }}>
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-x-[0.4cm]">
                        {data.skills.map((skill, index) => (
                            <span key={index}>• {skill}</span>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default LaTeXTemplate;
