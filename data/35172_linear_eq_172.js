const questionsDB = [
    // ========================================================================
    // תת נושא 1: משוואה בנעלם אחד
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "פתרו את המשוואה הבאה ומצאו את ערכו של הנעלם:<br><br>\u202A2x + 5 = 17\u202C",
        options: ["\u202Ax = 6\u202C", "\u202Ax = 11\u202C", "\u202Ax = 22\u202C", "\u202Ax = 8.5\u202C"],
        correctAnswer: 0,
        hint: "המטרה היא לבודד את המשתנה באגף אחד. התחילו בהעברת המספר החופשי לאגף השני תוך החלפת סימנו. לאחר מכן חלקו במקדם של הנעלם.",
        solution_steps: [
            { verbal_explanation: "נעביר את המספר חמש לאגף הימני. בעת חציית סימן השוויון, הפלוס הופך למינוס.", math_expression: "\u202A2x = 17 - 5\u202C" },
            { verbal_explanation: "נבצע את פעולת החיסור באגף הימני.", math_expression: "\u202A2x = 12\u202C" },
            { verbal_explanation: "כעת, נחלק את שני אגפי המשוואה בשתיים כדי לבודד את הנעלם לחלוטין.", math_expression: "\u202Ax = 6\u202C" }
        ],
        final_answer: "\u202Ax = 6\u202C"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "פתרו את המשוואה הכוללת נעלמים משני צידי השוויון:<br><br>\u202A5x - 3 = 2x + 12\u202C",
        options: ["\u202Ax = 5\u202C", "\u202Ax = 3\u202C", "\u202Ax = -5\u202C", "\u202Ax = 15\u202C"],
        correctAnswer: 0,
        hint: "רכזו את כל האיברים המכילים את הנעלם באגף אחד (לרוב משמאל), ואת כל המספרים החופשיים באגף השני. זכרו להחליף סימן בכל העברה.",
        solution_steps: [
            { verbal_explanation: "נעביר את שני איקס שמאלה (הופך לשלילי), ואת מינוס שלוש ימינה (הופך לחיובי).", math_expression: "\u202A5x - 2x = 12 + 3\u202C" },
            { verbal_explanation: "נכנס איברים דומים בכל אחד מהאגפים בנפרד.", math_expression: "\u202A3x = 15\u202C" },
            { verbal_explanation: "נחלק בשלוש למציאת התשובה הסופית.", math_expression: "\u202Ax = 5\u202C" }
        ],
        final_answer: "\u202Ax = 5\u202C"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "פתרו את המשוואה הבאה הכוללת מקדמים שליליים:<br><br>\u202A-4x + 10 = -2x - 8\u202C",
        options: ["\u202Ax = 9\u202C", "\u202Ax = -9\u202C", "\u202Ax = 1\u202C", "\u202Ax = -1\u202C"],
        correctAnswer: 0,
        hint: "כדי למנוע בלבול, כדאי להעביר את מינוס 4x ימינה כדי שיהפוך לחיובי ויגבר על המינוס 2x. או להעביר שמאלה ולזכור לחלק במספר שלילי.",
        solution_steps: [
            { verbal_explanation: "נעביר את מינוס שתי איקס לאגף השמאלי בפלוס, ואת העשר לאגף הימני במינוס.", math_expression: "\u202A-4x + 2x = -8 - 10\u202C" },
            { verbal_explanation: "נבצע את פעולות החשבון. שימו לב: מינוס ארבע ועוד שתיים שווה מינוס שתיים.", math_expression: "\u202A-2x = -18\u202C" },
            { verbal_explanation: "נחלק את המשוואה במינוס שתיים. חלוקה של שלילי בשלילי נותנת תוצאה חיובית.", math_expression: "\u202Ax = 9\u202C" }
        ],
        final_answer: "\u202Ax = 9\u202C"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "מהו הפתרון של המשוואה הבאה?<br><br>\u202A8 - x = 12\u202C",
        options: ["\u202Ax = -4\u202C", "\u202Ax = 4\u202C", "\u202Ax = 20\u202C", "\u202Ax = -20\u202C"],
        correctAnswer: 0,
        hint: "היזהרו מהמינוס שלפני הנעלם! העבירו את 8 ימינה, ותישארו עם 'מינוס איקס'. כדי למצוא את 'איקס' החיובי, חלקו במינוס אחד.",
        solution_steps: [
            { verbal_explanation: "נעביר את המספר שמונה לאגף הימני. הסימן שלו הופך לשלילי. הנעלם נשאר עם סימן המינוס שלו.", math_expression: "\u202A-x = 12 - 8\u202C" },
            { verbal_explanation: "נבצע את החיסור הרגיל באגף ימין.", math_expression: "\u202A-x = 4\u202C" },
            { verbal_explanation: "כדי למצוא את ערכו של המשתנה החיובי, נכפיל או נחלק את שני האגפים במינוס אחד.", math_expression: "\u202Ax = -4\u202C" }
        ],
        final_answer: "\u202Ax = -4\u202C"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "כנסו איברים דומים ופתרו את המשוואה הארוכה הבאה:<br><br>\u202A10x + 2 - 3x = 4x + 11\u202C",
        options: ["\u202Ax = 3\u202C", "\u202Ax = 9\u202C", "\u202Ax = 1.5\u202C", "\u202Ax = 4\u202C"],
        correctAnswer: 0,
        hint: "לפני שמתחילים להעביר אגפים, סדרו כל אגף בנפרד. באגף שמאל, חשבו כמה זה 10x פחות 3x.",
        solution_steps: [
            { verbal_explanation: "נתחיל מפישוט אגף שמאל על ידי כינוס איברים. עשר איקס פחות שלוש איקס שווה שבע איקס.", math_expression: "\u202A7x + 2 = 4x + 11\u202C" },
            { verbal_explanation: "כעת, נרכז את המשתנים באגף שמאל ואת המספרים החופשיים באגף ימין.", math_expression: "\u202A7x - 4x = 11 - 2\u202C" },
            { verbal_explanation: "נחשב את ההפרשים.", math_expression: "\u202A3x = 9\u202C" },
            { verbal_explanation: "נחלק בשלוש למציאת הפתרון.", math_expression: "\u202Ax = 3\u202C" }
        ],
        final_answer: "\u202Ax = 3\u202C"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: `משוואה כמייצגת שיווי משקל. לפניכם מאזניים מאוזנים. על הכף השמאלית יש 3 משקולות לא ידועות (x) ועוד 2 ק"ג. על הכף הימנית יש משקולת לא ידועה אחת (x) ועוד 8 ק"ג. מהו משקלה של משקולת x אחת?<br><br>
        <svg viewBox="0 0 300 150" style="width:100%; max-width:350px; display:block; margin:15px auto;">
            <path d="M 150,140 L 140,50 L 160,50 Z" fill="#64748b"/>
            <line x1="50" y1="50" x2="250" y2="50" stroke="#0f172a" stroke-width="4"/>
            <line x1="50" y1="50" x2="50" y2="90" stroke="#0f172a" stroke-width="2"/>
            <rect x="20" y="90" width="60" height="10" fill="#cbd5e1" stroke="#0f172a"/>
            <rect x="25" y="65" width="20" height="25" fill="#3b82f6" rx="3"/>
            <text x="35" y="82" font-size="12" fill="white" text-anchor="middle" font-weight="bold">x</text>
            <rect x="48" y="65" width="20" height="25" fill="#3b82f6" rx="3"/>
            <text x="58" y="82" font-size="12" fill="white" text-anchor="middle" font-weight="bold">x</text>
            <circle cx="20" cy="78" r="10" fill="#f59e0b"/>
            <text x="20" y="82" font-size="10" fill="white" text-anchor="middle" font-weight="bold">1</text>
            <circle cx="78" cy="78" r="10" fill="#f59e0b"/>
            <text x="78" y="82" font-size="10" fill="white" text-anchor="middle" font-weight="bold">1</text>
            <rect x="35" y="40" width="20" height="25" fill="#3b82f6" rx="3"/>
            <text x="45" y="57" font-size="12" fill="white" text-anchor="middle" font-weight="bold">x</text>
            <line x1="250" y1="50" x2="250" y2="90" stroke="#0f172a" stroke-width="2"/>
            <rect x="220" y="90" width="60" height="10" fill="#cbd5e1" stroke="#0f172a"/>
            <rect x="240" y="65" width="20" height="25" fill="#3b82f6" rx="3"/>
            <text x="250" y="82" font-size="12" fill="white" text-anchor="middle" font-weight="bold">x</text>
            <circle cx="225" cy="75" r="14" fill="#f59e0b"/>
            <text x="225" y="80" font-size="14" fill="white" text-anchor="middle" font-weight="bold">8</text>
        </svg>`,
        options: ["\u202Ax = 3\u202C", "\u202Ax = 2\u202C", "\u202Ax = 4\u202C", "\u202Ax = 5\u202C"],
        correctAnswer: 0,
        hint: "בנו משוואה. צד שמאל: 3x ועוד 2. צד ימין: x ועוד 8. השוו ביניהם ופתרו.",
        solution_steps: [
            { verbal_explanation: "נתרגם את הציור הפיזיקלי למשוואה מתמטית. המשקל בשתי הכפות שווה.", math_expression: "\u202A3x + 2 = x + 8\u202C" },
            { verbal_explanation: "נוריד משקולת איקס אחת מכל כף (נעביר אגף), ונוריד 2 קילו מכל כף.", math_expression: "\u202A3x - x = 8 - 2\u202C" },
            { verbal_explanation: "נחשב את המצב החדש על המאזניים.", math_expression: "\u202A2x = 6\u202C" },
            { verbal_explanation: "נחלק בשתיים. כל משקולת נעלמה שוקלת שלושה קילוגרמים.", math_expression: "\u202Ax = 3\u202C" }
        ],
        final_answer: "\u202Ax = 3\u202C"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "פתרו את המשוואה הבאה המכילה מקדם שהוא שבר פשוט:<br><br>\u202Ax / 3 = 5\u202C",
        options: ["\u202Ax = 15\u202C", "\u202Ax = 8\u202C", "\u202Ax = 5/3\u202C", "\u202Ax = 2\u202C"],
        correctAnswer: 0,
        hint: "הקו התחתון מסמן פעולת חילוק. הפעולה ההפוכה לחילוק היא כפל. כפלו את שני צידי המשוואה ב-3.",
        solution_steps: [
            { verbal_explanation: "כדי לבודד את המשתנה מתוך השבר, נכפיל את כל המשוואה במכנה שלו.", math_expression: "\u202A(x / 3) × 3 = 5 × 3\u202C" },
            { verbal_explanation: "באגף השמאלי השלוש מצטמצם ונעלם. באגף הימני נבצע את המכפלה.", math_expression: "\u202Ax = 15\u202C" }
        ],
        final_answer: "\u202Ax = 15\u202C"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "פתרו את המשוואה הבאה:<br><br>\u202A(2x) / 5 = 4\u202C",
        options: ["\u202Ax = 10\u202C", "\u202Ax = 20\u202C", "\u202Ax = 5\u202C", "\u202Ax = 2\u202C"],
        correctAnswer: 0,
        hint: "בצעו את הפעולות בשלבים. קודם היפטרו מהמכנה על ידי כפל ב-5. תשארו עם 2x. לאחר מכן חלקו ב-2.",
        solution_steps: [
            { verbal_explanation: "נכפיל את שני אגפי המשוואה בחמש כדי להעלים את השבר.", math_expression: "\u202A2x = 4 × 5\u202C" },
            { verbal_explanation: "נחשב את אגף ימין.", math_expression: "\u202A2x = 20\u202C" },
            { verbal_explanation: "נחלק בשתיים לקבלת הפתרון השלם.", math_expression: "\u202Ax = 10\u202C" }
        ],
        final_answer: "\u202Ax = 10\u202C"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "פתרו משוואה זו, שבה יש לאחד האיברים מקדם שהוא שבר עשרוני:<br><br>\u202A0.5x + 4 = 8\u202C",
        options: ["\u202Ax = 8\u202C", "\u202Ax = 2\u202C", "\u202Ax = 4\u202C", "\u202Ax = 24\u202C"],
        correctAnswer: 0,
        hint: "העבירו את 4 לאגף ימין כרגיל. לאחר מכן, כדי לבודד את המשתנה, חלקו ב-0.5 (שזה בדיוק כמו להכפיל ב-2).",
        solution_steps: [
            { verbal_explanation: "נעביר את המספר ארבע לאגף הנגדי בחיסור.", math_expression: "\u202A0.5x = 8 - 4\u202C" },
            { verbal_explanation: "נבצע את החיסור.", math_expression: "\u202A0.5x = 4\u202C" },
            { verbal_explanation: "לחלק בחצי זה מתמטית כמו להכפיל פי שניים. נבודד את המשתנה.", math_expression: "\u202Ax = 4 / 0.5 = 8\u202C" }
        ],
        final_answer: "\u202Ax = 8\u202C"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "איזו תוצאה מתקבלת בעת פתרון המשוואה הבאה?<br><br>\u202A0.2x - 1 = 0.5x - 2.5\u202C",
        options: ["\u202Ax = 5\u202C", "\u202Ax = -5\u202C", "\u202Ax = 0.5\u202C", "\u202Ax = 10\u202C"],
        correctAnswer: 0,
        hint: "אל תיבהלו מהנקודות העשרוניות. העבירו את איברי ה-x לאגף שמאל, ואת המספרים לימין (או להפך, כדי להימנע ממינוסים).",
        solution_steps: [
            { verbal_explanation: "כדי להימנע ממקדמים שליליים, נעביר את המשתנים ימינה ואת המספרים שמאלה.", math_expression: "\u202A-1 + 2.5 = 0.5x - 0.2x\u202C" },
            { verbal_explanation: "נכנס איברים בכל צד. אחת וחצי מול שלוש עשיריות.", math_expression: "\u202A1.5 = 0.3x\u202C" },
            { verbal_explanation: "נחלק באפס נקודה שלוש. אם נזיז את הנקודה העשרונית בשניהם, זה כמו לחלק 15 ב-3.", math_expression: "\u202Ax = 1.5 / 0.3 = 5\u202C" }
        ],
        final_answer: "\u202Ax = 5\u202C"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "מהו הפתרון של המשוואה הבאה?<br><br>\u202Ax + (x / 2) = 9\u202C",
        options: ["\u202Ax = 6\u202C", "\u202Ax = 9\u202C", "\u202Ax = 4.5\u202C", "\u202Ax = 3\u202C"],
        correctAnswer: 0,
        hint: "שלם (x) ועוד חצי (x/2) שווים לאחד וחצי. כלומר 1.5x = 9. לחלופין, הכפילו את כל המשוואה ב-2 כדי לבטל את השבר.",
        solution_steps: [
            { verbal_explanation: "נציג שיטה קלה: נכפיל את כל המשוואה בשתיים כדי להיפטר מהשבר.", math_expression: "\u202A2x + x = 18\u202C" },
            { verbal_explanation: "נכנס את האיברים המשותפים.", math_expression: "\u202A3x = 18\u202C" },
            { verbal_explanation: "נחלק בשלוש.", math_expression: "\u202Ax = 6\u202C" }
        ],
        final_answer: "\u202Ax = 6\u202C"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "שימו לב לתוצאה המיוחדת. פתרו את המשוואה הבאה:<br><br>\u202A7x = 0\u202C",
        options: ["\u202Ax = 0\u202C", "\u202Aאין פתרון\u202C", "\u202Aאינסוף פתרונות\u202C", "\u202Ax = -7\u202C"],
        correctAnswer: 0,
        hint: "איזה מספר אם נכפיל אותו ב-7 ייתן לנו 0? חלוקת אפס בכל מספר חיובי או שלילי שווה תמיד לאפס.",
        solution_steps: [
            { verbal_explanation: "כדי לבודד את המשתנה, נחלק את המשוואה במקדם שלו, שהוא שבע.", math_expression: "\u202Ax = 0 / 7\u202C" },
            { verbal_explanation: "חלוקת אפס בכל מספר שהוא (פרט לאפס) נותנת אפס מוחלט. מדובר בפתרון יחיד ותקין.", math_expression: "\u202Ax = 0\u202C" }
        ],
        final_answer: "\u202Ax = 0\u202C"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "לעתים משוואה מובילה למסקנה מיוחדת. מהו פתרון המשוואה הבאה?<br><br>\u202A2x + 5 = 2x - 1\u202C",
        options: ["אין פתרון", "אינסוף פתרונות", "\u202Ax = 0\u202C", "\u202Ax = -6\u202C"],
        correctAnswer: 0,
        hint: "נסו להעביר אגפים. אם תעבירו את 2x שמאלה, הוא יתקזז לחלוטין ויעלם, ותישארו עם פסוק השקר: 5 שווה למינוס 1. למשוואה כזו קוראים משוואת קונפליקט.",
        solution_steps: [
            { verbal_explanation: "ננסה לרכז את המשתנים באגף השמאלי על ידי העברת אגף.", math_expression: "\u202A2x - 2x + 5 = -1\u202C" },
            { verbal_explanation: "המשתנים מבטלים זה את זה, ונותרנו עם מספרים בלבד. נעביר גם אותם.", math_expression: "\u202A0 = -1 - 5\u202C" },
            { verbal_explanation: "קיבלנו פסוק שקר מוחלט בו אפס שווה למינוס שש. המשמעות היא שאין אף מספר בעולם שיקיים את המשוואה.", math_expression: "\u202A0 = -6\u202C" }
        ],
        final_answer: "אין פתרון"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "היפוכו של המקרה הקודם. נסו לפתור ולהסיק מסקנה מהמשוואה הזו:<br><br>\u202A3x + 4 = 3x + 4\u202C",
        options: ["אינסוף פתרונות", "אין פתרון", "\u202Ax = 0\u202C", "\u202Ax = 4\u202C"],
        correctAnswer: 0,
        hint: "כבר במבט ראשון ניתן לראות ששני האגפים זהים לחלוטין. אם תעבירו אגפים, תקבלו '0 שווה 0'. זהו פסוק אמת מוחלט.",
        solution_steps: [
            { verbal_explanation: "ננסה לפעול בצורה אלגברית רגילה ולהעביר משתנים לשמאל ומספרים לימין.", math_expression: "\u202A3x - 3x = 4 - 4\u202C" },
            { verbal_explanation: "כל האיברים מתאפסים משני הכיוונים.", math_expression: "\u202A0 = 0\u202C" },
            { verbal_explanation: "התקבל פסוק אמת (זהות מתמטית). משמעות הדבר היא שכל מספר שנציב יהיה נכון. לכן יש אינסוף פתרונות.", math_expression: "\u202ATrue Statement\u202C" }
        ],
        final_answer: "אינסוף פתרונות"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואה בנעלם אחד",
        question: "אתגר משוואה רב-שלבית. מצאו את x:<br><br>\u202A8x - 2 + x = 5x + 14 - 2x\u202C",
        options: ["\u202Ax = 2.66...\u202C", "\u202Ax = 4\u202C", "\u202Ax = 2\u202C", "\u202Ax = 3\u202C"],
        correctAnswer: 0,
        hint: "עבדו בסבלנות. שלב א': כנסו את כל האיברים הדומים באגף שמאל (8x ועוד x). שלב ב': כנסו בצד ימין (5x פחות 2x). שלב ג': העברת אגפים.",
        solution_steps: [
            { verbal_explanation: "נפשט את אגף שמאל. שמונה איקס ועוד איקס זה תשע איקס.", math_expression: "\u202A9x - 2 = 5x + 14 - 2x\u202C" },
            { verbal_explanation: "נפשט את אגף ימין. חמש איקס פחות שתי איקס משאיר שלוש איקס.", math_expression: "\u202A9x - 2 = 3x + 14\u202C" },
            { verbal_explanation: "נעביר משתנים לשמאל ומספרים לימין תוך החלפת סימנים.", math_expression: "\u202A9x - 3x = 14 + 2\u202C" },
            { verbal_explanation: "נחשב את ההפרשים.", math_expression: "\u202A6x = 16\u202C" },
            { verbal_explanation: "נחלק בשש לקבלת הפתרון המדויק. (ניתן לרשום כשבר מדומֶה או מעורב).", math_expression: "\u202Ax = 16 / 6 = 8 / 3 = 2.66...\u202C" }
        ],
        final_answer: "\u202Ax = 2.66...\u202C"
    },

    // ========================================================================
    // תת נושא 2: משוואות עם סוגריים ושברים
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "פתרו את המשוואה הבאה הכוללת פתיחת סוגריים פשוטה:<br><br>\u202A3(x - 2) = 15\u202C",
        options: ["\u202Ax = 7\u202C", "\u202Ax = 5\u202C", "\u202Ax = 9\u202C", "\u202Ax = 11\u202C"],
        correctAnswer: 0,
        hint: "הכפילו את המספר 3 בכל אחד מהאיברים שבתוך הסוגריים (3 כפול x, ואז 3 כפול מינוס 2). לאחר מכן, פתרו כמשוואה רגילה.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים באמצעות חוק הפילוג. המספר החיצוני מוכפל בכל איבר בפנים.", math_expression: "\u202A3x - 6 = 15\u202C" },
            { verbal_explanation: "נעביר את המספר שש אל האגף הימני בסימן חיובי.", math_expression: "\u202A3x = 15 + 6\u202C" },
            { verbal_explanation: "נחבר את המספרים.", math_expression: "\u202A3x = 21\u202C" },
            { verbal_explanation: "נחלק בשלוש למציאת המשתנה.", math_expression: "\u202Ax = 7\u202C" }
        ],
        final_answer: "\u202Ax = 7\u202C"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "שימו לב לפתיחת סוגריים עם מקדם שלילי. פתרו את המשוואה:<br><br>\u202A-2(x + 4) = -10\u202C",
        options: ["\u202Ax = 1\u202C", "\u202Ax = -1\u202C", "\u202Ax = 9\u202C", "\u202Ax = -9\u202C"],
        correctAnswer: 0,
        hint: "כשמכפילים במינוס 2, סימני כל האיברים בתוך הסוגריים מתהפכים. 4 חיובי יהפוך למינוס 8.",
        solution_steps: [
            { verbal_explanation: "נפתח סוגריים. המקדם שלילי ולכן הופך כל איבר בפנים למנוגד לו.", math_expression: "\u202A-2x - 8 = -10\u202C" },
            { verbal_explanation: "נעביר את השמונה שמאלה. מינוס עשר ועוד שמונה שווה מינוס שתיים.", math_expression: "\u202A-2x = -10 + 8  =>  -2x = -2\u202C" },
            { verbal_explanation: "נחלק את המשוואה במינוס שתיים. שלילי חלקי שלילי הופך לחיובי.", math_expression: "\u202Ax = 1\u202C" }
        ],
        final_answer: "\u202Ax = 1\u202C"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "פתרו משוואה המכילה סוגריים משני צידיה:<br><br>\u202A5(2x - 1) = 3(3x + 2)\u202C",
        options: ["\u202Ax = 11\u202C", "\u202Ax = 1\u202C", "\u202Ax = -11\u202C", "\u202Ax = 1.1\u202C"],
        correctAnswer: 0,
        hint: "פתחו את שני הצדדים בנפרד לפי חוק הפילוג. בצד שמאל תקבלו 10x - 5. עשו את אותו הדבר בצד ימין, ולאחר מכן העבירו אגפים.",
        solution_steps: [
            { verbal_explanation: "נפעיל את חוק הפילוג על אגף שמאל.", math_expression: "\u202A10x - 5\u202C" },
            { verbal_explanation: "נפעיל את חוק הפילוג על אגף ימין.", math_expression: "\u202A9x + 6\u202C" },
            { verbal_explanation: "נאחד את שני האגפים למשוואה אחת רציפה.", math_expression: "\u202A10x - 5 = 9x + 6\u202C" },
            { verbal_explanation: "נעביר את המשתנים לאגף שמאל ואת המספרים לימין.", math_expression: "\u202A10x - 9x = 6 + 5\u202C" },
            { verbal_explanation: "נחשב ונגלה את הפתרון מיד.", math_expression: "\u202Ax = 11\u202C" }
        ],
        final_answer: "\u202Ax = 11\u202C"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "סדר פעולות קודם לפתיחת סוגריים! פתרו את המשוואה הבאה:<br><br>\u202A4 - 2(x - 3) = 10\u202C",
        options: ["\u202Ax = 0\u202C", "\u202Ax = 3\u202C", "\u202Ax = -3\u202C", "\u202Ax = 6\u202C"],
        correctAnswer: 0,
        hint: "המלכודת הנפוצה ביותר! אסור לחשב '4 פחות 2'. המינוס 2 כפול בסוגריים ו'קשור' אליהם. פתחו את הסוגריים בהכפלה במינוס 2, ורק אז כנסו איברים עם ה-4.",
        solution_steps: [
            { verbal_explanation: "נתייחס למקדם של הסוגריים כ'מינוס שתיים' ונכפיל אותו פנימה. מינוס כפול מינוס שלוש נותן פלוס שש.", math_expression: "\u202A4 - 2x + 6 = 10\u202C" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי (ארבע ועוד שש).", math_expression: "\u202A10 - 2x = 10\u202C" },
            { verbal_explanation: "נעביר את העשר לאגף הימני בחיסור. הוא יבטל את העשר הקיים שם.", math_expression: "\u202A-2x = 10 - 10  =>  -2x = 0\u202C" },
            { verbal_explanation: "אפס חלקי כל מספר הוא תמיד אפס.", math_expression: "\u202Ax = 0\u202C" }
        ],
        final_answer: "\u202Ax = 0\u202C"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "היזהרו מהמינוס המסתתר! פתרו את המשוואה:<br><br>\u202Ax - (2x - 5) = 3\u202C",
        options: ["\u202Ax = 2\u202C", "\u202Ax = 8\u202C", "\u202Ax = -2\u202C", "\u202Ax = 4\u202C"],
        correctAnswer: 0,
        hint: "מינוס לפני סוגריים פועל כמו המקדם (מינוס אחד). הוא הופך את כל הסימנים שבתוך הסוגריים. ה-2x יהפוך למינוס, והמינוס 5 יהפוך לפלוס.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים תוך היפוך הסימנים של כל מה שבפנים בגלל המינוס החיצוני.", math_expression: "\u202Ax - 2x + 5 = 3\u202C" },
            { verbal_explanation: "נכנס את האיקסים באגף שמאל.", math_expression: "\u202A-x + 5 = 3\u202C" },
            { verbal_explanation: "נעביר את החמש ימינה בחיסור.", math_expression: "\u202A-x = 3 - 5  =>  -x = -2\u202C" },
            { verbal_explanation: "נכפיל במינוס אחד למציאת הערך החיובי.", math_expression: "\u202Ax = 2\u202C" }
        ],
        final_answer: "\u202Ax = 2\u202C"
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "עוברים לשברים. פתרו את המשוואה שבה הביטוי כולו נמצא במונה:<br><br>\u202A(x + 2) / 3 = 4\u202C",
        options: ["\u202Ax = 10\u202C", "\u202Ax = 14\u202C", "\u202Ax = 12\u202C", "\u202Ax = 6\u202C"],
        correctAnswer: 0,
        hint: "היפטרו קודם מהמכנה המפריע על ידי הכפלת שני אגפי המשוואה ב-3. כך תישארו עם משוואה פשוטה וללא שברים.",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל המשוואה בשלוש. האגף השמאלי משתחרר מהמכנה, והאגף הימני מוכפל.", math_expression: "\u202Ax + 2 = 12\u202C" },
            { verbal_explanation: "מעבירים את השתיים לאגף הימני בחיסור ומקבלים פתרון.", math_expression: "\u202Ax = 10\u202C" }
        ],
        final_answer: "\u202Ax = 10\u202C"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "מהו הפתרון של המשוואה הבאה המכילה שני שברים?<br><br>\u202A(2x - 1) / 5 = x / 2\u202C",
        options: ["\u202Ax = -2\u202C", "\u202Ax = 2\u202C", "\u202Ax = -1\u202C", "\u202Ax = 0.5\u202C"],
        correctAnswer: 0,
        hint: "כאשר יש שבר שווה לשבר, השיטה המהירה ביותר היא 'כפל בהצלבה'. כפלו את המונה השמאלי (הכולל) ב-2, ואת המונה הימני ב-5.",
        solution_steps: [
            { verbal_explanation: "נבצע כפל בהצלבה. שתיים יכפיל את המונה השמאלי (חובה לשים סוגריים), וחמש יכפיל את המונה הימני.", math_expression: "\u202A2(2x - 1) = 5x\u202C" },
            { verbal_explanation: "נפתח את הסוגריים שהתקבלו.", math_expression: "\u202A4x - 2 = 5x\u202C" },
            { verbal_explanation: "נעביר את ארבע איקס ימינה, כדי שיישאר לנו איקס אחד חיובי.", math_expression: "\u202A-2 = 5x - 4x\u202C" },
            { verbal_explanation: "התוצאה מתקבלת ישירות.", math_expression: "\u202Ax = -2\u202C" }
        ],
        final_answer: "\u202Ax = -2\u202C"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "כאשר יש מספר שברים, מחפשים מכנה משותף. פתרו את המשוואה:<br><br>\u202Ax / 3 + x / 4 = 14\u202C",
        options: ["\u202Ax = 24\u202C", "\u202Ax = 12\u202C", "\u202Ax = 42\u202C", "\u202Ax = 14\u202C"],
        correctAnswer: 0,
        hint: "המכנה המשותף הקטן ביותר ל-3 ול-4 הוא 12. כפלו את כל חלקי המשוואה (כולל את ה-14!) במספר 12 כדי להעלים את השברים.",
        solution_steps: [
            { verbal_explanation: "המחלק המשותף הקטן ביותר הוא 12. נכפיל את כל המשוואה בו. השבר הראשון יוכפל ב-4, השני ב-3, והמספר החופשי ב-12.", math_expression: "\u202A4x + 3x = 14 × 12\u202C" },
            { verbal_explanation: "נכנס איברים משמאל ונבצע את הכפל מימין.", math_expression: "\u202A7x = 168\u202C" },
            { verbal_explanation: "נחלק בשבע לקבלת התשובה.", math_expression: "\u202Ax = 24\u202C" }
        ],
        final_answer: "\u202Ax = 24\u202C"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "הרכיבו הכל יחד – שברים עם פולינומים במונה ומכנה משותף:<br><br>\u202A(x - 1) / 2 + (x + 1) / 3 = 4\u202C",
        options: ["\u202Ax = 5\u202C", "\u202Ax = 3\u202C", "\u202Ax = 7\u202C", "\u202Ax = 4\u202C"],
        correctAnswer: 0,
        hint: "המכנה המשותף ל-2 ול-3 הוא 6. כפלו הכל ב-6. השבר הראשון יוכפל פי 3 (בסוגריים), השבר השני יוכפל פי 2 (בסוגריים), והמספר 4 יוכפל גם הוא ב-6.",
        solution_steps: [
            { verbal_explanation: "נכפיל את המשוואה במכנה משותף שש כדי לבטל שברים.", math_expression: "\u202A3(x - 1) + 2(x + 1) = 4 × 6\u202C" },
            { verbal_explanation: "נפתח את הסוגריים לפי חוק הפילוג.", math_expression: "\u202A3x - 3 + 2x + 2 = 24\u202C" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי.", math_expression: "\u202A5x - 1 = 24\u202C" },
            { verbal_explanation: "נעביר את האחד ימינה ונחלק בחמש.", math_expression: "\u202A5x = 25  =>  x = 5\u202C" }
        ],
        final_answer: "\u202Ax = 5\u202C"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "שילוב מסוכן! חיסור לפני שבר אומר שיש להיזהר מהסימנים. פתרו:<br><br>\u202Ax - (x - 2) / 4 = 5\u202C",
        options: ["\u202Ax = 6\u202C", "\u202Ax = 7.33\u202C", "\u202Ax = 4\u202C", "\u202Ax = -6\u202C"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא 4. כפלו את כל המשוואה ב-4. החשוב ביותר: השבר כולו מוכפל ב-1, אבל בגלל המינוס שלפניו, התייחסו למונה כאילו הוא בתוך סוגריים שעליהם פועל מינוס.",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל המשוואה בארבע. איבר ראשון ואחרון יוכפלו, השבר יאבד את המכנה שלו, אך נשמור עליו בסוגריים בגלל המינוס.", math_expression: "\u202A4x - (x - 2) = 20\u202C" },
            { verbal_explanation: "נפתח את הסוגריים. המינוס הופך את מינוס שתיים לפלוס שתיים.", math_expression: "\u202A4x - x + 2 = 20\u202C" },
            { verbal_explanation: "נכנס איברים ונעביר מספרים.", math_expression: "\u202A3x = 18\u202C" },
            { verbal_explanation: "נחלק בשלוש.", math_expression: "\u202Ax = 6\u202C" }
        ],
        final_answer: "\u202Ax = 6\u202C"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "פתרו את המשוואה הארוכה הבאה המכילה מספר פתיחות סוגריים:<br><br>\u202A2(x - 1) - 3(2x - 4) = -2\u202C",
        options: ["\u202Ax = 3\u202C", "\u202Ax = -3\u202C", "\u202Ax = 1.5\u202C", "\u202Ax = 2\u202C"],
        correctAnswer: 0,
        hint: "פתחו את הזוג הראשון. לאחר מכן, הקפידו להכפיל את כל הזוג השני במינוס שלוש (-3). מינוס 3 כפול מינוס 4 שווה פלוס 12.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים השמאליים.", math_expression: "\u202A2x - 2\u202C" },
            { verbal_explanation: "נפתח את הסוגריים הימניים תוך הכפלה זהירה במינוס שלוש.", math_expression: "\u202A-6x + 12\u202C" },
            { verbal_explanation: "נחבר הכל חזרה למשוואה השלמה ונכנס איברים דומים באגף שמאל.", math_expression: "\u202A-4x + 10 = -2\u202C" },
            { verbal_explanation: "נעביר את עשר ימינה בחיסור.", math_expression: "\u202A-4x = -12\u202C" },
            { verbal_explanation: "נחלק במינוס ארבע ונקבל מספר חיובי.", math_expression: "\u202Ax = 3\u202C" }
        ],
        final_answer: "\u202Ax = 3\u202C"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: `גיאומטריה הופכת למשוואה: לפניכם מלבן. רוחבו מוגדר כ-\u202Ax\u202C ס"מ, ואורכו מוגדר כ-\u202Ax+5\u202C ס"מ.<br>ידוע כי ההיקף הכולל של המלבן הוא 34 ס"מ. בראי נתונים אלו, מצאו את משוואת ההיקף, פתרו אותה, וגלו מהו \u202Ax\u202C.<br><br>
        <svg viewBox="0 0 250 150" style="width:100%; max-width:300px; display:block; margin:15px auto; background:#f8fafc; border-radius:8px; border:1px solid #cbd5e1;">
            <rect x="50" y="30" width="150" height="90" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="3"/>
            <text x="125" y="20" font-size="16" fill="#0f172a" font-weight="bold" text-anchor="middle">x + 5</text>
            <text x="30" y="80" font-size="16" fill="#0f172a" font-weight="bold" text-anchor="middle">x</text>
            <text x="125" y="80" font-size="14" fill="#3b82f6" font-weight="bold" text-anchor="middle">היקף = 34</text>
        </svg>`,
        options: ["\u202Ax = 6\u202C", "\u202Ax = 4.5\u202C", "\u202Ax = 7\u202C", "\u202Ax = 12\u202C"],
        correctAnswer: 0,
        hint: "היקף מלבן שווה לפעמיים האורך ועוד פעמיים הרוחב. לכן: 2 פעמים (x+5) ועוד 2 פעמים x, כל זה שווה ל-34.",
        solution_steps: [
            { verbal_explanation: "נבנה את משוואת ההיקף. היקף הוא סכום כל הצלעות: פעמיים רוחב ופעמיים אורך.", math_expression: "\u202A2x + 2(x + 5) = 34\u202C" },
            { verbal_explanation: "נפתח את הסוגריים המייצגות את צלעות האורך.", math_expression: "\u202A2x + 2x + 10 = 34\u202C" },
            { verbal_explanation: "נכנס איברים זהים.", math_expression: "\u202A4x + 10 = 34\u202C" },
            { verbal_explanation: "נעביר את עשר לאגף השני בחיסור ונחלק בארבע.", math_expression: "\u202A4x = 24  =>  x = 6\u202C" }
        ],
        final_answer: "\u202Ax = 6\u202C"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "שימו לב היטב למשוואה הבאה המכילה עשרוניים:<br><br>\u202A0.5(4x - 6) = 0.2(10x - 15)\u202C",
        options: ["אינסוף פתרונות", "אין פתרון", "\u202Ax = 0\u202C", "\u202Ax = 3\u202C"],
        correctAnswer: 0,
        hint: "הכפלה ב-0.5 פירושה לחלק לשניים את מה שבסוגריים. הכפלה ב-0.2 פירושה לחלק בחמש את מה שבסוגריים. פתחו ובדקו האם האגפים שווים.",
        solution_steps: [
            { verbal_explanation: "נפתח את הסוגריים באגף שמאל. חצי מארבע איקס זה שתי איקס, חצי משש זה שלוש.", math_expression: "\u202A2x - 3\u202C" },
            { verbal_explanation: "נפתח את הסוגריים באגף ימין. חמישית מעשר זה שתיים, חמישית מחמש עשרה זה שלוש.", math_expression: "\u202A2x - 3\u202C" },
            { verbal_explanation: "נציב הכל במשוואה ונגלה שקיבלנו שני אגפים זהים לחלוטין.", math_expression: "\u202A2x - 3 = 2x - 3\u202C" },
            { verbal_explanation: "כאשר שני אגפי המשוואה זהים, מדובר בזהות שמתקיימת עבור כל מספר בעולם. לכן יש אינסוף פתרונות.", math_expression: "\u202ATrue Statement\u202C" }
        ],
        final_answer: "אינסוף פתרונות"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "משוואה קלאסית עם מכנה משותף שדורשת זהירות עם הסימן האמצעי:<br><br>\u202A(3x + 1) / 6 - (2x - 3) / 4 = 1\u202C",
        options: ["אין פתרון", "אינסוף פתרונות", "\u202Ax = 5\u202C", "\u202Ax = 0\u202C"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא 12. השבר הראשון יוכפל ב-2, השני ב-3 (אבל שימו לב למינוס שלפניו! אז הוא מוכפל במינוס 3), וה-1 יוכפל ב-12.",
        solution_steps: [
            { verbal_explanation: "נכפיל את כל המשוואה במכנה משותף 12 ונכתוב את הפולינומים בסוגריים לקראת פתיחתם.", math_expression: "\u202A2(3x + 1) - 3(2x - 3) = 12\u202C" },
            { verbal_explanation: "נפתח סוגריים. המינוס שלוש שובר את הסימנים בסוגריים השניים והופך את המינוס שלוש שבפנים לפלוס תשע.", math_expression: "\u202A6x + 2 - 6x + 9 = 12\u202C" },
            { verbal_explanation: "נכנס איברים באגף השמאלי. שש איקס ומינוס שש איקס מתבטלים. נשארנו עם חיבור מספרים.", math_expression: "\u202A11 = 12\u202C" },
            { verbal_explanation: "קיבלנו פסוק שקר, אחת עשרה לעולם לא יהיה שווה לשתים עשרה. מכאן שלמשוואה זו אין אף פתרון.", math_expression: "\u202AFalse Statement\u202C" }
        ],
        final_answer: "אין פתרון"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "משוואות לינאריות",
        subTopic: "משוואות עם סוגריים ושברים",
        question: "אתגר אחרון: משוואה בעלת סוגריים כפולים (סוגריים בתוך סוגריים):<br><br>\u202A2[ x - 3(x - 1) ] = 4\u202C",
        options: ["\u202Ax = 0.5\u202C", "\u202Ax = 1\u202C", "\u202Ax = -0.5\u202C", "\u202Ax = 2\u202C"],
        correctAnswer: 0,
        hint: "הכי קל לחלק קודם כל את כל המשוואה ב-2 החיצוני (או לפתוח מבפנים החוצה). אם מחלקים ב-2, נשאר x פחות 3 פעמים (x-1) שווה ל-2. המשיכו משם.",
        solution_steps: [
            { verbal_explanation: "נפשט את המשוואה מיד על ידי חלוקת שני האגפים בשתיים. כך ניפטר מהסוגריים המרובעים החיצוניים.", math_expression: "\u202Ax - 3(x - 1) = 2\u202C" },
            { verbal_explanation: "נפתח את הסוגריים העגולים שנותרו על ידי הכפלה זהירה במינוס שלוש.", math_expression: "\u202Ax - 3x + 3 = 2\u202C" },
            { verbal_explanation: "נכנס איברים למשתנה איקס, ונעביר את המספר החופשי לאגף הימני.", math_expression: "\u202A-2x = 2 - 3  =>  -2x = -1\u202C" },
            { verbal_explanation: "נחלק במינוס שתיים לקבלת פתרון חיובי השווה לחצי.", math_expression: "\u202Ax = 0.5\u202C" }
        ],
        final_answer: "\u202Ax = 0.5\u202C"
    }
];