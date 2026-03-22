const questionsDB = [
    // ==========================================
    // תת נושא 1: מרחק בין נקודות (10 שאלות)
    // ==========================================

    // שאלה מספר 1 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "במערכת צירים נתונים שלושה קודקודים של משולש: A(1, 1), B(4, 5), C(1, 5).&rlm;<br>א. חשבו את אורכי הניצבים AC ו-BC.&rlm;<br>ב. חשבו את אורך היתר AB.&rlm;<br>ג. מהו היקף המשולש?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,120 40,40 100,40' fill='#3b82f6' opacity='0.2' stroke='#3b82f6' stroke-width='2'/><circle cx='40' cy='120' r='4' fill='#ef4444'/><circle cx='40' cy='40' r='4' fill='#ef4444'/><circle cx='100' cy='40' r='4' fill='#ef4444'/><text x='25' y='130' font-size='12'>A</text><text x='25' y='35' font-size='12'>C</text><text x='110' y='35' font-size='12'>B</text></svg></div>",
        options: ["א. 4 ו-3 | ב. 5 | ג. 12", "א. 5 ו-3 | ב. 4 | ג. 12", "א. 4 ו-3 | ב. 5 | ג. 10", "א. 16 ו-9 | ב. 25 | ג. 50"],
        correctAnswer: 0,
        hint: "ניצבים המקבילים לצירים מחושבים כהפרש פשוט של קואורדינטות. היתר מחושב בעזרת נוסחת המרחק. ההיקף הוא סכום כל הצלעות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הניצב האופקי על ידי חיסור ערכי האיקס.", math_expression: "d_{BC} = 4 - 1 = 3" },
            { verbal_explanation: "שלב 2: חישוב הניצב האנכי על ידי חיסור ערכי הוואי.", math_expression: "d_{AC} = 5 - 1 = 4" },
            { verbal_explanation: "שלב 3: מציאת אורך היתר בעזרת משפט פיתגורס (נוסחת המרחק).", math_expression: "d_{AB} = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת היתר.", math_expression: "d_{AB} = \\sqrt{9 + 16} = 5" },
            { verbal_explanation: "שלב 5: סכימת שלוש הצלעות לקבלת היקף המשולש.", math_expression: "P = 3 + 4 + 5 = 12" }
        ],
        final_answer: "א. 4 ו-3 | ב. 5 | ג. 12"
    },

    // שאלה מספר 2 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "מעגל שמרכזו בנקודה M(-2, 3) עובר דרך הנקודה A(4, 11).&rlm;<br>א. מצאו את אורך רדיוס המעגל R.&rlm;<br>ב. מצאו את שטח המעגל (השאירו את \\( \\pi \\) בתשובה).&rlm;",
        options: ["א. 10 | ב. 100\\pi", "א. 100 | ב. 10\\pi", "א. 14 | ב. 196\\pi", "א. 8 | ב. 64\\pi"],
        correctAnswer: 0,
        hint: "הרדיוס הוא המרחק בין מרכז המעגל לבין כל נקודה על ההיקף. שטח המעגל מחושב לפי רדיוס בריבוע כפול פאי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בנוסחת המרחק עם הקפדה על סימנים שליליים.", math_expression: "R = \\sqrt{(4 - (-2))^{2} + (11 - 3)^{2}}" },
            { verbal_explanation: "שלב 2: הפיכת חיסור של שלילי לחיבור בתוך הסוגריים.", math_expression: "R = \\sqrt{(4 + 2)^{2} + 8^{2}}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע וחיבור מתחת לשורש.", math_expression: "R = \\sqrt{36 + 64} = \\sqrt{100}" },
            { verbal_explanation: "שלב 4: מציאת אורך הרדיוס המדויק.", math_expression: "R = 10" },
            { verbal_explanation: "שלב 5: חישוב שטח המעגל באמצעות הנוסחה המוכרת.", math_expression: "S = 10^{2} \\times \\pi = 100\\pi" }
        ],
        final_answer: "א. 10 | ב. 100\\pi"
    },

    // שאלה מספר 3 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "נתון משולש שקודקודיו הם A(0, 0), B(6, 0) ו- C(3, 4).&rlm;<br>א. חשבו את אורך הצלע AC.&rlm;<br>ב. חשבו את אורך הצלע BC.&rlm;<br>ג. האם המשולש הוא שווה שוקיים?&rlm;",
        options: ["א. 5 | ב. 5 | ג. כן", "א. 25 | ב. 25 | ג. כן", "א. 5 | ב. 4 | ג. לא", "א. 6 | ב. 6 | ג. כן"],
        correctAnswer: 0,
        hint: "השתמשו פעמיים בנוסחת המרחק. אם מתקבלת תוצאה זהה עבור שתי צלעות, המשולש שווה שוקיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך הצלע הראשונה מראשית הצירים.", math_expression: "d_{AC} = \\sqrt{(3 - 0)^{2} + (4 - 0)^{2}}" },
            { verbal_explanation: "שלב 2: השלמת חישוב פיתגורס לצלע הראשונה.", math_expression: "d_{AC} = \\sqrt{9 + 16} = 5" },
            { verbal_explanation: "שלב 3: חישוב אורך הצלע השנייה המחוברת לקצה הבסיס.", math_expression: "d_{BC} = \\sqrt{(6 - 3)^{2} + (0 - 4)^{2}}" },
            { verbal_explanation: "שלב 4: השלמת החישוב לצלע השנייה.", math_expression: "d_{BC} = \\sqrt{3^{2} + (-4)^{2}} = 5" },
            { verbal_explanation: "שלב 5: בחינת השוויון בין הצלעות למתן תשובה סופית.", math_expression: "d_{AC} = d_{BC} = 5" }
        ],
        final_answer: "א. 5 | ב. 5 | ג. כן"
    },

    // שאלה מספר 4 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "קודקודי מלבן ABCD מונחים כך שצלעותיו מקבילות לצירים: A(2, 2), B(10, 2), C(10, 8), D(2, 8).&rlm;<br>א. חשבו את אורך האלכסון AC.&rlm;<br>ב. חשבו את שטח המלבן.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 250 150' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><rect x='40' y='40' width='160' height='80' fill='#10b981' opacity='0.2' stroke='#10b981' stroke-width='2'/><line x1='40' y1='120' x2='200' y2='40' stroke='#10b981' stroke-dasharray='4,4' stroke-width='2'/><circle cx='40' cy='120' r='4' fill='#ef4444'/><circle cx='200' cy='120' r='4' fill='#ef4444'/><circle cx='200' cy='40' r='4' fill='#ef4444'/><circle cx='40' cy='40' r='4' fill='#ef4444'/><text x='25' y='130' font-size='12'>A</text><text x='210' y='130' font-size='12'>B</text><text x='210' y='35' font-size='12'>C</text><text x='25' y='35' font-size='12'>D</text></svg></div>",
        options: ["א. 10 | ב. 48", "א. 100 | ב. 48", "א. 14 | ב. 64", "א. 10 | ב. 24"],
        correctAnswer: 0,
        hint: "מאחר והמלבן מקביל לצירים, מצאו את אורכי הצלעות כהפרשים פשוטים (רוחב וגובה). האלכסון מחושב בפיתגורס, והשטח הוא מכפלת הצלעות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת רוחב המלבן (הפרש ערכי האיקס).", math_expression: "d_{AB} = 10 - 2 = 8" },
            { verbal_explanation: "שלב 2: מציאת גובה המלבן (הפרש ערכי הוואי).", math_expression: "d_{BC} = 8 - 2 = 6" },
            { verbal_explanation: "שלב 3: מציאת אורך האלכסון באמצעות נוסחת המרחק.", math_expression: "d_{AC} = \\sqrt{8^{2} + 6^{2}}" },
            { verbal_explanation: "שלב 4: תוצאת האלכסון המהווה שלשה פיתגורית מוכרת.", math_expression: "d_{AC} = \\sqrt{100} = 10" },
            { verbal_explanation: "שלב 5: חישוב השטח על ידי מכפלת רוחב בגובה.", math_expression: "S = 8 \\times 6 = 48" }
        ],
        final_answer: "א. 10 | ב. 48"
    },

    // שאלה מספר 5
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "נקודה P מונחת על ציר ה-y (כלומר ערך ה-x שלה הוא 0). ידוע כי מרחקה מהנקודה A(-3, 2) שווה למרחקה מהנקודה B(5, 4). מצאו את שיעור ה-y של הנקודה P.&rlm;",
        options: ["7", "6", "8", "3"],
        correctAnswer: 0,
        hint: "בנו משוואה שמשווה את שני המרחקים. העלו את שני האגפים בריבוע, פתחו סוגריים ובודדו את הנעלם y.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית שוויון המרחקים באמצעות הנוסחה.", math_expression: "\\sqrt{(-3 - 0)^{2} + (2 - y)^{2}} = \\sqrt{(5 - 0)^{2} + (4 - y)^{2}}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של שני האגפים לביטול השורש.", math_expression: "9 + (2 - y)^{2} = 25 + (4 - y)^{2}" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים בכל אגף (כפל מקוצר).", math_expression: "9 + 4 - 4y + y^{2} = 25 + 16 - 8y + y^{2}" },
            { verbal_explanation: "שלב 4: צמצום איבר הוואי בריבוע משני הצדדים וכינוס איברים.", math_expression: "13 - 4y = 41 - 8y" },
            { verbal_explanation: "שלב 5: העברת אגפים לבידוד הנעלם.", math_expression: "4y = 28" },
            { verbal_explanation: "שלב 6: פעולת חילוק לקבלת ערך הנקודה המבוקשת.", math_expression: "y = 7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 6
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "אלכסוניו של מעוין מונחים על ציר ה-x ועל ציר ה-y. אורכם של האלכסונים הוא 6 ו-8 בהתאמה. מהו אורך צלע המעוין?&rlm;",
        options: ["5", "10", "7", "25"],
        correctAnswer: 0,
        hint: "האלכסונים במעוין חוצים זה את זה ומאונכים זה לזה. לכן, הם יוצרים 4 משולשים ישרי זווית עם ניצבים באורך של חצי מהאלכסונים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך חצי האלכסון הראשון (הניצב הראשון).", math_expression: "a = 6 : 2 = 3" },
            { verbal_explanation: "שלב 2: חישוב אורך חצי האלכסון השני (הניצב השני).", math_expression: "b = 8 : 2 = 4" },
            { verbal_explanation: "שלב 3: שימוש במשפט פיתגורס למציאת יתר המשולש, שהוא למעשה צלע המעוין.", math_expression: "d = \\sqrt{3^{2} + 4^{2}}" },
            { verbal_explanation: "שלב 4: תוצאת השורש.", math_expression: "d = \\sqrt{25}" },
            { verbal_explanation: "שלב 5: אורך הצלע הסופי.", math_expression: "d = 5" }
        ],
        final_answer: "5"
    },

    // שאלה מספר 7
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "נתונות שתי נקודות: A(x, 5) ו- B(2, -3). ידוע כי המרחק בין הנקודות הוא 10. מצאו את שני הערכים האפשריים עבור שיעור ה-x של נקודה A.&rlm;",
        options: ["8, -4", "10, -2", "6, -2", "8, 4"],
        correctAnswer: 0,
        hint: "הציבו את המרחק והנקודות בנוסחת המרחק. העלו את שני האגפים בריבוע, ופתרו את המשוואה הריבועית שמתקבלת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת המרחק והשוואתה לנתון.", math_expression: "10 = \\sqrt{(2 - x)^{2} + (-3 - 5)^{2}}" },
            { verbal_explanation: "שלב 2: העלאת שני האגפים בריבוע ופישוט איבר הוואי.", math_expression: "100 = (2 - x)^{2} + (-8)^{2}" },
            { verbal_explanation: "שלב 3: חילוץ הביטוי הריבועי על ידי העברת אגף.", math_expression: "(2 - x)^{2} = 100 - 64 = 36" },
            { verbal_explanation: "שלב 4: הוצאת שורש מובילה לשתי משוואות ליניאריות.", math_expression: "2 - x = 6 \\quad , \\quad 2 - x = -6" },
            { verbal_explanation: "שלב 5: פתרון המשוואה הראשונה.", math_expression: "x = -4" },
            { verbal_explanation: "שלב 6: פתרון המשוואה השנייה.", math_expression: "x = 8" }
        ],
        final_answer: "8, -4"
    },

    // שאלה מספר 8 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "נתון משולש שקודקודיו: A(-2, -2), B(4, -2), C(1, 6).&rlm;<br>א. חשבו את אורך הבסיס AB.&rlm;<br>ב. חשבו את אורך הגובה היורד אל הבסיס AB.&rlm;<br>ג. מהו שטח המשולש?&rlm;",
        options: ["א. 6 | ב. 8 | ג. 24", "א. 6 | ב. 6 | ג. 18", "א. 8 | ב. 6 | ג. 24", "א. 6 | ב. 4 | ג. 12"],
        correctAnswer: 0,
        hint: "הבסיס אופקי ולכן אורכו הוא הפרש שיעורי ה-x. הגובה לבסיס אופקי נמדד מהקודקוד C, כהפרש בין שיעור ה-y שלו לשיעור ה-y של הבסיס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצלע אופקית, אורכה מתקבל מחיסור ישיר של שיעורי האיקס.", math_expression: "d_{1} = 4 - (-2) = 6" },
            { verbal_explanation: "שלב 2: הגובה מונח על ישר אנכי. מחושב כהפרש בין גובה הקודקוד העליון לגובה הבסיס.", math_expression: "h = 6 - (-2) = 8" },
            { verbal_explanation: "שלב 3: כתיבת נוסחת שטח משולש יסודית.", math_expression: "S = \\dfrac{6 \\times 8}{2}" },
            { verbal_explanation: "שלב 4: ביצוע המכפלה והחלוקה לקבלת שטח המשולש.", math_expression: "S = 24" },
            { verbal_explanation: "שלב 5: התשובה המסכמת.", math_expression: "6 \\quad , \\quad 8 \\quad , \\quad 24" }
        ],
        final_answer: "א. 6 | ב. 8 | ג. 24"
    },

    // שאלה מספר 9
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "נקודה P מונחת על ציר ה-x (כלומר ערך ה-y שלה הוא 0). מרחקה מהנקודה A(0, 5) שווה למרחקה מהנקודה B(4, 3). מהו שיעור ה-x של הנקודה P?&rlm;",
        options: ["0", "1", "2", "-1"],
        correctAnswer: 0,
        hint: "בדיוק כמו בתרגיל הקודם עם ציר ה-y, בנו משוואת מרחקים עבור המשתנה x ופתרו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית שוויון המרחקים סביב משתנה אחד.", math_expression: "\\sqrt{(0 - x)^{2} + (5 - 0)^{2}} = \\sqrt{(4 - x)^{2} + (3 - 0)^{2}}" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של שני האגפים לביטול השורש.", math_expression: "x^{2} + 25 = (4 - x)^{2} + 9" },
            { verbal_explanation: "שלב 3: פתיחת הסוגריים.", math_expression: "x^{2} + 25 = 16 - 8x + x^{2} + 9" },
            { verbal_explanation: "שלב 4: צמצום איבר האיקס בריבוע משני הצדדים וכינוס איברים.", math_expression: "25 = 25 - 8x" },
            { verbal_explanation: "שלב 5: בידוד המשתנה (מעיד על נקודת האפס).", math_expression: "8x = 0 \\Rightarrow x = 0" }
        ],
        final_answer: "0"
    },

    // שאלה מספר 10 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מרחק בין נקודות",
        question_text: "קצותיו של קוטר במעגל הם הנקודות A(-4, -3) ו- B(4, 3).&rlm;<br>א. חשבו את אורך הקוטר כולו.&rlm;<br>ב. חשבו את אורך הרדיוס.&rlm;",
        options: ["א. 10 | ב. 5", "א. 100 | ב. 10", "א. 14 | ב. 7", "א. 20 | ב. 10"],
        correctAnswer: 0,
        hint: "הקוטר הוא המרחק המלא בין שתי הנקודות. הרדיוס הוא בדיוק חצי מהקוטר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הקצוות בנוסחת המרחק למציאת הקוטר השלם.", math_expression: "d = \\sqrt{(4 - (-4))^{2} + (3 - (-3))^{2}}" },
            { verbal_explanation: "שלב 2: סידור הסימנים בתוך הסוגריים.", math_expression: "d = \\sqrt{8^{2} + 6^{2}}" },
            { verbal_explanation: "שלב 3: חילוץ אורך הקוטר מתוך השורש.", math_expression: "d = \\sqrt{100} = 10" },
            { verbal_explanation: "שלב 4: מציאת הרדיוס על ידי חלוקת הקוטר בשתיים.", math_expression: "R = 10 : 2 = 5" },
            { verbal_explanation: "שלב 5: התשובה הישירה המכילה את שני המדדים.", math_expression: "10 \\quad , \\quad 5" }
        ],
        final_answer: "א. 10 | ב. 5"
    },

    // ==========================================
    // תת נושא 2: אמצע קטע (10 שאלות)
    // ==========================================

    // שאלה מספר 11 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "נתון קטע שקצותיו הם A(2, 4) ו- B(8, 12).&rlm;<br>א. מצאו את נקודת האמצע M של הקטע AB.&rlm;<br>ב. מהו סכום שיעורי הנקודה M?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 100' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='30' y1='80' x2='170' y2='20' stroke='#3b82f6' stroke-width='3'/><circle cx='30' cy='80' r='4' fill='#ef4444'/><circle cx='170' cy='20' r='4' fill='#ef4444'/><circle cx='100' cy='50' r='4' fill='#10b981'/><text x='15' y='95' font-size='12'>A</text><text x='175' y='15' font-size='12'>B</text><text x='95' y='40' font-size='12'>M</text></svg></div>",
        options: ["א. (5, 8) | ב. 13", "א. (6, 8) | ב. 14", "א. (5, 8) | ב. 40", "א. (10, 16) | ב. 26"],
        correctAnswer: 0,
        hint: "שיעורי נקודת האמצע הם הממוצע של שיעורי ה-x והממוצע של שיעורי ה-y.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שיעור האיקס של נקודת האמצע באמצעות ממוצע קצוות.", math_expression: "x = \\dfrac{2 + 8}{2} = \\dfrac{10}{2} = 5" },
            { verbal_explanation: "שלב 2: חישוב שיעור הוואי של נקודת האמצע.", math_expression: "y = \\dfrac{4 + 12}{2} = \\dfrac{16}{2} = 8" },
            { verbal_explanation: "שלב 3: הרכבת קואורדינטות הנקודה.", math_expression: "M(5, 8)" },
            { verbal_explanation: "שלב 4: סכימת הקואורדינטות על פי דרישת הסעיף השני.", math_expression: "S = 5 + 8" },
            { verbal_explanation: "שלב 5: התשובה הסופית לסכום.", math_expression: "S = 13" }
        ],
        final_answer: "א. (5, 8) | ב. 13"
    },

    // שאלה מספר 12 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "הנקודה M(5, 5) היא אמצע הקטע המחבר את הנקודות A(2, 3) ו- B(x, y).&rlm;<br>א. מצאו את שיעור ה-x של נקודה B.&rlm;<br>ב. מצאו את שיעור ה-y של נקודה B.&rlm;",
        options: ["א. 8 | ב. 7", "א. 7 | ב. 8", "א. 3 | ב. 2", "א. 10 | ב. 10"],
        correctAnswer: 0,
        hint: "הציבו את הממוצע הידוע (5,5) בנוסחה, ובנו משוואה לכל ציר בנפרד כדי לחלץ את הנעלמים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואה למציאת נקודת הקצה על ציר האיקס.", math_expression: "5 = \\dfrac{2 + x}{2}" },
            { verbal_explanation: "שלב 2: הכפלה בשתיים ובידוד הנעלם המייצג את איקס.", math_expression: "10 = 2 + x \\Rightarrow x = 8" },
            { verbal_explanation: "שלב 3: בניית משוואה זהה לציר הוואי.", math_expression: "5 = \\dfrac{3 + y}{2}" },
            { verbal_explanation: "שלב 4: מציאת ערך קצה הוואי.", math_expression: "10 = 3 + y \\Rightarrow y = 7" },
            { verbal_explanation: "שלב 5: הרכבת הנקודה הסופית כמתבקש בסעיפים.", math_expression: "B(8, 7)" }
        ],
        final_answer: "א. 8 | ב. 7"
    },

    // שאלה מספר 13
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "במקבילית ABCD נתונים הקודקודים A(1, 2), B(5, 2), ו- C(7, 8). מהם שיעורי הקודקוד הרביעי D?&rlm;",
        options: ["(3, 8)", "(4, 5)", "(8, 3)", "(2, 7)"],
        correctAnswer: 0,
        hint: "במקבילית, האלכסונים חוצים זה את זה. לכן, נקודת האמצע של AC שווה לנקודת האמצע של BD.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נקודת מפגש האלכסונים כאמצע הצלע AC המלאה.", math_expression: "M = (\\dfrac{1 + 7}{2}, \\dfrac{2 + 8}{2}) = (4, 5)" },
            { verbal_explanation: "שלב 2: בניית משוואה למציאת הקודקוד D על ציר איקס דרך האמצע M.", math_expression: "4 = \\dfrac{5 + x}{2}" },
            { verbal_explanation: "שלב 3: חילוץ האיקס של קודקוד הקצה.", math_expression: "8 = 5 + x \\Rightarrow x = 3" },
            { verbal_explanation: "שלב 4: בניית משוואה למציאת הקודקוד על ציר וואי.", math_expression: "5 = \\dfrac{2 + y}{2}" },
            { verbal_explanation: "שלב 5: חילוץ הוואי של קודקוד הקצה.", math_expression: "10 = 2 + y \\Rightarrow y = 8" },
            { verbal_explanation: "שלב 6: הרכבת הקודקוד השלם.", math_expression: "D(3, 8)" }
        ],
        final_answer: "(3, 8)"
    },

    // שאלה מספר 14 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "נתון משולש ישר זווית שקודקודיו A(0, 8), B(0, 0), C(6, 0). תיכון ליתר יוצא מהקודקוד B אל הנקודה M שעל היתר AC.&rlm;<br>א. מצאו את שיעורי הנקודה M.&rlm;<br>ב. חשבו את אורך התיכון BM.&rlm;",
        options: ["א. (3, 4) | ב. 5", "א. (4, 3) | ב. 5", "א. (3, 4) | ב. 10", "א. (3, 3) | ב. 5"],
        correctAnswer: 0,
        hint: "התיכון חותך את היתר באמצעו. אורך התיכון ליתר במשולש ישר זווית שווה למחצית היתר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אמצע היתר המהווה את קצה התיכון.", math_expression: "M = (\\dfrac{0 + 6}{2}, \\dfrac{8 + 0}{2}) = (3, 4)" },
            { verbal_explanation: "שלב 2: הצבת שיעורי הנקודה שנמצאה וקודקוד המקור בנוסחת המרחק.", math_expression: "d = \\sqrt{(3 - 0)^{2} + (4 - 0)^{2}}" },
            { verbal_explanation: "שלב 3: ביצוע חזקות וסכימה מתחת לשורש.", math_expression: "d = \\sqrt{9 + 16} = \\sqrt{25}" },
            { verbal_explanation: "שלב 4: מציאת אורך התיכון, שמהווה רדיוס במעגל החוסם.", math_expression: "d = 5" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "1" }
        ],
        final_answer: "א. (3, 4) | ב. 5"
    },

    // שאלה מספר 15
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "קצותיו של קוטר במעגל הם הנקודות A(-6, 2) ו- B(6, -2). מהם שיעורי מרכז המעגל?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='100' x2='180' y2='100' stroke='#64748b' stroke-width='2'/><circle cx='100' cy='100' r='60' fill='none' stroke='#8b5cf6' stroke-width='2'/><line x1='40' y1='80' x2='160' y2='120' stroke='#334155' stroke-dasharray='4,4' stroke-width='2'/><circle cx='40' cy='80' r='4' fill='#ef4444'/><circle cx='160' cy='120' r='4' fill='#ef4444'/><circle cx='100' cy='100' r='4' fill='#10b981'/></svg></div>",
        options: ["(0, 0)", "(6, 2)", "(-6, -2)", "(12, 4)"],
        correctAnswer: 0,
        hint: "מרכז המעגל ממוקם בדיוק באמצע הקוטר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מרכז מעגל הוא ממוצע קצוות הקוטר. חישוב ציר איקס.", math_expression: "x = \\dfrac{-6 + 6}{2} = 0" },
            { verbal_explanation: "שלב 2: חישוב ציר הוואי.", math_expression: "y = \\dfrac{2 + (-2)}{2} = 0" },
            { verbal_explanation: "שלב 3: מרכז המעגל חופף לראשית הצירים במקרה זה.", math_expression: "(0, 0)" }
        ],
        final_answer: "(0, 0)"
    },

    // שאלה מספר 16 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "נתון קטע שקצותיו הם A(0, 0) ו- B(12, 16). מחלקים את הקטע ל-4 חלקים שווים באמצעות 3 נקודות.&rlm;<br>א. מצאו את הנקודה האמצעית מבין השלוש (אמצע הקטע AB כולו).&rlm;<br>ב. מצאו את הנקודה הראשונה (הקרובה ביותר ל-A).&rlm;",
        options: ["א. (6, 8) | ב. (3, 4)", "א. (6, 8) | ב. (2, 4)", "א. (4, 3) | ב. (6, 8)", "א. (12, 16) | ב. (3, 4)"],
        correctAnswer: 0,
        hint: "הנקודה האמצעית היא בדיוק חצי הקטע. הנקודה הקרובה ל-A היא האמצע של האמצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת האמצע הראשי של הקטע הגדול.", math_expression: "M = (\\dfrac{0 + 12}{2}, \\dfrac{0 + 16}{2}) = (6, 8)" },
            { verbal_explanation: "שלב 2: החלק הראשון (רבע קטע) מסתיים בדיוק באמצע שבין קצה האפס לאמצע הראשי.", math_expression: "x = \\dfrac{0 + 6}{2} = 3" },
            { verbal_explanation: "שלב 3: מציאת שיעור הוואי של הנקודה.", math_expression: "y = \\dfrac{0 + 8}{2} = 4" },
            { verbal_explanation: "שלב 4: הרכבת הנקודה המייצגת את הרבע הראשון של הקטע.", math_expression: "(3, 4)" }
        ],
        final_answer: "א. (6, 8) | ב. (3, 4)"
    },

    // שאלה מספר 17
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "נקודת האמצע של קטע היא (x, y). קצות הקטע הם (x+2, y-4) ו- (a, b). בטאו את a ו- b באמצעות x ו- y.&rlm;",
        options: ["a = x - 2 , b = y + 4", "a = x + 2 , b = y - 4", "a = 2x , b = 2y", "a = x , b = y"],
        correctAnswer: 0,
        hint: "הציבו את הביטויים בנוסחת אמצע קטע, בודדו את a במשוואת ה-x ואת b במשוואת ה-y.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת האמצע האופקית עם משתנים אלגבריים.", math_expression: "x = \\dfrac{x + 2 + a}{2}" },
            { verbal_explanation: "שלב 2: הכפלת אגפים והעברת משתנים לבידוד פרמטר חסר.", math_expression: "2x = x + 2 + a \\Rightarrow a = x - 2" },
            { verbal_explanation: "שלב 3: בניית משוואת האמצע האנכית.", math_expression: "y = \\dfrac{y - 4 + b}{2}" },
            { verbal_explanation: "שלב 4: חילוץ הפרמטר החסר האחרון.", math_expression: "2y = y - 4 + b \\Rightarrow b = y + 4" },
            { verbal_explanation: "שלב 5: התשובה הישירה במלואה.", math_expression: "a = x - 2 \\quad , \\quad b = y + 4" }
        ],
        final_answer: "a = x - 2 , b = y + 4"
    },

    // שאלה מספר 18 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "הנקודה M(-5, 0) היא אמצע הקטע AB. הנקודה A נמצאת על ציר ה-y, והנקודה B נמצאת על ציר ה-x.&rlm;<br>א. מצאו את שיעורי הנקודה A.&rlm;<br>ב. מצאו את שיעורי הנקודה B.&rlm;",
        options: ["א. (0, 0) | ב. (-10, 0)", "א. (0, -10) | ב. (-5, 0)", "א. (-10, 0) | ב. (0, 0)", "א. (0, 5) | ב. (-10, 0)"],
        correctAnswer: 0,
        hint: "נקודה על ציר y היא מהצורה (0, y). נקודה על ציר x היא מהצורה (x, 0). הציבו זאת בנוסחת הממוצע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת תבניות הנקודות על הצירים.", math_expression: "A(0, y) \\quad , \\quad B(x, 0)" },
            { verbal_explanation: "שלב 2: בניית משוואת איקס לאמצע הקטע למציאת נקודה אופקית.", math_expression: "-5 = \\dfrac{0 + x}{2} \\Rightarrow x = -10" },
            { verbal_explanation: "שלב 3: נקודה בי הושגה.", math_expression: "B(-10, 0)" },
            { verbal_explanation: "שלב 4: בניית משוואת וואי למציאת נקודה אנכית.", math_expression: "0 = \\dfrac{y + 0}{2} \\Rightarrow y = 0" },
            { verbal_explanation: "שלב 5: נקודה איי הושגה והיא מתלכדת עם הראשית.", math_expression: "A(0, 0)" },
            { verbal_explanation: "שלב 6: הרכבת התשובה השלמה.", math_expression: "A(0, 0) \\quad , \\quad B(-10, 0)" }
        ],
        final_answer: "א. (0, 0) | ב. (-10, 0)"
    },

    // שאלה מספר 19
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "נקודת האמצע של קטע מונחת בדיוק על ציר ה-y (כלומר ה-x שלה הוא 0). קצה אחד הוא ב-(5, 8). מה חייב להיות שיעור ה-x של הקצה השני?&rlm;",
        options: ["-5", "0", "5", "-8"],
        correctAnswer: 0,
        hint: "על מנת שהממוצע בין שני מספרים יהיה אפס, המספרים חייבים להיות נגדיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים במשוואת ממוצע אופקית.", math_expression: "0 = \\dfrac{5 + x}{2}" },
            { verbal_explanation: "שלב 2: כפל בשתיים משמר את האפס.", math_expression: "0 = 5 + x" },
            { verbal_explanation: "שלב 3: בידוד משתנה.", math_expression: "x = -5" },
            { verbal_explanation: "שלב 4: זהו הערך הנדרש להשלמת האיזון מול ראשית הצירים באופק.", math_expression: "-5" }
        ],
        final_answer: "-5"
    },

    // שאלה מספר 20 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "אמצע קטע",
        question_text: "במשולש נתונים הקודקודים: A(2, 6), B(8, 2), C(10, 8). מעבירים תיכון מהקודקוד C לצלע AB (חותך בנקודה M).&rlm;<br>א. מצאו את נקודת המפגש M.&rlm;<br>ב. מצאו את משוואת הישר של התיכון CM.&rlm;",
        options: ["א. (5, 4) | ב. y = 0.8x", "א. (5, 4) | ב. y = x - 1", "א. (4, 5) | ב. y = 0.8x", "א. (6, 5) | ב. y = 1.25x"],
        correctAnswer: 0,
        hint: "התיכון פוגע באמצע הצלע AB. לאחר שמצאתם את M, עליכם למצוא את משוואת הישר שעובר דרך C ו-M (חשבו שיפוע ואז בנו משוואה).",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אמצע הצלע הנחצית על ידי התיכון.", math_expression: "M = (\\dfrac{2 + 8}{2}, \\dfrac{6 + 2}{2}) = (5, 4)" },
            { verbal_explanation: "שלב 2: חישוב שיפוע התיכון המחבר את קודקוד המשולש לאמצע הצלע.", math_expression: "m = \\dfrac{8 - 4}{10 - 5} = \\dfrac{4}{5} = 0.8" },
            { verbal_explanation: "שלב 3: כתיבת משוואת ישר באמצעות נקודה אחת והשיפוע.", math_expression: "y - 4 = 0.8 \\times (x - 5)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים.", math_expression: "y - 4 = 0.8x - 4" },
            { verbal_explanation: "שלב 5: צמצום המשוואה לקבלת הישר הסופי המבוקש.", math_expression: "y = 0.8x" }
        ],
        final_answer: "א. (5, 4) | ב. y = 0.8x"
    },

    // ==========================================
    // תת נושא 3: ישרים מקבילים וניצבים (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "מצאו משוואת ישר המקביל לישר \\( y = 3x - 7 \\) ועובר דרך הנקודה (2, 10).&rlm;",
        options: ["y = 3x + 4", "y = -3x + 16", "y = 3x - 10", "y = x + 8"],
        correctAnswer: 0,
        hint: "ישרים מקבילים הם בעלי שיפועים שווים. השתמשו בשיפוע הנתון ובנקודה במשוואת הישר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ שיפוע הישר המקורי מהמשוואה.", math_expression: "m = 3" },
            { verbal_explanation: "שלב 2: בניית ישר מקביל בעל אותו שיפוע שעובר בנקודה שניתנה.", math_expression: "y - 10 = 3(x - 2)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים לסידור המשוואה.", math_expression: "y - 10 = 3x - 6" },
            { verbal_explanation: "שלב 4: העברת אגף לקבלת המשוואה המפורשת הסופית.", math_expression: "y = 3x + 4" }
        ],
        final_answer: "y = 3x + 4"
    },

    // שאלה מספר 22
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "מצאו את משוואת הישר הניצב (מאונך) לישר \\( y = 2x + 4 \\) ועובר דרך הנקודה (4, 1).&rlm;",
        options: ["y = -0.5x + 3", "y = -2x + 9", "y = 0.5x - 1", "y = 2x - 7"],
        correctAnswer: 0,
        hint: "לישרים ניצבים יש שיפועים הופכיים ונגדיים, כלומר מכפלתם היא 1-. מצאו את השיפוע הניצב ובנו משוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת שיפוע הישר המקורי שניתן.", math_expression: "m_{1} = 2" },
            { verbal_explanation: "שלב 2: שימוש בתנאי הניצבות לחילוץ השיפוע המאונך.", math_expression: "m_{2} = \\dfrac{-1}{2} = -0.5" },
            { verbal_explanation: "שלב 3: בניית המשוואה לישר החדש.", math_expression: "y - 1 = -0.5(x - 4)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וכפל סימנים.", math_expression: "y - 1 = -0.5x + 2" },
            { verbal_explanation: "שלב 5: סידור המשוואה לבסוף.", math_expression: "y = -0.5x + 3" }
        ],
        final_answer: "y = -0.5x + 3"
    },

    // שאלה מספר 23 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "במשולש קודקודים: A(1, 1), B(4, 2), C(0, 4).&rlm;<br>א. חשבו את שיפוע הצלע AB.&rlm;<br>ב. חשבו את שיפוע הצלע AC.&rlm;<br>ג. האם המשולש ישר זווית?&rlm;",
        options: ["א. 1/3 | ב. -3 | ג. כן", "א. 3 | ב. -1/3 | ג. כן", "א. 1/3 | ב. 3 | ג. לא", "א. -1/3 | ב. 3 | ג. כן"],
        correctAnswer: 0,
        hint: "חשבו את השיפועים בעזרת נוסחת הפרש ה-y חלקי הפרש ה-x. אם מכפלתם היא 1-, הזווית ביניהם היא 90 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת שיפוע צלע ראשונה בסיסית.", math_expression: "m_{AB} = \\dfrac{2 - 1}{4 - 1} = \\dfrac{1}{3}" },
            { verbal_explanation: "שלב 2: מציאת שיפוע צלע שנייה בסיסית.", math_expression: "m_{AC} = \\dfrac{4 - 1}{0 - 1} = \\dfrac{3}{-1} = -3" },
            { verbal_explanation: "שלב 3: בדיקת תנאי ניצבות למשולש ישר זווית (מכפלת שיפועים).", math_expression: "m_{AB} \\times m_{AC} = \\dfrac{1}{3} \\times (-3)" },
            { verbal_explanation: "שלב 4: תוצאת המכפלה היא מינוס אחת ולכן הזווית ישרה במדויק.", math_expression: "-1 \\Rightarrow Yes" }
        ],
        final_answer: "א. 1/3 | ב. -3 | ג. כן"
    },

    // שאלה מספר 24 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "נתון ריבוע ABCD. שניים מקודקודיו הסמוכים הם A(2, 3) ו- B(5, 7).&rlm;<br>א. חשבו את שיפוע הצלע AB.&rlm;<br>ב. מה חייב להיות שיפוע הצלע AD (שמאונכת לה)?&rlm;",
        options: ["א. 4/3 | ב. -3/4", "א. 3/4 | ב. -4/3", "א. 4/3 | ב. 4/3", "א. -4/3 | ב. 3/4"],
        correctAnswer: 0,
        hint: "בריבוע כל הזוויות ישרות, ולכן כל שתי צלעות סמוכות מאונכות זו לזו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב השיפוע הראשוני לפי נוסחת הפרש קואורדינטות.", math_expression: "m_{AB} = \\dfrac{7 - 3}{5 - 2} = \\dfrac{4}{3}" },
            { verbal_explanation: "שלב 2: שימוש בתכונת הניצבות המאפיינת פינות ריבוע.", math_expression: "m_{AB} \\times m_{AD} = -1" },
            { verbal_explanation: "שלב 3: הצבה של השיפוע שחושב.", math_expression: "\\dfrac{4}{3} \\times m_{AD} = -1" },
            { verbal_explanation: "שלב 4: בידוד השיפוע המאונך על ידי הופכי נגדי.", math_expression: "m_{AD} = \\dfrac{-3}{4} = -0.75" }
        ],
        final_answer: "א. 4/3 | ב. -3/4"
    },

    // שאלה מספר 25
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "הישר שמשוואתו \\( 2y - 6x = 10 \\) מקביל לישר \\( y = mx + 4 \\). מהו הערך של m?&rlm;",
        options: ["3", "6", "-3", "-6"],
        correctAnswer: 0,
        hint: "ראשית, סדרו את המשוואה הראשונה לצורה המפורשת של y שווה משהו (חלקו הכל ב-2). לאחר מכן, מצאו את השיפוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העברת איבר האיקס אגף כדי לבודד את הוואי.", math_expression: "2y = 6x + 10" },
            { verbal_explanation: "שלב 2: חלוקת כל המשוואה בשתיים כדי להגיע לצורה מפורשת ותקנית.", math_expression: "y = 3x + 5" },
            { verbal_explanation: "שלב 3: זיהוי שיפוע הישר המפורש.", math_expression: "m = 3" },
            { verbal_explanation: "שלב 4: יישום תנאי הקבלה הקובע שהשיפועים שווים.", math_expression: "m_{2} = 3" },
            { verbal_explanation: "שלב 5: התשובה הישירה במערכת.", math_expression: "3" }
        ],
        final_answer: "3"
    },

    // שאלה מספר 26
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "הישר \\( y = k \\times x + 8 \\) ניצב לישר ששיפועו הוא 0.2. מה הערך של k?&rlm;",
        options: ["-5", "5", "-0.2", "0.2"],
        correctAnswer: 0,
        hint: "הכפלת שני השיפועים חייבת להיות שווה ל-1-. הפכו את 0.2 לשבר (1/5) כדי למצוא את ההופכי בקלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת התנאי לניצבות אלגברית.", math_expression: "m_{1} \\times m_{2} = -1" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה.", math_expression: "k \\times 0.2 = -1" },
            { verbal_explanation: "שלב 3: המרת עשרוני לשבר מקלה על הפתרון.", math_expression: "k \\times \\dfrac{1}{5} = -1" },
            { verbal_explanation: "שלב 4: הכפלה בחמש משני הצדדים.", math_expression: "k = -5" },
            { verbal_explanation: "שלב 5: התשובה.", math_expression: "-5" }
        ],
        final_answer: "-5"
    },

    // שאלה מספר 27 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "במשולש קודקודים ב- A(1, 2), B(5, 4), C(3, 8). גובה יורד מקודקוד C אל הבסיס AB.&rlm;<br>א. מצאו את שיפוע הבסיס AB.&rlm;<br>ב. מצאו את שיפוע הגובה לצלע AB.&rlm;<br>ג. מהי משוואת הגובה הזה?&rlm;",
        options: ["א. 0.5 | ב. -2 | ג. y = -2x + 14", "א. 2 | ב. -0.5 | ג. y = -0.5x + 9.5", "א. 0.5 | ב. -2 | ג. y = -2x + 8", "א. -2 | ב. 0.5 | ג. y = 0.5x + 6.5"],
        correctAnswer: 0,
        hint: "הגובה תמיד מאונך לבסיס שלו. מצאו את שיפוע הבסיס, הפכו ונגדו אותו כדי לקבל את שיפוע הגובה, ובנו משוואה דרך הקודקוד C.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת שיפוע בסיס המשולש.", math_expression: "m_{AB} = \\dfrac{4 - 2}{5 - 1} = \\dfrac{2}{4} = 0.5" },
            { verbal_explanation: "שלב 2: הגובה מאונך לבסיס, ולכן נחשב לו שיפוע הופכי ונגדי.", math_expression: "m_{h} = \\dfrac{-1}{0.5} = -2" },
            { verbal_explanation: "שלב 3: כתיבת משוואת ישר לגובה, שעובר דרך נקודת הקודקוד ממנו הוא ירד.", math_expression: "y - 8 = -2(x - 3)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וסידור משוואת הגובה.", math_expression: "y - 8 = -2x + 6 \\Rightarrow y = -2x + 14" },
            { verbal_explanation: "שלב 5: בחירת סט התשובות הנכון.", math_expression: "1" }
        ],
        final_answer: "א. 0.5 | ב. -2 | ג. y = -2x + 14"
    },

    // שאלה מספר 28 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "בדלתון ABCD, האלכסון הראשי הוא על הישר \\( y = 2x + 1 \\).&rlm;<br>א. מה חייב להיות שיפוע האלכסון המשני (שמאונך לו)?&rlm;<br>ב. אם האלכסון המשני עובר דרך הנקודה (4, 3), מהי משוואתו?&rlm;",
        options: ["א. -0.5 | ב. y = -0.5x + 5", "א. -2 | ב. y = -2x + 11", "א. 0.5 | ב. y = 0.5x + 1", "א. -0.5 | ב. y = -0.5x + 3"],
        correctAnswer: 0,
        hint: "בכל דלתון האלכסונים מאונכים זה לזה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שיפוע הישר הראשון מהמשוואה.", math_expression: "m_{1} = 2" },
            { verbal_explanation: "שלב 2: חישוב שיפוע אנכי על ידי היפוך ושלילה.", math_expression: "m_{2} = \\dfrac{-1}{2} = -0.5" },
            { verbal_explanation: "שלב 3: בניית המשוואה לישר השני שעובר בנקודה הנתונה.", math_expression: "y - 3 = -0.5(x - 4)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים, שימו לב לכפל מינוסים.", math_expression: "y - 3 = -0.5x + 2" },
            { verbal_explanation: "שלב 5: העברת אגף לסיום המשוואה.", math_expression: "y = -0.5x + 5" }
        ],
        final_answer: "א. -0.5 | ב. y = -0.5x + 5"
    },

    // שאלה מספר 29 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "נתון הקטע שקצותיו הם A(2, 2) ו- B(6, 6). האנך האמצעי חוצה קטע זה במדויק ומאונך לו.&rlm;<br>א. מהי נקודת האמצע של הקטע?&rlm;<br>ב. מהו שיפוע הישר עליו מונח הקטע AB?&rlm;<br>ג. מהי משוואת האנך האמצעי?&rlm;",
        options: ["א. (4, 4) | ב. 1 | ג. y = -x + 8", "א. (4, 4) | ב. -1 | ג. y = x", "א. (8, 8) | ב. 1 | ג. y = -x + 16", "א. (4, 4) | ב. 1 | ג. y = x + 8"],
        correctAnswer: 0,
        hint: "מצאו את אמצע הקטע, את שיפוע הקטע, ולאחר מכן בנו משוואה עם השיפוע ההופכי-נגדי שעוברת באמצע שמצאתם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת אמצע הקטע על ידי ממוצע.", math_expression: "M = (\\dfrac{2 + 6}{2}, \\dfrac{2 + 6}{2}) = (4, 4)" },
            { verbal_explanation: "שלב 2: חישוב שיפוע הקטע עצמו.", math_expression: "m_{AB} = \\dfrac{6 - 2}{6 - 2} = \\dfrac{4}{4} = 1" },
            { verbal_explanation: "שלב 3: מציאת שיפוע האנך על ידי הופכי נגדי.", math_expression: "m_{perp} = \\dfrac{-1}{1} = -1" },
            { verbal_explanation: "שלב 4: בניית משוואת האנך האמצעי דרך נקודת האמצע.", math_expression: "y - 4 = -1(x - 4)" },
            { verbal_explanation: "שלב 5: פישוט למשוואה סופית.", math_expression: "y - 4 = -x + 4 \\Rightarrow y = -x + 8" }
        ],
        final_answer: "א. (4, 4) | ב. 1 | ג. y = -x + 8"
    },

    // שאלה מספר 30
    {
        topic: "analytic_geometry_372",
        subTopic: "ישרים מקבילים וניצבים",
        question_text: "הישר \\( y = (k - 2)x + 5 \\) מקביל לישר \\( y = 6x - 1 \\). מהו הערך של הפרמטר k?&rlm;",
        options: ["8", "6", "4", "2"],
        correctAnswer: 0,
        hint: "ישרים מקבילים דורשים שיפועים שווים. השוו את המקדם של x מול המספר 6.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת תנאי ההקבלה הליניארי (שוויון שיפועים מלא).", math_expression: "m_{1} = m_{2}" },
            { verbal_explanation: "שלב 2: הצבת השיפועים מהמשוואות הנתונות.", math_expression: "k - 2 = 6" },
            { verbal_explanation: "שלב 3: בידוד הפרמטר להשגת השוויון.", math_expression: "k = 6 + 2 = 8" },
            { verbal_explanation: "שלב 4: התשובה הישירה.", math_expression: "8" }
        ],
        final_answer: "8"
    },
    // ==========================================
    // תת נושא 4: מציאת משוואת ישר (10 שאלות)
    // ==========================================

    // שאלה מספר 1 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "במערכת צירים נתונות הנקודות A(1, 2) ו- B(4, 11).&rlm;<br>א. חשבו את שיפוע הישר העובר דרך שתי הנקודות.&rlm;<br>ב. מצאו את משוואת הישר.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><line x1='20' y1='180' x2='180' y2='180' stroke='#64748b' stroke-width='2'/><line x1='20' y1='20' x2='20' y2='180' stroke='#64748b' stroke-width='2'/><line x1='30' y1='160' x2='130' y2='20' stroke='#3b82f6' stroke-width='2'/><circle cx='60' cy='118' r='4' fill='#ef4444'/><circle cx='110' cy='48' r='4' fill='#ef4444'/><text x='70' y='125' font-size='12'>A</text><text x='120' y='55' font-size='12'>B</text></svg></div>",
        options: ["א. 3 | ב. y = 3x - 1", "א. 3 | ב. y = 3x + 1", "א. -3 | ב. y = -3x + 5", "א. 1/3 | ב. y = x : 3 + 5"],
        correctAnswer: 0,
        hint: "חשבו את השיפוע לפי הפרש y חלקי הפרש x. לאחר מכן, הציבו את השיפוע ואת אחת הנקודות בנוסחת משוואת הישר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנקודות בנוסחת השיפוע.", math_expression: "m = \\dfrac{11 - 2}{4 - 1}" },
            { verbal_explanation: "שלב 2: ביצוע החיסור במונה ובמכנה.", math_expression: "m = \\dfrac{9}{3}" },
            { verbal_explanation: "שלב 3: מציאת השיפוע המדויק (תשובה לא').", math_expression: "m = 3" },
            { verbal_explanation: "שלב 4: הצבת השיפוע ונקודה A בנוסחת משוואת הישר.", math_expression: "y - 2 = 3(x - 1)" },
            { verbal_explanation: "שלב 5: פתיחת סוגריים ופישוט.", math_expression: "y - 2 = 3x - 3" },
            { verbal_explanation: "שלב 6: העברת אגף לקבלת המשוואה המפורשת (תשובה לב').", math_expression: "y = 3x - 1" }
        ],
        final_answer: "א. 3 | ב. y = 3x - 1"
    },

    // שאלה מספר 2 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "משולש שקודקודיו הם A(0, 4), B(3, 0), C(7, 0). מעבירים תיכון מקודקוד A לצלע BC (החותך אותה בנקודה M).&rlm;<br>א. מצאו את שיעורי הנקודה M.&rlm;<br>ב. מצאו את משוואת התיכון AM.&rlm;",
        options: ["א. (5, 0) | ב. y = -0.8x + 4", "א. (4, 0) | ב. y = -x + 4", "א. (5, 0) | ב. y = 0.8x + 4", "א. (5, 2) | ב. y = -0.4x + 4"],
        correctAnswer: 0,
        hint: "התיכון חוצה את הצלע הנגדית. מצאו את האמצע M של BC. לאחר מכן בנו משוואת ישר בין A ל-M.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אמצע הקטע האופקי BC למציאת שיעור האיקס של M.", math_expression: "x_{M} = \\dfrac{3 + 7}{2} = 5" },
            { verbal_explanation: "שלב 2: שתי הנקודות על הציר, ולכן שיעור הוואי של האמצע הוא אפס (תשובה לא').", math_expression: "y_{M} = 0" },
            { verbal_explanation: "שלב 3: חישוב שיפוע התיכון המחבר את הנקודות A ו-M.", math_expression: "m = \\dfrac{4 - 0}{0 - 5} = \\dfrac{4}{-5} = -0.8" },
            { verbal_explanation: "שלב 4: בניית משוואת הישר בעזרת השיפוע ונקודה M.", math_expression: "y - 0 = -0.8(x - 5)" },
            { verbal_explanation: "שלב 5: פתיחת סוגריים וסידור משוואת התיכון (תשובה לב').", math_expression: "y = -0.8x + 4" }
        ],
        final_answer: "א. (5, 0) | ב. y = -0.8x + 4"
    },

    // שאלה מספר 3 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "נתון הישר \\( y = 4x - 7 \\). ישר אחר מקביל לו ועובר דרך הנקודה (2, 10).&rlm;<br>א. מהו שיפוע הישר האחר?&rlm;<br>ב. מהי משוואת הישר האחר?&rlm;",
        options: ["א. 4 | ב. y = 4x + 2", "א. -0.25 | ב. y = -0.25x + 10.5", "א. 4 | ב. y = 4x + 10", "א. 4 | ב. y = 4x - 2"],
        correctAnswer: 0,
        hint: "לישרים מקבילים יש את אותו שיפוע בדיוק. קחו את השיפוע של הישר הראשון והציבו יחד עם הנקודה בנוסחה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שיפוע הישר המקורי מהמשוואה.", math_expression: "m_{1} = 4" },
            { verbal_explanation: "שלב 2: קביעת שיפוע הישר החדש עקב תנאי ההקבלה (תשובה לא').", math_expression: "m_{2} = 4" },
            { verbal_explanation: "שלב 3: בניית המשוואה לישר המקביל שעובר בנקודה הנתונה.", math_expression: "y - 10 = 4(x - 2)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים.", math_expression: "y - 10 = 4x - 8" },
            { verbal_explanation: "שלב 5: העברת אגף לסידור סופי של המשוואה (תשובה לב').", math_expression: "y = 4x + 2" }
        ],
        final_answer: "א. 4 | ב. y = 4x + 2"
    },

    // שאלה מספר 4 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "נתון הישר \\( y = 0.5x + 3 \\). ישר אחר מאונך לו ועובר דרך הנקודה (4, 1).&rlm;<br>א. מהו שיפוע הישר המאונך?&rlm;<br>ב. מהי משוואת הישר המאונך?&rlm;",
        options: ["א. -2 | ב. y = -2x + 9", "א. 2 | ב. y = 2x - 7", "א. -0.5 | ב. y = -0.5x + 3", "א. -2 | ב. y = -2x + 1"],
        correctAnswer: 0,
        hint: "השיפוע של ישר המאונך לישר אחר הוא הופכי ונגדי לו (מכפלתם שווה מינוס אחת).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שיפוע הישר המקורי.", math_expression: "m_{1} = 0.5" },
            { verbal_explanation: "שלב 2: שימוש בתנאי ניצבות לחילוץ שיפוע מאונך (תשובה לא').", math_expression: "m_{2} = \\dfrac{-1}{0.5} = -2" },
            { verbal_explanation: "שלב 3: כתיבת משוואת הישר המאונך.", math_expression: "y - 1 = -2(x - 4)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים.", math_expression: "y - 1 = -2x + 8" },
            { verbal_explanation: "שלב 5: בידוד וואי לקבלת התשובה הסופית (תשובה לב').", math_expression: "y = -2x + 9" }
        ],
        final_answer: "א. -2 | ב. y = -2x + 9"
    },

    // שאלה מספר 5 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "ישר חותך את ציר ה-x בנקודה (5, 0) ואת ציר ה-y בנקודה (0, -10).&rlm;<br>א. חשבו את שיפוע הישר.&rlm;<br>ב. מצאו את משוואת הישר.&rlm;",
        options: ["א. 2 | ב. y = 2x - 10", "א. -2 | ב. y = -2x - 10", "א. 0.5 | ב. y = 0.5x - 10", "א. 2 | ב. y = 2x + 10"],
        correctAnswer: 0,
        hint: "חישוב השיפוע הוא פשוט על ידי הצבת שתי הנקודות שעל הצירים. משוואת הישר קלה לכתיבה כי נקודת החיתוך עם ציר ה-y מספקת מיד את הערך של n (או c).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנקודות בנוסחת השיפוע.", math_expression: "m = \\dfrac{-10 - 0}{0 - 5}" },
            { verbal_explanation: "שלב 2: חלוקת מספרים שליליים נותנת תוצאה חיובית (תשובה לא').", math_expression: "m = \\dfrac{-10}{-5} = 2" },
            { verbal_explanation: "שלב 3: הצבת השיפוע והנקודה (0,-10) במשוואת ישר.", math_expression: "y - (-10) = 2(x - 0)" },
            { verbal_explanation: "שלב 4: פישוט המשוואה (תשובה לב').", math_expression: "y + 10 = 2x \\Rightarrow y = 2x - 10" }
        ],
        final_answer: "א. 2 | ב. y = 2x - 10"
    },

    // שאלה מספר 6 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "במעוין ABCD, משוואת האלכסון AC היא \\( y = x + 2 \\). האלכסון השני BD עובר דרך הנקודה (3, 1).&rlm;<br>א. מהו שיפוע האלכסון BD?&rlm;<br>ב. מהי משוואת האלכסון BD?&rlm;",
        options: ["א. -1 | ב. y = -x + 4", "א. 1 | ב. y = x - 2", "א. -1 | ב. y = -x + 1", "א. -1 | ב. y = -x - 4"],
        correctAnswer: 0,
        hint: "במעוין האלכסונים תמיד מאונכים זה לזה. לכן, השיפוע של BD הופכי ונגדי לשיפוע של AC.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ שיפוע אלכסון AC מהמשוואה המפורשת שלו.", math_expression: "m_{1} = 1" },
            { verbal_explanation: "שלב 2: יישום תנאי הניצבות לאלכסונים במעוין.", math_expression: "m_{2} = \\dfrac{-1}{1} = -1" },
            { verbal_explanation: "שלב 3: בניית המשוואה לאלכסון השני שעובר בנקודה הנתונה.", math_expression: "y - 1 = -1(x - 3)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים עם מינוס אחת.", math_expression: "y - 1 = -x + 3" },
            { verbal_explanation: "שלב 5: סידור המשוואה (תשובה לב').", math_expression: "y = -x + 4" }
        ],
        final_answer: "א. -1 | ב. y = -x + 4"
    },

    // שאלה מספר 7 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "ישר עובר דרך הנקודות (-2, 8) ו- (2, 0).&rlm;<br>א. מצאו את משוואת הישר.&rlm;<br>ב. חשבו את שטח המשולש שהישר יוצר עם שני הצירים (ברביע הראשון).&rlm;",
        options: ["א. y = -2x + 4 | ב. 4", "א. y = -2x + 4 | ב. 8", "א. y = 2x + 4 | ב. 4", "א. y = -2x + 8 | ב. 16"],
        correctAnswer: 0,
        hint: "לאחר מציאת משוואת הישר, מצאו את נקודות החיתוך שלו עם שני הצירים כדי לקבל את אורכי הניצבים של המשולש, ואז חשבו את השטח (ניצב כפול ניצב חלקי 2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שיפוע הישר דרך הנקודות הנתונות.", math_expression: "m = \\dfrac{0 - 8}{2 - (-2)} = \\dfrac{-8}{4} = -2" },
            { verbal_explanation: "שלב 2: בניית המשוואה עם השיפוע והנקודה (2,0).", math_expression: "y - 0 = -2(x - 2)" },
            { verbal_explanation: "שלב 3: משוואת הישר (תשובה לא').", math_expression: "y = -2x + 4" },
            { verbal_explanation: "שלב 4: מציאת החיתוך עם ציר הוואי (הניצב האנכי).", math_expression: "x = 0 \\Rightarrow y = 4" },
            { verbal_explanation: "שלב 5: מציאת החיתוך עם ציר האיקס שכבר נתון (הניצב האופקי).", math_expression: "x = 2" },
            { verbal_explanation: "שלב 6: חישוב השטח על ידי מחצית מכפלת הניצבים (תשובה לב').", math_expression: "S = \\dfrac{2 \\times 4}{2} = 4" }
        ],
        final_answer: "א. y = -2x + 4 | ב. 4"
    },

    // שאלה מספר 8 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "נתונה הפונקציה הריבועית \\( y = x^{2} - 6x + 14 \\). מעבירים ישר אופקי דרך קודקוד הפרבולה.&rlm;<br>א. מצאו את שיעורי קודקוד הפרבולה.&rlm;<br>ב. מהי משוואת הישר האופקי?&rlm;",
        options: ["א. (3, 5) | ב. y = 5", "א. (3, 5) | ב. x = 3", "א. (-3, 41) | ב. y = 41", "א. (6, 14) | ב. y = 14"],
        correctAnswer: 0,
        hint: "ישר אופקי תמיד מוגדר על ידי y שווה לקבוע (הגובה שלו אינו משתנה לעולם). לכן משוואתו תהיה פשוט ערך ה-y של הקודקוד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שיעור האיקס של הקודקוד.", math_expression: "x = \\dfrac{-(-6)}{2 \\times 1} = 3" },
            { verbal_explanation: "שלב 2: הצבה בפונקציה למציאת שיעור הוואי.", math_expression: "y = 3^{2} - 6 \\times 3 + 14" },
            { verbal_explanation: "שלב 3: ביצוע החישוב (תשובה לא').", math_expression: "y = 9 - 18 + 14 = 5" },
            { verbal_explanation: "שלב 4: ישר אופקי שעובר דרך נקודה זו שומר על ערך הוואי קבוע (תשובה לב').", math_expression: "y = 5" }
        ],
        final_answer: "א. (3, 5) | ב. y = 5"
    },

    // שאלה מספר 9 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "נתון קטע שקצותיו הם A(2, 2) ו- B(8, 10). מעבירים אנך אמצעי לקטע זה.&rlm;<br>א. מצאו את אמצע הקטע AB.&rlm;<br>ב. מצאו את שיפוע האנך האמצעי.&rlm;<br>ג. מהי משוואת האנך האמצעי?&rlm;",
        options: ["א. (5, 6) | ב. -0.75 | ג. y = -0.75x + 9.75", "א. (5, 6) | ב. 1.33 | ג. y = 1.33x - 0.65", "א. (6, 8) | ב. -0.75 | ג. y = -0.75x + 12.5", "א. (5, 6) | ב. -0.75 | ג. y = -0.75x + 6"],
        correctAnswer: 0,
        hint: "אנך אמצעי כשמו כן הוא: מאונך לקטע (שיפוע הופכי-נגדי) ועובר בדיוק באמצע שלו (נקודת הממוצע).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב נקודת האמצע של הקטע (תשובה לא').", math_expression: "x = \\dfrac{2 + 8}{2} = 5 \\quad , \\quad y = \\dfrac{2 + 10}{2} = 6" },
            { verbal_explanation: "שלב 2: חישוב שיפוע הקטע עצמו.", math_expression: "m = \\dfrac{10 - 2}{8 - 2} = \\dfrac{8}{6} = \\dfrac{4}{3}" },
            { verbal_explanation: "שלב 3: מציאת שיפוע האנך על ידי תנאי הניצבות (תשובה לב').", math_expression: "m_{perp} = \\dfrac{-3}{4} = -0.75" },
            { verbal_explanation: "שלב 4: כתיבת המשוואה על בסיס השיפוע האנכי ונקודת האמצע.", math_expression: "y - 6 = -0.75(x - 5)" },
            { verbal_explanation: "שלב 5: פתיחת סוגריים וסידור משוואת האנך האמצעי (תשובה לג').", math_expression: "y - 6 = -0.75x + 3.75 \\Rightarrow y = -0.75x + 9.75" }
        ],
        final_answer: "א. (5, 6) | ב. -0.75 | ג. y = -0.75x + 9.75"
    },

    // שאלה מספר 10 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "מציאת משוואת ישר",
        question_text: "במשולש קודקודים ב- P(0, 0), Q(8, 0), R(4, 6). מורידים גובה מקודקוד P לצלע QR.&rlm;<br>א. מהו שיפוע הצלע QR?&rlm;<br>ב. מהי משוואת הגובה היורד מ-P ל-QR?&rlm;",
        options: ["א. -1.5 | ב. y = (2/3)x", "א. -1.5 | ב. y = -1.5x", "א. 1.5 | ב. y = -0.66x", "א. 1.5 | ב. y = (2/3)x"],
        correctAnswer: 0,
        hint: "הגובה תמיד מאונך לצלע אליה הוא יורד. מצאו את שיפוע הצלע, מצאו את השיפוע ההופכי-נגדי שלו, והעבירו אותו דרך ראשית הצירים (P).",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שיפוע הצלע אליה יורד הגובה (תשובה לא').", math_expression: "m = \\dfrac{6 - 0}{4 - 8} = \\dfrac{6}{-4} = -1.5" },
            { verbal_explanation: "שלב 2: קביעת שיפוע הגובה על בסיס ניצבות.", math_expression: "m_{h} = \\dfrac{-1}{-1.5} = \\dfrac{2}{3}" },
            { verbal_explanation: "שלב 3: כתיבת משוואת הגובה שעובר בראשית הצירים.", math_expression: "y - 0 = \\dfrac{2}{3}(x - 0)" },
            { verbal_explanation: "שלב 4: פישוט המשוואה (תשובה לב').", math_expression: "y = \\dfrac{2}{3}x" }
        ],
        final_answer: "א. -1.5 | ב. y = (2/3)x"
    },

    // ==========================================
    // תת נושא 5: משוואת המעגל ויישומיה (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "מעגל שמרכזו בנקודה M(3, -2) ואורכו של רדיוס המעגל הוא 5. מהי משוואת המעגל?&rlm;",
        options: ["(x - 3)^{2} + (y + 2)^{2} = 25", "(x + 3)^{2} + (y - 2)^{2} = 25", "(x - 3)^{2} + (y + 2)^{2} = 5", "(x - 3)^{2} + (y - 2)^{2} = 25"],
        correctAnswer: 0,
        hint: "משוואת המעגל היא \\( (x-a)^{2} + (y-b)^{2} = R^{2} \\). שימו לב כי הצבה של ערך שלילי הופכת לפלוס בתוך הסוגריים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת תבנית משוואת המעגל המוכרת.", math_expression: "(x - a)^{2} + (y - b)^{2} = R^{2}" },
            { verbal_explanation: "שלב 2: חילוץ הפרמטרים מתוך הנקודה המרכזית הנתונה.", math_expression: "a = 3 \\quad , \\quad b = -2" },
            { verbal_explanation: "שלב 3: העלאת הרדיוס בריבוע לשם הכנסה למשוואה.", math_expression: "R^{2} = 5^{2} = 25" },
            { verbal_explanation: "שלב 4: הצבה ראשונית של הנתונים.", math_expression: "(x - 3)^{2} + (y - (-2))^{2} = 25" },
            { verbal_explanation: "שלב 5: סידור הסימנים לקבלת התשובה הסופית.", math_expression: "(x - 3)^{2} + (y + 2)^{2} = 25" }
        ],
        final_answer: "(x - 3)^{2} + (y + 2)^{2} = 25"
    },

    // שאלה מספר 12 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "נתונה משוואת המעגל: \\( (x - 4)^{2} + (y + 1)^{2} = 36 \\).&rlm;<br>א. מהם שיעורי מרכז המעגל?&rlm;<br>ב. מהו אורך קוטר המעגל?&rlm;",
        options: ["א. (4, -1) | ב. 12", "א. (-4, 1) | ב. 6", "א. (4, -1) | ב. 6", "א. (4, 1) | ב. 36"],
        correctAnswer: 0,
        hint: "הוציאו את שיעורי המרכז עם סימן הפוך ממה שכתוב בסוגריים. הרדיוס הוא השורש של המספר באגף הימני, והקוטר כפול ממנו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שיעורי המרכז מתוך המשוואה תוך הפיכת סימן (תשובה לא').", math_expression: "a = 4 \\quad , \\quad b = -1" },
            { verbal_explanation: "שלב 2: זיהוי הרדיוס בריבוע מתוך המשוואה.", math_expression: "R^{2} = 36" },
            { verbal_explanation: "שלב 3: הוצאת שורש למציאת הרדיוס התקני.", math_expression: "R = \\sqrt{36} = 6" },
            { verbal_explanation: "שלב 4: קוטר מוגדר כפעמיים הרדיוס, חישובו (תשובה לב').", math_expression: "D = 2 \\times 6 = 12" }
        ],
        final_answer: "א. (4, -1) | ב. 12"
    },

    // שאלה מספר 13 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "מעגל שמרכזו בראשית הצירים עובר דרך הנקודה (6, 8).&rlm;<br>א. חשבו את רדיוס המעגל.&rlm;<br>ב. מהי משוואת המעגל?&rlm;",
        options: ["א. 10 | ב. x^{2} + y^{2} = 100", "א. 10 | ב. x^{2} + y^{2} = 10", "א. 14 | ב. x^{2} + y^{2} = 196", "א. 100 | ב. x^{2} + y^{2} = 10000"],
        correctAnswer: 0,
        hint: "ראשית הצירים היא הנקודה (0,0). חשבו את המרחק בינה לבין הנקודה הנתונה למציאת הרדיוס. המשוואה למעגל במרכז הצירים היא תמיד איקס בריבוע ועוד וואי בריבוע שווה לרדיוס בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המרחק מראשית הצירים שמהווה את הרדיוס.", math_expression: "R = \\sqrt{6^{2} + 8^{2}}" },
            { verbal_explanation: "שלב 2: ביצוע חזקות וסכימה.", math_expression: "R = \\sqrt{36 + 64} = \\sqrt{100}" },
            { verbal_explanation: "שלב 3: תוצאת הרדיוס (תשובה לא').", math_expression: "R = 10" },
            { verbal_explanation: "שלב 4: הגדרת מרכז המעגל על פי הנתון.", math_expression: "a = 0 \\quad , \\quad b = 0" },
            { verbal_explanation: "שלב 5: הרכבת משוואת המעגל המקנונית (תשובה לב').", math_expression: "x^{2} + y^{2} = 100" }
        ],
        final_answer: "א. 10 | ב. x^{2} + y^{2} = 100"
    },

    // שאלה מספר 14 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "קצות קוטר של מעגל הם הנקודות A(-2, 0) ו- B(14, 0).&rlm;<br>א. מצאו את מרכז המעגל.&rlm;<br>ב. מצאו את הרדיוס.&rlm;<br>ג. רשמו את משוואת המעגל.&rlm;",
        options: ["א. (6, 0) | ב. 8 | ג. (x - 6)^{2} + y^{2} = 64", "א. (6, 0) | ב. 16 | ג. (x - 6)^{2} + y^{2} = 256", "א. (12, 0) | ב. 8 | ג. (x - 12)^{2} + y^{2} = 64", "א. (6, 0) | ב. 8 | ג. (x + 6)^{2} + y^{2} = 64"],
        correctAnswer: 0,
        hint: "המרכז הוא ממוצע הקצוות. הקוטר הוא המרחק המלא, והרדיוס הוא מחציתו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מציאת איקס המרכז על ידי ממוצע (תשובה לא').", math_expression: "x = \\dfrac{-2 + 14}{2} = 6 \\quad , \\quad y = 0" },
            { verbal_explanation: "שלב 2: אורך הקוטר המלא (הפרש אופקי).", math_expression: "d = 14 - (-2) = 16" },
            { verbal_explanation: "שלב 3: מציאת הרדיוס על ידי חציית הקוטר (תשובה לב').", math_expression: "R = 16 : 2 = 8" },
            { verbal_explanation: "שלב 4: הרכבת משוואת המעגל בעזרת המרכז והרדיוס.", math_expression: "(x - 6)^{2} + (y - 0)^{2} = 8^{2}" },
            { verbal_explanation: "שלב 5: פישוט למשוואה סופית (תשובה לג').", math_expression: "(x - 6)^{2} + y^{2} = 64" }
        ],
        final_answer: "א. (6, 0) | ב. 8 | ג. (x - 6)^{2} + y^{2} = 64"
    },

    // שאלה מספר 15
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "נתון המעגל שמשוואתו \\( (x - 3)^{2} + (y - 4)^{2} = 25 \\). האם המעגל עובר בראשית הצירים (0,0)?&rlm;",
        options: ["כן, עובר", "לא עובר", "אי אפשר לדעת", "עובר רק בציר x"],
        correctAnswer: 0,
        hint: "כדי לבדוק אם נקודה נמצאת על מעגל, יש להציב את שיעוריה במשוואת המעגל ולבדוק אם מתקבל פסוק אמת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנקודה אפס פסיק אפס במקום איקס וואי במשוואה.", math_expression: "(0 - 3)^{2} + (0 - 4)^{2} = 25" },
            { verbal_explanation: "שלב 2: פישוט החסרים.", math_expression: "(-3)^{2} + (-4)^{2} = 25" },
            { verbal_explanation: "שלב 3: העלאה בריבוע של הערכים (המינוס נעלם).", math_expression: "9 + 16 = 25" },
            { verbal_explanation: "שלב 4: חיבור האיברים לבדיקת פסוק האמת.", math_expression: "25 = 25" },
            { verbal_explanation: "שלב 5: התקבל שוויון מוחלט ולכן הנקודה מקיימת את המשוואה ומונחת על המעגל.", math_expression: "1" }
        ],
        final_answer: "כן, עובר"
    },

    // שאלה מספר 16 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "מעגל נתון על ידי המשוואה \\( (x - 5)^{2} + (y - 4)^{2} = 25 \\). מצאו את שתי נקודות החיתוך של המעגל עם ציר ה-x.&rlm;",
        options: ["(2, 0) ו-(8, 0)", "(0, 0) ו-(10, 0)", "(5, 0)", "(8, 0) ו-(0, 0)"],
        correctAnswer: 0,
        hint: "בנקודת חיתוך עם ציר ה-x מתקיים ש-y שווה לאפס. הציבו y=0 במשוואה ופתרו למציאת ה-x.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת וואי שווה לאפס במשוואת המעגל.", math_expression: "(x - 5)^{2} + (0 - 4)^{2} = 25" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של החלק החופשי.", math_expression: "(x - 5)^{2} + 16 = 25" },
            { verbal_explanation: "שלב 3: בידוד הביטוי הריבועי.", math_expression: "(x - 5)^{2} = 9" },
            { verbal_explanation: "שלב 4: הוצאת שורש נותנת שתי משוואות.", math_expression: "x - 5 = 3 \\quad , \\quad x - 5 = -3" },
            { verbal_explanation: "שלב 5: פתרון המשוואה הראשונה.", math_expression: "x = 8" },
            { verbal_explanation: "שלב 6: פתרון המשוואה השנייה ומסקנה כללית לנקודות.", math_expression: "x = 2 \\Rightarrow (8, 0) \\quad , \\quad (2, 0)" }
        ],
        final_answer: "(2, 0) ו-(8, 0)"
    },

    // שאלה מספר 17
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "הישר \\( y = 3 \\) חותך את המעגל \\( x^{2} + y^{2} = 25 \\) בשתי נקודות. מה המרחק בין שתי נקודות החיתוך?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:200px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='60' fill='none' stroke='#10b981' stroke-width='2'/><line x1='20' y1='100' x2='180' y2='100' stroke='#64748b' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='180' stroke='#64748b' stroke-width='2'/><line x1='20' y1='64' x2='180' y2='64' stroke='#3b82f6' stroke-width='2'/><circle cx='52' cy='64' r='4' fill='#ef4444'/><circle cx='148' cy='64' r='4' fill='#ef4444'/></svg></div>",
        options: ["8", "6", "10", "4"],
        correctAnswer: 0,
        hint: "הציבו את משוואת הישר במשוואת המעגל כדי למצוא את שיעורי ה-x של הנקודות. המרחק בין הנקודות על קו אופקי הוא פשוט ההפרש ביניהם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הישר בתוך משוואת המעגל.", math_expression: "x^{2} + 3^{2} = 25" },
            { verbal_explanation: "שלב 2: העלאה בריבוע.", math_expression: "x^{2} + 9 = 25" },
            { verbal_explanation: "שלב 3: העברת אגף לבידוד איקס בריבוע.", math_expression: "x^{2} = 16" },
            { verbal_explanation: "שלב 4: הוצאת שורש למציאת שני הערכים האפשריים.", math_expression: "x = 4 \\quad , \\quad x = -4" },
            { verbal_explanation: "שלב 5: חישוב המרחק (ההפרש) בין שתי הנקודות על הישר האופקי.", math_expression: "d = 4 - (-4) = 8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 18 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "הנקודה A(8, 6) נמצאת על המעגל \\( x^{2} + y^{2} = 100 \\). מעבירים משיק למעגל בנקודה A.&rlm;<br>א. מהו שיפוע הרדיוס המחבר את המרכז עם A?&rlm;<br>ב. מהו שיפוע המשיק?&rlm;<br>ג. מהי משוואת המשיק בנקודה A? (השתמשו בשברים במקום עשרוניים)&rlm;",
        options: ["א. 3/4 | ב. -4/3 | ג. y = -4/3x + 16.66", "א. 4/3 | ב. -3/4 | ג. y = -3/4x + 12", "א. 3/4 | ב. -4/3 | ג. y = -4/3x + 10", "א. -3/4 | ב. 4/3 | ג. y = 4/3x - 4.66"],
        correctAnswer: 0,
        hint: "מרכז המעגל הוא (0,0). מצאו את שיפוע הרדיוס, ובגלל שהמשיק מאונך לרדיוס, שפועו הופכי ונגדי. בנו משוואה דרך A.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב שיפוע הרדיוס מראשית הצירים (תשובה לא').", math_expression: "m = \\dfrac{6 - 0}{8 - 0} = \\dfrac{6}{8} = \\dfrac{3}{4}" },
            { verbal_explanation: "שלב 2: תכונת המשיק היא מאונך לרדיוס, ולכן שיפועו נגדי והופכי (תשובה לב').", math_expression: "m_{t} = \\dfrac{-4}{3}" },
            { verbal_explanation: "שלב 3: כתיבת משוואת ישר המשיק העובר בנקודת ההשקה.", math_expression: "y - 6 = \\dfrac{-4}{3}(x - 8)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים.", math_expression: "y - 6 = \\dfrac{-4}{3}x + \\dfrac{32}{3}" },
            { verbal_explanation: "שלב 5: העברת אגף וחיבור מספרים (תשובה לג').", math_expression: "y = \\dfrac{-4}{3}x + \\dfrac{50}{3} \\approx \\dfrac{-4}{3}x + 16.66" }
        ],
        final_answer: "א. 3/4 | ב. -4/3 | ג. y = -4/3x + 16.66"
    },

    // שאלה מספר 19
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "האם הנקודה (2, 3) נמצאת בתוך, מחוץ או על המעגל שמשוואתו \\( (x - 1)^{2} + (y - 2)^{2} = 4 \\)?&rlm;",
        options: ["בתוך המעגל", "על המעגל", "מחוץ למעגל", "במרכז המעגל"],
        correctAnswer: 0,
        hint: "הציבו את הנקודה בצד השמאלי של משוואת המעגל. אם התוצאה קטנה מהרדיוס בריבוע (4), הנקודה בתוך המעגל. אם גדולה, מחוץ למעגל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנקודה הנתונה למשוואת מרחק ממרכז המעגל בריבוע.", math_expression: "d^{2} = (2 - 1)^{2} + (3 - 2)^{2}" },
            { verbal_explanation: "שלב 2: ביצוע חיסור וריבוע על האיברים.", math_expression: "d^{2} = 1^{2} + 1^{2} = 2" },
            { verbal_explanation: "שלב 3: השוואת מרחק הנקודה לרדיוס בריבוע המוגדר במשוואה.", math_expression: "2 < 4" },
            { verbal_explanation: "שלב 4: המסקנה היא שהנקודה קרובה יותר ממרחק הרדיוס, ולכן נמצאת בתוך המעגל.", math_expression: "1" }
        ],
        final_answer: "בתוך המעגל"
    },

    // שאלה מספר 20 (רב שלבית)
    {
        topic: "analytic_geometry_372",
        subTopic: "משוואת המעגל ויישומיה",
        question_text: "מעגל שמרכזו בנקודה (6, 8) משיק לציר ה-x (נוגע בו בנקודה אחת בלבד).&rlm;<br>א. מהו אורך רדיוס המעגל?&rlm;<br>ב. מהי משוואת המעגל?&rlm;",
        options: ["א. 8 | ב. (x - 6)^{2} + (y - 8)^{2} = 64", "א. 6 | ב. (x - 6)^{2} + (y - 8)^{2} = 36", "א. 8 | ב. (x + 6)^{2} + (y + 8)^{2} = 64", "א. 10 | ב. (x - 6)^{2} + (y - 8)^{2} = 100"],
        correctAnswer: 0,
        hint: "כאשר מעגל משיק לציר ה-x, הרדיוס שלו שווה למרחק המרכז מהציר, שהוא למעשה ערך ה-y של המרכז.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת תכונת ההשקה לציר אופקי, המגדירה את הרדיוס כגובה המרכז.", math_expression: "y = 8 \\Rightarrow R = 8" },
            { verbal_explanation: "שלב 2: העלאת הרדיוס בריבוע להכנה למשוואה.", math_expression: "R^{2} = 64" },
            { verbal_explanation: "שלב 3: בניית המשוואה המלאה על סמך המרכז והרדיוס (תשובה לב').", math_expression: "(x - 6)^{2} + (y - 8)^{2} = 64" },
            { verbal_explanation: "שלב 4: התאמה לאפשרות בתשובות.", math_expression: "1" }
        ],
        final_answer: "א. 8 | ב. (x - 6)^{2} + (y - 8)^{2} = 64"
    }
];