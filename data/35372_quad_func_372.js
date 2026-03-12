// ========================================================================
// שאלון 35372 | נושא: פונקציה ריבועית
// פעימה 1: 20 שאלות (תתי נושאים: פרבולה + קודקוד וציר סימטריה)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // תת נושא 1: פרבולה (שאלות 1-10)
    // ---------------------------------------------------------

    // שאלה 1
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>זיהוי פרמטרים בסיסי (a, b, c):</strong><br>
        נתונה הפונקציה הריבועית הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = 2x<sup>2</sup> - 4x + 5</div>
        מהם הערכים של הפרמטרים a, b ו-c בפונקציה זו?`,
        options: [
            "a = 2, b = -4, c = 5",
            "a = 2, b = 4, c = 5",
            "a = 2, b = -4x, c = 5",
            "a = -4, b = 2, c = 5"
        ],
        correctAnswer: 0,
        hint: "הפרמטר a הוא המספר שכופל את x בריבוע. הפרמטר b הוא המספר שכופל את x הרגיל (כולל הסימן שלפניו!). הפרמטר c הוא המספר החופשי שעומד לבד ללא x.",
        solution_steps: [
            { 
                verbal_explanation: "פונקציה ריבועית מסודרת נראית תמיד כך: y שווה ל-a כפול x בריבוע, ועוד b כפול x, ועוד c.", 
                math_expression: "<div dir='ltr'>y = a &times; x<sup>2</sup> + b &times; x + c</div>" 
            },
            { 
                verbal_explanation: "נחפש את הפרמטר a. זהו המספר שמוצמד (כופל) את ה-x בריבוע. במשוואה שלנו, המספר הזה הוא 2.", 
                math_expression: "<div dir='ltr'>a = 2</div>" 
            },
            { 
                verbal_explanation: "נחפש את הפרמטר b. זהו המספר שמוצמד ל-x הרגיל. חובה לקחת אותו יחד עם הסימן שמופיע לפניו. לכן המספר הוא מינוס 4 (ולא 4).", 
                math_expression: "<div dir='ltr'>b = -4</div>" 
            },
            { 
                verbal_explanation: "נחפש את הפרמטר c. זהו 'המספר החופשי' שאין לידו שום x. במשוואה שלנו זהו המספר פלוס 5.", 
                math_expression: "<div dir='ltr'>c = 5</div>" 
            },
            { 
                verbal_explanation: "נסכם את שלושת הפרמטרים שמצאנו.", 
                math_expression: "<div dir='ltr'>a = 2 , b = -4 , c = 5</div>" 
            }
        ],
        final_answer: "a = 2, b = -4, c = 5"
    },

    // שאלה 2
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>זיהוי פרמטרים כשהמשוואה מבולגנת:</strong><br>
        נתונה הפונקציה הריבועית הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = 7 - x<sup>2</sup> + 3x</div>
        מהם הערכים של הפרמטרים a, b ו-c בפונקציה זו?`,
        options: [
            "a = -1, b = 3, c = 7",
            "a = 7, b = -1, c = 3",
            "a = 1, b = 3, c = 7",
            "a = -x, b = 3, c = 7"
        ],
        correctAnswer: 0,
        hint: "הסדר שבו כתובים האיברים לא משנה! הפרמטר a תמיד יהיה שייך ל-x בריבוע. כשאין מספר לפני הנעלם, זה אומר שיש שם 1 סמוי. לכן 'מינוס איקס בריבוע' אומר ש-a הוא מינוס 1.",
        solution_steps: [
            { 
                verbal_explanation: "כאשר המשוואה אינה מסודרת, נחפש את הרכיבים לפי החזקות ולא לפי הסדר בו נכתבו.", 
                math_expression: "<div dir='ltr'>y = -x<sup>2</sup> + 3x + 7</div>" 
            },
            { 
                verbal_explanation: "נחפש את פרמטר a (שמודבק ל-x בריבוע). כתוב רק מינוס, המשמעות המתמטית היא שקיים שם 'מינוס אחד' נסתר.", 
                math_expression: "<div dir='ltr'>a = -1</div>" 
            },
            { 
                verbal_explanation: "נחפש את פרמטר b (שמודבק ל-x ללא חזקה). המספר הזה הוא פלוס 3.", 
                math_expression: "<div dir='ltr'>b = 3</div>" 
            },
            { 
                verbal_explanation: "נחפש את פרמטר c (המספר שעומד לבד). המספר הזה הוא פלוס 7.", 
                math_expression: "<div dir='ltr'>c = 7</div>" 
            },
            { 
                verbal_explanation: "נרשום את התוצאה המסודרת של שלושת הרכיבים.", 
                math_expression: "<div dir='ltr'>a = -1 , b = 3 , c = 7</div>" 
            }
        ],
        final_answer: "a = -1, b = 3, c = 7"
    },

    // שאלה 3
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>זיהוי פרמטרים כשרכיב אחד חסר (פונקציה חסרה):</strong><br>
        נתונה הפונקציה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = 3x<sup>2</sup> - 12</div>
        מהם הערכים של a, b, c?`,
        options: [
            "a = 3, b = 0, c = -12",
            "a = 3, b = -12, c = 0",
            "a = 0, b = 3, c = -12",
            "a = 3, b = 1, c = -12"
        ],
        correctAnswer: 0,
        hint: "האם יש במשוואה הזו נעלם מסוג x רגיל (ללא חזקה)? לא. כאשר רכיב אינו מופיע כלל במשוואה, הפרמטר שלו שווה לאפס.",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק את האיבר שמכיל x בריבוע כדי למצוא את a. המספר המקדם הוא 3.", 
                math_expression: "<div dir='ltr'>a = 3</div>" 
            },
            { 
                verbal_explanation: "נחפש את האיבר שמכיל x רגיל (בחזקת 1) כדי למצוא את b. הרכיב הזה לא מופיע כלל במשוואה. המשמעות היא שהמקדם שלו הוא אפס (כי אפס כפול x מבטל אותו).", 
                math_expression: "<div dir='ltr'>b = 0</div>" 
            },
            { 
                verbal_explanation: "נחפש את המספר החופשי כדי למצוא את c. המספר שעומד לבד הוא מינוס 12.", 
                math_expression: "<div dir='ltr'>c = -12</div>" 
            },
            { 
                verbal_explanation: "נרשום את שלושת הפרמטרים יחד.", 
                math_expression: "<div dir='ltr'>a = 3 , b = 0 , c = -12</div>" 
            }
        ],
        final_answer: "a = 3, b = 0, c = -12"
    },

    // שאלה 4
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>זיהוי צורת הפרבולה מחייכת או בוכה (a חיובי/שלילי):</strong><br>
        נתונה הפונקציה הריבועית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 4x + 4</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 250 120" width="100%" height="120" style="max-width:250px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 30,30 Q 75,120 120,30" fill="none" stroke="#22c55e" stroke-width="3"/>
            <text x="75" y="100" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">מחייכת?</text>
            <path d="M 130,90 Q 175,0 220,90" fill="none" stroke="#ef4444" stroke-width="3"/>
            <text x="175" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">בוכה?</text>
        </svg>
        </div>
        איזו צורה יש לפרבולה זו?`,
        options: [
            "פרבולה מחייכת (קעורה כלפי מעלה) כי a חיובי",
            "פרבולה בוכה (קעורה כלפי מטה) כי a שלילי",
            "פרבולה מחייכת כי c חיובי",
            "פרבולה בוכה כי b שלילי"
        ],
        correctAnswer: 0,
        hint: "הפרמטר היחיד שקובע אם הפרבולה 'מחייכת' או 'בוכה' הוא הפרמטר a (זה שמחובר ל-x בריבוע). אם a חיובי, הפונקציה 'שמחה' (מחייכת). אם a שלילי, הפונקציה 'עצובה' (בוכה). מהו a כאן?",
        solution_steps: [
            { 
                verbal_explanation: "הכיוון של הפרבולה תלוי רק בסימן של פרמטר a. נמצא אותו בפונקציה שלנו.", 
                math_expression: "<div dir='ltr'>a = 1</div>" 
            },
            { 
                verbal_explanation: "נבדוק האם המספר שמצאנו הוא גדול מאפס (חיובי) או קטן מאפס (שלילי).", 
                math_expression: "<div dir='ltr'>1 > 0</div>" 
            },
            { 
                verbal_explanation: "כאשר a הוא מספר חיובי, זרועות הפרבולה פונות כלפי מעלה. צורה זו מזכירה חיוך, ולכן קוראים לה 'פרבולה מחייכת'.", 
                math_expression: "<div dir='ltr'>+</div>" 
            }
        ],
        final_answer: "פרבולה מחייכת (קעורה כלפי מעלה) כי a חיובי"
    },

    // שאלה 5
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>הסקת נתונים מתוך שרטוט:</strong><br>
        לפניכם שרטוט של פרבולה במערכת צירים.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="100" x2="180" y2="100" stroke="#94a3b8" stroke-width="2"/> <line x1="100" y1="20" x2="100" y2="180" stroke="#94a3b8" stroke-width="2"/> <text x="185" y="105" font-family="Arial" font-size="12" font-weight="bold">x</text>
            <text x="105" y="15" font-family="Arial" font-size="12" font-weight="bold">y</text>
            <path d="M 40,160 Q 100,20 160,160" fill="none" stroke="#ef4444" stroke-width="3"/>
            <circle cx="100" cy="55" r="4" fill="#0f172a"/>
        </svg>
        </div>
        על סמך השרטוט בלבד, מה ניתן לומר בוודאות על משוואת הפרבולה?`,
        options: [
            "הפרמטר a קטן מאפס (a < 0)",
            "הפרמטר a גדול מאפס (a > 0)",
            "הפרמטר b שווה לאפס",
            "הפרמטר c גדול מאפס"
        ],
        correctAnswer: 0,
        hint: "הסתכלו על צורת הפרבולה בשרטוט. האם היא 'מחייכת' או 'בוכה'? פרבולה 'בוכה' מעידה תמיד על כך שהמקדם של איקס בריבוע הוא שלילי.",
        solution_steps: [
            { 
                verbal_explanation: "נבחן את השרטוט. זרועות הפרבולה פונות כלפי מטה.", 
                math_expression: "<div dir='ltr'>&darr;</div>" 
            },
            { 
                verbal_explanation: "צורה זו (קעירות כלפי מטה) מכונה בלשון עממית 'פרבולה בוכה'.", 
                math_expression: "<div dir='ltr'>&cap;</div>" 
            },
            { 
                verbal_explanation: "הכלל המתמטי קובע שפרבולה פונה כלפי מטה אך ורק כאשר המקדם המוביל (a) הוא מספר שלילי.", 
                math_expression: "<div dir='ltr'>a < 0</div>" 
            }
        ],
        final_answer: "הפרמטר a קטן מאפס (a < 0)"
    },

    // שאלה 6
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>מציאת ערך ה-y של נקודה על הפרבולה (הצבת x חיובי):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 5x + 6</div>
        ידוע כי נקודה מסוימת נמצאת על הפרבולה, ושיעור ה-x שלה הוא 4.<br>
        מהו שיעור ה-y של נקודה זו?`,
        options: [
            "y = 2",
            "y = -2",
            "y = 6",
            "y = 0"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא את y, פשוט הציבו את המספר 4 במקום כל x שמופיע במשוואה. חשבו קודם את 4 בריבוע, אחר כך את המכפלה (5 כפול 4), ואז חברו וחסרו הכל יחד.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את הפונקציה כפי שניתנה לנו, ובמקום כל x נפתח סוגריים לקראת ההצבה.", 
                math_expression: "<div dir='ltr'>y = (x)<sup>2</sup> - 5 &times; (x) + 6</div>" 
            },
            { 
                verbal_explanation: "נציב את המספר 4 לתוך הסוגריים שהכנו.", 
                math_expression: "<div dir='ltr'>y = (4)<sup>2</sup> - 5 &times; (4) + 6</div>" 
            },
            { 
                verbal_explanation: "לפי סדר פעולות חשבון, נחשב קודם כל את החזקה (ארבע כפול ארבע).", 
                math_expression: "<div dir='ltr'>(4)<sup>2</sup> = 16</div>" 
            },
            { 
                verbal_explanation: "נחשב את פעולת הכפל שבמרכז המשוואה.", 
                math_expression: "<div dir='ltr'>5 &times; 4 = 20</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל המעודכן עם התוצאות שחישבנו.", 
                math_expression: "<div dir='ltr'>y = 16 - 20 + 6</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולות החיבור והחיסור משמאל לימין כדי לקבל את ערכו של y.", 
                math_expression: "<div dir='ltr'>y = 2</div>" 
            }
        ],
        final_answer: "y = 2"
    },

    // שאלה 7
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>הצבת נקודה שלילית בפרבולה (זהירות עם סוגריים!):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> + 2x - 3</div>
        מהו ערך ה-y של הנקודה ששיעור ה-x שלה הוא מינוס 3 (x = -3)?`,
        options: [
            "y = 0",
            "y = -18",
            "y = 12",
            "y = -6"
        ],
        correctAnswer: 0,
        hint: "כשמציבים מספר שלילי בחזקה, חובה לשים אותו בסוגריים! מינוס 3 כפול מינוס 3 שווה לפלוס 9. הציבו בזהירות בתוך: (-3) בריבוע + 2 כפול (-3) פחות 3.",
        solution_steps: [
            { 
                verbal_explanation: "מכינים תבנית הצבה. כאשר מציבים מספר שלילי, חובה מוחלטת להשתמש בסוגריים סביבו, במיוחד לפני חזקה.", 
                math_expression: "<div dir='ltr'>y = (-3)<sup>2</sup> + 2 &times; (-3) - 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה תחילה. מינוס שלוש כפול מינוס שלוש נותן תוצאה חיובית.", 
                math_expression: "<div dir='ltr'>(-3)<sup>2</sup> = 9</div>" 
            },
            { 
                verbal_explanation: "נחשב את פעולת הכפל שבמרכז. מספר חיובי כפול מספר שלילי נותן תוצאה שלילית.", 
                math_expression: "<div dir='ltr'>2 &times; (-3) = -6</div>" 
            },
            { 
                verbal_explanation: "נכתוב מחדש את התרגיל עם התוצאות.", 
                math_expression: "<div dir='ltr'>y = 9 - 6 - 3</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ברצף משמאל לימין.", 
                math_expression: "<div dir='ltr'>y = 0</div>" 
            }
        ],
        final_answer: "y = 0"
    },

    // שאלה 8
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>בדיקה האם נקודה נמצאת על הפרבולה:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = -2x<sup>2</sup> + 5</div>
        האם הנקודה ששיעוריה הם (1, 3) נמצאת על גרף הפרבולה?`,
        options: [
            "כן, הנקודה נמצאת על הפרבולה",
            "לא, הנקודה אינה נמצאת על הפרבולה",
            "אי אפשר לדעת ללא שרטוט",
            "הנקודה היא בכלל הקודקוד"
        ],
        correctAnswer: 0,
        hint: "כדי לבדוק אם נקודה שייכת לפונקציה, הציבו את ה-x של הנקודה (1) בתוך המשוואה במקום הנעלם x. אם התוצאה שתקבלו בסוף החישוב שווה ל-y של הנקודה (3), סימן שהנקודה אכן על הגרף.",
        solution_steps: [
            { 
                verbal_explanation: "בנקודה הנתונה, המספר השמאלי הוא ה-x והמספר הימני הוא ה-y.", 
                math_expression: "<div dir='ltr'>x = 1 , y = 3</div>" 
            },
            { 
                verbal_explanation: "ניקח את הפונקציה המקורית ונציב בה אך ורק את ה-x של הנקודה.", 
                math_expression: "<div dir='ltr'>y = -2 &times; (1)<sup>2</sup> + 5</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה של אחד (אחד כפול אחת נשאר אחת).", 
                math_expression: "<div dir='ltr'>(1)<sup>2</sup> = 1</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולת הכפל במינוס שתיים.", 
                math_expression: "<div dir='ltr'>-2 &times; 1 = -2</div>" 
            },
            { 
                verbal_explanation: "נחבר עם המספר החופשי בסוף המשוואה כדי למצוא את התוצאה.", 
                math_expression: "<div dir='ltr'>-2 + 5 = 3</div>" 
            },
            { 
                verbal_explanation: "נקבל שהתוצאה של החישוב היא 3. נשווה זאת ל-y של הנקודה הנתונה (שהוא גם 3). מכיוון שהמספרים שווים, הנקודה מקיימת את המשוואה ונמצאת על הגרף.", 
                math_expression: "<div dir='ltr'>3 = 3</div>" 
            }
        ],
        final_answer: "כן, הנקודה נמצאת על הפרבולה"
    },

    // שאלה 9
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>מציאת נקודת חיתוך עם ציר y:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 8x - 12</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 200" width="100%" height="180" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="60" x2="180" y2="60" stroke="#cbd5e1" stroke-width="2"/> <line x1="100" y1="20" x2="100" y2="180" stroke="#cbd5e1" stroke-width="2"/> <path d="M 40,20 Q 140,200 180,20" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="100" cy="132" r="5" fill="#ef4444"/> <text x="135" y="140" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">(0, ?)</text>
        </svg>
        </div>
        באיזו נקודה חותכת הפרבולה את <strong>ציר ה-y</strong>?`,
        options: [
            "(0, -12)",
            "(0, 12)",
            "(-12, 0)",
            "(0, 0)"
        ],
        correctAnswer: 0,
        hint: "כל נקודה שנמצאת על ציר ה-y מאופיינת בכך ששיעור ה-x שלה הוא בדיוק אפס. הציבו x=0 במשוואת הפרבולה וראו מה נשאר. (בפרבולה, חיתוך עם ציר y הוא תמיד הפרמטר c).",
        solution_steps: [
            { 
                verbal_explanation: "הכלל למציאת חיתוך עם ציר y (הציר האנכי) הוא להציב אפס במקום ה-x בפונקציה.", 
                math_expression: "<div dir='ltr'>x = 0</div>" 
            },
            { 
                verbal_explanation: "נציב 0 במשוואה שלנו.", 
                math_expression: "<div dir='ltr'>y = 0<sup>2</sup> - 8 &times; 0 - 12</div>" 
            },
            { 
                verbal_explanation: "אפס בריבוע שווה לאפס. גם 8 כפול אפס שווה לאפס. כל האיברים עם x מתאפסים ונעלמים.", 
                math_expression: "<div dir='ltr'>y = 0 - 0 - 12</div>" 
            },
            { 
                verbal_explanation: "התוצאה שנשארת היא בדיוק הפרמטר c (המספר החופשי).", 
                math_expression: "<div dir='ltr'>y = -12</div>" 
            },
            { 
                verbal_explanation: "נרשום את התשובה כנקודה בעלת שני שיעורים: x שמנו אפס, וקיבלנו y מינוס שתים עשרה.", 
                math_expression: "<div dir='ltr'>(0, -12)</div>" 
            }
        ],
        final_answer: "(0, -12)"
    },

    // שאלה 10
    {
        topic: "bagrut_35372",
        subTopic: "פרבולה",
        question_text: `<strong>השפעת הפרמטר c על גובה הפרבולה (הזזה אנכית):</strong><br>
        נתונות שתי פונקציות:<br>
        הראשונה: <span dir="ltr" style="font-weight:bold;">y = x<sup>2</sup> + 3</span><br>
        השנייה: <span dir="ltr" style="font-weight:bold;">y = x<sup>2</sup> - 4</span><br>
        מה ההבדל הגרפי המרכזי בין שתי הפרבולות הללו?`,
        options: [
            "הראשונה חותכת את ציר ה-y גבוה יותר (בנקודה 3), והשנייה חותכת נמוך יותר (במינוס 4)",
            "הראשונה היא פרבולה מחייכת והשנייה בוכה",
            "הראשונה רחבה יותר מהשנייה",
            "אין הבדל, הן ממוקמות בדיוק באותו מקום"
        ],
        correctAnswer: 0,
        hint: "הפרמטר 'c' (המספר החופשי בסוף) קובע את נקודת החיתוך עם ציר y, ולמעשה 'מרים' או 'מוריד' את כל הפרבולה כמו במעלית מבלי לשנות את צורתה.",
        solution_steps: [
            { 
                verbal_explanation: "נבחן את הפונקציה הראשונה ונזהה את הרכיבים שלה. המקדם a שווה ל-1, ו-c שווה ל-3.", 
                math_expression: "<div dir='ltr'>y = x<sup>2</sup> + 3</div>" 
            },
            { 
                verbal_explanation: "נמצא את החיתוך שלה עם ציר ה-y על ידי הצבת איקס שווה לאפס.", 
                math_expression: "<div dir='ltr'>y = 0<sup>2</sup> + 3 = 3</div>" 
            },
            { 
                verbal_explanation: "נבחן את הפונקציה השנייה. גם בה המקדם a שווה ל-1, אך הפעם c שווה למינוס 4.", 
                math_expression: "<div dir='ltr'>y = x<sup>2</sup> - 4</div>" 
            },
            { 
                verbal_explanation: "נמצא את החיתוך שלה עם ציר ה-y.", 
                math_expression: "<div dir='ltr'>y = 0<sup>2</sup> - 4 = -4</div>" 
            },
            { 
                verbal_explanation: "המסקנה היא ששתיהן 'מחייכות' ובאותה הצורה (כי a זהה), אך המספר החופשי c מזיז אותן למעלה ולמטה על הציר.", 
                math_expression: "<div dir='ltr'>3 > -4</div>" 
            }
        ],
        final_answer: "הראשונה חותכת את ציר y בנקודה 3, והשנייה בנקודה מינוס 4"
    },

    // ---------------------------------------------------------
    // תת נושא 2: קודקוד וציר סימטריה (שאלות 11-20)
    // ---------------------------------------------------------

    // שאלה 11
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>מציאת שיעור ה-x של קודקוד הפרבולה (שימוש בנוסחה):</strong><br>
        נתונה הפונקציה הריבועית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 6x + 8</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2"/> 
            <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2"/> 
            <path d="M 50,40 Q 130,190 180,20" fill="none" stroke="#22c55e" stroke-width="2"/>
            <circle cx="122" cy="130" r="5" fill="#15803d"/> 
            <text x="135" y="145" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d">(x, y)</text>
            <line x1="122" y1="20" x2="122" y2="140" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,4"/>
        </svg>
        </div>
        מהו שיעור ה-x של <strong>קודקוד הפרבולה</strong>?`,
        options: [
            "x = 3",
            "x = -3",
            "x = 6",
            "x = 1"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הקודקוד: חלוקה של מינוס b בפעמיים a. שימו לב: אם b כבר שלילי, המינוס של הנוסחה הופך אותו לחיובי!",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את הקודקוד, נזהה קודם את הפרמטרים מתוך המשוואה. a הוא 1 (המקדם של איקס בריבוע), ו-b הוא מינוס 6.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -6</div>" 
            },
            { 
                verbal_explanation: "נרשום את הנוסחה למציאת ה-x של הקודקוד.", 
                math_expression: "<div dir='ltr'>x = -b / ( 2 &times; a )</div>" 
            },
            { 
                verbal_explanation: "נציב את הנתונים במונה: המינוס של הנוסחה נפגש עם המינוס של ה-6 ולכן מתהפך לפלוס.", 
                math_expression: "<div dir='ltr'>-(-6) = 6</div>" 
            },
            { 
                verbal_explanation: "נחשב את המכנה: שתיים כפול המקדם a.", 
                math_expression: "<div dir='ltr'>2 &times; 1 = 2</div>" 
            },
            { 
                verbal_explanation: "נרשום את תרגיל החילוק שנוצר מהמונה והמכנה.", 
                math_expression: "<div dir='ltr'>x = 6 / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת המיקום האופקי המדויק של קודקוד הפרבולה.", 
                math_expression: "<div dir='ltr'>x = 3</div>" 
            }
        ],
        final_answer: "x = 3"
    },

    // שאלה 12
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>מציאת הקודקוד השלם (שלב ההצבה):</strong><br>
        המשך לשאלה הקודמת. נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 6x + 8</div>
        מצאנו הרגע ששיעור ה-x של הקודקוד הוא <strong>3</strong>.<br>
        מהו <strong>שיעור ה-y</strong> של הקודקוד, ומהן נתוני הנקודה השלמה?`,
        options: [
            "(3, -1)",
            "(3, 17)",
            "(-3, -1)",
            "(3, 0)"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא את הגובה (y) של הקודקוד, פשוט קחו את ה-x שמצאתם (3), והציבו אותו במשוואת הפונקציה המקורית במקום כל x.",
        solution_steps: [
            { 
                verbal_explanation: "אנו יודעים שהקודקוד נמצא במיקום שבו ה-x שווה לשלוש.", 
                math_expression: "<div dir='ltr'>x = 3</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את ה-y התואם, נחזור לפונקציה המקורית ונציב בה את המספר 3 במקום כל נעלם.", 
                math_expression: "<div dir='ltr'>y = (3)<sup>2</sup> - 6 &times; (3) + 8</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה (שלוש כפול שלוש).", 
                math_expression: "<div dir='ltr'>(3)<sup>2</sup> = 9</div>" 
            },
            { 
                verbal_explanation: "נחשב את הכפל באמצע.", 
                math_expression: "<div dir='ltr'>-6 &times; 3 = -18</div>" 
            },
            { 
                verbal_explanation: "נרשום את התרגיל הפשוט ונבצע חיבור וחיסור משמאל לימין.", 
                math_expression: "<div dir='ltr'>y = 9 - 18 + 8</div>" 
            },
            { 
                verbal_explanation: "התוצאה הסופית היא שיעור ה-y. לכן, נקודת הקודקוד השלמה היא (3, -1).", 
                math_expression: "<div dir='ltr'>y = -1</div>" 
            }
        ],
        final_answer: "(3, -1)"
    },

    // שאלה 13
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>מציאת משוואת ציר הסימטריה:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = -2x<sup>2</sup> + 8x - 1</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2"/> 
            <path d="M 60,140 Q 100,20 140,140" fill="none" stroke="#ef4444" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="140" stroke="#b91c1c" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="120" y="80" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">x = ?</text>
        </svg>
        </div>
        מהי משוואת <strong>ציר הסימטריה</strong> של הפרבולה?`,
        options: [
            "x = 2",
            "x = -2",
            "x = 4",
            "x = 8"
        ],
        correctAnswer: 0,
        hint: "ציר הסימטריה הוא ישר אנכי שעובר בדיוק באמצע הפרבולה - כלומר, הוא עובר בדיוק דרך קודקוד הפרבולה. לכן, משוואת ציר הסימטריה היא תמיד x שווה לאיקס של הקודקוד. חשבו את הקודקוד בעזרת הנוסחה.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הפרמטרים בפונקציה שלנו כדי להשתמש בנוסחת הקודקוד. נזכור לקחת את המינוס ביחד עם ה-2.", 
                math_expression: "<div dir='ltr'>a = -2 , b = 8</div>" 
            },
            { 
                verbal_explanation: "נרשום את המונה של נוסחת הקודקוד: המינוס של הנוסחה מופעל על המספר 8.", 
                math_expression: "<div dir='ltr'>-b = -8</div>" 
            },
            { 
                verbal_explanation: "נחשב את המכנה של הנוסחה: שתיים כפול פרמטר a שהוא שלילי.", 
                math_expression: "<div dir='ltr'>2 &times; (-2) = -4</div>" 
            },
            { 
                verbal_explanation: "נרכיב את שבר החילוק: מונה חלקי מכנה. מינוס לחלק למינוס הופך לתוצאה חיובית.", 
                math_expression: "<div dir='ltr'>x = -8 / -4</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת ה-x של הקודקוד. מכיוון שציר הסימטריה עובר בדיוק בקודקוד, זהו גם ציר הסימטריה.", 
                math_expression: "<div dir='ltr'>x = 2</div>" 
            }
        ],
        final_answer: "x = 2"
    },

    // שאלה 14
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>מציאת קודקוד בפרבולה "חסרה" (אין b):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 9</div>
        מהם שיעורי נקודת הקודקוד של פרבולה זו?`,
        options: [
            "(0, -9)",
            "(-9, 0)",
            "(3, -9)",
            "(0, 9)"
        ],
        correctAnswer: 0,
        hint: "האם יש כאן מספר עם x רגיל? לא. כלומר b=0. כשתציבו אפס במונה של נוסחת הקודקוד, התוצאה תמיד תהיה אפס. לכן ה-x של הקודקוד הוא תמיד 0 במקרים כאלו. עכשיו רק נשאר להציב x=0 במשוואה כדי למצוא את y.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הפרמטרים. מכיוון שאין רכיב של x רגיל, המקדם b שווה לאפס.", 
                math_expression: "<div dir='ltr'>a = 1 , b = 0</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחת הקודקוד. המונה הוא אפס.", 
                math_expression: "<div dir='ltr'>x = 0 / ( 2 &times; 1 )</div>" 
            },
            { 
                verbal_explanation: "אפס לחלק לכל מספר הוא תמיד אפס. כלומר, הקודקוד יושב על ציר ה-y.", 
                math_expression: "<div dir='ltr'>x = 0</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את הגובה (y), נציב את האפס שמצאנו בחזרה לפונקציה המקורית.", 
                math_expression: "<div dir='ltr'>y = 0<sup>2</sup> - 9</div>" 
            },
            { 
                verbal_explanation: "האפס נעלם ומשאיר אותנו רק עם המספר החופשי. לכן הקודקוד הוא (0,-9).", 
                math_expression: "<div dir='ltr'>y = -9</div>" 
            }
        ],
        final_answer: "(0, -9)"
    },

    // שאלה 15
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>זיהוי סוג הקודקוד ללא שרטוט (מינימום או מקסימום):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = -3x<sup>2</sup> + 6x + 2</div>
        האם קודקוד הפרבולה הוא נקודת מינימום או מקסימום?`,
        options: [
            "נקודת מקסימום, כי הפרבולה 'בוכה' (a שלילי)",
            "נקודת מינימום, כי הפרבולה 'מחייכת' (a חיובי)",
            "נקודת מקסימום, כי המספר החופשי (c) הוא חיובי",
            "לא ניתן לדעת ללא מציאת הקודקוד המדויק"
        ],
        correctAnswer: 0,
        hint: "הסוד טמון תמיד בפרמטר a. אם a שלילי, הפרבולה נראית כמו גבעה או כיפה (עצובה), ולכן לקודקוד שלה יש שיא (נקודת מקסימום).",
        solution_steps: [
            { 
                verbal_explanation: "כדי לקבוע את סוג הקודקוד, כל שעלינו לעשות הוא להסתכל על המקדם שצמוד ל-x בריבוע.", 
                math_expression: "<div dir='ltr'>a = -3</div>" 
            },
            { 
                verbal_explanation: "המספר מינוס שלוש הוא כמובן קטן מאפס (מספר שלילי).", 
                math_expression: "<div dir='ltr'>-3 < 0</div>" 
            },
            { 
                verbal_explanation: "פרבולה שבה a שלילי פונה כלפי מטה, כמו הר. הפסגה של ההר היא הנקודה הגבוהה ביותר בגרף.", 
                math_expression: "<div dir='ltr'>Max</div>" 
            },
            { 
                verbal_explanation: "נקודה שהיא הכי גבוהה בסביבתה נקראת במתמטיקה 'נקודת מקסימום'.", 
                math_expression: "<div dir='ltr'>Maximum</div>" 
            }
        ],
        final_answer: "נקודת מקסימום, כי הפרבולה 'בוכה' (a שלילי)"
    },

    // שאלה 16
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>מציאת קודקוד בפרבולה שחסר בה c:</strong><br>
        נתונה הפונקציה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 10x</div>
        מהם שיעורי הקודקוד של פרבולה זו?`,
        options: [
            "(5, -25)",
            "(-5, 25)",
            "(5, 0)",
            "(10, 0)"
        ],
        correctAnswer: 0,
        hint: "הפרמטר c אינו קיים (הוא אפס), אבל זה לא מפריע לנו למצוא את הקודקוד! a=1, b=-10. השתמשו בנוסחה למציאת x, ואז הציבו בחזרה בפונקציה למציאת y.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הפרמטרים לצורך הנוסחה. המספר החופשי אמנם חסר, אבל זה לא משפיע על מציאת ה-x של הקודקוד.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -10</div>" 
            },
            { 
                verbal_explanation: "נציב בנוסחה: מינוס של הנוסחה פוגש את המינוס של ה-10, והכל חלקי פעמיים a.", 
                math_expression: "<div dir='ltr'>x = -(-10) / ( 2 &times; 1 )</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק הפשוט (עשר חלקי שתיים) לקבלת שיעור ה-x של הקודקוד.", 
                math_expression: "<div dir='ltr'>x = 5</div>" 
            },
            { 
                verbal_explanation: "כעת נמצא את הגובה. נחזור לפונקציה ונציב 5 במקום כל x.", 
                math_expression: "<div dir='ltr'>y = (5)<sup>2</sup> - 10 &times; (5)</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה ואת הכפל.", 
                math_expression: "<div dir='ltr'>y = 25 - 50</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ונקבל את שיעור ה-y. לכן הקודקוד הוא (5, -25).", 
                math_expression: "<div dir='ltr'>y = -25</div>" 
            }
        ],
        final_answer: "(5, -25)"
    },

    // שאלה 17
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>מציאת קודקוד משולבת (כל השלבים בעצמך):</strong><br>
        מצאו את קודקוד הפרבולה הבאה וקבעו האם הוא מינימום או מקסימום:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = 2x<sup>2</sup> + 4x - 1</div>`,
        options: [
            "(-1, -3), מינימום",
            "(-1, 3), מקסימום",
            "(1, 5), מינימום",
            "(-2, -5), מקסימום"
        ],
        correctAnswer: 0,
        hint: "קבעו סוג: a הוא 2 (חיובי) -> מחייכת -> מינימום. חשבו x קודקוד: מינוס 4 חלקי (2 כפול 2). הציבו את התוצאה בפונקציה (זכרו סוגריים למספר שלילי!) למציאת y.",
        solution_steps: [
            { 
                verbal_explanation: "המקדם של איקס בריבוע (a) הוא 2. מספר חיובי אומר שהפרבולה פונה מעלה ('מחייכת'), ולכן נקודת האמצע שלה נמצאת למטה והיא 'מינימום'.", 
                math_expression: "<div dir='ltr'>a = 2 > 0  &nbsp;&#10132;&nbsp; Min</div>" 
            },
            { 
                verbal_explanation: "נחשב את מיקום ה-x של הקודקוד על ידי חלוקת המינוס של b בפעמיים a.", 
                math_expression: "<div dir='ltr'>x = -4 / ( 2 &times; 2 )</div>" 
            },
            { 
                verbal_explanation: "ארבע חלקי ארבע זה אחת, ועם סימן המינוס נקבל מינוס אחת.", 
                math_expression: "<div dir='ltr'>x = -1</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את גובה הקודקוד נציב מינוס 1 בפונקציה (חובה עם סוגריים מסביב למינוס!).", 
                math_expression: "<div dir='ltr'>y = 2 &times; (-1)<sup>2</sup> + 4 &times; (-1) - 1</div>" 
            },
            { 
                verbal_explanation: "נחשב את החזקה (מינוס אחד בריבוע הוא פלוס אחד) ונכפול ב-2.", 
                math_expression: "<div dir='ltr'>2 &times; 1 = 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את שאר התרגיל: כפל של 4 במינוס 1 נותן מינוס 4. נרשום את התרגיל המלא.", 
                math_expression: "<div dir='ltr'>y = 2 - 4 - 1</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ברצף משמאל לימין ונקבל את התוצאה הסופית המייצגת את ה-y של נקודת המינימום.", 
                math_expression: "<div dir='ltr'>y = -3</div>" 
            }
        ],
        final_answer: "(-1, -3), מינימום"
    },

    // שאלה 18
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>הבנת הסימטריה בפרבולה:</strong><br>
        ידוע כי ציר הסימטריה של פרבולה מסוימת הוא הישר <strong>x = 3</strong>.<br>
        כמו כן, ידוע שהנקודה <strong>(5, 0)</strong> נמצאת על הפרבולה הזו מצד ימין.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2"/> 
            <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4"/> <path d="M 60,40 Q 100,160 140,40" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="127" cy="90" r="4" fill="#ef4444"/> <text x="145" y="95" font-family="Arial" font-size="12" font-weight="bold">(5, 0)</text>
            <circle cx="73" cy="90" r="4" fill="#ef4444"/> <text x="45" y="95" font-family="Arial" font-size="12" font-weight="bold">(?, 0)</text>
            <text x="105" y="20" font-family="Arial" font-size="12" font-weight="bold">x=3</text>
        </svg>
        </div>
        היעזרו בתכונת הסימטריה כדי למצוא: מהי הנקודה השנייה שגובהה (y) הוא גם 0 הנמצאת בצד השמאלי של הפרבולה?`,
        options: [
            "(1, 0)",
            "(0, 0)",
            "(-2, 0)",
            "(2, 0)"
        ],
        correctAnswer: 0,
        hint: "ציר הסימטריה הוא 'מראה'. מרחק הנקודה הידועה מהציר חייב להיות שווה למרחק הנקודה השנייה מאותו ציר. מה המרחק בין x=5 ל-x=3? קחו את המרחק הזה ולכו אותו לכיוון ההפוך (שמאלה מ-3).",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את ציר הסימטריה. הוא פועל כמראה באמצע הפרבולה ועובר דרך האיקס של הקודקוד.", 
                math_expression: "<div dir='ltr'>x = 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את המרחק האופקי שבין נקודת האפס הידועה הנמצאת ב-x שווה 5, לבין המראה שלנו ב-x שווה 3.", 
                math_expression: "<div dir='ltr'>5 - 3 = 2</div>" 
            },
            { 
                verbal_explanation: "בגלל הסימטריה, נקודת האפס השנייה (שגם הגובה שלה אפס) חייבת להיות מרוחקת בדיוק באותו מרחק של 2 יחידות, רק לכיוון הנגדי (שמאלה).", 
                math_expression: "<div dir='ltr'>3 - 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיסור ונגלה את מיקום האיקס של הנקודה הסימטרית. הגובה (y) נשאר אפס כי זו נקודה מקבילה.", 
                math_expression: "<div dir='ltr'>x = 1 &nbsp;&#10132;&nbsp; (1, 0)</div>" 
            }
        ],
        final_answer: "(1, 0)"
    },

    // שאלה 19
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>מציאת ציר סימטריה בעזרת שתי נקודות מקבילות:</strong><br>
        ידוע כי פרבולה חותכת את ציר ה-x (כלומר, הגובה y הוא 0) בשתי הנקודות הבאות:<br>
        <strong>(-2, 0)</strong> ו- <strong>(8, 0)</strong>.<br>
        מהי משוואת ציר הסימטריה של פרבולה זו?`,
        options: [
            "x = 3",
            "x = 5",
            "x = 6",
            "x = 4"
        ],
        correctAnswer: 0,
        hint: "ציר הסימטריה עובר בדיוק באמצע בין כל שתי נקודות מקבילות (נקודות בעלות אותו גובה y). מצאו את האמצע שבין x=-2 לבין x=8 על ידי חישוב הממוצע שלהם (לחבר אותם ולחלק בשתיים).",
        solution_steps: [
            { 
                verbal_explanation: "אנו מקבלים שתי נקודות עם אותו ערך y (שתי נקודות חיתוך עם הציר). ציר הסימטריה תמיד עובר בדיוק באמצע ביניהן.", 
                math_expression: "<div dir='ltr'>y<sub>1</sub> = 0 , y<sub>2</sub> = 0</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את נקודת האמצע על ציר איקס, נשתמש בנוסחה פשוטה של ממוצע: נחבר את שני הערכים של איקס.", 
                math_expression: "<div dir='ltr'>-2 + 8 = 6</div>" 
            },
            { 
                verbal_explanation: "נחלק את הסכום בשתיים כדי למצוא את האמצע המדויק.", 
                math_expression: "<div dir='ltr'>x = 6 / 2</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא המיקום של ציר הסימטריה, שהוא קו אנכי (ולכן רושמים אותו כ- x=מספר).", 
                math_expression: "<div dir='ltr'>x = 3</div>" 
            }
        ],
        final_answer: "x = 3"
    },

    // שאלה 20
    {
        topic: "bagrut_35372",
        subTopic: "קודקוד וציר סימטריה",
        question_text: `<strong>שאלת סיכום - הקשר בין קודקוד למספר החופשי בפרבולה מיוחדת:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = -x<sup>2</sup> + 4</div>
        היכן נמצא קודקוד הפרבולה?`,
        options: [
            "על ציר ה-y בנקודה (0, 4)",
            "על ציר ה-x בנקודה (4, 0)",
            "על ציר ה-y בנקודה (0, -4)",
            "ברביע הראשון בנקודה (2, 4)"
        ],
        correctAnswer: 0,
        hint: "שימו לב כי b=0 (אין איבר עם x רגיל). כשזה קורה, ה-x של הקודקוד הוא אוטומטית 0, ולכן הקודקוד נמצא בדיוק על ציר ה-y! והגובה שלו? זה פשוט הפרמטר c.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את הרכיבים של הפרבולה המיוחדת הזו. המקדם של איקס בריבוע קיים, אך המקדם של איקס רגיל חסר (כלומר הוא אפס).", 
                math_expression: "<div dir='ltr'>a = -1 , b = 0</div>" 
            },
            { 
                verbal_explanation: "על פי נוסחת הקודקוד, אם המונה b הוא אפס, התוצאה של השבר כולה תהיה אפס.", 
                math_expression: "<div dir='ltr'>x = 0 / -2 = 0</div>" 
            },
            { 
                verbal_explanation: "נקודה שבה האיקס שווה אפס נמצאת תמיד על ציר ה-y האנכי. כעת נחפש את הגובה (y) של הנקודה על ידי הצבה במשוואה.", 
                math_expression: "<div dir='ltr'>y = -(0)<sup>2</sup> + 4</div>" 
            },
            { 
                verbal_explanation: "האפס מתבטל, ונותרנו עם המספר החופשי בלבד (c), שהוא 4. לכן הקודקוד הוא בדיוק בנקודת החיתוך עם ציר y.", 
                math_expression: "<div dir='ltr'>y = 4 &nbsp;&#10132;&nbsp; (0, 4)</div>" 
            }
        ],
        final_answer: "על ציר ה-y בנקודה (0, 4)"
    },// ---------------------------------------------------------
    // תת נושא 3: חיתוך עם הצירים (שאלות 21-30)
    // ---------------------------------------------------------

    // שאלה 21
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>מציאת נקודת חיתוך עם ציר y:</strong><br>
        נתונה הפונקציה הריבועית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 5x + 7</div>
        מהי נקודת החיתוך של הפרבולה עם ציר ה-y?`,
        options: [
            "(0, 7)",
            "(7, 0)",
            "(0, -5)",
            "(0, 0)"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא את נקודת החיתוך עם ציר ה-y, צריך תמיד להציב x = 0 במשוואה. כל האיברים שיש בהם x יתאפסו, ויישאר רק המספר החופשי.",
        solution_steps: [
            { 
                verbal_explanation: "כל נקודה שנמצאת על ציר ה-y היא בעלת שיעור איקס השווה לאפס. נציב אפס בפונקציה.", 
                math_expression: "<div dir='ltr'>x = 0</div>" 
            },
            { 
                verbal_explanation: "נרשום את תרגיל ההצבה המלא במקום הנעלמים.", 
                math_expression: "<div dir='ltr'>y = 0<sup>2</sup> - 5 &times; 0 + 7</div>" 
            },
            { 
                verbal_explanation: "נחשב. אפס בריבוע זה אפס, וחמש כפול אפס זה גם אפס.", 
                math_expression: "<div dir='ltr'>y = 0 - 0 + 7</div>" 
            },
            { 
                verbal_explanation: "התוצאה שנותרה היא בדיוק הפרמטר החופשי של המשוואה.", 
                math_expression: "<div dir='ltr'>y = 7</div>" 
            },
            { 
                verbal_explanation: "נרשום את התשובה כנקודה בעלת שיעורי איקס ווואי בסוגריים.", 
                math_expression: "<div dir='ltr'>(0, 7)</div>" 
            }
        ],
        final_answer: "(0, 7)"
    },

    // שאלה 22
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>מציאת חיתוך עם ציר x (שתי נקודות אפס):</strong><br>
        נתונה הפונקציה הריבועית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 5x + 6</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="2"/> <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2"/> <path d="M 60,40 Q 140,160 170,40" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="115" cy="100" r="4" fill="#ef4444"/>
            <circle cx="140" cy="100" r="4" fill="#ef4444"/>
            <text x="110" y="115" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">x<sub>1</sub></text>
            <text x="145" y="115" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c">x<sub>2</sub></text>
        </svg>
        </div>
        מהן נקודות החיתוך של הפרבולה עם <strong>ציר ה-x</strong>?`,
        options: [
            "(2, 0) <bdi dir=\"rtl\">וגם</bdi> (3, 0)",
            "(-2, 0) <bdi dir=\"rtl\">וגם</bdi> (-3, 0)",
            "(6, 0) <bdi dir=\"rtl\">וגם</bdi> (-1, 0)",
            "(0, 2) <bdi dir=\"rtl\">וגם</bdi> (0, 3)"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא חיתוך עם ציר x, מציבים y = 0, ופותרים משוואה ריבועית בעזרת נוסחת השורשים. מצאו את a=1, b=-5, c=6 והציבו בנוסחה: מינוס b, פלוס-מינוס שורש של (b בריבוע פחות 4 כפול a כפול c), הכל חלקי פעמיים a.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא את החיתוך עם ציר איקס, נציב אפס במקום ה-y. נקבל משוואה ריבועית.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - 5x + 6 = 0</div>" 
            },
            { 
                verbal_explanation: "נזהה את הפרמטרים לצורך הצבה בנוסחת השורשים.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -5 , c = 6</div>" 
            },
            { 
                verbal_explanation: "נחשב את הביטוי שנמצא בתוך השורש (הדיסקרימיננטה): b בריבוע פחות 4 כפול a כפול c.", 
                math_expression: "<div dir='ltr'>(-5)<sup>2</sup> - 4 &times; 1 &times; 6</div>" 
            },
            { 
                verbal_explanation: "נבצע את חישוב השורש.", 
                math_expression: "<div dir='ltr'>25 - 24 = 1</div>" 
            },
            { 
                verbal_explanation: "כעת נציב הכל לנוסחת השורשים השלמה: מינוס b (שהופך לחיובי 5), פלוס/מינוס שורש של 1, חלקי 2.", 
                math_expression: "<div dir='ltr'>x<sub>1,2</sub> = ( 5 &plusmn; &radic;1 ) / 2</div>" 
            },
            { 
                verbal_explanation: "נפריד לשני פתרונות. הראשון עם פלוס: שש חלקי שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = ( 5 + 1 ) / 2 = 3</div>" 
            },
            { 
                verbal_explanation: "הפתרון השני עם מינוס: ארבע חלקי שתיים.", 
                math_expression: "<div dir='ltr'>x<sub>2</sub> = ( 5 - 1 ) / 2 = 2</div>" 
            }
        ],
        final_answer: "(2, 0) <bdi dir=\"rtl\">וגם</bdi> (3, 0)"
    },

    // שאלה 23
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>מציאת חיתוך עם ציר x (נקודה אחת בלבד):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 4x + 4</div>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#cbd5e1" stroke-width="2"/> <line x1="70" y1="20" x2="70" y2="140" stroke="#cbd5e1" stroke-width="2"/> <path d="M 60,40 Q 120,120 180,40" fill="none" stroke="#22c55e" stroke-width="2"/>
            <circle cx="120" cy="120" r="4" fill="#15803d"/>
            <text x="120" y="140" font-family="Arial" font-size="12" font-weight="bold" fill="#15803d">x = ?</text>
        </svg>
        </div>
        כמה נקודות חיתוך יש לפרבולה זו עם ציר ה-x, ומהן?`,
        options: [
            "<bdi dir=\"rtl\">נקודה אחת בלבד:</bdi> (2, 0)",
            "<bdi dir=\"rtl\">שתי נקודות:</bdi> (2, 0), (-2, 0)",
            "<bdi dir=\"rtl\">נקודה אחת בלבד:</bdi> (4, 0)",
            "<bdi dir=\"rtl\">אין נקודות חיתוך כלל</bdi>"
        ],
        correctAnswer: 0,
        hint: "כאשר הביטוי בתוך השורש (הדיסקרימיננטה) יוצא בדיוק אפס, זה אומר שיש לפרבולה רק נקודת חיתוך אחת עם ציר x (והיא גם הקודקוד שלה!). חשבו את השורש ובדקו.",
        solution_steps: [
            { 
                verbal_explanation: "נציב אפס ב-y ונזהה את הפרמטרים.", 
                math_expression: "<div dir='ltr'>a = 1 , b = -4 , c = 4</div>" 
            },
            { 
                verbal_explanation: "נחשב את החלק הפנימי של השורש בנוסחה.", 
                math_expression: "<div dir='ltr'>(-4)<sup>2</sup> - 4 &times; 1 &times; 4</div>" 
            },
            { 
                verbal_explanation: "נבצע את החזקה והכפל.", 
                math_expression: "<div dir='ltr'>16 - 16 = 0</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהביטוי בשורש שווה לאפס, השורש נעלם, ויש לנו פתרון יחיד.", 
                math_expression: "<div dir='ltr'>x = 4 / 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החילוק לקבלת הנקודה היחידה בה הפרבולה נוגעת בציר.", 
                math_expression: "<div dir='ltr'>x = 2 &nbsp;&#10132;&nbsp; (2, 0)</div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">נקודה אחת בלבד:</bdi> (2, 0)"
    },

    // שאלה 24
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>מצב בו אין חיתוך עם ציר x (מרחפת):</strong><br>
        נתונה הפונקציה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> + 2x + 5</div>
        מה קורה כאשר אנו מנסים למצוא את נקודות החיתוך שלה עם ציר ה-x?`,
        options: [
            "<bdi dir=\"rtl\">נקבל שורש של מספר שלילי, ולכן אין לפרבולה חיתוך עם ציר ה-x</bdi>",
            "<bdi dir=\"rtl\">נקבל נקודה אחת בלבד ב-</bdi> (5, 0)",
            "<bdi dir=\"rtl\">נקבל שתי נקודות אפס חיוביות</bdi>",
            "<bdi dir=\"rtl\">הפרבולה חותכת את הציר רק במינוס חמש</bdi>"
        ],
        correctAnswer: 0,
        hint: "נסו לחשב את הביטוי שבתוך השורש (b בריבוע פחות 4ac). כלומר 2 בריבוע פחות 4 כפול 1 כפול 5. מה קורה כשמנסים להוציא שורש למספר שלילי במחשבון?",
        solution_steps: [
            { 
                verbal_explanation: "נציב אפס ב-y כדי לחפש חיתוך עם ציר אופקי, ונזהה את הפרמטרים.", 
                math_expression: "<div dir='ltr'>a = 1 , b = 2 , c = 5</div>" 
            },
            { 
                verbal_explanation: "נבדוק את ערכו של הביטוי מתחת לשורש בנוסחת השורשים.", 
                math_expression: "<div dir='ltr'>2<sup>2</sup> - 4 &times; 1 &times; 5</div>" 
            },
            { 
                verbal_explanation: "נבצע את פעולות החשבון.", 
                math_expression: "<div dir='ltr'>4 - 20 = -16</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא מספר שלילי. במתמטיקה ברמה זו, לא ניתן להוציא שורש ריבועי ממספר שלילי.", 
                math_expression: "<div dir='ltr'>&radic;(-16) &nbsp;&#10132;&nbsp; <bdi dir='rtl'>שגיאה</bdi></div>" 
            },
            { 
                verbal_explanation: "מבחינה גרפית, המשמעות היא שהפרבולה 'מרחפת' מעל הציר או מתחתיו ולעולם לא נוגעת בו.", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>אין חיתוך</bdi></div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">נקבל שורש של מספר שלילי, ולכן אין חיתוך</bdi>"
    },

    // שאלה 25
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>מציאת חיתוך עם ציר x בפרבולה חסרת c (הוצאת גורם משותף):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 7x</div>
        מהן נקודות החיתוך שלה עם ציר ה-x?`,
        options: [
            "(0, 0) <bdi dir=\"rtl\">וגם</bdi> (7, 0)",
            "(0, 0) <bdi dir=\"rtl\">וגם</bdi> (-7, 0)",
            "(7, 0) <bdi dir=\"rtl\">בלבד</bdi>",
            "(1, 0) <bdi dir=\"rtl\">וגם</bdi> (7, 0)"
        ],
        correctAnswer: 0,
        hint: "כאשר אין מספר חופשי (c=0), הפרבולה תמיד עוברת בראשית הצירים (0,0). הדרך המהירה לפתור היא להוציא את הנעלם המשותף (x) מחוץ לסוגריים: x כפול (x - 7) שווה לאפס.",
        solution_steps: [
            { 
                verbal_explanation: "נציב y שווה לאפס כדי למצוא את החיתוך עם ציר איקס.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - 7x = 0</div>" 
            },
            { 
                verbal_explanation: "מכיוון שאין מספר חופשי, אפשר לפתור מהר על ידי הוצאת גורם משותף (x) במקום להשתמש בנוסחה ארוכה.", 
                math_expression: "<div dir='ltr'>x &times; ( x - 7 ) = 0</div>" 
            },
            { 
                verbal_explanation: "כאשר מכפלה שווה לאפס, או שהחלק הראשון שווה לאפס, או שהחלק השני שווה לאפס. הפתרון הראשון הוא x=0.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 0</div>" 
            },
            { 
                verbal_explanation: "נשווה את תוכן הסוגריים לאפס כדי למצוא את הפתרון השני.", 
                math_expression: "<div dir='ltr'>x - 7 = 0 &nbsp;&#10132;&nbsp; x<sub>2</sub> = 7</div>" 
            },
            { 
                verbal_explanation: "קיבלנו שתי נקודות שבהן גובה הוואי הוא אפס.", 
                math_expression: "<div dir='ltr'>(0, 0) , (7, 0)</div>" 
            }
        ],
        final_answer: "(0, 0) <bdi dir=\"rtl\">וגם</bdi> (7, 0)"
    },

    // שאלה 26
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>מציאת חיתוך עם ציר x בפרבולה חסרת b (הוצאת שורש ישיר):</strong><br>
        נתונה הפונקציה הריבועית:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 16</div>
        מהן נקודות החיתוך שלה עם ציר ה-x?`,
        options: [
            "(4, 0) <bdi dir=\"rtl\">וגם</bdi> (-4, 0)",
            "(16, 0) <bdi dir=\"rtl\">וגם</bdi> (-16, 0)",
            "(4, 0) <bdi dir=\"rtl\">בלבד</bdi>",
            "(0, -16) <bdi dir=\"rtl\">בלבד</bdi>"
        ],
        correctAnswer: 0,
        hint: "כאשר אין את האיבר עם ה-x הרגיל (b=0), נציב y=0 ונקבל משוואה פשוטה: x בריבוע פחות 16 שווה 0. העבירו את ה-16 אגף והוציאו שורש. זכרו ששורש נותן גם פתרון חיובי וגם שלילי!",
        solution_steps: [
            { 
                verbal_explanation: "נציב y שווה אפס למציאת השורשים של המשוואה.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> - 16 = 0</div>" 
            },
            { 
                verbal_explanation: "نعביר את המספר החופשי (מינוס 16) לאגף הימני. הסימן שלו יתהפך לפלוס.", 
                math_expression: "<div dir='ltr'>x<sup>2</sup> = 16</div>" 
            },
            { 
                verbal_explanation: "כדי להיפטר מהריבוע ולמצוא את האיקסים, נוציא שורש ריבועי משני האגפים.", 
                math_expression: "<div dir='ltr'>x = &plusmn;&radic;16</div>" 
            },
            { 
                verbal_explanation: "חשוב לזכור שפעולת שורש על נעלם בריבוע מייצרת תמיד שתי תשובות אופציונליות: חיובית ושלילית.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 4 , x<sub>2</sub> = -4</div>" 
            },
            { 
                verbal_explanation: "אלו הן שתי נקודות החיתוך הסימטריות עם הציר.", 
                math_expression: "<div dir='ltr'>(4, 0) , (-4, 0)</div>" 
            }
        ],
        final_answer: "(4, 0) <bdi dir=\"rtl\">וגם</bdi> (-4, 0)"
    },

    // שאלה 27
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>חישוב מרחק בין שתי נקודות חיתוך:</strong><br>
        פרבולה חותכת את ציר ה-x בשתי הנקודות הבאות:<br>
        <strong>(-2, 0)</strong> ו- <strong>(4, 0)</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="80" x2="180" y2="80" stroke="#cbd5e1" stroke-width="2"/> <circle cx="60" cy="80" r="4" fill="#3b82f6"/>
            <text x="60" y="105" font-family="Arial" font-size="12" font-weight="bold">-2</text>
            <circle cx="140" cy="80" r="4" fill="#3b82f6"/>
            <text x="140" y="105" font-family="Arial" font-size="12" font-weight="bold">4</text>
            <path d="M 60,70 L 140,70" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="100" y="60" font-family="Arial" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">?</text>
        </svg>
        </div>
        מהו ה<strong>מרחק</strong> (אורך הקטע) בין שתי נקודות אלו?`,
        options: [
            "6 <bdi dir=\"rtl\">יחידות</bdi>",
            "2 <bdi dir=\"rtl\">יחידות</bdi>",
            "4 <bdi dir=\"rtl\">יחידות</bdi>",
            "8 <bdi dir=\"rtl\">יחידות</bdi>"
        ],
        correctAnswer: 0,
        hint: "מרחק אופקי על הציר מחושב פשוט על ידי חיסור ערך ה-x הקטן מתוך ערך ה-x הגדול. שימו לב לסימני המינוס: 4 פחות (מינוס 2).",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא מרחק אופקי בין שתי נקודות שיושבות על אותו קו, נתייחס רק לערכי האיקס שלהן.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 4 , x<sub>2</sub> = -2</div>" 
            },
            { 
                verbal_explanation: "נבצע תרגיל חיסור: ניקח את המספר הגדול (הימני) ונחסר ממנו את המספר הקטן (השמאלי).", 
                math_expression: "<div dir='ltr'>4 - (-2)</div>" 
            },
            { 
                verbal_explanation: "מינוס ומינוס הופכים לפלוס, ולכן הפעולה הופכת לחיבור.", 
                math_expression: "<div dir='ltr'>4 + 2</div>" 
            },
            { 
                verbal_explanation: "נבצע את החיבור ונגלה את אורך הקטע.", 
                math_expression: "<div dir='ltr'>6</div>" 
            }
        ],
        final_answer: "6 <bdi dir=\"rtl\">יחידות</bdi>"
    },

    // שאלה 28
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>מציאת ציר סימטריה מתוך שורשים:</strong><br>
        ידוע שפרבולה חותכת את ציר ה-x בנקודות x = 1 ו- x = 5.<br>
        היכן יעבור ציר הסימטריה של פרבולה זו?`,
        options: [
            "x = 3",
            "x = 4",
            "x = 6",
            "x = 2"
        ],
        correctAnswer: 0,
        hint: "ציר הסימטריה הוא המראה של הפרבולה, ולכן הוא תמיד עובר בדיוק באמצע בין נקודות האפס. חשבו את הממוצע של 1 ו-5.",
        solution_steps: [
            { 
                verbal_explanation: "נקודות החיתוך עם ציר איקס הן סימטריות לחלוטין משני צידי קודקוד הפרבולה.", 
                math_expression: "<div dir='ltr'>x<sub>1</sub> = 1 , x<sub>2</sub> = 5</div>" 
            },
            { 
                verbal_explanation: "כדי למצוא את האמצע המדויק, נחשב את הממוצע החשבוני של שתי הנקודות הללו. קודם נחבר אותן.", 
                math_expression: "<div dir='ltr'>1 + 5 = 6</div>" 
            },
            { 
                verbal_explanation: "נחלק את הסכום בשתיים כדי למצוא את המרכז.", 
                math_expression: "<div dir='ltr'>x = 6 / 2</div>" 
            },
            { 
                verbal_explanation: "התוצאה היא המיקום של ציר הסימטריה האנכי.", 
                math_expression: "<div dir='ltr'>x = 3</div>" 
            }
        ],
        final_answer: "x = 3"
    },

    // שאלה 29
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>קריאת חיתוכים מתוך גרף (זיהוי ההבדל):</strong><br>
        לפניכם גרף של פרבולה הפוגשת את הצירים ב-3 נקודות שונות: A, B, C.<br>
        הנקודות הן: (-2, 0) , (4, 0) , (0, 8).<br>
        איזו מהן היא <strong>נקודת החיתוך עם ציר ה-y</strong>?`,
        options: [
            "(0, 8)",
            "(-2, 0)",
            "(4, 0)",
            "<bdi dir=\"rtl\">כל הנקודות חותכות את ציר ה-y</bdi>"
        ],
        correctAnswer: 0,
        hint: "חישבו מה מאפיין כל ציר. אם נקודה יושבת על הקו האנכי (ציר ה-y), איזה ערך חייב להיות אפס? האיקס שלה או הוואי שלה? חפשו את הנקודה שהאיקס שלה הוא 0.",
        solution_steps: [
            { 
                verbal_explanation: "כדי למצוא חיתוך עם ציר אופקי (איקס), ה-y חייב להיות אפס.", 
                math_expression: "<div dir='ltr'>y = 0 &nbsp;&#10132;&nbsp; (-2, 0) , (4, 0)</div>" 
            },
            { 
                verbal_explanation: "לעומת זאת, כדי למצוא חיתוך עם הציר האנכי (וואי), ערך האיקס חייב להתאפס.", 
                math_expression: "<div dir='ltr'>x = 0</div>" 
            },
            { 
                verbal_explanation: "נסרוק את הנקודות הנתונות בשאלה ונחפש את הנקודה היחידה שמתחילה באפס.", 
                math_expression: "<div dir='ltr'>(0, 8)</div>" 
            },
            { 
                verbal_explanation: "לכן, הנקודה (0,8) היא נקודת החיתוך הבלעדית עם ציר ה-y.", 
                math_expression: "<div dir='ltr'>(0, 8)</div>" 
            }
        ],
        final_answer: "(0, 8)"
    },

    // שאלה 30
    {
        topic: "bagrut_35372",
        subTopic: "חיתוך עם הצירים",
        question_text: `<strong>השוואת נקודות חיתוך בין פרבולות:</strong><br>
        נתונות שתי פונקציות ריבועיות:<br>
        הראשונה: <span dir="ltr" style="font-weight:bold;">y = 2x<sup>2</sup> + 3x - 5</span><br>
        השנייה: <span dir="ltr" style="font-weight:bold;">y = -x<sup>2</sup> + x - 5</span><br>
        מה ניתן לומר בוודאות על נקודת החיתוך שלהן עם ציר ה-y?`,
        options: [
            "<bdi dir=\"rtl\">הן חותכות את ציר ה-y באותה נקודה בדיוק</bdi>",
            "<bdi dir=\"rtl\">הראשונה חותכת גבוה יותר מהשנייה</bdi>",
            "<bdi dir=\"rtl\">השנייה חותכת גבוה יותר מהראשונה</bdi>",
            "<bdi dir=\"rtl\">אף אחת מהן לא חותכת את ציר ה-y</bdi>"
        ],
        correctAnswer: 0,
        hint: "הסתכלו על המספר החופשי (c) בכל אחת מהפונקציות. הוא זה שקובע היכן הפרבולה תחתוך את ציר ה-y.",
        solution_steps: [
            { 
                verbal_explanation: "נקודת החיתוך עם ציר ה-y נקבעת אך ורק על ידי הפרמטר c בכל פונקציה.", 
                math_expression: "<div dir='ltr'>c</div>" 
            },
            { 
                verbal_explanation: "נזהה את המספר החופשי בפונקציה הראשונה. זהו המספר שבקצה ימין.", 
                math_expression: "<div dir='ltr'>c<sub>1</sub> = -5</div>" 
            },
            { 
                verbal_explanation: "נזהה את המספר החופשי גם בפונקציה השנייה.", 
                math_expression: "<div dir='ltr'>c<sub>2</sub> = -5</div>" 
            },
            { 
                verbal_explanation: "מכיוון שהמספרים זהים לחלוטין, שתי הפרבולות עוברות דרך אותה נקודה בדיוק על הציר האנכי.", 
                math_expression: "<div dir='ltr'>-5 = -5</div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">הן חותכות את ציר ה-y באותה נקודה בדיוק</bdi>"
    },

    // ---------------------------------------------------------
    // תת נושא 4: תחומי חיוביות, שליליות, עלייה וירידה (שאלות 31-40)
    // ---------------------------------------------------------

    // שאלה 31
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>הבנת תחום ירידה בפרבולה מחייכת:</strong><br>
        נתונה פרבולה 'מחייכת' (a חיובי).<br>
        קודקוד הפרבולה נמצא בנקודה שבה <strong>x = 3</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 150" width="100%" height="150" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <path d="M 50,40 Q 100,160 150,40" fill="none" stroke="#22c55e" stroke-width="3"/>
            <line x1="100" y1="20" x2="100" y2="140" stroke="#0f172a" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="105" y="15" font-family="Arial" font-size="12" font-weight="bold">x=3</text>
            <path d="M 60,65 L 75,100 L 70,105" fill="none" stroke="#ef4444" stroke-width="3"/> <polygon points="75,100 80,90 70,95" fill="#ef4444"/>
        </svg>
        </div>
        מהו <strong>תחום הירידה</strong> של הפונקציה?`,
        options: [
            "x < 3",
            "x > 3",
            "x = 3",
            "<bdi dir=\"rtl\">הפונקציה תמיד עולה</bdi>"
        ],
        correctAnswer: 0,
        hint: "דמיינו שאתם קוראים את הגרף משמאל לימין כמו בעברית אנגלית (או כמו מכונית שנוסעת על הקו). בצד השמאלי של ציר הסימטריה (לפני 3), הרכב נוסע למטה. בצד הימני (אחרי 3), הוא מטפס למעלה.",
        solution_steps: [
            { 
                verbal_explanation: "פרבולה מחייכת היא בצורת קערה. היא יורדת בצד השמאלי שלה ועולה בצד הימני שלה.", 
                math_expression: "<div dir='ltr'>&cup;</div>" 
            },
            { 
                verbal_explanation: "נקודת האמצע, שמשנה את הכיוון מירידה לעלייה, היא ה-x של הקודקוד, שניתן לנו כ-3.", 
                math_expression: "<div dir='ltr'>x = 3</div>" 
            },
            { 
                verbal_explanation: "כל המספרים שנמצאים משמאל לקודקוד נמצאים באזור שבו הפונקציה יורדת. במתמטיקה אומרים שזה קורה כש-x קטן מ-3.", 
                math_expression: "<div dir='ltr'>x < 3</div>" 
            }
        ],
        final_answer: "x < 3"
    },

    // שאלה 32
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>הבנת תחום עלייה בפרבולה בוכה:</strong><br>
        נתונה פרבולה 'בוכה' (a שלילי).<br>
        קודקוד הפרבולה נמצא בנקודה שבה <strong>x = -1</strong>.<br>
        מהו <strong>תחום העלייה</strong> של הפונקציה?`,
        options: [
            "x < -1",
            "x > -1",
            "x = -1",
            "<bdi dir=\"rtl\">הפונקציה תמיד יורדת</bdi>"
        ],
        correctAnswer: 0,
        hint: "בפרבולה בוכה (צורת הר), המכונית הדמיונית שלנו מטפסת במעלה ההר בצד השמאלי שלו, עד שהיא מגיעה לפסגה ב-x=-1. לכן, היא עולה כל עוד x קטן ממינוס 1.",
        solution_steps: [
            { 
                verbal_explanation: "פרבולה בוכה היא בצורת הר. היא מטפסת ועולה בצד השמאלי שלה, ויורדת בצד הימני שלה.", 
                math_expression: "<div dir='ltr'>&cap;</div>" 
            },
            { 
                verbal_explanation: "הפסגה שבה הכיוון מתהפך היא נקודת הקודקוד, הנתונה במינוס אחת.", 
                math_expression: "<div dir='ltr'>x = -1</div>" 
            },
            { 
                verbal_explanation: "תחום העלייה נמצא לפני ההגעה לפסגה, כלומר בצד שמאל של ציר המספרים, היכן שערכי האיקס קטנים מהקודקוד.", 
                math_expression: "<div dir='ltr'>x < -1</div>" 
            }
        ],
        final_answer: "x < -1"
    },

    // שאלה 33
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>תחום שליליות מתוך שורשים (פרבולה מחייכת):</strong><br>
        גרף של פרבולה 'מחייכת' חותך את ציר ה-x בנקודות <strong>x = 2</strong> ו- <strong>x = 6</strong>.<br>
        <div style="text-align:center; margin-top:15px; margin-bottom:15px;">
        <svg viewBox="0 0 200 120" width="100%" height="120" style="max-width:200px; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px;">
            <line x1="20" y1="50" x2="180" y2="50" stroke="#cbd5e1" stroke-width="2"/> <path d="M 40,20 Q 100,160 160,20" fill="none" stroke="#22c55e" stroke-width="2"/>
            <circle cx="65" cy="50" r="4" fill="#0f172a"/>
            <text x="65" y="40" font-family="Arial" font-size="12" font-weight="bold">2</text>
            <circle cx="135" cy="50" r="4" fill="#0f172a"/>
            <text x="135" y="40" font-family="Arial" font-size="12" font-weight="bold">6</text>
            <path d="M 65,50 Q 100,130 135,50" fill="none" stroke="#ef4444" stroke-width="4"/>
        </svg>
        </div>
        באיזה תחום הפונקציה <strong>שלילית</strong> (מתחת לציר ה-x)?`,
        options: [
            "2 < x < 6",
            "x < 2 <bdi dir=\"rtl\">או</bdi> x > 6",
            "x > 2",
            "x < 6"
        ],
        correctAnswer: 0,
        hint: "כשפרבולה 'מחייכת' פוגשת את הציר בשתי נקודות, הבטן שלה (החלק התחתון) צוללת מתחת לציר, וזה קורה בדיוק בין שתי נקודות האפס. כלומר, איקס נמצא בין 2 ל-6.",
        solution_steps: [
            { 
                verbal_explanation: "פונקציה נחשבת שלילית כאשר הגרף שלה משורטט פיזית מתחת לציר האופקי.", 
                math_expression: "<div dir='ltr'>y < 0</div>" 
            },
            { 
                verbal_explanation: "בפרבולה מחייכת, החלק שצולל מתחת לציר הוא הבטן המרכזית שלה.", 
                math_expression: "<div dir='ltr'>&cup;</div>" 
            },
            { 
                verbal_explanation: "הבטן המרכזית נכלאת וכלואה בין שתי נקודות החיתוך הידועות לנו (2 ו-6).", 
                math_expression: "<div dir='ltr'>2 , 6</div>" 
            },
            { 
                verbal_explanation: "לכן, התחום השלילי הוא כל המספרים שגדולים משתיים אבל עדיין קטנים משש.", 
                math_expression: "<div dir='ltr'>2 < x < 6</div>" 
            }
        ],
        final_answer: "2 < x < 6"
    },

    // שאלה 34
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>תחום חיוביות מתוך שורשים (פרבולה בוכה):</strong><br>
        גרף של פרבולה 'בוכה' (פונה מטה) חותך את ציר ה-x בנקודות <strong>x = -2</strong> ו- <strong>x = 4</strong>.<br>
        באיזה תחום הפונקציה <strong>חיובית</strong> (מעל ציר ה-x)?`,
        options: [
            "-2 < x < 4",
            "x < -2 <bdi dir=\"rtl\">או</bdi> x > 4",
            "x > 4",
            "x < -2"
        ],
        correctAnswer: 0,
        hint: "כשפרבולה 'בוכה' (צורת הר) חוצה את הציר, החלק העליון שלה - הפסגה שמעל לאדמה - כלוא בדיוק בין שתי נקודות האפס.",
        solution_steps: [
            { 
                verbal_explanation: "פונקציה חיובית היא כל חלק בגרף שמופיע מעל ציר האיקס.", 
                math_expression: "<div dir='ltr'>y > 0</div>" 
            },
            { 
                verbal_explanation: "בפרבולה בוכה (צורת כיפה), החלק שצץ מעל פני השטח הוא החלק המרכזי שבין שתי הרגליים שלה.", 
                math_expression: "<div dir='ltr'>&cap;</div>" 
            },
            { 
                verbal_explanation: "הרגליים חותכות במינוס שתיים ובארבע.", 
                math_expression: "<div dir='ltr'>-2 , 4</div>" 
            },
            { 
                verbal_explanation: "לכן הפונקציה חיובית כאשר איקס נמצא 'כלוא' בין שני המספרים הללו.", 
                math_expression: "<div dir='ltr'>-2 < x < 4</div>" 
            }
        ],
        final_answer: "-2 < x < 4"
    },

    // שאלה 35
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>חישוב תחום חיוביות מלא ללא ציור (פרבולה מחייכת):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 8x + 15</div>
        ידוע שנקודות האפס (חיתוך x) שלה הן <strong>x = 3</strong> ו- <strong>x = 5</strong>.<br>
        מהו <strong>תחום החיוביות</strong> שלה?`,
        options: [
            "x < 3 <bdi dir=\"rtl\">או</bdi> x > 5",
            "3 < x < 5",
            "x < -3 <bdi dir=\"rtl\">או</bdi> x > -5",
            "x > 3 <bdi dir=\"rtl\">וגם</bdi> x < 5"
        ],
        correctAnswer: 0,
        hint: "הפרבולה היא מחייכת (כי a חיובי). במחייכת, הבטן יורדת מתחת לציר בין המספרים, והזרועות עולות מעל הציר בצדדים (קטן מהקטן או גדול מהגדול).",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את צורת הפרבולה. המקדם של איקס בריבוע חיובי, אז היא מחייכת.", 
                math_expression: "<div dir='ltr'>a = 1 > 0</div>" 
            },
            { 
                verbal_explanation: "בפרבולה מחייכת שיש לה שתי נקודות חיתוך, הזרועות שעולות למעלה מעל הציר (האזור החיובי) תמיד בורחות החוצה לשוליים.", 
                math_expression: "<div dir='ltr'>y > 0</div>" 
            },
            { 
                verbal_explanation: "השוליים מוגדרים כך: או שאיקס קטן מהמספר השמאלי יותר (הקטן), או שהוא גדול מהמספר הימני יותר (הגדול).", 
                math_expression: "<div dir='ltr'>3 , 5</div>" 
            },
            { 
                verbal_explanation: "נרשום את שני התנאים יחד עם המילה 'או' ביניהם.", 
                math_expression: "<div dir='ltr'>x < 3 &nbsp; <bdi dir='rtl'>או</bdi> &nbsp; x > 5</div>" 
            }
        ],
        final_answer: "x < 3 <bdi dir=\"rtl\">או</bdi> x > 5"
    },

    // שאלה 36
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>חישוב תחום שליליות מלא ללא ציור (פרבולה בוכה):</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = -x<sup>2</sup> + 6x - 5</div>
        נקודות האפס שלה הן <strong>x = 1</strong> ו- <strong>x = 5</strong>.<br>
        מהו <strong>תחום השליליות</strong> שלה?`,
        options: [
            "x < 1 <bdi dir=\"rtl\">או</bdi> x > 5",
            "1 < x < 5",
            "x > 1 <bdi dir=\"rtl\">וגם</bdi> x < 5",
            "x < -1 <bdi dir=\"rtl\">או</bdi> x > -5"
        ],
        correctAnswer: 0,
        hint: "הפרבולה היא בוכה (a שלילי), כמו הר. החלק שמעל האדמה (הפסגה) הוא בין 1 ל-5. אבל שאלו אותנו על תחום *השליליות* (מתחת לאדמה). אלו הן שתי הזרועות שנופלות כלפי מטה בצדדים החיצוניים.",
        solution_steps: [
            { 
                verbal_explanation: "המקדם המוביל שלילי, ולכן הפרבולה בוכה (צורת הר שנופל משני צדדיו).", 
                math_expression: "<div dir='ltr'>a = -1 < 0</div>" 
            },
            { 
                verbal_explanation: "תחום שלילי מבקש למצוא היכן הגרף נמוך מגובה אפס.", 
                math_expression: "<div dir='ltr'>y < 0</div>" 
            },
            { 
                verbal_explanation: "בהר, החלק ששוקע מתחת לאדמה נמצא הרחק משני צידי הבסיס (1 ו-5).", 
                math_expression: "<div dir='ltr'>1 , 5</div>" 
            },
            { 
                verbal_explanation: "כלומר, זה קורה לפני הנקודה 1, או אחרי הנקודה 5.", 
                math_expression: "<div dir='ltr'>x < 1 &nbsp; <bdi dir='rtl'>או</bdi> &nbsp; x > 5</div>" 
            }
        ],
        final_answer: "x < 1 <bdi dir=\"rtl\">או</bdi> x > 5"
    },

    // שאלה 37
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>מציאת תחום עלייה בעזרת חישוב הקודקוד:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> - 10x + 20</div>
        מצאו את הקודקוד בעצמכם וקבעו מהו <strong>תחום העלייה</strong> של הפונקציה.`,
        options: [
            "x > 5",
            "x < 5",
            "x > 10",
            "x < -5"
        ],
        correctAnswer: 0,
        hint: "שלב א: האם היא עולה מימין לקודקוד או משמאל? (זו פרבולה מחייכת, אז היא עולה מימין, איקס גדול מ...). שלב ב: חשבו את ה-x של הקודקוד (מינוס b חלקי שתי a).",
        solution_steps: [
            { 
                verbal_explanation: "נבדוק את סוג הפרבולה. מכיוון שהמקדם חיובי, היא מחייכת. פרבולה כזו תמיד עולה בצד הימני שלה, כלומר מתי שאיקס גדול מהקודקוד.", 
                math_expression: "<div dir='ltr'>a = 1 > 0 &nbsp;&#10132;&nbsp; <bdi dir='rtl'>עלייה:</bdi> x > x<sub>v</sub></div>" 
            },
            { 
                verbal_explanation: "כעת עלינו למצוא את מיקום הקודקוד. נשתמש בנוסחה ונזהה שהמקדם בי הוא מינוס 10.", 
                math_expression: "<div dir='ltr'>x = -(-10) / ( 2 &times; 1 )</div>" 
            },
            { 
                verbal_explanation: "המינוסים מבטלים זה את זה, ונשארנו עם עשר חלקי שתיים.", 
                math_expression: "<div dir='ltr'>x = 10 / 2 = 5</div>" 
            },
            { 
                verbal_explanation: "הקודקוד נמצא ב-5, והעלייה היא מצידו הימני.", 
                math_expression: "<div dir='ltr'>x > 5</div>" 
            }
        ],
        final_answer: "x > 5"
    },

    // שאלה 38
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>הבנת תחום חיוביות בפונקציה שמרחפת מעל הציר:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = x<sup>2</sup> + 4</div>
        הקודקוד שלה הוא בנקודה (0, 4) והיא פרבולה 'מחייכת' (a חיובי).<br>
        עבור אילו ערכי x הפונקציה חיובית (מעל גובה אפס)?`,
        options: [
            "<bdi dir=\"rtl\">עבור כל x</bdi>",
            "x > 4",
            "x > 0",
            "<bdi dir=\"rtl\">אף x</bdi>"
        ],
        correctAnswer: 0,
        hint: "אם הנקודה הכי נמוכה של הפונקציה (הקודקוד) יושבת בגובה של פלוס 4, ומשם הפונקציה רק ממשיכה לחייך ולעלות כלפי מעלה... האם יש חלק כלשהו בגרף שיירד מתחת לאפס?",
        solution_steps: [
            { 
                verbal_explanation: "נתון לנו שהקודקוד, שהוא הנקודה הכי נמוכה (מינימום) של פרבולה מחייכת זו, נמצא בגובה של 4 יחידות.", 
                math_expression: "<div dir='ltr'>Min: y = 4</div>" 
            },
            { 
                verbal_explanation: "נקודה זו כבר נמצאת גבוה מעל ציר ה-x.", 
                math_expression: "<div dir='ltr'>4 > 0</div>" 
            },
            { 
                verbal_explanation: "מכיוון שמשם הגרף רק מטפס מעלה אל האינסוף, כל נקודה ונקודה על הגרף לעולם תהיה גבוהה מאפס חיובית.", 
                math_expression: "<div dir='ltr'>y > 0</div>" 
            },
            { 
                verbal_explanation: "לכן, אין שום מגבלה, וזה נכון תמיד, לכל מספר שנציב.", 
                math_expression: "<div dir='ltr'><bdi dir='rtl'>כל</bdi> x</div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">עבור כל x</bdi>"
    },

    // שאלה 39
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>מציאת קודקוד מתוך תחומי העלייה והירידה:</strong><br>
        על פונקציה ריבועית ידוע הנתון הבא:<br>
        היא במגמת <strong>ירידה</strong> עבור x < 4, ובמגמת <strong>עלייה</strong> עבור x > 4.<br>
        מה ניתן להסיק מכך בוודאות על הפונקציה?`,
        options: [
            "<bdi dir=\"rtl\">משוואת ציר הסימטריה שלה היא</bdi> x = 4",
            "<bdi dir=\"rtl\">היא חותכת את ציר ה-x בנקודה</bdi> (4,0)",
            "<bdi dir=\"rtl\">היא פרבולה 'בוכה'</bdi>",
            "<bdi dir=\"rtl\">היא לא חותכת את ציר ה-y</bdi>"
        ],
        correctAnswer: 0,
        hint: "הנקודה שבה הפונקציה מפסיקה לרדת ומתחילה לעלות היא בדיוק נקודת הסיבוב שלה - הקודקוד! המיקום האופקי (האיקס) שבו הכל מתהפך קובע גם היכן עובר ציר הסימטריה המרכזי.",
        solution_steps: [
            { 
                verbal_explanation: "מתוך הטקסט ניתן לראות שהמספר 4 הוא נקודת התפר שמפרידה בין אזור הירידה לאזור העלייה.", 
                math_expression: "<div dir='ltr'>x = 4</div>" 
            },
            { 
                verbal_explanation: "הנקודה היחידה בגרף של פרבולה שמסמנת שינוי כיוון היא נקודת הקודקוד. לכן הקודקוד נמצא ב-x=4.", 
                math_expression: "<div dir='ltr'>Vertex: x = 4</div>" 
            },
            { 
                verbal_explanation: "ציר הסימטריה הוא קו שחוצה את הפרבולה בדיוק בקודקוד. לכן משוואתו שווה ל-x של הקודקוד.", 
                math_expression: "<div dir='ltr'>x = 4</div>" 
            }
        ],
        final_answer: "<bdi dir=\"rtl\">משוואת ציר הסימטריה היא</bdi> x = 4"
    },

    // שאלה 40
    {
        topic: "bagrut_35372",
        subTopic: "תחומי חיוביות ושליליות, עלייה וירידה",
        question_text: `<strong>שאלת סיכום - שילוב הבנה ללא שרטוט:</strong><br>
        נתונה הפונקציה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.4em; margin: 10px 0; text-align:center; color:#0f172a;">y = -x<sup>2</sup> + 9</div>
        קודקוד הפרבולה הוא (0, 9).<br>
        נקודות החיתוך עם ציר x הן (-3, 0) ו- (3, 0).<br>
        על סמך נתונים אלו בלבד, מהו <strong>תחום החיוביות</strong> של הפונקציה?`,
        options: [
            "-3 < x < 3",
            "x < -3 <bdi dir=\"rtl\">או</bdi> x > 3",
            "x < 0",
            "0 < x < 9"
        ],
        correctAnswer: 0,
        hint: "זהו משחק דמיון. הפרבולה בוכה (כי יש מינוס לפני איקס בריבוע). היא יושבת עם הקודקוד למעלה (בגובה 9), והרגליים חותכות למטה ב-3 ומינוס 3. היכן ממוקם החלק שמעל הקרקע (החיובי)? בין שתי הרגליים.",
        solution_steps: [
            { 
                verbal_explanation: "נזהה את סוג הפרבולה. המקדם של האיקס הריבועי שלילי ולכן היא צורת כיפה שבוכה.", 
                math_expression: "<div dir='ltr'>a = -1 < 0 &nbsp;&#10132;&nbsp; &cap;</div>" 
            },
            { 
                verbal_explanation: "חיוביות פירושה מתי הגרף מטפס מעל קו הקרקע של ציר איקס.", 
                math_expression: "<div dir='ltr'>y > 0</div>" 
            },
            { 
                verbal_explanation: "בפרבולה בוכה, החלק העליון הוא זה ש'כלוא' בין שתי נקודות החיתוך שניתנו לנו (השורשים).", 
                math_expression: "<div dir='ltr'>-3 , 3</div>" 
            },
            { 
                verbal_explanation: "נרשום את התחום שסוגר את איקס בין שני הערכים הללו.", 
                math_expression: "<div dir='ltr'>-3 < x < 3</div>" 
            }
        ],
        final_answer: "-3 < x < 3"
    }
];