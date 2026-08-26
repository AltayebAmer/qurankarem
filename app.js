/* GUARDIAN:BEGIN
   🛡️ QuranKarem.org — © 2026 Artist Altayeb Amer
   الفنان الطيب عامر  ·  https://qurankarem.org
   Protected by ALTAYEB GUARDIAN v4.0
   GUARDIAN:END */
// QuranKareem V2 — app.js
// Stars + i18n + Prayer + Qibla + Quran + Audio + Episodes + AI
// ============================================================

// ===== i18n =====
var T = {
  ar:{enter:"ابدأ رحلتك مع كلام الله",hero_badge:"✦ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  hero_sub:"وجهتك الإسلامية الشاملة — اقرأ، استمع، تعلّم، وتدبّر",
  nav_home:"الرئيسية",nav_quran:"القرآن",nav_prayer:"الصلاة والقبلة",
  nav_audio:"التلاوة",nav_episodes:"الحلقات",nav_ai:"المساعد",
  read_quran:"اقرأ القرآن",listen:"استمع",qibla:"القبلة",
  daily_verse:"✦ آية اليوم",listen_btn:"استمع",meditate:"تأمّل",save:"حفظ",share:"مشاركة",
  surahs:"سورة",ayahs:"آية",juzs:"جزءاً",reciters_count:"قارئاً",
  feat_quran:"القرآن الكامل",feat_quran_d:"١١٤ سورة بخط عثماني مع الترجمة",
  feat_qibla:"اتجاه القبلة",feat_qibla_d:"بوصلة ذكية نحو الكعبة المشرفة",
  feat_prayer:"أوقات الصلاة",feat_prayer_d:"مواقيت دقيقة مع عداد تنازلي",
  feat_recit:"التلاوة",feat_recit_d:"١٣ قارئاً من مصر والشام والحجاز ونجد والخليج",
  feat_med:"وضع التأمل",feat_med_d:"تجربة روحانية هادئة مع الآيات",
  feat_ai:"مساعد ذكي",feat_ai_d:"اسأل عن أي آية واحصل على شرح",
  prayer_times:"أوقات الصلاة",fajr:"الفجر",sunrise:"الشروق",dhuhr:"الظهر",
  asr:"العصر",maghrib:"المغرب",isha:"العشاء",next_prayer:"الصلاة القادمة",
  locating:"جاري التحديد...",quran_title:"المصحف الشريف",
  quran_sub:"اقرأ القرآن كاملاً بخط عثماني",select_surah:"اختر سورة من القائمة",
  prayer_qibla:"أوقات الصلاة واتجاه القبلة",
  qibla_dir:"اتجاه القبلة",mecca:"الكعبة المشرفة — مكة المكرمة",
  qibla_tap:"اضغط لتحديد اتجاه القبلة",find_qibla:"حدد اتجاه القبلة",
  audio_title:"مشغل التلاوة",audio_sub:"استمع لأعظم قراء القرآن الكريم",
  select_ayah:"اختر آية للاستماع",choose_reciter:"اختر القارئ",
  choose_surah_ayah:"اختر سورة وآية:",
  ep_title:"الحلقات القرآنية",ep_sub:"رحلة في معاني القرآن الكريم",
  ai_title:"المساعد القرآني",ai_sub:"اسأل عن أي آية أو موضوع قرآني",
  ai_name:"المساعد القرآني",ai_status:"● Claude AI",
  ai_greet:"السلام عليكم ورحمة الله",
  ai_intro:"أنا مساعدك القرآني. يمكنني شرح معاني الآيات وتفسيرها.",
  suggested:"أسئلة مقترحة:",
  footer_desc:"وجهتك الإسلامية الشاملة للقرآن قراءةً واستماعاً وتعلماً",
  sections:"الأقسام",reciters:"القراء",languages:"اللغات",rights:"جميع الحقوق محفوظة",
  nav_read:"القراءة",
  nav_listen:"الاستماع",
  nav_teach:"التعليم",
  learn:"تعلّم",
  door_read:"قراءة القرآن",
  door_read_d:"المصحف كاملاً بخط عثماني، مع التفسير الميسّر والترجمة والبحث واستئناف آخر قراءة",
  door_listen:"الاستماع للقرآن",
  door_listen_d:"اختر قارئك المفضل والسورة والآية، مع التكرار ومؤقّت النوم والموجة الصوتية",
  door_teach:"تعليم القرآن",
  door_teach_d:"حلقة تحفيظ: نطاق آيات، تكرار الآية والدورة، سكت بين الآيات، وتظليل كلمة بكلمة",
  door_open:"ادخل",
  last_read:"آخر قراءة:",
  resume:"تابع القراءة",
  bookmarked:"حُفظ الموضع",
  tafsir:"التفسير الميسّر",
  tafsir_off:"أُخفي التفسير",
  tafsir_err:"تعذّر تحميل التفسير",
  loading_tafsir:"جارٍ تحميل التفسير…",
  select_ayah:"اختر آية",
  mode_ayah:"آية آية",
  mode_surah:"السورة كاملة",
  sleep_timer:"مؤقّت النوم:",
  sleep_off:"إيقاف",
  sleep_set:"تم ضبط مؤقّت النوم",
  sleep_done:"انتهى المؤقّت — تم الإيقاف",
  teach_title:"حلقة التحفيظ",
  teach_sub:"كرّر، رتّل، وتابع الكلمات كلمةً كلمة حتى تُتقن الحفظ",
  teach_ph:"اختر سورة ونطاق الآيات ثم اضغط تشغيل",
  teach_done:"اكتملت التلاوة",
  reciter:"القارئ",
  surah:"السورة",
  from_ayah:"من الآية",
  to_ayah:"إلى الآية",
  rep_ayah:"تكرار الآية",
  rep_cycle:"تكرار الدورة",
  pause_between:"السكت بين الآيات",
  speed:"سرعة التلاوة",
  ayah_word:"الآية",
  cycle_word:"دورة",
  wait:"انتظر لحظة…",
  load_err:"تعذّر التحميل",
  audio_err:"تعذّر تحميل الصوت",
  offline_text:"عُرض النص المحفوظ محلياً",
  no_full_surah:"هذا القارئ متاح آية-آية فقط",
  tajweed_off:"أُغلق تلوين التجويد",
  tajweed_err:"تعذّر تحميل التجويد",
  loading_tajweed:"جارٍ تحميل التجويد…",
  auto_pause:"سكت تلقائي حسب طول الآية",
  keep_awake:"إبقاء الشاشة مضاءة",
  wakelock_unsupported:"المتصفح لا يدعم إبقاء الشاشة مضاءة",
  rc_idle:"سمّع الآيات بصوتك وسيتتبّعك النظام",
  rc_note:"🎙️ يعمل عبر تعرّف الصوت في متصفحك — تُرسَل تلاوتك لخدمة التعرّف الخاصة بالمتصفح.",
  rc_unsupported:"متصفحك لا يدعم التعرّف الصوتي (جرّب Chrome)",
  rc_denied:"رُفض الوصول للميكروفون",
  rc_listening:"أستمع… ابدأ التلاوة",
  rc_progress:"طابقت {n} من {t} كلمة",
  rc_done:"أحسنت! أكملت التسميع",
  feat_recite:"التسميع الصوتي",
  feat_recite_d:"اقرأ بصوتك فيتتبّعك النظام كلمة بكلمة",
  feat_teach:"حلقة التحفيظ",
  feat_teach_d:"تكرار وسكت وتظليل كلمة بكلمة للحفظ",
  feat_tajweed:"تلوين التجويد",
  feat_tajweed_d:"أحكام التجويد بألوان مع التفسير الميسّر",
  nav_contact:"تواصل معنا",
  nav_license:"حقوق المشروع",
  contact_title:"نسعد بتواصلك",
  contact_sub:"اقتراح، تصحيح، أو دعوة صالحة — راسلنا",
  contact_email:"البريد",
  contact_name:"الاسم",
  contact_msg:"رسالتك",
  contact_send:"إرسال",
  contact_note:"سيفتح تطبيق بريدك برسالة جاهزة للإرسال.",
  contact_empty:"اكتب رسالتك أولاً",
  designer:"تصميم وفكرة",
  license_title:"الملكية الفكرية",
  license_badge:"صدقة جارية — مجّاني للأبد",
  license_intro_h:"صُمّم هذا المشروع فكرةً وتصميماً على يد <a class='creator-link' href='https://altayebamer.com/' target='_blank' rel='noopener noreferrer'><b>الفنان الطيب عامر</b></a>، ابتغاءً لوجه الله تعالى.",license_t5_h:"ندعوك لو تكرمت أن تدعو بالشفاء العاجل لـ<a class='dua-link' href='https://www.youtube.com/@%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A7%D8%A8%D9%88%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D9%8A5%D8%B9/shorts' target='_blank' rel='noopener noreferrer'>أخي عدنان أبو سليمان</a> المريض بالشلل الرباعي بعد حادث سير.",license_intro:"صُمّم هذا المشروع فكرةً وتصميماً على يد الفنان الطيب عامر، ابتغاءً لوجه الله تعالى.",
  license_t1:"يُسمح بنسخ المشروع أو أجزاء منه بنيّة الخير والدعاء.",
  license_t2:"يُشترط إعادة نشره كصدقة جارية، مجّاناً، دون أي مقابل مادي.",
  license_t3:"يُمنع بيعه أو الاتجار به أو حجبه خلف مقابل.",
  license_t4:"ندعوك لو تكرمت أن تدعو لصاحب الفكرة ولوالديه ولأهله وذريته وأرحامه ولكل من أسهم في نشره.",
  license_dua:"اللهم اجعله في ميزان حسنات كل من عمل فيه ونشره",
  play_ayah:"استمع لهذه الآية",
  ask_ai:"اسأل المساعد عن الآية",
  bookmark_here:"حفظ هذا الموضع",
  to_teach:"إرسال إلى حلقة التحفيظ",
  ayah_not_found:"رقم الآية خارج نطاق السورة",
  dismiss:"إخفاء",
  license_t6:"الإعلان المحدود لمؤسسات قرآنية يغطّي كلفة الخوادم والخدمات فقط — المحتوى يبقى مجّانياً غير محجوب، ولا نبيع منه شيئاً.",license_t5:"ندعوك لو تكرمت أن تدعو بالشفاء العاجل لأخي عدنان أبو سليمان المريض بالشلل الرباعي بعد حادث سير.",
  foot_teach:"تعلم القرآن",
  foot_ai:"المساعد الذكي",
  footer_desc1:"وجهتك الإسلامية الشاملة للقرآن",
  footer_desc2:"قراءةً واستماعاً وتعلماً",
  ai_soon:"قريباً سوف يتم تفعيل خاصية المساعد الذكي",
  ai_soon_sub:"نعمل على إتاحة مساعد قرآني يجيب عن أسئلتك بإذن الله",
  ai_soon_status:"● قريباً",
  update_available:"تحديث جديد متوفّر — اضغط للتحديث",
  nudge_share1:"الدالُّ على الخير كفاعله — شارك هذا الموقع مع من تحب، ولك مثل أجر كل من انتفع به.",
  nudge_share2:"قد تكون مشاركتك لآيةٍ أو صفحة صدقةً جارية لك ولوالديك — انشر الخير يعُد إليك.",
  nudge_share3:"\"وتعاونوا على البرِّ والتقوى\" — دلَّ غيرك على هذا العمل القرآني وشارك في الأجر.",
  nudge_explore:"مرحباً بك 🌙 تصفّح كل صفحات الموقع: القراءة، الاستماع، التعليم، الصلاة والقبلة وغيرها.",
  nudge_feedback:"وجدتَ خطأً أو مشكلة؟ شاركنا ملاحظتك لنُصلحها — جزاك الله خيراً.",
  nudge_idea:"لديك فكرة أو رأي أو نصيحة لتطوير الموقع؟ يسعدنا أن تشاركنا إياها.",
  na_share:"شارك الموقع",
  na_contact:"شاركنا",
  na_ok:"حسناً",
  na_later:"لاحقاً",
  link_copied:"تم نسخ رابط الموقع — انشره تُؤجر",
  share_text:"موقع القرآن الكريم — اقرأ، استمع، وتعلّم القرآن",
  share_label:"انشر الخير:",
  theme_toggle:"تبديل الوضع الفاتح/الغامق",
  theme_light:"الوضع الفاتح",
  theme_dark:"الوضع الغامق",
  show_meaning:"إظهار/إخفاء المعنى",
  search_title:"بحث سريع",
  search_ph:"الكهف · ١٨:١٠ · الحصري",
  search_hint:"اكتب اسم سورة، أو رقمها، أو «١٨:١٠» لآية، أو اسم قارئ",
  sys:"أنت مساعد قرآني حكيم ودافئ. أجب بالعربية الفصحى البسيطة. اشرح معاني الآيات بأسلوب مبسط (3-5 جمل). لا تتحدث إلا في القرآن والإسلام."},
  en:{enter:"Begin your journey with God's words",hero_badge:"✦ In the Name of Allah",
  hero_sub:"Your comprehensive Islamic destination — read, listen, learn, and reflect",
  nav_home:"Home",nav_quran:"Quran",nav_prayer:"Prayer & Qibla",
  nav_audio:"Recitation",nav_episodes:"Episodes",nav_ai:"Assistant",
  read_quran:"Read Quran",listen:"Listen",qibla:"Qibla",
  daily_verse:"✦ Verse of the Day",listen_btn:"Listen",meditate:"Reflect",save:"Save",share:"Share",
  surahs:"Surahs",ayahs:"Verses",juzs:"Juz",reciters_count:"Reciters",
  feat_quran:"Complete Quran",feat_quran_d:"114 Surahs in Uthmanic script",
  feat_qibla:"Qibla Direction",feat_qibla_d:"Smart compass towards the Holy Kaaba",
  feat_prayer:"Prayer Times",feat_prayer_d:"Accurate times with countdown timer",
  feat_recit:"Recitation",feat_recit_d:"13 reciters from Egypt, the Levant, Hijaz, Najd & the Gulf",
  feat_med:"Meditation Mode",feat_med_d:"A peaceful spiritual experience",
  feat_ai:"AI Assistant",feat_ai_d:"Ask about any verse",
  prayer_times:"Prayer Times",fajr:"Fajr",sunrise:"Sunrise",dhuhr:"Dhuhr",
  asr:"Asr",maghrib:"Maghrib",isha:"Isha",next_prayer:"Next Prayer",
  locating:"Locating...",quran_title:"The Holy Quran",
  quran_sub:"Read the complete Quran in Uthmanic script",select_surah:"Select a Surah to begin",
  prayer_qibla:"Prayer Times & Qibla",
  qibla_dir:"Qibla Direction",mecca:"The Holy Kaaba — Mecca",
  qibla_tap:"Press to find Qibla direction",find_qibla:"Find Qibla",
  audio_title:"Recitation Player",audio_sub:"Listen to the greatest Quran reciters",
  select_ayah:"Select a verse to listen",choose_reciter:"Choose Reciter",
  choose_surah_ayah:"Choose Surah and Verse:",
  ep_title:"Quranic Episodes",ep_sub:"A journey through the meanings of the Quran",
  ai_title:"Quranic Assistant",ai_sub:"Ask about any verse or topic",
  ai_name:"Quranic Assistant",ai_status:"● Claude AI",
  ai_greet:"Peace be upon you",
  ai_intro:"I am your Quranic assistant. I can explain the meanings of verses.",
  suggested:"Suggested questions:",
  footer_desc:"Your complete Islamic destination to read, listen to and learn the Quran",
  sections:"Sections",reciters:"Reciters",languages:"Languages",rights:"All rights reserved",
  nav_read:"Read",
  nav_listen:"Listen",
  nav_teach:"Learn",
  learn:"Learn",
  door_read:"Read the Quran",
  door_read_d:"The full Mushaf in Uthmani script, with Muyassar tafsir, translation, search and resume",
  door_listen:"Listen to the Quran",
  door_listen_d:"Pick your reciter, surah and ayah — with repeat, sleep timer and waveform",
  door_teach:"Learn the Quran",
  door_teach_d:"Memorization circle: ayah range, per-ayah and cycle repeat, pauses, word-by-word highlight",
  door_open:"Enter",
  last_read:"Last read:",
  resume:"Resume reading",
  bookmarked:"Position saved",
  tafsir:"Tafsir al-Muyassar",
  tafsir_off:"Tafsir hidden",
  tafsir_err:"Could not load tafsir",
  loading_tafsir:"Loading tafsir…",
  select_ayah:"Select an ayah",
  mode_ayah:"Ayah by ayah",
  mode_surah:"Full surah",
  sleep_timer:"Sleep timer:",
  sleep_off:"Off",
  sleep_set:"Sleep timer set",
  sleep_done:"Timer finished — paused",
  teach_title:"Memorization Circle",
  teach_sub:"Repeat, recite and follow word by word until it is memorized",
  teach_ph:"Choose a surah and ayah range, then press play",
  teach_done:"Recitation complete",
  reciter:"Reciter",
  surah:"Surah",
  from_ayah:"From ayah",
  to_ayah:"To ayah",
  rep_ayah:"Ayah repeats",
  rep_cycle:"Cycle repeats",
  pause_between:"Pause between ayahs",
  speed:"Recitation speed",
  ayah_word:"Ayah",
  cycle_word:"Cycle",
  wait:"One moment…",
  load_err:"Could not load",
  audio_err:"Could not load audio",
  offline_text:"Showing locally cached text",
  no_full_surah:"This reciter is available ayah-by-ayah only",
  tajweed_off:"Tajweed colouring off",
  tajweed_err:"Could not load tajweed",
  loading_tajweed:"Loading tajweed…",
  auto_pause:"Auto pause by ayah length",
  keep_awake:"Keep screen awake",
  wakelock_unsupported:"Screen wake lock not supported",
  rc_idle:"Recite the ayahs aloud and the app will follow you",
  rc_note:"🎙️ Uses your browser’s speech recognition — your recitation is sent to the browser’s recognition service.",
  rc_unsupported:"Your browser does not support speech recognition (try Chrome)",
  rc_denied:"Microphone access denied",
  rc_listening:"Listening… start reciting",
  rc_progress:"Matched {n} of {t} words",
  rc_done:"Well done! Recitation complete",
  feat_recite:"Voice Recitation",
  feat_recite_d:"Recite aloud and be followed word by word",
  feat_teach:"Memorization Circle",
  feat_teach_d:"Repeat, pause and word-by-word highlight",
  feat_tajweed:"Tajweed Colouring",
  feat_tajweed_d:"Coloured tajweed rules with Muyassar tafsir",
  nav_contact:"Contact",
  nav_license:"License",
  contact_title:"We’d love to hear from you",
  contact_sub:"A suggestion, a correction, or a kind prayer — reach out",
  contact_email:"Email",
  contact_name:"Name",
  contact_msg:"Your message",
  contact_send:"Send",
  contact_note:"Your mail app will open with a ready message.",
  contact_empty:"Write your message first",
  designer:"Design & concept",
  license_title:"Intellectual Property",
  license_badge:"Ongoing charity — free forever",
  license_intro_h:"This project was conceived and designed by artist <a class='creator-link' href='https://altayebamer.com/' target='_blank' rel='noopener noreferrer'><b>Al-Tayeb Amer</b></a>, seeking the pleasure of God.",license_t5_h:"Please, if you would, pray for the swift healing of <a class='dua-link' href='https://www.youtube.com/@%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A7%D8%A8%D9%88%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D9%8A5%D8%B9/shorts' target='_blank' rel='noopener noreferrer'>our brother Adnan Abu Sulaiman</a>, left quadriplegic after a car accident.",license_intro:"This project was conceived and designed by artist Al-Tayeb Amer, seeking the pleasure of God.",
  license_t1:"You may copy the project or parts of it with good intention and prayer.",
  license_t2:"It must be republished as ongoing charity, free of any material charge.",
  license_t3:"Selling it or placing it behind a paywall is not permitted.",
  license_t4:"Please, if you would, pray for its author, his parents, family, descendants and kin, and all who help spread it.",
  license_dua:"O Allah, place it in the scale of good deeds of all who worked on it and shared it",
  play_ayah:"Listen to this ayah",
  ask_ai:"Ask the assistant about this ayah",
  bookmark_here:"Save this position",
  to_teach:"Send to memorization circle",
  ayah_not_found:"Ayah number out of range",
  dismiss:"Dismiss",
  license_t6:"Limited advertising by Quran-serving organisations covers server and service costs only — the content stays free and unblocked, and we sell none of it.",license_t5:"Please, if you would, pray for the swift healing of our brother Adnan Abu Sulaiman, left quadriplegic after a car accident.",
  foot_teach:"Learn the Quran",
  foot_ai:"Smart Assistant",
  footer_desc1:"Your complete Islamic destination for the Quran",
  footer_desc2:"reading, listening and learning",
  ai_soon:"The smart assistant will be available soon",
  ai_soon_sub:"We are working to bring a Quran assistant that answers your questions, God willing",
  ai_soon_status:"● Soon",
  update_available:"A new version is available — tap to update",
  nudge_share1:"\"Whoever guides to good is like its doer\" — share this site with those you love and gain a like reward.",
  nudge_share2:"Sharing a verse or a page may be an ongoing charity for you and your parents — spread good and it returns to you.",
  nudge_share3:"\"Cooperate in righteousness and piety\" — point others to this Quran project and share the reward.",
  nudge_explore:"Welcome 🌙 Explore every page: Reading, Listening, Learning, Prayer & Qibla and more.",
  nudge_feedback:"Found a bug or an issue? Share it with us so we can fix it — thank you.",
  nudge_idea:"Have an idea, opinion or advice to improve the site? We would love to hear it.",
  na_share:"Share the site",
  na_contact:"Tell us",
  na_ok:"OK",
  na_later:"Later",
  link_copied:"Site link copied — share it and be rewarded",
  share_text:"The Noble Quran — read, listen and learn the Quran",
  share_label:"Share the good:",
  theme_toggle:"Toggle light/dark mode",
  theme_light:"Light mode",
  theme_dark:"Dark mode",
  show_meaning:"Show / hide meaning",
  search_title:"Quick search",
  search_ph:"Kahf · 18:10 · Husary",
  search_hint:"Type a surah name or number, «18:10» for an ayah, or a reciter name",
  sys:"You are a wise and warm Quranic assistant. Answer in simple English. Explain Quranic verse meanings in 3-5 sentences. Only discuss Quran, Islam and spiritual topics."},
  fr:{enter:"Commencez votre voyage avec la parole de Dieu",hero_badge:"✦ Au nom d'Allah",
  hero_sub:"Votre destination islamique complète",
  nav_home:"Accueil",nav_quran:"Coran",nav_prayer:"Prière & Qibla",
  nav_audio:"Récitation",nav_episodes:"Épisodes",nav_ai:"Assistant",
  read_quran:"Lire le Coran",listen:"Écouter",qibla:"Qibla",
  daily_verse:"✦ Verset du Jour",listen_btn:"Écouter",meditate:"Méditer",save:"Sauvegarder",share:"Partager",
  surahs:"Sourates",ayahs:"Versets",juzs:"Juz",reciters_count:"Récitants",
  feat_quran:"Coran Complet",feat_quran_d:"114 sourates en écriture uthmanienne",
  feat_qibla:"Direction Qibla",feat_qibla_d:"Boussole vers la Kaaba",
  feat_prayer:"Heures de Prière",feat_prayer_d:"Horaires précis avec compte à rebours",
  feat_recit:"Récitation",feat_recit_d:"13 récitants d'Égypte, du Levant, du Hedjaz, du Nejd et du Golfe",
  feat_med:"Mode Méditation",feat_med_d:"Une expérience spirituelle paisible",
  feat_ai:"Assistant IA",feat_ai_d:"Posez des questions sur les versets",
  prayer_times:"Heures de Prière",fajr:"Fajr",sunrise:"Lever",dhuhr:"Dhuhr",
  asr:"Asr",maghrib:"Maghrib",isha:"Isha",next_prayer:"Prochaine Prière",
  locating:"Localisation...",quran_title:"Le Saint Coran",
  quran_sub:"Lisez le Coran en script uthmanien",select_surah:"Sélectionnez une sourate",
  prayer_qibla:"Prière & Qibla",
  qibla_dir:"Direction Qibla",mecca:"La Kaaba — La Mecque",
  qibla_tap:"Appuyez pour trouver Qibla",find_qibla:"Trouver Qibla",
  audio_title:"Lecteur de Récitation",audio_sub:"Écoutez les meilleurs récitants",
  select_ayah:"Sélectionnez un verset",choose_reciter:"Choisir Récitant",
  choose_surah_ayah:"Choisissez Sourate et Verset:",
  ep_title:"Épisodes Coraniques",ep_sub:"Un voyage dans les significations",
  ai_title:"Assistant Coranique",ai_sub:"Posez vos questions",
  ai_name:"Assistant Coranique",ai_status:"● Claude AI",
  ai_greet:"Paix sur vous",
  ai_intro:"Je suis votre assistant coranique.",
  suggested:"Questions suggérées:",
  footer_desc:"Votre destination islamique pour lire, écouter et apprendre le Coran",
  sections:"Sections",reciters:"Récitants",languages:"Langues",rights:"Tous droits réservés",
  nav_read:"Lecture",
  nav_listen:"Écoute",
  nav_teach:"Apprentissage",
  learn:"Apprendre",
  door_read:"Lire le Coran",
  door_read_d:"Le Mushaf complet en script Uthmani, avec tafsir, traduction, recherche et reprise",
  door_listen:"Écouter le Coran",
  door_listen_d:"Choisissez le récitateur, la sourate et le verset — répétition, minuterie, forme d'onde",
  door_teach:"Apprendre le Coran",
  door_teach_d:"Cercle de mémorisation : plage de versets, répétitions, pauses, surlignage mot à mot",
  door_open:"Entrer",
  last_read:"Dernière lecture :",
  resume:"Reprendre",
  bookmarked:"Position enregistrée",
  tafsir:"Tafsir al-Muyassar",
  tafsir_off:"Tafsir masqué",
  tafsir_err:"Chargement du tafsir impossible",
  loading_tafsir:"Chargement du tafsir…",
  select_ayah:"Choisissez un verset",
  mode_ayah:"Verset par verset",
  mode_surah:"Sourate entière",
  sleep_timer:"Minuterie :",
  sleep_off:"Arrêt",
  sleep_set:"Minuterie réglée",
  sleep_done:"Minuterie terminée — pause",
  teach_title:"Cercle de mémorisation",
  teach_sub:"Répétez et suivez mot à mot jusqu'à la maîtrise",
  teach_ph:"Choisissez une sourate et une plage, puis lancez",
  teach_done:"Récitation terminée",
  reciter:"Récitateur",
  surah:"Sourate",
  from_ayah:"Du verset",
  to_ayah:"Au verset",
  rep_ayah:"Répétitions du verset",
  rep_cycle:"Répétitions du cycle",
  pause_between:"Pause entre versets",
  speed:"Vitesse",
  ayah_word:"Verset",
  cycle_word:"Cycle",
  wait:"Un instant…",
  load_err:"Chargement impossible",
  audio_err:"Audio indisponible",
  offline_text:"Texte local affiché",
  no_full_surah:"Ce récitateur n'est disponible que verset par verset",
  tajweed_off:"Coloration tajwid désactivée",
  tajweed_err:"Chargement du tajwid impossible",
  loading_tajweed:"Chargement du tajwid…",
  auto_pause:"Pause auto selon la longueur du verset",
  keep_awake:"Garder l'écran allumé",
  wakelock_unsupported:"Verrouillage d'écran non pris en charge",
  rc_idle:"Récitez les versets à voix haute, l’application vous suit",
  rc_note:"🎙️ Utilise la reconnaissance vocale du navigateur — votre récitation est envoyée à son service.",
  rc_unsupported:"Votre navigateur ne prend pas en charge la reconnaissance vocale (essayez Chrome)",
  rc_denied:"Accès au micro refusé",
  rc_listening:"À l’écoute… commencez",
  rc_progress:"{n} mots sur {t} reconnus",
  rc_done:"Bravo ! Récitation terminée",
  feat_recite:"Récitation vocale",
  feat_recite_d:"Récitez et soyez suivi mot à mot",
  feat_teach:"Cercle de mémorisation",
  feat_teach_d:"Répétition, pauses et surlignage mot à mot",
  feat_tajweed:"Coloration tajwid",
  feat_tajweed_d:"Règles de tajwid colorées avec tafsir",
  nav_contact:"Contact",
  nav_license:"Licence",
  contact_title:"Écrivez-nous",
  contact_sub:"Une suggestion, une correction, une bonne prière",
  contact_email:"E-mail",
  contact_name:"Nom",
  contact_msg:"Votre message",
  contact_send:"Envoyer",
  contact_note:"Votre messagerie s’ouvrira avec un message prêt.",
  contact_empty:"Écrivez d’abord votre message",
  designer:"Conception & idée",
  license_title:"Propriété intellectuelle",
  license_badge:"Aumône continue — gratuit à jamais",
  license_intro_h:"Ce projet a été conçu et réalisé par l’artiste <a class='creator-link' href='https://altayebamer.com/' target='_blank' rel='noopener noreferrer'><b>Al-Tayeb Amer</b></a>, pour l’agrément de Dieu.",license_t5_h:"Priez, si vous le voulez bien, pour la guérison rapide de <a class='dua-link' href='https://www.youtube.com/@%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A7%D8%A8%D9%88%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D9%8A5%D8%B9/shorts' target='_blank' rel='noopener noreferrer'>notre frère Adnan Abou Soulaiman</a>, devenu tétraplégique après un accident de voiture.",license_intro:"Ce projet a été conçu et réalisé par l’artiste Al-Tayeb Amer, pour l’agrément de Dieu.",
  license_t1:"Vous pouvez copier le projet ou des parties avec bonne intention et prière.",
  license_t2:"Il doit être republié comme aumône continue, gratuitement, sans contrepartie.",
  license_t3:"Le vendre ou le placer derrière un péage est interdit.",
  license_t4:"Priez, si vous le voulez bien, pour son auteur, ses parents, sa famille, sa descendance et ses proches, et tous ceux qui le diffusent.",
  license_dua:"Ô Allah, place-le dans la balance des bonnes œuvres de tous ceux qui y ont contribué",
  play_ayah:"Écouter ce verset",
  ask_ai:"Interroger l’assistant sur ce verset",
  bookmark_here:"Enregistrer cette position",
  to_teach:"Envoyer au cercle de mémorisation",
  ayah_not_found:"Numéro de verset hors limites",
  dismiss:"Masquer",
  license_t6:"La publicité limitée d’organismes au service du Coran couvre uniquement les coûts de serveurs et de services — le contenu reste gratuit et accessible, et nous n’en vendons rien.",license_t5:"Priez, si vous le voulez bien, pour la guérison rapide de notre frère Adnan Abou Soulaiman, devenu tétraplégique après un accident de voiture.",
  foot_teach:"Apprendre le Coran",
  foot_ai:"Assistant intelligent",
  footer_desc1:"Votre destination islamique complète pour le Coran",
  footer_desc2:"lecture, écoute et apprentissage",
  ai_soon:"L'assistant intelligent sera bientôt disponible",
  ai_soon_sub:"Nous travaillons à proposer un assistant coranique qui répond à vos questions, si Dieu le veut",
  ai_soon_status:"● Bientôt",
  update_available:"Nouvelle version disponible — appuyez pour mettre à jour",
  nudge_share1:"« Celui qui guide vers le bien est comme celui qui l’accomplit » — partagez ce site et gagnez une récompense semblable.",
  nudge_share2:"Partager un verset ou une page peut être une aumône continue pour vous et vos parents — répandez le bien.",
  nudge_share3:"« Entraidez-vous à la piété » — faites connaître ce projet coranique et partagez la récompense.",
  nudge_explore:"Bienvenue 🌙 Explorez toutes les pages : Lecture, Écoute, Apprentissage, Prière & Qibla et plus.",
  nudge_feedback:"Vous avez trouvé un bug ? Partagez-le pour que nous le corrigions — merci.",
  nudge_idea:"Une idée, un avis ou un conseil pour améliorer le site ? Nous serions ravis de l’entendre.",
  na_share:"Partager",
  na_contact:"Écrivez-nous",
  na_ok:"OK",
  na_later:"Plus tard",
  link_copied:"Lien copié — partagez-le",
  share_text:"Le Noble Coran — lire, écouter et apprendre le Coran",
  share_label:"Partagez le bien :",
  theme_toggle:"Basculer clair/sombre",
  theme_light:"Mode clair",
  theme_dark:"Mode sombre",
  show_meaning:"Afficher / masquer le sens",
  search_title:"Recherche rapide",
  search_ph:"Kahf · 18:10 · Husary",
  search_hint:"Nom ou numéro de sourate, «18:10» pour un verset, ou nom d’un récitant",
  sys:"Tu es un assistant coranique sage. Réponds en français simple. Explique les versets en 3-5 phrases. Ne parle que du Coran et de l'Islam."},
  es:{enter:"Comienza tu viaje con la palabra de Dios",hero_badge:"✦ En el nombre de Alá",
  hero_sub:"Tu destino islámico completo",
  nav_home:"Inicio",nav_quran:"Corán",nav_prayer:"Oración & Qibla",
  nav_audio:"Recitación",nav_episodes:"Episodios",nav_ai:"Asistente",
  read_quran:"Leer el Corán",listen:"Escuchar",qibla:"Qibla",
  daily_verse:"✦ Versículo del Día",listen_btn:"Escuchar",meditate:"Meditar",save:"Guardar",share:"Compartir",
  surahs:"Suras",ayahs:"Versículos",juzs:"Juz",reciters_count:"Recitadores",
  feat_quran:"Corán Completo",feat_quran_d:"114 Suras en escritura utmánica",
  feat_qibla:"Dirección Qibla",feat_qibla_d:"Brújula hacia la Kaaba",
  feat_prayer:"Horarios de Oración",feat_prayer_d:"Horarios precisos con cuenta regresiva",
  feat_recit:"Recitación",feat_recit_d:"13 recitadores de Egipto, el Levante, Hiyaz, Néyed y el Golfo",
  feat_med:"Modo Meditación",feat_med_d:"Una experiencia espiritual tranquila",
  feat_ai:"Asistente IA",feat_ai_d:"Pregunta sobre versículos",
  prayer_times:"Horarios de Oración",fajr:"Fajr",sunrise:"Amanecer",dhuhr:"Dhuhr",
  asr:"Asr",maghrib:"Maghrib",isha:"Isha",next_prayer:"Próxima Oración",
  locating:"Localizando...",quran_title:"El Santo Corán",
  quran_sub:"Lee el Corán en escritura utmánica",select_surah:"Selecciona una Sura",
  prayer_qibla:"Oración & Qibla",
  qibla_dir:"Dirección Qibla",mecca:"La Kaaba — La Meca",
  qibla_tap:"Presiona para encontrar Qibla",find_qibla:"Encontrar Qibla",
  audio_title:"Reproductor de Recitación",audio_sub:"Escucha a los mejores recitadores",
  select_ayah:"Selecciona un versículo",choose_reciter:"Elegir Recitador",
  choose_surah_ayah:"Elige Sura y Versículo:",
  ep_title:"Episodios Coránicos",ep_sub:"Un viaje por los significados",
  ai_title:"Asistente Coránico",ai_sub:"Haz tus preguntas",
  ai_name:"Asistente Coránico",ai_status:"● Claude AI",
  ai_greet:"La paz sea contigo",
  ai_intro:"Soy tu asistente coránico.",
  suggested:"Preguntas sugeridas:",
  footer_desc:"Tu destino islámico para leer, escuchar y aprender el Corán",
  sections:"Secciones",reciters:"Recitadores",languages:"Idiomas",rights:"Todos los derechos reservados",
  nav_read:"Lectura",
  nav_listen:"Escucha",
  nav_teach:"Aprendizaje",
  learn:"Aprender",
  door_read:"Leer el Corán",
  door_read_d:"El Mushaf completo en escritura Uthmani, con tafsir, traducción, búsqueda y reanudación",
  door_listen:"Escuchar el Corán",
  door_listen_d:"Elige recitador, sura y aleya — repetición, temporizador y onda de audio",
  door_teach:"Aprender el Corán",
  door_teach_d:"Círculo de memorización: rango de aleyas, repeticiones, pausas y resaltado palabra por palabra",
  door_open:"Entrar",
  last_read:"Última lectura:",
  resume:"Continuar",
  bookmarked:"Posición guardada",
  tafsir:"Tafsir al-Muyassar",
  tafsir_off:"Tafsir oculto",
  tafsir_err:"No se pudo cargar el tafsir",
  loading_tafsir:"Cargando tafsir…",
  select_ayah:"Elige una aleya",
  mode_ayah:"Aleya por aleya",
  mode_surah:"Sura completa",
  sleep_timer:"Temporizador:",
  sleep_off:"Apagado",
  sleep_set:"Temporizador activado",
  sleep_done:"Temporizador terminado — pausado",
  teach_title:"Círculo de memorización",
  teach_sub:"Repite y sigue palabra por palabra hasta memorizar",
  teach_ph:"Elige una sura y un rango, luego pulsa reproducir",
  teach_done:"Recitación completada",
  reciter:"Recitador",
  surah:"Sura",
  from_ayah:"Desde la aleya",
  to_ayah:"Hasta la aleya",
  rep_ayah:"Repeticiones de aleya",
  rep_cycle:"Repeticiones de ciclo",
  pause_between:"Pausa entre aleyas",
  speed:"Velocidad",
  ayah_word:"Aleya",
  cycle_word:"Ciclo",
  wait:"Un momento…",
  load_err:"No se pudo cargar",
  audio_err:"Audio no disponible",
  offline_text:"Mostrando texto local",
  no_full_surah:"Este recitador solo está disponible aleya por aleya",
  tajweed_off:"Coloración tajwid desactivada",
  tajweed_err:"No se pudo cargar el tajwid",
  loading_tajweed:"Cargando tajwid…",
  auto_pause:"Pausa automática según la longitud",
  keep_awake:"Mantener la pantalla encendida",
  wakelock_unsupported:"Bloqueo de pantalla no compatible",
  rc_idle:"Recita las aleyas en voz alta y la app te seguirá",
  rc_note:"🎙️ Usa el reconocimiento de voz del navegador — tu recitación se envía a su servicio.",
  rc_unsupported:"Tu navegador no admite reconocimiento de voz (prueba Chrome)",
  rc_denied:"Acceso al micrófono denegado",
  rc_listening:"Escuchando… empieza a recitar",
  rc_progress:"{n} de {t} palabras reconocidas",
  rc_done:"¡Bien hecho! Recitación completa",
  feat_recite:"Recitación por voz",
  feat_recite_d:"Recita en voz alta y sé seguido palabra por palabra",
  feat_teach:"Círculo de memorización",
  feat_teach_d:"Repetición, pausas y resaltado palabra por palabra",
  feat_tajweed:"Coloración tajwid",
  feat_tajweed_d:"Reglas de tajwid en color con tafsir",
  nav_contact:"Contacto",
  nav_license:"Licencia",
  contact_title:"Nos encantaría saber de ti",
  contact_sub:"Una sugerencia, una corrección o una buena súplica",
  contact_email:"Correo",
  contact_name:"Nombre",
  contact_msg:"Tu mensaje",
  contact_send:"Enviar",
  contact_note:"Tu aplicación de correo se abrirá con un mensaje listo.",
  contact_empty:"Escribe tu mensaje primero",
  designer:"Diseño e idea",
  license_title:"Propiedad intelectual",
  license_badge:"Caridad continua — gratis para siempre",
  license_intro_h:"Este proyecto fue concebido y diseñado por el artista <a class='creator-link' href='https://altayebamer.com/' target='_blank' rel='noopener noreferrer'><b>Al-Tayeb Amer</b></a>, buscando la complacencia de Dios.",license_t5_h:"Reza, si te place, por la pronta sanación de <a class='dua-link' href='https://www.youtube.com/@%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A7%D8%A8%D9%88%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D9%8A5%D8%B9/shorts' target='_blank' rel='noopener noreferrer'>nuestro hermano Adnan Abu Sulaiman</a>, quien quedó tetrapléjico tras un accidente de coche.",license_intro:"Este proyecto fue concebido y diseñado por el artista Al-Tayeb Amer, buscando la complacencia de Dios.",
  license_t1:"Puedes copiar el proyecto o partes con buena intención y súplica.",
  license_t2:"Debe republicarse como caridad continua, gratis, sin contraprestación material.",
  license_t3:"No se permite venderlo ni ponerlo tras un muro de pago.",
  license_t4:"Reza, si te place, por su autor, sus padres, su familia, su descendencia y sus allegados, y por todos los que ayuden a difundirlo.",
  license_dua:"Oh Alá, ponlo en la balanza de buenas obras de todos los que trabajaron y lo compartieron",
  play_ayah:"Escuchar esta aleya",
  ask_ai:"Preguntar al asistente sobre la aleya",
  bookmark_here:"Guardar esta posición",
  to_teach:"Enviar al círculo de memorización",
  ayah_not_found:"Número de aleya fuera de rango",
  dismiss:"Ocultar",
  license_t6:"La publicidad limitada de organizaciones al servicio del Corán cubre solo los costes de servidores y servicios — el contenido sigue siendo gratuito y accesible, y no vendemos nada de él.",license_t5:"Reza, si te place, por la pronta sanación de nuestro hermano Adnan Abu Sulaiman, quien quedó tetrapléjico tras un accidente de coche.",
  foot_teach:"Aprender el Corán",
  foot_ai:"Asistente inteligente",
  footer_desc1:"Tu destino islámico completo para el Corán",
  footer_desc2:"lectura, escucha y aprendizaje",
  ai_soon:"El asistente inteligente estará disponible pronto",
  ai_soon_sub:"Trabajamos para ofrecer un asistente coránico que responda tus preguntas, si Dios quiere",
  ai_soon_status:"● Pronto",
  update_available:"Nueva versión disponible — toca para actualizar",
  nudge_share1:"«Quien guía al bien es como quien lo hace» — comparte este sitio y obtén una recompensa similar.",
  nudge_share2:"Compartir un versículo o una página puede ser una caridad continua para ti y tus padres — difunde el bien.",
  nudge_share3:"«Colaborad en la virtud y la piedad» — muestra a otros este proyecto coránico y comparte la recompensa.",
  nudge_explore:"Bienvenido 🌙 Explora todas las páginas: Lectura, Escucha, Aprendizaje, Oración y Alquibla y más.",
  nudge_feedback:"¿Encontraste un error? Compártelo para que lo corrijamos — gracias.",
  nudge_idea:"¿Tienes una idea, opinión o consejo para mejorar el sitio? Nos encantaría escucharlo.",
  na_share:"Compartir",
  na_contact:"Cuéntanos",
  na_ok:"OK",
  na_later:"Luego",
  link_copied:"Enlace copiado — compártelo",
  share_text:"El Noble Corán — leer, escuchar y aprender el Corán",
  share_label:"Comparte el bien:",
  theme_toggle:"Cambiar modo claro/oscuro",
  theme_light:"Modo claro",
  theme_dark:"Modo oscuro",
  show_meaning:"Mostrar / ocultar significado",
  search_title:"Búsqueda rápida",
  search_ph:"Kahf · 18:10 · Husary",
  search_hint:"Nombre o número de sura, «18:10» para una aleya, o nombre de recitador",
  sys:"Eres un asistente coránico sabio. Responde en español simple. Explica los versículos en 3-5 oraciones. Solo habla de Corán e Islam."},
  ur:{enter:"کلامِ الٰہی کے ساتھ اپنا سفر شروع کریں",hero_badge:"✦ بسم اللہ الرحمن الرحیم",
  hero_sub:"آپ کی جامع اسلامی منزل",
  nav_home:"ہوم",nav_quran:"قرآن",nav_prayer:"نماز و قبلہ",
  nav_audio:"تلاوت",nav_episodes:"اقساط",nav_ai:"مددگار",
  read_quran:"قرآن پڑھیں",listen:"سنیں",qibla:"قبلہ",
  daily_verse:"✦ آج کی آیت",listen_btn:"سنیں",meditate:"غور کریں",save:"محفوظ",share:"شیئر",
  surahs:"سورتیں",ayahs:"آیات",juzs:"پارہ",reciters_count:"قاری",
  feat_quran:"مکمل قرآن",feat_quran_d:"١١٤ سورتیں عثمانی رسم الخط میں",
  feat_qibla:"قبلہ سمت",feat_qibla_d:"کعبہ کی طرف ذہین کمپاس",
  feat_prayer:"نماز کے اوقات",feat_prayer_d:"درست اوقات کے ساتھ کاؤنٹ ڈاؤن",
  feat_recit:"تلاوت",feat_recit_d:"13 قاری مصر، شام، حجاز، نجد اور خلیج سے",
  feat_med:"مراقبہ موڈ",feat_med_d:"پرسکون روحانی تجربہ",
  feat_ai:"AI مددگار",feat_ai_d:"آیات کے بارے میں پوچھیں",
  prayer_times:"نماز کے اوقات",fajr:"فجر",sunrise:"طلوع",dhuhr:"ظہر",
  asr:"عصر",maghrib:"مغرب",isha:"عشاء",next_prayer:"اگلی نماز",
  locating:"مقام تلاش...",quran_title:"قرآن مجید",
  quran_sub:"مکمل قرآن پڑھیں",select_surah:"سورت منتخب کریں",
  prayer_qibla:"نماز اور قبلہ",
  qibla_dir:"قبلہ سمت",mecca:"کعبۃ اللہ — مکہ",
  qibla_tap:"قبلہ جاننے کے لیے دبائیں",find_qibla:"قبلہ تلاش کریں",
  audio_title:"تلاوت پلیئر",audio_sub:"قراء کی تلاوت سنیں",
  select_ayah:"آیت منتخب کریں",choose_reciter:"قاری منتخب کریں",
  choose_surah_ayah:"سورت اور آیت:",
  ep_title:"قرآنی اقساط",ep_sub:"قرآن کے معانی میں سفر",
  ai_title:"قرآنی مددگار",ai_sub:"آیات کے بارے میں پوچھیں",
  ai_name:"قرآنی مددگار",ai_status:"● Claude AI",
  ai_greet:"السلام علیکم",
  ai_intro:"میں آپ کا قرآنی مددگار ہوں۔",
  suggested:"تجویز کردہ:",
  footer_desc:"قرآن پڑھنے، سننے اور سیکھنے کے لیے آپ کی مکمل اسلامی منزل",
  sections:"حصے",reciters:"قراء",languages:"زبانیں",rights:"جملہ حقوق محفوظ",
  nav_read:"قراءت",
  nav_listen:"سماعت",
  nav_teach:"تعلیم",
  learn:"سیکھیں",
  door_read:"قرآن پڑھیں",
  door_read_d:"مکمل مصحف عثمانی رسم الخط میں، تفسیر، ترجمہ، تلاش اور آخری مقام",
  door_listen:"قرآن سنیں",
  door_listen_d:"اپنا قاری، سورت اور آیت منتخب کریں — تکرار، سلیپ ٹائمر اور ویو فارم",
  door_teach:"قرآن سیکھیں",
  door_teach_d:"حلقۂ حفظ: آیات کی حد، تکرار، وقفہ اور لفظ بہ لفظ نمایاں",
  door_open:"داخل ہوں",
  last_read:"آخری قراءت:",
  resume:"جاری رکھیں",
  bookmarked:"مقام محفوظ",
  tafsir:"تفسیر المیسر",
  tafsir_off:"تفسیر مخفی",
  tafsir_err:"تفسیر لوڈ نہ ہو سکی",
  loading_tafsir:"تفسیر لوڈ ہو رہی ہے…",
  select_ayah:"آیت منتخب کریں",
  mode_ayah:"آیت بہ آیت",
  mode_surah:"مکمل سورت",
  sleep_timer:"سلیپ ٹائمر:",
  sleep_off:"بند",
  sleep_set:"ٹائمر مقرر ہو گیا",
  sleep_done:"ٹائمر ختم — رک گیا",
  teach_title:"حلقۂ حفظ",
  teach_sub:"دہرائیں اور لفظ بہ لفظ ساتھ چلیں یہاں تک کہ یاد ہو جائے",
  teach_ph:"سورت اور آیات کی حد منتخب کر کے چلائیں",
  teach_done:"تلاوت مکمل",
  reciter:"قاری",
  surah:"سورت",
  from_ayah:"آیت سے",
  to_ayah:"آیت تک",
  rep_ayah:"آیت کی تکرار",
  rep_cycle:"دور کی تکرار",
  pause_between:"آیات کے درمیان وقفہ",
  speed:"رفتار",
  ayah_word:"آیت",
  cycle_word:"دور",
  wait:"ایک لمحہ…",
  load_err:"لوڈ نہ ہو سکا",
  audio_err:"آڈیو دستیاب نہیں",
  offline_text:"محفوظ متن دکھایا جا رہا ہے",
  no_full_surah:"یہ قاری صرف آیت بہ آیت دستیاب ہے",
  tajweed_off:"تجوید رنگ بند",
  tajweed_err:"تجوید لوڈ نہ ہو سکی",
  loading_tajweed:"تجوید لوڈ ہو رہی ہے…",
  auto_pause:"آیت کی لمبائی کے مطابق خودکار وقفہ",
  keep_awake:"اسکرین روشن رکھیں",
  wakelock_unsupported:"اسکرین ویک لاک معاون نہیں",
  rc_idle:"آیات بلند آواز سے پڑھیں، ایپ آپ کا ساتھ دے گی",
  rc_note:"🎙️ آپ کے براؤزر کی صوتی شناخت استعمال ہوتی ہے — آپ کی تلاوت اس کی سروس کو بھیجی جاتی ہے۔",
  rc_unsupported:"آپ کا براؤزر صوتی شناخت کی حمایت نہیں کرتا (Chrome آزمائیں)",
  rc_denied:"مائیک تک رسائی مسترد",
  rc_listening:"سن رہا ہوں… تلاوت شروع کریں",
  rc_progress:"{t} میں سے {n} الفاظ ملے",
  rc_done:"شاباش! تسمیع مکمل",
  feat_recite:"صوتی تسمیع",
  feat_recite_d:"بلند آواز میں پڑھیں، نظام لفظ بہ لفظ ساتھ دے",
  feat_teach:"حلقۂ حفظ",
  feat_teach_d:"تکرار، وقفہ اور لفظ بہ لفظ نمایاں",
  feat_tajweed:"تجوید رنگ کاری",
  feat_tajweed_d:"رنگین تجوید احکام تفسیر کے ساتھ",
  nav_contact:"رابطہ",
  nav_license:"حقوق",
  contact_title:"ہم سے رابطہ کریں",
  contact_sub:"تجویز، تصحیح یا نیک دعا — ہمیں لکھیں",
  contact_email:"ای میل",
  contact_name:"نام",
  contact_msg:"آپ کا پیغام",
  contact_send:"بھیجیں",
  contact_note:"آپ کی میل ایپ تیار پیغام کے ساتھ کھل جائے گی۔",
  contact_empty:"پہلے اپنا پیغام لکھیں",
  designer:"ڈیزائن و خیال",
  license_title:"دانشورانہ ملکیت",
  license_badge:"صدقہ جاریہ — ہمیشہ مفت",
  license_intro_h:"یہ منصوبہ فنکار <a class='creator-link' href='https://altayebamer.com/' target='_blank' rel='noopener noreferrer'><b>الطیب عامر</b></a> نے اللہ کی رضا کے لیے تیار کیا۔",license_t5_h:"براہِ کرم <a class='dua-link' href='https://www.youtube.com/@%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A7%D8%A8%D9%88%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D9%8A5%D8%B9/shorts' target='_blank' rel='noopener noreferrer'>ہمارے بھائی عدنان ابو سلیمان</a> کی جلد صحت یابی کے لیے دعا کیجیے، جو ایک ٹریفک حادثے کے بعد جسمانی طور پر مفلوج ہو گئے ہیں۔",license_intro:"یہ منصوبہ فنکار الطیب عامر نے اللہ کی رضا کے لیے تیار کیا۔",
  license_t1:"نیک نیت اور دعا کے ساتھ منصوبے یا اس کے حصوں کی نقل جائز ہے۔",
  license_t2:"اسے صدقہ جاریہ کے طور پر، مفت، بغیر کسی مادی معاوضے کے دوبارہ شائع کرنا شرط ہے۔",
  license_t3:"اسے بیچنا یا معاوضے کے پیچھے چھپانا منع ہے۔",
  license_t4:"براہِ کرم صاحبِ خیال، اس کے والدین، اہلِ خانہ، اولاد اور رشتہ داروں اور اس کے تمام ناشرین کے لیے دعا کیجیے۔",
  license_dua:"اے اللہ! اسے ہر اس شخص کے نیک اعمال میں شامل فرما جس نے اس پر کام کیا اور اسے پھیلایا",
  play_ayah:"یہ آیت سنیں",
  ask_ai:"اس آیت کے بارے میں مددگار سے پوچھیں",
  bookmark_here:"یہ مقام محفوظ کریں",
  to_teach:"حلقۂ حفظ کو بھیجیں",
  ayah_not_found:"آیت نمبر حد سے باہر",
  dismiss:"چھپائیں",
  license_t6:"قرآن کی خدمت کرنے والے اداروں کا محدود اشتہار صرف سرور اور خدمات کا خرچ پورا کرتا ہے — مواد مفت اور کھلا رہتا ہے، ہم اس میں سے کچھ نہیں بیچتے۔",license_t5:"براہِ کرم ہمارے بھائی عدنان ابو سلیمان کی جلد صحت یابی کے لیے دعا کیجیے، جو ایک ٹریفک حادثے کے بعد جسمانی طور پر مفلوج ہو گئے ہیں۔",
  foot_teach:"قرآن سیکھیں",
  foot_ai:"ذہین معاون",
  footer_desc1:"قرآن کے لیے آپ کی مکمل اسلامی منزل",
  footer_desc2:"پڑھنا، سننا اور سیکھنا",
  ai_soon:"ذہین معاون کی سہولت جلد فعال کی جائے گی",
  ai_soon_sub:"ہم ایک قرآنی معاون فراہم کرنے پر کام کر رہے ہیں جو ان شاء اللہ آپ کے سوالوں کے جواب دے گا",
  ai_soon_status:"● جلد",
  update_available:"نیا ورژن دستیاب ہے — اپ ڈیٹ کے لیے دبائیں",
  nudge_share1:"\"نیکی کی طرف رہنمائی کرنے والا کرنے والے کی طرح ہے\" — یہ سائٹ اپنے پیاروں کے ساتھ شیئر کریں اور اجر پائیں۔",
  nudge_share2:"کسی آیت یا صفحے کا اشتراک آپ اور آپ کے والدین کے لیے صدقہ جاریہ ہو سکتا ہے — بھلائی پھیلائیں۔",
  nudge_share3:"\"نیکی اور تقویٰ میں تعاون کرو\" — اس قرآنی منصوبے کی طرف دوسروں کی رہنمائی کریں اور اجر میں شریک ہوں۔",
  nudge_explore:"خوش آمدید 🌙 سائٹ کے تمام صفحات دیکھیں: قراءت، سماعت، تعلیم، نماز و قبلہ وغیرہ۔",
  nudge_feedback:"کوئی خرابی ملی؟ ہمیں بتائیں تاکہ ہم درست کریں — جزاک اللہ خیر۔",
  nudge_idea:"سائٹ کو بہتر بنانے کے لیے کوئی تجویز یا رائے ہے؟ ہمیں خوشی ہوگی۔",
  na_share:"سائٹ شیئر کریں",
  na_contact:"ہمیں بتائیں",
  na_ok:"ٹھیک ہے",
  na_later:"بعد میں",
  link_copied:"لنک کاپی ہو گیا — شیئر کریں",
  share_text:"قرآن کریم — پڑھیں، سنیں اور سیکھیں",
  share_label:"بھلائی پھیلائیں:",
  theme_toggle:"روشن/تاریک موڈ تبدیل کریں",
  theme_light:"روشن موڈ",
  theme_dark:"تاریک موڈ",
  show_meaning:"معنی دکھائیں / چھپائیں",
  search_title:"فوری تلاش",
  search_ph:"الكهف · 18:10 · الحصري",
  search_hint:"سورت کا نام یا نمبر، آیت کے لیے «18:10»، یا قاری کا نام لکھیں",
  sys:"آپ ایک قرآنی مددگار ہیں۔ اردو میں جواب دیں۔ 3-5 جملوں میں آیات کے معانی بیان کریں۔"},
  tr:{enter:"Allah'ın kelamıyla yolculuğa başla",hero_badge:"✦ Bismillahirrahmanirrahim",
  hero_sub:"Kapsamlı İslami destinasyonunuz",
  nav_home:"Ana Sayfa",nav_quran:"Kur'an",nav_prayer:"Namaz & Kıble",
  nav_audio:"Tilavet",nav_episodes:"Bölümler",nav_ai:"Asistan",
  read_quran:"Kur'an Oku",listen:"Dinle",qibla:"Kıble",
  daily_verse:"✦ Günün Ayeti",listen_btn:"Dinle",meditate:"Tefekkür",save:"Kaydet",share:"Paylaş",
  surahs:"Sure",ayahs:"Ayet",juzs:"Cüz",reciters_count:"Kari",
  feat_quran:"Tam Kur'an",feat_quran_d:"Osmanlı hattıyla 114 sure",
  feat_qibla:"Kıble Yönü",feat_qibla_d:"Kabe'ye akıllı pusula",
  feat_prayer:"Namaz Vakitleri",feat_prayer_d:"Geri sayım ile doğru vakitler",
  feat_recit:"Tilavet",feat_recit_d:"Mısır, Şam, Hicaz, Necd ve Körfez'den 13 kari",
  feat_med:"Meditasyon Modu",feat_med_d:"Huzurlu ruhani deneyim",
  feat_ai:"AI Asistan",feat_ai_d:"Ayetler hakkında soru sorun",
  prayer_times:"Namaz Vakitleri",fajr:"İmsak",sunrise:"Güneş",dhuhr:"Öğle",
  asr:"İkindi",maghrib:"Akşam",isha:"Yatsı",next_prayer:"Sonraki Namaz",
  locating:"Konum belirleniyor...",quran_title:"Kur'an-ı Kerim",
  quran_sub:"Tam Kur'an'ı okuyun",select_surah:"Bir sure seçin",
  prayer_qibla:"Namaz & Kıble",
  qibla_dir:"Kıble Yönü",mecca:"Kabe — Mekke",
  qibla_tap:"Kıble bulmak için basın",find_qibla:"Kıble Bul",
  audio_title:"Tilavet Oynatıcısı",audio_sub:"En iyi karileri dinleyin",
  select_ayah:"Ayet seçin",choose_reciter:"Kari Seç",
  choose_surah_ayah:"Sure ve Ayet:",
  ep_title:"Kur'ani Bölümler",ep_sub:"Kur'an'ın anlamlarında yolculuk",
  ai_title:"Kur'ani Asistan",ai_sub:"Sorularınızı sorun",
  ai_name:"Kur'ani Asistan",ai_status:"● Claude AI",
  ai_greet:"Esselamu Aleykum",
  ai_intro:"Ben Kur'ani asistanınızım.",
  suggested:"Önerilen:",
  footer_desc:"Kur'an'ı okumak, dinlemek ve öğrenmek için İslami adresiniz",
  sections:"Bölümler",reciters:"Kariler",languages:"Diller",rights:"Tüm hakları saklıdır",
  nav_read:"Okuma",
  nav_listen:"Dinleme",
  nav_teach:"Öğrenme",
  learn:"Öğren",
  door_read:"Kur'an Oku",
  door_read_d:"Osmani hatla tam mushaf; tefsir, meal, arama ve kaldığın yerden devam",
  door_listen:"Kur'an Dinle",
  door_listen_d:"Kariini, sureni ve ayetini seç — tekrar, uyku zamanlayıcı ve dalga formu",
  door_teach:"Kur'an Öğren",
  door_teach_d:"Ezber halkası: ayet aralığı, ayet ve tur tekrarı, aralar ve kelime kelime vurgu",
  door_open:"Gir",
  last_read:"Son okuma:",
  resume:"Devam et",
  bookmarked:"Konum kaydedildi",
  tafsir:"Tefsir el-Müyesser",
  tafsir_off:"Tefsir gizlendi",
  tafsir_err:"Tefsir yüklenemedi",
  loading_tafsir:"Tefsir yükleniyor…",
  select_ayah:"Bir ayet seç",
  mode_ayah:"Ayet ayet",
  mode_surah:"Tüm sure",
  sleep_timer:"Uyku zamanlayıcı:",
  sleep_off:"Kapalı",
  sleep_set:"Zamanlayıcı ayarlandı",
  sleep_done:"Süre doldu — duraklatıldı",
  teach_title:"Ezber Halkası",
  teach_sub:"Tekrarla ve kelime kelime takip et, ezberleyene dek",
  teach_ph:"Bir sure ve ayet aralığı seçip oynat",
  teach_done:"Tilavet tamamlandı",
  reciter:"Kari",
  surah:"Sure",
  from_ayah:"Şu ayetten",
  to_ayah:"Şu ayete",
  rep_ayah:"Ayet tekrarı",
  rep_cycle:"Tur tekrarı",
  pause_between:"Ayetler arası ara",
  speed:"Hız",
  ayah_word:"Ayet",
  cycle_word:"Tur",
  wait:"Bir saniye…",
  load_err:"Yüklenemedi",
  audio_err:"Ses yüklenemedi",
  offline_text:"Yerel metin gösteriliyor",
  no_full_surah:"Bu kari yalnızca ayet ayet mevcut",
  tajweed_off:"Tecvid renklendirme kapalı",
  tajweed_err:"Tecvid yüklenemedi",
  loading_tajweed:"Tecvid yükleniyor…",
  auto_pause:"Ayet uzunluğuna göre otomatik ara",
  keep_awake:"Ekranı açık tut",
  wakelock_unsupported:"Ekran kilidi desteklenmiyor",
  rc_idle:"Ayetleri sesli oku, uygulama seni takip etsin",
  rc_note:"🎙️ Tarayıcının ses tanımasını kullanır — okuyuşunuz tanıma hizmetine gönderilir.",
  rc_unsupported:"Tarayıcınız ses tanımayı desteklemiyor (Chrome deneyin)",
  rc_denied:"Mikrofon erişimi reddedildi",
  rc_listening:"Dinliyorum… okumaya başla",
  rc_progress:"{t} kelimeden {n} eşleşti",
  rc_done:"Aferin! Tilavet tamamlandı",
  feat_recite:"Sesli Tilavet",
  feat_recite_d:"Sesli oku, kelime kelime takip edilsin",
  feat_teach:"Ezber Halkası",
  feat_teach_d:"Tekrar, ara ve kelime kelime vurgu",
  feat_tajweed:"Tecvid Renklendirme",
  feat_tajweed_d:"Renkli tecvid kuralları ve tefsir",
  nav_contact:"İletişim",
  nav_license:"Haklar",
  contact_title:"Sizden haber almak isteriz",
  contact_sub:"Bir öneri, düzeltme ya da hayır duası — bize yazın",
  contact_email:"E-posta",
  contact_name:"İsim",
  contact_msg:"Mesajınız",
  contact_send:"Gönder",
  contact_note:"E-posta uygulamanız hazır bir mesajla açılacak.",
  contact_empty:"Önce mesajınızı yazın",
  designer:"Tasarım ve fikir",
  license_title:"Fikri Mülkiyet",
  license_badge:"Sadaka-i cariye — sonsuza dek ücretsiz",
  license_intro_h:"Bu proje, Allah rızası için sanatçı <a class='creator-link' href='https://altayebamer.com/' target='_blank' rel='noopener noreferrer'><b>Al-Tayeb Amer</b></a> tarafından tasarlandı.",license_t5_h:"Lütfen bir trafik kazası sonrası felç kalan <a class='dua-link' href='https://www.youtube.com/@%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A7%D8%A8%D9%88%D8%B3%D9%84%D9%8A%D9%85%D8%A7%D9%86-%D9%8A5%D8%B9/shorts' target='_blank' rel='noopener noreferrer'>kardeşimiz Adnan Ebu Süleyman</a> için acil şifa duası edin.",license_intro:"Bu proje, Allah rızası için sanatçı Al-Tayeb Amer tarafından tasarlandı.",
  license_t1:"Projeyi ya da parçalarını iyi niyet ve dua ile kopyalayabilirsiniz.",
  license_t2:"Sadaka-i cariye olarak, ücretsiz, hiçbir maddi karşılık olmadan yeniden yayınlanmalıdır.",
  license_t3:"Satmak ya da ücret duvarı ardına koymak yasaktır.",
  license_t4:"Lütfen sahibine, anne babasına, ailesine, zürriyetine ve yakınlarına ve yayılmasına yardım eden herkese dua edin.",
  license_dua:"Allah’ım, üzerinde çalışan ve paylaşan herkesin sevap terazisine koy",
  play_ayah:"Bu ayeti dinle",
  ask_ai:"Bu ayet hakkında asistana sor",
  bookmark_here:"Bu konumu kaydet",
  to_teach:"Ezber halkasına gönder",
  ayah_not_found:"Ayet numarası aralık dışı",
  dismiss:"Gizle",
  license_t6:"Kur’an’a hizmet eden kurumların sınırlı reklamı yalnızca sunucu ve hizmet maliyetlerini karşılar — içerik ücretsiz ve erişilebilir kalır, hiçbirini satmayız.",license_t5:"Lütfen bir trafik kazası sonrası felç kalan kardeşimiz Adnan Ebu Süleyman’ın acil şifası için dua edin.",
  foot_teach:"Kur'an'ı öğren",
  foot_ai:"Akıllı Asistan",
  footer_desc1:"Kur'an için eksiksiz İslami adresiniz",
  footer_desc2:"okuma, dinleme ve öğrenme",
  ai_soon:"Akıllı asistan yakında kullanıma sunulacak",
  ai_soon_sub:"İnşallah sorularınızı yanıtlayacak bir Kur'an asistanı sunmak için çalışıyoruz",
  ai_soon_status:"● Yakında",
  update_available:"Yeni sürüm mevcut — güncellemek için dokunun",
  nudge_share1:"\"Hayra yönlendiren onu yapan gibidir\" — bu siteyi sevdiklerinle paylaş, benzer sevap kazan.",
  nudge_share2:"Bir ayeti veya sayfayı paylaşmak senin ve ailen için sadaka-i cariye olabilir — hayrı yay.",
  nudge_share3:"\"İyilik ve takvada yardımlaşın\" — bu Kur'an projesini başkalarına tanıt, sevaba ortak ol.",
  nudge_explore:"Hoş geldin 🌙 Tüm sayfaları keşfet: Okuma, Dinleme, Öğrenme, Namaz & Kıble ve daha fazlası.",
  nudge_feedback:"Bir hata mı buldun? Düzeltelim diye bizimle paylaş — teşekkürler.",
  nudge_idea:"Siteyi geliştirmek için bir fikrin veya tavsiyen mi var? Duymaktan memnuniyet duyarız.",
  na_share:"Siteyi paylaş",
  na_contact:"Bize yaz",
  na_ok:"Tamam",
  na_later:"Sonra",
  link_copied:"Bağlantı kopyalandı — paylaş",
  share_text:"Kur'an-ı Kerim — oku, dinle ve öğren",
  share_label:"Hayrı paylaş:",
  theme_toggle:"Açık/koyu modu değiştir",
  theme_light:"Açık mod",
  theme_dark:"Koyu mod",
  show_meaning:"Anlamı göster / gizle",
  search_title:"Hızlı arama",
  search_ph:"Kehf · 18:10 · Husary",
  search_hint:"Sure adı/numarası, ayet için «18:10» ya da kari adı yazın",
  sys:"Sen bilge bir Kur'ani asistansın. Türkçe cevap ver. 3-5 cümlede ayetleri açıkla."}
};

// ===== DATA =====
var SURAHS_ALL = [
  {n:1,ar:"الفاتحة",en:"Al-Fatihah",t:"Meccan",a:7},
  {n:2,ar:"البقرة",en:"Al-Baqarah",t:"Medinan",a:286},
  {n:3,ar:"آل عمران",en:"Ali 'Imran",t:"Medinan",a:200},
  {n:4,ar:"النساء",en:"An-Nisa",t:"Medinan",a:176},
  {n:5,ar:"المائدة",en:"Al-Ma'idah",t:"Medinan",a:120},
  {n:6,ar:"الأنعام",en:"Al-An'am",t:"Meccan",a:165},
  {n:7,ar:"الأعراف",en:"Al-A'raf",t:"Meccan",a:206},
  {n:8,ar:"الأنفال",en:"Al-Anfal",t:"Medinan",a:75},
  {n:9,ar:"التوبة",en:"At-Tawbah",t:"Medinan",a:129},
  {n:10,ar:"يونس",en:"Yunus",t:"Meccan",a:109},
  {n:11,ar:"هود",en:"Hud",t:"Meccan",a:123},
  {n:12,ar:"يوسف",en:"Yusuf",t:"Meccan",a:111},
  {n:13,ar:"الرعد",en:"Ar-Ra'd",t:"Medinan",a:43},
  {n:14,ar:"إبراهيم",en:"Ibrahim",t:"Meccan",a:52},
  {n:15,ar:"الحجر",en:"Al-Hijr",t:"Meccan",a:99},
  {n:16,ar:"النحل",en:"An-Nahl",t:"Meccan",a:128},
  {n:17,ar:"الإسراء",en:"Al-Isra",t:"Meccan",a:111},
  {n:18,ar:"الكهف",en:"Al-Kahf",t:"Meccan",a:110},
  {n:19,ar:"مريم",en:"Maryam",t:"Meccan",a:98},
  {n:20,ar:"طه",en:"Taha",t:"Meccan",a:135},
  {n:21,ar:"الأنبياء",en:"Al-Anbiya",t:"Meccan",a:112},
  {n:22,ar:"الحج",en:"Al-Hajj",t:"Medinan",a:78},
  {n:23,ar:"المؤمنون",en:"Al-Mu'minun",t:"Meccan",a:118},
  {n:24,ar:"النور",en:"An-Nur",t:"Medinan",a:64},
  {n:25,ar:"الفرقان",en:"Al-Furqan",t:"Meccan",a:77},
  {n:26,ar:"الشعراء",en:"Ash-Shu'ara",t:"Meccan",a:227},
  {n:27,ar:"النمل",en:"An-Naml",t:"Meccan",a:93},
  {n:28,ar:"القصص",en:"Al-Qasas",t:"Meccan",a:88},
  {n:29,ar:"العنكبوت",en:"Al-'Ankabut",t:"Meccan",a:69},
  {n:30,ar:"الروم",en:"Ar-Rum",t:"Meccan",a:60},
  {n:31,ar:"لقمان",en:"Luqman",t:"Meccan",a:34},
  {n:32,ar:"السجدة",en:"As-Sajdah",t:"Meccan",a:30},
  {n:33,ar:"الأحزاب",en:"Al-Ahzab",t:"Medinan",a:73},
  {n:34,ar:"سبأ",en:"Saba",t:"Meccan",a:54},
  {n:35,ar:"فاطر",en:"Fatir",t:"Meccan",a:45},
  {n:36,ar:"يس",en:"Ya-Sin",t:"Meccan",a:83},
  {n:37,ar:"الصافات",en:"As-Saffat",t:"Meccan",a:182},
  {n:38,ar:"ص",en:"Sad",t:"Meccan",a:88},
  {n:39,ar:"الزمر",en:"Az-Zumar",t:"Meccan",a:75},
  {n:40,ar:"غافر",en:"Ghafir",t:"Meccan",a:85},
  {n:41,ar:"فصلت",en:"Fussilat",t:"Meccan",a:54},
  {n:42,ar:"الشورى",en:"Ash-Shuraa",t:"Meccan",a:53},
  {n:43,ar:"الزخرف",en:"Az-Zukhruf",t:"Meccan",a:89},
  {n:44,ar:"الدخان",en:"Ad-Dukhan",t:"Meccan",a:59},
  {n:45,ar:"الجاثية",en:"Al-Jathiyah",t:"Meccan",a:37},
  {n:46,ar:"الأحقاف",en:"Al-Ahqaf",t:"Meccan",a:35},
  {n:47,ar:"محمد",en:"Muhammad",t:"Medinan",a:38},
  {n:48,ar:"الفتح",en:"Al-Fath",t:"Medinan",a:29},
  {n:49,ar:"الحجرات",en:"Al-Hujurat",t:"Medinan",a:18},
  {n:50,ar:"ق",en:"Qaf",t:"Meccan",a:45},
  {n:51,ar:"الذاريات",en:"Adh-Dhariyat",t:"Meccan",a:60},
  {n:52,ar:"الطور",en:"At-Tur",t:"Meccan",a:49},
  {n:53,ar:"النجم",en:"An-Najm",t:"Meccan",a:62},
  {n:54,ar:"القمر",en:"Al-Qamar",t:"Meccan",a:55},
  {n:55,ar:"الرحمن",en:"Ar-Rahman",t:"Medinan",a:78},
  {n:56,ar:"الواقعة",en:"Al-Waqi'ah",t:"Meccan",a:96},
  {n:57,ar:"الحديد",en:"Al-Hadid",t:"Medinan",a:29},
  {n:58,ar:"المجادلة",en:"Al-Mujadila",t:"Medinan",a:22},
  {n:59,ar:"الحشر",en:"Al-Hashr",t:"Medinan",a:24},
  {n:60,ar:"الممتحنة",en:"Al-Mumtahanah",t:"Medinan",a:13},
  {n:61,ar:"الصف",en:"As-Saf",t:"Medinan",a:14},
  {n:62,ar:"الجمعة",en:"Al-Jumu'ah",t:"Medinan",a:11},
  {n:63,ar:"المنافقون",en:"Al-Munafiqun",t:"Medinan",a:11},
  {n:64,ar:"التغابن",en:"At-Taghabun",t:"Medinan",a:18},
  {n:65,ar:"الطلاق",en:"At-Talaq",t:"Medinan",a:12},
  {n:66,ar:"التحريم",en:"At-Tahrim",t:"Medinan",a:12},
  {n:67,ar:"الملك",en:"Al-Mulk",t:"Meccan",a:30},
  {n:68,ar:"القلم",en:"Al-Qalam",t:"Meccan",a:52},
  {n:69,ar:"الحاقة",en:"Al-Haqqah",t:"Meccan",a:52},
  {n:70,ar:"المعارج",en:"Al-Ma'arij",t:"Meccan",a:44},
  {n:71,ar:"نوح",en:"Nuh",t:"Meccan",a:28},
  {n:72,ar:"الجن",en:"Al-Jinn",t:"Meccan",a:28},
  {n:73,ar:"المزمل",en:"Al-Muzzammil",t:"Meccan",a:20},
  {n:74,ar:"المدثر",en:"Al-Muddaththir",t:"Meccan",a:56},
  {n:75,ar:"القيامة",en:"Al-Qiyamah",t:"Meccan",a:40},
  {n:76,ar:"الإنسان",en:"Al-Insan",t:"Medinan",a:31},
  {n:77,ar:"المرسلات",en:"Al-Mursalat",t:"Meccan",a:50},
  {n:78,ar:"النبأ",en:"An-Naba",t:"Meccan",a:40},
  {n:79,ar:"النازعات",en:"An-Nazi'at",t:"Meccan",a:46},
  {n:80,ar:"عبس",en:"'Abasa",t:"Meccan",a:42},
  {n:81,ar:"التكوير",en:"At-Takwir",t:"Meccan",a:29},
  {n:82,ar:"الانفطار",en:"Al-Infitar",t:"Meccan",a:19},
  {n:83,ar:"المطففين",en:"Al-Mutaffifin",t:"Meccan",a:36},
  {n:84,ar:"الانشقاق",en:"Al-Inshiqaq",t:"Meccan",a:25},
  {n:85,ar:"البروج",en:"Al-Buruj",t:"Meccan",a:22},
  {n:86,ar:"الطارق",en:"At-Tariq",t:"Meccan",a:17},
  {n:87,ar:"الأعلى",en:"Al-A'la",t:"Meccan",a:19},
  {n:88,ar:"الغاشية",en:"Al-Ghashiyah",t:"Meccan",a:26},
  {n:89,ar:"الفجر",en:"Al-Fajr",t:"Meccan",a:30},
  {n:90,ar:"البلد",en:"Al-Balad",t:"Meccan",a:20},
  {n:91,ar:"الشمس",en:"Ash-Shams",t:"Meccan",a:15},
  {n:92,ar:"الليل",en:"Al-Layl",t:"Meccan",a:21},
  {n:93,ar:"الضحى",en:"Ad-Duhaa",t:"Meccan",a:11},
  {n:94,ar:"الشرح",en:"Ash-Sharh",t:"Meccan",a:8},
  {n:95,ar:"التين",en:"At-Tin",t:"Meccan",a:8},
  {n:96,ar:"العلق",en:"Al-'Alaq",t:"Meccan",a:19},
  {n:97,ar:"القدر",en:"Al-Qadr",t:"Meccan",a:5},
  {n:98,ar:"البينة",en:"Al-Bayyinah",t:"Medinan",a:8},
  {n:99,ar:"الزلزلة",en:"Az-Zalzalah",t:"Medinan",a:8},
  {n:100,ar:"العاديات",en:"Al-'Adiyat",t:"Meccan",a:11},
  {n:101,ar:"القارعة",en:"Al-Qari'ah",t:"Meccan",a:11},
  {n:102,ar:"التكاثر",en:"At-Takathur",t:"Meccan",a:8},
  {n:103,ar:"العصر",en:"Al-'Asr",t:"Meccan",a:3},
  {n:104,ar:"الهمزة",en:"Al-Humazah",t:"Meccan",a:9},
  {n:105,ar:"الفيل",en:"Al-Fil",t:"Meccan",a:5},
  {n:106,ar:"قريش",en:"Quraysh",t:"Meccan",a:4},
  {n:107,ar:"الماعون",en:"Al-Ma'un",t:"Meccan",a:7},
  {n:108,ar:"الكوثر",en:"Al-Kawthar",t:"Meccan",a:3},
  {n:109,ar:"الكافرون",en:"Al-Kafirun",t:"Meccan",a:6},
  {n:110,ar:"النصر",en:"An-Nasr",t:"Medinan",a:3},
  {n:111,ar:"المسد",en:"Al-Masad",t:"Meccan",a:5},
  {n:112,ar:"الإخلاص",en:"Al-Ikhlas",t:"Meccan",a:4},
  {n:113,ar:"الفلق",en:"Al-Falaq",t:"Meccan",a:5},
  {n:114,ar:"الناس",en:"An-Nas",t:"Meccan",a:6}
];

// القرّاء — hd = رابط صوت الآية المفردة (cdn.islamic.network) بمعدل البت الصحيح لكل قارئ
// surahBase = رابط السورة الكاملة من mp3quran (٣ خانات). region = الهوية الجغرافية.
// كل الروابط أدناه مُتحقَّق منها فعلياً (2026-07).
var RECITERS = [
  // — أصحاب الترتيل الكلاسيكي —
  {id:'ar.husary',name:'محمود خليل الحصري',style:'ترتيل',region:'مصر',init:'ح',br:128,surahBase:'https://server13.mp3quran.net/husr'},
  {id:'ar.minshawi',name:'محمد صديق المنشاوي',style:'مرتل',region:'مصر',init:'م',br:128,surahBase:'https://server10.mp3quran.net/minsh'},
  {id:'ar.abdulsamad',name:'عبد الباسط عبد الصمد',style:'مجود',region:'مصر',init:'ع',br:64,surahBase:'https://server7.mp3quran.net/basit'},
  {id:'ar.banna',name:'محمود علي البنا',style:'ترتيل',region:'مصر',init:'ب',br:0,surahBase:'https://server8.mp3quran.net/bna',ayahEveryayah:'Mahmoud_Ali_Al_Banna_32kbps'},
  // — الشام —
  {id:'ar.aymanswoaid',name:'أيمن سويد',style:'تعليمي · تجويد',region:'الشام',init:'س',br:64,surahBase:''},
  // — الحجاز —
  {id:'ar.mahermuaiqly',name:'ماهر المعيقلي',style:'ترتيل',region:'الحجاز',init:'م',br:128,surahBase:'https://server12.mp3quran.net/maher'},
  {id:'ar.abdullahbasfar',name:'عبد الله بصفر',style:'مرتل',region:'الحجاز',init:'ب',br:192,surahBase:'https://server6.mp3quran.net/bsfr'},
  {id:'ar.shaatree',name:'أبو بكر الشاطري',style:'مرتل',region:'الحجاز',init:'ش',br:128,surahBase:'https://server11.mp3quran.net/shatri'},
  {id:'ar.hanirifai',name:'هاني الرفاعي',style:'مرتل',region:'الحجاز',init:'ر',br:192,surahBase:'https://server8.mp3quran.net/hani'},
  // — نجد والخليج —
  {id:'ar.abdurrahmaansudais',name:'عبد الرحمن السديس',style:'مرتل',region:'نجد',init:'س',br:192,surahBase:'https://server11.mp3quran.net/sds'},
  {id:'ar.saoodshuraym',name:'سعود الشريم',style:'مرتل',region:'نجد',init:'ش',br:64,surahBase:'https://server7.mp3quran.net/shur'},
  {id:'ar.hudhaify',name:'علي الحذيفي',style:'مرتل',region:'الحجاز',init:'ح',br:128,surahBase:'https://server9.mp3quran.net/hthfi'},
  {id:'ar.alafasy',name:'مشاري العفاسي',style:'مرتل',region:'الخليج',init:'ع',br:128,surahBase:'https://server8.mp3quran.net/afs'}
];

// عدد الآيات التراكمي لحساب الرقم العالمي للآية (1..6236) الذي يستخدمه cdn.islamic.network
var AYAH_OFFSETS=(function(){var o=[],sum=0;for(var i=0;i<SURAHS_ALL.length;i++){o[SURAHS_ALL[i].n]=sum;sum+=SURAHS_ALL[i].a;}return o;})();
function globalAyah(sn,an){return (AYAH_OFFSETS[sn]||0)+an;}
function recById(id){return RECITERS.find(function(r){return r.id===id;})||RECITERS[0];}

var EPISODES = [
  {id:1,num:"الحلقة الأولى",title:"السلام الكامل",surah:"البقرة • ٢٠٨",sn:2,an:208,
   ar:"يَا أَيُّهَا الَّذِينَ آمَنُوا ادْخُلُوا فِي السِّلْمِ كَافَّةً",
   en:"O believers, enter into peace completely.",
   tafsir:"يدعونا القرآن إلى السلام الشامل مع الله والناس والنفس.",
   tag:"السلام",bg:"bg-teal",glow:"rgba(126,200,200,.25)"},
  {id:2,num:"الحلقة الثانية",title:"قوة الصبر",surah:"البقرة • ١٥٣",sn:2,an:153,
   ar:"اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
   en:"Seek help through patience and prayer.",
   tafsir:"الصبر سلاح المؤمن. الصلاة تمنح القلب طاقة روحية.",
   tag:"الصبر",bg:"bg-gold",glow:"rgba(201,169,110,.25)"},
  {id:3,num:"الحلقة الثالثة",title:"نور العلم",surah:"المجادلة • ١١",sn:58,an:11,
   ar:"يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ",
   en:"Allah elevates those endowed with knowledge.",
   tafsir:"الإسلام دين العلم. أول كلمة نزلت: اقرأ.",
   tag:"العلم",bg:"bg-blue",glow:"rgba(74,122,255,.25)"},
  {id:4,num:"الحلقة الرابعة",title:"رحمة بلا حدود",surah:"الزمر • ٥٣",sn:39,an:53,
   ar:"لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
   en:"Do not despair of the mercy of Allah.",
   tafsir:"رحمة الله أوسع من كل خطيئة في الوجود.",
   tag:"الرحمة",bg:"bg-purple",glow:"rgba(160,80,220,.25)"},
  {id:5,num:"الحلقة الخامسة",title:"حسن الخُلق",surah:"القلم • ٤",sn:68,an:4,
   ar:"وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
   en:"And indeed, you are of a great moral character.",
   tafsir:"أعظم شهادة في القرآن — من الله للنبي ﷺ.",
   tag:"الأخلاق",bg:"bg-green",glow:"rgba(0,200,100,.25)"},
  {id:6,num:"الحلقة السادسة",title:"شكر النعمة",surah:"إبراهيم • ٧",sn:14,an:7,
   ar:"لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
   en:"If you are grateful, I will increase your blessings.",
   tafsir:"الشكر أسلوب حياة — بالقلب والقول والجوارح.",
   tag:"الشكر",bg:"bg-dark",glow:"rgba(201,169,110,.18)"}
];

var DAILY = [
  {ar:"إِنَّ مَعَ الْعُسْرِ يُسْرًا",en:"With hardship comes ease.",ref:"الشرح • ٦",sn:94,an:6},
  {ar:"وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",en:"He is with you wherever you are.",ref:"الحديد • ٤",sn:57,an:4},
  {ar:"إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",en:"Allah is with those who are patient.",ref:"البقرة • ١٥٣",sn:2,an:153},
  {ar:"وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",en:"We are closer than his jugular vein.",ref:"ق • ١٦",sn:50,an:16},
  {ar:"فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",en:"Surely with hardship comes ease.",ref:"الشرح • ٥",sn:94,an:5},
  {ar:"لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",en:"Do not despair of Allah's mercy.",ref:"الزمر • ٥٣",sn:39,an:53},
  {ar:"وَاللَّهُ غَالِبٌ عَلَىٰ أَمْرِهِ",en:"Allah is in full control of His affairs.",ref:"يوسف • ٢١",sn:12,an:21}
];

// ===== STATE =====
var S = {
  lang:'ar', page:'home', curRec:'ar.husary',
  sound:null, dvSound:null, playing:false, repeat:false, vol:.8,
  ayah:{sn:1,an:1,total:7}, progTimer:null,
  chatHistory:[], dv:null, wavesurfer:null,
  fontSize:1.42, prayerTimes:null, countdownInterval:null,
  medActive:false, favs:[], listenMode:'ayah',
  // التجويد مفعّل افتراضياً — أكثر الملاحظات كانت أن الزائر لم يعرف وجود الزر.
  // اختيار الزائر (تشغيل/إطفاء) يُحفظ في qk_tajweed ويُحترم في الزيارات التالية.
  tajweedOn:(localStorage.getItem('qk_tajweed')!=='0')
};

// ===== HELPERS =====
function pad3(n){return String(n).padStart(3,'0');}
function pad2(n){return String(n).padStart(2,'0');}
function fmt(s){var m=Math.floor(s/60);return m+':'+(Math.floor(s%60)<10?'0':'')+Math.floor(s%60);}
function t(key){return (T[S.lang]&&T[S.lang][key])||(T.ar&&T.ar[key])||key;}

// ===== STARS =====
// =====================================================================
// ===== الوضع الفاتح/الغامق =====
// الافتراضي يتبع تفضيل النظام، والاختيار اليدوي يُحفظ في qk_theme.
// =====================================================================
function systemTheme(){
  try{return (window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}
  catch(e){return 'dark';}
}
function applyTheme(mode,save){
  var light=(mode==='light');
  document.documentElement.setAttribute('data-theme',light?'light':'dark');
  var ic=document.getElementById('theme-ic');
  if(ic)ic.className='fas '+(light?'fa-sun':'fa-moon');
  // لون شريط المتصفح على الجوال
  var tc=document.querySelector('meta[name="theme-color"]');
  if(tc)tc.setAttribute('content',light?'#faf6ea':'#050c1a');
  S.theme=light?'light':'dark';
  if(save){try{localStorage.setItem('qk_theme',S.theme);}catch(e){}}
}
function toggleTheme(){
  applyTheme(S.theme==='light'?'dark':'light',true);
  if(typeof toast==='function')toast(t(S.theme==='light'?'theme_light':'theme_dark'));
}
function initTheme(){
  var saved=null;
  try{saved=localStorage.getItem('qk_theme');}catch(e){}
  applyTheme(saved||systemTheme(),false);
  // تابع تغيّر تفضيل النظام ما لم يختر المستخدم يدوياً
  try{
    var mq=window.matchMedia('(prefers-color-scheme: light)');
    var onChange=function(e){ if(!localStorage.getItem('qk_theme'))applyTheme(e.matches?'light':'dark',false); };
    if(mq.addEventListener)mq.addEventListener('change',onChange);
    else if(mq.addListener)mq.addListener(onChange);
  }catch(e){}
}
initTheme();   // فوراً — قبل الرسم لتفادي وميض الوضع الخاطئ

(function(){
  var cv=document.getElementById('star-canvas');
  if(!cv)return;
  var ctx=cv.getContext('2d');
  var stars=[];
  var PAL_DARK=['rgba(255,251,240,','rgba(232,201,138,','rgba(212,168,90,',
                'rgba(201,169,110,','rgba(255,255,255,','rgba(220,230,255,','rgba(255,245,220,'];
  // الوضع الفاتح: ذرّات ذهبية داكنة خفيفة كنثار على ورق المصحف
  var PAL_LIGHT=['rgba(168,133,63,','rgba(150,118,47,','rgba(184,146,58,',
                 'rgba(122,90,40,','rgba(160,120,64,','rgba(140,112,52,','rgba(176,140,70,'];
  var palettes=PAL_DARK;
  function resize(){cv.width=window.innerWidth;cv.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);
  for(var i=0;i<220;i++){
    var pi=Math.floor(Math.random()*PAL_DARK.length);
    var r=Math.random()*1.4+0.2;
    stars.push({x:Math.random(),y:Math.random(),r:r,baseR:r,
      alpha:Math.random()*.7+.1,alphaSpeed:Math.random()*.007+.002,alphaDir:1,
      pi:pi,breathe:Math.random()>.3,
      phase:Math.random()*Math.PI*2,speed:Math.random()*.015+.005});
  }
  function draw(){
    ctx.clearRect(0,0,cv.width,cv.height);
    var now=Date.now()/1000;
    var light=document.documentElement.getAttribute('data-theme')==='light';
    var pal=light?PAL_LIGHT:PAL_DARK, dim=light?0.5:1;
    for(var i=0;i<stars.length;i++){
      var s=stars[i],alpha;
      if(s.breathe){
        alpha=0.12+(Math.sin(now*s.speed+s.phase)*.5+.5)*.65;
        s.r=s.baseR*(0.85+(Math.sin(now*s.speed*.7+s.phase)*.5+.5)*.3);
      }else{
        s.alpha+=s.alphaSpeed*s.alphaDir;
        if(s.alpha>=.85||s.alpha<=.05)s.alphaDir*=-1;
        alpha=s.alpha;
      }
      ctx.beginPath();ctx.arc(s.x*cv.width,s.y*cv.height,s.r,0,Math.PI*2);
      ctx.fillStyle=pal[s.pi]+(alpha*dim).toFixed(2)+')';ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// ===== INTRO =====
window.addEventListener('DOMContentLoaded',function(){
  // رابط مباشر (/learn …) → ادخل فوراً بلا إنترو
  if(parseRoute().page!=='home'){
    var iv=document.getElementById('intro');if(iv)iv.style.display='none';
    var mn=document.getElementById('main');if(mn)mn.style.opacity=1;
    initApp();
    if('serviceWorker'in navigator)navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'}).catch(function(){});
    return;
  }
  // مؤقّت احتياطي: إن تعذّر الضغط على الزر لأي سبب، ادخل تلقائياً
  S.autoEnter=setTimeout(function(){if(document.getElementById('intro').style.display!=='none')enterApp();},6000);
  var tl=gsap.timeline({delay:.35});
  tl.fromTo('#il',{opacity:0,scale:.5},{opacity:1,scale:1,duration:1.3,ease:'back.out(1.3)'})
    .fromTo('#iname-ar',{opacity:0,y:22},{opacity:1,y:0,duration:.9,ease:'power2.out'},'-=.4')
    .fromTo('#iname-en',{opacity:0,y:14},{opacity:1,y:0,duration:.7,ease:'power2.out'},'-=.3')
    .fromTo('#ibsm',{opacity:0},{opacity:1,duration:.65},'-=.2')
    .fromTo('#iv',{opacity:0,y:12},{opacity:1,y:0,duration:.75,ease:'power2.out'},'-=.2')
    .fromTo('#ibtn',{opacity:0,y:10},{opacity:1,y:0,duration:.6,ease:'back.out(1.4)'},'-=.2');
  gsap.to('#il svg',{filter:'drop-shadow(0 0 38px rgba(201,169,110,.75)) drop-shadow(0 0 75px rgba(201,169,110,.28))',duration:2.5,repeat:-1,yoyo:true,ease:'sine.inOut'});
  // Register SW — updateViaCache:'none' يمنع تخزين sw.js في الكاش فيُكتشف أي تحديث فوراً
  if('serviceWorker'in navigator){
    navigator.serviceWorker.register('/sw.js',{updateViaCache:'none'}).then(function(reg){
      reg.update();
      // إن كان هناك SW منتظِر بالفعل → أظهر زر التحديث
      if(reg.waiting&&navigator.serviceWorker.controller)showUpdateBanner();
      // عند وصول نسخة جديدة → أظهر الزر (بلا إعادة تحميل تلقائية)
      reg.addEventListener('updatefound',function(){
        var nw=reg.installing;if(!nw)return;
        nw.addEventListener('statechange',function(){
          if(nw.state==='installed'&&navigator.serviceWorker.controller)showUpdateBanner();
        });
      });
    }).catch(function(){});
    var reloaded=false;
    navigator.serviceWorker.addEventListener('controllerchange',function(){
      if(reloaded)return;reloaded=true;location.reload();
    });
  }
});
// ===== زر تحديث النسخة =====
function showUpdateBanner(){var b=document.getElementById('update-banner');if(b)b.classList.add('show');}
function applyUpdate(){
  if(!('serviceWorker'in navigator))return location.reload();
  navigator.serviceWorker.getRegistration().then(function(reg){
    var w=reg&&(reg.waiting||reg.installing);
    if(w){w.postMessage('skipWaiting');}      // فعّل النسخة الجديدة → controllerchange يُعيد التحميل
    else location.reload();
  });
}

function enterApp(){
  clearTimeout(S.autoEnter);
  gsap.timeline({onComplete:function(){
    document.getElementById('intro').style.display='none';
    gsap.fromTo(document.getElementById('main'),{opacity:0},{opacity:1,duration:.5});
    initApp();
  }}).to('.intro-box',{scale:1.04,opacity:0,duration:.5,ease:'power2.in'})
     .to('#intro',{opacity:0,duration:.3},'-=.1');
}

// ===== INIT =====
function initApp(){
  // منع Howler من تعليق سياق الصوت تلقائياً في الخلفية (سبب تعليق/توقّف الصوت أحياناً)
  if(typeof Howler!=='undefined')Howler.autoSuspend=false;
  if(S.inited)return;S.inited=true;
  try{S.favs=JSON.parse(localStorage.getItem('qk_favs')||'[]');}catch(e){S.favs=[];}
  try{S.lastRead=JSON.parse(localStorage.getItem('qk_last')||'null');}catch(e){S.lastRead=null;}
  if(S.lastRead)showResume();
  try{var f=localStorage.getItem('qk_font');if(f&&MUSHAF_FONTS[f])setMushafFont(f);}catch(e){}
  buildSurahList();buildReciters();buildFooterReciters();buildEpisodes();fillAudioSelects();
  var r0=parseRoute();
  if(r0.page&&r0.page!=='home')setTimeout(function(){
    goPage(r0.page,true);
    updateSeo(r0.page);
    if(r0.page==='read'&&r0.sn){loadSurah(r0.sn);if(r0.an)setTimeout(function(){jumpToAyah(r0.an);},1500);}
    if(r0.legacy)pushRoute(r0.page,0,0,true);   // حوّل ?page= إلى مسار نظيف
  },60);
  else updateSeo('home');
  setDailyVerse();animateStats();initWaveSurfer();loadPrayerData();applyLang('ar');
  // حالة التنقّل السريع الابتدائية (إخفاء زر الصفحة الحالية)
  document.querySelectorAll('#hdr-quicknav .qn-btn').forEach(function(b){b.classList.toggle('hidden',b.getAttribute('data-p')===S.page);});
  scheduleNudges();  // تنبيهات لطيفة على فترات متباعدة
  window.addEventListener('scroll',function(){document.getElementById('hdr').classList.toggle('scrolled',window.scrollY>10);});
  document.getElementById('prog-bar').addEventListener('click',function(e){
    var pct=(e.clientX-this.getBoundingClientRect().left)/this.offsetWidth;
    if(S.sound&&S.sound.duration())S.sound.seek(pct*S.sound.duration());
  });
}

// ===== i18n =====
function setLang(lang){
  S.lang=lang;
  document.querySelector('.lang-sel').value=lang;
  applyLang(lang);
}
function applyLang(lang){
  var isRTL=(lang==='ar'||lang==='ur');
  document.documentElement.setAttribute('dir',isRTL?'rtl':'ltr');
  document.documentElement.setAttribute('lang',lang);
  document.documentElement.setAttribute('data-lang',lang);
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(T[lang]&&T[lang][k])el.textContent=T[lang][k];
  });
  // ترجمات تحوي روابط: innerHTML لا textContent، وإلا مُسح الرابط عند تبديل اللغة.
  // النصوص هنا من ملفنا وحده — لا مدخلات مستخدم — فلا خطر حقن.
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){
    var k=el.getAttribute('data-i18n-html');
    if(T[lang]&&T[lang][k])el.innerHTML=T[lang][k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    var k=el.getAttribute('data-i18n-ph');
    if(T[lang]&&T[lang][k])el.setAttribute('placeholder',T[lang][k]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(function(el){
    var k=el.getAttribute('data-i18n-title');
    if(T[lang]&&T[lang][k])el.setAttribute('title',T[lang][k]);
  });
  if(S.page==='kids'&&typeof kdRenderTabs==='function'){kdRenderTabs();kdRenderGrid();kdShowAyah();}
  if(typeof renderSupStrip==='function'&&SUP.loaded){renderSupStrip();if(S.page==='supporters')renderSupporters();}
  var ar=document.getElementById('hero-ar'),en=document.getElementById('hero-en');
  if(ar&&en){
    if(lang==='ar'||lang==='ur'){ar.style.display='block';en.style.display='none';}
    else{ar.style.display='none';en.style.display='block';
      en.textContent=lang==='fr'?'Le Noble Coran':lang==='es'?'El Noble Corán':lang==='tr'?"Kur'an-ı Kerim":'The Noble Quran';}
  }
  if(typeof refreshStats==='function')refreshStats();
  syncTranslToLang();
}
// يوائم نسخة الترجمة مع لغة الواجهة، ويعيد تحميل السورة لتطابقها
function syncTranslToLang(){
  var sel=document.getElementById('transl-sel');if(!sel)return;
  var want=LANG_TRANSL[S.lang];                    // العربية: لا ترجمة — التفسير الميسّر
  if(want&&sel.value!==want){
    sel.value=want;
    if(S.curSurah&&S.page==='read')reloadSurah();
  }else if(S.lang==='ar'&&S.curSurah&&S.page==='read'&&S.langPrev&&S.langPrev!=='ar'){
    reloadSurah();                                  // عاد للعربية → أعِد العرض بلا ترجمة
  }
  S.langPrev=S.lang;
}

// ===== NAV =====
// =====================================================================
// ===== التوجيه بروابط نظيفة (History API) =====
// /learn · /read/2/255 — كل قسم رابط مستقل قابل للمشاركة يفتح مباشرةً بلا إنترو
// =====================================================================
var ROUTES={home:'',read:'read',listen:'listen',teach:'learn',prayer:'prayer',
            kids:'kids',ai:'assistant',episodes:'episodes',contact:'contact',license:'license',
            supporters:'supporters',advertise:'advertise'};
var PATH2PAGE=(function(){var m={};for(var k in ROUTES)if(ROUTES[k])m[ROUTES[k]]=k;return m;})();
var ROUTE_TITLE={read:'nav_read',listen:'nav_listen',teach:'nav_teach',prayer:'nav_prayer',kids:'kd_title',supporters:'sup_title',advertise:'adv_title',
                 ai:'nav_ai',episodes:'nav_episodes',contact:'nav_contact',license:'nav_license'};

// يبني المسار: /read → /read/2 → /read/2/255
function routePath(page,sn,an){
  var seg=ROUTES[page];
  if(seg===undefined)return '/';
  if(page==='read'){
    sn=sn||S.curSurah;
    if(sn){seg+='/'+sn; if(an)seg+='/'+an;}
  }
  return '/'+seg;
}
// يقرأ المسار الحالي (مع دعم الروابط القديمة ?page=)
function parseRoute(){
  var parts=location.pathname.replace(/^\/+|\/+$/g,'').split('/').filter(Boolean);
  if(!parts.length){
    var legacy=(location.search.match(/[?&]page=([a-z]+)/)||[])[1];
    if(legacy&&document.getElementById('pg-'+legacy))return {page:legacy,legacy:true};
    return {page:'home'};
  }
  var page=PATH2PAGE[parts[0].toLowerCase()];
  if(!page)return {page:'home'};
  return {page:page,sn:parseInt(parts[1],10)||0,an:parseInt(parts[2],10)||0};
}
// يحدّث الرابط في شريط المتصفح + وسوم SEO
function pushRoute(page,sn,an,replace){
  if(!window.history||!history.pushState)return;
  var path=routePath(page,sn,an);
  if(path===location.pathname&&!replace)return;
  try{history[replace?'replaceState':'pushState']({page:page,sn:sn,an:an},'',path);}catch(e){}
  updateSeo(page);
}
function updateSeo(page){
  var base='القرآن الكريم — QuranKarem.org';
  var k=ROUTE_TITLE[page];
  document.title=(k&&page!=='home')?(t(k)+' · '+base):base;
  var url='https://qurankarem.org'+routePath(page);
  var c=document.querySelector('link[rel=canonical]');if(c)c.href=url;
  var og=document.querySelector('meta[property="og:url"]');if(og)og.setAttribute('content',url);
}
// زر الرجوع/التقدّم في المتصفح
window.addEventListener('popstate',function(){
  var r=parseRoute();
  goPage(r.page,true);
  updateSeo(r.page);
  if(r.page==='read'&&r.sn){loadSurah(r.sn);if(r.an)setTimeout(function(){jumpToAyah(r.an);},1400);}
});

function goPage(name,silent){
  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('on');});
  document.querySelectorAll('.nav-btn').forEach(function(a){a.classList.remove('on');});
  var pg=document.getElementById('pg-'+name);
  if(pg){pg.classList.add('on');gsap.fromTo(pg,{opacity:0,y:14},{opacity:1,y:0,duration:.33,ease:'power2.out'});}
  document.querySelectorAll('[data-p="'+name+'"]').forEach(function(a){a.classList.add('on');});
  // التنقّل السريع (موبايل): أخفِ زر الصفحة الحالية فتظهر ٣ أزرار فقط
  document.querySelectorAll('#hdr-quicknav .qn-btn').forEach(function(b){
    b.classList.toggle('hidden',b.getAttribute('data-p')===name);
  });
  var prev=S.page;
  S.page=name;window.scrollTo({top:0,behavior:'smooth'});
  if(name!=='teach'&&typeof RC!=='undefined'&&RC.active)rcStop();
  // أوقف أي صوت عند مغادرة صفحته (منعاً لتشغيل صوتين معاً)
  if(prev==='listen'&&name!=='listen')stopListenAudio();
  if(prev==='teach'&&name!=='teach'&&typeof tcStop==='function')tcStop();
  if(prev==='kids'&&name!=='kids'&&typeof kdStopAudio==='function'){kdStopAudio();kdBtn(false);}
  if(name==='teach')initTeach();
  if(name==='kids')initKids();
  if(name==='supporters')initSupporters();
  if(name==='read'){showResume();syncTajweedBtn();}
  if(!silent)pushRoute(name);
}
// إيقاف صوت صفحة الاستماع بالكامل
function stopListenAudio(){
  if(S.sound){try{S.sound.stop();S.sound.unload();}catch(e){}S.sound=null;}
  if(S.wavesurfer){try{S.wavesurfer.pause();}catch(e){}}
  if(S.progTimer)clearInterval(S.progTimer);
  S.playing=false;
  try{wsState(false);}catch(e){}
}
function toggleMob(){
  document.getElementById('mob-btn').classList.toggle('open');
  document.getElementById('mob-drawer').classList.toggle('open');
}

// ===== DAILY VERSE =====
function setDailyVerse(){
  var d=DAILY[new Date().getDate()%DAILY.length];S.dv=d;
  document.getElementById('dv-ar').textContent=d.ar;
  document.getElementById('dv-tr').textContent=d.en;
  document.getElementById('dv-ref').textContent=d.ref;
  document.getElementById('med-verse').textContent=d.ar;
  document.getElementById('med-tr').textContent=d.en;
}
function playDV(){
  var btn=document.getElementById('dv-btn');
  if(S.dvSound){S.dvSound.stop();S.dvSound=null;btn.classList.remove('on');return;}
  var url='https://everyayah.com/data/Husary_128kbps/'+pad3(S.dv.sn)+pad3(S.dv.an)+'.mp3';
  btn.classList.add('on');
  S.dvSound=new Howl({src:[url],html5:true,volume:S.vol,
    onend:function(){btn.classList.remove('on');S.dvSound=null;},
    onloaderror:function(){btn.classList.remove('on');S.dvSound=null;}
  });S.dvSound.play();
}
function shareDV(){
  var txt=S.dv.ar+'\n\n"'+S.dv.en+'"\n— '+S.dv.ref+'\n\n🌐 qurankarem.org';
  if(navigator.share)navigator.share({title:'آية اليوم',text:txt}).catch(function(){});
  else if(navigator.clipboard)navigator.clipboard.writeText(txt).then(function(){
    Swal.fire({icon:'success',title:t('share'),timer:1200,showConfirmButton:false,background:'#07111f',color:'#e8c98a'});
  });
}
function saveFav(){
  S.favs.unshift({ar:S.dv.ar,en:S.dv.en,ref:S.dv.ref,ts:Date.now()});
  if(S.favs.length>50)S.favs.pop();
  try{localStorage.setItem('qk_favs',JSON.stringify(S.favs));}catch(e){}
  Swal.fire({icon:'success',title:t('save'),timer:1200,showConfirmButton:false,background:'#07111f',color:'#e8c98a'});
}
function toggleMedFromDV(){toggleMed();}

// ===== MEDITATION =====
function toggleMed(){
  S.medActive=!S.medActive;
  document.getElementById('med-overlay').classList.toggle('on',S.medActive);
  document.body.style.overflow=S.medActive?'hidden':'';
}

// ===== STATS =====
// شكل الأرقام حسب اللغة — تحويل صريح لضمان الصحة عبر كل المتصفحات
// عربي: أرقام هندية ٠-٩ · أردو/فارسي: هندية شرقية ۰-۹ · البقية: غربية 0-9
function fmtNum(n){
  var s=Number(n).toLocaleString('en-US'); // تجميع الآلاف "6,236"
  if(S.lang==='ar')return s.replace(/[0-9]/g,function(d){return'٠١٢٣٤٥٦٧٨٩'[d];}).replace(/,/g,'٬');
  // الأردية/الفارسية: الفاصل ٬ يظهر مكسوراً في خطها — نُبقي الفاصلة العادية
  if(S.lang==='ur'||S.lang==='fa')return s.replace(/[0-9]/g,function(d){return'۰۱۲۳۴۵۶۷۸۹'[d];});
  return s;
}
var STATS=[{id:'sn0',end:114},{id:'sn1',end:6236},{id:'sn2',end:30},{id:'sn3',end:RECITERS.length}];
function animateStats(){
  STATS.forEach(function(t2,i){
    var el=document.getElementById(t2.id);if(!el)return;
    var dur=1600,start;
    setTimeout(function(){start=Date.now();
      (function f(){var p=Math.min((Date.now()-start)/dur,1),e=1-Math.pow(1-p,3);
        el.textContent=fmtNum(Math.round(e*t2.end));if(p<1)requestAnimationFrame(f);})();
    },i*160);
  });
}
// إعادة تنسيق الأرقام عند تغيير اللغة
function refreshStats(){STATS.forEach(function(t2){var el=document.getElementById(t2.id);if(el)el.textContent=fmtNum(t2.end);});}

// ===== PRAYER =====
var PK=['Fajr','Sunrise','Dhuhr','Asr','Maghrib','Isha'];
var PI=['fajr','sunrise','dhuhr','asr','maghrib','isha'];
var PAR=['الفجر','الشروق','الظهر','العصر','المغرب','العشاء'];

function loadPrayerData(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function(pos){fetchPrayer(pos.coords.latitude,pos.coords.longitude);},
      function(){fetchPrayer(21.4225,39.8262,'مكة المكرمة');}
    );
  }else fetchPrayer(21.4225,39.8262,'مكة المكرمة');
}
function fetchPrayer(lat,lng,city){
  fetch('https://api.aladhan.com/v1/timings?latitude='+lat+'&longitude='+lng+'&method=4')
    .then(function(r){return r.json();}).then(function(d){
      S.prayerTimes=d.data.timings;
      var loc=city||d.data.meta.timezone;
      ['home-loc','prayer-loc'].forEach(function(id){
        var el=document.getElementById(id);
        if(el)el.innerHTML='<i class="fas fa-map-marker-alt" style="color:var(--gold-600);margin-left:5px"></i>'+loc;
      });
      PI.forEach(function(id,i){
        var v=S.prayerTimes[PK[i]];
        ['hp-'+id,'pt-'+id].forEach(function(eid){var el=document.getElementById(eid);if(el)el.textContent=v;});
      });
      highlightPrayer(S.prayerTimes);
      startCountdown(S.prayerTimes);
    }).catch(function(){});
}
function highlightPrayer(tm){
  var now=new Date(),cur=-1;
  for(var i=PK.length-1;i>=0;i--){
    if(PK[i]==='Sunrise')continue;
    var parts=tm[PK[i]].split(':');
    var pt=new Date();pt.setHours(parseInt(parts[0]),parseInt(parts[1]),0);
    if(now>=pt){cur=i;break;}
  }
  document.querySelectorAll('.p-mini,.p-tile').forEach(function(c){c.classList.remove('now');});
  if(cur>=0){
    var minis=document.querySelectorAll('.p-mini');
    var tiles=document.querySelectorAll('.p-tile');
    if(minis[cur])minis[cur].classList.add('now');
    if(tiles[cur])tiles[cur].classList.add('now');
  }
}
function startCountdown(tm){
  if(S.countdownInterval)clearInterval(S.countdownInterval);
  function update(){
    var now=new Date(),nextMs=Infinity,nextName='--';
    PK.forEach(function(pn,i){
      if(pn==='Sunrise')return;
      var parts=tm[pn].split(':');
      var pt=new Date();pt.setHours(parseInt(parts[0]),parseInt(parts[1]),0);
      if(pt<=now)pt.setDate(pt.getDate()+1);
      var diff=pt-now;
      if(diff<nextMs){nextMs=diff;nextName=PAR[i];}
    });
    var h=Math.floor(nextMs/3600000),m=Math.floor((nextMs%3600000)/60000),s=Math.floor((nextMs%60000)/1000);
    var cd=pad2(h)+':'+pad2(m)+':'+pad2(s);
    ['np-name','np2-name'].forEach(function(id){var el=document.getElementById(id);if(el)el.textContent=nextName;});
    ['np-cd','np2-cd'].forEach(function(id){var el=document.getElementById(id);if(el)el.textContent=cd;});
  }
  update();S.countdownInterval=setInterval(update,1000);
}

// ===== QIBLA =====
function getQibla(){
  var btn=document.querySelector('.qibla-btn'),orig=btn.innerHTML;
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i>';
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      function(pos){fetchQibla(pos.coords.latitude,pos.coords.longitude);btn.innerHTML=orig;},
      function(){Swal.fire({icon:'warning',title:'تعذّر التحديد',background:'#07111f',color:'#e8c98a'});btn.innerHTML=orig;}
    );
  }
}
function fetchQibla(lat,lng){
  fetch('https://api.aladhan.com/v1/qibla/'+lat+'/'+lng)
    .then(function(r){return r.json();}).then(function(d){
      var deg=Math.round(d.data.direction);
      document.getElementById('qibla-deg').textContent=deg+'°';
      document.getElementById('qibla-arrow').style.transform='translateX(-50%) rotate('+deg+'deg)';
      document.getElementById('qibla-info').textContent='اتجاه القبلة: '+deg+'° من الشمال';
    }).catch(function(){document.getElementById('qibla-info').textContent='تعذّر التحميل.';});
}

// ===== QURAN =====
function buildSurahList(){
  var list=document.getElementById('s-list');if(!list)return;
  SURAHS_ALL.forEach(function(s){
    var div=document.createElement('div');div.className='s-item';
    div.dataset.n=s.n;div.dataset.ar=s.ar;div.dataset.en=s.en.toLowerCase();
    div.innerHTML='<div class="s-num">'+s.n+'</div>'
      +'<div style="flex:1"><div class="s-ar-nm">'+s.ar+'</div><div class="s-en-nm">'+s.en+'</div></div>'
      +'<div class="s-meta">'+(s.t==='Meccan'?'مكية':'مدنية')+'</div>';
    div.onclick=function(){
      document.querySelectorAll('.s-item').forEach(function(i){i.classList.remove('on');});
      div.classList.add('on');loadSurah(s.n);
    };
    list.appendChild(div);
  });
}
function filterSurahs(){
  var q=document.getElementById('srch').value.toLowerCase();
  document.querySelectorAll('.s-item').forEach(function(item){
    var ar=item.dataset.ar||'',en=item.dataset.en||'';
    item.style.display=(!q||ar.includes(q)||en.includes(q))?'flex':'none';
  });
}
function changeFontSize(d){
  S.fontSize=Math.max(.9,Math.min(2.4,S.fontSize+d));
  document.querySelectorAll('.a-ar').forEach(function(el){el.style.fontSize=S.fontSize+'rem';});
}
function loadSurah(sn){
  var rb=document.getElementById('reader-body');
  rb.innerHTML='<div class="reader-ph"><i class="fas fa-spinner fa-spin"></i></div>';
  document.getElementById('rtitle').textContent=(SURAHS_ALL.find(function(s){return s.n===sn;})||{}).ar||'';
  S.curSurah=sn;
  if(S.page==='read')pushRoute('read',sn,0,true);   // رابط قابل للمشاركة للسورة
  var tsel=document.getElementById('transl-sel');
  var tr=(tsel&&tsel.value)||'en.sahih';
  var key='qk_s_'+sn+'_'+tr;
  var cached;try{cached=JSON.parse(localStorage.getItem(key));}catch(e){}
  if(cached&&cached.ar&&cached.en){renderSurah(cached.ar,cached.en,sn);return;}
  Promise.all([
    fetch('https://api.alquran.cloud/v1/surah/'+sn+'/ar.uthmani').then(function(r){return r.json();}),
    fetch('https://api.alquran.cloud/v1/surah/'+sn+'/'+tr).then(function(r){return r.json();})
  ]).then(function(res){
    if(res[0].code!==200)throw new Error();
    var data={ar:res[0].data,en:res[1].data};
    try{localStorage.setItem(key,JSON.stringify(data));}catch(e){}
    renderSurah(data.ar,data.en,sn);
  }).catch(function(){rb.innerHTML='<div class="reader-ph"><i class="fas fa-exclamation-triangle"></i><p style="margin-top:10px">تعذّر التحميل</p></div>';});
}
function reloadSurah(){if(S.curSurah)loadSurah(S.curSurah);}

// ===== التفسير الميسّر =====
// =====================================================================
// ===== البحث الموحّد: سورة · آية · قارئ =====
// «الكهف» · «Kahf» · «18» · «18:10» · «الحصري» → انتقال مباشر
// =====================================================================
var QS={open:false,items:[],sel:0};
// تطبيع للمطابقة (يجرّد التشكيل ويوحّد الألف/الياء/التاء ويحذف "ال" و"سورة")
function qNorm(x){
  return String(x||'').toLowerCase()
    .replace(/[ً-ْٰـ]/g,'')
    .replace(/[آأإٱى]/g,'ا')
    .replace(/[یي]/g,'ي').replace(/ة/g,'ه')
    .replace(/[^ء-يa-z0-9\s]/g,'')
    .replace(/(^|\s)سوره(?=\s|$)/g,' ')   // \b لا يعمل مع العربية
    .replace(/^ال/,'').trim().replace(/^ال/,'');
}
function toLatinDigits(x){return String(x).replace(/[٠-٩۰-۹]/g,function(d){
  return String(d.charCodeAt(0)&0x0F);});}

function openSearch(){
  QS.open=true;
  document.getElementById('srch-ov').classList.add('on');
  var i=document.getElementById('q-input');i.value='';i.focus();
  runSearch();
}
function closeSearch(){QS.open=false;document.getElementById('srch-ov').classList.remove('on');}

function runSearch(){
  var raw=toLatinDigits((document.getElementById('q-input')||{}).value||'').trim();
  var q=qNorm(raw), out=[];
  // مرجع آية: 18:10 · 18/10 · 18 10
  var m=raw.match(/^(\d{1,3})\s*[:\/\-\s]\s*(\d{1,3})$/);
  if(m){
    var sn=+m[1],an=+m[2],si=SURAHS_ALL.find(function(x){return x.n===sn;});
    if(si&&an>=1&&an<=si.a)
      out.push({ic:'fa-book-quran',t:si.ar+' — '+t('ayah_word')+' '+arNum(an),
                s:si.en+' · '+t('nav_read'),tag:t('nav_read'),go:function(){goPage('read');loadSurah(sn);setTimeout(function(){jumpToAyah(an);},1300);}});
  }
  // رقم سورة مجرّد
  if(!out.length&&/^\d{1,3}$/.test(raw)){
    var n2=+raw,s2=SURAHS_ALL.find(function(x){return x.n===n2;});
    if(s2)out.push({ic:'fa-book-quran',t:s2.ar,s:s2.en+' · '+arNum(s2.a)+' '+t('ayahs'),
                    tag:t('nav_read'),go:function(){goPage('read');loadSurah(n2);}});
  }
  if(q){
    // السور بالاسم (عربي أو إنجليزي)
    SURAHS_ALL.forEach(function(x){
      if(out.length>14)return;
      if(qNorm(x.ar).indexOf(q)>-1||qNorm(x.en).indexOf(q)>-1)
        out.push({ic:'fa-book-quran',t:arNum(x.n)+'. '+x.ar,s:x.en+' · '+arNum(x.a)+' '+t('ayahs'),
                  tag:t('nav_read'),go:function(){goPage('read');loadSurah(x.n);}});
    });
    // القرّاء
    RECITERS.forEach(function(r){
      if(out.length>18)return;
      if(qNorm(r.name).indexOf(q)>-1)
        out.push({ic:'fa-headphones',t:r.name,s:(r.region||'')+' · '+(r.style||''),
                  tag:t('nav_listen'),go:function(){S.curRec=r.id;goPage('listen');
                    document.querySelectorAll('.rec-card').forEach(function(c,i2){c.classList.toggle('on',RECITERS[i2]&&RECITERS[i2].id===r.id);});
                    var pr=document.getElementById('p-rec');if(pr)pr.textContent=r.name;toast(r.name);}});
    });
  }
  QS.items=out;QS.sel=0;renderSearch();
}
function renderSearch(){
  var box=document.getElementById('q-results');if(!box)return;
  if(!QS.items.length){box.innerHTML='';return;}
  box.innerHTML=QS.items.map(function(it,i){
    return '<div class="q-item'+(i===QS.sel?' sel':'')+'" onclick="pickSearch('+i+')">'
      +'<div class="q-ic"><i class="fas '+it.ic+'"></i></div>'
      +'<div class="q-main"><div class="q-t">'+it.t+'</div><div class="q-s">'+it.s+'</div></div>'
      +'<span class="q-tag">'+it.tag+'</span></div>';
  }).join('');
}
function pickSearch(i){
  var it=QS.items[i];if(!it)return;
  closeSearch();it.go();
}
function searchKey(e){
  if(e.key==='Escape'){closeSearch();return;}
  if(e.key==='Enter'){e.preventDefault();pickSearch(QS.sel);return;}
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){
    e.preventDefault();
    if(!QS.items.length)return;
    QS.sel=(QS.sel+(e.key==='ArrowDown'?1:-1)+QS.items.length)%QS.items.length;
    renderSearch();
    var el=document.querySelectorAll('.q-item')[QS.sel];if(el)el.scrollIntoView({block:'nearest'});
  }
}
// اختصارات: Ctrl/Cmd+K أو "/" لفتح البحث
document.addEventListener('keydown',function(e){
  var typing=/^(INPUT|TEXTAREA|SELECT)$/.test((e.target||{}).tagName||'');
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();QS.open?closeSearch():openSearch();return;}
  if(e.key==='/'&&!typing&&!QS.open){e.preventDefault();openSearch();}
});

// ===== المعنى لكل آية — يتبع اللغة المختارة من زر اللغة =====
var LANG_TRANSL={en:'en.sahih',fr:'fr.hamidullah',es:'es.asad',ur:'ur.junagarhi',tr:'tr.diyanet'};
function toggleMeaning(an){
  var row=document.getElementById('qa-'+an);if(!row)return;
  var open=row.classList.toggle('show-meaning');
  var b=row.querySelector('.a-mean');if(b)b.classList.toggle('on',open);
  if(open&&S.lang==='ar')ensureTafsir(an);      // العربية: التفسير الميسّر
}
// يجلب التفسير العربي مرة واحدة للسورة ويملأ كل الصناديق
function ensureTafsir(an){
  var box=document.getElementById('mean-'+an);
  if(!box||box.dataset.tf==='1')return;
  var sn=S.curSurah,key='qk_tf_'+sn,cached=null;
  try{cached=JSON.parse(localStorage.getItem(key));}catch(e){}
  function fill(arr){
    document.querySelectorAll('.meaning-box').forEach(function(b2){
      var i=parseInt(b2.id.replace('mean-',''),10);
      if(arr[i-1]){b2.innerHTML='<span class="tf-lbl">'+t('tafsir')+'</span>'+arr[i-1];b2.dataset.tf='1';}
    });
  }
  if(cached&&cached.length){fill(cached);return;}
  box.textContent='…';
  fetch('https://api.alquran.cloud/v1/surah/'+sn+'/ar.muyassar')
    .then(function(r){return r.json();})
    .then(function(d){
      if(d.code!==200)throw new Error();
      var arr=d.data.ayahs.map(function(a){return a.text;});
      try{localStorage.setItem(key,JSON.stringify(arr));}catch(e){}
      fill(arr);
    }).catch(function(){box.textContent=t('tafsir_err');});
}
// الزر العام: يفتح/يغلق المعنى لكل الآيات دفعةً واحدة
function toggleTafsir(){
  S.tafsirOn=!S.tafsirOn;
  var b=document.getElementById('tafsir-btn');if(b)b.classList.toggle('on',S.tafsirOn);
  if(!S.curSurah){toast(t('select_surah'));S.tafsirOn=false;if(b)b.classList.remove('on');return;}
  document.querySelectorAll('#reader-body .ayah-row').forEach(function(row){
    row.classList.toggle('show-meaning',S.tafsirOn);
    var mb=row.querySelector('.a-mean');if(mb)mb.classList.toggle('on',S.tafsirOn);
  });
  if(S.tafsirOn&&S.lang==='ar')ensureTafsir(1);
  if(!S.tafsirOn)toast(t('tafsir_off'));
}
function loadTafsir(sn){
  var key='qk_tf_'+sn,cached;
  try{cached=JSON.parse(localStorage.getItem(key));}catch(e){}
  if(cached){renderTafsir(cached);return;}
  toast(t('loading_tafsir'));
  fetch('https://api.alquran.cloud/v1/surah/'+sn+'/ar.muyassar')
    .then(function(r){return r.json();})
    .then(function(d){
      if(d.code!==200)throw new Error();
      var arr=d.data.ayahs.map(function(a){return a.text;});
      try{localStorage.setItem(key,JSON.stringify(arr));}catch(e){}
      renderTafsir(arr);
    }).catch(function(){toast(t('tafsir_err'));S.tafsirOn=false;});
}
function renderTafsir(arr){
  document.querySelectorAll('.tafsir-box').forEach(function(e){e.remove();});
  arr.forEach(function(txt,i){
    var row=document.getElementById('qa-'+(i+1));if(!row)return;
    var box=document.createElement('div');box.className='tafsir-box';
    box.innerHTML='<span class="tf-lbl">'+t('tafsir')+'</span>'+txt;
    (row.querySelector('.a-acts')||row).parentNode.appendChild(box);
  });
}

// ===== آخر قراءة =====
function saveLast(sn,an){
  var si=SURAHS_ALL.find(function(s){return s.n===sn;});if(!si)return;
  S.lastRead={sn:sn,an:an,name:si.ar};
  try{localStorage.setItem('qk_last',JSON.stringify(S.lastRead));}catch(e){}
  showResume();
}
function showResume(){
  var bar=document.getElementById('resume-bar');if(!bar||!S.lastRead)return;
  document.getElementById('resume-ref').textContent=S.lastRead.name+' • '+t('ayah_word')+' '+arNum(S.lastRead.an);
  bar.classList.add('on');
}
function resumeLast(){
  if(!S.lastRead)return;
  loadSurah(S.lastRead.sn);
  var an=S.lastRead.an;
  setTimeout(function(){
    var el=document.getElementById('qa-'+an);
    if(el){el.scrollIntoView({behavior:'smooth',block:'center'});el.classList.add('playing');}
  },900);
}

// ===== تطبيع نص القرآن (إصلاح حرج) =====
// نسخة ar.uthmani من alquran.cloud تستخدم الياء الفارسية (U+06CC) والكاف الفارسية (U+06A9)
// بدل العربيتين — وخطوط المصحف لا ترسمهما في المواضع المتصلة فيظهر الحرف «دائرة».
// نحوّلهما إلى الحرفين العربيين القياسيين قبل أي عرض. لا يمسّ الرسم العثماني إطلاقاً.
function normQuran(t){
  return String(t == null ? '' : t)
    .replace(/\u06CC/g, '\u064A')   // Farsi yeh  -> Arabic yeh
    .replace(/\u06A9/g, '\u0643')   // Farsi keheh-> Arabic kaf
    .replace(/\u06D5/g, '\u0629');  // ae         -> teh marbuta
}

// إزالة البسملة المدمجة في أول آية (كل السور عدا الفاتحة والتوبة)
// ملاحظة: التطبيع أولاً — الـ API يُرجع أحياناً الياء الفارسية U+06CC في «الرحيم»،
// فتفشل المطابقة مع البسملة وتبقى مكرّرة في أول آية (كان يقع في القراءة والتجويد
// والاستماع والتعليم معاً، لأن normQuran كان يُطبَّق بعد stripBsm لا قبله).
function bareAr(t){return normQuran(t).replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g,'').replace(/[\u0622\u0623\u0625\u0671]/g,'\u0627').replace(/\s+/g,'');}
var BSM_BARE='\u0628\u0633\u0645\u0627\u0644\u0644\u0647\u0627\u0644\u0631\u062d\u0645\u0646\u0627\u0644\u0631\u062d\u064a\u0645';
function stripBsm(txt,sn,idx){
  if(idx!==0||sn===1||sn===9)return txt;
  var words=txt.split(/\s+/);
  for(var k=3;k<=5&&k<=words.length;k++){
    if(bareAr(words.slice(0,k).join(''))===BSM_BARE)return words.slice(k).join(' ');
  }
  return txt;
}

function renderSurah(ar,en,sn){
  var html='';
  if(sn!=9)html+='<div class="bsm">بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</div>';
  ar.ayahs.forEach(function(ay,idx){
    html+='<div class="ayah-row" id="qa-'+ay.numberInSurah+'">'
      +'<div class="a-num">'+ay.numberInSurah+'</div>'
      +'<div style="flex:1"><div class="a-ar" id="qar-'+ay.numberInSurah+'" style="font-size:'+S.fontSize+'rem">'+normQuran(stripBsm(ay.text,sn,idx))+'</div>'
      +'<div class="meaning-box a-tr" id="mean-'+ay.numberInSurah+'">'+(S.lang==='ar'?'':(en.ayahs[idx]?en.ayahs[idx].text:''))+'</div>'
      +'<div class="a-acts">'
      +'<button class="a-act a-mean" title="'+t('show_meaning')+'" onclick="toggleMeaning('+ay.numberInSurah+')"><i class="fas fa-book-open"></i></button>'
      +'<button class="a-act" title="'+t('play_ayah')+'" onclick="jumpAudio('+sn+','+ay.numberInSurah+')"><i class="fas fa-play"></i></button>'
      +'<button class="a-act" title="'+t('meditate')+'" onclick="medAyah(\''+ay.text.replace(/'/g,"\\'")+'\',\''+(en.ayahs[idx]?en.ayahs[idx].text.replace(/'/g,"\\'"):'')+'\')"><i class="fas fa-moon"></i></button>'
      +'<button class="a-act" title="'+t('ask_ai')+'" onclick="askAyahAI(\''+ay.text.replace(/'/g,"\\'").substring(0,55)+'\')"><i class="fas fa-robot"></i></button>'
      +'<button class="a-act" title="'+t('bookmark_here')+'" onclick="saveLast('+sn+','+ay.numberInSurah+');toast(t(\'bookmarked\'))"><i class="fas fa-bookmark"></i></button>'
      +'<button class="a-act" title="'+t('to_teach')+'" onclick="teachFrom('+sn+','+ay.numberInSurah+')"><i class="fas fa-graduation-cap"></i></button>'
      +'</div></div></div>';
  });
  var rb=document.getElementById('reader-body');
  rb.innerHTML=html;
  applyTranslationStyle();
  gsap.fromTo('.ayah-row',{opacity:0,x:12},{opacity:1,x:0,duration:.28,stagger:.016,ease:'power2.out'});
  if(S.tafsirOn)loadTafsir(sn);
  if(S.tajweedOn)applyTajweed(sn);
  // اضبط حدّ منتقي رقم الآية
  var si=SURAHS_ALL.find(function(s){return s.n===sn;});
  var aj=document.getElementById('ayah-jump');if(aj&&si){aj.max=si.a;aj.value='';}
  saveLast(sn,1);
}
// العودة إلى أعلى المصحف
function scrollReaderTop(){
  var rb=document.getElementById('reader-body');if(!rb)return;
  rb.scrollTo({top:0,behavior:'smooth'});
}
// الذهاب مباشرةً إلى رقم آية
function jumpToAyah(n){
  n=parseInt(n);if(!n||!S.curSurah)return;
  var el=document.getElementById('qa-'+n);
  if(!el){toast(t('ayah_not_found'));return;}
  el.scrollIntoView({behavior:'smooth',block:'center'});
  document.querySelectorAll('.ayah-row.playing').forEach(function(e){e.classList.remove('playing');});
  el.classList.add('playing');
  saveLast(S.curSurah,n);
  pushRoute('read',S.curSurah,n,true);              // رابط قابل للمشاركة للآية
}
// إخفاء شريط استئناف القراءة
function dismissResume(){var b=document.getElementById('resume-bar');if(b)b.classList.remove('on');}

// اتجاه/خط الترجمة حسب اللغة (أردو/فارسي بالنستعليق من اليمين)
function applyTranslationStyle(){
  var rb=document.getElementById('reader-body');if(!rb)return;
  var tr=(document.getElementById('transl-sel')||{}).value||'';
  var rtl=/^(ur|fa|ar)\./.test(tr);
  rb.classList.toggle('tr-rtl',rtl);
  rb.classList.toggle('tr-nastaliq',/^(ur|fa)\./.test(tr));
}
// ===== تواصل معنا (يفتح بريد المستخدم — بلا backend) =====
function sendContact(){
  var name=(document.getElementById('ct-name').value||'').trim();
  var msg=(document.getElementById('ct-msg').value||'').trim();
  if(!msg){toast(t('contact_empty'));return;}
  var body=encodeURIComponent(msg+'\n\n— '+(name||''));
  var subj=encodeURIComponent('رسالة من موقع القرآن الكريم');
  window.location.href='mailto:info@qurankarem.org?subject='+subj+'&body='+body;
}

// ===== خط المصحف القابل للتبديل =====
var MUSHAF_FONTS={
  // ملاحظة: خط UthmanicHafs أُزيل — كان يفتقد 5 علامات قرآنية (U+06E4, U+06DF, U+08F0-2)
  // فتظهر «دوائر/شحطات» مكان المدّة والصفر المستدير والتنوين المفتوح.
  // نُبقي المفتاح uthmani للتوافق مع qk_font المحفوظ عند الزوّار، لكن قيمته الآن Amiri Quran (تغطية كاملة).
  uthmani:"'Amiri Quran',serif",
  amiri:"'Amiri Quran',serif",
  scheher:"'Scheherazade New',serif",
  naskh:"'Noto Naskh Arabic',serif",
  nastaliq:"'Noto Nastaliq Urdu',serif",
  ruqaa:"'Aref Ruqaa','Amiri Quran',serif"
};
function setMushafFont(id){
  var stack=MUSHAF_FONTS[id]||MUSHAF_FONTS.uthmani;
  document.documentElement.style.setProperty('--mushaf-font',stack);
  S.mushafFont=id;
  try{localStorage.setItem('qk_font',id);}catch(e){}
  var sel=document.getElementById('mushaf-font-sel');if(sel)sel.value=id;
  // النستعليق يحتاج سطراً أوسع
  document.querySelectorAll('.a-ar,.t-txt').forEach(function(e){e.style.lineHeight=(id==='nastaliq'?'2.9':'');});
}

// ===== تلوين التجويد (نظام تنزيل، عبر ar quran-tajweed) =====
// هل الحرف علامة تشكيل/مدّ منفصلة (تُرسم على دائرة منقّطة إذا عُزلت عن حرفها)؟
function isCombiningMark(ch){
  var c=ch.charCodeAt(0);
  return (c>=0x0610&&c<=0x061A)||(c>=0x064B&&c<=0x065F)||c===0x0670||(c>=0x06D6&&c<=0x06ED);
}
function tajweedHTML(txt){
  txt=normQuran(txt);   // إصلاح الياء/الكاف الفارسية قبل أي معالجة
  // إزالة ZERO WIDTH NON-JOINER (U+200C) الذي يفصل الحروف المتصلة ويكسر الشكل
  txt=txt.replace(/‌/g,'');
  // نسخة التجويد تستخدم ألفات تنزيل شاذّة (U+0672/U+0673) يرسمها الخط دائرةً —
  // نحوّلها للألف الخنجرية القياسية (U+0670) فتظهر ألفاً صغيرة فوق الحرف كالمصحف.
  txt=txt.replace(/[ٲٳ]/g,'ٰ');
  // 1) قسّم النص إلى مقاطع {t:نص, r:قاعدة أو null}
  var re=/\[([a-z]+)(?::\d+)?\[([^\]]*)\]/g,toks=[],last=0,m;
  while((m=re.exec(txt))){
    if(m.index>last)toks.push({t:txt.slice(last,m.index),r:null});
    toks.push({t:m[2]||'',r:m[1].charAt(0)});
    last=re.lastIndex;
  }
  if(last<txt.length)toks.push({t:txt.slice(last),r:null});
  // 2) أيّ مقطع يبدأ بعلامة تشكيل منفصلة (كالألف الخنجرية) يستعير حرفه الأساسي
  //    من المقطع السابق — حتى وإن كان span ملوّناً — فلا تُرسم العلامة على دائرة منقّطة.
  for(var i=1;i<toks.length;i++){
    while(toks[i].t&&isCombiningMark(toks[i].t.charAt(0))&&toks[i-1].t.length){
      var prev=toks[i-1].t,j=prev.length;
      while(j>0&&isCombiningMark(prev.charAt(j-1)))j--; // علامات الحرف الأساسي
      if(j>0)j--;                                        // الحرف الأساسي
      toks[i].t=prev.slice(j)+toks[i].t;
      toks[i-1].t=prev.slice(0,j);
      break;
    }
  }
  // 3) اجمع الناتج
  var out='';
  toks.forEach(function(k){
    if(!k.t)return;
    out+=k.r?'<span class="tj tj-'+k.r+'">'+k.t+'</span>':k.t;
  });
  return out;
}
function toggleTajweed(){
  S.tajweedOn=!S.tajweedOn;
  try{localStorage.setItem('qk_tajweed',S.tajweedOn?'1':'0');}catch(e){}
  var b=document.getElementById('tajweed-btn');if(b)b.classList.toggle('on',S.tajweedOn);
  if(!S.tajweedOn){
    document.querySelectorAll('.tj-legend').forEach(function(e){e.remove();});
    if(S.curSurah)reloadSurah();
    toast(t('tajweed_off'));return;
  }
  if(!S.curSurah){toast(t('select_surah'));S.tajweedOn=false;b&&b.classList.remove('on');return;}
  applyTajweed(S.curSurah);
}
// أظهر حالة الزر الحقيقية (مفعّل افتراضياً) كي يفهم الزائر أنه مفتاح إطفاء أيضاً
function syncTajweedBtn(){
  var b=document.getElementById('tajweed-btn');
  if(b)b.classList.toggle('on',!!S.tajweedOn);
}
function applyTajweed(sn){
  var key='qk_tj_'+sn,cached;
  try{cached=JSON.parse(localStorage.getItem(key));}catch(e){}
  if(cached){renderTajweedInto(cached,sn);return;}
  toast(t('loading_tajweed'));
  fetch('https://api.alquran.cloud/v1/surah/'+sn+'/quran-tajweed')
    .then(function(r){return r.json();})
    .then(function(d){
      if(d.code!==200)throw new Error();
      var arr=d.data.ayahs.map(function(a){return a.text;});
      try{localStorage.setItem(key,JSON.stringify(arr));}catch(e){}
      renderTajweedInto(arr,sn);
    }).catch(function(){toast(t('tajweed_err'));});   // لا نُطفئ التفضيل: الفشل قد يكون انقطاع شبكة عابراً
}
function renderTajweedInto(arr,sn){
  arr.forEach(function(txt,i){
    var el=document.getElementById('qar-'+(i+1));if(!el)return;
    el.innerHTML=tajweedHTML(stripBsm(txt,sn,i));
  });
  // مفتاح ألوان مرة واحدة أعلى المصحف
  var rb=document.getElementById('reader-body');
  if(rb&&!rb.querySelector('.tj-legend')){
    var L=[['n','مدّ'],['q','قلقلة'],['g','غنّة'],['f','إخفاء'],['w','إدغام'],['i','إقلاب'],['h','همزة وصل']];
    var h='<div class="tj-legend">'+L.map(function(x){return '<span><i class="tj-'+x[0]+'" style="background:currentColor" ></i><span class="tj-'+x[0]+'">'+x[1]+'</span></span>';}).join('')+'</div>';
    rb.insertAdjacentHTML('afterbegin',h);
  }
}
function medAyah(ar,en){document.getElementById('med-verse').textContent=ar;document.getElementById('med-tr').textContent=en;toggleMed();}
function jumpAudio(sn,an){
  goPage('listen');
  setTimeout(function(){
    var ss=document.getElementById('a-surah');if(ss)ss.value=sn;updateAyahs();
    setTimeout(function(){var as=document.getElementById('a-ayah');if(as)as.value=an;loadAudio();},100);
  },400);
}
function askAyahAI(ar){goPage('ai');toast(t('ai_soon'));}

// ===== AUDIO =====
function buildFooterReciters(){
  var ul=document.getElementById('f-reciters');if(!ul)return;
  ul.innerHTML='';
  RECITERS.forEach(function(r){
    var li=document.createElement('li');
    li.innerHTML='<a onclick="S.curRec=\''+r.id+'\';goPage(\'listen\')">'+r.name+'<span style="color:var(--gold-700);font-size:.62rem"> · '+(r.region||'')+'</span></a>';
    ul.appendChild(li);
  });
}
function buildReciters(){
  var g=document.getElementById('rec-grid');if(!g)return;
  RECITERS.forEach(function(r){
    var div=document.createElement('div');div.className='rec-card'+(r.id===S.curRec?' on':'');
    div.innerHTML='<div class="rec-av">'+r.init+'</div><div style="flex:1"><div class="rec-name">'+r.name+'</div><div class="rec-style">'+r.style+'</div></div><div class="rec-region">'+(r.region||'')+'</div>';
    div.onclick=function(){S.curRec=r.id;document.querySelectorAll('.rec-card').forEach(function(c){c.classList.remove('on');});div.classList.add('on');
      var pr=document.getElementById('p-rec');if(pr)pr.textContent=r.name;
      if(S.listenMode==='surah'&&!hasFullSurah(r.id)){setListenMode('ayah');toast(t('no_full_surah'));}};
    g.appendChild(div);
  });
}
function fillAudioSelects(){
  var ss=document.getElementById('a-surah');if(!ss)return;
  SURAHS_ALL.forEach(function(s){var o=document.createElement('option');o.value=s.n;o.textContent=s.n+'. '+s.ar;ss.appendChild(o);});
}
function updateAyahs(){
  var sn=document.getElementById('a-surah').value;
  var a=document.getElementById('a-ayah');a.innerHTML='<option value="">الآية...</option>';
  if(!sn)return;
  var si=SURAHS_ALL.find(function(x){return x.n==sn;});if(!si)return;
  for(var i=1;i<=si.a;i++){var o=document.createElement('option');o.value=i;o.textContent='الآية '+i;a.appendChild(o);}
}
function buildAyahURL(recId,sn,an){
  var r=recById(recId);
  // البنّا لا يملك آيات مفردة على الـ CDN — يُخدَم من everyayah
  if(r.ayahEveryayah)return'https://everyayah.com/data/'+r.ayahEveryayah+'/'+pad3(sn)+pad3(an)+'.mp3';
  return'https://cdn.islamic.network/quran/audio/'+(r.br||128)+'/'+r.id+'/'+globalAyah(sn,an)+'.mp3';
}
function initWaveSurfer(){
  if(typeof WaveSurfer==='undefined')return;
  var el=document.getElementById('wf');if(!el)return;
  S.wavesurfer=WaveSurfer.create({container:'#wf',waveColor:'rgba(201,169,110,0.48)',progressColor:'rgba(201,169,110,0.88)',cursorColor:'rgba(255,255,255,0.3)',barWidth:2,barRadius:2,height:155,normalize:true,backend:'MediaElement'});
  S.wavesurfer.on('play',function(){wsState(true);});
  S.wavesurfer.on('pause',function(){wsState(false);});
  S.wavesurfer.on('finish',function(){wsState(false);if(S.repeat&&S.wavesurfer)S.wavesurfer.play();else nextAyah();});
  S.wavesurfer.on('audioprocess',function(){
    var cur=S.wavesurfer.getCurrentTime(),dur=S.wavesurfer.getDuration();
    if(dur>0){document.getElementById('prog-fill').style.width=((cur/dur)*100)+'%';
      document.getElementById('t-cur').textContent=fmt(cur);document.getElementById('t-tot').textContent=fmt(dur);}
  });
}
function wsState(p){
  S.playing=p;
  document.getElementById('play-ic').style.display=p?'none':'inline';
  document.getElementById('pause-ic').style.display=p?'inline':'none';
}
function loadAudio(){
  var sn=parseInt(document.getElementById('a-surah').value);
  var an=parseInt(document.getElementById('a-ayah').value);
  if(!sn){toast(t('select_surah'));return;}
  var si=SURAHS_ALL.find(function(x){return x.n===sn;});if(!si)return;
  if(S.listenMode==='surah'){
    var rec0=RECITERS.find(function(r){return r.id===S.curRec;});
    document.getElementById('wf-ar').textContent='سورة '+si.ar;
    document.getElementById('wf-ref').textContent=si.ar+' — '+t('mode_surah');
    document.getElementById('p-surah').textContent=si.ar;
    document.getElementById('p-rec').textContent=rec0?rec0.name:'';
    S.ayah={sn:sn,an:1,total:si.a};
    var lab=document.getElementById('listen-ayah');if(lab)lab.style.display='none';
    playAudioUrl(buildSurahAudioURL(S.curRec,sn));
    return;
  }
  if(!an){toast(t('select_ayah'));return;}
  var ep=EPISODES.find(function(e){return e.sn===sn&&e.an===an;});
  var arText=ep?ep.ar:si.ar+' — آية '+an;
  document.getElementById('wf-ar').textContent=arText;
  document.getElementById('wf-ref').textContent='سورة '+si.ar+' • الآية '+an;
  document.getElementById('p-surah').textContent=si.ar+' — الآية '+an;
  var rec=RECITERS.find(function(r){return r.id===S.curRec;});
  document.getElementById('p-rec').textContent=rec?rec.name:'';
  S.ayah={sn:sn,an:an,total:si.a};
  document.querySelectorAll('.ayah-row').forEach(function(el){el.classList.remove('playing');});
  showListenAyah(sn,an);
  playAudioUrl(buildAyahURL(S.curRec,sn,an));
}
// عرض نص الآية الجاري الاستماع إليها في مربّع مخصّص
function showListenAyah(sn,an){
  var box=document.getElementById('listen-ayah');if(!box)return;
  box.style.display='';box.textContent='…';
  // من الكاش إن وُجد، وإلا من الـ API
  var cached;try{cached=JSON.parse(localStorage.getItem('qk_tc_'+sn));}catch(e){}
  if(cached&&cached[an-1]){box.textContent=normQuran(stripBsm(cached[an-1],sn,an-1));return;}
  fetch('https://api.alquran.cloud/v1/ayah/'+sn+':'+an+'/ar.uthmani')
    .then(function(r){return r.json();})
    .then(function(d){if(d.code===200)box.textContent=normQuran(stripBsm(d.data.text,sn,an-1));})
    .catch(function(){box.style.display='none';});
}
// مصدر الصوت الموحّد: Howler (موثوق مع CDN بلا CORS). WaveSurfer يُغذّى best-effort للعرض فقط.
function playAudioUrl(url){
  if(S.wavesurfer){try{S.wavesurfer.load(url).catch(function(){});}catch(e){}}
  fallbackHowler(url);
}
function fallbackHowler(url){
  if(S.sound){S.sound.stop();S.sound.unload();S.sound=null;}
  S.activeMedia='listen';S._retry=0;
  S.sound=new Howl({src:[url],html5:true,volume:S.vol,
    onplay:function(){
      wsState(true);mediaSetNow();mediaState(true);
      S.progTimer=setInterval(function(){
        if(!S.sound||!S.playing)return;
        var sk=S.sound.seek(),d=S.sound.duration();
        if(d>0){document.getElementById('prog-fill').style.width=((sk/d)*100)+'%';document.getElementById('t-cur').textContent=fmt(sk);}
      },200);},
    onpause:function(){wsState(false);mediaState(false);clearInterval(S.progTimer);},
    onstop:function(){wsState(false);mediaState(false);clearInterval(S.progTimer);document.getElementById('prog-fill').style.width='0%';},
    onend:function(){if(S.repeat)S.sound.play();else nextAyah();},
    onload:function(){document.getElementById('t-tot').textContent=fmt(S.sound.duration());},
    // تعافٍ من تعثّر الصوت/الشبكة: أعد المحاولة مرة، ثم تخطَّ الآية
    onloaderror:function(){audioRecover(url);},
    onplayerror:function(){ if(S.sound){S.sound.once('unlock',function(){S.sound.play();});} audioRecover(url); }
  });S.sound.play();
}
function audioRecover(url){
  if(S._retry>=1){toast(t('audio_err'));nextAyah();return;}  // nextAyah يحرس وضع السورة تلقائياً
  S._retry++;
  setTimeout(function(){ if(S.sound){try{S.sound.unload();}catch(e){}} if(S.page==='listen')fallbackHowler(url); },1200);
}

// =====================================================================
// ===== Media Session API — استمرار الصوت في الخلفية وشاشة القفل =====
// يجعل المتصفح (كروم/سفاري) يعامل التلاوة كوسائط حقيقية فلا تتوقف عند
// إقفال الشاشة أو فتح تطبيق آخر، وتُستأنف تلقائياً بعد المكالمات.
// =====================================================================
var QK_ART=[{src:'icon-192.png',sizes:'192x192',type:'image/png'},{src:'icon-512.png',sizes:'512x512',type:'image/png'}];
function mediaSetNow(){
  if(!('mediaSession'in navigator))return;
  var title='القرآن الكريم',artist='';
  var rec=RECITERS.find(function(r){return r.id===S.curRec;});
  artist=rec?rec.name:'';
  if(S.activeMedia==='teach'){
    var si=SURAHS_ALL.find(function(s){return s.n===TC.sn;});
    title=(si?si.ar:'')+' — '+t('ayah_word')+' '+arNum(TC.from+TC.off);
  }else{
    var s2=SURAHS_ALL.find(function(s){return s.n===S.ayah.sn;});
    title=(s2?s2.ar:'القرآن')+(S.listenMode==='surah'?'':' — '+t('ayah_word')+' '+arNum(S.ayah.an));
  }
  try{
    navigator.mediaSession.metadata=new MediaMetadata({title:title,artist:artist,album:'QuranKarem.org',artwork:QK_ART});
    navigator.mediaSession.setActionHandler('play',mediaResume);
    navigator.mediaSession.setActionHandler('pause',mediaPause);
    navigator.mediaSession.setActionHandler('nexttrack',function(){S.activeMedia==='teach'?tcNav(1):nextAyah();});
    navigator.mediaSession.setActionHandler('previoustrack',function(){S.activeMedia==='teach'?tcNav(-1):prevAyah();});
    try{navigator.mediaSession.setActionHandler('stop',mediaStop);}catch(e){}
  }catch(e){}
}
function mediaState(playing){if('mediaSession'in navigator){try{navigator.mediaSession.playbackState=playing?'playing':'paused';}catch(e){}}}
function mediaResume(){if(S.activeMedia==='teach'){if(!TC.playing)tcToggle();}else if(S.sound&&!S.playing)S.sound.play();}
function mediaPause(){ if(S.activeMedia==='teach'){if(TC.playing)tcToggle();}else if(S.sound&&S.playing)S.sound.pause();}
function mediaStop(){ if(S.activeMedia==='teach')tcStop();else stopListenAudio();}
function togglePlay(){
  if(S.sound){if(S.playing)S.sound.pause();else S.sound.play();return;}
  loadAudio();
}
function nextAyah(){if(S.listenMode==='surah')return;if(S.ayah.an<S.ayah.total){var a=document.getElementById('a-ayah');if(a)a.value=S.ayah.an+1;S.ayah.an++;loadAudio();}}
function prevAyah(){if(S.ayah.an>1){var a=document.getElementById('a-ayah');if(a)a.value=S.ayah.an-1;S.ayah.an--;loadAudio();}}
function toggleRep(){S.repeat=!S.repeat;document.getElementById('rep-btn').classList.toggle('on',S.repeat);}
function setVol(v){S.vol=parseFloat(v);Howler.volume(S.vol);if(S.wavesurfer)S.wavesurfer.setVolume(S.vol);}

// ===== EPISODES =====
function buildEpisodes(){
  var g=document.getElementById('ep-grid');if(!g)return;
  EPISODES.forEach(function(ep){
    var short=ep.ar.length>50?ep.ar.substring(0,50)+'...':ep.ar;
    var div=document.createElement('div');div.className='float-card ep-card';
    div.innerHTML='<div class="ep-banner '+ep.bg+'"><div class="ep-glow" style="background:radial-gradient(circle,'+ep.glow+',transparent 70%);position:absolute;inset:0;opacity:.22"></div>'
      +'<div class="ep-ar">'+short+'</div></div>'
      +'<div class="ep-body"><div class="ep-num">'+ep.num+'</div><div class="ep-title">'+ep.title+'</div>'
      +'<div class="ep-ref">'+ep.surah+'</div>'
      +'<div class="ep-foot"><span class="ep-tag">'+ep.tag+'</span>'
      +'<button class="ep-pb" onclick="event.stopPropagation();playEp('+ep.id+')"><i class="fas fa-play"></i></button>'
      +'</div></div>';
    div.onclick=function(){openModal(ep.id);};g.appendChild(div);
  });
}
function openModal(id){
  var ep=EPISODES.find(function(e){return e.id===id;});if(!ep)return;
  document.getElementById('modal-box').innerHTML=
    '<button class="modal-close" onclick="closeModal()"><i class="fas fa-times"></i></button>'
    +'<div class="modal-banner '+ep.bg+'"><div class="modal-ov"></div><div class="modal-ar">'+ep.ar+'</div></div>'
    +'<div class="modal-body"><div class="modal-ref">'+ep.surah+'</div><div class="modal-title">'+ep.title+'</div>'
    +'<div class="modal-en">"'+ep.en+'"</div>'
    +'<div class="modal-tafsir"><div class="modal-tafsir-lbl">التفسير</div>'+ep.tafsir+'</div>'
    +'<div class="modal-acts">'
    +'<button class="m-btn m-p" onclick="playEp('+ep.id+')"><i class="fas fa-volume-up"></i> '+t('listen_btn')+'</button>'
    +'<button class="m-btn m-s" onclick="medAyah(\''+ep.ar.replace(/'/g,"\\'")+'\',\''+ep.en.replace(/'/g,"\\'")+'\');closeModal()"><i class="fas fa-moon"></i> '+t('meditate')+'</button>'
    +'<button class="m-btn m-s" onclick="askAboutEp('+ep.id+');closeModal()"><i class="fas fa-robot"></i> AI</button>'
    +'</div></div>';
  document.getElementById('ep-modal').classList.add('open');
}
function closeModal(){document.getElementById('ep-modal').classList.remove('open');}
function playEp(id){
  var ep=EPISODES.find(function(e){return e.id===id;});if(!ep)return;
  goPage('listen');
  setTimeout(function(){var ss=document.getElementById('a-surah');if(ss)ss.value=ep.sn;updateAyahs();
    setTimeout(function(){var as=document.getElementById('a-ayah');if(as)as.value=ep.an;loadAudio();},100);},400);
}
function askAboutEp(id){goPage('ai');toast(t('ai_soon'));}

// ===== AI (معطّل مؤقتاً — «قريباً») =====
// حتى تفعيل مفتاح آمن عبر وسيط (Cloudflare Worker)، المساعد يعرض رسالة «قريباً» فقط.
function sendMsg(){toast(t('ai_soon'));}
function askQ(q){goPage('ai');toast(t('ai_soon'));}
function addMsg(type,text){
  var c=document.getElementById('chat-msgs'),d=document.createElement('div');d.className='msg '+type;
  d.innerHTML='<div class="bubble">'+text.replace(/\n/g,'<br>')+'</div>';
  c.appendChild(d);gsap.fromTo(d,{opacity:0,y:10},{opacity:1,y:0,duration:.3,ease:'power2.out'});c.scrollTop=c.scrollHeight;
}
function addTyping(id){
  var c=document.getElementById('chat-msgs'),d=document.createElement('div');
  d.className='msg bot';d.id=id;d.innerHTML='<div class="bubble"><div class="tdots"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div></div>';
  c.appendChild(d);c.scrollTop=c.scrollHeight;
}
function removeTyping(id){var el=document.getElementById(id);if(el)el.remove();}
function clrChat(){
  S.chatHistory=[];
  document.getElementById('chat-msgs').innerHTML=
    '<div class="msg bot"><div class="bubble"><div class="greet">🌙 '+t('ai_greet')+'</div>'+t('ai_intro')+'</div></div>';
}

// =====================================================================
// ===== ٣ · محرّك التعليم (حلقة التحفيظ) =====
// =====================================================================
var TC = {
  sn:1, from:1, to:7, ar:1, tr:1, pause:1, speed:1,
  off:0, arep:1, trep:1, playing:false,
  ayahs:[], loaded:false, sound:null, timer:null, ptimer:null, audioCache:{},
  autoPause:false, wakeWanted:false, lastDur:0, segCache:{}
};

// ===== توقيتات الكلمات الدقيقة (Quran.com API v4) =====
// توقيتات Quran.com مبنية على تلاوة العفاسي — تُستخدم فقط عند اختياره لضمان التطابق.
// segments: [موضع الكلمة, ?, بداية ms, نهاية ms] — نحوّلها لمصفوفة [بداية,نهاية] بترتيب الكلمات
function tcLoadSegments(sn,n){
  if(S.curRec!=='ar.alafasy')return;
  var key=sn+':'+n;
  if(TC.segCache[key]!==undefined)return;
  TC.segCache[key]=null; // علّم أنه قيد الطلب لتفادي التكرار
  fetch('https://api.quran.com/api/v4/verses/by_key/'+sn+':'+n+'?audio=7')
    .then(function(r){return r.json();})
    .then(function(d){
      var seg=d&&d.verse&&d.verse.audio&&d.verse.audio.segments;
      if(!seg||!seg.length)return;
      TC.segCache[key]=seg.map(function(s){return [s[s.length-2],s[s.length-1]];});
    }).catch(function(){});
}

// ===== إبقاء الشاشة مضاءة (Screen Wake Lock API) =====
var _wakeLock=null;
function acquireWakeLock(){
  if(!('wakeLock'in navigator))return;
  navigator.wakeLock.request('screen').then(function(wl){
    _wakeLock=wl;
    wl.addEventListener('release',function(){_wakeLock=null;});
  }).catch(function(){});
}
function releaseWakeLock(){if(_wakeLock){try{_wakeLock.release();}catch(e){}_wakeLock=null;}}
function toggleWakeLock(on){
  TC.wakeWanted=on;
  if(!('wakeLock'in navigator)){toast(t('wakelock_unsupported'));return;}
  if(on&&TC.playing)acquireWakeLock();
  else if(!on)releaseWakeLock();
}
// إعادة طلب القفل عند العودة للتبويب (المتصفح يحرّره تلقائياً عند الإخفاء)
document.addEventListener('visibilitychange',function(){
  if(document.visibilityState==='visible'&&TC.wakeWanted&&TC.playing)acquireWakeLock();
});

// نص احتياطي لسور قصيرة (يعمل بلا اتصال)
var TC_EMB = {
  1:["بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ","ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ","ٱلرَّحْمَٰنِ ٱلرَّحِيمِ","مَٰلِكِ يَوْمِ ٱلدِّينِ","إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ","ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ","صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ"],
  103:["وَٱلْعَصْرِ","إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ","إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ"],
  108:["إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ","فَصَلِّ لِرَبِّكَ وَٱنْحَرْ","إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ"],
  110:["إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ","وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا","فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابَۢا"],
  112:["قُلْ هُوَ ٱللَّهُ أَحَدٌ","ٱللَّهُ ٱلصَّمَدُ","لَمْ يَلِدْ وَلَمْ يُولَدْ","وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ"],
  113:["قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ","مِن شَرِّ مَا خَلَقَ","وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ","وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ","وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"],
  114:["قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ","مَلِكِ ٱلنَّاسِ","إِلَٰهِ ٱلنَّاسِ","مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ","ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ","مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ"]
};

function arNum(n){return String(n).replace(/[0-9]/g,function(d){return'٠١٢٣٤٥٦٧٨٩'[d];});}

function initTeach(){
  if(TC.built)return;TC.built=true;
  var rec=document.getElementById('tc-rec');
  RECITERS.forEach(function(r){var o=document.createElement('option');o.value=r.id;o.textContent=r.name;rec.appendChild(o);});
  rec.value=S.curRec;
  var ss=document.getElementById('tc-surah');
  SURAHS_ALL.forEach(function(s){var o=document.createElement('option');o.value=s.n;o.textContent=arNum(s.n)+'. '+s.ar;ss.appendChild(o);});
  ss.value=TC.sn;
  tcFillRange();
  tcLoadText();
  if(!rcSupported()){var mic=document.getElementById('rc-mic');if(mic)mic.style.display='none';}
}
function tcFillRange(){
  var si=SURAHS_ALL.find(function(s){return s.n===TC.sn;});if(!si)return;
  var f=document.getElementById('tc-from'),tt=document.getElementById('tc-to');
  f.innerHTML='';tt.innerHTML='';
  for(var i=1;i<=si.a;i++){
    f.innerHTML+='<option value="'+i+'">'+arNum(i)+'</option>';
    tt.innerHTML+='<option value="'+i+'">'+arNum(i)+'</option>';
  }
  TC.from=1;TC.to=Math.min(si.a,10);
  f.value=TC.from;tt.value=TC.to;
}
function tcRecChange(){S.curRec=document.getElementById('tc-rec').value;TC.audioCache={};tcStop();}
function tcSurahChange(){
  if(RC.active)rcStop();
  TC.sn=parseInt(document.getElementById('tc-surah').value);
  TC.ayahs=[];TC.loaded=false;TC.audioCache={};TC.off=0;
  tcFillRange();tcStop();tcLoadText();
  var p=document.getElementById('rc-panel');if(p)p.classList.remove('on');
  document.getElementById('tc-bsm').style.display=(TC.sn===9)?'none':'';
}
function tcRangeChange(which){
  var f=document.getElementById('tc-from'),tt=document.getElementById('tc-to');
  TC.from=parseInt(f.value);TC.to=parseInt(tt.value);
  if(TC.to<TC.from){
    if(which==='from'){TC.to=TC.from;tt.value=TC.to;}
    else{TC.from=TC.to;f.value=TC.from;}
  }
  TC.off=0;tcStop();tcRender();
}
function tcAdj(k,d){
  TC[k]=Math.max(1,Math.min(20,TC[k]+d));
  document.getElementById('tc-'+k+'v').textContent=arNum(TC[k]);
}
function tcPause(v){TC.pause=parseFloat(v);document.getElementById('tc-psl').textContent=arNum(v)+' ث';}
function tcSpeed(v){
  TC.speed=parseFloat(v);
  document.getElementById('tc-spl').textContent=arNum(TC.speed.toFixed(2).replace(/0$/,'')).replace('.','٫')+'×';
  if(TC.sound)try{TC.sound.rate(TC.speed);}catch(e){}
}
function tcLoadText(){
  var sn=TC.sn;
  document.getElementById('tc-body').innerHTML='<div class="t-ph"><i class="fas fa-spinner fa-spin"></i></div>';
  var cached;try{cached=JSON.parse(localStorage.getItem('qk_tc_'+sn));}catch(e){}
  if(cached){tcSetAyahs(cached);return;}
  fetch('https://api.alquran.cloud/v1/surah/'+sn+'/ar.uthmani')
    .then(function(r){return r.json();})
    .then(function(d){
      if(d.code!==200)throw new Error();
      var arr=d.data.ayahs.map(function(a){return a.text;});
      try{localStorage.setItem('qk_tc_'+sn,JSON.stringify(arr));}catch(e){}
      tcSetAyahs(arr);
    }).catch(function(){
      if(TC_EMB[sn]){tcSetAyahs(TC_EMB[sn]);toast(t('offline_text'));}
      else document.getElementById('tc-body').innerHTML='<div class="t-ph">'+t('load_err')+'</div>';
    });
}
function tcSetAyahs(arr){
  TC.ayahs=arr.map(function(txt,i){
    txt=normQuran(stripBsm(txt,TC.sn,i));
    return {text:txt,words:txt.split(/\s+/).filter(Boolean)};
  });
  TC.loaded=true;tcRender();
}
function tcRender(){
  var c=document.getElementById('tc-body');
  if(!TC.ayahs.length){c.innerHTML='<div class="t-ph">'+t('teach_ph')+'</div>';return;}
  var h='';
  for(var n=TC.from;n<=TC.to;n++){
    var a=TC.ayahs[n-1];if(!a)continue;
    h+='<div class="t-ayah" id="tb'+n+'"><div class="t-txt">';
    a.words.forEach(function(w,i){h+='<span class="wd" id="tw'+n+'_'+i+'">'+w+' </span>';});
    h+='<span class="t-num">'+arNum(n)+'</span></div></div>';
  }
  c.innerHTML=h;
  tcStatus();
}
function tcToggle(){TC.playing?tcPause_():tcStart();}
function tcStart(){
  if(typeof RC!=='undefined'&&RC.active)rcStop();  // التشغيل يوقف التسميع
  if(typeof stopListenAudio==='function')stopListenAudio();  // لا صوتين معاً
  if(!TC.loaded){toast(t('wait'));return;}
  var tot=TC.to-TC.from+1;
  if(TC.off>=tot)TC.off=0;
  TC.playing=true;TC.arep=1;TC.trep=1;tcUI(true);
  if(TC.wakeWanted)acquireWakeLock();
  tcPlay();
}
function tcPause_(){
  TC.playing=false;
  if(TC.sound){TC.sound.pause();}
  clearInterval(TC.timer);clearTimeout(TC.ptimer);
  mediaState(false);
  tcUI(false);
}
function tcStop(){
  TC.playing=false;
  if(TC.sound){TC.sound.stop();TC.sound.unload();TC.sound=null;}
  clearInterval(TC.timer);clearTimeout(TC.ptimer);
  TC.off=0;TC.arep=1;TC.trep=1;
  tcUI(false);tcClearHL();releaseWakeLock();
  var p=document.getElementById('tc-prog');if(p)p.style.width='0%';
  var b=document.getElementById('tc-badge');if(b)b.style.display='none';
  tcStatus();
}
function tcPlay(){
  if(!TC.playing)return;
  var n=TC.from+TC.off;
  var a=TC.ayahs[n-1];
  if(!a){setTimeout(tcEnd,400);return;}
  tcClearHL();
  var el=document.getElementById('tb'+n);
  if(el)el.scrollIntoView({behavior:'smooth',block:'center'});
  document.getElementById('tc-mushaf').classList.add('lit');
  tcStatus(n);
  var url=buildAyahURL(S.curRec,TC.sn,n);
  if(TC.sound){TC.sound.stop();TC.sound.unload();}
  S.activeMedia='teach';
  tcLoadSegments(TC.sn,n);   // توقيتات الكلمات الدقيقة (best-effort، تُخزَّن)
  TC.sound=new Howl({src:[url],html5:true,volume:S.vol,rate:TC.speed,
    onplay:function(){
      clearInterval(TC.timer);
      mediaSetNow();mediaState(true);
      TC.lastDur=TC.sound.duration()||0;
      TC.timer=setInterval(function(){
        if(!TC.sound)return;
        var sk=TC.sound.seek()||0,dur=TC.sound.duration()||1;
        var seg=(S.curRec==='ar.alafasy')?TC.segCache[TC.sn+':'+n]:null;
        var wi;
        if(seg&&seg.length===a.words.length){
          // مطابقة دقيقة بالمللي ثانية من Quran.com
          var ms=sk*1000;wi=0;
          for(var s=0;s<seg.length;s++){if(ms>=seg[s][0])wi=s;else break;}
        }else{
          wi=Math.min(a.words.length-1,Math.floor((sk/dur)*a.words.length));
        }
        a.words.forEach(function(_,i){
          var w=document.getElementById('tw'+n+'_'+i);if(!w)return;
          w.classList.toggle('hi',i===wi);w.classList.toggle('dn',i<wi);
        });
      },60);
    },
    onend:function(){clearInterval(TC.timer);tcEnd();},
    onloaderror:function(){clearInterval(TC.timer);toast(t('audio_err'));tcEnd();},
    onplayerror:function(){clearInterval(TC.timer);tcEnd();}
  });
  TC.sound.play();
}
// السكت: يدوي (TC.pause ثانية) أو تلقائي حسب طول الآية (نصف مدّتها، ضمن 0.6–6 ث)
function tcGap(mult){
  mult=mult||1;
  if(TC.autoPause&&TC.lastDur>0)return Math.max(0.6,Math.min(6,TC.lastDur*0.5))*1000*mult;
  return TC.pause*1000*mult;
}
function tcEnd(){
  if(!TC.playing)return;
  var tot=TC.to-TC.from+1;
  if(TC.arep<TC.ar){TC.arep++;TC.ptimer=setTimeout(tcPlay,tcGap());return;}
  TC.arep=1;TC.off++;
  document.getElementById('tc-prog').style.width=Math.round((TC.off/tot)*100)+'%';
  if(TC.off>=tot){
    if(TC.trep<TC.tr){TC.trep++;TC.off=0;TC.arep=1;TC.ptimer=setTimeout(tcPlay,tcGap(1.5));}
    else tcDone();
    return;
  }
  TC.ptimer=setTimeout(tcPlay,tcGap());
}
function tcDone(){
  TC.playing=false;tcUI(false);tcClearHL();releaseWakeLock();
  document.getElementById('tc-prog').style.width='100%';
  document.getElementById('tc-stat').textContent='✓ '+t('teach_done');
  document.getElementById('tc-badge').style.display='none';
  toast(t('teach_done'));
}
function tcNav(d){
  var tot=TC.to-TC.from+1,nx=TC.off+d;
  if(nx<0||nx>=tot)return;
  TC.off=nx;TC.arep=1;
  if(TC.playing)tcPlay();
  else{tcClearHL();var n=TC.from+TC.off;var el=document.getElementById('tb'+n);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});tcStatus(n);}
}
function tcClearHL(){
  document.querySelectorAll('#tc-body .wd').forEach(function(e){e.classList.remove('hi','dn');});
  document.getElementById('tc-mushaf').classList.remove('lit');
}
function tcUI(on){
  document.getElementById('tc-ic-p').style.display=on?'none':'';
  document.getElementById('tc-ic-a').style.display=on?'':'none';
}
function tcStatus(n){
  var tot=TC.to-TC.from+1;
  n=n||(TC.from+TC.off);
  var st=document.getElementById('tc-stat');
  if(st)st.textContent=TC.loaded?(t('ayah_word')+' '+arNum(n)+' · '+arNum(n-TC.from+1)+' / '+arNum(tot)):'—';
  var b=document.getElementById('tc-badge');if(!b)return;
  if(TC.ar>1||TC.tr>1){
    var txt='';
    if(TC.ar>1)txt+=t('ayah_word')+' '+arNum(TC.arep)+'/'+arNum(TC.ar);
    if(TC.tr>1){if(txt)txt+=' · ';txt+=t('cycle_word')+' '+arNum(TC.trep)+'/'+arNum(TC.tr);}
    b.textContent=txt;b.style.display='';
  }else b.style.display='none';
}
// الانتقال من المصحف إلى حلقة التحفيظ عند آية معيّنة
function teachFrom(sn,an){
  goPage('teach');
  setTimeout(function(){
    var si=SURAHS_ALL.find(function(s){return s.n===sn;});if(!si)return;
    document.getElementById('tc-surah').value=sn;
    TC.sn=sn;TC.ayahs=[];TC.loaded=false;TC.audioCache={};
    tcFillRange();
    TC.from=an;TC.to=Math.min(si.a,an+4);
    document.getElementById('tc-from').value=TC.from;
    document.getElementById('tc-to').value=TC.to;
    TC.off=0;tcLoadText();
  },350);
}

// =====================================================================
// ===== ٢ · إضافات الاستماع: الوضع + مؤقّت النوم =====
// =====================================================================
function setListenMode(m){
  if(m==='surah'&&!hasFullSurah(S.curRec)){toast(t('no_full_surah'));return;}
  S.listenMode=m;
  document.getElementById('mt-ayah').classList.toggle('on',m==='ayah');
  document.getElementById('mt-surah').classList.toggle('on',m==='surah');
  document.getElementById('a-ayah').disabled=(m==='surah');
  toast(m==='surah'?t('mode_surah'):t('mode_ayah'));
}
function buildSurahAudioURL(recId,sn){
  var r=recById(recId);
  if(!r.surahBase)return'';
  return r.surahBase+'/'+pad3(sn)+'.mp3';
}
function hasFullSurah(recId){return !!recById(recId).surahBase;}
function setSleep(min){
  clearInterval(S.sleepTimer);
  document.querySelectorAll('.sleep-b').forEach(function(b){b.classList.remove('on');});
  if(event&&event.target)event.target.classList.add('on');
  var left=document.getElementById('sleep-left');
  if(!min){S.sleepEnd=null;left.textContent='';return;}
  S.sleepEnd=Date.now()+min*60000;
  S.sleepTimer=setInterval(function(){
    var rem=Math.max(0,S.sleepEnd-Date.now());
    left.textContent=fmt(rem/1000);
    if(rem<=0){
      clearInterval(S.sleepTimer);left.textContent='';
      if(S.wavesurfer&&S.wavesurfer.isPlaying())S.wavesurfer.pause();
      if(S.sound)S.sound.pause();
      if(TC.sound)tcPause_();
      toast(t('sleep_done'));
    }
  },1000);
  toast(t('sleep_set'));
}

// ===== توست =====
var _toastT;
function toast(msg){
  var e=document.getElementById('toast');if(!e)return;
  e.textContent=msg;e.classList.add('sh');
  clearTimeout(_toastT);
  _toastT=setTimeout(function(){e.classList.remove('sh');},3200);
}

// =====================================================================
// ===== تنبيهات لطيفة (nudges): تشجيع على النشر والاستكشاف والمشاركة =====
// غير مزعجة: أول ظهور بعد ~45ث، ثم كل ~4 دقائق، بحد أقصى 5 لكل جلسة.
// =====================================================================
var NUDGES=[
  {icon:'fa-share-nodes',key:'nudge_share1',act:'share',btn:'na_share'},
  {icon:'fa-seedling',   key:'nudge_share2',act:'share',btn:'na_share'},
  {icon:'fa-hand-holding-heart',key:'nudge_share3',act:'share',btn:'na_share'},
  {icon:'fa-compass',    key:'nudge_explore',act:'ok',   btn:'na_ok'},
  {icon:'fa-bug',        key:'nudge_feedback',act:'contact',btn:'na_contact'},
  {icon:'fa-lightbulb',  key:'nudge_idea',    act:'contact',btn:'na_contact'}
];
var NG={order:[],i:0,count:0,active:false,timer:null,hideT:null};

function _shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t2=a[i];a[i]=a[j];a[j]=t2;}return a;}

function scheduleNudges(){
  // ترتيب عشوائي غير متكرر
  NG.order=_shuffle(NUDGES.map(function(_,i){return i;}));
  NG.timer=setTimeout(nextNudge,45000);           // أول ظهور بعد 45 ثانية
}
function nextNudge(){
  if(NG.count>=5)return;                            // حد أقصى للجلسة
  // لا تُظهر أثناء وجود نافذة/تحديث/تأمّل
  var busy=NG.active||document.getElementById('update-banner').classList.contains('show')||
           (document.getElementById('ep-modal')&&document.getElementById('ep-modal').classList.contains('open'))||
           S.medActive;
  if(busy){NG.timer=setTimeout(nextNudge,30000);return;}
  var idx=NG.order[NG.i%NG.order.length];NG.i++;
  showNudge(NUDGES[idx]);
  NG.count++;
  NG.timer=setTimeout(nextNudge,240000);            // التالي بعد 4 دقائق
}
function showNudge(n){
  NG.current=n;NG.active=true;
  document.getElementById('nudge-ic').innerHTML='<i class="fas '+n.icon+'"></i>';
  document.getElementById('nudge-text').textContent=t(n.key);
  document.getElementById('nudge-action').textContent=t(n.btn);
  var el=document.getElementById('nudge');el.classList.add('show');
  clearTimeout(NG.hideT);
  NG.hideT=setTimeout(function(){hideNudge();},15000); // إخفاء تلقائي بعد 15ث
}
function hideNudge(perm){
  var el=document.getElementById('nudge');if(el)el.classList.remove('show');
  NG.active=false;clearTimeout(NG.hideT);
  if(perm){NG.count=99;clearTimeout(NG.timer);}      // «إغلاق» = إيقاف بقية التنبيهات هذه الجلسة
}
function nudgeAction(){
  var n=NG.current;if(!n)return;
  if(n.act==='share')shareSite();
  else if(n.act==='contact')goPage('contact');
  hideNudge();
}
// المشاركة: Web Share على الجوال، أو نسخ الرابط على غيره
function shareSite(){return shareVia('native');}
function shareVia(platform){
  var url='https://qurankarem.org'+(location.pathname==='/'?'/':location.pathname);
  var txt=t('share_text');
  var enc=encodeURIComponent, u=enc(url), tx=enc(txt+' — '+url);
  if(platform==='whatsapp'){window.open('https://wa.me/?text='+tx,'_blank');return;}
  if(platform==='telegram'){window.open('https://t.me/share/url?url='+u+'&text='+enc(txt),'_blank');return;}
  if(platform==='twitter'){window.open('https://twitter.com/intent/tweet?text='+enc(txt)+'&url='+u,'_blank');return;}
  if(platform==='copy'){
    if(navigator.clipboard)navigator.clipboard.writeText(url).then(function(){toast(t('link_copied'));}).catch(function(){toast(url);});
    else toast(url);
    return;
  }
  // native — مشاركة الجوال، أو نسخ كبديل
  if(navigator.share)navigator.share({title:'القرآن الكريم — QuranKarem.org',text:txt,url:url}).catch(function(){});
  else if(navigator.clipboard)navigator.clipboard.writeText(url).then(function(){toast(t('link_copied'));}).catch(function(){toast(url);});
  else toast(url);
}

// =====================================================================
// ===== وضع التسميع الصوتي (Web Speech API) =====
// تقرأ بصوتك → يتتبّعك النظام ويظلّل ما نطقتَه ويكشف موضع التوقف/الخطأ.
// أصلي في المتصفح (Chrome/Edge)، عربي ar-SA، بلا مكتبات ولا نماذج تُنزَّل.
// =====================================================================
var RC = { active:false, rec:null, expected:[], ptr:0, wantStop:false };

function rcSupported(){return !!(window.SpeechRecognition||window.webkitSpeechRecognition);}

// تطبيع قوي للمطابقة: يجرّد التشكيل ويوحّد الألف/الياء/التاء المربوطة ويزيل الهمزات
function rcNorm(s){
  return (s||'')
    .replace(/[ً-ٰٟۖ-ۭـ]/g,'') // تشكيل + تطويل
    .replace(/[آأإٱى]/g,'ا')    // آ أ إ ٱ ى → ا
    .replace(/ؤ/g,'و').replace(/ئ/g,'ي')  // ؤ→و ئ→ي
    .replace(/ء/g,'')                                     // ء
    .replace(/ة/g,'ه')                              // ة → ه
    .replace(/[^ء-ي]/g,'');                          // أبقِ الحروف العربية فقط
}
function rcTokens(str){return (str||'').split(/\s+/).map(rcNorm).filter(function(x){return x.length>0;});}
function rcMatch(a,b){
  if(!a||!b)return false;
  if(a===b)return true;
  if(a.length>=3&&b.length>=3&&(a.indexOf(b)===0||b.indexOf(a)===0))return true;
  if(a.length>=4&&b.length>=4&&a.slice(0,4)===b.slice(0,4))return true;
  return false;
}

function rcBuildExpected(){
  RC.expected=[];
  for(var n=TC.from;n<=TC.to;n++){
    var a=TC.ayahs[n-1];if(!a)continue;
    a.words.forEach(function(w,i){RC.expected.push({sn:TC.sn,n:n,wi:i,bare:rcNorm(w)});});
  }
  RC.ptr=0;
}

function rcToggle(){RC.active?rcStop():rcStart();}

function rcStart(){
  if(!rcSupported()){toast(t('rc_unsupported'));return;}
  if(!TC.loaded||!TC.ayahs.length){toast(t('teach_ph'));return;}
  tcStop(); // التسميع والتشغيل متعارضان
  rcBuildExpected();
  if(!RC.expected.length){toast(t('teach_ph'));return;}
  tcClearHL();
  var Ctor=window.SpeechRecognition||window.webkitSpeechRecognition;
  var rec=new Ctor();
  rec.lang='ar-SA';rec.continuous=true;rec.interimResults=true;rec.maxAlternatives=1;
  rec.onresult=rcOnResult;
  rec.onerror=function(e){if(e.error==='not-allowed'||e.error==='service-not-allowed'){toast(t('rc_denied'));rcStop();}};
  rec.onend=function(){if(RC.active&&!RC.wantStop){try{rec.start();}catch(e){}}}; // إبقاء الاستماع
  RC.rec=rec;RC.active=true;RC.wantStop=false;
  try{rec.start();}catch(e){}
  document.getElementById('rc-panel').classList.add('on');
  document.getElementById('rc-mic').classList.add('rc-on');
  document.getElementById('rc-dot').className='rc-dot live';
  document.getElementById('rc-status').textContent=t('rc_listening');
  document.getElementById('tc-mushaf').classList.add('lit');
  // ظلّل موضع البداية
  rcPaint();
}

function rcStop(){
  RC.wantStop=true;RC.active=false;
  if(RC.rec){try{RC.rec.stop();}catch(e){}RC.rec=null;}
  var mic=document.getElementById('rc-mic');if(mic)mic.classList.remove('rc-on');
  var dot=document.getElementById('rc-dot');if(dot)dot.className='rc-dot';
}

function rcOnResult(e){
  // اجمع كل ما تعرّف عليه (نهائي + مؤقت) ثم حاذِ من البداية — عملية عديمة الأثر الجانبي
  var full='';
  for(var i=0;i<e.results.length;i++)full+=' '+e.results[i][0].transcript;
  var live=document.getElementById('rc-live');if(live)live.textContent=full.trim().split(/\s+/).slice(-9).join(' ');
  var rt=rcTokens(full);
  var ptr=0;
  for(var r=0;r<rt.length&&ptr<RC.expected.length;r++){
    for(var w=0;w<=3&&ptr+w<RC.expected.length;w++){
      if(rcMatch(rt[r],RC.expected[ptr+w].bare)){ptr=ptr+w+1;break;}
    }
  }
  RC.ptr=ptr;
  rcPaint();
  if(ptr>=RC.expected.length)rcDone();
}

function rcPaint(){
  RC.expected.forEach(function(tok,idx){
    var el=document.getElementById('tw'+tok.n+'_'+tok.wi);if(!el)return;
    el.classList.remove('hi','dn','ok','cur','miss');
    if(idx<RC.ptr)el.classList.add('ok');
    else if(idx===RC.ptr)el.classList.add('cur');
  });
  var pct=RC.expected.length?Math.round((RC.ptr/RC.expected.length)*100):0;
  var m=document.getElementById('rc-meter');if(m)m.style.width=pct+'%';
  var st=document.getElementById('rc-status');
  if(st&&RC.active)st.textContent=t('rc_progress').replace('{n}',arNum(RC.ptr)).replace('{t}',arNum(RC.expected.length));
  // مرّر لموضع القراءة الحالي
  if(RC.ptr<RC.expected.length){var cur=document.getElementById('tb'+RC.expected[RC.ptr].n);if(cur)cur.scrollIntoView({behavior:'smooth',block:'center'});}
}

function rcDone(){
  rcStop();
  document.getElementById('rc-dot').className='rc-dot done';
  document.getElementById('rc-status').textContent='✓ '+t('rc_done');
  document.getElementById('rc-meter').style.width='100%';
  document.getElementById('tc-mushaf').classList.remove('lit');
  toast(t('rc_done'));
}

// =====================================================================
// ===== 🧒 وضع الأطفال =====
// موقع مصغّر داخل الموقع: صفر إعدادات، زر تشغيل واحد، تحفيز بالنجوم.
// الترتيب ترتيب التحفيظ الفعلي (الأقصر أولاً) لا الترتيب المصحفي —
// كي ينجح الطفل من أول يوم فيستمرّ.
// =====================================================================
// كل مستوى مرتّب من الأقصر إلى الأطول — لا بالترتيب المصحفي — كي ينجح الطفل من أول يوم.
// المستويات ١–٣ من جزء عمّ (٣٠)، ثم جزء تبارك (٢٩)، ثم جزء قد سمع (٢٨).
var KD_LEVELS=[
  {id:1,ic:'🌱',key:'kd_lv1',list:[1,114,113,112,111,110,109,108,103,105,106]},
  {id:2,ic:'⭐',key:'kd_lv2',list:[107,104,102,101,100,99,98,97,95,94,93,92]},
  {id:3,ic:'🏆',key:'kd_lv3',list:[78,79,80,81,82,83,84,85,86,87,88,89,90,91,96]},
  {id:4,ic:'📖',key:'kd_lv4',list:[73,71,72,67,76,75,70,77,68,69,74]},
  {id:5,ic:'📚',key:'kd_lv5',list:[62,63,65,66,60,61,64,58,59]}
];
// ٦ ألوان مبهجة تتناوب على البطاقات — البهجة دون إخلال بوقار النص
var KD_HUES=[198,152,42,268,12,178];
var KD={lv:1,sn:0,an:1,ayahs:[],rep:3,left:3,sound:null,playing:false,view:'grid',
        echo:(localStorage.getItem('qk_kids_echo')==='1'),echoTimer:null};

// ترجمات الوضع — تُدمج في T كي يعمل data-i18n بلا مساس بكتل الترجمة القائمة
var KD_T={
  ar:{kd_title:'ركن الأطفال',kd_sub:'تعلّم القرآن باللعب والتكرار',kd_lv1:'أبدأ',kd_lv2:'أتقدّم',kd_lv3:'أُتقن',kd_lv4:'جزء تبارك',kd_lv5:'جزء قد سمع',kd_jump:'انتقل لأي آية',
      kd_stars:'نجومي',kd_back:'رجوع',kd_echo:'ردّد بعدي',kd_echo_now:'ردّد الآن 🎤',kd_rep:'كرّر',kd_done:'أحسنت! 🎉',kd_done_lv:'أكملت المستوى! 🏆',
      kd_ayah:'آية',kd_play:'اسمع',kd_pause:'توقّف',kd_exit:'خروج',kd_door:'ركن الأطفال',
      kd_door_d:'سور قصيرة بألوان مبهجة، تكرار تلقائي، ونجوم تكافئ الطفل على كل سورة يتمّها'},
  en:{kd_title:'Kids Corner',kd_sub:'Learn the Quran through play and repetition',kd_lv1:'Start',kd_lv2:'Progress',kd_lv3:'Master',kd_lv4:'Juz Tabarak',kd_lv5:'Juz Qad Sami‘a',kd_jump:'Jump to any verse',
      kd_stars:'My stars',kd_back:'Back',kd_echo:'Repeat after me',kd_echo_now:'Your turn 🎤',kd_rep:'Repeat',kd_done:'Well done! 🎉',kd_done_lv:'Level complete! 🏆',
      kd_ayah:'Verse',kd_play:'Listen',kd_pause:'Pause',kd_exit:'Exit',kd_door:'Kids Corner',
      kd_door_d:'Short surahs in cheerful colors, auto-repeat, and stars for every surah completed'},
  fr:{kd_title:'Coin des enfants',kd_sub:'Apprendre le Coran par le jeu et la répétition',kd_lv1:'Débuter',kd_lv2:'Progresser',kd_lv3:'Maîtriser',kd_lv4:'Juz Tabarak',kd_lv5:'Juz Qad Sami‘a',kd_jump:'Aller à un verset',
      kd_stars:'Mes étoiles',kd_back:'Retour',kd_echo:'Répète après moi',kd_echo_now:'À toi 🎤',kd_rep:'Répéter',kd_done:'Bravo ! 🎉',kd_done_lv:'Niveau terminé ! 🏆',
      kd_ayah:'Verset',kd_play:'Écouter',kd_pause:'Pause',kd_exit:'Sortir',kd_door:'Coin des enfants',
      kd_door_d:'Sourates courtes aux couleurs joyeuses, répétition automatique et étoiles à chaque sourate'},
  es:{kd_title:'Rincón infantil',kd_sub:'Aprende el Corán jugando y repitiendo',kd_lv1:'Empezar',kd_lv2:'Avanzar',kd_lv3:'Dominar',kd_lv4:'Yuz Tabarak',kd_lv5:'Yuz Qad Sami‘a',kd_jump:'Ir a un versículo',
      kd_stars:'Mis estrellas',kd_back:'Volver',kd_echo:'Repite después de mí',kd_echo_now:'Tu turno 🎤',kd_rep:'Repetir',kd_done:'¡Muy bien! 🎉',kd_done_lv:'¡Nivel completado! 🏆',
      kd_ayah:'Versículo',kd_play:'Escuchar',kd_pause:'Pausa',kd_exit:'Salir',kd_door:'Rincón infantil',
      kd_door_d:'Suras cortas con colores alegres, repetición automática y estrellas por cada sura'},
  ur:{kd_title:'بچوں کا گوشہ',kd_sub:'کھیل اور تکرار سے قرآن سیکھیں',kd_lv1:'آغاز',kd_lv2:'ترقی',kd_lv3:'مہارت',kd_lv4:'پارہ تبارک',kd_lv5:'پارہ قد سمع',kd_jump:'کسی بھی آیت پر جائیں',
      kd_stars:'میرے ستارے',kd_back:'واپس',kd_echo:'میرے بعد دہرائیں',kd_echo_now:'اب آپ کی باری 🎤',kd_rep:'دہرائیں',kd_done:'شاباش! 🎉',kd_done_lv:'مرحلہ مکمل! 🏆',
      kd_ayah:'آیت',kd_play:'سنیں',kd_pause:'وقفہ',kd_exit:'باہر',kd_door:'بچوں کا گوشہ',
      kd_door_d:'مختصر سورتیں خوشنما رنگوں میں، خودکار تکرار، اور ہر سورت پر ستارے'},
  tr:{kd_title:'Çocuk Köşesi',kd_sub:'Oyun ve tekrarla Kur’an öğren',kd_lv1:'Başla',kd_lv2:'İlerle',kd_lv3:'Ustalaş',kd_lv4:'Tebareke Cüzü',kd_lv5:'Kad Semia Cüzü',kd_jump:'Bir ayete atla',
      kd_stars:'Yıldızlarım',kd_back:'Geri',kd_echo:'Benden sonra tekrarla',kd_echo_now:'Sıra sende 🎤',kd_rep:'Tekrar',kd_done:'Aferin! 🎉',kd_done_lv:'Seviye tamam! 🏆',
      kd_ayah:'Ayet',kd_play:'Dinle',kd_pause:'Duraklat',kd_exit:'Çıkış',kd_door:'Çocuk Köşesi',
      kd_door_d:'Neşeli renklerde kısa sureler, otomatik tekrar ve her sure için yıldız'}
};
(function(){for(var L in KD_T){if(!T[L])T[L]={};for(var k in KD_T[L])T[L][k]=KD_T[L][k];}})();

// ===== النجوم =====
function kdStars(){try{return JSON.parse(localStorage.getItem('qk_kids_stars'))||{};}catch(e){return {};}}
function kdAward(sn){
  var st=kdStars();
  if(st[sn])return false;                       // نجمة واحدة لكل سورة
  st[sn]=1;try{localStorage.setItem('qk_kids_stars',JSON.stringify(st));}catch(e){}
  return true;
}
function kdStarCount(){var st=kdStars(),n=0;for(var k in st)n++;return n;}
function kdTotal(){var n=0;KD_LEVELS.forEach(function(l){n+=l.list.length;});return n;}

// ===== الشبكة =====
function initKids(){kdRenderTabs();kdRenderGrid();kdSyncStars();}
function kdRenderTabs(){
  var w=document.getElementById('kd-tabs');if(!w)return;
  w.innerHTML='';
  KD_LEVELS.forEach(function(l){
    var b=document.createElement('button');
    b.className='kd-tab'+(KD.lv===l.id?' on':'');
    b.onclick=function(){KD.lv=l.id;kdRenderTabs();kdRenderGrid();};
    b.innerHTML='<span class="kd-tab-ic">'+l.ic+'</span><span>'+t(l.key)+'</span>';
    w.appendChild(b);
  });
}
function kdSyncStars(){
  var e=document.getElementById('kd-star-n');if(e)e.textContent=kdStarCount()+' / '+kdTotal();
  var b=document.getElementById('kd-star-bar');
  if(b)b.style.width=Math.round(kdStarCount()/kdTotal()*100)+'%';
}
function kdRenderGrid(){
  var g=document.getElementById('kd-grid');if(!g)return;
  var lv=KD_LEVELS.filter(function(l){return l.id===KD.lv;})[0];if(!lv)return;
  var st=kdStars(),ar=(S.lang==='ar'||S.lang==='ur');
  g.innerHTML='';
  lv.list.forEach(function(sn,i){
    var si=SURAHS_ALL.filter(function(x){return x.n===sn;})[0];if(!si)return;
    var c=document.createElement('button');
    c.className='kd-card'+(st[sn]?' done':'');
    c.style.setProperty('--kh',KD_HUES[i%KD_HUES.length]);
    c.onclick=function(){kdOpen(sn);};
    c.innerHTML='<span class="kd-card-star">'+(st[sn]?'⭐':'')+'</span>'+
      '<span class="kd-card-n">'+sn+'</span>'+
      '<span class="kd-card-t">'+si.ar+'</span>'+
      '<span class="kd-card-s">'+(ar?si.a+' آيات':si.a+' '+t('ayahs'))+'</span>';
    g.appendChild(c);
  });
}

// ===== المشغّل =====
function kdOpen(sn){
  KD.sn=sn;KD.an=1;KD.ayahs=[];KD.left=KD.rep;
  document.getElementById('kd-browse').style.display='none';
  document.getElementById('kd-player').style.display='block';
  KD.view='player';
  var si=SURAHS_ALL.filter(function(x){return x.n===sn;})[0];
  document.getElementById('kd-sname').textContent=si?si.ar:'';
  document.getElementById('kd-text').innerHTML='<i class="fas fa-spinner fa-spin"></i>';
  kdSetRep(KD.rep);
  var eb=document.getElementById('kd-echo-btn');if(eb)eb.classList.toggle('on',KD.echo);
  var cached;try{cached=JSON.parse(localStorage.getItem('qk_tc_'+sn));}catch(e){}
  if(cached){kdSetAyahs(cached);return;}
  fetch('https://api.alquran.cloud/v1/surah/'+sn+'/ar.uthmani')
    .then(function(r){return r.json();})
    .then(function(d){
      if(d.code!==200)throw new Error();
      var arr=d.data.ayahs.map(function(a){return a.text;});
      try{localStorage.setItem('qk_tc_'+sn,JSON.stringify(arr));}catch(e){}
      kdSetAyahs(arr);
    }).catch(function(){
      if(TC_EMB[sn])kdSetAyahs(TC_EMB[sn]);
      else document.getElementById('kd-text').textContent=t('load_err');
    });
}
function kdSetAyahs(arr){
  KD.ayahs=arr.map(function(txt,i){return normQuran(stripBsm(txt,KD.sn,i));});
  kdShowAyah();
}
function kdShowAyah(){
  var e=document.getElementById('kd-text');if(!e)return;
  e.textContent=KD.ayahs[KD.an-1]||'';
  var d=document.getElementById('kd-dots');
  if(d){
    d.innerHTML='';
    d.setAttribute('title',t('kd_jump'));
    for(var i=1;i<=KD.ayahs.length;i++){
      var b=document.createElement('button');
      b.className='kd-dot'+(i===KD.an?' on':(i<KD.an?' past':''));
      b.setAttribute('aria-label',t('kd_ayah')+' '+i);
      b.innerHTML='<i></i>';
      (function(n){b.onclick=function(){kdJump(n);};})(i);
      d.appendChild(b);
    }
  }
  // في السور الطويلة قد تكون النقطة النشطة خارج منطقة التمرير — أظهرها
  var act=d&&d.querySelector('.kd-dot.on');
  if(act&&d.scrollHeight>d.clientHeight){
    var top=act.offsetTop-(d.clientHeight-act.offsetHeight)/2;
    d.scrollTop=Math.max(0,top);
  }
  var c=document.getElementById('kd-count');
  if(c)c.textContent=t('kd_ayah')+' '+KD.an+' / '+KD.ayahs.length;
}
// القفز إلى آية بعينها — يواصل التشغيل إن كان يعمل، وإلا يعرض فقط
function kdJump(n){
  if(!KD.ayahs.length||n<1||n>KD.ayahs.length)return;
  var wasPlaying=KD.playing;
  KD.an=n;KD.left=KD.rep;
  if(wasPlaying)kdPlayAyah();
  else{kdStopAudio();kdBtn(false);kdShowAyah();kdSyncLeft();}
}
function kdSetRep(n){
  KD.rep=n;KD.left=n;
  document.querySelectorAll('#kd-reps .kd-rep').forEach(function(b){
    b.classList.toggle('on',+b.getAttribute('data-r')===n);
  });
  kdSyncLeft();
}
function kdSyncLeft(){
  var e=document.getElementById('kd-left');if(!e)return;
  var s='';for(var i=0;i<KD.rep;i++)s+=(i<KD.left?'●':'○');
  e.textContent=s;
}
function kdToggle(){
  if(KD.playing){kdStopAudio();kdBtn(false);return;}
  kdPlayAyah();
}
function kdBtn(on){
  var b=document.getElementById('kd-play');if(!b)return;
  b.innerHTML='<i class="fas fa-'+(on?'pause':'play')+'"></i>';
  b.classList.toggle('on',on);
}
function kdStopAudio(){
  if(KD.sound){try{KD.sound.stop();KD.sound.unload();}catch(e){}KD.sound=null;}
  if(KD.echoTimer){clearTimeout(KD.echoTimer);KD.echoTimer=null;}
  kdEchoUI(false);
  KD.playing=false;
}
// شريط «ردّد الآن» — يملأ نفسه بمقدار السكتة كي يرى الطفل الوقت المتبقّي
function kdEchoUI(on,ms){
  var w=document.getElementById('kd-echo-bar');if(!w)return;
  w.classList.toggle('on',!!on);
  var f=document.getElementById('kd-echo-fill');
  if(!f)return;
  if(on){f.style.transition='none';f.style.width='0%';
    void f.offsetWidth;
    f.style.transition='width '+ms+'ms linear';f.style.width='100%';}
  else{f.style.transition='none';f.style.width='0%';}
}
function kdToggleEcho(){
  KD.echo=!KD.echo;
  try{localStorage.setItem('qk_kids_echo',KD.echo?'1':'0');}catch(e){}
  var b=document.getElementById('kd-echo-btn');
  if(b)b.classList.toggle('on',KD.echo);
  if(!KD.echo&&KD.echoTimer){clearTimeout(KD.echoTimer);KD.echoTimer=null;kdEchoUI(false);}
}
function kdPlayAyah(){
  if(!KD.ayahs.length)return;
  kdStopAudio();
  KD.playing=true;kdBtn(true);kdShowAyah();kdSyncLeft();
  KD.sound=new Howl({
    src:[buildAyahURL('ar.alafasy',KD.sn,KD.an)],html5:true,volume:1,
    onend:function(){
      var next=function(){
        KD.left--;
        if(KD.left>0){kdSyncLeft();kdPlayAyah();return;} // كرّر الآية نفسها
        KD.left=KD.rep;
        if(KD.an<KD.ayahs.length){KD.an++;kdPlayAyah();} // انتقل للآية التالية
        else kdFinish();
      };
      // «ردّد بعدي»: اسكت بمقدار طول الآية بالضبط — فالطفل يحتاج زمن القارئ نفسه.
      // لا رقم يختاره أحد: الآية القصيرة سكتة قصيرة والطويلة أطول.
      if(KD.echo){
        var gap=Math.max(1200,Math.round((KD.sound?KD.sound.duration():2)*1000));
        kdEchoUI(true,gap);
        KD.echoTimer=setTimeout(function(){KD.echoTimer=null;kdEchoUI(false);next();},gap);
      }else next();
    },
    onloaderror:function(){kdStopAudio();kdBtn(false);toast(t('load_err'));},
    onplayerror:function(){try{KD.sound.once('unlock',function(){KD.sound.play();});}catch(e){}}
  });
  KD.sound.play();
}
function kdFinish(){
  kdStopAudio();kdBtn(false);
  var fresh=kdAward(KD.sn);
  kdSyncStars();kdRenderGrid();
  // هل اكتمل المستوى بأكمله؟
  var lv=KD_LEVELS.filter(function(l){return l.id===KD.lv;})[0],st=kdStars();
  var whole=lv&&lv.list.every(function(n){return st[n];});
  kdCelebrate(whole?t('kd_done_lv'):t('kd_done'),fresh);
}
function kdCelebrate(msg,fresh){
  var w=document.getElementById('kd-cele');if(!w)return;
  document.getElementById('kd-cele-t').textContent=msg;
  var r=document.getElementById('kd-rain');r.innerHTML='';
  for(var i=0;i<18;i++){
    var s=document.createElement('span');
    s.textContent=fresh?'⭐':'✨';
    s.style.left=(Math.random()*100)+'%';
    s.style.animationDelay=(Math.random()*1.1).toFixed(2)+'s';
    s.style.fontSize=(1.1+Math.random()*1.4).toFixed(2)+'rem';
    r.appendChild(s);
  }
  w.classList.add('on');
  setTimeout(function(){w.classList.remove('on');},3400);
}
function kdBack(){
  kdStopAudio();kdBtn(false);
  document.getElementById('kd-player').style.display='none';
  document.getElementById('kd-browse').style.display='block';
  KD.view='grid';kdRenderGrid();kdSyncStars();
}

// =====================================================================
// ===== 🤝 الداعمون وبرنامج الإعلانات =====
// مبدأ حاكم: لا شبكة إعلانات خارجية إطلاقاً. شعارات ثابتة يرفعها صاحب الموقع
// بنفسه بعد مراجعة يدوية — فلا يظهر إعلان قمار أو ربا بجوار آية، ولا تتبّع
// للزوّار، ولا سكربت غريب يُبطئ الموقع. البيانات كلها في supporters.json.
// =====================================================================
var SUP={data:null,loaded:false};
var SUP_T={
  ar:{sup_title:'داعمو الموقع',sup_eyebrow:'شكراً لهم',
      sup_sub:'من أسهم في بقاء هذا المشروع مجّانياً للناس',
      sup_main:'راعٍ رئيسي',sup_supporter:'داعم',sup_contributor:'مساهم',sup_inkind:'دعم عيني',
      sup_empty:'كن أول الداعمين',
      sup_empty_d:'لم ينضم أحد بعد. مكانك محفوظ هنا، وأجرك عند الله.',
      sup_cta:'كيف أدعم؟',sup_strip:'بدعم من',
      adv_title:'الإعلان في الموقع',adv_eyebrow:'برنامج محدود',
      adv_sub:'مساحة محجوزة لمن يخدم القرآن وحده',
      adv_intro:'هذا الموقع صدقة جارية مجّانية للأبد. لا نبيع محتواه ولا نحجبه خلف مقابل. لكن بقاءه يحتاج خوادم وخدمات ذكاء اصطناعي لها كلفة شهرية — والإعلان المحدود هو ما يغطّيها ويُبقي كل شيء مجّانياً.',
      adv_yes:'نقبل الإعلان لـ',adv_no:'نرفض الإعلان لـ',
      adv_y1:'دور طباعة وتوزيع المصحف الشريف',
      adv_y2:'مراكز ومعاهد تحفيظ القرآن وتعليم التجويد',
      adv_y3:'الأوقاف والجمعيات الخيرية المسجّلة',
      adv_y4:'تطبيقات ومنصات إسلامية نافعة',
      adv_y5:'دور نشر الكتب الشرعية والتفسير',
      adv_n1:'كل ما فيه ربا أو قمار أو ميسر',
      adv_n2:'أي محتوى مخالف للشريعة أو مثير للخلاف',
      adv_n3:'الإعلانات المتحرّكة أو الوامضة أو الصوتية',
      adv_n4:'أي سكربت تتبّع أو جمع بيانات للزوّار',
      adv_places:'أين يظهر الإعلان',
      adv_p1:'شريط الداعمين أعلى تذييل الصفحات',
      adv_p2:'أسفل صفحة الاستماع، بعد انتهاء المحتوى',
      adv_p3:'صفحة الداعمين المستقلة',
      adv_never:'أين لا يظهر أبداً',
      adv_nv1:'داخل المصحف — لا شيء يقاطع القراءة',
      adv_nv2:'ركن الأطفال — مبدأ لا يُناقش',
      adv_nv3:'وضع التأمّل وصفحة الصلاة',
      adv_rules:'شروط الشكل',
      adv_r1:'شعار ثابت بلا حركة ولا صوت',
      adv_r2:'مراجعة يدوية لكل معلن قبل النشر',
      adv_r3:'لا شبكات إعلانات ولا تتبّع للزوّار إطلاقاً',
      adv_r4:'حق الرفض أو الإزالة محفوظ دون إبداء سبب',
      adv_price:'الكلفة',
      adv_price_d:'لا جدول أسعار ثابتاً. تواصل معنا ونتفق بما يليق بالمشروع وبك — وقد نقبل الدعم العيني (خدمة أو استضافة) بدل المال.',
      adv_contact:'راسلنا للاتفاق',
      nav_supporters:'الداعمون',nav_advertise:'أعلن معنا'},
  en:{sup_title:'Our Supporters',sup_eyebrow:'With gratitude',
      sup_sub:'Those who help keep this project free for everyone',
      sup_main:'Principal Sponsor',sup_supporter:'Supporter',sup_contributor:'Contributor',sup_inkind:'In-Kind Support',
      sup_empty:'Be the first supporter',
      sup_empty_d:'No one has joined yet. Your place is reserved here, and your reward is with God.',
      sup_cta:'How can I support?',sup_strip:'Supported by',
      adv_title:'Advertise With Us',adv_eyebrow:'A limited programme',
      adv_sub:'Space reserved for those who serve the Quran alone',
      adv_intro:'This site is an ongoing charity, free forever. We do not sell its content or place it behind a paywall. But keeping it running needs servers and AI services with a monthly cost — limited advertising is what covers that and keeps everything free.',
      adv_yes:'We accept advertising from',adv_no:'We refuse advertising from',
      adv_y1:'Quran printing and distribution houses',
      adv_y2:'Quran memorisation and tajweed institutes',
      adv_y3:'Registered endowments and charities',
      adv_y4:'Beneficial Islamic apps and platforms',
      adv_y5:'Publishers of Islamic scholarship and tafsir',
      adv_n1:'Anything involving usury, gambling or betting',
      adv_n2:'Any content contrary to Islamic law or divisive',
      adv_n3:'Animated, flashing or audio advertisements',
      adv_n4:'Any tracking or data-collection script',
      adv_places:'Where ads appear',
      adv_p1:'Supporter strip above the site footer',
      adv_p2:'Below the listening page, after the content ends',
      adv_p3:'The dedicated supporters page',
      adv_never:'Where they never appear',
      adv_nv1:'Inside the Mushaf — nothing interrupts reading',
      adv_nv2:'Kids Corner — a principle beyond discussion',
      adv_nv3:'Meditation mode and the prayer page',
      adv_rules:'Format rules',
      adv_r1:'A static logo, no motion and no sound',
      adv_r2:'Manual review of every advertiser before publishing',
      adv_r3:'No ad networks and no visitor tracking whatsoever',
      adv_r4:'We reserve the right to refuse or remove without cause',
      adv_price:'Cost',
      adv_price_d:'There is no fixed price list. Contact us and we will agree on what suits the project and you — we may also accept in-kind support (a service or hosting) instead of money.',
      adv_contact:'Contact us to arrange',
      nav_supporters:'Supporters',nav_advertise:'Advertise'},
  fr:{sup_title:'Nos soutiens',sup_eyebrow:'Avec gratitude',
      sup_sub:'Ceux qui aident à garder ce projet gratuit pour tous',
      sup_main:'Parrain principal',sup_supporter:'Soutien',sup_contributor:'Contributeur',sup_inkind:'Soutien en nature',
      sup_empty:'Soyez le premier soutien',
      sup_empty_d:'Personne n’a encore rejoint. Votre place est réservée ici, et votre récompense est auprès de Dieu.',
      sup_cta:'Comment soutenir ?',sup_strip:'Avec le soutien de',
      adv_title:'Annoncer chez nous',adv_eyebrow:'Programme limité',
      adv_sub:'Un espace réservé à ceux qui servent le Coran',
      adv_intro:'Ce site est une aumône continue, gratuite pour toujours. Nous ne vendons pas son contenu et ne le cachons derrière aucun paiement. Mais son maintien exige des serveurs et des services d’IA au coût mensuel — une publicité limitée le couvre et garde tout gratuit.',
      adv_yes:'Nous acceptons la publicité de',adv_no:'Nous refusons la publicité de',
      adv_y1:'Maisons d’impression et de distribution du Coran',
      adv_y2:'Instituts de mémorisation du Coran et de tajwid',
      adv_y3:'Waqfs et associations caritatives enregistrées',
      adv_y4:'Applications et plateformes islamiques utiles',
      adv_y5:'Éditeurs d’ouvrages religieux et de tafsir',
      adv_n1:'Tout ce qui implique usure, jeux d’argent ou paris',
      adv_n2:'Tout contenu contraire à la loi islamique ou clivant',
      adv_n3:'Publicités animées, clignotantes ou sonores',
      adv_n4:'Tout script de pistage ou de collecte de données',
      adv_places:'Où les annonces apparaissent',
      adv_p1:'Bandeau des soutiens au-dessus du pied de page',
      adv_p2:'Au bas de la page d’écoute, après le contenu',
      adv_p3:'La page dédiée aux soutiens',
      adv_never:'Où elles n’apparaissent jamais',
      adv_nv1:'Dans le Mushaf — rien n’interrompt la lecture',
      adv_nv2:'Le Coin des enfants — un principe non négociable',
      adv_nv3:'Le mode méditation et la page de prière',
      adv_rules:'Règles de format',
      adv_r1:'Un logo fixe, sans mouvement ni son',
      adv_r2:'Examen manuel de chaque annonceur avant publication',
      adv_r3:'Aucune régie publicitaire ni pistage des visiteurs',
      adv_r4:'Nous pouvons refuser ou retirer sans motif',
      adv_price:'Coût',
      adv_price_d:'Il n’y a pas de tarif fixe. Contactez-nous et nous conviendrons de ce qui convient au projet et à vous — nous acceptons aussi un soutien en nature.',
      adv_contact:'Contactez-nous',
      nav_supporters:'Soutiens',nav_advertise:'Annoncer'},
  es:{sup_title:'Nuestros patrocinadores',sup_eyebrow:'Con gratitud',
      sup_sub:'Quienes ayudan a mantener este proyecto gratuito para todos',
      sup_main:'Patrocinador principal',sup_supporter:'Patrocinador',sup_contributor:'Colaborador',sup_inkind:'Apoyo en especie',
      sup_empty:'Sé el primer patrocinador',
      sup_empty_d:'Aún no se ha unido nadie. Tu lugar está reservado aquí, y tu recompensa está con Dios.',
      sup_cta:'¿Cómo puedo apoyar?',sup_strip:'Con el apoyo de',
      adv_title:'Anúnciate con nosotros',adv_eyebrow:'Programa limitado',
      adv_sub:'Espacio reservado para quienes sirven al Corán',
      adv_intro:'Este sitio es una caridad continua, gratuita para siempre. No vendemos su contenido ni lo ocultamos tras un pago. Pero mantenerlo requiere servidores y servicios de IA con un coste mensual — la publicidad limitada lo cubre y mantiene todo gratuito.',
      adv_yes:'Aceptamos publicidad de',adv_no:'Rechazamos publicidad de',
      adv_y1:'Imprentas y distribuidoras del Corán',
      adv_y2:'Institutos de memorización del Corán y taywid',
      adv_y3:'Waqfs y organizaciones benéficas registradas',
      adv_y4:'Aplicaciones y plataformas islámicas útiles',
      adv_y5:'Editoriales de obras islámicas y tafsir',
      adv_n1:'Todo lo que implique usura, juego o apuestas',
      adv_n2:'Cualquier contenido contrario a la ley islámica',
      adv_n3:'Anuncios animados, parpadeantes o con sonido',
      adv_n4:'Cualquier script de rastreo o recogida de datos',
      adv_places:'Dónde aparecen los anuncios',
      adv_p1:'Franja de patrocinadores sobre el pie de página',
      adv_p2:'Al final de la página de escucha',
      adv_p3:'La página dedicada a patrocinadores',
      adv_never:'Dónde nunca aparecen',
      adv_nv1:'Dentro del Mushaf — nada interrumpe la lectura',
      adv_nv2:'Rincón infantil — un principio innegociable',
      adv_nv3:'Modo meditación y página de oración',
      adv_rules:'Reglas de formato',
      adv_r1:'Un logotipo fijo, sin movimiento ni sonido',
      adv_r2:'Revisión manual de cada anunciante',
      adv_r3:'Sin redes publicitarias ni rastreo de visitantes',
      adv_r4:'Podemos rechazar o retirar sin motivo',
      adv_price:'Coste',
      adv_price_d:'No hay lista de precios fija. Contáctanos y acordaremos lo que convenga al proyecto y a ti — también aceptamos apoyo en especie.',
      adv_contact:'Contáctanos',
      nav_supporters:'Patrocinadores',nav_advertise:'Anúnciate'},
  ur:{sup_title:'ہمارے معاونین',sup_eyebrow:'شکریہ',
      sup_sub:'جنہوں نے اس منصوبے کو سب کے لیے مفت رکھنے میں مدد دی',
      sup_main:'بنیادی سرپرست',sup_supporter:'معاون',sup_contributor:'شریک',sup_inkind:'عملی تعاون',
      sup_empty:'پہلے معاون بنیں',
      sup_empty_d:'ابھی کوئی شامل نہیں ہوا۔ آپ کی جگہ محفوظ ہے، اور اجر اللہ کے پاس ہے۔',
      sup_cta:'میں کیسے مدد کروں؟',sup_strip:'تعاون سے',
      adv_title:'ہمارے ساتھ اشتہار',adv_eyebrow:'محدود پروگرام',
      adv_sub:'صرف قرآن کی خدمت کرنے والوں کے لیے جگہ',
      adv_intro:'یہ ویب سائٹ صدقۂ جاریہ ہے، ہمیشہ مفت۔ ہم اس کا مواد نہ بیچتے ہیں نہ کسی ادائیگی کے پیچھے چھپاتے ہیں۔ مگر اسے چلانے کے لیے سرورز اور AI خدمات کا ماہانہ خرچ ہے — محدود اشتہار وہی خرچ پورا کرتا ہے۔',
      adv_yes:'ہم اشتہار قبول کرتے ہیں',adv_no:'ہم اشتہار مسترد کرتے ہیں',
      adv_y1:'قرآن کی طباعت و تقسیم کے ادارے',
      adv_y2:'حفظِ قرآن اور تجوید کے مراکز',
      adv_y3:'رجسٹرڈ اوقاف اور فلاحی ادارے',
      adv_y4:'مفید اسلامی ایپس اور پلیٹ فارم',
      adv_y5:'اسلامی کتب اور تفسیر کے ناشرین',
      adv_n1:'سود، جوا یا شرط پر مبنی ہر چیز',
      adv_n2:'شریعت کے خلاف یا اختلافی مواد',
      adv_n3:'متحرک، چمکتے یا آواز والے اشتہار',
      adv_n4:'کوئی بھی ٹریکنگ یا ڈیٹا اسکرپٹ',
      adv_places:'اشتہار کہاں دکھائی دیتا ہے',
      adv_p1:'فوٹر کے اوپر معاونین کی پٹی',
      adv_p2:'سماعت کے صفحے کے آخر میں',
      adv_p3:'معاونین کا مخصوص صفحہ',
      adv_never:'کہاں کبھی نہیں',
      adv_nv1:'مصحف کے اندر — تلاوت میں کوئی خلل نہیں',
      adv_nv2:'بچوں کا گوشہ — ناقابلِ بحث اصول',
      adv_nv3:'غور و فکر کا موڈ اور نماز کا صفحہ',
      adv_rules:'شکل کے اصول',
      adv_r1:'ساکن لوگو، نہ حرکت نہ آواز',
      adv_r2:'ہر مشتہر کا دستی جائزہ',
      adv_r3:'کوئی اشتہاری نیٹ ورک یا ٹریکنگ نہیں',
      adv_r4:'بغیر وجہ انکار یا ہٹانے کا حق محفوظ',
      adv_price:'لاگت',
      adv_price_d:'کوئی مقررہ قیمت نہیں۔ ہم سے رابطہ کریں — ہم عملی تعاون بھی قبول کرتے ہیں۔',
      adv_contact:'رابطہ کریں',
      nav_supporters:'معاونین',nav_advertise:'اشتہار دیں'},
  tr:{sup_title:'Destekçilerimiz',sup_eyebrow:'Teşekkürle',
      sup_sub:'Bu projeyi herkes için ücretsiz tutmaya yardım edenler',
      sup_main:'Ana Sponsor',sup_supporter:'Destekçi',sup_contributor:'Katkıda bulunan',sup_inkind:'Ayni destek',
      sup_empty:'İlk destekçi olun',
      sup_empty_d:'Henüz kimse katılmadı. Yeriniz burada ayrılmıştır, ecriniz Allah katındadır.',
      sup_cta:'Nasıl destek olurum?',sup_strip:'Desteğiyle',
      adv_title:'Bizimle reklam verin',adv_eyebrow:'Sınırlı program',
      adv_sub:'Yalnızca Kur’an’a hizmet edenlere ayrılmış alan',
      adv_intro:'Bu site sadaka-i cariyedir, sonsuza dek ücretsizdir. İçeriğini satmıyor, ödeme duvarı ardına koymuyoruz. Ancak ayakta kalması aylık maliyeti olan sunucular ve yapay zekâ hizmetleri gerektiriyor — sınırlı reklam bunu karşılar.',
      adv_yes:'Reklamını kabul ettiklerimiz',adv_no:'Reklamını reddettiklerimiz',
      adv_y1:'Kur’an basım ve dağıtım kurumları',
      adv_y2:'Hafızlık ve tecvid merkezleri',
      adv_y3:'Kayıtlı vakıflar ve hayır kurumları',
      adv_y4:'Faydalı İslami uygulama ve platformlar',
      adv_y5:'İslami eser ve tefsir yayıncıları',
      adv_n1:'Faiz, kumar veya bahis içeren her şey',
      adv_n2:'Şeriata aykırı veya ayrıştırıcı içerik',
      adv_n3:'Hareketli, yanıp sönen veya sesli reklamlar',
      adv_n4:'Herhangi bir izleme veya veri toplama betiği',
      adv_places:'Reklamlar nerede görünür',
      adv_p1:'Sayfa altlığının üstündeki destekçi şeridi',
      adv_p2:'Dinleme sayfasının sonunda',
      adv_p3:'Özel destekçiler sayfası',
      adv_never:'Asla görünmediği yerler',
      adv_nv1:'Mushaf içinde — okumayı hiçbir şey kesmez',
      adv_nv2:'Çocuk Köşesi — tartışmasız bir ilke',
      adv_nv3:'Tefekkür modu ve namaz sayfası',
      adv_rules:'Biçim kuralları',
      adv_r1:'Sabit logo, hareket ve ses yok',
      adv_r2:'Her reklamverenin elle incelenmesi',
      adv_r3:'Reklam ağı ve ziyaretçi takibi kesinlikle yok',
      adv_r4:'Sebep göstermeden reddetme veya kaldırma hakkı',
      adv_price:'Maliyet',
      adv_price_d:'Sabit fiyat listesi yoktur. Bize ulaşın — ayni desteği de kabul ederiz.',
      adv_contact:'İletişime geçin',
      nav_supporters:'Destekçiler',nav_advertise:'Reklam verin'}
};
(function(){for(var L in SUP_T){if(!T[L])T[L]={};for(var k in SUP_T[L])T[L][k]=SUP_T[L][k];}})();

// تحميل البيانات مرة واحدة
function supLoad(cb){
  if(SUP.loaded){cb&&cb();return;}
  fetch('/supporters.json',{cache:'no-cache'})
    .then(function(r){return r.json();})
    .then(function(d){SUP.data=d;SUP.loaded=true;cb&&cb();})
    .catch(function(){SUP.data=null;SUP.loaded=true;cb&&cb();});
}
function supTier(k){return (SUP.data&&Array.isArray(SUP.data[k]))?SUP.data[k]:[];}
function supTotal(){return ['main','supporter','contributor','inkind']
  .reduce(function(a,k){return a+supTier(k).length;},0);}

// بطاقة داعم — الشعار إن وُجد، وإلا الاسم نصاً (فلا يظهر مربّع مكسور)
// مخططات آمنة فقط. أي رابط آخر يُسقَط ويُعرض الاسم بلا رابط.
function safeURL(u){
  if(!u)return '';
  try{
    var p=new URL(String(u),location.origin);
    return (p.protocol==='http:'||p.protocol==='https:')?p.href:'';
  }catch(e){return '';}
}
// كذلك مسار الشعار — لا نسمح إلا بمسار داخلي أو https
function safeLogo(u){
  if(!u)return '';
  u=String(u);
  if(u.charAt(0)==='/'&&u.charAt(1)!=='/')return u;
  return /^https:\/\//.test(u)?u:'';
}
function supCard(x,tier){
  var safe=function(t){var d=document.createElement('div');d.textContent=t==null?'':t;return d.innerHTML;};
  var logo=safeLogo(x.logo);
  var inner=logo
    ? '<img class="sp-logo" src="'+safe(logo)+'" alt="'+safe(x.name)+'" loading="lazy">'
    : '<span class="sp-name">'+safe(x.name)+'</span>';
  var body='<div class="sp-card sp-'+tier+'">'+inner
    +(x.note?'<span class="sp-note">'+safe(x.note)+'</span>':'')+'</div>';
  // اقبل http/https فقط — لا javascript: ولا data: ولو دخلت الملف بالخطأ
  var url=safeURL(x.url);
  return url
    ? '<a class="sp-a" href="'+safe(url)+'" target="_blank" rel="noopener noreferrer nofollow">'+body+'</a>'
    : body;
}
function renderSupporters(){
  var w=document.getElementById('sup-body');if(!w)return;
  if(!supTotal()){
    w.innerHTML='<div class="sp-empty"><i class="fas fa-hands-holding-heart"></i>'
      +'<div class="sp-empty-t">'+t('sup_empty')+'</div>'
      +'<div class="sp-empty-d">'+t('sup_empty_d')+'</div>'
      +'<button class="qibla-btn" onclick="goPage(\'advertise\')">'
      +'<i class="fas fa-circle-info"></i><span>'+t('sup_cta')+'</span></button></div>';
    return;
  }
  var html='';
  [['main','sup_main'],['supporter','sup_supporter'],
   ['contributor','sup_contributor'],['inkind','sup_inkind']].forEach(function(p){
    var list=supTier(p[0]);if(!list.length)return;
    html+='<div class="sp-tier"><div class="sp-tier-t">'+t(p[1])+'</div>'
      +'<div class="sp-grid sp-g-'+p[0]+'">'+list.map(function(x){return supCard(x,p[0]);}).join('')+'</div></div>';
  });
  w.innerHTML=html;
}
// شريط الفوتر — يختفي تماماً إن لم يوجد داعم مؤهَّل
function renderSupStrip(){
  var s=document.getElementById('sup-strip');if(!s)return;
  var list=supTier('main').concat(supTier('supporter')).filter(function(x){return x.strip;});
  if(!list.length){s.style.display='none';return;}
  s.style.display='';
  s.innerHTML='<span class="sps-lbl">'+t('sup_strip')+'</span>'
    +'<div class="sps-row">'+list.map(function(x){return supCard(x,'strip');}).join('')+'</div>';
}
function initSupporters(){supLoad(function(){renderSupporters();renderSupStrip();});}
