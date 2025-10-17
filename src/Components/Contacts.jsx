import { CometCard } from "@/Components/ui/comet-card.jsx";

export default function Contacts() {
  const team = [
    {
      name: "Atharva Ghuge",
      role: "Web Developer",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGTemTUQ1kPrg/profile-displayphoto-shrink_400_400/B4DZRBB9ydGUAk-/0/1736257822823?e=1762387200&v=beta&t=i8qqZEPiSlDVTBKqXX8CjvDig23XOxbpwtEOiqowkL8",
      linkedin: "https://www.linkedin.com/in/atharvaisop",
    },
    {
      name: "Parth Bhanushali",
      role: "Web Developer",
      image:
        "https://avatars.githubusercontent.com/u/174084408?v=4",
      linkedin: "https://www.linkedin.com/in/parth-bhanushali-b494072a7",
    },
    {
      name: "Harsh Gahankar",
      role: "UI/UX Designer",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQEN3jhz1VFqEQ/profile-displayphoto-shrink_400_400/B4EZVCQGgaGgAg-/0/1740573274755?e=1762387200&v=beta&t=4SQMnFRWis0KShqRZMEuDQxmHuN7uJRlWsnBq2Ssg-k",
      linkedin: "https://www.linkedin.com/in/harsh-gahankar-030814343",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10">
          Meet Our <span className="text-green-500">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {team.map((member, index) => (
            <CometCard key={index}>
              <div
                className="flex w-80 flex-col items-stretch rounded-[16px] bg-[#1F2121] p-2 md:p-4 text-white"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt={`${member.name} profile`}
                      src={member.image}
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-3 flex flex-col items-center justify-between p-3 font-mono text-white">
                  <div className="text-sm font-bold">{member.name}</div>
                  <div className="text-xs text-gray-300 opacity-70">{member.role}</div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600 hover:bg-green-500 transition px-3 py-1 text-xs font-semibold text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 
                      5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
                      19h-3v-10h3v10zm-1.5-11.4c-.97 
                      0-1.75-.79-1.75-1.75s.78-1.75 
                      1.75-1.75 1.75.79 
                      1.75 1.75-.78 1.75-1.75 1.75zm13.5 
                      11.4h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                      0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 
                      1.37-1.54 2.82-1.54 3.01 0 3.57 
                      1.98 3.57 4.56v5.62z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}
