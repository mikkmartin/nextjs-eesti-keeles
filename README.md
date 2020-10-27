# Testin eesti keele toetust

Demo: https://eesti-keeles.vercel.app

Ainuke kala on urli-de üle kirjutamisega (erinevatesse keeltesse), et see tehakse buildides `next.config.js` kaudu. Niiet kui dünaamisliselt küsida route CMS-ilt siis peaks kas uuesti buildima või tegema cusom serveri mis uued urlid teeb.

[See tuleb probably varsti](https://github.com/vercel/next.js/discussions/9081)

> "Internationalized Routing **is the first in a series of features** that will make internationalizing and localizing your project easier."
*– via [Next.js Blog](https://nextjs.org/blog/next-10#internationalized-routing)*
