(() => {
  let o = (e) => {
    var t,
      r,
      a,
      o,
      s,
      n = [],
      i = [(r = 1732584193), (a = 4023233417), ~r, ~a, 3285377520],
      l = [],
      p = unescape(encodeURI(e)) + "?",
      f = p.length;
    for (l[(e = (--f / 4 + 2) | 15)] = 8 * f; ~f;)
      l[f >> 2] |= p.charCodeAt(f) << (8 * ~f--);
    for (t = f = 0; t < e; t += 16) {
      for (
        r = i;
        f < 80;
        r = [
          r[4] +
          (n[f] = f < 16 ? ~~l[t + f] : (2 * p) | (p < 0)) +
          1518500249 +
          [
            (a & o) | (~a & s),
            (p = 341275144 + (a ^ o ^ s)),
            882459459 + ((a & o) | (a & s) | (o & s)),
            p + 1535694389,
          ][(f++ / 5) >> 2] +
          (((p = r[0]) << 5) | (p >>> 27)),
          p,
          (a << 30) | (a >>> 2),
          o,
          s,
        ]
      )
        ((p = n[f - 3] ^ n[f - 8] ^ n[f - 14] ^ n[f - 16]),
          (a = r[1]),
          (o = r[2]),
          (s = r[3]));
      for (f = 5; f;) i[--f] += r[f];
    }
    for (p = ""; f < 40;)
      p += ((i[f >> 3] >> (4 * (7 - f++))) & 15).toString(16);
    return p;
  },
    c =
      (Object.defineProperty(navigator, "connection", {
        get: () => ({
          saveData: !0,
          effectiveType: "2g",
          addEventListener: () => { },
          removeEventListener: () => { },
        }),
      }),
        "undefined" != typeof window ? window : self),
    m =
      ((c.exflowUrlmapping = {
        "https://orchid-themes-501884.framer.app/": "/esper",
        "https://orchid-themes-501884.framer.app": "/esper",
        "https://orchid-themes-501884.framer.app/index.html": "/esper",
        "index.html": "/esper",
        "/index.html": "/esper",
        "https://orchid-themes-501884.framer.app/popular": "/esper/open",
        "/inter": "/esper/inter",
        "/open": "/esper/open",
        "/open/": "/esper/open",
        "/intra": "/esper/intra",
        "https://ssdssc.com/inter": "/esper/inter",
        "https://ssdssc.com/intra": "/esper/intra",
        "https://ssdssc.com/popular": "/esper/popular",
        "https://www.ssdssc.com/inter": "/esper/inter",
        "https://www.ssdssc.com/intra": "/esper/intra",
        "https://www.ssdssc.com/popular": "/esper/popular",
        "/popular": "/esper/popular",
        "/sci-union": "/esper/register",
        "https://ssdssc.com/sci-union": "/esper/register",
        "https://www.ssdssc.com/sci-union": "/esper/register",
        "https://framerusercontent.com/images/TWWqYxotlhDxaBp7dwhjEDKyHAE.png":
          "/esper/images/twwqyxotlhdxabp7dwhjedkyhae.png",
        "https://framerusercontent.com/images/B0gRIBR06CZgNOIdqqWzyNyz2Vc.png":
          "/esper/images/b0gribr06czgnoidqqwzynyz2vc.png",
        "https://framerusercontent.com/images/nSkH2pVC8h3EX4ZhJYpTc6eAU.png":
          "/esper/images/nskh2pvc8h3ex4zhjyptc6eau.png",
        "https://framerusercontent.com/images/1AXaeEPaiboo6au7fyWunHeSDak.png":
          "/esper/images/1axaeepaiboo6au7fywunhesdak.png",
        "https://framerusercontent.com/images/GvT2QwmUOxUFwi7SozMrJjNxuM.png":
          "/esper/images/gvt2qwmuoxufwi7sozmrjjnxum.png",
        "https://framerusercontent.com/images/MCXktLHkVhjoJIx8gKuLBG6fmBk.png":
          "/esper/images/mcxktlhkvhjojix8gkulbg6fmbk.png",
        "https://framerusercontent.com/images/GTmjSU8RSZ7NQupBgQVlWleFw.webp":
          "/esper/images/gtmjsu8rsz7nqupbgqvlwlefw.webp",
        "https://framerusercontent.com/images/4zpXPjv88GCfrhQEBf2a5hxEVw.png":
          "/esper/images/4zpxpjv88gcfrhqebf2a5hxevw.png",
        "https://framerusercontent.com/images/5dvIDyCzItJ8cEqx69gnQzwkI4.png":
          "/esper/images/5dvidyczitj8ceqx69gnqzwki4.png",
        "https://framerusercontent.com/images/nvzEnooymu1OLtTjnGO499jCBnw.png":
          "/esper/images/nvzenooymu1olttjngo499jcbnw.png",
        "https://framerusercontent.com/images/mDPSq2XIL2s5aGL02n5Lk2eM.png":
          "/esper/images/mdpsq2xil2s5agl02n5lk2em.png",
        "https://framerusercontent.com/images/9Bs090cscYtfDacMRr7jLVNdQFc.png":
          "/esper/images/9bs090cscytfdacmrr7jlvndqfc.png",
        "https://framerusercontent.com/images/RN7Xmdm9kyHcTV4iM7CQ2YLj0.png":
          "/esper/images/rn7xmdm9kyhctv4im7cq2ylj0.png",
        "https://framerusercontent.com/images/iBHFykcKawAtZkk5zohjKWTbWKI.svg":
          "/esper/images/ibhfykckawatzkk5zohjkwtbwki.svg",
        "https://framerusercontent.com/images/uiNXiuQFy89SCR4h14ee0fBc.png":
          "/esper/images/uinxiuqfy89scr4h14ee0fbc.png",
        "https://framerusercontent.com/images/qZs3aQvIPI9oG1LULv7siPq70.svg":
          "/esper/images/qzs3aqvipi9og1lulv7sipq70.svg",
        "https://framerusercontent.com/images/rUbZsP1N7BzqF9JxSEIlM13qs8A.jpg":
          "/esper/images/rubzsp1n7bzqf9jxseilm13qs8a.jpg",
        "https://framerusercontent.com/images/mrmc96xUi4bMVzc2lpWFzMdTHY.jpg":
          "/esper/images/mrmc96xui4bmvzc2lpwfzmdthy.jpg",
        "https://framerusercontent.com/images/IfTSwkGWCdw0KlXWn7eKVerpVGg.jpg":
          "/esper/images/iftswkgwcdw0klxwn7ekverpvgg.jpg",
        "https://framerusercontent.com/images/fqm2Hf3U20OEQQkdaoFWxB1lVcY.jpg":
          "/esper/images/fqm2hf3u20oeqqkdaofwxb1lvcy.jpg",
        "https://framerusercontent.com/images/7y3jHV0ZZkuymKmqFmOMENSkw.jpg":
          "/esper/images/7y3jhv0zzkuymkmqfmomenskw.jpg",
        "https://framerusercontent.com/images/wfhz0ihBb7iCKCTlS3wuLEUPlzE.jpg":
          "/esper/images/wfhz0ihbb7ickctls3wuleuplze.jpg",
        "https://framerusercontent.com/images/9TKwzGQjtZOrCP723qzMeyHDgUw.jpg":
          "/esper/images/9tkwzgqjtzorcp723qzmeyhdguw.jpg",
        "https://framerusercontent.com/images/jjGQmnCK9DnrLM4akTOerjVkp9A.png":
          "/esper/images/jjgqmnck9dnrlm4aktoerjvkp9a.png",
        "https://framerusercontent.com/images/1xOqMa4sAAwBCrdkiSJfIXups.png":
          "/esper/images/1xoqma4saawbcrdkisjfixups.png",
        "https://framerusercontent.com/images/6VvOWzYaGlY3XOzh67iYim4v66A.jpg":
          "/esper/images/6vvowzyagly3xozh67iyim4v66a.jpg",
        "https://framerusercontent.com/images/islbnlkvJw6i98iu7PT2IQn8Dl4.jpg":
          "/esper/images/islbnlkvjw6i98iu7pt2iqn8dl4.jpg",
        "https://framerusercontent.com/images/Tes9NoUYvfIBtcaRGBei3i4SI.png":
          "/esper/images/tes9nouyvfibtcargbei3i4si.png",
        "https://framerusercontent.com/images/Y74cDXoqe2s2D02h6K23kxDkVd0.png":
          "/esper/images/y74cdxoqe2s2d02h6k23kxdkvd0.png",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/react.DMFExh9X.mjs":
          "/esper/js/react.dmfexh9x.mjs",
        "https://framerusercontent.com/images/J5G4KFBWy38as4gp6TtkvHgPLg.png":
          "/esper/images/j5g4kfbwy38as4gp6ttkvhgplg.png",
        "https://framerusercontent.com/images/aqlCWCBd3o1mr54LN2StvoqPi0.png":
          "/esper/images/aqlcwcbd3o1mr54ln2stvoqpi0.png",
        "https://framerusercontent.com/images/Nh3h81q0fVWhTVEIazR9fRdWi4.png":
          "/esper/images/nh3h81q0fvwhtveiazr9frdwi4.png",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/rolldown-runtime.CWR5Z7Jy.mjs":
          "/esper/js/rolldown-runtime.cwr5z7jy.mjs",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/framer.BCmn9LUH.mjs":
          "/esper/js/framer.bcmn9luh.mjs",
        "https://framerusercontent.com/images/7yQZD58x3tMSVmBLICznFPhXg.png":
          "/esper/images/7yqzd58x3tmsvmblicznfphxg.png",
        "https://framerusercontent.com/images/dh6yErsAXUjk2eNUQyJ6hLueA.png":
          "/esper/images/dh6yersaxujk2enuqyj6hluea.png",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/motion.BAFvjhfu.mjs":
          "/esper/js/motion.bafvjhfu.mjs",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/o7WVZTeacsXNAKIuhPoAnnCHW_gAOBlPVKKMiOrr9w8.CbP_ynTs.mjs":
          "/esper/js/o7wvzteacsxnakiuhpoannchw_gaoblpvkkmiorr9w8.cbp_ynts.mjs",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/shared-lib.BBcAL4Fm.mjs":
          "/esper/js/shared-lib.bbcal4fm.mjs",
        "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg":
          "/esper/images/gfgkadagm4keibnciiruwlfrr0.jpg",
        "https://framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg":
          "/esper/images/ansat3jcvt4zglbwcuofe33q.jpg",
        "https://framerusercontent.com/images/spiGWnekUaj8RVgfPDaNj0y0.png":
          "/esper/images/spigwnekuaj8rvgfpdanj0y0.png",
        "https://framerusercontent.com/assets/oEgCbbhl1OSO0nuOZgcPGfshAus.png":
          "/esper/images/oegcbbhl1oso0nuozgcpgfshaus.png",
        "https://framerusercontent.com/images/J3UotPVSjNdVSJwJ2MZ7JI2V6Cs.png":
          "/esper/images/j3uotpvsjndvsjwj2mz7ji2v6cs.png",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/vtMx1ujdK.D4LSrcMQ.mjs":
          "/esper/js/vtmx1ujdk.d4lsrcmq.mjs",
        "https://framerusercontent.com/images/BYnxEV1zjYb9bhWh1IwBZ1ZoS60.jpg":
          "/esper/images/bynxev1zjyb9bhwh1iwbz1zos60.jpg",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/m3aPhWwZw.Clbc3sCN.mjs":
          "/esper/js/m3aphwwzw.clbc3scn.mjs",
        "https://framerusercontent.com/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2":
          "/esper/font/2uibialfchvpwbhqrmzutft7giu.woff2",
        "https://framerusercontent.com/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2":
          "/esper/font/zwfz6xbve5pmcwrjrgbdhnmkoki.woff2",
        "https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg":
          "/esper/images/2utnej5atl2k3njaefwmbnra.jpg",
        "https://framerusercontent.com/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2":
          "/esper/font/u9laddmbrhzx3sb8g8glty5fete.woff2",
        "https://framerusercontent.com/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2":
          "/esper/font/tvew2lzxj1t7qfxp1gdtidj2o0g.woff2",
        "https://framerusercontent.com/assets/vkKj1t1SjcAFcreP0JYx09Zbh8.png":
          "/esper/images/vkkj1t1sjcafcrep0jyx09zbh8.png",
        "https://framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg":
          "/esper/images/f9riwonpmlcmqvrihz8l8wyfei.jpg",
        "https://framerusercontent.com/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2":
          "/esper/font/df7bjcrmstypqsb945lalmfccvq.woff2",
        "https://framerusercontent.com/assets/nCpxWS6DaPlPe0lHzStXAPCo3lw.woff2":
          "/esper/font/ncpxws6daplpe0lhzstxapco3lw.woff2",
        "https://framerusercontent.com/images/48e7uwhy3tyuGhZCS7vXSdbA.svg":
          "/esper/images/48e7uwhy3tyughzcs7vxsdba.svg",
        "https://framerusercontent.com/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2":
          "/esper/font/vebzumjgykkysfcy73iwwtzlnag.woff2",
        "https://framerusercontent.com/assets/I11LrmuBDQZweplJ62KkVsklU5Y.woff2":
          "/esper/font/i11lrmubdqzweplj62kkvsklu5y.woff2",
        "https://framerusercontent.com/modules/3JJTwb2zCSmoiT3SS4j9/9BTVskT2fGpu3uY3DJaG/QOpzFzShJ.js":
          "/esper/js/qopzfzshj.js",
        "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2":
          "/esper/font/5vvr9vy74if2i6bqbjvbw7sy1pq.woff2",
        "https://framerusercontent.com/assets/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2":
          "/esper/font/ujfzpdy3qgudktqm4q9cxhkfia8.woff2",
        "https://framerusercontent.com/assets/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2":
          "/esper/font/8exwvhjy2dhj4n5prylvmrekmq.woff2",
        "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2":
          "/esper/font/eor0mi4hntlgwnn9if640ezzxco.woff2",
        "https://framerusercontent.com/assets/UTeedEK21hO5jDxEUldzdScUqpg.woff2":
          "/esper/font/uteedek21ho5jdxeuldzdscuqpg.woff2",
        "https://framerusercontent.com/cms/3JJTwb2zCSmoiT3SS4j9/9BTVskT2fGpu3uY3DJaG/QOpzFzShJ-chunk-default-0.framercms":
          "/esper/js/qopzfzshj-chunk-default-0.framercms",
        "https://framerusercontent.com/assets/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2":
          "/esper/font/ig8b8nzy11hziweiynkg91sofjo.woff2",
        "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2":
          "/esper/font/y9k9qrlzaqio88klkmbd8vomqc.woff2",
        "https://framerusercontent.com/assets/n9CXKI3tsmCPeC6MCT9NziShSuQ.woff2":
          "/esper/font/n9cxki3tsmcpec6mct9nzishsuq.woff2",
        "https://framerusercontent.com/assets/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2":
          "/esper/font/qctqfojqj9aibrsip0ahcqpfxn8.woff2",
        "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2":
          "/esper/font/oyrd2tbibpvojxiihnlooxny9m.woff2",
        "https://framerusercontent.com/assets/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2":
          "/esper/font/fxvvh2jezlehncehkhphh0frsl0.woff2",
        "https://framerusercontent.com/cms/3JJTwb2zCSmoiT3SS4j9/9BTVskT2fGpu3uY3DJaG/QOpzFzShJ-indexes-default-0.framercms":
          "/esper/js/qopzfzshj-indexes-default-0.framercms",
        "https://framerusercontent.com/assets/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2":
          "/esper/font/7pscaneb6m7n2hf2jkemdqzcir4.woff2",
        "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2":
          "/esper/font/jeywfuapfzhqheg8u5gtpdz7wq.woff2",
        "https://framerusercontent.com/assets/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2":
          "/esper/font/qs4ujqyyatcvv9rodk0zx9khky8.woff2",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/augiA20Il.kExL8cPf.mjs":
          "/esper/js/augia20il.kexl8cpf.mjs",
        "https://framerusercontent.com/assets/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2":
          "/esper/font/vfd2n20ym7v0hruebheyafsmmby.woff2",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/script_main.Zo_vvA7U.mjs":
          "/esper/js/script_main.zo_vva7u.mjs",
        "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2":
          "/esper/font/vqyevyayhtarfwpquzqgpnds.woff2",
        "https://framerusercontent.com/assets/4oIO9fB59bn3cKFWz7piCj28z9s.woff2":
          "/esper/font/4oio9fb59bn3ckfwz7picj28z9s.woff2",
        "https://framer.com/edit/init.mjs": "/esper/js/init.mjs",
        "https://framerusercontent.com/assets/TBccIZR9kIpkRce5i9ATfPp7a4.woff2":
          "/esper/font/tbccizr9kipkrce5i9atfpp7a4.woff2",
        "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2":
          "/esper/font/b6y37fthzealdunqhicbt6futy.woff2",
        "https://framerusercontent.com/assets/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2":
          "/esper/font/f5lmfd3fcau7twiybi4dlww4ks.woff2",
        "https://framerusercontent.com/assets/8yoV9pUxquX7VD7ZXlNYKQmkmk.woff2":
          "/esper/font/8yov9puxqux7vd7zxlnykqmkmk.woff2",
        "https://framerusercontent.com/assets/THWAFHoAcmqLMy81E8hCSdziVKA.woff2":
          "/esper/font/thwafhoacmqlmy81e8hcsdzivka.woff2",
        "https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2":
          "/esper/font/ydti2ui8xceg1w2je9xpn3noo.woff2",
        "https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2":
          "/esper/font/epun3mcjzajihnycdvkbfizkyy0.woff2",
        "https://framerusercontent.com/assets/sQxGYWDlRkDr0eOKqiNRl6g5rs.woff2":
          "/esper/font/sqxgywdlrkdr0eokqinrl6g5rs.woff2",
        "https://framerusercontent.com/assets/CnMzVKZxLPB68RITfNGUfLe65m4.woff2":
          "/esper/font/cnmzvkzxlpb68ritfngufle65m4.woff2",
        "https://framerusercontent.com/assets/NNTAT1XAm8ZRkr824inYPkjNeL4.woff2":
          "/esper/font/nntat1xam8zrkr824inypkjnel4.woff2",
        "https://framerusercontent.com/sites/6DpVRkHafWL581Jb56P9ez/PX9hIOIVM.Cc3ZKsBO.mjs":
          "/esper/js/px9hioivm.cc3zksbo.mjs",
        "https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2":
          "/esper/font/v3j1l0o5vpfke26sw4hcpxcfho.woff2",
        "https://framerusercontent.com/assets/P2qr9PAWBt905929rHfxmneMUG0.woff2":
          "/esper/font/p2qr9pawbt905929rhfxmnemug0.woff2",
        "https://framerusercontent.com/assets/2BmSa4TZZvFKAZg2DydxTbvKlTU.woff2":
          "/esper/font/2bmsa4tzzvfkazg2dydxtbvkltu.woff2",
        "https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2":
          "/esper/font/f3kdpd2n0ctowv5huazjjgm.woff2",
        "https://framerusercontent.com/assets/djqIk3Er2JcAcz7Rup88BdINEw.woff2":
          "/esper/font/djqik3er2jcacz7rup88bdinew.woff2",
        "https://framerusercontent.com/assets/KMFW46iYsEZaUBwXbwPc9nQm71o.woff2":
          "/esper/font/kmfw46iysezaubwxbwpc9nqm71o.woff2",
        "https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2":
          "/esper/font/0idmxkizu9gozoclqiqsv5rvetu.woff2",
        "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2":
          "/esper/font/grgckwrn6d3uz8ewclhzxwefc4.woff2",
        "https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2":
          "/esper/font/r0mv3negma0akcqsnfotg32las.woff2",
        "https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2":
          "/esper/font/ii21jnsjkulbkshhxklapi7fv9w.woff2",
        "https://framerusercontent.com/assets/A5P4nkYCJlLQxGxaS1lzG8PNSc.woff2":
          "/esper/font/a5p4nkycjllqxgxas1lzg8pnsc.woff2",
        "https://framerusercontent.com/assets/vuPfygr1n1zYxscvWgGI8hRf3LE.woff2":
          "/esper/font/vupfygr1n1zyxscvwggi8hrf3le.woff2",
        "https://framerusercontent.com/assets/jplzYzqFHXreyADwk9yrkQlWQ.woff2":
          "/esper/font/jplzyzqfhxreyadwk9yrkqlwq.woff2",
        "https://framerusercontent.com/assets/sSIKP2TfVPvfK7YVENPE5H87A.woff2":
          "/esper/font/ssikp2tfvpvfk7yvenpe5h87a.woff2",
        "https://framerusercontent.com/assets/gawbeo7iEJSRZ4kcrh6YRrU8o.woff2":
          "/esper/font/gawbeo7iejsrz4kcrh6yrru8o.woff2",
        "https://framerusercontent.com/assets/xSzma7KIWAdctStaX171ey3lams.woff2":
          "/esper/font/xszma7kiwadctstax171ey3lams.woff2",
        "https://framerusercontent.com/assets/8E92vrr3j1gDqzepmeSbD2u0JxA.woff2":
          "/esper/font/8e92vrr3j1gdqzepmesbd2u0jxa.woff2",
        "https://framerusercontent.com/images/OEloSpPPNdlBKx4lChLITv9qH5k.jpg":
          "/esper/images/oelospppndlbkx4lchlitv9qh5k.jpg",
        "https://framerusercontent.com/images/deIz6CeFU4BL5iJXfJWwP2OH4.png":
          "/esper/images/deiz6cefu4bl5ijxfjwwp2oh4.png",
        "https://framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2":
          "/esper/font/iwwtdc49enf2tchbqlnarxw6ug.woff2",
        "https://framerusercontent.com/assets/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2":
          "/esper/font/bhynjqztyl2lqvmmirrs6y16es.woff2",
        "https://framerusercontent.com/images/ZtT8XgwhxtsfAPsIWvj2wNhLg.svg":
          "/esper/images/ztt8xgwhxtsfapsiwvj2wnhlg.svg",
        "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4":
          "/esper/images/mlwpbw1duqawjlhhun3dbwpgjak.mp4",
        "https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg":
          "/esper/images/5ilrvlyxf72khsvhqpa3sngzju.jpg",
        "https://framerusercontent.com/assets/EuFX58kHooFipla8J9ir0EM8.mp4":
          "/esper/images/eufx58khoofipla8j9ir0em8.mp4",
        "https://framerusercontent.com/images/0i9DmvASJEyFaEtgSTpeH5kFpGo.webp":
          "/esper/images/0i9dmvasjeyfaetgstpeh5kfpgo.webp",
        "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2":
          "/esper/font/dppbyi0sl4fylgakx8kxopvt7c.woff2",
        "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2":
          "/esper/font/4raeqdeorcndkhhiicbjow92lk.woff2",
        "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2":
          "/esper/font/1k3w8dizy3v4emk8mb08yhxtbs.woff2",
        "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2":
          "/esper/font/tusctfyvm1i1ichuycwz9gddq.woff2",
        "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2":
          "/esper/font/vgyfwiwsac5oyxaycrxxvhze58.woff2",
        "https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2":
          "/esper/font/syrnpwzamircj3wilpip43kjqs.woff2",
        "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2":
          "/esper/font/giryzetix4ifypco5pyzonkhjio.woff2",
        "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2":
          "/esper/font/h89bbhkbhdzlxzzxi8upztsp90.woff2",
        "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2":
          "/esper/font/u6gjwduwb143kpnk1t1mdkdwkmc.woff2",
        "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2":
          "/esper/font/43sj6mfoph1lcjt46ovydusba6o.woff2",
        "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2":
          "/esper/font/wcchg0r4gbdairhfhiolq6oekqw.woff2",
        "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2":
          "/esper/font/wz367jpwf9brw6ldthn8rxgsjw.woff2",
        "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2":
          "/esper/font/ia3uin3hqwqdrvloc1zetyhww.woff2",
        "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2":
          "/esper/font/2a4xx7cngadfglvv4xro06obhy.woff2",
        "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2":
          "/esper/font/cfmzu8w2e7thgf4t4ratmpuwosa.woff2",
        "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2":
          "/esper/font/867qobyax8ansfx4tgevu9yicm.woff2",
        "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2":
          "/esper/font/oyn2zbenfdnw7mt2lzjk1h9zb9k.woff2",
        "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2":
          "/esper/font/cdae8hgz1cmylu9g005paw3xmo.woff2",
        "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2":
          "/esper/font/dofvtme1uplcq161m6hj8csqyg.woff2",
        "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2":
          "/esper/font/pkrfnwfozl77qycaip84ln1h944.woff2",
        "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2":
          "/esper/font/tktbcdnbmevseejkdnghhklzyo.woff2",
        "https://framerusercontent.com/assets/u8enVOaruZS1o3FWMEBitZ5GDU.mp4":
          "/esper/images/u8envoaruzs1o3fwmebitz5gdu.mp4",
      }),
        (c.exflowSkipUrls = [
          "https://events.framer.com/",
          "https://api.framer.com/analytics",
        ]),
        (c.exflowUrlmapping = {
          ...c.exflowUrlmapping,
          ...Object.fromEntries(
            Object.entries(c.exflowUrlmapping)
              .map(([e, t]) => {
                e = new URL(e, location.origin);
                return (
                  e.origin !== location.origin && [
                    e.href.replace(e.origin, location.origin),
                    t,
                  ]
                );
              })
              .filter((e) => e),
          ),
        }),
        (
          c.document?.baseURI ||
          (c.location && c.location.href ? c.location.href : "")
        ).replace(/^blob:/, ""));
  if (
    ((c.exflowRemap = (e, t) => {
      if ("string" == typeof e && e.includes("/sci-union")) return "/esper/register";
      if ("string" == typeof e) {
        if ((e = new URL(e, m)).pathname.startsWith("/_framer/api/"))
          if (void 0 !== t)
            try {
              var r = o(
                e.pathname + ("string" == typeof t ? t : JSON.stringify(t)),
              ).toString("hex");
              e.searchParams.set("data", r);
            } catch (e) {
              console.error(e);
            }
          else
            try {
              var a = o(e.pathname).toString("hex");
              e.searchParams.set("data", a);
            } catch (e) {
              console.error(e);
            }
        else ((e.hash = ""), (e.search = ""));
        ((e = e.href),
          Object.hasOwn(c.exflowUrlmapping, e) && (e = c.exflowUrlmapping[e]),
          (e = new URL(e, m).href));
      }
      return e;
    }),
      "fetch" in c && "function" == typeof c.fetch)
  ) {
    let f = c.fetch;
    c.fetch = async (r, e) => {
      let a;
      if (
        ("string" == typeof r
          ? (a = new URL(r, m))
          : r && r.href && (a = new URL(r.href, m)),
          !c.exflowSkipUrls.some(
            (e) => a.href.startsWith(e) || a.pathname.startsWith(e),
          ))
      ) {
        var o = c.exflowRemap(a.toString(), e?.body),
          s = a.searchParams.get("range");
        r = "string" == typeof r ? o : new Request(o, r);
        let t = await f(r, e);
        if (s) {
          var n,
            o = s.split(",").map((e) => {
              var [e, t] = e.trim().split("-").map(Number);
              return { start: e, end: t };
            }),
            i = await t.arrayBuffer(),
            r = o.reduce((e, t) => e + (t.end - t.start + 1), 0),
            l = new Uint8Array(r);
          let e = 0;
          for (n of o) {
            var p = new Uint8Array(i, n.start, n.end - n.start + 1);
            (l.set(p, e), (e += p.length));
          }
          t = new Response(l.buffer, {
            status: 200,
            statusText: "OK",
            headers: t.headers,
          });
        }
        return t;
      }
    };
  }
  function e(e) {
    let a = Object.getOwnPropertyDescriptor(e, "srcset");
    a &&
      a.set &&
      Object.defineProperty(e, "srcset", {
        configurable: !0,
        enumerable: a.enumerable,
        get() {
          return a.get.call(this);
        },
        set(t) {
          try {
            if ("string" == typeof t) {
              if (!c.exflowSkipUrls.some((e) => t.startsWith(e))) {
                let e = t;
                var r;
                for (r of Array.from(
                  t.matchAll(
                    /(?<url>[^,\s]+(?:,[^,\s]+)*)(?:\s+\w+)?(?:,\s*|$)/g,
                  ),
                ).map((e) => e.groups.url))
                  e = e.replace(r, c.exflowRemap(r));
                a.set.call(this, e);
              }
            } else a.set.call(this, t);
          } catch (e) {
            a.set.call(this, t);
          }
        },
      });
  }
  function a(e) {
    if ("string" != typeof e) return e;
    let t = e;
    var r;
    for (r of Array.from(
      e.matchAll(/(?<url>[^,\s]+(?:,[^,\s]+)*)(?:\s+\w+)?(?:,\s*|$)/g),
    ).map((e) => e.groups.url))
      t = t.replace(r, c.exflowRemap(r));
    return t;
  }
  ([
    [HTMLImageElement.prototype, "src"],
    [HTMLScriptElement.prototype, "src"],
    [HTMLLinkElement.prototype, "href"],
    [HTMLAnchorElement.prototype, "href"],
    [HTMLIFrameElement.prototype, "src"],
    [HTMLVideoElement.prototype, "src"],
    [HTMLAudioElement.prototype, "src"],
    [HTMLEmbedElement.prototype, "src"],
    [HTMLObjectElement.prototype, "data"],
  ].forEach(([e, t]) => {
    if (e) {
      let r = Object.getOwnPropertyDescriptor(e, t);
      r &&
        r.set &&
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: r.enumerable,
          get() {
            return r.get.call(this);
          },
          set(t) {
            try {
              var e = c.exflowRemap(t);
              r.set.call(this, e);
            } catch (e) {
              r.set.call(this, t);
            }
          },
        });
    }
  }),
    "undefined" != typeof HTMLImageElement && e(HTMLImageElement.prototype),
    "undefined" != typeof HTMLSourceElement && e(HTMLSourceElement.prototype));
  {
    var r = HTMLElement.prototype;
    let t = Object.getOwnPropertyDescriptor(r, "innerHTML");
    t &&
      t.set &&
      Object.defineProperty(r, "innerHTML", {
        configurable: !0,
        enumerable: t.enumerable,
        get() {
          return t.get.call(this);
        },
        set(e) {
          ("string" == typeof e &&
            (e = ((t) => {
              try {
                var e = new DOMParser().parseFromString(t, "text/html");
                return (
                  e
                    .querySelectorAll(
                      "[src],[href],[data],[srcset],[data-poster]",
                    )
                    .forEach((e) => {
                      var t;
                      (e.hasAttribute("src") &&
                        e.setAttribute(
                          "src",
                          c.exflowRemap(e.getAttribute("src")),
                        ),
                        e.hasAttribute("href") &&
                        "use" !== e.tagName.toLowerCase() &&
                        e.setAttribute(
                          "href",
                          c.exflowRemap(e.getAttribute("href")),
                        ),
                        e.hasAttribute("data-poster") &&
                        e.setAttribute(
                          "data-poster",
                          c.exflowRemap(e.getAttribute("data-poster")),
                        ),
                        e.hasAttribute("data") &&
                        e.setAttribute(
                          "data",
                          c.exflowRemap(e.getAttribute("data")),
                        ),
                        e.hasAttribute("srcset") &&
                        ((t = e.getAttribute("srcset")),
                          e.setAttribute("srcset", a(t))));
                    }),
                  e.body.innerHTML
                );
              } catch (e) {
                return t;
              }
            })(e)),
            t.set.call(this, e));
        },
      });
  }
  let s = Element.prototype.setAttribute;
  ((Element.prototype.setAttribute = function (e, t) {
    var r;
    return (
      "string" != typeof e ||
      "string" != typeof t ||
      "use" === this.tagName.toLowerCase() ||
      ("src" !== (r = e.toLowerCase()) &&
        "href" !== r &&
        "data-poster" !== r &&
        "data" !== r &&
        "srcset" !== r) ||
      (t = "srcset" === r ? a(t) : c.exflowRemap(t)),
      s.call(this, e, t)
    );
  }),
    c?.navigator?.sendBeacon && (c.navigator.sendBeacon = () => { }));
})();

// --- SEO OVERRIDE (Appended dynamically) ---
(function () {
  const path = window.location.pathname;
  let seoTitle = "ESPER Awards '27 - Sri Lanka's Premier Science Day | SSDSSC";
  let seoDesc = "ESPER Awards is Sri Lanka's No.1 national school science day and innovation awards platform, organized by the Science Society of D. S. Senanayake College.";
  let seoKeywords = "ESPER Awards, Science Day Sri Lanka, Innovation Awards, SSDSSC, D.S. Senanayake College";

  if (path.includes('/esper/popular/register')) {
    seoTitle = "Register for Most Popular Awards - ESPER '27 | SSDSSC";
    seoDesc = "Register for the Most Popular category at the ESPER Awards '27. Showcase your talent and get recognized by the Science Society of D.S. Senanayake College.";
    seoKeywords = "ESPER Popular Registration, SSDSSC";
  } else if (path.includes('/esper/open') || path.includes('/esper/popular')) {
    seoTitle = "Most Popular Awards - ESPER '27 | SSDSSC";
    seoDesc = "Vote and discover the most popular entries in research, technology, and creativity at the ESPER Awards '27 by the Science Union of D.S. Senanayake College.";
    seoKeywords = "ESPER Popular Awards, ESPER Voting, SSDSSC, Science Day";
  } else if (path.includes('/esper/inter')) {
    seoTitle = "Inter School Awards - ESPER '27 | SSDSSC";
    seoDesc = "Explore and register for the Inter School Awards categories at ESPER '27, organized by the Science Society of D.S. Senanayake College.";
    seoKeywords = "Inter School Awards, ESPER Awards, Science Day Sri Lanka, SSDSSC";
  } else if (path.includes('/esper/intra')) {
    seoTitle = "Intra School Awards - ESPER '27 | SSDSSC";
    seoDesc = "Explore and register for the Intra School Awards categories at ESPER '27, organized by the Science Society of D.S. Senanayake College.";
    seoKeywords = "Intra School Awards, ESPER Awards, Science Day Sri Lanka, SSDSSC";
  } else if (path.includes('/esper/register')) {
    seoTitle = "Register for ESPER Awards '27 | SSDSSC";
    seoDesc = "Register your school or team for the ESPER Awards '27, Sri Lanka's premier Science Day Awards Ceremony celebrating young innovators.";
    seoKeywords = "ESPER Registration, Science Day Registration, SSDSSC";
  }

  function applySeo() {
    if (document.title !== seoTitle) {
      document.title = seoTitle;
    }
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && metaDesc.content !== seoDesc) {
      metaDesc.content = seoDesc;
    }
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw && metaKw.content !== seoKeywords) {
      metaKw.content = seoKeywords;
    }
  }

  applySeo();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySeo);
  }
  window.addEventListener('load', applySeo);
  setTimeout(applySeo, 500);
  setTimeout(applySeo, 1500);
})();
// --- END SEO OVERRIDE ---

// --- UNIVERSAL ESPER NAVIGATION HANDLER ---
(function () {
  function fixAllLinks() {
    document.querySelectorAll("a").forEach(a => {
      const text = a.textContent.trim().toLowerCase();
      const href = a.getAttribute("href") || "";
      const name = (a.getAttribute("data-framer-name") || "").toLowerCase();

      // Route Logo and index.html to /esper
      if (
        name === "logo" ||
        href === "index.html" ||
        href === "/index.html" ||
        href.endsWith("/index.html") ||
        href === "/" ||
        href.includes("orchid-themes-501884.framer.app")
      ) {
        a.setAttribute("href", "/esper");
        if (a.getAttribute("target") === "_blank") {
          a.removeAttribute("target");
        }
      } else if (text.includes("inter school") || href === "/inter" || href.endsWith("/inter") || href.includes("ssdssc.com/inter")) {
        if (a.getAttribute("href") !== "/esper/inter") {
          a.setAttribute("href", "/esper/inter");
        }
        if (a.getAttribute("target") === "_blank") {
          a.removeAttribute("target");
        }
      } else if (text.includes("intra school") || href === "/intra" || href.endsWith("/intra") || href.includes("ssdssc.com/intra")) {
        if (a.getAttribute("href") !== "/esper/intra") {
          a.setAttribute("href", "/esper/intra");
        }
        if (a.getAttribute("target") === "_blank") {
          a.removeAttribute("target");
        }
      } else if (
        text.includes("school popular awards") ||
        text === "popular awards" ||
        text.includes("open awards") ||
        href === "/open" ||
        href.endsWith("/open") ||
        href === "/open/" ||
        href.endsWith("/open/") ||
        href === "/popular" ||
        href.endsWith("/popular") ||
        href.includes("ssdssc.com/popular") ||
        href === "/esper/open" ||
        href === "/esper/popular"
      ) {
        if (a.getAttribute("href") !== "/esper/open" && !href.includes("/register")) {
          a.setAttribute("href", "/esper/open");
        }
        if (a.getAttribute("target") === "_blank") {
          a.removeAttribute("target");
        }
        if ((text.includes("popular") || text.includes("school popular")) && !href.includes("/register")) {
          const p = a.querySelector("p");
          if (p) {
            p.textContent = "Open Awards";
          } else {
            a.textContent = "Open Awards";
          }
        }
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fixAllLinks);
  } else {
    fixAllLinks();
  }
  window.addEventListener("load", fixAllLinks);
  setTimeout(fixAllLinks, 800);

  let fixCount = 0;
  const fixTimer = setInterval(() => {
    fixAllLinks();
    if (++fixCount > 25) clearInterval(fixTimer);
  }, 100);

  // Catch any clicks globally in capturing phase to guarantee instant correct navigation without DOM mutation loops
  window.addEventListener("click", (e) => {
    // CRITICAL: Do NOT intercept clicks on mobile navigation hamburger / close icon button
    if (e.target.closest("[data-framer-name='Icon'], .framer-z2h1x2")) {
      return;
    }

    const a = e.target.closest("a, [data-framer-name='Card'], [data-framer-name='Subscribe Button'], [data-framer-name='Logo']");
    if (!a) return;
    const href = a.getAttribute("href") || a.getAttribute("data-href") || "";
    const text = a.textContent.trim().toLowerCase();
    const name = (a.getAttribute('data-framer-name') || '').toLowerCase();

    // If 'a' is a non-link container (e.g. framer-11xv1j7), check if an actual anchor link was clicked
    if (a.tagName.toLowerCase() !== "a" && !a.hasAttribute("href") && !a.hasAttribute("data-href") && !a.hasAttribute("data-nested-link") && name !== "card" && name !== "subscribe button") {
      const anchor = e.target.closest("a");
      if (!anchor) return;
    }

    // Always route Logo link and index.html clicks to /esper (only when clicking actual logo link)
    const isLogoClick = (name === "logo" && (a.tagName.toLowerCase() === "a" || e.target.closest("a.framer-1ozvw4i, [data-framer-name='Logo'] a, a[href='/esper']"))) ||
      (e.target.closest("a.framer-1ozvw4i, a[href='/esper']")) ||
      href === "index.html" ||
      href === "/index.html" ||
      href.endsWith("/index.html") ||
      href === "/";

    if (isLogoClick) {
      e.preventDefault();
      e.stopPropagation();
      window.location.assign("/esper");
      return;
    }

    // On /esper/inter, always route card/register clicks to /esper/inter/register
    if (window.location.pathname.includes("/inter") && (href.includes("/register") || text.includes("register") || name === 'subscribe button' || name === 'card')) {
      e.preventDefault();
      e.stopPropagation();
      window.location.assign("/esper/inter/register");
      return;
    }

    // On /esper/intra, always route card/register clicks to /esper/intra/register
    if (window.location.pathname.includes("/intra") && (href.includes("/register") || text.includes("register") || name === 'subscribe button' || name === 'card')) {
      e.preventDefault();
      e.stopPropagation();
      window.location.assign("/esper/intra/register");
      return;
    }

    // On /esper/open, always route card/register clicks to /esper/open/register
    if ((window.location.pathname.includes("/open") || window.location.pathname.includes("/popular")) && (href.includes("/register") || text.includes("register") || name === 'subscribe button' || name === 'card')) {
      e.preventDefault();
      e.stopPropagation();
      window.location.assign("/esper/open/register");
      return;
    }

    if (href.includes("/register")) return; // Do not intercept other registration links

    if (text.includes("inter school") || href === "/inter" || href.endsWith("/inter") || href.includes("ssdssc.com/inter")) {
      e.preventDefault();
      e.stopPropagation();
      window.location.assign("/esper/inter");
    } else if (text.includes("intra school") || href === "/intra" || href.endsWith("/intra") || href.includes("ssdssc.com/intra")) {
      e.preventDefault();
      e.stopPropagation();
      window.location.assign("/esper/intra");
    } else if (
      text.includes("school popular awards") ||
      text === "popular awards" ||
      text.includes("open awards") ||
      href === "/open" ||
      href.endsWith("/open") ||
      href === "/open/" ||
      href.endsWith("/open/") ||
      href === "/popular" ||
      href.endsWith("/popular") ||
      href.includes("ssdssc.com/popular") ||
      href === "/esper/open" ||
      href === "/esper/popular"
    ) {
      if (!href.includes("/register")) {
        e.preventDefault();
        e.stopPropagation();
        window.location.assign("/esper/open");
      }
    }
  }, true);

  // Mobile navigation hamburger toggle & styles
  (function initMobileNav() {
    function injectStyles() {
      if (!document.getElementById("esper-mobile-nav-style")) {
        const style = document.createElement("style");
        style.id = "esper-mobile-nav-style";
        style.textContent = `
          .framer-13kfmgi-container {
            order: 9 !important;
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin: 16px auto !important;
          }
          .framer-SSS4a,
          .framer-SSS4a.framer-1exli70,
          .framer-SSS4a.framer-v-19y430h,
          .framer-SSS4a.framer-v-w7utna,
          .framer-SSS4a.framer-v-w7utna.framer-1exli70 {
            width: 100% !important;
            max-width: 100vw !important;
            box-sizing: border-box !important;
          }
          .framer-SSS4a .framer-bu79ji {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .framer-SSS4a .framer-1qupc9b {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            padding: 16px 20px !important;
          }
          .framer-bmBk0,
          .framer-bmBk0.framer-1e142ra {
            width: 100% !important;
            max-width: 1248px !important;
            margin: 0 auto !important;
            padding: 32px 24px 48px !important;
            box-sizing: border-box !important;
            overflow: visible !important;
            gap: 0 !important;
          }
          .framer-bmBk0 .framer-dfko03 {
            display: flex !important;
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-sizing: border-box !important;
            overflow: visible !important;
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            font-size: 13.5px !important;
            font-weight: 400 !important;
            line-height: 1.5 !important;
            letter-spacing: normal !important;
            text-transform: none !important;
          }
          .framer-bmBk0 .framer-15pyp2k,
          .framer-bmBk0 .framer-15pyp2k * {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            font-size: 13.5px !important;
            text-transform: none !important;
            letter-spacing: normal !important;
          }
          .framer-bmBk0 .framer-7heklo,
          .framer-bmBk0 .framer-7heklo * {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            font-size: 13.5px !important;
            text-transform: none !important;
            letter-spacing: normal !important;
          }
          /* Esper '27 Coming Soon Typography & Centering */
          .esper27-coming-soon-content {
            align-items: center !important;
            text-align: center !important;
          }
          .esper27-coming-soon-eyebrow {
            font-family: "Constantine", serif !important;
            font-size: 26px !important;
            letter-spacing: 0.14em !important;
            text-transform: uppercase !important;
            color: #ffd57e !important;
            font-style: normal !important;
            font-weight: 400 !important;
            text-align: center !important;
            width: 100% !important;
            display: block !important;
            margin: 0 auto !important;
            text-shadow: 0 0 16px rgba(255, 213, 126, 0.3) !important;
          }
          .esper27-coming-soon-title {
            font-family: "Nebula", sans-serif !important;
            font-size: 52px !important;
            line-height: 1.15 !important;
            letter-spacing: 0.08em !important;
            text-transform: uppercase !important;
            color: #ffffff !important;
            font-style: normal !important;
            font-weight: 400 !important;
            text-align: center !important;
            width: 100% !important;
            display: block !important;
            margin: 4px auto 12px auto !important;
          }
          .esper27-coming-soon-subtitle {
            text-align: center !important;
            margin: 0 auto 16px auto !important;
          }
          .esper27-counter-wrap {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
          .esper27-counter-grid {
            margin: 0 auto !important;
          }
          @media (max-width: 900px) {
            .esper27-coming-soon-eyebrow {
              font-size: 20px !important;
              letter-spacing: 0.12em !important;
            }
            .esper27-coming-soon-title {
              font-size: 38px !important;
              letter-spacing: 0.05em !important;
            }
          }
          /* Center align Monarch Imperial section content & subtitle */
          .framer-wt6gb8 .framer-46ipdk {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .framer-wt6gb8 .framer-m71xm8,
          .framer-wt6gb8 .framer-m71xm8 h2,
          .framer-m71xm8,
          .framer-m71xm8 h2 {
            text-align: center !important;
            margin: 0 auto !important;
          }
          .framer-wt6gb8 .framer-1srbmyl,
          .framer-wt6gb8 .framer-1srbmyl p,
          .framer-1srbmyl,
          .framer-1srbmyl p {
            text-align: center !important;
            margin: 0 auto !important;
            width: 100% !important;
          }
          /* Hero background video */
          .framer-w3gto7,
          [data-framer-name="Plasma"] {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }
          .esper-hero-video-bg {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
            z-index: 0 !important;
            pointer-events: none !important;
          }

          /* Shining animation for Esper '27 countdown boxes */
          .esper27-counter-box {
            position: relative !important;
            overflow: hidden !important;
            background: linear-gradient(180deg, rgba(26, 24, 20, 0.72) 0%, rgba(12, 12, 14, 0.88) 100%) !important;
            border: 1px solid rgba(255, 213, 126, 0.22) !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 10px rgba(255, 190, 77, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 0 16px rgba(255, 213, 126, 0.04) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            animation: esperBoxGlowPulse 5s ease-in-out infinite alternate !important;
          }
          .esper27-counter-box:hover {
            transform: translateY(-3px) scale(1.02) !important;
            border-color: rgba(255, 213, 126, 0.6) !important;
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 190, 77, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 18px rgba(255, 213, 126, 0.12) !important;
          }
          .esper27-counter-box::after {
            content: "" !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(
              110deg,
              transparent 0%,
              transparent 25%,
              rgba(255, 215, 130, 0.03) 38%,
              rgba(255, 235, 180, 0.15) 46%,
              rgba(255, 255, 255, 0.35) 50%,
              rgba(255, 235, 180, 0.15) 54%,
              rgba(255, 215, 130, 0.03) 62%,
              transparent 75%,
              transparent 100%
            ) !important;
            transform: translateX(-160%) skewX(-20deg) translateZ(0) !important;
            pointer-events: none !important;
            mix-blend-mode: screen !important;
            will-change: transform, opacity !important;
            animation: esperSmoothShineSweep 5.5s cubic-bezier(0.22, 1, 0.36, 1) infinite !important;
          }
          .esper27-counter-grid .esper27-counter-box:nth-child(1)::after,
          #esper27-countdown .esper27-counter-box:nth-child(1)::after {
            animation-delay: 0s !important;
          }
          .esper27-counter-grid .esper27-counter-box:nth-child(2)::after,
          #esper27-countdown .esper27-counter-box:nth-child(2)::after {
            animation-delay: 0.18s !important;
          }
          .esper27-counter-grid .esper27-counter-box:nth-child(3)::after,
          #esper27-countdown .esper27-counter-box:nth-child(3)::after {
            animation-delay: 0.36s !important;
          }
          .esper27-counter-grid .esper27-counter-box:nth-child(4)::after,
          #esper27-countdown .esper27-counter-box:nth-child(4)::after {
            animation-delay: 0.54s !important;
          }
          @keyframes esperSmoothShineSweep {
            0% {
              transform: translateX(-160%) skewX(-20deg) translateZ(0);
              opacity: 0;
            }
            3% {
              opacity: 1;
            }
            26% {
              transform: translateX(160%) skewX(-20deg) translateZ(0);
              opacity: 1;
            }
            28%, 100% {
              transform: translateX(160%) skewX(-20deg) translateZ(0);
              opacity: 0;
            }
          }
          @keyframes esperBoxGlowPulse {
            0%, 100% {
              border-color: rgba(255, 213, 126, 0.2);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), 0 0 8px rgba(255, 190, 77, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }
            50% {
              border-color: rgba(255, 213, 126, 0.42);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 18px rgba(255, 190, 77, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 0 12px rgba(255, 213, 126, 0.08);
            }
          }
          .esper27-countdown-value {
            text-shadow: 0 0 12px rgba(255, 213, 126, 0.55), 0 0 24px rgba(255, 190, 77, 0.25) !important;
            animation: esperTextShine 3s ease-in-out infinite alternate !important;
          }
          @keyframes esperTextShine {
            0%, 100% {
              text-shadow: 0 0 8px rgba(255, 213, 126, 0.45), 0 0 16px rgba(255, 190, 77, 0.2);
              color: #ffd57e;
            }
            50% {
              text-shadow: 0 0 18px rgba(255, 255, 255, 0.85), 0 0 32px rgba(255, 213, 126, 0.75), 0 0 45px rgba(255, 190, 77, 0.4);
              color: #ffffff;
            }
          }
          /* ==========================================================================
             UNIFIED LUXURY SHINING ANIMATIONS (CARDS & BUTTONS ON ALL PAGES)
             ========================================================================== */
          .esper-award-card,
          [data-framer-name="Card"],
          a.framer-14ovzi3,
          .framer-Wwu9j.framer-1hq3fz8,
          .framer-Wwu9j {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            text-decoration: none !important;
          }
          .esper-award-card:hover,
          [data-framer-name="Card"]:hover,
          a.framer-14ovzi3:hover,
          .framer-Wwu9j.framer-1hq3fz8:hover,
          .framer-Wwu9j:hover {
            transform: translateY(-6px) !important;
          }
          .esper-award-card-text,
          .esper-award-card .framer-1sg81zm,
          .esper-award-card .framer-1uwndhu,
          .esper-award-card .framer-nsuui8,
          .esper-award-card .framer-1rquw6u,
          [data-framer-name="Card"] .framer-1sg81zm,
          [data-framer-name="Card"] .framer-1uwndhu,
          [data-framer-name="Card"] .framer-nsuui8,
          [data-framer-name="Card"] .framer-1rquw6u {
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
          }
          .esper-award-card-title,
          [data-framer-name="Card"] .framer-nsuui8 h3,
          [data-framer-name="Card"] .framer-nsuui8 .framer-text {
            font-family: "Constantine", serif !important;
            font-size: 20px !important;
            font-weight: 600 !important;
            line-height: 1.25 !important;
            letter-spacing: 0.02em !important;
            color: #ffffff !important;
            margin: 14px auto 4px auto !important;
            text-align: center !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            width: 100% !important;
            display: block !important;
          }
          .esper-award-card-sub,
          [data-framer-name="Card"] .framer-1rquw6u p,
          [data-framer-name="Card"] .framer-1rquw6u .framer-text {
            font-family: "Nebula", sans-serif !important;
            font-size: 12px !important;
            letter-spacing: 0.1em !important;
            text-transform: uppercase !important;
            color: #ffd57e !important;
            margin: 0 auto !important;
            text-align: center !important;
            width: 100% !important;
            display: block !important;
          }
          .esper-award-card-imgwrap,
          .framer-9xp6kq,
          [data-framer-name="Member Image"] {
            position: relative !important;
            overflow: hidden !important;
            border-radius: 20px !important;
            border: 1px solid rgba(255, 213, 126, 0.22) !important;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
            transition: border-color 0.4s ease, box-shadow 0.4s ease !important;
          }
          .esper-award-card:hover .esper-award-card-imgwrap,
          [data-framer-name="Card"]:hover .framer-9xp6kq,
          a.framer-14ovzi3:hover .framer-9xp6kq,
          .framer-Wwu9j:hover .framer-9xp6kq,
          [data-framer-name="Card"]:hover [data-framer-name="Member Image"] {
            border-color: rgba(255, 213, 126, 0.85) !important;
            box-shadow: 0 16px 45px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 190, 77, 0.45), inset 0 0 18px rgba(255, 213, 126, 0.2) !important;
          }
          .esper-award-card-imgwrap::before,
          .framer-9xp6kq::before,
          [data-framer-name="Member Image"]::before {
            content: "" !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: linear-gradient(
              115deg,
              transparent 0%,
              transparent 28%,
              rgba(255, 215, 130, 0.04) 40%,
              rgba(255, 235, 180, 0.18) 47%,
              rgba(255, 255, 255, 0.45) 50%,
              rgba(255, 235, 180, 0.18) 53%,
              rgba(255, 215, 130, 0.04) 60%,
              transparent 72%,
              transparent 100%
            ) !important;
            transform: translateX(-150%) skewX(-20deg) translateZ(0) !important;
            pointer-events: none !important;
            opacity: 0 !important;
            z-index: 6 !important;
            mix-blend-mode: screen !important;
            will-change: transform, opacity !important;
          }
          .esper-award-card:hover .esper-award-card-imgwrap::before,
          [data-framer-name="Card"]:hover .framer-9xp6kq::before,
          a.framer-14ovzi3:hover .framer-9xp6kq::before,
          .framer-Wwu9j:hover .framer-9xp6kq::before,
          [data-framer-name="Card"]:hover [data-framer-name="Member Image"]::before {
            animation: esperCardShineSweep 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
          }
          @keyframes esperCardShineSweep {
            0% {
              transform: translateX(-150%) skewX(-20deg) translateZ(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 0.9;
            }
            100% {
              transform: translateX(150%) skewX(-20deg) translateZ(0);
              opacity: 0;
            }
          }
          .esper-award-card .framer-z9yiom,
          .framer-z9yiom,
          [data-framer-name="Light Effect"] {
            aspect-ratio: 1;
            width: 420px !important;
            height: 420px !important;
            position: absolute !important;
            top: -380px !important;
            left: -380px !important;
            overflow: hidden !important;
            pointer-events: none !important;
            transition: top 0.75s cubic-bezier(0.16, 1, 0.3, 1), left 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease !important;
            opacity: 0.2 !important;
            z-index: 4 !important;
          }
          .esper-award-card:hover .framer-z9yiom,
          [data-framer-name="Card"]:hover .framer-z9yiom,
          a.framer-14ovzi3:hover .framer-z9yiom,
          .framer-Wwu9j:hover .framer-z9yiom,
          [data-framer-name="Card"]:hover [data-framer-name="Light Effect"] {
            top: 260px !important;
            left: 200px !important;
            opacity: 0.95 !important;
          }
          .esper-award-card:hover .esper-award-card-imgwrap {
            border-color: rgba(255, 213, 126, 0.8) !important;
            box-shadow: 0 16px 45px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 190, 77, 0.4), inset 0 0 18px rgba(255, 213, 126, 0.2) !important;
          }
          .esper-award-card:hover .esper-award-card-title,
          [data-framer-name="Card"]:hover .framer-nsuui8 h3,
          a.framer-14ovzi3:hover .framer-nsuui8 h3,
          .framer-Wwu9j:hover .framer-nsuui8 h3,
          [data-framer-name="Card"]:hover .esper-award-card-title,
          [data-framer-name="Card"]:hover .framer-nsuui8 .framer-text {
            color: #ffd57e !important;
            text-shadow: 0 0 14px rgba(255, 213, 126, 0.6) !important;
          }
          .esper-award-card-imgwrap img,
          .framer-9xp6kq img,
          .framer-1oeo7ga img,
          [data-framer-name="Member Image"] img {
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          .esper-award-card:hover .esper-award-card-imgwrap img,
          [data-framer-name="Card"]:hover .framer-9xp6kq img,
          a.framer-14ovzi3:hover .framer-9xp6kq img,
          .framer-Wwu9j:hover .framer-9xp6kq img,
          [data-framer-name="Card"]:hover .framer-1oeo7ga img,
          [data-framer-name="Card"]:hover [data-framer-name="Member Image"] img {
            transform: scale(1.06) !important;
          }
          .framer-NuCN4,
          [data-framer-name="Subscribe Button"] {
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease !important;
          }
          .framer-NuCN4:hover,
          [data-framer-name="Subscribe Button"]:hover {
            transform: scale(1.04) translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(255, 213, 126, 0.35) !important;
          }
          /* Luxury Gold Buttons (Watch Full Episode, Visit Full Album, Video Play Button) */
          .framer-1gxryuz,
          [data-framer-name="Orange Button"],
          .framer-11ckt1l,
          .framer-uiizrd-container a,
          .framer-13kfmgi-container a,
          .framer-1dbp5on-container a,
          .framer-fe31eb-container a,
          .framer-a7x7db-container a,
          .framer-s59ln5-container a {
            background: linear-gradient(180deg, #ffd885 0%, #d49326 50%, #a66e0a 100%) !important;
            box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.45), 0 4px 18px rgba(212, 147, 38, 0.35) !important;
            border: 1px solid rgba(255, 225, 148, 0.45) !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          .framer-1gxryuz:hover,
          [data-framer-name="Orange Button"]:hover,
          .framer-11ckt1l:hover,
          .framer-uiizrd-container a:hover,
          .framer-13kfmgi-container a:hover,
          .framer-1dbp5on-container a:hover,
          .framer-fe31eb-container a:hover,
          .framer-a7x7db-container a:hover,
          .framer-s59ln5-container a:hover {
            background: linear-gradient(180deg, #ffe6a3 0%, #e5a73b 50%, #be8014 100%) !important;
            box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.65), 0 6px 26px rgba(229, 167, 59, 0.55) !important;
            transform: translateY(-2px) !important;
          }
          .framer-1gxryuz .framer-swkj2d p,
          .framer-1gxryuz .framer-swkj2d span,
          [data-framer-name="Orange Button"] p,
          [data-framer-name="Orange Button"] span {
            color: #ffffff !important;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5), 0 0 10px rgba(138, 88, 10, 0.4) !important;
            font-weight: 500 !important;
          }
          .framer-GnrQ9.framer-ftv5ce,
          .framer-GnrQ9,
          .framer-ftv5ce,
          [data-framer-name="Play"],
          [data-framer-name="Pause"],
          .framer-v-ftv5ce,
          .framer-v-x07z0q {
            background: linear-gradient(180deg, #ffd885 0%, #d49326 50%, #a66e0a 100%) !important;
            box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.5), 0 4px 22px rgba(212, 147, 38, 0.45) !important;
            border: 1px solid rgba(255, 225, 148, 0.4) !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          .framer-GnrQ9.framer-ftv5ce:hover,
          .framer-GnrQ9:hover,
          .framer-ftv5ce:hover,
          [data-framer-name="Play"]:hover,
          [data-framer-name="Pause"]:hover,
          .framer-v-ftv5ce:hover,
          .framer-v-x07z0q:hover {
            background: linear-gradient(180deg, #ffe6a3 0%, #e5a73b 50%, #be8014 100%) !important;
            box-shadow: inset 0px 1px 3px rgba(255, 255, 255, 0.7), 0 6px 30px rgba(229, 167, 59, 0.65) !important;
            transform: scale(1.08) !important;
          }
          .framer-8e3bt0,
          .framer-8e3bt0 *,
          .framer-1qbciz1,
          .framer-1qbciz1 *,
          .framer-124em4z,
          .framer-124em4z * {
            font-family: "Constantine", serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            letter-spacing: 0.02em !important;
            text-transform: capitalize !important;
          }
          .framer-z2h1x2 {
            cursor: pointer !important;
            pointer-events: auto !important;
          }
          .framer-z2h1x2 * {
            pointer-events: none !important;
          }
          .framer-v-w7utna .framer-ralyy7 {
            top: calc(50% - 1px) !important;
            transform: rotate(45deg) !important;
          }
          .framer-v-w7utna .framer-120i7ew {
            top: calc(50% - 1px) !important;
            transform: rotate(-45deg) !important;
          }
          .framer-ralyy7, .framer-120i7ew {
            transition: transform 0.25s ease, top 0.25s ease !important;
          }

          /* Universal Card Title & Subtitle Overlap Fix */
          .esper-awards-grid .esper-award-card-text,
          .esper-award-card-text {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            width: 100% !important;
            max-width: 280px !important;
            height: auto !important;
            min-height: 52px !important;
            margin: 14px auto 0 auto !important;
            padding: 0 4px !important;
            position: relative !important;
            box-sizing: border-box !important;
          }
          .esper-awards-grid .esper-award-card-text *,
          .esper-award-card-text * {
            box-sizing: border-box !important;
          }
          .esper-awards-grid .framer-1uwndhu,
          .esper-award-card-text .framer-1uwndhu {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            width: 100% !important;
            height: auto !important;
            min-height: 48px !important;
            position: static !important;
            margin: 0 auto !important;
            padding: 0 !important;
            gap: 6px !important;
            overflow: visible !important;
          }
          .esper-awards-grid .framer-nsuui8,
          .esper-award-card-text .framer-nsuui8,
          .esper-awards-grid .framer-1rquw6u,
          .esper-award-card-text .framer-1rquw6u {
            display: block !important;
            position: static !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            text-align: center !important;
            overflow: visible !important;
            white-space: normal !important;
          }
          .esper-awards-grid .esper-award-card-title,
          .esper-award-card-title {
            display: block !important;
            position: static !important;
            font-family: "Constantine", serif !important;
            font-size: 19px !important;
            line-height: 1.25 !important;
            color: #ffffff !important;
            text-align: center !important;
            margin: 0 !important;
            padding: 0 !important;
            letter-spacing: 0.02em !important;
            transition: color 0.3s ease !important;
            white-space: normal !important;
          }
          .esper-awards-grid .esper-award-card-sub,
          .esper-award-card-sub {
            display: block !important;
            position: static !important;
            font-family: "Nebula", sans-serif !important;
            font-size: 11px !important;
            line-height: 1.3 !important;
            color: #e5a93c !important;
            text-transform: uppercase !important;
            letter-spacing: 0.14em !important;
            text-align: center !important;
            margin: 6px 0 0 0 !important;
            padding: 0 !important;
            white-space: normal !important;
          }

          /* Universal Mobile Viewport & Responsiveness Fix */
          @media (max-width: 899.98px) {
            html, body, #main {
              overflow-x: hidden !important;
              max-width: 100vw !important;
              width: 100% !important;
              box-sizing: border-box !important;
              position: relative !important;
            }
            .framer-7YhlT,
            .framer-LJlZq,
            .framer-7YhlT.framer-72rtr7,
            .framer-LJlZq.framer-72rtr7,
            .framer-7YhlT.framer-193nlgj,
            .framer-LJlZq.framer-193nlgj,
            .framer-7YhlT.framer-ebiaht,
            .framer-LJlZq.framer-ebiaht,
            .framer-7YhlT.framer-9w4hrp,
            .framer-LJlZq.framer-9w4hrp,
            div[data-framer-root],
            .framer-nqkdlu,
            .framer-fanaa3-container,
            .framer-hozd2f-container,
            .framer-1xskp1a,
            .framer-bmBk0,
            .framer-bmBk0.framer-1e142ra,
            .framer-SSS4a,
            .framer-SSS4a.framer-1exli70,
            .framer-SSS4a.framer-v-19y430h.framer-1exli70,
            header,
            footer,
            #esper27-coming-soon,
            #esper-all-awards-section,
            .esper-derana-header,
            .framer-1ylbk1b,
            .framer-1gzigij {
              width: 100% !important;
              max-width: 100vw !important;
              box-sizing: border-box !important;
              margin-left: auto !important;
              margin-right: auto !important;
              overflow-x: hidden !important;
            }
            .framer-lhng8p,
            .framer-LJlZq .framer-lhng8p {
              box-sizing: border-box !important;
              width: 100% !important;
              max-width: 100vw !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
              margin-left: auto !important;
              margin-right: auto !important;
              display: flex !important;
              flex-direction: column !important;
              align-items: center !important;
            }
            .framer-1gzigij {
              max-width: 100% !important;
              width: 100% !important;
              padding: 8px !important;
              box-sizing: border-box !important;
            }
            .framer-bmBk0 .framer-dfko03 {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center !important;
              gap: 16px !important;
              padding: 24px 16px !important;
            }
            .framer-bmBk0 .framer-15pyp2k,
            .framer-bmBk0 .framer-7heklo {
              justify-content: center !important;
              text-align: center !important;
              flex-wrap: wrap !important;
              width: 100% !important;
            }
            #injected-esper-form {
              width: 100% !important;
              max-width: 100% !important;
              box-sizing: border-box !important;
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
              margin: 0 auto !important;
              padding: 0 !important;
            }
            .page-container {
              width: 100% !important;
              max-width: 100% !important;
              box-sizing: border-box !important;
              margin: 20px auto 40px auto !important;
              padding: 0 !important;
            }
            .registration-form,
            .form-columns,
            .form-column,
            .form-row,
            .input-wrapper,
            .form-control,
            .file-upload-box,
            .registration-note,
            .checkbox-row,
            .action-section {
              width: 100% !important;
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
          }

          @media (max-width: 680px) {
            .esper-awards-grid,
            .esper-awards-grid.esper-grid-intra,
            .esper-awards-grid.esper-grid-open,
            .framer-LJlZq .framer-g159kn {
              grid-template-columns: 1fr !important;
              max-width: 320px !important;
              margin-left: auto !important;
              margin-right: auto !important;
              gap: 32px !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .esper-awards-grid-section {
              padding: 40px 16px 80px 16px !important;
              width: 100% !important;
              max-width: 100vw !important;
              box-sizing: border-box !important;
              overflow-x: hidden !important;
            }
            .esper-internal-subheader {
              padding: 80px 16px 40px 16px !important;
              width: 100% !important;
              max-width: 100vw !important;
              box-sizing: border-box !important;
              overflow-x: hidden !important;
            }
            .esper-universal-register-bottom {
              width: 100% !important;
              max-width: 100% !important;
              margin-top: 48px !important;
              padding: 0 12px !important;
              box-sizing: border-box !important;
            }
            .esper-universal-register-bottom-card {
              flex-direction: column !important;
              text-align: center !important;
              padding: 28px 16px !important;
              gap: 20px !important;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", injectStyles);
    } else {
      injectStyles();
    }

    // Fallback toggle for mobile navigation if React is not actively managing it
    document.addEventListener("click", (e) => {
      const icon = e.target.closest("[data-framer-name='Icon'], .framer-z2h1x2");
      if (!icon) return;

      const header = icon.closest("header");
      if (!header) return;

      const wasOpen = header.classList.contains("framer-v-w7utna");

      setTimeout(() => {
        const isNowOpen = header.classList.contains("framer-v-w7utna");
        // If React handled the state change, do nothing
        if (isNowOpen !== wasOpen) return;

        // Fallback manual toggle
        if (!wasOpen) {
          header.classList.remove("framer-v-19y430h");
          header.classList.add("framer-v-w7utna");

          // Ensure nav links exist inside .framer-bu79ji
          const logoNav = header.querySelector(".framer-bu79ji");
          if (logoNav && !logoNav.querySelector(".framer-1qupc9b")) {
            const existingNav = document.querySelector(".framer-1qupc9b");
            if (existingNav) {
              const clone = existingNav.cloneNode(true);
              logoNav.appendChild(clone);
            }
          }
        } else {
          header.classList.remove("framer-v-w7utna");
          header.classList.add("framer-v-19y430h");
        }
      }, 35);
    });
  })();
})();
// --- END UNIVERSAL ESPER NAVIGATION HANDLER ---


// --- UNIVERSAL HERO VIDEO HANDLER ---
(function initHeroVideo() {
  function ensureHeroVideo() {
    if (window.location.pathname.startsWith("/esper/inter") ||
        window.location.pathname.startsWith("/esper/intra") ||
        window.location.pathname.startsWith("/esper/open") ||
        window.location.pathname.startsWith("/esper/popular")) {
      return;
    }

    var plasma = document.querySelector(".framer-w3gto7, [data-framer-name=\"Plasma\"]");
    var target = plasma;
    if (!target) {
      target = document.querySelector(".framer-nqkdlu");
    }

    if (target && !target.querySelector("video.esper-hero-video-bg")) {
      var video = document.createElement("video");
      video.className = "esper-hero-video-bg";
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.poster = "/esper/images/hero-poster.png";
      video.src = "/esper/hero-video.mp4";
      video.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;pointer-events:none;";
      target.prepend(video);
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(function() {});
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ensureHeroVideo);
  } else {
    ensureHeroVideo();
  }
  setInterval(ensureHeroVideo, 1200);
})();

// --- UNIVERSAL PAGE LOAD VISIBILITY & ESPER 27 HANDLER ---
(function() {
  function revealPageContent() {
    var selectors = [
      ".framer-lhng8p",
      "[data-framer-name='Team']",
      "[data-framer-name='Bottom']",
      "[data-framer-appear-id]",
      ".framer-nrbcmf",
      ".ssr-variant",
      ".framer-1ylbk1b"
    ];
    var els = document.querySelectorAll(selectors.join(","));
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.style.opacity === "0" || el.style.opacity === "0.001") {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      }
    }

    // Ensure bento gallery images are never covered by black overlays
    document.querySelectorAll(".framer-ig4vtf-container [class*='bento-card'] > div").forEach(function(div) {
      div.style.setProperty("display", "none", "important");
      div.style.setProperty("opacity", "0", "important");
    });
    document.querySelectorAll(".framer-ig4vtf-container [class*='bento-card'] img").forEach(function(img) {
      img.style.setProperty("opacity", "1", "important");
      img.style.setProperty("visibility", "visible", "important");
      img.style.setProperty("display", "block", "important");
    });

    removeOldAwardsSections();

    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(new Event("resize"));
  }

  // Permanently remove old Creator Awards / Tech Awards static sections
  function removeOldAwardsSections() {
    var selectors = [
      ".framer-15qykm",
      ".framer-g159kn",
      ".framer-8e3bt0",
      ".framer-1qbciz1",
      ".framer-ndz598",
      ".framer-w85e7j",
      ".framer-p4q4wv",
      "#awards2",
      ".framer-1kbkbje",
      ".framer-1n14928",
      ".framer-124em4z",
      ".framer-153iuej",
      ".framer-1nbg65x",
      ".framer-1sv1kgx",
      "#team-1",
      "#team-2",
      ".framer-cp2zc9",
      ".framer-ti0ezp",
      ".framer-un73em",
      ".framer-1og5q3n"
    ];
    document.querySelectorAll(selectors.join(",")).forEach(function(el) {
      el.remove();
    });
    document.querySelectorAll("h2, h3, p, div").forEach(function(el) {
      var t = (el.textContent || "").trim().toLowerCase();
      if (t === "creator awards" || t === "school awards" || t === "tech awards") {
        var parentSection = el.closest(".framer-15qykm, .framer-p4q4wv, #awards2, .framer-g159kn, .framer-153iuej");
        if (parentSection) {
          parentSection.remove();
        } else {
          el.remove();
        }
      }
    });
  }

  // Esper '26 Concluded Heading: Esper '26 (large) + successfully concluded ! (medium)
  function updateConcludedHeading() {
    var h2s = document.querySelectorAll(".framer-1ylbk1b h2, .esper-concluded-heading");
    h2s.forEach(function(h2) {
      if (!h2.querySelector(".esper-concluded-large")) {
        h2.classList.add("esper-concluded-heading");
        h2.innerHTML = '<span class="esper-concluded-large">Esper \'26</span><span class="esper-concluded-medium">successfully concluded !</span>';
      }
    });
  }

  // Esper '27 countdown: dates not announced yet, keep all as '--'
  function updateCountdown() {
    var dEls = document.querySelectorAll("#esper27-days, .esper27-days");
    var hEls = document.querySelectorAll("#esper27-hours, .esper27-hours");
    var mEls = document.querySelectorAll("#esper27-mins, .esper27-mins");
    var sEls = document.querySelectorAll("#esper27-secs, .esper27-secs");

    dEls.forEach(function(el) { el.textContent = "--"; });
    hEls.forEach(function(el) { el.textContent = "--"; });
    mEls.forEach(function(el) { el.textContent = "--"; });
    sEls.forEach(function(el) { el.textContent = "--"; });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      revealPageContent();
      updateCountdown();
      updateConcludedHeading();
    });
  } else {
    revealPageContent();
    updateCountdown();
    updateConcludedHeading();
  }

  window.addEventListener("load", function() {
    revealPageContent();
    updateCountdown();
    updateConcludedHeading();
  });

  // Universal footer updater
  function updateFooter() {
    var curYear = new Date().getFullYear();
    // Target left author container
    document.querySelectorAll(".framer-15pyp2k, [data-framer-name='Author']").forEach(function(el) {
      el.innerHTML = '<span style="color: #888888;">Created by</span> <span style="color: #ffffff; font-weight: 500;">Team Ocular</span><span style="color: #888888;">, Re-Designed by</span> <a href="https://frametoque.com" target="_blank" rel="noopener noreferrer" style="color: #ffffff; font-weight: 500; text-decoration: underline; text-underline-offset: 3px;">Frametoque Digital</a>';
    });

    // Target right copyright container
    document.querySelectorAll(".framer-7heklo, [data-framer-name='Tool'], [data-framer-name='Created by boucheedesign']").forEach(function(el) {
      el.innerHTML = '<span style="color: #ffffff; white-space: nowrap;">© ' + curYear + ' SSDSSC. All Rights Reserved.</span>';
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateFooter);
  } else {
    updateFooter();
  }
  window.addEventListener("load", updateFooter);
  setInterval(function() {
    updateFooter();
    updateConcludedHeading();
  }, 1000);


  setTimeout(revealPageContent, 40);
  setTimeout(revealPageContent, 120);
  setTimeout(revealPageContent, 300);
  setTimeout(revealPageContent, 600);
  setTimeout(revealPageContent, 1200);

  setInterval(updateCountdown, 1000);


  // ==========================================
  // LENIS SMOOTH SCROLL ENGINE
  // ==========================================
(function(window, document) {
  'use strict';
  function clamp(e, t, n) { return Math.max(e, Math.min(t, n)); }
  var p = window;
  var R = clamp;
  var i = function() {};
  var te, z, B, V, H, U;

   i(), te = class { advance(e) { if (!this.isRunning) return; let t = !1; if (this.lerp) this.value = function (e, t, n, r) { return function (e, t, n) { return (1 - n) * e + n * t }(e, t, 1 - Math.exp(-n * r)) }(this.value, this.to, 60 * this.lerp, e), Math.round(this.value) === this.to && (this.value = this.to, t = !0); else { this.currentTime += e; let n = R(0, this.currentTime / this.duration, 1); t = n >= 1; let r = t ? 1 : this.easing(n); this.value = this.from + (this.to - this.from) * r } t && this.stop(), this.onUpdate?.(this.value, t) } stop() { this.isRunning = !1 } fromTo(e, t, { lerp: n = .1, duration: r = 1, easing: i = (e => e), onStart: a, onUpdate: o }) { this.from = this.value = e, this.to = t, this.lerp = n, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, a?.(), this.onUpdate = o } }, z = class { constructor({ wrapper: e, content: t, autoResize: n = !0, debounce: r = 250 } = {}) { this.wrapper = e, this.content = t, n && (this.debouncedResize = function (e, t) { let n; return function () { let r = arguments, i = this; clearTimeout(n), n = setTimeout((function () { e.apply(i, r) }), t) } }(this.resize, r), this.wrapper === p ? p.addEventListener(`resize`, this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize() } destroy() { this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), p.removeEventListener(`resize`, this.debouncedResize, !1) } resize = () => { this.onWrapperResize(), this.onContentResize() }; onWrapperResize = () => { this.wrapper === p ? (this.width = p.innerWidth, this.height = p.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight) }; onContentResize = () => { this.wrapper === p ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth) }; get limit() { return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height } } }, B = class { constructor() { this.events = {} } emit(e, ...t) { let n = this.events[e] || []; for (let e = 0, r = n.length; e < r; e++)n[e](...t) } on(e, t) { return this.events[e]?.push(t) || (this.events[e] = [t]), () => { this.events[e] = this.events[e]?.filter((e => t !== e)) } } off(e, t) { this.events[e] = this.events[e]?.filter((e => t !== e)) } destroy() { this.events = {} } }, V = 100 / 6, H = class { constructor(e, { wheelMultiplier: t = 1, touchMultiplier: n = 1 }) { this.element = e, this.wheelMultiplier = t, this.touchMultiplier = n, this.touchStart = { x: null, y: null }, this.emitter = new B, p.addEventListener(`resize`, this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener(`wheel`, this.onWheel, { passive: !1 }), this.element.addEventListener(`touchstart`, this.onTouchStart, { passive: !1 }), this.element.addEventListener(`touchmove`, this.onTouchMove, { passive: !1 }), this.element.addEventListener(`touchend`, this.onTouchEnd, { passive: !1 }) } on(e, t) { return this.emitter.on(e, t) } destroy() { this.emitter.destroy(), p.removeEventListener(`resize`, this.onWindowResize, !1), this.element.removeEventListener(`wheel`, this.onWheel, { passive: !1 }), this.element.removeEventListener(`touchstart`, this.onTouchStart, { passive: !1 }), this.element.removeEventListener(`touchmove`, this.onTouchMove, { passive: !1 }), this.element.removeEventListener(`touchend`, this.onTouchEnd, { passive: !1 }) } onTouchStart = e => { let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e; this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }) }; onTouchMove = e => { let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e, r = -(t - this.touchStart.x) * this.touchMultiplier, i = -(n - this.touchStart.y) * this.touchMultiplier; this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = { x: r, y: i }, this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }) }; onTouchEnd = e => { this.emitter.emit(`scroll`, { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: e }) }; onWheel = e => { let { deltaX: t, deltaY: n, deltaMode: r } = e; t *= r === 1 ? V : r === 2 ? this.windowWidth : 1, n *= r === 1 ? V : r === 2 ? this.windowHeight : 1, t *= this.wheelMultiplier, n *= this.wheelMultiplier, this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }) }; onWindowResize = () => { this.windowWidth = p.innerWidth, this.windowHeight = p.innerHeight } }, U = class { constructor({ wrapper: e = p, content: t = document.documentElement, wheelEventsTarget: n = e, eventsTarget: r = n, smoothWheel: i = !0, syncTouch: a = !1, syncTouchLerp: o = .075, touchInertiaMultiplier: s = 35, duration: c, easing: l = (e => Math.min(1, 1.001 - 2 ** (-10 * e))), lerp: u = !c && .1, infinite: d = !1, orientation: f = `vertical`, gestureOrientation: m = `vertical`, touchMultiplier: h = 1, wheelMultiplier: g = 1, autoResize: _ = !0, prevent: v = !1, __experimental__naiveDimensions: y = !1 } = {}) { this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => { if (n.ctrlKey) return; let r = n.type.includes(`touch`), i = n.type.includes(`wheel`); if (this.isTouching = n.type === `touchstart` || n.type === `touchmove`, this.options.syncTouch && r && n.type === `touchstart` && !this.isStopped && !this.isLocked) return void this.reset(); let a = e === 0 && t === 0, o = this.options.gestureOrientation === `vertical` && t === 0 || this.options.gestureOrientation === `horizontal` && e === 0; if (a || o) return; let s = n.composedPath(); s = s.slice(0, s.indexOf(this.rootElement)); let c = this.options.prevent; if (s.find((e => (typeof c == `function` ? c?.(e) : c) || e.hasAttribute?.call(e, `data-lenis-prevent`) || r && e.hasAttribute?.call(e, `data-lenis-prevent-touch`) || i && e.hasAttribute?.call(e, `data-lenis-prevent-wheel`) || e.classList?.contains(`lenis`) && !e.classList?.contains(`lenis-stopped`)))) return; if (this.isStopped || this.isLocked) return void n.preventDefault(); if (!(this.options.syncTouch && r || this.options.smoothWheel && i)) return this.isScrolling = `native`, void this.animate.stop(); n.preventDefault(); let l = t; this.options.gestureOrientation === `both` ? l = Math.abs(t) > Math.abs(e) ? t : e : this.options.gestureOrientation === `horizontal` && (l = e); let u = r && this.options.syncTouch, d = r && n.type === `touchend` && Math.abs(l) > 5; d && (l = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + l, Object.assign({ programmatic: !1 }, u ? { lerp: d ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing })) }, this.onNativeScroll = () => { if (clearTimeout(this.__resetVelocityTimeout), delete this.__resetVelocityTimeout, this.__preventNextNativeScrollEvent) delete this.__preventNextNativeScrollEvent; else if (!1 === this.isScrolling || this.isScrolling === `native`) { let e = this.animatedScroll; this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isScrolling = `native`, this.emit(), this.velocity !== 0 && (this.__resetVelocityTimeout = setTimeout((() => { this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit() }), 400)) } }, p.lenisVersion = `1.1.2`, e !== document.documentElement && e !== document.body || (e = p), this.options = { wrapper: e, content: t, wheelEventsTarget: n, eventsTarget: r, smoothWheel: i, syncTouch: a, syncTouchLerp: o, touchInertiaMultiplier: s, duration: c, easing: l, lerp: u, infinite: d, gestureOrientation: m, orientation: f, touchMultiplier: h, wheelMultiplier: g, autoResize: _, prevent: v, __experimental__naiveDimensions: y }, this.animate = new te, this.emitter = new B, this.dimensions = new z({ wrapper: e, content: t, autoResize: _ }), this.updateClassName(), this.userData = {}, this.time = 0, this.velocity = this.lastVelocity = 0, this.isLocked = !1, this.isStopped = !1, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll, !1), this.virtualScroll = new H(r, { touchMultiplier: h, wheelMultiplier: g }), this.virtualScroll.on(`scroll`, this.onVirtualScroll) } destroy() { this.emitter.destroy(), this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName() } on(e, t) { return this.emitter.on(e, t) } off(e, t) { return this.emitter.off(e, t) } setScroll(e) { this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e } resize() { this.dimensions.resize() } emit({ userData: e = {} } = {}) { this.userData = e, this.emitter.emit(`scroll`, this), this.userData = {} } reset() { this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop() } start() { this.isStopped && (this.isStopped = !1, this.reset()) } stop() { this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset()) } raf(e) { let t = e - (this.time || e); this.time = e, this.animate.advance(.001 * t) } scrollTo(e, { offset: t = 0, immediate: n = !1, lock: r = !1, duration: i = this.options.duration, easing: a = this.options.easing, lerp: o = !i && this.options.lerp, onStart: s, onComplete: c, force: l = !1, programmatic: u = !0, userData: d = {} } = {}) { if (!this.isStopped && !this.isLocked || l) { if ([`top`, `left`, `start`].includes(e)) e = 0; else if ([`bottom`, `right`, `end`].includes(e)) e = this.limit; else { let n; if (typeof e == `string` ? n = document.querySelector(e) : e != null && e.nodeType && (n = e), n) { if (this.options.wrapper !== p) { let e = this.options.wrapper.getBoundingClientRect(); t -= this.isHorizontal ? e.left : e.top } let r = n.getBoundingClientRect(); e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll } } if (typeof e == `number`) { if (e += t, e = Math.round(e), this.options.infinite ? u && (this.targetScroll = this.animatedScroll = this.scroll) : e = R(0, e, this.limit), n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void (c == null || c(this)); e !== this.targetScroll && (u || (this.targetScroll = e), this.animate.fromTo(this.animatedScroll, e, { duration: i, easing: a, lerp: o, onStart: () => { r && (this.isLocked = !0), this.isScrolling = `smooth`, s?.(this) }, onUpdate: (e, t) => { this.isScrolling = `smooth`, this.lastVelocity = this.velocity, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), u && (this.targetScroll = e), t || this.emit({ userData: d }), t && (this.reset(), this.emit({ userData: d }), c?.(this), this.__preventNextNativeScrollEvent = !0) } })) } } } get rootElement() { return this.options.wrapper === p ? document.documentElement : this.options.wrapper } get limit() { return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? `x` : `y`] } get isHorizontal() { return this.options.orientation === `horizontal` } get actualScroll() { return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop } get scroll() { return this.options.infinite ? function (e, t) { return (e % t + t) % t }(this.animatedScroll, this.limit) : this.animatedScroll } get progress() { return this.limit === 0 ? 1 : this.scroll / this.limit } get isScrolling() { return this.__isScrolling } set isScrolling(e) { this.__isScrolling !== e && (this.__isScrolling = e, this.updateClassName()) } get isStopped() { return this.__isStopped } set isStopped(e) { this.__isStopped !== e && (this.__isStopped = e, this.updateClassName()) } get isLocked() { return this.__isLocked } set isLocked(e) { this.__isLocked !== e && (this.__isLocked = e, this.updateClassName()) } get isSmooth() { return this.isScrolling === `smooth` } get className() { let e = `lenis`; return this.isStopped && (e += ` lenis-stopped`), this.isLocked && (e += ` lenis-locked`), this.isScrolling && (e += ` lenis-scrolling`), this.isScrolling === `smooth` && (e += ` lenis-smooth`), e } updateClassName() { this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim() } cleanUpClassName() { this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, ``).trim() } } 

  window.Lenis = U;
})(typeof window !== 'undefined' ? window : globalThis, typeof document !== 'undefined' ? document : {});


  (function initUniversalSmoothScroll() {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    var styleId = "lenis-smooth-scroll-styles";
    if (!document.getElementById(styleId)) {
      var style = document.createElement("style");
      style.id = styleId;
      style.textContent = [
        "html.lenis, html.lenis body { height: auto; }",
        ".lenis.lenis-smooth { scroll-behavior: auto !important; }",
        ".lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }",
        ".lenis.lenis-stopped { overflow: hidden; }",
        ".lenis.lenis-scrolling iframe { pointer-events: none; }",
        "html { scroll-behavior: auto; }"
      ].join('\n');
      document.head.appendChild(style);
    }

    function setupLenis() {
      if (typeof window.Lenis !== "function") return;
      if (window.lenis && window.lenis.isSmooth) return;

      try {
        var lenis = new window.Lenis({
          duration: 1.2,
          easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.5,
          infinite: false
        });

        window.lenis = lenis;

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Smooth scroll for internal anchor jumps (#contact, #team, etc.)
        document.addEventListener("click", function(e) {
          var a = e.target.closest("a[href*='#']");
          if (!a) return;
          var href = a.getAttribute("href") || "";
          var hashIdx = href.indexOf("#");
          if (hashIdx === -1) return;
          var hash = href.slice(hashIdx);
          if (!hash || hash === "#") return;

          var path = href.slice(0, hashIdx);
          if (path && path !== window.location.pathname && !window.location.href.includes(path)) return;

          var target = document.querySelector(hash);
          if (target) {
            e.preventDefault();
            e.stopPropagation();
            lenis.scrollTo(target, { offset: -60, duration: 1.2 });
          }
        }, true);

      } catch (err) {
        console.warn("[ESPER] Lenis smooth scroll init:", err);
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setupLenis);
    } else {
      setupLenis();
    }
    window.addEventListener("load", setupLenis);
  })();


  function removeWatchEpisodeButton() {
    document.querySelectorAll(".framer-uiizrd-container, .framer-13kfmgi-container, [data-framer-name='Orange Button']").forEach(function(el) {
      if (el.textContent && (el.textContent.includes("Full Episode") || el.textContent.includes("The Full Episode"))) {
        el.remove();
      }
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", removeWatchEpisodeButton);
  } else {
    removeWatchEpisodeButton();
  }
  window.addEventListener("load", removeWatchEpisodeButton);
  setInterval(removeWatchEpisodeButton, 200);

  // ESPER NAVIGATION & HERO VIDEO ENHANCEMENTS
  (function initEsperNavAndHero() {
    function setupNav() {
      // Mobile menu toggle listener
      document.addEventListener('click', function(e) {
        var toggle = e.target.closest('.esper-mobile-toggle');
        if (toggle) {
          e.preventDefault();
          var header = toggle.closest('.esper-top-header');
          var dropdown = header ? header.querySelector('.esper-mobile-dropdown') : null;
          if (dropdown) {
            toggle.classList.toggle('is-open');
            dropdown.classList.toggle('is-open');
          }
        }
      });

      // Close dropdown on click outside
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.esper-top-header')) {
          document.querySelectorAll('.esper-mobile-toggle.is-open').forEach(function(t) {
            t.classList.remove('is-open');
          });
          document.querySelectorAll('.esper-mobile-dropdown.is-open').forEach(function(d) {
            d.classList.remove('is-open');
          });
        }
      });

      // Homepage Framer nav Home link insertion & active state
      function updateFramerNav() {
        var framerNav = document.querySelector('nav.framer-1qupc9b');
        if (framerNav && !framerNav.querySelector('a[href="/esper"]') && !framerNav.querySelector('.esper-framer-home-item')) {
          var firstItem = framerNav.firstElementChild;
          if (firstItem) {
            var homeWrap = document.createElement('div');
            homeWrap.className = 'esper-framer-home-item';
            homeWrap.style.cssText = 'height: 100%; display: flex; align-items: center;';
            homeWrap.innerHTML = '<a class="framer-88ORW framer-k2gp8 framer-mxw6ar framer-v-mxw6ar framer-1c72blj" href="/esper" style="height:100%"><div class="framer-j1yhrf" style="--framer-paragraph-spacing:0px;"><p class="framer-text framer-styles-preset-bgecq9" style="text-transform:uppercase;">HOME</p></div></a>';
            framerNav.insertBefore(homeWrap, firstItem);
          }
        }

        // Active state styling
        var curPath = window.location.pathname.replace(/\/+$/, '') || '/esper';
        document.querySelectorAll('nav.framer-1qupc9b a, .esper-header-nav a, .esper-mobile-dropdown a').forEach(function(a) {
          var href = (a.getAttribute('href') || '').replace(/\/+$/, '') || '/esper';
          if (href === curPath || (curPath === '' && href === '/esper')) {
            a.classList.add('active');
            var p = a.querySelector('p');
            if (p) p.style.color = '#ffd57e';
          }
        });
      }

      updateFramerNav();
      setInterval(updateFramerNav, 400);

      // Hero video autoplay guarantee
      function playHeroVideos() {
        document.querySelectorAll('video.esper-combined-hero-video').forEach(function(vid) {
          if (vid.paused) {
            var p = vid.play();
            if (p && typeof p.catch === 'function') p.catch(function() {});
          }
        });
      }
      playHeroVideos();
      window.addEventListener('load', playHeroVideos);
      document.addEventListener('touchstart', playHeroVideos, { once: true, passive: true });
      document.addEventListener('click', playHeroVideos, { once: true, passive: true });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupNav);
    } else {
      setupNav();
    }
  })();

  // Global link fixer for /open -> /esper/open
  function fixAllOpenLinks() {
    document.querySelectorAll('a').forEach(function(a) {
      var href = a.getAttribute('href') || '';
      var rawHref = a.href || '';
      var text = (a.textContent || '').trim().toLowerCase();
      if (
        href === '/open' || href === '/open/' || href.endsWith('/open') || href.endsWith('/open/') ||
        rawHref.endsWith('/open') || rawHref.endsWith('/open/') ||
        (text.includes('open awards') && !href.includes('/register'))
      ) {
        if (!href.includes('/register') && href !== '/esper/open') {
          a.setAttribute('href', '/esper/open');
        }
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixAllOpenLinks);
  } else {
    fixAllOpenLinks();
  }
  window.addEventListener('load', fixAllOpenLinks);
  setInterval(fixAllOpenLinks, 400);
})();
