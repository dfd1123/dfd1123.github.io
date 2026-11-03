---
title: We can't build a new UI for every robot and every customer
summary: Every company that bought our robots got its own custom-built screens, and that kept bothering me. I proposed bringing our robots together with a slide deck I paid for out of pocket, and the room was lukewarm. Plus, why I chose the web as the face of robot software.
---
Every company that bought our robots wanted a different screen.

That's not strange. The same robot gets used in different places, in different ways, for different reasons. What bothered me was what came next. If a customer wanted a particular screen, the web team built it for them from scratch. That was the direction the company had chosen.

I was on that web team.

## Same company, different clocks

I joined Rainbow Robotics in March 2025, on the web development team of the business unit that works on quadruped and mobile robots. The job was clear: build the UI these robots needed to become commercial products.

The company had been selling collaborative robot arms commercially for seven or eight years. The mobile robots were a different story — they had only just started to sell. The robots existed. The software experience around them was still being built.

This was before AI coding agents got as good as they are now. You couldn't hand a whole web interface to an AI. People had to build the screens.

## The better the robots sold, the heavier the team got

I understood the company's position. Giving customers what they ask for matters.

But in that model, every new customer meant more screens for us to build. The better our robots sold, the heavier — not just busier — the web team became. It felt inefficient to me.

So I tried asking a different question.

> Not "How do we build this customer's screen faster?" but "Could customers build the screen that fits them themselves?"

Custom solutions are normally what system-integration (SI) teams do. What if they could take our robots' APIs and communication interfaces and build much faster? One step further: what if the companies that bought our robots could customize and develop their own UI?

The company would spend less, and customers would get screens that fit their work exactly.

The catch was that "our robots" wasn't one robot.

## Starting over with every new robot

Rainbow Robotics has a lot of robot products. And every time a new one came out, the same work started from scratch: build the UI again, design the SDK again, write the external documentation again.

If we told customers "build it yourself" in that state, they'd have to learn a different approach for every robot. Before anyone could build their own thing, **our robots had to be tied together into one unified system.**

<figure class="diagram"><svg viewBox="0 0 760 420" role="img" aria-label="Integrated software as the base, with only the screens you need on top" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#65716b"/></marker></defs><text x="190" y="30" font-size="15" fill="#14201e" text-anchor="middle" font-weight="700" font-family="inherit">Before</text><text x="570" y="30" font-size="15" fill="#14201e" text-anchor="middle" font-weight="700" font-family="inherit">The proposal</text><line x1="380" y1="15" x2="380" y2="405" stroke="#c3cabf" stroke-dasharray="3 5"/><rect x="20" y="55" width="90" height="50" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="65.0" y="84.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Robot A</text><rect x="125" y="63" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="158.0" y="84.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">UI</text><rect x="200" y="63" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="233.0" y="84.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SDK</text><rect x="275" y="63" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="308.0" y="84.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Docs</text><rect x="20" y="125" width="90" height="50" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="65.0" y="154.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Robot B</text><rect x="125" y="133" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="158.0" y="154.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">UI</text><rect x="200" y="133" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="233.0" y="154.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SDK</text><rect x="275" y="133" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="308.0" y="154.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Docs</text><rect x="20" y="195" width="90" height="50" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="65.0" y="224.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Robot C</text><rect x="125" y="203" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="158.0" y="224.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">UI</text><rect x="200" y="203" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="233.0" y="224.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SDK</text><rect x="275" y="203" width="66" height="34" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="308.0" y="224.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Docs</text><rect x="20" y="280" width="340" height="44" rx="10" fill="#ff7454" stroke="#ff7454" stroke-width="1.2"/><text x="190.0" y="306.55" font-size="13" fill="#ffffff" text-anchor="middle" font-weight="700" font-family="inherit">Web team builds new screens per customer</text><rect x="30" y="355" width="100" height="40" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="80.0" y="379.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Customer 1</text><line x1="80" y1="353" x2="80" y2="328" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="142" y="355" width="100" height="40" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="192.0" y="379.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Customer 2</text><line x1="192" y1="353" x2="192" y2="328" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="254" y="355" width="100" height="40" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2"/><text x="304.0" y="379.025" font-size="11.5" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Customer 3</text><line x1="304" y1="353" x2="304" y2="328" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><text x="190" y="265" font-size="11.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">Every new robot: UI, SDK, docs from scratch</text><rect x="410" y="52" width="160" height="52" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2" stroke-dasharray="5 4"/><text x="490.0" y="75.0" font-size="12" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">SI teams</text><text x="490.0" y="92.0" font-size="10.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">custom screens</text><rect x="580" y="52" width="160" height="52" rx="10" fill="#fbfbf7" stroke="#c3cabf" stroke-width="1.2" stroke-dasharray="5 4"/><text x="660.0" y="75.0" font-size="12" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Customers</text><text x="660.0" y="92.0" font-size="10.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">their own screens</text><text x="575" y="128" font-size="11" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">Add only what you need on top</text><rect x="400" y="140" width="350" height="128" rx="14" fill="#101b1a"/><text x="575" y="166" font-size="15" fill="#d8f36a" text-anchor="middle" font-weight="700" font-family="inherit">Integrated software</text><rect x="412" y="180" width="150" height="72" rx="10" fill="#1c2b28" stroke="#3b4b45" stroke-width="1.2"/><text x="487.0" y="213.0" font-size="12.5" fill="#ffffff" text-anchor="middle" font-weight="600" font-family="inherit">Base UI</text><text x="487.0" y="230.0" font-size="10.5" fill="#b9c4bb" text-anchor="middle" font-weight="400" font-family="inherit">for every robot</text><rect x="572" y="180" width="80" height="72" rx="10" fill="#1c2b28" stroke="#3b4b45" stroke-width="1.2"/><text x="612.0" y="220.375" font-size="12.5" fill="#ffffff" text-anchor="middle" font-weight="600" font-family="inherit">SDK</text><rect x="662" y="180" width="80" height="72" rx="10" fill="#1c2b28" stroke="#3b4b45" stroke-width="1.2"/><text x="702.0" y="220.375" font-size="12.5" fill="#ffffff" text-anchor="middle" font-weight="600" font-family="inherit">Docs</text><rect x="410" y="318" width="100" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="460.0" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Robot A</text><line x1="460" y1="316" x2="460" y2="272" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="525" y="318" width="100" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="575.0" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Robot B</text><line x1="575" y1="316" x2="575" y2="272" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><rect x="640" y="318" width="100" height="44" rx="10" fill="#eef0e8" stroke="#c3cabf" stroke-width="1.2"/><text x="690.0" y="344.55" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Robot C</text><line x1="690" y1="316" x2="690" y2="272" stroke="#65716b" stroke-width="1.4" marker-end="url(#ah)"/><text x="575" y="392" font-size="11.5" fill="#65716b" text-anchor="middle" font-weight="400" font-family="inherit">More robots, still one foundation</text></svg><figcaption>Integrated software as the base, with only the screens you need on top</figcaption></figure>


So I decided to propose it.

## The 300,000-won slide deck

I asked directly for a chance to present at an executive meeting. My plan was to propose integrated software that would fold all that repeated, tangled UI, SDK, and documentation work into one.

I got the slot. The audience was the executives, and I couldn't stand in front of them with a thrown-together deck. So I paid 300,000 won (a little over 200 US dollars) out of my own pocket to have a designer who used to work for me at my old company design the presentation.

Honestly, paying out of pocket when the work needs it isn't new for me. But it was a first at this company, and spending 300,000 won on it was a first, period. It still makes me wince a little.


Then I gave the presentation.

The response was mostly lukewarm. Can you really integrate all of this? Is that even possible? That was the feeling in the room.

## A month later

About a month went by. Then the CEO called a meeting and gave the order to form a software task force.

I don't know whether my presentation had anything to do with it. The CEO seems to have been thinking about strengthening our software capabilities for a while. Either way, what I'd been going on about by myself became real work from that point on.

That's where this series really begins.

## Why the web, of all things

From the start, I pushed for the web.

My background is a web agency business, outsourced platform development, and IT development consulting for startups. Over eleven years of planning, designing, and building commercial software, I heard one request more times than I can count: native is better and faster, so it has to be a native app.

Native isn't bad. But most people had settled on the answer before asking what actually fit their system.

Here's what I thought mattered most in a robot system:

> **Every robot is its own independent server.**

Each robot carries its own version of the software. And people need to reach that robot easily from anything — a PC, a phone, whatever's at hand. An interface that opens anywhere, regardless of OS. That's the web.

There were more reasons:

- The web already has an enormous ecosystem and countless open libraries.
- I believed web development would increasingly be taken over by AI. If so, putting the interface on the web would make it far easier to extend.
- And the web is light. Ridiculously light.

## "No web server," they said

Not everyone welcomed it.

When I suggested going with the web, one reaction was: wouldn't that mean putting a web server inside the robot? They didn't like the idea.

A while later, the same side was trying to hook up HTTP communication — and came to ask me whether you need a web server to talk over HTTP.

In the end, the very robot they'd objected to got a web server too. Not that they gave up their stubbornness — they put in one they'd whipped up with AI themselves. All I could do was laugh.

<figure class="diagram"><svg viewBox="0 0 760 300" role="img" aria-label="A rough reconstruction of what actually happened" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#65716b"/></marker></defs><rect x="10" y="10" width="365" height="250" rx="12" fill="#eef0e8" stroke="#14201e" stroke-width="1.6"/><text x="24" y="34" font-size="11" fill="#65716b" text-anchor="start" font-weight="500" font-family="DM Mono, monospace">BACK THEN</text><rect x="385" y="10" width="365" height="250" rx="12" fill="#eef0e8" stroke="#14201e" stroke-width="1.6"/><text x="399" y="34" font-size="11" fill="#65716b" text-anchor="start" font-weight="500" font-family="DM Mono, monospace">A WHILE LATER</text><rect x="30" y="46" width="325" height="70" rx="14" fill="#ffffff" stroke="#14201e" stroke-width="1.6"/><path d="M61,115 L70,150 L79,115" fill="#ffffff" stroke="#14201e" stroke-width="1.6" stroke-linejoin="round"/><line x1="62" y1="115.5" x2="78" y2="115.5" stroke="#ffffff" stroke-width="3"/><text x="192.5" y="72" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Put a web server inside the robot?</text><text x="192.5" y="92" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">Yeah, I&#x27;d rather not.</text><line x1="250" y1="173.0" x2="250" y2="159.0" stroke="#14201e" stroke-width="2"/><circle cx="250" cy="156.0" r="4.0" fill="#ff7454"/><rect x="215.0" y="173.0" width="70.0" height="54.0" rx="14.0" fill="#fbfbf7" stroke="#14201e" stroke-width="2"/><rect x="223.0" y="182.0" width="54.0" height="36.0" rx="9.0" fill="#101b1a"/><circle cx="237.0" cy="199.0" r="4.5" fill="#d8f36a"/><circle cx="263.0" cy="199.0" r="4.5" fill="#d8f36a"/><rect x="405" y="46" width="325" height="70" rx="14" fill="#ffffff" stroke="#14201e" stroke-width="1.6"/><path d="M436,115 L445,150 L454,115" fill="#ffffff" stroke="#14201e" stroke-width="1.6" stroke-linejoin="round"/><line x1="437" y1="115.5" x2="453" y2="115.5" stroke="#ffffff" stroke-width="3"/><text x="567.5" y="72" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">So, to talk over HTTP…</text><text x="567.5" y="92" font-size="13" fill="#14201e" text-anchor="middle" font-weight="500" font-family="inherit">do we need a web server?</text><line x1="625" y1="173.0" x2="625" y2="159.0" stroke="#14201e" stroke-width="2"/><circle cx="625" cy="156.0" r="4.0" fill="#ff7454"/><rect x="590.0" y="173.0" width="70.0" height="54.0" rx="14.0" fill="#fbfbf7" stroke="#14201e" stroke-width="2"/><rect x="598.0" y="182.0" width="54.0" height="36.0" rx="9.0" fill="#101b1a"/><line x1="606.0" y1="199.0" x2="618.0" y2="199.0" stroke="#d8f36a" stroke-width="3" stroke-linecap="round"/><line x1="632.0" y1="199.0" x2="644.0" y2="199.0" stroke="#d8f36a" stroke-width="3" stroke-linecap="round"/><text x="680" y="160" font-size="22" fill="#14201e" text-anchor="middle" font-weight="700" font-family="inherit">…</text><text x="380" y="288" font-size="13" fill="#14201e" text-anchor="middle" font-weight="700" font-family="inherit"></text></svg><figcaption>A rough reconstruction of what actually happened</figcaption></figure>


I decided not to fight every battle; fighting would only cost me. Luckily, more people inside the company than I expected felt we needed a web UI.

## The first robot on screen

The first robot I brought onto a web screen was a logistics serving robot.

A screen that drew the robot's map of the space as a point cloud, showed how it was currently driving, and let you change a few simple settings.

## How I'd decide now

When choosing a technology, the first question isn't "what do people say is better?" It's **"what does my system actually look like?"** And when requests keep coming in different shapes, don't keep fulfilling them one by one. Build the ground people can stand on to solve them themselves.

---

Truth is, before the task force existed, on March 13, 2025, I'd already made the first commit to a new repository. And from that day on, I split the code into several parts. If I'd been working alone, I wouldn't have. That's the next episode.
