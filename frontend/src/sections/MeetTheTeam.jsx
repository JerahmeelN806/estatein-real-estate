import { team } from "../data/team"

function MeetTheTeam() {
  return (
    <section className="px-6 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-purple-500 text-sm mb-3">
        <span>✦</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-3">Meet the Estatein Team</h2>
      <p className="text-gray-400 text-sm max-w-xl mb-8">
        At Estatein, our success is driven by the dedication and expertise of our team.
        Get to know the people behind our mission to make your real estate dreams a reality.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {team.map((member) => (
          <div key={member.name} className="bg-[#151517] rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs">
                𝕏
              </div>
            </div>
            <div className="pt-6 pb-4 px-3 text-center">
              <h3 className="font-semibold text-sm">{member.name}</h3>
              <p className="text-gray-500 text-xs mb-4">{member.role}</p>
              <div className="flex items-center justify-between bg-[#0d0d0f] rounded-full pl-3 pr-1.5 py-1.5">
                <span className="text-xs text-gray-300">Say Hello 👋</span>
                <button className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                  ➤
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MeetTheTeam