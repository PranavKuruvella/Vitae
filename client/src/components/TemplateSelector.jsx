import { Check, Layout } from "lucide-react";
import React, { useState } from "react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isopen, setIsopen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview: "A neat, modern template with a clean and professional look",
    },
    {
      id: "latex",
      name: "Academic",
      preview:
        "A traditional, academic-style template perfect for SDE and other Software roles",
    },
    {
      id: "template-two",
      name: "Professional",
      preview:
        "A streamlined academic-format template built for modern software role",
    },
    {
      id: "modern",
      name: "Modern",
      preview: "A sleek, contemporary design focusing on readability and style",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview:
        "A clean, distraction-free layout that puts your content front and center",
    },
    {
      id: "minimal-image",
      name: "Minimal with Image",
      preview:
        "A minimal layout with a prominent profile picture for a personal touch",
    },
  ];
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 tp to-blue-100 ring-blue-100 hover:ring transition-all px-3 py-2 rounded-lg"
        onClick={() => setIsopen(!isopen)}
      >
        <Layout size={14} /> <span className="max-sm:hidden">Template</span>
      </button>

      {isopen && (
        <div className="absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsopen(false);
              }}
              className={`relative p-3 border rounded-md cursor-pointer transition-all ${template.id === selectedTemplate
                ? "border-blue-400 bg-blue-100"
                : "border-gray-300 hover:border-gray-300 hover:bg-gray-100"
                }`}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center ring-2 ring-white">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <h4 className="font-medium text-gray-800">{template.name}</h4>
                <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-gray-500 italic">
                  {template.preview}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
