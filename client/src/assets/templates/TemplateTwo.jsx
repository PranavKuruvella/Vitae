import React from "react";

const sectionTitleClass = "text-base font-bold uppercase tracking-wide mb-1 pb-1 border-b border-gray-300";

const TemplateTwo = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <div className="resume-section p-4 bg-white font-sans text-black max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold tracking-tight mb-2">{data.personal_info?.full_name}</h1>
        <div className="flex flex-wrap justify-center gap-1 text-[14px] text-gray-700">
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.email && (
            <a href={`mailto:${data.personal_info.email}`} className="hover:underline text-blue-600">
              {data.personal_info.email}
            </a>
          )}
          {data.personal_info?.linkedin && (
            <a href={data.personal_info.linkedin} className="hover:underline text-blue-600">
              LinkedIn
            </a>
          )}
          {data.personal_info?.github && (
            <a href={data.personal_info.github} className="hover:underline text-blue-600">
              GitHub
            </a>
          )}
          {data.personal_info?.website && (
            <a href={data.personal_info.website} className="hover:underline text-blue-600">
              Portfolio
            </a>
          )}
        </div>
      </div>

      <hr className="border-gray-300 mb-2" />

      {/* Summary */}
      {data.professional_summary && (
        <section className="mb-2">
          <h2 className={sectionTitleClass}>Summary</h2>
          <p className="text-[12px] text-gray-800 leading-tight">{data.professional_summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-2">
          <h2 className={sectionTitleClass}>Experience</h2>
          <div className="space-y-2">
            {data.experience.map((exp, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[12px] pb-2 text-gray-800">{exp.position}</h3>
                    <p className="italic text-[14px] pb-2 text-gray-600">{exp.company}</p>
                  </div>
                  <div className="text-[12px] text-right text-gray-600">
                    <p className="italic">
                      {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </p>
                    {exp.location && <p className="text-[12px]">{exp.location}</p>}
                  </div>
                </div>
                <ul className=" mt-0.25 text-[14px] text-gray-700">
                  {exp.description?.split("\n").map((line, i) => (
                    <li key={i} className="pb-1">{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-2">
          <h2 className={sectionTitleClass}>Projects</h2>
          <div className="space-y-2">
            {data.project.map((proj, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-[12px] text-gray-800">{proj.name}</h3>
                </div>
                <p className="text-[14px] pb-2 text-gray-700 ">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-2">
          <h2 className={sectionTitleClass}>Education</h2>
          <div className="space-y-1">
            {data.education.map((edu, idx) => (
              <div key={idx} className="space-y-0.25">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[12px] pb-2 text-gray-800">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <p className="italic text-[12px] pb-2 text-gray-600">
                    {formatDate(edu.graduation_date)}
                  </p>
                </div>
                <p className="italic text-[14px] text-gray-700">{edu.institution}</p>
                {edu.gpa && (
                  <p className="text-[14px]">
                    <strong>GPA:</strong> {edu.gpa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-2">
          <h2 className={sectionTitleClass}>Skills</h2>
          <ul className="text-[14px] text-gray-800 flex flex-wrap gap-1">
            {data.skills.map((skill, idx) => (
              <li key={idx} className="w-fit pl-2">{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default TemplateTwo;