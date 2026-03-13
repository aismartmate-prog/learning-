// ========================================================================
// נושא: אנגלית (English)
// קטגוריה: Grammar: Advanced (דקדוק מתקדם)
// מכיל את כל 105 השאלות המלאות והמתוקנות של הקטגוריה.
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // 1. Parts of Speech
    // ---------------------------------------------------------
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Adjective vs. Adverb (תואר לעומת תואר הפועל):</strong><br>בחרו את המילה הנכונה להשלמת המשפט:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She speaks English very ________.</span>`,
        options: ["<span dir=\"ltr\">well</span>", "<span dir=\"ltr\">good</span>", "<span dir=\"ltr\">goodly</span>", "<span dir=\"ltr\">nice</span>"],
        correctAnswer: 0,
        hint: "המילה Good מתארת 'שם עצם' (ילד טוב, ספר טוב). אבל כאן אנחנו מתארים *פעולה* (איך היא מדברת?). תואר הפועל של Good הוא מילה יוצאת דופן.",
        solution: `<strong>הסבר מלא (Good לעומת Well):</strong><br>זוהי אחת הטעויות הנפוצות ביותר אצל דוברי עברית!<br><br>- <strong>Adjective (שם תואר):</strong> מתאר חפצים או אנשים (Nouns). המילה <span dir="ltr"><strong>good</strong></span> (טוב) היא שם תואר. (<span dir="ltr">She is a <strong>good</strong> student</span>).<br>- <strong>Adverb (תואר הפועל):</strong> מתאר <u>איך</u> מתבצעת הפעולה (Verbs). כדי לתאר פעולה, לרוב מוסיפים 'ly', אך המילה good היא חריגה, ותואר הפועל שלה הוא <span dir="ltr"><strong>well</strong></span> (היטב).<br><br>מכיוון שאנו מתארים <u>איך היא מדברת</u> (speaks), חובה להשתמש בתואר הפועל: <span dir="ltr">She speaks English very <strong>well</strong></span>.`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Adjectives ending in -ed vs. -ing:</strong><br>השלימו את המשפט הבא:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">This movie is so ________. I am completely ________.</span>`,
        options: ["<span dir=\"ltr\">boring / bored</span>", "<span dir=\"ltr\">bored / boring</span>", "<span dir=\"ltr\">boring / boring</span>", "<span dir=\"ltr\">bored / bored</span>"],
        correctAnswer: 0,
        hint: "הסיומת ing מתארת את ה'גורם' (הסרט). הסיומת ed מתארת את ה'הרגשה' של מי שחווה את זה (אני).",
        solution: `<strong>הסבר מלא (חוק ה-ED לעומת ING):</strong><br>באנגלית יש צמדי תארים מבלבלים (כמו interested/interesting, bored/boring).<br>הנה כלל הקסם לזכור זאת תמיד:<br><br>1. <strong>סיומת <span dir="ltr">-ing</span>:</strong> מתארת את ה<strong>סיבה/הגורם</strong> לתחושה. (הסרט גורם לשיעמום &rarr; <span dir="ltr">The movie is <strong>boring</strong></span>).<br>2. <strong>סיומת <span dir="ltr">-ed</span>:</strong> מתארת את ה<strong>רגש</strong> שעובר על האדם החווה. (אני מרגיש משועמם &rarr; <span dir="ltr">I am <strong>bored</strong></span>).<br><br>התשובה הנכונה: הסרט <strong>boring</strong> ולכן אני מרגיש <strong>bored</strong>.`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Uncountable Nouns (שמות עצם בלתי ספירים):</strong><br>איזה מהמשפטים הבאים נכון דקדוקית באנגלית (שימו לב למילה Information/מידע)?`,
        options: ["<span dir=\"ltr\">I need some information about the project.</span>", "<span dir=\"ltr\">I need some informations about the project.</span>", "<span dir=\"ltr\">I need an information about the project.</span>", "<span dir=\"ltr\">I need a few informations about the project.</span>"],
        correctAnswer: 0,
        hint: "באנגלית, המילה 'מידע' (Information) נחשבת למושג אבסטרקטי שלא ניתן לספור אותו (אי אפשר להגיד 'שני מידעים'). לכן אסור להוסיף לה 's' או 'an'.",
        solution: `<strong>הסבר מלא (Uncountable Nouns):</strong><br>בעברית אנחנו אולי אומרים "יש לי כמה מידעים", אבל באנגלית המילה <span dir="ltr"><strong>Information</strong></span> היא בלתי-ספירה (Uncountable).<br><br><strong>חוקי מילים בלתי-ספירות (כמו water, advice, money, furniture):</strong><br>1. לעולם <strong>לא מקבלות s</strong> ברבים (אין מילה כזו informations).<br>2. לעולם <strong>לא מקבלות a/an</strong> לפניהן (אי אפשר להגיד 'an information').<br>3. כדי לתאר כמות, נשתמש במילים כמו <strong>some, a lot of, much</strong>.<br><br>לכן, המשפט התקין היחיד הוא: <span dir="ltr">I need <strong>some information</strong></span>.`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Linking Verbs + Adjectives (פעלי קישור והטעות המוכרת):</strong><br>בחרו את המילה הנכונה (תואר או תואר הפועל) להשלמת המשפט:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">This soup smells ________!</span>`,
        options: ["<span dir=\"ltr\">delicious</span>", "<span dir=\"ltr\">deliciously</span>", "<span dir=\"ltr\">very deliciously</span>", "<span dir=\"ltr\">well</span>"],
        correctAnswer: 0,
        hint: "למרות שלמדנו שפעולות מתארים עם תואר הפועל (ly), פעלי חושים (להריח, לטעום, להיראות) הם יוצאי דופן. הם מתנהגים כמו פועל To Be ומקבלים תואר רגיל.",
        solution: `<strong>הסבר מלא (Linking Verbs - פעלי קישור):</strong><br>זהו חריג חשוב ביותר בבגרות!<br>הכלל אומר שפועל (כמו 'לרוץ') מתואר ע"י תואר הפועל (quickly).<br><strong>אבל...</strong> פעלים המתארים חושים או מצב קיום (<span dir="ltr">look, smell, taste, sound, feel, seem</span>) אינם פעולות אקטיביות. הם נקראים "פעלי קישור" (Linking Verbs) והם מחברים בין הנושא לבין <strong>שם תואר רגיל (Adjective)</strong>.<br><br>- שגוי: <span dir="ltr">It smells deliciously</span> (הריח לא מבצע פעולה של הרחה).<br>- נכון: <span dir="ltr">It smells <strong>delicious</strong></span> (זה מריח טעים).<br>- נכון: <span dir="ltr">You look <strong>beautiful</strong></span> (ולא beautifully).`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Irregular Adverbs (Hard vs. Hardly):</strong><br>קראו את המשפט: <span dir="ltr">"He works ________, so he ________ has time to rest."</span><br>אילו מילים ישלימו אותו בהתאמה?`,
        options: ["<span dir=\"ltr\">hard / hardly</span>", "<span dir=\"ltr\">hardly / hard</span>", "<span dir=\"ltr\">hard / hard</span>", "<span dir=\"ltr\">hardly / hardly</span>"],
        correctAnswer: 0,
        hint: "המילה Hard משמעותה 'קשה'. המילה Hardly *אינה* אומרת 'בקשיחות', אלא משמעותה שונה לגמרי - 'בקושי' / 'כמעט ולא'.",
        solution: `<strong>הסבר מלא (המלכודת של Hard):</strong><br>תלמידים חושבים שכדי להפוך "קשה" (Hard) לתואר הפועל, צריך להוסיף ly. זו טעות אנושה שמשנה את כל משמעות המשפט!<br><br>- <span dir="ltr"><strong>Hard</strong></span>: משמש גם כשם תואר (מבחן קשה) וגם כתואר הפועל (הוא עובד <strong>קשה</strong> = <span dir="ltr">He works <strong>hard</strong></span>).<br>- <span dir="ltr"><strong>Hardly</strong></span>: זו מילה שונה לחלוטין שמשמעותה "<strong>בקושי / כמעט ולא</strong>".<br><br>לכן, המשפט הוא: <span dir="ltr">"He works <strong>hard</strong> (עובד קשה), so he <strong>hardly</strong> (בקושי) has time to rest."</span>`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Order of Adjectives (סדר שמות התואר):</strong><br>כיצד תתארו "שולחן צרפתי, עשוי עץ, וישן" בסדר התחבירי הנכון באנגלית?`,
        options: ["<span dir=\"ltr\">an old French wooden table</span>", "<span dir=\"ltr\">a French old wooden table</span>", "<span dir=\"ltr\">a wooden old French table</span>", "<span dir=\"ltr\">an old wooden French table</span>"],
        correctAnswer: 0,
        hint: "הסדר באנגלית (OSASCOMP) קובע שקודם בא הגיל (old), אחר כך המוצא/מדינה (French), ורק בסוף החומר שממנו זה עשוי (wooden) צמוד לשם העצם.",
        solution: `<strong>הסבר מלא (סדר התארים - Adjective Order):</strong><br>כשיש לנו כמה שמות תואר לפני שם עצם, האנגלים לא זורקים אותם סתם, אלא עובדים לפי סדר קשיח המכונה <strong>OSASCOMP</strong>:<br>1. <strong>O</strong>pinion (דעה - יפה, מכוער)<br>2. <strong>S</strong>ize (גודל - גדול, קטן)<br>3. <strong>A</strong>ge (גיל - <strong>old</strong>)<br>4. <strong>S</strong>hape (צורה - עגול)<br>5. <strong>C</strong>olor (צבע - אדום)<br>6. <strong>O</strong>rigin (מוצא/מדינה - <strong>French</strong>)<br>7. <strong>M</strong>aterial (חומר - <strong>wooden</strong>)<br>8. <strong>P</strong>urpose (מטרה)<br><br>לפי הסדר הזה, התשובה התקינה היא: <strong>old</strong> (גיל) &rarr; <strong>French</strong> (מוצא) &rarr; <strong>wooden</strong> (חומר) &rarr; <strong>table</strong> (החפץ עצמו).`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Noun Suffixes (סיומות של שמות עצם):</strong><br>אם הפועל הוא <span dir="ltr"><strong>decide</strong></span> (להחליט), איזו מילה היא <strong>שם העצם</strong> (החלטה) הנוצר ממנו?`,
        options: ["<span dir=\"ltr\">decision</span>", "<span dir=\"ltr\">decidement</span>", "<span dir=\"ltr\">decideness</span>", "<span dir=\"ltr\">decidity</span>"],
        correctAnswer: 0,
        hint: "סיומת '-tion' או '-sion' היא הסיומת הנפוצה ביותר באנגלית להפיכת פועל לשם עצם.",
        solution: `<strong>הסבר מלא (Word Formation):</strong><br>בבגרויות (שאלון E), לעיתים מבקשים מאיתנו להמיר מילים מצורה אחת לאחרת (חלקי דיבר).<br><br>הסיומות הנפוצות ביותר ליצירת <strong>שמות עצם (Nouns)</strong> מפעלים הן: <strong>tion, sion, ment, ness, ance</strong>.<br>במקרה של הפועל <span dir="ltr">decide</span> (להחליט), הצורה התקנית המילונית היא <span dir="ltr"><strong>decision</strong></span> (החלטה).<br>דוגמאות נוספות:<br>- <span dir="ltr">inform &rarr; information</span><br>- <span dir="ltr">happy &rarr; happiness</span><br>- <span dir="ltr">develop &rarr; development</span>`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Affect vs. Effect (פועל לעומת שם עצם):</strong><br>בחרו את המילים הנכונות (שימו לב מתי צריך פועל ומתי צריך שם עצם!):<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">The new law will ________ our business. It will have a big ________ on sales.</span>`,
        options: ["<span dir=\"ltr\">affect / effect</span>", "<span dir=\"ltr\">effect / affect</span>", "<span dir=\"ltr\">affect / affect</span>", "<span dir=\"ltr\">effect / effect</span>"],
        correctAnswer: 0,
        hint: "תזכורת המפתח: Affect (עם A) הוא לרוב הפועל (להשפיע Action). Effect (עם E) הוא לרוב שם העצם (השפעה/תוצאה).",
        solution: `<strong>הסבר מלא (Affect vs. Effect):</strong><br>זהו צמד המילים המבלבל ביותר גם עבור אמריקאים ילידים!<br><br>1. <span dir="ltr"><strong>Affect</strong></span> (באות a): הוא ה<strong>פועל (Verb)</strong>. משמעותו: להשפיע. (רמז: <strong>A</strong>ffect = <strong>A</strong>ction).<br>- במשפט הראשון: <span dir="ltr">The law will <strong>affect</strong> us.</span> (יבצע פעולה של השפעה עלינו).<br><br>2. <span dir="ltr"><strong>Effect</strong></span> (באות e): הוא <strong>שם העצם (Noun)</strong>. משמעותו: הַשְׁפָּעָה / תוצאה.<br>- במשפט השני מופיעה המילה "a big..." (שם תואר). אחרי שם תואר חייב לבוא שם עצם: <span dir="ltr">It will have a big <strong>effect</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Prepositions of Time (מילות יחס לזמן):</strong><br>בחרו את רצף מילות היחס הנכון לזמנים הבאים:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The meeting is ________ Monday, ________ 9:00 AM, ________ October.</span>`,
        options: ["<span dir=\"ltr\">on / at / in</span>", "<span dir=\"ltr\">in / on / at</span>", "<span dir=\"ltr\">at / on / in</span>", "<span dir=\"ltr\">on / in / at</span>"],
        correctAnswer: 0,
        hint: "שיטת המשולש ההפוך: IN לדברים גדולים (חודשים/שנים), ON לדברים בינוניים (ימים מדויקים), AT לדברים ספציפיים וקטנים (שעות).",
        solution: `<strong>הסבר מלא (חוק In-On-At לזמנים):</strong><br>כדי לא לטעות לעולם, השתמשו ב"כלל הפירמידה" (מהגדול לקטן):<br><br>1. <strong>הכי גדול/כללי (In):</strong> חודשים, עונות, שנים, מאות. (&rarr; <span dir="ltr"><strong>in</strong> October, <strong>in</strong> 2024</span>).<br>2. <strong>אמצעי (On):</strong> ימים ספציפיים בשבוע או תאריכים מדוייקים על לוח השנה. (&rarr; <span dir="ltr"><strong>on</strong> Monday, <strong>on</strong> May 5th</span>).<br>3. <strong>הכי קטן/מדויק (At):</strong> שעות מדוייקות בשעון. (&rarr; <span dir="ltr"><strong>at</strong> 9:00 AM</span>).<br><br>לכן הרצף למשפט שלנו הוא: <span dir="ltr"><strong>on</strong> Monday, <strong>at</strong> 9:00, <strong>in</strong> October</span>.`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Indefinite Articles (A / An - יוצאי דופן):</strong><br>באילו מילות יידוע נשתמש לפני המילים הבאות בהתאמה: <span dir="ltr">___ hour, ___ university</span> ?`,
        options: ["<span dir=\"ltr\">an / a</span>", "<span dir=\"ltr\">a / an</span>", "<span dir=\"ltr\">an / an</span>", "<span dir=\"ltr\">a / a</span>"],
        correctAnswer: 0,
        hint: "החוק לא מסתכל על אותיות הכתב, אלא על 'צליל ההגייה'! המילה hour נשמעת כמו 'אָוּאר' (תנועה). המילה university נשמעת כמו 'יוניברסיטי' (האות Y היא עיצור).",
        solution: `<strong>הסבר מלא (The A/An Exception Rule):</strong><br>הכלל הבסיסי אומר ששמים <strong>an</strong> לפני מילים שמתחילות באותיות הניקוד (A, E, I, O, U). <strong>אבל... הכלל האמיתי הוא לפי הצליל (ההגייה), ולא הכתיב!</strong><br><br>- <strong>Hour (שעה):</strong> מתחילה באות h (עיצור), אבל ה-h שקטה ולא נשמעת. אנו אומרים "אוּוֶר", כלומר צליל של תנועה (O). לכן נשים: <span dir="ltr"><strong>an</strong> hour</span>.<br>- <strong>University (אוניברסיטה):</strong> מתחילה באות u (תנועה), אבל אנו קוראים את המילה כ-"יוּ" (כמו You). הצליל Y נחשב לעיצור באנגלית (Consonant sound). לכן נשים: <span dir="ltr"><strong>a</strong> university</span>.`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Demonstrative Pronouns (כינויי רמז):</strong><br>אתם מחזיקים שני תפוחים קרוב אליכם ביד, ואומרים לחבר:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"________ apples are very tasty!"</span>`,
        options: ["<span dir=\"ltr\">These</span>", "<span dir=\"ltr\">Those</span>", "<span dir=\"ltr\">This</span>", "<span dir=\"ltr\">That</span>"],
        correctAnswer: 0,
        hint: "This/These הם לדברים שקרובים אלינו (ביד שלנו). This ליחיד, These לרבים. התפוחים אצלנו ביד והם ברבים.",
        solution: `<strong>הסבר מלא (כינויי רמז - מרחק וכמות):</strong><br>ישנן 4 מילים להצבעה על אובייקטים, והן מתחלקות לפי קרוב/רחוק ויחיד/רבים:<br>- <strong>קרוב אלי (ביד / כאן):</strong><br>  יחיד &rarr; <span dir="ltr"><strong>This</strong></span> (הזה)<br>  רבים &rarr; <span dir="ltr"><strong>These</strong></span> (האלה - מה שיש לנו במשפט, התפוחים ביד).<br>- <strong>רחוק ממני (שם / מעבר לחדר):</strong><br>  יחיד &rarr; <span dir="ltr"><strong>That</strong></span> (ההוא שם)<br>  רבים &rarr; <span dir="ltr"><strong>Those</strong></span> (ההם שם).<br><br>מכיוון שאני מחזיק אותם קרוב, ויש יותר מאחד, התשובה היא <span dir="ltr"><strong>These</strong> apples</span>.`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Prepositions of Place (מילות יחס למקום):</strong><br>כיצד תתארו נכון את המיקום הפיזי של חברכם?<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">He is sitting ________ the bus, reading a book.</span>`,
        options: ["<span dir=\"ltr\">on</span>", "<span dir=\"ltr\">in</span>", "<span dir=\"ltr\">at</span>", "<span dir=\"ltr\">inside</span>"],
        correctAnswer: 0,
        hint: "כלל אצבע לתחבורה: אם אתה יכול לעמוד וללכת בתוך כלי הרכב (אוטובוס, רכבת, מטוס, אונייה) - אתה 'ON' זה. אם אתה חייב לשבת ולהתכווץ מיד כשאתה נכנס (מכונית פרטית, מונית) - אתה 'IN' זה.",
        solution: `<strong>הסבר מלא (In לעומת On בכלי רכב):</strong><br>ההבחנה במילות יחס לתחבורה באנגלית היא מאוד חזותית:<br><br>- <span dir="ltr"><strong>On (על):</strong></span> משמש לכלי רכב <u>גדולים או ציבוריים</u> שאפשר ללכת בתוכם (לעמוד על הסיפון או הרצפה). לכן אומרים: <span dir="ltr"><strong>on a bus</strong>, on a train, on a plane, on a ship</span>.<br>- <span dir="ltr"><strong>In (בתוך):</strong></span> משמש לכלי רכב <u>קטנים ופרטיים</u> שאתה "כלוא" בתוכם ברגע שנכנסת. לכן אומרים: <span dir="ltr"><strong>in a car</strong>, in a taxi, in a helicopter</span>.<br><br>לכן התשובה הנכונה היא: <span dir="ltr">He is sitting <strong>on</strong> the bus.</span>`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Comparative and Superlative Adjectives (צורות השוואה חריגות):</strong><br>השלימו את המשפט עם הדרגה הגבוהה ביותר (Superlative) של המילה <strong>bad</strong> (רע):<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">That was the ________ movie I have ever seen.</span>`,
        options: ["<span dir=\"ltr\">worst</span>", "<span dir=\"ltr\">baddest</span>", "<span dir=\"ltr\">worse</span>", "<span dir=\"ltr\">most bad</span>"],
        correctAnswer: 0,
        hint: "המילה 'Bad' אינה מקבלת תוספת של est כמו מילים רגילות. היא מילה חריגה שמשנה לחלוטין את צורתה להשוואה ולסופרלטיב.",
        solution: `<strong>הסבר מלא (תארי השוואה יוצאי דופן):</strong><br>כאשר אנו רוצים להגיד שדבר אחד הוא "הכי...", אנו לרוב מוסיפים <span dir="ltr">est</span> לתואר (the tallest, the smartest).<br>אך יש שלושה תארים "חריגים" שמשנים צורה לחלוטין ומופיעים המון בבגרויות:<br>1. <strong>Good (טוב)</strong> &rarr; <span dir="ltr">better</span> (טוב יותר) &rarr; <span dir="ltr">the <strong>best</strong></span> (הכי טוב).<br>2. <strong>Bad (רע)</strong> &rarr; <span dir="ltr"><strong>worse</strong></span> (רע יותר) &rarr; <span dir="ltr">the <strong>worst</strong></span> (הכי רע / הגרוע ביותר).<br>3. <strong>Far (רחוק)</strong> &rarr; <span dir="ltr">farther / further</span> (רחוק יותר) &rarr; <span dir="ltr">the farthest / furthest</span> (הכי רחוק).<br><br>מכיוון שאנו מחפשים את "הסרט הגרוע ביותר שראיתי", נשתמש ב-<span dir="ltr"><strong>worst</strong></span>.`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Countable Nouns (שמות עצם ספירים - יוצאי דופן):</strong><br>מהי צורת הרבים (Plural) התקנית של המילה <strong>Person</strong> (בן אדם / איש)?<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">There were many ________ in the room.</span>`,
        options: ["<span dir=\"ltr\">people</span>", "<span dir=\"ltr\">persons</span>", "<span dir=\"ltr\">peoples</span>", "<span dir=\"ltr\">persones</span>"],
        correctAnswer: 0,
        hint: "למרות שבשפה משפטית נדירה משתמשים לפעמים ב-'persons', בשפה אנגלית תקנית ויומיומית יש מילה מיוחדת שמתארת 'אנשים' ברבים.",
        solution: `<strong>הסבר מלא (צורת רבים חריגה):</strong><br>בשפה האנגלית, יש מספר שמות עצם שאינם מקבלים את האות 's' כשהם הופכים לרבים, אלא משנים את צורתם לגמרי (Irregular Plurals).<br><br>- אדם אחד: <span dir="ltr">One <strong>person</strong></span>.<br>- הרבה אנשים: <span dir="ltr">Many <strong>people</strong></span>.<br><br>דוגמאות חשובות נוספות לבגרות:<br>- <span dir="ltr">Child &rarr; Children</span> (ילד/ילדים)<br>- <span dir="ltr">Man &rarr; Men</span> (גבר/גברים)<br>- <span dir="ltr">Woman &rarr; Women</span> (אישה/נשים)<br>- <span dir="ltr">Foot &rarr; Feet</span> (כף רגל/כפות רגליים)`
    },
    {
        topic: "english", subTopic: "Parts of Speech (חלקי הדיבר: Nouns, Verbs, Adjectives)",
        question_text: `<strong>Much vs. Many (כמתים):</strong><br>בחרו את המילה הנכונה להשלמת השאלה:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">How ________ time do we have left before the test starts?</span>`,
        options: ["<span dir=\"ltr\">much</span>", "<span dir=\"ltr\">many</span>", "<span dir=\"ltr\">long</span>", "<span dir=\"ltr\">a lot of</span>"],
        correctAnswer: 0,
        hint: "כסף (Money) וזמן (Time) הם מושגים אבסטרקטיים שלא ניתן לספור באחד-שתיים-שלוש (אי אפשר להגיד 'שלושה זמנים'). לכן הם נחשבים Uncountable (בלתי ספירים).",
        solution: `<strong>הסבר מלא (Much לעומת Many):</strong><br>הכלל לבחירה ביניהם פשוט וקשור לספירות של שם העצם:<br><br>- <span dir="ltr"><strong>How many</strong> (כמה)</span>: משמש לדברים פיזיים שניתן לספור אחד-אחד, והם תמיד יגיעו ברבים (עם s). למשל: <span dir="ltr">How many <strong>days</strong>? How many <strong>apples</strong>?</span><br><br>- <span dir="ltr"><strong>How much</strong> (כמה)</span>: משמש ל"חומרים" או "מושגים מופשטים" שאי אפשר לספור. למשל: מים, סוכר, אהבה, כסף (Money), ו<strong>זמן (Time)</strong>.<br>לכן: <span dir="ltr">How <strong>much</strong> time...?</span>`
    },

    // ---------------------------------------------------------
    // 2. Modals & Semi-Modals
    // ---------------------------------------------------------
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Must vs. Have to (Obligation / חובה):</strong><br>למרות שבעברית שניהם מתורגמים ל"חייב", באנגלית יש הבדל דק במשמעות. איזו מילה תתאים יותר למשפט שבו הדובר <strong>מטיל חובה על עצמו</strong> מתוך החלטה אישית פנימית?<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"I really ________ start working out. I feel so unfit lately."</span>`,
        options: ["<span dir=\"ltr\">must</span>", "<span dir=\"ltr\">have to</span>", "<span dir=\"ltr\">can</span>", "<span dir=\"ltr\">might</span>"],
        correctAnswer: 0,
        hint: "כשהחובה מגיעה מבפנים ('אני מרגיש שאני חייב לעצמי'), נשתמש ב-Must. כשהחובה מגיעה מבחוץ מכוח חוק או בוס ('אני חייב ללבוש מדים'), נשתמש ב-Have to.",
        solution: `<strong>הסבר מלא (חובה פנימית מול חובה חיצונית):</strong><br>זהו ניואנס דקדוקי שמעלה את רמת האנגלית שלכם ל-5 יח"ל:<br><br>- <span dir="ltr"><strong>Must</strong></span> (חובה פנימית / דעה חזקה): כשאנחנו מטילים את החובה על עצמנו או כשאנחנו נותנים המלצה נחרצת מאוד לחבר. (למשל: <span dir="ltr">I <strong>must</strong> call my mom today!</span> - אף חוק לא מחייב אותי, אני קבעתי לעצמי).<br>- <span dir="ltr"><strong>Have to</strong></span> (חובה חיצונית / אובייקטיבית): כשחוק, בוס, או מציאות פיזית כופים עלינו משהו. (למשל: <span dir="ltr">I <strong>have to</strong> wear a uniform at work</span>).<br><br>מכיוון שהדובר מרגיש חובה פנימית להתאמן כדי להרגיש טוב, <span dir="ltr"><strong>must</strong></span> היא הבחירה הטבעית יותר.`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Mustn't vs. Don't have to (איסור מול חוסר חובה):</strong><br>בחרו את הפועל הנכון להשלמת המשפט:<br><span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">"You ________ bring food to the party. I already bought everything."</span>`,
        options: ["<span dir=\"ltr\">don't have to (אין צורך / לא חובה)</span>", "<span dir=\"ltr\">mustn't (אסור)</span>", "<span dir=\"ltr\">can't (לא יכול)</span>", "<span dir=\"ltr\">shouldn't (לא כדאי)</span>"],
        correctAnswer: 0,
        hint: "האם יש פה איסור מוחלט ('אסור לך להביא אוכל!'), או שפשוט 'אין צורך שתטריח את עצמך'? Mustn't זה איסור, Don't have to זה פטור מאחריות.",
        solution: `<strong>הסבר מלא (המלכודת הכי גדולה של המודאלים בשלילה):</strong><br>כשהמודאלים עוברים לשלילה, המשמעות שלהם <strong>מתרחקת מאוד</strong> אחד מהשני!<br><br>- <span dir="ltr"><strong>Mustn't (Must not)</strong></span> = <strong>איסור חמור!</strong>. אם תעשה את זה, אתה עובר על החוק או מסכן חיים. (למשל: <span dir="ltr">You <strong>mustn't</strong> smoke in the hospital</span>).<br>- <span dir="ltr"><strong>Don't have to / Needn't</strong></span> = <strong>חוסר חובה / אין צורך</strong>. אתה לא חייב לעשות את זה (כי כבר סידרו את זה), אבל אם בא לך, אתה יכול. <br><br>במשפט שלנו: "אתה לא צריך להביא אוכל, כי קניתי הכל". אין פה חוק משטרתי שאוסר להביא אוכל, אלא פשוט פטור. לכן: <span dir="ltr"><strong>You don't have to</strong></span>.`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Can vs. Be able to (יכולת בעתיד):</strong><br>כיצד נאמר "אני אוכל לעזור לך מחר" (בעתיד) באנגלית תקינה?`,
        options: ["<span dir=\"ltr\">I will be able to help you tomorrow.</span>", "<span dir=\"ltr\">I will can help you tomorrow.</span>", "<span dir=\"ltr\">I can to help you tomorrow.</span>", "<span dir=\"ltr\">I am able help you tomorrow.</span>"],
        correctAnswer: 0,
        hint: "הפועל Can הוא מוגבל. הוא קיים רק בהווה (Can) ובעבר (Could). אין לו צורת עתיד. לכן הוא שואל את בן הדוד שלו 'Be able to' שיעשה את העבודה במקומו.",
        solution: `<strong>הסבר מלא (עתיד של יכולת):</strong><br>באנגלית, <strong>אסור לחבר שני מודאלים יחד</strong>. לכן משפט כמו <span dir="ltr">"I will can"</span> הוא שגיאה נוראית ובלתי חוקית בעליל.<br><br>אז איך מביעים יכולת (Can) בעתיד?<br>משתמשים ב"תחליף המודאל" (Semi-Modal) שנקרא <span dir="ltr"><strong>be able to</strong></span> (מסוגל ל...).<br>את התחליף הזה אפשר לחבר למילת העתיד Will: <span dir="ltr">I <strong>will be able to</strong> help you</span> (אני אהיה מסוגל לעזור לך).`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Could vs. Managed to / Was able to (יכולת בעבר מול הישג ספציפי):</strong><br>איזה מהמשפטים הבאים נכון לתיאור הצלחה נקודתית קשה שהתרחשה אתמול?`,
        options: ["<span dir=\"ltr\">The fire was terrible, but everyone managed to escape.</span>", "<span dir=\"ltr\">The fire was terrible, but everyone could escape.</span>", "<span dir=\"ltr\">The fire was terrible, but everyone can escape.</span>", "<span dir=\"ltr\">The fire was terrible, but everyone is able to escape.</span>"],
        correctAnswer: 0,
        hint: "המילה Could מתארת 'יכולת כללית' שהייתה לי בעבר (כשהייתי קטן יכולתי לרוץ מהר). אבל כשמדובר בהצלחה בפעולה חד-פעמית קשה וספציפית בעבר, האנגלים לא משתמשים ב-Could.",
        solution: `<strong>הסבר מלא (הישג נקודתי בעבר):</strong><br>זהו חוק למתקדמים! יש הבדל בין יכולת בעבר להישג בעבר:<br><br>- <span dir="ltr"><strong>Could</strong></span>: מציין יכולת כללית בעבר (למשל: בילדותי יכולתי לשחות שעות = <span dir="ltr">I <strong>could</strong> swim</span>).<br>- <span dir="ltr"><strong>Managed to / Was able to</strong></span>: כשאנו מתארים סיטואציה אחת, ספציפית ומאתגרת, שהתרחשה בעבר (כמו שריפה או מבחן קשה במיוחד), ו<strong>הצלחנו</strong> להתגבר עליה. במקרה זה, אסור להשתמש ב-Could! חובה להשתמש ב"הצליח ל..." (<span dir="ltr"><strong>managed to</strong> escape</span> או <span dir="ltr">were able to escape</span>).`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Should vs. Ought to (מתן עצה):</strong><br>הפועל <span dir="ltr"><strong>Should</strong></span> (כדאי / צָרִיך לעצה) הוא נפוץ מאוד. מהי המילה הנרדפת והרשמית יותר ל-Should, שמשמשת באותה משמעות בדיוק?`,
        options: ["<span dir=\"ltr\">ought to</span>", "<span dir=\"ltr\">must</span>", "<span dir=\"ltr\">may</span>", "<span dir=\"ltr\">had to</span>"],
        correctAnswer: 0,
        hint: "זוהי מילה שמופיעה המון בטקסטים ספרותיים ורשמיים בבגרות (מודול E ו-G). משמעותה 'מן הראוי ש... / כדאי ש...'.",
        solution: `<strong>הסבר מלא (Ought to כעצה חזקה):</strong><br>פועל העזר <span dir="ltr"><strong>Ought to</strong></span> הוא התאום הזהה (אך טיפה יותר רשמי) של <span dir="ltr"><strong>Should</strong></span>.<br>שניהם משמשים למתן עצה, הבעת דעה על מה שנכון לעשות, או הבעת ציפייה.<br><br>שני המשפטים הבאים זהים לחלוטין במשמעותם:<br>- <span dir="ltr">You <strong>should</strong> study more.</span> (כדאי שתלמד יותר).<br>- <span dir="ltr">You <strong>ought to</strong> study more.</span> (מן הראוי/כדאי שתלמד יותר).<br><br>*שימו לב ש-ought תמיד יגיע מלווה במילה to, בניגוד ל-should שמגיע לבד.*`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>May / Might (אפשרות וסיכוי - Possibility):</strong><br>השלימו את המשפט:<br><span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">"Take an umbrella with you. It ________ rain later today."</span>`,
        options: ["<span dir=\"ltr\">might (ייתכן ש... / עלול)</span>", "<span dir=\"ltr\">must (חייב)</span>", "<span dir=\"ltr\">can't (לא יכול להיות)</span>", "<span dir=\"ltr\">should (כדאי)</span>"],
        correctAnswer: 0,
        hint: "מזג אוויר הוא אף פעם לא ודאי ב-100%. איזו מילה מבטאת 'סיכוי סביר או אפשרות' בעתיד הקרוב?",
        solution: `<strong>הסבר מלא (הבעת אפשרות עתידית):</strong><br>כאשר אנו מדברים על משהו ש<strong>אולי יקרה (Possibility)</strong>, אך אנחנו לא בטוחים בכך בוודאות, אנו משתמשים ב-<span dir="ltr"><strong>May</strong></span> או ב-<span dir="ltr"><strong>Might</strong></span>.<br><br>(Might נחשב מעט יותר "בספק" מ-May, אבל ביומיום משתמשים בהם כמילים נרדפות).<br>התרגום של <span dir="ltr">It <strong>might</strong> rain</span> הוא "ייתכן שירד גשם / עלול לרדת גשם".<br>השימוש ב-must יהיה חזק מדי (בטוח ירד גשם), ושימוש ב-should לא קשור לכאן (לא שייך לתת עצה למזג האוויר).`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Perfect Modals - Should have + V3 (חרטה על העבר):</strong><br>איזה מהמשפטים הבאים מבטא <strong>חרטה (Regret)</strong> על משהו שהייתי צריך לעשות בעבר, אבל לא עשיתי?`,
        options: ["<span dir=\"ltr\">I should have studied harder for the test.</span>", "<span dir=\"ltr\">I must have studied harder for the test.</span>", "<span dir=\"ltr\">I could study harder for the test.</span>", "<span dir=\"ltr\">I should studied harder for the test.</span>"],
        correctAnswer: 0,
        hint: "כדי להעביר מודאל לעבר (הייתי צריך, יכולתי), אנחנו משתמשים ב'מודאלים מושלמים' - פועל העזר + have + פועל בטור השלישי (V3).",
        solution: `<strong>הסבר מלא (Perfect Modals - Should have):</strong><br>המודאלים המושלמים (Perfect Modals) הם גולת הכותרת של הבגרות. הם מאפשרים לנו להסתכל על העבר ולהביע עליו דעה!<br><br><strong>המבנה:</strong> <span dir="ltr">Modal + <strong>have</strong> + <strong>V3</strong></span>.<br><br>המבנה <span dir="ltr"><strong>Should have + V3</strong></span> משמעותו: "<strong>הייתי צריך לעשות את זה (אבל לא עשיתי)</strong>". זהו משפט של ביקורת או חרטה.<br><span dir="ltr">"I <strong>should have studied</strong> harder"</span> = "הייתי צריך ללמוד קשה יותר (ועכשיו אני מתחרט כי כנראה נכשלתי)".<br>*הערה: צורה כמו "should studied" היא שגיאה, כי מודאל חייב אחריו פועל נקי (have).*`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Perfect Modals - Must have + V3 (הסקת מסקנה ודאית בעבר):</strong><br>אתם רואים שהכביש בחוץ רטוב לחלוטין למרות שישנתם ולא ראיתם מה קרה. איזו מסקנה תסיקו באנגלית?`,
        options: ["<span dir=\"ltr\">It must have rained last night.</span>", "<span dir=\"ltr\">It should have rained last night.</span>", "<span dir=\"ltr\">It could rain last night.</span>", "<span dir=\"ltr\">It must rained last night.</span>"],
        correctAnswer: 0,
        hint: "כשיש לנו 99% ביטחון שמשהו קרה בעבר בגלל ההוכחות שיש לנו היום (כביש רטוב), אנחנו משתמשים ב-Must have + V3 ('בטוח ש...').",
        solution: `<strong>הסבר מלא (Perfect Modals - Must have):</strong><br>המבנה <span dir="ltr"><strong>Must have + V3</strong></span> אינו קשור כלל ל"חובה"! הוא לא אומר "הגשם היה חייב לרדת".<br><br>משמעותו הבלעדית היא <strong>הסקת מסקנה לוגית ודאית על העבר (Deduction)</strong>. <br>זה מתורגם לעברית כ: "בטוח ש..." או "מן הסתם ש...".<br><span dir="ltr">"It <strong>must have rained</strong>"</span> = בטוח שירד גשם בלילה (כי הכביש רטוב, אין הסבר הגיוני אחר).`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Perfect Modals - Could have + V3 (החמצת הזדמנות):</strong><br>קראו את המשפט: <span dir="ltr">"You were driving like a crazy person! You <strong>could have killed</strong> someone!"</span><br>מה המשמעות של חלק זה במשפט?`,
        options: ["<span dir=\"ltr\">זה מתאר יכולת או אפשרות שהייתה קיימת בעבר (סכנה אמיתית), אך למרבה המזל היא לא התממשה בפועל (הוא לא הרג אף אחד).</span>", "<span dir=\"ltr\">זה אומר שהוא באמת הרג מישהו, ועכשיו המשטרה מחפשת אותו.</span>", "<span dir=\"ltr\">זה מציין שהוא קיבל רשות חוקית להרוג מישהו.</span>", "<span dir=\"ltr\">זה מתאר פעולה שהוא חייב לעשות בעתיד.</span>"],
        correctAnswer: 0,
        hint: "המבנה 'יכולתָ...' (אבל לא עשית). זה משמש לעיתים קרובות לנזיפות על דברים מסוכנים שכמעט קרו.",
        solution: `<strong>הסבר מלא (Perfect Modals - Could have):</strong><br>המבנה <span dir="ltr"><strong>Could have + V3</strong></span> משמש לתיאור מצב שהיה <strong>אפשרי בעבר - אבל בסוף לא קרה</strong>.<br><br>זה יכול לשמש לפספוס חיובי ("יכולתי ללמוד רפואה, אבל בחרתי משפטים" = <span dir="ltr">I <strong>could have studied</strong></span>).<br>וזה משמש המון לנזיפות על סכנות שכמעט התממשו: "יכולת להרוג מישהו!" (אבל בנס אף אחד לא נפגע = <span dir="ltr">You <strong>could have killed</strong></span>).`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Perfect Modals - Can't have + V3 (שלילה ודאית בעבר):</strong><br>חבר אומר לכם: "ראיתי את דן היום בבוקר בקניון בתל אביב!".<br>אתם יודעים שדן טס אתמול לאוסטרליה. איך תענו לחבר באנגלית כדי להגיד שזה 'בלתי אפשרי הגיונית'?`,
        options: ["<span dir=\"ltr\">You can't have seen him! He is in Australia.</span>", "<span dir=\"ltr\">You mustn't have seen him! He is in Australia.</span>", "<span dir=\"ltr\">You shouldn't have seen him! He is in Australia.</span>", "<span dir=\"ltr\">You didn't must see him! He is in Australia.</span>"],
        correctAnswer: 0,
        hint: "ההפך מ-'בטוח שכן' (Must have) הוא *לא* Mustn't have. ההפך הנכון הוא 'לא יכול להיות ש...' (Can't have).",
        solution: `<strong>הסבר מלא (Perfect Modals - Can't have):</strong><br>זוהי מלכודת ידועה. <br>למדנו ש- <span dir="ltr">Must have + V3</span> אומר "בטוח שזה קרה".<br>מה עושים כשאנחנו בטוחים ב-100% שזה <strong>לא קרה</strong>? (הסקת מסקנה שלילית).<br>השפה האנגלית לא משתמשת כאן ב-Mustn't have. הצורה הנכונה להגיד "לא ייתכן / בלתי אפשרי" היא באמצעות <span dir="ltr"><strong>Can't have + V3</strong></span> (או Couldn't have).<br><br>לכן: <span dir="ltr">You <strong>can't have seen</strong> him</span> = "לא יכול להיות שראית אותו! (כי יש לי הוכחה שהוא בחו"ל)".`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Needn't have vs. Didn't need to (עשיתי סתם מול לא עשיתי):</strong><br>דנה אומרת: <span dir="ltr">"I <strong>needn't have brought</strong> an umbrella, because it didn't rain at all."</span><br>מה אנחנו מבינים מהמשפט על דנה?`,
        options: ["<span dir=\"ltr\">שהיא בסוף <u>כן</u> הביאה מטריה, אבל בדיעבד היא מבינה שזו הייתה פעולה מיותרת (עשתה סתם).</span>", "<span dir=\"ltr\">שהיא <u>לא</u> הביאה מטריה, כי היא ראתה בחדשות שאין צורך, ואכן לא ירד גשם.</span>", "<span dir=\"ltr\">שהיא שכחה את המטריה בבית למרות שהייתה חייבת להביא אותה.</span>", "<span dir=\"ltr\">שהיא הביאה מטריה והיא שמחה על כך כי ירד מבול.</span>"],
        correctAnswer: 0,
        hint: "Needn't have + V3 משמעותו 'לא היה צורך לעשות את זה... אבל עשיתי'.",
        solution: `<strong>הסבר מלא (Needn't have לעומת Didn't need to):</strong><br>הבדל נפלא ועדין באנגלית מתקדמת:<br><br>1. <span dir="ltr"><strong>Didn't need to (bring)</strong></span>:<br>לא היה צורך לעשות את זה, <strong>ולכן לא עשיתי את זה</strong>. (ידעתי שאין גשם, אז לא סחבתי מטריה).<br><br>2. <span dir="ltr"><strong>Needn't have + V3 (brought)</strong></span>:<br>הפעולה <strong>כבר נעשתה במציאות</strong>, אך במבט לאחור (בדיעבד), אנו מבינים שהיא הייתה מיותרת ובזבוז זמן/מאמץ.<br>"אוף, סחבתי את המטריה כל היום לחינם!" = <span dir="ltr">I <strong>needn't have brought</strong> it.</span>`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Had better (עצה עם אזהרה חמורה):</strong><br>השלימו את המשפט המביע אזהרה או עצה תקיפה:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">You ________ leave now, or you will miss the flight.</span>`,
        options: ["<span dir=\"ltr\">had better</span>", "<span dir=\"ltr\">would rather</span>", "<span dir=\"ltr\">are able to</span>", "<span dir=\"ltr\">mustn't</span>"],
        correctAnswer: 0,
        hint: "הביטוי Had better (מוטב ש...) משמש לתת עצה שאם לא תקשיב לה - משהו רע יקרה (השלכה שלילית). הפועל שאחריו תמיד נשאר נקי (V1).",
        solution: `<strong>הסבר מלא (Had Better):</strong><br>הביטוי <span dir="ltr"><strong>Had better</strong></span> (מוטב ש...) הוא צורה חזקה מאוד של Should.<br>משתמשים בו כשיש <strong>סכנה או השלכה שלילית</strong> במידה ולא תפעלו לפי העצה (כאן: תפספסו את הטיסה).<br><br><strong>חוקי דקדוק:</strong><br>- למרות המילה Had (עבר), המשמעות של הביטוי היא תמיד על <strong>ההווה או העתיד</strong>.<br>- הפועל שאחרי הביטוי יהיה תמיד <strong>ללא to</strong> וללא תוספות (Base Verb).<br>לכן: <span dir="ltr">You <strong>had better leave</strong> now.</span> (כדאי מאוד שתצא עכשיו).`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Would rather (העדפה):</strong><br>חבר מציע לכם ללכת לקולנוע, אבל אתם מעדיפים להישאר בבית. איך תגידו "אני מעדיף להישאר בבית"?`,
        options: ["<span dir=\"ltr\">I would rather stay home.</span>", "<span dir=\"ltr\">I had better stay home.</span>", "<span dir=\"ltr\">I would rather to stay home.</span>", "<span dir=\"ltr\">I should to stay home.</span>"],
        correctAnswer: 0,
        hint: "הביטוי Would rather משמעותו 'מעדיף'. בדיוק כמו Had better, הפועל אחריו מגיע נקי לחלוטין (בלי to).",
        solution: `<strong>הסבר מלא (Would Rather):</strong><br>הביטוי <span dir="ltr"><strong>Would rather</strong></span> הוא הדרך האלגנטית של האנגלים להגיד "אני מעדיף" (תחליף לפועל prefer).<br><br><strong>חוקי דקדוק:</strong><br>לאחר <span dir="ltr">Would rather</span> הפועל מגיע מיד בצורת המקור (Bare Infinitive), <strong>ללא המילה to</strong>.<br>- נכון: <span dir="ltr">I <strong>would rather stay</strong> home.</span><br>- שגוי: <span dir="ltr">I would rather <em>to</em> stay home.</span><br><br>כדי להפוך לשלילה, נוסיף not: <span dir="ltr">I would rather <strong>not go</strong> out today.</span>`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Used to vs. Be used to (הרגל עבר מול הסתגלות):</strong><br>איזה מהמשפטים הבאים פירושו "בעבר הייתי מעשן, אבל היום אני כבר לא" ?`,
        options: ["<span dir=\"ltr\">I used to smoke.</span>", "<span dir=\"ltr\">I am used to smoking.</span>", "<span dir=\"ltr\">I usually smoke.</span>", "<span dir=\"ltr\">I was used to smoke.</span>"],
        correctAnswer: 0,
        hint: "המבנה Used to + V1 מתאר הרגל שכבר מת ונעלם. המבנה Be used to + ing מתאר משהו שהתרגלתי אליו והוא לא קשה לי יותר היום.",
        solution: `<strong>הסבר מלא (המלכודת של Used to):</strong><br>חשוב מאוד להבדיל בין שני ביטויים דומים:<br><br>1. <strong>הרגל בעבר שנגמר (Used to + V1):</strong><br><span dir="ltr">"I <strong>used to smoke</strong>"</span>. משמעות: פעם הייתי מעשן המון, היום הפסקתי ואני נקי. זה הרגל שמת.<br><br>2. <strong>הסתגלות בהווה (Be used to + V-ing):</strong><br>כאשר מוסיפים פועל To Be לפני הביטוי, המשמעות משתנה ל"אני מורגל ל... / זה כבר לא קשה לי".<br><span dir="ltr">"I <strong>am used to waking</strong> up early"</span>. משמעות: אני רגיל לקום מוקדם, אני עושה את זה עכשיו וזה בסדר לי.<br>ולכן התשובה הנכונה לשאלה היא המשפט הראשון.`
    },
    {
        topic: "english", subTopic: "Modals & Semi-Modals (פועלי עזר)",
        question_text: `<strong>Shall (הצעות ועצות מנומסות):</strong><br>מתי משתמשים במילה <strong>Shall</strong> באנגלית המודרנית (כמו במשפט: <span dir="ltr">"Shall we dance?"</span>)?`,
        options: ["<span dir=\"ltr\">היא משמשת בעיקר בגופים I ו-We, כדי להציע הצעה מנומסת, לשאול לדעתו של מישהו או להתנדב לעשות משהו (כמו: 'נרקוד?', 'שאפתח את החלון?').</span>", "<span dir=\"ltr\">היא משמשת אך ורק להורות על איסור חמור מהתורה או מהחוק (You shall not kill). במצבים אחרים היא אסורה.</span>", "<span dir=\"ltr\">היא מילת עבר שמוסיפים במקום פועל ה-To be כדי לתאר פעולות שהסתיימו לפני מאה שנה.</span>", "<span dir=\"ltr\">אין לה שום שימוש באנגלית מודרנית והיא קיימת רק בספרים של שייקספיר.</span>"],
        correctAnswer: 0,
        hint: "זוכרים את הסרט 'Shall we dance?' (הנרקוד?). זוהי דרך בריטית, מנומסת ואלגנטית להציע רעיון לפעולה משותפת.",
        solution: `<strong>הסבר מלא (השימוש המודרני ב-Shall):</strong><br>בעבר, המילה <span dir="ltr"><strong>Shall</strong></span> שימשה בדיוק כמו Will לתיאור עתיד. כיום זה מיושן.<br><br>באנגלית המודרנית, ל-Shall יש תפקיד מיוחד כמודאל המשמש ל<strong>הצעות (Suggestions) והצעות עזרה (Offers)</strong>. הוא מופיע <u>רק כשאלה</u> ורק עם הגופים <strong>I ו-We</strong>:<br>- הצעה לפעולה משותפת: <span dir="ltr"><strong>Shall we</strong> go to the beach?</span> (בא לך שנלך לים?).<br>- הצעת עזרה מנומסת: <span dir="ltr"><strong>Shall I</strong> carry your bag?</span> (שאסחוב לך את התיק?).`
    },

    // ---------------------------------------------------------
    // 3. Conditionals: Zero, 1st, 2nd, 3rd
    // ---------------------------------------------------------
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Zero Conditional (תנאי אפס - עובדות):</strong><br>השלימו את המשפט הבא שמתאר עובדה מדעית נכונה תמיד:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">If you mix blue and yellow, you ________ green.</span>`,
        options: ["<span dir=\"ltr\">get</span>", "<span dir=\"ltr\">will get</span>", "<span dir=\"ltr\">would get</span>", "<span dir=\"ltr\">got</span>"],
        correctAnswer: 0,
        hint: "תנאי אפס מיועד לדברים שהם 100% נכונים תמיד (חוקי טבע, פיזיקה). לכן שני חלקי המשפט (גם התנאי וגם התוצאה) נכתבים בהווה פשוט (Present Simple).",
        solution: `<strong>הסבר מלא (Zero Conditional):</strong><br>משפטי תנאי מורכבים משני חלקים: חלק ה-If (התנאי) וחלק התוצאה (Main Clause).<br><br><strong>תנאי אפס (Zero Conditional)</strong> משמש לתיאור עובדות, חוקי טבע והרגלים קבועים. אין כאן "אולי", אלא ודאות מוחלטת.<br><strong>הנוסחה:</strong> <span dir="ltr">If + Present Simple, Present Simple</span>.<br><br>מכיוון שהחלק הראשון הוא בהווה פשוט (<span dir="ltr">If you <strong>mix</strong></span>), גם התוצאה חייבת להישאר בהווה פשוט: <span dir="ltr">you <strong>get</strong></span>.`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>First Conditional (תנאי ראשון - מציאותי לעתיד):</strong><br>השלימו את משפט התנאי הבא המתאר מצב הגיוני ואפשרי מחר:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">If she studies hard for the test, she ________.</span>`,
        options: ["<span dir=\"ltr\">will pass</span>", "<span dir=\"ltr\">passes</span>", "<span dir=\"ltr\">would pass</span>", "<span dir=\"ltr\">passed</span>"],
        correctAnswer: 0,
        hint: "בתנאי ראשון אנחנו מדברים על משהו שיש לו סיכוי גבוה לקרות בעתיד. החוק: חלק התנאי בהווה, והתוצאה בעתיד עם Will.",
        solution: `<strong>הסבר מלא (First Conditional):</strong><br><strong>תנאי ראשון</strong> משמש לתיאור סיטואציה מציאותית והגיונית לעתיד הקרוב. (אם יקרה א', סביר מאוד שיקרה ב').<br><br><strong>הנוסחה:</strong> <span dir="ltr">If + Present Simple, <strong>Will + V1</strong></span>.<br><br>- התנאי (בהווה): <span dir="ltr">If she <strong>studies</strong> hard</span>.<br>- התוצאה (בעתיד): <span dir="ltr">she <strong>will pass</strong></span>.<br>*שימו לב לחוק הברזל: המילה Will <u>לעולם לא</u> תופיע בתוך החצי של ה-If! היא תמיד בחצי של התוצאה.*`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>The Keyword "Unless" (אלא אם כן):</strong><br>המילה Unless מתפקדת כתנאי שלילי. איזה מהמשפטים הבאים זהה במשמעותו למשפט:<br><span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">"If you don't hurry, you will miss the train."</span>`,
        options: ["<span dir=\"ltr\">Unless you hurry, you will miss the train.</span>", "<span dir=\"ltr\">Unless you don't hurry, you will miss the train.</span>", "<span dir=\"ltr\">If you unless hurry, you will miss the train.</span>", "<span dir=\"ltr\">Unless you will hurry, you miss the train.</span>"],
        correctAnswer: 0,
        hint: "Unless אומר בעצם 'If not'. לכן, כשאנחנו משתמשים ב-Unless, אנחנו מבטלים את ה-'don't' ומשאירים את הפועל חיובי.",
        solution: `<strong>הסבר מלא (משמעות ושימוש ב-Unless):</strong><br>המילה <span dir="ltr"><strong>Unless</strong></span> היא מילה נרדפת ל-<span dir="ltr"><strong>If... not</strong></span> (אלא אם כן / אם לא).<br><br>היא מכילה בתוכה כבר את משמעות השלילה! לכן, אסור לשים אחריה מילת שלילה נוספת (כמו don't), אחרת ניצור שלילה כפולה (Double Negative) שהיא שגיאה דקדוקית.<br><br>- <span dir="ltr"><strong>If you don't hurry</strong></span> (אם לא תמהר)<br>מוחלף ב:<br>- <span dir="ltr"><strong>Unless you hurry</strong></span> (אלא אם כן תמהר).`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Second Conditional (תנאי שני - היפותטי / דמיוני):</strong><br>בחרו את התבנית הנכונה לתיאור חלום שאינו מציאותי כרגע:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">If I ________ a million dollars, I ________ a big mansion.</span>`,
        options: ["<span dir=\"ltr\">won / would buy</span>", "<span dir=\"ltr\">win / will buy</span>", "<span dir=\"ltr\">win / would buy</span>", "<span dir=\"ltr\">won / will buy</span>"],
        correctAnswer: 0,
        hint: "כדי לסמן לקורא שזהו רק 'חלום באספמיה' ולא תוכנית אמיתית, האנגלית לוקחת את כל המשפט צעד אחד אחורה בזמן. הווה הופך לעבר, ו-Will הופך ל-Would.",
        solution: `<strong>הסבר מלא (Second Conditional):</strong><br><strong>תנאי שני</strong> משמש לתיאור מצבים דמיוניים, בלתי סבירים או היפותטיים בהווה ובעתיד (לו הייתי רוטשילד).<br><br><strong>הנוסחה להרחקת המציאות (צעד אחד אחורה בזמן):</strong><br><span dir="ltr">If + <strong>Past Simple (V2)</strong>, <strong>Would + V1</strong></span>.<br><br>- התנאי הדמיוני בעבר: <span dir="ltr">If I <strong>won</strong> a million dollars</span> (אם הייתי זוכה).<br>- התוצאה הדמיונית: <span dir="ltr">I <strong>would buy</strong></span> (הייתי קונה).<br>(התשובה <span dir="ltr">win / will buy</span> מתארת תנאי ראשון - שבו יש לי סיכוי אמיתי וגבוה לזכות מחר בבוקר).`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>The "Were" Exception (חריג תנאי שני למתן עצה):</strong><br>חבר שואל אותך מה לעשות, ואתה רוצה לתת לו עצה: "במקומך (אם הייתי אתה), הייתי מתנצל".<br>איזה מהמשפטים הבאים הוא התקני והרשמי ביותר באנגלית?`,
        options: ["<span dir=\"ltr\">If I were you, I would apologize.</span>", "<span dir=\"ltr\">If I was you, I will apologize.</span>", "<span dir=\"ltr\">If I am you, I apologize.</span>", "<span dir=\"ltr\">If I were you, I will apologize.</span>"],
        correctAnswer: 0,
        hint: "במשפטי תנאי דמיוניים (תנאי שני), פועל ה-To be לעולם אינו מקבל את הצורה Was, גם לא עבור המילה I. הכל הופך ל-Were כדי לסמן שמדובר בדמיון.",
        solution: `<strong>הסבר מלא (חריג דקדוקי - Subjunctive Mood):</strong><br>זהו אחד הכללים היפים והקלאסיים בשפה האנגלית.<br>כשלמדנו עבר פשוט, למדנו שהמילה <span dir="ltr"><strong>I</strong></span> מקבלת <span dir="ltr"><strong>was</strong></span>.<br><br><strong>אבל!</strong> כשאנו במשפט תנאי דמיוני (תנאי שני), אנו משתמשים בצורה מיוחדת שמסמנת שהמשפט לא הגיוני במציאות (הרי אני לעולם לא אהיה אתה פיזית).<br>לכן, עבור <u>כל הגופים</u> (I, He, She, It) הפועל הופך ל-<span dir="ltr"><strong>Were</strong></span>!<br>- נכון ורשמי: <span dir="ltr">If I <strong>were</strong> you...</span><br>- <span dir="ltr">would apologize</span> זו התוצאה הדמיונית.`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Third Conditional (תנאי שלישי - חרטה על העבר):</strong><br>דן נהג מהר מדי ועשה תאונה. כעת הוא מתחרט: "אם הייתי נוהג בזהירות, לא הייתי עושה תאונה".<br>כיצד ינוסח המשפט הזה בתנאי שלישי (Third Conditional)?`,
        options: ["<span dir=\"ltr\">If he had driven carefully, he wouldn't have crashed.</span>", "<span dir=\"ltr\">If he drove carefully, he wouldn't crash.</span>", "<span dir=\"ltr\">If he drives carefully, he won't crash.</span>", "<span dir=\"ltr\">If he had drove carefully, he wouldn't crash.</span>"],
        correctAnswer: 0,
        hint: "תנאי שלישי עוסק בעבר מת! משהו שכבר קרה ואי אפשר לשנות. הנוסחה הקשוחה היא: If + Past Perfect, then Would have + V3.",
        solution: `<strong>הסבר מלא (Third Conditional):</strong><br><strong>תנאי שלישי</strong> הוא הרמה הגבוהה ביותר של משפטי תנאי. הוא עוסק ב<strong>חרטה או דמיון על העבר</strong>. משהו שכבר הסתיים ואי אפשר להחזיר את הגלגל לאחור.<br><br>כדי להתרחק עוד יותר מהמציאות (כי העבר כבר קרה), אנחנו הולכים ל"עבר של העבר" (Past Perfect):<br><strong>הנוסחה:</strong> <span dir="ltr">If + <strong>had + V3</strong>, Subject + <strong>would have + V3</strong></span>.<br><br>- חלק התנאי: <span dir="ltr">If he <strong>had driven</strong></span> (אם הוא היה נוהג אז).<br>- חלק התוצאה: <span dir="ltr">he <strong>wouldn't have crashed</strong></span> (הוא לא היה מתנגש אז).`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Identifying the Conditional Type (זיהוי סוג התנאי מתוך ההקשר):</strong><br>קראו את המשפט: <span dir="ltr">"If you heat water to 100 degrees, it boils."</span><br>איזה סוג של משפט תנאי זה, ומה משמעותו?`,
        options: ["<span dir=\"ltr\">תנאי אפס (Zero Conditional). הוא מתאר עובדה פיזיקלית או מדעית שתמיד מתרחשת ב-100% מהמקרים כשמתקיים התנאי.</span>", "<span dir=\"ltr\">תנאי ראשון (First Conditional). הוא מתאר משהו שיקרה מחר בבוקר בלבד.</span>", "<span dir=\"ltr\">תנאי שני (Second Conditional). הוא מתאר עולם דמיוני שבו מים יכולים לרתוח.</span>", "<span dir=\"ltr\">זהו אינו משפט תנאי כלל מכיוון שחסרה בו המילה Will.</span>"],
        correctAnswer: 0,
        hint: "הווה פשוט (heat) + הווה פשוט (boils) = עובדה טבעית נצחית.",
        solution: `<strong>הסבר מלא (משמעות תנאי אפס):</strong><br>זיהוי משפטי התנאי תלוי בסיטואציה.<br>כאשר התוצאה היא <strong>בלתי נמנעת והיא עובדת טבע</strong> (מים רותחים ב-100 מעלות, קרח נמס בשמש), אנו לא משתמשים ב-Will (שמעיד על עתיד אפשרי), אלא בשני פעלים בהווה פשוט.<br><span dir="ltr">If + V1, V1</span> &rarr; זהו מזהה מובהק של <strong>Zero Conditional</strong>.`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Punctuation in Conditionals (חוקי פיסוק ופסיקים):</strong><br>איזה מהמשפטים הבאים מפוסק <strong>נכון</strong> על פי חוקי התחביר של משפטי תנאי?`,
        options: ["<span dir=\"ltr\">If it rains tomorrow, we will stay at home.</span>", "<span dir=\"ltr\">We will stay at home, if it rains tomorrow.</span>", "<span dir=\"ltr\">If it rains tomorrow we will stay at home. (ללא פסיק)</span>", "<span dir=\"ltr\">If, it rains tomorrow we will stay at home.</span>"],
        correctAnswer: 0,
        hint: "כשהמשפט מתחיל במילה If (אם), חייבים לשים פסיק כדי להפריד בין התנאי לתוצאה. כשהמשפט מתחיל בתוצאה, המילה if משמשת כדבק (מילת חיבור) ואין צורך בפסיק.",
        solution: `<strong>הסבר מלא (פסיקים במשפטי If):</strong><br>יש חוק פיסוק קשיח שחובה ליישם בחיבורים בבגרות (Writing):<br><br>1. <strong>כשה-If בתחילת המשפט:</strong> חלק התנאי הוא פסקת משנה (Dependent clause) ולכן <u>חובה לשים פסיק (Comma)</u> בסופו לפני שמציגים את התוצאה.<br><span dir="ltr">&rarr; <strong>If</strong> it rains tomorrow<strong>,</strong> we will stay at home.</span><br><br>2. <strong>כשה-If באמצע המשפט:</strong> הוא מתפקד כמילת חיבור בין התוצאה לתנאי, ולכן <u>אסור לשים פסיק</u>.<br><span dir="ltr">&rarr; We will stay at home <strong>if</strong> it rains tomorrow.</span> (לכן תשובה 2 שגויה).`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Advanced: Third Conditional Inversion (היפוך תחבירי מתקדם):</strong><br>ברמה של 5 יח"ל, ניתן לכתוב תנאי שלישי בצורה "אלגנטית וספרותית" יותר <strong>ללא המילה If</strong>. <br>איזה מהמשפטים הבאים זהה במשמעותו למשפט: <span dir="ltr">"If I had known the truth, I would have stopped him."</span> ?`,
        options: ["<span dir=\"ltr\">Had I known the truth, I would have stopped him.</span>", "<span dir=\"ltr\">Did I know the truth, I would have stopped him.</span>", "<span dir=\"ltr\">Have I known the truth, I would have stopped him.</span>", "<span dir=\"ltr\">Knowing the truth, I would stopped him.</span>"],
        correctAnswer: 0,
        hint: "באנגלית גבוהה, אפשר להשמיט את המילה If, ובתמורה לעשות 'היפוך' (Inversion) של פועל העזר Had למקום הראשון במשפט, כמו בשאלה.",
        solution: `<strong>הסבר מלא (Inversion in Third Conditional):</strong><br>זוהי אחת הצורות המרשימות ביותר לשימוש בחיבור הבגרות (מבטיח העלאת ציון על עושר לשוני!).<br><br>במקום לכתוב את המבנה הרגיל: <span dir="ltr"><strong>If</strong> I <strong>had</strong> known...</span><br>אנו מוחקים את המילה <span dir="ltr">If</span>, ולוקחים את פועל העזר <span dir="ltr"><strong>Had</strong></span> אל תחילת המשפט (כמו בשאלה, אך זו אינה שאלה אלא משפט רגיל לחלוטין).<br><br>מתקבל: <span dir="ltr"><strong>Had I known</strong> the truth, I would have stopped him.</span><br>(תרגום: "לו ידעתי את האמת..."). הצורה הזו קיימת בעיקר בתנאי שלישי ובתנאי שני עם הפועל Were.`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Modal Alternatives in Conditionals (שימוש במודאלים שונים):</strong><br>במשפטי תנאי (ראשון, שני, ושלישי) אנו לא חייבים להשתמש תמיד רק ב-Will או Would בתוצאה. ניתן להשתמש במודאלים אחרים כדי להביע משמעות שונה מעט.<br>מה משמעות המשפט: <span dir="ltr">"If you finish your homework, you <strong>can</strong> go out."</span>?`,
        options: ["<span dir=\"ltr\">התוצאה (can) מבטאת 'רשות' או 'יכולת' שתינתן בעתיד, במקום 'וודאות' (will) שזה יקרה. התנאי הראשון עדיין נשמר: הווה פשוט &rarr; מודאל (can).</span>", "<span dir=\"ltr\">זוהי שגיאה דקדוקית. תנאי ראשון חייב לכלול אך ורק את המילה Will.</span>", "<span dir=\"ltr\">המשפט מתאר חרטה על העבר (כמו תנאי שלישי), ולכן המילה can משמשת פה כקיצור של could have.</span>", "<span dir=\"ltr\">המילה can הופכת את המשפט לתנאי אפס (עובדת טבע מדעית).</span>"],
        correctAnswer: 0,
        hint: "המילה can פירושה 'יכול / מורשה'. 'אם תסיים, אתה מורשה לצאת'. זה הגיוני וחוקי לחלוטין בתנאי ראשון.",
        solution: `<strong>הסבר מלא (תחליפי Will/Would):</strong><br>הנוסחאות שלמדנו הן הבסיס, אבל השפה גמישה:<br>- <strong>בתנאי ראשון:</strong> במקום <span dir="ltr">Will</span> (ודאות), אפשר להשתמש ב-<span dir="ltr"><strong>Can</strong></span> (רשות/יכולת), <span dir="ltr"><strong>May</strong></span> (אפשרות), או <span dir="ltr"><strong>Must</strong></span> (חובה). <br>למשל: <span dir="ltr">If you feel sick, you <strong>must</strong> see a doctor.</span><br><br>- <strong>בתנאי שני:</strong> במקום <span dir="ltr">Would</span>, אפשר להשתמש ב-<span dir="ltr"><strong>Could</strong></span> או <span dir="ltr"><strong>Might</strong></span>.<br>למשל: <span dir="ltr">If I had wings, I <strong>could</strong> fly.</span> (יכולתי לעוף).`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Second Conditional (Future Improbability):</strong><br>חברתך רוצה לטוס לחלל בעשור הקרוב. אתה אומר לה משפט המבטא שזה אפשרי תיאורטית, אך הסיכוי לכך קלוש מאוד (היפותטי).<br>איזה מהמשפטים יתאים לכוונתך?`,
        options: ["<span dir=\"ltr\">If you went to space, you would see the entire earth. (תנאי שני - מביע סבירות נמוכה מאוד).</span>", "<span dir=\"ltr\">If you go to space, you will see the entire earth. (תנאי ראשון - מביע שזה סביר מאוד והגיוני שזה יקרה).</span>", "<span dir=\"ltr\">If you had gone to space, you would have seen the earth. (תנאי שלישי - עבר מת).</span>", "<span dir=\"ltr\">If you go to space, you see the earth. (תנאי אפס - מדע).</span>"],
        correctAnswer: 0,
        hint: "תנאי שני לא מדבר רק על 'דמיונות לחלוטין' כמו להיות צמח. הוא גם מדבר על דברים בעתיד שהסיכוי שלהם קלוש (כמו לזכות בלוטו או לטוס לחלל).",
        solution: `<strong>הסבר מלא (ההבדל בין תנאי ראשון לשני בעתיד):</strong><br>תלמידים מתקשים להבדיל מתי להשתמש ב-First ומתי ב-Second כשמדובר בעתיד. הסוד הוא <strong>הערכת הסיכוי</strong> של הדובר!<br><br>- <strong>First Conditional:</strong> <span dir="ltr">If I study, I will pass.</span> (הדובר מאמין שיש סיכוי גבוה וריאלי שהוא ילמד ויעבור. זה פשוט ופרקטי).<br>- <strong>Second Conditional:</strong> <span dir="ltr">If I won the lottery, I would be rich.</span> (לזכות בלוטו זה אפשרי טכנית בעתיד, אבל הדובר יודע שהסיכוי קלוש ושואף לאפס. לכן הוא משתמש ב-<span dir="ltr">V2 + Would</span> כדי "להרחיק" את זה מהמציאות).<br>טיסה לחלל כיום היא עדיין חלום קלוש, לכן תשובה 1 מתאימה ביותר.`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Mixed Sentences (Identify the Correct Form):</strong><br>איזה מהמשפטים הבאים מכיל שגיאת דקדוק חמורה האסורה במשפטי תנאי?`,
        options: ["<span dir=\"ltr\">If I would have money, I will buy a car.</span>", "<span dir=\"ltr\">If she speaks softly, the baby doesn't wake up.</span>", "<span dir=\"ltr\">If they invited me, I would definitely go.</span>", "<span dir=\"ltr\">If he had asked me, I would have helped him.</span>"],
        correctAnswer: 0,
        hint: "זה כלל הברזל החשוב ביותר: מילות העתיד (Will, Would) לעולם, אבל לעולם, לא יופיעו בחצי המשפט שמתחיל במילה If.",
        solution: `<strong>הסבר מלא (השגיאה הנפוצה ביותר בישראל):</strong><br>המשפט <span dir="ltr" style="text-decoration:line-through">If I <strong>would have</strong> money</span> הוא תרגום שגוי מארץ השגיאות של "אם <u>היה לי</u> כסף".<br><br><strong>חוק החומה הסינית:</strong><br>בחצי המשפט שבו נמצאת המילה <span dir="ltr"><strong>If</strong></span> (או Unless, When) - <strong>אסור בשום אופן להשתמש ב-Will או Would!</strong><br><br>התיקון הנכון ל"אם היה לי כסף" (תנאי שני) הוא לקחת את הפועל (have) לעבר פשוט:<br><span dir="ltr">If I <strong>had</strong> money, I <strong>would buy</strong> a car.</span>`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Unless in Real Contexts:</strong><br>השלימו את המשפט באופן הגיוני:<br><span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">You won't get a good grade ________ you study hard.</span>`,
        options: ["<span dir=\"ltr\">unless (אלא אם כן)</span>", "<span dir=\"ltr\">if (אם)</span>", "<span dir=\"ltr\">when (כאשר)</span>", "<span dir=\"ltr\">because (בגלל ש)</span>"],
        correctAnswer: 0,
        hint: "המשפט אומר 'לא תקבל ציון טוב ___ תלמד קשה'. מה ההיגיון? 'אלא אם כן' תלמד קשה.",
        solution: `<strong>הסבר מלא (היגיון של Unless):</strong><br>כדי לפתור שאלות עם <span dir="ltr">unless</span>, תמיד כדאי לתרגם אותן בראש ל-<span dir="ltr"><strong>if not</strong></span>.<br><br>בואו נבדוק:<br>"You won't get a good grade <strong>if you don't</strong> study hard".<br>(לא תקבל ציון טוב אם לא תלמד קשה). המשפט הגיוני ומעולה!<br>המילה <span dir="ltr"><strong>unless</strong></span> מחליפה את החלק של <span dir="ltr">if...not</span> בצורה אלגנטית: לא תקבל ציון טוב <u>אלא אם כן</u> תלמד קשה.`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Third Conditional (Understanding the Outcome):</strong><br>קראו את משפט התנאי השלישי: <span dir="ltr">"If the doctor had arrived sooner, the patient would have survived."</span><br>מה קרה במציאות?`,
        options: ["<span dir=\"ltr\">הרופא הגיע מאוחר מדי, והפציינט לא שרד (מת). המשפט מביע צער על העבר.</span>", "<span dir=\"ltr\">הרופא הגיע מוקדם, והפציינט שרד.</span>", "<span dir=\"ltr\">הרופא עומד להגיע מחר, ולכן יש סיכוי שהפציינט ישרוד.</span>", "<span dir=\"ltr\">הפציינט שרד ללא שום קשר לזמן ההגעה של הרופא.</span>"],
        correctAnswer: 0,
        hint: "תנאי שלישי הוא תמיד 'תמונת מראה' של המציאות. אם המשפט בתנאי חיובי (אם הוא היה מגיע...), סימן שבמציאות זה היה שלילי (הוא לא הגיע).",
        solution: `<strong>הסבר מלא (פענוח המציאות מתוך התנאי השלישי):</strong><br>התנאי השלישי הוא כלי ספרותי עוצמתי. הוא מתאר מציאות <strong>הפוכה</strong> ממה שקרה בפועל.<br><br>1. המשפט אומר: <span dir="ltr">"If the doctor <strong>had arrived</strong> sooner"</span> (חיובי - אילו היה מגיע). מכאן מסיקים את המציאות ההפוכה: <strong>הוא לא הגיע מוקדם.</strong><br>2. המשפט אומר: <span dir="ltr">"he <strong>would have survived</strong>"</span> (חיובי - היה שורד). מכאן מסיקים את המציאות ההפוכה: <strong>הוא לא שרד.</strong><br>מסקנה: משפטי תנאי שלישי תמיד בוכים על חלב שנשפך.`
    },
    {
        topic: "english", subTopic: "Conditionals: Zero, 1st, 2nd, 3rd (משפטי תנאי)",
        question_text: `<strong>Future Result without 'Will' (Imperative - ציווי):</strong><br>איזה חלק שני (Main Clause) ישלים נכונה את המשפט הבא הכולל פקודה/ציווי?<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">If you see John today, ________ him to call me.</span>`,
        options: ["<span dir=\"ltr\">tell</span>", "<span dir=\"ltr\">you will tell</span>", "<span dir=\"ltr\">would tell</span>", "<span dir=\"ltr\">telling</span>"],
        correctAnswer: 0,
        hint: "כשאנחנו מבקשים או מצווים על מישהו לעשות משהו מיד כשיתקיים תנאי ('תגיד לו', 'תתקשר אליי', 'תפתח את הדלת'), אנחנו משתמשים בפועל ציווי רגיל ללא Will.",
        solution: `<strong>הסבר מלא (First Conditional with Imperative):</strong><br>ואריאציה נפוצה ושימושית מאוד ביומיום לתנאי הראשון!<br>לא תמיד התוצאה היא הבטחה לעתיד (will). לפעמים התוצאה היא <strong>ציווי או בקשה (Imperative)</strong>.<br><br>בפעלים של ציווי ("סגור את הדלת", "תגיד לו", "תביא לי"), הפועל עומד לבדו בתחילת המשפט ללא נושא וללא will.<br>לכן התשובה הנכונה היא פשוט ציווי: <span dir="ltr"><strong>tell</strong> him to call me.</span> (תגיד לו להתקשר אליי).`
    },

    // ---------------------------------------------------------
    // 4. Passive Voice
    // ---------------------------------------------------------
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>The Concept of Passive Voice (מהות הסביל):</strong><br>מתי ובאיזה מצב נעדיף להשתמש במשפט בצורת סביל (Passive) ולא בפעיל (Active)?`,
        options: ["<span dir=\"ltr\">כאשר האובייקט (מי שספג את הפעולה) או הפעולה עצמה חשובים יותר ממי שביצע אותה, או כאשר איננו יודעים כלל מי ביצע את הפעולה (למשל: 'הבנק נשדד הלילה').</span>", "<span dir=\"ltr\">כאשר אנחנו רוצים להדגיש את הפעילות הנמרצת של הגיבור בסיפור שלנו.</span>", "<span dir=\"ltr\">כאשר המשפט מתאר אך ורק פעולות שהתרחשו בעבר הרחוק מאוד (לפני המאה ה-19).</span>", "<span dir=\"ltr\">אין סיבה לבחור. סביל ופעיל הם מילים נרדפות שמשמשות לאותו הדבר בדיוק להעשרת השפה.</span>"],
        correctAnswer: 0,
        hint: "במשפט פעיל (דן שבר את החלון) דן הוא המלך. במשפט סביל (החלון נשבר), החלון המסכן הוא המלך. למי אכפת מי שבר אותו? החלון שבור!",
        solution: `<strong>הסבר מלא (מבוא לסביל - Passive Voice):</strong><br>במשפט רגיל (Active), ה<strong>נושא</strong> עושה את הפעולה. (למשל: <span dir="ltr">Shakespeare wrote Hamlet</span>).<br><br>במשפט סביל (Passive), אנו "הופכים" את המשפט כי האובייקט חשוב לנו יותר מהמבצע. מי שמקבל את אור הזרקורים הוא <strong>מקבל הפעולה</strong>. (למשל: <span dir="ltr">Hamlet was written by Shakespeare</span>).<br><br>זה שימושי במיוחד בחדשות, כשלא יודעים מי הפושע: <span dir="ltr">"The bank <strong>was robbed</strong>"</span> (הבנק נשדד). המוקד הוא על הבנק, ולא על "מישהו לא ידוע שדד את הבנק".`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Present Simple Passive (סביל בהווה):</strong><br>כיצד ינוסח נכון המשפט "מנקים את המשרד כל יום" (סביל בהווה פשוט)?`,
        options: ["<span dir=\"ltr\">The office is cleaned every day.</span>", "<span dir=\"ltr\">The office cleans every day.</span>", "<span dir=\"ltr\">The office was cleaned every day.</span>", "<span dir=\"ltr\">The office has cleaned every day.</span>"],
        correctAnswer: 0,
        hint: "הנוסחה המלכותית של הסביל היא: פועל To Be (בזמן המתאים) + פועל בטור שלישי (V3). המשרד הוא יחיד (is).",
        solution: `<strong>הסבר מלא (Present Simple Passive):</strong><br>כל משפט סביל באנגלית חייב להכיל את הנוסחה: <span dir="ltr"><strong>To Be + V3</strong></span>.<br>כדי לדעת באיזה זמן להשתמש, נסתכל על מילת הרמז.<br><br>המילה <span dir="ltr"><strong>every day</strong></span> מעידה על הווה פשוט.<br>1. נמצא את פועל ה-To be להווה שעובד עם המשרד (It): <span dir="ltr"><strong>is</strong></span>.<br>2. נהפוך את הפועל clean לטור שלישי (V3): <span dir="ltr"><strong>cleaned</strong></span>.<br>התוצאה: <span dir="ltr">The office <strong>is cleaned</strong>.</span><br>(תשובה 2 שגויה קומית, כי 'המשרד מנקה כל יום' - למשרד אין ידיים לנקות בעצמו).`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Past Simple Passive (סביל בעבר):</strong><br>השלימו את המשפט בעבר סביל:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The letters ________ to the customers yesterday.</span>`,
        options: ["<span dir=\"ltr\">were sent</span>", "<span dir=\"ltr\">was sent</span>", "<span dir=\"ltr\">sent</span>", "<span dir=\"ltr\">are sent</span>"],
        correctAnswer: 0,
        hint: "המכתבים (letters) הם ברבים. הזמן הוא אתמול (yesterday) - עבר. פועל ה-To be לעבר ברבים הוא were.",
        solution: `<strong>הסבר מלא (Past Simple Passive):</strong><br>1. מילת הרמז: <span dir="ltr"><strong>yesterday</strong></span> (אתמול &rarr; עבר פשוט).<br>2. הנושא המקבל: <span dir="ltr"><strong>The letters</strong></span> (המכתבים &rarr; רבים / They).<br>3. פועל ה-To be שמתאים לרבים בעבר: <span dir="ltr"><strong>were</strong></span>.<br>4. פועל ב-V3: הפועל לשלוח (send) הופך ל-<span dir="ltr"><strong>sent</strong></span>.<br>המשפט המלא: <span dir="ltr">The letters <strong>were sent</strong>.</span> (המכתבים נשלחו).`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Future Simple Passive (סביל בעתיד):</strong><br>כיצד תכתבו: "הגשר החדש ייבנה בשנה הבאה"?`,
        options: ["<span dir=\"ltr\">The new bridge will be built next year.</span>", "<span dir=\"ltr\">The new bridge will built next year.</span>", "<span dir=\"ltr\">The new bridge is built next year.</span>", "<span dir=\"ltr\">The new bridge will build next year.</span>"],
        correctAnswer: 0,
        hint: "הסביל בעתיד תמיד מתבסס על השילוב של Will + be + V3.",
        solution: `<strong>הסבר מלא (Future Passive):</strong><br>נזכיר את נוסחת הסביל האוניברסלית: <span dir="ltr"><strong>To Be + V3</strong></span>.<br>איך אומרים את הפועל "To Be" בעתיד פשוט? אומרים <span dir="ltr"><strong>will be</strong></span>.<br><br>לכן, כדי ליצור משפט סביל בעתיד:<br>- שמים <span dir="ltr"><strong>will be</strong></span>.<br>- ואז מוסיפים את הפועל ב-V3 (הפועל build הופך ל-<span dir="ltr"><strong>built</strong></span>).<br>המשפט המושלם: <span dir="ltr">The new bridge <strong>will be built</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Modals in Passive Voice (סביל עם פועלי עזר):</strong><br>השלימו את כלל הברזל (חייבים לעקוב אחרי החוקים!):<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The rules must ________ by all students.</span>`,
        options: ["<span dir=\"ltr\">be followed</span>", "<span dir=\"ltr\">been followed</span>", "<span dir=\"ltr\">follow</span>", "<span dir=\"ltr\">followed</span>"],
        correctAnswer: 0,
        hint: "מודאלים (can, must, should) דורשים שאחריהם יבוא פועל נקי. הפועל הנקי של משפחת To be הוא פשוט המילה 'be'. ואז מוסיפים V3.",
        solution: `<strong>הסבר מלא (Passive Modals):</strong><br>התבנית לסביל עם פועלי עזר (Modals) קלה מאוד לזכירה וזהה לחלוטין לעתיד עם Will!<br><br><strong>הנוסחה:</strong> <span dir="ltr">Modal + <strong>be</strong> + <strong>V3</strong></span>.<br><br>- מודאל: <span dir="ltr">must</span> (חייבים)<br>- פועל עזר: <span dir="ltr"><strong>be</strong></span><br>- פועל מרכזי: <span dir="ltr"><strong>followed</strong></span> (לציית להם/לעקוב אחריהם).<br>התשובה: <span dir="ltr">The rules must <strong>be followed</strong>.</span> (חובה לציית לחוקים).`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Present Perfect Passive (סביל בהווה מושלם):</strong><br>איזה מהמשפטים הבאים מתאר את הפעולה: "המכונית תוקנה (ועכשיו היא מוכנה)"?`,
        options: ["<span dir=\"ltr\">The car has been repaired.</span>", "<span dir=\"ltr\">The car has repaired.</span>", "<span dir=\"ltr\">The car had been repaired.</span>", "<span dir=\"ltr\">The car have been repaired.</span>"],
        correctAnswer: 0,
        hint: "הווה מושלם רגיל זה have/has + V3. כדי להפוך אותו לסביל, חייבים להשחיל באמצע את ה-To be בצורה של V3, שהיא המילה been.",
        solution: `<strong>הסבר מלא (Present Perfect Passive):</strong><br>זהו מבנה חשוב מאוד בכתיבה אקדמית ורשמית.<br><br>- משפט פעיל: <span dir="ltr">The mechanic <strong>has repaired</strong> the car.</span> (המוסכניק תיקן).<br>- משפט סביל: "המכונית <u>תוקנה</u>". כדי ליצור אותו אנו זקוקים ל-To be ב-V3.<br><span dir="ltr">Has/Have + <strong>been</strong> + <strong>V3</strong></span>.<br><br>מכיוון שהמכונית (It) היא יחיד, היא מקבלת has. <br>המשפט הנכון: <span dir="ltr">The car <strong>has been repaired</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Present Progressive Passive (סביל בהווה ממושך - Being):</strong><br>איך נאמר "קניון חדש נבנה (ברגע זה ממש) בעיר שלנו"?`,
        options: ["<span dir=\"ltr\">A new shopping mall is being built right now.</span>", "<span dir=\"ltr\">A new shopping mall is built right now.</span>", "<span dir=\"ltr\">A new shopping mall has been built right now.</span>", "<span dir=\"ltr\">A new shopping mall is building right now.</span>"],
        correctAnswer: 0,
        hint: "אם משהו נבנה *עכשיו* (בפעולה מתמשכת), חייבים לשמר את סיומת ה-ing! בסביל, אנחנו 'מדביקים' את ה-ing לפועל העזר To be, ויוצרים את המפלצת 'being'.",
        solution: `<strong>הסבר מלא (Present Progressive Passive):</strong><br>זוהי דרגת המאסטר של הסביל (לרמת 5 יח"ל).<br>כשאנו רוצים לתאר פעולת סביל שמתרחשת תוך כדי תנועה (עכשיו), אנו לא יכולים לשים את ה-ing על הפועל הראשי (כי הוא חייב להיות V3!).<br><br><strong>הפתרון: המילה Being.</strong><br><span dir="ltr">Am/Is/Are + <strong>being</strong> + <strong>V3</strong></span>.<br>קניון (יחיד) = <span dir="ltr">is</span>. מוסיפים <span dir="ltr">being</span> כדי להראות התמשכות. מוסיפים <span dir="ltr">built</span> (V3).<br>התוצאה: <span dir="ltr">A new mall <strong>is being built</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Past Progressive Passive (סביל בעבר ממושך):</strong><br>השלימו את המשפט בעבר ממושך סביל:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The house ________ when we arrived, so we couldn't enter.</span>`,
        options: ["<span dir=\"ltr\">was being painted</span>", "<span dir=\"ltr\">was painted</span>", "<span dir=\"ltr\">had been painted</span>", "<span dir=\"ltr\">painted</span>"],
        correctAnswer: 0,
        hint: "כשהגענו, צביעת הבית הייתה ב'אמצע התהליך' (בעבר). התהליך הזה הוא סביל (הבית נצבע ע\"י פועלים). לכן צריכים was/were + being + V3.",
        solution: `<strong>הסבר מלא (Past Progressive Passive):</strong><br>בדיוק כמו בהווה ממושך, רק שהפעם הפעולה קרתה בעבר במקביל לפעולה אחרת (כשבאנו, ראינו שהבית <u>בדיוק נצבע</u>).<br><br><strong>הנוסחה:</strong> <span dir="ltr">Was/Were + <strong>being</strong> + <strong>V3</strong></span>.<br>הבית (יחיד) מקבל was. מוסיפים את ה-being (שמסמל את הממושך), ואז V3 (painted).<br>המשפט: <span dir="ltr">The house <strong>was being painted</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Transformation (הפיכה מפעיל לסביל):</strong><br>הפכו את המשפט הפעיל הבא למשפט סביל מדויק:<br><span dir="ltr" style="font-size: 1.2em; font-weight: bold; color: #1e40af;">Active: "The chef cooked a delicious meal."</span>`,
        options: ["<span dir=\"ltr\">Passive: A delicious meal was cooked by the chef.</span>", "<span dir=\"ltr\">Passive: A delicious meal is cooked by the chef.</span>", "<span dir=\"ltr\">Passive: A delicious meal cooked by the chef.</span>", "<span dir=\"ltr\">Passive: The chef was cooked by a delicious meal.</span>"],
        correctAnswer: 0,
        hint: "זיהוי זמנים: הפועל 'cooked' הוא בעבר פשוט (V2). לכן, גם הסביל חייב להיות בעבר פשוט (was/were + V3). מושא המשפט (הארוחה) הופך להיות הנושא החדש.",
        solution: `<strong>הסבר מלא (שלבי ההמרה מ-Active ל-Passive):</strong><br>1. <strong>זיהוי האובייקט (המושא):</strong> מה השף בישל? <span dir="ltr">"A delicious meal"</span> (ארוחה טעימה). ניקח אותה ונעמיד אותה בראש המשפט החדש.<br>2. <strong>זיהוי הזמן:</strong> הפועל <span dir="ltr">cooked</span> הוא בעבר פשוט. לכן, ה-To be שלנו יהיה בעבר (was כי ארוחה זה יחיד).<br>3. <strong>הפועל הראשי:</strong> הפועל cook הופך ל-V3 (שהוא במקרה גם cooked).<br>4. <strong>מבצע הפעולה (By):</strong> <span dir="ltr">by the chef</span>.<br><br>התוצאה המושלמת: <span dir="ltr"><strong>A delicious meal was cooked by the chef.</strong></span>`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>The Use of 'By' (ציון מבצע הפעולה בסביל):</strong><br>מדוע, בהרבה מאוד משפטי סביל, אנו בוחרים <u>להשמיט (לא לכתוב)</u> את הצירוף עם המילה "by" (למשל 'by the police' או 'by someone')?`,
        options: ["<span dir=\"ltr\">אנו משמיטים אותו כשהמבצע לא ידוע לנו ('My car was stolen'), כשהמבצע מובן מאליו ('He was arrested' - מן הסתם ע\"י המשטרה), או כשהוא פשוט לא חשוב לעיקר המסר. אנו נשתמש ב-by רק כשהמבצע חשוב או מפתיע ('Harry Potter was written by Shakespeare').</span>", "<span dir=\"ltr\">מכיוון שהמילה 'by' אסורה לשימוש בדקדוק הבריטי המודרני, והיא מוחלפת תמיד במילה 'from'.</span>", "<span dir=\"ltr\">כי הוספת 'by' הופכת את המשפט למשפט פעיל (Active) ומבטלת את הסביל.</span>", "<span dir=\"ltr\">אנו משמיטים אותו כדי לחסוך בדיו ובמקום כתיבה.</span>"],
        correctAnswer: 0,
        hint: "סביל נועד לתת פוקוס לפעולה או לקורבן. אם המבצע ברור מאליו (הדוור הביא מכתב) או אנונימי (מישהו פרץ), אין טעם לבזבז עליו מילים.",
        solution: `<strong>הסבר מלא (תפקידו של ה-Agent בסביל):</strong><br>זהו קסמו של המשפט הסביל. הוא מאפשר לנו <strong>להעלים</strong> את עושה הפעולה באלגנטיות.<br><br>נכתוב: <span dir="ltr">"The window was broken"</span> ולא נוסיף <span dir="ltr">"by someone"</span> כי זה מיותר ולא תורם מידע.<br>נכתוב: <span dir="ltr">"The thief was arrested"</span> ולא נוסיף <span dir="ltr">"by the police"</span> כי רק המשטרה עוצרת (מובן מאליו).<br><br><strong>מתי כן נוסיף by?</strong><br>כשמבצע הפעולה הוא חיוני למשמעות ההיסטורית או העלילתית (למשל: <span dir="ltr">The Mona Lisa was painted <strong>by Leonardo da Vinci</strong></span>).`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Verbs with Two Objects (פעלים עם שני מושאים):</strong><br>המשפט הפעיל הוא: <span dir="ltr">"They gave Mary a prize."</span> (נתנו למרי פרס - מרי היא מושא 1, ופרס הוא מושא 2).<br>אילו משני המשפטים הבאים הם הפיכה חוקית ותקינה לסביל?`,
        options: ["<span dir=\"ltr\">שתי האפשרויות חוקיות! אפשר להגיד 'Mary was given a prize' (הדגש על מרי) ואפשר להגיד 'A prize was given to Mary' (הדגש על הפרס).</span>", "<span dir=\"ltr\">רק 'A prize was given to Mary' היא חוקית. בני אדם (Mary) לעולם לא יכולים להיות נושא של משפט סביל.</span>", "<span dir=\"ltr\">רק 'Mary was given a prize' היא חוקית כי האדם תמיד חשוב מהחפץ.</span>", "<span dir=\"ltr\">אף אחת אינה חוקית. אי אפשר להפוך משפט עם שני מושאים לסביל.</span>"],
        correctAnswer: 0,
        hint: "באנגלית (בניגוד לעברית), אפשר לקחת 'בן אדם' שנתנו לו משהו, ולהפוך אותו לנושא הסביל: 'מרי ניתן לה פרס'.",
        solution: `<strong>הסבר מלא (Two Objects in Passive):</strong><br>כאשר פועל (כמו give, offer, teach, send) מקבל אליו שני דברים (למי נתנו, ומה נתנו לו), האנגלית גמישה ומאפשרת <strong>שתי דרכים שונות לגמרי ליצירת סביל</strong>!<br><br>1. <strong>הפיכת האדם לנושא (נפוץ מאוד באנגלית!):</strong> <span dir="ltr"><strong>Mary</strong> was given a prize.</span> (התרגום: "למרי ניתן פרס").<br>2. <strong>הפיכת החפץ לנושא:</strong> <span dir="ltr"><strong>A prize</strong> was given to Mary.</span> (התרגום: "פרס ניתן למרי").<br><br>שתי הדרכים מצוינות ומשמשות בספרות ובעיתונות בהתאם למה שהכותב רוצה להדגיש.`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Past Perfect Passive (סביל בעבר מושלם):</strong><br>איזה מהמשפטים הבאים מתאר פעולה סבילה שקרתה 'לפני פעולה אחרת בעבר'?<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"When we arrived at the library, we saw that the book ________."</span>`,
        options: ["<span dir=\"ltr\">had been returned</span>", "<span dir=\"ltr\">has been returned</span>", "<span dir=\"ltr\">was returned</span>", "<span dir=\"ltr\">was being returned</span>"],
        correctAnswer: 0,
        hint: "אנחנו בעבר של העבר. פעולת ההחזרה של הספר קרתה *לפני* שהגענו. ולכן זה חייב להיות Past Perfect. המבנה הסביל שלו הוא had + been + V3.",
        solution: `<strong>הסבר מלא (Past Perfect Passive):</strong><br>מכיוון שהגענו לספרייה בעבר פשוט (<span dir="ltr">we arrived</span>), פעולת החזרת הספר שקרתה <strong>עוד קודם לכן</strong> חייבת להיות מנוסחת בעבר מושלם.<br><br><strong>נוסחת הסביל בעבר מושלם:</strong><br><span dir="ltr">Subject + <strong>had</strong> + <strong>been</strong> + <strong>V3</strong></span>.<br>הספר לא החזיר את עצמו (הוא סביל), ולכן הוא הוחזר: <span dir="ltr">the book <strong>had been returned</strong></span>.<br>(תשובה 3, was returned, הייתה מתאימה אם הספר הוחזר בדיוק באותו יום ללא רצף כרונולוגי חותך).`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Advanced: Modals in the Past Passive (סביל של מודאל מושלם):</strong><br>איך נאמר "העבודה <u>הייתה צריכה להיעשות</u> אתמול" (חרטה על פעולה סבילה שלא קרתה)?`,
        options: ["<span dir=\"ltr\">The work should have been done yesterday.</span>", "<span dir=\"ltr\">The work should be done yesterday.</span>", "<span dir=\"ltr\">The work should have done yesterday.</span>", "<span dir=\"ltr\">The work had to be doing yesterday.</span>"],
        correctAnswer: 0,
        hint: "יש לנו כאן שילוב מפלצתי (רמה 5 יח'ל): 1. מודאל בעבר (should have). 2. סביל (been + V3). מחברים אותם יחד לסנדוויץ' משולש.",
        solution: `<strong>הסבר מלא (הבוס של מבני הסביל - Perfect Modals Passive):</strong><br>זהו כנראה המבנה הדקדוקי הארוך ביותר באנגלית, והוא משדר שליטה מוחלטת בשפה.<br><br><strong>בניית המפלצת:</strong><br>- אנו רוצים להביע עצה לעבר (חרטה): <span dir="ltr"><strong>Should have</strong></span>.<br>- אנו רוצים שהמשפט יהיה סביל (כי העבודה לא עושה את עצמה): צריכים <span dir="ltr"><strong>To Be + V3</strong></span>.<br>- ה-To Be מקבל את ה-V3 (כי הוא בא אחרי have) והופך ל-<strong>been</strong>.<br>- והפועל do הופך ל-<strong>done</strong>.<br><br>החיבור המלא: <span dir="ltr">The work <strong>should have been done</strong></span>.`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Form Recognition (זיהוי סביל בטקסט):</strong><br>איזה מבין ארבעת המשפטים הבאים הוא המשפט <strong>הסביל</strong> היחיד?`,
        options: ["<span dir=\"ltr\">The missing painting was eventually found by a little boy.</span>", "<span dir=\"ltr\">A little boy eventually found the missing painting.</span>", "<span dir=\"ltr\">The little boy was looking for the missing painting.</span>", "<span dir=\"ltr\">The missing painting has an interesting history.</span>"],
        correctAnswer: 0,
        hint: "חפשו את נוסחת הקסם: פועל מסוג To be (כמו was) + פועל בטור השלישי (V3 - כמו found). משפטים אחרים אולי מכילים פועל To Be, אבל אין אחריהם V3.",
        solution: `<strong>הסבר מלא (כיצד לזהות סביל):</strong><br>הכלל כדי לזהות סביל בטקסט הוא לא רק למצוא את המילה "by" (לפעמים היא חסרה). הכלל הוא למצוא את המבנה התחבירי: <strong>To Be + V3</strong> (או To be + ed).<br><br>- תשובה 1: <span dir="ltr">was</span> (To Be) + <span dir="ltr">found</span> (V3). ציור לא יכול "למצוא" שום דבר, הוא "נמצא" על ידי מישהו אחר. <strong>זהו המשפט הסביל!</strong><br>- תשובה 2: הילד "מצא" (found). משפט פעיל לחלוטין (Active).<br>- תשובה 3: <span dir="ltr">was looking</span> (was + ing). זהו עבר ממושך פעיל. הילד ביצע חיפוש.`
    },
    {
        topic: "english", subTopic: "Passive Voice (סביל: Present, Past, Future, Modals)",
        question_text: `<strong>Contextual Translation (תרגום נכון לעברית):</strong><br>איזה מהמשפטים הבאים הוא התרגום המדויק ל"<strong>מכוניות מיוצרות ביפן</strong>"?`,
        options: ["<span dir=\"ltr\">Cars are manufactured in Japan.</span>", "<span dir=\"ltr\">Cars were manufactured in Japan.</span>", "<span dir=\"ltr\">Cars manufacture in Japan.</span>", "<span dir=\"ltr\">Japan manufactures cars.</span>"],
        correctAnswer: 0,
        hint: "המשפט מתאר עובדה כללית שנכונה היום (מכוניות מיוצרות). זו פעולה של שגרה. לכן נשתמש בהווה פשוט סביל (are + V3).",
        solution: `<strong>הסבר מלא (בחירת זמן בסביל):</strong><br>כמו במשפטים פעילים, גם במשפטים סבילים חובה לשמור על ה"זמן" (Tense) הנכון של הסיטואציה.<br><br>- "מיוצרות" זו עובדת טבע/שגרה. לכן הזמן הנדרש הוא <strong>הווה פשוט (Present Simple)</strong>.<br>- המילה Cars היא רבים, ולכן פועל ה-To be להווה פשוט ברבים הוא <strong>are</strong>.<br>- הפועל manufacture (לייצר) הופך ל-V3: <strong>manufactured</strong>.<br><br>החיבור המדויק: <span dir="ltr">Cars <strong>are manufactured</strong> in Japan.</span><br>(תשובה 2 אומרת "מכוניות יוצרו ביפן" - עבר, ותשובה 4 אומרת "יפן מייצרת מכוניות" - שזה משפט פעיל).`
    },

    // ---------------------------------------------------------
    // 5. Reported Speech
    // ---------------------------------------------------------
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Basic Tense Shift (הזזת זמנים לאחור):</strong><br>המשפט המקורי בדיבור ישיר: <span dir="ltr">Dan: "I <u>like</u> apples."</span><br>כיצד המשפט ינוסח נכון בדיבור עקיף (Reported Speech)?`,
        options: ["<span dir=\"ltr\">Dan said that he liked apples.</span>", "<span dir=\"ltr\">Dan said that he likes apples.</span>", "<span dir=\"ltr\">Dan said that I liked apples.</span>", "<span dir=\"ltr\">Dan said that he had liked apples.</span>"],
        correctAnswer: 0,
        hint: "חוק הברזל של דיבור עקיף: כשאנחנו מדווחים על משהו שנאמר בעבר ('הוא אמר ש...'), כל הפעלים הולכים צעד אחד אחורה בזמן. הווה פשוט הופך לעבר פשוט.",
        solution: `<strong>הסבר מלא (The Backshift Rule):</strong><br>דיבור עקיף (Reported Speech) נועד לדווח לאדם שלישי על מה שמישהו אחר אמר לנו בעבר.<br><br><strong>חוק הזזת הזמנים:</strong> מכיוון שפעולת הדיבור התרחשה בעבר (He said), כל המשפט נשאב לעבר.<br>- הווה פשוט (<span dir="ltr">like</span>) הופך ל- <strong>עבר פשוט</strong> (<span dir="ltr"><strong>liked</strong></span>).<br>- כינוי הגוף <span dir="ltr">I</span> הופך ל-<span dir="ltr"><strong>he</strong></span> (כי אנחנו מדברים על דן).<br><br>לכן התשובה הנכונה היא: <span dir="ltr">Dan said that he <strong>liked</strong> apples.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Present Progressive to Past Progressive:</strong><br>המירו את המשפט הבא לדיבור עקיף:<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">Maya: "I <u>am watching</u> TV."</span> &rarr; Maya said that...`,
        options: ["<span dir=\"ltr\">she was watching TV.</span>", "<span dir=\"ltr\">she is watching TV.</span>", "<span dir=\"ltr\">I was watching TV.</span>", "<span dir=\"ltr\">she had watched TV.</span>"],
        correctAnswer: 0,
        hint: "הווה ממושך (am/is/are + ing) הופך לעבר ממושך (was/were + ing).",
        solution: `<strong>הסבר מלא (מממושך הווה לממושך עבר):</strong><br>נפעיל שוב את חוק הצעד אחורה בזמן:<br>- המשפט המקורי נאמר ב-Present Progressive (<span dir="ltr">am watching</span>).<br>- הצעד אחורה ייקח אותנו ל-<strong>Past Progressive</strong>.<br>- מכיוון שהנושא החדש הוא <span dir="ltr">she</span> (מאיה), נשתמש ב-<span dir="ltr">was</span>.<br><br>המשפט המלא: <span dir="ltr">Maya said that <strong>she was watching</strong> TV.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Past Simple to Past Perfect (העבר של העבר):</strong><br>מה קורה כשהמשפט המקורי כבר נאמר בעבר? <br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">Tom: "I <u>lost</u> my keys."</span> &rarr; Tom said that...`,
        options: ["<span dir=\"ltr\">he had lost his keys.</span>", "<span dir=\"ltr\">he lost his keys.</span>", "<span dir=\"ltr\">he has lost his keys.</span>", "<span dir=\"ltr\">he was losing his keys.</span>"],
        correctAnswer: 0,
        hint: "אם המשפט המקורי נאמר ב'עבר פשוט', הצעד אחורה בזמן זורק אותנו ל'עבר של העבר' - שזה ה-Past Perfect (had + V3).",
        solution: `<strong>הסבר מלא (מעבר פשוט לעבר מושלם):</strong><br>זוהי המרה קלאסית בבגרויות!<br>הפועל <span dir="ltr">lost</span> (איבדתי) הוא כבר בעבר (V2).<br>החוק דורש שניקח את המשפט עוד צעד אחד אחורה בציר הזמן. לאן אפשר ללכת מהעבר?<br>רק ל-<strong>Past Perfect (עבר מושלם)</strong>, שהנוסחה שלו היא <span dir="ltr"><strong>had + V3</strong></span>.<br><br>כמו כן, <span dir="ltr">my keys</span> (המפתחות שלי) הופכים ל-<span dir="ltr"><strong>his keys</strong></span> (המפתחות שלו).<br>התוצאה: <span dir="ltr">Tom said that he <strong>had lost</strong> his keys.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Future Shift (Will to Would):</strong><br>המירו את הבטחתה של שרה לדיבור עקיף:<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">Sara: "I <u>will</u> call you."</span> &rarr; Sara promised that...`,
        options: ["<span dir=\"ltr\">she would call me.</span>", "<span dir=\"ltr\">she will call me.</span>", "<span dir=\"ltr\">she would called me.</span>", "<span dir=\"ltr\">she calls me.</span>"],
        correctAnswer: 0,
        hint: "המילה Will (עתיד) הופכת תמיד למקבילת העבר שלה - Would. הפועל שאחרי Would נשאר נקי לחלוטין (V1).",
        solution: `<strong>הסבר מלא (שינוי מודאלים):</strong><br>בדיבור עקיף, אנחנו משנים גם את פועלי העזר (Modals) לצורת העבר שלהם:<br>- <span dir="ltr"><strong>Will</strong> &rarr; <strong>Would</strong></span><br>- <span dir="ltr">Can &rarr; Could</span><br>- <span dir="ltr">May &rarr; Might</span><br><br>כמו כן, שימו לב לכינויי הגוף: היא אמרה ל-י' ("you"), ולכן בדו"ח שלי אני אגיד: "היא הבטיחה <strong>לי</strong> (me)".<br>המשפט המדויק: <span dir="ltr">Sara promised that she <strong>would call</strong> me.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Time and Place Expressions (שינוי ביטויי זמן ומקום):</strong><br>בדיבור עקיף, אנחנו לא משנים רק זמנים, אלא גם "מרחיקים" מילות זמן ומקום. למה תהפוך המילה <span dir="ltr"><strong>Tomorrow</strong></span> (מחר)?`,
        options: ["<span dir=\"ltr\">The next day / The following day</span>", "<span dir=\"ltr\">Yesterday</span>", "<span dir=\"ltr\">That day</span>", "<span dir=\"ltr\">The day before</span>"],
        correctAnswer: 0,
        hint: "אם מישהו אמר 'אני אבוא מחר' לפני שנתיים, ה'מחר' הזה כבר עבר. לכן אי אפשר להגיד 'tomorrow'. חייבים להגיד 'ביום שאחרי'.",
        solution: `<strong>הסבר מלא (Time Expressions Shift):</strong><br>כשאנו מדווחים על משהו שנאמר בעבר, נקודת ההתייחסות לזמן משתנה.<br>המרות חובה לבגרות:<br>- <span dir="ltr">Now (עכשיו) &rarr; <strong>Then</strong> (אז)</span><br>- <span dir="ltr">Here (כאן) &rarr; <strong>There</strong> (שם)</span><br>- <span dir="ltr">Today (היום) &rarr; <strong>That day</strong> (אותו יום)</span><br>- <span dir="ltr">Tomorrow (מחר) &rarr; <strong>The next day / The following day</strong></span><br>- <span dir="ltr">Yesterday (אתמול) &rarr; <strong>The day before / The previous day</strong></span>.`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Applying Time Expression Shifts:</strong><br>בחרו בהמרה הנכונה למשפט הבא:<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">He said: "I bought this car <u>yesterday</u>."</span>`,
        options: ["<span dir=\"ltr\">He said that he had bought that car the day before.</span>", "<span dir=\"ltr\">He said that he bought this car yesterday.</span>", "<span dir=\"ltr\">He said that he had bought this car yesterday.</span>", "<span dir=\"ltr\">He said that he bought that car the day before.</span>"],
        correctAnswer: 0,
        hint: "יש כאן 3 שינויים במכה! 1. bought (V2) הופך ל-had bought. 2. this (הזה) מתרחק ל-that (ההוא). 3. yesterday הופך ל-the day before.",
        solution: `<strong>הסבר מלא (שילוש השינויים):</strong><br>במשפטים ברמה גבוהה נדרש לבצע מספר המרות במקביל:<br>1. <strong>Tense:</strong> העבר הפשוט (<span dir="ltr">bought</span>) הופך לעבר מושלם (<span dir="ltr"><strong>had bought</strong></span>).<br>2. <strong>Demonstrative (רמז):</strong> המילה "הזה" (<span dir="ltr">this</span>) הופכת ל"ההוא" (<span dir="ltr"><strong>that</strong></span>).<br>3. <strong>Time (זמן):</strong> "אתמול" (<span dir="ltr">yesterday</span>) הופך ל"יום לפני כן" (<span dir="ltr"><strong>the day before</strong></span>).<br><br>המשפט המנצח והיחיד שדייק בהכל: <span dir="ltr">He said that he <strong>had bought that</strong> car <strong>the day before</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Reported Yes/No Questions (שאלות כן/לא בעקיף):</strong><br>איך נדווח על השאלה שהיא שאלה בעצמה?<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">She asked me: "<u>Do you like</u> coffee?"</span>`,
        options: ["<span dir=\"ltr\">She asked me <strong>if</strong> I <strong>liked</strong> coffee.</span>", "<span dir=\"ltr\">She asked me do I like coffee.</span>", "<span dir=\"ltr\">She asked me if did I like coffee.</span>", "<span dir=\"ltr\">She asked me if I like coffee.</span>"],
        correctAnswer: 0,
        hint: "כשמדווחים על שאלת 'האם' (כן/לא), חייבים להשתמש במילת חיבור (If או Whether). כמו כן, 'שואבים' את פועל העזר (Do) החוצה ומחזירים את המשפט לסדר רגיל (נושא+פועל), וכמובן מורידים זמנים לאחור.",
        solution: `<strong>הסבר מלא (דיווח על שאלות - Reported Questions):</strong><br>זהו הנושא המכשיל ביותר בדיבור עקיף!<br><br><strong>חוקי המרת שאלות:</strong><br>1. <strong>מילת החיבור:</strong> שאלות כן/לא (המתחילות ב-Do, Are, Is) מחוברות בעזרת המילה <span dir="ltr"><strong>if</strong></span> (האם) או <span dir="ltr"><strong>whether</strong></span>.<br>2. <strong>ביטול התחביר של השאלה:</strong> בדיבור עקיף זו <u>כבר לא שאלה!</u> זהו משפט חיווי רגיל. לכן, מעיפים את ה-Do לפח, ומחזירים את הסדר ל-[נושא + פועל].<br>3. <strong>הזזת זמנים:</strong> like (הווה) הופך ל-<strong>liked</strong> (עבר).<br><br>התוצאה: <span dir="ltr">She asked me <strong>if</strong> I <strong>liked</strong> coffee.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Reported Wh- Questions (שאלות פתוחות בעקיף):</strong><br>איזה מהמשפטים הבאים מתאר נכון המרה של שאלת Wh?<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">He asked: "<u>Where do you live?</u>"</span>`,
        options: ["<span dir=\"ltr\">He asked me where I lived. (ביטול ה-Do, סדר רגיל של נושא-פועל בעבר).</span>", "<span dir=\"ltr\">He asked me where did I live. (שמירת מבנה השאלה - שגוי).</span>", "<span dir=\"ltr\">He asked me if where I lived. (כפילות מילות חיבור - שגוי).</span>", "<span dir=\"ltr\">He asked me where I live. (חוסר הזזת זמנים - שגוי).</span>"],
        correctAnswer: 0,
        hint: "כשמדווחים על שאלת WH, מילת ה-WH עצמה משמשת כ'דבק' המחבר את המשפט. לא מוסיפים If. וזכרו: המשפט חוזר לסדר רגיל בלי Do/Did.",
        solution: `<strong>הסבר מלא (המרת שאלות פתוחות):</strong><br>- <strong>הדבק:</strong> משתמשים במילת השאלה המקורית (<span dir="ltr">Where</span>).<br>- <strong>היפוך חזרה:</strong> מוחקים את פועל העזר הזר (<span dir="ltr">do</span>), שכן זו כבר לא שאלה ישירה ואין סימן שאלה בסוף.<br>- <strong>זמנים:</strong> <span dir="ltr">live</span> (הווה) הופך ל-<span dir="ltr"><strong>lived</strong></span> (עבר).<br><br>המשפט התקין: <span dir="ltr">He asked me <strong>where</strong> I <strong>lived</strong>.</span> (הוא שאל אותי היכן אני גר).`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Orders and Commands (פקודות וציוויים):</strong><br>המורה צעק על התלמיד: <span dir="ltr">"<u>Open</u> your book!"</span><br>כיצד ינוסח המשפט בדיבור עקיף (כאשר אין זמנים בפועל הציווי)?`,
        options: ["<span dir=\"ltr\">The teacher told him <strong>to open</strong> his book.</span>", "<span dir=\"ltr\">The teacher told him open his book.</span>", "<span dir=\"ltr\">The teacher told him that he opens his book.</span>", "<span dir=\"ltr\">The teacher told him to opened his book.</span>"],
        correctAnswer: 0,
        hint: "במשפטי ציווי (או בקשות), אין 'הזזת זמנים' מסובכת. פשוט שמים את המילה 'to' (כדי ל...) לפני הפועל במקור.",
        solution: `<strong>הסבר מלא (דיווח על ציווי - Imperatives):</strong><br>כאשר המשפט המקורי הוא פקודה או בקשה (שמתחילה ישר בפועל: Open, Stop, Please sit), המנגנון קל מאוד!<br><br>משתמשים בפועל כמו <span dir="ltr">told</span> (הורה/אמר ל...) או <span dir="ltr">asked</span> (ביקש), ומוסיפים <strong>to + V1 (Infinitive)</strong>.<br>- מקור: "Open!"<br>- עקיף: <span dir="ltr">told him <strong>to open</strong></span>.<br><br>(ושימו לב שהמילה your הפכה ל-his, כי הספר שלו).`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Negative Commands (פקודות שליליות):</strong><br>אמא אמרה לי: <span dir="ltr">"<u>Don't touch</u> the hot stove!"</span><br>איך אדווח לחבר על מה שאמא אמרה לי?`,
        options: ["<span dir=\"ltr\">My mom warned me <strong>not to touch</strong> the hot stove.</span>", "<span dir=\"ltr\">My mom warned me to not touch the hot stove.</span>", "<span dir=\"ltr\">My mom warned me don't touch the hot stove.</span>", "<span dir=\"ltr\">My mom warned me didn't touch the hot stove.</span>"],
        correctAnswer: 0,
        hint: "כדי לשלול ציווי, המילה not חייבת לבוא *לפני* המילה to. (not to do something).",
        solution: `<strong>הסבר מלא (שלילת אינפיניטיב):</strong><br>כפי שלמדנו, פקודה הופכת ל- <span dir="ltr">to + V1</span>.<br>אבל מה קורה כשהפקודה היא לא לעשות משהו? (<span dir="ltr">Don't...</span>)<br><br>השלילה התחבירית הנכונה באנגלית לאינפיניטיב (שם פועל) היא להציב את ה-<span dir="ltr"><strong>not</strong></span> <u>לפני</u> ה-<span dir="ltr"><strong>to</strong></span>.<br>שגוי: <span dir="ltr">to not touch</span> (Split infinitive - נחשב כטעות בבגרויות).<br>נכון: <span dir="ltr"><strong>not to touch</strong></span>.<br>המשפט: <span dir="ltr">My mom warned me <strong>not to touch</strong>...</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Exceptions - Universal Truths (חריגים: עובדות נצחיות):</strong><br>המורה למדעים אמר: <span dir="ltr">"Water <u>boils</u> at 100 degrees."</span><br>אם נמיר זאת לדיבור עקיף, מה תהיה התוצאה התקנית ביותר?`,
        options: ["<span dir=\"ltr\">The teacher said that water <strong>boils</strong> at 100 degrees. (הפועל נשאר בהווה פשוט כי זו עובדה מדעית שתמיד נכונה, גם היום).</span>", "<span dir=\"ltr\">The teacher said that water boiled at 100 degrees. (חובה להעביר לעבר בגלל חוקי הדיבור העקיף).</span>", "<span dir=\"ltr\">The teacher said that water had boiled at 100 degrees.</span>", "<span dir=\"ltr\">The teacher told water to boil at 100 degrees.</span>"],
        correctAnswer: 0,
        hint: "חוקים נועדו שישברו אותם. אם נגיד 'מים רתחו ב-100 מעלות' (בעבר), זה נשמע כאילו היום הם כבר לא רותחים בטמפרטורה הזו. עובדות מדעיות מנצחות את חוק הזזת הזמנים.",
        solution: `<strong>הסבר מלא (Universal Truth Exception):</strong><br>זהו ה"פטור" היחיד מחוק ה-Backshift (הזזה לעבר).<br><br>אם המשפט המקורי שדווח מתאר <strong>אמת אוניברסלית, חוק פיזיקלי או מצב שהוא עדיין עובדתי כיום</strong>, אין היגיון לשנות אותו לעבר (כי אם נעביר לעבר, נרמז שהמצב השתנה).<br><br>לכן: <span dir="ltr">The teacher said that water <strong>boils</strong>...</span> נשאר כפי שהוא בהווה פשוט! (התשובה <span dir="ltr">boiled</span> תחשב לרוב כטעות סמנטית).`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Reporting Verbs (פועלי דיווח מתקדמים):</strong><br>דן אמר: <span dir="ltr">"Let's go to the beach!"</span><br>איזה מפועלי הדיווח הבאים מתאר בצורה המדויקת ביותר את כוונתו?`,
        options: ["<span dir=\"ltr\">Dan <strong>suggested</strong> going to the beach.</span>", "<span dir=\"ltr\">Dan <strong>ordered</strong> to go to the beach.</span>", "<span dir=\"ltr\">Dan <strong>refused</strong> to go to the beach.</span>", "<span dir=\"ltr\">Dan <strong>apologized</strong> for going to the beach.</span>"],
        correctAnswer: 0,
        hint: "המילה 'Let's' (בואו נ...) היא הצעה (Suggestion). פועל הדיווח הטוב ביותר יחליף את כל המילים במילה 'suggested'.",
        solution: `<strong>הסבר מלא (Reporting Verbs):</strong><br>במקום להשתמש תמיד במילה המשעממת "said" (אמר), אנגלית גבוהה משתמשת בפועלי דיווח שמעבירים את <strong>כוונת</strong> הדובר.<br><br>- <span dir="ltr">Let's / Why don't we</span> = הצעות.<br>הפועל המתאים הוא <span dir="ltr"><strong>suggest</strong></span> (להציע).<br><br>*חוק דקדוקי מיוחד: הפועל suggest לוקח אחריו לרוב <strong>פועל עם ing (Gerund)</strong>, ולא פועל עם to.<br>לכן: <span dir="ltr">Dan <strong>suggested going</strong> to the beach.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Modals: Must vs Had to:</strong><br>המירו את המשפט הבא לדיבור עקיף:<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">The boss said: "You <u>must</u> finish the report today."</span>`,
        options: ["<span dir=\"ltr\">The boss said that I <strong>had to</strong> finish the report that day.</span>", "<span dir=\"ltr\">The boss said that I <strong>musted</strong> finish the report that day.</span>", "<span dir=\"ltr\">The boss said that I <strong>must to</strong> finish the report today.</span>", "<span dir=\"ltr\">The boss said that I <strong>would</strong> finish the report that day.</span>"],
        correctAnswer: 0,
        hint: "למודאל Must אין צורת עבר טבעית (אין מילה כזו musted). לכן, כשחייבים להפוך אותו לעבר, 'שואלים' את עזרתו של הפועל Had to (הייתי חייב).",
        solution: `<strong>הסבר מלא (המרת Must לעבר):</strong><br>פועל העזר <span dir="ltr"><strong>Must</strong></span> מיוחד בכך שאין לו צורת עבר אמיתית משלו בחוקי המודאלים הבסיסיים.<br><br>כשאנו מעבירים משפט עם Must (חובה) לדיבור עקיף (עבר), אנו נשתמש בתחליף שלו בעבר: <span dir="ltr"><strong>had to</strong></span> (היה צריך / נאלץ).<br>ובנוסף, המילה <span dir="ltr">today</span> משתנה ל-<span dir="ltr"><strong>that day</strong></span> (אותו היום).<br><br>התוצאה: <span dir="ltr">The boss said that I <strong>had to</strong> finish it <strong>that day</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Past Perfect remains Past Perfect:</strong><br>החברה אמרה לי: <span dir="ltr">"I <u>had</u> already <u>eaten</u> before you arrived."</span><br>כיצד ייראה הדיבור העקיף של משפט זה?`,
        options: ["<span dir=\"ltr\">She told me that she <strong>had already eaten</strong> before I arrived. (נשאר ללא שינוי, כי לא ניתן ללכת אחורה מהעבר המושלם).</span>", "<span dir=\"ltr\">She told me that she <strong>has already eaten</strong> before I arrived.</span>", "<span dir=\"ltr\">She told me that she <strong>already ate</strong> before I arrived.</span>", "<span dir=\"ltr\">She told me that she <strong>would already eat</strong> before I arrived.</span>"],
        correctAnswer: 0,
        hint: "תזכרו את חוק הקיר האוטם: Past Perfect הוא 'העבר הכי רחוק שיש'. אי אפשר ללכת ממנו עוד אחורה. לכן, אם המשפט המקורי הוא ב-Past Perfect, הוא פשוט נשאר כך.",
        solution: `<strong>הסבר מלא (הקיר האחורי של הזמנים):</strong><br>כפי שלמדנו, דיבור עקיף דורש ללכת "צעד אחד אחורה בזמן".<br>אבל מה קורה כשהמשפט המקורי כבר נמצא בזמן הכי עתיק בשפה האנגלית - <strong>Past Perfect (had + V3)</strong>?<br><br>מכיוון שאין "עבר-של-העבר-של-העבר", אנו פשוט נתקלים בקיר. המשפט <strong>נשאר ללא שינוי זמן</strong>!<br>לכן: <span dir="ltr">She said she <strong>had already eaten</strong></span> נותר תקין ומושלם.`
    },
    {
        topic: "english", subTopic: "Reported Speech (דיבור עקיף)",
        question_text: `<strong>Pronoun Confusion (שינוי גופים לוגי):</strong><br>דני אמר לשרה: <span dir="ltr">"<u>Your</u> dog bit <u>my</u> shoe!"</span><br>הדמות שמדווחת על כך היא שרה, שמספרת לאחותה. איך שרה תגיד את זה?`,
        options: ["<span dir=\"ltr\">Dan told me that <strong>my</strong> dog had bitten <strong>his</strong> shoe.</span>", "<span dir=\"ltr\">Dan told me that <strong>your</strong> dog had bitten <strong>my</strong> shoe.</span>", "<span dir=\"ltr\">Dan told me that <strong>his</strong> dog had bitten <strong>her</strong> shoe.</span>", "<span dir=\"ltr\">Dan told me that <strong>my</strong> dog has bit <strong>his</strong> shoe.</span>"],
        correctAnswer: 0,
        hint: "דמיינו את הסצנה. דני אומר לשרה: 'הכלב *שלך* נשך את הנעל *שלי*'. כששרה מדברת, הכלב הוא 'שלה' (my), והנעל היא 'שלו' (his).",
        solution: `<strong>הסבר מלא (לוגיקה של החלפת גופים):</strong><br>שינוי הכינויים (Pronouns) אינו מתמטי אלא הגיוני-סיטואציוני.<br>צריך להיכנס לנעליים של מי ש<strong>מדבר עכשיו</strong>.<br><br>שרה היא הדוברת כעת:<br>- "Your dog" (שלך - שהופנה אל שרה) הופך ל-<span dir="ltr"><strong>my dog</strong></span> (הכלב שלי).<br>- "my shoe" (שלי - שהופנה לדני) הופך ל-<span dir="ltr"><strong>his shoe</strong></span> (הנעל שלו).<br><br>בנוסף, <span dir="ltr">bit</span> (נשך - עבר פשוט) הופך ל-<span dir="ltr"><strong>had bitten</strong></span> (עבר מושלם).<br>התוצאה: <span dir="ltr">Dan told me that <strong>my</strong> dog <strong>had bitten his</strong> shoe.</span>`
    },

    // ---------------------------------------------------------
    // 6. Relative Clauses
    // ---------------------------------------------------------
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Who vs. Which (אנשים מול דומם/חיות):</strong><br>בחרו את מילת הזיקה (Relative Pronoun) הנכונה להשלמת המשפט:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The man ________ lives next door is a doctor.</span>`,
        options: ["<span dir=\"ltr\">who (או that)</span>", "<span dir=\"ltr\">which</span>", "<span dir=\"ltr\">where</span>", "<span dir=\"ltr\">whose</span>"],
        correctAnswer: 0,
        hint: "המילה מתייחסת ל-'The man' (האיש). בני אדם מקבלים תמיד את מילת הזיקה Who.",
        solution: `<strong>הסבר מלא (Who לעומת Which):</strong><br>משפטי זיקה משמשים כדי לתת מידע נוסף על שם העצם שהוזכר בדיוק לפניהם.<br><br>- <strong>Who (אשר / ש...):</strong> מיועד אך ורק ל<strong>בני אדם</strong> (Man, girl, student, people).<br>- <strong>Which (אשר / ש...):</strong> מיועד ל<strong>חפצים דוממים או בעלי חיים</strong> (Car, book, dog).<br><br>מכיוון שאנו מתארים את <span dir="ltr"><strong>The man</strong></span> (האיש), נשתמש ב-<span dir="ltr"><strong>who</strong></span> (האיש <u>אשר</u> גר ממול...). ניתן גם להשתמש ב-<span dir="ltr">that</span> כתחליף גנרי.`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Which for Things (דוממים):</strong><br>השלימו את המשפט הבא:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I lost the book ________ you gave me.</span>`,
        options: ["<span dir=\"ltr\">which (או that)</span>", "<span dir=\"ltr\">who</span>", "<span dir=\"ltr\">whom</span>", "<span dir=\"ltr\">when</span>"],
        correctAnswer: 0,
        hint: "המילה 'book' (ספר) היא חפץ. לחפצים אנחנו קוראים באמצעות Which (או That).",
        solution: `<strong>הסבר מלא:</strong><br>המילה שאותה אנו מנסים לתאר היא <span dir="ltr"><strong>the book</strong></span> (הספר).<br>ספר הוא חפץ דומם (Thing), ולכן מילת הזיקה שלו חייבת להיות <span dir="ltr"><strong>which</strong></span>.<br><span dir="ltr">"The book <strong>which</strong> you gave me"</span> = "הספר <u>אשר/ש...</u> נתת לי".<br><br><em>*טיפ חשוב: המילה <span dir="ltr"><strong>that</strong></span> היא סוג של 'ג'וקר' באנגלית יומיומית, והיא יכולה להחליף גם את who וגם את which ברוב המשפטים.</em>`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Whose (שייכות):</strong><br>איך נאמר "הילדה <u>שאחיה</u> הוא חבר שלי"?<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The girl ________ brother is my friend is very smart.</span>`,
        options: ["<span dir=\"ltr\">whose</span>", "<span dir=\"ltr\">who's</span>", "<span dir=\"ltr\">who</span>", "<span dir=\"ltr\">which</span>"],
        correctAnswer: 0,
        hint: "כשאנו רוצים להביע שייכות (האח *של* הילדה), אנו משתמשים במילת הזיקה Whose.",
        solution: `<strong>הסבר מלא (מילת השייכות Whose):</strong><br>המילה <span dir="ltr"><strong>Whose</strong></span> (ש... שלו / אשר... שלו) יוצרת חיבור של בעלות בין המילה שלפניה למילה שאחריה.<br><br><span dir="ltr">The girl <strong>whose</strong> brother...</span> &rarr; "הילדה <u>אשר אחיה (האח שלה)</u>...".<br><br><strong>זהירות ממלכודת איות (תשובה 2):</strong><br><span dir="ltr"><strong>who's</strong></span> (עם גרש) הוא קיצור של <span dir="ltr">who is</span> (הילדה <u>שהיא</u> אח). זה לא הגיוני ויוצר משפט שגוי לחלוטין. רק <span dir="ltr">whose</span> (מילה אחת) מראה שייכות.`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Where (מקום):</strong><br>השלימו נכון את המשפט המציין מקום:<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">This is the hospital ________ I was born.</span>`,
        options: ["<span dir=\"ltr\">where</span>", "<span dir=\"ltr\">which</span>", "<span dir=\"ltr\">when</span>", "<span dir=\"ltr\">who</span>"],
        correctAnswer: 0,
        hint: "בית חולים (hospital) יכול להיות פשוט בניין (which), אבל כאן הוא משמש כ'מקום שבו קרה משהו' (שבו נולדתי). לכן Where היא המילה המדויקת.",
        solution: `<strong>הסבר מלא (Where לעומת Which בתיאור מקומות):</strong><br>- כאשר אנו מתייחסים למקום <u>בתור זירה שבה קרה אירוע</u> ("זה המקום <strong>שבו</strong> נולדתי"), חובה להשתמש ב-<span dir="ltr"><strong>where</strong></span>.<br><span dir="ltr">This is the hospital <strong>where</strong> I was born.</span><br><br>- מתי היינו משתמשים ב-Which? רק כשהיינו מתארים את הבניין עצמו כחפץ. (למשל: <span dir="ltr">This is the hospital <strong>which</strong> was built in 1990</span> - בית החולים <u>אשר</u> נבנה...).`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>When (זמן):</strong><br>איזו מילת זיקה תשלים את המשפט שעוסק בתיאור תקופת זמן?<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I will never forget the day ________ we first met.</span>`,
        options: ["<span dir=\"ltr\">when</span>", "<span dir=\"ltr\">where</span>", "<span dir=\"ltr\">which</span>", "<span dir=\"ltr\">how</span>"],
        correctAnswer: 0,
        hint: "The day (היום) הוא מונח של זמן. המילה 'שבו' בהקשר של זמן היא When.",
        solution: `<strong>הסבר מלא (מילת הזיקה לזמן - When):</strong><br>המילה <span dir="ltr"><strong>when</strong></span> (כאשר / שבו) משמשת כחיבור אחרי שמות עצם המציינים זמן (day, year, time, moment).<br><br><span dir="ltr">"the day <strong>when</strong> we first met"</span> = היום <strong>שבו</strong> נפגשנו לראשונה.<br>השימוש כאן אלגנטי וחלק. (אפשר טכנית גם להשתמש ב-that או להשמיט לגמרי, אך when היא התשובה המדויקת והקלאסית ביותר).`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Omission of the Relative Pronoun (השמטת המילה):</strong><br>איזה מהמשפטים הבאים מוכיח שניתן לעיתים קרובות <u>למחוק לגמרי (להשמיט)</u> את מילת הזיקה (which/that) מבלי לפגוע במשפט?`,
        options: ["<span dir=\"ltr\">The movie (that) I saw yesterday was great. (ניתן להשמיט, כי אחריה בא נושא חדש 'I').</span>", "<span dir=\"ltr\">The man (who) stole the car is in jail. (אסור להשמיט, כי היא מתפקדת כנושא הפועל stole).</span>", "<span dir=\"ltr\">שני המשפטים לעיל מאפשרים השמטה. תמיד מותר להשמיט.</span>", "<span dir=\"ltr\">אף משפט לא מאפשר השמטה. השמטת that היא שגיאה תחבירית חמורה.</span>"],
        correctAnswer: 0,
        hint: "חוק ההשמטה: אם מיד אחרי המילה that יש 'אדם עושה פעולה' (כמו I, You, He), מותר למחוק אותה. אם אחרי המילה that מגיע מיד פועל (כמו stole, is), אסור למחוק אותה, כי היא מחזיקה את הפועל.",
        solution: `<strong>הסבר מלא (Contact Clauses - פסקאות מגע):</strong><br>באנגלית מדוברת (וגם בכתיבה רשמית), ניתן להשמיט את <span dir="ltr">who, which, that</span> רק בתנאי שהן <strong>לא מהוות את הנושא של הפסקה החדשה!</strong><br><br><strong>כלל אצבע פשוט:</strong><br>- אם אחרי ה-that מגיע <strong>שם או כינוי גוף</strong> (I, we, the teacher), ה-that מיותר ומותר למחוק אותו! <br>&rarr; <span dir="ltr">The movie <s>that</s> <strong>I</strong> saw</span> (תקין לחלוטין ויותר זורם!).<br><br>- אם אחרי ה-who מגיע <strong>פועל</strong> (is, stole, works), ה-who משמש כ"נושא" של הפועל ואסור בתכלית האיסור למחוק אותו!<br>&rarr; <span dir="ltr">The man <s>who</s> stole</span> (שגוי, יצא 'האיש גנב' במקום 'האיש <u>ש</u>גנב').`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Non-defining Relative Clauses (פסקאות זיקה 'לא-מגדירות' + פסיקים):</strong><br>מדוע המשפט הבא מוקף בפסיקים (Commas), ומה אסור לעשות בו?<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"My mother<strong>, who is 50 years old,</strong> works as a nurse."</span>`,
        options: ["<span dir=\"ltr\">הפסיקים מסמנים שזהו 'מידע אקסטרה' (לא נחוץ להבנת זהותה של אמא שלי, כי יש לי רק אמא אחת). בפסקאות כאלו מוקפות פסיקים, אסור בשום אופן להשתמש במילה 'that' כתחליף ל-'who'.</span>", "<span dir=\"ltr\">הפסיקים הם טעות פיסוק והמשפט שגוי.</span>", "<span dir=\"ltr\">הפסיקים מעידים שזהו ציטוט ישיר שאמא שלי אמרה אתמול.</span>", "<span dir=\"ltr\">הפסיקים דורשים שימוש במילה 'which' למרות שמדובר באדם.</span>"],
        correctAnswer: 0,
        hint: "כששמים מידע בין שני פסיקים, זה כמו סוגריים. אפשר למחוק את זה והמשפט עדיין מובן ('אמא שלי אחות'). המלכודת הענקית היא שאסור להשתמש ב-that אחרי פסיק.",
        solution: `<strong>הסבר מלא (Non-defining Clauses וחוק הפסיק-That):</strong><br>משפטי זיקה מתחלקים לשניים:<br>1. <strong>Defining (מגדירים, חיוניים - ללא פסיקים):</strong> <br>"הגבר שגנב את התיק נעצר". הזיקה חיונית כדי להבין <u>איזה גבר</u>. מותר להשתמש ב-that.<br>2. <strong>Non-defining (מידע נוסף/אקסטרה - עם פסיקים):</strong> <br>"ירושלים, שהיא עיר יפה, נמצאת בישראל". אנחנו כבר יודעים מה זו ירושלים. זה רק מידע 'בונוס'.<br><br><strong>חוק הזהב לבגרויות:</strong> <u>לעולם, אבל לעולם, אל תשימו את המילה <span dir="ltr"><strong>That</strong></span> מיד אחרי פסיק!</u><br>- נכון: <span dir="ltr">My mother<strong>, who</strong> is 50<strong>,</strong></span>...<br>- שגוי: <span dir="ltr">My mother<em>, that</em> is 50,</span>...`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Applying the Non-defining Rule (יישום חוק הפסיקים על דומם):</strong><br>בחרו את התשובה הנכונה (וזכרו את חוק האיסור על That!):<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The Eiffel Tower, ________ is in Paris, is very tall.</span>`,
        options: ["<span dir=\"ltr\">which</span>", "<span dir=\"ltr\">that</span>", "<span dir=\"ltr\">who</span>", "<span dir=\"ltr\">where</span>"],
        correctAnswer: 0,
        hint: "מגדל אייפל הוא חפץ דומם. יש פסיק לפני הרווח. מה למדנו שאסור לשים אחרי פסיק?",
        solution: `<strong>הסבר מלא:</strong><br>כפי שלמדנו בשאלה הקודמת, זהו משפט שמוסיף "מידע אקסטרה" על אובייקט ספציפי ומוכר (מגדל אייפל), ולכן הוא מופרד בפסיקים.<br><br>מכיוון שזה בניין/דומם, אנו מתלבטים בין <span dir="ltr">which</span> ל-<span dir="ltr">that</span>.<br>בגלל שמופיע פסיק (,), <strong>המילה <span dir="ltr">that</span> נפסלת אוטומטית!</strong><br>לכן, המילה החוקית היחידה שנותרה לנו היא <span dir="ltr"><strong>which</strong></span>.<br>המשפט: <span dir="ltr">The Eiffel Tower, <strong>which</strong> is in Paris, is very tall.</span>`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Whom (כאשר האדם הוא מושא/מקבל הפעולה):</strong><br>זהו כלל של שפה גבוהה ורשמית. <br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"The manager to ________ I spoke was very polite."</span><br>מדוע המילה הנכונה כאן היא <strong>Whom</strong> (ולא Who)?`,
        options: ["<span dir=\"ltr\">מכיוון שהמנהל הוא המושא (Object) שעליו התבצעה הפעולה (אני זה שדיברתי אליו). כמו כן, המילה באה מיד אחרי מילת יחס (to). במקרים כאלו שפה אקדמית דורשת 'Whom'.</span>", "<span dir=\"ltr\">מכיוון שהמנהל הוא גבר. אם זו הייתה מנהלת היינו משתמשים ב-Who.</span>", "<span dir=\"ltr\">כי המילה Whom מחליפה את המילה When בטקסטים עסקיים.</span>", "<span dir=\"ltr\">זו טעות. המילה Whom אינה קיימת יותר באנגלית מודרנית ונחשבת לשגיאת כתיב.</span>"],
        correctAnswer: 0,
        hint: "Who מחליף את מילות הנושא (He/She). Whom מחליף את מילות המושא (Him/Her). אם דיברתי *אליו* (to him), אז אשתמש ב-to whom.",
        solution: `<strong>הסבר מלא (Who לעומת Whom):</strong><br>זהו האתגר הגדול למי שמכוון לאנגלית שייקספירית ולפטור באקדמיה.<br><br>- <span dir="ltr"><strong>Who</strong></span> משמש לנושא (האיש שעשה את הפעולה). מחליף He/She/They.<br>- <span dir="ltr"><strong>Whom</strong></span> משמש למושא (האיש שעשו לו את הפעולה). מחליף Him/Her/Them.<br><br><strong>טריק פשוט:</strong> כל פעם שיש <strong>מילת יחס</strong> (<span dir="ltr">to, with, for, about</span>) צמודה לפני מילת הזיקה, <u>חובה</u> להשתמש ב-<span dir="ltr">Whom</span> ולא ב-<span dir="ltr">Who</span>.<br>- <span dir="ltr">The man <strong>with whom</strong> I work</span> (האיש שעמו אני עובד).<br>- <span dir="ltr">The manager <strong>to whom</strong> I spoke</span> (המנהל שאליו דיברתי).`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Prepositions position (מיקום מילות היחס ביומיום):</strong><br>איך נאמר "הבית <u>שבו</u> אני גר" באנגלית מדוברת וטבעית (ללא where)?`,
        options: ["<span dir=\"ltr\">The house which I live in. (מילת היחס in עוברת לסוף הפסוקית).</span>", "<span dir=\"ltr\">The house in that I live. (מילת היחס נשארת, אך משתמשים ב-that).</span>", "<span dir=\"ltr\">The house which in I live.</span>", "<span dir=\"ltr\">The house I live.</span>"],
        correctAnswer: 0,
        hint: "באנגלית גבוהה מאוד אומרים 'The house in which I live'. באנגלית טבעית ונפוצה, מעיפים את ה-'in' עד לסוף המשפט.",
        solution: `<strong>הסבר מלא (זריקת מילת היחס לסוף):</strong><br>זהו כלל תחבירי יפה שמקל על הדיבור. <br><br>במקום להגיד משפט רשמי וכבד כמו:<br><span dir="ltr">"The house <strong>in which</strong> I live"</span> (הבית בו אני גר).<br><br>השפה האנגלית מעדיפה לשים את מילת הזיקה (<span dir="ltr">which/that/who</span>) כרגיל, ולהטיס את <strong>מילת היחס (in, with, about) לסוף המשפט!</strong><br>לכן התצורה התקנית והנפוצה היא:<br><span dir="ltr">The house <strong>which</strong> I live <strong>in</strong>.</span><br>או אפילו בלי which בכלל: <span dir="ltr">The house I live <strong>in</strong>.</span>`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Who's vs. Whose (שגיאות כתיב והגייה):</strong><br>בחרו את הצמד הנכון להשלמת שני המשפטים הבאים (למרות שהם נשמעים זהה):<br>1. The boy ________ playing outside is my son.<br>2. The boy ________ ball is lost is crying.`,
        options: ["<span dir=\"ltr\">who's / whose</span>", "<span dir=\"ltr\">whose / who's</span>", "<span dir=\"ltr\">who's / who's</span>", "<span dir=\"ltr\">whose / whose</span>"],
        correctAnswer: 0,
        hint: "מי מהם אומר 'אשר הוא (Who is)' ומי אומר 'אשר שלו'? 1. הילד (אשר הוא) משחק. 2. הילד (אשר הכדור שלו) נאבד.",
        solution: `<strong>הסבר מלא (Who's לעומת Whose):</strong><br>טעות מביכה אך נפוצה בכתיבה היא בלבול בין השניים שכן הם נשמעים אותו הדבר ("הוּז").<br><br>- <span dir="ltr"><strong>Who's</strong></span> = קיצור של <span dir="ltr">Who is</span>. תרגום: "אשר הוא...". לכן: <span dir="ltr">The boy <strong>who is (who's)</strong> playing</span>.<br>- <span dir="ltr"><strong>Whose</strong></span> = מילת שייכות. תרגום: "אשר ה... שלו". לכן: <span dir="ltr">The boy <strong>whose</strong> ball</span> (הילד שהכדור שלו).<br><br>לכן ההתאמה המושלמת היא: <span dir="ltr">who's / whose</span>.`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Reason (Why):</strong><br>השלימו את המשפט עם מילת הזיקה המתאימה למילה "סיבה" (reason):<br><span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I don't know the reason ________ she is so angry today.</span>`,
        options: ["<span dir=\"ltr\">why</span>", "<span dir=\"ltr\">which</span>", "<span dir=\"ltr\">what</span>", "<span dir=\"ltr\">who</span>"],
        correctAnswer: 0,
        hint: "המילה 'reason' תמיד מזמינה אחריה את מילת השאלה/זיקה שמבררת 'מדוע'.",
        solution: `<strong>הסבר מלא (The reason why):</strong><br>במשפטי זיקה, למילה <span dir="ltr">reason</span> (סיבה) יש שידוך כמעט קבוע למילה <span dir="ltr"><strong>why</strong></span> (מדוע).<br><br>כאשר אנו רוצים להגיד "הסיבה <u>שבגללה / שמדוע</u> היא עשתה את זה", אנו נאמר:<br><span dir="ltr">"The reason <strong>why</strong> she is angry..."</span><br>(מותר גם להשתמש ב-that או להשמיט לגמרי, אך why היא המילה הקלאסית ביותר כאן).`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Relative Pronoun as Subject vs. Object (זיהוי תפקיד):</strong><br>קראו את המשפט: <span dir="ltr">"The dog <strong>which</strong> bit me is crazy."</span><br>האם המילה 'which' כאן מתפקדת כ<strong>נושא (Subject)</strong> המשפט או כ<strong>מושא (Object)</strong>, והאם מותר למחוק אותה?`,
        options: ["<span dir=\"ltr\">היא ה'נושא' (כי הכלב הוא זה שעשה את פעולת הנשיכה). מכיוון שהיא נושא, אסור למחוק אותה.</span>", "<span dir=\"ltr\">היא ה'נושא', אבל למרות זאת מותר למחוק אותה.</span>", "<span dir=\"ltr\">היא ה'מושא' (הכלב ספג את הפעולה). לכן מותר למחוק אותה.</span>", "<span dir=\"ltr\">היא 'מושא', ואסור למחוק מושא.</span>"],
        correctAnswer: 0,
        hint: "תסתכלו מיד אחרי המילה which. מופיע הפועל bit (נשך). כלומר ה-which הוא זה שנשך! הוא הנושא הפעיל בסיפור.",
        solution: `<strong>הסבר מלא (זיהוי נושא מול מושא בפסקאות זיקה):</strong><br>זהו תרגיל חשוב בהבנת מבנה המשפט.<br><br>- איך נדע אם which הוא <strong>נושא</strong>? פשוט! נסתכל על המילה שבאה מיד אחריו. אם זה <u>פועל</u> (כמו <span dir="ltr">bit, is, runs</span>), הרי ש-which הוא זה שמבצע את הפעולה, ולכן הוא <strong>הנושא</strong>! במקרה כזה <strong>אסור להשמיט אותו לעולם</strong>.<br><br>- איך נדע אם הוא <strong>מושא</strong>? אם אחריו יש <u>שם של מישהו אחר</u> (למשל: <span dir="ltr">The dog which <strong>I</strong> bought</span>). במקרה כזה אני (I) הנושא, ולכן מותר למחוק את ה-which.`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>Advanced Combination (All of whom / Some of which):</strong><br>השלימו את המשפט ברמת 5 יח"ל, המשלב כמותיות בתוך משפט הזיקה:<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"I have three brothers, all of ________ are engineers."</span>`,
        options: ["<span dir=\"ltr\">whom</span>", "<span dir=\"ltr\">who</span>", "<span dir=\"ltr\">which</span>", "<span dir=\"ltr\">them</span>"],
        correctAnswer: 0,
        hint: "כמו שלמדנו, אחרי מילת יחס (כמו 'of') אנחנו חייבים להשתמש בצורה הרשמית והאובייקטיבית של המילה מי (whom) ולא מי (who).",
        solution: `<strong>הסבר מלא (ביטויים כמותיים בפסקאות זיקה):</strong><br>כשאנו רוצים להגיד "כולם מתוכם", "חלקם מתוכם", או "אף אחד מהם" לגבי אנשים שהזכרנו, נשתמש במבנה:<br><span dir="ltr"><strong>Quantifier + of + Whom (לאנשים) / Which (לחפצים)</strong></span>.<br><br>- אחים (אנשים) = whom. (אסור להשתמש ב-who כי זה בא אחרי מילת היחס of).<br>לכן התשובה הנכונה היא: <span dir="ltr">...all <strong>of whom</strong> are engineers.</span> (וכולם מתוכם מהנדסים).<br>*אם היינו מדברים על ספרים (חפצים): <span dir="ltr">I have 3 books, all <strong>of which</strong> are good.*</span>`
    },
    {
        topic: "english", subTopic: "Relative Clauses (משפטי זיקה: Who, Which, That)",
        question_text: `<strong>'What' as a Relative Pronoun (הדבר ש...):</strong><br>המילה 'What' (מה) מתפקדת לפעמים כמילת זיקה בפני עצמה, ומשמעותה 'הדבר ש...'.<br>איזה מהמשפטים הבאים מדגים שימוש נכון זה?`,
        options: ["<span dir=\"ltr\">I didn't understand what she said. (לא הבנתי את [הדבר ש] היא אמרה).</span>", "<span dir=\"ltr\">The book what I read is good.</span>", "<span dir=\"ltr\">The man what lives here is tall.</span>", "<span dir=\"ltr\">I will tell you what time is it.</span>"],
        correctAnswer: 0,
        hint: "במשפטי זיקה רגילים (ספר, איש) משתמשים ב-which או who. המילה What יכולה להופיע רק כשאין שם עצם מוחשי לפניה, והיא עצמה מהווה את ה'דבר'.",
        solution: `<strong>הסבר מלא (שימוש ייחודי במילה What):</strong><br>באנגלית תקינה, <strong>אסור</strong> להשתמש ב-What כדי לתאר שם עצם מפורש שקדם לה!<br>שגוי: <span dir="ltr" style="text-decoration:line-through">The book what I read</span>. (צריך להיות which או that).<br><br><strong>מתי כן משתמשים בה?</strong><br>כשהמילה What "בולעת" לתוכה את החפץ והופכת ל"הדבר ש...".<br>במשפט <span dir="ltr">"I didn't understand <strong>what</strong> she said"</span>, אין חפץ לפני ה-what (יש את הפועל understand). ה-what מתורגם ל: "את <u>הדבר אשר</u> היא אמרה". זוהי צורה תקינה ונפוצה מאוד.`
    },

    // ---------------------------------------------------------
    // 7. Connectors & Linking Words
    // ---------------------------------------------------------
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Addition (הוספת מידע / בנוסף):</strong><br>השלימו את המשפט עם מילת הקישור שמביעה 'הוספה':<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"He is a great manager. ________, he is a talented writer."</span>`,
        options: ["<span dir=\"ltr\">Furthermore</span>", "<span dir=\"ltr\">However</span>", "<span dir=\"ltr\">Therefore</span>", "<span dir=\"ltr\">Consequently</span>"],
        correctAnswer: 0,
        hint: "משפט 1 מחמיא לו (מנהל נהדר). משפט 2 מחמיא לו שוב (כותב מוכשר). שניהם באותו כיוון חיובי. איזו מילה מחברת פלוס עם פלוס? (יתר על כן / בנוסף לכך).",
        solution: `<strong>הסבר מלא (מילות הוספה - Addition):</strong><br>בכתיבת חיבורים (Essays), כשאנו רוצים להוסיף רעיון שתומך ומחזק את הרעיון הקודם (כמו הוספת פלוס לפלוס), נשתמש במשפחת 'מילות ההוספה'.<br><br>המילים המובילות הן: <span dir="ltr"><strong>In addition, Moreover, Furthermore, Also, As well as</strong></span>.<br>התרגום של <span dir="ltr"><strong>Furthermore</strong></span> הוא "יתר על כן / יתרה מזאת". <br><br>שאר האופציות שגויות: However (ניגוד), Therefore (תוצאה).`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Contrast (ניגוד בין שני משפטים שלמים):</strong><br>השלימו את המילה המביעה ניגוד חריף בין שני משפטים נפרדים:<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"The weather was terrible. ________, we decided to go for a hike."</span>`,
        options: ["<span dir=\"ltr\">However (עם זאת / אולם)</span>", "<span dir=\"ltr\">Therefore (לכן)</span>", "<span dir=\"ltr\">In addition (בנוסף)</span>", "<span dir=\"ltr\">Because (בגלל ש)</span>"],
        correctAnswer: 0,
        hint: "משפט 1 שלילי (מזג אוויר נורא). מצפים שנישאר בבית. משפט 2 חיובי והפוך לציפייה (הלכנו לטייל). מילת הניגוד 'אולם' נדרשת כאן.",
        solution: `<strong>הסבר מלא (מילות ניגוד קלאסיות - Contrast):</strong><br>כשיש שני משפטים שהם "ראש בראש" מנוגדים לציפייה, נשתמש במשפחת הניגודים.<br><br>מילות הניגוד המובילות לפתיחת משפט חדש (שתמיד מלוות בפסיק אחריהן!): <br><span dir="ltr"><strong>However, Nevertheless, On the other hand, By contrast</strong></span>.<br>התרגום של <span dir="ltr"><strong>However</strong></span> הוא "אולם / עם זאת / למרות זאת".<br>הוא מחבר בצורה מושלמת בין הסיבה השלילית (גשם) לתוצאה ההפוכה (הלכנו לטייל).`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Contrast within a sentence (ניגוד בתוך אותו משפט):</strong><br>איזו מילה מביעה את הניגוד של "אף על פי ש..." <u>בתוך</u> משפט אחד?<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"________ it was raining, we went out to play."</span>`,
        options: ["<span dir=\"ltr\">Although (למרות ש / אף על פי ש)</span>", "<span dir=\"ltr\">However (אולם)</span>", "<span dir=\"ltr\">Because (בגלל ש)</span>", "<span dir=\"ltr\">Despite (למרות ה...)</span>"],
        correctAnswer: 0,
        hint: "המילה Although פותחת פסוקית ויתור הכוללת נושא ופועל (it was raining).",
        solution: `<strong>הסבר מלא (Although לעומת However):</strong><br>רבים מתבלבלים מתי משתמשים ב-However ומתי ב-Although, כי שניהם מביעים ניגוד.<br><br>- <span dir="ltr"><strong>However</strong></span>: פותחת משפט חדש <u>עצמאי</u> (אחרי נקודה), ומלווה בפסיק. מתורגם: "נקודה. אולם,".<br>- <span dir="ltr"><strong>Although / Even though</strong></span>: מדביקה שני חלקי משפט (פסוקיות) ביחד, ואחריה תמיד יבואו <strong>נושא + פועל</strong> (Subject + Verb).<br><span dir="ltr"><strong>Although</strong> it (נושא) was raining (פועל)...</span> &rarr; "אף על פי שירד גשם, הלכנו לשחק".`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Despite vs. Although (למרות ה... מול למרות ש...):</strong><br>מהי המילה הנכונה להשלמת המשפט, בהתחשב בכך שאחריה מופיע <strong>שם עצם (Noun)</strong> בלבד, ללא פועל?<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"________ the heavy rain, we went out to play."</span>`,
        options: ["<span dir=\"ltr\">Despite / In spite of</span>", "<span dir=\"ltr\">Although</span>", "<span dir=\"ltr\">Even though</span>", "<span dir=\"ltr\">However</span>"],
        correctAnswer: 0,
        hint: "אחרי המילים Despite / In spite of חייב לבוא מיד שם עצם (או פועל עם ing) ולא משפט שלם. (למשל: 'למרות הגשם' ולא 'למרות שירד גשם').",
        solution: `<strong>הסבר מלא (חוק הברזל של Despite):</strong><br>זהו חוק שמופיע בכל מבחן שפה באנגלית!<br>המילים <span dir="ltr"><strong>Despite</strong></span> ו- <span dir="ltr"><strong>In spite of</strong></span> (למרות / על אף) מתנהגות כמו מילות יחס (Prepositions). לכן, אי אפשר לשים אחריהן משפט שלם שמכיל פועל.<br><br>- שגוי: <span dir="ltr" style="text-decoration:line-through">Despite it was raining</span>. (יש כאן פועל was raining).<br>- נכון: <span dir="ltr"><strong>Despite</strong> the heavy rain</span> (למרות "הגשם הכבד" - זהו פשוט צירוף שמי/שם עצם).<br><br>*כדי להשתמש ב-Although, היינו צריכים לכתוב: <span dir="ltr">Although it was raining heavily...</span>*`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Cause and Reason (בגלל לעומת בגלל ש...):</strong><br>השלימו: <span dir="ltr">"The game was cancelled ________ the bad weather."</span><br>(שימו לב: 'the bad weather' הוא שם עצם ללא פועל).`,
        options: ["<span dir=\"ltr\">because of (או due to)</span>", "<span dir=\"ltr\">because</span>", "<span dir=\"ltr\">since</span>", "<span dir=\"ltr\">as</span>"],
        correctAnswer: 0,
        hint: "בדיוק כמו חוק Despite-Although: כשאחרי ה'בגלל' יש רק שם עצם (המשחק התבטל 'בגלל מזג האוויר'), חייבים להשתמש בצמד שמכיל את מילת היחס of.",
        solution: `<strong>הסבר מלא (Because לעומת Because of):</strong><br>ההבדל התחבירי הוא קריטי לחלוטין:<br><br>- <span dir="ltr"><strong>Because (מפני ש / בגלל ש):</strong></span> מצריך אחריו <u>משפט שלם (נושא + פועל)</u>.<br><span dir="ltr">The game was cancelled <strong>because</strong> the weather was bad.</span><br><br>- <span dir="ltr"><strong>Because of / Due to (בגלל ה...):</strong></span> מצריך אחריו <u>רק שם עצם (Noun phrase)</u>.<br><span dir="ltr">The game was cancelled <strong>because of</strong> the bad weather.</span><br>כיוון שבמשפט שלנו מופיע רק צמד המילים "the bad weather" (ללא הפועל was), חובה לבחור ב-<span dir="ltr">Because of</span>.`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Result / Effect (תוצאה):</strong><br>"הוא לא למד כלל לבחינה. <strong>לכן (כתוצאה מכך)</strong>, הוא נכשל".<br>איזו מילת קישור מתאימה לתרגום של 'לכן / כתוצאה מכך'?`,
        options: ["<span dir=\"ltr\">Therefore (או Consequently / As a result)</span>", "<span dir=\"ltr\">Furthermore</span>", "<span dir=\"ltr\">However</span>", "<span dir=\"ltr\">For instance</span>"],
        correctAnswer: 0,
        hint: "מחפשים מילה שמראה על ה'תוצאה' ההגיונית של המשפט הקודם.",
        solution: `<strong>הסבר מלא (מילות תוצאה - Result):</strong><br>כדי להראות שפעולה א' הובילה באופן ישיר והגיוני לפעולה ב', אנו משתמשים במשפחת מילות התוצאה.<br><br>המילים המובילות בחיבור אקדמי הן:<br>- <span dir="ltr"><strong>Therefore</strong></span> (לכן)<br>- <span dir="ltr"><strong>Consequently</strong></span> (כפועל יוצא / כתוצאה מכך)<br>- <span dir="ltr"><strong>As a result</strong></span> (כתוצאה מכך)<br>- <span dir="ltr"><strong>Thus</strong></span> (לפיכך)<br><br><span dir="ltr">He didn't study. <strong>Therefore,</strong> he failed.</span>`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Purpose (מטרה):</strong><br>השלימו את המשפט עם המילה שפירושה "<strong>כדי / על מנת</strong>":<br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"I am saving money ________ buy a new car."</span>`,
        options: ["<span dir=\"ltr\">in order to (או so as to)</span>", "<span dir=\"ltr\">so that</span>", "<span dir=\"ltr\">because of</span>", "<span dir=\"ltr\">in spite of</span>"],
        correctAnswer: 0,
        hint: "כדי להביע תכלית (מטרה) ולאחריה פועל בסיסי (buy), אנו משתמשים ב'כדי ל...'.",
        solution: `<strong>הסבר מלא (הבעת מטרה - Purpose):</strong><br>כדי לתאר את ה'יעד' של הפעולה שלנו, יש לנו שתי דרכים מרכזיות באנגלית:<br><br>1. <strong>עם פועל בסיסי (Infinitive):</strong> כאשר מיד אחרי הקישור מופיע פועל פעולה (כמו buy), נשתמש ב-<span dir="ltr"><strong>in order to</strong></span> (כדי ל...) או פשוט במילה <span dir="ltr"><strong>to</strong></span>.<br><span dir="ltr">I am saving money <strong>in order to</strong> buy a car.</span><br><br>2. <strong>עם משפט שלם (Subject + Modal):</strong> אם נשתמש ב-<span dir="ltr"><strong>so that</strong></span> (על מנת ש...), נהיה חייבים להוסיף נושא ומודאל.<br><span dir="ltr">I am saving money <strong>so that I can</strong> buy a car.</span>`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Providing Examples (מתן דוגמאות):</strong><br>איזה מצמד המילים הבאות מיועד לפתוח משפט שמציג <strong>דוגמה ספציפית</strong> לרעיון שהוצג קודם?`,
        options: ["<span dir=\"ltr\">For example / For instance</span>", "<span dir=\"ltr\">Similarly / Likewise</span>", "<span dir=\"ltr\">Moreover / Furthermore</span>", "<span dir=\"ltr\">In contrast / On the contrary</span>"],
        correctAnswer: 0,
        hint: "למשל... / לדוגמה...",
        solution: `<strong>הסבר מלא (מתן דוגמאות):</strong><br>בחיבורים באנגלית, לאחר שהצגנו טענה כללית, מומלץ מאוד (זה מעלה ניקוד!) לגבות אותה בדוגמה מהעולם האמיתי.<br><br>הביטויים הקלאסיים לכך (שלרוב מופיעים בתחילת המשפט מלווים בפסיק) הם:<br>- <span dir="ltr"><strong>For example,</strong></span> (למשל/לדוגמה).<br>- <span dir="ltr"><strong>For instance,</strong></span> (למשל - קצת יותר ספרותי).<br>- <span dir="ltr"><strong>Such as</strong></span> (כגון... מגיע באמצע המשפט ואינו מצריך פסיק).`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Sequence and Time (סדר התרחשויות וזמן):</strong><br>השלימו את המשפט: "הוא עבד קשה מאוד בחברה במשך עשרים שנה. <strong>בסופו של דבר / לבסוף</strong>, הוא מונה למנכ"ל."`,
        options: ["<span dir=\"ltr\">Eventually (או Finally)</span>", "<span dir=\"ltr\">Meanwhile</span>", "<span dir=\"ltr\">Subsequently</span>", "<span dir=\"ltr\">Suddenly</span>"],
        correctAnswer: 0,
        hint: "המילה שמתארת תוצאה שהגיעה בסוף תהליך ארוך (סוף סוף / בסופו של דבר) היא Eventually.",
        solution: `<strong>הסבר מלא (מילות זמן ורצף):</strong><br>- <span dir="ltr"><strong>Eventually / Finally</strong></span> = לבסוף, בסופו של דבר. מציין את סופו של תהליך ארוך.<br>- <span dir="ltr"><strong>Meanwhile</strong></span> = בינתיים. (שתי פעולות שקרו במקביל).<br>- <span dir="ltr"><strong>Subsequently</strong></span> = לאחר מכן / כתוצאה מכך (קרה מיד אחרי).<br>- <span dir="ltr"><strong>Suddenly</strong></span> = לפתע (בהפתעה).<br><br>כיוון שהוא עבד שם 20 שנה וקיבל פרס על התמדתו בסוף, המילה <span dir="ltr"><strong>Eventually</strong></span> מושלמת כאן.`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Conditions (תנאים - "בתנאי ש..."):</strong><br>איזה מהביטויים הבאים משמש כדי להציב "תנאי קשיח" להתרחשות הפעולה? <br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"I will lend you my car ________ you drive carefully."</span>`,
        options: ["<span dir=\"ltr\">provided that (או as long as / on condition that)</span>", "<span dir=\"ltr\">even though</span>", "<span dir=\"ltr\">in case of</span>", "<span dir=\"ltr\">so that</span>"],
        correctAnswer: 0,
        hint: "תחליף אלגנטי למילה 'If' (אם). אלווה לך את הרכב *בתנאי ש* תנהג בזהירות.",
        solution: `<strong>הסבר מלא (מילות תנאי כתחליף ל-If):</strong><br>כדי לגוון את הכתיבה (ולא לכתוב רק 'If' כל הזמן), יש לנו ביטויים שמציבים תנאי ברור וקשיח.<br><br>- <span dir="ltr"><strong>Provided that / Providing that</strong></span> = בתנאי ש...<br>- <span dir="ltr"><strong>As long as</strong></span> = כל עוד...<br>- <span dir="ltr"><strong>On condition that</strong></span> = על תנאי ש...<br><br>המשפט אומר: "אלווה לך את הרכב <strong>בתנאי ש (provided that)</strong> תנהג בזהירות".<br>*שימו לב ש-In case of (במקרה של) דורש אחריו שם עצם ולא משפט, ולכן הוא נפסל (In case of fire).*`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Comparison (השוואה ודמיון):</strong><br>אנו רוצים להראות ששני דברים דומים מאוד או פועלים באותה דרך. איזו מילה תשמש אותנו? <br><span dir="ltr" style="font-size: 1.2em; color: #1e40af;">"My brother is a great musician. ________, my sister plays three instruments beautifully."</span>`,
        options: ["<span dir=\"ltr\">Similarly (בדומה לכך / באופן דומה)</span>", "<span dir=\"ltr\">Conversely (לעומת זאת)</span>", "<span dir=\"ltr\">Otherwise (אחרת)</span>", "<span dir=\"ltr\">Therefore (לכן)</span>"],
        correctAnswer: 0,
        hint: "המשפט הראשון מתאר מוזיקאי. המשפט השני מתאר גם מוזיקאית בתוך אותה משפחה. זהו קו מחשבה דומה (מקביל). המילה נגזרת מ-Similar.",
        solution: `<strong>הסבר מלא (מילות השוואה - Comparison):</strong><br>כאשר אנו מציגים דוגמה או עובדה <strong>שתומכת ומראה הקבלה</strong> לעובדה הקודמת, נשתמש במילות דמיון והשוואה:<br><br>- <span dir="ltr"><strong>Similarly</strong></span> = בדומה לכך / באופן דומה.<br>- <span dir="ltr"><strong>Likewise</strong></span> = באותו אופן / בדומה.<br>- <span dir="ltr"><strong>In the same way</strong></span> = באותה הדרך.<br><br>Conversely ו-On the contrary עושים בדיוק את ההפך – הם מציגים ניגוד מוחלט.`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Clarification (הבהרה והסבר מחדש):</strong><br>לעיתים אנו כותבים מושג מסובך, ורוצים להסביר אותו במילים פשוטות יותר ("כלומר / במילים אחרות"). איזו מילת קישור פותחת הבהרה?`,
        options: ["<span dir=\"ltr\">In other words (או Namely / That is to say)</span>", "<span dir=\"ltr\">For instance</span>", "<span dir=\"ltr\">Instead</span>", "<span dir=\"ltr\">Nevertheless</span>"],
        correctAnswer: 0,
        hint: "תרגום מילולי: 'במילים אחרות'.",
        solution: `<strong>הסבר מלא (מילות הבהרה - Clarification):</strong><br>כאשר טענו טענה (או השתמשנו במילה גבוהה כמו 'אופטימיזציה') ואנו רוצים "לתרגם" אותה לקורא, נשתמש בביטויים אלו:<br><br>- <span dir="ltr"><strong>In other words</strong></span> = במילים אחרות.<br>- <span dir="ltr"><strong>That is to say</strong></span> = כלומר / זאת אומרת.<br>- <span dir="ltr"><strong>Namely</strong></span> = דהיינו / כלומר.<br><br>למשל: <span dir="ltr">He is an arachnophobe. <strong>In other words</strong>, he is terrified of spiders.</span>`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Punctuation with Conjunctive Adverbs (פסיקים ונקודה-פסיק):</strong><br>מהי הדרך התחבירית ה<strong>נכונה והמושלמת</strong> לפסק משפט שמכיל את המילה <strong>However</strong> (או Therefore) באמצעו?`,
        options: ["<span dir=\"ltr\">He was extremely tired<strong>; however,</strong> he kept running. (נקודה-פסיק לפני, ופסיק אחרי).</span>", "<span dir=\"ltr\">He was extremely tired<strong>, however,</strong> he kept running. (פסיק לפני ופסיק אחרי).</span>", "<span dir=\"ltr\">He was extremely tired <strong>however</strong> he kept running. (ללא פיסוק).</span>", "<span dir=\"ltr\">He was extremely tired<strong>. However</strong> he kept running. (נקודה לפני וללא פסיק אחרי).</span>"],
        correctAnswer: 0,
        hint: "מילות קישור 'כבדות' כמו However, Therefore, Furthermore מחברות שני משפטים עצמאיים. הן דורשות עצירה חזקה לפני (נקודה או נקודה-פסיק) ופסיק של נשימה מיד אחריהן.",
        solution: `<strong>הסבר מלא (חוקי הפיסוק של מילות חיבור - Transition Words):</strong><br>זהו חוק "שאלון G כתיבה" שמזכה אתכם בנקודות בונוס על פיסוק גבוה!<br><br>מילים כבדות (Conjunctive Adverbs) לא יכולות להופיע סתם עם פסיק כי זה יוצר "Comma Splice" (חיבור חלש מדי בין שני משפטים שלמים).<br><strong>2 אפשרויות חוקיות בלבד:</strong><br>1. לפתוח איתן משפט חדש: <span dir="ltr">He was tired<strong>. However,</strong> he kept running.</span><br>2. להשתמש בנקודה-פסיק (Semicolon) לפני, ופסיק אחרי: <span dir="ltr">He was tired<strong>; however,</strong> he kept running.</span>`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Despite the fact that (הפיכת Despite לחיבור של משפט שלם):</strong><br>למדנו קודם שאחרי <strong>Despite</strong> אסור לשים פועל, אלא רק שם עצם ("Despite the rain").<br>אבל מה קורה אם מוסיפים לו את הביטוי "the fact that" (למרות העובדה ש...)?`,
        options: ["<span dir=\"ltr\">הוא מתהפך לגמרי! הביטוי 'Despite the fact that' מתנהג כמו 'Although', ולכן <u>חובה</u> שיבוא אחריו משפט שלם (עם נושא ופועל). (למשל: Despite the fact that it was raining).</span>", "<span dir=\"ltr\">הוא נשאר אותו הדבר. גם אחרי 'Despite the fact that' אסור בשום אופן לשים פועל.</span>", "<span dir=\"ltr\">הביטוי הזה בכלל משנה את משמעותו ל'בגלל העובדה ש...', והופך לסיבה.</span>", "<span dir=\"ltr\">הוא משמש רק בסוף המשפט בתור מילת סיכום ולא יכול להופיע בהתחלה.</span>"],
        correctAnswer: 0,
        hint: "כשאתם כותבים את המילה 'that' (ש...), אתם למעשה פותחים דלת למשפט חדש לגמרי, ולכן עליכם להביא פועל ונושא.",
        solution: `<strong>הסבר מלא (הטריק של The fact that):</strong><br>זהו גלגל ההצלה (ה'צ'יט') המפורסם של הבגרות!<br>לפעמים אתם רוצים להשתמש במילה <span dir="ltr"><strong>Despite</strong></span> (או In spite of) כי זה נשמע מתוחכם, אבל אין לכם שם עצם יפה ונוח, ויש לכם משפט שלם (It was raining).<br><br>הפתרון: מוסיפים את קליפת המגן <span dir="ltr"><strong>the fact that</strong></span> (את העובדה ש...).<br>ברגע שהוספתם אותה, המילה That מתירה לכם להכניס אחריה משפט עם פועל!<br><span dir="ltr"><strong>Despite the fact that</strong> <u>it was raining</u>, we went out.</span> (תקין ומרשים!).`
    },
    {
        topic: "english", subTopic: "Connectors & Linking Words (מילות קישור)",
        question_text: `<strong>Summarizing and Concluding (מילות סיכום לפסקת סיום):</strong><br>בסוף חיבור הדעה שלכם (Opinion Essay), הגעתם לפסקה האחרונה ואתם רוצים לסכם את כל מה שנאמר למסקנה אחת ברורה.<br>באיזה מביטויי הקישור הבאים תשתמשו כדי לפתוח את פסקת הסיום?`,
        options: ["<span dir=\"ltr\">To sum up / In conclusion / To summarize</span>", "<span dir=\"ltr\">First of all / To begin with</span>", "<span dir=\"ltr\">On the other hand / However</span>", "<span dir=\"ltr\">Due to / Because of</span>"],
        correctAnswer: 0,
        hint: "Conclusion = מסקנה. Sum up = לסכם.",
        solution: `<strong>הסבר מלא (מילות סיום בחיבורים):</strong><br>הרושם האחרון שאתם משאירים על הבוחן חשוב לא פחות מהפתיחה.<br>פסקת סיום (Conclusion Paragraph) תמיד, אבל תמיד, צריכה להיפתח במילת קישור סמכותית שאומרת לבוחן "הגענו לסוף, הנה השורה התחתונה שלי".<br><br><strong>הביטויים המובילים:</strong><br>- <span dir="ltr"><strong>In conclusion,</strong></span> (לסיכום / במסקנה)<br>- <span dir="ltr"><strong>To sum up,</strong></span> (לסיכום)<br>- <span dir="ltr"><strong>All in all,</strong></span> (בסך הכל / בסיכומו של דבר)<br><br>(שימו לב: First of all משמש לפתיחת חיבור, On the other hand מביע ניגוד בין פסקאות גוף, ו-Due to נותן סיבה ממוקדת).`
    }
];