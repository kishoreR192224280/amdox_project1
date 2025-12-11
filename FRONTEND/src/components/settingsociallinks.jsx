import { useState } from "react";

export default function SettingsSocialLinks() {
  const socialOptions = [
    { label: "Facebook", icon: "📘" },
    { label: "Twitter", icon: "🐦" },
    { label: "Instagram", icon: "📸" },
    { label: "Youtube", icon: "▶️" },
  ];

  const [links, setLinks] = useState([
    { type: "Facebook", url: "" },
    { type: "Twitter", url: "" },
    { type: "Instagram", url: "" },
    { type: "Youtube", url: "" },
  ]);

  const updateLink = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const addNewLink = () => {
    setLinks([...links, { type: "Facebook", url: "" }]);
  };

  return (
    <div className="w-full">

      {/* Page Title */}
      <h3 className="text-lg font-semibold mb-6">Social Links</h3>

      {/* SOCIAL LINK BLOCKS */}
      {links.map((item, index) => (
        <div key={index} className="mb-6">

          {/* Label */}
          <label className="text-sm text-gray-500">
            Social Link {index + 1}
          </label>

          {/* INPUT ROW */}
          <div className="grid grid-cols-12 gap-3 items-center mt-1">

            {/* Social Select */}
            <div className="col-span-3">
              <div className="relative">
                <select
                  value={item.type}
                  onChange={(e) => updateLink(index, "type", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-10 py-2 text-gray-700"
                >
                  {socialOptions.map((option, i) => (
                    <option key={i} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>

                {/* Icon in Select */}
                <span className="absolute left-3 top-[10px] text-gray-500 text-lg">
                  {socialOptions.find((o) => o.label === item.type)?.icon}
                </span>
              </div>
            </div>

            {/* URL Input */}
            <div className="col-span-8">
              <input
                type="text"
                placeholder="Profile link/url..."
                value={item.url}
                onChange={(e) => updateLink(index, "url", e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700"
              />
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeLink(index)}
              className="col-span-1 text-gray-400 hover:text-red-500 text-xl"
            >
              ✖
            </button>
          </div>
        </div>
      ))}

      {/* ADD NEW SOCIAL LINK BUTTON */}
      <div
        onClick={addNewLink}
        className="w-full bg-gray-50 border border-gray-300 py-3 rounded-lg flex items-center justify-center 
                   text-gray-600 cursor-pointer hover:bg-gray-100 transition"
      >
        ⊕ Add New Social Link
      </div>

      {/* SAVE BUTTON */}
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );
}
