// ========================================================================
// שאלון 35371 | נושא: הסתברות וסטטיסטיקה
// פעימה 1: 20 שאלות (מושגי יסוד בהסתברות + חוק ההסתברות הכוללת)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // תת נושא 1: מושגי יסוד בהסתברות (שאלות 1-10)
    // ---------------------------------------------------------

    // שאלה 1
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>הטלת מטבע - חישוב הסתברות בסיסי:</strong><br>
        מטילים מטבע הוגן פעם אחת.<br>
        למטבע יש שני צדדים: צד אחד נקרא "עץ" והצד השני נקרא "פלי".<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="40" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
            <text x="100" y="65" font-family="Arial" font-size="18" font-weight="bold" fill="#854d0e" text-anchor="middle">עץ</text>
        </svg>
        </div>
        מהי ההסתברות שהמטבע ייפול על הצד של "עץ"?`,
        options: [
            "1/2",
            "1/3",
            "1",
            "1/4"
        ],
        correctAnswer: 0,
        hint: "הסתברות מחושבת תמיד כחלוקה של 'מספר התוצאות הרצויות' ב-'מספר התוצאות האפשריות הכולל'. למטבע יש 2 תוצאות אפשריות, ואנחנו רוצים רק אחת מהן.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לחשב הסתברות (P), עלינו למצוא תחילה כמה תוצאות שונות קיימות בסך הכל בניסוי. למטבע יש שני צדדים (עץ או פלי).", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "כעת נבדוק כמה מתוך התוצאות הללו נחשבות כ'הצלחה' עבורנו. אנו מעוניינים רק בצד של 'עץ', שהוא צד אחד מתוך השניים.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נוסחת ההסתברות הבסיסית היא: התוצאות הרצויות חלקי סך כל התוצאות.", 
                math_expression: "<div dir='ltr'>P = 1 / 2</div>" 
            },
            { 
                verbal_explanation: "אפשר לכתוב את התשובה כשבר פשוט או להפוך אותה למספר עשרוני במחשבון (חצי שווה ל-0.5).", 
                math_expression: "<div dir='ltr'>P = 0.5</div>" 
            }
        ],
        final_answer: "1/2"
    },

    // שאלה 2
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>הטלת קובייה - הסתברות לתוצאה בודדת:</strong><br>
        מטילים קוביית משחק הוגנת (קובייה רגילה בעלת 6 פאות, הממוספרות מ-1 עד 6).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="70" y="30" width="60" height="60" rx="10" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <circle cx="85" cy="45" r="5" fill="#ffffff"/>
            <circle cx="115" cy="45" r="5" fill="#ffffff"/>
            <circle cx="85" cy="75" r="5" fill="#ffffff"/>
            <circle cx="115" cy="75" r="5" fill="#ffffff"/>
        </svg>
        </div>
        מהי ההסתברות שבקובייה יתקבל בדיוק המספר 4?`,
        options: [
            "1/6",
            "4/6",
            "2/6",
            "1/4"
        ],
        correctAnswer: 0,
        hint: "שאלו את עצמכם שתי שאלות: 1) כמה תוצאות אפשריות יש לקובייה כולה? 2) על כמה מהפאות מופיע המספר 4? בנו שבר מהתשובות.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את סך כל האפשרויות הקיימות בהטלת קובייה רגילה. לקובייה יש 6 פאות, לכן יש 6 תוצאות אפשריות (1, 2, 3, 4, 5, 6).", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נבדוק כמה תוצאות מתאימות למה שביקשו מאיתנו. המספר 4 מופיע על פאה אחת בלבד מתוך כל הפאות.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נבנה את שבר ההסתברות. נרשום במונה את התוצאות הרצויות, ובמכנה את סך כל התוצאות.", 
                math_expression: "<div dir='ltr'>P = 1 / 6</div>" 
            }
        ],
        final_answer: "1/6"
    },

    // שאלה 3
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>הטלת קובייה - הסתברות לאירוע מורכב (מספר זוגי):</strong><br>
        מטילים קוביית משחק רגילה בעלת 6 פאות (1 עד 6).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="50" y="30" width="100" height="60" rx="8" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="16" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2 , 4 , 6</text>
        </svg>
        </div>
        מהי ההסתברות שיתקבל מספר זוגי?`,
        options: [
            "3/6 (חצי)",
            "1/6",
            "2/6",
            "4/6"
        ],
        correctAnswer: 0,
        hint: "רשמו לעצמכם את כל המספרים הזוגיים שקיימים על הקובייה. ספרו כמה הם. לאחר מכן, חלקו את הכמות הזו בסך כל המספרים שעל הקובייה (6).",
        solution_steps: [
            { 
                verbal_explanation: "נתחיל מלרשום את סך כל התוצאות האפשריות בהטלת קובייה. זהו המכנה של השבר שלנו.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "כעת נבדוק אילו מהמספרים עונים על התנאי 'מספר זוגי'. המספרים הזוגיים בקובייה הם 2, 4 ו-6.", 
                math_expression: "<div dir='ltr'>2 , 4 , 6</div>" 
            },
            { 
                verbal_explanation: "נספור את כמות האפשרויות הטובות שלנו. מצאנו שיש בדיוק 3 תוצאות שמתאימות לתיאור.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "נרכיב את ההסתברות (P) על ידי חלוקת 3 הרצויים ב-6 האפשריים.", 
                math_expression: "<div dir='ltr'>P = 3 / 6</div>" 
            },
            { 
                verbal_explanation: "ניתן לצמצם את השבר על ידי חלוקת המונה והמכנה ב-3. התשובה הסופית היא חצי.", 
                math_expression: "<div dir='ltr'>P = 1 / 2 = 0.5</div>" 
            }
        ],
        final_answer: "3/6 (חצי)"
    },

    // שאלה 4
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>הטלת קובייה - הסתברות לתנאי "גדול מ-":</strong><br>
        מטילים קוביית משחק רגילה (מספרים 1 עד 6).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="70" y="30" width="60" height="60" rx="10" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">&gt; 4</text>
        </svg>
        </div>
        מהי ההסתברות שיתקבל מספר הגדול מ-4?`,
        options: [
            "2/6 (שליש)",
            "1/6",
            "3/6",
            "4/6"
        ],
        correctAnswer: 0,
        hint: "אילו מספרים על קובייה הם גדולים מ-4 במפורש? (שימו לב, המספר 4 עצמו אינו גדול מ-4). ספרו את האפשרויות הללו וחלקו ב-6.",
        solution_steps: [
            { 
                verbal_explanation: "המכנה שלנו בהטלת קובייה יחידה תמיד נשאר קבוע: סך הכל 6 תוצאות.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נמצא אילו מספרים מקיימים את התנאי 'גדול מ-4'. המספרים היחידים בקובייה שעונים על כך הם 5 ו-6.", 
                math_expression: "<div dir='ltr'>5 , 6</div>" 
            },
            { 
                verbal_explanation: "נספור את התוצאות הרצויות - ישנן 2 אפשרויות כאלו.", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "נבנה את ההסתברות ונחלק את הרצוי (2) במצוי (6).", 
                math_expression: "<div dir='ltr'>P = 2 / 6</div>" 
            },
            { 
                verbal_explanation: "נצמצם את השבר על ידי חלוקת המונה והמכנה במספר שתיים.", 
                math_expression: "<div dir='ltr'>P = 1 / 3</div>" 
            }
        ],
        final_answer: "2/6 (שליש)"
    },

    // שאלה 5
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>הוצאת כדור מכד (חישוב המכנה):</strong><br>
        בכד אטום ישנם 3 כדורים אדומים ו-7 כדורים כחולים.<br>
        מערבבים ומוציאים כדור אחד באקראי.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 60,30 L 60,90 Q 100,120 140,90 L 140,30 Z" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
            <circle cx="85" cy="95" r="10" fill="#ef4444"/>
            <circle cx="115" cy="95" r="10" fill="#3b82f6"/>
            <circle cx="100" cy="80" r="10" fill="#ef4444"/>
            <circle cx="80" cy="70" r="10" fill="#3b82f6"/>
            <circle cx="120" cy="70" r="10" fill="#3b82f6"/>
        </svg>
        </div>
        מהי ההסתברות שהכדור שנוציא יהיה בצבע אדום?`,
        options: [
            "3/10",
            "3/7",
            "7/10",
            "1/3"
        ],
        correctAnswer: 0,
        hint: "המכנה בהסתברות הוא תמיד הסך הכל. חשבו קודם כמה כדורים יש בכד בסך הכל (אדומים ועוד כחולים). לאחר מכן, הציבו את מספר הכדורים האדומים במונה.",
        solution_steps: [
            { 
                verbal_explanation: "השלב הראשון והחשוב ביותר בבעיות עם כדורים הוא מציאת סך כל הכדורים בכד. נחבר את הכדורים האדומים והכחולים.", 
                math_expression: "<div dir='ltr'>3 + 7 = 10</div>" 
            },
            { 
                verbal_explanation: "המספר 10 יהיה המכנה שלנו (סך כל התוצאות האפשריות).", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "המונה שלנו יהיה מספר הכדורים בצבע המבוקש. אנו מעוניינים בכדור אדום, ויש 3 כדורים אדומים.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "נרכיב את השבר המייצג את ההסתברות: רצוי חלקי מצוי.", 
                math_expression: "<div dir='ltr'>P = 3 / 10</div>" 
            },
            { 
                verbal_explanation: "אפשר גם לרשום זאת כמספר עשרוני במחשבון.", 
                math_expression: "<div dir='ltr'>P = 0.3</div>" 
            }
        ],
        final_answer: "3/10"
    },

    // שאלה 6
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>מאורע משלים (הסתברות ש"לא" יקרה):</strong><br>
        החזאי בטלוויזיה הודיע כי ההסתברות שיירד גשם מחר היא 0.20 (או 20%).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 60,60 Q 80,40 100,60 T 140,60 Q 150,80 130,90 T 70,90 Q 50,80 60,60" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
            <line x1="80" y1="95" x2="75" y2="110" stroke="#3b82f6" stroke-width="2"/>
            <line x1="100" y1="95" x2="95" y2="110" stroke="#3b82f6" stroke-width="2"/>
            <line x1="120" y1="95" x2="115" y2="110" stroke="#3b82f6" stroke-width="2"/>
        </svg>
        </div>
        מהי ההסתברות ש<strong>לא</strong> יירד גשם מחר?`,
        options: [
            "0.80",
            "0.50",
            "0.20",
            "1.20"
        ],
        correctAnswer: 0,
        hint: "סכום ההסתברויות של כל האפשרויות יחד הוא תמיד שלם אחד (1). כדי למצוא את ההסתברות שמשהו 'לא' יקרה, עשו: 1 פחות ההסתברות שהוא כן יקרה.",
        solution_steps: [
            { 
                verbal_explanation: "הסתברות ודאית (משהו שבטוח יקרה במאה אחוז) מסומנת תמיד על ידי המספר השלם אחת.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "ההסתברות לגשם, ביחד עם ההסתברות שלא יירד גשם, משלימות יחד לאותה ודאות של 1 שלם.", 
                math_expression: "<div dir='ltr'>P + P(NOT) = 1</div>" 
            },
            { 
                verbal_explanation: "לכן, כדי למצוא מהי ההסתברות שלא יירד גשם, נחסר מהשלם את ההסתברות הנתונה שכן יירד גשם.", 
                math_expression: "<div dir='ltr'>P = 1 - 0.20</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיסור הפשוטה ונגלה את ההסתברות למאורע המשלים.", 
                math_expression: "<div dir='ltr'>P = 0.80</div>" 
            }
        ],
        final_answer: "0.80"
    },

    // שאלה 7
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>הסתברות בסביבון (חלוקה שווה):</strong><br>
        סביבון (רולטה) מחולק ל-8 גזרות (פרוסות) שוות בגודלן.<br>
        2 גזרות צבועות בצהוב, ו-6 הגזרות הנותרות צבועות בירוק.<br>
        מסובבים את הסביבון פעם אחת באקראי.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="40" fill="#22c55e" stroke="#000" stroke-width="1"/>
            <path d="M 100,60 L 100,20 A 40,40 0 0,1 140,60 Z" fill="#fef08a" stroke="#000" stroke-width="1"/>
            <circle cx="100" cy="60" r="3" fill="#000"/>
            <path d="M 100,60 L 70,50" stroke="#0f172a" stroke-width="2"/>
            <polygon points="70,50 80,48 76,55" fill="#0f172a"/>
        </svg>
        </div>
        מהי ההסתברות שהסביבון ייעצר על גזרה בצבע צהוב?`,
        options: [
            "2/8 (כלומר 1/4)",
            "1/8",
            "6/8",
            "2/6"
        ],
        correctAnswer: 0,
        hint: "המכנה הוא סך כל הגזרות בסביבון (8). המונה הוא כמות הגזרות בצבע המבוקש (צהוב). רשמו את השבר וצמצמו אותו אם אפשר.",
        solution_steps: [
            { 
                verbal_explanation: "הסביבון מחולק לגזרות שוות. סך כל הגזרות האפשריות שיכולות לצאת הוא 8, וזה יהיה המכנה שלנו.", 
                math_expression: "<div dir='ltr'>8</div>" 
            },
            { 
                verbal_explanation: "אנו מחפשים את הצבע הצהוב. מספר הגזרות הצהובות בלבד הוא 2. זה יהיה המונה שלנו.", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "נרשום את חלוקת ההסתברות הכללית.", 
                math_expression: "<div dir='ltr'>P = 2 / 8</div>" 
            },
            { 
                verbal_explanation: "נוכל לפשט את השבר על ידי חלוקת המונה והמכנה ב-2. התוצאה שווה לרבע.", 
                math_expression: "<div dir='ltr'>P = 1 / 4 = 0.25</div>" 
            }
        ],
        final_answer: "2/8 (כלומר 1/4)"
    },

    // שאלה 8
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>בחירת קלפים (כפולות של מספר):</strong><br>
        בתוך כובע ישנם 10 פתקים הממוספרים בסדר עולה מ-1 ועד 10.<br>
        (1, 2, 3, 4, 5, 6, 7, 8, 9, 10).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="50" y="30" width="30" height="40" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
            <text x="65" y="55" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">1</text>
            <rect x="85" y="30" width="30" height="40" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
            <text x="100" y="55" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">2</text>
            <rect x="120" y="30" width="30" height="40" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
            <text x="135" y="55" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">...</text>
        </svg>
        </div>
        שולפים פתק אחד באקראי. מהי ההסתברות שיוצא מספר שהוא <strong>כפולה של 3</strong> (מתחלק ב-3 ללא שארית)?`,
        options: [
            "3/10",
            "1/10",
            "4/10",
            "3/7"
        ],
        correctAnswer: 0,
        hint: "כתבו לעצמכם באילו מספרים בדיוק מדובר (3, 6, 9). ספרו כמה פתקים כאלו יש, וחלקו בסך כל הפתקים בכובע (10).",
        solution_steps: [
            { 
                verbal_explanation: "סך כל הפתקים הקיימים בכובע הוא 10. זהו סך האפשרויות שלנו (המכנה).", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "כעת נמצא אילו פתקים עונים לתנאי של 'כפולה של 3'. אלו הם המספרים שמגיעים מקפיצות של שלוש.", 
                math_expression: "<div dir='ltr'>3 , 6 , 9</div>" 
            },
            { 
                verbal_explanation: "נספור את הפתקים האלו. ישנם בדיוק 3 פתקים מתאימים (המונה שלנו).", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "נרכיב את ההסתברות על ידי חלוקת מספר הפתקים הרצוי בסך הכל.", 
                math_expression: "<div dir='ltr'>P = 3 / 10</div>" 
            },
            { 
                verbal_explanation: "זהו שבר פשוט שניתן לכתוב גם כמספר עשרוני.", 
                math_expression: "<div dir='ltr'>P = 0.3</div>" 
            }
        ],
        final_answer: "3/10"
    },

    // שאלה 9
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>המאורע הבלתי אפשרי:</strong><br>
        מטילים קוביית משחק רגילה לחלוטין (ממוספרת 1 עד 6).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="70" y="30" width="60" height="60" rx="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <circle cx="100" cy="60" r="5" fill="#ffffff"/>
        </svg>
        </div>
        מהי ההסתברות שנקבל בהטלה את המספר 7?`,
        options: [
            "0 (אפס)",
            "1/6",
            "1 (מאה אחוז)",
            "7/6"
        ],
        correctAnswer: 0,
        hint: "האם קיים המספר 7 על קובייה רגילה? אם משהו לא יכול לקרות בשום מצב, ההסתברות שלו היא אפס המוחלט.",
        solution_steps: [
            { 
                verbal_explanation: "נבחן את סך כל האפשרויות (המכנה) בהטלת הקובייה שלנו.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נבדוק על כמה פאות בקובייה מופיע המספר שבע. מכיוון שהקובייה ממוספרת רק עד 6, המספר 7 אינו קיים בכלל.", 
                math_expression: "<div dir='ltr'>0</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים בנוסחת ההסתברות. יש לנו אפס תוצאות רצויות מתוך 6 אפשריות.", 
                math_expression: "<div dir='ltr'>P = 0 / 6</div>" 
            },
            { 
                verbal_explanation: "אפס חלקי כל מספר שווה לאפס. זה נקרא במתמטיקה 'מאורע בלתי אפשרי'.", 
                math_expression: "<div dir='ltr'>P = 0</div>" 
            }
        ],
        final_answer: "0 (אפס)"
    },

    // שאלה 10
    {
        topic: "bagrut_35371",
        subTopic: "מושגי יסוד בהסתברות (ניסוי, תוצאה, אירוע)",
        question_text: `<strong>המאורע הוודאי (הבטוח):</strong><br>
        בתוך שקית אטומה ישנם 5 כדורים, וכולם בצבע ירוק.<br>
        אנו מכניסים יד ומוציאים כדור אחד באקראי.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 60,30 L 60,90 Q 100,120 140,90 L 140,30 Z" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
            <circle cx="85" cy="95" r="10" fill="#22c55e"/>
            <circle cx="115" cy="95" r="10" fill="#22c55e"/>
            <circle cx="100" cy="80" r="10" fill="#22c55e"/>
            <circle cx="80" cy="70" r="10" fill="#22c55e"/>
            <circle cx="120" cy="70" r="10" fill="#22c55e"/>
        </svg>
        </div>
        מהי ההסתברות שהכדור שנוציא יהיה בצבע ירוק?`,
        options: [
            "1 (כלומר 100%)",
            "5/10",
            "0",
            "1/5"
        ],
        correctAnswer: 0,
        hint: "כאשר כל האפשרויות הקיימות מתאימות בדיוק למה שמבקשים מאיתנו, זהו מאורע שבטוח יקרה בוודאות מוחלטת. במתמטיקה הסתברות ודאית שווה ל-1 שלם (כלומר 100%).",
        solution_steps: [
            { 
                verbal_explanation: "נספור את סך כל הכדורים הנמצאים בתוך השקית. זהו המכנה שלנו.", 
                math_expression: "<div dir='ltr'>5</div>" 
            },
            { 
                verbal_explanation: "נספור את הכדורים הירוקים (התוצאות הרצויות עבורנו). כל הכדורים בשקית הם ירוקים, ולכן יש 5 כאלו.", 
                math_expression: "<div dir='ltr'>5</div>" 
            },
            { 
                verbal_explanation: "נרכיב את השבר שמייצג את ההסתברות: 5 תוצאות טובות מתוך 5 אפשריות.", 
                math_expression: "<div dir='ltr'>P = 5 / 5</div>" 
            },
            { 
                verbal_explanation: "מספר המחולק בעצמו נותן תוצאה של 1 שלם. זהו 'מאורע ודאי'.", 
                math_expression: "<div dir='ltr'>P = 1</div>" 
            }
        ],
        final_answer: "1 (כלומר 100%)"
    },

    // ---------------------------------------------------------
    // תת נושא 2: חוק ההסתברות הכוללת וחיבור אירועים (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הסתברות של "או" (אירועים זרים):</strong><br>
        בתוך כלי ישנם: 3 כדורים אדומים, 4 כדורים כחולים ו-5 כדורים ירוקים.<br>
        מוציאים כדור אחד באקראי.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="100" y="45" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">3 Red</text>
            <text x="100" y="65" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">4 Blue</text>
            <text x="100" y="85" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">5 Green</text>
        </svg>
        </div>
        מהי ההסתברות שהכדור שנוציא יהיה אדום <strong>או</strong> כחול?`,
        options: [
            "7/12",
            "3/12",
            "4/12",
            "12/12"
        ],
        correctAnswer: 0,
        hint: "המילה 'או' בהסתברות מתורגמת לרוב לפעולת חיבור (+). מצאו כמה כדורים יש בסך הכל (מכנה), חברו את כמות האדומים עם כמות הכחולים (מונה), וצרו שבר.",
        solution_steps: [
            { 
                verbal_explanation: "השלב הראשון הוא תמיד מציאת המכנה, כלומר סך כל הכדורים שיש בכלי. נחבר את כל הצבעים יחד.", 
                math_expression: "<div dir='ltr'>3 + 4 + 5 = 12</div>" 
            },
            { 
                verbal_explanation: "אנו מחפשים כדור אדום או כחול. נבדוק כמה כדורים עונים על הדרישה הזו על ידי חיבור הכמות שלהם יחד.", 
                math_expression: "<div dir='ltr'>3 + 4 = 7</div>" 
            },
            { 
                verbal_explanation: "ההסתברות שנוציא אחד מהם היא כמות הכדורים הרצויים לחלק לסך הכדורים בכלי.", 
                math_expression: "<div dir='ltr'>P = 7 / 12</div>" 
            },
            { 
                verbal_explanation: "לחלופין, ניתן לחשב את ההסתברות לאדום בנפרד, את ההסתברות לכחול בנפרד, ולחבר ביניהן (חוק החיבור לאירועים זרים).", 
                math_expression: "<div dir='ltr'>3 / 12 + 4 / 12 = 7 / 12</div>" 
            }
        ],
        final_answer: "7/12"
    },

    // שאלה 12
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הטלת קובייה עם קשר "או":</strong><br>
        מטילים קוביית משחק רגילה (1 עד 6).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="70" y="30" width="60" height="60" rx="10" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="20" font-weight="bold" fill="#0f172a" text-anchor="middle">1 or 6</text>
        </svg>
        </div>
        מהי ההסתברות שיתקבל המספר 1 <strong>או</strong> המספר 6?`,
        options: [
            "2/6 (שליש)",
            "1/6",
            "6/6",
            "1/36"
        ],
        correctAnswer: 0,
        hint: "כמו בתרגיל הקודם, המילה 'או' מסמנת לנו לחבר אפשרויות. מתוך 6 פאות, המספר 1 תופס פאה אחת והמספר 6 תופס פאה אחת. סה\"כ שתי פאות מתאימות.",
        solution_steps: [
            { 
                verbal_explanation: "בקובייה רגילה ישנן שש תוצאות אפשריות. זהו המכנה הקבוע שלנו לשאלה זו.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נמצא את ההסתברות לקבלת המספר 1 בלבד.", 
                math_expression: "<div dir='ltr'>P(1) = 1 / 6</div>" 
            },
            { 
                verbal_explanation: "נמצא את ההסתברות לקבלת המספר 6 בלבד.", 
                math_expression: "<div dir='ltr'>P(6) = 1 / 6</div>" 
            },
            { 
                verbal_explanation: "כיוון שביקשו לקבל תוצאה זו 'או' תוצאה זו, נחבר את ההסתברויות של שני המאורעות.", 
                math_expression: "<div dir='ltr'>P = 1 / 6 + 1 / 6</div>" 
            },
            { 
                verbal_explanation: "נחבר את המונים (המכנה נשאר זהה) ונקבל שתי שישיות.", 
                math_expression: "<div dir='ltr'>P = 2 / 6</div>" 
            },
            { 
                verbal_explanation: "נצמצם את השבר על ידי חלוקה בשתיים ונקבל שליש.", 
                math_expression: "<div dir='ltr'>P = 1 / 3</div>" 
            }
        ],
        final_answer: "2/6 (שליש)"
    },

    // שאלה 13
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הסתברות של "וגם" (אירועים בלתי תלויים):</strong><br>
        מבצעים שני ניסויים במקביל:<br>
        1. מטילים מטבע (עץ או פלי).<br>
        2. מטילים קובייה (1 עד 6).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="60" cy="60" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
            <text x="60" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#854d0e" text-anchor="middle">עץ</text>
            <text x="100" y="65" font-family="Arial" font-size="18" font-weight="bold" text-anchor="middle">&amp;</text>
            <rect x="120" y="40" width="40" height="40" rx="5" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="140" y="65" font-family="Arial" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">6</text>
        </svg>
        </div>
        מהי ההסתברות לקבל במטבע "עץ" <strong>וגם</strong> לקבל בקובייה את המספר 6?`,
        options: [
            "1/12",
            "1/2",
            "1/6",
            "2/8"
        ],
        correctAnswer: 0,
        hint: "המילה 'וגם' (כששני דברים קורים יחד ולא משפיעים זה על זה) מתורגמת לפעולת כפל (&times;). חשבו את ההסתברות לעץ לבד (1/2), חשבו את ההסתברות ל-6 לבד (1/6), והכפילו את השברים.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את ההסתברות של המטבע בנפרד. למטבע שני צדדים, לכן הסיכוי ל'עץ' הוא חצי.", 
                math_expression: "<div dir='ltr'>P = 1 / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההסתברות של הקובייה בנפרד. לקובייה שש פאות, והמספר 6 מופיע פעם אחת.", 
                math_expression: "<div dir='ltr'>P = 1 / 6</div>" 
            },
            { 
                verbal_explanation: "מכיוון שאנו דורשים ששני הדברים יקרו יחד (קשר של 'וגם'), נשתמש בחוק הכפל של אירועים בלתי תלויים ונכפיל את שתי ההסתברויות.", 
                math_expression: "<div dir='ltr'>P = 1 / 2 &times; 1 / 6</div>" 
            },
            { 
                verbal_explanation: "בכפל שברים, כופלים מונה במונה ומכנה במכנה.", 
                math_expression: "<div dir='ltr'>P = ( 1 &times; 1 ) / ( 2 &times; 6 )</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונקבל את התוצאה הסופית לשני האירועים יחד.", 
                math_expression: "<div dir='ltr'>P = 1 / 12</div>" 
            }
        ],
        final_answer: "1/12"
    },

    // שאלה 14
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הטלת שני מטבעות:</strong><br>
        מטילים שני מטבעות הוגנים בו-זמנית.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="70" cy="60" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
            <text x="70" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#854d0e" text-anchor="middle">עץ</text>
            <circle cx="130" cy="60" r="30" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
            <text x="130" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#854d0e" text-anchor="middle">עץ</text>
        </svg>
        </div>
        מהי ההסתברות ש<strong>שני</strong> המטבעות ייפלו על הצד של "עץ"?`,
        options: [
            "1/4 (או 0.25)",
            "1/2",
            "2/2",
            "1/3"
        ],
        correctAnswer: 0,
        hint: "אנחנו רוצים עץ במטבע הראשון 'וגם' עץ במטבע השני. ההסתברות לכל מטבע בנפרד היא חצי. הכפילו אותן.",
        solution_steps: [
            { 
                verbal_explanation: "ההסתברות לקבל עץ בהטלת המטבע הראשון היא חצי.", 
                math_expression: "<div dir='ltr'>P = 1 / 2</div>" 
            },
            { 
                verbal_explanation: "ההסתברות לקבל עץ בהטלת המטבע השני גם היא חצי, ואינה תלויה במטבע הראשון.", 
                math_expression: "<div dir='ltr'>P = 1 / 2</div>" 
            },
            { 
                verbal_explanation: "כדי ששני הדברים יקרו יחד, נכפיל את שתי ההסתברויות זו בזו.", 
                math_expression: "<div dir='ltr'>P = 1 / 2 &times; 1 / 2</div>" 
            },
            { 
                verbal_explanation: "נכפול מונה במונה ומכנה במכנה לקבלת התוצאה הסופית, השווה לרבע או 0.25 עשרוני.", 
                math_expression: "<div dir='ltr'>P = 1 / 4 = 0.25</div>" 
            }
        ],
        final_answer: "1/4 (או 0.25)"
    },

    // שאלה 15
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הוצאה עם החזרה (כפל הסתברויות):</strong><br>
        בכד יש 2 כדורים אדומים ו-8 כדורים כחולים.<br>
        מוציאים כדור אחד, בודקים את צבעו, <strong>ומחזירים אותו לכד</strong>.<br>
        לאחר מכן מערבבים ומוציאים כדור שני.<br>
        מהי ההסתברות ששני הכדורים שהוצאו (הראשון וגם השני) יהיו בצבע אדום?`,
        options: [
            "4/100 (או 0.04)",
            "4/10",
            "2/10",
            "2/100"
        ],
        correctAnswer: 0,
        hint: "כיוון שמחזירים את הכדור, המצב בכד לא משתנה! חשבו את ההסתברות לאדום בסיבוב הראשון. אחר כך, כפלו אותה באותה הסתברות בדיוק לסיבוב השני.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב תחילה את סך כל הכדורים בכד.", 
                math_expression: "<div dir='ltr'>2 + 8 = 10</div>" 
            },
            { 
                verbal_explanation: "ההסתברות להוציא כדור אדום בסיבוב הראשון היא 2 אדומים מתוך 10 כדורים.", 
                math_expression: "<div dir='ltr'>P = 2 / 10 = 0.2</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהחזרנו את הכדור, מספר הכדורים נשאר 10 ומספר האדומים נשאר 2. ההסתברות לשלוף אדום גם בסיבוב השני נשארת זהה.", 
                math_expression: "<div dir='ltr'>P = 2 / 10 = 0.2</div>" 
            },
            { 
                verbal_explanation: "כדי שנוציא אדום בפעם הראשונה 'וגם' אדום בפעם השנייה, נכפול את ההסתברויות.", 
                math_expression: "<div dir='ltr'>P = 0.2 &times; 0.2</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונקבל את ההסתברות הסופית לשני כדורים אדומים רצופים.", 
                math_expression: "<div dir='ltr'>P = 0.04</div>" 
            }
        ],
        final_answer: "4/100 (או 0.04)"
    },

    // שאלה 16
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הוצאה עם החזרה (אותו צבע):</strong><br>
        בכד יש 4 כדורים לבנים ו-6 כדורים שחורים (סה"כ 10).<br>
        מוציאים כדור, <strong>מחזירים אותו</strong>, ומוציאים כדור שני.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="80" cy="60" r="15" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">&amp;</text>
            <circle cx="120" cy="60" r="15" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
            <text x="100" y="95" font-family="Arial" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">OR</text>
            <circle cx="80" cy="110" r="15" fill="#0f172a"/>
            <text x="100" y="115" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">&amp;</text>
            <circle cx="120" cy="110" r="15" fill="#0f172a"/>
        </svg>
        </div>
        מהי ההסתברות ששני הכדורים שנוציא יהיו <strong>באותו צבע</strong>?<br>
        (כלומר, או שניהם לבנים, או שניהם שחורים).`,
        options: [
            "52/100 (או 0.52)",
            "24/100",
            "10/100",
            "5/10"
        ],
        correctAnswer: 0,
        hint: "זהו תרגיל משולב של 'וגם' ואז 'או'. עליכם לחשב את ההסתברות למסלול 'לבן וגם לבן' (כפל). אחר כך לחשב את ההסתברות למסלול 'שחור וגם שחור' (כפל). ולבסוף לחבר את שתי התוצאות.",
        solution_steps: [
            { 
                verbal_explanation: "הכדורים מוחזרים ולכן המכנה תמיד נשאר 10. נחשב תחילה את האפשרות ששני הכדורים יצאו לבנים (לבן וגם לבן).", 
                math_expression: "<div dir='ltr'>P = 4 / 10 &times; 4 / 10</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל עבור התרחיש הראשון (לבנים).", 
                math_expression: "<div dir='ltr'>P = 16 / 100 = 0.16</div>" 
            },
            { 
                verbal_explanation: "כעת נחשב את האפשרות השנייה: ששני הכדורים יצאו שחורים (שחור וגם שחור).", 
                math_expression: "<div dir='ltr'>P = 6 / 10 &times; 6 / 10</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל עבור התרחיש השני (שחורים).", 
                math_expression: "<div dir='ltr'>P = 36 / 100 = 0.36</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהשאלה מבקשת שנקבל את המצב הראשון 'או' את המצב השני, נחבר את ההסתברויות של שני המסלולים שחישבנו.", 
                math_expression: "<div dir='ltr'>P = 0.16 + 0.36</div>" 
            },
            { 
                verbal_explanation: "התוצאה הסופית משלבת את שני מקרי ה'אותו הצבע'.", 
                math_expression: "<div dir='ltr'>P = 0.52</div>" 
            }
        ],
        final_answer: "52/100 (או 0.52)"
    },

    // שאלה 17
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>סיבוב סביבון פעמיים (רצף אירועים):</strong><br>
        סביבון מחולק ל-4 גזרות שוות: 1, 2, 3 ו-4.<br>
        מסובבים את הסביבון <strong>פעמיים</strong> ברציפות.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="40" fill="none" stroke="#0f172a" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="100" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="60" x2="140" y2="60" stroke="#0f172a" stroke-width="2"/>
            <text x="75" y="50" font-family="Arial" font-size="14" font-weight="bold">1</text>
            <text x="120" y="50" font-family="Arial" font-size="14" font-weight="bold">2</text>
            <text x="75" y="85" font-family="Arial" font-size="14" font-weight="bold">3</text>
            <text x="120" y="85" font-family="Arial" font-size="14" font-weight="bold">4</text>
        </svg>
        </div>
        מהי ההסתברות שבסיבוב הראשון ייצא המספר 1, <strong>ובסיבוב השני</strong> ייצא המספר 2?`,
        options: [
            "1/16",
            "1/4",
            "2/4",
            "2/16"
        ],
        correctAnswer: 0,
        hint: "הסביבון לא מושפע ממה שיצא בסיבוב הקודם, האירועים הם בלתי תלויים. ההסתברות לכל מספר היא רבע. בגלל שזה 'סיבוב 1 וגם סיבוב 2', יש להכפיל רבע ברבע.",
        solution_steps: [
            { 
                verbal_explanation: "בסביבון יש 4 חלקים שווים. ההסתברות שהחץ ייעצר על המספר 1 בסיבוב הראשון היא 1 מתוך 4.", 
                math_expression: "<div dir='ltr'>P = 1 / 4</div>" 
            },
            { 
                verbal_explanation: "הסביבון מסתובב שוב מאפס. ההסתברות שייעצר על המספר 2 בסיבוב השני היא גם כן 1 מתוך 4.", 
                math_expression: "<div dir='ltr'>P = 1 / 4</div>" 
            },
            { 
                verbal_explanation: "אנו רוצים שיתקיים התנאי הראשון 'וגם' התנאי השני ברצף. נשתמש בפעולת הכפל.", 
                math_expression: "<div dir='ltr'>P = 1 / 4 &times; 1 / 4</div>" 
            },
            { 
                verbal_explanation: "נכפול מונה במונה (1 כפול 1) ומכנה במכנה (4 כפול 4) לקבלת ההסתברות לתרחיש המדויק הזה.", 
                math_expression: "<div dir='ltr'>P = 1 / 16</div>" 
            }
        ],
        final_answer: "1/16"
    },

    // שאלה 18
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>ימים בלתי תלויים במזג האוויר:</strong><br>
        על פי התחזית, ההסתברות שיירד גשם ביום ראשון היא 0.3.<br>
        ההסתברות שיירד גשם ביום שני היא גם כן 0.3.<br>
        (נניח שהימים הם אירועים בלתי תלויים אחד בשני).<br>
        מהי ההסתברות שיירד גשם <strong>גם</strong> ביום ראשון <strong>וגם</strong> ביום שני?`,
        options: [
            "0.09",
            "0.60",
            "0.30",
            "0.06"
        ],
        correctAnswer: 0,
        hint: "כמו בהטלת מטבע, כאשר שואלים על אירוע אחד שקורה 'וגם' אירוע שני שקורה, מכפילים את ההסתברויות שלהם. הכפילו 0.3 ב-0.3 (היעזרו במחשבון כדי לא לטעות במיקום הנקודה).",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את ההסתברות לגשם ביום הראשון כפי שנתון בשאלה.", 
                math_expression: "<div dir='ltr'>P = 0.3</div>" 
            },
            { 
                verbal_explanation: "נרשום את ההסתברות לגשם ביום השני.", 
                math_expression: "<div dir='ltr'>P = 0.3</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ההסתברות שגשם יירד ביום ראשון 'וגם' ביום שני, נכפיל את שתי ההסתברויות זו בזו.", 
                math_expression: "<div dir='ltr'>P = 0.3 &times; 0.3</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל העשרוני במחשבון כדי להימנע משגיאות במיקום הנקודה, ונקבל את התוצאה.", 
                math_expression: "<div dir='ltr'>P = 0.09</div>" 
            }
        ],
        final_answer: "0.09"
    },

    // שאלה 19
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הסתברות משלימה כפולה:</strong><br>
        בהמשך לשאלה הקודמת (ההסתברות לגשם בכל יום היא 0.3).<br>
        מהי ההסתברות ש<strong>לא יירד גשם כלל</strong> באף אחד משני הימים?<br>
        (לא בראשון ולא בשני).`,
        options: [
            "0.49",
            "0.09",
            "0.70",
            "0.40"
        ],
        correctAnswer: 0,
        hint: "קודם כל, חשבו את המאורע המשלים ליום בודד (מה ההסתברות שלא יירד גשם ביום אחד? 1 פחות 0.3). לאחר מכן, כפלו את ההסתברות החדשה שמצאתם בעצמה, כי אתם רוצים שזה יקרה גם ביום הראשון וגם בשני.",
        solution_steps: [
            { 
                verbal_explanation: "תחילה, נמצא מהי ההסתברות שלא יירד גשם ביום בודד. נעשה זאת על ידי חיסור ההסתברות שכן יירד גשם מתוך 1 שלם.", 
                math_expression: "<div dir='ltr'>1 - 0.3 = 0.7</div>" 
            },
            { 
                verbal_explanation: "כעת אנו יודעים שההסתברות ליום יבש היא 0.7. השאלה דורשת שיהיה יבש ביום ראשון 'וגם' יבש ביום שני.", 
                math_expression: "<div dir='ltr'>P = 0.7 &times; 0.7</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל של שני המספרים העשרוניים.", 
                math_expression: "<div dir='ltr'>P = 0.49</div>" 
            }
        ],
        final_answer: "0.49"
    },

    // שאלה 20
    {
        topic: "bagrut_35371",
        subTopic: "חוק ההסתברות הכוללת",
        question_text: `<strong>הטלת שתי קוביות (תוצאה זהה - "דאבל"):</strong><br>
        מטילים שתי קוביות משחק הוגנות בו-זמנית.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="30" y="30" width="60" height="60" rx="10" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <circle cx="60" cy="60" r="5" fill="#ffffff"/>
            <rect x="110" y="30" width="60" height="60" rx="10" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <circle cx="140" cy="60" r="5" fill="#ffffff"/>
        </svg>
        </div>
        מהי ההסתברות לקבל "דאבל" (שתי הקוביות מראות בדיוק את אותו המספר)?`,
        options: [
            "6/36 (כלומר 1/6)",
            "1/36",
            "2/6",
            "1/12"
        ],
        correctAnswer: 0,
        hint: "כשזורקים 2 קוביות, יש בסך הכל 36 אפשרויות לזוגות מספרים (6 כפול 6). מתוכן, כמה זוגות נחשבים כ'דאבל' (1-1, 2-2, 3-3...)? ספרו אותם וחלקו ב-36.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את המכנה בהטלה של שתי קוביות, נכפיל את האפשרויות של קובייה א' באפשרויות של קובייה ב'.", 
                math_expression: "<div dir='ltr'>6 &times; 6 = 36</div>" 
            },
            { 
                verbal_explanation: "נרשום את כל המקרים הנחשבים כ'דאבל' שבהם שתי הקוביות מראות את אותו המספר.", 
                math_expression: "<div dir='ltr'>(1,1) , (2,2) , (3,3) , (4,4) , (5,5) , (6,6)</div>" 
            },
            { 
                verbal_explanation: "נספור כמה מקרים כאלו מצאנו. ישנם בדיוק 6 זוגות זהים כאלה.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נרכיב את ההסתברות: מספר התוצאות הרצויות (הזוגות הזהים) חלקי סך כל התוצאות (36).", 
                math_expression: "<div dir='ltr'>P = 6 / 36</div>" 
            },
            { 
                verbal_explanation: "ניתן לצמצם את השבר על ידי חלוקת המונה והמכנה ב-6. נקבל שישית.", 
                math_expression: "<div dir='ltr'>P = 1 / 6</div>" 
            }
        ],
        final_answer: "6/36 (כלומר 1/6)"
    },// שאלה 21
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית מתוך טבלה - צמצום המכנה:</strong><br>
        בכיתה יש 30 תלמידים. הנתונים לגביהם מסוכמים בטבלה הבאה:<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="80" y1="20" x2="80" y2="130" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="160" y1="20" x2="160" y2="130" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="20" y1="50" x2="230" y2="50" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="20" y1="90" x2="230" y2="90" stroke="#cbd5e1" stroke-width="2"/>
            <text x="50" y="40" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">בנים</text>
            <text x="120" y="40" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">בנות</text>
            <text x="200" y="40" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">סה"כ</text>
            
            <text x="50" y="75" font-family="Arial" font-size="12" text-anchor="middle">4</text>
            <text x="120" y="75" font-family="Arial" font-size="12" text-anchor="middle">6</text>
            <text x="200" y="75" font-family="Arial" font-size="12" font-weight="bold" fill="#3b82f6" text-anchor="middle">משקפיים</text>
            
            <text x="50" y="115" font-family="Arial" font-size="12" text-anchor="middle">6</text>
            <text x="120" y="115" font-family="Arial" font-size="12" text-anchor="middle">14</text>
            <text x="200" y="115" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">בלי</text>
        </svg>
        </div>
        בוחרים באקראי תלמיד אחד מהכיתה. <strong>ידוע שהתלמיד שנבחר הוא בן.</strong><br>
        מהי ההסתברות שיש לו משקפיים?`,
        options: [
            "4/10",
            "4/30",
            "10/30",
            "6/10"
        ],
        correctAnswer: 0,
        hint: "המילה 'ידוע' היא מילת הקסם של הסתברות מותנית! היא משנה את המכנה (הסך הכל). מכיוון ש'ידוע שהוא בן', אתם מסתכלים אך ורק על עמודת הבנים (סה\"כ 10). מתוכם, כמה עם משקפיים?",
        solution_steps: [
            { 
                verbal_explanation: "המילה 'ידוע' אומרת לנו שקבוצת ההתייחסות שלנו הצטמצמה. אנו מסתכלים כעת רק על קבוצת הבנים. נמצא כמה בנים יש סך הכל (עם ובלי משקפיים).", 
                math_expression: "<div dir='ltr'>4 + 6 = 10</div>" 
            },
            { 
                verbal_explanation: "המספר 10 הופך להיות המכנה החדש שלנו. הוא מחליף את ה-30 המקורי.", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "מתוך 10 הבנים האלו בלבד, נבדוק כמה מתאימים לתוצאה הרצויה ('יש לו משקפיים'). בטבלה רשום שיש 4 בנים כאלו.", 
                math_expression: "<div dir='ltr'>4</div>" 
            },
            { 
                verbal_explanation: "נבנה את שבר ההסתברות (P): מספר התוצאות הרצויות חלקי המכנה החדש שלנו.", 
                math_expression: "<div dir='ltr'>P = 4 / 10</div>" 
            },
            { 
                verbal_explanation: "אפשר לצמצם או לכתוב כשבר עשרוני. שתי התשובות נכונות.", 
                math_expression: "<div dir='ltr'>P = 0.4</div>" 
            }
        ],
        final_answer: "4/10"
    },

    // שאלה 22
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית - זיהוי קבוצה חדשה:</strong><br>
        במבחן נהיגה השתתפו 50 נבחנים.<br>
        מתוך כלל הנבחנים, 15 גברים עברו את המבחן, ו-25 נשים עברו את המבחן (השאר נכשלו).<br>
        בוחרים באקראי אדם שניגש למבחן. <strong>ידוע שהאדם עבר את המבחן בהצלחה.</strong><br>
        מהי ההסתברות שהאדם שנבחר הוא גבר?`,
        options: [
            "15/40",
            "15/50",
            "15/20",
            "20/40"
        ],
        correctAnswer: 0,
        hint: "שוב, המילה 'ידוע'. מי הקבוצה שאנו מסתכלים עליה? 'אנשים שעברו את המבחן'. חשבו כמה אנשים בסך הכל עברו את המבחן (גברים ונשים יחד). זהו המכנה החדש. במונה, הציבו את מספר הגברים שעברו.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את קבוצת ההתייחסות החדשה לפי המילה 'ידוע'. הקבוצה היא כל מי שעבר את המבחן. נחבר את כמות הגברים שעברו עם כמות הנשים שעברו.", 
                math_expression: "<div dir='ltr'>15 + 25 = 40</div>" 
            },
            { 
                verbal_explanation: "המספר 40 מחליף את ה-50 ויהפוך להיות המכנה הבלעדי של ההסתברות שלנו.", 
                math_expression: "<div dir='ltr'>40</div>" 
            },
            { 
                verbal_explanation: "כעת, מתוך אותם 40 שעברו בלבד, אנו נשאלים מה ההסתברות שהאדם הוא גבר. כמות הגברים שעברו היא 15.", 
                math_expression: "<div dir='ltr'>15</div>" 
            },
            { 
                verbal_explanation: "נרכיב את ההסתברות: כמות הרצויים חלקי המצויים החדשים.", 
                math_expression: "<div dir='ltr'>P = 15 / 40</div>" 
            }
        ],
        final_answer: "15/40"
    },

    // שאלה 23
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית בהוצאת כדורים (ללא החזרה):</strong><br>
        בכד יש 5 כדורים אדומים ו-5 כדורים כחולים (סה"כ 10).<br>
        מוציאים כדור אחד באקראי, <strong>ולא מחזירים אותו לכד</strong>.<br>
        לאחר מכן מוציאים כדור שני.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 50,20 L 50,100 Q 100,120 150,100 L 150,20 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="80" cy="90" r="10" fill="#ef4444"/>
            <circle cx="120" cy="90" r="10" fill="#ef4444"/>
            <circle cx="100" cy="70" r="10" fill="#3b82f6"/>
            <circle cx="80" cy="50" r="10" fill="#3b82f6"/>
            <circle cx="120" cy="50" r="10" fill="#ef4444"/>
            <path d="M 80,30 L 30,-10" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
        </svg>
        </div>
        <strong>ידוע</strong> שהכדור הראשון שהוצא היה אדום.<br>
        מהי ההסתברות שהכדור השני יהיה גם הוא אדום?`,
        options: [
            "4/9",
            "5/9",
            "5/10",
            "4/10"
        ],
        correctAnswer: 0,
        hint: "מאחר והוצאנו כדור אדום ולא החזרנו אותו, המצב בכד השתנה. כמה כדורים נשארו בסך הכל (מכנה)? וכמה אדומים נשארו מתוכם (מונה)?",
        solution_steps: [
            { 
                verbal_explanation: "הכד הכיל בהתחלה 10 כדורים. הוצאנו כדור אחד החוצה ולא החזרנו. נחשב את סך הכדורים החדש בכד (המכנה החדש).", 
                math_expression: "<div dir='ltr'>10 - 1 = 9</div>" 
            },
            { 
                verbal_explanation: "ידוע לנו בוודאות שהכדור שיצא היה אדום. בהתחלה היו 5 אדומים, כעת יש פחות אחד. נחשב את מספר האדומים שנותרו.", 
                math_expression: "<div dir='ltr'>5 - 1 = 4</div>" 
            },
            { 
                verbal_explanation: "מספר הכחולים נשאר ללא שינוי, אבל זה לא משנה לחישוב כי אנו מחפשים אדומים. נרכיב את ההסתברות החדשה להוצאת אדום: אדומים שנותרו חלקי סך הכדורים שנותרו.", 
                math_expression: "<div dir='ltr'>P = 4 / 9</div>" 
            }
        ],
        final_answer: "4/9"
    },

    // שאלה 24
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית בהטלת קובייה:</strong><br>
        מטילים קוביית משחק הוגנת (מספרים 1 עד 6).<br>
        המטיל מציץ בתוצאה ואומר: "<strong>ידוע</strong> שהתקבל מספר זוגי".<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="70" y="30" width="60" height="60" rx="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">2,4,6</text>
        </svg>
        </div>
        מהי ההסתברות שהמספר שהתקבל הוא בדיוק 6?`,
        options: [
            "1/3",
            "1/6",
            "3/6",
            "2/3"
        ],
        correctAnswer: 0,
        hint: "צמצמו את מרחב המדגם. אילו מספרים זוגיים יש בקובייה? (2, 4, 6 - כלומר 3 אפשרויות). מתוך שלוש האפשרויות הללו, כמה מתאימות למספר 6?",
        solution_steps: [
            { 
                verbal_explanation: "המידע 'ידוע שהתקבל זוגי' פוסל את המספרים האי-זוגיים. נרשום את האפשרויות שנשארו לנו.", 
                math_expression: "<div dir='ltr'>2 , 4 , 6</div>" 
            },
            { 
                verbal_explanation: "נספור את כמות האפשרויות שנותרו. המספר הזה יהווה את המכנה החדש של ההסתברות שלנו.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "מתוך 3 המספרים הללו, עלינו לבדוק כמה פעמים מופיע המספר המבוקש 6. הוא מופיע פעם אחת.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נחלק את הרצוי במצוי המצומצם לקבלת ההסתברות המותנית המדויקת.", 
                math_expression: "<div dir='ltr'>P = 1 / 3</div>" 
            }
        ],
        final_answer: "1/3"
    },

    // שאלה 25
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית בחוגים (דיאגרמת ון מילולית):</strong><br>
        בשכבה יש 40 תלמידים בסך הכל.<br>
        20 תלמידים לומדים מתמטיקה, ו-15 לומדים פיזיקה.<br>
        10 תלמידים לומדים <strong>גם</strong> מתמטיקה <strong>וגם</strong> פיזיקה.<br>
        נבחר תלמיד באקראי. <strong>ידוע שהוא לומד מתמטיקה.</strong><br>
        מהי ההסתברות שהוא לומד גם פיזיקה?`,
        options: [
            "10/20 (או חצי)",
            "10/40",
            "15/40",
            "10/15"
        ],
        correctAnswer: 0,
        hint: "התמקדו רק בקבוצת 'הידוע'. מי שלומד מתמטיקה זה 20 תלמידים (מכנה). מתוך אותם 20, אלו שלומדים גם פיזיקה הם אלו שלומדים את שני המקצועות (10).",
        solution_steps: [
            { 
                verbal_explanation: "המילה 'ידוע' אומרת שאנו מצמצמים את קבוצת כל השכבה לקבוצה קטנה יותר: אלו שלומדים מתמטיקה.", 
                math_expression: "<div dir='ltr'>20</div>" 
            },
            { 
                verbal_explanation: "המספר 20 הופך להיות המכנה של ההסתברות שלנו, כי רק הם רלוונטיים עכשיו.", 
                math_expression: "<div dir='ltr'>20</div>" 
            },
            { 
                verbal_explanation: "מתוך ה-20 שלומדים מתמטיקה, אנו מחפשים את אלו שלומדים בנוסף גם פיזיקה. לפי הנתונים, אלו שלומדים את שניהם הם 10 תלמידים.", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "נרכיב את ההסתברות על ידי חלוקת תלמידי שני המקצועות בכלל תלמידי המתמטיקה.", 
                math_expression: "<div dir='ltr'>P = 10 / 20</div>" 
            },
            { 
                verbal_explanation: "נצמצם את השבר על ידי חלוקה בעשר ונקבל חצי.", 
                math_expression: "<div dir='ltr'>P = 1 / 2 = 0.5</div>" 
            }
        ],
        final_answer: "10/20 (או חצי)"
    },

    // שאלה 26
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית - סביבון:</strong><br>
        סביבון מחולק ל-8 גזרות שוות הממוספרות מ-1 עד 8.<br>
        מסובבים את הסביבון, והוא נעצר.<br>
        <strong>ידוע</strong> שהסביבון נעצר על מספר הגדול מ-5.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="100" cy="60" r="40" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">6 , 7 , 8</text>
        </svg>
        </div>
        מהי ההסתברות שהמספר שהתקבל הוא זוגי?`,
        options: [
            "2/3",
            "1/3",
            "4/8",
            "2/8"
        ],
        correctAnswer: 0,
        hint: "צמצמו את מרחב המדגם למספרים הגדולים מ-5 (6, 7, 8). כמה מספרים יש בקבוצה זו? (מכנה). כמה מתוכם זוגיים? (מונה).",
        solution_steps: [
            { 
                verbal_explanation: "המידע הנתון פוסל את המספרים 1 עד 5. נרשום את קבוצת המספרים שנותרה (מספרים הגדולים מ-5).", 
                math_expression: "<div dir='ltr'>6 , 7 , 8</div>" 
            },
            { 
                verbal_explanation: "נספור את האפשרויות בקבוצה המצומצמת. אלו 3 אפשרויות שיהוו את המכנה שלנו.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "מתוך 3 המספרים הללו, נמצא אילו מהם עונים לתנאי של 'מספר זוגי'. אלו הם המספרים 6 ו-8.", 
                math_expression: "<div dir='ltr'>6 , 8</div>" 
            },
            { 
                verbal_explanation: "ישנם 2 מספרים זוגיים מתוך ה-3 האפשריים.", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "נרכיב את ההסתברות.", 
                math_expression: "<div dir='ltr'>P = 2 / 3</div>" 
            }
        ],
        final_answer: "2/3"
    },

    // שאלה 27
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית בשתי קוביות:</strong><br>
        מטילים שתי קוביות משחק הוגנות.<br>
        סכום המספרים המופיעים על שתי הקוביות הוא חיבור של שתיהן.<br>
        <strong>ידוע</strong> שסכום המספרים שהתקבל הוא בדיוק 4.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="30" y="30" width="40" height="40" rx="5" fill="#ef4444" stroke="#b91c1c" stroke-width="2"/>
            <text x="85" y="55" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle">+</text>
            <rect x="100" y="30" width="40" height="40" rx="5" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
            <text x="155" y="55" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle">=</text>
            <text x="180" y="55" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle">4</text>
        </svg>
        </div>
        מהי ההסתברות שבאחת הקוביות (לפחות) התקבל המספר 2?`,
        options: [
            "1/3",
            "1/4",
            "2/36",
            "1/36"
        ],
        correctAnswer: 0,
        hint: "כתבו לעצמכם את כל הזוגות של שתי קוביות שנותנים סכום 4 (למשל 1 ו-3, 3 ו-1...). כמה זוגות כאלו יש? זה המכנה. מתוכם, בכמה זוגות מופיע המספר 2? זה המונה.",
        solution_steps: [
            { 
                verbal_explanation: "המידע ה'ידוע' דורש שסכום הקוביות יהיה 4. נרשום את כל הזוגות האפשריים הנותנים סכום זה.", 
                math_expression: "<div dir='ltr'>(1,3) , (3,1) , (2,2)</div>" 
            },
            { 
                verbal_explanation: "סך כל התוצאות המקיימות את התנאי הוא 3. המכנה 36 כבר לא רלוונטי לנו, המכנה החדש הוא 3.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "מתוך 3 הזוגות הללו, נחפש באילו מהם מופיע המספר 2. הזוג היחיד הוא (2,2).", 
                math_expression: "<div dir='ltr'>(2,2)</div>" 
            },
            { 
                verbal_explanation: "יש רק תוצאה אחת כזו, ולכן המונה יהיה 1.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נרכיב את ההסתברות המותנית.", 
                math_expression: "<div dir='ltr'>P = 1 / 3</div>" 
            }
        ],
        final_answer: "1/3"
    },

    // שאלה 28
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>שימוש בנוסחת ההסתברות המותנית:</strong><br>
        ההסתברות שביום מסוים יהיה קר היא 0.3.<br>
        ההסתברות שבאותו היום יהיה <strong>גם</strong> קר <strong>וגם</strong> יירד גשם היא 0.15.<br>
        <strong>ידוע</strong> שביום מסוים היה קר.<br>
        מהי ההסתברות שבאותו היום ירד גשם?`,
        options: [
            "0.50 (כלומר 1/2)",
            "0.15",
            "0.45",
            "0.05"
        ],
        correctAnswer: 0,
        hint: "הנוסחה להסתברות מותנית היא: ההסתברות החיתוך ('וגם') לחלק להסתברות של המידע הידוע. כלומר, 0.15 לחלק ל-0.3.",
        solution_steps: [
            { 
                verbal_explanation: "כאשר המידע נתון לנו כבר כהסתברויות (מספרים עשרוניים), נשתמש בנוסחה הקלאסית: ההסתברות של החיתוך ('וגם') מחולקת בהסתברות ה'ידוע'.", 
                math_expression: "<div dir='ltr'>P = P(&amp;) / P(Known)</div>" 
            },
            { 
                verbal_explanation: "ההסתברות לחיתוך (גם קר וגם גשם) היא 0.15.", 
                math_expression: "<div dir='ltr'>P(&amp;) = 0.15</div>" 
            },
            { 
                verbal_explanation: "המידע הידוע הוא שהיה קר. ההסתברות לכך היא 0.3.", 
                math_expression: "<div dir='ltr'>P(Known) = 0.3</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים לתוך תרגיל חילוק פשוט.", 
                math_expression: "<div dir='ltr'>P = 0.15 / 0.3</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק במחשבון כדי לקבל את התוצאה הסופית המייצגת את ההסתברות.", 
                math_expression: "<div dir='ltr'>P = 0.50</div>" 
            }
        ],
        final_answer: "0.50 (כלומר 1/2)"
    },

    // שאלה 29
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית בשק כדורים שני צבעים:</strong><br>
        בשק יש 30 כדורים גדולים ו-20 כדורים קטנים (סה"כ 50 כדורים).<br>
        מתוך הכדורים הגדולים, 10 הם בצבע אדום והשאר כחולים.<br>
        מתוך הכדורים הקטנים, 15 הם בצבע אדום והשאר כחולים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="60" cy="50" r="20" fill="#ef4444"/>
            <text x="60" y="55" font-family="Arial" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">10</text>
            <circle cx="140" cy="65" r="10" fill="#ef4444"/>
            <text x="140" y="69" font-family="Arial" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">15</text>
        </svg>
        </div>
        מוציאים כדור באקראי. <strong>ידוע שהוא בצבע אדום.</strong><br>
        מהי ההסתברות שהוא כדור גדול?`,
        options: [
            "10/25",
            "10/30",
            "10/50",
            "25/50"
        ],
        correctAnswer: 0,
        hint: "צמצמו את המכנה. המידע הידוע הוא שהכדור אדום. כמה כדורים אדומים יש בסך הכל בשק (גדולים וקטנים)? זה המכנה. מתוכם, כמה הם אדומים גדולים? זה המונה.",
        solution_steps: [
            { 
                verbal_explanation: "המידע ה'ידוע' הוא שהכדור אדום. נחשב את סך כל הכדורים האדומים בשק על ידי חיבור הגדולים והקטנים שצבעם אדום.", 
                math_expression: "<div dir='ltr'>10 + 15 = 25</div>" 
            },
            { 
                verbal_explanation: "המספר 25 הופך להיות המכנה הבלעדי שלנו, כי רק הם רלוונטיים להמשך.", 
                math_expression: "<div dir='ltr'>25</div>" 
            },
            { 
                verbal_explanation: "מתוך 25 האדומים, אנו מחפשים את אלו שהם גדולים. לפי הנתונים, יש 10 כדורים גדולים ואדומים.", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "נבנה את ההסתברות: כמות הגדולים האדומים חלקי סך האדומים.", 
                math_expression: "<div dir='ltr'>P = 10 / 25</div>" 
            }
        ],
        final_answer: "10/25"
    },

    // שאלה 30
    {
        topic: "bagrut_35371",
        subTopic: "הסתברות מותנית",
        question_text: `<strong>הסתברות מותנית בהוצאת כדורים ללא החזרה (חלק 2):</strong><br>
        בכד יש 3 כדורים ירוקים ו-7 כדורים צהובים (סה"כ 10).<br>
        מוציאים כדור אחד, <strong>לא מחזירים אותו</strong>, ואז מוציאים כדור שני.<br>
        <strong>ידוע</strong> שהכדור הראשון שהוצא היה ירוק.<br>
        מהי ההסתברות שהכדור השני יהיה צהוב?`,
        options: [
            "7/9",
            "7/10",
            "3/9",
            "2/9"
        ],
        correctAnswer: 0,
        hint: "תעדו מה קרה בכד: הוצאנו כדור אחד (המכנה ירד ל-9). הכדור היה ירוק, ולכן מספר הצהובים לא נפגע ונשאר 7. חשבו את ההסתברות על סמך המצב החדש.",
        solution_steps: [
            { 
                verbal_explanation: "הוצאנו כדור אחד ולא החזרנו. נחשב את סך הכדורים החדש שנותרו בכד.", 
                math_expression: "<div dir='ltr'>10 - 1 = 9</div>" 
            },
            { 
                verbal_explanation: "הכדור שיצא היה ירוק. לכן, מספר הכדורים הצהובים לא השתנה ונשאר כפי שהיה.", 
                math_expression: "<div dir='ltr'>7</div>" 
            },
            { 
                verbal_explanation: "אנו רוצים להוציא כעת כדור צהוב. יש 7 צהובים מתוך 9 כדורים שנותרו בסך הכל.", 
                math_expression: "<div dir='ltr'>P = 7 / 9</div>" 
            }
        ],
        final_answer: "7/9"
    },

    // ---------------------------------------------------------
    // תת נושא 3: עצמאות בין אירועים (שאלות 31-40)
    // ---------------------------------------------------------

    // שאלה 31
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>הגדרת אירועים בלתי תלויים:</strong><br>
        ידוע כי אירוע A ואירוע B הם <strong>אירועים בלתי תלויים</strong> (עצמאיים).<br>
        ההסתברות להתרחשות אירוע A היא 0.4.<br>
        ההסתברות להתרחשות אירוע B היא 0.5.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="70" cy="60" r="30" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
            <text x="70" y="65" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">A</text>
            <circle cx="130" cy="60" r="30" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
            <text x="130" y="65" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">B</text>
        </svg>
        </div>
        מהי ההסתברות ששני האירועים יתרחשו יחד (A וגם B)?`,
        options: [
            "0.20",
            "0.90",
            "0.10",
            "0.45"
        ],
        correctAnswer: 0,
        hint: "כאשר אירועים הם בלתי תלויים, ההסתברות ששניהם יקרו (החיתוך 'וגם') שווה למכפלת ההסתברויות שלהם. פשוט הכפילו 0.4 ב-0.5.",
        solution_steps: [
            { 
                verbal_explanation: "אירועים בלתי תלויים הם אירועים שאינם משפיעים זה על זה. הכלל אומר שההסתברות המשותפת שלהם היא כפל ההסתברויות.", 
                math_expression: "<div dir='ltr'>P(A &amp; B) = P(A) &times; P(B)</div>" 
            },
            { 
                verbal_explanation: "נציב את ההסתברויות שניתנו לנו בשאלה עבור אירוע A ואירוע B.", 
                math_expression: "<div dir='ltr'>P = 0.4 &times; 0.5</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל במחשבון לקבלת ההסתברות ששניהם יתרחשו יחד.", 
                math_expression: "<div dir='ltr'>P = 0.20</div>" 
            }
        ],
        final_answer: "0.20"
    },

    // שאלה 32
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>בדיקת תלות בין אירועים (האם הם עצמאיים?):</strong><br>
        על סמך סקר, ידועים הנתונים הבאים:<br>
        ההסתברות שאדם אוהב קפה (אירוע A) היא 0.3.<br>
        ההסתברות שאדם קורא עיתון (אירוע B) היא 0.6.<br>
        ההסתברות שאדם <strong>גם</strong> אוהב קפה <strong>וגם</strong> קורא עיתון היא 0.18.<br>
        האם שני האירועים הללו הם בלתי תלויים?`,
        options: [
            "כן, מכיוון שכפל ההסתברויות שווה לחיתוך",
            "לא, מכיוון שכפל ההסתברויות אינו שווה לחיתוך",
            "לא ניתן לדעת מהנתונים",
            "כן, כי 0.3 + 0.6 לא שווה 0.18"
        ],
        correctAnswer: 0,
        hint: "כדי לבדוק אם אירועים הם בלתי תלויים, מכפילים את P(A) ב-P(B). אם התוצאה של הכפל שווה בדיוק להסתברות של ה'וגם' הנתונה בשאלה, הרי שהם בלתי תלויים.",
        solution_steps: [
            { 
                verbal_explanation: "כדי לבדוק תלות, נבצע את מבחן הכפל. נכפיל את ההסתברות לאירוע A בהסתברות לאירוע B.", 
                math_expression: "<div dir='ltr'>0.3 &times; 0.6</div>" 
            },
            { 
                verbal_explanation: "נחשב את תוצאת הכפל במחשבון.", 
                math_expression: "<div dir='ltr'>0.18</div>" 
            },
            { 
                verbal_explanation: "נשווה את התוצאה שקיבלנו להסתברות ה'וגם' שמופיעה בנתוני השאלה.", 
                math_expression: "<div dir='ltr'>0.18 = 0.18</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהתוצאה זהה לחלוטין לנתון של החיתוך המשותף, אנו מסיקים בוודאות שהאירועים אינם משפיעים זה על זה (הם בלתי תלויים).", 
                math_expression: "<div dir='ltr'>Independent = Yes</div>" 
            }
        ],
        final_answer: "כן, מכיוון שכפל ההסתברויות שווה לחיתוך"
    },

    // שאלה 33
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>בדיקת תלות - מתי אירועים כן תלויים:</strong><br>
        ההסתברות שביום מסוים תהיה עננות (אירוע A) היא 0.5.<br>
        ההסתברות שביום מסוים תהיה רוח חזקה (אירוע B) היא 0.4.<br>
        ההסתברות שיהיו באותו יום <strong>גם עננות וגם רוח חזקה</strong> היא 0.25.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="80" cy="60" r="40" fill="rgba(148,163,184,0.2)" stroke="#64748b" stroke-width="2"/>
            <circle cx="120" cy="60" r="40" fill="rgba(14,165,233,0.2)" stroke="#0ea5e9" stroke-width="2"/>
            <text x="100" y="65" font-family="Arial" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">0.25</text>
        </svg>
        </div>
        האם שני האירועים הללו הם בלתי תלויים?`,
        options: [
            "לא, מכיוון שמכפלתם (0.2) לא שווה לחיתוך (0.25)",
            "כן, מכיוון ש- 0.5 כפול 0.5 שווה 0.25",
            "כן, אלו תופעות טבע ולכן הן תמיד תלויות",
            "לא, מכיוון שהחיבור שלהם הוא 0.9"
        ],
        correctAnswer: 0,
        hint: "הכפילו את P(A) ב-P(B) כלומר 0.5 כפול 0.4. האם קיבלתם 0.25? אם לא, האירועים תלויים (משפיעים זה על זה).",
        solution_steps: [
            { 
                verbal_explanation: "נפעיל את מבחן הכפל לבדיקת עצמאות. נכפיל את ההסתברות לאירוע A בהסתברות לאירוע B.", 
                math_expression: "<div dir='ltr'>0.5 &times; 0.4</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל העשרוני במחשבון.", 
                math_expression: "<div dir='ltr'>0.20</div>" 
            },
            { 
                verbal_explanation: "נשווה את התוצאה שלנו (0.20) לנתון שבשאלה (0.25).", 
                math_expression: "<div dir='ltr'>0.20 &ne; 0.25</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהמספרים אינם שווים, ההסתברות ל'וגם' אינה פשוט המכפלה, מה שמוכיח שהאירועים תלויים ומשפיעים אחד על השני.", 
                math_expression: "<div dir='ltr'>Dependent</div>" 
            }
        ],
        final_answer: "לא, מכיוון שמכפלתם לא שווה לחיתוך"
    },

    // שאלה 34
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>הטלת שני כלים נפרדים (הוכחת חוסר תלות):</strong><br>
        ילד מבצע שני ניסויים במקביל:<br>
        הוא מטיל מטבע הוגן וגם מטיל קובייה הוגנת.<br>
        מהי ההסתברות לקבל <strong>"עץ" במטבע וגם את המספר 6 בקובייה</strong>?`,
        options: [
            "1/12",
            "1/6",
            "1/2",
            "2/8"
        ],
        correctAnswer: 0,
        hint: "מטבע וקובייה הם אירועים בלתי תלויים בבירור (המטבע לא 'יודע' מה יצא בקובייה). חשבו את ההסתברות של כל אחד בנפרד (1/2 ו-1/6) והכפילו.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את ההסתברות לקבלת 'עץ' בהטלת מטבע יחיד בעל שני צדדים.", 
                math_expression: "<div dir='ltr'>P = 1 / 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההסתברות לקבלת המספר 6 בהטלת קובייה רגילה בת שש פאות.", 
                math_expression: "<div dir='ltr'>P = 1 / 6</div>" 
            },
            { 
                verbal_explanation: "מכיוון שאלו כלים נפרדים, הם אירועים בלתי תלויים. הכלל לאירועים כאלו דורש להכפיל את ההסתברויות כדי למצוא את ההתרחשות של 'וגם'.", 
                math_expression: "<div dir='ltr'>P = 1 / 2 &times; 1 / 6</div>" 
            },
            { 
                verbal_explanation: "נכפול מונה במונה ומכנה במכנה לקבלת שבר אחד משותף.", 
                math_expression: "<div dir='ltr'>P = 1 / 12</div>" 
            }
        ],
        final_answer: "1/12"
    },

    // שאלה 35
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>בחירה משני כדים נפרדים (חוסר תלות):</strong><br>
        כד א' מכיל 2 כדורים אדומים ו-3 כדורים כחולים (סה"כ 5).<br>
        כד ב' מכיל 4 כדורים אדומים וכדור 1 כחול (סה"כ 5).<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 120" width="100%" height="120" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="30" y="30" width="60" height="70" fill="none" stroke="#64748b" stroke-width="2"/>
            <text x="60" y="20" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Box A</text>
            <circle cx="50" cy="80" r="8" fill="#ef4444"/><circle cx="70" cy="80" r="8" fill="#ef4444"/>
            <rect x="150" y="30" width="60" height="70" fill="none" stroke="#64748b" stroke-width="2"/>
            <text x="180" y="20" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Box B</text>
            <circle cx="160" cy="80" r="8" fill="#ef4444"/><circle cx="180" cy="80" r="8" fill="#ef4444"/><circle cx="170" cy="60" r="8" fill="#ef4444"/><circle cx="190" cy="60" r="8" fill="#ef4444"/>
        </svg>
        </div>
        מוציאים באקראי כדור אחד מכד א', וכדור אחד מכד ב'.<br>
        מהי ההסתברות ששני הכדורים שהוצאו יהיו בצבע אדום?`,
        options: [
            "8/25",
            "6/10",
            "8/10",
            "2/25"
        ],
        correctAnswer: 0,
        hint: "הוצאה משני כדים נפרדים לחלוטין פירושה אירועים בלתי תלויים. חשבו את ההסתברות לאדום מכד א', וחשבו את ההסתברות לאדום מכד ב'. הכפילו את שני השברים זה בזה.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את ההסתברות להוציא כדור אדום מכד א'. יש בו 2 אדומים מתוך 5 כדורים סך הכל.", 
                math_expression: "<div dir='ltr'>P(A) = 2 / 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההסתברות להוציא כדור אדום מכד ב'. יש בו 4 אדומים מתוך 5 כדורים סך הכל.", 
                math_expression: "<div dir='ltr'>P(B) = 4 / 5</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהכדים אינם משפיעים זה על זה, נכפיל את שתי ההסתברויות כדי למצוא את הסיכוי ששני המקרים יקרו יחד ('וגם').", 
                math_expression: "<div dir='ltr'>P = 2 / 5 &times; 4 / 5</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל של שבר בשבר על ידי כפל המונים וכפל המכנים.", 
                math_expression: "<div dir='ltr'>P = 8 / 25</div>" 
            }
        ],
        final_answer: "8/25"
    },

    // שאלה 36
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>הסתברות רצופה במצב של חוסר תלות מוחלט:</strong><br>
        צלף פוגע במטרה בהסתברות קבועה של 0.8 (בכל ירייה בנפרד).<br>
        הצלף יורה למטרה שתי יריות רצופות.<br>
        ההנחה היא שהצלחת ירייה אחת אינה משפיעה כלל על הירייה השנייה (אירועים בלתי תלויים).<br>
        מהי ההסתברות שהצלף יפגע במטרה <strong>בשתי היריות</strong> גם יחד?`,
        options: [
            "0.64",
            "1.60",
            "0.16",
            "0.80"
        ],
        correctAnswer: 0,
        hint: "כמו בהטלת מטבע פעמיים. ההסתברות לפגיעה בירייה הראשונה היא 0.8, ובירייה השנייה היא 0.8. כפלו אותן כדי לקבל את 'הפגיעה הכפולה'.",
        solution_steps: [
            { 
                verbal_explanation: "ההסתברות לפגיעה בירייה הראשונה נתונה כ-0.8.", 
                math_expression: "<div dir='ltr'>P_1 = 0.8</div>" 
            },
            { 
                verbal_explanation: "מכיוון שאין תלות בין היריות, ההסתברות לפגיעה בירייה השנייה נשארת זהה לחלוטין.", 
                math_expression: "<div dir='ltr'>P_2 = 0.8</div>" 
            },
            { 
                verbal_explanation: "אנו מחפשים את ההסתברות של פגיעה בראשונה 'וגם' פגיעה בשנייה. לשם כך, נכפיל את שתי ההסתברויות הבלתי תלויות.", 
                math_expression: "<div dir='ltr'>P = 0.8 &times; 0.8</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל בעזרת מחשבון.", 
                math_expression: "<div dir='ltr'>P = 0.64</div>" 
            }
        ],
        final_answer: "0.64"
    },

    // שאלה 37
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>הסתברות לתקלות במכונות בלתי תלויות:</strong><br>
        במפעל פועלות שתי מכונות באופן עצמאי לחלוטין.<br>
        ההסתברות שמכונה א' תתקלקל היום היא 0.1.<br>
        ההסתברות שמכונה ב' תתקלקל היום היא 0.2.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="30" y="30" width="50" height="60" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <text x="55" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">0.1</text>
            <rect x="120" y="30" width="50" height="60" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <text x="145" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444" text-anchor="middle">0.2</text>
        </svg>
        </div>
        מהי ההסתברות ש<strong>שתי המכונות יתקלקלו</strong> באותו היום?`,
        options: [
            "0.02",
            "0.30",
            "0.10",
            "0.08"
        ],
        correctAnswer: 0,
        hint: "המכונות פועלות באופן עצמאי (בלתי תלויות). ההסתברות שמכונה א' תתקלקל 'וגם' שמכונה ב' תתקלקל היא פשוט המכפלה של שתי ההסתברויות. הכפילו 0.1 ב-0.2.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את ההסתברות לתקלה במכונה הראשונה.", 
                math_expression: "<div dir='ltr'>P(A) = 0.1</div>" 
            },
            { 
                verbal_explanation: "נרשום את ההסתברות לתקלה במכונה השנייה.", 
                math_expression: "<div dir='ltr'>P(B) = 0.2</div>" 
            },
            { 
                verbal_explanation: "המילה 'באופן עצמאי' מתירה לנו להשתמש בחוק הכפל של אירועים בלתי תלויים כדי למצוא את חיתוך המקרים (תקלה 'וגם' תקלה).", 
                math_expression: "<div dir='ltr'>P = 0.1 &times; 0.2</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל בזהירות כדי לא לטעות במיקום האפס (אפשר להיעזר במחשבון).", 
                math_expression: "<div dir='ltr'>P = 0.02</div>" 
            }
        ],
        final_answer: "0.02"
    },

    // שאלה 38
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>מציאת הסתברות חסרה מתוך חיתוך (אירועים בלתי תלויים):</strong><br>
        ידוע שאירוע A ואירוע B הם אירועים בלתי תלויים.<br>
        ההסתברות שאירוע A יתרחש היא 0.8.<br>
        ההסתברות ש<strong>שני האירועים יתרחשו יחד</strong> (A וגם B) היא 0.4.<br>
        מהי ההסתברות שאירוע B יתרחש בפני עצמו (P(B))?`,
        options: [
            "0.50",
            "0.32",
            "0.20",
            "1.20"
        ],
        correctAnswer: 0,
        hint: "באירועים בלתי תלויים: ההסתברות לחיתוך (0.4) שווה למכפלת ההסתברויות (0.8 כפול משהו). בנו משוואה: 0.8 כפול P(B) שווה ל-0.4, וחלקו כדי לבודד את המשתנה החסר.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הנוסחה הקבועה של אירועים בלתי תלויים: הסתברות החיתוך שווה למכפלת ההסתברויות.", 
                math_expression: "<div dir='ltr'>P(A &amp; B) = P(A) &times; P(B)</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים הידועים לנו מהשאלה אל תוך המשוואה. החיתוך הוא 0.4, ואירוע A הוא 0.8. אירוע B נשאר כנעלם.", 
                math_expression: "<div dir='ltr'>0.4 = 0.8 &times; P(B)</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ההסתברות החסרה, נבודד אותה על ידי חלוקת המשוואה ב-0.8.", 
                math_expression: "<div dir='ltr'>P(B) = 0.4 / 0.8</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק לקבלת התוצאה הסופית של ההסתברות לאירוע ב'.", 
                math_expression: "<div dir='ltr'>P(B) = 0.5</div>" 
            }
        ],
        final_answer: "0.50"
    },

    // שאלה 39
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>הבנת חוסר תלות בשליפה עם החזרה:</strong><br>
        בכד יש 4 כדורים לבנים ו-6 כדורים שחורים.<br>
        מוציאים כדור, רושמים את צבעו, ו<strong>מחזירים אותו לכד</strong>.<br>
        לאחר מכן מוציאים כדור שני.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="80" cy="60" r="15" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
            <path d="M 100,50 Q 110,30 120,50" fill="none" stroke="#22c55e" stroke-width="2"/>
            <polygon points="120,50 115,45 125,45" fill="#22c55e"/>
            <text x="100" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">Return</text>
        </svg>
        </div>
        האם הוצאת הכדור הראשון והוצאת הכדור השני נחשבים כאירועים בלתי תלויים? ומה ההסתברות שנוציא לבן ואז שחור?`,
        options: [
            "כן בלתי תלויים. ההסתברות היא 24/100",
            "לא, הם תלויים בגלל שזה מאותו כד",
            "כן בלתי תלויים. ההסתברות היא 10/100",
            "לא, הם תלויים, ההסתברות היא 24/90"
        ],
        correctAnswer: 0,
        hint: "כשמחזירים כדור, המצב בכד מתאפס לחלוטין, ולכן ההוצאה השנייה לא מושפעת מהראשונה - אלו אירועים בלתי תלויים! הכפילו את ההסתברות ללבן (4 מתוך 10) בהסתברות לשחור (6 מתוך 10).",
        solution_steps: [
            { 
                verbal_explanation: "הפעולה של 'החזרה לכד' מאפסת את הניסוי. לכן, ההוצאה השנייה לחלוטין לא מושפעת מהראשונה. אלו אירועים בלתי תלויים.", 
                math_expression: "<div dir='ltr'>Independent = Yes</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההסתברות לכדור לבן בהוצאה הראשונה (יש 4 לבנים מתוך 10 בסך הכל).", 
                math_expression: "<div dir='ltr'>P(W) = 4 / 10</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההסתברות לכדור שחור בהוצאה השנייה (הכד התאפס, ולכן יש 6 שחורים מתוך 10 בסך הכל).", 
                math_expression: "<div dir='ltr'>P(B) = 6 / 10</div>" 
            },
            { 
                verbal_explanation: "בגלל שאין תלות, פשוט נכפיל את שתי ההסתברויות כדי למצוא את הסיכוי לרצף של 'לבן ואז שחור'.", 
                math_expression: "<div dir='ltr'>P = 4 / 10 &times; 6 / 10</div>" 
            },
            { 
                verbal_explanation: "נבצע את כפל השברים (מונה במונה, מכנה במכנה).", 
                math_expression: "<div dir='ltr'>P = 24 / 100</div>" 
            }
        ],
        final_answer: "כן, וההסתברות היא 24/100"
    },

    // שאלה 40
    {
        topic: "bagrut_35371",
        subTopic: "עצמאות בין אירועים",
        question_text: `<strong>הבנת תלות בשליפה ללא החזרה:</strong><br>
        בכד ישנם 4 כדורים לבנים ו-6 כדורים שחורים (סה"כ 10).<br>
        מוציאים כדור אחד, <strong>ולא מחזירים אותו</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="80" cy="60" r="15" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
            <path d="M 100,50 L 120,50 M 110,40 L 120,50 L 110,60" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="135" y="85" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">No Return</text>
        </svg>
        </div>
        לאחר מכן מוציאים כדור שני.<br>
        האם שני האירועים הללו ("הוצאת כדור ראשון" ו-"הוצאת כדור שני") הם אירועים בלתי תלויים?`,
        options: [
            "לא, מכיוון שההוצאה הראשונה משנה את המצב בכד ומשפיעה על השנייה (אירועים תלויים)",
            "כן, מכיוון שתמיד לוקחים אקראית אז זה לא משנה (בלתי תלויים)",
            "לא ניתן לקבוע ללא חישוב מספרי",
            "כן, כל משיכה מהכד היא ניסוי עצמאי וחדש"
        ],
        correctAnswer: 0,
        hint: "שאלו את עצמכם: האם ההסתברות בהוצאה השנייה תישאר זהה אם הכדור הראשון יצא לבן או אם הוא יצא שחור? לא, כי סך הכדורים ירד ל-9, וגם כמות הצבעים השתנתה. ברגע שפעולה אחת משנה את ההסתברות של הפעולה הבאה, הם אירועים תלויים.",
        solution_steps: [
            { 
                verbal_explanation: "בהוצאה הראשונה, ישנם בסך הכל 10 כדורים.", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "מכיוון שלא מחזירים את הכדור שהוצאנו, מספר הכדורים הכללי בכד יורד ל-9 לקראת ההוצאה השנייה.", 
                math_expression: "<div dir='ltr'>10 - 1 = 9</div>" 
            },
            { 
                verbal_explanation: "בנוסף, כמות הכדורים מהצבע שהוצאנו יורדת גם היא. כלומר, ההסתברות לשלוף צבע מסוים בהוצאה השנייה משתנה ישירות בהתאם למה שיצא בהוצאה הראשונה.", 
                math_expression: "<div dir='ltr'>P_2 &ne; P_1</div>" 
            },
            { 
                verbal_explanation: "לפי הגדרת ההסתברות: אם התרחשות של אירוע אחד משנה את ההסתברות של האירוע הבא, הרי שהם אירועים תלויים, והם אינם עצמאיים.", 
                math_expression: "<div dir='ltr'>Dependent</div>" 
            }
        ],
        final_answer: "לא, מכיוון שההוצאה הראשונה משנה את המצב בכד"
    },
    // תת נושא: עץ הסתברות
    // ---------------------------------------------------------

    // שאלה 41
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>קריאת עץ הסתברות בסיסי (מסלול יחיד):</strong><br>
        במפעל מייצרים שני סוגי נורות: סוג א' וסוג ב'.<br>
        70% מהנורות המיוצרות הן מסוג א'.<br>
        ידוע כי ההסתברות שנורה מסוג א' תהיה פגומה היא 0.05.<br>
        בוחרים באקראי נורה אחת מפס הייצור.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="20" cy="75" r="5" fill="#0f172a"/>
            <line x1="20" y1="75" x2="80" y2="40" stroke="#0f172a" stroke-width="2"/>
            <line x1="20" y1="75" x2="80" y2="110" stroke="#cbd5e1" stroke-width="2"/>
            <text x="50" y="45" font-family="Arial" font-size="12" font-weight="bold" fill="#22c55e">0.70</text>
            <text x="90" y="40" font-family="Arial" font-size="12" font-weight="bold">סוג א'</text>
            <line x1="120" y1="40" x2="180" y2="20" stroke="#0f172a" stroke-width="2"/>
            <line x1="120" y1="40" x2="180" y2="60" stroke="#cbd5e1" stroke-width="2"/>
            <text x="145" y="25" font-family="Arial" font-size="12" font-weight="bold" fill="#ef4444">0.05</text>
            <text x="190" y="25" font-family="Arial" font-size="12" font-weight="bold">פגומה</text>
        </svg>
        </div>
        מהי ההסתברות שהנורה שנבחרה היא מסוג א' <strong>וגם</strong> פגומה?`,
        options: [
            "0.035",
            "0.750",
            "0.050",
            "0.700"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא הסתברות של 'מסלול' שלם בעץ (הענף הראשון 'וגם' הענף השני), פשוט מכפילים את המספרים שרשומים על הענפים שאותם עוברים בדרך.",
        solution_steps: [
            { 
                verbal_explanation: "הצעד הראשון במסלול העץ הוא בחירת נורה מסוג א'. נתון ש-70 אחוז מהנורות הן כאלו, לכן נחלק ב-100 כדי לקבל מספר עשרוני.", 
                math_expression: "<div dir='ltr'>70 / 100 = 0.70</div>" 
            },
            { 
                verbal_explanation: "הצעד השני במסלול (ההמשך מאותו ענף) הוא שהנורה תהיה פגומה. ההסתברות הזו כבר נתונה לנו כמספר עשרוני.", 
                math_expression: "<div dir='ltr'>0.05</div>" 
            },
            { 
                verbal_explanation: "כדי לחשב את ההסתברות של כל המסלול ברצף, נכפיל את המספר של הענף הראשון במספר של הענף השני.", 
                math_expression: "<div dir='ltr'>0.70 &times; 0.05</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל בעזרת מחשבון כדי לקבל את התוצאה הסופית והמדויקת.", 
                math_expression: "<div dir='ltr'>0.035</div>" 
            }
        ],
        final_answer: "0.035"
    },

    // שאלה 42
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>השלמת הסתברויות חסרות בעץ:</strong><br>
        במשחק מסוים ההסתברות לזכות בפרס היא 0.6.<br>
        הענף המשלים (לא לזכות) חסר בעץ ועלינו להשלימו.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="20" cy="75" r="5" fill="#0f172a"/>
            <line x1="20" y1="75" x2="100" y2="40" stroke="#0f172a" stroke-width="2"/>
            <line x1="20" y1="75" x2="100" y2="110" stroke="#ef4444" stroke-width="2"/>
            <text x="60" y="50" font-family="Arial" font-size="12" font-weight="bold">0.6</text>
            <text x="60" y="105" font-family="Arial" font-size="14" font-weight="bold" fill="#ef4444">?</text>
            <text x="110" y="45" font-family="Arial" font-size="12" font-weight="bold">זכייה</text>
            <text x="110" y="115" font-family="Arial" font-size="12" font-weight="bold">הפסד</text>
        </svg>
        </div>
        מהי ההסתברות <strong>להפסיד</strong> (כלומר, הענף התחתון בעץ)?`,
        options: [
            "0.4",
            "0.6",
            "0.5",
            "1.0"
        ],
        correctAnswer: 0,
        hint: "כלל ברזל בעצי הסתברות: סכום המספרים של כל הענפים היוצאים מאותה נקודה בדיוק שווה תמיד ל-1 שלם (מאה אחוזים). חסרו את הענף הידוע מתוך 1.",
        solution_steps: [
            { 
                verbal_explanation: "סכום ההסתברויות של כל הענפים היוצאים מאותה התפצלות (צומת) משלים תמיד לאחת שלם.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "המספר של הענף העליון (זכייה) נתון לנו בשאלה.", 
                math_expression: "<div dir='ltr'>0.6</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את המספר של הענף התחתון החסר (הפסד), נחסר את הענף הידוע מתוך השלם.", 
                math_expression: "<div dir='ltr'>1 - 0.6</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור לקבלת המספר החסר בעץ.", 
                math_expression: "<div dir='ltr'>0.4</div>" 
            }
        ],
        final_answer: "0.4"
    },

    // שאלה 43
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>חיבור מסלולים בעץ (שתי אפשרויות לאותה תוצאה):</strong><br>
        תלמיד יכול להגיע לבית הספר באוטובוס (הסתברות 0.6) או ברגל (הסתברות 0.4).<br>
        אם הוא נוסע באוטובוס, ההסתברות שיאחר היא 0.3.<br>
        אם הוא הולך ברגל, ההסתברות שיאחר היא 0.2.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <circle cx="20" cy="75" r="4" fill="#0f172a"/>
            <line x1="20" y1="75" x2="80" y2="40" stroke="#0f172a" stroke-width="1.5"/>
            <text x="45" y="50" font-family="Arial" font-size="10">0.6</text>
            <line x1="110" y1="40" x2="170" y2="20" stroke="#22c55e" stroke-width="2"/>
            <text x="135" y="25" font-family="Arial" font-size="10">0.3</text>
            <line x1="20" y1="75" x2="80" y2="110" stroke="#0f172a" stroke-width="1.5"/>
            <text x="45" y="105" font-family="Arial" font-size="10">0.4</text>
            <line x1="110" y1="110" x2="170" y2="130" stroke="#22c55e" stroke-width="2"/>
            <text x="135" y="135" font-family="Arial" font-size="10">0.2</text>
        </svg>
        </div>
        מהי ההסתברות שהתלמיד <strong>יאחר</strong> לבית הספר (בכל דרך שהיא)?`,
        options: [
            "0.26",
            "0.50",
            "0.18",
            "0.08"
        ],
        correctAnswer: 0,
        hint: "ישנם שני מסלולים נפרדים בעץ שמובילים לאיחור. חשבו את התוצאה של המסלול הראשון בכפל. חשבו את התוצאה של המסלול השני בכפל. בסוף, חברו את שתי התוצאות.",
        solution_steps: [
            { 
                verbal_explanation: "המסלול הראשון לאיחור הוא נסיעה באוטובוס. נכפיל את המספרים שעל ענפי המסלול הזה.", 
                math_expression: "<div dir='ltr'>0.6 &times; 0.3</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל עבור המסלול הראשון ונשמור את התוצאה.", 
                math_expression: "<div dir='ltr'>0.18</div>" 
            },
            { 
                verbal_explanation: "המסלול השני לאיחור הוא הליכה ברגל. נכפיל את המספרים שעל ענפי המסלול הזה.", 
                math_expression: "<div dir='ltr'>0.4 &times; 0.2</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל עבור המסלול השני.", 
                math_expression: "<div dir='ltr'>0.08</div>" 
            },
            { 
                verbal_explanation: "כיוון שהתלמיד יאחר אם ייבחר במסלול הראשון 'או' במסלול השני, נחבר את תוצאות שני המסלולים יחד.", 
                math_expression: "<div dir='ltr'>0.18 + 0.08</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיבור לקבלת התשובה הסופית.", 
                math_expression: "<div dir='ltr'>0.26</div>" 
            }
        ],
        final_answer: "0.26"
    },

    // שאלה 44
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>הוצאה ללא החזרה בעזרת עץ:</strong><br>
        בכד יש 4 כדורים אדומים ו-6 כדורים לבנים (סה"כ 10).<br>
        מוציאים כדור אחד, <strong>ולא מחזירים אותו</strong>.<br>
        לאחר מכן מוציאים כדור שני.<br>
        מהי ההסתברות ששני הכדורים שהוצאו יהיו <strong>אדומים</strong>?`,
        options: [
            "12/90",
            "16/100",
            "4/10",
            "12/100"
        ],
        correctAnswer: 0,
        hint: "דמיינו מסלול בעץ: ענף של אדום ואז המשך לעוד ענף אדום. בשלב הראשון יש 4 אדומים מתוך 10. בשלב השני יש כדור אחד פחות בכד וכדור אדום אחד פחות. כפלו את השברים.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את ההסתברות לענף הראשון בעץ: הוצאת כדור אדום מהכד המלא.", 
                math_expression: "<div dir='ltr'>4 / 10</div>" 
            },
            { 
                verbal_explanation: "לפני ההוצאה השנייה, מספר הכדורים הכולל ירד באחד.", 
                math_expression: "<div dir='ltr'>10 - 1 = 9</div>" 
            },
            { 
                verbal_explanation: "גם מספר הכדורים האדומים הזמינים לשליפה ירד באחד.", 
                math_expression: "<div dir='ltr'>4 - 1 = 3</div>" 
            },
            { 
                verbal_explanation: "נרשום את ההסתברות של הענף השני: שליפת אדום מהכד החסר.", 
                math_expression: "<div dir='ltr'>3 / 9</div>" 
            },
            { 
                verbal_explanation: "נכפיל את המספרים של שני הענפים כדי לקבל את כל המסלול.", 
                math_expression: "<div dir='ltr'>( 4 / 10 ) &times; ( 3 / 9 )</div>" 
            },
            { 
                verbal_explanation: "נכפול את המונים (4 כפול 3) ואת המכנים (10 כפול 9) לקבלת השבר הסופי.", 
                math_expression: "<div dir='ltr'>12 / 90</div>" 
            }
        ],
        final_answer: "12/90"
    },

    // שאלה 45
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>הוצאה ללא החזרה (שני צבעים שונים):</strong><br>
        בכד יש 4 כדורים אדומים ו-6 כדורים לבנים (סה"כ 10).<br>
        מוציאים כדור אחד, <strong>ולא מחזירים אותו</strong>.<br>
        לאחר מכן מוציאים כדור שני.<br>
        מהי ההסתברות לקבל כדור אחד אדום וכדור אחד לבן <strong>בכל סדר שהוא</strong>?`,
        options: [
            "48/90",
            "24/90",
            "24/100",
            "48/100"
        ],
        correctAnswer: 0,
        hint: "ישנם שני מסלולים מתאימים: מסלול ראשון הוא 'אדום ואז לבן'. מסלול שני הוא 'לבן ואז אדום'. חשבו כל מסלול בנפרד בכפל, וחברו את התוצאות.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את המסלול הראשון: אדום (4 מתוך 10) ואחריו לבן (נשארו 6 לבנים, אבל מתוך 9 כדורים בלבד).", 
                math_expression: "<div dir='ltr'>( 4 / 10 ) &times; ( 6 / 9 ) = 24 / 90</div>" 
            },
            { 
                verbal_explanation: "נחשב את המסלול השני: לבן (6 מתוך 10) ואחריו אדום (נשארו 4 אדומים, מתוך 9 כדורים בלבד).", 
                math_expression: "<div dir='ltr'>( 6 / 10 ) &times; ( 4 / 9 ) = 24 / 90</div>" 
            },
            { 
                verbal_explanation: "נחבר את התוצאות של שני המסלולים יחד.", 
                math_expression: "<div dir='ltr'>24 / 90 + 24 / 90</div>" 
            },
            { 
                verbal_explanation: "בחיבור שברים בעלי אותו מכנה, מחברים רק את המספרים העליונים.", 
                math_expression: "<div dir='ltr'>48 / 90</div>" 
            }
        ],
        final_answer: "48/90"
    },

    // שאלה 46
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>הסתברות משלימה בעץ - "לפחות אחד":</strong><br>
        שחקן כדורסל זורק לסל שתי זריקות עונשין.<br>
        ההסתברות שיקלע בכל זריקה היא 0.8.<br>
        מהי ההסתברות שהשחקן יקלע <strong>לפחות זריקה אחת</strong> לסל?<br>
        (קליעה אחת או שתיים).`,
        options: [
            "0.96",
            "0.64",
            "0.80",
            "0.16"
        ],
        correctAnswer: 0,
        hint: "הדרך הקלה ביותר: מצאו את המסלול היחיד שלא מתאים לנו (החטאה בשתי הזריקות). חשבו את ההסתברות למסלול זה, וחסרו את התוצאה מ-1 שלם.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את ההסתברות להחטאה בודדת על ידי חיסור סיכויי הקליעה מ-1 שלם.", 
                math_expression: "<div dir='ltr'>1 - 0.8 = 0.2</div>" 
            },
            { 
                verbal_explanation: "נחשב את ההסתברות של המסלול היחיד שאנו לא רוצים: החטאה בזריקה הראשונה וגם החטאה בזריקה השנייה.", 
                math_expression: "<div dir='ltr'>0.2 &times; 0.2 = 0.04</div>" 
            },
            { 
                verbal_explanation: "נחסר את מסלול ההחטאה الكפול מתוך השלם הוודאי (1) כדי לקבל את ההסתברות של כל שאר האפשרויות.", 
                math_expression: "<div dir='ltr'>1 - 0.04</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ונמצא את התשובה הסופית המהירה.", 
                math_expression: "<div dir='ltr'>0.96</div>" 
            }
        ],
        final_answer: "0.96"
    },

    // שאלה 47
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>מציאת ענף שני כאשר ההסתברות הכוללת ידועה:</strong><br>
        במפעל, ההסתברות שמוצר יעבור בהצלחה את השלב הראשון בבקרת האיכות היא 0.9.<br>
        ידוע כי ההסתברות שמוצר יעבור <strong>את המסלול השלם</strong> (גם את הראשון וגם את השני) היא 0.81.<br>
        מהי ההסתברות של הענף השני בעץ? (ההסתברות לעבור את השלב השני, בהנחה שעבר את הראשון).`,
        options: [
            "0.90",
            "0.81",
            "0.09",
            "0.10"
        ],
        correctAnswer: 0,
        hint: "אנחנו יודעים שהכפל של הענף הראשון בענף השני שווה ל-0.81. לכן, חלקו את התוצאה הסופית (0.81) במספר של הענף הראשון (0.9) כדי לחשוף את הענף החסר.",
        solution_steps: [
            { 
                verbal_explanation: "מסלול שלם שווה לענף הראשון כפול הענף השני. כדי למצוא את הענף השני נבצע פעולת חילוק של המסלול השלם בענף הידוע.", 
                math_expression: "<div dir='ltr'>0.81 / 0.90</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הפשוט בעזרת מחשבון.", 
                math_expression: "<div dir='ltr'>0.90</div>" 
            }
        ],
        final_answer: "0.90"
    },

    // שאלה 48
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>עץ תלת-שלבי (3 פעולות ברצף):</strong><br>
        מטילים מטבע הוגן 3 פעמים ברציפות.<br>
        בכל פעם ההסתברות לקבלת "עץ" היא חצי.<br>
        מהי ההסתברות לקבל "עץ" <strong>בכל שלוש ההטלות</strong> ברצף (המסלול: עץ-עץ-עץ)?`,
        options: [
            "1/8",
            "1/6",
            "3/2",
            "1/4"
        ],
        correctAnswer: 0,
        hint: "זהו מסלול אחד ארוך שחוצה 3 ענפים על העץ. פשוט רשמו תרגיל כפל של כל הענפים יחד (חצי כפול חצי כפול חצי).",
        solution_steps: [
            { 
                verbal_explanation: "ההסתברות לקבל עץ בהטלה הראשונה (הענף הראשון) היא חצי.", 
                math_expression: "<div dir='ltr'>1 / 2</div>" 
            },
            { 
                verbal_explanation: "נרשום תרגיל כפל שבו הענף הראשון, השני והשלישי מוכפלים זה בזה.", 
                math_expression: "<div dir='ltr'>( 1 / 2 ) &times; ( 1 / 2 ) &times; ( 1 / 2 )</div>" 
            },
            { 
                verbal_explanation: "נכפול את כל המונים יחד (1) ואת כל המכנים יחד (2 כפול 2 כפול 2).", 
                math_expression: "<div dir='ltr'>1 / 8</div>" 
            }
        ],
        final_answer: "1/8"
    },

    // שאלה 49
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>חישוב מכנה מורכב בעץ (הבסיס לנוסחת בייס):</strong><br>
        במפעל, 60% מהמכשירים מיוצרים במכונה א', ו-40% במכונה ב'.<br>
        ידוע ש-5% מהמכשירים של מכונה א' פגומים, ו-10% משל מכונה ב' פגומים.<br>
        מהי ההסתברות לבחור באקראי מכשיר <strong>פגום</strong> מכלל המפעל?`,
        options: [
            "0.07",
            "0.03",
            "0.04",
            "0.15"
        ],
        correctAnswer: 0,
        hint: "ישנם שני מסלולים שמגיעים למכשיר פגום. חשבו את מסלול א' (0.6 כפול 0.05). חשבו את מסלול ב' (0.4 כפול 0.10). חברו את התוצאות.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את המסלול של מכשירים פגומים ממכונה א' על ידי הכפלת שני הענפים שלו.", 
                math_expression: "<div dir='ltr'>0.6 &times; 0.05 = 0.03</div>" 
            },
            { 
                verbal_explanation: "נחשב את המסלול של מכשירים פגומים ממכונה ב' באותה השיטה.", 
                math_expression: "<div dir='ltr'>0.4 &times; 0.10 = 0.04</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ההסתברות הכוללת למוצר פגום (מכל כיוון שהוא), נחבר את שתי התוצאות.", 
                math_expression: "<div dir='ltr'>0.03 + 0.04</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור.", 
                math_expression: "<div dir='ltr'>0.07</div>" 
            }
        ],
        final_answer: "0.07"
    },

    // שאלה 50
    {
        topic: "bagrut_35371",
        subTopic: "עץ הסתברות",
        question_text: `<strong>השפעה משתנה על פי המסלול (ענפים תלויים):</strong><br>
        ההסתברות שיירד גשם היום היא 0.4.<br>
        אם יורד גשם היום, ההסתברות שיירד גשם מחר עולה ל-0.7.<br>
        אך אם <strong>לא</strong> יורד גשם היום, ההסתברות לגשם מחר היא רק 0.2.<br>
        מהי ההסתברות שיירד גשם <strong>מחר</strong> (לא משנה מה היה היום)?`,
        options: [
            "0.40",
            "0.28",
            "0.12",
            "0.90"
        ],
        correctAnswer: 0,
        hint: "בנו שני מסלולים לגשם מחר: 1) גשם היום וגם מחר (0.4 כפול 0.7). 2) אין גשם היום וגם מחר. מה ההסתברות שאין גשם היום? (1 פחות 0.4). כפלו אותה ב-0.2 וחברו הכל.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את המסלול הראשון לגשם מחר: גשם היום (0.4) כפול גשם מחר במקרה זה (0.7).", 
                math_expression: "<div dir='ltr'>0.4 &times; 0.7 = 0.28</div>" 
            },
            { 
                verbal_explanation: "כדי לחשב את המסלול השני, צריך את ההסתברות שלא יירד גשם היום. נחסר מ-1.", 
                math_expression: "<div dir='ltr'>1 - 0.4 = 0.6</div>" 
            },
            { 
                verbal_explanation: "נחשב את המסלול השני לגשם מחר: לא יורד גשם היום (0.6) כפול גשם מחר במקרה זה (0.2).", 
                math_expression: "<div dir='ltr'>0.6 &times; 0.2 = 0.12</div>" 
            },
            { 
                verbal_explanation: "כדי לדעת את ההסתברות הכוללת לגשם מחר נחבר את שתי התוצאות.", 
                math_expression: "<div dir='ltr'>0.28 + 0.12</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור הסופי.", 
                math_expression: "<div dir='ltr'>0.40</div>" 
            }
        ],
        final_answer: "0.40"
    },

    // ---------------------------------------------------------
    // תת נושא: תרגול חישובי הסתברות
    // ---------------------------------------------------------

    // שאלה 51
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>הסתברות בסיסית מכלי סגור:</strong><br>
        בתוך קלמר ישנם 5 טושים אדומים, 3 טושים כחולים ו-2 טושים צהובים.<br>
        מוציאים טוש אחד באקראי בעיניים עצומות.<br>
        מהי ההסתברות שיוצא טוש <strong>כחול</strong>?`,
        options: [
            "3/10",
            "5/10",
            "2/10",
            "3/8"
        ],
        correctAnswer: 0,
        hint: "חשבו קודם כמה טושים יש בקלמר בסך הכל. מספר זה יהיה המכנה. המונה יהיה מספר הטושים הכחולים בלבד.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את סך כל הטושים הקיימים בקלמר על ידי חיבור כל הכמויות יחד. נתון זה ישמש כמכנה.", 
                math_expression: "<div dir='ltr'>5 + 3 + 2 = 10</div>" 
            },
            { 
                verbal_explanation: "נזהה מתוך השאלה את כמות הטושים הכחולים. זה יהיה המונה שלנו.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "נרכיב את השבר: כמות הטושים הכחולים חלקי סך כל הטושים.", 
                math_expression: "<div dir='ltr'>3 / 10</div>" 
            }
        ],
        final_answer: "3/10"
    },

    // שאלה 52
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>הסתברות משולבת של "או" עם מספר קבוצות:</strong><br>
        באותו קלמר ישנם: 5 טושים אדומים, 3 כחולים ו-2 צהובים (סה"כ 10).<br>
        מוציאים טוש אחד באקראי.<br>
        מהי ההסתברות שייצא טוש <strong>אדום או צהוב</strong>?`,
        options: [
            "7/10",
            "5/10",
            "2/10",
            "8/10"
        ],
        correctAnswer: 0,
        hint: "המילה 'או' מסמנת פעולת חיבור. חברו את מספר הטושים האדומים עם מספר הצהובים. הציבו את הסכום הזה במונה, ובתור המכנה השתמשו בסך הכל (10).",
        solution_steps: [
            { 
                verbal_explanation: "המכנה שלנו ידוע וקבוע (עשרה טושים בסך הכל). נרשום את הכמויות של שני הצבעים המבוקשים (אדומים וצהובים).", 
                math_expression: "<div dir='ltr'>5 , 2</div>" 
            },
            { 
                verbal_explanation: "מכיוון שניתן להוציא 'או' צבע זה 'או' צבע אחר, נחבר את שתי הכמויות לקבלת סך האפשרויות הרצויות.", 
                math_expression: "<div dir='ltr'>5 + 2 = 7</div>" 
            },
            { 
                verbal_explanation: "נרכיב את שבר ההסתברות: התוצאות שחישבנו לחלק לסך הפריטים בקלמר.", 
                math_expression: "<div dir='ltr'>7 / 10</div>" 
            }
        ],
        final_answer: "7/10"
    },

    // שאלה 53
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>הסתברות של "וגם" בשני ניסויים שונים:</strong><br>
        מבצעים שני ניסויים בזה אחר זה:<br>
        קודם מטילים קובייה הוגנת, ולאחר מכן מטילים מטבע הוגן.<br>
        מהי ההסתברות לקבל בקובייה את המספר "6" <strong>וגם</strong> במטבע "עץ"?`,
        options: [
            "1/12",
            "1/6",
            "1/2",
            "2/8"
        ],
        correctAnswer: 0,
        hint: "הקובייה והמטבע הם כלים בלתי תלויים. מצאו את ההסתברות למספר 6 (1/6), ומצאו את ההסתברות לעץ (1/2). כפלו את שני השברים יחד.",
        solution_steps: [
            { 
                verbal_explanation: "ההסתברות לקבלת פאה ספציפית אחת בקובייה היא אחת מתוך שש.", 
                math_expression: "<div dir='ltr'>1 / 6</div>" 
            },
            { 
                verbal_explanation: "ההסתברות לקבלת צד ספציפי אחד במטבע היא אחת מתוך שתיים.", 
                math_expression: "<div dir='ltr'>1 / 2</div>" 
            },
            { 
                verbal_explanation: "המילה 'וגם' בין אירועים נפרדים דורשת להכפיל את שתי ההסתברויות.", 
                math_expression: "<div dir='ltr'>( 1 / 6 ) &times; ( 1 / 2 )</div>" 
            },
            { 
                verbal_explanation: "נכפול את המונים בנפרד ואת המכנים בנפרד.", 
                math_expression: "<div dir='ltr'>1 / 12</div>" 
            }
        ],
        final_answer: "1/12"
    },

    // שאלה 54
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>המאורע המשלים ממשוואה עשרונית:</strong><br>
        ההסתברות שקבוצת כדורגל מסוימת תנצח במשחק הקרוב היא 0.35.<br>
        במשחק כדורגל, אם קבוצה לא מנצחת, היא מסיימת בתיקו או מפסידה.<br>
        מהי ההסתברות שהקבוצה <strong>לא</strong> תנצח (כלומר תפסיד או תסיים בתיקו)?`,
        options: [
            "0.65",
            "0.35",
            "0.50",
            "1.35"
        ],
        correctAnswer: 0,
        hint: "סך כל ההסתברויות במשחק הוא תמיד 1 שלם. ההסתברות למאורע נגדי מחושבת על ידי חיסור ההסתברות הידועה מתוך 1.",
        solution_steps: [
            { 
                verbal_explanation: "הסך הכל הוודאי של כל האפשרויות יחד הוא תמיד אחת.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ההסתברות ההפוכה, נרשום תרגיל חיסור של המאורע הידוע מתוך השלם.", 
                math_expression: "<div dir='ltr'>1 - 0.35</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיסור כדי לקבל את הסיכוי שהקבוצה לא תנצח.", 
                math_expression: "<div dir='ltr'>0.65</div>" 
            }
        ],
        final_answer: "0.65"
    },

    // שאלה 55
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>הטלת שתי קוביות (סכום תוצאות):</strong><br>
        מטילים שתי קוביות משחק הוגנות.<br>
        מהי ההסתברות שסכום המספרים שייצאו על שתי הקוביות יהיה <strong>בדיוק 7</strong>?`,
        options: [
            "6/36 (או 1/6)",
            "7/36",
            "1/36",
            "2/12"
        ],
        correctAnswer: 0,
        hint: "הכפילו 6 ב-6 כדי למצוא את המכנה. רשמו בצד אילו זוגות של קוביות נותנים סכום של 7 (למשל 1 ו-6, 2 ו-5). ספרו אותם והציבו במונה.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את סך כל האפשרויות בהטלת שתי קוביות על ידי הכפלת האפשרויות של כל קובייה.", 
                math_expression: "<div dir='ltr'>6 &times; 6 = 36</div>" 
            },
            { 
                verbal_explanation: "נרשום במילים את הזוגות שנותנים 7: 1 ועוד 6, 2 ועוד 5, 3 ועוד 4, 4 ועוד 3, 5 ועוד 2, 6 ועוד 1. נספור אותם.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נרכיב את השבר: התוצאות שספרנו חלקי סך התוצאות.", 
                math_expression: "<div dir='ltr'>6 / 36</div>" 
            },
            { 
                verbal_explanation: "נצמצם את השבר על ידי חלוקת שני המספרים בשש.", 
                math_expression: "<div dir='ltr'>1 / 6</div>" 
            }
        ],
        final_answer: "6/36 (או 1/6)"
    },

    // שאלה 56
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>הטלת שתי קוביות (דאבל):</strong><br>
        מטילים שתי קוביות משחק הוגנות במקביל.<br>
        מהי ההסתברות לקבל "דאבל" (אותו מספר בדיוק מופיע על שתי הקוביות)?`,
        options: [
            "6/36 (או 1/6)",
            "1/36",
            "12/36",
            "2/6"
        ],
        correctAnswer: 0,
        hint: "המכנה הוא 36. אילו זוגות נחשבים כדאבל? 1 ו-1, 2 ו-2, וכו' עד 6 ו-6. ספרו אותם ובנו את השבר.",
        solution_steps: [
            { 
                verbal_explanation: "המכנה הכולל של הטלת שתי קוביות נשאר קבוע.", 
                math_expression: "<div dir='ltr'>36</div>" 
            },
            { 
                verbal_explanation: "נספור את המקרים של דאבל: אחד ואחד, שתיים ושתיים, וכן הלאה. מצאנו שיש שש אפשרויות כאלו.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נרכיב את השבר מתוך כלל האפשרויות.", 
                math_expression: "<div dir='ltr'>6 / 36</div>" 
            },
            { 
                verbal_explanation: "נצמצם את השבר לקבלת צורתו הפשוטה ביותר.", 
                math_expression: "<div dir='ltr'>1 / 6</div>" 
            }
        ],
        final_answer: "6/36 (או 1/6)"
    },

    // שאלה 57
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>שילוב תנאים בקבוצת מספרים ("וגם"):</strong><br>
        על גבי סביבון מיוחד רשומים המספרים מ-1 עד 10.<br>
        מסובבים את הסביבון פעם אחת.<br>
        מהי ההסתברות שהסביבון ייעצר על מספר שהוא <strong>גם זוגי וגם גדול מ-6</strong>?`,
        options: [
            "2/10 (או 1/5)",
            "4/10",
            "3/10",
            "1/10"
        ],
        correctAnswer: 0,
        hint: "אילו מתוך המספרים עד 10 הם גם זוגיים וגם גדולים ממש מ-6? ספרו כמה מספרים כאלו מצאתם, וזה יהיה המונה.",
        solution_steps: [
            { 
                verbal_explanation: "המכנה שלנו הוא סך המספרים על הסביבון.", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "התנאי הראשון 'גדול משש' משאיר רק ארבעה מספרים לבדיקה.", 
                math_expression: "<div dir='ltr'>7 , 8 , 9 , 10</div>" 
            },
            { 
                verbal_explanation: "מתוך הארבעה הללו, נשמור רק את המספרים שמקיימים את התנאי 'זוגי'.", 
                math_expression: "<div dir='ltr'>8 , 10</div>" 
            },
            { 
                verbal_explanation: "נספור כמה מספרים נשארו לנו ביד. אלו 2 מספרים בלבד.", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "נרכיב את השבר ונצמצם אותו על ידי חלוקה בשתיים.", 
                math_expression: "<div dir='ltr'>2 / 10 = 1 / 5</div>" 
            }
        ],
        final_answer: "2/10 (או 1/5)"
    },

    // שאלה 58
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>הוצאת פריטים ללא החזרה מתוך קלפים:</strong><br>
        בחפיסת קלפים יש 52 קלפים. מתוכם ישנם 4 קלפים מסוג "אס".<br>
        שולפים קלף אחד, שומרים אותו בצד (לא מחזירים), ואז שולפים קלף שני.<br>
        מהי ההסתברות ש<strong>שני הקלפים</strong> ששלפנו הם מסוג "אס"?`,
        options: [
            "12 / 2652",
            "16 / 2704",
            "4 / 52",
            "12 / 2704"
        ],
        correctAnswer: 0,
        hint: "בהוצאה הראשונה יש 4 מתוך 52. מכיוון שלא החזרנו את הראשון, כמה קלפים נשארו בחבילה? וכמה אסים נשארו בתוכה? כפלו את שני השברים.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את השבר של ההוצאה הראשונה: 4 אסים מתוך 52 קלפים.", 
                math_expression: "<div dir='ltr'>4 / 52</div>" 
            },
            { 
                verbal_explanation: "הקלף לא מוחזר, ולכן סך הקלפים יורד באחד.", 
                math_expression: "<div dir='ltr'>52 - 1 = 51</div>" 
            },
            { 
                verbal_explanation: "הוצאנו אס אחד החוצה, לכן גם כמות האסים יורדת באחד.", 
                math_expression: "<div dir='ltr'>4 - 1 = 3</div>" 
            },
            { 
                verbal_explanation: "נרשום את השבר של ההוצאה השנייה למציאת אס.", 
                math_expression: "<div dir='ltr'>3 / 51</div>" 
            },
            { 
                verbal_explanation: "נרכיב תרגיל כפל של שני השברים כדי למצוא את הסיכוי למסלול הרצוף.", 
                math_expression: "<div dir='ltr'>( 4 / 52 ) &times; ( 3 / 51 )</div>" 
            },
            { 
                verbal_explanation: "נכפול את המונים יחד ואת המכנים יחד.", 
                math_expression: "<div dir='ltr'>12 / 2652</div>" 
            }
        ],
        final_answer: "12 / 2652"
    },

    // שאלה 59
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>הוצאת פריטים עם החזרה מתוך קלפים:</strong><br>
        הפעם החוקים שונים: שולפים קלף אחד, <strong>מחזירים אותו לחבילה</strong>, מערבבים ושולפים קלף נוסף.<br>
        עדיין ישנם 52 קלפים ו-4 מתוכם אסים.<br>
        מהי ההסתברות ששני הקלפים ששלפנו הם מסוג "אס"?`,
        options: [
            "16 / 2704",
            "12 / 2652",
            "8 / 52",
            "16 / 52"
        ],
        correctAnswer: 0,
        hint: "החזרת הקלף מאפסת את המצב! השבר של ההוצאה הראשונה הוא 4 מתוך 52. גם בפעם השנייה השבר יישאר 4 מתוך 52. כפלו אותם.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את השבר של ההוצאה הראשונה.", 
                math_expression: "<div dir='ltr'>4 / 52</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהחזרנו את הקלף, המצב התאפס ולא השתנה. השבר של ההוצאה השנייה זהה לחלוטין.", 
                math_expression: "<div dir='ltr'>4 / 52</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שני השברים הבלתי תלויים זה בזה.", 
                math_expression: "<div dir='ltr'>( 4 / 52 ) &times; ( 4 / 52 )</div>" 
            },
            { 
                verbal_explanation: "נבצע כפל מונים וכפל מכנים.", 
                math_expression: "<div dir='ltr'>16 / 2704</div>" 
            }
        ],
        final_answer: "16 / 2704"
    },

    // שאלה 60
    {
        topic: "bagrut_35371",
        subTopic: "תרגול חישובי הסתברות",
        question_text: `<strong>שילוב מורכב בשלושה שלבים:</strong><br>
        מטילים מטבע הוגן 3 פעמים רצופות.<br>
        מהי ההסתברות לקבל <strong>בדיוק פעמיים</strong> את הצד "עץ"?<br>
        (רמז: זה יכול לקרות בסדרים שונים: עץ-עץ-פלי, או עץ-פלי-עץ, או פלי-עץ-עץ).`,
        options: [
            "3/8",
            "1/8",
            "2/3",
            "1/2"
        ],
        correctAnswer: 0,
        hint: "חשבו את התוצאה למסלול יחיד (למשל עץ, עץ, ואז פלי). מכיוון שיש שלושה מסלולים שונים שעונים להגדרה, הכפילו את התוצאה של המסלול היחיד פי 3.",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את התוצאה של מסלול ספציפי אחד, למשל 'עץ, עץ, פלי'. נכפיל חצי בשלוש הפעמים.", 
                math_expression: "<div dir='ltr'>( 1 / 2 ) &times; ( 1 / 2 ) &times; ( 1 / 2 ) = 1 / 8</div>" 
            },
            { 
                verbal_explanation: "נבדוק בכמה סדרים אפשר לקבל פעמיים עץ. מצאנו 3 אפשרויות כאלו.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "נכפול את כמות הדרכים השונות בתוצאה של מסלול בודד.", 
                math_expression: "<div dir='ltr'>3 &times; ( 1 / 8 )</div>" 
            },
            { 
                verbal_explanation: "כפל של מספר שלם בשבר מכפיל רק את המונה למעלה.", 
                math_expression: "<div dir='ltr'>3 / 8</div>" 
            }
        ],
        final_answer: "3/8"
    },
    // תת נושא 6: מדדי מרכז (ממוצע, חציון, שכיח) (שאלות 61-70)
    // ---------------------------------------------------------

    // שאלה 61
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>חישוב ממוצע של רשימת מספרים:</strong><br>
        תלמיד קיבל את הציונים הבאים ב-5 מבחנים במהלך המחצית:<br>
        70, 85, 90, 65, 100.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 60" width="100%" height="60" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <rect x="10" y="10" width="40" height="40" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
            <text x="30" y="35" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">70</text>
            <rect x="55" y="10" width="40" height="40" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
            <text x="75" y="35" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">85</text>
            <rect x="100" y="10" width="40" height="40" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
            <text x="120" y="35" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">90</text>
            <rect x="145" y="10" width="40" height="40" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
            <text x="165" y="35" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">65</text>
            <rect x="190" y="10" width="40" height="40" rx="5" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
            <text x="210" y="35" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">100</text>
        </svg>
        </div>
        מהו הציון הממוצע של התלמיד?`,
        options: [
            "82",
            "85",
            "80",
            "75"
        ],
        correctAnswer: 0,
        hint: "כדי לחשב ממוצע, חברו את כל הציונים יחד כדי למצוא את הסכום הכולל, ואז חלקו את התוצאה במספר המבחנים (5).",
        solution_steps: [
            { 
                verbal_explanation: "השלב הראשון בחישוב ממוצע הוא מציאת הסכום. נחבר את כל הציונים שקיבל התלמיד.", 
                math_expression: "<div dir='ltr'>70 + 85 + 90 + 65 + 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החיבור כדי לקבל את סך כל הנקודות.", 
                math_expression: "<div dir='ltr'>410</div>" 
            },
            { 
                verbal_explanation: "כעת, נספור כמה ציונים (מבחנים) יש בסך הכל ברשימה.", 
                math_expression: "<div dir='ltr'>5</div>" 
            },
            { 
                verbal_explanation: "נרכיב את תרגיל הממוצע: סכום הציונים לחלק למספר הציונים.", 
                math_expression: "<div dir='ltr'>410 / 5</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת הציון הממוצע הסופי.", 
                math_expression: "<div dir='ltr'>82</div>" 
            }
        ],
        final_answer: "82"
    },

    // שאלה 62
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>מציאת חציון מקבוצת מספרים אי-זוגית:</strong><br>
        הגילאים של 5 ילדים בחוג הם:<br>
        12, 5, 8, 20, 15.<br>
        מהו הגיל ה<strong>חציון</strong> בקבוצה זו?`,
        options: [
            "12",
            "8",
            "15",
            "20"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא חציון, חובה קודם כל לסדר את המספרים מהקטן לגדול! לאחר מכן, מכיוון שיש 5 מספרים, מצאו את המספר שנמצא בדיוק באמצע.",
        solution_steps: [
            { 
                verbal_explanation: "כלל ברזל בחציון: אסור לחפש את האמצע לפני שמסדרים את המספרים לפי הגודל (מהקטן לגדול). נסדר אותם כעת.", 
                math_expression: "<div dir='ltr'>5 , 8 , 12 , 15 , 20</div>" 
            },
            { 
                verbal_explanation: "נספור כמה מספרים יש לנו בסך הכל ברשימה. מצאנו שיש חמישה מספרים.", 
                math_expression: "<div dir='ltr'>5</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את המיקום של האמצע המדויק, נוסיף 1 לכמות ונחלק ב-2.", 
                math_expression: "<div dir='ltr'>( 5 + 1 ) / 2</div>" 
            },
            { 
                verbal_explanation: "התוצאה אומרת לנו שהמספר החציון נמצא במיקום השלישי ברשימה המסודרת.", 
                math_expression: "<div dir='ltr'>6 / 2 = 3</div>" 
            },
            { 
                verbal_explanation: "נחזור לרשימה המסודרת ונספור משמאל לימין עד למספר השלישי. זהו החציון שלנו.", 
                math_expression: "<div dir='ltr'>12</div>" 
            }
        ],
        final_answer: "12"
    },

    // שאלה 63
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>מציאת חציון מקבוצת מספרים זוגית:</strong><br>
        המשקלים (בק"ג) של 6 מזוודות שנשקלו בשדה התעופה הם:<br>
        20, 10, 30, 60, 50, 40.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 80" width="100%" height="80" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <text x="100" y="45" font-family="Arial" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">20, 10, 30, 60, 50, 40</text>
        </svg>
        </div>
        מהו המשקל ה<strong>חציון</strong>?`,
        options: [
            "35",
            "30",
            "40",
            "30.5"
        ],
        correctAnswer: 0,
        hint: "סדרו מהקטן לגדול (10, 20, 30, 40, 50, 60). מכיוון שיש 6 מספרים, אין אמצע יחיד. קחו את שני המספרים שבאמצע (30 ו-40) ועשו להם ממוצע.",
        solution_steps: [
            { 
                verbal_explanation: "ראשית חובה לסדר את כל המשקלים בסדר עולה, מהקל אל הכבד.", 
                math_expression: "<div dir='ltr'>10 , 20 , 30 , 40 , 50 , 60</div>" 
            },
            { 
                verbal_explanation: "נספור את כמות המזוודות שיש לנו. הכמות היא זוגית.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "מכיוון שיש 6 מספרים, האמצע נופל בדיוק בין המיקום השלישי למיקום הרביעי. נשלוף את שני המספרים האלו.", 
                math_expression: "<div dir='ltr'>30 , 40</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את החציון, נחשב את הממוצע של שני המספרים האלו (נחבר אותם ונחלק בשתיים).", 
                math_expression: "<div dir='ltr'>( 30 + 40 ) / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור במונה.", 
                math_expression: "<div dir='ltr'>70 / 2</div>" 
            },
            { 
                verbal_explanation: "נחלק בשתיים לקבלת החציון המדויק, שיושב ממש באמצע ביניהם.", 
                math_expression: "<div dir='ltr'>35</div>" 
            }
        ],
        final_answer: "35"
    },

    // שאלה 64
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>מציאת השכיח מתוך רשימה:</strong><br>
        ביום ראשון נמכרו בחנות נעליים במידות הבאות:<br>
        38, 39, 41, 38, 42, 38, 39, 40.<br>
        מהי המידה ה<strong>שכיחה</strong> ביותר שנמכרה?`,
        options: [
            "38",
            "39",
            "41",
            "42"
        ],
        correctAnswer: 0,
        hint: "השכיח הוא פשוט המספר שמופיע הכי הרבה פעמים ברשימה. ספרו כמה פעמים מופיעה כל מידה.",
        solution_steps: [
            { 
                verbal_explanation: "המדד 'שכיח' מתאר את הערך שמופיע בתדירות הגבוהה ביותר. נעבור על המספרים ונספור אותם. המידה 39 מופיעה פעמיים.", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "המידות 40, 41 ו-42 מופיעות פעם אחת בלבד כל אחת.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נבדוק את המידה 38. מידה זו מופיעה ברשימה שלוש פעמים.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהמספר 38 חזר על עצמו הכי הרבה פעמים (3 פעמים), הוא השכיח של הקבוצה.", 
                math_expression: "<div dir='ltr'>38</div>" 
            }
        ],
        final_answer: "38"
    },

    // שאלה 65
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>ממוצע מתוך טבלת שכיחויות:</strong><br>
        בטבלה שלפניכם מוצגת התפלגות הציונים בכיתה:<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 100" width="100%" height="100" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="0" y1="40" x2="250" y2="40" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="60" y1="0" x2="60" y2="100" stroke="#cbd5e1" stroke-width="2"/>
            <text x="30" y="25" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">ציון</text>
            <text x="30" y="70" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">תלמידים</text>
            
            <text x="90" y="25" font-family="Arial" font-size="12" text-anchor="middle">60</text>
            <text x="90" y="70" font-family="Arial" font-size="12" text-anchor="middle">2</text>
            
            <text x="140" y="25" font-family="Arial" font-size="12" text-anchor="middle">70</text>
            <text x="140" y="70" font-family="Arial" font-size="12" text-anchor="middle">3</text>
            
            <text x="190" y="25" font-family="Arial" font-size="12" text-anchor="middle">80</text>
            <text x="190" y="70" font-family="Arial" font-size="12" text-anchor="middle">5</text>
        </svg>
        </div>
        מהו הציון הממוצע של הכיתה?`,
        options: [
            "73",
            "70",
            "75",
            "210"
        ],
        correctAnswer: 0,
        hint: "בטבלה, אי אפשר סתם לחבר את הציונים (60+70+80). יש 2 תלמידים שקיבלו 60 (זה 120), 3 שקיבלו 70, ו-5 שקיבלו 80. הכפילו כל ציון במספר התלמידים, חברו הכל, וחלקו בסך כל התלמידים בכיתה.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את סכום הנקודות הכולל של כל הכיתה, נכפיל כל ציון בכמות התלמידים שקיבלו אותו. נתחיל מהציון הראשון.", 
                math_expression: "<div dir='ltr'>60 &times; 2 = 120</div>" 
            },
            { 
                verbal_explanation: "נכפיל את הציון השני בכמות התלמידים שלו.", 
                math_expression: "<div dir='ltr'>70 &times; 3 = 210</div>" 
            },
            { 
                verbal_explanation: "נכפיל את הציון השלישי בכמות התלמידים שלו.", 
                math_expression: "<div dir='ltr'>80 &times; 5 = 400</div>" 
            },
            { 
                verbal_explanation: "נחבר את כל התוצאות יחד לקבלת סך כל הנקודות שחולקו בכיתה.", 
                math_expression: "<div dir='ltr'>120 + 210 + 400 = 730</div>" 
            },
            { 
                verbal_explanation: "כעת נמצא כמה תלמידים יש בכיתה בסך הכל על ידי חיבור השורה התחתונה בטבלה.", 
                math_expression: "<div dir='ltr'>2 + 3 + 5 = 10</div>" 
            },
            { 
                verbal_explanation: "נחשב את הממוצע על ידי חלוקת סך הנקודות בסך התלמידים.", 
                math_expression: "<div dir='ltr'>730 / 10</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת הממוצע הסופי.", 
                math_expression: "<div dir='ltr'>73</div>" 
            }
        ],
        final_answer: "73"
    },

    // שאלה 66
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>מציאת השכיח מתוך טבלת שכיחויות:</strong><br>
        במפעל בדקו כמה תקלות היו בכל יום במהלך חודש. התוצאות בטבלה:<br>
        מספר תקלות ביום (הערך): 0, 1, 2, 3.<br>
        מספר ימים (השכיחות): 10, 15, 4, 1.<br>
        מהו מספר התקלות ה<strong>שכיח</strong> ביותר?`,
        options: [
            "1 תקלות",
            "15 תקלות",
            "3 תקלות",
            "0 תקלות"
        ],
        correctAnswer: 0,
        hint: "השכיח אינו המספר הגדול ביותר! השכיח הוא זה ש'קרה' הכי הרבה פעמים. חפשו את המספר הגדול ביותר בשורת התדירות/ימים (שזה 15). מהו מספר התקלות ששייך אליו?",
        solution_steps: [
            { 
                verbal_explanation: "בטבלה סטטיסטית, השורה העליונה מייצגת את הערך הנמדד (מספר התקלות), והשורה התחתונה מייצגת את הכמות (כמה פעמים זה קרה).", 
                math_expression: "<div dir='ltr'>10 , 15 , 4 , 1</div>" 
            },
            { 
                verbal_explanation: "נחפש את המספר הגדול ביותר בשורת הכמות (השכיחות), כדי לראות איזה מצב התרחש הכי הרבה ימים.", 
                math_expression: "<div dir='ltr'>15</div>" 
            },
            { 
                verbal_explanation: "מכיוון ש-15 הוא הכמות הגדולה ביותר, נסתכל איזה ערך רשום מעליו בטבלה. הערך הרשום הוא 1 (תקלה אחת).", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "לכן, המצב השכיח ביותר הוא שתהיה תקלה אחת ביום.", 
                math_expression: "<div dir='ltr'>1</div>" 
            }
        ],
        final_answer: "1 תקלות"
    },

    // שאלה 67
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>מציאת חציון מתוך טבלת שכיחויות:</strong><br>
        בכיתה יש 11 תלמידים. מספר האחים שיש לכל תלמיד מסוכם כך:<br>
        מספר אחים: 1 | מספר תלמידים: 2<br>
        מספר אחים: 2 | מספר תלמידים: 4<br>
        מספר אחים: 3 | מספר תלמידים: 5<br>
        מהו מספר האחים ה<strong>חציון</strong>?`,
        options: [
            "3",
            "2",
            "2.5",
            "1"
        ],
        correctAnswer: 0,
        hint: "ישנם 11 תלמידים. התלמיד האמצעי הוא התלמיד ה-6 (11 ועוד 1, חלקי 2). ספרו את התלמידים לפי הסדר: 2 התלמידים הראשונים הם עם אח 1. ה-4 הבאים (עד תלמיד מספר 6) הם עם 2 אחים. לכן התלמיד ה-6 נופל בקבוצה של 2 אחים.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא את כמות התלמידים הכוללת בטבלה על ידי חיבור השכיחויות. ישנם 11 תלמידים בסך הכל.", 
                math_expression: "<div dir='ltr'>11</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא איזה תלמיד נמצא בדיוק באמצע, נוסיף 1 ונחלק ב-2.", 
                math_expression: "<div dir='ltr'>( 11 + 1 ) / 2</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא 6, כלומר אנו מחפשים את 'התלמיד השישי' ברשימה המסודרת.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "נתחיל לספור תלמידים. הקבוצה הראשונה כוללת 2 תלמידים בלבד (יש להם אח אחד). זה לא מספיק כדי להגיע ל-6.", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "נוסיף את הקבוצה הבאה (שיש להם 2 אחים), שכוללת 4 תלמידים. ביחד הגענו בדיוק ל-6 תלמידים מתחילת הרשימה.", 
                math_expression: "<div dir='ltr'>2 + 4 = 6</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהתלמיד השישי נופל בדיוק בתוך הקבוצה השנייה, הערך של אותה קבוצה (2 אחים) הוא החציון.", 
                math_expression: "<div dir='ltr'>2</div>" 
            }
        ],
        final_answer: "2"
    },

    // שאלה 68
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>חישוב ממוצע חדש לאחר הוספת פריט:</strong><br>
        המשקל הממוצע של 4 ארגזים הוא 20 ק"ג.<br>
        למשלוח התווסף ארגז חמישי ששוקל 30 ק"ג.<br>
        מה יהיה המשקל הממוצע החדש של כל 5 הארגזים יחד?`,
        options: [
            "22 ק\"ג",
            "25 ק\"ג",
            "20 ק\"ג",
            "24 ק\"ג"
        ],
        correctAnswer: 0,
        hint: "שלב א': מצאו את המשקל הכולל הישן (4 ארגזים כפול ממוצע 20 שווה ל-80 ק\"ג סך הכל). שלב ב': הוסיפו את הארגז החדש למשקל הכולל (80 ועוד 30). שלב ג': חלקו את הסכום החדש במספר הארגזים החדש (5).",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא ממוצע חדש, חייבים קודם למצוא את הסכום הכולל הישן. נכפיל את הממוצע הישן בכמות הארגזים שהייתה.", 
                math_expression: "<div dir='ltr'>20 &times; 4 = 80</div>" 
            },
            { 
                verbal_explanation: "הסכום הישן הוא 80 קילוגרם. כעת נוסיף לו את המשקל של הארגז החמישי החדש שהגיע.", 
                math_expression: "<div dir='ltr'>80 + 30 = 110</div>" 
            },
            { 
                verbal_explanation: "הסכום החדש הוא 110 קילוגרם. מספר הארגזים החדש הוא חמישה.", 
                math_expression: "<div dir='ltr'>5</div>" 
            },
            { 
                verbal_explanation: "נחשב את הממוצע החדש על ידי חלוקת הסכום החדש בכמות הארגזים החדשה.", 
                math_expression: "<div dir='ltr'>110 / 5</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק ונקבל את הממוצע המעודכן.", 
                math_expression: "<div dir='ltr'>22</div>" 
            }
        ],
        final_answer: "22 ק\"ג"
    },

    // שאלה 69
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>מציאת נתון חסר בעזרת ממוצע ידוע:</strong><br>
        הציון הממוצע של דני ב-3 מבחנים הוא 80.<br>
        במבחן הראשון הוא קיבל 75, ובמבחן השני הוא קיבל 85.<br>
        מה היה הציון שלו במבחן השלישי?`,
        options: [
            "80",
            "85",
            "75",
            "90"
        ],
        correctAnswer: 0,
        hint: "אם הממוצע של 3 מבחנים הוא 80, סך כל הנקודות שלו חייב להיות 240 (3 כפול 80). חברו את שני הציונים הידועים, וראו כמה נקודות חסרות כדי להגיע ל-240.",
        solution_steps: [
            { 
                verbal_explanation: "אם אנו יודעים את הממוצע ואת הכמות, נוכל למצוא את הסכום הכולל. נכפיל את הממוצע בכמות המבחנים.", 
                math_expression: "<div dir='ltr'>80 &times; 3 = 240</div>" 
            },
            { 
                verbal_explanation: "240 זהו סך הנקודות שדני צבר בשלושת המבחנים יחד. כעת נחבר את שני הציונים שאנו כבר יודעים.", 
                math_expression: "<div dir='ltr'>75 + 85 = 160</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את הציון של המבחן השלישי (החסר), נחסר את הנקודות שיש לנו מהסך הכל.", 
                math_expression: "<div dir='ltr'>240 - 160</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ונגלה את הציון הנדרש למבחן השלישי.", 
                math_expression: "<div dir='ltr'>80</div>" 
            }
        ],
        final_answer: "80"
    },

    // שאלה 70
    {
        topic: "bagrut_35371",
        subTopic: "מדדי מרכז (ממוצע, חציון, שכיח)",
        question_text: `<strong>השפעת נתון חריג (קיצוני) על המדדים:</strong><br>
        במשרד קטן עובדים 4 פקידים שמרוויחים 6,000 שקלים כל אחד.<br>
        למשרד הצטרף מנכ"ל שמרוויח 46,000 שקלים בחודש.<br>
        איזה מדד ישתנה בצורה דרסטית יותר כתוצאה מהצטרפות המנכל?`,
        options: [
            "הממוצע ישתנה הרבה יותר מהחציון",
            "החציון ישתנה הרבה יותר מהממוצע",
            "שניהם ישתנו באותה מידה בדיוק",
            "אף אחד מהם לא ישתנה"
        ],
        correctAnswer: 0,
        hint: "ממוצע מאוד רגיש לערכים קיצוניים, כי הוא מחשב את הסכום הכולל. החציון, לעומת זאת, כמעט ולא זז מכיוון שהוא מתייחס רק למיקום האמצעי ברשימה המסודרת.",
        solution_steps: [
            { 
                verbal_explanation: "נבחן את המצב ההתחלתי. ישנם ארבעה עובדים זהים. הממוצע שלהם הוא ברור.", 
                math_expression: "<div dir='ltr'>6000</div>" 
            },
            { 
                verbal_explanation: "החציון ההתחלתי, שהוא האמצע, הוא גם אותו מספר בדיוק.", 
                math_expression: "<div dir='ltr'>6000</div>" 
            },
            { 
                verbal_explanation: "לאחר הוספת המנכל, רשימת השכר מסודרת כך: 6000, 6000, 6000, 6000, 46000. החציון החדש (המספר השלישי) נשאר ללא שינוי.", 
                math_expression: "<div dir='ltr'>6000</div>" 
            },
            { 
                verbal_explanation: "לעומת זאת, נחשב את הממוצע החדש. נחבר את כולם ונחלק בחמש.", 
                math_expression: "<div dir='ltr'>( 24000 + 46000 ) / 5</div>" 
            },
            { 
                verbal_explanation: "הסכום הוא שבעים אלף. נחלק בחמש.", 
                math_expression: "<div dir='ltr'>70000 / 5 = 14000</div>" 
            },
            { 
                verbal_explanation: "אנו רואים שהממוצע זינק ל-14,000 שקלים, בעוד שהחציון לא זז. המסקנה היא שממוצע רגיש בהרבה לערכים חריגים מאשר חציון.", 
                math_expression: "<div dir='ltr'>14000 > 6000</div>" 
            }
        ],
        final_answer: "הממוצע ישתנה הרבה יותר מהחציון"
    },

    // ---------------------------------------------------------
    // תת נושא 7: מדדי פיזור (טווח, שונות, סטיית תקן) (שאלות 71-80)
    // ---------------------------------------------------------

    // שאלה 71
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>חישוב טווח הנתונים:</strong><br>
        הגילאים של המשתתפים בקורס ציור הם:<br>
        15, 22, 18, 30, 14, 25.<br>
        מהו ה<strong>טווח</strong> של הגילאים בקורס?`,
        options: [
            "16",
            "15",
            "14",
            "30"
        ],
        correctAnswer: 0,
        hint: "הטווח (Range) הוא מדד הפיזור הפשוט ביותר. הוא מחושב על ידי חיסור המספר הקטן ביותר ברשימה מתוך המספר הגדול ביותר ברשימה.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את הטווח, עלינו לאתר קודם כל את הערך הגבוה ביותר (המקסימלי) ברשימת הנתונים.", 
                math_expression: "<div dir='ltr'>30</div>" 
            },
            { 
                verbal_explanation: "לאחר מכן, נאתר את הערך הנמוך ביותר (המינימלי) ברשימת הנתונים.", 
                math_expression: "<div dir='ltr'>14</div>" 
            },
            { 
                verbal_explanation: "נרכיב תרגיל חיסור: הערך הגדול פחות הערך הקטן.", 
                math_expression: "<div dir='ltr'>30 - 14</div>" 
            },
            { 
                verbal_explanation: "התוצאה שנקבל היא הטווח, המעיד על המרחק בין הקצוות של הקבוצה.", 
                math_expression: "<div dir='ltr'>16</div>" 
            }
        ],
        final_answer: "16"
    },

    // שאלה 72
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>הבנת הקשר בין שונות לסטיית תקן:</strong><br>
        תלמיד חישב את מדדי הפיזור של הציונים בכיתתו.<br>
        הוא מצא כי ה<strong>שונות</strong> של הציונים היא 25.<br>
        מהי <strong>סטיית התקן</strong> של ציוני הכיתה?`,
        options: [
            "5",
            "625",
            "12.5",
            "25"
        ],
        correctAnswer: 0,
        hint: "הקשר בין שונות לסטיית תקן הוא ישיר ופשוט: סטיית התקן היא תמיד השורש הריבועי של השונות.",
        solution_steps: [
            { 
                verbal_explanation: "הנתון שיש בידינו הוא ערכה של השונות.", 
                math_expression: "<div dir='ltr'>25</div>" 
            },
            { 
                verbal_explanation: "כלל ברזל בסטטיסטיקה קובע כי כדי לעבור משונות לסטיית תקן, עלינו להפעיל פעולת שורש ריבועי על השונות.", 
                math_expression: "<div dir='ltr'>&radic;25</div>" 
            },
            { 
                verbal_explanation: "נחשב את השורש לקבלת סטיית התקן. זהו המדד המקובל יותר לפיזור.", 
                math_expression: "<div dir='ltr'>5</div>" 
            }
        ],
        final_answer: "5"
    },

    // שאלה 73
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>הבנת הקשר ההפוך (מסטיית תקן לשונות):</strong><br>
        במפעל נבדק אורך הברגים המיוצרים.<br>
        נמצא כי <strong>סטיית התקן</strong> של אורכי הברגים היא 4 מ"מ.<br>
        מהי ה<strong>שונות</strong> של אורכי הברגים?`,
        options: [
            "16",
            "2",
            "8",
            "4"
        ],
        correctAnswer: 0,
        hint: "זהו הכיוון ההפוך. אם שורש השונות נותן את סטיית התקן, אז העלאה בריבוע של סטיית התקן (הכפלתה בעצמה) תיתן לנו בחזרה את השונות.",
        solution_steps: [
            { 
                verbal_explanation: "הנתון שיש לנו הוא סטיית התקן.", 
                math_expression: "<div dir='ltr'>4</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את השונות, עלינו לעשות את הפעולה ההפוכה לשורש, כלומר להעלות את סטיית התקן בריבוע (בחזקת שתיים).", 
                math_expression: "<div dir='ltr'>4<sup>2</sup></div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה (ארבע כפול ארבע) כדי לקבל את ערכה של השונות.", 
                math_expression: "<div dir='ltr'>16</div>" 
            }
        ],
        final_answer: "16"
    },

    // שאלה 74
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>הוספת קבוע לכל הנתונים (השפעה על סטיית תקן):</strong><br>
        במבחן קשה, הממוצע היה 70 וסטיית התקן הייתה 5.<br>
        המורה החליטה לתת <strong>פקטור של 10 נקודות</strong> לכל תלמיד בכיתה (כלומר כולם קיבלו תוספת של 10 נקודות לציון).<br>
        מה תהיה סטיית התקן החדשה של הציונים לאחר הפקטור?`,
        options: [
            "5 (לא תשתנה)",
            "15 (תגדל ב-10)",
            "50 (תוכפל ב-10)",
            "10 (תהפוך לגודל הפקטור)"
        ],
        correctAnswer: 0,
        hint: "סטיית תקן מודדת את 'המרחק' והפיזור של הציונים אחד מהשני. אם כולם קיבלו בדיוק את אותה תוספת, האם המרחקים ביניהם השתנו? לא. ולכן הפיזור נשאר זהה לחלוטין.",
        solution_steps: [
            { 
                verbal_explanation: "סטיית תקן מודדת כמה הנתונים מפוזרים ורחוקים זה מזה. הסטייה המקורית הייתה חמש.", 
                math_expression: "<div dir='ltr'>5</div>" 
            },
            { 
                verbal_explanation: "אם מוסיפים לכל מספר בקבוצה תוספת זהה (במקרה זה, 10 נקודות), כל הקבוצה 'זזה' יחד למעלה.", 
                math_expression: "<div dir='ltr'>+ 10</div>" 
            },
            { 
                verbal_explanation: "מכיוון שכולם זזו יחד, המרחקים בין התלמידים לא השתנו בכלל. הפיזור נותר זהה.", 
                math_expression: "<div dir='ltr'>0</div>" 
            },
            { 
                verbal_explanation: "המסקנה המתמטית היא שהוספה או חיסור של מספר קבוע אינם משנים את סטיית התקן. היא נשארת חמש כפי שהייתה.", 
                math_expression: "<div dir='ltr'>5</div>" 
            }
        ],
        final_answer: "5 (לא תשתנה)"
    },

    // שאלה 75
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>הכפלת כל הנתונים בקבוע (השפעה על סטיית תקן):</strong><br>
        במפעל, סטיית התקן של משכורות העובדים היא 200 שקלים.<br>
        ההנהלה החליטה <strong>להעלות את שכר כל העובדים ב-10%</strong> (כלומר להכפיל כל משכורת ב-1.10).<br>
        מה תהיה סטיית התקן החדשה של המשכורות לאחר ההעלאה?`,
        options: [
            "220 שקלים",
            "200 שקלים (לא תשתנה)",
            "200.1 שקלים",
            "10 שקלים"
        ],
        correctAnswer: 0,
        hint: "בניגוד להוספת מספר קבוע, פעולת כפל 'מותחת' את כל הנתונים, ולכן מגדילה גם את המרחקים ביניהם. הכפילו את סטיית התקן המקורית (200) באותו מקדם שבו הוכפלו המשכורות (1.10).",
        solution_steps: [
            { 
                verbal_explanation: "סטיית התקן הישנה של המשכורות נתונה לנו. היא מאתיים.", 
                math_expression: "<div dir='ltr'>200</div>" 
            },
            { 
                verbal_explanation: "כל הנתונים הוכפלו באותו מקדם (עקב עלייה של עשרה אחוזים). המקדם הזה הוא אחת נקודה אחת אפס.", 
                math_expression: "<div dir='ltr'>1.10</div>" 
            },
            { 
                verbal_explanation: "כאשר כופלים את כל הנתונים, המרחקים ביניהם גדלים באותו היחס. לכן, כדי למצוא את סטיית התקן החדשה, פשוט נכפיל את הישנה באותו מקדם.", 
                math_expression: "<div dir='ltr'>200 &times; 1.10</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונראה שגם סטיית התקן גדלה בעשרה אחוזים.", 
                math_expression: "<div dir='ltr'>220</div>" 
            }
        ],
        final_answer: "220 שקלים"
    },

    // שאלה 76
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>המשמעות של סטיית תקן אפס:</strong><br>
        המורה חישבה את סטיית התקן של הציונים בבוחן הפתע שערכה, וגילתה ש<strong>סטיית התקן שווה בדיוק ל-0</strong>.<br>
        מה ניתן להסיק בוודאות מנתון זה על ציוני התלמידים בבוחן?`,
        options: [
            "כל התלמידים קיבלו בדיוק את אותו הציון",
            "כל התלמידים קיבלו ציון אפס בבוחן",
            "הממוצע של הכיתה הוא אפס",
            "יש טעות בחישוב, סטיית תקן לא יכולה להיות אפס"
        ],
        correctAnswer: 0,
        hint: "סטיית תקן מודדת את הפיזור (ההבדלים) בין הנתונים לממוצע. אם אין שום פיזור בכלל (הסטייה היא אפס), זה אומר שאין שום הבדלים בין המספרים.",
        solution_steps: [
            { 
                verbal_explanation: "מהותה של סטיית התקן היא למדוד פיזור. היא מספרת לנו כמה המספרים רחוקים זה מזה ומהממוצע. הערך שקיבלנו הוא אפס.", 
                math_expression: "<div dir='ltr'>0</div>" 
            },
            { 
                verbal_explanation: "המשמעות של אפס היא שאין שום 'מרחק' בין המספרים בקבוצה.", 
                math_expression: "<div dir='ltr'>Distance = 0</div>" 
            },
            { 
                verbal_explanation: "אם המרחק בין כל הציונים הוא אפס, הפתרון היחיד האפשרי מתמטית הוא שכל הציונים זהים לחלוטין אחד לשני (למשל, כולם קיבלו 80).", 
                math_expression: "<div dir='ltr'>Equal</div>" 
            }
        ],
        final_answer: "כל התלמידים קיבלו בדיוק את אותו הציון"
    },

    // שאלה 77
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>השוואה חזותית/מושגית של סטיית תקן:</strong><br>
        לפניכם שתי קבוצות של מספרים (בשתי הקבוצות הממוצע הוא 75):<br>
        קבוצה א': 70, 75, 80.<br>
        קבוצה ב': 50, 75, 100.<br>
        לאיזו קבוצה יש <strong>סטיית תקן גדולה יותר</strong>?`,
        options: [
            "קבוצה ב'",
            "קבוצה א'",
            "לשתיהן יש אותה סטיית תקן כי הממוצע שווה",
            "לא ניתן לדעת ללא מחשבון ונוסחה"
        ],
        correctAnswer: 0,
        hint: "סטיית התקן גדלה ככל שהמספרים רחוקים יותר מהממוצע שלהם (מפוזרים יותר). הסתכלו על הקצוות של כל קבוצה וראו היכן המרחק גדול יותר מ-75.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק את הפיזור בקבוצה א'. המרחק של המספר הקטן ביותר (70) מהממוצע (75) הוא רק 5 יחידות.", 
                math_expression: "<div dir='ltr'>75 - 70 = 5</div>" 
            },
            { 
                verbal_explanation: "נבדוק את הפיזור בקבוצה ב'. המרחק של המספר הקטן ביותר (50) מהממוצע הוא משמעותית גדול יותר: 25 יחידות.", 
                math_expression: "<div dir='ltr'>75 - 50 = 25</div>" 
            },
            { 
                verbal_explanation: "סטיית תקן מודדת בדיוק את זה - את המרחקים הממוצעים ממרכז הקבוצה. מאחר ובקבוצה ב' המרחקים גדולים בהרבה, הפיזור גדול יותר.", 
                math_expression: "<div dir='ltr'>25 > 5</div>" 
            },
            { 
                verbal_explanation: "לכן, לקבוצה ב' תהיה בוודאות סטיית תקן גדולה יותר.", 
                math_expression: "<div dir='ltr'>B > A</div>" 
            }
        ],
        final_answer: "קבוצה ב'"
    },

    // שאלה 78
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>מציאת טווח מתוך טבלת שכיחויות:</strong><br>
        הטבלה מתארת את מספר המכוניות שיש למשפחות בבניין:<br>
        מספר מכוניות: 1 | מספר משפחות: 5<br>
        מספר מכוניות: 2 | מספר משפחות: 8<br>
        מספר מכוניות: 3 | מספר משפחות: 2<br>
        מהו <strong>טווח</strong> מספר המכוניות בבניין?`,
        options: [
            "2",
            "3",
            "6",
            "8"
        ],
        correctAnswer: 0,
        hint: "טווח מודד את הערכים עצמם, ולא את הכמות שלהם. התעלמו משורת 'מספר המשפחות' (השכיחות). הסתכלו רק על 'מספר המכוניות' (הערך). חסרו את הערך הקטן ביותר מהערך הגדול ביותר.",
        solution_steps: [
            { 
                verbal_explanation: "הטעות הנפוצה ביותר בטבלאות היא להתבלבל בין שורת הערך (מספר מכוניות) לבין שורת הכמות (משפחות). טווח תמיד מתייחס לערך הנמדד.", 
                math_expression: "<div dir='ltr'>1 , 2 , 3</div>" 
            },
            { 
                verbal_explanation: "נמצא את הערך המקסימלי בשורת המכוניות. למשפחה בעלת הכי הרבה מכוניות יש 3 מכוניות.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "נמצא את הערך המינימלי. למשפחה עם הכי מעט מכוניות בטבלה זו יש מכונית אחת.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נחשב את הטווח על ידי חיסור המינימום מהמקסימום.", 
                math_expression: "<div dir='ltr'>3 - 1 = 2</div>" 
            }
        ],
        final_answer: "2"
    },

    // שאלה 79
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>חישוב ידני בסיסי של סטיית תקן (שלב אחר שלב):</strong><br>
        נתונים שני מספרים בלבד: 10 ו-20.<br>
        חשבו את סטיית התקן של קבוצה קטנה זו.<br>
        (רמז: הממוצע הוא 15. המרחק של כל מספר מהממוצע הוא 5).`,
        options: [
            "5",
            "25",
            "10",
            "2.5"
        ],
        correctAnswer: 0,
        hint: "שלבים: 1. מצאו את המרחק של כל נתון מהממוצע (זה 5 ו-מינוס 5). 2. העלו כל מרחק בריבוע (5 בריבוע זה 25). 3. חשבו ממוצע של הריבועים הללו (זו השונות). 4. הוציאו שורש ריבועי מהתוצאה.",
        solution_steps: [
            { 
                verbal_explanation: "הממוצע של המספרים 10 ו-20 הוא 15. כעת נבדוק את המרחק (הסטייה) של המספר הראשון מהממוצע, ונעלה את המרחק הזה בריבוע.", 
                math_expression: "<div dir='ltr'>( 10 - 15 )<sup>2</sup> = (-5)<sup>2</sup> = 25</div>" 
            },
            { 
                verbal_explanation: "נבצע את אותו תהליך בדיוק עבור המספר השני: נחשב את המרחק מהממוצע ונעלה בריבוע.", 
                math_expression: "<div dir='ltr'>( 20 - 15 )<sup>2</sup> = (5)<sup>2</sup> = 25</div>" 
            },
            { 
                verbal_explanation: "הגענו לשלב מציאת ה'שונות'. זהו למעשה חישוב ממוצע של הריבועים שזה עתה מצאנו. נחבר אותם ונחלק בשתיים (כי יש שני נתונים).", 
                math_expression: "<div dir='ltr'>( 25 + 25 ) / 2</div>" 
            },
            { 
                verbal_explanation: "חישוב השונות נותן לנו עשרים וחמש.", 
                math_expression: "<div dir='ltr'>50 / 2 = 25</div>" 
            },
            { 
                verbal_explanation: "כדי לסיים ולהגיע לסטיית התקן, נוציא שורש ריבועי מהשונות שחישבנו.", 
                math_expression: "<div dir='ltr'>&radic;25 = 5</div>" 
            }
        ],
        final_answer: "5"
    },

    // שאלה 80
    {
        topic: "bagrut_35371",
        subTopic: "מדדי פיזור (טווח, שונות, סטיית תקן)",
        question_text: `<strong>השפעת הוספת נתון השווה בדיוק לממוצע:</strong><br>
        בקבוצת מספרים מסוימת הממוצע הוא 80 וסטיית התקן היא 10.<br>
        מוסיפים לקבוצה נתון חדש שהוא בדיוק 80 (שווה בדיוק לממוצע).<br>
        מה יקרה לסטיית התקן של הקבוצה?`,
        options: [
            "סטיית התקן תקטן",
            "סטיית התקן תגדל",
            "סטיית התקן לא תשתנה כלל",
            "סטיית התקן תהפוך לאפס"
        ],
        correctAnswer: 0,
        hint: "סטיית התקן מודדת את המרחק הממוצע של המספרים ממרכז הקבוצה. הוספנו כעת מספר שהמרחק שלו מהמרכז הוא אפס (כי הוא המרכז בעצמו). זה מושך את הפיזור הממוצע כלפי מטה.",
        solution_steps: [
            { 
                verbal_explanation: "הממוצע של הקבוצה הוא שמונים.", 
                math_expression: "<div dir='ltr'>80</div>" 
            },
            { 
                verbal_explanation: "הוספנו נתון חדש לקבוצה, וגם הוא שמונים.", 
                math_expression: "<div dir='ltr'>80</div>" 
            },
            { 
                verbal_explanation: "המרחק של הנתון החדש מהממוצע הוא בדיוק אפס, כלומר אין לו שום סטייה.", 
                math_expression: "<div dir='ltr'>80 - 80 = 0</div>" 
            },
            { 
                verbal_explanation: "סטיית תקן היא סוג של ממוצע של כל הסטיות. אם אנחנו מכניסים לממוצע הזה נתון של אפס (סטייה קטנה מאוד), זה בהכרח מוריד את הממוצע הכללי של הסטיות כלפי מטה.", 
                math_expression: "<div dir='ltr'>0 < 10</div>" 
            },
            { 
                verbal_explanation: "לכן, הוספת נתון במרכז הקבוצה גורמת לפיזור הכללי להיות קטן יותר ממה שהיה.", 
                math_expression: "<div dir='ltr'>Smaller</div>" 
            }
        ],
        final_answer: "סטיית התקן תקטן"
    },
    // תת נושא 8: תיאור נתונים בטבלאות וגרפים (שאלות 81-90)
    // ---------------------------------------------------------

    // שאלה 81
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>קריאת שכיחות מדיאגרמת עמודות:</strong><br>
        בדיאגרמה הבאה מוצגת התפלגות מספר המכוניות ב-20 משפחות:<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 150" width="100%" height="150" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="40" y1="120" x2="220" y2="120" stroke="#000" stroke-width="2"/>
            <line x1="40" y1="120" x2="40" y2="20" stroke="#000" stroke-width="2"/>
            <rect x="60" y="60" width="30" height="60" fill="#3b82f6"/> <rect x="110" y="40" width="30" height="80" fill="#3b82f6"/> <rect x="160" y="80" width="30" height="40" fill="#3b82f6"/> <text x="75" y="135" font-family="Arial" font-size="10" text-anchor="middle">1</text>
            <text x="125" y="135" font-family="Arial" font-size="10" text-anchor="middle">2</text>
            <text x="175" y="135" font-family="Arial" font-size="10" text-anchor="middle">3</text>
            <text x="30" y="65" font-family="Arial" font-size="10" text-anchor="middle">6</text>
            <text x="30" y="45" font-family="Arial" font-size="10" text-anchor="middle">8</text>
            <text x="30" y="85" font-family="Arial" font-size="10" text-anchor="middle">4</text>
            <text x="130" y="15" font-family="Arial" font-size="10" text-anchor="middle">שכיחות (משפחות)</text>
        </svg>
        </div>
        לכמה משפחות יש בדיוק <strong>מכונית אחת</strong>?`,
        options: [
            "6 משפחות",
            "1 משפחות",
            "8 משפחות",
            "20 משפחות"
        ],
        correctAnswer: 0,
        hint: "הסתכלו על ציר ה-x (הציר האופקי) ומצאו את המספר 1. בדקו מהו הגובה של העמודה מעליו לפי ציר ה-y (הציר האנכי).",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הערך המבוקש על הציר האופקי של הגרף. אנו מחפשים את הערך של מכונית אחת.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נעלה במעלה העמודה הכחולה שנמצאת מעל המספר 1 עד שנגיע לקצה שלה.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "נסתכל שמאלה לכיוון הציר האנכי כדי לקרוא את גובה העמודה. הגובה מצביע על המספר שש.", 
                math_expression: "<div dir='ltr'>6</div>" 
            },
            { 
                verbal_explanation: "המשמעות היא שישנן שש משפחות בבניין שיש להן מכונית אחת בלבד.", 
                math_expression: "<div dir='ltr'>6</div>" 
            }
        ],
        final_answer: "6"
    },

    // שאלה 82
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>חישוב ממוצע מתוך גרף עמודות:</strong><br>
        הדיאגרמה מציגה ציונים במבחן (ציון: 60, 80, 100).<br>
        מספר תלמידים שקיבלו 60: 4.<br>
        מספר תלמידים שקיבלו 80: 4.<br>
        מספר תלמידים שקיבלו 100: 2.<br>
        מהו הציון הממוצע?`,
        options: [
            "76",
            "80",
            "70",
            "82"
        ],
        correctAnswer: 0,
        hint: "הכפילו כל ציון במספר התלמידים שקיבלו אותו. חברו את כל התוצאות לסכום אחד, וחלקו במספר התלמידים הכולל (10).",
        solution_steps: [
            { 
                verbal_explanation: "נחשב את סך כל הנקודות של התלמידים שקיבלו 60.", 
                math_expression: "<div dir='ltr'>60 &times; 4 = 240</div>" 
            },
            { 
                verbal_explanation: "נחשב את סך כל הנקודות של התלמידים שקיבלו 80.", 
                math_expression: "<div dir='ltr'>80 &times; 4 = 320</div>" 
            },
            { 
                verbal_explanation: "נחשב את סך כל הנקודות של התלמידים שקיבלו 100.", 
                math_expression: "<div dir='ltr'>100 &times; 2 = 200</div>" 
            },
            { 
                verbal_explanation: "נחבר את כל התוצאות כדי לקבל את הסכום הכולל של הנקודות בכיתה.", 
                math_expression: "<div dir='ltr'>240 + 320 + 200 = 760</div>" 
            },
            { 
                verbal_explanation: "נחשב כמה תלמידים נבחנו בסך הכל (סכום השכיחויות).", 
                math_expression: "<div dir='ltr'>4 + 4 + 2 = 10</div>" 
            },
            { 
                verbal_explanation: "נחלק את סך הנקודות בכמות התלמידים למציאת הממוצע.", 
                math_explanation: "<div dir='ltr'>760 / 10</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הסופי.", 
                math_expression: "<div dir='ltr'>76</div>" 
            }
        ],
        final_answer: "76"
    },

    // שאלה 83
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>מציאת השכיח מתוך גרף:</strong><br>
        בדיאגרמה מוצג מספר הילדים במשפחה ביישוב מסוים.<br>
        העמודה הגבוהה ביותר נמצאת מעל הערך "3 ילדים".<br>
        מהו מספר הילדים ה<strong>שכיח</strong> במשפחה?`,
        options: [
            "3 ילדים",
            "העמודה הגבוהה ביותר",
            "זה תלוי במספר המשפחות",
            "אין שכיח בגרף כזה"
        ],
        correctAnswer: 0,
        hint: "בדיאגרמת עמודות, השכיח הוא תמיד הערך (בציר האופקי) שהעמודה שלו היא הגבוהה ביותר.",
        solution_steps: [
            { 
                verbal_explanation: "המדד הסטטיסטי 'שכיח' מוגדר כערך שהופיע הכי הרבה פעמים בתצפית.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "בייצוג גרפי, כמות הפעמים שערך מופיע מיוצגת על ידי הגובה של העמודה.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "נחפש בגרף את העמודה שמגיעה לשיא הגובה. נאמר לנו שהיא נמצאת מעל המספר שלוש.", 
                math_expression: "<div dir='ltr'>3</div>" 
            },
            { 
                verbal_explanation: "לכן, הערך שלוש הוא השכיח, כי היו הכי הרבה משפחות שדיווחו על 3 ילדים.", 
                math_expression: "<div dir='ltr'>3</div>" 
            }
        ],
        final_answer: "3 ילדים"
    },

    // שאלה 84
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>מעבר מטבלה לדיאגרמת עוגה:</strong><br>
        בכיתה יש 20 תלמידים. חצי מהם (10) לומדים ערבית, רבע מהם (5) לומדים צרפתית, ורבע מהם (5) לומדים רוסית.<br>
        אם נצייר דיאגרמת עוגה, איזו זווית (במעלות) תתפוס הקבוצה של לומדי הערבית?`,
        options: [
            "180&deg;",
            "90&deg;",
            "50&deg;",
            "360&deg;"
        ],
        correctAnswer: 0,
        hint: "דיאגרמת עוגה היא עיגול שלם של 360 מעלות. אם קבוצה מסוימת מהווה חצי מהכיתה, היא צריכה לתפוס בדיוק חצי מהמעלות של העיגול.",
        solution_steps: [
            { 
                verbal_explanation: "דיאגרמת עוגה מבוססת על עיגול שלם. סך כל המעלות בעיגול הוא תמיד שלוש מאות ושישים.", 
                math_expression: "<div dir='ltr'>360</div>" 
            },
            { 
                verbal_explanation: "נמצא את החלק היחסי של לומדי הערבית מתוך הכיתה. ישנם 10 תלמידים מתוך 20.", 
                math_expression: "<div dir='ltr'>10 / 20</div>" 
            },
            { 
                verbal_explanation: "נצמצם את השבר ונראה שהם מהווים בדיוק חצי מהכיתה.", 
                math_expression: "<div dir='ltr'>0.5</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את גודל הגזרה (הזווית) בעוגה, נכפיל את החלק היחסי בסך המעלות של העיגול.", 
                math_expression: "<div dir='ltr'>0.5 &times; 360</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל לקבלת הזווית במעלות.", 
                math_expression: "<div dir='ltr'>180</div>" 
            }
        ],
        final_answer: "180&deg;"
    },

    // שאלה 85
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>הבנת אחוזים מדיאגרמת עוגה:</strong><br>
        בדיאגרמת עוגה המציגה הוצאות משפחתיות, גזרת ה"מזון" תופסת זווית של 90 מעלות.<br>
        מהו אחוז ההוצאה על מזון מתוך סך כל ההוצאות?`,
        options: [
            "25%",
            "90%",
            "50%",
            "10%"
        ],
        correctAnswer: 0,
        hint: "עיגול שלם הוא 360 מעלות (100%). חלקו את הזווית של המזון (90) ב-360 כדי לראות איזה חלק מהעיגול היא תופסת, ואז הפכו לאחוזים.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הזווית של הגזרה שאנו בודקים (המזון).", 
                math_expression: "<div dir='ltr'>90</div>" 
            },
            { 
                verbal_explanation: "נחלק זווית זו בסך כל המעלות שיש בעיגול שלם.", 
                math_expression: "<div dir='ltr'>90 / 360</div>" 
            },
            { 
                verbal_explanation: "נצמצם את השבר כדי לראות את החלק היחסי. התוצאה היא רבע.", 
                math_expression: "<div dir='ltr'>1 / 4 = 0.25</div>" 
            },
            { 
                verbal_explanation: "כדי להפוך מספר עשרוני לאחוזים, נכפיל אותו במאה.", 
                math_expression: "<div dir='ltr'>0.25 &times; 100</div>" 
            },
            { 
                verbal_explanation: "נקבל את האחוז המדויק מתוך סך ההוצאות.", 
                math_expression: "<div dir='ltr'>25</div>" 
            }
        ],
        final_answer: "25%"
    },

    // שאלה 86
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>מציאת חציון מגרף עמודות:</strong><br>
        בדיאגרמה מוצגים מספר איחורים של 7 עובדים:<br>
        0 איחורים: 2 עובדים.<br>
        1 איחורים: 3 עובדים.<br>
        2 איחורים: 2 עובדים.<br>
        מהו מספר האיחורים ה<strong>חציון</strong>?`,
        options: [
            "1",
            "0",
            "2",
            "1.5"
        ],
        correctAnswer: 0,
        hint: "ישנם 7 עובדים. העובד האמצעי הוא העובד ה-4 (7 ועוד 1, חלקי 2). ספרו את העובדים מהעמודה הראשונה: 2 העובדים הראשונים עם 0 איחורים. שלושת הבאים (כולל העובד ה-4) עם איחור 1. לכן החציון הוא 1.",
        solution_steps: [
            { 
                verbal_explanation: "נמצא קודם את מספר המקרים (עובדים) הכולל בגרף.", 
                math_expression: "<div dir='ltr'>2 + 3 + 2 = 7</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את המיקום של החציון, נוסיף 1 לכמות ונחלק בשתיים.", 
                math_expression: "<div dir='ltr'>( 7 + 1 ) / 2 = 4</div>" 
            },
            { 
                verbal_explanation: "אנו מחפשים את הערך של העובד הרביעי ברשימה מסודרת. נתחיל לספור מהערך הנמוך ביותר.", 
                math_expression: "<div dir='ltr'>4</div>" 
            },
            { 
                verbal_explanation: "שני העובדים הראשונים הם עם 0 איחורים. עדיין לא הגענו לעובד ה-4.", 
                math_expression: "<div dir='ltr'>2</div>" 
            },
            { 
                verbal_explanation: "שלושת העובדים הבאים (עובדים מספר 3, 4 ו-5) הם עם איחור 1. העובד ה-4 שייך לקבוצה זו.", 
                math_expression: "<div dir='ltr'>1</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהאמצע נופל בקבוצה של 'איחור אחד', זהו החציון.", 
                math_expression: "<div dir='ltr'>1</div>" 
            }
        ],
        final_answer: "1"
    },

    // שאלה 87
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>חישוב שכיחות יחסית מגרף:</strong><br>
        בגרף עמודות המציג ציוני 20 תלמידים, העמודה של הציון "80" מגיעה לגובה 5.<br>
        מהי <strong>השכיחות היחסית</strong> של הציון 80 בכיתה זו?`,
        options: [
            "0.25 (רבע)",
            "5",
            "20",
            "0.80"
        ],
        correctAnswer: 0,
        hint: "שכיחות יחסית היא היחס בין מספר המקרים הספציפי (5) לבין סך כל המקרים (20). חלקו את 5 ב-20.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את כמות התלמידים שקיבלו את הציון 80 (שכיחות רגילה).", 
                math_expression: "<div dir='ltr'>5</div>" 
            },
            { 
                verbal_explanation: "נזהה את סך כל התלמידים שנבחנו בכיתה.", 
                math_expression: "<div dir='ltr'>20</div>" 
            },
            { 
                verbal_explanation: "נבנה שבר שבו המונה הוא השכיחות של הציון והמכנה הוא הסך הכל.", 
                math_expression: "<div dir='ltr'>5 / 20</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת החילוק במחשבון כדי לקבל את השכיחות היחסית כמספר עשרוני.", 
                math_expression: "<div dir='ltr'>0.25</div>" 
            }
        ],
        final_answer: "0.25"
    },

    // שאלה 88
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>קריאת ערך חסר לפי ממוצע:</strong><br>
        נתונה דיאגרמת עמודות של 4 ימי מכירות. ביום א' נמכרו 10 מוצרים, ביום ב' נמכרו 20, וביום ג' נמכרו 15.<br>
        העמודה של יום ד' חסרה, אך ידוע כי הממוצע של ארבעת הימים הוא 20.<br>
        כמה מוצרים נמכרו ביום ד'?`,
        options: [
            "35",
            "20",
            "25",
            "15"
        ],
        correctAnswer: 0,
        hint: "אם הממוצע של 4 ימים הוא 20, סך כל המכירות חייב להיות 80 (4 כפול 20). חברו את המכירות של שלושת הימים הראשונים, וגלו כמה חסר כדי להגיע ל-80.",
        solution_steps: [
            { 
                verbal_explanation: "ראשית נמצא את סך כל המוצרים שנמכרו בכל ארבעת הימים יחד בעזרת הממוצע.", 
                math_expression: "<div dir='ltr'>20 &times; 4 = 80</div>" 
            },
            { 
                verbal_explanation: "נחבר את כמויות המכירה הידועות של שלושת הימים הראשונים.", 
                math_expression: "<div dir='ltr'>10 + 20 + 15 = 45</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את הכמות של היום הרביעי החסר, נחסר את הסכום הידוע מהסך הכל.", 
                math_expression: "<div dir='ltr'>80 - 45</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ונגלה את הערך החסר בגרף.", 
                math_expression: "<div dir='ltr'>35</div>" 
            }
        ],
        final_answer: "35"
    },

    // שאלה 89
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>טווח נתונים מתוך גרף:</strong><br>
        בגרף עמודות המציג טמפרטורה במהלך שבוע, הערך הנמוך ביותר הוא 12 מעלות והערך הגבוה ביותר הוא 28 מעלות.<br>
        מהו ה<strong>טווח</strong> של הטמפרטורות בשבוע זה?`,
        options: [
            "16",
            "28",
            "12",
            "40"
        ],
        correctAnswer: 0,
        hint: "הטווח בגרף מחושב על ידי חיסור הערך המינימלי מהערך המקסימלי שנמדד.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הערך המקסימלי (השיא) שמופיע בגרף.", 
                math_expression: "<div dir='ltr'>28</div>" 
            },
            { 
                verbal_explanation: "נזהה את הערך המינימלי (הנקודה הנמוכה ביותר) בגרף.", 
                math_expression: "<div dir='ltr'>12</div>" 
            },
            { 
                verbal_explanation: "נחסר את המינימום מהמקסימום כדי למצוא את הפיזור של הטמפרטורות.", 
                math_expression: "<div dir='ltr'>28 - 12</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור.", 
                math_expression: "<div dir='ltr'>16</div>" 
            }
        ],
        final_answer: "16"
    },

    // שאלה 90
    {
        topic: "bagrut_35371",
        subTopic: "תיאור נתונים בטבלאות וגרפים",
        question_text: `<strong>מציאת שכיחות יחסית באחוזים מתוך גרף:</strong><br>
        במפעל 50 עובדים. בדיאגרמת עמודות מוצג מספר הילדים של העובדים.<br>
        העמודה של "ילד אחד" מגיעה לגובה 10.<br>
        איזה <strong>אחוז</strong> מהווים העובדים להם ילד אחד מכלל עובדי המפעל?`,
        options: [
            "20%",
            "10%",
            "50%",
            "5%"
        ],
        correctAnswer: 0,
        hint: "חשבו קודם את השכיחות היחסית (10 חלקי 50), ואז הכפילו ב-100 כדי להפוך את התוצאה לאחוזים.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את כמות העובדים הרלוונטית (אלו עם ילד אחד).", 
                math_expression: "<div dir='ltr'>10</div>" 
            },
            { 
                verbal_explanation: "נחלק כמות זו בסך כל העובדים במפעל כדי למצוא את החלק היחסי.", 
                math_expression: "<div dir='ltr'>10 / 50 = 0.20</div>" 
            },
            { 
                verbal_explanation: "כדי להפוך את החלק היחסי לאחוזים, נכפיל את התוצאה במאה.", 
                math_expression: "<div dir='ltr'>0.20 &times; 100</div>" 
            },
            { 
                verbal_explanation: "נבצע את הכפל ונקבל את התשובה באחוזים.", 
                math_expression: "<div dir='ltr'>20</div>" 
            }
        ],
        final_answer: "20%"
    }
];