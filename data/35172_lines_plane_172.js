const questionsDB = [
    // ========================================================================
    // נושא: ישר במישור | תת נושא: שיפוע (15 שאלות)
    // ========================================================================
    
    // שאלה 1
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו השיפוע של הישר הבא?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = 5x - 2</div>`,
        options: [
            "5",
            "-2",
            "x",
            "2"
        ],
        correctAnswer: 0,
        hint: "כאשר משוואת הישר מסודרת כך שהמשתנה y מבודד, השיפוע הוא המספר (המקדם) שכופל את המשתנה x.",
        solution_steps: [
            { verbal_explanation: "נוודא שמשוואת הישר מסודרת בצורה המפורשת והתקנית.", math_expression: "y = mx + b" },
            { verbal_explanation: "השיפוע מסומן תמיד באות m, והוא למעשה המספר המופיע צמוד למשתנה בביטוי.", math_expression: "m = 5" }
        ],
        final_answer: "5"
    },

    // שאלה 2
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו השיפוע של הישר הבא?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = -3x + 8</div>`,
        options: [
            "-3",
            "3",
            "8",
            "-8"
        ],
        correctAnswer: 0,
        hint: "השיפוע כולל את הסימן שלפני המספר. אל תשכחו את המינוס.",
        solution_steps: [
            { verbal_explanation: "נבחן את משוואת הישר ונחפש את המקדם, כולל הסימן המקדים שלו.", math_expression: "y = -3x + 8" },
            { verbal_explanation: "נחלץ את הערך המדויק מתוך המשוואה המסודרת.", math_expression: "m = -3" }
        ],
        final_answer: "-3"
    },

    // שאלה 3
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו השיפוע של הישר הבא?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = 7</div>`,
        options: [
            "0",
            "7",
            "1",
            "לא מוגדר"
        ],
        correctAnswer: 0,
        hint: "אם המשתנה הראשון אינו מופיע במשוואה כלל, המשמעות היא שהמקדם שלו התאפס. זהו ישר אופקי לחלוטין.",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת הישר המקורית בצורה מלאה הכוללת גם את המשתנה החסר כדי להבין מה קרה לו.", math_expression: "y = 0x + 7" },
            { verbal_explanation: "ניתן לראות בבירור שהמקדם התאפס, ולכן לישר זה אין שיפוע (הוא אפס).", math_expression: "m = 0" }
        ],
        final_answer: "0"
    },

    // שאלה 4
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו השיפוע של הישר הבא?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x = 4</div>`,
        options: [
            "לא מוגדר (אין שיפוע)",
            "0",
            "4",
            "1"
        ],
        correctAnswer: 0,
        hint: "ישר שמשוואתו מקבעת ערך אחד בלבד (ללא y) הוא ישר מאונך (אנכי). לישר כזה אין שיפוע מוגדר במתמטיקה.",
        solution_steps: [
            { verbal_explanation: "משוואה מהסוג הזה מתארת קו אנכי לחלוטין שאינו מתקדם ימינה או שמאלה אלא רק עולה ויורד לאורך ציר נתון.", math_expression: "x = 4" },
            { verbal_explanation: "קו אנכי מוגדר במתמטיקה כקו חסר שיפוע או בעל שיפוע לא מוגדר בעליל.", math_expression: "m = ?" }
        ],
        final_answer: "לא מוגדר (אין שיפוע)"
    },

    // שאלה 5
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו השיפוע של הישר המוגדר על ידי המשוואה הבאה?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">2y = 8x + 10</div>`,
        options: [
            "4",
            "8",
            "10",
            "2"
        ],
        correctAnswer: 0,
        hint: "לפני שקובעים מהו השיפוע, חייבים לבודד את המשתנה לגמרי. חלקו את כל המשוואה בשתיים.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא שיפוע, המשתנה השני חייב להיות מבודד לחלוטין וללא מקדם. נחלק את המשוואה כולה בשתיים.", math_expression: "2y / 2 = 8x / 2 + 10 / 2" },
            { verbal_explanation: "נרשום את המשוואה המפורשת שהתקבלה לאחר החילוק ההוגן.", math_expression: "y = 4x + 5" },
            { verbal_explanation: "כעת נוכל לזהות בקלות את המקדם המבוקש.", math_expression: "m = 4" }
        ],
        final_answer: "4"
    },

    // שאלה 6
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו השיפוע של הישר הבא?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">3x + y = 6</div>`,
        options: [
            "-3",
            "3",
            "6",
            "-6"
        ],
        correctAnswer: 0,
        hint: "העבירו את כל האיברים למעט המשתנה השני לאגף הנגדי כדי להגיע לצורה המפורשת של הישר.",
        solution_steps: [
            { verbal_explanation: "נבודד את המשתנה השמאלי על ידי העברת המשתנה הימני לאגף השני בסימן הפוך כנדרש.", math_expression: "y = -3x + 6" },
            { verbal_explanation: "נאתר את המקדם, כולל הסימן שנוצר.", math_expression: "m = -3" }
        ],
        final_answer: "-3"
    },

    // שאלה 7
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מצאו את שיפוע הישר על פי המשוואה הבאה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">4x - 2y = 12</div>`,
        options: [
            "2",
            "-2",
            "4",
            "-4"
        ],
        correctAnswer: 0,
        hint: "העבירו את האיבר השלילי לאגף ימין כדי שיהיה חיובי, ואת המספר החופשי שמאלה. לאחר מכן חלקו בשתיים.",
        solution_steps: [
            { verbal_explanation: "נסדר את המשוואה כך שהמשתנה שאנו מבודדים יהיה בעל מקדם חיובי.", math_expression: "4x - 12 = 2y" },
            { verbal_explanation: "נחלק את המשוואה כולה בשתיים כדי להגיע לצורה המפורשת והסופית.", math_expression: "2y / 2 = 4x / 2 - 12 / 2" },
            { verbal_explanation: "נרשום את המשוואה ונדלה מתוכה את המקדם.", math_expression: "y = 2x - 6 <br><br> m = 2" }
        ],
        final_answer: "2"
    },

    // שאלה 8
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `חשבו את שיפוע הישר העובר דרך שתי הנקודות הבאות:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(1, 3) , (4, 9)</div>`,
        options: [
            "2",
            "3",
            "0.5",
            "6"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת השיפוע: הפרש ערכי הנקודות בציר האנכי חלקי ההפרש בציר האופקי.",
        solution_steps: [
            { verbal_explanation: "נציב את שיעורי שתי הנקודות בתוך נוסחת השיפוע הסטנדרטית.", math_expression: "m = (9 - 3) / (4 - 1)" },
            { verbal_explanation: "נבצע את פעולות החיסור במונה ובמכנה בנפרד.", math_expression: "m = 6 / 3" },
            { verbal_explanation: "נחלק לקבלת התוצאה המדויקת.", math_expression: "m = 2" }
        ],
        final_answer: "2"
    },

    // שאלה 9
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `חשבו את שיפוע הישר העובר דרך שתי הנקודות (הקפידו על סימנים):<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(-2, 5) , (3, -10)</div>`,
        options: [
            "-3",
            "3",
            "-1",
            "-5"
        ],
        correctAnswer: 0,
        hint: "הקפידו על כתיבה מדויקת. חיסור של מספר שלילי (במכנה) הופך לחיבור.",
        solution_steps: [
            { verbal_explanation: "נציב את הנקודות בנוסחה. נזהר מאוד עם המינוסים הרצופים שנוצרים בתחתית השבר.", math_expression: "m = (-10 - 5) / (3 - (-2))" },
            { verbal_explanation: "נחשב את המונה כשני מספרים שליליים, ואת המכנה כפעולת חיבור לכל דבר.", math_expression: "m = -15 / (3 + 2)" },
            { verbal_explanation: "נבצע חלוקה לקבלת ערך קצב הירידה.", math_expression: "m = -15 / 5 = -3" }
        ],
        final_answer: "-3"
    },

    // שאלה 10
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו שיפוע הישר העובר דרך הנקודות הבאות?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">(4, 7) , (-1, 7)</div>`,
        options: [
            "0",
            "7",
            "לא מוגדר",
            "5"
        ],
        correctAnswer: 0,
        hint: "שימו לב שלשתי הנקודות יש בדיוק את אותו הגובה (הערך השני). משמעות הדבר היא שמדובר בקו אופקי לחלוטין.",
        solution_steps: [
            { verbal_explanation: "נציב בנוסחה ונראה מה קורה לפעולת החיסור במונה השבר.", math_expression: "m = (7 - 7) / (-1 - 4)" },
            { verbal_explanation: "המונה מתאפס לחלוטין מכיוון שאין הפרש גבהים כלל בין הנקודות.", math_expression: "m = 0 / -5" },
            { verbal_explanation: "אפס לחלק לכל מספר שהוא שווה לאפס תמיד.", math_expression: "m = 0" }
        ],
        final_answer: "0"
    },

    // שאלה 11
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `ישר מסוים מקביל לישר שמשוואתו היא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = 6x - 1</div>
        מהו שיפועו של הישר המסוים?`,
        options: [
            "6",
            "-1",
            "-6",
            "1/6"
        ],
        correctAnswer: 0,
        hint: "כלל ברזל בגיאומטריה אנליטית: לישרים המקבילים זה לזה יש בדיוק את אותו השיפוע ללא שום שינוי.",
        solution_steps: [
            { verbal_explanation: "נמצא את השיפוע של הישר המקורי הנתון לנו במשוואה המפורשת בתרגיל.", math_expression: "m1 = 6" },
            { verbal_explanation: "מאחר והישרים מקבילים לעולמים ואינם נפגשים, הם חייבים להיות בעלי אותו שיפוע בדיוק.", math_expression: "m2 = 6" }
        ],
        final_answer: "6"
    },

    // שאלה 12
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `ישר מסוים מקביל לקו שעובר דרך ראשית הצירים <span dir="ltr">(0, 0)</span> ודרך הנקודה <span dir="ltr">(2, 10)</span>.<br>
        מהו שיפועו של ישר זה?`,
        options: [
            "5",
            "10",
            "2",
            "-5"
        ],
        correctAnswer: 0,
        hint: "חשבו קודם את השיפוע של קו הבסיס שעובר בין שתי הנקודות הנתונות. השיפוע של הישר המקביל אליו יהיה זהה לחלוטין.",
        solution_steps: [
            { verbal_explanation: "נחשב את השיפוע של קו הבסיס בעזרת שתי הנקודות שעליהן הוא עובר.", math_expression: "m1 = (10 - 0) / (2 - 0)" },
            { verbal_explanation: "נבצע את החלוקה הפשוטה.", math_expression: "m1 = 10 / 2 = 5" },
            { verbal_explanation: "בשל תכונת ההקבלה, לישר החדש יהיה בדיוק אותו השיפוע.", math_expression: "m2 = 5" }
        ],
        final_answer: "5"
    },

    // שאלה 13
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו שיפוע הישר המתואר בגרף הבא?<br>
        <svg viewBox="0 0 200 200" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
            <line x1="20" y1="160" x2="180" y2="160" stroke="#94a3b8" stroke-width="2"/> <line x1="60" y1="20" x2="60" y2="180" stroke="#94a3b8" stroke-width="2"/> <line x1="40" y1="180" x2="140" y2="80" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="60" cy="160" r="4" fill="#0f172a"/>
            <text x="65" y="175" font-family="Arial" font-size="10" fill="#334155">(0, 0)</text>
            <circle cx="100" cy="120" r="4" fill="#0f172a"/>
            <text x="105" y="115" font-family="Arial" font-size="10" fill="#334155">(2, 4)</text>
        </svg>`,
        options: [
            "2",
            "4",
            "0.5",
            "-2"
        ],
        correctAnswer: 0,
        hint: "היעזרו בשתי הנקודות המסומנות על הגרף. הציבו אותן בנוסחת השיפוע הרגילה.",
        solution_steps: [
            { verbal_explanation: "נחלץ את שיעורי שתי הנקודות הברורות מתוך השרטוט הגרפי שקיבלנו.", math_expression: "(0, 0) , (2, 4)" },
            { verbal_explanation: "נציב את הנתונים בנוסחת השיפוע הסטנדרטית.", math_expression: "m = (4 - 0) / (2 - 0)" },
            { verbal_explanation: "נחשב את התוצאה. זהו ישר עולה ולכן שיפועו חייב להיות חיובי.", math_expression: "m = 4 / 2 = 2" }
        ],
        final_answer: "2"
    },

    // שאלה 14
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו שיפוע הישר המתואר בגרף הבא?<br>
        <svg viewBox="0 0 200 200" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
            <line x1="20" y1="160" x2="180" y2="160" stroke="#94a3b8" stroke-width="2"/> <line x1="60" y1="20" x2="60" y2="180" stroke="#94a3b8" stroke-width="2"/> <line x1="40" y1="40" x2="160" y2="160" stroke="#ef4444" stroke-width="2"/>
            <circle cx="60" cy="60" r="4" fill="#0f172a"/>
            <text x="65" y="55" font-family="Arial" font-size="10" fill="#334155">(0, 5)</text>
            <circle cx="110" cy="110" r="4" fill="#0f172a"/>
            <text x="115" y="105" font-family="Arial" font-size="10" fill="#334155">(5, 0)</text>
        </svg>`,
        options: [
            "-1",
            "1",
            "-5",
            "0"
        ],
        correctAnswer: 0,
        hint: "הישר יורד כאשר קוראים אותו משמאל לימין, לכן השיפוע חייב להיות מספר שלילי. השתמשו בנקודות לחישוב מדויק.",
        solution_steps: [
            { verbal_explanation: "ניקח את שתי הנקודות המפורשות המצוינות על גבי הצירים בשרטוט.", math_expression: "(0, 5) , (5, 0)" },
            { verbal_explanation: "נציב את ערכי הנקודות בנוסחה ונזהר מאוד עם סדר החיסור כדי לא לטעות בסימן.", math_expression: "m = (0 - 5) / (5 - 0)" },
            { verbal_explanation: "נבצע את פעולת החילוק לקבלת קצב הירידה השלילי של הישר.", math_expression: "m = -5 / 5 = -1" }
        ],
        final_answer: "-1"
    },

    // שאלה 15
    {
        topic: "lines_plane_172",
        subTopic: "שיפוע",
        question_text: `מהו שיפוע הישר המסתתר במשוואה הבאה?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x + y - 10 = 0</div>`,
        options: [
            "-1",
            "1",
            "10",
            "-10"
        ],
        correctAnswer: 0,
        hint: "כדי למצוא את השיפוע, עליכם להשאיר אך ורק את המשתנה הרלוונטי בצד אחד, ולהעביר את כל שאר האיברים לצד השני.",
        solution_steps: [
            { verbal_explanation: "המשוואה כתובה בצורה סתומה לחלוטין. נסדר אותה למבנה מפורש על ידי בידוד המשתנה השני לבדו.", math_expression: "y = -x + 10" },
            { verbal_explanation: "משתנה שאין לפניו מספר גלוי, המקדם שלו נחשב לאחת. מאחר ויש סימן מינוס, המקדם המבוקש הוא שלילי.", math_expression: "m = -1" }
        ],
        final_answer: "-1"
    },

    // ========================================================================
    // נושא: ישר במישור | תת נושא: נקודת חיתוך עם הצירים (15 שאלות)
    // ========================================================================
    
    // שאלה 16
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מצאו את נקודת החיתוך של הישר הבא עם הציר האנכי (ציר ה-y):<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = 3x - 6</div>`,
        options: [
            "(0, -6)",
            "(-6, 0)",
            "(0, 3)",
            "(2, 0)"
        ],
        correctAnswer: 0,
        hint: "כל נקודה שנמצאת על הציר האנכי מאופיינת בכך שהערך האופקי שלה הוא אפס מוחלט. הציבו אפס במקום המשתנה הראשון.",
        solution_steps: [
            { verbal_explanation: "למציאת החיתוך עם הציר האנכי, אנו מציבים אפס במשתנה האופקי במשוואה.", math_expression: "x = 0" },
            { verbal_explanation: "נחשב את ערך המשוואה עבור ההצבה שביצענו כעת.", math_expression: "y = 3 × 0 - 6 <br><br> y = -6" },
            { verbal_explanation: "נרשום את התוצאה כנקודה תקנית במערכת צירים עם סוגריים מסודרים.", math_expression: "(0, -6)" }
        ],
        final_answer: "(0, -6)"
    },

    // שאלה 17
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מצאו את נקודת החיתוך של הישר הבא עם הציר האופקי (ציר ה-x):<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = 3x - 6</div>`,
        options: [
            "(2, 0)",
            "(0, 2)",
            "(-2, 0)",
            "(0, -6)"
        ],
        correctAnswer: 0,
        hint: "כל נקודה על הציר האופקי מאופיינת בכך שהגובה שלה הוא אפס. השוו את כל המשוואה לאפס ופתרו.",
        solution_steps: [
            { verbal_explanation: "למציאת חיתוך עם הציר האופקי, אנו מציבים אפס במשתנה האנכי (הגובה).", math_expression: "y = 0" },
            { verbal_explanation: "נפתור את המשוואה שנוצרה כעת לאחר איפוס האגף השמאלי.", math_expression: "0 = 3x - 6" },
            { verbal_explanation: "נעביר אגפים לפי הכללים ונחלק במקדם כדי למצוא את המשתנה החסר.", math_expression: "6 = 3x <br><br> x = 2" },
            { verbal_explanation: "נאגד את שני הערכים לנקודה אחת מסודרת כנדרש.", math_expression: "(2, 0)" }
        ],
        final_answer: "(2, 0)"
    },

    // שאלה 18
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מצאו את שתי נקודות החיתוך (עם שני הצירים השונים) של הישר הבא:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = -2x + 8</div>`,
        options: [
            "(0, 8) , (4, 0)",
            "(0, -2) , (8, 0)",
            "(8, 0) , (0, 4)",
            "(0, 8) , (-4, 0)"
        ],
        correctAnswer: 0,
        hint: "בצעו שתי פעולות הצבה נפרדות זו מזו. פעם אחת הציבו אפס במשתנה הראשון, ובפעם השנייה הציבו אפס במשתנה השני.",
        solution_steps: [
            { verbal_explanation: "נמצא את החיתוך האנכי על ידי איפוס המשתנה הראשון במשוואה וחישוב מהיר.", math_expression: "x = 0 ➔ y = -2(0) + 8 = 8 ➔ (0, 8)" },
            { verbal_explanation: "נמצא את החיתוך האופקי על ידי איפוס המשתנה השני במשוואה ופתרונה.", math_expression: "y = 0 ➔ 0 = -2x + 8" },
            { verbal_explanation: "נפתור את המשוואה הלינארית הפשוטה שנוצרה לחילוץ הערך הדרוש.", math_expression: "2x = 8 ➔ x = 4 ➔ (4, 0)" }
        ],
        final_answer: "(0, 8) , (4, 0)"
    },

    // שאלה 19
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מהי נקודת החיתוך של הישר הבא עם הציר האנכי?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = 5x</div>`,
        options: [
            "(0, 0)",
            "(0, 5)",
            "(5, 0)",
            "אין נקודת חיתוך"
        ],
        correctAnswer: 0,
        hint: "ישר שאין לו מספר חופשי בסוף המשוואה המפורשת שלו, חייב לעבור בדיוק בנקודת האפס המרכזית של מערכת הצירים כולה.",
        solution_steps: [
            { verbal_explanation: "למציאת החיתוך האנכי כמבוקש, נציב אפס במקום המשתנה הראשון בתוך המשוואה הקיימת.", math_expression: "x = 0" },
            { verbal_explanation: "נחשב את המכפלה הפשוטה ונגלה את הגובה באותה נקודה.", math_expression: "y = 5 × 0 = 0" },
            { verbal_explanation: "הנקודה שהתקבלה היא ראשית הצירים המקורית והידועה.", math_expression: "(0, 0)" }
        ],
        final_answer: "(0, 0)"
    },

    // שאלה 20
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מצאו את נקודות החיתוך של הישר הבא עם שני הצירים המרכזיים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">2y = 4x - 12</div>`,
        options: [
            "(0, -6) , (3, 0)",
            "(0, -12) , (3, 0)",
            "(0, -6) , (4, 0)",
            "(0, -12) , (12, 0)"
        ],
        correctAnswer: 0,
        hint: "מומלץ בחום לסדר את המשוואה לצורתה המפורשת והתקנית (לחלק הכל בשתיים) לפני שמתחילים להציב ערכים.",
        solution_steps: [
            { verbal_explanation: "נחלק את המשוואה כולה בשתיים כדי להקל ולפשט את המשך העבודה המספרית.", math_expression: "y = 2x - 6" },
            { verbal_explanation: "נמצא את נקודת המפגש עם הציר האנכי באופן מיידי מהמספר החופשי.", math_expression: "x = 0 ➔ y = -6 ➔ (0, -6)" },
            { verbal_explanation: "נמצא את נקודת המפגש עם הציר האופקי על ידי איפוס והעברת אגפים.", math_expression: "y = 0 ➔ 0 = 2x - 6 ➔ 2x = 6 ➔ x = 3 ➔ (3, 0)" }
        ],
        final_answer: "(0, -6) , (3, 0)"
    },

    // שאלה 21
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מצאו את נקודות החיתוך של הישר הבא הנתון במשוואה סתומה:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">3x + 2y = 12</div>`,
        options: [
            "(4, 0) , (0, 6)",
            "(12, 0) , (0, 12)",
            "(3, 0) , (0, 2)",
            "(0, 4) , (6, 0)"
        ],
        correctAnswer: 0,
        hint: "אין חובה לסדר! אפשר להציב אפס בגרסה הזו של המשוואה. פעם אחת תעלימו איבר אחד, ופעם את השני.",
        solution_steps: [
            { verbal_explanation: "נציב אפס במשתנה האופקי ונפתור משוואה קצרה כדי למצוא את החיתוך האנכי הנדרש.", math_expression: "x = 0 ➔ 3(0) + 2y = 12 ➔ 2y = 12 ➔ y = 6 ➔ (0, 6)" },
            { verbal_explanation: "נציב אפס במשתנה האנכי ונפתור משוואה נוספת כדי למצוא את החיתוך האופקי התואם.", math_expression: "y = 0 ➔ 3x + 2(0) = 12 ➔ 3x = 12 ➔ x = 4 ➔ (4, 0)" }
        ],
        final_answer: "(4, 0) , (0, 6)"
    },

    // שאלה 22
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מהי נקודת החיתוך של הישר האנכי הבא עם ציר ה-y?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">x = 5</div>`,
        options: [
            "אין נקודת חיתוך",
            "(0, 5)",
            "(5, 0)",
            "(0, 0)"
        ],
        correctAnswer: 0,
        hint: "זהו קו אנכי לחלוטין שעובר דרך המספר חמש בציר האופקי. האם הוא יכול להיפגש אי פעם עם הציר האנכי המקביל אליו?",
        solution_steps: [
            { verbal_explanation: "קו שמשוואתו מקבעת רק את הערך האופקי הוא קו אנכי המקביל לחלוטין לציר המרכזי.", math_expression: "x = 5 ➔ y = ?" },
            { verbal_explanation: "מאחר והישר והציר מקבילים לעולמים, הם לעולם לא ייפגשו במרחב הגיאומטרי.", math_expression: "No Intersection" }
        ],
        final_answer: "אין נקודת חיתוך"
    },

    // שאלה 23
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מהי נקודת החיתוך של הישר האופקי הבא עם ציר ה-x?<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">y = -4</div>`,
        options: [
            "אין נקודת חיתוך",
            "(-4, 0)",
            "(0, -4)",
            "(0, 0)"
        ],
        correctAnswer: 0,
        hint: "זהו קו אופקי לחלוטין שעובר דרך גובה קבוע. הוא לעולם לא יעלה או ירד ויחצה את ציר האפס.",
        solution_steps: [
            { verbal_explanation: "משוואה זו מתארת ישר אופקי המקביל לציר התחתון ונמצא במרחק אנכי וקבוע ממנו.", math_expression: "y = -4 ➔ 0 = -4" },
            { verbal_explanation: "מכיוון שהצבנו אפס וקיבלנו פסוק שקר מתמטי, אנו מסיקים כי אין חיתוך עם הציר המדובר.", math_expression: "No Intersection" }
        ],
        final_answer: "אין נקודת חיתוך"
    },

    // שאלה 24
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `נתון כי שיפועו של ישר הוא 2, והוא חותך את הציר האנכי בנקודה <span dir="ltr">(0, 5)</span>.<br>
        מהי נקודת החיתוך של ישר זה עם הציר האופקי?`,
        options: [
            "(-2.5, 0)",
            "(2.5, 0)",
            "(-5, 0)",
            "(5, 0)"
        ],
        correctAnswer: 0,
        hint: "שלב א: בנו את משוואת הישר על פי השיפוע והמספר החופשי (החיתוך האנכי). שלב ב: הציבו אפס בגובה ופתרו את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נרכיב את משוואת הישר בעזרת השיפוע ונקודת החיתוך האנכית הנתונים לנו כעובדה מוכחת.", math_expression: "m = 2 , b = 5 ➔ y = 2x + 5" },
            { verbal_explanation: "למציאת החיתוך עם הציר האופקי, נשווה את הפונקציה לאפס.", math_expression: "y = 0 ➔ 0 = 2x + 5" },
            { verbal_explanation: "נפתור את המשוואה לחילוץ הערך המבוקש ולהרכבת הנקודה המלאה.", math_expression: "2x = -5 ➔ x = -2.5 ➔ (-2.5, 0)" }
        ],
        final_answer: "(-2.5, 0)"
    },

    // שאלה 25
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `ישר עובר דרך הנקודה <span dir="ltr">(2, 0)</span> ושיפועו הוא <span dir="ltr">-3</span>.<br>
        מהי נקודת החיתוך שלו עם הציר האנכי (ציר ה-y)?`,
        options: [
            "(0, 6)",
            "(0, -6)",
            "(0, -3)",
            "(0, 2)"
        ],
        correctAnswer: 0,
        hint: "השתמשו בנוסחה למציאת משוואת ישר על פי שיפוע ונקודה נתונה כדי לבנות את המשוואה. המספר החופשי בסוף הוא התשובה.",
        solution_steps: [
            { verbal_explanation: "נציב את נתוני הנקודה והשיפוע בנוסחה הרשמית למציאת ישר על גבי גרף.", math_expression: "y - 0 = -3(x - 2)" },
            { verbal_explanation: "נפתח את הסוגריים ונסדר למבנה תקני ומפורש.", math_expression: "y = -3x + 6" },
            { verbal_explanation: "המספר החופשי המבודד מראה באופן ישיר את גובה החיתוך בציר האנכי.", math_expression: "b = 6 ➔ (0, 6)" }
        ],
        final_answer: "(0, 6)"
    },

    // שאלה 26
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `<strong>מרחק חיתוך מראשית הצירים:</strong><br>
        נתון הישר שמשוואתו היא <span dir="ltr">y = 4x - 16</span>.<br>
        מהו המרחק בין נקודת החיתוך שלו עם הציר האופקי לבין נקודת ראשית הצירים <span dir="ltr">(0, 0)</span>?`,
        options: [
            "4 יחידות",
            "16 יחידות",
            "8 יחידות",
            "12 יחידות"
        ],
        correctAnswer: 0,
        hint: "מצאו את נקודת החיתוך עם הציר האופקי (כאשר הגובה שווה לאפס). המרחק של נקודה זו מראשית הצירים הוא פשוט הערך המוחלט שלה.",
        solution_steps: [
            { verbal_explanation: "נמצא את החיתוך עם הציר האופקי על ידי השוואת הגובה לאפס מוחלט.", math_expression: "y = 0 ➔ 0 = 4x - 16" },
            { verbal_explanation: "נפתור משוואה זו כדי לגלות היכן הישר פוגש את הקרקע.", math_expression: "4x = 16 ➔ x = 4 ➔ (4, 0)" },
            { verbal_explanation: "הנקודה ממוקמת על הציר בדיוק במרחק ארבעה צעדים ימינה מנקודת האפס המרכזית.", math_expression: "d = 4" }
        ],
        final_answer: "4 יחידות"
    },

    // שאלה 27
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `קראו את נתוני הגרף הבא וקבעו:<br>
        <svg viewBox="0 0 200 200" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px;">
            <line x1="20" y1="140" x2="180" y2="140" stroke="#94a3b8" stroke-width="2"/> <line x1="60" y1="20" x2="60" y2="180" stroke="#94a3b8" stroke-width="2"/> <line x1="20" y1="20" x2="180" y2="180" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="60" cy="60" r="4" fill="#0f172a"/>
            <text x="65" y="55" font-family="Arial" font-size="10" fill="#334155">(0, 3)</text>
            <circle cx="140" cy="140" r="4" fill="#0f172a"/>
            <text x="145" y="135" font-family="Arial" font-size="10" fill="#334155">(3, 0)</text>
        </svg>
        מהן נקודות החיתוך של הישר המסורטט עם הצירים המרכזיים?`,
        options: [
            "(0, 3) , (3, 0)",
            "(3, 3) , (0, 0)",
            "(0, -3) , (-3, 0)",
            "(0, 3) , (-3, 0)"
        ],
        correctAnswer: 0,
        hint: "זהו זיהוי חזותי מהיר מתוך השרטוט. מצאו היכן הקו הכחול נוגע בקווי הרקע האפורים וקראו את הנקודות הצמודות.",
        solution_steps: [
            { verbal_explanation: "נזהה את המפגש של הישר הכחול עם הציר האנכי. נקודה זו כתובה בשרטוט כנתון בסיסי.", math_expression: "(0, 3)" },
            { verbal_explanation: "נזהה את המפגש של הישר הכחול עם הציר האופקי התחתון ונקרא את ערכה הנתון בסוגריים.", math_expression: "(3, 0)" }
        ],
        final_answer: "(0, 3) , (3, 0)"
    },

    // שאלה 28
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `<strong>הבנה ויישום בבעיה מילולית:</strong><br>
        הפונקציה <span dir="ltr">y = -10x + 100</span> מתארת את כמות המים במיכל גדול (הנמדדת בליטרים) כעבור זמן מסוים (הנמדד בדקות).<br>
        מה המשמעות של נקודת החיתוך עם הציר האופקי בסיפור זה?`,
        options: [
            "הזמן שלוקח למיכל להתרוקן לחלוטין ממימיו",
            "כמות המים העצומה שהייתה במיכל בהתחלה",
            "קצב ריקון המים האיטי המתרחש בכל דקה",
            "כמות המים המועטה שנשארה לאחר עשר דקות"
        ],
        correctAnswer: 0,
        hint: "חיתוך עם הציר האופקי משמעותו שהגובה שווה לאפס. בסיפור זה, הגובה הוא כמות המים. מה קורה למכל כשהכמות היא אפס ליטרים?",
        solution_steps: [
            { verbal_explanation: "נבין את משמעות הצירים בשאלה: הציר האנכי מתאר את הכמות, והאופקי את הזמן החולף לאיטו.", math_expression: "y = Liters , x = Minutes" },
            { verbal_explanation: "נקודת המפגש עם הציר האופקי מתרחשת כאשר הגובה (כלומר הכמות במיכל) מגיע לאפס מוחלט.", math_expression: "y = 0 ➔ 0 = -10x + 100 ➔ 10x = 100 ➔ x = 10" },
            { verbal_explanation: "מצב שבו אין יותר מים כלל שקול למיכל ריק לחלוטין. הערך האופקי מציין את הזמן שלקח להגיע למצב ריק זה.", math_expression: "Tank is completely empty at this time" }
        ],
        final_answer: "הזמן שלוקח למיכל להתרוקן לחלוטין ממימיו"
    },

    // שאלה 29
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `<strong>חישוב שטח משולש הנוצר עם צירים:</strong><br>
        נתון הישר שמשוואתו היא <span dir="ltr">y = -2x + 6</span>.<br>
        ישר זה חותך את שני הצירים המרכזיים ויוצר יחד איתם משולש ישר זווית מושלם.<br>
        מהו שטח המשולש שנוצר מהחיתוכים?`,
        options: [
            "9",
            "18",
            "6",
            "12"
        ],
        correctAnswer: 0,
        hint: "מצאו את שתי נקודות החיתוך. אורכי הניצבים של המשולש הם בדיוק המרחקים של החיתוכים הללו מראשית הצירים המרכזית. השטח הוא מכפלת הניצבים חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "נמצא את החיתוך עם הציר האנכי, אשר יהווה את הניצב העומד של המשולש הגיאומטרי שלנו.", math_expression: "x = 0 ➔ y = 6" },
            { verbal_explanation: "נמצא את החיתוך עם הציר האופקי, אשר יהווה את הניצב התחתון של המשולש והבסיס שלו.", math_expression: "y = 0 ➔ 2x = 6 ➔ x = 3" },
            { verbal_explanation: "נחשב שטח משולש על ידי הכפלת הבסיס בגובה העומד שלו וחלוקת המכפלה בשניים על פי הנוסחה.", math_expression: "S = (6 × 3) / 2 = 18 / 2 = 9" }
        ],
        final_answer: "9"
    },

    // שאלה 30
    {
        topic: "lines_plane_172",
        subTopic: "נקודת חיתוך עם הצירים",
        question_text: `מצאו את נקודות החיתוך של המשוואה הסתומה הבאה עם הצירים:<br>
        <div dir="ltr" style="font-weight:bold; font-size:1.2em; margin:5px 0;">5x - 5y = 25</div>`,
        options: [
            "(5, 0) , (0, -5)",
            "(5, 0) , (0, 5)",
            "(-5, 0) , (0, -5)",
            "(0, 25) , (25, 0)"
        ],
        correctAnswer: 0,
        hint: "אין צורך בסידור מסובך מראש, איפוס של משתנה אחד פותר את הבעיה באופן מיידי. הציבו אפס בכל פעם במשתנה אחר כדי למצוא את בן זוגו.",
        solution_steps: [
            { verbal_explanation: "נאפס את המשתנה האופקי כדי לבחון את החיתוך האנכי הנותר, וניזהר מאוד עם חלוקה במספר המקדם השלילי.", math_expression: "x = 0 ➔ -5y = 25 ➔ y = -5 ➔ (0, -5)" },
            { verbal_explanation: "נאפס את המשתנה האנכי כדי למצוא את החיתוך האופקי הישיר במשוואה הפשוטה שנותרה.", math_expression: "y = 0 ➔ 5x = 25 ➔ x = 5 ➔ (5, 0)" }
        ],
        final_answer: "(5, 0) , (0, -5)"
    }
];
