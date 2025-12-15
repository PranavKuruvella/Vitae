import { Plus, Sparkles, X } from "lucide-react";
import React, { useState } from "react";

const SkillForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (indextoRemove) => {
    onChange(data.filter((_, index) => index !== indextoRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          Skills
        </h3>
        <p className="text-sm text-gray-500">Add your Techinical Skills</p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter a Skill (e.g., Java,Python)"
          className="flex-1 px-3 py-2 text-sm"
        />
        <button
          onClick={addSkill}
          disabled={!newSkill.trim()}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="size-4" /> Add
        </button>
      </div>


      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {
            data.map((skill,index)=>(
              <span className="flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md text-sm italic" key={index}>
                {skill}
                <button
                  onClick={() => removeSkill(index)}
                  className="ml-0.5 hover:bg-indigo-200 rounded-full transition-all"
                >
                  <X className="size-4" />
                </button> 
              </span>
            ))
          }
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300 "/>
          <p>No Skills Added</p>
          <p className="text-sm">Add your Technical Skills Above</p>
        </div>
      )}


        <p className="text-sm text-gray-600 max-w-4/5 mx-auto text-center pt-5">
          <strong>Note:</strong>Add 5-8 relevant skills.Include majorly the Technical Skills ( programming languages, tools ) !</p>

    </div>
  );
};

export default SkillForm;
