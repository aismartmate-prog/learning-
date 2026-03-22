const questionsDB = [
    // ==========================================
    // תת נושא 1: מרחק בין שתי נקודות (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "חשבו את המרחק בין ראשית הצירים \\( (0, 0) \\) לבין הנקודה \\( (3, 4) \\).&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='180' x2='180' y2='180' stroke='#64748b' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='180' stroke='#64748b' stroke-width='2'/><line x1='20' y1='180' x2='140' y2='60' stroke='#3b82f6' stroke-width='3'/><line x1='140' y1='180' x2='140' y2='60' stroke='#94a3b8' stroke-dasharray='5,5' stroke-width='2'/><line x1='20' y1='180' x2='140' y2='180' stroke='#94a3b8' stroke-dasharray='5,5' stroke-width='2'/><circle cx='20' cy='180' r='5' fill='#ef4444'/><circle cx='140' cy='60' r='5' fill='#ef4444'/></svg></div>",
        options: ["5", "7", "25", "12"],
        correctAnswer: 0,
        hint: "השתמשו במשפט פיתגורס או בנוסחת המרחק. ראשית הצירים היא הנקודה המורכבת מאפס ואפס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שיעורי שתי הנקודות.", math_expression: "(0, 0) , (3, 4)" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת המרחק בין שתי נקודות.", math_expression: "d = \\sqrt{(3 - 0)^{2} + (4 - 0)^{2}}" },
            { verbal_explanation: "שלב 3: חישוב ההפרשים בתוך הסוגריים.", math_expression: "d = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "שלב 4: העלאה בריבוע של כל אחד מההפרשים.", math_expression: "d = \\sqrt{9 + 16}" },
            { verbal_explanation: "שלב 5: חיבור התוצאות מתחת לשורש.", math_expression: "d = \\sqrt{25}" },
            { verbal_explanation: "שלב 6: הוצאת שורש ריבועי.", math_expression: "d = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 2
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מצאו את המרחק בין הנקודה \\( (-2, 5) \\) לבין הנקודה \\( (4, -3) \\).&rlm;",
        options: ["10", "8", "14", "100"],
        correctAnswer: 0,
        hint: "הקפידו על סימני המינוס בעת חישוב ההפרשים בנוסחה. חיסור של מספר שלילי הופך לחיבור.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הנקודות להצבה.", math_expression: "(-2, 5) , (4, -3)" },
            { verbal_explanation: "שלב 2: הצבה בנוסחה תוך הקפדה על סוגריים למספרים שליליים.", math_expression: "d = \\sqrt{(4 - (-2))^{2} + (-3 - 5)^{2}}" },
            { verbal_explanation: "שלב 3: חישוב ערכי ההפרשים.", math_expression: "d = \\sqrt{6^{2} + (-8)^{2}}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החזקה (ריבוע של מספר שלילי הוא חיובי).", math_expression: "d = \\sqrt{36 + 64}" },
            { verbal_explanation: "שלב 5: סכימת המספרים מתחת לשורש.", math_expression: "d = \\sqrt{100}" },
            { verbal_explanation: "שלב 6: הוצאת השורש הריבועי לקבלת המרחק הסופי.", math_expression: "d = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 3
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מהו אורך הקטע המחבר את הנקודות \\( (2, 7) \\) ו-\\( (2, -1) \\)?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='100' y1='30' x2='100' y2='170' stroke='#3b82f6' stroke-width='4'/><circle cx='100' cy='30' r='5' fill='#ef4444'/><circle cx='100' cy='170' r='5' fill='#ef4444'/><line x1='20' y1='140' x2='180' y2='140' stroke='#94a3b8' stroke-width='2'/></svg></div>",
        options: ["8", "6", "10", "4"],
        correctAnswer: 0,
        hint: "שימו לב ששיעור האיקס בשתי הנקודות זהה. המשמעות היא שהקטע אנכי, וניתן לחשב את אורכו על ידי חיסור ישיר של שיעורי הוואי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שהקטע מאונך לציר האופקי כיוון ששיעורי האיקס זהים.", math_expression: "x_{1} = 2 , x_{2} = 2" },
            { verbal_explanation: "שלב 2: הצבה בנוסחה המלאה לשם אימות.", math_expression: "d = \\sqrt{(2 - 2)^{2} + (-1 - 7)^{2}}" },
            { verbal_explanation: "שלב 3: חישוב ההפרשים.", math_expression: "d = \\sqrt{0^{2} + (-8)^{2}}" },
            { verbal_explanation: "שלב 4: העלאה בריבוע של ההפרשים.", math_expression: "d = \\sqrt{0 + 64}" },
            { verbal_explanation: "שלב 5: חיבור והוצאת שורש.", math_expression: "d = \\sqrt{64}" },
            { verbal_explanation: "שלב 6: התוצאה (ניתן להגיע אליה גם על ידי חישוב המרחק הישיר על הציר).", math_expression: "d = 8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 4
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מרחקה של הנקודה \\( (x, 3) \\) מראשית הצירים הוא בדיוק \\( 5 \\). מצאו את הערך החיובי של איקס.&rlm;",
        options: ["4", "3", "5", "16"],
        correctAnswer: 0,
        hint: "בנו משוואה שבה נוסחת המרחק שווה לחמש. זכרו שראשית הצירים היא אפס ואפס, ואז פתרו משוואה עם נעלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת המרחק והשוואה לחמש.", math_expression: "5 = \\sqrt{(x - 0)^{2} + (3 - 0)^{2}}" },
            { verbal_explanation: "שלב 2: פישוט הערכים מתחת לשורש.", math_expression: "5 = \\sqrt{x^{2} + 9}" },
            { verbal_explanation: "שלב 3: העלאת שני האגפים בריבוע כדי להיפטר מהשורש.", math_expression: "25 = x^{2} + 9" },
            { verbal_explanation: "שלב 4: העברת התשע בחיסור לאגף השני.", math_expression: "25 - 9 = x^{2}" },
            { verbal_explanation: "שלב 5: חישוב ההפרש שהתקבל.", math_expression: "16 = x^{2}" },
            { verbal_explanation: "שלב 6: הוצאת שורש למציאת הפתרונות. השאלה מבקשת את הערך החיובי בלבד.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 5
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "נתונות שלוש נקודות: \\( (1, 1) \\), \\( (4, 5) \\), ו-\\( (1, 9) \\). איזה סוג משולש הן יוצרות?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='60,160 140,100 60,40' fill='none' stroke='#10b981' stroke-width='3'/><circle cx='60' cy='160' r='4' fill='#ef4444'/><circle cx='140' cy='100' r='4' fill='#ef4444'/><circle cx='60' cy='40' r='4' fill='#ef4444'/></svg></div>",
        options: ["שווה שוקיים", "שווה צלעות", "ישר זווית", "שונה צלעות"],
        correctAnswer: 0,
        hint: "חשבו את אורכי שתי צלעות, למשל הצלע מנקודה אחת לשנייה והצלע מהשנייה לשלישית, ובדקו אם אורכן זהה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך הצלע הראשונה.", math_expression: "d_{1} = \\sqrt{(4 - 1)^{2} + (5 - 1)^{2}}" },
            { verbal_explanation: "שלב 2: ביצוע החישוב לצלע הראשונה ופישוטה.", math_expression: "d_{1} = \\sqrt{3^{2} + 4^{2}} = 5" },
            { verbal_explanation: "שלב 3: חישוב אורך הצלע השנייה.", math_expression: "d_{2} = \\sqrt{(1 - 4)^{2} + (9 - 5)^{2}}" },
            { verbal_explanation: "שלב 4: ביצוע החישוב לצלע השנייה ופישוטה.", math_expression: "d_{2} = \\sqrt{(-3)^{2} + 4^{2}} = 5" },
            { verbal_explanation: "שלב 5: חישוב הצלע השלישית (יושבת על אותו קו אנכי כי שיעור האיקס זהה).", math_expression: "d_{3} = 9 - 1 = 8" },
            { verbal_explanation: "שלב 6: מצאנו שתי צלעות שוות, ולכן המשולש מוגדר כשווה שוקיים.", math_expression: "d_{1} = d_{2} = 5" }
        ],
        final_answer: "שווה שוקיים"
    },

    // שאלה מספר 6
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "חשבו את היקף המשולש שקודקודיו הם \\( (0, 0) \\), \\( (3, 0) \\), ו-\\( (0, 4) \\).&rlm;",
        options: ["12", "14", "7", "10"],
        correctAnswer: 0,
        hint: "זהו משולש ישר זווית המונח על הצירים. חשבו את אורכי הניצבים ישירות, ואת היתר בעזרת משפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הקודקודים המונחים על הצירים.", math_expression: "(0,0) , (3,0) , (0,4)" },
            { verbal_explanation: "שלב 2: חישוב צלע ראשונה המונחת על ציר איקס.", math_expression: "d_{1} = 3 - 0 = 3" },
            { verbal_explanation: "שלב 3: חישוב צלע שנייה המונחת על ציר וואי.", math_expression: "d_{2} = 4 - 0 = 4" },
            { verbal_explanation: "שלב 4: חישוב היתר בעזרת נוסחת המרחק בין שתי הנקודות הנותרות.", math_expression: "d_{3} = \\sqrt{(3 - 0)^{2} + (0 - 4)^{2}}" },
            { verbal_explanation: "שלב 5: המשך חישוב היתר.", math_expression: "d_{3} = \\sqrt{9 + 16} = 5" },
            { verbal_explanation: "שלב 6: היקף משולש הוא סכום אורכי צלעותיו.", math_expression: "P = 3 + 4 + 5 = 12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 7
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מהו ריבוע המרחק בין הנקודות \\( (-1, 2) \\) ו-\\( (5, -4) \\)?&rlm;",
        options: ["72", "36", "100", "64"],
        correctAnswer: 0,
        hint: "המונח 'ריבוע המרחק' אומר שאין צורך להוציא שורש בסוף התהליך. פשוט חשבו את סכום ריבועי ההפרשים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הנוסחה לריבוע המרחק (ללא השורש החיצוני).", math_expression: "d^{2} = (5 - (-1))^{2} + (-4 - 2)^{2}" },
            { verbal_explanation: "שלב 2: חישוב ההפרש בסוגריים של איקס.", math_expression: "(5 + 1)^{2} = 6^{2}" },
            { verbal_explanation: "שלב 3: חישוב ההפרש בסוגריים של וואי.", math_expression: "(-6)^{2}" },
            { verbal_explanation: "שלב 4: העלאת ההפרש של איקס בריבוע.", math_expression: "36" },
            { verbal_explanation: "שלב 5: העלאת ההפרש של וואי בריבוע.", math_expression: "36" },
            { verbal_explanation: "שלב 6: סכימת שתי התוצאות.", math_expression: "d^{2} = 36 + 36 = 72" }
        ],
        final_answer: "72"
    },

    // שאלה מספר 8
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מעגל שמרכזו בנקודה \\( (2, 2) \\) עובר דרך הנקודה \\( (5, 6) \\). מהו רדיוס המעגל?&rlm;",
        options: ["5", "25", "7", "10"],
        correctAnswer: 0,
        hint: "רדיוס הוא למעשה קטע המחבר את מרכז המעגל עם כל נקודה על היקפו. חשבו את המרחק בין שתי הנקודות הנתונות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הרדיוס כמרחק בין הנקודות.", math_expression: "R = d" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת המרחק.", math_expression: "R = \\sqrt{(5 - 2)^{2} + (6 - 2)^{2}}" },
            { verbal_explanation: "שלב 3: חישוב ההפרשים.", math_expression: "R = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "שלב 4: העלאה בריבוע.", math_expression: "R = \\sqrt{9 + 16}" },
            { verbal_explanation: "שלב 5: חיבור המספרים מתחת לשורש.", math_expression: "R = \\sqrt{25}" },
            { verbal_explanation: "שלב 6: הוצאת שורש ריבועי לקבלת אורך הרדיוס.", math_expression: "R = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 9
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מצאו את המרחק בין הנקודה \\( (7, 24) \\) לבין ראשית הצירים.&rlm;",
        options: ["25", "31", "24", "7"],
        correctAnswer: 0,
        hint: "זוהי שלשה פיתגורית מוכרת. נסו לחשב את סכום הריבועים של שבע ועשרים וארבע ולהוציא שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחה מול נקודת האפס.", math_expression: "d = \\sqrt{7^{2} + 24^{2}}" },
            { verbal_explanation: "שלב 2: העלאת שבע בריבוע.", math_expression: "49" },
            { verbal_explanation: "שלב 3: העלאת עשרים וארבע בריבוע.", math_expression: "576" },
            { verbal_explanation: "שלב 4: חיבור שתי התוצאות.", math_expression: "d = \\sqrt{49 + 576}" },
            { verbal_explanation: "שלב 5: סכום כולל מתחת לשורש.", math_expression: "d = \\sqrt{625}" },
            { verbal_explanation: "שלב 6: הוצאת שורש (ניתן להיעזר במחשבון).", math_expression: "d = 25" }
        ],
        final_answer: "25"
    },

    // שאלה מספר 10
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מרחקה של הנקודה \\( (x, 0) \\) מהנקודה \\( (0, -8) \\) הוא בדיוק \\( 10 \\). איקס הוא מספר חיובי. מצאו את איקס.&rlm;",
        options: ["6", "8", "36", "4"],
        correctAnswer: 0,
        hint: "הציבו את הנתונים בנוסחת המרחק, העלו בריבוע ופתרו את המשוואה הריבועית החסרה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה.", math_expression: "10 = \\sqrt{(x - 0)^{2} + (0 - (-8))^{2}}" },
            { verbal_explanation: "שלב 2: פישוט הפעולות מתחת לשורש.", math_expression: "10 = \\sqrt{x^{2} + 8^{2}}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע של שני האגפים.", math_expression: "100 = x^{2} + 64" },
            { verbal_explanation: "שלב 4: העברת השישים וארבע בחיסור לאגף השני.", math_expression: "100 - 64 = x^{2}" },
            { verbal_explanation: "שלב 5: חישוב.", math_expression: "36 = x^{2}" },
            { verbal_explanation: "שלב 6: בחירת התשובה החיובית בהתאם לנתון בשאלה.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 11
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מהו אורך הצלע של ריבוע ששניים מקודקודיו הסמוכים ממוקמים בנקודות \\( (1, 1) \\) ו-\\( (5, 4) \\)?&rlm;",
        options: ["5", "25", "16", "7"],
        correctAnswer: 0,
        hint: "צלע של ריבוע היא בדיוק המרחק בין שני קודקודים סמוכים. הפעילו את נוסחת המרחק הרגילה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחה למציאת אורך צלע.", math_expression: "d = \\sqrt{(5 - 1)^{2} + (4 - 1)^{2}}" },
            { verbal_explanation: "שלב 2: חישוב ההפרש בסוגריים של איקס.", math_expression: "4^{2}" },
            { verbal_explanation: "שלב 3: חישוב ההפרש בסוגריים של וואי.", math_expression: "3^{2}" },
            { verbal_explanation: "שלב 4: העלאת האיברים בריבוע.", math_expression: "d = \\sqrt{16 + 9}" },
            { verbal_explanation: "שלב 5: סכימה.", math_expression: "d = \\sqrt{25}" },
            { verbal_explanation: "שלב 6: הוצאת שורש לקבלת אורך הצלע של הריבוע.", math_expression: "d = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 12
    {
        topic: "analytic_geometry_172",
        subTopic: "מרחק בין שתי נקודות",
        question_text: "מצאו את המרחק בין ראשית הצירים לנקודה \\( (-6, 8) \\).&rlm;",
        options: ["10", "14", "100", "2"],
        correctAnswer: 0,
        hint: "חישוב המרחק מראשית הצירים דורש רק העלאה בריבוע של שיעורי הנקודה, חיבורם והוצאת שורש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחת המרחק מול אפס.", math_expression: "d = \\sqrt{(-6 - 0)^{2} + (8 - 0)^{2}}" },
            { verbal_explanation: "שלב 2: פישוט ההפרשים.", math_expression: "d = \\sqrt{(-6)^{2} + 8^{2}}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע. זכרו שריבוע של מספר שלילי נותן תוצאה חיובית.", math_expression: "d = \\sqrt{36 + 64}" },
            { verbal_explanation: "שלב 4: חיבור התוצאות.", math_expression: "d = \\sqrt{100}" },
            { verbal_explanation: "שלב 5: הוצאת שורש ריבועי.", math_expression: "d = 10" }
        ],
        final_answer: "10"
    },

    // ==========================================
    // תת נושא 2: אמצע קטע (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "מצאו את שיעורי נקודת האמצע של הקטע המחבר את הנקודות \\( (2, 4) \\) ו-\\( (6, 8) \\).&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='40' y1='160' x2='160' y2='40' stroke='#8b5cf6' stroke-width='3'/><circle cx='40' cy='160' r='5' fill='#334155'/><circle cx='160' cy='40' r='5' fill='#334155'/><circle cx='100' cy='100' r='6' fill='#f59e0b'/></svg></div>",
        options: ["(4, 6)", "(8, 12)", "(2, 2)", "(4, 4)"],
        correctAnswer: 0,
        hint: "נקודת אמצע היא הממוצע החשבוני של שיעורי האיקס והממוצע החשבוני של שיעורי הוואי. חברו וחלקו בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום נוסחת אמצע קטע לאיקס.", math_expression: "x_{M} = \\dfrac{2 + 6}{2}" },
            { verbal_explanation: "שלב 2: סכימת המונה של איקס.", math_expression: "x_{M} = \\dfrac{8}{2}" },
            { verbal_explanation: "שלב 3: חלוקה בשתיים לקבלת שיעור איקס של האמצע.", math_expression: "x_{M} = 4" },
            { verbal_explanation: "שלב 4: רישום נוסחת אמצע קטע לוואי.", math_expression: "y_{M} = \\dfrac{4 + 8}{2}" },
            { verbal_explanation: "שלב 5: סכימת המונה של וואי.", math_expression: "y_{M} = \\dfrac{12}{2}" },
            { verbal_explanation: "שלב 6: חלוקה בשתיים לקבלת שיעור וואי.", math_expression: "y_{M} = 6" },
            { verbal_explanation: "שלב 7: כתיבת הנקודה הסופית.", math_expression: "(4, 6)" }
        ],
        final_answer: "(4, 6)"
    },

    // שאלה מספר 14
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "מהי נקודת האמצע בין הנקודה \\( (-2, 5) \\) לנקודה \\( (4, -1) \\)?&rlm;",
        options: ["(1, 2)", "(2, 4)", "(1, 3)", "(-3, 3)"],
        correctAnswer: 0,
        hint: "חברו את המספרים בזהירות תוך התחשבות בסימני המינוס לפני שאתם מחלקים בשתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה לאיקס.", math_expression: "x_{M} = \\dfrac{-2 + 4}{2}" },
            { verbal_explanation: "שלב 2: חישוב המונה לאיקס.", math_expression: "x_{M} = \\dfrac{2}{2}" },
            { verbal_explanation: "שלב 3: תוצאת איקס.", math_expression: "x_{M} = 1" },
            { verbal_explanation: "שלב 4: הצבה לוואי.", math_expression: "y_{M} = \\dfrac{5 + (-1)}{2}" },
            { verbal_explanation: "שלב 5: חישוב המונה לוואי.", math_expression: "y_{M} = \\dfrac{4}{2}" },
            { verbal_explanation: "שלב 6: תוצאת וואי.", math_expression: "y_{M} = 2" },
            { verbal_explanation: "שלב 7: סידור כנקודה.", math_expression: "(1, 2)" }
        ],
        final_answer: "(1, 2)"
    },

    // שאלה מספר 15
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "קטע מחבר את ראשית הצירים עם הנקודה \\( (-6, 10) \\). מהו אמצע הקטע?&rlm;",
        options: ["(-3, 5)", "(-6, 5)", "(-3, 10)", "(3, -5)"],
        correctAnswer: 0,
        hint: "כשאחד הקצוות הוא אפס ואפס, נקודת האמצע היא פשוט חצי מהשיעורים של הקצה השני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הקצה הראשון כראשית הצירים.", math_expression: "(0, 0)" },
            { verbal_explanation: "שלב 2: הצבה לאיקס.", math_expression: "x_{M} = \\dfrac{0 + (-6)}{2}" },
            { verbal_explanation: "שלב 3: חלוקה בשתיים לאיקס.", math_expression: "x_{M} = -3" },
            { verbal_explanation: "שלב 4: הצבה לוואי.", math_expression: "y_{M} = \\dfrac{0 + 10}{2}" },
            { verbal_explanation: "שלב 5: חלוקה בשתיים לוואי.", math_expression: "y_{M} = 5" },
            { verbal_explanation: "שלב 6: הרכבת הנקודה.", math_expression: "(-3, 5)" }
        ],
        final_answer: "(-3, 5)"
    },

    // שאלה מספר 16
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "נקודת האמצע של קטע היא \\( (3, 5) \\). אחד הקצוות הוא \\( (1, 2) \\). מצאו את הקצה השני.&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='30' y1='170' x2='170' y2='30' stroke='#94a3b8' stroke-width='2'/><circle cx='30' cy='170' r='5' fill='#3b82f6'/><circle cx='100' cy='100' r='5' fill='#f59e0b'/><circle cx='170' cy='30' r='5' fill='#ef4444' stroke='#ef4444' stroke-dasharray='2,2'/></svg></div>",
        options: ["(5, 8)", "(2, 3)", "(4, 7)", "(7, 10)"],
        correctAnswer: 0,
        hint: "הפעם משוואת הממוצע הפוכה. הכפילו את שיעור נקודת האמצע בשתיים והחסירו את הקצה הידוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים במשוואת איקס.", math_expression: "3 = \\dfrac{1 + x}{2}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בשתיים.", math_expression: "6 = 1 + x" },
            { verbal_explanation: "שלב 3: העברת האחת בחיסור לקבלת קצה איקס.", math_expression: "x = 5" },
            { verbal_explanation: "שלב 4: הצבת הנתונים במשוואת וואי.", math_expression: "5 = \\dfrac{2 + y}{2}" },
            { verbal_explanation: "שלב 5: הכפלה בשתיים.", math_expression: "10 = 2 + y" },
            { verbal_explanation: "שלב 6: העברת שתיים בחיסור לקבלת קצה וואי.", math_expression: "y = 8" },
            { verbal_explanation: "שלב 7: כתיבת הנקודה המלאה.", math_expression: "(5, 8)" }
        ],
        final_answer: "(5, 8)"
    },

    // שאלה מספר 17
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "קצה אחד של קוטר במעגל הוא \\( (-4, 2) \\). מרכז המעגל (שהוא אמצע הקוטר) נמצא בראשית הצירים \\( (0, 0) \\). מהו הקצה השני?&rlm;",
        options: ["(4, -2)", "(2, -4)", "(-4, -2)", "(0, 0)"],
        correctAnswer: 0,
        hint: "מרכז המעגל נמצא בראשית הצירים. לכן, הקצה השני מורכב מהמספרים הנגדיים לקצה הראשון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה במשוואת אמצע עבור איקס.", math_expression: "0 = \\dfrac{-4 + x}{2}" },
            { verbal_explanation: "שלב 2: כפל בשתיים.", math_expression: "0 = -4 + x" },
            { verbal_explanation: "שלב 3: חילוץ איקס.", math_expression: "x = 4" },
            { verbal_explanation: "שלב 4: הצבה במשוואת אמצע עבור וואי.", math_expression: "0 = \\dfrac{2 + y}{2}" },
            { verbal_explanation: "שלב 5: כפל בשתיים.", math_expression: "0 = 2 + y" },
            { verbal_explanation: "שלב 6: חילוץ וואי.", math_expression: "y = -2" },
            { verbal_explanation: "שלב 7: הרכבת הנקודה.", math_expression: "(4, -2)" }
        ],
        final_answer: "(4, -2)"
    },

    // שאלה מספר 18
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "במשולש קודקודים המונחים בנקודות הבאות: \\( (0, 0) \\), \\( (8, 0) \\), ו-\\( (4, 6) \\). מצאו את אורך התיכון היורד מהקודקוד השלישי לצלע שעל ציר האיקס.&rlm;",
        options: ["6", "10", "4", "5"],
        correctAnswer: 0,
        hint: "תיכון חוצה את הצלע אליה הוא מגיע. מצאו את נקודת האמצע של הבסיס תחילה, ואז חשבו את המרחק אליה מהקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אמצע הצלע שעל ציר איקס.", math_expression: "x_{M} = \\dfrac{0 + 8}{2} = 4" },
            { verbal_explanation: "שלב 2: אמצע הצלע בוואי הוא אפס כיוון ששני הקצוות על הציר.", math_expression: "y_{M} = \\dfrac{0 + 0}{2} = 0" },
            { verbal_explanation: "שלב 3: נקודת האמצע נמצאה.", math_expression: "(4, 0)" },
            { verbal_explanation: "שלב 4: נחשב את המרחק מהקודקוד השלישי לנקודה זו.", math_expression: "d = \\sqrt{(4 - 4)^{2} + (6 - 0)^{2}}" },
            { verbal_explanation: "שלב 5: חישוב בתוך השורש.", math_expression: "d = \\sqrt{0^{2} + 6^{2}}" },
            { verbal_explanation: "שלב 6: פישוט.", math_expression: "d = \\sqrt{36}" },
            { verbal_explanation: "שלב 7: הוצאת שורש למציאת אורך התיכון.", math_expression: "d = 6" }
        ],
        final_answer: "6"
    },

    // שאלה מספר 19
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "נתון מעגל שהקצוות של אחד הקוטרים שלו הם \\( (-3, 4) \\) ו-\\( (5, -2) \\). מצאו את מרכז המעגל.&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='70' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='50' y1='50' x2='150' y2='150' stroke='#64748b' stroke-width='2'/><circle cx='100' cy='100' r='5' fill='#ef4444'/></svg></div>",
        options: ["(1, 1)", "(2, 2)", "(1, 2)", "(4, 1)"],
        correctAnswer: 0,
        hint: "מרכז המעגל הוא בדיוק נקודת האמצע של הקוטר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת הממוצע לאיקס.", math_expression: "x_{M} = \\dfrac{-3 + 5}{2}" },
            { verbal_explanation: "שלב 2: חישוב המונה.", math_expression: "x_{M} = \\dfrac{2}{2}" },
            { verbal_explanation: "שלב 3: חלוקה.", math_expression: "x_{M} = 1" },
            { verbal_explanation: "שלב 4: שימוש בנוסחה לוואי.", math_expression: "y_{M} = \\dfrac{4 + (-2)}{2}" },
            { verbal_explanation: "שלב 5: חישוב המונה.", math_expression: "y_{M} = \\dfrac{2}{2}" },
            { verbal_explanation: "שלב 6: חלוקה.", math_expression: "y_{M} = 1" },
            { verbal_explanation: "שלב 7: הרכבת נקודת המרכז.", math_expression: "(1, 1)" }
        ],
        final_answer: "(1, 1)"
    },

    // שאלה מספר 20
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "במקבילית, ידוע שאלכסון אחד מחבר את הנקודות \\( (1, 1) \\) ו-\\( (6, 4) \\). האלכסון השני מגיע מהקודקוד \\( (5, 1) \\). מצאו את הקודקוד הרביעי.&rlm;",
        options: ["(2, 4)", "(3, 5)", "(4, 2)", "(1, 6)"],
        correctAnswer: 0,
        hint: "במקבילית, האלכסונים חוצים זה את זה. מצאו את נקודת האמצע של האלכסון הראשון, והיא תהיה גם האמצע של השני.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אמצע האלכסון הראשון (איקס).", math_expression: "x_{M} = \\dfrac{1 + 6}{2} = 3.5" },
            { verbal_explanation: "שלב 2: מציאת אמצע האלכסון הראשון (וואי).", math_expression: "y_{M} = \\dfrac{1 + 4}{2} = 2.5" },
            { verbal_explanation: "שלב 3: נקודת מפגש האלכסונים.", math_expression: "(3.5, 2.5)" },
            { verbal_explanation: "שלב 4: שימוש בנקודה זו למציאת הקצה באלכסון השני.", math_expression: "3.5 = \\dfrac{5 + x}{2}" },
            { verbal_explanation: "שלב 5: הכפלה בשתיים וחיסור.", math_expression: "7 = 5 + x \\Rightarrow x = 2" },
            { verbal_explanation: "שלב 6: בניית משוואה לוואי.", math_expression: "2.5 = \\dfrac{1 + y}{2} \\Rightarrow 5 = 1 + y \\Rightarrow y = 4" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "(2, 4)" }
        ],
        final_answer: "(2, 4)"
    },

    // שאלה מספר 21
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "קטע מקביל לציר האיקס מתחיל ב-\\( (-5, 7) \\) ומסתיים ב-\\( (9, 7) \\). מהי נקודת האמצע שלו?&rlm;",
        options: ["(2, 7)", "(4, 7)", "(2, 0)", "(7, 2)"],
        correctAnswer: 0,
        hint: "מכיוון שהקטע אופקי, שיעור הוואי לא משתנה ויישאר קבוע. עליכם למצוא רק את ממוצע האיקסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב ממוצע ערכי איקס.", math_expression: "x_{M} = \\dfrac{-5 + 9}{2}" },
            { verbal_explanation: "שלב 2: סכימה.", math_expression: "x_{M} = \\dfrac{4}{2}" },
            { verbal_explanation: "שלב 3: תוצאת חלוקה.", math_expression: "x_{M} = 2" },
            { verbal_explanation: "שלב 4: ערכי הוואי זהים בשני הקצוות ולכן הממוצע שווה לאותו ערך.", math_expression: "y_{M} = 7" },
            { verbal_explanation: "שלב 5: אין צורך לחשב באמת, אך להלן החישוב.", math_expression: "y_{M} = \\dfrac{7 + 7}{2} = 7" },
            { verbal_explanation: "שלב 6: הרכבת הנקודה.", math_expression: "(2, 7)" }
        ],
        final_answer: "(2, 7)"
    },

    // שאלה מספר 22
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "אמצעו של קטע ממוקם בדיוק בראשית הצירים \\( (0, 0) \\). קצה אחד שלו הוא \\( (7, -3) \\). היכן ממוקם הקצה השני?&rlm;",
        options: ["(-7, 3)", "(-3, 7)", "(7, 3)", "(-7, -3)"],
        correctAnswer: 0,
        hint: "כשאמצע הקטע באפס, שני הקצוות הם נקודות סימטריות (המספרים הנגדיים) אחת לשנייה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחה מול אפס עבור איקס.", math_expression: "0 = \\dfrac{7 + x}{2}" },
            { verbal_explanation: "שלב 2: פתרון המשוואה.", math_expression: "7 + x = 0 \\Rightarrow x = -7" },
            { verbal_explanation: "שלב 3: הצבה מול אפס בוואי.", math_expression: "0 = \\dfrac{-3 + y}{2}" },
            { verbal_explanation: "שלב 4: כפל ובידוד.", math_expression: "-3 + y = 0 \\Rightarrow y = 3" },
            { verbal_explanation: "שלב 5: התכונה ידועה כסימטריה סביב הראשית.", math_expression: "(x, y) \\rightarrow (-x, -y)" },
            { verbal_explanation: "שלב 6: שימוש בתכונה מקצר את הדרך.", math_expression: "(7, -3) \\rightarrow (-7, 3)" }
        ],
        final_answer: "(-7, 3)"
    },

    // שאלה מספר 23
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "מהו שיעור האיקס בלבד של נקודת האמצע של הקטע שקצותיו הם \\( (10, -5) \\) ו-\\( (-2, 9) \\)?&rlm;",
        options: ["4", "8", "6", "12"],
        correctAnswer: 0,
        hint: "התעלמו משיעור הוואי וחשבו רק את הממוצע של ערכי האיקס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ ערכי איקס מהנקודות הנתונות.", math_expression: "x_{1} = 10 , x_{2} = -2" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת האמצע.", math_expression: "x_{M} = \\dfrac{10 + (-2)}{2}" },
            { verbal_explanation: "שלב 3: פישוט המונה.", math_expression: "x_{M} = \\dfrac{8}{2}" },
            { verbal_explanation: "שלב 4: ביצוע החלוקה בשתיים.", math_expression: "x_{M} = 4" },
            { verbal_explanation: "שלב 5: מכיוון שנדרש רק איקס, סיימנו את החישוב.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 24
    {
        topic: "analytic_geometry_172",
        subTopic: "אמצע קטע",
        question_text: "מצאו את נקודת האמצע של הקטע שבין \\( (3, 7) \\) ל-\\( (5, -1) \\). לאחר מכן, חברו את שיעורי האיקס והוואי של התוצאה. מהו הסכום?&rlm;",
        options: ["7", "8", "10", "6"],
        correctAnswer: 0,
        hint: "חשבו את האמצע כרגיל וקבלו נקודה, ואז פשוט חברו את שני המספרים שבתוכה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב איקס של האמצע.", math_expression: "x_{M} = \\dfrac{3 + 5}{2} = \\dfrac{8}{2} = 4" },
            { verbal_explanation: "שלב 2: חישוב וואי של האמצע.", math_expression: "y_{M} = \\dfrac{7 + (-1)}{2} = \\dfrac{6}{2} = 3" },
            { verbal_explanation: "שלב 3: נקודת האמצע שהתקבלה.", math_expression: "(4, 3)" },
            { verbal_explanation: "שלב 4: הפעולה הנדרשת היא סכום השיעורים.", math_expression: "x_{M} + y_{M}" },
            { verbal_explanation: "שלב 5: הצבה בפעולה.", math_expression: "4 + 3 = 7" },
            { verbal_explanation: "שלב 6: התוצאה הסופית.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // ==========================================
    // תת נושא 3: תכונות מרובעים במערכת צירים (מלבן, מעוין) (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "מלבן משורטט במערכת צירים. אחד מאלכסוניו מחבר את ראשית הצירים \\( (0, 0) \\) לנקודה \\( (8, 6) \\). מהו אורך האלכסון השני של המלבן?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='40' y='60' width='120' height='80' fill='none' stroke='#3b82f6' stroke-width='2'/><line x1='40' y1='140' x2='160' y2='60' stroke='#ef4444' stroke-width='2' stroke-dasharray='4,4'/><line x1='40' y1='60' x2='160' y2='140' stroke='#10b981' stroke-width='2' stroke-dasharray='4,4'/><circle cx='40' cy='140' r='4' fill='#334155'/><circle cx='160' cy='60' r='4' fill='#334155'/></svg></div>",
        options: ["10", "14", "100", "8"],
        correctAnswer: 0,
        hint: "במלבן, שני האלכסונים שווים זה לזה באורכם. חשבו את אורך האלכסון הנתון וזה יהיה הפתרון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בתכונת המלבן הקובעת שיוויון אלכסונים.", math_expression: "d_{1} = d_{2}" },
            { verbal_explanation: "שלב 2: חישוב המרחק של האלכסון הראשון הנתון מראשית הצירים.", math_expression: "d_{1} = \\sqrt{(8 - 0)^{2} + (6 - 0)^{2}}" },
            { verbal_explanation: "שלב 3: העלאת שמונה בריבוע.", math_expression: "64" },
            { verbal_explanation: "שלב 4: העלאת שש בריבוע.", math_expression: "36" },
            { verbal_explanation: "שלב 5: חיבור וקבלת המספר מתחת לשורש.", math_expression: "d_{1} = \\sqrt{100}" },
            { verbal_explanation: "שלב 6: הוצאת השורש הריבועי.", math_expression: "10" },
            { verbal_explanation: "שלב 7: הרישום הסופי כיוון שהאלכסונים שווים.", math_expression: "d_{2} = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 26
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "אלכסוניו של מעוין נחתכים בראשית הצירים \\( (0, 0) \\). שני קודקודים סמוכים של המעוין נמצאים על הצירים בנקודות \\( (3, 0) \\) ו-\\( (0, 4) \\). מהו אורך צלע המעוין?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 160,100 100,180 40,100' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='180' stroke='#94a3b8' stroke-width='1'/><line x1='40' y1='100' x2='160' y2='100' stroke='#94a3b8' stroke-width='1'/></svg></div>",
        options: ["5", "7", "25", "12"],
        correctAnswer: 0,
        hint: "במעוין כל הצלעות שווות. צלע אחת מחברת את שתי הנקודות הנתונות, שהן יוצרות משולש ישר זווית עם ראשית הצירים. חשבו את מרחקן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: צלע המעוין שווה למרחק בין שני קודקודים סמוכים הנתונים.", math_expression: "a = \\sqrt{(3 - 0)^{2} + (0 - 4)^{2}}" },
            { verbal_explanation: "שלב 2: פישוט הפעולה בסוגריים.", math_expression: "a = \\sqrt{3^{2} + (-4)^{2}}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע.", math_expression: "a = \\sqrt{9 + 16}" },
            { verbal_explanation: "שלב 4: חיבור מתחת לשורש.", math_expression: "a = \\sqrt{25}" },
            { verbal_explanation: "שלב 5: הוצאת שורש לקבלת הצלע.", math_expression: "a = 5" },
            { verbal_explanation: "שלב 6: מאחר וכל צלעות המעוין שווות, זה אורך כל אחת מהן.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 27
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "נתון מרובע כלשהו. לאחר חישוב, גילינו ששני אלכסוניו חוצים זה את זה ואורכם שווה ל-\\( 10 \\). איזה סוג מרובע זה בוודאות?&rlm;",
        options: ["מלבן", "מעוין", "מקבילית", "דלתון"],
        correctAnswer: 0,
        hint: "מרובע שבו האלכסונים חוצים זה את זה הוא מקבילית. מקבילית שבה האלכסונים שווים היא מלבן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תכונת אלכסונים חוצים מגדירה את הצורה בבסיסה כמקבילית.", math_expression: "d_{1}, d_{2}" },
            { verbal_explanation: "שלב 2: נתון שהם גם שווים באורכם.", math_expression: "d_{1} = d_{2} = 10" },
            { verbal_explanation: "שלב 3: התכונה המבדילה מלבן ממקבילית רגילה היא שיוויון האלכסונים.", math_expression: "d_{1} = d_{2}" },
            { verbal_explanation: "שלב 4: מעוין אינו מקיים בהכרח שיוויון אלכסונים (אלא אם הוא גם ריבוע).", math_expression: "d_{1} \\neq d_{2}" },
            { verbal_explanation: "שלב 5: המסקנה היא חד משמעית שמדובר במלבן.", math_expression: "1" }
        ],
        final_answer: "מלבן"
    },

    // שאלה מספר 28
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "צלעותיו של מלבן מקבילות לצירים. קודקודו השמאלי התחתון ב-\\( (1, 1) \\), וקודקודו הימני העליון ב-\\( (5, 4) \\). מהו שטחו?&rlm;",
        options: ["12", "14", "20", "16"],
        correctAnswer: 0,
        hint: "מכיוון שהמלבן מקביל לצירים, רוחבו הוא ההפרש בין ערכי האיקס, וגובהו הוא ההפרש בין ערכי הוואי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב רוחב המלבן כהפרש על ציר איקס.", math_expression: "w = 5 - 1 = 4" },
            { verbal_explanation: "שלב 2: חישוב גובה המלבן כהפרש על ציר וואי.", math_expression: "h = 4 - 1 = 3" },
            { verbal_explanation: "שלב 3: וידוא אורכי הצלעות.", math_expression: "w = 4 \\quad , \\quad h = 3" },
            { verbal_explanation: "שלב 4: שטח מלבן הוא מכפלת צלעות סמוכות.", math_expression: "S = w \\times h" },
            { verbal_explanation: "שלב 5: הצבת הערכים.", math_expression: "S = 4 \\times 3" },
            { verbal_explanation: "שלב 6: חישוב התוצאה.", math_expression: "12" }
        ],
        final_answer: "12"
    },

    // שאלה מספר 29
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "במעוין, אורך אלכסון אחד הוא \\( 6 \\) ואורך השני הוא \\( 8 \\). מהו היקף המעוין?&rlm;",
        options: ["20", "28", "24", "14"],
        correctAnswer: 0,
        hint: "האלכסונים במעוין חוצים זה את זה ומהווים ניצבים במשולש ישר זווית, בו היתר הוא צלע המעוין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חלוקת האלכסונים לשניים כדי למצוא את הניצבים במשולש שנוצר.", math_expression: "x = 6 : 2 = 3" },
            { verbal_explanation: "שלב 2: חלוקת האלכסון השני.", math_expression: "y = 8 : 2 = 4" },
            { verbal_explanation: "שלב 3: הפעלת משפט פיתגורס למציאת צלע המעוין.", math_expression: "a = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "שלב 4: חישוב השורש.", math_expression: "a = \\sqrt{9 + 16} = \\sqrt{25} = 5" },
            { verbal_explanation: "שלב 5: צלע המעוין היא חמש. היקף מעוין שווה לארבע פעמים הצלע.", math_expression: "P = 4 \\times 5" },
            { verbal_explanation: "שלב 6: ביצוע הכפל להשגת ההיקף.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 30
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "נתונים שלושה קודקודים של מלבן לפי הסדר: \\( (0, 0) \\), \\( (4, 0) \\), ו-\\( (4, 3) \\). מצאו את הקודקוד הרביעי.&rlm;",
        options: ["(0, 3)", "(3, 0)", "(4, 4)", "(0, 4)"],
        correctAnswer: 0,
        hint: "זהו מלבן המונח על הצירים. צלע אחת מתלכדת עם ציר איקס. הקודקוד הרביעי ישלים את הצורה על ציר וואי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בחינת הנתונים מגלה שהבסיס יושב על ציר איקס מאפס לארבע.", math_expression: "w = 4" },
            { verbal_explanation: "שלב 2: הצלע הימנית עולה אנכית מאפס לשלוש.", math_expression: "h = 3" },
            { verbal_explanation: "שלב 3: כדי שהצורה תהיה מלבן, הצלע השמאלית חייבת לעלות גם היא מאפס לשלוש באותו קו אופקי.", math_expression: "x = 0" },
            { verbal_explanation: "שלב 4: לכן הקודקוד ימצא בגובה שלוש על ציר וואי.", math_expression: "y = 3" },
            { verbal_explanation: "שלב 5: הרכבת הקודקוד.", math_expression: "(0, 3)" },
            { verbal_explanation: "שלב 6: אימות על ידי מרחקים - המרחק בין הצלעות נשמר במדויק.", math_expression: "(0, 3)" }
        ],
        final_answer: "(0, 3)"
    },

    // שאלה מספר 31
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "קצותיו של אלכסון במלבן הם ראשית הצירים \\( (0, 0) \\) והנקודה \\( (6, 8) \\). היכן נמצאת נקודת מפגש האלכסונים?&rlm;",
        options: ["(3, 4)", "(4, 3)", "(6, 8)", "(10, 10)"],
        correctAnswer: 0,
        hint: "בכל מקבילית (כולל מלבן), האלכסונים חוצים זה את זה. לכן, המפגש הוא בדיוק באמצע האלכסון הנתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת אמצע קטע עבור איקס.", math_expression: "x_{M} = \\dfrac{0 + 6}{2}" },
            { verbal_explanation: "שלב 2: חלוקה.", math_expression: "x_{M} = 3" },
            { verbal_explanation: "שלב 3: שימוש בנוסחה עבור וואי.", math_expression: "y_{M} = \\dfrac{0 + 8}{2}" },
            { verbal_explanation: "שלב 4: חלוקה.", math_expression: "y_{M} = 4" },
            { verbal_explanation: "שלב 5: הרכבת נקודת המפגש שהיא אמצע האלכסון.", math_expression: "(3, 4)" },
            { verbal_explanation: "שלב 6: אישור תשובה.", math_expression: "(3, 4)" }
        ],
        final_answer: "(3, 4)"
    },

    // שאלה מספר 32
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "במרובע נתון, חושבו אורכי כל ארבע הצלעות ונמצא שכל אחת מהן שווה ל-\\( \\sqrt{13} \\). המרובע אינו ריבוע. מהו?&rlm;",
        options: ["מעוין", "מלבן", "טרפז", "דלתון"],
        correctAnswer: 0,
        hint: "מרובע שכל צלעותיו שוות הוא בהכרח צורה ספציפית מאוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניתוח הנתון - ארבע צלעות שוות.", math_expression: "a = b = c = d = \\sqrt{13}" },
            { verbal_explanation: "שלב 2: ההגדרה הבסיסית של צורה בעלת צלעות שוות מתאימה למעוין.", math_expression: "1" },
            { verbal_explanation: "שלב 3: נתון שהצורה אינה ריבוע, כדי לשלול מרובע משוכלל (שיש לו גם זוויות ישרות).", math_expression: "1" },
            { verbal_explanation: "שלב 4: מלבן אינו מקיים בהכרח שוויון כל הצלעות ולכן הוא נפסל.", math_expression: "1" },
            { verbal_explanation: "שלב 5: המסקנה היא שהמרובע הוא מעוין.", math_expression: "1" }
        ],
        final_answer: "מעוין"
    },

    // שאלה מספר 33
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "צלעות מלבן מקבילות לצירים. משוואות שתיים מצלעותיו הארוכות הן \\( y = 2 \\), ו-\\( y = 7 \\). מהו גובה המלבן?&rlm;",
        options: ["5", "9", "3.5", "14"],
        correctAnswer: 0,
        hint: "הישרים הנתונים הם ישרים אופקיים. המרחק ביניהם מהווה את הגובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הישרים הנתונים כישרים המקבילים לציר איקס.", math_expression: "y_{1} = 7 \\quad , \\quad y_{2} = 2" },
            { verbal_explanation: "שלב 2: מכיוון שהישרים אופקיים, המרחק ביניהם הוא הפרש הערכים.", math_expression: "h = 7 - 2" },
            { verbal_explanation: "שלב 3: חישוב ההפרש הפשוט.", math_expression: "5" },
            { verbal_explanation: "שלב 4: הגובה שווה לחמש יחידות.", math_expression: "h = 5" },
            { verbal_explanation: "שלב 5: הרישום הסופי לאפשרויות.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 34
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "קודקודיו הנגדיים של מעוין ממוקמים בנקודות \\( (-2, 0) \\) ו-\\( (2, 0) \\). מהו מרכז המעוין?&rlm;<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 160,100 100,180 40,100' fill='none' stroke='#f59e0b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='180' stroke='#94a3b8' stroke-width='1'/><line x1='40' y1='100' x2='160' y2='100' stroke='#94a3b8' stroke-width='1'/><circle cx='100' cy='100' r='5' fill='#334155'/></svg></div>",
        options: ["(0, 0)", "(2, 2)", "(-2, 2)", "(1, 0)"],
        correctAnswer: 0,
        hint: "מרכז מעוין הוא נקודת מפגש האלכסונים. היעזרו בנוסחת אמצע קטע על האלכסון האופקי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי האלכסון שנמתח בין שתי הנקודות.", math_expression: "(-2, 0) \\quad , \\quad (2, 0)" },
            { verbal_explanation: "שלב 2: מציאת האמצע על ידי חיבור ערכי איקס וחלוקה בשתיים.", math_expression: "x_{M} = \\dfrac{-2 + 2}{2} = \\dfrac{0}{2} = 0" },
            { verbal_explanation: "שלב 3: מציאת האמצע על ידי חיבור ערכי וואי.", math_expression: "y_{M} = \\dfrac{0 + 0}{2} = 0" },
            { verbal_explanation: "שלב 4: המרכז נמצא בראשית הצירים.", math_expression: "(0, 0)" },
            { verbal_explanation: "שלב 5: אישור תכונת המעוין באיור - הנקודות אכן סימטריות לראשית.", math_expression: "(0, 0)" }
        ],
        final_answer: "(0, 0)"
    },

    // שאלה מספר 35
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "חשבו את היקפו של מלבן שקודקודיו הם \\( (0, 0) \\), \\( (6, 0) \\), \\( (6, 8) \\), ו-\\( (0, 8) \\).&rlm;",
        options: ["28", "48", "14", "20"],
        correctAnswer: 0,
        hint: "המלבן מונח על הצירים. מצאו את אורך הבסיס והגובה והציבו בנוסחת היקף מלבן (סכום כל הצלעות).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך הבסיס מציר הוואי ימינה.", math_expression: "w = 6 - 0 = 6" },
            { verbal_explanation: "שלב 2: חישוב הגובה מציר האיקס מעלה.", math_expression: "h = 8 - 0 = 8" },
            { verbal_explanation: "שלב 3: נוסחת היקף למלבן היא פעמיים הרוחב ועוד פעמיים הגובה.", math_expression: "P = 2 \\times 6 + 2 \\times 8" },
            { verbal_explanation: "שלב 4: ביצוע הכפל עבור כל צמד צלעות.", math_expression: "12 + 16" },
            { verbal_explanation: "שלב 5: חיבור התוצאות.", math_expression: "28" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "28" }
        ],
        final_answer: "28"
    },

    // שאלה מספר 36
    {
        topic: "analytic_geometry_172",
        subTopic: "תכונות מרובעים במערכת צירים (מלבן, מעוין)",
        question_text: "אלכסוניו של מעוין מונחים על הצירים. קודקודי המעוין ממוקמים ב-\\( (3, 0) \\), \\( (-3, 0) \\), \\( (0, 4) \\), ו-\\( (0, -4) \\). חשבו את שטח המעוין.&rlm;",
        options: ["24", "48", "12", "14"],
        correctAnswer: 0,
        hint: "שטח מעוין הוא מכפלת האלכסונים לחלק לשתיים. חשבו את אורכי האלכסונים המלאים והציבו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך האלכסון האופקי השלם (בין מינוס שלוש לשלוש).", math_expression: "d_{1} = 3 - (-3) = 6" },
            { verbal_explanation: "שלב 2: חישוב אורך האלכסון האנכי השלם (בין מינוס ארבע לארבע).", math_expression: "d_{2} = 4 - (-4) = 8" },
            { verbal_explanation: "שלב 3: הצבה בנוסחת השטח למעוין.", math_expression: "S = \\dfrac{6 \\times 8}{2}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל שבמונה.", math_expression: "\\dfrac{48}{2}" },
            { verbal_explanation: "שלב 5: חלוקה בשתיים למציאת השטח.", math_expression: "24" },
            { verbal_explanation: "שלב 6: הרישום הסופי.", math_expression: "24" }
        ],
        final_answer: "24"
    }
];