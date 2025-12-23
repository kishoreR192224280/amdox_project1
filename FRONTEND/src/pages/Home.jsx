import { useState } from "react";
import useLanguage from "../data/uselanguage";
import PageLayout from "../layout/PageLayout";
import TrendingJobCard from "../components/trendingjobcard";
import { categories, highlightedJobs, dreamLocations, coolPlaces, careerTips, } from "../data/array";
export default function Home() {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleTrendingScroll = (e) => {
    const el = e.target;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const percent = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
    setScrollPercent(percent);
  };

  const {
    open,
    setOpen,
    language,
    setLanguage,
    languages,
  } = useLanguage();
  return (
    <div className="w-full min-h-screen">

      {/* Top Bar */}
      <div className="bg-teal-600 py-4">
        <div className="flex items-center justify-between px-6 md:px-10 text-white">

          {/* LEFT TEXT */}
          <div className="text-lg md:text-xl text-white ">
            Welcome to
            <span className="text-yellow-300 px-2 font-medium">AMDOX TECHNOLOGIES</span>
            job opportunities website
          </div>

          {/* LANGUAGE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 text-base md:text-lg hover:text-amber-300 transition"
            >
              <span>{languages.find(l => l.label === language)?.flag}</span>
              {language}
              <span
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""
                  }`}
              >
                ▾
              </span>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.label}
                    onClick={() => {
                      setLanguage(lang.label);
                      setOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-teal-100 transition"
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Sign up / Login Bar */}
      <div className="bg-white py-4 px-6 flex justify-end items-center gap-5 border-b">

        <button className="btn px-4 h-11 flex items-center gap-2 bg-white text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-amber-300 transition">
          <img
            src="image/signup.svg" alt="User" className="w-5 h-5 object-contain" />
          <span className="font-bold">Sign up</span>
        </button>


        <button className="btn px-4 h-11 flex items-center gap-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-700 hover:border-teal-700 hover:text-amber-300 transition active:scale-95">
          <img
            src="image/login.svg" alt="User" className="w-6 h-6 object-contain" />
          <i className="fa-solid fa-circle-check font-bold"></i> Log In
        </button>
        <div className="divider lg:divider-horizontal divider-warning"></div>
        <a className="cursor-pointer hover:underline text-teal-600">
          Post Job
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[75vh] flex items-start pt-20">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/image/HomeBackground.svg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay */}
        </div>

        {/* HERO CONTENT */}
        <div className=" flex flex-col items-center relative z-10 w-full mx-auto px-6">

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-widest text-white leading-tight py-3">
            Start Your <span className="text-amber-400">Dream Career.</span>
          </h1>

          {/* SUBTEXT (lighter gray like screenshot) */}
          <p className="mt-2 text-3xl md:text-2xl tracking-widest text-white">
            Unlock your potential with exciting career opportunities — start your journey here!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-20 mt-20">

            {/* Live Jobs */}
            <div className="flex items-center gap-4 transition-all duration-300 hover:scale-125 hover:border-teal-500">
              <div className="border-4 border-teal-600 rounded-lg w-20 h-20 rotate-45
                    flex items-center justify-center hover:bg-amber-100">
                <img src="/image/Livejob.svg" className="w-12 h-12 -rotate-45" />
              </div>

              <div className="text-left">
                <p className="text-2xl font-semibold text-white py-5">Live Jobs</p>
                <p className="text-2xl font-bold text-teal-600">600</p>
              </div>
            </div>

            {/* Companies */}
            <div className="flex items-center gap-4 transition-all duration-300 hover:scale-125 hover:border-teal-500">
              <div className="border-4 border-teal-600 rounded-lg w-20 h-20 rotate-45
                    flex items-center justify-center hover:bg-amber-100">
                <img src="/image/Building.svg" className="w-12 h-12 -rotate-45" />
              </div>

              <div className="text-left">
                <p className="text-2xl font-semibold text-white py-5">Companies</p>
                <p className="text-2xl font-bold text-teal-600">25+</p>
              </div>
            </div>

            {/* Candidates */}
            <div className="flex items-center gap-4 transition-all duration-300 hover:scale-125 hover:border-teal-500">
              <div className="border-4 border-teal-600 rounded-lg w-20 h-20 rotate-45
                    flex items-center justify-center hover:bg-amber-100">
                <img src="/image/search.svg" className="w-12 h-12 -rotate-45" />
              </div>

              <div className="text-left">
                <p className="text-2xl font-semibold text-white py-5">Candidates</p>
                <p className="text-2xl font-bold text-teal-600">700+</p>
              </div>
            </div>

            {/* New Jobs */}
            <div className="flex items-center gap-4 transition-all duration-300 hover:scale-125 hover:border-teal-500">
              <div className="border-4 border-teal-600 rounded-lg w-20 h-20 rotate-45
                    flex items-center justify-center transition-all duration-300 hover:bg-amber-100">
                <img src="/image/job.svg" className="w-12 h-12 -rotate-45" />
              </div>

              <div className="text-left">
                <p className="text-2xl font-semibold text-white py-5">New Jobs</p>
                <p className="text-2xl font-bold text-teal-600">20+</p>
              </div>
            </div>

          </div>


          {/* SEARCH BAR */}
          <div className="mt-27 bg-white rounded-2xl shadow-lg  w-7xl max-w-full mx-auto p-7 border-2 border-black">

            <div className="flex flex-col md:flex-row items-center gap-6">

              {/* Input 1 */}
              <div className="group flex items-center bg-gray-100 rounded-lg px-6 py-3 flex-1 border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-md focus-within:border-teal-500 focus-within:shadow-lg">
                <img src="/image/search.svg" className="w-6 h-6 opacity-50 transition-opacity duration-300 group-focus-within:opacity-80" />
                <input type="text" placeholder="Job title / Skills / Company" className="ml-4 bg-transparent outline-none text-gray-700 w-full placeholder-gray-500 transition-colors duration-300 focus:placeholder-gray-400" />
              </div>


              {/* Input 2 */}
              <div className="group flex items-center bg-gray-100 rounded-lg px-6 py-3 flex-1 border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-md focus-within:border-teal-500 focus-within:shadow-lg">
                <img src="/image/Location.svg" className="w-6 h-6 opacity-50 transition-opacity duration-300 group-focus-within:opacity-80" />
                <input type="text" placeholder="Enter Location" className="ml-3 bg-transparent outline-none text-gray-700 w-full placeholder-gray-500 transition-colors duration-300 focus:placeholder-gray-400" />
              </div>


              {/* Search Button */}
              <button className="bg-teal-500 text-white rounded-lg px-8 py-3 text-lg font-semibold transition-all duration-300 hover:bg-teal-600 hover:text-amber-300 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2">
                Search
              </button>

            </div>
          </div>
        </div>
      </section>


      {/* TRENDING CATEGORIES */}
      <section className="py-20 px-6 md:px-10">

        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Trending Jobs <span className="text-rose-600">Category</span>
            </h2>
            <p className="text-teal-600 mt-3 text-lg">
              Explore the Most In-Demand Jobs – Trending Opportunities Await!
            </p>
          </div>

          <button className="text-teal-600 font-medium flex items-center gap-1 hover:underline">
            Show more <span>•</span>
          </button>
        </div>

        {/* Horizontal Slider */}
        <div className="relative mt-12 overflow-x-hidden">

          {/* LEFT ARROW */}
          <button onClick={() => document.getElementById("trendingScroll").scrollBy({ left: -300, behavior: "smooth" })} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center border hover:bg-amber-500 transition z-30">
            <span className="text-2xl text-gray-600 hover:text-white">{'<'}</span>
          </button>

          {/* ONLY SCROLLABLE AREA */}
          <div id="trendingScroll" onScroll={handleTrendingScroll} className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth pb-4 px-2">
            {categories.map((cat, i) => (
              <TrendingJobCard key={i} img={cat.img} title={cat.title} count={cat.count} />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button onClick={() => document.getElementById("trendingScroll").scrollBy({ left: 300, behavior: "smooth" })} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center border hover:bg-amber-500 transition z-30">
            <span className="text-2xl text-gray-600 hover:text-white">{'>'}</span>
          </button>

          {/* SINGLE INDICATOR (NO SCROLL) */}
          <div className="flex justify-center mt-6 overflow-hidden">
            <div className="h-[3px] w-40 bg-gray-200 rounded-full">
              <div className="h-full bg-blue-400 rounded-full transition-all duration-300" style={{ width: `${scrollPercent}%` }}></div>
            </div>
          </div>

        </div>
      </section>
      {/* HOW WELL OPTION WORK */}
      <section className="w-full bg-teal-100 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-extrabold mb-20">
            <span className="text-black">How </span>
            <span className="text-amber-600">Well Option</span>
            <span className="text-black"> work</span>
          </h2>

          {/* STEPS ROW */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-20 md:gap-10">

            {/* STEP 1 */}
            <div className="flex flex-col items-center max-w-xs transition-transform duration-300 hover:scale-110 hover:text-2xl">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <img src="/image/pr.svg" className="w-12" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-black">Create account</h3>

              <p className="mt-2 text-sm text-amber-600 leading-relaxed">
                Sign up in just a few clicks and unlock<br /> endless job opportunities.
              </p>
            </div>

            {/* LEFT CURVED ARROW */}

            {/* STEP 2 — CENTER CARD */}
            <div className="bg-white rounded-3xl p-12 shadow-xl max-w-xs text-center z-10 transition-transform duration-300 hover:scale-110 hover:text-2xl">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto">
                <img src="/image/resume.svg" className="w-10 h-10" />
              </div>
              <div>
                <img src="/image/uparrow.svg" className=" hidden md:block absolute left-[13%] top-[10%] w-64 opacity-80-translate-y-1/2 " />
                <img src="/image/downarrow.svg" className="hidden md:block absolute right-[37%] top-[35%] w-64 opacity-80-translate-y-1/2" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-black">Upload CV/Resume</h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Upload your resume to let top employers<br /> discover you faster.
              </p>
            </div>

            {/* RIGHT CURVED ARROW */}
            <img src="/image/uparrow.svg" className=" hidden md:block absolute right-[11%] top-[10%] w-64 opacity-80-translate-y-1/2 transition-transform duration-300 hover:scale-110 " />
            {/* STEP 3 */}
            <div className="flex flex-col items-center max-w-xs transition-transform duration-300 hover:scale-110 hover:text-2xl">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <img src="/image/scope.svg" className="w-12" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-black">Find suitable job</h3>

              <p className="mt-2 text-sm text-amber-600 leading-relaxed">
                Browse and filter job listings to find the <br /> perfect match for your skills.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="flex flex-col items-center max-w-xs transition-transform duration-300 hover:scale-110 hover:text-2xl">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <img src="/image/apply.svg" className="w-12" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-black">Apply job</h3>

              <p className="mt-2 text-sm text-amber-600 leading-relaxed">
                Easily apply to jobs with one click and <br /> take the next step in your career.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Highlighted Jobs */}
      <section className="py-20 bg-[#E5E5E5] px-6 md:px-10">

        {/* TITLE ROW */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-black">
              Latest <span className="text-blue-600">Highlighted</span> Jobs
            </h2>
            <p className="text-gray-600 mt-2">
              Don't Miss Out! Check Out the Latest Highlighted Job Opportunities!!
            </p>
          </div>

          <button className="text-blue-600 font-medium hover:underline flex items-center gap-1">
            Show more <span>→</span>
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlightedJobs.map(job => (
            <div key={job.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-black">

              {/* TOP SECTION */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <img src={job.logo} className="w-14 h-14 object-contain" />
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-blue-600 font-semibold">{job.company}</p>
                  </div>
                </div>

                {/* Bookmark icon */}
                <button className="text-gray-400 hover:text-blue-600 text-2xl">
                  <i className="fa-regular fa-bookmark"></i>
                </button>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-y-2 mt-4 text-gray-700 text-sm">

                <p className="flex items-center gap-2">
                  <span>💰</span>{job.salary}
                </p>

                <p className="flex items-center gap-2">
                  <span>📍</span>{job.location}
                </p>

                <p className="flex items-center gap-2">
                  <span>👨‍💼</span>{job.experience}
                </p>

                <p className="flex items-center gap-2">
                  <span>📅</span>{job.date}
                </p>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 border"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Why <span className="text-blue-600">Choose</span> Us?
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-600 mt-4 text-lg">
            Unlock Your Career Potential with Well Option – Trusted Jobs, Top Companies, and Seamless Hiring!!
          </p>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">

            {/* CARD 1 */}
            <div className="bg-[#EFF6FF] border border-blue-300 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <img src="../image/verified.svg" className="w-20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Verified Job</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Browse with confidence—every job posting is vetted for authenticity.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#EFF6FF] border border-blue-300 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <img src="../image/easy-apply.svg" className="w-20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Easily Apply</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Apply for your dream job in just one click—quick and hassle-free!
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#EFF6FF] border border-blue-300 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <img src="../image/career-advice.svg" className="w-20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Career Advice</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Get expert career tips and guidance to level up your professional journey.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#EFF6FF] border border-blue-300 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
              <img src="../image/trusted-employee.svg" className="w-20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Trusted Employers</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Connect with reputable companies offering real opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 bg-[#E5E5E5]">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {dreamLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#DDE7F8] rounded-2xl border border-blue-400 shadow-lg p-5 hover:scale-[1.01] transition cursor-pointer"
            >
              {/* Image */}
              <img
                src={loc.img}
                alt={loc.alt}
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-black mt-4 flex items-center gap-2">
                <img src="../image/Location.svg" className="w-5" />
                {loc.city}, {loc.country}
              </h3>

              {/* Jobs Available */}
              <p className="mt-2 text-lg text-black font-semibold">
                Jobs Available: <span className="text-blue-700">{loc.jobs}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 md:px-10 bg-white">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto flex justify-between items-start mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-black">
              Cool Place <span className="text-blue-600">To Work</span>
            </h2>

            <p className="text-gray-700 mt-2 text-lg max-w-xl">
              Discover a Workplace Where Passion Meets Growth – Find Your Cool Place to Work!
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:underline">
            Show more <span className="text-xl">➜</span>
          </button>
        </div>

        {/* CARDS GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {coolPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-[#BED9FF] rounded-xl border border-blue-300 shadow-md p-6 hover:scale-[1.01] transition"
            >
              {/* TOP ROW */}
              <div className="flex items-center gap-4">
                <img src={place.logo} className="w-14 h-14 rounded-md object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{place.name}</h3>

                  {/* LOCATION */}
                  <p className="flex items-center gap-2 text-gray-700 text-sm">
                    <img src="../image/Location.svg" className="w-4" />
                    {place.locations}
                  </p>

                  {/* PEOPLE */}
                  <p className="flex items-center gap-2 text-gray-700 text-sm">
                    <img src="../image/people.svg" className="w-4" />
                    {place.people} People
                  </p>
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="flex justify-between items-center mt-6 border-t pt-4">
                <button className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
                  View details <span className="text-lg">➜</span>
                </button>
                <p className="text-gray-900 font-semibold text-sm">
                  Jobs: <span className="text-blue-700">{place.jobs}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Trusted User <span className="text-blue-600">Reviews</span>
          </h2>

          {/* SUBTITLE */}
          <p className="text-gray-600 mt-3 text-lg">
            Hear from Real Users – Genuine Reviews You Can Trust!
          </p>

          {/* REVIEW CARD */}
          <div className="bg-[#AED1FF] rounded-3xl px-10 py-12 mt-14 shadow-md">

            {/* USER IMAGE WITH VERIFIED ICON */}
            <div className="relative w-28 h-28 mx-auto">
              <img
                src="../image/user1.svg"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
              />

              {/* Verified Tick Badge */}
              <img
                src="../image/verifiedbadge.svg"
                className="w-8 h-8 absolute bottom-0 right-0"
              />
            </div>

            {/* REVIEW TEXT */}
            <p className="mt-8 text-gray-800 text-lg leading-relaxed max-w-3xl mx-auto">
              Well Option made my job search so easy! I found my dream job within days.
              The platform is user-friendly, and the verified job listings gave me complete
              confidence. Highly recommended!
            </p>

            {/* USER NAME */}
            <h4 className="font-bold text-lg mt-8 text-gray-900">Jhon Haward</h4>
            <p className="text-gray-700 text-sm">UI/UX Designer</p>
          </div>
        </div>
      </section>


      {/* Career Tips */}
      <section className="py-20 px-6 md:px-10 bg-white">
        {/* HEADER */}
        <div className="max-w-7xl mx-auto flex justify-between items-start mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-black">
              Quick <span className="text-blue-600">Career</span> Tips
            </h2>

            <p className="text-gray-700 mt-2 text-lg">
              Boost Your Career with Quick & Smart Tips – Stay Ahead in the Job Market!
            </p>
          </div>

          <button className="hidden md:flex items-center gap-2 text-blue-600 font-medium hover:underline">
            Show more <span className="text-xl">➜</span>
          </button>
        </div>

        {/* CARD GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-[#D7E6FF] rounded-xl border border-blue-300 shadow-md p-5 hover:scale-[1.01] transition cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={tip.image}
                className="w-full h-48 object-cover rounded-lg"
                alt="career tip"
              />

              {/* COMPANY ROW */}
              <div className="flex items-center gap-3 mt-4">
                <img src={tip.companyLogo} className="w-12 object-contain" />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-900">{tip.company}</p>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="flex items-center gap-1">
                      {tip.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <img src="/icons/clock.svg" className="w-4" />
                      {tip.read}
                    </span>
                  </div>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-bold text-xl text-gray-900 mt-4">{tip.title}</h3>

              {/* SHOW MORE */}
              <button className="mt-6 text-blue-600 text-sm flex items-center gap-1 hover:underline">
                Show More <span className="text-lg">➜</span>
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );

}
