import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, FileText, FolderIcon, GraduationCap, Sparkles, User } from "lucide-react";
import PersonalInfoForm from "../components/PersonalInfoForm.jsx";

const ResumeBuilder = () => {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState({ //resume details
    _id: "",
    title: "",
    personal_info: {},
    professinal_summary: {},
    experience: [],
    education: [],
    projects: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });

  const loadExistingResume = async () => { //db fetch to get the resume details if present
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      setResumeData(resume);
      document.title = resume.title;
    }
  };

  const [activeSectionIndex, setActiveSectionIndex] = useState(0) //progress bar kosam
  const [remove, setRemove] = useState(false)


  const sections = [ //different sections of the resume
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles },
  ]

  const activeSection = sections[activeSectionIndex]

  useEffect(() => { //page load avvagane edhi chey
    loadExistingResume();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all">
          <ArrowLeftIcon className="size-4" /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* left Panel */}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1 relative">
              {/* progress bar using activeSectionIndex */}
              <hr className="absolute top-0 left-0 w-full border-2 border-gray-200" />
              <hr className="absolute top-0 left-0 h-1 bg-linear-to-r from-indigo-500 to-indigo-600 border-none transition-all duration-2000"
                style={{
                  width: `${(activeSectionIndex * 100) / (sections.length - 1)}%`,
                }}
              />

              {/* section navigation */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                {/* left side */}
                <div>

                </div>
                {/* right side */}
                <div className="flex items-center">
                  <button
                    //prevIndex is a inbuild method in useState for updating the state
                    onClick={() => setActiveSectionIndex((prevIndex) => Math.max(0, prevIndex - 1))}
                    disabled={activeSectionIndex === 0}
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === 0 && "opacity-50"}`}
                  >
                    <ChevronLeft className="size-4" /> Previous
                  </button>
                  <button
                    onClick={() => setActiveSectionIndex((prevIndex) => Math.min(sections.length - 1, prevIndex + 1))}
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === sections.length - 1 && "opacity-50"}`} disabled={activeSectionIndex === sections.length - 1}>
                    Next <ChevronRight className="size-4" />
                  </button>
                </div>

              </div>

              {/* form content */}
              <div className="space-y-6">
                {/* Render Personal Info Form only when active section is "personal" */}
                {activeSection.id === "personal" && (
                  <PersonalInfoForm
                    data={resumeData.personal_info} // Pass only personal info data
                    onChange={(data) => setResumeData(prev => ({ ...prev, personal_info: data }))} // Update only personal_info in main state
                    removeBackground={remove}
                    setRemoveBackground={setRemove}
                  />
                )}
              </div>
            </div>
          </div>

          {/* right panel -- Preview */}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
