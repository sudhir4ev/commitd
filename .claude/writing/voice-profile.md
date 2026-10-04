# Voice Profile

The written definition of how Sudhir writes. Both the sparring-partner skill and the voice-reviewer agent read this
file. It is the anchor for "does this reflect who I am."

Derived from: `project-headless-aem.mdx`, `project-dls.mdx`, `project-vps-security.mdx`, `about-frontend-dev.mdx`,
`working-principles.mdx`. Refine it as the voice sharpens.

---

## The core stance

Write like an engineer explaining a decision to another engineer who will have to live with it. Not a vendor, not a
conference speaker, not a blogger chasing claps. The reader is smart, busy, and skeptical of anything that sounds too
clean.

Every piece has a thesis and defends it. State the strong claim, then earn it with evidence. No throat-clearing intros,
no "in today's fast-paced world."

---

## Signature moves (the fingerprint)

1. **Name the real problem behind the stated problem.** The recurring reframe.
   - "This is not a tooling problem. It is an ownership problem dressed up as a tooling problem."
   - "This is a product/process conversation, not purely an engineering one."
   - "The hardest integration problem was adoption - not building the library, many have been there and done that"

2. **Undercut "it works."** Suspicion of surface success is a theme.
   - "The original setup worked. That was part of the problem."

3. **Call out the unglamorous but critical.** The "load-bearing" motif.
   - "This is unglamorous work. It is also load-bearing."
   - "The fixed IP is load-bearing."

4. **Concrete numbers, never vague quantifiers.** 3x, 8 seconds, 10 minutes, 30-40%, 5+ teams, `172.20.0.100`. If a
   claim can carry a number, it does.

5. **Honest limits section, always.** Every piece ends by admitting what it does not cover or what you would do
   differently. This is the trust mechanism.
   - "What This Doesn't Cover" / "What I'd do differently" / "These are real gaps, not theoretical ones."

6. **Evidence over assertion.** "I verified this by testing from the network, not just reviewing config." "Measurement
   comes before optimization."

7. **Teach through questions, not lectures.** "What happens here if the API returns a 429?"

8. **Dry, sparing wit.** One well-placed aside, not a comedy routine.
   - "aligning expectations before it matters - at 11:58 PM on a Friday night."

---

## Sentence craft

- **Rhythm: short punch, then unpack.** A blunt 3-6 word sentence sets the stance, a longer one explains. "The original
  setup worked. That was part of the problem."
- **Active voice, named actor.** "The frontend team had no independent deploy path," not "an independent deploy path was
  lacking."
- **Bold the load-bearing phrase**, sparingly, when a sentence carries the argument.
- **Dashes and parentheses for asides**, used freely (this is a natural part of the voice).
- **Second person for the reader's experience, first person for what you did/decided.**

---

## Vocabulary and register

- Real tool and concept names, no rounding off: JCR, HTL, DOCKER-USER chain, ISR, codemods, tree-shaking,
  contract-first.
- Plain verbs: "pull AEM out of the rendering path," "swallow this cost," "broke that coupling."
- Comfortable admitting struggle: "a habit I have struggled with," "Some authors adapted. Others found the indirection
  disorienting and pushed back - reasonably so."

---

## Anti-patterns (the AI-slop tells to hunt and kill)

If the draft does any of these, it has drifted from the voice:

- **Hype / marketing filler:** seamless, robust, cutting-edge, leverage, unlock, power up, game-changer, "in today's
  world," "at its core," "the world of X."
- **Hedging with no stance.** If a sentence could be deleted without losing a claim, delete it.
- **Feature lists with no tradeoff.** Every capability named must cost something; say what.
- **Over-symmetric structure.** Everything in threes, every section the same shape. Real thinking is lumpy. Break the
  pattern on purpose.
- **The bow-tie conclusion** that restates the intro and adds nothing. End on the sharpest point or the honest gap, not
  a summary.
- **Passive voice hiding who did what.** "Mistakes were made" energy.
- **Vague quantifiers** (significantly, greatly, a lot) where a number exists.
- **Success with no gaps section.** If nothing went wrong, the piece is selling, not telling.
- **Explaining the obvious** to pad length. The reader is an engineer. Respect that.

---

## The one-line test

Before shipping any paragraph: _would Sudhir say this out loud to a senior engineer he respects, or is it padding
written to sound authoritative?_ If the second, cut it.
