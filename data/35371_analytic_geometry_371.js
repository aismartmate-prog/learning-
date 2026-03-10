const questionsDB = [
    // ========================================================================
    // תת נושא 1: משוואת המעגל
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "נתונה משוואת המעגל: (x - 3)² + (y + 2)² = 25. מהם שיעורי מרכז המעגל ומהו אורך הרדיוס שלו?",
        options: ["מרכז (3, -2), רדיוס 5", "מרכז (-3, 2), רדיוס 25", "מרכז (3, 2), רדיוס 5", "מרכז (-3, -2), רדיוס 5"],
        correctAnswer: 0,
        hint: "במשוואת מעגל מהצורה (x-a)² + (y-b)² = R², המרכז הוא בנקודה (a,b). שימו לב שהסימנים בתוך הסוגריים הפוכים לסימני מרכז המעגל. המספר בצד ימין הוא הרדיוס בריבוע.",
        solution_steps: [
            { verbal_explanation: "נשווה את המשוואה הנתונה למשוואת המעגל הכללית.", math_expression: "(x - a)² + (y - b)² = R²" },
            { verbal_explanation: "נמצא את ה-x של המרכז (a). ליד ה-x רשום 3-, ולכן ה-a הוא 3 חיובי.", math_expression: "a = 3" },
            { verbal_explanation: "נמצא את ה-y של המרכז (b). ליד ה-y רשום 2+, ולכן ה-b הוא 2-.", math_expression: "b = -2" },
            { verbal_explanation: "נמצא את הרדיוס. המספר באגף ימין הוא 25, והוא שווה ל-R².", math_expression: "R² = 25  =>  R = 5" },
            { verbal_explanation: "לכן, המרכז הוא בנקודה (3, -2) והרדיוס הוא 5.", math_expression: "M(3, -2), R=5" }
        ],
        final_answer: "מרכז (3, -2), רדיוס 5"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מהי משוואת המעגל שמרכזו בראשית הצירים (0, 0) ואורך הרדיוס שלו הוא 4?",
        options: ["x² + y² = 16", "x² + y² = 4", "(x-4)² + y² = 16", "x² + y² = 8"],
        correctAnswer: 0,
        hint: "כאשר מרכז המעגל הוא (0,0), המשוואה מצטמצמת לצורה הפשוטה x² + y² = R². אל תשכחו להעלות את הרדיוס בריבוע.",
        solution_steps: [
            { verbal_explanation: "נציב את שיעורי המרכז (0,0) במשוואה הכללית.", math_expression: "(x - 0)² + (y - 0)² = R²" },
            { verbal_explanation: "הביטוי (x-0) הוא פשוט x, ולכן המשוואה מתקצרת.", math_expression: "x² + y² = R²" },
            { verbal_explanation: "הרדיוס הנתון הוא 4. נעלה אותו בריבוע עבור אגף ימין של המשוואה.", math_expression: "4² = 16" },
            { verbal_explanation: "נרשום את המשוואה הסופית.", math_expression: "x² + y² = 16" }
        ],
        final_answer: "x² + y² = 16"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מרכזו של מעגל הוא בנקודה (1, -4) ואורך הרדיוס שלו הוא 6. מהי משוואת המעגל?",
        options: ["(x - 1)² + (y + 4)² = 36", "(x + 1)² + (y - 4)² = 36", "(x - 1)² + (y - 4)² = 6", "(x + 1)² + (y + 4)² = 12"],
        correctAnswer: 0,
        hint: "הציבו את a=1 ואת b=-4 במשוואה. זכרו שמינוס ומינוס הופכים לפלוס: (y - (-4)) הופך ל- (y+4).",
        solution_steps: [
            { verbal_explanation: "נרשום את שיעורי מרכז המעגל והרדיוס.", math_expression: "a = 1,  b = -4,  R = 6" },
            { verbal_explanation: "נציב את הנתונים לתוך תבנית המשוואה: (x-a)² + (y-b)² = R².", math_expression: "(x - 1)² + (y - (-4))² = 6²" },
            { verbal_explanation: "נסדר את הסימנים (מינוס כפול מינוס זה פלוס) ונחשב את הריבוע של 6.", math_expression: "(x - 1)² + (y + 4)² = 36" }
        ],
        final_answer: "(x - 1)² + (y + 4)² = 36"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "נתונה משוואת המעגל  x² + y² = 49. מהו קוטר המעגל?",
        options: ["14", "7", "49", "98"],
        correctAnswer: 0,
        hint: "אגף ימין הוא הרדיוס בריבוע. מצאו את הרדיוס על ידי הוצאת שורש מ-49. זכרו: קוטר גדול פי 2 מהרדיוס!",
        solution_steps: [
            { verbal_explanation: "המשוואה נתונה מהצורה הקנונית x² + y² = R². אגף ימין הוא R².", math_expression: "R² = 49" },
            { verbal_explanation: "נוציא שורש כדי למצוא את אורך הרדיוס (R).", math_expression: "R = √49 = 7" },
            { verbal_explanation: "השאלה מבקשת את הקוטר. קוטר שווה לפעמיים הרדיוס.", math_expression: "D = 2 × R" },
            { verbal_explanation: "נכפיל ב-2.", math_expression: "D = 2 × 7 = 14" }
        ],
        final_answer: "14"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "האם הנקודה (3, 4) נמצאת על המעגל שמשוואתו x² + y² = 25 ?",
        options: ["כן", "לא, היא מחוץ למעגל", "לא, היא בתוך המעגל", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "כדי לבדוק אם נקודה נמצאת *על* המעגל, יש להציב את שיעורי ה-x וה-y שלה במשוואה. האם 3 בריבוע ועוד 4 בריבוע שווה ל-25?",
        solution_steps: [
            { verbal_explanation: "נציב את שיעורי הנקודה x=3 ו-y=4 באגף השמאלי של משוואת המעגל.", math_expression: "3² + 4²" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "9 + 16 = 25" },
            { verbal_explanation: "מכיוון שהתוצאה שקיבלנו (25) שווה בדיוק לאגף ימין במשוואה, משמעות הדבר היא שהנקודה מונחת בדיוק על היקף המעגל.", math_expression: "25 = 25  =>  כן" }
        ],
        final_answer: "כן"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מעגל שמרכזו בנקודה (2, 2) עובר דרך הנקודה (2, 5). מהי משוואת המעגל?",
        options: ["(x - 2)² + (y - 2)² = 9", "(x - 2)² + (y - 2)² = 3", "(x + 2)² + (y + 2)² = 9", "(x - 2)² + (y - 2)² = 25"],
        correctAnswer: 0,
        hint: "הרדיוס הוא המרחק בין מרכז המעגל לכל נקודה על היקפו. חשבו את המרחק בין (2,2) ל-(2,5). (רמז: ה-x זהה, אז זה רק ההפרש ב-y).",
        solution_steps: [
            { verbal_explanation: "ידוע שמרכז המעגל הוא (2,2). נרשום את בסיס המשוואה.", math_expression: "(x - 2)² + (y - 2)² = R²" },
            { verbal_explanation: "הנקודה (2,5) נמצאת על המעגל. המרחק ממנה למרכז (2,2) הוא הרדיוס.", math_expression: "R = המרחק בין (2,2) ל-(2,5)" },
            { verbal_explanation: "מאחר ושיעור ה-x זהה, המרחק הוא פשוט ההפרש האנכי בין ערכי ה-y.", math_expression: "R = 5 - 2 = 3" },
            { verbal_explanation: "נעלה את הרדיוס בריבוע ונשלים את המשוואה.", math_expression: "R² = 3² = 9" },
            { verbal_explanation: "המשוואה הסופית.", math_expression: "(x - 2)² + (y - 2)² = 9" }
        ],
        final_answer: "(x - 2)² + (y - 2)² = 9"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "באיזה נקודות חותך המעגל x² + y² = 16 את ציר ה-x?",
        options: ["(4, 0) ו- (-4, 0)", "(0, 4) ו- (0, -4)", "(16, 0) ו- (-16, 0)", "המעגל לא חותך את ציר ה-x"],
        correctAnswer: 0,
        hint: "על ציר ה-x, תמיד מתקיים y = 0. הציבו y=0 במשוואה ופתרו את x² = 16.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא נקודת חיתוך עם ציר x, יש להציב y=0.", math_expression: "x² + 0² = 16" },
            { verbal_explanation: "המשוואה מצטמצמת ל-x² שווה 16.", math_expression: "x² = 16" },
            { verbal_explanation: "נוציא שורש. למשוואה זו שני פתרונות (חיובי ושלילי).", math_expression: "x = 4,  x = -4" },
            { verbal_explanation: "נרשום את התוצאות כנקודות עם y=0.", math_expression: "(4, 0), (-4, 0)" }
        ],
        final_answer: "(4, 0) ו- (-4, 0)"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "באיזה נקודות חותך המעגל (x - 3)² + y² = 9 את ציר ה-y?",
        options: ["רק בנקודה (0, 0)", "(0, 3) ו- (0, -3)", "(0, 9)", "המעגל לא חותך את ציר ה-y"],
        correctAnswer: 0,
        hint: "חיתוך עם ציר ה-y מתקבל על ידי הצבת x = 0. הציבו x=0 ופתרו את המשוואה עבור y.",
        solution_steps: [
            { verbal_explanation: "למציאת חיתוך עם ציר y, נציב x=0 במשוואה הנתונה.", math_expression: "(0 - 3)² + y² = 9" },
            { verbal_explanation: "נחשב את הסוגריים.", math_expression: "(-3)² + y² = 9" },
            { verbal_explanation: "ריבוע של מינוס 3 הוא 9 חיובי.", math_expression: "9 + y² = 9" },
            { verbal_explanation: "נעביר את 9 לאגף הימני ונקבל 0.", math_expression: "y² = 0  =>  y = 0" },
            { verbal_explanation: "קיבלנו פתרון יחיד. הנקודה היא ראשית הצירים.", math_expression: "(0, 0)" }
        ],
        final_answer: "רק בנקודה (0, 0)"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "נתון המעגל (x - 2)² + (y - 1)² = 10. היכן ממוקמת הנקודה (5, 2) ביחס למעגל?",
        options: ["על המעגל", "בתוך המעגל", "מחוץ למעגל", "במרכז המעגל"],
        correctAnswer: 0,
        hint: "הציבו את הנקודה במשוואה. אם התוצאה בדיוק 10, הנקודה על המעגל. אם קטנה מ-10, בתוך המעגל. אם גדולה מ-10, מחוץ למעגל.",
        solution_steps: [
            { verbal_explanation: "נציב את שיעורי הנקודה x=5 ו-y=2 באגף השמאלי של משוואת המעגל.", math_expression: "(5 - 2)² + (2 - 1)²" },
            { verbal_explanation: "נחסר בתוך הסוגריים.", math_expression: "(3)² + (1)²" },
            { verbal_explanation: "נעלה בריבוע ונחבר.", math_expression: "9 + 1 = 10" },
            { verbal_explanation: "התוצאה שווה בדיוק לאגף ימין במשוואה (10). לכן הנקודה נמצאת בדיוק על היקף המעגל.", math_expression: "10 = 10" }
        ],
        final_answer: "על המעגל"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מהו שטחו של המעגל שמשוואתו היא x² + y² = 36 ? (השאירו את פאי בתשובה).",
        options: ["36π", "6π", "12π", "18π"],
        correctAnswer: 0,
        hint: "נוסחת שטח מעגל היא πR². במשוואת המעגל, אגף ימין הוא בדיוק R².",
        solution_steps: [
            { verbal_explanation: "במשוואת מעגל סטנדרטית, המספר שמופיע לאחר סימן השווה הוא הרדיוס בריבוע.", math_expression: "R² = 36" },
            { verbal_explanation: "נוסחת השטח של מעגל היא פאי כפול הרדיוס בריבוע.", math_expression: "S = π × R²" },
            { verbal_explanation: "מכיוון שאנו כבר יודעים ש-R² שווה 36, פשוט נציב זאת בנוסחה.", math_expression: "S = 36π" }
        ],
        final_answer: "36π"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מהו היקף המעגל שמשוואתו היא x² + y² = 25 ? (השאירו פאי).",
        options: ["10π", "25π", "5π", "20π"],
        correctAnswer: 0,
        hint: "אגף ימין הוא 25, ולכן הרדיוס הוא שורש של 25 (שווה ל-5). נוסחת היקף מעגל היא 2 כפול π כפול R.",
        solution_steps: [
            { verbal_explanation: "נמצא את הרדיוס על ידי הוצאת שורש מאגף ימין.", math_expression: "R² = 25  =>  R = 5" },
            { verbal_explanation: "נרשום את הנוסחה להיקף מעגל (P).", math_expression: "P = 2 × π × R" },
            { verbal_explanation: "נציב את הרדיוס שמצאנו ונכפיל ב-2.", math_expression: "P = 2 × π × 5 = 10π" }
        ],
        final_answer: "10π"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מעגל שמשוואתו היא  (x - 5)² + (y + 1)² = 64. מהו אורכו של הקוטר?",
        options: ["16", "8", "64", "32"],
        correctAnswer: 0,
        hint: "הוציאו שורש מהמספר 64 כדי למצוא את הרדיוס. קוטר הוא פעמיים הרדיוס.",
        solution_steps: [
            { verbal_explanation: "מהמשוואה אנו מזהים את הריבוע של הרדיוס באגף ימין.", math_expression: "R² = 64" },
            { verbal_explanation: "נוציא שורש כדי למצוא את אורך הרדיוס עצמו.", math_expression: "R = √64 = 8" },
            { verbal_explanation: "קוטר המעגל (Diameter) שווה לפעמיים הרדיוס.", math_expression: "D = 2 × 8 = 16" }
        ],
        final_answer: "16"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מהי משוואת המעגל שמרכזו מונח על ציר ה-x בנקודה (-3, 0) ורדיוסו 1?",
        options: ["(x + 3)² + y² = 1", "(x - 3)² + y² = 1", "(x + 3)² + y² = 2", "x² + (y + 3)² = 1"],
        correctAnswer: 0,
        hint: "הציבו את הנקודה בנוסחה: a = -3 ולכן הסוגריים יהיו (x+3). ה-y של המרכז הוא 0, לכן נשאר רק y².",
        solution_steps: [
            { verbal_explanation: "נזהה את שיעורי המרכז: ה-x הוא 3- (a) וה-y הוא 0 (b).", math_expression: "a = -3,  b = 0" },
            { verbal_explanation: "נציב בתבנית משוואת המעגל.", math_expression: "(x - (-3))² + (y - 0)² = R²" },
            { verbal_explanation: "נפשט את הביטויים בסוגריים.", math_expression: "(x + 3)² + y² = R²" },
            { verbal_explanation: "נעלה את הרדיוס (1) בריבוע. 1 כפול 1 זה פשוט 1.", math_expression: "(x + 3)² + y² = 1" }
        ],
        final_answer: "(x + 3)² + y² = 1"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: "מעגל שמרכזו בראשית הצירים ורדיוסו 5, הוזז 2 יחידות ימינה ו-3 יחידות למעלה. מהי משוואת המעגל החדש?",
        options: ["(x - 2)² + (y - 3)² = 25", "(x + 2)² + (y + 3)² = 25", "(x - 2)² + (y - 3)² = 5", "x² + y² = 25"],
        correctAnswer: 0,
        hint: "הזזה של המרכז (0,0) ב-2 ימינה שמה אותו ב-x=2. הזזה ב-3 למעלה שמה אותו ב-y=3. המרכז החדש הוא (2,3). הרדיוס נשאר 5.",
        solution_steps: [
            { verbal_explanation: "המרכז המקורי היה (0,0). הזזה ב-2 יחידות ימינה (בכיוון החיובי של ציר x) נותנת x=2.", math_expression: "x_new = 2" },
            { verbal_explanation: "הזזה ב-3 יחידות למעלה (בכיוון החיובי של ציר y) נותנת y=3. לכן המרכז החדש הוא (2,3).", math_expression: "M = (2, 3)" },
            { verbal_explanation: "הזזה אינה משנה את גודל המעגל, ולכן הרדיוס נשאר 5.", math_expression: "R = 5" },
            { verbal_explanation: "נציב את הנתונים החדשים למשוואת המעגל. R בריבוע שווה 25.", math_expression: "(x - 2)² + (y - 3)² = 25" }
        ],
        final_answer: "(x - 2)² + (y - 3)² = 25"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משוואת המעגל",
        question: `על פי השרטוט הבא, המעגל נוגע בדיוק בציר ה-x. מרכז המעגל הוא (3, 4).<br>מהי משוואת המעגל?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="130" x2="180" y2="130" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="40" y1="20" x2="40" y2="140" stroke="#cbd5e1" stroke-width="2"/>
            <text x="175" y="145" font-size="12">x</text>
            <text x="25" y="25" font-size="12">y</text>
            <circle cx="100" cy="50" r="80" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2" opacity="0.6"/>
            <circle cx="100" cy="50" r="4" fill="#ef4444"/>
            <text x="110" y="45" font-size="12" font-weight="bold">(3, 4)</text>
            <line x1="100" y1="50" x2="100" y2="130" stroke="#ef4444" stroke-dasharray="4,4"/>
            <text x="85" y="90" font-size="12" fill="#ef4444" font-weight="bold">R</text>
        </svg>`,
        options: ["(x - 3)² + (y - 4)² = 16", "(x - 3)² + (y - 4)² = 9", "(x - 3)² + (y - 4)² = 25", "x² + y² = 16"],
        correctAnswer: 0,
        hint: "כאשר מעגל נוגע (משיק) לציר ה-x, המרחק מהמרכז לציר (שהוא הרדיוס) שווה בדיוק לשיעור ה-y של מרכז המעגל. ה-y של המרכז הוא 4, לכן הרדיוס הוא 4.",
        solution_steps: [
            { verbal_explanation: "שיעורי מרכז המעגל נתונים: (3,4).", math_expression: "a=3, b=4" },
            { verbal_explanation: "כדי למצוא את הרדיוס נתבונן בשרטוט. המעגל משיק לציר ה-x. המרחק האנכי ממרכז המעגל אל ציר ה-x הוא בדיוק הערך של ציר ה-y של המרכז.", math_expression: "R = y_center = 4" },
            { verbal_explanation: "כעת נציב את המרכז והרדיוס במשוואה.", math_expression: "(x - 3)² + (y - 4)² = R²" },
            { verbal_explanation: "נעלה את הרדיוס בריבוע (4 כפול 4 שווה 16).", math_expression: "(x - 3)² + (y - 4)² = 16" }
        ],
        final_answer: "(x - 3)² + (y - 4)² = 16"
    },

    // ========================================================================
    // תת נושא 2: נקודות חיתוך של ישר ומעגל
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "נתון המעגל x² + y² = 25. הישר y = 4 חותך את המעגל בשתי נקודות. מהם שיעורי ה-x של נקודות אלו?",
        options: ["x = 3, x = -3", "x = 4, x = -4", "x = 5, x = -5", "x = 9, x = -9"],
        correctAnswer: 0,
        hint: "הציבו את המספר 4 במקום ה-y במשוואת המעגל, ופתרו את המשוואה עבור x.",
        solution_steps: [
            { verbal_explanation: "נציב את משוואת הישר הנתונה (y=4) בתוך משוואת המעגל.", math_expression: "x² + (4)² = 25" },
            { verbal_explanation: "נחשב את הריבוע של 4.", math_expression: "x² + 16 = 25" },
            { verbal_explanation: "נעביר את ה-16 לאגף הימני ונחסר.", math_expression: "x² = 25 - 16 = 9" },
            { verbal_explanation: "נוציא שורש כדי למצוא את x. למשוואה יש פתרון חיובי ושלילי.", math_expression: "x = 3,  x = -3" },
            { verbal_explanation: "לכן הנקודות הן (3,4) ו- (-3,4).", math_expression: "x = ±3" }
        ],
        final_answer: "x = 3, x = -3"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "הישר y = 3x חותך את המעגל x² + y² = 10. מהם שיעורי ה-x של נקודות החיתוך?",
        options: ["x = 1, x = -1", "x = 3, x = -3", "x = 10, x = -10", "x = 2, x = -2"],
        correctAnswer: 0,
        hint: "הציבו את הביטוי 3x במקום ה-y במשוואת המעגל. שימו לב: יש להעלות את כל ה-3x בריבוע, כלומר (3x)² שווה ל-9x².",
        solution_steps: [
            { verbal_explanation: "נציב את הביטוי 3x במקום y במשוואת המעגל (הצבת ישר במעגל).", math_expression: "x² + (3x)² = 10" },
            { verbal_explanation: "כאשר מעלים את 3x בריבוע, גם המספר וגם הנעלם מקבלים חזקה.", math_expression: "x² + 9x² = 10" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי (1 ועוד 9).", math_expression: "10x² = 10" },
            { verbal_explanation: "נחלק ב-10.", math_expression: "x² = 1" },
            { verbal_explanation: "נוציא שורש ונקבל שתי תשובות.", math_expression: "x = 1, x = -1" }
        ],
        final_answer: "x = 1, x = -1"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "נתון המעגל (x - 2)² + (y - 3)² = 4. חותכים אותו בעזרת הישר x = 2 (קו מאונך). מהם ערכי ה-y של נקודות החיתוך?",
        options: ["y = 5, y = 1", "y = 4, y = -4", "y = 3, y = -3", "y = 6, y = 0"],
        correctAnswer: 0,
        hint: "הציבו את המספר 2 במקום ה-x במשוואת המעגל. הסוגריים הראשונים יתאפסו! פתרו את מה שנשאר.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתון x=2 במשוואת המעגל.", math_expression: "(2 - 2)² + (y - 3)² = 4" },
            { verbal_explanation: "הסוגריים הראשונים שווים לאפס ולכן מתבטלים.", math_expression: "0² + (y - 3)² = 4" },
            { verbal_explanation: "נשארנו עם משוואה פשוטה.", math_expression: "(y - 3)² = 4" },
            { verbal_explanation: "נוציא שורש משני הצדדים. זכרו ששורש של 4 יכול להיות 2 או 2-.", math_expression: "y - 3 = 2   או   y - 3 = -2" },
            { verbal_explanation: "נפתור כל משוואה בנפרד (על ידי העברת ה-3 לאגף הימני).", math_expression: "y = 5   או   y = 1" }
        ],
        final_answer: "y = 5, y = 1"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "אם ישר עובר דרך מרכזו של מעגל, בכמה נקודות בדיוק הוא יחתוך את המעגל?",
        options: ["2", "1", "0", "אינסוף"],
        correctAnswer: 0,
        hint: "ישר שעובר דרך המרכז של מעגל נקרא 'חותך' ומהווה למעשה את הישר שעליו מונח קוטר המעגל. קוטר מחבר שתי נקודות על ההיקף.",
        solution_steps: [
            { verbal_explanation: "ישר הוא קו אינסופי. מעגל הוא עקומה סגורה.", math_expression: "" },
            { verbal_explanation: "כאשר קו ישר חוצה את המעגל ועובר דרך המרכז שלו (בדיוק באמצע), הוא יוצא מהצד השני.", math_expression: "חותך את המעגל לחצי" },
            { verbal_explanation: "לכן הוא יפגוש את היקף המעגל בדיוק בשתי נקודות נגדיות.", math_expression: "2 נקודות חיתוך" }
        ],
        final_answer: "2"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "נתון המעגל x² + y² = 16. מציבים במשוואה את הישר x = 4. כמה פתרונות (נקודות חיתוך) נקבל, ואיזו משמעות גיאומטרית יש לישר זה ביחס למעגל?",
        options: ["פתרון אחד בלבד. הישר משיק למעגל.", "שני פתרונות. הישר חותך את המעגל.", "אין פתרון. הישר מחוץ למעגל.", "פתרון אחד. הישר עובר במרכז המעגל."],
        correctAnswer: 0,
        hint: "הציבו x=4 וקבלו: 16 + y² = 16. מה הערך של y? רק 0. יש רק נקודה אחת כזו (4,0). ישר שנוגע במעגל בנקודה אחת נקרא 'משיק'.",
        solution_steps: [
            { verbal_explanation: "נציב x=4 במשוואה.", math_expression: "4² + y² = 16" },
            { verbal_explanation: "נחשב ונעביר אגפים.", math_expression: "16 + y² = 16  =>  y² = 0" },
            { verbal_explanation: "למשוואה זו יש פתרון יחיד.", math_expression: "y = 0" },
            { verbal_explanation: "יש רק נקודת חיתוך אחת (4,0). קו שפוגש את המעגל רק בנקודה אחת נקרא קו משיק.", math_expression: "משיק" }
        ],
        final_answer: "פתרון אחד בלבד. הישר משיק למעגל."
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "הישר y = x חותך את המעגל x² + y² = 50. מהם שיעורי נקודת החיתוך הנמצאת ברביע הראשון (שבו x חיובי וגם y חיובי)?",
        options: ["(5, 5)", "(25, 25)", "(7.07, 7.07)", "(-5, -5)"],
        correctAnswer: 0,
        hint: "הציבו x במקום y וקבלו x² + x² = 50. חברו, חלקו ב-2 והוציאו שורש. בחרו את התשובה החיובית.",
        solution_steps: [
            { verbal_explanation: "נציב את הישר (y=x) במשוואת המעגל.", math_expression: "x² + x² = 50" },
            { verbal_explanation: "נכנס איברים.", math_expression: "2x² = 50" },
            { verbal_explanation: "נחלק ב-2.", math_expression: "x² = 25" },
            { verbal_explanation: "נוציא שורש. מכיוון שביקשו נקודה ברביע הראשון, נבחר רק בפתרון החיובי.", math_expression: "x = 5" },
            { verbal_explanation: "מכיוון שעל הישר y=x, אז גם ערכו של ה-y הוא 5.", math_expression: "y = 5" }
        ],
        final_answer: "(5, 5)"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "הישר y = -x חותך את המעגל x² + y² = 18. מהם שיעורי נקודת החיתוך הנמצאת ברביע השני (שבו x שלילי ו-y חיובי)?",
        options: ["(-3, 3)", "(3, -3)", "(-9, 9)", "(-4.24, 4.24)"],
        correctAnswer: 0,
        hint: "הציבו את (x-) במקום ה-y. מינוס איקס בריבוע שווה לאיקס בריבוע. לכן תקבלו 2x² = 18. הרביע השני דורש x שלילי.",
        solution_steps: [
            { verbal_explanation: "נציב את המשוואה y = -x במעגל. נקפיד על סוגריים.", math_expression: "x² + (-x)² = 18" },
            { verbal_explanation: "ריבוע מעלים את סימן המינוס.", math_expression: "x² + x² = 18" },
            { verbal_explanation: "נכנס איברים ונחלק ב-2.", math_expression: "2x² = 18  =>  x² = 9" },
            { verbal_explanation: "השורשים הם 3 ו- (3-). מאחר ונדרשנו לרביע השני, נבחר ב-x השלילי.", math_expression: "x = -3" },
            { verbal_explanation: "נציב חזרה כדי למצוא את y. במשוואה המקורית y שווה למינוס x.", math_expression: "y = -(-3) = 3" }
        ],
        final_answer: "(-3, 3)"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "הישר y = x + 2 חותך את המעגל x² + y² = 10. לאחר הצבת הישר במעגל וסידור המשוואה הריבועית, מהי המשוואה שתתקבל?",
        options: ["2x² + 4x - 6 = 0", "x² + 4x + 4 = 0", "2x² + 2x - 10 = 0", "2x² - 6 = 0"],
        correctAnswer: 0,
        hint: "הציבו את כל הסוגריים: x² + (x + 2)² = 10. פתחו את הסוגריים לפי כפל מקוצר: x² + 4x + 4. כעת חברו הכל וחסרו את ה-10 מאגף ימין.",
        solution_steps: [
            { verbal_explanation: "נציב את הביטוי (x+2) במקום ה-y.", math_expression: "x² + (x + 2)² = 10" },
            { verbal_explanation: "נפתח את הסוגריים בעזרת נוסחת הכפל המקוצר: (a+b)² = a² + 2ab + b².", math_expression: "x² + (x² + 4x + 4) = 10" },
            { verbal_explanation: "נכנס את האיברים הריבועיים יחד.", math_expression: "2x² + 4x + 4 = 10" },
            { verbal_explanation: "נעביר את ה-10 אגף שמאלה (כמינוס) כדי להשוות לאפס ולמצוא משוואה ריבועית קלאסית.", math_expression: "2x² + 4x - 6 = 0" }
        ],
        final_answer: "2x² + 4x - 6 = 0"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "הישר y = 0 חותך את המעגל x² + y² = 25 בשתי נקודות. מהו המרחק בין שתי הנקודות הללו?",
        options: ["10 יחידות", "5 יחידות", "25 יחידות", "0 יחידות"],
        correctAnswer: 0,
        hint: "הישר y=0 הוא ציר ה-x! לכן אנו מחפשים את החיתוך עם ציר ה-x. הנקודות יהיו (5,0) ו- (5,0-). מה המרחק מצד לצד?",
        solution_steps: [
            { verbal_explanation: "נציב y=0 ונקבל x² = 25. לכן שיעורי ה-x הם 5 ו- (5-).", math_expression: "x = ±5" },
            { verbal_explanation: "הנקודות הן (5,0) ו- (-5,0). הן מונחות על ציר ה-x (שהוא הישר y=0).", math_expression: "" },
            { verbal_explanation: "המרחק ביניהן הוא ההפרש: 5 פחות (5-), או פשוט פעמיים הרדיוס כיוון שזהו קוטר.", math_expression: "5 - (-5) = 10" }
        ],
        final_answer: "10 יחידות"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "האם הישר y = x חותך את המעגל (x - 4)² + (y - 4)² = 8 ? אם כן, בכמה נקודות?",
        options: ["כן, בשתי נקודות", "כן, בנקודה אחת (משיק)", "לא, אין נקודות חיתוך", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "הציבו x במקום ה-y. תקבלו: (x - 4)² + (x - 4)² = 8. כלומר פעמיים הסוגריים שווים 8. חלקו ב-2, והוציאו שורש ל-4.",
        solution_steps: [
            { verbal_explanation: "נציב y=x במשוואה הנתונה.", math_expression: "(x - 4)² + (x - 4)² = 8" },
            { verbal_explanation: "יש לנו את אותו הביטוי בדיוק פעמיים, לכן אפשר לרשום אותו כ-2 כפול הביטוי.", math_expression: "2(x - 4)² = 8" },
            { verbal_explanation: "נחלק את המשוואה ב-2.", math_expression: "(x - 4)² = 4" },
            { verbal_explanation: "נוציא שורש. לשורש של 4 יש שתי תשובות (2 ו- 2-). מכאן נלמד שיש שני פתרונות למשוואה.", math_expression: "x - 4 = ±2" },
            { verbal_explanation: "מכיוון שקיבלנו שני ערכי x אפשריים, הישר חותך את המעגל בשתי נקודות שונות.", math_expression: "2 נקודות" }
        ],
        final_answer: "כן, בשתי נקודות"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "נתון המעגל x² + y² = 100. איזה מהישרים הבאים **משיק** למעגל (חותך אותו בנקודה אחת בלבד)?",
        options: ["y = 10", "y = 5", "y = 0", "y = 12"],
        correctAnswer: 0,
        hint: "הרדיוס של המעגל הוא 10. המעגל מרוכז בראשית הצירים וגובהו המקסימלי הוא ב-y=10. קו אופקי בגובה 10 יגע רק 'בקצה' (בפסגה) של המעגל.",
        solution_steps: [
            { verbal_explanation: "נזהה את מרכז המעגל ואת הרדיוס שלו.", math_expression: "M(0,0),  R = √100 = 10" },
            { verbal_explanation: "מעגל כזה מגיע לנקודה הגבוהה ביותר שלו על ציר ה-y במרחק 10 מהמרכז, כלומר בנקודה (0,10).", math_expression: "פסגת המעגל: y = 10" },
            { verbal_explanation: "ישר אופקי (המקביל לציר ה-x) שיעבור דרך הפסגה בלבד, משוואתו תהיה שווה לגובה הזה.", math_expression: "y = 10" },
            { verbal_explanation: "בדיקה מתמטית: אם נציב y=10 נקבל x² + 100 = 100, מה שנותן x²=0. זהו פתרון יחיד המוכיח השקה.", math_expression: "פתרון יחיד" }
        ],
        final_answer: "y = 10"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "ידוע שישר העובר בראשית הצירים (y = mx) חותך את המעגל x² + y² = 20 בנקודה (2, 4). מהי משוואת הישר?",
        options: ["y = 2x", "y = x", "y = 4x", "y = 0.5x"],
        correctAnswer: 0,
        hint: "הישר צריך לעבור דרך (2,4) וגם (0,0). מצאו את השיפוע: y חלקי x (כלומר 4 לחלק ל-2).",
        solution_steps: [
            { verbal_explanation: "הישר עובר דרך ראשית הצירים, ולכן חותך את ציר ה-y באפס (b=0). משוואתו הכללית היא y = mx.", math_expression: "y = mx" },
            { verbal_explanation: "הנקודה הנתונה (2,4) נמצאת על הישר. נציב אותה במשוואה כדי למצוא את השיפוע m.", math_expression: "4 = m × 2" },
            { verbal_explanation: "נחלק ב-2 למציאת m.", math_expression: "m = 2" },
            { verbal_explanation: "נציב את m חזרה בתבנית המשוואה.", math_expression: "y = 2x" }
        ],
        final_answer: "y = 2x"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: `על פי השרטוט הבא, הישר המאוזן חותך את המעגל שמרכזו בראשית הצירים בשתי נקודות. <br>המעגל הוא x² + y² = 25. מה עשויה להיות משוואת הישר המשורטט?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="20" y1="70" x2="180" y2="70" stroke="#ef4444" stroke-width="2"/>
        </svg>`,
        options: ["y = 3", "x = 3", "y = -3", "y = 6"],
        correctAnswer: 0,
        hint: "הישר משורטט בצורה מאוזנת (מקביל לציר ה-x), ולכן הוא מהצורה y = מספר. הוא חותך את החלק העליון של המעגל (הצד החיובי של y), אך מתחת לפסגה (שהיא ברדיוס 5). איזה מהמספרים הגיוני?",
        solution_steps: [
            { verbal_explanation: "מהשרטוט אנו רואים ישר אופקי לחלוטין. קו אופקי מוגדר על ידי משוואה מהסוג y = קבוע.", math_expression: "y = b" },
            { verbal_explanation: "רדיוס המעגל הוא 5 (שורש של 25), ולכן חלקו העליון מגיע עד לגובה y=5.", math_expression: "R = 5" },
            { verbal_explanation: "הישר המשורטט עובר בחלק העליון (ולכן חיובי) אך מתחת לפסגה (כלומר קטן מ-5).", math_expression: "0 < y < 5" },
            { verbal_explanation: "התשובה היחידה שעונה על תנאים אלו היא y=3. (y=-3 יהיה בחצי התחתון, x=3 יהיה קו מאונך, ו-y=6 בכלל מחוץ למעגל).", math_expression: "y = 3" }
        ],
        final_answer: "y = 3"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "נתון המעגל x² + y² = 16 והישר y = 5. כמה נקודות חיתוך יש להם?",
        options: ["0 נקודות (הישר מחוץ למעגל)", "1 נקודה (משיק)", "2 נקודות (חותך)", "אי אפשר לחשב"],
        correctAnswer: 0,
        hint: "הרדיוס הוא שורש של 16, כלומר 4. המעגל מגיע עד לגובה 4 בלבד. הישר נמצא בגובה 5.",
        solution_steps: [
            { verbal_explanation: "הרדיוס של המעגל הקנוני הנתון הוא 4.", math_expression: "R = √16 = 4" },
            { verbal_explanation: "הנקודה הגבוהה ביותר של המעגל במערכת הצירים היא (0,4).", math_expression: "y_max = 4" },
            { verbal_explanation: "הישר y=5 הוא קו אופקי הנמצא בגובה 5, שהוא מעל לנקודה הגבוהה ביותר של המעגל.", math_expression: "5 > 4" },
            { verbal_explanation: "לכן, הישר והמעגל לעולם לא יפגשו.", math_expression: "אין חיתוך" },
            { verbal_explanation: "בדיקה מתמטית: אם נציב y=5 נקבל x² + 25 = 16, שמוביל ל- x² = -9. אין פתרון ממשי.", math_expression: "x² = -9 (לא אפשרי)" }
        ],
        final_answer: "0 נקודות (הישר מחוץ למעגל)"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "נקודות חיתוך של ישר ומעגל",
        question: "הישר y = x + 1 חותך את המעגל x² + y² = 13. מהם שיעורי ה-x של שתי נקודות החיתוך?",
        options: ["x = 2, x = -3", "x = 3, x = -2", "x = 1, x = -3", "x = 2, x = -2"],
        correctAnswer: 0,
        hint: "הציבו את הישר. x² + (x+1)² = 13. פתחו לפי כפל מקוצר: x² + x² + 2x + 1 = 13. כנסו הכל למשוואה: 2x² + 2x - 12 = 0. אפשר לחלק ב-2 ואז לפתור.",
        solution_steps: [
            { verbal_explanation: "נציב את הישר במשוואת המעגל.", math_expression: "x² + (x + 1)² = 13" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "x² + (x² + 2x + 1) = 13" },
            { verbal_explanation: "נכנס איברים.", math_expression: "2x² + 2x + 1 = 13" },
            { verbal_explanation: "נעביר את 13 לאגף השמאלי ונחסר.", math_expression: "2x² + 2x - 12 = 0" },
            { verbal_explanation: "נחלק את המשוואה ב-2 כדי להקל על הפתרון.", math_expression: "x² + x - 6 = 0" },
            { verbal_explanation: "נפתור בעזרת טרינום או נוסחת השורשים. מחפשים שני מספרים שמכפלתם 6- וסכומם 1. המספרים הם 3 ו-(2-), לכן הפתרונות הפוכים להם בסימן.", math_expression: "(x + 3)(x - 2) = 0   =>   x = -3, x = 2" }
        ],
        final_answer: "x = 2, x = -3"
    },// ========================================================================
    // תת נושא 3: משיק למעגל
    // ========================================================================

    // --- שאלה 31 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "נתון מעגל שמרכזו M(0,0). הנקודה A(3, 4) נמצאת על המעגל. מהו שיפוע הרדיוס MA?",
        options: ["4/3", "3/4", "-4/3", "-3/4"],
        correctAnswer: 0,
        hint: "שיפוע (m) בין שתי נקודות שווה להפרש ערכי ה-y חלקי הפרש ערכי ה-x. חשבו: (4 פחות 0) חלקי (3 פחות 0).",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את שיפוע הרדיוס, נשתמש בנוסחת השיפוע בין המרכז לנקודה שעל המעגל.", math_expression: "m = (y2 - y1) / (x2 - x1)" },
            { verbal_explanation: "נציב את שיעורי הנקודות M(0,0) ו-A(3,4).", math_expression: "m = (4 - 0) / (3 - 0)" },
            { verbal_explanation: "נחשב את המנה.", math_expression: "m = 4 / 3" }
        ],
        final_answer: "4/3"
    },

    // --- שאלה 32 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "המשך לשאלה הקודמת: מה יהיה שיפוע הישר ה**משיק** למעגל בנקודה A(3, 4)? (רמז: המשיק מאונך לרדיוס בנקודת ההשקה).",
        options: ["-3/4", "4/3", "-4/3", "3/4"],
        correctAnswer: 0,
        hint: "ישרים מאונכים הם בעלי שיפועים שהם הופכיים ונגדיים. אם שיפוע הרדיוס הוא 4/3, הפכו את השבר ושימו סימן מינוס.",
        solution_steps: [
            { verbal_explanation: "כלל חשוב בגיאומטריה: המשיק למעגל מאונך (יוצר זווית 90°) לרדיוס שעובר דרך נקודת ההשקה.", math_expression: "משיק ⊥ רדיוס" },
            { verbal_explanation: "עבור ישרים מאונכים, מכפלת השיפועים שלהם שווה ל- (1-).", math_expression: "m1 × m2 = -1" },
            { verbal_explanation: "לכן, שיפוע המשיק הוא המספר ההופכי והנגדי לשיפוע הרדיוס (4/3).", math_expression: "m_משיק = -3/4" }
        ],
        final_answer: "-3/4"
    },

    // --- שאלה 33 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "נתון מעגל שמרכזו בראשית הצירים (0,0). שיפוע המשיק למעגל בנקודה B הוא 2. מהו שיפוע הרדיוס העובר דרך נקודה B?",
        options: ["-1/2", "2", "-2", "1/2"],
        correctAnswer: 0,
        hint: "הרדיוס והמשיק תמיד מאונכים זה לזה בנקודת ההשקה. מהו ההופכי והנגדי של המספר 2?",
        solution_steps: [
            { verbal_explanation: "ידוע לנו שהרדיוס והמשיק מאונכים זה לזה בנקודת ההשקה.", math_expression: "m_רדיוס ⊥ m_משיק" },
            { verbal_explanation: "שיפוע המשיק נתון: 2 (או 2 חלקי 1).", math_expression: "m_משיק = 2/1" },
            { verbal_explanation: "כדי למצוא את שיפוע הרדיוס, נהפוך את השבר ונשנה את הסימן.", math_expression: "m_רדיוס = -1/2" }
        ],
        final_answer: "-1/2"
    },

    // --- שאלה 34 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "מעגל שמרכזו M(2, 5). נקודת ההשקה היא P(6, 8). מהו שיפוע הרדיוס MP?",
        options: ["3/4", "4/3", "-3/4", "-4/3"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת השיפוע בין שתי הנקודות: y פחות y לחלק ל-x פחות x.",
        solution_steps: [
            { verbal_explanation: "נציב את שתי הנקודות בנוסחת השיפוע.", math_expression: "m = (8 - 5) / (6 - 2)" },
            { verbal_explanation: "נחשב את ההפרש במונה (3) ובמכנה (4).", math_expression: "m = 3 / 4" }
        ],
        final_answer: "3/4"
    },

    // --- שאלה 35 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "המשך לשאלה הקודמת (מרכז M(2,5), נקודת השקה P(6,8)): מהי משוואת המשיק למעגל בנקודה P?",
        options: ["y = -4/3x + 16", "y = 3/4x + 3.5", "y = -4/3x - 16", "y = 4/3x"],
        correctAnswer: 0,
        hint: "שלב א': מצאו את שיפוע המשיק (ההופכי והנגדי לשיפוע הרדיוס 3/4). שלב ב': הציבו את השיפוע שמצאתם ואת הנקודה P(6,8) בנוסחה למציאת משוואת ישר.",
        solution_steps: [
            { verbal_explanation: "מצאנו ששיפוע הרדיוס הוא 3/4. לכן שיפוע המשיק המאונך לו הוא הופכי ונגדי.", math_expression: "m = -4/3" },
            { verbal_explanation: "כעת יש לנו את שיפוע המשיק (4/3-) ונקודה שעליו P(6,8). נציב בנוסחת ישר: y - y1 = m(x - x1).", math_expression: "y - 8 = -4/3(x - 6)" },
            { verbal_explanation: "נפתח את הסוגריים: מינוס 4/3 כפול מינוס 6 שווה פלוס 8.", math_expression: "y - 8 = -4/3x + 8" },
            { verbal_explanation: "נעביר את המינוס 8 ימינה בפלוס כדי לבודד את ה-y.", math_expression: "y = -4/3x + 16" }
        ],
        final_answer: "y = -4/3x + 16"
    },

    // --- שאלה 36 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: `על פי השרטוט, הישר משיק למעגל בנקודה P(0, -5). מרכז המעגל בראשית הצירים.<br>מה עשויה להיות משוואת המשיק?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="75" x2="180" y2="75" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="100" y1="20" x2="100" y2="140" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="100" cy="75" r="40" fill="none" stroke="#3b82f6" stroke-width="2"/>
            <line x1="20" y1="115" x2="180" y2="115" stroke="#ef4444" stroke-width="2"/>
            <circle cx="100" cy="115" r="4" fill="#ef4444"/>
            <text x="110" y="130" font-size="12" font-weight="bold">(0, -5)</text>
        </svg>`,
        options: ["y = -5", "x = -5", "y = 5", "y = x - 5"],
        correctAnswer: 0,
        hint: "הסתכלו על השרטוט - המשיק הוא קו אופקי לחלוטין (מקביל לציר ה-x). משוואה של קו אופקי היא תמיד מהצורה y = מספר. באיזה גובה הוא עובר?",
        solution_steps: [
            { verbal_explanation: "הרדיוס עובר מ-(0,0) אל (0,-5). מאחר וה-x קבוע, זהו רדיוס אנכי לחלוטין (על ציר ה-y).", math_expression: "רדיוס אנכי" },
            { verbal_explanation: "המשיק תמיד מאונך לרדיוס. קו שמאונך לקו אנכי חייב להיות קו אופקי לחלוטין.", math_expression: "משיק אופקי" },
            { verbal_explanation: "משוואה של קו אופקי מורכבת מ-y קבוע. מאחר והוא עובר בנקודה שבה y=-5, זוהי המשוואה שלו.", math_expression: "y = -5" }
        ],
        final_answer: "y = -5"
    },

    // --- שאלה 37 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "נתון מעגל (x - 2)² + y² = 25. מהו שיפוע הרדיוס לנקודה (6, 3) שעליו?",
        options: ["3/4", "4/3", "3", "0"],
        correctAnswer: 0,
        hint: "קודם כל זַהו את מרכז המעגל מהמשוואה (a=2, b=0). לאחר מכן חשבו את השיפוע בין המרכז (2,0) לבין הנקודה (6,3).",
        solution_steps: [
            { verbal_explanation: "נזהה את מרכז המעגל מתוך המשוואה. ה-x הוא 2, וה-y הוא 0.", math_expression: "M(2, 0)" },
            { verbal_explanation: "נחשב את השיפוע בין מרכז המעגל M לנקודה שעל המעגל (6,3).", math_expression: "m = (3 - 0) / (6 - 2)" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "m = 3 / 4" }
        ],
        final_answer: "3/4"
    },

    // --- שאלה 38 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "ישר משיק למעגל בנקודה כלשהי. אם נחשב את המרחק מהנקודה שבה המשיק נוגע במעגל אל מרכז המעגל, למה המרחק הזה יהיה שווה תמיד?",
        options: ["לרדיוס המעגל", "לקוטר המעגל", "ל-0", "למרחק בין שתי נקודות אקראיות"],
        correctAnswer: 0,
        hint: "המרחק ממרכז המעגל לכל נקודה על היקפו הוא הגדרה של מושג בסיסי מאוד בגיאומטריה.",
        solution_steps: [
            { verbal_explanation: "נקודת ההשקה היא בהכרח נקודה שנמצאת בדיוק על היקף המעגל.", math_expression: "נקודה על המעגל" },
            { verbal_explanation: "על פי ההגדרה הבסיסית ביותר, המרחק בין מרכז מעגל לכל נקודה על היקפו הוא הרדיוס.", math_expression: "d = R" }
        ],
        final_answer: "לרדיוס המעגל"
    },

    // --- שאלה 39 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "למעגל יש משיק שמשוואתו היא x = 7 (קו אנכי). באיזה סוג של רדיוס הוא נוגע?",
        options: ["רדיוס אופקי (מקביל לציר x)", "רדיוס אנכי", "רדיוס בשיפוע חיובי", "רדיוס אלכסוני"],
        correctAnswer: 0,
        hint: "המשיק והרדיוס מאונכים זה לזה. אם המשיק הוא קו ישר העומד ישר (אנכי), הרדיוס שפוגש אותו חייב לשכב באופן מאוזן לחלוטין.",
        solution_steps: [
            { verbal_explanation: "הישר x = 7 הוא ישר אנכי, המקביל לציר ה-y.", math_expression: "משיק אנכי" },
            { verbal_explanation: "מכיוון שהרדיוס תמיד מאונך למשיק בנקודת ההשקה, קו שמאונך לקו אנכי חייב להיות קו אופקי.", math_expression: "רדיוס ⊥ משיק" },
            { verbal_explanation: "קו אופקי משמעו קו שמקביל לציר ה-x.", math_expression: "רדיוס אופקי" }
        ],
        final_answer: "רדיוס אופקי (מקביל לציר x)"
    },

    // --- שאלה 40 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משיק למעגל",
        question: "שיפוע הרדיוס לנקודת השקה הוא -1. מה יהיה שיפוע המשיק באותה נקודה?",
        options: ["1", "-1", "0", "אינו מוגדר"],
        correctAnswer: 0,
        hint: "כדי למצוא שיפוע של ישר מאונך, הפכו את השבר ושנו סימן. ההופכי של -1/1 הוא 1/-1. וכשמשנים סימן, מקבלים 1.",
        solution_steps: [
            { verbal_explanation: "אנו מחפשים את השיפוע ההופכי והנגדי למינוס 1.", math_expression: "m1 = -1" },
            { verbal_explanation: "מכפלת שיפועי ישרים מאונכים היא מינוס 1.", math_expression: "-1 × m2 = -1" },
            { verbal_explanation: "נחלק במינוס 1 כדי לבודד את m2.", math_expression: "m2 = -1 / -1 = 1" }
        ],
        final_answer: "1"
    },
	
	// ========================================================================
    // תת נושא 4: מרחק נקודה מראשית הצירים
    // ========================================================================

    // --- שאלה 41 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "מהו המרחק של הנקודה (3, 4) מראשית הצירים (0,0)?",
        options: ["5", "7", "25", "1"],
        correctAnswer: 0,
        hint: "דמיינו משולש ישר זווית שבו הניצבים הם 3 ו-4 (שיעורי הנקודה). המרחק אל הראשית הוא היתר. השתמשו במשפט פיתגורס: 3² + 4² = c².",
        solution_steps: [
            { verbal_explanation: "נוסחת המרחק מראשית הצירים היא פשוטה, שכן חיסור אפס אינו משנה את הערך.", math_expression: "d = √(x² + y²)" },
            { verbal_explanation: "נציב את שיעורי הנקודה.", math_expression: "d = √(3² + 4²)" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "d = √(9 + 16) = √25" },
            { verbal_explanation: "נוציא שורש.", math_expression: "d = 5" }
        ],
        final_answer: "5"
    },

    // --- שאלה 42 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "נקודה נמצאת על מעגל שמרכזו בראשית הצירים (0,0) ורדיוסו 13. שיעור ה-x של הנקודה הוא 5. מהו שיעור ה-y האפשרי של הנקודה (ברביע הראשון)?",
        options: ["12", "144", "8", "13"],
        correctAnswer: 0,
        hint: "המרחק של הנקודה מהראשית הוא הרדיוס (13). לכן לפי פיתגורס: x² + y² = R². הציבו: 5² + y² = 13² ופתרו.",
        solution_steps: [
            { verbal_explanation: "משוואת מעגל בראשית הצירים היא x² + y² = R². נציב את הנתונים שאנו יודעים.", math_expression: "5² + y² = 13²" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "25 + y² = 169" },
            { verbal_explanation: "נעביר את ה-25 ימינה ונחסר.", math_expression: "y² = 169 - 25 = 144" },
            { verbal_explanation: "נוציא שורש. מאחר וביקשו את הנקודה ברביע הראשון (שבו y חיובי), נבחר בשורש החיובי.", math_expression: "y = 12" }
        ],
        final_answer: "12"
    },

    // --- שאלה 43 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "איזו מבין הנקודות הבאות נמצאת במרחק הגדול ביותר מראשית הצירים (0,0)?",
        options: ["(8, 6)", "(10, 0)", "(0, -9)", "(-5, 5)"],
        correctAnswer: 0,
        hint: "העלו כל אחד מהמספרים בנקודה בריבוע וחברו אותם. הנקודה עם הסכום הגדול ביותר היא הרחוקה ביותר.",
        solution_steps: [
            { verbal_explanation: "כדי להשוות מרחקים מהראשית, נוכל להסתפק בהשוואת ריבועי המרחקים (x² + y²) כדי לחסוך את פעולת השורש.", math_expression: "d² = x² + y²" },
            { verbal_explanation: "נבדוק את האפשרות הראשונה: (8,6).", math_expression: "8² + 6² = 64 + 36 = 100" },
            { verbal_explanation: "נבדוק את האפשרות השנייה: (10,0).", math_expression: "10² + 0² = 100" },
            { verbal_explanation: "נבדוק את האפשרות השלישית: (0,-9).", math_expression: "0² + (-9)² = 81" },
            { verbal_explanation: "נבדוק את האפשרות הרביעית: (-5,5).", math_expression: "(-5)² + 5² = 25 + 25 = 50" },
            { verbal_explanation: "הנקודות (8,6) ו-(10,0) נמצאות באותו מרחק (10 יחידות), שהוא המרחק הגדול ביותר. (הערה: נבחרה הראשונה לצורך התשובה).", math_expression: "המרחק המקסימלי הוא 10" }
        ],
        final_answer: "(8, 6)"
    },

    // --- שאלה 44 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "מהו המרחק של הנקודה (-8, -15) מראשית הצירים (0,0)?",
        options: ["17", "23", "7", "289"],
        correctAnswer: 0,
        hint: "העלו את (8-) בריבוע ואת (15-) בריבוע וחברו. הוציאו שורש מהתוצאה.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת פיתגורס לחישוב המרחק מהראשית.", math_expression: "d = √((-8)² + (-15)²)" },
            { verbal_explanation: "הריבועים הופכים את המספרים השליליים לחיוביים.", math_expression: "d = √(64 + 225)" },
            { verbal_explanation: "נחבר את המספרים.", math_expression: "d = √289" },
            { verbal_explanation: "נוציא שורש.", math_expression: "d = 17" }
        ],
        final_answer: "17"
    },

    // --- שאלה 45 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "נקודה A נמצאת על ציר ה-x במרחק של 7 יחידות מראשית הצירים (בכיוון החיובי). מהם שיעוריה?",
        options: ["(7, 0)", "(0, 7)", "(7, 7)", "(-7, 0)"],
        correctAnswer: 0,
        hint: "נקודה שיושבת ממש על ציר ה-x - ערך ה-y שלה הוא תמיד 0. אם היא במרחק 7 מהאמצע ימינה, אז ערך ה-x שלה הוא 7.",
        solution_steps: [
            { verbal_explanation: "מכיוון שהנקודה על ציר ה-x, אנו יודעים בוודאות שערך ה-y שלה הוא 0.", math_expression: "y = 0" },
            { verbal_explanation: "היא ממוקמת במרחק 7 בכיוון החיובי של הציר (ימינה). לכן ה-x שלה הוא 7.", math_expression: "x = 7" },
            { verbal_explanation: "נרשום את הזוג הסדור (x, y).", math_expression: "(7, 0)" }
        ],
        final_answer: "(7, 0)"
    },

    // --- שאלה 46 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "ספינה מפליגה מנמל הנמצא בראשית הצירים (0,0) אל יעד ששיעוריו הם (12, 5). אם כל יחידה במערכת הצירים מייצגת 1 ק\"מ, איזה מרחק הפליגה הספינה בקו ישר?",
        options: ["13 ק\"מ", "17 ק\"מ", "7 ק\"מ", "169 ק\"מ"],
        correctAnswer: 0,
        hint: "זהו משולש ישר זווית 'פיתגורי' קלאסי. חשבו את השורש של (12 בריבוע ועוד 5 בריבוע).",
        solution_steps: [
            { verbal_explanation: "נחשב את המרחק של נקודת היעד (12,5) מהנמל (0,0).", math_expression: "d = √(12² + 5²)" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "d = √(144 + 25)" },
            { verbal_explanation: "נחבר בתוך השורש.", math_expression: "d = √169" },
            { verbal_explanation: "נוציא שורש.", math_expression: "d = 13" }
        ],
        final_answer: "13 ק\"מ"
    },

    // --- שאלה 47 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "נתון ריבוע שמרכזו בראשית הצירים וקודקוד אחד שלו הוא (2, 2). מהו המרחק של קודקוד זה מראשית הצירים?",
        options: ["2.83 (או שורש 8)", "4", "2", "8"],
        correctAnswer: 0,
        hint: "הציבו את השיעורים (2,2) בנוסחת המרחק: שורש של (2 בריבוע פלוס 2 בריבוע).",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת המרחק מראשית הצירים.", math_expression: "d = √(2² + 2²)" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "d = √(4 + 4)" },
            { verbal_explanation: "נחבר.", math_expression: "d = √8" },
            { verbal_explanation: "במחשבון, שורש 8 הוא בערך 2.828.", math_expression: "d ≈ 2.83" }
        ],
        final_answer: "2.83 (או שורש 8)"
    },

    // --- שאלה 48 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "האם הנקודה (-3, 4) והנקודה (3, -4) נמצאות באותו מרחק מראשית הצירים?",
        options: ["כן, מרחקן זהה", "לא, (-3,4) קרובה יותר", "לא, (3,-4) קרובה יותר", "תלוי ביחידות המידה"],
        correctAnswer: 0,
        hint: "העלאה בריבוע של מספר שלילי נותנת תמיד תוצאה חיובית. לכן, מינוס 3 בריבוע שווה בדיוק ל-3 בריבוע.",
        solution_steps: [
            { verbal_explanation: "נחשב את המרחק של הנקודה הראשונה. הסימן השלילי מתבטל בריבוע.", math_expression: "d1 = √((-3)² + 4²) = √(9 + 16) = 5" },
            { verbal_explanation: "נחשב את המרחק של הנקודה השנייה.", math_expression: "d2 = √(3² + (-4)²) = √(9 + 16) = 5" },
            { verbal_explanation: "התוצאות זהות לחלוטין מכיוון שריבוע מעלים סימני מינוס. אלו שתי נקודות הנמצאות על אותו מעגל קנוני שרדיוסו 5.", math_expression: "d1 = d2 = 5" }
        ],
        final_answer: "כן, מרחקן זהה"
    },

    // --- שאלה 49 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "נקודה M(x, y) נמצאת על ישר שמשוואתו y = 2x. הנקודה נמצאת ברביע הראשון. המרחק של M מראשית הצירים הוא שורש 20 (√20). מהם שיעוריה?",
        options: ["(2, 4)", "(4, 8)", "(1, 2)", "(3, 6)"],
        correctAnswer: 0,
        hint: "מאחר והנקודה על הישר y=2x, הנקודה היא בעצם (x, 2x). הציבו זאת בנוסחת המרחק: איקס בריבוע ועוד (2 איקס) בריבוע שווה 20.",
        solution_steps: [
            { verbal_explanation: "נגדיר את הנקודה לפי הישר שעליו היא יושבת.", math_expression: "M = (x, 2x)" },
            { verbal_explanation: "נציב בנוסחת ריבוע המרחק מראשית הצירים (x² + y² = d²).", math_expression: "x² + (2x)² = (√20)²" },
            { verbal_explanation: "נפתח סוגריים ונעלה את השורש בריבוע.", math_expression: "x² + 4x² = 20" },
            { verbal_explanation: "נכנס איברים.", math_expression: "5x² = 20" },
            { verbal_explanation: "נחלק ב-5.", math_expression: "x² = 4" },
            { verbal_explanation: "הנקודה ברביע הראשון, לכן ה-x חיובי.", math_expression: "x = 2" },
            { verbal_explanation: "נמצא את ה-y על ידי הצבה במשוואת הישר.", math_expression: "y = 2 × 2 = 4" }
        ],
        final_answer: "(2, 4)"
    },

    // --- שאלה 50 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "מרחק נקודה מראשית הצירים",
        question: "שני מטוסים יוצאים מראשית הצירים (0,0). מטוס א' טס לנקודה (0, 8). מטוס ב' טס לנקודה (6, 0). מי מהם התרחק יותר מהראשית?",
        options: ["מטוס א'", "מטוס ב'", "הם התרחקו באותה מידה", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "נקודות שיושבות ישירות על הצירים (שבהן יש אפס) - המרחק שלהן מהראשית הוא פשוט הערך של המספר הלא-אפסי.",
        solution_steps: [
            { verbal_explanation: "מטוס א' טס על ציר ה-y, לכן המרחק שלו מהראשית הוא פשוט שיעור ה-y שלו.", math_expression: "מרחק א' = 8" },
            { verbal_explanation: "מטוס ב' טס על ציר ה-x, לכן המרחק שלו הוא שיעור ה-x שלו.", math_expression: "מרחק ב' = 6" },
            { verbal_explanation: "נשווה את המרחקים: 8 גדול מ-6.", math_expression: "8 > 6" },
            { verbal_explanation: "לכן מטוס א' התרחק יותר.", math_expression: "מטוס א'" }
        ],
        final_answer: "מטוס א'"
    },
	
    // ========================================================================
    // תת נושא 5: משולשים ומרובעים במערכת צירים
    // ========================================================================

    // --- שאלה 51 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "במשולש ישר זווית, קודקודי הניצבים הם על הצירים: הנקודה A היא (0, 6) והנקודה B היא (8, 0). קודקוד הזווית הישרה הוא בראשית הצירים (0,0). מהו שטח המשולש?",
        options: ["24 יח\"ר", "48 יח\"ר", "14 יח\"ר", "10 יח\"ר"],
        correctAnswer: 0,
        hint: "במשולש שקודקודו בראשית הצירים וצלעותיו על הצירים, אורכי הניצבים הם פשוט ערכי ה-x וה-y של הקודקודים. שטח הוא ניצב כפול ניצב חלקי 2.",
        solution_steps: [
            { verbal_explanation: "הניצב האנכי (על ציר ה-y) מגיע מ-(0,0) ל-(0,6). לכן אורכו 6.", math_expression: "גובה = 6" },
            { verbal_explanation: "הניצב האופקי (על ציר ה-x) מגיע מ-(0,0) ל-(8,0). לכן אורכו 8.", math_expression: "בסיס = 8" },
            { verbal_explanation: "נחשב את שטח המשולש ישר הזווית: מכפלת הניצבים חלקי 2.", math_expression: "S = (6 × 8) / 2" },
            { verbal_explanation: "נחשב ונקבל.", math_expression: "S = 48 / 2 = 24" }
        ],
        final_answer: "24 יח\"ר"
    },

    // --- שאלה 52 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: `בריבוע שמשורטט במערכת הצירים, שני קודקודים נגדיים (אלכסון) הם בנקודות (2, 2) ו- (6, 6).<br>מהו אורך אלכסון הריבוע?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <line x1="20" y1="130" x2="180" y2="130" stroke="#cbd5e1" stroke-width="2"/>
            <line x1="40" y1="20" x2="40" y2="140" stroke="#cbd5e1" stroke-width="2"/>
            <rect x="70" y="50" width="60" height="60" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <line x1="70" y1="110" x2="130" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <circle cx="70" cy="110" r="4" fill="#0f172a"/>
            <text x="35" y="125" font-size="10" font-weight="bold">(2, 2)</text>
            <circle cx="130" cy="50" r="4" fill="#0f172a"/>
            <text x="140" y="45" font-size="10" font-weight="bold">(6, 6)</text>
        </svg>`,
        options: ["5.66 (שורש 32)", "8", "32", "4"],
        correctAnswer: 0,
        hint: "האלכסון הוא המרחק בין שתי הנקודות הנגדיות הנתונות. השתמשו בנוסחת המרחק: שורש של הפרש ה-x בריבוע ועוד הפרש ה-y בריבוע.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחת המרחק (d) בין שתי הנקודות למציאת אורך האלכסון.", math_expression: "d = √((6 - 2)² + (6 - 2)²)" },
            { verbal_explanation: "נחסר בתוך הסוגריים.", math_expression: "d = √(4² + 4²)" },
            { verbal_explanation: "נעלה בריבוע ונחבר.", math_expression: "d = √(16 + 16) = √32" },
            { verbal_explanation: "במחשבון, שורש 32 הוא בערך 5.656.", math_expression: "d ≈ 5.66" }
        ],
        final_answer: "5.66 (שורש 32)"
    },

    // --- שאלה 53 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "במלבן שצלעותיו מקבילות לצירים, הקודקוד השמאלי התחתון הוא (1, 1), והקודקוד הימני העליון הוא (5, 4). מהו שטח המלבן?",
        options: ["12 יח\"ר", "20 יח\"ר", "9 יח\"ר", "15 יח\"ר"],
        correctAnswer: 0,
        hint: "מאחר והצלעות מקבילות לצירים, ניתן פשוט למדוד אותן: רוחב המלבן הוא ההפרש בין ערכי ה-x (5 פחות 1). גובה המלבן הוא ההפרש בין ערכי ה-y (4 פחות 1). הכפילו אותם.",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך בסיס המלבן על ידי חיסור ערכי ה-x של הנקודות.", math_expression: "רוחב = 5 - 1 = 4" },
            { verbal_explanation: "נחשב את גובה המלבן על ידי חיסור ערכי ה-y של הנקודות.", math_expression: "גובה = 4 - 1 = 3" },
            { verbal_explanation: "שטח מלבן שווה למכפלת הרוחב בגובה.", math_expression: "S = 4 × 3" },
            { verbal_explanation: "נחשב ונקבל את השטח.", math_expression: "S = 12" }
        ],
        final_answer: "12 יח\"ר"
    },

    // --- שאלה 54 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "במקבילית ABCD קודקוד A הוא (1, 2) וקודקוד B הסמוך לו הוא (5, 2). קודקוד C הוא (7, 6). מהם שיעורי הקודקוד D? (רמז: במקבילית הצלעות הנגדיות מקבילות ושוות באורכן).",
        options: ["(3, 6)", "(2, 6)", "(4, 6)", "(1, 6)"],
        correctAnswer: 0,
        hint: "בדקו איך הגענו מ-A ל-B: זזנו 4 יחידות ימינה (מ-1 ל-5), והגובה נשאר זהה. כדי להגיע מ-D ל-C, עלינו לעשות בדיוק את אותה תנועה. לכן מאיזה x צריך לזוז 4 ימינה כדי להגיע ל-7?",
        solution_steps: [
            { verbal_explanation: "הצלע AB אופקית לחלוטין (ה-y זהה, שווה 2). אורכה הוא 4 יחידות.", math_expression: "AB: אורך 4, כיוון ימינה" },
            { verbal_explanation: "במקבילית, הצלע הנגדית DC חייבת להיות שווה באורכה ומקבילה (אופקית). לכן גם D ו-C באותו גובה.", math_expression: "y_D = y_C = 6" },
            { verbal_explanation: "כדי להגיע מ-D אל C (שנמצאת ב-x=7), עלינו לזוז 4 יחידות ימינה (הוספת 4). לכן ה-x של D קטן ב-4 מה-x של C.", math_expression: "x_D = 7 - 4 = 3" },
            { verbal_explanation: "שיעורי הקודקוד D הם (3,6).", math_expression: "(3, 6)" }
        ],
        final_answer: "(3, 6)"
    },

    // --- שאלה 55 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "נתון משולש ישר זווית. משוואת הניצב הראשון היא y = 2x + 1. מהי עשויה להיות משוואת הניצב השני?",
        options: ["y = -0.5x + 4", "y = 2x - 3", "y = -2x + 1", "y = x + 2"],
        correctAnswer: 0,
        hint: "ניצבים במשולש ישר זווית הם שני קווים המאונכים זה לזה. לכן, השיפועים שלהם הופכיים ונגדיים. השיפוע הראשון הוא 2, מהו ההופכי-נגדי שלו?",
        solution_steps: [
            { verbal_explanation: "ניצבים יוצרים זווית של 90 מעלות, ולכן הישרים שעליהם הם מונחים חייבים להיות מאונכים.", math_expression: "ישרים מאונכים" },
            { verbal_explanation: "נזהה את שיפוע הניצב הראשון מהמשוואה.", math_expression: "m1 = 2" },
            { verbal_explanation: "שיפוע הישר המאונך אליו (הניצב השני) יהיה ההופכי והנגדי.", math_expression: "m2 = -1 / 2 = -0.5" },
            { verbal_explanation: "נחפש בתשובות איזו משוואה מתחילה בשיפוע 0.5-.", math_expression: "y = -0.5x + 4" }
        ],
        final_answer: "y = -0.5x + 4"
    },

    // --- שאלה 56 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "במעוין ABCD אלכסוני המעוין נפגשים בנקודה (4, 5). אם קודקוד A הוא (1, 1), מהם שיעורי הקודקוד הנגדי לו, C?",
        options: ["(7, 9)", "(3, 4)", "(8, 10)", "(-2, -3)"],
        correctAnswer: 0,
        hint: "אלכסונים במעוין חוצים זה את זה (נחתכים בדיוק באמצע). הנקודה (4,5) היא האמצע של הקטע AC. השתמשו בנוסחת אמצע קטע או בקפיצות שוות (מ-1 ל-4 קפצנו 3 צעדים, נקפוץ עוד 3 צעדים לאותו כיוון).",
        solution_steps: [
            { verbal_explanation: "נקודת מפגש האלכסונים (4,5) היא אמצע הקטע AC. נשתמש בשיטת ה'קפיצות'.", math_expression: "אמצע = (4,5)" },
            { verbal_explanation: "נבדוק את הקפיצה ב-x מהקצה A (שהוא 1) לאמצע (שהוא 4).", math_expression: "הוספנו 3" },
            { verbal_explanation: "כדי להגיע לקצה השני (C), נוסיף שוב 3 לאמצע.", math_expression: "x_C = 4 + 3 = 7" },
            { verbal_explanation: "נבדוק את הקפיצה ב-y מהקצה A (1) לאמצע (5). הוספנו 4.", math_expression: "הוספנו 4" },
            { verbal_explanation: "נוסיף 4 לאמצע כדי למצוא את קצה C.", math_expression: "y_C = 5 + 4 = 9" },
            { verbal_explanation: "נקבל את שיעורי הנקודה C.", math_expression: "(7, 9)" }
        ],
        final_answer: "(7, 9)"
    },

    // --- שאלה 57 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "במשולש נתונים שלושת הקודקודים: (0,0), (6,0) ו- (3,4). איזה סוג משולש זה?",
        options: ["שווה שוקיים", "ישר זווית", "שווה צלעות", "שונה צלעות"],
        correctAnswer: 0,
        hint: "חשבו את אורכי שתי הצלעות שעולות למעלה (מ-(0,0) ל-(3,4) ומ-(6,0) ל-(3,4)). אם תשתמשו בנוסחת המרחק, תראו ששתיהן שוות ל-5.",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך הצלע הראשונה (מראשית הצירים לקודקוד העליון).", math_expression: "d1 = √((3-0)² + (4-0)²) = √(9+16) = √25 = 5" },
            { verbal_explanation: "נחשב את אורך הצלע השנייה (מהקודקוד הימני לקודקוד העליון).", math_expression: "d2 = √((3-6)² + (4-0)²) = √((-3)² + 4²) = √(9+16) = 5" },
            { verbal_explanation: "שתי הצלעות שוות באורכן. לכן זהו משולש שווה שוקיים. (אורך הבסיס הוא 6 ולכן הוא לא שווה צלעות).", math_expression: "שווה שוקיים" }
        ],
        final_answer: "שווה שוקיים"
    },

    // --- שאלה 58 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "מרכזו של מעגל החוסם מלבן נמצא בנקודה (0,0). אחד מקודקודי המלבן הוא (3, 4). מהו אורך אלכסון המלבן?",
        options: ["10", "5", "14", "25"],
        correctAnswer: 0,
        hint: "במלבן החסום במעגל, מרכז המלבן (נקודת מפגש האלכסונים) מתלכד עם מרכז המעגל. המרחק מהמרכז (0,0) לקודקוד (3,4) הוא חצי אלכסון.",
        solution_steps: [
            { verbal_explanation: "מרכז המלבן נמצא בראשית הצירים (0,0). המרחק מהמרכז לאחד הקודקודים שווה לחצי מאורך האלכסון המלא.", math_expression: "חצי אלכסון = מרחק לראשית" },
            { verbal_explanation: "נחשב את המרחק של (3,4) מראשית הצירים.", math_expression: "d = √(3² + 4²) = √25 = 5" },
            { verbal_explanation: "אם חצי אלכסון הוא 5, האלכסון המלא הוא כפול.", math_expression: "אלכסון = 5 × 2 = 10" }
        ],
        final_answer: "10"
    },

    // --- שאלה 59 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "נתון משולש ABC. הצלע AB מונחת על ציר ה-x ואורכה 8 יחידות. הקודקוד השלישי C נמצא בנקודה (5, 6). מהו שטח המשולש?",
        options: ["24 יח\"ר", "48 יח\"ר", "14 יח\"ר", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "שטח משולש הוא בסיס כפול גובה חלקי 2. הבסיס נתון (8). מכיוון שהבסיס מונח על ציר ה-x, גובה המשולש הוא פשוט שיעור ה-y של הקודקוד C, שהוא 6.",
        solution_steps: [
            { verbal_explanation: "נזהה את הנתונים הנדרשים לשטח: בסיס וגובה.", math_expression: "בסיס = 8" },
            { verbal_explanation: "הגובה היורד אל ציר ה-x מקודקוד C (5,6) הוא המרחק האנכי עד לציר ה-x, כלומר ערך ה-y של הקודקוד.", math_expression: "גובה = 6" },
            { verbal_explanation: "נציב בנוסחת השטח למשולש.", math_expression: "S = (8 × 6) / 2" },
            { verbal_explanation: "נחשב: 48 חלקי 2 שווה 24.", math_expression: "S = 24" }
        ],
        final_answer: "24 יח\"ר"
    },

    // --- שאלה 60 ---
    {
        subject: "מתמטיקה",
        topic: "גיאומטריה אנליטית",
        subTopic: "משולשים ומרובעים במערכת צירים",
        question: "בריבוע, ידוע ששיפוע אחד האלכסונים הוא 1. מה יהיה שיפועו של האלכסון השני?",
        options: ["-1", "1", "0", "אין לו שיפוע (קו אנכי)"],
        correctAnswer: 0,
        hint: "בכל ריבוע (ובמעוין), שני האלכסונים מאונכים זה לזה. מהו השיפוע ההופכי והנגדי של המספר 1?",
        solution_steps: [
            { verbal_explanation: "תכונת יסוד של ריבוע (שהוא גם מעוין מיוחד) היא שאלכסוניו מאונכים זה לזה ב-90 מעלות.", math_expression: "אלכסונים מאונכים" },
            { verbal_explanation: "מכפלת השיפועים של ישרים מאונכים חייבת להיות מינוס 1.", math_expression: "m1 × m2 = -1" },
            { verbal_explanation: "שיפוע אחד הוא 1. לכן, השיפוע השני הוא ההופכי והנגדי שלו, שהוא 1-.", math_expression: "1 × (-1) = -1" }
        ],
        final_answer: "-1"
    }
];