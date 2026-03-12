const questionsDB = [
    // ========================================================================
    // תת נושא: עקומת פעמון
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "התפלגות ציונים במבחן ארצי היא נורמלית. מהו אחוז התלמידים שציונם נמצא בין הממוצע לבין חצי סטיית תקן מעל הממוצע?",
        options: ["19%", "34%", "15%", "50%"],
        correctAnswer: 0,
        hint: "התבוננו בגרף התקני של התפלגות נורמלית. מהו האחוז הרשום במקטע הראשון שמימין לקו הממוצע המרכזי?",
        solution_steps: [
            { verbal_explanation: "גרף ההתפלגות הנורמלית מחולק למקטעים המייצגים אחוזים קבועים מהאוכלוסייה.", math_expression: "\u202A19 , 15 , 9 , 5 , 1.5 , 0.5\u202C" },
            { verbal_explanation: "המקטע הראשון מימין לקו הממוצע מתאר את כל מי שנמצא בין הממוצע לבין חצי סטיית תקן מעליו.", math_expression: "\u202A0 \u2192 0.5\u202C" },
            { verbal_explanation: "שטח מקטע זה תמיד שווה לאחוז קבוע וידוע מתוך הכלל, כפי שמופיע בדף הנוסחאות.", math_expression: "\u202A19%\u202C" }
        ],
        final_answer: "19%"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "ממוצע הגבהים של קבוצת אנשים הוא 170 ס\"מ וסטיית התקן היא 10 ס\"מ. מהו אחוז האנשים שגובהם נע בין 160 ס\"מ ל-180 ס\"מ?",
        options: ["68%", "34%", "95%", "50%"],
        correctAnswer: 0,
        hint: "הגובה 160 הוא סטיית תקן אחת שלמה מתחת לממוצע. הגובה 180 הוא סטיית תקן אחת שלמה מעל הממוצע. חברו את האחוזים שבטווח זה.",
        solution_steps: [
            { verbal_explanation: "נבדוק מהו המרחק של הגובה העליון מהממוצע. הוא מהווה בדיוק סטיית תקן אחת מעליו.", math_expression: "\u202A180 - 170 = 10\u202C" },
            { verbal_explanation: "באותו אופן, הגובה התחתון הוא בדיוק סטיית תקן אחת מתחת לממוצע.", math_expression: "\u202A170 - 160 = 10\u202C" },
            { verbal_explanation: "נמצא את האחוז מהממוצע ועד לסטיית תקן אחת (חצי סטייה ועוד חצי סטייה).", math_expression: "\u202A19 + 15 = 34\u202C" },
            { verbal_explanation: "נכפיל את האחוז שמצאנו בשתיים, שכן מדובר בשטח סימטרי משני צידי הפעמון.", math_expression: "\u202A34 \u00D7 2\u202C" },
            { verbal_explanation: "נקבל את האחוז הכולל של האנשים בטווח המבוקש.", math_expression: "\u202A68%\u202C" }
        ],
        final_answer: "68%"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "משקלן של אריזות מוצר מתפלג נורמלית. הממוצע הוא 50 ק\"ג וסטיית התקן היא 2 ק\"ג. איזה אחוז מהאריזות שוקלות מעל 51 ק\"ג?",
        options: ["31%", "19%", "50%", "15%"],
        correctAnswer: 0,
        hint: "המשקל 51 הוא הממוצע ועוד חצי סטיית תקן. אנו מחפשים את כל השטח שמעליו עד סוף הגרף. דרך קלה: לקחת את כל החצי הימני (50%) ולחסר ממנו את המקטע הראשון (19%).",
        solution_steps: [
            { verbal_explanation: "נבדוק מהו המרחק של המשקל הנתון מהממוצע. ההפרש הוא יחידה אחת.", math_expression: "\u202A51 - 50 = 1\u202C" },
            { verbal_explanation: "מאחר שסטיית התקן היא שתיים, יחידה אחת מהווה בדיוק חצי מסטיית התקן.", math_expression: "\u202A1 / 2 = 0.5\u202C" },
            { verbal_explanation: "השטח של כל מחצית הגרף (כל מה שמעל הממוצע) שווה לחמישים אחוז.", math_expression: "\u202A50\u202C" },
            { verbal_explanation: "כדי למצוא את האחוז שמעל חצי סטיית תקן, נחסר מהחצי את המקטע הראשון הידוע.", math_expression: "\u202A50 - 19\u202C" },
            { verbal_explanation: "ההפרש ייתן לנו את שארית האחוזים המבוקשת.", math_expression: "\u202A31%\u202C" }
        ],
        final_answer: "31%"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "ציוני מבחן מתפלגים נורמלית. ידוע כי 50% מהתלמידים קיבלו ציון הגבוה מ-82. מהו הציון הממוצע של הכיתה כולה?",
        options: ["82", "41", "100", "לא ניתן לדעת מנתון זה"],
        correctAnswer: 0,
        hint: "זכרו את תכונת הבסיס: עקומת הפעמון היא סימטרית לחלוטין. בדיוק חצי מהנתונים (50%) נמצאים מעל לממוצע, וחצי מתחתיו.",
        solution_steps: [
            { verbal_explanation: "עקומת ההתפלגות הנורמלית מתאפיינת בסימטריה מושלמת.", math_expression: "\u202A50% - 50%\u202C" },
            { verbal_explanation: "הנקודה המדויקת שמחלקת את הנתונים כך שחמישים אחוז מהם גדולים ממנה וחמישים אחוז קטנים ממנה, היא נקודת המרכז.", math_expression: "\u202AMedium\u202C" },
            { verbal_explanation: "בהתפלגות נורמלית, נקודת המרכז מהווה תמיד את הממוצע. לכן הציון הנתון חייב להיות הממוצע עצמו.", math_expression: "\u202A82\u202C" }
        ],
        final_answer: "82"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "במפעל מנורות, אורך חיי הנורה מתפלג נורמלית עם ממוצע של 1000 שעות עבודה וסטיית תקן של 50 שעות. מהו אחוז הנורות שידלקו פחות מ-900 שעות?",
        options: ["2%", "0.5%", "16%", "5%"],
        correctAnswer: 0,
        hint: "הזמן 900 שעות נמצא במרחק של 100 שעות מהממוצע, כלומר שתי סטיות תקן מתחתיו. חברו את האחוזים בשני המקטעים השמאליים ביותר של הגרף.",
        solution_steps: [
            { verbal_explanation: "נחשב את ההפרש בין הזמן הממוצע לבין הזמן שנשאלנו עליו.", math_expression: "\u202A1000 - 900 = 100\u202C" },
            { verbal_explanation: "נחלק את ההפרש בסטיית התקן כדי לדעת כמה צעדים בגרף ירדנו שמאלה.", math_expression: "\u202A100 / 50 = 2\u202C" },
            { verbal_explanation: "אנו נמצאים שתי סטיות תקן שמאלה מהממוצע, ומחפשים את מה שקטן מכך.", math_expression: "\u202A< 2\u202C" },
            { verbal_explanation: "נחבר את השטחים שמשמאל לנקודה זו על פי המופיע בגרף הפעמון.", math_expression: "\u202A1.5 + 0.5\u202C" },
            { verbal_explanation: "סכום שני המקטעים הקיצוניים הוא האחוז המבוקש.", math_expression: "\u202A2%\u202C" }
        ],
        final_answer: "2%"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "בבית ספר בו ציוני התלמידים מתפלגים נורמלית, הציון הממוצע הוא 70. בנוסף ידוע כי בדיוק 16% מהתלמידים קיבלו ציון נמוך מ-60. מהי סטיית התקן של הציונים?",
        options: ["10", "5", "20", "8"],
        correctAnswer: 0,
        hint: "איפה בגרף נמצא הקו שמתחתיו יש בדיוק 16%? חברו מהקצה השמאלי (0.5+1.5+5+9). הקו הזה ממוקם סטיית תקן אחת שמאלה מהממוצע. אם הקו הזה הוא הציון 60, מהו ההפרש בינו לבין הממוצע?",
        solution_steps: [
            { verbal_explanation: "נבדוק מהו השטח השמאלי הקיצוני בפעמון שסכומו הוא שש עשרה אחוזים.", math_expression: "\u202A0.5 + 1.5 + 5 + 9 = 16\u202C" },
            { verbal_explanation: "שטח זה מצטבר עד לנקודה הנמצאת במרחק של סטיית תקן אחת שלמה מתחת לממוצע.", math_expression: "\u202AM - 1S\u202C" },
            { verbal_explanation: "נתון לנו שהציון בנקודה זו הוא שישים. נחשב את ההפרש בינו לבין הממוצע הידוע.", math_expression: "\u202A70 - 60\u202C" },
            { verbal_explanation: "ההפרש המדויק, מאחר והוא מייצג צעד אחד, הוא סטיית התקן אותה אנו מחפשים.", math_expression: "\u202A10\u202C" }
        ],
        final_answer: "10"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "מהי התכונה המרכזית של 'עקומת הפעמון' (ההתפלגות הנורמלית המושלמת) לגבי שלושת המדדים המרכזיים בסטטיסטיקה?",
        options: ["הממוצע, החציון והשכיח שווים כולם לאותו הערך ונמצאים בשיא הגרף", "הממוצע תמיד גדול מהחציון", "השכיח תמיד נמצא בקצה הימני ביותר של הגרף", "אין משמעות לממוצע בעקומה זו כלל"],
        correctAnswer: 0,
        hint: "התפלגות נורמלית היא בעלת סימטריה מושלמת (כמו מראה), והיא בנויה סביב נקודת שיא אחת מרכזית שחוצה אותה בדיוק לשניים.",
        solution_steps: [
            { verbal_explanation: "בעקומת פעמון תקנית, שיא הגרף מייצג את הערך הנפוץ ביותר, כלומר מדד השכיח.", math_expression: "\u202ATop\u202C" },
            { verbal_explanation: "בגלל הסימטריה המושלמת, אותה נקודת שיא חוצה את הנתונים בדיוק לחצי, לכן היא מהווה גם את החציון.", math_expression: "\u202A50% - 50%\u202C" },
            { verbal_explanation: "מאותה סיבה ממש, נקודת שיווי המשקל המאזנת את כלל הנתונים ממוקמת באותו קו בדיוק.", math_expression: "\u202ACenter\u202C" },
            { verbal_explanation: "מסקנת הכלל היא שכל שלושת המדדים מתלכדים ונופלים על אותה נקודה מרכזית אחת.", math_expression: "\u202A1\u202C" }
        ],
        final_answer: "הממוצע, החציון והשכיח שווים כולם לאותו הערך ונמצאים בשיא הגרף"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "אורך חיי סוללות מתפלג נורמלית עם ממוצע של 24 חודשים וסטיית תקן של 3 חודשים. מהו אחוז הסוללות שיחזיקו מעמד בין 24 חודשים ל-28.5 חודשים?",
        options: ["43%", "34%", "15%", "48%"],
        correctAnswer: 0,
        hint: "מצאו תחילה כמה סטיות תקן יש בהפרש שבין 24 ל-28.5. ההפרש הוא 4.5, שאלו בדיוק 1.5 סטיות תקן. כעת חברו את האחוזים מהממוצע ועד ל-1.5 סטיות תקן ימינה.",
        solution_steps: [
            { verbal_explanation: "נחשב את ההפרש הכולל מהממוצע ועד לחסם העליון הנתון בשאלה.", math_expression: "\u202A28.5 - 24 = 4.5\u202C" },
            { verbal_explanation: "נחלק את ההפרש שמצאנו בגודלה של סטיית התקן האחת כדי להבין את מיקומנו בגרף.", math_expression: "\u202A4.5 / 3 = 1.5\u202C" },
            { verbal_explanation: "התוצאה מראה שעלינו לצעוד אחת וחצי סטיות תקן ימינה מן הממוצע המרכזי.", math_expression: "\u202A+1.5\u202C" },
            { verbal_explanation: "נחבר את אחוזי שלושת המקטעים הראשונים מימין לממוצע, המרכיבים יחד את השטח המבוקש.", math_expression: "\u202A19 + 15 + 9\u202C" },
            { verbal_explanation: "סכומם המדויק ייתן לנו את האחוז המבוקש.", math_expression: "\u202A43%\u202C" }
        ],
        final_answer: "43%"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "זמן ההמתנה בתור לקופה מתפלג נורמלית. ידוע כי רק 2% מהלקוחות ממתינים מעל ל-15 דקות בתור. זמן ההמתנה הממוצע הוא 10 דקות. כמה סטיות תקן שלמות מפרידות בין הממוצע לבין הזמן של 15 דקות?",
        options: ["2", "1", "1.5", "3"],
        correctAnswer: 0,
        hint: "חפשו בגרף הפעמון את הנקודה שמעליה (ימינה) נותרו בדיוק 2% מכלל השטח. נקודה זו מפרידה את שני המקטעים הקיצוניים (1.5% והמקטע של 0.5%).",
        solution_steps: [
            { verbal_explanation: "נבחן את חלקו הימני ביותר של גרף הפעמון ונחפש מאיזו נקודה השטח הנותר מסתכם לשניים.", math_expression: "\u202A2\u202C" },
            { verbal_explanation: "שני המקטעים האחרונים בקצה הימני מסתכמים יחד בדיוק לשני אחוזים מכלל השטח.", math_expression: "\u202A1.5 + 0.5 = 2\u202C" },
            { verbal_explanation: "נקודת ההתחלה של השטח הקטן הזה יושבת במדויק על קו המרוחק שתי סטיות תקן מעל הממוצע.", math_expression: "\u202AM + 2S\u202C" },
            { verbal_explanation: "לכן המרחק בין זמן הממוצע לבין הזמן הנתון מורכב משתי סטיות תקן שלמות.", math_expression: "\u202A2\u202C" }
        ],
        final_answer: "2"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "התפלגות נורמלית",
        subTopic: "עקומת פעמון",
        question: "נתון שבהתפלגות נורמלית, בדיוק 50% מהציונים במבחן נמצאים כלואים באופן סימטרי בין הציון 60 לציון 80. מה חייב להיות הציון הממוצע של מבחן זה?",
        options: ["70", "60", "80", "50"],
        correctAnswer: 0,
        hint: "אם טווח כלשהו במרכז הגרף מכיל את מחצית הנתונים האמצעית באופן שווה מכל צד, הממוצע של הגרף חייב להיות ממוקם בדיוק במרכז הגיאומטרי של הטווח הזה.",
        solution_steps: [
            { verbal_explanation: "בהתפלגות נורמלית תקינה, הנתונים מפוזרים בסימטריה מושלמת סביב צירו של הממוצע.", math_expression: "\u202ASymmetry\u202C" },
            { verbal_explanation: "כאשר השטח המרכזי של חמישים אחוזים כלוא באופן שווה בין שני ערכים, הממוצע מחויב להיות המרכז המדויק שלהם.", math_expression: "\u202ACenter\u202C" },
            { verbal_explanation: "נחשב את נקודת האמצע על ידי פעולת ממוצע פשוטה בין שני המספרים. נחבר אותם ונחלק בשתיים.", math_expression: "\u202A( 60 + 80 ) / 2\u202C" },
            { verbal_explanation: "הסכום הוא מאה וארבעים. החלוקה תיתן לנו את הממוצע האמיתי של ההתפלגות כולה.", math_expression: "\u202A140 / 2 = 70\u202C" }
        ],
        final_answer: "70"
    }, 
	
    // ---------------------------------------------------------
    // תת נושא 2: סטיית תקן (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>מציאת סטיית התקן מתוך קפיצה שלמה אחת:</strong><br>
        במפעל, משקל המוצרים מתפלג נורמלית.<br>
        המשקל הממוצע הוא 60 ק"ג.<br>
        משקל של 70 ק"ג נמצא במרחק של <strong>סטיית תקן אחת בדיוק</strong> מעל הממוצע.<br>
        מהי סטיית התקן (S)?`,
        options: [
            "<span dir=\"rtl\">10 ק\"ג</span>",
            "<span dir=\"rtl\">5 ק\"ג</span>",
            "<span dir=\"rtl\">20 ק\"ג</span>",
            "<span dir=\"rtl\">15 ק\"ג</span>"
        ],
        correctAnswer: 0,
        hint: "המרחק בין הממוצע לבין הנקודה הנתונה שווה בדיוק לסטיית תקן אחת. חסרו 60 מתוך 70 כדי לגלות מהו המרחק הזה.",
        solution_steps: [
            { 
                verbal_explanation: "נתון לנו הממוצע והנקודה שנמצאת במרחק סטייה אחת ממנו.", 
                math_expression: "<div dir='ltr'>x&#772; = 60 , x = 70</div>" 
            },
            { 
                verbal_explanation: "נבנה משוואה: הממוצע ועוד סטיית תקן אחת שווה לנקודה הנתונה.", 
                math_expression: "<div dir='ltr'>60 + S = 70</div>" 
            },
            { 
                verbal_explanation: "נעביר את שישים אגף ונחסר מ-70.", 
                math_expression: "<div dir='ltr'>S = 70 - 60</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא סטיית התקן עצמה.", 
                math_expression: "<div dir='ltr'>S = 10</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">10 ק\"ג</span>"
    },

    // שאלה 12
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>מציאת סטיית תקן מתוך קפיצה של חצי סטייה:</strong><br>
        הציונים במבחן מתפלגים נורמלית, עם ממוצע של 80.<br>
        הציון 85 נמצא בטווח של <strong>חצי סטיית תקן</strong> מעל הממוצע (x&#772; + 0.5S).<br>
        מהי סטיית התקן (S) השלמה במבחן זה?`,
        options: [
            "<span dir=\"rtl\">10</span>",
            "<span dir=\"rtl\">5</span>",
            "<span dir=\"rtl\">15</span>",
            "<span dir=\"rtl\">20</span>"
        ],
        correctAnswer: 0,
        hint: "המרחק מהממוצע ל-85 הוא 5 נקודות. אם 5 נקודות שוות לחצי סטיית תקן, מהו הערך של סטיית תקן שלמה? הכפילו ב-2.",
        solution_steps: [
            { 
                verbal_explanation: "הממוצע הוא 80, והנקודה החדשה היא 85.", 
                math_expression: "<div dir='ltr'>x&#772; = 80 , x = 85</div>" 
            },
            { 
                verbal_explanation: "המרחק בנקודות שווה בדיוק לחצי סטיית תקן.", 
                math_expression: "<div dir='ltr'>80 + 0.5S = 85</div>" 
            },
            { 
                verbal_explanation: "נחסר שמונים משני הצדדים.", 
                math_expression: "<div dir='ltr'>0.5S = 5</div>" 
            },
            { 
                verbal_explanation: "נכפיל בשתיים את המשוואה כדי למצוא את הערך המלא של סטיית התקן.", 
                math_expression: "<div dir='ltr'>S = 5 &times; 2 = 10</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">10</span>"
    },

    // שאלה 13
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>מציאת סטיית התקן מתוך המרחק בין שתי נקודות נגדיות:</strong><br>
        המשקל של שקיות סוכר מתפלג נורמלית.<br>
        ידוע כי שקית השוקלת 90 גרם נמצאת במרחק <strong>סטיית תקן אחת מתחת לממוצע</strong>.<br>
        שקית השוקלת 110 גרם נמצאת במרחק <strong>סטיית תקן אחת מעל הממוצע</strong>.<br>
        מהי סטיית התקן?`,
        options: [
            "<span dir=\"rtl\">10 גרם</span>",
            "<span dir=\"rtl\">20 גרם</span>",
            "<span dir=\"rtl\">5 גרם</span>",
            "<span dir=\"rtl\">100 גרם</span>"
        ],
        correctAnswer: 0,
        hint: "המרחק הכולל בין 90 ל-110 הוא 20 גרם. המרחק הזה מורכב מסטיית תקן אחת למטה וסטיית תקן אחת למעלה (בסך הכל 2 סטיות תקן). לכן 2S = 20. חלקו ב-2.",
        solution_steps: [
            { 
                verbal_explanation: "יש לנו שתי נקודות. האחת מתחת לממוצע והשנייה מעליו.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 90 , x<sub>2</sub> = 110</div>" 
            },
            { 
                verbal_explanation: "המרחק הכולל בין שתי הנקודות הללו הוא עשרים גרם.", 
                math_expression: "<div dir='ltr'>Distance = 110 - 90 = 20</div>" 
            },
            { 
                verbal_explanation: "מרחק זה מכסה סטיית תקן אחת למטה, ועוד סטיית תקן אחת למעלה. בסך הכל שתי סטיות.", 
                math_expression: "<div dir='ltr'>2S = 20</div>" 
            },
            { 
                verbal_explanation: "נחלק בשתיים כדי למצוא סטייה אחת בודדת.", 
                math_expression: "<div dir='ltr'>S = 10</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">10 גרם</span>"
    },

    // שאלה 14
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>מציאת ערך מדויק על הגרף (מיקום של פלוס 1.5S):</strong><br>
        הציונים במבחן בפיזיקה מתפלגים נורמלית. הממוצע הוא 70, וסטיית התקן היא 8.<br>
        ציון ההצטיינות במבחן הוגדר כציון הנמצא במרחק של <strong>סטיית תקן וחצי</strong> מעל הממוצע (x&#772; + 1.5S).<br>
        מהו הציון הדרוש להצטיינות?`,
        options: [
            "<span dir=\"rtl\">82</span>",
            "<span dir=\"rtl\">78</span>",
            "<span dir=\"rtl\">86</span>",
            "<span dir=\"rtl\">84</span>"
        ],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחה הפשוטה: x = 70 + (1.5 כפול 8).",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את הנתונים הידועים.", 
                math_expression: "<div dir='ltr'>x&#772; = 70 , S = 8</div>" 
            },
            { 
                verbal_explanation: "הנקודה המבוקשת מוגדרת כנקודת הממוצע, פלוס פעם וחצי של סטיית התקן.", 
                math_expression: "<div dir='ltr'>x = x&#772; + 1.5S</div>" 
            },
            { 
                verbal_explanation: "נציב את הערכים.", 
                math_expression: "<div dir='ltr'>x = 70 + 1.5 &times; 8</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל. פעם וחצי שמונה זה שנים עשר.", 
                math_expression: "<div dir='ltr'>x = 70 + 12</div>" 
            },
            { 
                verbal_explanation: "נחבר את הערכים ונקבל את הציון המבוקש.", 
                math_expression: "<div dir='ltr'>x = 82</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">82</span>"
    },

    // שאלה 15
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>מציאת סטיית התקן מהצד השמאלי (השלילי):</strong><br>
        צריכת החשמל הביתית מתפלגת נורמלית. הממוצע הוא 400 קוט"ש.<br>
        צריכה של 340 קוט"ש נמצאת במרחק של <strong>סטיית תקן וחצי מתחת לממוצע</strong> (x&#772; - 1.5S).<br>
        מהי סטיית התקן (S)?`,
        options: [
            "<span dir=\"rtl\">40</span>",
            "<span dir=\"rtl\">60</span>",
            "<span dir=\"rtl\">30</span>",
            "<span dir=\"rtl\">20</span>"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה: 340 שווה ל-400 פחות 1.5S. העבירו את ה-1.5S שמאלה ואת ה-340 ימינה. תקבלו: 1.5S = 60. חלקו 60 ב-1.5.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את המשוואה המתארת את הנקודה בצד השמאלי של הגרף.", 
                math_expression: "<div dir='ltr'>340 = 400 - 1.5S</div>" 
            },
            { 
                verbal_explanation: "נעביר את ה-1.5S לאגף שמאל כדי להפכו לחיובי, ואת 340 ימינה.", 
                math_expression: "<div dir='ltr'>1.5S = 400 - 340</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור.", 
                math_expression: "<div dir='ltr'>1.5S = 60</div>" 
            },
            { 
                verbal_explanation: "נחלק את המשוואה ב-1.5 כדי לבודד את S.", 
                math_expression: "<div dir='ltr'>S = 60 / 1.5</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא סטיית התקן השלמה.", 
                math_expression: "<div dir='ltr'>S = 40</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">40</span>"
    },

    // שאלה 16
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>השוואת פיזור בין התפלגויות:</strong><br>
        נערכו שני מבחנים זהים (א' ו-ב') בשני בתי ספר שונים, ושניהם התפלגו נורמלית.<br>
        במבחן א', סטיית התקן הייתה S=5.<br>
        במבחן ב', סטיית התקן הייתה S=12.<br>
        באיזה מבית הספר <strong>פיזור הציונים היה רחב (גדול) יותר</strong>?`,
        options: [
            "<span dir=\"rtl\">במבחן ב'</span>",
            "<span dir=\"rtl\">במבחן א'</span>",
            "<span dir=\"rtl\">הפיזור זהה בשניהם</span>",
            "<span dir=\"rtl\">לא ניתן לדעת ללא הממוצע</span>"
        ],
        correctAnswer: 0,
        hint: "סטיית תקן מודדת דבר אחד ויחיד: פיזור. ככל שסטיית התקן גדולה יותר (המספר גבוה יותר), כך העקומה רחבה יותר והציונים מפוזרים רחוק יותר מהממוצע.",
        solution_steps: [
            { 
                verbal_explanation: "סטיית התקן היא מדד ישיר לפיזור. ככל שהיא גדולה, הגרף 'שמן' ורחב יותר.", 
                math_expression: "<div dir='ltr'>S = Spread</div>" 
            },
            { 
                verbal_explanation: "נשווה בין המספרים שניתנו.", 
                math_expression: "<div dir='ltr'>12 > 5</div>" 
            },
            { 
                verbal_explanation: "לכן, למבחן ב' יש סטיית תקן גדולה יותר, ובהתאמה הפיזור בו גדול יותר.", 
                math_expression: "<div dir='ltr'>B > A</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">במבחן ב'</span>"
    },

    // שאלה 17
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>השפעת תוספת קבועה (פקטור/בונוס) על סטיית התקן:</strong><br>
        במבחן ארצי במתמטיקה, סטיית התקן של הציונים הייתה 8.<br>
        הוחלט להעניק <strong>בונוס (פקטור) של 5 נקודות לכל תלמיד</strong> במדינה ללא יוצא מן הכלל.<br>
        מה תהיה <strong>סטיית התקן החדשה</strong> של הציונים לאחר הבונוס?`,
        options: [
            "<span dir=\"rtl\">תישאר 8 (לא תשתנה)</span>",
            "<span dir=\"rtl\">תגדל ל-13 (הוספת 5)</span>",
            "<span dir=\"rtl\">תגדל ל-40 (כפל ב-5)</span>",
            "<span dir=\"rtl\">תרד ל-3</span>"
        ],
        correctAnswer: 0,
        hint: "סטיית תקן מודדת את *ההבדלים והמרחקים* בין התלמידים. אם כולם מקבלים בדיוק את אותה תוספת (מזיזים את כולם יחד ימינה), המרחקים ביניהם לא משתנים! הפיזור נשאר זהה לחלוטין.",
        solution_steps: [
            { 
                verbal_explanation: "סטיית התקן הישנה היא 8.", 
                math_expression: "<div dir='ltr'>S = 8</div>" 
            },
            { 
                verbal_explanation: "הוספת קבוע (+5) לכל הנתונים מזיזה את עקומת הפעמון ימינה, אבל היא לא מותחת או משנה את צורתה.", 
                math_expression: "<div dir='ltr'>Shift +5</div>" 
            },
            { 
                verbal_explanation: "המרחקים היחסיים בין הנתונים נשארים בדיוק כפי שהיו. הפיזור לא השתנה.", 
                math_expression: "<div dir='ltr'>Spread = Same</div>" 
            },
            { 
                verbal_explanation: "לכן, סטיית התקן נשארת 8.", 
                math_expression: "<div dir='ltr'>S<sub>new</sub> = 8</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">תישאר 8 (לא תשתנה)</span>"
    },

    // שאלה 18
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>השפעת פעולת כפל (שינוי קנה מידה) על סטיית התקן:</strong><br>
        משקלם של חפצים בארגז מתפלג נורמלית עם סטיית תקן של 2 ק"ג.<br>
        אם נכפיל את המשקל של כל חפץ בארגז <strong>פי 3</strong>, מה תהיה סטיית התקן החדשה?`,
        options: [
            "<span dir=\"rtl\">6 ק\"ג</span>",
            "<span dir=\"rtl\">2 ק\"ג (לא תשתנה)</span>",
            "<span dir=\"rtl\">5 ק\"ג</span>",
            "<span dir=\"rtl\">9 ק\"ג</span>"
        ],
        correctAnswer: 0,
        hint: "בניגוד להוספת בונוס קבוע, פעולת כפל מותחת את כל הגרף כמו גומייה, ולכן מגדילה גם את המרחקים בין הנתונים באותו יחס! הכפילו את סטיית התקן המקורית פי 3.",
        solution_steps: [
            { 
                verbal_explanation: "סטיית התקן המקורית היא 2.", 
                math_expression: "<div dir='ltr'>S = 2</div>" 
            },
            { 
                verbal_explanation: "כאשר מכפילים את כל הנתונים במספר (קבוע), עקומת הפעמון נמתחת, והמרחקים בין הנתונים גדלים באותו היחס בדיוק.", 
                math_expression: "<div dir='ltr'>S<sub>new</sub> = S &times; 3</div>" 
            },
            { 
                verbal_explanation: "נציב ונכפיל.", 
                math_expression: "<div dir='ltr'>S<sub>new</sub> = 2 &times; 3 = 6</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">6 ק\"ג</span>"
    },

    // שאלה 19
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>מציאת מיקום הנקודה ביחידות של סטיית תקן:</strong><br>
        במבחן התקבל ממוצע של 70 וסטיית תקן של 5.<br>
        תלמיד קיבל במבחן את הציון <strong>60</strong>.<br>
        איפה הוא ממוקם על הגרף ביחס לממוצע?`,
        options: [
            "<span dir=\"rtl\">שתי סטיות תקן מתחת לממוצע (x&#772; - 2S)</span>",
            "<span dir=\"rtl\">סטיית תקן אחת מתחת לממוצע (x&#772; - 1S)</span>",
            "<span dir=\"rtl\">שתי סטיות תקן מעל הממוצע (x&#772; + 2S)</span>",
            "<span dir=\"rtl\">חצי סטיית תקן מתחת לממוצע</span>"
        ],
        correctAnswer: 0,
        hint: "חשבו את המרחק: 60 פחות 70 שווה מינוס 10. אם סטייה אחת היא 5, כמה פעמים 5 נכנס בתוך 10? לכן הוא רחוק 2 סטיות תקן. בגלל שזה מינוס (פחות מהממוצע), זה מתחת.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את המרחק של ציון התלמיד מהממוצע.", 
                math_expression: "<div dir='ltr'>60 - 70 = -10</div>" 
            },
            { 
                verbal_explanation: "המרחק הוא מינוס עשר נקודות. נחלק את המרחק בסטיית התקן (5) כדי לראות כמה סטיות תקן אלו.", 
                math_expression: "<div dir='ltr'>-10 / 5 = -2</div>" 
            },
            { 
                verbal_explanation: "התוצאה אומרת שהציון יושב בדיוק שתי סטיות תקן שמאלה (מתחת) לקו האמצע.", 
                math_expression: "<div dir='ltr'>x&#772; - 2S</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">שתי סטיות תקן מתחת לממוצע (x&#772; - 2S)</span>"
    },

    // שאלה 20
    {
        topic: "bagrut_35372",
        subTopic: "סטיית תקן",
        question_text: `<strong>שילוב סטיית תקן עם אחוזים - שאלת סיכום:</strong><br>
        אורך החיים של טלפון סלולרי מתפלג נורמלית.<br>
        הממוצע הוא 50 חודשים, וסטיית התקן היא 10 חודשים.<br>
        איזה אחוז מהטלפונים יחזיקו מעמד <strong>יותר מ-70 חודשים</strong>?`,
        options: [
            "<span dir=\"rtl\">2%</span>",
            "<span dir=\"rtl\">5%</span>",
            "<span dir=\"rtl\">16%</span>",
            "<span dir=\"rtl\">9%</span>"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו כמה סטיות תקן זה 70. 70 פחות 50 שווה 20, שזה שתי סטיות תקן שלמות מעל הממוצע (כי 10 כפול 2 = 20). שלב ב': חפשו את האחוזים שבזנב הימני, החל משתי סטיות תקן ומעלה (שתי המשבצות האחרונות: 1.5% + 0.5%).",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את המיקום הגיאומטרי של המספר 70 על הגרף. המרחק מהממוצע הוא עשרים חודשים.", 
                math_expression: "<div dir='ltr'>70 - 50 = 20</div>" 
            },
            { 
                verbal_explanation: "נחלק בסטיית התקן הידועה (10). גילינו שנקודה זו רחוקה שתי סטיות תקן ימינה.", 
                math_expression: "<div dir='ltr'>20 / 10 = +2S</div>" 
            },
            { 
                verbal_explanation: "אנו מחפשים את כל מי שהחזיק 'יותר מזה', כלומר את הזנב הימני החל מנקודה זו.", 
                math_expression: "<div dir='ltr'>P = 1.5 + 0.5</div>" 
            },
            { 
                verbal_explanation: "נחבר את השטחים הקטנים בקצה הגרף לקבלת האחוז הכולל.", 
                math_expression: "<div dir='ltr'>P = 2%</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">2%</span>"
    },// ---------------------------------------------------------
    // תת נושא 3: ממוצע בעקומת פעמון (שאלות 21-30)
    // ---------------------------------------------------------

    // שאלה 21
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>מציאת ממוצע מתוך שתי נקודות סימטריות:</strong><br>
        הציונים במבחן מתפלגים נורמלית.<br>
        ידוע כי הציון 50 והציון 80 נמצאים במרחקים שווים בדיוק מהממוצע, משני צדדיו.<br>
        מהו <strong>הממוצע</strong> במבחן זה?`,
        options: [
            "<span dir=\"rtl\">65</span>",
            "<span dir=\"rtl\">60</span>",
            "<span dir=\"rtl\">70</span>",
            "<span dir=\"rtl\">130</span>"
        ],
        correctAnswer: 0,
        hint: "עקומת הפעמון היא סימטרית לחלוטין כמו מראה. הממוצע יושב בדיוק באמצע. כדי למצוא את האמצע של שני מספרים, חשבו את הממוצע החשבוני שלהם (חברו אותם וחלקו ב-2).",
        solution_steps: [
            { 
                verbal_explanation: "התפלגות נורמלית היא בעלת סימטריה מושלמת. לכן, הממוצע ממוקם בדיוק במרכז העקומה.", 
                math_expression: "<div dir='ltr'>x&#772; = <bdi dir='rtl'>אמצע</bdi></div>" 
            },
            { 
                verbal_explanation: "שני המספרים שניתנו נמצאים במרחק שווה, ולכן הם סימטריים סביב הממוצע.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 50 , x<sub>2</sub> = 80</div>" 
            },
            { 
                verbal_explanation: "נחשב את האמצע המדויק על ידי ממוצע חשבוני של שניהם.", 
                math_expression: "<div dir='ltr'>x&#772; = (50 + 80) / 2</div>" 
            },
            { 
                verbal_explanation: "נחבר את המונה (חמישים ועוד שמונים).", 
                math_expression: "<div dir='ltr'>x&#772; = 130 / 2</div>" 
            },
            { 
                verbal_explanation: "נחלק בשתיים כדי לקבל את מרכז ההתפלגות.", 
                math_expression: "<div dir='ltr'>x&#772; = 65</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">65</span>"
    },

    // שאלה 22
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>מציאת ממוצע מתוך נתון קיצון עליון:</strong><br>
        המשקל של שקיות קמח מתפלג נורמלית, עם סטיית תקן של 5 גרם (S = 5).<br>
        ידוע כי משקל של 1010 גרם נמצא במרחק של <strong>שתי סטיות תקן מעל הממוצע</strong>.<br>
        מהו המשקל ה<strong>ממוצע</strong> (x&#772;) של שקית קמח?`,
        options: [
            "<span dir=\"rtl\">1000 גרם</span>",
            "<span dir=\"rtl\">1005 גרם</span>",
            "<span dir=\"rtl\">1020 גרם</span>",
            "<span dir=\"rtl\">990 גרם</span>"
        ],
        correctAnswer: 0,
        hint: "הנקודה 1010 נמצאת 2 סטיות תקן מעל לממוצע. כלומר הממוצע קטן ממנה ב-2 סטיות תקן. חשבו כמה זה 2 סטיות תקן (2 כפול 5), וחסרו את התוצאה מ-1010.",
        solution_steps: [
            { 
                verbal_explanation: "נחלץ את הנתונים. הנקודה שלנו נמצאת שתי סטיות תקן ימינה מהממוצע.", 
                math_expression: "<div dir='ltr'>x = 1010 , S = 5</div>" 
            },
            { 
                verbal_explanation: "נבנה משוואה: הממוצע ועוד פעמיים סטיית תקן שווה לנקודה הנתונה.", 
                math_expression: "<div dir='ltr'>x&#772; + 2S = 1010</div>" 
            },
            { 
                verbal_explanation: "נציב את ערכה של סטיית התקן (5).", 
                math_expression: "<div dir='ltr'>x&#772; + 2 &times; 5 = 1010</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל. שתי סטיות תקן שוות לעשרה גרם.", 
                math_expression: "<div dir='ltr'>x&#772; + 10 = 1010</div>" 
            },
            { 
                verbal_explanation: "נעביר את העשר לאגף הימני ונחסר כדי לגלות את הממוצע.", 
                math_expression: "<div dir='ltr'>x&#772; = 1010 - 10 = 1000</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">1000 גרם</span>"
    },

    // שאלה 23
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>מציאת ממוצע מתוך נתון קיצון תחתון:</strong><br>
        הציונים במבחן ארצי מתפלגים נורמלית, עם סטיית תקן של 8 (S = 8).<br>
        ידוע כי ציון של 54 ממוקם <strong>סטיית תקן אחת מתחת לממוצע</strong>.<br>
        מהו הציון ה<strong>ממוצע</strong>?`,
        options: [
            "<span dir=\"rtl\">62</span>",
            "<span dir=\"rtl\">46</span>",
            "<span dir=\"rtl\">70</span>",
            "<span dir=\"rtl\">60</span>"
        ],
        correctAnswer: 0,
        hint: "אם 54 הוא סטיית תקן אחת *מתחת* לממוצע, אז כדי להגיע בחזרה לממוצע עליכם *להוסיף* סטיית תקן אחת ל-54.",
        solution_steps: [
            { 
                verbal_explanation: "הנקודה הנתונה נמצאת מצד שמאל לממוצע, במרחק של קפיצה אחת.", 
                math_expression: "<div dir='ltr'>x = 54 , S = 8</div>" 
            },
            { 
                verbal_explanation: "נרשום משוואה: הממוצע פחות סטיית תקן אחת שווה ל-54.", 
                math_expression: "<div dir='ltr'>x&#772; - 1S = 54</div>" 
            },
            { 
                verbal_explanation: "נציב את הסטייה הידועה.", 
                math_expression: "<div dir='ltr'>x&#772; - 8 = 54</div>" 
            },
            { 
                verbal_explanation: "נעביר את מינוס שמונה לאגף השני כחיבור, כדי למצוא את מרכז העקומה.", 
                math_expression: "<div dir='ltr'>x&#772; = 54 + 8</div>" 
            },
            { 
                verbal_explanation: "נחבר ונקבל את הממוצע המדויק.", 
                math_expression: "<div dir='ltr'>x&#772; = 62</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">62</span>"
    },

    // שאלה 24
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>השפעת תוספת קבועה (בונוס) על הממוצע:</strong><br>
        במבחן בפיזיקה התקבל ממוצע של 70.<br>
        המורה החליטה להוסיף <strong>5 נקודות בונוס לכל תלמיד בכיתה</strong>, ללא יוצא מן הכלל.<br>
        מה יהיה ה<strong>ממוצע החדש</strong> של הציונים?`,
        options: [
            "<span dir=\"rtl\">75</span>",
            "<span dir=\"rtl\">70 (לא ישתנה)</span>",
            "<span dir=\"rtl\">350</span>",
            "<span dir=\"rtl\">לא ניתן לדעת</span>"
        ],
        correctAnswer: 0,
        hint: "זוכרים את חוקי הסטטיסטיקה? כשמוסיפים מספר קבוע לכל אחד מהנתונים, כל גרף הפעמון פשוט 'זז' ימינה בדיוק באותו מספר, ולכן הממוצע עולה בדיוק באותו הבונוס.",
        solution_steps: [
            { 
                verbal_explanation: "נתון שהממוצע הישן לפני השינוי הוא שבעים.", 
                math_expression: "<div dir='ltr'>x&#772;<sub>old</sub> = 70</div>" 
            },
            { 
                verbal_explanation: "כל תלמיד קיבל תוספת קבועה של חמש נקודות. פעולה זו למעשה גוררת את כל הגרף ימינה.", 
                math_expression: "<div dir='ltr'>+ 5</div>" 
            },
            { 
                verbal_explanation: "כאשר כל נתון בקבוצה עולה באותו מספר, גם מרכז הכובד (הממוצע) עולה בדיוק באותו מספר.", 
                math_expression: "<div dir='ltr'>x&#772;<sub>new</sub> = x&#772;<sub>old</sub> + 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את הממוצע המעודכן לאחר הבונוס.", 
                math_expression: "<div dir='ltr'>x&#772;<sub>new</sub> = 70 + 5 = 75</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">75</span>"
    },

    // שאלה 25
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>קריאת ממוצע מתוך גרף (הנקודה הגבוהה ביותר):</strong><br>
        לפניכם גרף של התפלגות נורמלית.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 300 120" width="100%" height="120" style="max-width:300px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 20 100 C 80 100, 120 20, 150 20 C 180 20, 220 100, 280 100" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="150" cy="20" r="5" fill="#ef4444"/>
            <line x1="150" y1="20" x2="150" y2="100" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="150" y="115" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444" text-anchor="middle">48</text>
        </svg>
        </div>
        ידוע כי נקודת השיא (הפסגה) של הפעמון נופלת בדיוק מעל המספר 48 בציר.<br>
        מה ניתן להסיק מכך?`,
        options: [
            "<span dir=\"rtl\">הממוצע של ההתפלגות הוא 48</span>",
            "<span dir=\"rtl\">סטיית התקן היא 48</span>",
            "<span dir=\"rtl\">48 אחוז מהאוכלוסייה נמצאים שם</span>",
            "<span dir=\"rtl\">הציון המקסימלי האפשרי הוא 48</span>"
        ],
        correctAnswer: 0,
        hint: "בעקומת הפעמון, רוב האנשים מקבלים ציון שקרוב לממוצע. לכן, הנקודה הגבוהה ביותר בגרף (הפסגה) מייצגת את האזור השכיח ביותר, שהוא תמיד הממוצע.",
        solution_steps: [
            { 
                verbal_explanation: "גרף ההתפלגות הנורמלית מתאר שכיחות. ככל שהגרף גבוה יותר, כך יש יותר אנשים שקיבלו את אותו הציון.", 
                math_expression: "<div dir='ltr'>Height = <bdi dir='rtl'>כמות קהל</bdi></div>" 
            },
            { 
                verbal_explanation: "הפסגה של פעמון גאוס מסמלת את הציון שאותו קיבלו הכי הרבה אנשים (השכיח).", 
                math_expression: "<div dir='ltr'>Peak = <bdi dir='rtl'>הכי נפוץ</bdi></div>" 
            },
            { 
                verbal_explanation: "בהתפלגות נורמלית תקינה, הציון השכיח ביותר שווה תמיד לציון הממוצע (וגם לחציון).", 
                math_expression: "<div dir='ltr'>Peak = x&#772;</div>" 
            },
            { 
                verbal_explanation: "לכן, מכיוון שהפסגה יורדת אל המספר 48, זהו הממוצע המדויק.", 
                math_expression: "<div dir='ltr'>x&#772; = 48</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">הממוצע של ההתפלגות הוא 48</span>"
    },

    // שאלה 26
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>מציאת ממוצע מתוך נתון של 50%:</strong><br>
        גובה של עצים ביער מתפלג נורמלית.<br>
        ידוע ש- <strong>50%</strong> מהעצים ביער הם בעלי גובה של <strong>יותר מ-12 מטרים</strong>.<br>
        מהו הגובה הממוצע (x&#772;) של עץ ביער?`,
        options: [
            "<span dir=\"rtl\">12 מטרים</span>",
            "<span dir=\"rtl\">6 מטרים</span>",
            "<span dir=\"rtl\">24 מטרים</span>",
            "<span dir=\"rtl\">לא ניתן לדעת ללא סטיית תקן</span>"
        ],
        correctAnswer: 0,
        hint: "חצי מהאוכלוסייה (50%) נמצאת מעל הממוצע, וחצי מתחתיו. אם בדיוק 50% מהעצים גבוהים מ-12, זה אומר ש-12 הוא בדיוק קו האמצע שחוצה את הגרף - כלומר, הממוצע!",
        solution_steps: [
            { 
                verbal_explanation: "אנו יודעים שעקומת פעמון מכילה 100 אחוזים של האוכלוסייה.", 
                math_expression: "<div dir='ltr'>P = 100%</div>" 
            },
            { 
                verbal_explanation: "קו הממוצע חותך את השטח לשני חצאים שווים לחלוטין (50 אחוז בכל צד).", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>ימין</bdi> = 50% , <bdi dir='rtl'>שמאל</bdi> = 50%</div>" 
            },
            { 
                verbal_explanation: "נתון שכל מי שגדול מ-12 מטרים מהווה 50 אחוז. כלומר, 12 הוא קו הגבול שחותך את הגרף בדיוק באמצע.", 
                math_expression: "<div dir='ltr'>P(x > 12) = 50%</div>" 
            },
            { 
                verbal_explanation: "הנקודה היחידה שמחלקת את הגרף חצי-חצי היא הממוצע. לכן 12 הוא הממוצע.", 
                math_expression: "<div dir='ltr'>x&#772; = 12</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">12 מטרים</span>"
    },

    // שאלה 27
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>מציאת ממוצע מתוך אחוז הצלחה (16% תחתונים):</strong><br>
        הציונים במבחן קבלה מתפלגים נורמלית. סטיית התקן היא 6.<br>
        ידוע כי בדיוק <strong>16% מהנבחנים קיבלו ציון נמוך מ-54</strong>.<br>
        מהו הציון הממוצע? (רמז: היכן נמצאים 16% התחתונים בגרף הפעמון?)`,
        options: [
            "<span dir=\"rtl\">60</span>",
            "<span dir=\"rtl\">48</span>",
            "<span dir=\"rtl\">70</span>",
            "<span dir=\"rtl\">66</span>"
        ],
        correctAnswer: 0,
        hint: "בואו נחבר אחוזים משמאל לימין: 0.5 + 1.5 + 5 + 9 = 16%. זה אומר ש-16% התחתונים נגמרים בדיוק 'סטיית תקן אחת מתחת לממוצע'. אז 54 הוא הציון של (ממוצע פחות סטיית תקן אחת). אם הסטייה היא 6, מה הממוצע?",
        solution_steps: [
            { 
                verbal_explanation: "נחפש בגרף איזו נקודה משאירה בדיוק 16 אחוז מהאוכלוסייה משמאל לה (קטן ממנה).", 
                math_expression: "<div dir='ltr'>0.5 + 1.5 + 5 + 9 = 16%</div>" 
            },
            { 
                verbal_explanation: "חיבור המשבצות מראה שנקודה זו יושבת בדיוק במרחק של סטיית תקן אחת שמאלה מקו הממוצע.", 
                math_expression: "<div dir='ltr'>x = x&#772; - 1S</div>" 
            },
            { 
                verbal_explanation: "לפי הנתונים, הציון בנקודה הזו הוא 54, וסטיית התקן היא 6. נציב במשוואה.", 
                math_expression: "<div dir='ltr'>54 = x&#772; - 6</div>" 
            },
            { 
                verbal_explanation: "נעביר את השש אגף (כפלוס) כדי לגלות את הממוצע.", 
                math_expression: "<div dir='ltr'>x&#772; = 54 + 6 = 60</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">60</span>"
    },

    // שאלה 28
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>מציאת ממוצע מתוך אחוז הצלחה (2% עליונים):</strong><br>
        אורך קפיצה לרוחק של ספורטאים מתפלג נורמלית עם סטיית תקן של 0.2 מטר.<br>
        רק <strong>2% מהקופצים</strong> הצליחו לעבור מרחק של <strong>7.4 מטרים</strong>.<br>
        מהו המרחק הממוצע של הקופצים?`,
        options: [
            "<span dir=\"rtl\">7.0 מטרים</span>",
            "<span dir=\"rtl\">7.2 מטרים</span>",
            "<span dir=\"rtl\">7.8 מטרים</span>",
            "<span dir=\"rtl\">6.8 מטרים</span>"
        ],
        correctAnswer: 0,
        hint: "2% העליונים הם שתי המשבצות האחרונות מימין (1.5% + 0.5%). הנקודה שבה הן מתחילות היא בדיוק 'שתי סטיות תקן מעל הממוצע'. כלומר: 7.4 שווה לממוצע פלוס פעמיים 0.2. חשבו את הממוצע.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה מהו הזנב הימני שכולל 2 אחוזים. זהו חיבור של המשבצת הלפני אחרונה והאחרונה.", 
                math_expression: "<div dir='ltr'>1.5% + 0.5% = 2%</div>" 
            },
            { 
                verbal_explanation: "נקודת ההתחלה של אזור זה נמצאת שתי סטיות תקן ימינה מהממוצע.", 
                math_expression: "<div dir='ltr'>x = x&#772; + 2S</div>" 
            },
            { 
                verbal_explanation: "נציב את המרחק שניתן (7.4) ואת סטיית התקן (0.2).", 
                math_expression: "<div dir='ltr'>7.4 = x&#772; + 2 &times; 0.2</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל של הסטייה. פעמיים 0.2 זה 0.4.", 
                math_expression: "<div dir='ltr'>7.4 = x&#772; + 0.4</div>" 
            },
            { 
                verbal_explanation: "נחסר 0.4 מ-7.4 ונגלה את הממוצע.", 
                math_expression: "<div dir='ltr'>x&#772; = 7.4 - 0.4 = 7.0</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">7.0 מטרים</span>"
    },

    // שאלה 29
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>השפעת פעולת כפל על הממוצע:</strong><br>
        המשכורת של עובדים בחברה מתפלגת נורמלית, עם ממוצע של 8,000 שקלים.<br>
        לרגל החג, המנכ"ל החליט להעניק לכולם העלאה של <strong>10%</strong> (כלומר להכפיל כל משכורת ב-1.10).<br>
        מה יהיה ה<strong>ממוצע החדש</strong>?`,
        options: [
            "<span dir=\"rtl\">8,800 שקלים</span>",
            "<span dir=\"rtl\">8,000 שקלים (לא משתנה)</span>",
            "<span dir=\"rtl\">8,010 שקלים</span>",
            "<span dir=\"rtl\">10,000 שקלים</span>"
        ],
        correctAnswer: 0,
        hint: "כמו שראינו קודם עם סטיית התקן, פעולת כפל משפיעה על הכל. כשמכפילים את כל הנתונים באותו יחס, גם הממוצע (מרכז הכובד) מוכפל בדיוק באותו יחס. הכפילו את 8,000 ב-1.10.",
        solution_steps: [
            { 
                verbal_explanation: "הממוצע הישן נתון לנו.", 
                math_expression: "<div dir='ltr'>x&#772;<sub>old</sub> = 8000</div>" 
            },
            { 
                verbal_explanation: "כל המשכורות מוכפלות ביחס קבוע של עלייה בעשרה אחוזים.", 
                math_expression: "<div dir='ltr'>Factor = 1.10</div>" 
            },
            { 
                verbal_explanation: "כאשר מכפילים נתונים, הממוצע 'נמתח' ומוכפל בדיוק באותו יחס.", 
                math_expression: "<div dir='ltr'>x&#772;<sub>new</sub> = x&#772;<sub>old</sub> &times; 1.10</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל של שמונת אלפים ב-1.10 למציאת הממוצע המעודכן.", 
                math_expression: "<div dir='ltr'>x&#772;<sub>new</sub> = 8800</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">8,800 שקלים</span>"
    },

    // שאלה 30
    {
        topic: "bagrut_35372",
        subTopic: "ממוצע",
        question_text: `<strong>שאלת סיכום לחילוץ ממוצע מתוך טווח סימטרי:</strong><br>
        ידוע כי טווח הציונים שבין 60 ל-80 מכיל בתוכו <strong>בדיוק 38% מהתלמידים, אשר נמצאים במרכז ההתפלגות</strong>.<br>
        הטווח סימטרי סביב הממוצע.<br>
        מהו הממוצע ומהי סטיית התקן?`,
        options: [
            "<span dir=\"rtl\">ממוצע 70, סטיית תקן 20</span>",
            "<span dir=\"rtl\">ממוצע 70, סטיית תקן 10</span>",
            "<span dir=\"rtl\">ממוצע 60, סטיית תקן 20</span>",
            "<span dir=\"rtl\">ממוצע 80, סטיית תקן 10</span>"
        ],
        correctAnswer: 0,
        hint: "38% המרכזיים מורכבים מהמשבצות 19% ו-19% שמשני צידי הממוצע. זה אומר ש-60 נמצא חצי סטיית תקן שמאלה, ו-80 הוא חצי סטיית תקן ימינה. הממוצע הוא באמצע ביניהם. כמה זה (60+80) חלקי 2? ואם חצי סטיית תקן זה המרחק מ-70 ל-80 (10), כמה תהיה סטייה שלמה?",
        solution_steps: [
            { 
                verbal_explanation: "קודם כל נמצא את הממוצע. מאחר והטווח המדובר סימטרי ויושב במרכז, הממוצע נמצא בדיוק באמצע שתי הנקודות.", 
                math_expression: "<div dir='ltr'>x&#772; = (60 + 80) / 2 = 140 / 2 = 70</div>" 
            },
            { 
                verbal_explanation: "כעת ננתח את האחוז הנתון. 38% מרכזיים הם חיבור של שתי המשבצות הצמודות לממוצע.", 
                math_expression: "<div dir='ltr'>19% + 19% = 38%</div>" 
            },
            { 
                verbal_explanation: "משבצת אחת (19%) מייצגת מרחק של חצי סטיית תקן. נבדוק מה המרחק בנקודות מהממוצע (70) לקצה הטווח (80).", 
                math_expression: "<div dir='ltr'>80 - 70 = 10</div>" 
            },
            { 
                verbal_explanation: "מצאנו שחצי סטיית תקן שווה ל-10 נקודות.", 
                math_expression: "<div dir='ltr'>0.5S = 10</div>" 
            },
            { 
                verbal_explanation: "נכפיל בשתיים כדי למצוא את סטיית התקן השלמה.", 
                math_expression: "<div dir='ltr'>S = 10 &times; 2 = 20</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">ממוצע 70, סטיית תקן 20</span>"
    },

    // ---------------------------------------------------------
    // תת נושא 4: חישוב הסתברות (שטחים) לפי תחומים (שאלות 31-40)
    // ---------------------------------------------------------

    // שאלה 31
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>חישוב אחוזים בין מינוס חצי סטייה לפלוס סטייה שלמה:</strong><br>
        איזה אחוז מהאוכלוסייה נמצא בטווח שבין <strong>חצי סטיית תקן מתחת לממוצע</strong> (x&#772; - 0.5S) לבין <strong>סטיית תקן אחת מעל הממוצע</strong> (x&#772; + 1S)?<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 300 120" width="100%" height="120" style="max-width:300px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 20 100 C 80 100, 120 20, 150 20 C 180 20, 220 100, 280 100" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-width="2"/>
            <path d="M 120 100 L 120 35 C 130 25, 140 20, 150 20 C 160 20, 170 25, 180 35 L 180 100 Z" fill="rgba(34,197,94,0.3)"/>
            <path d="M 180 100 L 180 35 C 190 45, 200 60, 210 75 L 210 100 Z" fill="rgba(34,197,94,0.3)"/>
            <line x1="150" y1="20" x2="150" y2="100" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,3"/>
            <line x1="120" y1="35" x2="120" y2="100" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="210" y1="75" x2="210" y2="100" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="120" y="115" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">-0.5S</text>
            <text x="150" y="115" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">x&#772;</text>
            <text x="210" y="115" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle">+1S</text>
        </svg>
        </div>`,
        options: [
            "<span dir=\"rtl\">53%</span>",
            "<span dir=\"rtl\">34%</span>",
            "<span dir=\"rtl\">68%</span>",
            "<span dir=\"rtl\">38%</span>"
        ],
        correctAnswer: 0,
        hint: "פרקו את השטח למשבצות לפי דף הנוסחאות: מצד שמאל לממוצע יש לנו משבצת אחת (19%). מצד ימין לממוצע יש לנו שתי משבצות עד שמגיעים ל-1S (שהן 19% + 15%). חברו את הכל יחד: 19 + 19 + 15.",
        solution_steps: [
            { 
                verbal_explanation: "השטח המבוקש מורכב משלוש עמודות נפרדות מהגרף. עמודה אחת משמאל, ושתיים מימין.", 
                math_expression: "<div dir='ltr'>P = P<sub>left</sub> + P<sub>right</sub></div>" 
            },
            { 
                verbal_explanation: "החלק השמאלי, מהממוצע ועד מינוס חצי סטייה, מכיל את משבצת ה-19 אחוזים הראשונה.", 
                math_expression: "<div dir='ltr'>P<sub>left</sub> = 19%</div>" 
            },
            { 
                verbal_explanation: "החלק הימני, מהממוצע ועד פלוס סטייה שלמה, מכיל שתי משבצות: 19 אחוזים ו-15 אחוזים.", 
                math_expression: "<div dir='ltr'>P<sub>right</sub> = 19% + 15% = 34%</div>" 
            },
            { 
                verbal_explanation: "נחבר את הצד השמאלי והצד הימני יחד.", 
                math_expression: "<div dir='ltr'>P = 19 + 34</div>" 
            },
            { 
                verbal_explanation: "נקבל את סך כל השטח המבוקש.", 
                math_expression: "<div dir='ltr'>P = 53%</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">53%</span>"
    },

    // שאלה 32
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>חישוב שטח חלקי מאותו צד של הממוצע:</strong><br>
        איזה אחוז מהאוכלוסייה נמצא בטווח שבין הממוצע לבין <strong>סטיית תקן וחצי</strong> מעליו (x&#772; &rarr; x&#772; + 1.5S)?`,
        options: [
            "<span dir=\"rtl\">43%</span>",
            "<span dir=\"rtl\">34%</span>",
            "<span dir=\"rtl\">19%</span>",
            "<span dir=\"rtl\">50%</span>"
        ],
        correctAnswer: 0,
        hint: "המרחק הזה מכסה את שלוש המשבצות הראשונות שמימין לממוצע בדף הנוסחאות. חברו אותן: 19% + 15% + 9%.",
        solution_steps: [
            { 
                verbal_explanation: "אנו מחפשים את השטח הרציף מהאמצע (הממוצע) ועד לקפיצה השלישית ימינה (סטייה וחצי).", 
                math_expression: "<div dir='ltr'>x&#772; &rarr; x&#772; + 1.5S</div>" 
            },
            { 
                verbal_explanation: "נרשום את ערך המשבצת הראשונה (חצי סטייה).", 
                math_expression: "<div dir='ltr'>P<sub>1</sub> = 19%</div>" 
            },
            { 
                verbal_explanation: "נוסיף את המשבצת השנייה (עד סטייה שלמה).", 
                math_expression: "<div dir='ltr'>P<sub>2</sub> = 15%</div>" 
            },
            { 
                verbal_explanation: "נוסיף את המשבצת השלישית (עד סטייה וחצי).", 
                math_expression: "<div dir='ltr'>P<sub>3</sub> = 9%</div>" 
            },
            { 
                verbal_explanation: "נחבר את שלושת המספרים יחד.", 
                math_expression: "<div dir='ltr'>P = 19 + 15 + 9 = 43%</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">43%</span>"
    },

    // שאלה 33
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>חישוב טווח רחב סביב הממוצע:</strong><br>
        הציונים במבחן מתפלגים נורמלית.<br>
        מהי ההסתברות (באחוזים) שתלמיד יקבל ציון שנמצא בטווח שבין <strong>סטיית תקן אחת מתחת לממוצע</strong> לבין <strong>סטיית תקן וחצי מעל הממוצע</strong>?`,
        options: [
            "<span dir=\"rtl\">77%</span>",
            "<span dir=\"rtl\">68%</span>",
            "<span dir=\"rtl\">86%</span>",
            "<span dir=\"rtl\">53%</span>"
        ],
        correctAnswer: 0,
        hint: "צד שמאלי: ממינוס סטיית תקן אחת ועד לאמצע. (15% + 19% = 34%). צד ימני: מהאמצע ועד פלוס סטיית תקן וחצי (19% + 15% + 9% = 43%). חברו את שני הצדדים.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את האחוזים בשטח שמשמאל לממוצע. סטיית תקן אחת שמאלה מכסה שתי משבצות.", 
                math_expression: "<div dir='ltr'>P<sub>left</sub> = 15 + 19 = 34%</div>" 
            },
            { 
                verbal_explanation: "נחשב את השטח שמימין לממוצע. סטיית תקן וחצי ימינה מכסה שלוש משבצות.", 
                math_expression: "<div dir='ltr'>P<sub>right</sub> = 19 + 15 + 9 = 43%</div>" 
            },
            { 
                verbal_explanation: "השטח הכולל הוא החיבור של שני הצדדים שחישבנו.", 
                math_expression: "<div dir='ltr'>P = 34 + 43</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור לקבלת ההסתברות הכוללת של הטווח הזה.", 
                math_expression: "<div dir='ltr'>P = 77%</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">77%</span>"
    },

    // שאלה 34
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>חישוב אחוזים בקצה השמאלי (זנב תחתון):</strong><br>
        איזה אחוז מהאוכלוסייה מקבל ערך הנמוך מ- <strong>שתי סטיות תקן מתחת לממוצע</strong> (x < x&#772; - 2S)?`,
        options: [
            "<span dir=\"rtl\">2%</span>",
            "<span dir=\"rtl\">5%</span>",
            "<span dir=\"rtl\">16%</span>",
            "<span dir=\"rtl\">9%</span>"
        ],
        correctAnswer: 0,
        hint: "הקצה השמאלי קיצוני בדיוק כמו הימני. הוא מתחיל ממינוס שתי סטיות תקן ומורכב משתי המשבצות השמאליות ביותר בגרף. אלו הן: 1.5% ואחריה 0.5%.",
        solution_steps: [
            { 
                verbal_explanation: "ערך קטן משתי סטיות תקן שמאלה מכניס אותנו לאזור הזנב השמאלי הקיצוני.", 
                math_expression: "<div dir='ltr'>x < x&#772; - 2S</div>" 
            },
            { 
                verbal_explanation: "על פי גרף משרד החינוך, הזנב הזה מורכב משתי המשבצות האחרונות. המשבצת הלפני אחרונה היא אחוז וחצי.", 
                math_expression: "<div dir='ltr'>P<sub>1</sub> = 1.5%</div>" 
            },
            { 
                verbal_explanation: "המשבצת האחרונה לחלוטין היא חצי אחוז.", 
                math_expression: "<div dir='ltr'>P<sub>2</sub> = 0.5%</div>" 
            },
            { 
                verbal_explanation: "נחבר אותן כדי לקבל את כל השטח הנותר עד לאפס.", 
                math_expression: "<div dir='ltr'>P = 1.5 + 0.5 = 2%</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">2%</span>"
    },

    // שאלה 35
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>חישוב הסתברות מתוך נתונים מספריים:</strong><br>
        ההכנסה החודשית בחברה מתפלגת נורמלית.<br>
        ממוצע ההכנסה: 10,000 שקלים. סטיית תקן: 1,000 שקלים.<br>
        מהי ההסתברות (באחוזים) לבחור עובד שמשתכר בין <strong>9,000 ל- 11,500 שקלים</strong>?`,
        options: [
            "<span dir=\"rtl\">77%</span>",
            "<span dir=\"rtl\">68%</span>",
            "<span dir=\"rtl\">43%</span>",
            "<span dir=\"rtl\">34%</span>"
        ],
        correctAnswer: 0,
        hint: "תרגמו למרחקים: 9,000 זה סטיית תקן אחת שמאלה (10000 פחות 1000). 11,500 זה סטיית תקן וחצי ימינה. חברו את האחוזים שבטווח זה: ממינוס 1S ועד פלוס 1.5S.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק את מיקום המשכורת הנמוכה. היא רחוקה באלף מהממוצע, כלומר סטיית תקן אחת אחורה.", 
                math_expression: "<div dir='ltr'>9000 = x&#772; - 1S</div>" 
            },
            { 
                verbal_explanation: "נבדוק את המשכורת הגבוהה. היא רחוקה באלף וחמש מאות, שזה פעם וחצי של סטיית התקן (1000).", 
                math_expression: "<div dir='ltr'>11500 = x&#772; + 1.5S</div>" 
            },
            { 
                verbal_explanation: "כעת נחבר את האחוזים מאזור מינוס אחת ועד הממוצע (שתי משבצות).", 
                math_expression: "<div dir='ltr'>P<sub>left</sub> = 15 + 19 = 34%</div>" 
            },
            { 
                verbal_explanation: "נחבר את האחוזים מהממוצע ועד פלוס אחד וחצי (שלוש משבצות).", 
                math_expression: "<div dir='ltr'>P<sub>right</sub> = 19 + 15 + 9 = 43%</div>" 
            },
            { 
                verbal_explanation: "נחבר את שני הצדדים למציאת ההסתברות המלאה (כמו בשאלה 33).", 
                math_expression: "<div dir='ltr'>P = 34 + 43 = 77%</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">77%</span>"
    },

    // שאלה 36
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>מציאת כמות מתוך תחום סימטרי רחב (בעיה מילולית):</strong><br>
        מפעל מייצר 500 נורות ביום. אורך חייהן מתפלג נורמלית.<br>
        ממוצע שעות העבודה: 50 שעות. סטיית תקן: 4 שעות.<br>
        כמה נורות (מתוך ה-500) צפויות לעבוד בין <strong>42 ל- 58 שעות</strong>?`,
        options: [
            "<span dir=\"rtl\">477 נורות</span>",
            "<span dir=\"rtl\">480 נורות</span>",
            "<span dir=\"rtl\">400 נורות</span>",
            "<span dir=\"rtl\">340 נורות</span>"
        ],
        correctAnswer: 0,
        hint: "שלב א': 42 זה שתי סטיות מתחת (50 פחות 8). 58 זה שתי סטיות מעל. הטווח הוא בין 2S- ל- 2S+. השטח הוא (19+15+9+5) כפול שני הצדדים = 95.5%. שלב ב': חשבו כמה זה 95.5% מתוך 500.",
        solution_steps: [
            { 
                verbal_explanation: "הנקודה התחתונה רחוקה 8 שעות מהממוצע. מכיוון שסטייה היא 4, היא רחוקה שתי סטיות תקן שמאלה.", 
                math_expression: "<div dir='ltr'>42 = x&#772; - 2S</div>" 
            },
            { 
                verbal_explanation: "הנקודה העליונה גם היא רחוקה 8 שעות מהממוצע, ולכן היא שתי סטיות ימינה. הטווח הוא סימטרי לחלוטין.", 
                math_expression: "<div dir='ltr'>58 = x&#772; + 2S</div>" 
            },
            { 
                verbal_explanation: "נחשב את האחוזים של צד אחד משני אלו (ארבע משבצות ראשונות).", 
                math_expression: "<div dir='ltr'>P<sub>side</sub> = 19 + 15 + 9 + 5 = 48%</div>" 
            },
            { 
                verbal_explanation: "נכפיל בשתיים כי הטווח זהה משני הצדדים.", 
                math_expression: "<div dir='ltr'>P = 48 &times; 2 = 96% = 0.96</div>" 
            },
            { 
                verbal_explanation: "נכפיל את האחוז העשרוני שמצאנו בסך כל הנורות (500) כדי לקבל את הכמות הפיזית שלהן.", 
                math_expression: "<div dir='ltr'>N = 0.96 &times; 500 = 480</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">480 נורות</span>"
    },

    // שאלה 37
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>חישוב השטח 'החיצוני' לעקומה (המשלים):</strong><br>
        איזה אחוז מהאוכלוסייה נמצא <strong>מחוץ</strong> לטווח של סטיית תקן אחת מסביב לממוצע?<br>
        (כלומר, קטן מ- x&#772; - 1S או גדול מ- x&#772; + 1S).`,
        options: [
            "<span dir=\"rtl\">32%</span>",
            "<span dir=\"rtl\">68%</span>",
            "<span dir=\"rtl\">16%</span>",
            "<span dir=\"rtl\">5%</span>"
        ],
        correctAnswer: 0,
        hint: "הדרך הקלה ביותר היא לחשב את השטח 'הפנימי' ואז לחסר אותו מ-100%. בפנים יש לנו 34% מימין ו-34% משמאל (סך הכל 68%). כמה נשאר בחוץ?",
        solution_steps: [
            { 
                verbal_explanation: "אנו מתבקשים למצוא את האחוז הקיצוני שנמצא הרחק מהמרכז, בשני קצות הגרף בו זמנית.", 
                math_expression: "<div dir='ltr'>P = P(x < -1S) + P(x > 1S)</div>" 
            },
            { 
                verbal_explanation: "נחשב קודם מה יש לנו 'בפנים', בתוך הטווח של סטיית תקן אחת. יש לנו את שתי המשבצות הראשונות בכל צד.", 
                math_expression: "<div dir='ltr'>P<sub>inside</sub> = (19 + 15) &times; 2</div>" 
            },
            { 
                verbal_explanation: "חישוב פנימי מראה שיש שם שישים ושמונה אחוזים.", 
                math_expression: "<div dir='ltr'>P<sub>inside</sub> = 34 &times; 2 = 68%</div>" 
            },
            { 
                verbal_explanation: "מכיוון שסך כל הגרף הוא מאה אחוז, 'הבחוץ' הוא המשלים של 'הבפנים'.", 
                math_expression: "<div dir='ltr'>P<sub>outside</sub> = 100 - 68</div>" 
            },
            { 
                verbal_explanation: "נחסר ונקבל את התוצאה.", 
                math_expression: "<div dir='ltr'>P = 32%</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">32%</span>"
    },

    // שאלה 38
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>חישוב הסתברות באזור לא סימטרי ומציאת כמות:</strong><br>
        נתונה התפלגות נורמלית עם ממוצע 50 וסטיית תקן 5.<br>
        הקבוצה כולה מונה 200 אנשים.<br>
        כמה אנשים יימצאו בטווח שבין <strong>45 ל- 62.5</strong>?`,
        options: [
            "<span dir=\"rtl\">167 אנשים</span>",
            "<span dir=\"rtl\">180 אנשים</span>",
            "<span dir=\"rtl\">100 אנשים</span>",
            "<span dir=\"rtl\">150 אנשים</span>"
        ],
        correctAnswer: 0,
        hint: "45 זה סטיית תקן 1 שמאלה (19+15=34%). 62.5 זה 2.5 סטיות תקן ימינה (19+15+9+5+1.5=49.5%). סכמו את האחוזים (83.5%). לבסוף, מצאו כמה זה 83.5% מתוך 200.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק את 45. הוא רחוק 5 מהממוצע (50), ולכן מדובר בסטיית תקן אחת למטה.", 
                math_expression: "<div dir='ltr'>45 = x&#772; - 1S</div>" 
            },
            { 
                verbal_explanation: "נבדוק את 62.5. הוא רחוק 12.5 מהממוצע. נחלק בסטייה (5) ונגלה שזה מרחק של שתיים וחצי סטיות ימינה.", 
                math_expression: "<div dir='ltr'>62.5 = x&#772; + 2.5S</div>" 
            },
            { 
                verbal_explanation: "נחבר את כל המשבצות משמאל לממוצע עד לנקודה שמצאנו.", 
                math_expression: "<div dir='ltr'>P<sub>left</sub> = 19 + 15 = 34%</div>" 
            },
            { 
                verbal_explanation: "נחבר את כל המשבצות מימין לממוצע, עד לקפיצה החמישית (שתיים וחצי סטיות).", 
                math_expression: "<div dir='ltr'>P<sub>right</sub> = 19 + 15 + 9 + 5 + 1.5 = 49.5%</div>" 
            },
            { 
                verbal_explanation: "נחבר את האחוזים, ולאחר מכן נכפיל בסך האנשים (200).", 
                math_expression: "<div dir='ltr'>P = 83.5% = 0.835</div>" 
            },
            { 
                verbal_explanation: "פעולת הכפל תיתן לנו את כמות האנשים שעונה לקריטריון.", 
                math_expression: "<div dir='ltr'>N = 0.835 &times; 200 = 167</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">167 אנשים</span>"
    },

    // שאלה 39
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>מעבר מתצוגת אחוזים לשבר עשרוני (הסתברות תקנית):</strong><br>
        מהי ההסתברות (כמספר עשרוני) שציון אקראי ייפול בדיוק בטווח שבין הממוצע לבין <strong>2.5 סטיות תקן מעליו</strong> (x&#772; + 2.5S)?`,
        options: [
            "<span dir=\"rtl\">0.495</span>",
            "<span dir=\"rtl\">0.500</span>",
            "<span dir=\"rtl\">0.480</span>",
            "<span dir=\"rtl\">0.340</span>"
        ],
        correctAnswer: 0,
        hint: "חשבו את האחוזים שמכסות 5 המשבצות הראשונות מימין לממוצע (עד שמגיעים ל-2.5 סטיות). תקבלו 49.5%. כדי להפוך אחוז למספר עשרוני של הסתברות, פשוט חלקו ב-100.",
        solution_steps: [
            { 
                verbal_explanation: "אנו צריכים לסכום את כל העמודות מימין לממוצע, למעט האחרונה ביותר. מדובר בחמש עמודות.", 
                math_expression: "<div dir='ltr'>P = 19 + 15 + 9 + 5 + 1.5</div>" 
            },
            { 
                verbal_explanation: "חיבור פשוט נותן לנו ארבעים ותשע וחצי אחוזים.", 
                math_expression: "<div dir='ltr'>P = 49.5%</div>" 
            },
            { 
                verbal_explanation: "במתמטיקה קלאסית, הסתברות מוצגת כמספר בין אפס לאחת. כדי להמיר אחוז להסתברות, נחלק אותו במאה.", 
                math_expression: "<div dir='ltr'>Prob = 49.5 / 100</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא ההסתברות המבוקשת.", 
                math_expression: "<div dir='ltr'>Prob = 0.495</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">0.495</span>"
    },

    // שאלה 40
    {
        topic: "bagrut_35372",
        subTopic: "חישוב הסתברות לפי תחומים",
        question_text: `<strong>שאלת אתגר והבנה - מציאת המיקום על סמך אחוז בודד:</strong><br>
        ידוע כי בין ציון X לציון Y נמצאים <strong>בדיוק 9%</strong> מהתלמידים.<br>
        היכן חייבים להיות ממוקמים שני הציונים הללו על הגרף?`,
        options: [
            "<span dir=\"rtl\">בין סטיית תקן אחת לסטיית תקן וחצי (מעל או מתחת לממוצע)</span>",
            "<span dir=\"rtl\">צמודים לממוצע, אחד מכל צד</span>",
            "<span dir=\"rtl\">בין שתי סטיות תקן לשלוש סטיות תקן</span>",
            "<span dir=\"rtl\">לא ניתן לדעת רק מנתון של אחוז</span>"
        ],
        correctAnswer: 0,
        hint: "הביטו בדף הנוסחאות. באילו משבצות רשום בדיוק המספר '9%'? אלו המשבצות השלישיות מהאמצע. הן מתחילות בסטיית תקן אחת (1S) ונגמרות בסטיית תקן וחצי (1.5S).",
        solution_steps: [
            { 
                verbal_explanation: "השאלה בודקת התמצאות בגרף הפעמון הקבוע של הבגרות. נחפש משבצת יחידה שהערך שלה הוא 9 אחוז.", 
                math_expression: "<div dir='ltr'>Find: Block = 9%</div>" 
            },
            { 
                verbal_explanation: "המשבצת הראשונה (הגדולה ביותר) היא 19.", 
                math_expression: "<div dir='ltr'>Block 1 = 19%</div>" 
            },
            { 
                verbal_explanation: "המשבצת השנייה היא 15.", 
                math_expression: "<div dir='ltr'>Block 2 = 15%</div>" 
            },
            { 
                verbal_explanation: "המשבצת השלישית היא בדיוק 9. משבצת זו ממוקמת בין הקפיצה השנייה (1S) לקפיצה השלישית (1.5S).", 
                math_expression: "<div dir='ltr'>Block 3 = 9%</div>" 
            },
            { 
                verbal_explanation: "מצב זהה קורה גם בצד השמאלי של הגרף, ולכן הטווח חייב להיות ממוקם שם.", 
                math_expression: "<div dir='ltr'>Between 1S and 1.5S</div>" 
            }
        ],
        final_answer: "<span dir=\"rtl\">בין סטיית תקן אחת לסטיית תקן וחצי</span>"
    }
];