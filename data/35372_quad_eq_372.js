const questionsDB = [
    // ==========================================
    // תת נושא 1: נוסחת השורשים (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "פתרו את המשוואה הריבועית הבאה בעזרת נוסחת השורשים: \\( x^{2} - 5x + 6 = 0 \\).&rlm;",
        options: ["x = 2 , x = 3", "x = -2 , x = -3", "x = 1 , x = 6", "אין פתרון"],
        correctAnswer: 0,
        hint: "זהו את המקדמים a, b, c. הציבו אותם בנוסחת השורשים וחשבו קודם את הערך שמתחת לשורש (הדיסקרימיננטה).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים של המשוואה הריבועית.", math_expression: "a = 1 \\quad , \\quad b = -5 \\quad , \\quad c = 6" },
            { verbal_explanation: "שלב 2: כתיבת נוסחת השורשים הכללית.", math_expression: "x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^{2} - 4ac}}{2a}" },
            { verbal_explanation: "שלב 3: הצבת המקדמים לתוך הנוסחה. שימו לב לכפל סימני המינוס.", math_expression: "x_{1,2} = \\dfrac{-(-5) \\pm \\sqrt{(-5)^{2} - 4 \\times 1 \\times 6}}{2 \\times 1}" },
            { verbal_explanation: "שלב 4: חישוב הביטוי שמתחת לשורש (הדיסקרימיננטה).", math_expression: "x_{1,2} = \\dfrac{5 \\pm \\sqrt{25 - 24}}{2}" },
            { verbal_explanation: "שלב 5: הוצאת השורש הריבועי מ-1.", math_expression: "x_{1,2} = \\dfrac{5 \\pm 1}{2}" },
            { verbal_explanation: "שלב 6: הפרדה לשני מסלולי חישוב, פלוס ומינוס, לקבלת שני הפתרונות.", math_expression: "x_{1} = \\dfrac{6}{2} = 3 \\quad , \\quad x_{2} = \\dfrac{4}{2} = 2" }
        ],
        final_answer: "x = 2 , x = 3"
    },

    // שאלה מספר 2
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "מצאו את שורשי המשוואה הבאה: \\( x^{2} + 7x + 10 = 0 \\).&rlm;",
        options: ["x = -2 , x = -5", "x = 2 , x = 5", "x = 1 , x = 10", "x = -1 , x = -10"],
        correctAnswer: 0,
        hint: "שימו לב שהמקדם b חיובי. כאשר תציבו בנוסחה, תקבלו מינוס לפני השורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ המקדמים.", math_expression: "a = 1 \\quad , \\quad b = 7 \\quad , \\quad c = 10" },
            { verbal_explanation: "שלב 2: הצבה ישירה בנוסחת השורשים.", math_expression: "x_{1,2} = \\dfrac{-7 \\pm \\sqrt{7^{2} - 4 \\times 1 \\times 10}}{2 \\times 1}" },
            { verbal_explanation: "שלב 3: חישוב הערך הפנימי של השורש.", math_expression: "\\Delta = 49 - 40 = 9" },
            { verbal_explanation: "שלב 4: כתיבת הביטוי המפושט לאחר הוצאת השורש.", math_expression: "x_{1,2} = \\dfrac{-7 \\pm 3}{2}" },
            { verbal_explanation: "שלב 5: חישוב הפתרון הראשון עם הפלוס.", math_expression: "x_{1} = \\dfrac{-7 + 3}{2} = \\dfrac{-4}{2} = -2" },
            { verbal_explanation: "שלב 6: חישוב הפתרון השני עם המינוס.", math_expression: "x_{2} = \\dfrac{-7 - 3}{2} = \\dfrac{-10}{2} = -5" }
        ],
        final_answer: "x = -2 , x = -5"
    },

    // שאלה מספר 3
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "פתרו את המשוואה: \\( x^{2} - 8x + 16 = 0 \\). כמה פתרונות יש לה?&rlm;",
        options: ["פתרון אחד בלבד: x = 4", "שני פתרונות: x = 4 , x = -4", "שני פתרונות: x = 2 , x = 8", "אין פתרון למשוואה"],
        correctAnswer: 0,
        hint: "חשבו את הערך שמתחת לשורש. אם הוא מתאפס, המשמעות היא שיש רק פתרון ממשי אחד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המקדמים a, b, c.", math_expression: "a = 1 \\quad , \\quad b = -8 \\quad , \\quad c = 16" },
            { verbal_explanation: "שלב 2: חישוב הדיסקרימיננטה (הביטוי שמתחת לשורש).", math_expression: "\\Delta = (-8)^{2} - 4 \\times 1 \\times 16" },
            { verbal_explanation: "שלב 3: פתרון הכפל והחזקה.", math_expression: "\\Delta = 64 - 64 = 0" },
            { verbal_explanation: "שלב 4: הצבה בנוסחת השורשים. השורש מתאפס.", math_expression: "x = \\dfrac{-(-8) \\pm 0}{2 \\times 1}" },
            { verbal_explanation: "שלב 5: פתרון המשוואה הפשוטה שנותרה.", math_expression: "x = \\dfrac{8}{2} = 4" },
            { verbal_explanation: "שלב 6: המסקנה היא שיש שורש יחיד.", math_expression: "x = 4" }
        ],
        final_answer: "פתרון אחד בלבד: x = 4"
    },

    // שאלה מספר 4
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "מהם הפתרונות של המשוואה: \\( x^{2} - 2x + 5 = 0 \\)?&rlm;",
        options: ["אין פתרון", "x = 1", "x = -1 , x = 5", "x = 2 , x = 5"],
        correctAnswer: 0,
        hint: "בדקו את הביטוי שמתחת לשורש בנוסחת השורשים. אם המספר שלילי, למשוואה אין פתרון במספרים ממשיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איסוף המקדמים של המשוואה.", math_expression: "a = 1 \\quad , \\quad b = -2 \\quad , \\quad c = 5" },
            { verbal_explanation: "שלב 2: בדיקת תוכן השורש (הדיסקרימיננטה).", math_expression: "\\Delta = (-2)^{2} - 4 \\times 1 \\times 5" },
            { verbal_explanation: "שלב 3: ביצוע חזקה ומכפלה.", math_expression: "\\Delta = 4 - 20" },
            { verbal_explanation: "שלב 4: תוצאת החיסור מניבה מספר שלילי.", math_expression: "\\Delta = -16" },
            { verbal_explanation: "שלב 5: ניסיון להוציא שורש ממספר שלילי אינו אפשרי בממשיים.", math_expression: "\\sqrt{-16}" },
            { verbal_explanation: "שלב 6: המסקנה היא שהקבוצה ריקה, כלומר למשוואה אין פתרון.", math_expression: "\\emptyset" }
        ],
        final_answer: "אין פתרון"
    },

    // שאלה מספר 5
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "פתרו את המשוואה כאשר המקדם a אינו 1: \\( 2x^{2} - 7x + 3 = 0 \\).&rlm;",
        options: ["x = 3 , x = 0.5", "x = -3 , x = -0.5", "x = 1.5 , x = 1", "אין פתרון"],
        correctAnswer: 0,
        hint: "הקפידו להציב את 2 במקום a גם במכנה (פעמיים איי) וגם בתוך השורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ המקדמים.", math_expression: "a = 2 \\quad , \\quad b = -7 \\quad , \\quad c = 3" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת השורשים המלאה.", math_expression: "x_{1,2} = \\dfrac{-(-7) \\pm \\sqrt{(-7)^{2} - 4 \\times 2 \\times 3}}{2 \\times 2}" },
            { verbal_explanation: "שלב 3: חישוב הערך שבתוך השורש.", math_expression: "\\Delta = 49 - 24 = 25" },
            { verbal_explanation: "שלב 4: פישוט המשוואה להפרדה לשני פתרונות.", math_expression: "x_{1,2} = \\dfrac{7 \\pm 5}{4}" },
            { verbal_explanation: "שלב 5: מציאת הפתרון הראשון בעזרת פעולת החיבור.", math_expression: "x_{1} = \\dfrac{12}{4} = 3" },
            { verbal_explanation: "שלב 6: מציאת הפתרון השני בעזרת פעולת החיסור.", math_expression: "x_{2} = \\dfrac{2}{4} = 0.5" }
        ],
        final_answer: "x = 3 , x = 0.5"
    },

    // שאלה מספר 6
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "פתרו את המשוואה הריבועית החסרה (בה c = 0): \\( x^{2} - 4x = 0 \\). (אפשר להשתמש בנוסחת השורשים או להוציא גורם משותף).&rlm;",
        options: ["x = 0 , x = 4", "x = -4 , x = 4", "x = 0 , x = -4", "x = 2 , x = 2"],
        correctAnswer: 0,
        hint: "ניתן להציב c=0 בנוסחת השורשים. דרך מהירה יותר היא להוציא איקס מחוץ לסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נגדיר את המקדמים להצבה בנוסחת השורשים.", math_expression: "a = 1 \\quad , \\quad b = -4 \\quad , \\quad c = 0" },
            { verbal_explanation: "שלב 2: הצבה בנוסחה.", math_expression: "x_{1,2} = \\dfrac{-(-4) \\pm \\sqrt{(-4)^{2} - 4 \\times 1 \\times 0}}{2 \\times 1}" },
            { verbal_explanation: "שלב 3: חלק הדיסקרימיננטה מתפשט היות והכפל באפס מאפס אותו.", math_expression: "\\Delta = 16 - 0 = 16" },
            { verbal_explanation: "שלב 4: בניית הביטוי המפושט.", math_expression: "x_{1,2} = \\dfrac{4 \\pm 4}{2}" },
            { verbal_explanation: "שלב 5: מסלול הפלוס.", math_expression: "x_{1} = \\dfrac{8}{2} = 4" },
            { verbal_explanation: "שלב 6: מסלול המינוס.", math_expression: "x_{2} = \\dfrac{0}{2} = 0" }
        ],
        final_answer: "x = 0 , x = 4"
    },

    // שאלה מספר 7
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "מצאו את הפתרונות של המשוואה הריבועית הבאה: \\( -x^{2} + 6x - 5 = 0 \\).&rlm;",
        options: ["x = 1 , x = 5", "x = -1 , x = -5", "x = 2 , x = 3", "אין פתרון"],
        correctAnswer: 0,
        hint: "המקדם a הוא שלילי (-1). אפשר להציב אותו כפי שהוא בנוסחה, או לכפול את כל המשוואה במינוס אחת כדי שיהיה נוח יותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נשמור על המשוואה כפי שהיא ונזהה מקדמים.", math_expression: "a = -1 \\quad , \\quad b = 6 \\quad , \\quad c = -5" },
            { verbal_explanation: "שלב 2: נציב בנוסחת השורשים עם שימת לב לסימנים.", math_expression: "x_{1,2} = \\dfrac{-6 \\pm \\sqrt{6^{2} - 4 \\times (-1) \\times (-5)}}{2 \\times (-1)}" },
            { verbal_explanation: "שלב 3: חישוב תוכן השורש (המינוסים מבטלים זה את זה במכפלה הפנימית).", math_expression: "\\Delta = 36 - 20 = 16" },
            { verbal_explanation: "שלב 4: פישוט התרגיל.", math_expression: "x_{1,2} = \\dfrac{-6 \\pm 4}{-2}" },
            { verbal_explanation: "שלב 5: חישוב האפשרות הראשונה בחלוקה למספר שלילי.", math_expression: "x_{1} = \\dfrac{-2}{-2} = 1" },
            { verbal_explanation: "שלב 6: חישוב האפשרות השנייה.", math_expression: "x_{2} = \\dfrac{-10}{-2} = 5" }
        ],
        final_answer: "x = 1 , x = 5"
    },

    // שאלה מספר 8
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "סדרו את המשוואה הבאה ופתרו אותה: \\( x^{2} - 6x = -8 \\).&rlm;",
        options: ["x = 2 , x = 4", "x = -2 , x = -4", "x = 8 , x = -1", "x = 1 , x = 8"],
        correctAnswer: 0,
        hint: "לפני השימוש בנוסחת השורשים, חובה להעביר את כל האיברים לאגף אחד כך שהמשוואה תהיה שווה לאפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת המספר אגף ליצירת משוואה שווה לאפס.", math_expression: "x^{2} - 6x + 8 = 0" },
            { verbal_explanation: "שלב 2: קביעת המקדמים החדשים של המשוואה.", math_expression: "a = 1 \\quad , \\quad b = -6 \\quad , \\quad c = 8" },
            { verbal_explanation: "שלב 3: חישוב השייר מתחת לשורש (הדיסקרימיננטה).", math_expression: "\\Delta = (-6)^{2} - 4 \\times 1 \\times 8" },
            { verbal_explanation: "שלב 4: חישוב תוצאת החיסור בתוך השורש.", math_expression: "\\Delta = 36 - 32 = 4" },
            { verbal_explanation: "שלב 5: הצבה לנוסחה הכללית המפושטת.", math_expression: "x_{1,2} = \\dfrac{6 \\pm 2}{2}" },
            { verbal_explanation: "שלב 6: פיצול לשני פתרונות סופיים.", math_expression: "x_{1} = \\dfrac{8}{2} = 4 \\quad , \\quad x_{2} = \\dfrac{4}{2} = 2" }
        ],
        final_answer: "x = 2 , x = 4"
    },

    // שאלה מספר 9
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "פתחו את הסוגריים ופתרו את המשוואה הריבועית: \\( (x - 2)(x - 3) = 2 \\).&rlm;",
        options: ["x = 1 , x = 4", "x = 2 , x = 3", "x = -1 , x = -4", "x = 0 , x = 5"],
        correctAnswer: 0,
        hint: "פתחו סוגריים, העבירו את ה-2 שבאגף הימני שמאלה בחיסור, כנסו איברים ואז הפעילו את נוסחת השורשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: פתיחת סוגריים בשיטת כפל כל איבר.", math_expression: "x^{2} - 3x - 2x + 6 = 2" },
            { verbal_explanation: "שלב 2: כינוס איברים והעברת המספר מאגף ימין למטרת איפוס.", math_expression: "x^{2} - 5x + 6 - 2 = 0" },
            { verbal_explanation: "שלב 3: כתיבת המשוואה הריבועית המסודרת.", math_expression: "x^{2} - 5x + 4 = 0" },
            { verbal_explanation: "שלב 4: חילוץ המקדמים למשוואה.", math_expression: "a = 1 \\quad , \\quad b = -5 \\quad , \\quad c = 4" },
            { verbal_explanation: "שלב 5: חישוב הדיסקרימיננטה.", math_expression: "\\Delta = (-5)^{2} - 4 \\times 1 \\times 4 = 25 - 16 = 9" },
            { verbal_explanation: "שלב 6: חילוץ הפתרונות דרך נוסחת השורשים.", math_expression: "x_{1,2} = \\dfrac{5 \\pm 3}{2} \\Rightarrow x_{1} = 4 \\quad , \\quad x_{2} = 1" }
        ],
        final_answer: "x = 1 , x = 4"
    },

    // שאלה מספר 10
    {
        topic: "quadratic_equations_372",
        subTopic: "נוסחת השורשים",
        question_text: "מהו ערך הדיסקרימיננטה (דלתא, הביטוי שמתחת לשורש) של המשוואה הבאה: \\( 3x^{2} - 5x + 2 = 0 \\)?&rlm;",
        options: ["1", "49", "-1", "25"],
        correctAnswer: 0,
        hint: "הנוסחה לחישוב הדיסקרימיננטה היא בי בריבוע מינוס ארבע כפול איי כפול סי. הציבו את המקדמים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת המקדמים של המשוואה שניתנה.", math_expression: "a = 3 \\quad , \\quad b = -5 \\quad , \\quad c = 2" },
            { verbal_explanation: "שלב 2: כתיבת הנוסחה של הביטוי הכלוא תחת השורש.", math_expression: "\\Delta = b^{2} - 4ac" },
            { verbal_explanation: "שלב 3: החלפת האותיות במקדמים המספריים הרלוונטיים.", math_expression: "\\Delta = (-5)^{2} - 4 \\times 3 \\times 2" },
            { verbal_explanation: "שלב 4: ביצוע החזקה והמכפלה התלת-איברית.", math_expression: "\\Delta = 25 - 24" },
            { verbal_explanation: "שלב 5: פעולת החיסור לקבלת הפתרון הסופי המייצג את קיום שורשי המשוואה.", math_expression: "\\Delta = 1" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "1" }
        ],
        final_answer: "1"
    }
];