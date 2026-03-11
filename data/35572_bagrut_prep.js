const questionsDB = [
    // ========================================================================
    // שאלון 35582 (5 יח"ל) | פרימיום - פתרונות מספריים נקיים ללא אנגלית
    // ========================================================================

    // שאלה 1 - וקטורים (מכפלה סקלרית מספרית נטו)
    {
        topic: "bagrut_35582",
        subTopic: "וקטורים",
        question_text: `<strong>חישוב זווית בין וקטורים:</strong><br>
        נתונים שני וקטורים במרחב התלת-ממדי:<br>
        הוקטור הראשון: <span dir="ltr">(2, 1, 2)</span><br>
        הוקטור השני: <span dir="ltr">(3, -4, 0)</span><br>
        <div style="text-align:center;">
        <svg viewBox="0 0 200 150" width="100%" height="130" style="max-width:200px; background:#fff; margin-top:10px;">
            <line x1="20" y1="130" x2="180" y2="130" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="50" y1="140" x2="50" y2="10" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="50" y1="130" x2="150" y2="40" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="150,40 140,45 145,55" fill="#3b82f6"/>
            <line x1="50" y1="130" x2="170" y2="100" stroke="#ef4444" stroke-width="2"/>
            <polygon points="170,100 160,95 162,107" fill="#ef4444"/>
            <path d="M 80,103 Q 90,110 85,120" fill="none" stroke="#0f172a" stroke-width="1.5"/>
        </svg>
        </div>
        א. חשבו את המכפלה הסקלרית של שני הוקטורים.<br>
        ב. חשבו את קוסינוס הזווית שביניהם.`,
        options: [
            "א. 2 | ב. 2/15",
            "א. 0 | ב. 0",
            "א. 4 | ב. 4/15",
            "א. -2 | ב. -2/15"
        ],
        correctAnswer: 0,
        hint: "מכפלה סקלרית היא סכום מכפלות הרכיבים התואמים (איקס כפול איקס, ועוד וואי כפול וואי וכו'). למציאת קוסינוס הזווית, חלקו את התוצאה באורך של כל אחד מהוקטורים (שורש סכום הריבועים).",
        solution_steps: [
            { 
                verbal_explanation: "נכפול את הרכיבים התואמים של שני הוקטורים זה בזה ונחבר אותם.", 
                math_expression: "<div dir='ltr'>2 &times; 3 + 1 &times; (-4) + 2 &times; 0</div>" 
            },
            { 
                verbal_explanation: "נחשב את התוצאה הסופית של המכפלה הסקלרית.", 
                math_expression: "<div dir='ltr'>6 - 4 + 0 = 2</div>" 
            },
            { 
                verbal_explanation: "נחשב את האורך של הוקטור הראשון בעזרת שורש של סכום הריבועים.", 
                math_expression: "<div dir='ltr'>&radic;(2<sup>2</sup> + 1<sup>2</sup> + 2<sup>2</sup>) = &radic;9 = 3</div>" 
            },
            { 
                verbal_explanation: "נחשב את האורך של הוקטור השני.", 
                math_expression: "<div dir='ltr'>&radic;(3<sup>2</sup> + (-4)<sup>2</sup> + 0<sup>2</sup>) = &radic;25 = 5</div>" 
            },
            { 
                verbal_explanation: "נחלק את המכפלה הסקלרית במכפלת האורכים לקבלת קוסינוס הזווית.", 
                math_expression: "<div dir='ltr'>2 / (3 &times; 5) = 2 / 15</div>" 
            }
        ],
        final_answer: "א. 2 | ב. 2/15"
    },

    // שאלה 2 - חדו"א (נקודת קיצון - פתרון אלגברי נקי)
    {
        topic: "bagrut_35582",
        subTopic: "חדו\"א",
        question_text: `<strong>מציאת נקודת מינימום:</strong><br>
        נתונה הפונקציה הבאה (עבור ערכים חיוביים בלבד):<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin: 10px 0;">y = x<sup>2</sup> - 8 ln(x)</div>
        <div style="text-align:center;">
        <svg viewBox="0 0 200 150" width="100%" height="130" style="max-width:200px; background:#fff; margin-top:10px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="40" y1="10" x2="40" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
            <path d="M 45,10 Q 60,110 100,110 T 180,20" fill="none" stroke="#ef4444" stroke-width="2"/>
            <circle cx="100" cy="110" r="4" fill="#0f172a"/>
        </svg>
        </div>
        מצאו את השיעורים המדויקים של נקודת המינימום של הפונקציה.`,
        options: [
            "(2 , 4 - 8 ln(2))",
            "(4 , 16 - 8 ln(4))",
            "(2 , 0)",
            "(1 , 1)"
        ],
        correctAnswer: 0,
        hint: "גזרו את הפונקציה (הנגזרת של איקס בריבוע היא 2 איקס, והנגזרת של לאן היא 1 חלקי איקס). השוו את הנגזרת לאפס, הכפילו במכנה ופתרו את המשוואה. בסוף הציבו חזרה.",
        solution_steps: [
            { 
                verbal_explanation: "נגזור את איברי הפונקציה ונשווה לאפס למציאת נקודת הקיצון.", 
                math_expression: "<div dir='ltr'>2x - 8 / x = 0</div>" 
            },
            { 
                verbal_explanation: "נכפיל את כל המשוואה במשתנה שבמכנה כדי להיפטר מהשבר.", 
                math_expression: "<div dir='ltr'>2x<sup>2</sup> - 8 = 0</div>" 
            },
            { 
                verbal_explanation: "נעביר אגף ונחלק בשתיים.", 
                math_expression: "<div dir='ltr'>2x<sup>2</sup> = 8 &nbsp;&#10132;&nbsp; x<sup>2</sup> = 4</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש. נבחר רק בתוצאה החיובית בהתאם לתחום ההגדרה של הלוגריתם.", 
                math_expression: "<div dir='ltr'>x = 2</div>" 
            },
            { 
                verbal_explanation: "נציב את המספר בפונקציה המקורית לקבלת הגובה.", 
                math_expression: "<div dir='ltr'>2<sup>2</sup> - 8 ln(2) = 4 - 8 ln(2)</div>" 
            }
        ],
        final_answer: "(2 , 4 - 8 ln(2))"
    },

    // שאלה 3 - מספרים מרוכבים (אלגברה נטו)
    {
        topic: "bagrut_35582",
        subTopic: "מספרים מרוכבים",
        question_text: `<strong>אלגברה של מספרים מרוכבים:</strong><br>
        נתונה המשוואה הבאה שבה x ו-y הם מספרים ממשיים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin: 10px 0;">(2 + i)(x + yi) = 5 + 5i</div>
        <div style="text-align:center;">
        <svg viewBox="0 0 200 120" width="100%" height="100" style="max-width:200px; background:#fff; margin-top:10px;">
            <rect x="20" y="20" width="160" height="60" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="55" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle">x = ? , y = ?</text>
        </svg>
        </div>
        פתרו את המשוואה ומצאו את הערכים של x ושל y.`,
        options: [
            "x = 3 , y = 1",
            "x = 2 , y = 2",
            "x = 1 , y = 3",
            "x = 5 , y = 0"
        ],
        correctAnswer: 0,
        hint: "פתחו את הסוגריים באגף השמאלי (כפל רגיל, וזכרו ש- i בריבוע שווה למינוס אחת). רכזו את כל האיברים ללא i יחד, ואת כל האיברים עם i יחד. השוו למספרים המקבילים באגף הימני.",
        solution_steps: [
            { 
                verbal_explanation: "נפתח את הסוגריים באגף השמאלי בעזרת כפל איבר באיבר.", 
                math_expression: "<div dir='ltr'>2x + 2yi + xi + yi<sup>2</sup> = 5 + 5i</div>" 
            },
            { 
                verbal_explanation: "נחליף את הריבוע של המדומה במינוס אחת ונסדר את המשוואה לקבוצות.", 
                math_expression: "<div dir='ltr'>(2x - y) + i(2y + x) = 5 + 5i</div>" 
            },
            { 
                verbal_explanation: "נשווה את החלק הממשי (ללא i) משני האגפים זה לזה.", 
                math_expression: "<div dir='ltr'>2x - y = 5</div>" 
            },
            { 
                verbal_explanation: "נשווה את החלק המדומה (המקדם של i) משני האגפים.", 
                math_expression: "<div dir='ltr'>x + 2y = 5 &nbsp;&#10132;&nbsp; x = 5 - 2y</div>" 
            },
            { 
                verbal_explanation: "נציב את הביטוי במשוואה הראשונה ונפתור עבור המשתנה הראשון.", 
                math_expression: "<div dir='ltr'>2(5 - 2y) - y = 5 &nbsp;&#10132;&nbsp; 10 - 5y = 5 &nbsp;&#10132;&nbsp; 5y = 5 &nbsp;&#10132;&nbsp; y = 1</div>" 
            },
            { 
                verbal_explanation: "נציב חזרה ונמצא את המשתנה השני.", 
                math_expression: "<div dir='ltr'>x = 5 - 2(1) = 3</div>" 
            }
        ],
        final_answer: "x = 3 , y = 1"
    },

    // שאלה 4 - גאומטריה אנליטית (אליפסה מספרית)
    {
        topic: "bagrut_35582",
        subTopic: "גאומטריה אנליטית",
        question_text: `<strong>חיתוך אליפסה עם צירים:</strong><br>
        נתונה משוואת אליפסה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin: 10px 0;">x<sup>2</sup> / 25 + y<sup>2</sup> / 9 = 1</div>
        <div style="text-align:center;">
        <svg viewBox="0 0 200 150" width="100%" height="130" style="max-width:200px; background:#fff; margin-top:10px;">
            <line x1="20" y1="75" x2="180" y2="75" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="100" y1="10" x2="100" y2="140" stroke="#94a3b8" stroke-width="1.5"/>
            <ellipse cx="100" cy="75" rx="60" ry="40" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="100" cy="35" r="4" fill="#ef4444"/>
            <circle cx="100" cy="115" r="4" fill="#ef4444"/>
        </svg>
        </div>
        מצאו את נקודות החיתוך של האליפסה עם ציר ה-y.`,
        options: [
            "(0 , 3) , (0 , -3)",
            "(0 , 5) , (0 , -5)",
            "(0 , 9) , (0 , -9)",
            "(3 , 0) , (-3 , 0)"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא חיתוך עם ציר y, הציבו אפס במקום המשתנה x במשוואה ופתרו. הכפילו את המשוואה במכנה של y והוציאו שורש.",
        solution_steps: [
            { 
                verbal_explanation: "נציב אפס במקום המשתנה האופקי כדי למצוא את החיתוך האנכי.", 
                math_expression: "<div dir='ltr'>0<sup>2</sup> / 25 + y<sup>2</sup> / 9 = 1</div>" 
            },
            { 
                verbal_explanation: "השבר הראשון מתאפס לחלוטין.", 
                math_expression: "<div dir='ltr'>0 + y<sup>2</sup> / 9 = 1</div>" 
            },
            { 
                verbal_explanation: "נכפיל את שני האגפים במכנה התחתון.", 
                math_expression: "<div dir='ltr'>y<sup>2</sup> = 9</div>" 
            },
            { 
                verbal_explanation: "נוציא שורש ריבועי לקבלת שתי התוצאות.", 
                math_expression: "<div dir='ltr'>y = 3 , y = -3</div>" 
            },
            { 
                verbal_explanation: "נרשום את התוצאות כנקודות מלאות על מערכת הצירים.", 
                math_expression: "<div dir='ltr'>(0 , 3) , (0 , -3)</div>" 
            }
        ],
        final_answer: "(0 , 3) , (0 , -3)"
    },

    // שאלה 5 - חדו"א (אינטגרל מספרי נקי)
    {
        topic: "bagrut_35582",
        subTopic: "חדו\"א",
        question_text: `<strong>חישוב אינטגרל מסוים:</strong><br>
        חשבו את השטח הכלוא בין הפונקציה הבאה לציר האופקי, בין הנקודה שבה x=0 לנקודה שבה x=1:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin: 10px 0;">y = e<sup>2x</sup> - 1</div>
        <div style="text-align:center;">
        <svg viewBox="0 0 200 150" width="100%" height="130" style="max-width:200px; background:#fff; margin-top:10px;">
            <line x1="20" y1="120" x2="180" y2="120" stroke="#94a3b8" stroke-width="1.5"/>
            <line x1="40" y1="140" x2="40" y2="10" stroke="#94a3b8" stroke-width="1.5"/>
            <path d="M 40,120 Q 100,110 140,20" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <path d="M 40,120 Q 100,110 140,20 L 140,120 Z" fill="rgba(34,197,94,0.2)"/>
            <line x1="140" y1="20" x2="140" y2="120" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="135" y="135" font-family="Arial" font-size="12">1</text>
        </svg>
        </div>`,
        options: [
            "0.5e² - 1.5",
            "0.5e² - 1",
            "e² - 1",
            "0.5e²"
        ],
        correctAnswer: 0,
        hint: "בצעו אינטגרל לפונקציה. הנגזרת הפוכה של אי בחזקת שני איקס היא חצי כפול אי בחזקת שני איקס. הציבו את הגבול העליון ואז את התחתון (אפס) וחסרו.",
        solution_steps: [
            { 
                verbal_explanation: "נרשום את תבנית האינטגרל בתחום הנתון.", 
                math_expression: "<div dir='ltr'>&int; (e<sup>2x</sup> - 1) dx</div>" 
            },
            { 
                verbal_explanation: "נמצא את הפונקציה הקדומה על ידי חלוקה במקדם החזקה והוספת משתנה למספר הקבוע.", 
                math_expression: "<div dir='ltr'>0.5e<sup>2x</sup> - x</div>" 
            },
            { 
                verbal_explanation: "נציב את הגבול העליון (אחת) בתוך הפונקציה הקדומה.", 
                math_expression: "<div dir='ltr'>0.5e<sup>2(1)</sup> - 1 = 0.5e<sup>2</sup> - 1</div>" 
            },
            { 
                verbal_explanation: "נציב את הגבול התחתון (אפס) באותה פונקציה. נזכור שחזקת אפס שווה לאחת.", 
                math_expression: "<div dir='ltr'>0.5e<sup>0</sup> - 0 = 0.5(1) - 0 = 0.5</div>" 
            },
            { 
                verbal_explanation: "נחסר את הערך התחתון מהערך העליון לקבלת השטח המדויק.", 
                math_expression: "<div dir='ltr'>(0.5e<sup>2</sup> - 1) - 0.5 = 0.5e<sup>2</sup> - 1.5</div>" 
            }
        ],
        final_answer: "0.5e² - 1.5"
    }
];
