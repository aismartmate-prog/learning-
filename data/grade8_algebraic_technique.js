// ========================================================================
// שכבת גיל: כיתה ח'-ט' | נושא: טכניקה אלגברית
// 4 תתי נושאים | 48 שאלות סה"כ
// פתרונות מפורטים מאוד: פירוק לגורמים, צמצום, מכנה משותף, ותחום הצבה.
// כתיבה נוקשה: חילוק ושברים מוצגים אך ורק בעזרת (:) ! ללא לוכסנים.
// שימוש ב- × לכפל, ≠ לשונה מ... ללא LaTeX.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: צמצום שברים אלגבריים (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "צמצמו את השבר האלגברי הבא (הוציאו גורם משותף במונה במידת הצורך):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(4x + 8) : 4 = ?</div>",
        options: ["x + 2", "x + 8", "4x + 2", "x"],
        correctAnswer: 0,
        hint: "אסור לצמצם חלק מסכום! קודם הוציאו את המספר 4 כגורם משותף במונה (מחוץ לסוגריים), ורק אז צמצמו אותו עם ה-4 שבמכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': אי אפשר לצמצם את ה-4 ישר, כי יש במונה פעולת חיבור. עלינו להפוך את המונה למכפלה (כפל).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נוציא גורם משותף במונה. גם 4 וגם 8 מתחלקים ב-4.&rlm;", math_expression: "4x + 8 = 4(x + 2)" },
            { verbal_explanation: "שלב ג': נרשום את השבר החדש. כעת יש כפל בין 4 לסוגריים.&rlm;", math_expression: "4(x + 2) : 4" },
            { verbal_explanation: "שלב ד': נצמצם את ה-4 שבמונה עם ה-4 שבמכנה.&rlm;", math_expression: "x + 2" }
        ],
        final_answer: "x + 2"
    },
    // שאלה 2
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "פשטו את השבר על ידי הוצאת משתנה משותף:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x² + 5x) : x = ?</div>",
        options: ["x + 5", "x² + 5", "6x", "5x"],
        correctAnswer: 0,
        hint: "הוציאו x כגורם משותף במונה. מה נשאר בסוגריים?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא גורם משותף במונה. האות x מופיעה בשני האיברים.&rlm;", math_expression: "x² + 5x = x(x + 5)" },
            { verbal_explanation: "שלב ב': נציב חזרה בשבר.&rlm;", math_expression: "x(x + 5) : x" },
            { verbal_explanation: "שלב ג': נצמצם את ה-x שבמונה (שנמצא מחוץ לסוגריים) עם ה-x שבמכנה.&rlm;", math_expression: "x + 5" }
        ],
        final_answer: "x + 5"
    },
    // שאלה 3
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "צמצמו את השבר האלגברי (הוציאו גורם משותף במונה):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(3x - 12) : (x - 4) = ?</div>",
        options: ["3", "x - 3", "3x", "4"],
        correctAnswer: 0,
        hint: "הוציאו את המספר 3 מחוץ לסוגריים במונה. האם הסוגריים שיישארו שווים למכנה?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את המספר 3 כגורם משותף במונה.&rlm;", math_expression: "3x - 12 = 3(x - 4)" },
            { verbal_explanation: "שלב ב': נרשום את השבר המעודכן.&rlm;", math_expression: "3(x - 4) : (x - 4)" },
            { verbal_explanation: "שלב ג': הביטוי (x - 4) מופיע בשלמותו גם במונה וגם במכנה. נצמצם אותו כגוש אחד.&rlm;", math_expression: "3" }
        ],
        final_answer: "3"
    },
    // שאלה 4
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "שימוש בנוסחאות כפל מקוצר! צמצמו את השבר:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x² - 16) : (x - 4) = ?</div>",
        options: ["x + 4", "x - 4", "4x", "x + 16"],
        correctAnswer: 0,
        hint: "המונה הוא 'הפרש ריבועים'. פרקו אותו ל- (x-4) כפול (x+4).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה שהמונה הוא נוסחת הכפל המקוצר 'הפרש ריבועים', כיוון ש-16 הוא 4 בריבוע.&rlm;", math_expression: "x² - 16 = (x - 4)(x + 4)" },
            { verbal_explanation: "שלב ב': נציב את הפירוק בחזרה במונה השבר.&rlm;", math_expression: "(x - 4)(x + 4) : (x - 4)" },
            { verbal_explanation: "שלב ג': נצמצם את הסוגריים המשותפים (x - 4) במונה ובמכנה.&rlm;", math_expression: "x + 4" }
        ],
        final_answer: "x + 4"
    },
    // שאלה 5
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "צמצום עם מקדמים זהים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(10x + 15) : 5 = ?</div>",
        options: ["2x + 3", "2x + 15", "10x + 3", "5x + 3"],
        correctAnswer: 0,
        hint: "הוציאו את המספר 5 כגורם משותף מהמונה. 10x לחלק ל-5 נותן 2x. ו-15 לחלק ל-5 נותן 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את המספר 5 כגורם משותף במונה.&rlm;", math_expression: "10x + 15 = 5(2x + 3)" },
            { verbal_explanation: "שלב ב': נכתוב את השבר מחדש.&rlm;", math_expression: "5(2x + 3) : 5" },
            { verbal_explanation: "שלב ג': נצמצם את ה-5 שבמונה עם ה-5 שבמכנה.&rlm;", math_expression: "2x + 3" }
        ],
        final_answer: "2x + 3"
    },
    // שאלה 6
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "טריק של סימנים הפוכים! צמצמו את השבר:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x - 7) : (7 - x) = ?</div>",
        options: ["-1", "1", "0", "x - 7"],
        correctAnswer: 0,
        hint: "הביטוי במונה והביטוי במכנה הם נגדיים זה לזה. הוציאו מינוס 1 (1-) כגורם משותף מתוך המכנה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הביטויים דומים, אבל הסימנים שלהם הפוכים (ל-x יש פלוס במונה ומינוס במכנה, ול-7 להפך).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נוציא מינוס 1 מחוץ לסוגריים במכנה. זה יהפוך את הסימנים בפנים.&rlm;", math_expression: "7 - x = -1(-7 + x) = -1(x - 7)" },
            { verbal_explanation: "שלב ג': נציב את המכנה החדש.&rlm;", math_expression: "(x - 7) : -1(x - 7)" },
            { verbal_explanation: "שלב ד': הסוגריים מצטמצמים, ונשארנו עם 1 לחלק ל-מינוס 1.&rlm;", math_expression: "-1" }
        ],
        final_answer: "-1"
    },
    // שאלה 7
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "שילוב של גורם משותף והפרש ריבועים. פשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2x² - 18) : (x + 3) = ?</div>",
        options: ["2(x - 3)", "2x - 18", "x - 3", "2(x + 3)"],
        correctAnswer: 0,
        hint: "קודם הוציאו 2 כגורם משותף מהמונה. יישאר לכם 2 כפול (x² - 9). פרקו את הסוגריים לפי כפל מקוצר, ואז צמצמו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את המספר 2 כגורם משותף במונה.&rlm;", math_expression: "2x² - 18 = 2(x² - 9)" },
            { verbal_explanation: "שלב ב': נפרק את הביטוי (x² - 9) לפי נוסחת הפרש ריבועים.&rlm;", math_expression: "2(x - 3)(x + 3)" },
            { verbal_explanation: "שלב ג': נציב בשבר.&rlm;", math_expression: "2(x - 3)(x + 3) : (x + 3)" },
            { verbal_explanation: "שלב ד': נצמצם את הסוגריים המשותפים. התשובה נשארת עם המקדם 2!&rlm;", math_expression: "2(x - 3)" }
        ],
        final_answer: "2(x - 3)"
    },
    // שאלה 8
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "צמצום שבר שבו המכנה הוא גורם יחיד (חד איבר):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(5x² - 10x) : (5x) = ?</div>",
        options: ["x - 2", "x² - 2", "5x - 2", "x - 10"],
        correctAnswer: 0,
        hint: "הוציאו 5x כגורם משותף מהמונה. 5x² לחלק ל-5x שווה x. ו-מינוס 10x לחלק ל-5x שווה ל-2-.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא את הגורם המשותף הגדול ביותר במונה, שהוא 5x.&rlm;", math_expression: "5x² - 10x = 5x(x - 2)" },
            { verbal_explanation: "שלב ב': נכתוב את השבר מחדש.&rlm;", math_expression: "5x(x - 2) : 5x" },
            { verbal_explanation: "שלב ג': נצמצם את ה-5x במלואו מהמונה והמכנה.&rlm;", math_expression: "x - 2" }
        ],
        final_answer: "x - 2"
    },
    // שאלה 9
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "פירוק גם במונה וגם במכנה. פשטו את הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x² - 25) : (5x - 25) = ?</div>",
        options: ["(x + 5) : 5", "(x - 5) : 5", "x", "x : 5"],
        correctAnswer: 0,
        hint: "המונה הוא הפרש ריבועים. המכנה דורש הוצאת גורם משותף 5.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה לפי הפרש ריבועים.&rlm;", math_expression: "x² - 25 = (x - 5)(x + 5)" },
            { verbal_explanation: "שלב ב': נפרק את המכנה על ידי הוצאת גורם משותף 5.&rlm;", math_expression: "5x - 25 = 5(x - 5)" },
            { verbal_explanation: "שלב ג': נרכיב את השבר מחדש ונצמצם את הסוגריים المשותפים (x - 5).&rlm;", math_expression: "[(x - 5)(x + 5)] : [5(x - 5)]" },
            { verbal_explanation: "התוצאה:&rlm;", math_expression: "(x + 5) : 5" }
        ],
        final_answer: "(x + 5) : 5"
    },
    // שאלה 10
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "צמצום עם כמה משתנים שונים (חוקי חזקות). חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(6x²y) : (2xy) = ?</div>",
        options: ["3x", "3xy", "4x", "3y"],
        correctAnswer: 0,
        hint: "כשיש רק כפל במונה ובמכנה, אפשר לצמצם ישירות. צמצמו 6 עם 2. צמצמו x² עם x. צמצמו y עם y.&rlm;",
        solution_steps: [
            { verbal_explanation: "כיוון שגם המונה וגם המכנה מכילים רק פעולות כפל, אפשר לצמצם כל גורם בנפרד.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב א': צמצום המספרים (6 לחלק ל-2).&rlm;", math_expression: "6 : 2 = 3" },
            { verbal_explanation: "שלב ב': צמצום ה-x (x² לחלק ל-x נותן x אחד).&rlm;", math_expression: "x² : x = x" },
            { verbal_explanation: "שלב ג': צמצום ה-y (y לחלק ל-y נותן 1, מתבטל).&rlm;", math_expression: "y : y = 1" },
            { verbal_explanation: "נחבר את כל התוצאות בכפל.&rlm;", math_expression: "3x" }
        ],
        final_answer: "3x"
    },
    // שאלה 11
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "צמצמו את השבר האלגברי הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x² - 100) : (x + 10) = ?</div>",
        options: ["x - 10", "x + 10", "x - 100", "10"],
        correctAnswer: 0,
        hint: "100 הוא הריבוע של 10. פרקו את המונה ל- (x-10) כפול (x+10).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המונה הוא תבנית של הפרש ריבועים. נפרק אותו.&rlm;", math_expression: "x² - 100 = (x - 10)(x + 10)" },
            { verbal_explanation: "שלב ב': נכתוב את השבר מחדש.&rlm;", math_expression: "(x - 10)(x + 10) : (x + 10)" },
            { verbal_explanation: "שלב ג': נצמצם את הגורם המשותף למונה ולמכנה.&rlm;", math_expression: "x - 10" }
        ],
        final_answer: "x - 10"
    },
    // שאלה 12
    {
        topic: "algebraic_fractions",
        subTopic: "צמצום שברים אלגבריים",
        question_text: "אתגר של סימנים והוצאת גורם משותף. פשטו את הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(12 - 4x) : (x - 3) = ?</div>",
        options: ["-4", "4", "-3", "3 - x"],
        correctAnswer: 0,
        hint: "הוציאו במונה את המספר 4 כגורם משותף, ותקבלו 4*(3 פחות x). זה הפוך מהמכנה. לכן מוציאים מינוס 4!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוציא גורם משותף 4 מהמונה. נקבל 4 כפול (3 פחות x).&rlm;", math_expression: "12 - 4x = 4(3 - x)" },
            { verbal_explanation: "שלב ב': נראה ש- (3 פחות x) הוא הנגדי של המכנה. נוציא מינוס 4 במקום זאת.&rlm;", math_expression: "12 - 4x = -4(-3 + x) = -4(x - 3)" },
            { verbal_explanation: "שלב ג': נציב בשבר ונצמצם את הסוגריים התואמים.&rlm;", math_expression: "-4(x - 3) : (x - 3) = -4" }
        ],
        final_answer: "-4"
    },

    // ==========================================================
    // תת נושא 2: כפל וחילוק שברים אלגבריים (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל של שברים פשוטים עם נעלמים. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x : 3) × (6 : x) = ?</div>",
        options: ["2", "x² : 18", "6x : 3x", "18"],
        correctAnswer: 0,
        hint: "צמצמו באלכסון לפני הכפל! ה-x מצטמצם מול ה-x, וה-6 מצטמצם מול ה-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "דרך א': נבצע כפל מונים וכפל מכנים.&rlm;", math_expression: "(x × 6) : (3 × x) = 6x : 3x" },
            { verbal_explanation: "נצמצם את ה-x ואת המספרים.&rlm;", math_expression: "6 : 3 = 2" },
            { verbal_explanation: "דרך ב' (מהירה): צמצום באלכסון מראש.&rlm;", math_expression: "2" }
        ],
        final_answer: "2"
    },
    // שאלה 14
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חשבו את תוצאת הכפל הבאה:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x² : 5) × (10 : x) = ?</div>",
        options: ["2x", "x : 2", "5x", "2x²"],
        correctAnswer: 0,
        hint: "צמצמו את המספרים באלכסון (10 מול 5). וצמצמו את האותיות באלכסון (x² מול x).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום כשבר אחד על ידי כפל מונים וכפל מכנים.&rlm;", math_expression: "(10x²) : (5x)" },
            { verbal_explanation: "שלב ב': נצמצם את המספרים: 10 לחלק ל-5 נותן 2.&rlm;", math_expression: "2x² : x" },
            { verbal_explanation: "שלב ג': נצמצם משתנים: x² לחלק ל-x משאיר x אחד.&rlm;", math_expression: "2x" }
        ],
        final_answer: "2x"
    },
    // שאלה 15
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "לפני שמכפילים, כדאי לפרק ולצמצם! מה התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((2x + 4) : 3) × (9 : (x + 2)) = ?</div>",
        options: ["6", "18", "2x + 2", "3(x + 2)"],
        correctAnswer: 0,
        hint: "הוציאו 2 כגורם משותף מהמונה הראשון. תקבלו 2 כפול (x+2). עכשיו צמצמו באלכסון.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה השמאלי.&rlm;", math_expression: "2x + 4 = 2(x + 2)" },
            { verbal_explanation: "שלב ב': נרשום את התרגיל מחדש עם הפירוק.&rlm;", math_expression: "[2(x + 2) : 3] × [9 : (x + 2)]" },
            { verbal_explanation: "שלב ג': נצמצם באלכסון את הסוגריים (x+2), ונצמצם את 9 מול 3.&rlm;", math_expression: "(2 : 1) × (3 : 1)" },
            { verbal_explanation: "שלב ד': נכפול את מה שנשאר.&rlm;", math_expression: "2 × 3 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 16
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חילוק שברים אלגבריים (זכרו כפל בהופכי!). פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((x - 5) : 2) : ((x - 5) : 4) = ?</div>",
        options: ["2", "0.5", "x - 5", "8"],
        correctAnswer: 0,
        hint: "הפכו את החילוק לכפל, והפכו את השבר השני. ואז צמצמו באלכסון.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חילוק שברים הופך לכפל בהופכי.&rlm;", math_expression: "[(x - 5) : 2] × [4 : (x - 5)]" },
            { verbal_explanation: "שלב ב': נצמצם באלכסון את הסוגריים (x-5).&rlm;", math_expression: "1 : 2 × 4 : 1" },
            { verbal_explanation: "שלב ג': נשארנו עם 4 לחלק ל-2.&rlm;", math_expression: "4 : 2 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 17
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "תרגיל כפל הכולל הפרש ריבועים. פשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((x² - 9) : 4) × (2 : (x - 3)) = ?</div>",
        options: ["(x + 3) : 2", "(x - 3) : 2", "x + 3", "2(x + 3)"],
        correctAnswer: 0,
        hint: "פרקו את המונה השמאלי לפי נוסחת הכפל המקוצר. צמצמו באלכסון.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה לפי הפרש ריבועים.&rlm;", math_expression: "x² - 9 = (x - 3)(x + 3)" },
            { verbal_explanation: "שלב ב': נציב מחדש בתרגיל.&rlm;", math_expression: "[(x - 3)(x + 3) : 4] × [2 : (x - 3)]" },
            { verbal_explanation: "שלב ג': נצמצם את (x-3) ואת המספרים (2 ו-4).&rlm;", math_expression: "[(x + 3) : 2] × [1 : 1]" },
            { verbal_explanation: "שלב ד': נרשום את התוצאה.&rlm;", math_expression: "(x + 3) : 2" }
        ],
        final_answer: "(x + 3) : 2"
    },
    // שאלה 18
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חילוק שברים עם נעלמים. פתרו וצמצמו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(5x : 7) : (10x : 21) = ?</div>",
        options: ["1.5", "2 : 3", "15x", "5 : x"],
        correctAnswer: 0,
        hint: "הפכו לכפל בהופכי: 5x:7 כפול 21:10x. ה-x מצטמצם. המספרים מצטמצמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נהפוך את החילוק לכפל בהופכי.&rlm;", math_expression: "(5x : 7) × (21 : 10x)" },
            { verbal_explanation: "שלב ב': נצמצם את האות x מול האות x באלכסון.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': נצמצם את 21 מול 7 (נשאר 3). ונצמצם 5 מול 10 (נשאר 2 למטה).&rlm;", math_expression: "3 : 2" },
            { verbal_explanation: "התוצאה היא 1.5.&rlm;", math_expression: "1.5" }
        ],
        final_answer: "1.5"
    },
    // שאלה 19
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "חילוק הדורש פירוק כפל מקוצר. פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((x² - 16) : x) : ((x + 4) : 2x) = ?</div>",
        options: ["2(x - 4)", "x - 4", "2x - 16", "(x - 4) : 2"],
        correctAnswer: 0,
        hint: "הפכו לכפל. פרקו את המונה השמאלי לפי נוסחה. צמצמו אלכסונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נהפוך לכפל בהופכי.&rlm;", math_expression: "[(x² - 16) : x] × [2x : (x + 4)]" },
            { verbal_explanation: "שלב ב': נפרק את המונה השמאלי.&rlm;", math_expression: "x² - 16 = (x - 4)(x + 4)" },
            { verbal_explanation: "שלב ג': נציב ונצמצם. (x+4) מצטמצם. וגם ה-x מצטמצם באלכסון.&rlm;", math_expression: "[(x - 4) : 1] × [2 : 1]" },
            { verbal_explanation: "שלב ד': נכפול את מה שנשאר.&rlm;", math_expression: "2(x - 4)" }
        ],
        final_answer: "2(x - 4)"
    },
    // שאלה 20
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל עם טריק של סימנים הפוכים. חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((3x - 12) : 5) × (15 : (4 - x)) = ?</div>",
        options: ["-9", "9", "-3", "3(x - 4)"],
        correctAnswer: 0,
        hint: "הוציאו 3 מהמונה השמאלי. במכנה הימני יש 4-x. צמצמו סוגריים נגדיים וקבלו 1-.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה השמאלי.&rlm;", math_expression: "3x - 12 = 3(x - 4)" },
            { verbal_explanation: "שלב ב': נרשום את התרגיל מחדש. נצמצם את ה-15 עם ה-5 (נשאר 3).&rlm;", math_expression: "[3(x - 4) : 1] × [3 : (4 - x)]" },
            { verbal_explanation: "שלב ג': נשים לב שהסוגריים נגדיים. חלוקתם זה בזה נותנת מינוס 1.&rlm;", math_expression: "(x - 4) : (4 - x) = -1" },
            { verbal_explanation: "שלב ד': נכפול הכל: 3 כפול 3 כפול מינוס 1.&rlm;", math_expression: "-9" }
        ],
        final_answer: "-9"
    },
    // שאלה 21
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "כפל של שברים והרבה x-ים. פשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((x + 1) : x²) × (x : (x + 1)) = ?</div>",
        options: ["1 : x", "x", "x²", "1"],
        correctAnswer: 0,
        hint: "צמצמו את הסוגריים במלואם. אחר כך צמצמו את ה-x למעלה עם ה-x² למטה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נצמצם באלכסון את הגוש המשותף (x + 1).&rlm;", math_expression: "(1 : x²) × (x : 1)" },
            { verbal_explanation: "שלב ב': נכפול מונים ומכנים.&rlm;", math_expression: "x : x²" },
            { verbal_explanation: "שלב ג': נצמצם x אחד. נשאר x למטה.&rlm;", math_expression: "1 : x" }
        ],
        final_answer: "1 : x"
    },
    // שאלה 22
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "תרגיל חילוק עם הוצאת גורם משותף:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((4x + 8) : x) : (2 : x²) = ?</div>",
        options: ["2x(x + 2)", "2(x + 2) : x", "8x + 16", "x(x + 2)"],
        correctAnswer: 0,
        hint: "הפכו לכפל בהופכי. הוציאו 4 כגורם משותף במונה. צמצמו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נהפוך לכפל בהופכי.&rlm;", math_expression: "[(4x + 8) : x] × [x² : 2]" },
            { verbal_explanation: "שלב ב': נפרק את המונה.&rlm;", math_expression: "4x + 8 = 4(x + 2)" },
            { verbal_explanation: "שלב ג': נציב ונצמצם. 4 מצטמצם עם 2 (נשאר 2 למעלה). x² מצטמצם עם x (נשאר x למעלה).&rlm;", math_expression: "2(x + 2) × x" },
            { verbal_explanation: "שלב ד': נסדר את הביטוי בדרך המקובלת.&rlm;", math_expression: "2x(x + 2)" }
        ],
        final_answer: "2x(x + 2)"
    },
    // שאלה 23
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "פשטו את ביטוי הכפל הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((x² - 25) : 3) × (6 : (x + 5)) = ?</div>",
        options: ["2(x - 5)", "2x - 25", "x - 5", "2(x + 5)"],
        correctAnswer: 0,
        hint: "המונה מתפרק להפרש ריבועים. ה-6 וה-3 מצטמצמים ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפרק את המונה השמאלי.&rlm;", math_expression: "x² - 25 = (x - 5)(x + 5)" },
            { verbal_explanation: "שלב ב': נצמצם באלכסון את המספרים (6 חלקי 3 שווה 2).&rlm;", math_expression: "[(x - 5)(x + 5) : 1] × [2 : (x + 5)]" },
            { verbal_explanation: "שלב ג': נצמצם את הסוגריים المשותפים.&rlm;", math_expression: "(x - 5) × 2" },
            { verbal_explanation: "נרשום את התוצאה בצורה מסודרת.&rlm;", math_expression: "2(x - 5)" }
        ],
        final_answer: "2(x - 5)"
    },
    // שאלה 24
    {
        topic: "algebraic_fractions",
        subTopic: "כפל וחילוק שברים אלגבריים",
        question_text: "תרגיל אחרון לנושא! חילוק ששווה לשים לב לסימנים שלו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>((x - 1) : 8) : ((1 - x) : 16) = ?</div>",
        options: ["-2", "2", "-0.5", "x - 1"],
        correctAnswer: 0,
        hint: "הפכו לכפל בהופכי. (x-1) לחלק ל- (1-x) שווה למינוס 1. ו-16 לחלק ל-8 שווה 2. כמה זה מינוס 1 כפול 2?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': כפל בהופכי.&rlm;", math_expression: "[(x - 1) : 8] × [16 : (1 - x)]" },
            { verbal_explanation: "שלב ב': חלוקת מספרים. 16 למעלה ו-8 למטה נותנים 2 למעלה.&rlm;", math_expression: "[(x - 1) : 1] × [2 : (1 - x)]" },
            { verbal_explanation: "שלב ג': הביטויים נגדיים ולכן חלוקתם שווה למינוס 1.&rlm;", math_expression: "-1 × 2 = -2" }
        ],
        final_answer: "-2"
    },

    // ==========================================================
    // תת נושא 3: חיבור וחיסור שברים אלגבריים (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור שברים בעלי מכנה משותף. פשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2x + 3) : 5 + (3x - 3) : 5 = ?</div>",
        options: ["x", "x + 6", "(5x + 6) : 5", "5x"],
        correctAnswer: 0,
        hint: "מכיוון שהמכנה כבר זהה, פשוט חברו את המונים וכנסו איברים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה זהה (5), לכן נרשום הכל יחד.&rlm;", math_expression: "(2x + 3 + 3x - 3) : 5" },
            { verbal_explanation: "שלב ב': נכנס איברים במונה. הפלוס 3 והמינוס 3 מתבטלים.&rlm;", math_expression: "5x : 5" },
            { verbal_explanation: "שלב ג': נצמצם את ה-5.&rlm;", math_expression: "x" }
        ],
        final_answer: "x"
    },
    // שאלה 26
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיסור שברים עם אותו מכנה. פתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(5x - 2) : 4 - (x - 2) : 4 = ?</div>",
        options: ["x", "x - 1", "(4x - 4) : 4", "x - 4"],
        correctAnswer: 0,
        hint: "זהירות! סימן המינוס מתייחס ל*כל* המונה השני. השתמשו בסוגריים: - (x - 2).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום תחת קו שבר משותף עם סוגריים למונה השני.&rlm;", math_expression: "[5x - 2 - (x - 2)] : 4" },
            { verbal_explanation: "שלב ב': נפתח סוגריים במונה. המינוס הופך סימנים.&rlm;", math_expression: "(5x - 2 - x + 2) : 4" },
            { verbal_explanation: "שלב ג': נכנס איברים (מינוס 2 ופלוס 2 מתבטלים).&rlm;", math_expression: "4x : 4" },
            { verbal_explanation: "שלב ד': נצמצם.&rlm;", math_expression: "x" }
        ],
        final_answer: "x"
    },
    // שאלה 27
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "מציאת מכנה משותף למספרים. חשבו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>x : 2 + x : 3 = ?</div>",
        options: ["5x : 6", "2x : 5", "x : 5", "x : 6"],
        correctAnswer: 0,
        hint: "המכנה המשותף הקטן ביותר הוא 6. הרחיבו את הראשון ב-3, ואת השני ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה המשותף המינימלי הוא 6.&rlm;", math_expression: "M = 6" },
            { verbal_explanation: "שלב ב': נרחיב את השבר הראשון פי 3.&rlm;", math_expression: "3x : 6" },
            { verbal_explanation: "שלב ג': נרחיב את השבר השני פי 2.&rlm;", math_expression: "2x : 6" },
            { verbal_explanation: "שלב ד': נחבר את המונים.&rlm;", math_expression: "(3x + 2x) : 6 = 5x : 6" }
        ],
        final_answer: "5x : 6"
    },
    // שאלה 28
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "מכנה משותף עם ביטויים. פשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 1) : 3 - (x - 1) : 2 = ?</div>",
        options: ["(5 - x) : 6", "(-x + 5) : 5", "(x + 5) : 6", "(-x - 1) : 6"],
        correctAnswer: 0,
        hint: "מכנה משותף 6. כפלו את המונה הראשון ב-2, ואת המונה השני ב-3. אל תשכחו את המינוס!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מכנה משותף 6. נרחיב.&rlm;", math_expression: "[2(x + 1) - 3(x - 1)] : 6" },
            { verbal_explanation: "שלב ב': נפתח סוגריים במונה (שימו לב להכפלה במינוס 3).&rlm;", math_expression: "(2x + 2 - 3x + 3) : 6" },
            { verbal_explanation: "שלב ג': נכנס איברים.&rlm;", math_expression: "(-x + 5) : 6" },
            { verbal_explanation: "ניתן לכתוב זאת גם כך:&rlm;", math_expression: "(5 - x) : 6" }
        ],
        final_answer: "(5 - x) : 6"
    },
    // שאלה 29
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור שברים שהמכנה שלהם הוא נעלם. מהי התוצאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4 : x + 5 : x = ?</div>",
        options: ["9 : x", "9 : x²", "9 : 2x", "20 : x"],
        correctAnswer: 0,
        hint: "המכנה (x) זהה בשני השברים. פשוט חברו מונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "כאשר המכנה זהה, אנו מעתיקים אותו ורק מחברים את המונים.&rlm;", math_expression: "(4 + 5) : x" },
            { verbal_explanation: "נחבר.&rlm;", math_expression: "9 : x" }
        ],
        final_answer: "9 : x"
    },
    // שאלה 30
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "מכנים דומים, אבל לא זהים. מצאו מכנה משותף ופתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3 : x - 1 : 2x = ?</div>",
        options: ["5 : 2x", "2 : x", "5 : x", "2 : 2x"],
        correctAnswer: 0,
        hint: "המכנה הראשון הוא x. השני הוא 2x. המכנה המשותף הוא 2x. הרחיבו רק את הראשון פי 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה המשותף הוא 2x. נרחיב את השבר הראשון פי 2.&rlm;", math_expression: "(3 × 2) : (x × 2) = 6 : 2x" },
            { verbal_explanation: "שלב ב': השבר השני נשאר ללא שינוי.&rlm;", math_expression: "6 : 2x - 1 : 2x" },
            { verbal_explanation: "שלב ג': נחסר את המונים.&rlm;", math_expression: "(6 - 1) : 2x = 5 : 2x" }
        ],
        final_answer: "5 : 2x"
    },
    // שאלה 31
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "פשטו את התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2x : 5 + x : 10 = ?</div>",
        options: ["x : 2", "3x : 15", "5x : 10", "3x : 10"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא 10. הרחיבו את הראשון פי 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרחיב את השבר הראשון למכנה 10.&rlm;", math_expression: "(2x × 2) : (5 × 2) = 4x : 10" },
            { verbal_explanation: "שלב ב': נחבר את השברים.&rlm;", math_expression: "4x : 10 + x : 10 = 5x : 10" },
            { verbal_explanation: "שלב ג': נצמצם ב-5.&rlm;", math_expression: "x : 2" }
        ],
        final_answer: "x : 2"
    },
    // שאלה 32
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור שברים עם ביטויים במכנה (מכנה זהה):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 : (x - 2) + 3 : (x - 2) = ?</div>",
        options: ["8 : (x - 2)", "8 : (2x - 4)", "15 : (x - 2)", "8 : x"],
        correctAnswer: 0,
        hint: "המכנים זהים לחלוטין. חברו את המונים ואל תגעו במכנה!&rlm;",
        solution_steps: [
            { verbal_explanation: "מכיוון שהמכנים שווים, נעתיק את המכנה ונחבר את המונים.&rlm;", math_expression: "(5 + 3) : (x - 2)" },
            { verbal_explanation: "נחשב ונקבל את התוצאה הסופית.&rlm;", math_expression: "8 : (x - 2)" }
        ],
        final_answer: "8 : (x - 2)"
    },
    // שאלה 33
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "מה תהיה התוצאה של חיסור השברים הללו?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7 : (x + 1) - 7 : (x + 1) = ?</div>",
        options: ["0", "14 : (x + 1)", "1", "7"],
        correctAnswer: 0,
        hint: "אנחנו מחסרים מאובייקט בדיוק את אותו האובייקט.&rlm;",
        solution_steps: [
            { verbal_explanation: "שני השברים זהים לחלוטין. חיסור של ביטוי מעצמו נותן אפס.&rlm;", math_expression: "0 : (x + 1) = 0" }
        ],
        final_answer: "0"
    },
    // שאלה 34
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "פשטו את התרגיל:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3x : 4 - x : 2 = ?</div>",
        options: ["x : 4", "2x : 2", "x : 2", "x : 8"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא 4. הרחיבו את השני פי 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרחיב את השבר השני למכנה 4.&rlm;", math_expression: "(x × 2) : (2 × 2) = 2x : 4" },
            { verbal_explanation: "שלב ב': נחסר את המונים.&rlm;", math_expression: "3x : 4 - 2x : 4 = x : 4" }
        ],
        final_answer: "x : 4"
    },
    // שאלה 35
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "מצאו מכנה משותף מינימלי ופתרו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 : 3x + 1 : x = ?</div>",
        options: ["5 : 3x", "3 : 4x", "5 : 4x", "11 : 3x"],
        correctAnswer: 0,
        hint: "המכנה המשותף הוא 3x. הרחיבו את השבר השני פי 3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרחיב את השבר השני פי 3.&rlm;", math_expression: "(1 × 3) : (x × 3) = 3 : 3x" },
            { verbal_explanation: "שלב ב': נחבר את המונים.&rlm;", math_expression: "(2 + 3) : 3x = 5 : 3x" }
        ],
        final_answer: "5 : 3x"
    },
    // שאלה 36
    {
        topic: "algebraic_fractions",
        subTopic: "חיבור וחיסור שברים אלגבריים",
        question_text: "חיבור עם מספר איברים במונה. פתרו ופשטו:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 2) : 3 + (x + 4) : 3 = ?</div>",
        options: ["(2x + 6) : 3", "(x + 6) : 3", "(2x + 8) : 3", "2x + 2"],
        correctAnswer: 0,
        hint: "המכנה זהה. חברו את המונים וכנסו איברים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום הכל מעל מכנה יחיד.&rlm;", math_expression: "(x + 2 + x + 4) : 3" },
            { verbal_explanation: "שלב ב': נכנס איברים (x ועוד x זה 2x. ו-2+4 זה 6).&rlm;", math_expression: "(2x + 6) : 3" }
        ],
        final_answer: "(2x + 6) : 3"
    },

    // ==========================================================
    // תת נושא 4: תחום הצבה (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מהו תחום ההצבה של הביטוי הבא? כלומר, איזה מספר אסור להציב במקום x?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 : x</div>",
        options: ["x ≠ 0", "כל מספר חיובי", "x ≠ 5", "כל המספרים מותרים"],
        correctAnswer: 0,
        hint: "הכלל החשוב ביותר: אסור לחלק באפס!&rlm;",
        solution_steps: [
            { verbal_explanation: "תחום הצבה קובע אילו ערכים חוקיים להצבה במשתנה, כדי שהביטוי יהיה מוגדר.&rlm;", math_expression: "" },
            { verbal_explanation: "המכנה לא יכול להיות אפס. במקרה זה, המכנה הוא x, ולכן x שונה מאפס.&rlm;", math_expression: "x ≠ 0" }
        ],
        final_answer: "x ≠ 0"
    },
    // שאלה 38
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מהי ההגבלה על המשתנה x בביטוי האלגברי הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>8 : (x - 4)</div>",
        options: ["x ≠ 4", "x ≠ -4", "x ≠ 8", "x ≠ 0"],
        correctAnswer: 0,
        hint: "קחו את המכנה והשוו לאפס (x - 4 = 0). פתרו כדי למצוא את הערך האסור.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש שהמכנה שונה מאפס.&rlm;", math_expression: "x - 4 ≠ 0" },
            { verbal_explanation: "שלב ב': נעביר את 4 ימינה בחיבור.&rlm;", math_expression: "x ≠ 4" }
        ],
        final_answer: "x ≠ 4"
    },
    // שאלה 39
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מצאו את תחום ההצבה של הביטוי:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 2) : (x + 7)</div>",
        options: ["x ≠ -7", "x ≠ 7", "x ≠ -2", "x ≠ 0"],
        correctAnswer: 0,
        hint: "המונה לא מעניין אותנו. רק המכנה חייב להיות שונה מאפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נתעלם מהמונה. המכנה הוא (x + 7).&rlm;", math_expression: "x + 7 ≠ 0" },
            { verbal_explanation: "שלב ב': נעביר את 7 אגף (במינוס).&rlm;", math_expression: "x ≠ -7" }
        ],
        final_answer: "x ≠ -7"
    },
    // שאלה 40
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מה קורה כשיש מקדם ל-x? מהו תחום ההצבה של:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>10 : 3x</div>",
        options: ["x ≠ 0", "x ≠ 3", "x ≠ -3", "x ≠ 10"],
        correctAnswer: 0,
        hint: "המכנה הוא 3 כפול x. רק כפל באפס ייתן אפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': התנאי למכנה.&rlm;", math_expression: "3x ≠ 0" },
            { verbal_explanation: "שלב ב': נחלק ב-3. אפס חלקי 3 זה אפס.&rlm;", math_expression: "x ≠ 0" }
        ],
        final_answer: "x ≠ 0"
    },
    // שאלה 41
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מהו תחום ההצבה של הביטוי הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5 : (2x - 10)</div>",
        options: ["x ≠ 5", "x ≠ 10", "x ≠ -5", "x ≠ 2"],
        correctAnswer: 0,
        hint: "קחו את המכנה והשוו לאפס. העבירו 10 וחלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': דרישת המכנה.&rlm;", math_expression: "2x - 10 ≠ 0" },
            { verbal_explanation: "שלב ב': נעביר 10 ימינה.&rlm;", math_expression: "2x ≠ 10" },
            { verbal_explanation: "שלב ג': נחלק ב-2.&rlm;", math_expression: "x ≠ 5" }
        ],
        final_answer: "x ≠ 5"
    },
    // שאלה 42
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מלכודת קלאסית! מהו תחום ההצבה של הביטוי הבא? (בדקו את התחום *לפני* שאתם מצמצמים!)&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x - 3) : (x - 3)</div>",
        options: ["x ≠ 3", "כל מספר", "x ≠ 0", "x ≠ -3"],
        correctAnswer: 0,
        hint: "אסור לצמצם ולטעון שהתחום הוא הכל. התחום תמיד נקבע לפי הביטוי הראשוני.&rlm;",
        solution_steps: [
            { verbal_explanation: "תחום הצבה תמיד נקבע מהביטוי המקורי בדיוק כפי שנכתב.&rlm;", math_expression: "" },
            { verbal_explanation: "המכנה המקורי הוא x-3.&rlm;", math_expression: "x - 3 ≠ 0" },
            { verbal_explanation: "לכן אסור להציב 3, אפילו שאם נצמצם נקבל 1.&rlm;", math_expression: "x ≠ 3" }
        ],
        final_answer: "x ≠ 3"
    },
    // שאלה 43
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מכנה של חזקה. מהן ההגבלות על x בביטוי הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 : (x² - 16)</div>",
        options: ["x ≠ 4 וגם x ≠ -4", "x ≠ 16", "x ≠ 4", "x ≠ -16"],
        correctAnswer: 0,
        hint: "אילו שני מספרים שנעלה בריבוע ייתנו 16?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה שונה מאפס.&rlm;", math_expression: "x² - 16 ≠ 0" },
            { verbal_explanation: "שלב ב': העברת אגף.&rlm;", math_expression: "x² ≠ 16" },
            { verbal_explanation: "שלב ג': שורש ריבועי מניב שתי תוצאות - חיובית ושלילית.&rlm;", math_expression: "x ≠ 4 , x ≠ -4" }
        ],
        final_answer: "x ≠ 4 וגם x ≠ -4"
    },
    // שאלה 44
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מכנה המורכב ממכפלה. מהו תחום ההצבה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>7 : (x(x - 2))</div>",
        options: ["x ≠ 0 וגם x ≠ 2", "x ≠ 2", "x ≠ 0", "x ≠ 7"],
        correctAnswer: 0,
        hint: "בכפל, מספיק שגורם אחד יהיה 0 כדי שהכל יתאפס. לכן שני הגורמים חייבים להיות שונים מאפס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': המכנה בנוי משני גורמים.&rlm;", math_expression: "x × (x - 2) ≠ 0" },
            { verbal_explanation: "שלב ב': נדרוש מהגורם הראשון לא להיות אפס.&rlm;", math_expression: "x ≠ 0" },
            { verbal_explanation: "שלב ג': נדרוש מהגורם השני לא להיות אפס.&rlm;", math_expression: "x - 2 ≠ 0  =>  x ≠ 2" }
        ],
        final_answer: "x ≠ 0 וגם x ≠ 2"
    },
    // שאלה 45
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "היזהרו מהשאלה הזו! מהו תחום ההצבה של הביטוי?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4 : (x² + 5)</div>",
        options: ["כל x מותר (אין הגבלה)", "x ≠ 5", "x ≠ -5", "x ≠ 0"],
        correctAnswer: 0,
        hint: "נסו לחשוב: האם קיים מספר בעולם, שכאשר נעלה אותו בריבוע ונוסיף 5, ייתן אפס? x² תמיד חיובי או אפס!&rlm;",
        solution_steps: [
            { verbal_explanation: "נדרוש שהמכנה שונה מאפס.&rlm;", math_expression: "x² + 5 ≠ 0" },
            { verbal_explanation: "נעביר 5 אגף.&rlm;", math_expression: "x² ≠ -5" },
            { verbal_explanation: "כיוון ש-x² הוא תמיד אי-שלילי (חיובי או אפס), הוא לעולם לא יהיה שווה למינוס 5.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן המכנה לעולם לא מתאפס. אין הגבלות!&rlm;", math_expression: "" }
        ],
        final_answer: "כל x מותר (אין הגבלה)"
    },
    // שאלה 46
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מהי ההגבלה על x במקרה הבא?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>12 : (5 - x)</div>",
        options: ["x ≠ 5", "x ≠ -5", "x ≠ 12", "x ≠ 0"],
        correctAnswer: 0,
        hint: "איזה מספר נציב ב-x כדי ש-5 פחות x יהיה שווה אפס?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את התנאי על המכנה.&rlm;", math_expression: "5 - x ≠ 0" },
            { verbal_explanation: "שלב ב': נעביר את x ימינה (כדי שיהפוך לחיובי).&rlm;", math_expression: "5 ≠ x" }
        ],
        final_answer: "x ≠ 5"
    },
    // שאלה 47
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "תחום הצבה לתרגיל עם שני שברים נפרדים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>1 : x + 1 : (x + 1) = ?</div>",
        options: ["x ≠ 0 וגם x ≠ -1", "x ≠ 1", "x ≠ 0", "x ≠ -1"],
        correctAnswer: 0,
        hint: "אף אחד מהמכנים לא יכול להיות אפס. מצאו את ההגבלה של כל אחד בנפרד.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק את המכנה השמאלי.&rlm;", math_expression: "x ≠ 0" },
            { verbal_explanation: "שלב ב': נבדוק את המכנה הימני.&rlm;", math_expression: "x + 1 ≠ 0  =>  x ≠ -1" },
            { verbal_explanation: "שלב ג': התחום הסופי הוא האיחוד של שתי ההגבלות.&rlm;", math_expression: "x ≠ 0 , x ≠ -1" }
        ],
        final_answer: "x ≠ 0 וגם x ≠ -1"
    },
    // שאלה 48
    {
        topic: "algebraic_fractions",
        subTopic: "תחום הצבה",
        question_text: "מצאו את ההגבלה לביטוי הבא (המונה לא רלוונטי):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(2x + 1) : (4x + 12)</div>",
        options: ["x ≠ -3", "x ≠ 3", "x ≠ -1.5", "x ≠ 12"],
        correctAnswer: 0,
        hint: "השוו את המכנה 4x+12 לאפס ופתרו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נדרוש מהמכנה להיות שונה מאפס.&rlm;", math_expression: "4x + 12 ≠ 0" },
            { verbal_explanation: "שלב ב': נעביר 12 אגף.&rlm;", math_expression: "4x ≠ -12" },
            { verbal_explanation: "שלב ג': נחלק ב-4.&rlm;", math_expression: "x ≠ -3" }
        ],
        final_answer: "x ≠ -3"
    }

];