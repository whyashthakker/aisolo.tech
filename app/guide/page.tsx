"use client";

import Navbar from "../components/Navbar";

export default function Guide() {
  const currentYear = new Date().getFullYear();
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style jsx global>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            font-size: 10px;
            line-height: 1.2;
          }
          .print-hidden {
            display: none !important;
          }
          .print-container {
            max-width: none;
            margin: 0;
            padding: 15mm;
            background: white;
            box-shadow: none;
          }
          .print-title {
            font-size: 18px;
            margin-bottom: 8px;
          }
          .print-article {
            margin-bottom: 8px;
            page-break-inside: avoid;
          }
          .print-article h2 {
            font-size: 11px;
            margin-bottom: 3px;
          }
          .print-article p {
            font-size: 9px;
            line-height: 1.1;
            margin-bottom: 3px;
          }
          .print-intro {
            margin-bottom: 12px;
            padding: 8px;
            font-size: 9px;
          }
          .print-phrases {
            margin: 8px 0;
            padding: 8px;
            font-size: 8px;
          }
          .print-final {
            margin-top: 12px;
            padding: 10px;
            font-size: 8px;
          }
        }
      `}</style>
      <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <div className="print-hidden">
        <Navbar />
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-end mb-4 print:hidden">
          <button 
            onClick={handlePrint}
            className="bg-[#ff6600] text-white px-4 py-2 rounded text-xs hover:bg-orange-700 transition-colors"
          >
            Print Guide
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg print-container">
          <div className="text-center mb-8 border-b-2 border-[#ff6600] pb-6">
            <h1 className="text-3xl font-bold text-[#2c3e50] mb-4 tracking-wide print-title">
              The AISOLO Guide<br />to Not Panicking
            </h1>
            <div className="text-xl font-bold text-[#e74c3c] mb-6 italic">
              DON'T PANIC
            </div>
            <div className="text-base text-gray-600">
              ({currentYear} Edition - For Our Small But Mighty Squad)
            </div>
            <div className="text-sm text-gray-500 mt-4">
              AISOLO Technologies Pvt. Ltd.
            </div>
          </div>

          <div className="bg-[#ecf0f1] p-5 mb-8 border-l-4 border-[#ff6600] italic text-sm text-gray-800 print-intro">
            <p className="mb-3 text-gray-700">
              <em>"The story so far: In 2023, AISOLO was created with one simple goal - quit corporate and build a startup that's actually fun. This has made a lot of people very happy and been widely regarded as a good move."</em>
            </p>
            
            <p className="mb-3 text-gray-800">
              Welcome back, weary traveler, or welcome aboard, brave new recruit. You've found yourself at AISOLO Technologies, a peculiar place where AI meets hustle, enterprise deals meet midnight deployments, and where "bootstrapped" isn't just a funding strategy but a way of life. We've taught 120K+ students that AI won't steal their lunch money, and somehow convinced ourselves this is all perfectly normal.
            </p>
            
            <p className="text-gray-800">
              This guide exists to help you navigate the occasionally improbable reality of working here without losing your mind, your sanity, or your sense of humor. Yes, we're still living that "quit corporate, build fun stuff" dream from 2023, and against all reasonable expectations, it's working.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 1: Work Hard, Rest Hard</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Not a sweatshop, not a resort. We ship things that matter. Sometimes weekends = weekdays. You're not a machine (even our AI needs downtime).
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 2: Own Your Work</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                When things break at 2 AM (they will), don't wait for someone else. Own it. Fix it. We respect ownership &gt; perfection.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 3: Track & Share Your Impact</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Document what you build across our various products and experiments. Solved something clever? Share it. Stuck? Share that too. Invisible work = no work.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 4: Communicate & Listen (Small Team, Big Impact)</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Discord isn't decoration. Share updates, blockers, wins. Listen. Read threads. In a small team, information asymmetry kills momentum faster than any bug. When someone says "FYI," it's actually for your information, not just politeness.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 5: Be Honest</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                No corporate BS. No fake deadlines. Don't say "tomorrow" when you mean "3 days." Honesty saves time, builds trust, prevents chaos.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 6: Have Fun & Don't Panic</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                We build cool stuff people actually use. Enjoy the ride. Code rewrites, campaigns adjust, deals renegotiate - burnout is harder to debug.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 7: It's Better to Walk Away Than Slowly Burn Out</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Harsh truth: if you're miserable, leave. Small team = your vibes affect everything. Burned out you hurts everyone. Be an adult. Make the right choice. Nobody wins when you're phoning it in.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 8: Don't Waste Time</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Time ≠ renewable resource. Don't spend 3 hours on a 20-minute fix (just ask for help). Skip meetings that should be messages. Don't overthink details when main work isn't done. Move the needle.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 9: Avoid Gossip & Office Politics</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Too small for drama. Channel energy → ship features, create campaigns, learn stuff.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 10: Think Before You Commit</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Before committing: know what you're signing up for. Before deploying: check twice (the universe loves irony). Before promising clients: verify it's actually possible. Recklessness ≠ courage. It's just terrible risk management disguised as enthusiasm.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 11: Speak Your Mind (But Read the Room)</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Good ideas come from everywhere (even from junior developers at 3 AM). Challenge assumptions, propose improvements. But when a decision's made, stop debating the color of the bike shed and execute.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 12: Celebrate Each Other</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ship feature? Close deal? Kill bug? Celebrate! We're a small team competing against companies with 50x our resources and 100x our bureaucracy. David vs Goliath, except David codes and Goliath attends meetings about meetings.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 13: Respect All Customers</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Small subscription or massive enterprise deal - treat every customer like they're the reason our servers stay on. Because they literally are. They keep the lights on and our imposter syndrome at bay.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 14: Stay Constructive, Not Negative</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Things will go wrong with the reliability of gravity. Servers crash, campaigns flop, clients want impossible timelines. This isn't a bug - it's startup life's core feature. Stay positive (or at least amusingly cynical). Complaining without solutions is like debugging without logs.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 15: Be Respectful to Everyone</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Be professional. Respect boundaries, identities, dignity. Humans of all varieties work here. Treat them like the sentient beings they (probably) are. No shaming, no nonsense, no being a jerk. The universe has enough entropy already.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 16: Stay Curious</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Migrations break things. Costs spike. Competitors seem to have infinite features (spoiler: they don't). Stay curious, not defeated. "How do we solve this?" &gt; "This is impossible." The universe rarely accepts "impossible" as a valid answer.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 17: Your Laptop is Not Immortal</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                That MacBook/ThinkPad is your lifeline to our digital empire. Treat it like the expensive, fragile piece of aluminum and silicon it is. No coffee near keyboards (the universe has a sick sense of timing). Backup everything. Use cloud storage. When it inevitably breaks, don't panic - just tell us immediately so we can fix/replace it without the world ending.
              </p>
            </div>

            <div className="border-l-4 border-[#ff6600] pl-4 print-article">
              <h2 className="text-lg font-bold text-[#ff6600] mb-2">Article 18: The Small Team Rule</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                We're not Google. We're a small team building products used by thousands. Your mood affects a significant chunk of the entire company. Your laptop breaking affects a meaningful portion of our infrastructure knowledge. Your vacation affects our collective sanity. Act accordingly. Also, remember everyone's birthday - it's not that many dates.
              </p>
            </div>

            <div className="mt-8 bg-[#fff9e6] p-5 border-l-4 border-[#f39c12] print-phrases">
              <h3 className="text-lg font-bold text-[#ff6600] mb-4">Useful Phrases for Survival</h3>
              <div className="space-y-2 text-sm">
                <p><strong className="text-[#d35400]">"I need help with this"</strong> = Better than failing silently</p>
                <p><strong className="text-[#d35400]">"This will take longer than expected"</strong> = Honesty, appreciated early</p>
                <p><strong className="text-[#d35400]">"I shipped it"</strong> = Music to everyone's ears</p>
                <p><strong className="text-[#d35400]">"Let me check"</strong> = Better than guessing</p>
                <p><strong className="text-[#d35400]">"DON'T PANIC"</strong> = Always applicable</p>
              </div>
            </div>

            <div className="mt-6 bg-[#e8f8f5] p-5 border-l-4 border-[#16a085] print-phrases">
              <h3 className="text-lg font-bold text-[#ff6600] mb-4">Things to Always Remember</h3>
              <p className="text-sm text-gray-700">
                Your sense of humor. A growth mindset. The ability to find answers. Basic respect for your colleagues. Adaptability when plans change (and they will).
              </p>
            </div>

            <div className="mt-8 bg-[#f8f9fa] p-5 border-l-4 border-[#3498db] text-sm">
              <h3 className="text-lg font-bold text-[#ff6600] mb-3">What We're Building (The Good Stuff)</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong className="text-[#2c3e50]">infloq.com</strong> - Influencer CMS for enterprises doing research (because someone needs to organize this chaos)</p>
                <p><strong className="text-[#2c3e50]">olly.social</strong> - Chrome extension beloved by 25K+ users who want AI to handle their social replies</p>
                <p><strong className="text-[#2c3e50]">bgblur.com</strong> - Privacy-first model training (keeping your data yours, imagine that)</p>
                <p><strong className="text-[#2c3e50]">Plus our edtech empire</strong> - Teaching the world that AI won't steal their lunch money, just make better sandwiches</p>
              </div>
            </div>

            <div className="mt-8 bg-[#f0f3f4] p-6 border-2 border-[#95a5a6] italic print-final">
              <div className="text-center text-lg text-gray-600 mb-4">
                "So long, and thanks for all the code."
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  AISOLO isn't perfect. We're figuring things out with the confidence of someone who read half a tutorial and the determination of someone who has rent to pay. We pivot when needed, ship when possible, and occasionally wonder if we've built something brilliant or just beautifully chaotic.
                </p>
                
                <p>
                  If you work hard, own your stuff, treat humans like humans, and remember not to panic when the universe inevitably tests our debugging skills, you'll fit right in.
                </p>
                
                <p>
                  Welcome to the improbability drive that is AISOLO. Now let's build something that doesn't crash on Tuesdays.
                </p>
              </div>
              
              <div className="text-right mt-6 font-bold text-[#2c3e50]">
                — Yash Thakker, Founder
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#bdc3c7] text-xs text-gray-600">
                <em>P.S. If you're still reading this instead of getting to work, you're already behind. But at least you're informed. Now go forth and don't panic.</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}