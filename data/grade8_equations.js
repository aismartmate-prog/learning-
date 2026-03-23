const questionsDB = [
    // ==========================================
    // תת נושא 1: משוואות עם מכנה מספרי (10 שאלות)
    // ==========================================
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה הבאה: \\( \\frac{x}{3} = 4 \\)&rlm;",
        "options": ["12", "7", "1", "1.33"],
        "correctAnswer": 0,
        "hint": "קו שבר מייצג חילוק. כדי לבטל אותו, כפלו את שני האגפים במכנה.",
        "solution_steps": [
            { "verbal_explanation": "המשוואה מציגה משתנה המחולק במספר שלוש.", "math_expression": "\\frac{x}{3} = 4" },
            { "verbal_explanation": "כדי לבטל את המכנה ולבודד את המשתנה, נכפול את שני אגפי המשוואה בשלוש.", "math_expression": "\\times 3" },
            { "verbal_explanation": "באגף שמאל, המכנה מצטמצם ונשאר רק המשתנה.", "math_expression": "x" },
            { "verbal_explanation": "באגף ימין, נכפול את המספר ארבע בשלוש.", "math_expression": "4 \\times 3" },
            { "verbal_explanation": "נחשב את המכפלה ונקבל את התשובה הסופית.", "math_expression": "x = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה: \\( \\frac{x}{5} + 2 = 7 \\)&rlm;",
        "options": ["25", "10", "35", "5"],
        "correctAnswer": 0,
        "hint": "העבירו תחילה את המספר 2 לאגף הימני בעזרת חיסור, ורק לאחר מכן כפלו במכנה.",
        "solution_steps": [
            { "verbal_explanation": "תחילה נבודד את השבר על ידי ביטול פעולת החיבור.", "math_expression": "\\frac{x}{5} + 2 = 7" },
            { "verbal_explanation": "נחסר שתיים משני אגפי המשוואה.", "math_expression": "7 - 2 = 5" },
            { "verbal_explanation": "נקבל משוואה חדשה שבה השבר שווה לחמש.", "math_expression": "\\frac{x}{5} = 5" },
            { "verbal_explanation": "כדי להיפטר מהמכנה, נכפול את שני האגפים בחמש.", "math_expression": "\\times 5" },
            { "verbal_explanation": "נחשב את אגף ימין ונקבל את הפתרון.", "math_expression": "x = 25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה: \\( \\frac{2x}{7} = 4 \\)&rlm;",
        "options": ["14", "28", "2", "12"],
        "correctAnswer": 0,
        "hint": "כפלו ב-7 כדי לבטל את המכנה, ולאחר מכן חלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נבטל את קו השבר על ידי הכפלת שני צידי המשוואה בשבע.", "math_expression": "\\times 7" },
            { "verbal_explanation": "באגף ימין נחשב את הכפל של ארבע בשבע.", "math_expression": "4 \\times 7 = 28" },
            { "verbal_explanation": "המשוואה המעודכנת היא שני איקס שווה עשרים ושמונה.", "math_expression": "2x = 28" },
            { "verbal_explanation": "נחלק את המשוואה בשתיים כדי למצוא את המשתנה הבודד.", "math_expression": "28 \\div 2" },
            { "verbal_explanation": "הפתרון הוא ארבע עשרה.", "math_expression": "x = 14" }
        ],
        "final_answer": "14"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "מצאו את הערך של \\( x \\): \\( \\frac{x - 1}{2} = 5 \\)&rlm;",
        "options": ["11", "9", "6", "12"],
        "correctAnswer": 0,
        "hint": "כפלו קודם ב-2. המונה יישאר כמו שהוא (x-1). אז הוסיפו 1.",
        "solution_steps": [
            { "verbal_explanation": "כל המונה מחולק בשתיים. נכפול את שני האגפים בשתיים כדי לבטל את המכנה.", "math_expression": "\\times 2" },
            { "verbal_explanation": "באגף שמאל יישאר רק המונה. באגף ימין נכפול חמש בשתיים.", "math_expression": "x - 1 = 10" },
            { "verbal_explanation": "כדי לבודד את המשתנה, נבטל את החיסור על ידי הוספת אחד לשני האגפים.", "math_expression": "+ 1" },
            { "verbal_explanation": "נחבר באגף ימין למציאת התשובה.", "math_expression": "10 + 1 = 11" },
            { "verbal_explanation": "התוצאה הסופית היא אחת עשרה.", "math_expression": "x = 11" }
        ],
        "final_answer": "11"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה הבאה המכילה שני שברים: \\( \\frac{x}{2} + \\frac{x}{3} = 5 \\)&rlm;",
        "options": ["6", "5", "10", "30"],
        "correctAnswer": 0,
        "hint": "כפלו את כל המשוואה במכנה המשותף הקטן ביותר, שהוא 6.",
        "solution_steps": [
            { "verbal_explanation": "נמצא מכנה משותף לשניים ולשלוש, שהוא שש. נכפול את כל המשוואה בשש.", "math_expression": "\\times 6" },
            { "verbal_explanation": "נכפול את השבר הראשון בשש. שש לחלק לשתיים זה שלוש, לכן נקבל שלושה איקס.", "math_expression": "3x" },
            { "verbal_explanation": "נכפול את השבר השני בשש. שש לחלק לשלוש זה שתיים, לכן נקבל שני איקס.", "math_expression": "2x" },
            { "verbal_explanation": "נכפול גם את האגף הימני בשש.", "math_expression": "5 \\times 6 = 30" },
            { "verbal_explanation": "נחבר את האיברים בצד שמאל ונרשום משוואה חדשה.", "math_expression": "5x = 30" },
            { "verbal_explanation": "נחלק בחמש לקבלת הפתרון הסופי.", "math_expression": "x = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה: \\( \\frac{3x}{4} - \\frac{x}{2} = 2 \\)&rlm;",
        "options": ["8", "4", "2", "6"],
        "correctAnswer": 0,
        "hint": "המכנה המשותף הוא 4. כפלו את כל המשוואה ב-4.",
        "solution_steps": [
            { "verbal_explanation": "נבחר להכפיל את כל המשוואה במכנה משותף ארבע כדי לבטל את השברים.", "math_expression": "\\times 4" },
            { "verbal_explanation": "השבר הראשון מוכפל בארבע, ולכן המכנה מצטמצם ונשאר רק המונה.", "math_expression": "3x" },
            { "verbal_explanation": "השבר השני מוכפל בארבע. ארבע לחלק לשתיים שווה שתיים, לכן המונה יוכפל בשתיים.", "math_expression": "2x" },
            { "verbal_explanation": "האגף הימני גם הוא מוכפל בארבע.", "math_expression": "2 \\times 4 = 8" },
            { "verbal_explanation": "נכתוב את המשוואה המלאה וללא שברים.", "math_expression": "3x - 2x = 8" },
            { "verbal_explanation": "נחסר את האיברים ונקבל את התשובה ישירות.", "math_expression": "x = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה (היעזרו בכפל בהצלבה): \\( \\frac{x + 3}{5} = \\frac{x}{2} \\)&rlm;",
        "options": ["2", "3", "5", "1"],
        "correctAnswer": 0,
        "hint": "כאשר שבר שווה לשבר, ניתן לכפול את המונה של האחד במכנה של השני.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בשיטת כפל בהצלבה כדי להיפטר מהשברים.", "math_expression": "\\frac{x + 3}{5} = \\frac{x}{2}" },
            { "verbal_explanation": "נכפול את המונה השמאלי במכנה הימני, ונסדר בסוגריים.", "math_expression": "2(x + 3)" },
            { "verbal_explanation": "נכפול את המונה הימני במכנה השמאלי.", "math_expression": "5x" },
            { "verbal_explanation": "נשווה בין המכפלות ונפתח את הסוגריים.", "math_expression": "2x + 6 = 5x" },
            { "verbal_explanation": "נחסר שני איקס משני הצדדים כדי להעביר את המשתנים יחד.", "math_expression": "6 = 3x" },
            { "verbal_explanation": "נחלק בשלוש למציאת הפתרון.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה הבאה: \\( \\frac{4x - 2}{3} = 6 \\)&rlm;",
        "options": ["5", "4", "20", "10"],
        "correctAnswer": 0,
        "hint": "כפלו את המשוואה ב-3. לאחר מכן פתרו את המשוואה הליניארית הרגילה שנוצרה.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המשוואה כולה בשלוש כדי לצמצם את המכנה.", "math_expression": "\\times 3" },
            { "verbal_explanation": "באגף שמאל נותר המונה המקורי. באגף ימין נכפול שש בשלוש.", "math_expression": "4x - 2 = 18" },
            { "verbal_explanation": "נוסיף שתיים לשני הצדדים כדי להתחיל לבודד את המשתנה.", "math_expression": "18 + 2 = 20" },
            { "verbal_explanation": "נקבל ארבעה איקס שווה לעשרים.", "math_expression": "4x = 20" },
            { "verbal_explanation": "נחלק בארבע ונגיע לפתרון.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה הבאה: \\( \\frac{x}{4} - 1 = \\frac{x}{5} \\)&rlm;",
        "options": ["20", "10", "4", "5"],
        "correctAnswer": 0,
        "hint": "מכנה משותף של 4 و-5 הוא 20. כפלו את כל איברי המשוואה (כולל ה-1) ב-20.",
        "solution_steps": [
            { "verbal_explanation": "נמצא מכנה משותף לשברים שהוא עשרים. נכפול את המשוואה כולה בעשרים.", "math_expression": "\\times 20" },
            { "verbal_explanation": "האיבר הראשון כפול עשרים שווה לחמישה איקס.", "math_expression": "5x" },
            { "verbal_explanation": "המספר השלם כפול עשרים שווה לעשרים.", "math_expression": "-20" },
            { "verbal_explanation": "האיבר הימני כפול עשרים שווה לארבעה איקס.", "math_expression": "4x" },
            { "verbal_explanation": "המשוואה החדשה היא חמישה איקס פחות עשרים שווה לארבעה איקס.", "math_expression": "5x - 20 = 4x" },
            { "verbal_explanation": "נחסר ארבעה איקס ונוסיף עשרים לשני האגפים כדי לפתור.", "math_expression": "x = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם מכנה מספרי",
        "question_text": "פתרו את המשוואה הבאה: \\( \\frac{x + 4}{2} + \\frac{x}{3} = 7 \\)&rlm;",
        "options": ["6", "10", "4", "12"],
        "correctAnswer": 0,
        "hint": "המכנה המשותף הוא 6. הכפילו את השבר הראשון ב-3 (אל תשכחו סוגריים למונה), את השני ב-2, ואת 7 ב-6.",
        "solution_steps": [
            { "verbal_explanation": "נכפיל את כל המשוואה בשש כדי להיפטר מהמכנים.", "math_expression": "\\times 6" },
            { "verbal_explanation": "השבר הראשון מוכפל בשלוש, יש לשים סוגריים על המונה.", "math_expression": "3(x + 4)" },
            { "verbal_explanation": "השבר השני מוכפל בשתיים.", "math_expression": "2x" },
            { "verbal_explanation": "האגף הימני יוכפל בשש.", "math_expression": "7 \\times 6 = 42" },
            { "verbal_explanation": "נכתוב את המשוואה המלאה ונפתח סוגריים.", "math_expression": "3x + 12 + 2x = 42" },
            { "verbal_explanation": "נכנס איברים ונחסר שנים עשר משני הצדדים.", "math_expression": "5x = 30 \\Rightarrow x = 6" }
        ],
        "final_answer": "6"
    },

    // ==========================================
    // תת נושא 2: משוואות עם נעלם במכנה (10 שאלות)
    // ==========================================
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה הבאה: \\( \\frac{10}{x} = 2 \\)&rlm;",
        "options": ["5", "20", "8", "12"],
        "correctAnswer": 0,
        "hint": "כפלו את שני האגפים ב-x כדי להעלות אותו מהמכנה למונה, ואז חלקו ב-2.",
        "solution_steps": [
            { "verbal_explanation": "כאשר המשתנה נמצא במכנה, עלינו להעלות אותו למעלה. נכפול את המשוואה באיקס.", "math_expression": "\\times x" },
            { "verbal_explanation": "באגף השמאלי האיקס יצטמצם ויישאר עשר. באגף הימני נקבל פעמיים איקס.", "math_expression": "10 = 2x" },
            { "verbal_explanation": "נחלק את המשוואה בשתיים כדי לבודד את המשתנה.", "math_expression": "10 \\div 2" },
            { "verbal_explanation": "התוצאה היא חמש.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה: \\( \\frac{12}{x} = 4 \\)&rlm;",
        "options": ["3", "48", "8", "16"],
        "correctAnswer": 0,
        "hint": "המשמעות היא: באיזה מספר נחלק את 12 כדי לקבל 4?",
        "solution_steps": [
            { "verbal_explanation": "נכפול את שני אגפי המשוואה במשתנה שבמכנה.", "math_expression": "\\times x" },
            { "verbal_explanation": "נרשום את המשוואה החדשה, שבה המשתנה נמצא כעת בשורה אחת עם המספרים.", "math_expression": "12 = 4x" },
            { "verbal_explanation": "כדי למצוא את המשתנה, נחלק את שני הצדדים בארבע.", "math_expression": "12 \\div 4" },
            { "verbal_explanation": "נחשב ונקבל את הפתרון.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "מצאו את הערך של \\( x \\) במשוואה: \\( \\frac{15}{x} + 2 = 7 \\)&rlm;",
        "options": ["3", "5", "10", "15"],
        "correctAnswer": 0,
        "hint": "הסירו תחילה את ה-2 מאגף שמאל על ידי חיסור. רק אז טפלו בשבר.",
        "solution_steps": [
            { "verbal_explanation": "נבודד את השבר על ידי חיסור שתיים משני אגפי המשוואה.", "math_expression": "7 - 2 = 5" },
            { "verbal_explanation": "נקבל משוואה שבה חמש עשרה לחלק למשתנה שווה לחמש.", "math_expression": "\\frac{15}{x} = 5" },
            { "verbal_explanation": "נכפול את המשוואה במשתנה כדי להעלותו למונה.", "math_expression": "15 = 5x" },
            { "verbal_explanation": "נחלק בחמש את שני האגפים.", "math_expression": "15 \\div 5" },
            { "verbal_explanation": "הפתרון הוא שלוש.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה הבאה: \\( \\frac{20}{x - 1} = 5 \\)&rlm;",
        "options": ["5", "4", "6", "21"],
        "correctAnswer": 0,
        "hint": "המכנה כולו הוא (x-1). כפלו את שני האגפים ב-(x-1).",
        "solution_steps": [
            { "verbal_explanation": "המכנה כולו מכיל ביטוי עם משתנה. נכפול את המשוואה בכל המכנה הזה.", "math_expression": "\\times (x - 1)" },
            { "verbal_explanation": "באגף שמאל יישאר המונה, ובאגף ימין המכנה יוכפל בחמש.", "math_expression": "20 = 5(x - 1)" },
            { "verbal_explanation": "נחלק את המשוואה בחמש כדי להעלים את הסוגריים.", "math_expression": "20 \\div 5 = 4" },
            { "verbal_explanation": "נרשום משוואה פשוטה ונפתור אותה על ידי הוספת אחד.", "math_expression": "4 = x - 1 \\Rightarrow x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה: \\( \\frac{8}{2x} = 2 \\)&rlm;",
        "options": ["2", "4", "8", "1"],
        "correctAnswer": 0,
        "hint": "ניתן לצמצם את השבר (לחלק מונה ומכנה ב-2) לפני שממשיכים בפתרון.",
        "solution_steps": [
            { "verbal_explanation": "אפשר לפשט את השבר על ידי חלוקת המונה והמכנה בשתיים.", "math_expression": "\\frac{8}{2x} = \\frac{4}{x}" },
            { "verbal_explanation": "המשוואה המפושטת היא ארבע לחלק למשתנה שווה שתיים.", "math_expression": "\\frac{4}{x} = 2" },
            { "verbal_explanation": "נכפול במשתנה כדי להעלותו למונה.", "math_expression": "4 = 2x" },
            { "verbal_explanation": "נחלק בשתיים לקבלת הפתרון הסופי.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "מצאו את הערך של \\( x \\): \\( \\frac{14}{x + 2} = 2 \\)&rlm;",
        "options": ["5", "7", "9", "12"],
        "correctAnswer": 0,
        "hint": "כפלו את כל המשוואה ב-(x+2), או לחלופין, חשבו: איזה מספר במכנה ייתן את התוצאה 2?",
        "solution_steps": [
            { "verbal_explanation": "נכפול את שני אגפי המשוואה במכנה השלם המכיל את המשתנה.", "math_expression": "\\times (x + 2)" },
            { "verbal_explanation": "נקבל משוואה שבה האגף הימני כולל סוגריים.", "math_expression": "14 = 2(x + 2)" },
            { "verbal_explanation": "נחלק את המשוואה בשתיים.", "math_expression": "14 \\div 2 = 7" },
            { "verbal_explanation": "נקבל שבע שווה לביטוי שבתוך הסוגריים.", "math_expression": "7 = x + 2" },
            { "verbal_explanation": "נחסר שתיים ונמצא את התשובה.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה הבאה בעזרת כפל בהצלבה: \\( \\frac{6}{x} = \\frac{3}{2} \\)&rlm;",
        "options": ["4", "9", "1", "12"],
        "correctAnswer": 0,
        "hint": "כפלו את המונה של צד אחד במכנה של הצד השני, והשוו למכפלת הזוג הנותר.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בשיטת הכפל בהצלבה הפותרת משוואות של שבר שווה לשבר.", "math_expression": "\\frac{6}{x} = \\frac{3}{2}" },
            { "verbal_explanation": "נכפול את המונה השמאלי במכנה הימני.", "math_expression": "6 \\times 2 = 12" },
            { "verbal_explanation": "נכפול את המכנה השמאלי במונה הימני.", "math_expression": "3 \\times x = 3x" },
            { "verbal_explanation": "נשווה בין המכפלות.", "math_expression": "3x = 12" },
            { "verbal_explanation": "נחלק בשלוש למציאת הפתרון.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה: \\( \\frac{18}{x - 3} = 6 \\)&rlm;",
        "options": ["6", "3", "9", "21"],
        "correctAnswer": 0,
        "hint": "כפלו את המשוואה ב-(x-3).",
        "solution_steps": [
            { "verbal_explanation": "נכפול את המשוואה כולה בביטוי שנמצא במכנה.", "math_expression": "\\times (x - 3)" },
            { "verbal_explanation": "נקבל משוואה שבה המכנה עבר לאגף הימני ונכפל בשש.", "math_expression": "18 = 6(x - 3)" },
            { "verbal_explanation": "נחלק את המשוואה בשש כדי להעלים את המקדם של הסוגריים.", "math_expression": "18 \\div 6 = 3" },
            { "verbal_explanation": "נשווה את התוצאה לתוכן הסוגריים ונוסיף שלוש.", "math_expression": "3 = x - 3 \\Rightarrow x = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה הבאה: \\( \\frac{24}{2x + 2} = 4 \\)&rlm;",
        "options": ["2", "4", "10", "6"],
        "correctAnswer": 0,
        "hint": "הכפילו את המשוואה במכנה (2x+2), חלקו ב-4, ופתרו את המשוואה הפשוטה שתתקבל.",
        "solution_steps": [
            { "verbal_explanation": "נכפול את אגפי המשוואה במכנה כולו.", "math_expression": "\\times (2x + 2)" },
            { "verbal_explanation": "נרשום את המשוואה שמתקבלת.", "math_expression": "24 = 4(2x + 2)" },
            { "verbal_explanation": "נחלק בארבע.", "math_expression": "24 \\div 4 = 6" },
            { "verbal_explanation": "נקבל משוואה פשוטה יותר, נחסר ממנה שתיים.", "math_expression": "6 = 2x + 2 \\Rightarrow 4 = 2x" },
            { "verbal_explanation": "נחלק בשתיים למציאת הפתרון.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "משוואות עם נעלם במכנה",
        "question_text": "פתרו את המשוואה המורכבת משני שברים בעלי אותו מכנה: \\( \\frac{5}{x} + \\frac{5}{x} = 2 \\)&rlm;",
        "options": ["5", "10", "2", "2.5"],
        "correctAnswer": 0,
        "hint": "כאשר המכנה שווה, ניתן פשוט לחבר את המונים יחד לשבר אחד.",
        "solution_steps": [
            { "verbal_explanation": "לשני השברים יש מכנה משותף זהה ולכן אפשר לחבר את המונים מיד.", "math_expression": "\\frac{5 + 5}{x} = 2" },
            { "verbal_explanation": "נרשום את השבר החדש שנוצר מחיבור המונים.", "math_expression": "\\frac{10}{x} = 2" },
            { "verbal_explanation": "נכפול במשתנה איקס כדי להעבירו למונה.", "math_expression": "10 = 2x" },
            { "verbal_explanation": "נחלק בשתיים ונגיע לפתרון המבוקש.", "math_expression": "x = 5" }
        ],
        "final_answer": "5"
    },

    // ==========================================
    // תת נושא 3: פתרון אי שוויונות (10 שאלות)
    // ==========================================
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון הבא: \\( x + 4 > 10 \\)&rlm;",
        "options": ["x > 6", "x < 6", "x > 14", "x < 14"],
        "correctAnswer": 0,
        "hint": "פתרון אי שוויון דומה מאוד לפתרון משוואה רגילה. העבירו אגפים תוך שינוי סימן.",
        "solution_steps": [
            { "verbal_explanation": "נתייחס לאי השוויון כמעט כמו אל משוואה וננסה לבודד את המשתנה.", "math_expression": "x + 4 > 10" },
            { "verbal_explanation": "נחסר ארבע משני האגפים.", "math_expression": "- 4" },
            { "verbal_explanation": "נחשב את ההפרש באגף ימין.", "math_expression": "10 - 4 = 6" },
            { "verbal_explanation": "נרשום את התשובה הסופית. סימן אי השוויון נשאר באותו כיוון.", "math_expression": "x > 6" }
        ],
        "final_answer": "x > 6"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון: \\( 2x < 14 \\)&rlm;",
        "options": ["x < 7", "x > 7", "x < 12", "x = 7"],
        "correctAnswer": 0,
        "hint": "חלקו את שני הצדדים ב-2. מכיוון שמחלקים במספר חיובי, כיוון אי השוויון לא משתנה.",
        "solution_steps": [
            { "verbal_explanation": "עלינו לבודד את המשתנה מתוך המכפלה.", "math_expression": "2x < 14" },
            { "verbal_explanation": "נחלק את שני האגפים בשתיים. המספר חיובי ולכן הכיוון נשמר.", "math_expression": "\\div 2" },
            { "verbal_explanation": "נבצע את פעולת החילוק של ארבע עשרה בשתיים.", "math_expression": "14 \\div 2 = 7" },
            { "verbal_explanation": "הפתרון הוא שכל מספר הקטן משבע יקיים את התנאי.", "math_expression": "x < 7" }
        ],
        "final_answer": "x < 7"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון הבא: \\( 3x - 5 > 10 \\)&rlm;",
        "options": ["x > 5", "x < 5", "x > 15", "x < 15"],
        "correctAnswer": 0,
        "hint": "הוסיפו 5 לכל צד, ולאחר מכן חלקו ב-3.",
        "solution_steps": [
            { "verbal_explanation": "נבטל את פעולת החיסור על ידי הוספת חמש לשני האגפים.", "math_expression": "10 + 5 = 15" },
            { "verbal_explanation": "נרשום את אי השוויון המעודכן.", "math_expression": "3x > 15" },
            { "verbal_explanation": "נחלק בשלוש שהוא מספר חיובי. הכיוון נשאר כמו שהוא.", "math_expression": "\\div 3" },
            { "verbal_explanation": "התשובה מציגה את התחום הנכון לפתרון.", "math_expression": "x > 5" }
        ],
        "final_answer": "x > 5"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון: \\( -2x > 8 \\)&rlm;",
        "options": ["x < -4", "x > -4", "x < 4", "x > 4"],
        "correctAnswer": 0,
        "hint": "זהירות! כאשר מחלקים או כופלים את שני האגפים במספר שלילי, חובה להפוך את כיוון סימן אי השוויון.",
        "solution_steps": [
            { "verbal_explanation": "נתון אי שוויון עם מקדם שלילי לפני המשתנה.", "math_expression": "-2x > 8" },
            { "verbal_explanation": "כדי לבודד את המשתנה נחלק את שני האגפים במינוס שתיים.", "math_expression": "\\div -2" },
            { "verbal_explanation": "חשוב מאוד: חלוקה במספר שלילי מחייבת את הפיכת כיוון סימן אי השוויון.", "math_expression": "> \\rightarrow <" },
            { "verbal_explanation": "נחשב את אגף ימין: שמונה לחלק למינוס שתיים.", "math_expression": "8 \\div -2 = -4" },
            { "verbal_explanation": "נרשום את התשובה הסופית וההפוכה.", "math_expression": "x < -4" }
        ],
        "final_answer": "x < -4"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "מצאו את קבוצת הפתרונות של אי השוויון: \\( 5 - x < 2 \\)&rlm;",
        "options": ["x > 3", "x < 3", "x > -3", "x < -3"],
        "correctAnswer": 0,
        "hint": "חסרו 5 משני הצדדים. תקבלו מינוס x קטן ממינוס 3. עכשיו הכפילו במינוס 1 (וזכרו להפוך את הסימן!).",
        "solution_steps": [
            { "verbal_explanation": "נחסר חמש משני האגפים כדי לבודד את המשתנה ואת סימנו.", "math_expression": "2 - 5 = -3" },
            { "verbal_explanation": "נקבל מינוס משתנה קטן ממינוס שלוש.", "math_expression": "-x < -3" },
            { "verbal_explanation": "כדי לקבל את המשתנה חיובי, נכפול או נחלק במינוס אחד. לכן נהפוך את כיוון הסימן.", "math_expression": "< \\rightarrow >" },
            { "verbal_explanation": "שני המינוסים באגפים הופכים לחיוביים ומתקבל הפתרון הנכון.", "math_expression": "x > 3" }
        ],
        "final_answer": "x > 3"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון הבא (כולל סימן שווה): \\( 4x + 2 \\le 18 \\)&rlm;",
        "options": ["x ≤ 4", "x ≥ 4", "x < 4", "x > 4"],
        "correctAnswer": 0,
        "hint": "הסימן 'קטן או שווה' נשאר איתכם לכל אורך הדרך ומתנהג בדיוק כמו סימן 'קטן'.",
        "solution_steps": [
            { "verbal_explanation": "נחסר שתיים משני האגפים של אי השוויון.", "math_expression": "18 - 2 = 16" },
            { "verbal_explanation": "נרשום את התוצאה תוך שמירה על הסימן קטן או שווה.", "math_expression": "4x \\le 16" },
            { "verbal_explanation": "נחלק בארבע שהוא מספר חיובי, ולכן הכיוון לא ישתנה.", "math_expression": "\\div 4" },
            { "verbal_explanation": "נחשב ונגיע לפתרון הסופי.", "math_expression": "x \\le 4" }
        ],
        "final_answer": "x ≤ 4"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון: \\( -3x - 1 \\ge 8 \\)&rlm;",
        "options": ["x ≤ -3", "x ≥ -3", "x ≤ 3", "x ≥ 3"],
        "correctAnswer": 0,
        "hint": "הוסיפו 1, ואז חלקו במינוס 3 וזכרו להפוך את סימן האי שוויון.",
        "solution_steps": [
            { "verbal_explanation": "נוסיף אחד לשני האגפים.", "math_expression": "8 + 1 = 9" },
            { "verbal_explanation": "נקבל אי שוויון עם מקדם שלילי.", "math_expression": "-3x \\ge 9" },
            { "verbal_explanation": "נחלק במינוס שלוש. חלוקה במספר שלילי מחייבת את הפיכת הסימן.", "math_expression": "\\ge \\rightarrow \\le" },
            { "verbal_explanation": "תשע לחלק למינוס שלוש נותן תוצאה שלילית.", "math_expression": "9 \\div -3 = -3" },
            { "verbal_explanation": "הפתרון המלא כולל את הסימן ההפוך והמספר.", "math_expression": "x \\le -3" }
        ],
        "final_answer": "x ≤ -3"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון המכיל שבר: \\( \\frac{x}{2} > 4 \\)&rlm;",
        "options": ["x > 8", "x < 8", "x > 2", "x < 2"],
        "correctAnswer": 0,
        "hint": "כפלו את שני הצדדים ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נתון אי שוויון שבו המשתנה נמצא במונה של שבר.", "math_expression": "\\frac{x}{2} > 4" },
            { "verbal_explanation": "נכפול את שני האגפים בשתיים כדי לבטל את המכנה.", "math_expression": "\\times 2" },
            { "verbal_explanation": "כיוון ששתיים הוא מספר חיובי, סימן אי השוויון נשאר באותו הכיוון.", "math_expression": ">" },
            { "verbal_explanation": "הפתרון הוא כל מספר שגדול משמונה.", "math_expression": "x > 8" }
        ],
        "final_answer": "x > 8"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון המכיל סוגריים: \\( 2(x - 1) < 10 \\)&rlm;",
        "options": ["x < 6", "x > 6", "x < 4", "x > 4"],
        "correctAnswer": 0,
        "hint": "אפשר לפתוח סוגריים או לחלק ישירות ב-2.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את שני צידי אי השוויון בשתיים כדי להיפטר מהכופל.", "math_expression": "10 \\div 2 = 5" },
            { "verbal_explanation": "אי השוויון הפשוט שנוצר הוא המשתנה פחות אחד קטן מחמש.", "math_expression": "x - 1 < 5" },
            { "verbal_explanation": "נוסיף אחד לשני האגפים.", "math_expression": "5 + 1 = 6" },
            { "verbal_explanation": "נרשום את הפתרון הסופי.", "math_expression": "x < 6" }
        ],
        "final_answer": "x < 6"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "פתרון אי שוויונות",
        "question_text": "פתרו את אי השוויון בו המשתנה מופיע בשני הצדדים: \\( 5x > 2x + 12 \\)&rlm;",
        "options": ["x > 4", "x < 4", "x > 6", "x < 6"],
        "correctAnswer": 0,
        "hint": "העבירו את כל האיברים המכילים x לצד אחד (חסרו 2x משני הצדדים), ואז חלקו.",
        "solution_steps": [
            { "verbal_explanation": "נחסר שני איקס משני האגפים כדי לכנס את המשתנים לאגף אחד.", "math_expression": "5x - 2x > 12" },
            { "verbal_explanation": "נחשב את ההפרש ונקבל שלושה איקס.", "math_expression": "3x > 12" },
            { "verbal_explanation": "נחלק בשלוש את שני האגפים. הכיוון נשמר כי חילקנו בחיובי.", "math_expression": "\\div 3" },
            { "verbal_explanation": "נקבל את הפתרון הנדרש.", "math_expression": "x > 4" }
        ],
        "final_answer": "x > 4"
    },

    // ==========================================
    // תת נושא 4: ייצוג על ציר המספרים (10 שאלות)
    // ==========================================
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 100\" width=\"200\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"50\" x2=\"280\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"280\" y1=\"50\" x2=\"270\" y2=\"45\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"280\" y1=\"50\" x2=\"270\" y2=\"55\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"150\" cy=\"50\" r=\"5\" fill=\"white\" stroke=\"#ef4444\" stroke-width=\"2\"/><line x1=\"155\" y1=\"50\" x2=\"260\" y2=\"50\" stroke=\"#ef4444\" stroke-width=\"3\"/><text x=\"146\" y=\"70\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">3</text></svg></div><br>איזה אי שוויון מיוצג בשרטוט שלפניכם (עיגול ריק במספר 3 וחץ ימינה)?&rlm;",
        "options": ["x > 3", "x < 3", "x ≥ 3", "x ≤ 3"],
        "correctAnswer": 0,
        "hint": "עיגול ריק אומר שהמספר עצמו לא כלול (אין סימן שווה). חץ ימינה מסמן מספרים גדולים יותר.",
        "solution_steps": [
            { "verbal_explanation": "החץ בגרף מצביע ימינה, אל הכיוון החיובי שבו המספרים גדולים יותר.", "math_expression": ">" },
            { "verbal_explanation": "העיגול על המספר שלוש הוא עיגול ריק, כלומר המספר שלוש אינו נכלל בפתרון.", "math_expression": "> \\quad , \\quad \\neq" },
            { "verbal_explanation": "נשלב את שני הנתונים יחד לאי שוויון אחד.", "math_expression": "x > 3" },
            { "verbal_explanation": "הביטוי המתאים הוא איקס גדול משלוש.", "math_expression": "x > 3" }
        ],
        "final_answer": "x > 3"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 100\" width=\"200\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"50\" x2=\"280\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"280\" y1=\"50\" x2=\"270\" y2=\"45\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"280\" y1=\"50\" x2=\"270\" y2=\"55\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"200\" cy=\"50\" r=\"5\" fill=\"#3b82f6\"/><line x1=\"195\" y1=\"50\" x2=\"40\" y2=\"50\" stroke=\"#3b82f6\" stroke-width=\"3\"/><line x1=\"40\" y1=\"50\" x2=\"50\" y2=\"45\" stroke=\"#3b82f6\" stroke-width=\"3\"/><line x1=\"40\" y1=\"50\" x2=\"50\" y2=\"55\" stroke=\"#3b82f6\" stroke-width=\"3\"/><text x=\"196\" y=\"70\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">5</text></svg></div><br>איזה אי שוויון מיוצג בשרטוט (עיגול מלא ב-5 וחץ שמאלה)?&rlm;",
        "options": ["x ≤ 5", "x < 5", "x ≥ 5", "x > 5"],
        "correctAnswer": 0,
        "hint": "עיגול מלא פירושו שהמספר כלול (יש סימן שווה). חץ שמאלה פירושו מספרים קטנים יותר.",
        "solution_steps": [
            { "verbal_explanation": "החץ פונה שמאלה, המציין את כל הערכים שקטנים מהמספר הנבחר.", "math_expression": "<" },
            { "verbal_explanation": "העיגול מעל המספר חמש צבוע ומלא. המשמעות היא שהמספר חמש נכלל בתוך הפתרון.", "math_expression": "\\le" },
            { "verbal_explanation": "הביטוי השלם כולל גם את סימן ה'קטן מ' וגם את קו ה'שווה ל'.", "math_expression": "x \\le 5" },
            { "verbal_explanation": "כלומר, איקס קטן או שווה לחמש.", "math_expression": "x \\le 5" }
        ],
        "final_answer": "x ≤ 5"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 300 100\" width=\"200\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"50\" x2=\"280\" y2=\"50\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"280\" y1=\"50\" x2=\"270\" y2=\"45\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"280\" y1=\"50\" x2=\"270\" y2=\"55\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"50\" r=\"5\" fill=\"white\" stroke=\"#eab308\" stroke-width=\"2\"/><line x1=\"95\" y1=\"50\" x2=\"40\" y2=\"50\" stroke=\"#eab308\" stroke-width=\"3\"/><line x1=\"40\" y1=\"50\" x2=\"50\" y2=\"45\" stroke=\"#eab308\" stroke-width=\"3\"/><line x1=\"40\" y1=\"50\" x2=\"50\" y2=\"55\" stroke=\"#eab308\" stroke-width=\"3\"/><text x=\"92\" y=\"70\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">-2</text></svg></div><br>מה מתאר השרטוט הבא (עיגול ריק במינוס 2, חץ שמאלה)?&rlm;",
        "options": ["x < -2", "x > -2", "x ≤ -2", "x ≥ -2"],
        "correctAnswer": 0,
        "hint": "חץ שמאלה = קטן מ. עיגול ריק = ללא סימן שווה.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את כיוון החץ. הוא מצביע שמאלה, ולכן מייצג ערכים קטנים יותר.", "math_expression": "<" },
            { "verbal_explanation": "נבחן את העיגול. הוא ריק, ולכן אין סימן שווה.", "math_expression": "<" },
            { "verbal_explanation": "נשלב את הנתונים עם המספר שעל הציר.", "math_expression": "x < -2" },
            { "verbal_explanation": "הפתרון הוא איקס קטן ממינוס שתיים.", "math_expression": "x < -2" }
        ],
        "final_answer": "x < -2"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "כיצד ייראה על ציר המספרים הפתרון של אי השוויון: \\( x \\ge 0 \\)?&rlm;",
        "options": ["עיגול מלא באפס, חץ ימינה", "עיגול ריק באפס, חץ ימינה", "עיגול מלא באפס, חץ שמאלה", "עיגול ריק באפס, חץ שמאלה"],
        "correctAnswer": 0,
        "hint": "הסימן אומר 'גדול או שווה'. לאיזה כיוון מציירים, והאם העיגול מלא?",
        "solution_steps": [
            { "verbal_explanation": "סימן האי שוויון הוא גדול מ-, ולכן החץ על ציר המספרים יצביע ימינה אל המספרים החיוביים.", "math_expression": "> \\rightarrow \\text{Right}" },
            { "verbal_explanation": "בנוסף, קיים סימן של 'שווה ל' מתחת לאי השוויון.", "math_expression": "\\ge" },
            { "verbal_explanation": "המשמעות הגרפית היא שהעיגול המסמן את נקודת ההתחלה באפס חייב להיות מלא וצבוע.", "math_expression": "\\text{Full Circle}" },
            { "verbal_explanation": "לכן, התיאור הנכון הוא עיגול מלא וחץ ימינה.", "math_expression": "\\rightarrow" }
        ],
        "final_answer": "עיגול מלא באפס, חץ ימינה"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "פתרו את אי השוויון: \\( 2x > 4 \\). כיצד ייראה הפתרון על ציר המספרים?&rlm;",
        "options": ["עיגול ריק ב-2, חץ ימינה", "עיגול מלא ב-2, חץ ימינה", "עיגול ריק ב-4, חץ ימינה", "עיגול ריק ב-2, חץ שמאלה"],
        "correctAnswer": 0,
        "hint": "קודם פתרו את התרגיל (חלקו ב-2), ואז קבעו את הציור לפי התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "כדי לדעת איזה גרף לצייר, חובה עלינו לפתור תחילה את אי השוויון.", "math_expression": "2x > 4" },
            { "verbal_explanation": "נחלק את שני האגפים בשתיים. הסימן נשאר כפי שהוא.", "math_expression": "x > 2" },
            { "verbal_explanation": "הפתרון הוא איקס גדול משתיים. נתרגם זאת לגרף: גדול אומר חץ ימינה.", "math_expression": "\\rightarrow" },
            { "verbal_explanation": "היעדר סימן שווה אומר שהעיגול על המספר שתיים יישאר ריק.", "math_expression": "\\text{Empty Circle}" }
        ],
        "final_answer": "עיגול ריק ב-2, חץ ימינה"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "פתרו את אי השוויון: \\( -x \\le -3 \\). כיצד נצייר את התשובה על ציר המספרים?&rlm;",
        "options": ["עיגול מלא ב-3, חץ ימינה", "עיגול ריק ב-3, חץ שמאלה", "עיגול מלא במינוס 3, חץ שמאלה", "עיגול מלא ב-3, חץ שמאלה"],
        "correctAnswer": 0,
        "hint": "כשמכפילים במינוס אחד את אי השוויון, הסימן מתהפך! התוצאה תהיה $x \\ge 3$.",
        "solution_steps": [
            { "verbal_explanation": "אי השוויון מופיע עם משתנה שלילי. עלינו להפוך אותו לחיובי.", "math_expression": "-x \\le -3" },
            { "verbal_explanation": "נכפול במינוס אחד את שני האגפים, ונהפוך את כיוון הסימן כנדרש.", "math_expression": "x \\ge 3" },
            { "verbal_explanation": "כעת נצייר: הסימן פונה ימינה למספרים הגדולים, לכן נמתח חץ ימינה.", "math_expression": "\\rightarrow" },
            { "verbal_explanation": "הסימן כולל קו השווה. לכן העיגול על המספר שלוש יהיה צבוע ומלא.", "math_expression": "\\text{Full Circle}" }
        ],
        "final_answer": "עיגול מלא ב-3, חץ ימינה"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "ציר מספרים מציג פתרון שבו יש עיגול ריק במינוס 1, וחץ ימינה (כלומר \\( x > -1 \\)). איזה מהתרגילים הבאים יוביל לאותו הפתרון?&rlm;",
        "options": ["2x > -2", "-x > 1", "x + 1 < 0", "x - 1 > 0"],
        "correctAnswer": 0,
        "hint": "פתרו כל אחד מהתרגילים ובדקו מי נותן את התוצאה המוצגת בגרף.",
        "solution_steps": [
            { "verbal_explanation": "הגרף המתואר במילים מציג את אי השוויון איקס גדול ממינוס אחד.", "math_expression": "x > -1" },
            { "verbal_explanation": "נבחן את האפשרות הראשונה ונפתור אותה על ידי חלוקה בשתיים.", "math_expression": "2x > -2 \\Rightarrow x > -1" },
            { "verbal_explanation": "האפשרות הראשונה נותנת בדיוק את הפתרון של הגרף, ולכן היא התשובה הנכונה.", "math_expression": "2x > -2" },
            { "verbal_explanation": "נוודא את השנייה: מינוס איקס גדול מאחד ייתן איקס קטן ממינוס אחד, שזה חץ הפוך.", "math_expression": "-x > 1 \\Rightarrow x < -1" }
        ],
        "final_answer": "2x > -2"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "גרף מסוים מציג את התחום \\( x \\le 4 \\). איזו אי-שוויון מתאים לגרף הזה?&rlm;",
        "options": ["x - 1 ≤ 3", "2x < 8", "x + 2 ≥ 6", "-x ≤ -4"],
        "correctAnswer": 0,
        "hint": "חפשו את האפשרות שכאשר תפתרו אותה, תקבלו בדיוק את אי השוויון שבשאלה.",
        "solution_steps": [
            { "verbal_explanation": "נחפש אי שוויון שהפתרון הסופי שלו זהה לזה שמופיע בגרף הנתון.", "math_expression": "x \\le 4" },
            { "verbal_explanation": "נפתור את האפשרות הראשונה על ידי הוספת אחד לשני האגפים.", "math_expression": "x - 1 \\le 3 \\Rightarrow x \\le 4" },
            { "verbal_explanation": "האפשרות הראשונה מתאימה לחלוטין לגרף.", "math_expression": "x - 1 \\le 3" },
            { "verbal_explanation": "האפשרות השנייה תיתן איקס קטן מארבע (בלי השווה) ולכן היא נפסלת.", "math_expression": "2x < 8 \\Rightarrow x < 4" }
        ],
        "final_answer": "x - 1 ≤ 3"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "האם הנקודה \\( x = 3 \\) נכללת (צבועה) בגרף של אי השוויון \\( x > 3 \\)?&rlm;",
        "options": ["לא", "כן", "רק אם החץ שמאלה", "אי אפשר לדעת"],
        "correctAnswer": 0,
        "hint": "סימן 'גדול מ' (ללא שווה) אומר שהמספר עצמו הוא הגבול, אבל אינו כלול בפנים.",
        "solution_steps": [
            { "verbal_explanation": "אי השוויון הנתון משתמש בסימן גדול מ- ללא תוספת של קו השוויון.", "math_expression": ">" },
            { "verbal_explanation": "משמעות הדבר היא שכל המספרים שגדולים משלוש מתקבלים, אך לא שלוש עצמו.", "math_expression": "3 \\ngtr 3" },
            { "verbal_explanation": "על הגרף הדבר ייוצג באמצעות עיגול ריק, המראה אי-הכללה של הנקודה.", "math_expression": "\\text{Empty Circle}" },
            { "verbal_explanation": "התשובה היא שהנקודה אינה נכללת.", "math_expression": "\\text{No}" }
        ],
        "final_answer": "לא"
    },
    {
        "topic": "equations_inequalities_grade_8",
        "subTopic": "ייצוג על ציר המספרים",
        "question_text": "גרף מציג עיגול ריק ב-2 וחץ שמאלה (כלומר \\( x < 2 \\)). איזה מהמספרים הבאים הוא פתרון אפשרי לאי השוויון הזה?&rlm;",
        "options": ["0", "2", "5", "10"],
        "correctAnswer": 0,
        "hint": "כל מספר שקטן מ-2 ונמצא משמאלו על ציר המספרים מהווה פתרון.",
        "solution_steps": [
            { "verbal_explanation": "הגרף מתאר את כלל המספרים שנמצאים משמאל למספר שתיים, כלומר קטנים ממנו.", "math_expression": "x < 2" },
            { "verbal_explanation": "נעבור על האפשרויות ונבדוק מי מהן מקיימת את התנאי הזה.", "math_expression": "?" },
            { "verbal_explanation": "המספרים חמש ועשר גדולים משתיים ואינם מתאימים.", "math_expression": "5 > 2 \\quad , \\quad 10 > 2" },
            { "verbal_explanation": "המספר שתיים לא מתאים כי העיגול ריק (אין סימן שווה).", "math_expression": "2 \\nless 2" },
            { "verbal_explanation": "המספר אפס קטן משתיים ומהווה פתרון חוקי.", "math_expression": "0 < 2" }
        ],
        "final_answer": "0"
    }
];