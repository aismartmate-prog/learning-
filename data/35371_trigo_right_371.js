const questionsDB = [
    // ========================================================================
    // תת נושא 1: פונקציות סינוס, קוסינוס, וטנגנס
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: `במשולש ישר זווית שלפניכם, נתונים אורכי שלוש הצלעות. חשבו את ערכו של \u202Asin(α)\u202C (סינוס הזווית אלפא).<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 200,150 200,50" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="2"/>
            <polyline points="190,150 190,140 200,140" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 80,150 A 30 30 0 0 0 74 133" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="145" font-size="16" fill="#ef4444" font-weight="bold">α</text>
            <text x="210" y="105" font-size="14" fill="#0f172a" font-weight="bold">3</text>
            <text x="125" y="170" font-size="14" fill="#0f172a" font-weight="bold">4</text>
            <text x="110" y="90" font-size="14" fill="#0f172a" font-weight="bold">5</text>
        </svg>`,
        options: ["3/5", "4/5", "3/4", "4/3"],
        correctAnswer: 0,
        hint: "היזכרו בהגדרה של פונקציית הסינוס: סינוס של זווית שווה ליחס שבין אורך 'הניצב שמול הזווית' לבין אורך 'היתר' (הצלע הארוכה ביותר).",
        solution_steps: [
            { verbal_explanation: "בשלב הראשון, עלינו לזהות את תפקידה של כל צלע במשולש ביחס לזווית הנתונה אלפא.", math_expression: "\u202A\u03B1\u202C" },
            { verbal_explanation: "הניצב שניצב מול הזווית אלפא הוא הצלע שאורכה 3. נסמן ניצב זה באות a.", math_expression: "\u202Aa = 3\u202C" },
            { verbal_explanation: "היתר הוא תמיד הצלע הארוכה ביותר במשולש, הנמצאת מול הזווית הישרה. אורכו 5. נסמן אותו באות c.", math_expression: "\u202Ac = 5\u202C" },
            { verbal_explanation: "פונקציית הסינוס מוגדרת כיחס (חלוקה) בין הניצב שמול הזווית לבין היתר. נציב את הנתונים בנוסחה.", math_expression: "\u202Asin(\u03B1) = a / c\u202C" },
            { verbal_explanation: "נציב את המספרים שמצאנו ונקבל את השבר הסופי.", math_expression: "\u202Asin(\u03B1) = 3 / 5\u202C" }
        ],
        final_answer: "3/5"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: `בהמשך למשולש הקודם, מהו ערכו של \u202Acos(α)\u202C (קוסינוס הזווית אלפא)?<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 200,150 200,50" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="2"/>
            <polyline points="190,150 190,140 200,140" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 80,150 A 30 30 0 0 0 74 133" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="145" font-size="16" fill="#ef4444" font-weight="bold">α</text>
            <text x="210" y="105" font-size="14" fill="#0f172a" font-weight="bold">3</text>
            <text x="125" y="170" font-size="14" fill="#0f172a" font-weight="bold">4</text>
            <text x="110" y="90" font-size="14" fill="#0f172a" font-weight="bold">5</text>
        </svg>`,
        options: ["4/5", "3/5", "4/3", "5/4"],
        correctAnswer: 0,
        hint: "היזכרו בהגדרה של פונקציית הקוסינוס: קוסינוס של זווית שווה ליחס שבין אורך 'הניצב שליד הזווית' לבין אורך 'היתר'.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא קוסינוס, עלינו לזהות איזו צלע היא 'הניצב שליד הזווית'. זהו הניצב שנוגע ישירות בזווית אלפא ומרכיב אותה. אורכו 4.", math_expression: "\u202Ab = 4\u202C" },
            { verbal_explanation: "היתר, כפי שאנו יודעים, הוא הצלע הארוכה במשולש שמול הזווית הישרה. אורכו 5.", math_expression: "\u202Ac = 5\u202C" },
            { verbal_explanation: "הנוסחה לקוסינוס היא חלוקת הניצב ליד ביתר. נציב את הנתונים בנוסחה זו.", math_expression: "\u202Acos(\u03B1) = b / c\u202C" },
            { verbal_explanation: "נקבל את היחס המבוקש בשבר פשוט.", math_expression: "\u202Acos(\u03B1) = 4 / 5\u202C" }
        ],
        final_answer: "4/5"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: `מהו ערכו של \u202Atan(α)\u202C (טנגנס הזווית אלפא) במשולש הנתון?<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 200,150 200,50" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="2"/>
            <polyline points="190,150 190,140 200,140" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 80,150 A 30 30 0 0 0 74 133" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="145" font-size="16" fill="#ef4444" font-weight="bold">α</text>
            <text x="210" y="105" font-size="14" fill="#0f172a" font-weight="bold">3</text>
            <text x="125" y="170" font-size="14" fill="#0f172a" font-weight="bold">4</text>
            <text x="110" y="90" font-size="14" fill="#0f172a" font-weight="bold">5</text>
        </svg>`,
        options: ["3/4", "4/3", "3/5", "4/5"],
        correctAnswer: 0,
        hint: "היזכרו בהגדרה של פונקציית הטנגנס: טנגנס של זווית אינו משתמש ביתר כלל. הוא שווה ליחס שבין 'הניצב שמול הזווית' לחלק ב'ניצב שליד הזווית'.",
        solution_steps: [
            { verbal_explanation: "בפונקציית הטנגנס מעורבים רק הניצבים. נזהה את הניצב שנמצא מול הזווית אלפא, שאורכו 3.", math_expression: "\u202Aa = 3\u202C" },
            { verbal_explanation: "נזהה את הניצב שנמצא ליד הזווית אלפא (מרכיב אותה יחד עם היתר), שאורכו 4.", math_expression: "\u202Ab = 4\u202C" },
            { verbal_explanation: "הנוסחה לטנגנס קובעת כי עלינו לחלק את הניצב מול בניצב ליד. נרשום את הנוסחה המופשטת.", math_expression: "\u202Atan(\u03B1) = a / b\u202C" },
            { verbal_explanation: "נציב את הנתונים ונקבל את התשובה הסופית כביטוי שבר.", math_expression: "\u202Atan(\u03B1) = 3 / 4\u202C" }
        ],
        final_answer: "3/4"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "במשולש ישר זווית נתונים אורכי הצלעות הבאים: אורך הניצב האחד הוא 5, אורך הניצב השני הוא 12, ואורך היתר הוא 13. נסמן ב- β את הזווית הנמצאת מול הניצב שאורכו 12. מהו \u202Asin(β)\u202C?",
        options: ["12/13", "5/13", "12/5", "5/12"],
        correctAnswer: 0,
        hint: "זהו את הצלע שמול הזווית β (לפי הנתון זה הניצב 12). זהו את היתר. סינוס הוא חלוקה של מול ביתר.",
        solution_steps: [
            { verbal_explanation: "השאלה מגדירה מפורשות מיהו הניצב שמול הזווית בטא. זהו הניצב שאורכו שנים עשר.", math_expression: "\u202Aa = 12\u202C" },
            { verbal_explanation: "היתר הנתון במשולש זה (הצלע הארוכה מכולן) הוא שלושה עשר.", math_expression: "\u202Ac = 13\u202C" },
            { verbal_explanation: "נשתמש בהגדרת פונקציית הסינוס, שהיא חלוקה של הניצב ממול ביתר.", math_expression: "\u202Asin(\u03B2) = a / c\u202C" },
            { verbal_explanation: "נציב את המספרים למציאת היחס.", math_expression: "\u202Asin(\u03B2) = 12 / 13\u202C" }
        ],
        final_answer: "12/13"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "באותו משולש בעל צלעות 5, 12, 13, שבו הזווית β נמצאת מול הניצב 12, מהו ערכו של \u202Acos(β)\u202C?",
        options: ["5/13", "12/13", "5/12", "13/5"],
        correctAnswer: 0,
        hint: "אם הניצב מול β הוא 12, אז הניצב השני (5) חייב להיות 'הניצב שליד' β. קוסינוס הוא היחס בין הניצב שליד לבין היתר.",
        solution_steps: [
            { verbal_explanation: "מאחר שהניצב שמול בטא הוא 12, הניצב השני הנותר חייב להיות הניצב שליד הזווית בטא. אורכו הוא חמש.", math_expression: "\u202Ab = 5\u202C" },
            { verbal_explanation: "היתר במשולש לא משתנה ואורכו נשאר שלושה עשר.", math_expression: "\u202Ac = 13\u202C" },
            { verbal_explanation: "הגדרת פונקציית הקוסינוס דורשת חלוקה של הניצב שליד ביתר.", math_expression: "\u202Acos(\u03B2) = b / c\u202C" },
            { verbal_explanation: "נציב את הנתונים ונקבל את התשובה.", math_expression: "\u202Acos(\u03B2) = 5 / 13\u202C" }
        ],
        final_answer: "5/13"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "בהמשך לנתוני המשולש 5, 12, 13 (כאשר הזווית β מול הניצב 12), מהו ערכו של \u202Atan(β)\u202C?",
        options: ["12/5", "5/12", "13/12", "12/13"],
        correctAnswer: 0,
        hint: "טנגנס הוא היחס בין הניצב שמול הזווית לבין הניצב שליד הזווית.",
        solution_steps: [
            { verbal_explanation: "נזכיר לעצמנו מיהו הניצב מול הזווית. אורכו שנים עשר.", math_expression: "\u202Aa = 12\u202C" },
            { verbal_explanation: "נזכיר מיהו הניצב ליד הזווית. אורכו חמש.", math_expression: "\u202Ab = 5\u202C" },
            { verbal_explanation: "נרשום את תבנית הטנגנס.", math_expression: "\u202Atan(\u03B2) = a / b\u202C" },
            { verbal_explanation: "נציב את הערכים אל תוך התבנית המוכנה.", math_expression: "\u202Atan(\u03B2) = 12 / 5\u202C" }
        ],
        final_answer: "12/5"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: `שילוב משפט פיתגורס: בסרטוט נתון משולש ישר זווית עם ניצבים באורכים 8 ו-15. חשבו את ערכו של \u202Asin(α)\u202C.<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 200,150 50,50" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="2"/>
            <polyline points="50,140 60,140 60,150" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 175,150 A 30 30 0 0 1 180 137" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="165" y="145" font-size="16" fill="#ef4444" font-weight="bold">α</text>
            <text x="30" y="105" font-size="14" fill="#0f172a" font-weight="bold">8</text>
            <text x="125" y="170" font-size="14" fill="#0f172a" font-weight="bold">15</text>
        </svg>`,
        options: ["8/17", "15/17", "8/15", "15/8"],
        correctAnswer: 0,
        hint: "כדי למצוא סינוס, חובה לדעת את אורך היתר. השתמשו במשפט פיתגורס: סכום ריבועי הניצבים שווה לריבוע היתר. מצאו את היתר, ואז חשבו את הסינוס (מול חלקי יתר).",
        solution_steps: [
            { verbal_explanation: "כדי להשתמש בסינוס חסר לנו נתון משמעותי: היתר. נשתמש במשפט פיתגורס כדי למצוא אותו.", math_expression: "\u202Ac\u00B2 = a\u00B2 + b\u00B2\u202C" },
            { verbal_explanation: "נציב את אורכי שני הניצבים הנתונים בסרטוט.", math_expression: "\u202Ac\u00B2 = 8\u00B2 + 15\u00B2\u202C" },
            { verbal_explanation: "נחשב את הריבועים ונחבר אותם.", math_expression: "\u202Ac\u00B2 = 64 + 225 = 289\u202C" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את אורך היתר המדויק.", math_expression: "\u202Ac = \u221A289 = 17\u202C" },
            { verbal_explanation: "כעת נחזור לבעיה המקורית. הניצב מול אלפא הוא 8, והיתר הוא 17. נציב בפונקציית הסינוס.", math_expression: "\u202Asin(\u03B1) = 8 / 17\u202C" }
        ],
        final_answer: "8/17"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "במשולש ישר זווית, אורך היתר הוא 10, ואורך אחד הניצבים הוא 6. מצאו את ערכו של \u202Atan(α)\u202C עבור הזווית אלפא הנמצאת מול הניצב שאורכו 6.",
        options: ["6/8 (כלומר 3/4)", "8/6", "6/10", "8/10"],
        correctAnswer: 0,
        hint: "טנגנס זקוק לשני הניצבים (מול חלקי ליד). חסר לכם הניצב שליד. מצאו אותו בעזרת משפט פיתגורס (יתר בריבוע פחות ניצב בריבוע). לאחר שתמצאו אותו (הוא שווה 8), חלקו 6 ב-8.",
        solution_steps: [
            { verbal_explanation: "על מנת לחשב טנגנס אנו זקוקים לשני הניצבים. נמצא את הניצב החסר בעזרת פיתגורס. נעביר את הניצב הידוע אגף בחיסור.", math_expression: "\u202Ab\u00B2 = c\u00B2 - a\u00B2\u202C" },
            { verbal_explanation: "נציב את היתר ואת הניצב הידוע.", math_expression: "\u202Ab\u00B2 = 10\u00B2 - 6\u00B2\u202C" },
            { verbal_explanation: "נחשב את ההפרש.", math_expression: "\u202Ab\u00B2 = 100 - 36 = 64\u202C" },
            { verbal_explanation: "נוציא שורש כדי למצוא את אורך הניצב החסר (הניצב שליד הזווית אלפא).", math_expression: "\u202Ab = \u221A64 = 8\u202C" },
            { verbal_explanation: "נחשב את הטנגנס כיחס בין הניצב מול אלפא (שש) לבין הניצב שלידה (שמונה). נוכל לצמצם את השבר.", math_expression: "\u202Atan(\u03B1) = 6 / 8 = 3 / 4\u202C" }
        ],
        final_answer: "6/8 (כלומר 3/4)"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "במשולש ישר זווית, ידוע שהיתר שווה ל-25, והניצב מול הזווית α שווה ל-7. מהו \u202Acos(α)\u202C?",
        options: ["24/25", "7/25", "7/24", "25/24"],
        correctAnswer: 0,
        hint: "קוסינוס דורש את 'הניצב שליד' לחלק ליתר. השתמשו במשפט פיתגורס כדי למצוא את הניצב שליד: 25 בריבוע פחות 7 בריבוע. הוציאו שורש (יתקבל 24). כעת בנו את יחס הקוסינוס.",
        solution_steps: [
            { verbal_explanation: "נשתמש במשפט פיתגורס כדי לחלץ את הניצב החסר, שהוא הניצב שליד הזווית.", math_expression: "\u202Ab\u00B2 = c\u00B2 - a\u00B2\u202C" },
            { verbal_explanation: "נציב את הנתונים המספריים מתוך השאלה.", math_expression: "\u202Ab\u00B2 = 25\u00B2 - 7\u00B2\u202C" },
            { verbal_explanation: "נחשב את הריבועים ונחסר ביניהם.", math_expression: "\u202Ab\u00B2 = 625 - 49 = 576\u202C" },
            { verbal_explanation: "נוציא שורש למציאת הניצב שליד.", math_expression: "\u202Ab = \u221A576 = 24\u202C" },
            { verbal_explanation: "נציב את הניצב שליד (עשרים וארבע) ואת היתר (עשרים וחמש) בנוסחת הקוסינוס.", math_expression: "\u202Acos(\u03B1) = 24 / 25\u202C" }
        ],
        final_answer: "24/25"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: `המשולש סובב! שימו לב היטב היכן נמצאת הזווית הישרה. מהו ערכו של \u202Asin(α)\u202C בסרטוט הבא?<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="125,40 40,150 210,150" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="2"/>
            <polyline points="120,50 125,55 130,50" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 60,150 A 20 20 0 0 0 55 135" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="65" y="145" font-size="16" fill="#ef4444" font-weight="bold">α</text>
            <text x="70" y="90" font-size="14" fill="#0f172a" font-weight="bold">15</text>
            <text x="175" y="90" font-size="14" fill="#0f172a" font-weight="bold">20</text>
            <text x="125" y="170" font-size="14" fill="#0f172a" font-weight="bold">25</text>
        </svg>`,
        options: ["20/25", "15/25", "20/15", "15/20"],
        correctAnswer: 0,
        hint: "אל תתנו לכיוון המשולש לבלבל אתכם! היתר הוא תמיד הצלע שמול הזווית הישרה (למטה, 25). הניצב שמול אלפא נמצא בצד השני, הרחוק ממנה (אורכו 20). סינוס הוא מול חלקי יתר.",
        solution_steps: [
            { verbal_explanation: "כדי לא להתבלבל ממשולש הפוך, נתחיל באיתור הזווית הישרה. הצלע שנמצאת מולה היא היתר, שהוא תמיד הצלע הארוכה ביותר. במקרה זה, היתר הוא הבסיס התחתון.", math_expression: "\u202Ac = 25\u202C" },
            { verbal_explanation: "כעת נאתר את הניצב שניצב בדיוק מול זווית אלפא (אינו נוגע בה כלל).", math_expression: "\u202Aa = 20\u202C" },
            { verbal_explanation: "פונקציית הסינוס דורשת את חלוקת הניצב שממול ביתר. נציב את הנתונים הרלוונטיים.", math_expression: "\u202Asin(\u03B1) = a / c\u202C" },
            { verbal_explanation: "נקבל את היחס המתאים.", math_expression: "\u202Asin(\u03B1) = 20 / 25\u202C" }
        ],
        final_answer: "20/25"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "שאלת הבנה קריטית: מהו הערך הגדול ביותר שיכולה לקבל פונקציית הסינוס, \u202Asin(α)\u202C, עבור כל זווית חדה במשולש ישר זווית?",
        options: ["היא תמיד תהיה קטנה מ-1", "היא יכולה להגיע לכל מספר חיובי", "היא יכולה להיות גדולה מ-1 אבל קטנה מ-2", "היא תמיד שווה ל-1"],
        correctAnswer: 0,
        hint: "חשבו על ההגדרה של סינוס: ניצב חלקי יתר. מכיוון שהיתר הוא תמיד (אבל תמיד) הצלע הארוכה ביותר במשולש, המונה תמיד יהיה קטן מהמכנה. לכן השבר תמיד קטן מ-1.",
        solution_steps: [
            { verbal_explanation: "נכתוב את הגדרת פונקציית הסינוס.", math_expression: "\u202Asin(\u03B1) = a / c\u202C" },
            { verbal_explanation: "אנו יודעים כעובדה גיאומטרית מוחלטת שהיתר (במכנה) ארוך תמיד מכל אחד מהניצבים (במונה).", math_expression: "\u202Ac > a\u202C" },
            { verbal_explanation: "בשבר שבו המכנה גדול מהמונה, התוצאה חייבת להיות שבר טהור הקטן מאחד השלם.", math_expression: "\u202Aa / c < 1\u202C" },
            { verbal_explanation: "מכאן שעבור זוויות חדות במשולש, פונקציית הסינוס מוגבלת לערכים הקטנים מאחד.", math_expression: "\u202Asin(\u03B1) < 1\u202C" }
        ],
        final_answer: "היא תמיד תהיה קטנה מ-1"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "במשולש ישר זווית נתון ש- \u202Asin(30°) = 0.5\u202C. איזה מבין הביטויים הבאים יהיה בעל ערך זהה לחלוטין?",
        options: ["\u202Acos(60°)\u202C", "\u202Atan(30°)\u202C", "\u202Asin(60°)\u202C", "\u202Acos(30°)\u202C"],
        correctAnswer: 0,
        hint: "זהות טריגונומטרית חשובה קובעת: הסינוס של זווית אחת שווה לקוסינוס של הזווית המשלימה אותה ל-90 מעלות (כי 'הניצב שמול' הזווית הראשונה הוא בדיוק 'הניצב שליד' הזווית השנייה). 90 פחות 30 זה 60.",
        solution_steps: [
            { verbal_explanation: "קיימת זהות מרכזית בטריגונומטריה של משולש ישר זווית המקשרת בין זוויות משלימות.", math_expression: "\u202Asin(\u03B1) = cos(90&deg; - \u03B1)\u202C" },
            { verbal_explanation: "נציב את הזווית הנתונה בשאלה, שהיא שלושים מעלות, לתוך הזהות.", math_expression: "\u202Asin(30&deg;) = cos(90&deg; - 30&deg;)\u202C" },
            { verbal_explanation: "נחסר בתוך סוגרי הקוסינוס ונקבל את התוצאה הזהה.", math_expression: "\u202Acos(60&deg;)\u202C" }
        ],
        final_answer: "\u202Acos(60°)\u202C"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "נתון ש- \u202Asin(α) = 0.6\u202C וגם \u202Acos(α) = 0.8\u202C עבור זווית מסוימת במשולש. בעזרת זהות טריגונומטרית, מצאו מהו ערכו של \u202Atan(α)\u202C ללא שימוש במשולש או פיתגורס.",
        options: ["0.75", "1.33", "0.48", "1.4"],
        correctAnswer: 0,
        hint: "זהות בסיסית וחשובה קובעת שטנגנס שווה לסינוס חלקי קוסינוס. לכן, חלקו 0.6 ב-0.8.",
        solution_steps: [
            { verbal_explanation: "הזהות המקשרת בין שלוש הפונקציות הבסיסיות קובעת שטנגנס מוגדר כמנת הסינוס והקוסינוס של אותה זווית.", math_expression: "\u202Atan(\u03B1) = sin(\u03B1) / cos(\u03B1)\u202C" },
            { verbal_explanation: "נציב את הערכים העשרוניים שסופקו לנו בנתוני השאלה לתוך הזהות.", math_expression: "\u202Atan(\u03B1) = 0.6 / 0.8\u202C" },
            { verbal_explanation: "נכפיל מונה ומכנה בעשר למען הנוחות, ונקבל שבר של שש חלקי שמונה.", math_expression: "\u202Atan(\u03B1) = 6 / 8\u202C" },
            { verbal_explanation: "נצמצם את השבר או נמיר חזרה לעשרוני ונקבל את התשובה הסופית.", math_expression: "\u202A0.75\u202C" }
        ],
        final_answer: "0.75"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: `במשולש ישר זווית הצלעות מיוצגות על ידי המשתנה x. הניצבים הם \u202A3x\u202C ו-\u202A4x\u202C והיתר הוא \u202A5x\u202C. מה ערכו של \u202Asin(α)\u202C (עבור הזווית מול הניצב 3x)?<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 200,150 200,50" fill="none" stroke="#0f172a" stroke-width="2"/>
            <polyline points="190,150 190,140 200,140" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 80,150 A 30 30 0 0 0 74 133" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="145" font-size="16" fill="#ef4444" font-weight="bold">α</text>
            <text x="210" y="105" font-size="14" fill="#0f172a" font-weight="bold">3x</text>
            <text x="125" y="170" font-size="14" fill="#0f172a" font-weight="bold">4x</text>
            <text x="110" y="90" font-size="14" fill="#0f172a" font-weight="bold">5x</text>
        </svg>`,
        options: ["3/5", "4/5", "תלוי בערך של x", "3x/4x"],
        correctAnswer: 0,
        hint: "פונקציות טריגונומטריות תלויות רק בזווית, לא בגודל המשולש. כשתציבו בנוסחת הסינוס (מול חלקי יתר), המשתנה x יצטמצם וייעלם, ותישארו עם מספר קבוע.",
        solution_steps: [
            { verbal_explanation: "נזהה את הניצב מול הזווית והיתר על פי השרטוט.", math_expression: "\u202Aa = 3x , c = 5x\u202C" },
            { verbal_explanation: "נציב את הביטויים האלגבריים בתוך ההגדרה הרשמית של הסינוס.", math_expression: "\u202Asin(\u03B1) = (3x) / (5x)\u202C" },
            { verbal_explanation: "מכיוון שאיקס מופיע גם במונה וגם במכנה (פעולת כפל), מותר לצמצם אותו. מכאן נובע שהיחס הטריגונומטרי נשאר קבוע ללא קשר לגודל המשולש.", math_expression: "\u202Asin(\u03B1) = 3 / 5\u202C" }
        ],
        final_answer: "3/5"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פונקציות סינוס, קוסינוס, וטנגנס",
        question: "במשולש ישר זווית, זוויות הבסיס החדות הן \u202Aα\u202C ו-\u202Aβ\u202C. ידוע כי \u202Atan(α) = 2/3\u202C. מה יהיה ערכו של \u202Atan(β)\u202C באותו משולש?",
        options: ["3/2", "2/3", "1", "5/3"],
        correctAnswer: 0,
        hint: "הזווית \u202Aβ\u202C משלימה את אלפא ל-90 מעלות. לכן, הניצב שמול אלפא הוא בדיוק הניצב שליד בטא, והניצב שליד אלפא הוא בדיוק הניצב מול בטא. הטנגנס מתהפך לגמרי (הופך להופכי שלו).",
        solution_steps: [
            { verbal_explanation: "נרשום את הגדרת הטנגנס עבור הזווית הראשונה. מול חלקי ליד.", math_expression: "\u202Atan(\u03B1) = a / b = 2 / 3\u202C" },
            { verbal_explanation: "כאשר אנו עוברים לזווית החדה השנייה באותו משולש, תפקידי הניצבים מתהפכים. מה שהיה ממול הופך ל'ליד', ומה שהיה ליד הופך ל'מול'.", math_expression: "\u202Atan(\u03B2) = b / a\u202C" },
            { verbal_explanation: "לכן, ערך הטנגנס של הזווית המשלימה יהיה תמיד השבר ההופכי של טנגנס הזווית המקורית.", math_expression: "\u202Atan(\u03B2) = 3 / 2\u202C" }
        ],
        final_answer: "3/2"
    },

    // ========================================================================
    // תת נושא 2: שימוש בטבלאות טריגונומטריות (מחשבון)
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "בעזרת המחשבון, מצאו את ערכו של הביטוי הבא (עגלו ל-3 ספרות אחרי הנקודה):<br><br>\u202Asin(30°)\u202C",
        options: ["0.5", "0.866", "1", "0.707"],
        correctAnswer: 0,
        hint: "לחצו במחשבון על המקש 'sin', הקישו את המספר 30 וסגרו סוגריים. ודאו שהמחשבון שלכם נמצא על מצב מעלות (D או DEG בשולי המסך).",
        solution_steps: [
            { verbal_explanation: "מוודאים תחילה כי המחשבון מוגדר לעבוד במעלות ולא ברדיאנים. מקישים על כפתור פונקציית הסינוס.", math_expression: "\u202ADegrees Mode\u202C" },
            { verbal_explanation: "מזינים את הזווית הנתונה וסוגרים את הסוגריים.", math_expression: "\u202Asin(30)\u202C" },
            { verbal_explanation: "לוחצים על שווה לקבלת התוצאה. זהו אחד הערכים הידועים ביותר בטריגונומטריה שכדאי לזכור בעל פה.", math_expression: "\u202A0.5\u202C" }
        ],
        final_answer: "0.5"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "השתמשו במחשבון כדי לחשב את הערך הבא. מהי התוצאה? (עגלו ל-3 ספרות עשרוניות)<br><br>\u202Acos(60°)\u202C",
        options: ["0.5", "0.866", "1.732", "0.707"],
        correctAnswer: 0,
        hint: "זהו אותו ערך בדיוק כמו sin(30°). לחצו 'cos', הקלידו 60 וחשבו.",
        solution_steps: [
            { verbal_explanation: "בדומה לחישוב הקודם, נקיש במחשבון על כפתור הקוסינוס.", math_expression: "\u202Acos(60)\u202C" },
            { verbal_explanation: "נלחץ על שווה. נקבל תוצאה זהה לחלוטין לסינוס של שלושים, משום ששתיהן זוויות המשלימות לתשעים מעלות.", math_expression: "\u202A0.5\u202C" }
        ],
        final_answer: "0.5"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "מהו ערכה של הפונקציה טנגנס עבור זווית של 45 מעלות?<br><br>\u202Atan(45°)\u202C",
        options: ["1", "0", "0.5", "1.414"],
        correctAnswer: 0,
        hint: "משולש ישר זווית שבו יש זווית של 45 מעלות הוא משולש שווה שוקיים. כלומר, שני הניצבים שווים זה לזה באורכם. מה יקרה כשנחלק אותם זה בזה (טנגנס)? התשובה היא 1.",
        solution_steps: [
            { verbal_explanation: "נציב במחשבון את פונקציית הטנגנס ונוסיף את הזווית המיוחדת.", math_expression: "\u202Atan(45)\u202C" },
            { verbal_explanation: "התוצאה היא אחד שלם. הסיבה הגיאומטרית לכך היא שבזווית של ארבעים וחמש מעלות, הניצב מול והניצב ליד שווים זה לזה. חלוקה של מספר בעצמו שווה אחד.", math_expression: "\u202Aa / a = 1\u202C" }
        ],
        final_answer: "1"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "חשבו את תוצאת התרגיל הבא, המשלב כפל של מספר שלם בערך טריגונומטרי (לעתים קרובות מופיע כחלק מפתרון משוואה):<br><br>\u202A12 × sin(30°)\u202C",
        options: ["6", "10.39", "24", "12"],
        correctAnswer: 0,
        hint: "מותר להקליד הכל יחד במחשבון ברצף אחד, או לדעת ש-sin(30°) הוא חצי (0.5), ואז להכפיל 12 בחצי. התוצאה היא לחלק את 12 בשניים.",
        solution_steps: [
            { verbal_explanation: "אפשר לפתור בשלבים: נחשב קודם את הפונקציה הטריגונומטרית.", math_expression: "\u202Asin(30&deg;) = 0.5\u202C" },
            { verbal_explanation: "נכפיל את המקדם במספר העשרוני שקיבלנו.", math_expression: "\u202A12 \u00D7 0.5\u202C" },
            { verbal_explanation: "נקבל את הערך הסופי.", math_expression: "\u202A6\u202C" }
        ],
        final_answer: "6"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "מצאו את ערכו של \u202Acos(90°)\u202C במחשבון.",
        options: ["0", "1", "-1", "לא מוגדר (שגיאה)"],
        correctAnswer: 0,
        hint: "הקלידו cos(90) במחשבון. קוסינוס של 90 מעלות (או של זווית ישרה) שווה בדיוק לאפס. (זהו ערך קצה).",
        solution_steps: [
            { verbal_explanation: "נפעיל את המחשבון. נקיש קוסינוס תשעים.", math_expression: "\u202Acos(90)\u202C" },
            { verbal_explanation: "התוצאה המתקבלת היא אפס מוחלט. במשולש ישר זווית אי אפשר שיהיו שתי זוויות בנות תשעים, ולכן זוהי זווית 'קצה' תיאורטית בה הניצב 'ליד' מתכווץ לאפס.", math_expression: "\u202A0\u202C" }
        ],
        final_answer: "0"
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "כעת נבצע את הפעולה ההפוכה. נתון לנו היחס ואנו מחפשים את הזווית. מהו גודלה של הזווית \u202Aα\u202C אם ידוע כי:<br><br>\u202Asin(α) = 0.5\u202C",
        options: ["30 מעלות", "60 מעלות", "45 מעלות", "90 מעלות"],
        correctAnswer: 0,
        hint: "כדי למצוא את הזווית מתוך המספר העשרוני, יש להשתמש בפונקציה ההפוכה. במחשבון לחצו על SHIFT ואז על sin (המסך יראה sin⁻¹). הקישו 0.5 ולחצו שווה.",
        solution_steps: [
            { verbal_explanation: "כאשר המטרה היא חילוץ זווית מתוך יחס נתון, משתמשים בפונקציה ההפוכה (ארק-סינוס). במחשבונים מפעילים זאת על ידי מקש שיפט.", math_expression: "\u202A\u03B1 = sin^{-1}(0.5)\u202C" },
            { verbal_explanation: "הזנת הנתון במחשבון והקשה על שווה תוביל אותנו לזווית המבוקשת.", math_expression: "\u202A\u03B1 = 30&deg;\u202C" }
        ],
        final_answer: "30 מעלות"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "מצאו את הזווית \u202Aβ\u202C המקיימת את המשוואה הבאה:<br><br>\u202Atan(β) = 1\u202C",
        options: ["45 מעלות", "0 מעלות", "90 מעלות", "30 מעלות"],
        correctAnswer: 0,
        hint: "השתמשו בפונקציה ההפוכה של טנגנס (SHIFT + tan). הקישו 1 וראו איזו זווית מתקבלת.",
        solution_steps: [
            { verbal_explanation: "נשתמש בפונקציה ההפוכה של טנגנס כדי לבודד את הזווית.", math_expression: "\u202A\u03B2 = tan^{-1}(1)\u202C" },
            { verbal_explanation: "המחשבון יחזיר את הזווית המיוחדת שבה הניצב מול שווה בדיוק לניצב ליד.", math_expression: "\u202A\u03B2 = 45&deg;\u202C" }
        ],
        final_answer: "45 מעלות"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "פתרו את המשוואה הבאה כדי למצוא את אורך הניצב x. עגלו את התשובה ל-2 ספרות עשרוניות:<br><br>\u202A(x) / 10 = cos(40°)\u202C",
        options: ["7.66", "6.43", "8.39", "13.05"],
        correctAnswer: 0,
        hint: "כדי לבודד את המשתנה x, עליכם להכפיל את שני אגפי המשוואה ב-10 (המכנה שלו). לאחר מכן, הקלידו במחשבון ברצף אחד: 10 כפול cos(40).",
        solution_steps: [
            { verbal_explanation: "כדי להשתחרר מהשבר, נכפיל את כל המשוואה במכנה של המשתנה (עשר).", math_expression: "\u202Ax = 10 \u00D7 cos(40&deg;)\u202C" },
            { verbal_explanation: "נזיז את החישוב כולו למחשבון לקבלת הערך המדויק.", math_expression: "\u202Ax = 10 \u00D7 0.76604\u202C" },
            { verbal_explanation: "נקבל את הערך הסופי ולאחר מכן נעגל אותו לשתי ספרות אחרי הנקודה.", math_expression: "\u202Ax \u2248 7.66\u202C" }
        ],
        final_answer: "7.66"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "פתרו את המשוואה המסובכת יותר, שבה הנעלם (x) נמצא במכנה השבר:<br><br>\u202A12 / x = tan(60°)\u202C",
        options: ["6.93", "20.78", "12", "0.14"],
        correctAnswer: 0,
        hint: "כאשר הנעלם במכנה, אפשר 'להחליף מקומות' בינו לבין התוצאה בצד השני. המשוואה תהפוך ל: x שווה ל-12 חלקי tan(60). חשבו את זה במחשבון.",
        solution_steps: [
            { verbal_explanation: "ראשית נכפיל באיקס כדי להעלות אותו למונה, במקביל נחלק בפונקציה הטריגונומטרית.", math_expression: "\u202A12 = x \u00D7 tan(60&deg;)\u202C" },
            { verbal_explanation: "זה שקול להחלפת מקומות של אלכסון. כעת נבודד את המשתנה לגמרי.", math_expression: "\u202Ax = 12 / tan(60&deg;)\u202C" },
            { verbal_explanation: "נזין את התרגיל של שתים עשרה לחלק לטנגנס שישים במחשבון.", math_expression: "\u202Ax = 12 / 1.732\u202C" },
            { verbal_explanation: "נקבל את התוצאה המעוגלת.", math_expression: "\u202Ax \u2248 6.93\u202C" }
        ],
        final_answer: "6.93"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: `יישום במקום: נתון משולש ישר זווית. אורך היתר הוא 20. הזווית الحדה התחתונה היא בת 30 מעלות. נסמן ב-x את הניצב ש*מול* הזווית. מצאו את x.<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 200,150 200,50" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="2"/>
            <polyline points="190,150 190,140 200,140" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 80,150 A 30 30 0 0 0 74 133" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="145" font-size="16" fill="#ef4444" font-weight="bold">30&deg;</text>
            <text x="215" y="105" font-size="14" fill="#0f172a" font-weight="bold">x</text>
            <text x="110" y="90" font-size="14" fill="#0f172a" font-weight="bold">20</text>
        </svg>`,
        options: ["10", "17.32", "11.5", "20"],
        correctAnswer: 0,
        hint: "אנחנו מחפשים את הניצב 'מול', וידוע לנו 'היתר'. הפונקציה המקשרת בין 'מול' ו-'יתר' היא סינוס. בנו משוואה: sin(30) = x / 20. כפלו ב-20 ופתרו.",
        solution_steps: [
            { verbal_explanation: "נזהה את הצלעות. יש לנו יתר, ואנו מחפשים את הניצב שמול הזווית.", math_expression: "\u202Ac = 20 , a = x\u202C" },
            { verbal_explanation: "הפונקציה המתאימה לקישור בין ניצב מול ליתר היא סינוס. נרכיב משוואה.", math_expression: "\u202Asin(30&deg;) = x / 20\u202C" },
            { verbal_explanation: "נבודד את המשתנה באמצעות הכפלת המשוואה בעשרים.", math_expression: "\u202Ax = 20 \u00D7 sin(30&deg;)\u202C" },
            { verbal_explanation: "נציב במחשבון או נסתמך על הזיכרון שסינוס שלושים הוא בדיוק חצי. מכאן נקבל עשר.", math_expression: "\u202Ax = 20 \u00D7 0.5 = 10\u202C" }
        ],
        final_answer: "10"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: `נתון משולש ישר זווית. אורך הניצב שלמטה (הסמוך לזווית) הוא 10. הזווית שבין ניצב זה ליתר היא 60 מעלות. סמנו את היתר ב-c ומצאו את אורכו.<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 150,150 150,20" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="2"/>
            <polyline points="140,150 140,140 150,140" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 80,150 A 30 30 0 0 0 71 123" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="145" font-size="16" fill="#ef4444" font-weight="bold">60&deg;</text>
            <text x="100" y="170" font-size="14" fill="#0f172a" font-weight="bold">10</text>
            <text x="85" y="80" font-size="14" fill="#0f172a" font-weight="bold">c</text>
        </svg>`,
        options: ["20", "5", "17.32", "11.5"],
        correctAnswer: 0,
        hint: "אנחנו יודעים את הניצב 'ליד' ומחפשים את 'היתר'. הפונקציה המתאימה היא קוסינוס. cos(60) = 10 / c. היות והנעלם במכנה, החליפו בינו לבין התוצאה: c = 10 / cos(60).",
        solution_steps: [
            { verbal_explanation: "נזהה את הצלעות. יש לנו ניצב הצמוד לזווית, ואנו מבקשים את היתר.", math_expression: "\u202Ab = 10 , c = ?\u202C" },
            { verbal_explanation: "פונקציית הקוסינוס עוסקת ביחס של 'ליד' מחולק ב'יתר'. נבנה את המשוואה.", math_expression: "\u202Acos(60&deg;) = 10 / c\u202C" },
            { verbal_explanation: "נחלץ את המשתנה הנמצא במכנה על ידי החלפת מיקומים.", math_expression: "\u202Ac = 10 / cos(60&deg;)\u202C" },
            { verbal_explanation: "קוסינוס של שישים הוא חצי. חלוקת עשר בחצי תניב עשרים בדיוק.", math_expression: "\u202Ac = 10 / 0.5 = 20\u202C" }
        ],
        final_answer: "20"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "במשולש ישר זווית ידועים שני הניצבים: אורך הניצב מול זווית אלפא הוא 8 ס\"מ, ואורך הניצב שליד אלפא הוא 6 ס\"מ. מהו גודלה של הזווית אלפא (במעלות)?",
        options: ["53.13", "36.87", "41.41", "48.59"],
        correctAnswer: 0,
        hint: "יש לכם 'מול' ויש לכם 'ליד'. השתמשו בפונקציית הטנגנס. בנו את המשוואה: tan(α) = 8 / 6. לאחר מכן, לחצו במחשבון על כפתורי SHIFT ואז tan (למציאת הפונקציה ההפוכה) והקישו את התוצאה של 8 לחלק ל-6.",
        solution_steps: [
            { verbal_explanation: "נרכז את הנתונים הידועים. אלו הם שני ניצבי המשולש. לכן נבחר להשתמש בפונקציית הטנגנס.", math_expression: "\u202Aa = 8 , b = 6\u202C" },
            { verbal_explanation: "נרכיב את משוואת היחס של טנגנס (מול חלקי ליד).", math_expression: "\u202Atan(\u03B1) = 8 / 6\u202C" },
            { verbal_explanation: "נחשב את ערכו העשרוני של היחס.", math_expression: "\u202A8 / 6 = 1.333...\u202C" },
            { verbal_explanation: "נשתמש בפונקציה הטריגונומטרית ההפוכה במחשבון כדי לחלץ את הזווית במעלות.", math_expression: "\u202A\u03B1 = tan^{-1}(1.333)\u202C" },
            { verbal_explanation: "התוצאה המתקבלת, לאחר עיגול מתאים, היא כחמישים ושלוש מעלות.", math_expression: "\u202A\u03B1 \u2248 53.13&deg;\u202C" }
        ],
        final_answer: "53.13"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "נתונה המשוואה: \u202Ax / 5 = sin(25°)\u202C. מהו ערכו המקורב של x?",
        options: ["2.11", "4.53", "11.83", "2.33"],
        correctAnswer: 0,
        hint: "הנעלם x נמצא במונה השבר. היפטרו מהמכנה על ידי כפל של כל המשוואה ב-5. הקלידו במחשבון 5 כפול sin(25).",
        solution_steps: [
            { verbal_explanation: "המשתנה שאנו מחפשים כלוא במונה של שבר. נשחרר אותו על ידי הכפלת שני הצדדים במכנה (חמש).", math_expression: "\u202Ax = 5 \u00D7 sin(25&deg;)\u202C" },
            { verbal_explanation: "נחשב במחשבון את הפונקציה בלבד.", math_expression: "\u202Asin(25&deg;) \u2248 0.4226\u202C" },
            { verbal_explanation: "נכפיל את המקדם של חמש בתוצאה ונעגל את הסוף לשתי ספרות.", math_expression: "\u202Ax \u2248 5 \u00D7 0.4226 = 2.113\u202C" }
        ],
        final_answer: "2.11"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "נתונה המשוואה: \u202A7 / x = cos(50°)\u202C. מהו ערכו המקורב של x?",
        options: ["10.89", "4.50", "8.34", "15.11"],
        correctAnswer: 0,
        hint: "הנעלם נמצא הפעם במכנה. החליפו מקומות: x עובר למעלה שמאלה, ו-cos(50) עובר למטה ימינה (יורד למכנה). המשיכו משם.",
        solution_steps: [
            { verbal_explanation: "המשתנה נמצא במכנה, זהו מצב דורש החלפה. נכפיל את המשתנה ונעלה אותו למעלה, ובמקביל נוריד את הקוסינוס למטה לחלוקה.", math_expression: "\u202Ax = 7 / cos(50&deg;)\u202C" },
            { verbal_explanation: "נחשב את הפונקציה במכנה.", math_expression: "\u202Acos(50&deg;) \u2248 0.6428\u202C" },
            { verbal_explanation: "נבצע את חלוקת השבר הפשוטה, ונקבל את הערך הסופי.", math_expression: "\u202Ax = 7 / 0.6428 \u2248 10.89\u202C" }
        ],
        final_answer: "10.89"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "שימוש בטבלאות טריגונומטריות",
        question: "אתגר משולב: אורך סולם הוא 5 מטרים. הוא נשען על קיר ויוצר זווית של 70 מעלות עם הרצפה (הזווית התחתונה). עד לאיזה גובה בסנטימטרים מגיע הסולם על הקיר?",
        options: ["470 ס\"מ", "47 ס\"מ", "171 ס\"מ", "17 ס\"מ"],
        correctAnswer: 0,
        hint: "הסולם הוא היתר (5 מטר). אתם מחפשים את הגובה (הניצב שמול ה-70). השתמשו בסינוס. אל תשכחו שבסוף השאלה מבקשת סנטימטרים, לכן הכפילו את התוצאה שתקבלו ב-100.",
        solution_steps: [
            { verbal_explanation: "נתרגם את הסיפור הפיזיקלי לגיאומטריה. אורך הסולם הוא למעשה היתר במשולש ישר הזווית.", math_expression: "\u202Ac = 5\u202C" },
            { verbal_explanation: "אנו מחפשים את גובה הקיר, שהוא הניצב שממוקם במדויק מול הזווית שעל הקרקע. הפונקציה הרלוונטית היא סינוס.", math_expression: "\u202Asin(70&deg;) = x / 5\u202C" },
            { verbal_explanation: "נחלץ את המשתנה באמצעות הכפלה במכנה וחישוב עשרוני מקורב.", math_expression: "\u202Ax = 5 \u00D7 sin(70&deg;) \u2248 5 \u00D7 0.9397 = 4.698\u202C" },
            { verbal_explanation: "התוצאה במטרים. השאלה דרשה להציג בסנטימטרים ולכן נכפיל במאה. (ארבע מאות ושבעים לערך).", math_expression: "\u202A4.698 \u00D7 100 \u2248 470\u202C" }
        ],
        final_answer: "470 ס\"מ"
    },,

    // ========================================================================
    // תת נושא 3: פתרון משולש ישר זווית (חישוב זוויות וצלעות)
    // ========================================================================

    // --- שאלה 31 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: `במשולש ישר זווית נתון כי אורך היתר הוא 12 ס"מ. אחת הזוויות החדות היא בת 40 מעלות. מצאו את אורך הניצב הנמצא מול זווית זו. (עגלו ל-2 ספרות עשרוניות)<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="50,150 200,150 200,50" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="2"/>
            <polyline points="190,150 190,140 200,140" fill="none" stroke="#0f172a" stroke-width="2"/>
            <path d="M 80,150 A 30 30 0 0 0 74 133" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="85" y="145" font-size="16" fill="#ef4444" font-weight="bold">40&deg;</text>
            <text x="110" y="90" font-size="14" fill="#0f172a" font-weight="bold">12</text>
            <text x="210" y="105" font-size="14" fill="#ef4444" font-weight="bold">x</text>
        </svg>`,
        options: ["7.71", "9.19", "10.06", "8.34"],
        correctAnswer: 0,
        hint: "אנו מחפשים את הניצב מול הזווית, וידוע לנו היתר. לכן נשתמש בפונקציית הסינוס. הציבו: סינוס 40 שווה ל-x חלקי 12.",
        solution_steps: [
            { verbal_explanation: "נזהה את הצלעות. היתר נתון, ואנו מחפשים את הניצב הניצב מול הזווית.", math_expression: "\u202Ac = 12 , \u03B1 = 40&deg;\u202C" },
            { verbal_explanation: "פונקציית הסינוס מקשרת בין הניצב מול לבין היתר. נרכיב את המשוואה.", math_expression: "\u202Asin(40&deg;) = x / 12\u202C" },
            { verbal_explanation: "נכפיל את שני האגפים בשתים עשרה כדי לבודד את המשתנה.", math_expression: "\u202Ax = 12 \u00D7 sin(40&deg;)\u202C" },
            { verbal_explanation: "נחשב במחשבון ונעגל את התוצאה לשתי ספרות אחרי הנקודה.", math_expression: "\u202Ax \u2248 7.71\u202C" }
        ],
        final_answer: "7.71"
    },

    // --- שאלה 32 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "במשולש ישר זווית, אורך היתר הוא 15 ס\"מ וזווית הבסיס היא 55 מעלות. מצאו את אורך הניצב הסמוך לזווית (הניצב שלידה).",
        options: ["8.60", "12.29", "10.55", "7.14"],
        correctAnswer: 0,
        hint: "הניצב המבוקש נמצא ליד הזווית, והיתר נתון. הפונקציה המתאימה היא קוסינוס. חשבו: 15 כפול קוסינוס 55.",
        solution_steps: [
            { verbal_explanation: "כאשר מחפשים את הניצב שליד הזווית ונתון היתר, הפונקציה המתאימה היא קוסינוס.", math_expression: "\u202Acos(\u03B1) = b / c\u202C" },
            { verbal_explanation: "נציב את הנתונים לתוך המשוואה.", math_expression: "\u202Acos(55&deg;) = x / 15\u202C" },
            { verbal_explanation: "נכפיל במכנה כדי לחלץ את הנעלם.", math_expression: "\u202Ax = 15 \u00D7 cos(55&deg;)\u202C" },
            { verbal_explanation: "נחשב במחשבון.", math_expression: "\u202Ax \u2248 8.60\u202C" }
        ],
        final_answer: "8.60"
    },

    // --- שאלה 33 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "אורך הניצב הצמוד לזווית בת 35 מעלות הוא 8 ס\"מ. חשבו את אורך הניצב שמול אותה זווית.",
        options: ["5.60", "11.42", "4.58", "6.22"],
        correctAnswer: 0,
        hint: "מעורבים כאן רק שני הניצבים (מול וליד), ללא היתר. לכן הפונקציה היא טנגנס. טנגנס 35 שווה ל-x חלקי 8.",
        solution_steps: [
            { verbal_explanation: "היתר אינו נתון ואינו נדרש, ולכן נשתמש בפונקציית הטנגנס (מול חלקי ליד).", math_expression: "\u202Atan(35&deg;) = x / 8\u202C" },
            { verbal_explanation: "נבודד את הנעלם הנמצא במונה על ידי הכפלה בשמונה.", math_expression: "\u202Ax = 8 \u00D7 tan(35&deg;)\u202C" },
            { verbal_explanation: "נקליד במחשבון לקבלת הערך המדויק.", math_expression: "\u202Ax \u2248 5.60\u202C" }
        ],
        final_answer: "5.60"
    },

    // --- שאלה 34 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "במשולש ישר זווית, הניצב שמול זווית בת 65 מעלות הוא באורך 10 ס\"מ. מהו אורך היתר של המשולש?",
        options: ["11.03", "9.06", "23.66", "10.00"],
        correctAnswer: 0,
        hint: "נתון הניצב שמול הזווית, ומחפשים את היתר. הפונקציה היא סינוס. סינוס 65 שווה 10 חלקי x. כיוון ש-x במכנה, החליפו מקומות: 10 חלקי סינוס 65.",
        solution_steps: [
            { verbal_explanation: "נתון ניצב מול, ומבוקש יתר. הפונקציה המקשרת ביניהם היא סינוס.", math_expression: "\u202Asin(65&deg;) = 10 / x\u202C" },
            { verbal_explanation: "מכיוון שהנעלם נמצא במכנה, נכפיל בו ואז נחלק בסינוס. זה למעשה החלפת מקומות.", math_expression: "\u202Ax = 10 / sin(65&deg;)\u202C" },
            { verbal_explanation: "נבצע את חלוקת השבר במחשבון.", math_expression: "\u202Ax \u2248 11.03\u202C" }
        ],
        final_answer: "11.03"
    },

    // --- שאלה 35 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: `יישום במלבן: נתון מלבן שאורכו 8 ס"מ ורוחבו 6 ס"מ. מעבירים אלכסון המחלק אותו לשני משולשים ישרי זווית. מהו גודל הזווית החדה שבין האלכסון לצלע הארוכה (8)?<br><br>
        <svg viewBox="0 0 250 150" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <rect x="30" y="30" width="190" height="90" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="2"/>
            <line x1="30" y1="120" x2="220" y2="30" stroke="#0f172a" stroke-width="2"/>
            <path d="M 180,120 A 30 30 0 0 1 190 106" fill="none" stroke="#ef4444" stroke-width="2"/>
            <text x="170" y="112" font-size="14" fill="#ef4444" font-weight="bold">α</text>
            <text x="125" y="140" font-size="14" fill="#0f172a" font-weight="bold">8</text>
            <text x="230" y="80" font-size="14" fill="#0f172a" font-weight="bold">6</text>
        </svg>`,
        options: ["36.87 מעלות", "53.13 מעלות", "45.00 מעלות", "41.40 מעלות"],
        correctAnswer: 0,
        hint: "במשולש ישר הזווית שנוצר (למטה מימין), הניצב מול אלפא הוא 6, והניצב שלידה הוא 8. השתמשו ב- טנגנס אלפא = 6/8, ולאחר מכן במחשבון ב-SHIFT TAN.",
        solution_steps: [
            { verbal_explanation: "במשולש התחתון שנוצר, הזווית המבוקשת מונחת על הצלע באורך שמונה. הצלע מולה היא שש.", math_expression: "\u202Aa = 6 , b = 8\u202C" },
            { verbal_explanation: "כיוון שיש לנו את שני הניצבים, נשתמש בפונקציית הטנגנס.", math_expression: "\u202Atan(\u03B1) = 6 / 8 = 0.75\u202C" },
            { verbal_explanation: "נפעיל את הפונקציה ההפוכה של טנגנס כדי למצוא את המעלות.", math_expression: "\u202A\u03B1 = tan^{-1}(0.75)\u202C" },
            { verbal_explanation: "נקבל את הזווית המדויקת.", math_expression: "\u202A\u03B1 \u2248 36.87&deg;\u202C" }
        ],
        final_answer: "36.87 מעלות"
    },

    // --- שאלה 36 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "במשולש שווה שוקיים, אורך הבסיס הוא 10 ס\"מ, ואורך כל אחת מהשוקיים הוא 13 ס\"מ. מהו גודלה של זווית הבסיס?",
        options: ["67.38 מעלות", "22.62 מעלות", "45.00 מעלות", "50.12 מעלות"],
        correctAnswer: 0,
        hint: "הורידו גובה לבסיס. במשולש שווה שוקיים, הגובה חוצה את הבסיס. כך נוצר משולש ישר זווית שבו הניצב למטה הוא 5, והיתר הוא 13. כדי למצוא את זווית הבסיס, השתמשו בקוסינוס (5 חלקי 13).",
        solution_steps: [
            { verbal_explanation: "במשולש שווה שוקיים, הגובה לבסיס חוצה אותו לשני חצאים שווים.", math_expression: "\u202Abase / 2 = 10 / 2 = 5\u202C" },
            { verbal_explanation: "כעת נתמקד באחד מהמשולשים ישרי הזווית שנוצרו. הניצב ליד זווית הבסיס הוא חמש, והיתר הוא שלוש עשרה.", math_expression: "\u202Ab = 5 , c = 13\u202C" },
            { verbal_explanation: "היחס של ניצב ליד חלקי יתר הוא פונקציית הקוסינוס.", math_expression: "\u202Acos(\u03B1) = 5 / 13 \u2248 0.3846\u202C" },
            { verbal_explanation: "נפעיל קוסינוס הפוך (שיפט קוסינוס).", math_expression: "\u202A\u03B1 = cos^{-1}(0.3846) \u2248 67.38&deg;\u202C" }
        ],
        final_answer: "67.38 מעלות"
    },

    // --- שאלה 37 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "במשולש שווה שוקיים, ידוע שזווית הבסיס היא 50 מעלות, ואורך השוק הוא 20 ס\"מ. מהו אורך הבסיס של המשולש כולו?",
        options: ["25.71 ס\"מ", "15.32 ס\"מ", "30.64 ס\"מ", "12.85 ס\"מ"],
        correctAnswer: 0,
        hint: "הורידו גובה לבסיס. נוצר משולש ישר זווית שבו היתר הוא 20. חשבו את הניצב שליד ה-50 באמצעות קוסינוס (20 כפול cos50). זהו חצי מהבסיס. לבסוף הכפילו ב-2.",
        solution_steps: [
            { verbal_explanation: "נוריד גובה לבסיס ונתבונן באחד המשולשים ישרי הזווית. אנו מחפשים את הניצב שעל הרצפה (חצי בסיס).", math_expression: "\u202Acos(50&deg;) = x / 20\u202C" },
            { verbal_explanation: "נחשב את אורך מחצית הבסיס על ידי הכפלת היתר בקוסינוס הזווית.", math_expression: "\u202Ax = 20 \u00D7 cos(50&deg;) \u2248 12.855\u202C" },
            { verbal_explanation: "המשולש הוא שווה שוקיים, לכן הגובה חצה את הבסיס. נכפיל את מה שמצאנו בשתיים כדי לקבל את הבסיס השלם.", math_expression: "\u202ABase = 2 \u00D7 12.855 \u2248 25.71\u202C" }
        ],
        final_answer: "25.71 ס\"מ"
    },

    // --- שאלה 38 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: `מעוין וטריגונומטריה: אורכי האלכסונים במעוין הם 10 ס"מ ו-24 ס"מ. מהו אורך צלע המעוין?<br><br>
        <svg viewBox="0 0 250 200" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="125,20 220,100 125,180 30,100" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="2"/>
            <line x1="30" y1="100" x2="220" y2="100" stroke="#0f172a" stroke-width="1" stroke-dasharray="4,4"/>
            <line x1="125" y1="20" x2="125" y2="180" stroke="#0f172a" stroke-width="1" stroke-dasharray="4,4"/>
            <polyline points="125,90 135,90 135,100" fill="none" stroke="#ef4444" stroke-width="2"/>
        </svg>`,
        options: ["13 ס\"מ", "26 ס\"מ", "17 ס\"מ", "12 ס\"מ"],
        correctAnswer: 0,
        hint: "במעוין האלכסונים מאונכים וחוצים זה את זה. לכן במרכז נוצרים ארבעה משולשים ישרי זווית. הניצבים של כל משולש הם חצאי האלכסונים (5 ו-12). צלע המעוין היא היתר. הפעילו משפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "אלכסוני המעוין נחתכים ב-90 מעלות וחוצים זה את זה. לכן, הניצבים של כל משולש קטן הם חצאי האלכסונים.", math_expression: "\u202Aa = 10 / 2 = 5 , b = 24 / 2 = 12\u202C" },
            { verbal_explanation: "נשתמש במשפט פיתגורס כדי למצוא את היתר במשולש הפנימי, שהוא בעצם צלע המעוין החיצונית.", math_expression: "\u202Ac\u00B2 = 5\u00B2 + 12\u00B2\u202C" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "\u202Ac\u00B2 = 25 + 144 = 169\u202C" },
            { verbal_explanation: "נוציא שורש למציאת הצלע.", math_expression: "\u202Ac = \u221A169 = 13\u202C" }
        ],
        final_answer: "13 ס\"מ"
    },

    // --- שאלה 39 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "בהמשך למעוין עם האלכסונים 10 ו-24. מהו גודלה של הזווית החדה של המעוין כולו?",
        options: ["45.24 מעלות", "22.62 מעלות", "67.38 מעלות", "90.48 מעלות"],
        correctAnswer: 0,
        hint: "במשולש ישר הזווית הפנימי (ניצבים 5 ו-12), חשבו את הזווית החדה הקטנה בעזרת tan(α) = 5/12. אלכסוני המעוין חוצים את זוויותיו, לכן הכפילו את התוצאה שקיבלתם פי 2 כדי לקבל את זווית המעוין השלמה.",
        solution_steps: [
            { verbal_explanation: "נמצא את חצי הזווית על ידי שימוש בניצבים של המשולש הקטן שיצרו האלכסונים.", math_expression: "\u202Atan(\u03B1) = 5 / 12 \u2248 0.4166\u202C" },
            { verbal_explanation: "נפעיל פונקציה הפוכה לטנגנס.", math_expression: "\u202A\u03B1 = tan^{-1}(0.4166) \u2248 22.62&deg;\u202C" },
            { verbal_explanation: "האלכסון חוצה את זווית המעוין, ולכן הזווית השלמה היא פעמיים אלפא.", math_expression: "\u202A2 \u00D7 22.62 = 45.24&deg;\u202C" }
        ],
        final_answer: "45.24 מעלות"
    },

    // --- שאלה 40 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "בעיה מילולית: חוט של עפיפון נמתח באורך של 50 מטרים. זווית העלייה של החוט מול הקרקע היא 60 מעלות. באיזה גובה מהקרקע נמצא העפיפון?",
        options: ["43.30 מטרים", "25.00 מטרים", "86.60 מטרים", "35.50 מטרים"],
        correctAnswer: 0,
        hint: "החוט הוא היתר. הגובה האנכי הוא 'הניצב ממול'. הפעילו פונקציית סינוס: 50 כפול סינוס 60.",
        solution_steps: [
            { verbal_explanation: "אורך החוט מתפקד כיתר של משולש ישר זווית דמיוני.", math_expression: "\u202Ac = 50\u202C" },
            { verbal_explanation: "הגובה מהקרקע הוא הניצב שמול זווית העלייה. לכן נשתמש בסינוס.", math_expression: "\u202Asin(60&deg;) = x / 50\u202C" },
            { verbal_explanation: "נכפיל בחמישים כדי לגלות את הגובה.", math_expression: "\u202Ax = 50 \u00D7 sin(60&deg;)\u202C" },
            { verbal_explanation: "נחשב ונעגל.", math_expression: "\u202Ax \u2248 50 \u00D7 0.866 = 43.30\u202C" }
        ],
        final_answer: "43.30 מטרים"
    },

    // --- שאלה 41 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "מטוס ממריא בזווית קבועה של 15 מעלות. לאחר שטס מסלול אווירי (אלכסוני) של 2000 מטרים, מה יהיה גובהו מעל פני הקרקע?",
        options: ["517.64 מטרים", "1931.85 מטרים", "535.90 מטרים", "2000 מטרים"],
        correctAnswer: 0,
        hint: "המסלול האווירי הוא היתר. הגובה הוא הניצב ממול. שוב נשתמש בסינוס: סינוס 15 שווה x חלקי 2000.",
        solution_steps: [
            { verbal_explanation: "זווית ההמראה נמדדת מול הקרקע. מסלול הטיסה הוא היתר.", math_expression: "\u202Ac = 2000 , \u03B1 = 15&deg;\u202C" },
            { verbal_explanation: "נרכיב משוואת סינוס כדי למצוא את הגובה שניצב מול הזווית.", math_expression: "\u202Asin(15&deg;) = x / 2000\u202C" },
            { verbal_explanation: "נכפיל את המכנה בסינוס במחשבון.", math_expression: "\u202Ax = 2000 \u00D7 sin(15&deg;) \u2248 2000 \u00D7 0.2588\u202C" },
            { verbal_explanation: "נחשב ונקבל את התשובה.", math_expression: "\u202Ax \u2248 517.64\u202C" }
        ],
        final_answer: "517.64 מטרים"
    },

    // --- שאלה 42 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "בטרפז ישר זווית, אורך הבסיס התחתון הוא 14, הבסיס העליון 10, והגובה (השוק הישרה) הוא 3. מה גודלה של הזווית החדה שבבסיס הטרפז?",
        options: ["36.87 מעלות", "53.13 מעלות", "41.41 מעלות", "30.00 מעלות"],
        correctAnswer: 0,
        hint: "הורידו גובה נוסף מהקודקוד העליון. ייווצר משולש ישר זווית בצד. הבסיס שלו יהיה 14 פחות 10 (שזה 4). הגובה שלו הוא 3. השתמשו בטנגנס (3 חלקי 4) למציאת הזווית.",
        solution_steps: [
            { verbal_explanation: "כדי ליצור משולש ישר זווית שניתן לעבוד איתו, נוריד גובה בתוך הטרפז. אורך הגובה זהה לשוק הישרה.", math_expression: "\u202Ah = 3\u202C" },
            { verbal_explanation: "הגובה יוצר מלבן. לכן, הניצב התחתון של המשולש שווה לבסיס התחתון פחות הבסיס העליון.", math_expression: "\u202Abase = 14 - 10 = 4\u202C" },
            { verbal_explanation: "במשולש שנוצר יש לנו את הניצב מול (שלוש) ואת הניצב ליד (ארבע). נשתמש בטנגנס.", math_expression: "\u202Atan(\u03B1) = 3 / 4 = 0.75\u202C" },
            { verbal_explanation: "נחלץ את הזווית בעזרת פונקציה הפוכה במחשבון.", math_expression: "\u202A\u03B1 = tan^{-1}(0.75) \u2248 36.87&deg;\u202C" }
        ],
        final_answer: "36.87 מעלות"
    },

    // --- שאלה 43 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "במשולש נתון הורידו גובה. המשולש חולק לשניים. במשולש הימני ישר הזווית היתר הוא 8 והזווית למטה היא 60. במשולש השמאלי ישר הזווית הזווית למטה היא 45. מצאו את גובה המשולש ואת היתר השמאלי.",
        options: ["גובה: 6.93, יתר שמאלי: 9.80", "גובה: 4, יתר שמאלי: 5.66", "גובה: 6.93, יתר שמאלי: 6.93", "גובה: 8, יתר שמאלי: 11.31"],
        correctAnswer: 0,
        hint: "שלב א': מצאו את הגובה דרך המשולש הימני בעזרת סינוס 60 (8 כפול סינוס 60). שלב ב': במשולש השמאלי יש לכם את הגובה (שהוא 'מול' ל-45), חפשו את היתר בעזרת משוואת סינוס נוספת.",
        solution_steps: [
            { verbal_explanation: "נתחיל במשולש הימני למציאת הגובה. הגובה הוא הניצב שמול שישים מעלות.", math_expression: "\u202Ah = 8 \u00D7 sin(60&deg;) \u2248 6.928\u202C" },
            { verbal_explanation: "נעבור למשולש השמאלי. הגובה שמצאנו עכשיו ממוקם מול זווית של ארבעים וחמש מעלות. אנו מחפשים את היתר השני.", math_expression: "\u202Asin(45&deg;) = 6.928 / c_2\u202C" },
            { verbal_explanation: "נבודד את היתר (על ידי החלפת מקומות עם הסינוס) ונחשב.", math_expression: "\u202Ac_2 = 6.928 / sin(45&deg;) \u2248 9.80\u202C" }
        ],
        final_answer: "גובה: 6.93, יתר שמאלי: 9.80"
    },

    // --- שאלה 44 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "זווית הגבהה: אדם עומד במרחק של 40 מטרים ממגדל, ומביט אל ראש המגדל. גובה המגדל הוא 30 מטרים. מהי זווית ההגבהה של השמש (הזווית בה הוא צופה כלפי מעלה מן הקרקע)?",
        options: ["36.87 מעלות", "53.13 מעלות", "45.00 מעלות", "30.00 מעלות"],
        correctAnswer: 0,
        hint: "נוצר משולש ישר זווית שבו הקרקע היא הניצב שליד (40) והמגדל הוא הניצב ממול (30). חשבו את הטנגנס (30 חלקי 40) ומצאו את הזווית.",
        solution_steps: [
            { verbal_explanation: "נזהה את הניצבים. גובה המגדל הוא הניצב מול. המרחק על הקרקע הוא הניצב ליד.", math_expression: "\u202Aa = 30 , b = 40\u202C" },
            { verbal_explanation: "נשתמש בטנגנס, המחלק את מול בליד.", math_expression: "\u202Atan(\u03B1) = 30 / 40 = 0.75\u202C" },
            { verbal_explanation: "נחלץ את הזווית המדויקת באמצעות המחשבון.", math_expression: "\u202A\u03B1 = tan^{-1}(0.75) \u2248 36.87&deg;\u202C" }
        ],
        final_answer: "36.87 מעלות"
    },

    // --- שאלה 45 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "פתרון משולש ישר זווית (חישוב זוויות וצלעות)",
        question: "במשולש ישר זווית נתון אורך ניצב אחד שהוא 10 ס\"מ. הזווית החדה הצמודה אליו (ליד) היא 30 מעלות. מהו שטחו של המשולש?",
        options: ["28.87 סמ\"ר", "50.00 סמ\"ר", "57.74 סמ\"ר", "100.00 סמ\"ר"],
        correctAnswer: 0,
        hint: "כדי לחשב שטח צריך גם את הניצב השני. מצאו את הניצב 'מול' בעזרת טנגנס 30. (10 כפול טנגנס 30). לאחר מכן חשבו שטח משולש: (מול * ליד) חלקי 2.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא שטח של משולש ישר זווית, דרושים לנו שני הניצבים. נשתמש בטנגנס כדי למצוא את הניצב מול הזווית.", math_expression: "\u202Atan(30&deg;) = a / 10\u202C" },
            { verbal_explanation: "נכפיל בעשר.", math_expression: "\u202Aa = 10 \u00D7 tan(30&deg;) \u2248 5.7735\u202C" },
            { verbal_explanation: "כעת נציב את שני הניצבים בנוסחת השטח.", math_expression: "\u202AS = (10 \u00D7 5.7735) / 2\u202C" },
            { verbal_explanation: "נחשב ונעגל לשתי ספרות.", math_expression: "\u202AS = 57.735 / 2 \u2248 28.87\u202C" }
        ],
        final_answer: "28.87 סמ\"ר"
    },

    // ========================================================================
    // תת נושא 4: חוק הסינוסים וחוק הקוסינוסים
    // ========================================================================

    // --- שאלה 46 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "איזה מבין המשפטים הבאים מתאר בצורה הנכונה ביותר את משפט הסינוסים (חוק הסינוסים)?",
        options: [
            "היחס בין כל צלע לסינוס הזווית שמולה הוא קבוע ושווה לפעמיים רדיוס המעגל החוסם",
            "סכום שתי צלעות תמיד גדול מהצלע השלישית כפול סינוס הזווית",
            "היחס בין שתי צלעות סמוכות שווה לסינוס הזווית שביניהן",
            "ריבוע של צלע אחת שווה לסכום ריבועי הצלעות האחרות פחות קוסינוס הזווית"
        ],
        correctAnswer: 0,
        hint: "משפט הסינוסים קובע ש- a/sin(α) = b/sin(β) = c/sin(γ) = 2R. היחס תמיד קבוע ונשמר.",
        solution_steps: [
            { verbal_explanation: "משפט הסינוסים קובע יחס פרופורציונלי קבוע במשולש כללי.", math_expression: "\u202Aa / sin(\u03B1) = b / sin(\u03B2) = c / sin(\u03B3)\u202C" },
            { verbal_explanation: "משפט זה גם מוסיף שכל יחס כזה שווה בדיוק לקוטר המעגל שחוסם את המשולש המדובר.", math_expression: "\u202A= 2R\u202C" }
        ],
        final_answer: "היחס בין כל צלע לסינוס הזווית שמולה הוא קבוע ושווה לפעמיים רדיוס המעגל החוסם"
    },

    // --- שאלה 47 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: `במשולש כלשהו נתונות שתי זוויות: 40 מעלות ו-60 מעלות. אורך הצלע שמול הזווית של 40 מעלות הוא 10 ס"מ. מהו אורך הצלע x שמול הזווית של 60 מעלות?<br><br>
        <svg viewBox="0 0 250 150" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="30,120 220,120 150,30" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="2"/>
            <text x="50" y="110" font-size="14" fill="#ef4444" font-weight="bold">40&deg;</text>
            <text x="180" y="110" font-size="14" fill="#3b82f6" font-weight="bold">60&deg;</text>
            <text x="195" y="70" font-size="14" fill="#ef4444" font-weight="bold">10</text>
            <text x="75" y="70" font-size="14" fill="#3b82f6" font-weight="bold">x</text>
        </svg>`,
        options: ["13.47", "11.50", "8.66", "15.32"],
        correctAnswer: 0,
        hint: "לפי חוק הסינוסים: צלע חלקי סינוס הזווית ממול. x חלקי sin(60) שווה ל-10 חלקי sin(40). כפלו ב-sin(60) וחשבו.",
        solution_steps: [
            { verbal_explanation: "נרכיב משוואה לפי משפט הסינוסים: כל צלע מחולקת בסינוס הזווית הנגדית לה.", math_expression: "\u202Ax / sin(60&deg;) = 10 / sin(40&deg;)\u202C" },
            { verbal_explanation: "נבודד את המשתנה על ידי הכפלת שני האגפים במכנה השמאלי.", math_expression: "\u202Ax = [ 10 \u00D7 sin(60&deg;) ] / sin(40&deg;)\u202C" },
            { verbal_explanation: "נחשב בעזרת המחשבון ונעגל את התוצאה.", math_expression: "\u202Ax \u2248 8.66 / 0.6427 \u2248 13.47\u202C" }
        ],
        final_answer: "13.47"
    },

    // --- שאלה 48 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "במשולש כלשהו נתונה צלע באורך 8 ס\"מ והזווית שמולה היא בת 30 מעלות. מהו הרדיוס של המעגל החוסם את המשולש הזה?",
        options: ["8 ס\"מ", "16 ס\"מ", "4 ס\"מ", "12 ס\"מ"],
        correctAnswer: 0,
        hint: "חוק הסינוסים קובע שהיחס a / sin(α) שווה ל-2R (פעמיים הרדיוס). חשבו את 8 חלקי סינוס 30 (שזה 0.5). התוצאה היא הקוטר כולו. אל תשכחו לחלק ב-2 לקבלת הרדיוס.",
        solution_steps: [
            { verbal_explanation: "נשתמש במשפט הסינוסים המורחב, המקשר לצלע, זווית וקוטר מעגל חוסם.", math_expression: "\u202A2R = a / sin(\u03B1)\u202C" },
            { verbal_explanation: "נציב את הנתונים המספריים מתוך השאלה.", math_expression: "\u202A2R = 8 / sin(30&deg;)\u202C" },
            { verbal_explanation: "סינוס שלושים שווה חצי. שמונה חלקי חצי שווה שש עשרה. זהו הקוטר.", math_expression: "\u202A2R = 16\u202C" },
            { verbal_explanation: "השאלה מבקשת רדיוס, לכן נחלק בשתיים.", math_expression: "\u202AR = 8\u202C" }
        ],
        final_answer: "8 ס\"מ"
    },

    // --- שאלה 49 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "במשולש, צלע באורך 12 נמצאת מול זווית של 45 מעלות. צלע אחרת באורך 10 נמצאת מול הזווית \u202Aβ\u202C. מהו ערכו המדויק של \u202Asin(β)\u202C?",
        options: ["0.589", "0.707", "0.848", "0.500"],
        correctAnswer: 0,
        hint: "הציבו במשפט הסינוסים: 10 חלקי sin(β) שווה ל-12 חלקי sin(45). בעזרת כפל בהצלבה: sin(β) יהיה שווה ל-10 כפול sin(45) הכל חלקי 12.",
        solution_steps: [
            { verbal_explanation: "נבנה את משוואת חוק הסינוסים עם הנתונים והנעלמים.", math_expression: "\u202A12 / sin(45&deg;) = 10 / sin(\u03B2)\u202C" },
            { verbal_explanation: "נבצע כפל בהצלבה כדי לבודד את הפונקציה המבוקשת.", math_expression: "\u202A12 \u00D7 sin(\u03B2) = 10 \u00D7 sin(45&deg;)\u202C" },
            { verbal_explanation: "נחלק בשתים עשרה.", math_expression: "\u202Asin(\u03B2) = [ 10 \u00D7 sin(45&deg;) ] / 12\u202C" },
            { verbal_explanation: "נחשב ונעגל.", math_expression: "\u202Asin(\u03B2) \u2248 (10 \u00D7 0.7071) / 12 \u2248 0.589\u202C" }
        ],
        final_answer: "0.589"
    },

    // --- שאלה 50 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "איזו מן הנוסחאות הבאות היא הייצוג התקין והמדויק של 'משפט הקוסינוסים' (המתאים למציאת צלע ג' כשידועות שתי צלעות וזווית ביניהן)?",
        options: [
            "\u202Ac² = a² + b² - 2ab × cos(γ)\u202C",
            "\u202Ac² = a² + b² + 2ab × cos(γ)\u202C",
            "\u202Ac = a + b - cos(γ)\u202C",
            "\u202Ac² = a² + b² - ab × sin(γ)\u202C"
        ],
        correctAnswer: 0,
        hint: "משפט הקוסינוסים הוא הרחבה של משפט פיתגורס לכלל המשולשים. הוא מתחיל בדיוק כמו פיתגורס, אך מוסיף גורם תיקון שלילי המכיל פעמיים את הצלעות כפול קוסינוס הזווית ביניהן.",
        solution_steps: [
            { verbal_explanation: "משפט הקוסינוסים מורכב מהבסיס של משפט פיתגורס.", math_expression: "\u202Ac&sup2; = a&sup2; + b&sup2;\u202C" },
            { verbal_explanation: "לכך מתווסף איבר התיקון, שמחסר פעמיים את מכפלת שתי הצלעות הסמוכות כפול קוסינוס הזווית הכלואה ביניהן.", math_expression: "\u202A- 2ab \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "שילובם יוצר את הנוסחה השלמה והתקינה.", math_expression: "\u202Ac&sup2; = a&sup2; + b&sup2; - 2ab \u00D7 cos(\u03B3)\u202C" }
        ],
        final_answer: "\u202Ac² = a² + b² - 2ab × cos(γ)\u202C"
    },

    // --- שאלה 51 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: `יישום משפט הקוסינוסים: במשולש נתונות שתי צלעות באורכים 5 ו-8. הזווית הכלואה ביניהן היא בת 60 מעלות. מהו אורך הצלע השלישית שמול זווית זו?<br><br>
        <svg viewBox="0 0 250 150" style="width:100%; max-width:250px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <polygon points="40,120 200,120 100,30" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="2"/>
            <path d="M 115,120 A 30 30 0 0 0 100,90" fill="none" stroke="#0f172a" stroke-width="2"/> <text x="130" y="80" font-size="14" fill="#0f172a" font-weight="bold">8</text>
            <text x="50" y="80" font-size="14" fill="#0f172a" font-weight="bold">5</text>
            <text x="100" y="45" font-size="14" fill="#ef4444" font-weight="bold">60&deg;</text>
            <text x="120" y="140" font-size="14" fill="#ef4444" font-weight="bold">x</text>
        </svg>`,
        options: ["7", "7.68", "8.54", "49"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה: איקס בריבוע שווה ל-5 בריבוע, ועוד 8 בריבוע, פחות (2 כפול 5 כפול 8 כפול קוסינוס 60). קוסינוס 60 שווה ל-0.5. חשבו והוציאו שורש מהתוצאה.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתונים בנוסחת הקוסינוס. הצלע שמול הזווית היא המשתנה שלנו.", math_expression: "\u202Ax&sup2; = 5&sup2; + 8&sup2; - 2 \u00D7 5 \u00D7 8 \u00D7 cos(60&deg;)\u202C" },
            { verbal_explanation: "נחשב את הריבועים ואת קוסינוס שישים (ששווה חצי).", math_expression: "\u202Ax&sup2; = 25 + 64 - 80 \u00D7 0.5\u202C" },
            { verbal_explanation: "נבצע את הכפל של גורם התיקון.", math_expression: "\u202Ax&sup2; = 89 - 40\u202C" },
            { verbal_explanation: "נקבל את הריבוע המדויק.", math_expression: "\u202Ax&sup2; = 49\u202C" },
            { verbal_explanation: "נוציא שורש למציאת הצלע.", math_expression: "\u202Ax = \u221A49 = 7\u202C" }
        ],
        final_answer: "7"
    },

    // --- שאלה 52 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "נתון משולש שאורכי צלעותיו הם 3, 4, ו-5. נרצה למצוא את הזווית הנמצאת מול הצלע שאורכה 5 בעזרת משפט הקוסינוסים. מה תהיה הזווית?",
        options: ["90 מעלות", "60 מעלות", "120 מעלות", "45 מעלות"],
        correctAnswer: 0,
        hint: "זהו משולש פיתגורס קלאסי. אם תציבו במשפט (25 שווה ל-9 ועוד 16 פחות התיקון), תגלו שהתיקון חייב להיות שווה לאפס. מתי קוסינוס מתאפס? רק בזווית ישרה.",
        solution_steps: [
            { verbal_explanation: "נציב את כל שלוש הצלעות במשפט הקוסינוסים כאשר הזווית (מול חמש) נותרת כנעלם.", math_expression: "\u202A5&sup2; = 3&sup2; + 4&sup2; - 2 \u00D7 3 \u00D7 4 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "\u202A25 = 9 + 16 - 24 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נעביר את העשרים וחמש לצד השני ונקבל התאפסות מוחלטת.", math_expression: "\u202A25 = 25 - 24 \u00D7 cos(\u03B3)  =>  0 = -24 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "המשוואה מתקיימת רק כאשר הקוסינוס שווה לאפס. הזווית היחידה שנותנת קוסינוס אפס היא זווית ישרה.", math_expression: "\u202Acos(\u03B3) = 0  =>  \u03B3 = 90&deg;\u202C" }
        ],
        final_answer: "90 מעלות"
    },

    // --- שאלה 53 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "במשולש צלעות באורכים 7, 8 ו-10. מצאו את גודל הזווית \u202Aγ\u202C הנמצאת מול הצלע שאורכה 10. (עגלו תשובה)",
        options: ["83.62 מעלות", "75.52 מעלות", "96.38 מעלות", "60.00 מעלות"],
        correctAnswer: 0,
        hint: "הציבו בחוק הקוסינוסים: 10 בריבוע (100) שווה ל-7 בריבוע ועוד 8 בריבוע פחות (2 כפול 7 כפול 8 כפול קוסינוס γ). בודדו את קוסינוס γ והשתמשו ב-SHIFT cos.",
        solution_steps: [
            { verbal_explanation: "נרכיב את משוואת משפט הקוסינוסים עבור הזווית הנדרשת.", math_expression: "\u202A10&sup2; = 7&sup2; + 8&sup2; - 2 \u00D7 7 \u00D7 8 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נחשב את ערכי המספרים.", math_expression: "\u202A100 = 49 + 64 - 112 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נכנס איברים ונעביר אגף.", math_expression: "\u202A100 = 113 - 112 \u00D7 cos(\u03B3)  =>  -13 = -112 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נחלק ונבודד את הפונקציה.", math_expression: "\u202Acos(\u03B3) = 13 / 112 \u2248 0.1160\u202C" },
            { verbal_explanation: "נשתמש בפונקציה הפוכה למציאת הזווית.", math_expression: "\u202A\u03B3 = cos^{-1}(0.1160) \u2248 83.62&deg;\u202C" }
        ],
        final_answer: "83.62 מעלות"
    },

    // --- שאלה 54 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "נוסחת השטח הטריגונומטרית: במשולש ישנן שתי צלעות באורכים 10 ס\"מ ו-12 ס\"מ. הזווית הכלואה ביניהן היא 30 מעלות. מהו שטח המשולש?",
        options: ["30 סמ\"ר", "60 סמ\"ר", "120 סמ\"ר", "15 סמ\"ר"],
        correctAnswer: 0,
        hint: "נוסחת השטח באמצעות טריגונומטריה היא: מחצית מכפלת שתי צלעות בסינוס הזווית שביניהן. כלומר: (10 כפול 12 כפול sin30) חלקיי 2.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה הטריגונומטרית לשטח משולש.", math_expression: "\u202AS = (a \u00D7 b \u00D7 sin(\u03B3)) / 2\u202C" },
            { verbal_explanation: "נציב את הנתונים. סינוס שלושים מעלות שווה חצי.", math_expression: "\u202AS = (10 \u00D7 12 \u00D7 0.5) / 2\u202C" },
            { verbal_explanation: "נחשב את המונה, עשר כפול שתים עשרה כפול חצי שווה שישים.", math_expression: "\u202AS = 60 / 2\u202C" },
            { verbal_explanation: "נחלק בשתיים לקבלת שטח סופי.", math_expression: "\u202AS = 30\u202C" }
        ],
        final_answer: "30 סמ\"ר"
    },

    // --- שאלה 55 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "במקבילית, אורכי הצלעות הסמוכות הם 6 ו-10. הזווית החדה של המקבילית היא 60 מעלות. מהו אורך האלכסון הקצר של המקבילית? (רמז: האלכסון הקצר נמצא מול הזווית החדה)",
        options: ["8.71", "14.00", "76.00", "11.66"],
        correctAnswer: 0,
        hint: "האלכסון יוצר משולש שצלעותיו הן 6 ו-10, והזווית הכלואה ביניהן היא 60. הפעילו את משפט הקוסינוסים בדיוק כמו בתרגילים הקודמים כדי למצוא את האלכסון.",
        solution_steps: [
            { verbal_explanation: "האלכסון סוגר משולש שנתונות בו שתי צלעות וזווית כלואה. זהו מצב אידיאלי למשפט הקוסינוסים.", math_expression: "\u202Ad&sup2; = 6&sup2; + 10&sup2; - 2 \u00D7 6 \u00D7 10 \u00D7 cos(60&deg;)\u202C" },
            { verbal_explanation: "נחשב ריבועים וקוסינוס חצי.", math_expression: "\u202Ad&sup2; = 36 + 100 - 120 \u00D7 0.5\u202C" },
            { verbal_explanation: "נחסר את איבר התיקון.", math_expression: "\u202Ad&sup2; = 136 - 60 = 76\u202C" },
            { verbal_explanation: "נוציא שורש כדי למצוא את האורך הממשי של האלכסון.", math_expression: "\u202Ad = \u221A76 \u2248 8.717\u202C" }
        ],
        final_answer: "8.71"
    },

    // --- שאלה 56 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "נתון משולש בו צלע a = 12, זווית α (מולה) = 45 מעלות, וזווית β = 60 מעלות. אנו מתבקשים למצוא את צלע c (הנמצאת מול הזווית השלישית γ). מה עלינו לעשות קודם?",
        options: ["למצוא את זווית γ על ידי השלמה ל-180 מעלות", "להשתמש במשפט הקוסינוסים ישירות", "למצוא קודם את צלע b", "אי אפשר לפתור ללא נתון נוסף"],
        correctAnswer: 0,
        hint: "כדי להשתמש בחוק הסינוסים למציאת צלע מסוימת, חובה לדעת את הזווית שמולה. לכן, שלב ראשון הוא חישוב הזווית השלישית.",
        solution_steps: [
            { verbal_explanation: "כדי לחלץ את הצלע השלישית ממשוואת חוק הסינוסים, אנו זקוקים לזווית הנגדית לה שאינה נתונה במפורש.", math_expression: "\u202Ac / sin(\u03B3) = a / sin(\u03B1)\u202C" },
            { verbal_explanation: "מכיוון ששתי זוויות ידועות, נוכל להשלים בקלות לזווית מלאה של משולש.", math_expression: "\u202A\u03B3 = 180 - (45 + 60) = 75&deg;\u202C" },
            { verbal_explanation: "רק לאחר שלב מקדים זה, נוכל להציב ולפתור.", math_expression: "\u202AProceed to Sines Law\u202C" }
        ],
        final_answer: "למצוא את זווית γ על ידי השלמה ל-180 מעלות"
    },

    // --- שאלה 57 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "במשולש החסום במעגל, רדיוס המעגל החוסם הוא R = 10 ס\"מ. זווית אחת במשולש היא בת 30 מעלות. מהו אורך הצלע הנמצאת בדיוק מול זווית זו?",
        options: ["10 ס\"מ", "20 ס\"מ", "5 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "היעזרו במשפט הסינוסים המורחב: צלע חלקי סינוס הזווית מולה שווה ל-2R. כלומר: x חלקי sin(30) שווה ל-20. כפלו 20 בסינוס 30 (שהוא 0.5).",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת משפט הסינוסים המורחב, המכילה את הרדיוס.", math_expression: "\u202Ax / sin(\u03B1) = 2R\u202C" },
            { verbal_explanation: "נציב את הנתונים. פעמיים הרדיוס שווה לעשרים.", math_expression: "\u202Ax / sin(30&deg;) = 2 \u00D7 10 = 20\u202C" },
            { verbal_explanation: "נבודד את הצלע באמצעות כפל.", math_expression: "\u202Ax = 20 \u00D7 sin(30&deg;)\u202C" },
            { verbal_explanation: "נחשב את התוצאה הסופית בידיעה שסינוס שלושים הוא חצי.", math_expression: "\u202Ax = 20 \u00D7 0.5 = 10\u202C" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 58 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "שאלת תיאוריה והבנה: באיזה מן המקרים הבאים **לא נוכל** להשתמש במשפט הסינוסים, ונהיה חייבים להשתמש במשפט הקוסינוסים?",
        options: [
            "כאשר נתונות לנו שתי צלעות והזווית הכלואה ביניהן",
            "כאשר נתונות לנו שתי זוויות וצלע אחת",
            "כאשר נתונות לנו שתי צלעות וזווית מול אחת מהן",
            "כאשר נתון לנו רדיוס המעגל החוסם וזווית"
        ],
        correctAnswer: 0,
        hint: "חוק הסינוסים דורש תמיד זוג של 'צלע והזווית שמולה' כדי ליצור שבר מלא ללא נעלמים. אם יש לכם רק צלעות וזווית שכלואה ביניהן, אין לכם אף זוג שלם, לכן הסינוסים לא יעבוד.",
        solution_steps: [
            { verbal_explanation: "משפט הסינוסים בנוי על השוואת יחסים. כדי לפתור משוואה, אנו חייבים להכיר לפחות שבר אחד במלואו, כלומר צלע והזווית המדויקת ממולה.", math_expression: "\u202A{a , \u03B1}\u202C" },
            { verbal_explanation: "אם הנתונים הם שתי צלעות וזווית כלואה, אין לנו שום צלע והזווית שמולה. במצב זה, חובה לפנות למשפט הקוסינוסים.", math_expression: "\u202A{a, b, \u03B3} -> Cosines Law\u202C" }
        ],
        final_answer: "כאשר נתונות לנו שתי צלעות והזווית הכלואה ביניהן"
    },

    // --- שאלה 59 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "במשולש כלשהו נתונות הצלעות a=4, b=6, c=8. חשבו את ערכו של קוסינוס הזווית γ הנמצאת מול הצלע c (הצלע הגדולה). שימו לב: אנו מחפשים את ערך ה*קוסינוס* ולא את הזווית עצמה.",
        options: ["-0.25", "0.25", "0.5", "-0.5"],
        correctAnswer: 0,
        hint: "הציבו במשפט הקוסינוסים: 8 בריבוע (64) שווה ל-4 בריבוע (16) ועוד 6 בריבוע (36) פחות התיקון (2*4*6*cos). תקבלו: 64 = 52 - 48cos. העבירו אגפים ובודדו את הקוסינוס.",
        solution_steps: [
            { verbal_explanation: "נציב את כל הצלעות למשפט הקוסינוסים.", math_expression: "\u202A8&sup2; = 4&sup2; + 6&sup2; - 2 \u00D7 4 \u00D7 6 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נחשב את כל הריבועים והמכפלות המספריות.", math_expression: "\u202A64 = 16 + 36 - 48 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נחבר את המספרים החופשיים באגף ימין ונעביר לאגף שמאל.", math_expression: "\u202A64 = 52 - 48 \u00D7 cos(\u03B3)  =>  12 = -48 \u00D7 cos(\u03B3)\u202C" },
            { verbal_explanation: "נחלק במינוס ארבעים ושמונה כדי לבודד את הקוסינוס. התוצאה היא שלילית, כלומר מדובר בזווית קהה.", math_expression: "\u202Acos(\u03B3) = 12 / (-48) = -0.25\u202C" }
        ],
        final_answer: "-0.25"
    },

    // --- שאלה 60 ---
    {
        subject: "מתמטיקה",
        topic: "טריגונומטריה במשולש ישר זווית",
        subTopic: "חוק הסינוסים וחוק הקוסינוסים (הכרחי לשלב 3 יחידות)",
        question: "אתגר משולב: במשולש ABC נתון כי צלע a = 10, זווית \u202Aα\u202C (מולה) = 30 מעלות. אנו נדרשים למצוא את צלע b הנמצאת מול הזווית \u202Aβ\u202C ששווה 45 מעלות. מהו אורך הצלע b?",
        options: ["14.14", "10.00", "17.32", "20.00"],
        correctAnswer: 0,
        hint: "זהו שימוש קלאסי בחוק הסינוסים. הציבו: b / sin(45) = 10 / sin(30). בודדו את b על ידי כפל ב-sin(45).",
        solution_steps: [
            { verbal_explanation: "אנו מזהים שיש לנו זוג שלם (צלע והזווית שמולה), ולכן נשתמש בחוק הסינוסים הישיר.", math_expression: "\u202Ab / sin(45&deg;) = 10 / sin(30&deg;)\u202C" },
            { verbal_explanation: "נבודד את הצלע הנעלמת.", math_expression: "\u202Ab = [ 10 \u00D7 sin(45&deg;) ] / sin(30&deg;)\u202C" },
            { verbal_explanation: "נחשב את ערכי הפונקציות. סינוס שלושים הוא חצי, סינוס ארבעים וחמש הוא שורש שתיים חלקי שתיים.", math_expression: "\u202Ab \u2248 [ 10 \u00D7 0.7071 ] / 0.5\u202C" },
            { verbal_explanation: "נבצע את החישוב הסופי לקבלת האורך המבוקש.", math_expression: "\u202Ab \u2248 7.071 / 0.5 \u2248 14.14\u202C" }
        ],
        final_answer: "14.14"
    }
];