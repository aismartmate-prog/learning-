const questionsDB = [
    // ==========================================
    // תת נושא 1: חוק הפילוג המורחב (10 שאלות)
    // ==========================================
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "פתחו את הסוגריים וכנסו איברים דומים: \\( (x + 2)(x + 3) \\)&rlm;",
        "options": ["x^2 + 5x + 6", "x^2 + 6x + 5", "x^2 + 6", "2x + 5"],
        "correctAnswer": 0,
        "hint": "הכפילו כל איבר בסוגריים הראשונים בכל איבר בסוגריים השניים, ולאחר מכן חברו את האיברים האמצעיים.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בחוק הפילוג המורחב כדי לכפול את שני הביטויים בסוגריים זה בזה.", "math_expression": "(x + 2)(x + 3)" },
            { "verbal_explanation": "נכפול את האיבר הראשון (איקס) מהסוגריים הראשונים בכל איבר בסוגריים השניים.", "math_expression": "x \\cdot x + x \\cdot 3" },
            { "verbal_explanation": "נכפול את האיבר השני (שתיים) מהסוגריים הראשונים בכל איבר בסוגריים השניים.", "math_expression": "2 \\cdot x + 2 \\cdot 3" },
            { "verbal_explanation": "נרשום את כל המכפלות יחד ונקבל ארבעה איברים.", "math_expression": "x^2 + 3x + 2x + 6" },
            { "verbal_explanation": "נכנס את האיברים הדומים המכילים איקס.", "math_expression": "3x + 2x = 5x" },
            { "verbal_explanation": "הביטוי הסופי והמפושט הוא איקס בריבוע ועוד חמישה איקס ועוד שש.", "math_expression": "x^2 + 5x + 6" }
        ],
        "final_answer": "x^2 + 5x + 6"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "פתחו סוגריים ופשטו את הביטוי: \\( (x - 4)(x + 5) \\)&rlm;",
        "options": ["x^2 + x - 20", "x^2 - x - 20", "x^2 - 20", "x^2 + 9x - 20"],
        "correctAnswer": 0,
        "hint": "שימו לב לסימנים בזמן ההכפלה: מספר שלילי כפול חיובי נותן מספר שלילי.",
        "solution_steps": [
            { "verbal_explanation": "נכפול כל איבר משמאל בכל איבר מימין.", "math_expression": "(x - 4)(x + 5)" },
            { "verbal_explanation": "המכפלות של איקס הן איקס בריבוע ופלוס חמישה איקס.", "math_expression": "x \\cdot x + x \\cdot 5 = x^2 + 5x" },
            { "verbal_explanation": "המכפלות של מינוס ארבע הן מינוס ארבעה איקס ומינוס עשרים.", "math_expression": "-4 \\cdot x - 4 \\cdot 5 = -4x - 20" },
            { "verbal_explanation": "נחבר את כל התוצאות לביטוי אחד ארוך.", "math_expression": "x^2 + 5x - 4x - 20" },
            { "verbal_explanation": "נכנס את האיברים הדומים. חמישה איקס פחות ארבעה איקס משאיר איקס אחד.", "math_expression": "5x - 4x = x" },
            { "verbal_explanation": "הביטוי המפושט הוא איקס בריבוע ועוד איקס פחות עשרים.", "math_expression": "x^2 + x - 20" }
        ],
        "final_answer": "x^2 + x - 20"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "הכפילו את זוג הסוגריים הבא: \\( (2x + 1)(x - 3) \\)&rlm;",
        "options": ["2x^2 - 5x - 3", "2x^2 - 6x - 3", "2x^2 + 5x - 3", "2x^2 - 3"],
        "correctAnswer": 0,
        "hint": "הכפילו את שני איקס באיקס, ואז את שני איקס במינוס שלוש. לאחר מכן, עברו לאחד.",
        "solution_steps": [
            { "verbal_explanation": "נפתח את הסוגריים על ידי כפל כל איבר בראשון בכל איבר בשני.", "math_expression": "(2x + 1)(x - 3)" },
            { "verbal_explanation": "נכפול שני איקס באיקס, ולאחר מכן שני איקס במינוס שלוש.", "math_expression": "2x^2 - 6x" },
            { "verbal_explanation": "נכפול את המספר אחד באיקס, ואחר כך במינוס שלוש.", "math_expression": "x - 3" },
            { "verbal_explanation": "נצרף את כל החלקים שקיבלנו לביטוי אלגברי שלם.", "math_expression": "2x^2 - 6x + x - 3" },
            { "verbal_explanation": "נכנס את שני האיברים המכילים את המשתנה איקס: מינוס שש ועוד אחד שווה מינוס חמש.", "math_expression": "-6x + x = -5x" },
            { "verbal_explanation": "התוצאה הסופית המצומצמת ביותר.", "math_expression": "2x^2 - 5x - 3" }
        ],
        "final_answer": "2x^2 - 5x - 3"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "פתחו סוגריים ופשטו: \\( (y - 2)(y - 5) \\)&rlm;",
        "options": ["y^2 - 7y + 10", "y^2 + 7y + 10", "y^2 - 7y - 10", "y^2 + 10"],
        "correctAnswer": 0,
        "hint": "זכרו שמינוס כפול מינוס (כאשר כופלים את -2 ב--5) נותן פלוס.",
        "solution_steps": [
            { "verbal_explanation": "נבצע כפל של איבר מכל סוגריים במשנהו.", "math_expression": "(y - 2)(y - 5)" },
            { "verbal_explanation": "מכפלת משתני הוואי נותנת וואי בריבוע ומינוס חמישה וואי.", "math_expression": "y^2 - 5y" },
            { "verbal_explanation": "כפל המספר מינוס שתיים נותן מינוס שני וואי ופלוס עשר (מינוס כפול מינוס).", "math_expression": "-2y + 10" },
            { "verbal_explanation": "נרשום את כל המכפלות ברצף להמשך העבודה.", "math_expression": "y^2 - 5y - 2y + 10" },
            { "verbal_explanation": "נכנס איברים דומים: מינוס חמש פחות שתיים שווה למינוס שבע.", "math_expression": "-5y - 2y = -7y" },
            { "verbal_explanation": "הביטוי לאחר הפישוט המלא.", "math_expression": "y^2 - 7y + 10" }
        ],
        "final_answer": "y^2 - 7y + 10"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "פשטו את הביטוי: \\( (3a + 2)(2a + 4) \\)&rlm;",
        "options": ["6a^2 + 16a + 8", "5a^2 + 16a + 8", "6a^2 + 10a + 8", "6a^2 + 8"],
        "correctAnswer": 0,
        "hint": "הכפילו את המקדמים של a זה בזה (3 כפול 2).",
        "solution_steps": [
            { "verbal_explanation": "נפתח סוגריים תוך הקפדה על חוק הפילוג המורחב לכל ארבעת השילובים.", "math_expression": "(3a + 2)(2a + 4)" },
            { "verbal_explanation": "שלושה איי כפול שני איי זה שישה איי בריבוע. שלושה איי כפול ארבע זה שנים עשר איי.", "math_expression": "6a^2 + 12a" },
            { "verbal_explanation": "שתיים כפול שני איי זה ארבעה איי. שתיים כפול ארבע זה שמונה.", "math_expression": "4a + 8" },
            { "verbal_explanation": "נחבר את כל התוצאות לשורה אחת.", "math_expression": "6a^2 + 12a + 4a + 8" },
            { "verbal_explanation": "נחבר את שנים עשר וארבע לכינוס המשתנים הדומים.", "math_expression": "12a + 4a = 16a" },
            { "verbal_explanation": "הביטוי הסופי מתקבל.", "math_expression": "6a^2 + 16a + 8" }
        ],
        "final_answer": "6a^2 + 16a + 8"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "פתחו את הסוגריים בביטוי הבא: \\( (x - y)(x + y) \\)&rlm;",
        "options": ["x^2 - y^2", "x^2 + y^2", "x^2 - 2xy + y^2", "x^2 + 2xy - y^2"],
        "correctAnswer": 0,
        "hint": "לאחר שתכפילו ותכנסו איברים, תראו ששני האיברים האמצעיים מבטלים זה את זה (xy- לעומת xy+).",
        "solution_steps": [
            { "verbal_explanation": "נבצע את הכפל של כל איבר כפי שלמדנו.", "math_expression": "(x - y)(x + y)" },
            { "verbal_explanation": "הכפלת האיבר איקס בכל אחד מהאיברים בסוגריים השניים.", "math_expression": "x^2 + xy" },
            { "verbal_explanation": "הכפלת האיבר מינוס וואי בכל אחד מהאיברים בסוגריים השניים.", "math_expression": "-xy - y^2" },
            { "verbal_explanation": "נרשום את כל המכפלות יחד.", "math_expression": "x^2 + xy - xy - y^2" },
            { "verbal_explanation": "האיברים האמצעיים נגדיים ומתבטלים לאפס.", "math_expression": "xy - xy = 0" },
            { "verbal_explanation": "נותרנו עם ביטוי המורכב מההפרש של שני הריבועים.", "math_expression": "x^2 - y^2" }
        ],
        "final_answer": "x^2 - y^2"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "פשטו את הביטוי הבא ומיצאו את התוצאה: \\( (a + b)(c + d) \\)&rlm;",
        "options": ["ac + ad + bc + bd", "ac + bd", "a+b+c+d", "abcd"],
        "correctAnswer": 0,
        "hint": "מכיוון שאין כאן איברים דומים כלל, התוצאה תהיה פשוט סכום של 4 המכפלות השונות.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בחוק הפילוג כדי להכפיל זוגות של משתנים שונים שאין ביניהם קשר.", "math_expression": "(a + b)(c + d)" },
            { "verbal_explanation": "המשתנה הראשון איי יוכפל בשני המשתנים שבסוגריים השניים.", "math_expression": "ac + ad" },
            { "verbal_explanation": "המשתנה השני בי יוכפל בשני המשתנים שבסוגריים השניים.", "math_expression": "bc + bd" },
            { "verbal_explanation": "נחבר את כל ארבע המכפלות.", "math_expression": "ac + ad + bc + bd" },
            { "verbal_explanation": "אין איברים דומים שניתן לכנס, ולכן זהו המצב המפושט ביותר של הביטוי.", "math_expression": "ac + ad + bc + bd" }
        ],
        "final_answer": "ac + ad + bc + bd"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "מהי התוצאה של פתיחת הסוגריים בביטוי: \\( (2m - 3)(m - 1) \\)?&rlm;",
        "options": ["2m^2 - 5m + 3", "2m^2 - 5m - 3", "2m^2 - m + 3", "2m^2 + 3"],
        "correctAnswer": 0,
        "hint": "אל תשכחו לכפול את מינוס שלוש במינוס אחד (התוצאה תהיה פלוס שלוש).",
        "solution_steps": [
            { "verbal_explanation": "נכפול כל איבר משמאל בכל איבר מימין ונרשום את התוצאות.", "math_expression": "(2m - 3)(m - 1)" },
            { "verbal_explanation": "שני אמ כפול אמ, ושני אמ כפול מינוס אחד.", "math_expression": "2m^2 - 2m" },
            { "verbal_explanation": "מינוס שלוש כפול אמ, ומינוס שלוש כפול מינוס אחד (שהופך לפלוס).", "math_expression": "-3m + 3" },
            { "verbal_explanation": "נכתוב את הביטוי המלא לפני הכינוס.", "math_expression": "2m^2 - 2m - 3m + 3" },
            { "verbal_explanation": "נכנס איברים: מינוס שתיים פחות שלוש שווה למינוס חמש.", "math_expression": "-2m - 3m = -5m" },
            { "verbal_explanation": "נרשום את התשובה המפושטת הסופית.", "math_expression": "2m^2 - 5m + 3" }
        ],
        "final_answer": "2m^2 - 5m + 3"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "פתחו ופשטו את הביטוי הכולל מינוס לפני הסוגריים: \\( (x + 4)(x - 2) - x^2 \\)&rlm;",
        "options": ["2x - 8", "6x - 8", "-2x - 8", "-8"],
        "correctAnswer": 0,
        "hint": "פתחו קודם את הסוגריים כרגיל. בסוף, האיבר שבריבוע יבטל את האיבר שבריבוע שנוצר לכם.",
        "solution_steps": [
            { "verbal_explanation": "נתחיל בטיפול בשני הסוגריים הראשונים בלבד.", "math_expression": "(x + 4)(x - 2)" },
            { "verbal_explanation": "נכפול ונרשום את ארבעת המכפלות.", "math_expression": "x^2 - 2x + 4x - 8" },
            { "verbal_explanation": "נכנס איברים באמצע כדי לפשט את החלק הזה.", "math_expression": "x^2 + 2x - 8" },
            { "verbal_explanation": "נוסיף חזרה את האיבר השלילי שהיה בסוף התרגיל המקורי.", "math_expression": "x^2 + 2x - 8 - x^2" },
            { "verbal_explanation": "איקס בריבוע פחות איקס בריבוע מתאפס ונעלם מהמשוואה.", "math_expression": "x^2 - x^2 = 0" },
            { "verbal_explanation": "נשארנו עם ביטוי פשוט ללא חזקות כלל.", "math_expression": "2x - 8" }
        ],
        "final_answer": "2x - 8"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "חוק הפילוג המורחב",
        "question_text": "חשבו את תוצאת המכפלה: \\( (5 - y)(y + 2) \\)&rlm;",
        "options": ["-y^2 + 3y + 10", "y^2 + 3y + 10", "-y^2 + 7y + 10", "-y^2 - 3y + 10"],
        "correctAnswer": 0,
        "hint": "שימו לב לסדר. המכפלה של -y ב-y תיתן לכם y בריבוע שלילי.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בחוק הפילוג כדי להכפיל את האיברים אחד בשני.", "math_expression": "(5 - y)(y + 2)" },
            { "verbal_explanation": "המספר חמש כפול שני האיברים בסוגריים השניים.", "math_expression": "5y + 10" },
            { "verbal_explanation": "המשתנה מינוס וואי כפול שני האיברים בסוגריים השניים.", "math_expression": "-y^2 - 2y" },
            { "verbal_explanation": "נחבר את החלקים יחד.", "math_expression": "5y + 10 - y^2 - 2y" },
            { "verbal_explanation": "נכנס איברים דומים: חמישה וואי פחות שני וואי.", "math_expression": "5y - 2y = 3y" },
            { "verbal_explanation": "נסדר את התשובה מהחזקה הגבוהה לנמוכה.", "math_expression": "-y^2 + 3y + 10" }
        ],
        "final_answer": "-y^2 + 3y + 10"
    },

    // ==========================================
    // תת נושא 2: הוצאת גורם משותף (10 שאלות)
    // ==========================================
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "פרקו לגורמים על ידי הוצאת הגורם המשותף הגדול ביותר: \\( 4x + 12 \\)&rlm;",
        "options": ["4(x + 3)", "2(2x + 6)", "4(x + 12)", "x(4 + 12)"],
        "correctAnswer": 0,
        "hint": "איזה מספר מחלק גם את 4 וגם את 12 ללא שארית?",
        "solution_steps": [
            { "verbal_explanation": "עלינו למצוא את המספר הגדול ביותר שמחלק את שני האיברים בביטוי.", "math_expression": "4x \\quad , \\quad 12" },
            { "verbal_explanation": "שני המספרים מתחלקים בארבע, ולכן נבחר בארבע כגורם המשותף שיוצא מחוץ לסוגריים.", "math_expression": "4" },
            { "verbal_explanation": "נחלק את האיבר הראשון בארבע כדי למצוא מה יישאר בסוגריים.", "math_expression": "4x \\div 4 = x" },
            { "verbal_explanation": "נחלק את האיבר השני בארבע.", "math_expression": "12 \\div 4 = 3" },
            { "verbal_explanation": "נכתוב את הגורם המשותף, ואחריו בסוגריים את תוצאות החילוק.", "math_expression": "4(x + 3)" }
        ],
        "final_answer": "4(x + 3)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "הוציאו גורם משותף מהביטוי הבא: \\( x^2 + 5x \\)&rlm;",
        "options": ["x(x + 5)", "x(x^2 + 5)", "5(x^2 + x)", "x(1 + 5x)"],
        "correctAnswer": 0,
        "hint": "הפעם הגורם המשותף הוא משתנה (אות) ולא מספר, כי שניהם מכילים את האות x.",
        "solution_steps": [
            { "verbal_explanation": "נזהה מה משותף לשני האיברים בביטוי האלגברי.", "math_expression": "x^2 + 5x" },
            { "verbal_explanation": "לשני האיברים אין מקדם מספרי משותף, אך שניהם מכילים את המשתנה איקס.", "math_expression": "x" },
            { "verbal_explanation": "נוציא את המשתנה איקס החוצה. חלוקת איקס בריבוע באיקס משאירה אותנו עם איקס אחד.", "math_expression": "x^2 \\div x = x" },
            { "verbal_explanation": "חלוקת חמישה איקס באיקס מותירה אותנו עם המספר חמש בלבד.", "math_expression": "5x \\div x = 5" },
            { "verbal_explanation": "נרכיב את התשובה עם המשתנה מחוץ לסוגריים והשאריות בפנים.", "math_expression": "x(x + 5)" }
        ],
        "final_answer": "x(x + 5)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "פרקו לגורמים את הביטוי: \\( 6y^2 - 15y \\)&rlm;",
        "options": ["3y(2y - 5)", "3(2y^2 - 5y)", "y(6y - 15)", "6y(y - 2.5)"],
        "correctAnswer": 0,
        "hint": "כאן יש גם גורם מספרי משותף (שמחלק את 6 ו-15) וגם משתנה משותף (y). הוציאו את שניהם יחד.",
        "solution_steps": [
            { "verbal_explanation": "נחפש את הגורם המספרי הגדול ביותר שמחלק את שש וחמש עשרה ללא שארית. זהו המספר שלוש.", "math_expression": "3" },
            { "verbal_explanation": "נחפש משתנה שמופיע בשני האיברים. המשתנה המשותף בחזקה הנמוכה ביותר הוא וואי.", "math_expression": "y" },
            { "verbal_explanation": "הגורם המשותף המלא שנכתוב מחוץ לסוגריים הוא שלושה וואי.", "math_expression": "3y" },
            { "verbal_explanation": "נחלק את האיבר הראשון בגורם המשותף. שש חלקי שלוש זה שתיים, ווואי בריבוע חלקי וואי זה וואי.", "math_expression": "6y^2 \\div 3y = 2y" },
            { "verbal_explanation": "נחלק את האיבר השני בגורם המשותף. חמש עשרה חלקי שלוש זה חמש.", "math_expression": "-15y \\div 3y = -5" },
            { "verbal_explanation": "התוצאה הסופית מתקבלת מחיבור הנתונים.", "math_expression": "3y(2y - 5)" }
        ],
        "final_answer": "3y(2y - 5)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "מהו הפירוק לגורמים של הביטוי \\( 10ab + 5b \\)?&rlm;",
        "options": ["5b(2a + 1)", "5b(2a)", "5(2ab + b)", "b(10a + 5)"],
        "correctAnswer": 0,
        "hint": "הוציאו 5b. זכרו שכאשר מחלקים איבר בעצמו (כמו במקרה של 5b לחלק ל-5b), התוצאה היא 1 ולא 0.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את המקדם המשותף לעשר ולחמש. זהו חמש.", "math_expression": "5" },
            { "verbal_explanation": "נמצא את המשתנה המשותף. המשתנה בי קיים בשני האיברים.", "math_expression": "b" },
            { "verbal_explanation": "הגורם המשותף הוא חמישה בי.", "math_expression": "5b" },
            { "verbal_explanation": "נחלק עשרה איי בי בחמישה בי. התוצאה היא שני איי.", "math_expression": "10ab \\div 5b = 2a" },
            { "verbal_explanation": "נחלק חמישה בי בחמישה בי. מספר חלקי עצמו נותן תמיד אחד.", "math_expression": "5b \\div 5b = 1" },
            { "verbal_explanation": "נרשום את הפירוק לגורמים המלא.", "math_expression": "5b(2a + 1)" }
        ],
        "final_answer": "5b(2a + 1)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "הוציאו גורם משותף שלילי מהביטוי: \\( -3x - 9 \\)&rlm;",
        "options": ["-3(x + 3)", "-3(x - 3)", "3(-x - 3)", "-x(3 + 9/x)"],
        "correctAnswer": 0,
        "hint": "הוציאו מינוס שלוש. כאשר מוציאים מינוס מחוץ לסוגריים, הסימן של כל איבר שנשאר בפנים חייב להתהפך.",
        "solution_steps": [
            { "verbal_explanation": "המספר שלוש מחלק את שני האיברים, ונתבקשנו להוציא אותו עם הסימן השלילי שלו.", "math_expression": "-3" },
            { "verbal_explanation": "נחלק את האיבר הראשון במינוס שלוש. המינוסים מתבטלים ונשאר איקס חיובי.", "math_expression": "-3x \\div -3 = x" },
            { "verbal_explanation": "נחלק את המספר מינוס תשע במינוס שלוש. שוב, מינוס על מינוס יוצר תוצאה חיובית של שלוש.", "math_expression": "-9 \\div -3 = 3" },
            { "verbal_explanation": "נכתוב את התוצאה כאשר בתוך הסוגריים הסימנים התהפכו לחיוביים.", "math_expression": "-3(x + 3)" }
        ],
        "final_answer": "-3(x + 3)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "פרקו לגורמים את הביטוי בו יש שלוש איברים: \\( 8x^3 + 4x^2 - 12x \\)&rlm;",
        "options": ["4x(2x^2 + x - 3)", "4x^2(2x + 1 - 3/x)", "2x(4x^2 + 2x - 6)", "4(2x^3 + x^2 - 3x)"],
        "correctAnswer": 0,
        "hint": "המספר 4 והאות x משותפים לכל שלושת האיברים.",
        "solution_steps": [
            { "verbal_explanation": "נאתר את הגורם המשותף המקסימלי לכל שלושת האיברים. למספרים שמונה, ארבע ושתים עשרה זהו ארבע.", "math_expression": "4" },
            { "verbal_explanation": "למשתנים עם החזקות, ניקח את המשתנה עם החזקה הנמוכה ביותר המשותפת לכולם, שהוא איקס אחד.", "math_expression": "x" },
            { "verbal_explanation": "הגורם המשותף המלא הוא ארבעה איקס. נוציא אותו החוצה.", "math_expression": "4x" },
            { "verbal_explanation": "נחלק כל אחד מהאיברים המקוריים בארבעה איקס כדי למלא את הסוגריים.", "math_expression": "(8x^3 \\div 4x) + (4x^2 \\div 4x) - (12x \\div 4x)" },
            { "verbal_explanation": "נחשב את תוצאות החילוק בנפרד לכל איבר.", "math_expression": "2x^2 + x - 3" },
            { "verbal_explanation": "התוצאה הסופית משלבת את הכל.", "math_expression": "4x(2x^2 + x - 3)" }
        ],
        "final_answer": "4x(2x^2 + x - 3)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "מהו הגורם המשותף הגדול ביותר שניתן להוציא מהביטוי \\( 14a^2b + 21ab^2 \\)?&rlm;",
        "options": ["7ab", "7a^2b^2", "ab", "7"],
        "correctAnswer": 0,
        "hint": "חפשו את המספר הגדול ביותר שמחלק את 14 ו-21, ואת האותיות עם החזקות המינימליות המשותפות.",
        "solution_steps": [
            { "verbal_explanation": "המקדם המספרי הגדול ביותר המשותף לשניהם הוא שבע.", "math_expression": "14 \\div 7 = 2 \\quad , \\quad 21 \\div 7 = 3" },
            { "verbal_explanation": "נבחן את המשתנה הראשון. לשניהם יש לפחות איי אחד שניתן להוציא.", "math_expression": "a" },
            { "verbal_explanation": "נבחן את המשתנה השני. לשניהם יש לפחות בי אחד שניתן להוציא.", "math_expression": "b" },
            { "verbal_explanation": "לכן, הגורם המשותף הגדול ביותר המשלב הכל יחד הוא שבע איי בי.", "math_expression": "7ab" }
        ],
        "final_answer": "7ab"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "פרקו לגורמים: \\( x(y + 2) + 3(y + 2) \\)&rlm;",
        "options": ["(y + 2)(x + 3)", "3x(y + 2)", "(x + 3) + (y + 2)", "(y + 2)^2 (x + 3)"],
        "correctAnswer": 0,
        "hint": "הגורם המשותף כאן הוא לא מספר או אות בודדת, אלא סוגריים שלמים - הביטוי (y+2). הוציאו אותו החוצה.",
        "solution_steps": [
            { "verbal_explanation": "בביטוי זה, אנו מבחינים שסוגריים שלמים חוזרים על עצמם באופן זהה.", "math_expression": "(y + 2)" },
            { "verbal_explanation": "נוכל להתייחס לסוגריים אלו כאל גורם משותף גדול ולהוציא אותו החוצה בדיוק כמו משתנה רגיל.", "math_expression": "(y + 2)" },
            { "verbal_explanation": "נבדוק מה נשאר מהאיבר הראשון לאחר שהוצאנו את הסוגריים. נשאר המשתנה איקס.", "math_expression": "x(y + 2) \\rightarrow x" },
            { "verbal_explanation": "נבדוק מה נשאר מהאיבר השני. נשאר המספר שלוש.", "math_expression": "3(y + 2) \\rightarrow 3" },
            { "verbal_explanation": "נרכז את שתי השאריות לתוך סוגריים חדשים, שיוכפלו בגורם המשותף שהוצאנו.", "math_expression": "(y + 2)(x + 3)" }
        ],
        "final_answer": "(y + 2)(x + 3)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "הוציאו גורם משותף מהביטוי: \\( 5x^2 - x \\)&rlm;",
        "options": ["x(5x - 1)", "x(5x)", "5x(x - 1)", "x(5x - x)"],
        "correctAnswer": 0,
        "hint": "הוציאו את x. זכרו שאיקס לחלק לאיקס זה אחד.",
        "solution_steps": [
            { "verbal_explanation": "המשתנה המשותף היחיד לשני האיברים הוא איקס בחזקת אחד.", "math_expression": "x" },
            { "verbal_explanation": "נוציא את איקס מחוץ לסוגריים.", "math_expression": "x( \\dots )" },
            { "verbal_explanation": "נחלק את האיבר הראשון באיקס. יישאר חמישה איקס.", "math_expression": "5x^2 \\div x = 5x" },
            { "verbal_explanation": "נחלק את האיבר השני (מינוס איקס) באיקס. התוצאה היא מינוס אחד, שומרים על מיקום האיבר גם אם הוא נראה כאילו הוא נעלם.", "math_expression": "-x \\div x = -1" },
            { "verbal_explanation": "הפירוק השלם מוצג כך.", "math_expression": "x(5x - 1)" }
        ],
        "final_answer": "x(5x - 1)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "הוצאת גורם משותף",
        "question_text": "פשטו את הביטוי על ידי הוצאת גורם משותף שלילי: \\( -a^2 - ab \\)&rlm;",
        "options": ["-a(a + b)", "-a(a - b)", "a(-a + b)", "-ab(a + 1)"],
        "correctAnswer": 0,
        "hint": "הוציאו את מינוס a. כל הסימנים בתוך הסוגריים יהפכו לחיוביים.",
        "solution_steps": [
            { "verbal_explanation": "שני האיברים שליליים ומכילים את המשתנה איי. הגורם המשותף יהיה מינוס איי.", "math_expression": "-a" },
            { "verbal_explanation": "נחלק את האיבר השמאלי בגורם. מינוס חלקי מינוס נותן תוצאה חיובית.", "math_expression": "-a^2 \\div -a = a" },
            { "verbal_explanation": "נחלק את האיבר הימני בגורם המשותף. גם כאן התוצאה תהיה חיובית ותשאיר אותנו עם בי.", "math_expression": "-ab \\div -a = b" },
            { "verbal_explanation": "נכתוב את התוצאה הסופית, שבה הסוגריים מכילים רק פלוסים.", "math_expression": "-a(a + b)" }
        ],
        "final_answer": "-a(a + b)"
    },

    // ==========================================
    // תת נושא 3: נוסחאות הכפל המקוצר (10 שאלות)
    // ==========================================
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "השתמשו בנוסחת הכפל המקוצר לריבוע של סכום כדי לפתוח את הסוגריים: \\( (x + 5)^2 \\)&rlm;",
        "options": ["x^2 + 10x + 25", "x^2 + 25", "x^2 + 5x + 25", "x^2 + 10"],
        "correctAnswer": 0,
        "hint": "הנוסחה היא: האיבר הראשון בריבוע, ועוד פעמיים מכפלת האיברים, ועוד האיבר השני בריבוע. \\( (a+b)^2 = a^2 + 2ab + b^2 \\).",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת הכפל המקוצר הראשונה הידועה כריבוע סכום.", "math_expression": "(a + b)^2 = a^2 + 2ab + b^2" },
            { "verbal_explanation": "נעלה את האיבר הראשון שבסוגריים בחזקה שנייה.", "math_expression": "x^2" },
            { "verbal_explanation": "נחשב את האיבר האמצעי על ידי כפל של שתיים באיבר הראשון ובאיבר השני יחד.", "math_expression": "2 \\cdot x \\cdot 5 = 10x" },
            { "verbal_explanation": "נעלה את האיבר השני בחזקה שנייה.", "math_expression": "5^2 = 25" },
            { "verbal_explanation": "נחבר את שלושת האיברים לביטוי אחד.", "math_expression": "x^2 + 10x + 25" }
        ],
        "final_answer": "x^2 + 10x + 25"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "פתחו את הסוגריים בעזרת נוסחת הכפל המקוצר לריבוע של הפרש: \\( (x - 3)^2 \\)&rlm;",
        "options": ["x^2 - 6x + 9", "x^2 - 9", "x^2 - 3x + 9", "x^2 + 6x - 9"],
        "correctAnswer": 0,
        "hint": "הנוסחה כמעט זהה לקודמת, רק שהאיבר האמצעי מקבל סימן מינוס. \\( (a-b)^2 = a^2 - 2ab + b^2 \\).",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחה השנייה המטפלת בהפרש בריבוע, שם האיבר האמצעי הוא שלילי.", "math_expression": "(a - b)^2 = a^2 - 2ab + b^2" },
            { "verbal_explanation": "נעלה את המשתנה איקס בחזקה.", "math_expression": "x^2" },
            { "verbal_explanation": "נחשב את מכפלת הפעמיים עם הסימן השלילי.", "math_expression": "-2 \\cdot x \\cdot 3 = -6x" },
            { "verbal_explanation": "האיבר האחרון תמיד יהיה חיובי, שכן מספר שלילי בריבוע הופך לחיובי.", "math_expression": "(-3)^2 = 9" },
            { "verbal_explanation": "התוצאה הסופית והמלאה.", "math_expression": "x^2 - 6x + 9" }
        ],
        "final_answer": "x^2 - 6x + 9"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "השתמשו בנוסחת הכפל המקוצר השלישית (הפרש ריבועים) כדי לפתור: \\( (x - 7)(x + 7) \\)&rlm;",
        "options": ["x^2 - 49", "x^2 + 49", "x^2 - 14x + 49", "x^2 - 14"],
        "correctAnswer": 0,
        "hint": "הנוסחה היא: \\( (a-b)(a+b) = a^2 - b^2 \\). האיברים האמצעיים מתבטלים.",
        "solution_steps": [
            { "verbal_explanation": "תבנית המורכבת משני סוגריים זהים שבאחד פלוס ובשני מינוס נקראת הפרש ריבועים.", "math_expression": "(a - b)(a + b) = a^2 - b^2" },
            { "verbal_explanation": "אין צורך לפתוח את כל הסוגריים, האיברים האמצעיים יקזזו זה את זה ממילא.", "math_expression": "-7x + 7x = 0" },
            { "verbal_explanation": "ניקח את האיבר הראשון ונעלה אותו בריבוע.", "math_expression": "x^2" },
            { "verbal_explanation": "נחסר ממנו את האיבר השני מועלה בריבוע.", "math_expression": "- 7^2 = -49" },
            { "verbal_explanation": "נקבל ביטוי קצר של שני איברים בלבד.", "math_expression": "x^2 - 49" }
        ],
        "final_answer": "x^2 - 49"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "פתחו את הסוגריים: \\( (2x + 1)^2 \\)&rlm;",
        "options": ["4x^2 + 4x + 1", "2x^2 + 2x + 1", "4x^2 + 1", "4x^2 + 2x + 1"],
        "correctAnswer": 0,
        "hint": "כשמעלים את האיבר הראשון (2x) בריבוע, יש להעלות גם את ה-2 וגם את ה-x בריבוע. נקבל ארבעה x בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת הריבוע של סכום על התבנית הנתונה.", "math_expression": "(2x + 1)^2" },
            { "verbal_explanation": "כאשר מעלים את האיבר הראשון בריבוע, חובה להחיל את החזקה גם על המספר שתיים וגם על המשתנה.", "math_expression": "(2x)^2 = 4x^2" },
            { "verbal_explanation": "נחשב את האיבר האמצעי: שתיים, כפול האיבר הראשון, כפול האיבר השני.", "math_expression": "2 \\cdot 2x \\cdot 1 = 4x" },
            { "verbal_explanation": "האיבר האחרון בריבוע נשאר אחד.", "math_expression": "1^2 = 1" },
            { "verbal_explanation": "חיבור כלל האיברים למשוואה אחת שלמה.", "math_expression": "4x^2 + 4x + 1" }
        ],
        "final_answer": "4x^2 + 4x + 1"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "פרקו את הביטוי הבא לגורמים באמצעות נוסחת הפרש ריבועים הפוכה: \\( y^2 - 100 \\)&rlm;",
        "options": ["(y - 10)(y + 10)", "(y - 50)(y + 50)", "(y - 10)^2", "(y - 10)(y - 10)"],
        "correctAnswer": 0,
        "hint": "איזה מספר בריבוע שווה ל-100? הציבו אותו ואת y בשני סוגריים עם פלוס ומינוס.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת הפרש ריבועים בכיוון ההפוך, כלי יעיל מאוד לפירוק לגורמים.", "math_expression": "a^2 - b^2 = (a - b)(a + b)" },
            { "verbal_explanation": "האיבר הראשון שלנו הוא וואי בריבוע, לכן השורש שלו הוא פשוט וואי.", "math_expression": "\\sqrt{y^2} = y" },
            { "verbal_explanation": "נחפש את השורש הריבועי של המספר מאה, כדי לדעת איזה מספר הועלה בריבוע.", "math_expression": "\\sqrt{100} = 10" },
            { "verbal_explanation": "נרכיב זוג סוגריים. באחד נחבר את האיברים, ובשני נחסר אותם.", "math_expression": "(y - 10)(y + 10)" }
        ],
        "final_answer": "(y - 10)(y + 10)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "פתחו סוגריים: \\( (3a - 4b)^2 \\)&rlm;",
        "options": ["9a^2 - 24ab + 16b^2", "9a^2 - 12ab + 16b^2", "9a^2 - 16b^2", "3a^2 - 24ab + 4b^2"],
        "correctAnswer": 0,
        "hint": "שימו לב לאיבר האמצעי: 2 כפול 3a כפול 4b.",
        "solution_steps": [
            { "verbal_explanation": "נפעיל את נוסחת ריבוע ההפרש על איברים מורכבים יותר המכילים מספרים ומשתנים יחד.", "math_expression": "(3a - 4b)^2" },
            { "verbal_explanation": "האיבר הראשון בריבוע ידרוש חזקה גם לשלוש וגם למשתנה איי.", "math_expression": "(3a)^2 = 9a^2" },
            { "verbal_explanation": "נחשב את המכפלה המרכזית ונכפיל אותה בשתיים עם סימן שלילי.", "math_expression": "-2 \\cdot 3a \\cdot 4b = -24ab" },
            { "verbal_explanation": "האיבר השני בריבוע ידרוש חזקה למספר ארבע ולמשתנה בי.", "math_expression": "(4b)^2 = 16b^2" },
            { "verbal_explanation": "נחבר את הפריטים למבנה השלם.", "math_expression": "9a^2 - 24ab + 16b^2" }
        ],
        "final_answer": "9a^2 - 24ab + 16b^2"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "האם שני הביטויים הבאים שווים: \\( (x + 3)^2 \\) ו- \\( x^2 + 9 \\)?&rlm;",
        "options": ["לא, חסר האיבר האמצעי (6x) בביטוי השני", "כן, הם זהים לחלוטין", "לא, כי 3 בריבוע זה 6 ולא 9", "כן, ככה פותחים סוגריים בחזקה"],
        "correctAnswer": 0,
        "hint": "פתיחת סוגריים בריבוע לעולם אינה יכולה להיות פשוט העלאה בריבוע של כל איבר בנפרד ללא האיבר האמצעי.",
        "solution_steps": [
            { "verbal_explanation": "טעות נפוצה מאוד היא לחשוב שהחזקה מתחלקת על איברי הסוגריים בלי לייצר איבר מרכזי.", "math_expression": "(a + b)^2 \\neq a^2 + b^2" },
            { "verbal_explanation": "נפתח את הסוגריים לפי הנוסחה התקינה ונראה מה מתקבל באמת.", "math_expression": "(x + 3)^2 = x^2 + 6x + 9" },
            { "verbal_explanation": "נשווה את התוצאה המלאה לביטוי החלקי שניתן לנו בשאלה.", "math_expression": "x^2 + 6x + 9 \\neq x^2 + 9" },
            { "verbal_explanation": "ניכר כי חסר האיבר האמצעי כדי שהם יהיו שווים.", "math_expression": "6x" }
        ],
        "final_answer": "לא, חסר האיבר האמצעי (6x) בביטוי השני"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "איזה ביטוי נותן את התוצאה \\( 25x^2 - 1 \\) לאחר פתיחת סוגריים?&rlm;",
        "options": ["(5x - 1)(5x + 1)", "(5x - 1)^2", "(25x - 1)(x + 1)", "(5x + 1)^2"],
        "correctAnswer": 0,
        "hint": "יש לנו שני איברים שמועלים בריבוע ויש ביניהם סימן חיסור. זוהי נוסחת הפרש ריבועים. מצאו את השורשים.",
        "solution_steps": [
            { "verbal_explanation": "הביטוי מציג הפרש בין שני איברים, המרמז על שימוש בנוסחת הפרש הריבועים.", "math_expression": "25x^2 - 1" },
            { "verbal_explanation": "נמצא את השורש הריבועי של האיבר הראשון לקבלת האיבר הראשון בסוגריים.", "math_expression": "\\sqrt{25x^2} = 5x" },
            { "verbal_explanation": "נמצא את השורש הריבועי של האיבר השני (אחד בריבוע נשאר אחד).", "math_expression": "\\sqrt{1} = 1" },
            { "verbal_explanation": "נבנה זוג סוגריים עם פלוס ומינוס לפי המרכיבים שחילצנו.", "math_expression": "(5x - 1)(5x + 1)" }
        ],
        "final_answer": "(5x - 1)(5x + 1)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "מה צריך לכתוב במקום המקום הריק כדי שיתקבל פירוק נכון: \\( x^2 + 8x + 16 = (x + \\square)^2 \\)?&rlm;",
        "options": ["4", "8", "16", "2"],
        "correctAnswer": 0,
        "hint": "האיבר האחרון בביטוי הפתוח (16) הוא המספר שחיפשתם מועלה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "התבנית המוצגת היא תוצאה של נוסחת סכום בריבוע.", "math_expression": "x^2 + 2ax + a^2" },
            { "verbal_explanation": "האיבר האחרון במשוואה הפתוחה, שש עשרה, חייב להיות השורש הריבועי של המספר החסר לנו.", "math_expression": "a^2 = 16" },
            { "verbal_explanation": "המספר שבריבוע נותן שש עשרה הוא ארבע. נוכל לבדוק זאת גם בעזרת האיבר האמצעי, שתיים כפול ארבע זה שמונה.", "math_expression": "4^2 = 16 \\quad , \\quad 2 \\times 4 = 8" },
            { "verbal_explanation": "לכן המספר החסר בסוגריים הוא ארבע.", "math_expression": "4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "נוסחאות הכפל המקוצר",
        "question_text": "חשבו בעל פה וביוזמה מהירה בעזרת נוסחת הפרש ריבועים: \\( 51 \\times 49 \\)&rlm;",
        "options": ["2499", "2501", "2400", "2510"],
        "correctAnswer": 0,
        "hint": "שימו לב ש-51 זה 50+1, ו-49 זה 50-1. הפעילו את הנוסחה: (50+1)(50-1) שווה ל-50 בריבוע פחות 1 בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בתחבולה של הכפל המקוצר כדי לחשב תרגיל מורכב בעל פה. נציג את המספרים כיחסה למספר עגול.", "math_expression": "51 = 50 + 1 \\quad , \\quad 49 = 50 - 1" },
            { "verbal_explanation": "נרשום את התרגיל באמצעות הסוגריים החדשים שניסחנו.", "math_expression": "(50 + 1)(50 - 1)" },
            { "verbal_explanation": "לפי הנוסחה להפרש ריבועים, המכפלה שווה לריבוע של הראשון פחות הריבוע של השני.", "math_expression": "50^2 - 1^2" },
            { "verbal_explanation": "חמישים בריבוע זה אלפיים וחמש מאות. אחד בריבוע זה אחד.", "math_expression": "2500 - 1" },
            { "verbal_explanation": "נחסר אחד לקבלת התשובה הקלה.", "math_expression": "2499" }
        ],
        "final_answer": "2499"
    },

    // ==========================================
    // תת נושא 4: פירוק לפי קבוצות (10 שאלות)
    // ==========================================
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "פרקו לגורמים את הביטוי על ידי חלוקה לזוגות: \\( x^2 + 3x + 2x + 6 \\)&rlm;",
        "options": ["(x + 3)(x + 2)", "(x^2 + 2)(3x + 6)", "(x + 1)(x + 6)", "x(x + 5) + 6"],
        "correctAnswer": 0,
        "hint": "הוציאו גורם משותף מ-2 האיברים הראשונים (x), ואז מ-2 האיברים האחרונים (2). מהמשותף שנוצר, הוציאו סוגריים.",
        "solution_steps": [
            { "verbal_explanation": "שיטת הפירוק לקבוצות דורשת חלוקת ארבעת האיברים לשני זוגות שיטופלו בנפרד.", "math_expression": "(x^2 + 3x) \\quad , \\quad (2x + 6)" },
            { "verbal_explanation": "נוציא גורם משותף מהזוג הראשון. הגורם הוא המשתנה.", "math_expression": "x(x + 3)" },
            { "verbal_explanation": "נוציא גורם משותף מהזוג השני. הגורם הוא המספר שתיים.", "math_expression": "2(x + 3)" },
            { "verbal_explanation": "נכתוב את הביטוי החדש עם שני החלקים המפורקים. נשים לב שנוצרו סוגריים משותפים בדיוק.", "math_expression": "x(x + 3) + 2(x + 3)" },
            { "verbal_explanation": "כעת נוציא את הסוגריים המשותפים כגורם החוצה, ונארוז את השאריות יחד.", "math_expression": "(x + 3)(x + 2)" }
        ],
        "final_answer": "(x + 3)(x + 2)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "פירוק לפי קבוצות של הביטוי: \\( ab + ac + 5b + 5c \\) נותן את התוצאה הבאה:&rlm;",
        "options": ["(a + 5)(b + c)", "a(b + c) + 5", "5a(b + c)", "(a + b)(c + 5)"],
        "correctAnswer": 0,
        "hint": "חלקו ל-(ab+ac) ול-(5b+5c). הוציאו a מהראשון ו-5 מהשני.",
        "solution_steps": [
            { "verbal_explanation": "נחלק את הביטוי לשתי קבוצות שוות משמאל ומימין.", "math_expression": "(ab + ac) + (5b + 5c)" },
            { "verbal_explanation": "מהקבוצה הראשונה נוכל להוציא את המשתנה המשותף.", "math_expression": "a(b + c)" },
            { "verbal_explanation": "מהקבוצה השנייה נוכל להוציא את המספר חמש כגורם משותף.", "math_expression": "5(b + c)" },
            { "verbal_explanation": "נקבל ביטוי עם סוגריים זהים החוזרים על עצמם בשני הצדדים.", "math_expression": "a(b + c) + 5(b + c)" },
            { "verbal_explanation": "נוציא את הסוגריים החוזרים כגורם אחד, ונרכיב את הזוג השני מהמקדמים הנותרים.", "math_expression": "(b + c)(a + 5)" }
        ],
        "final_answer": "(a + 5)(b + c)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "פרקו לגורמים על ידי שיטת הקבוצות: \\( y^2 - 4y + xy - 4x \\)&rlm;",
        "options": ["(y + x)(y - 4)", "(y - 4)(y - x)", "x(y - 4) + y^2", "(y + 4)(y - x)"],
        "correctAnswer": 0,
        "hint": "הקבוצה הראשונה תיתן לכם y(y-4). הקבוצה השנייה תיתן x(y-4).",
        "solution_steps": [
            { "verbal_explanation": "נפצל את איברי המשוואה לשני צמדים הממוקמים ברצף.", "math_expression": "(y^2 - 4y) + (xy - 4x)" },
            { "verbal_explanation": "מהזוג השמאלי נוציא את המשתנה וואי בלבד.", "math_expression": "y(y - 4)" },
            { "verbal_explanation": "מהזוג הימני ניתן להוציא את המשתנה איקס החוצה.", "math_expression": "x(y - 4)" },
            { "verbal_explanation": "נחבר את שני החלקים ונראה שהם חולקים סוגריים פנימיים זהים.", "math_expression": "y(y - 4) + x(y - 4)" },
            { "verbal_explanation": "ניצור מכפלה של הסוגריים המשותפים יחד עם המקדמים שהוצאו החוצה.", "math_expression": "(y - 4)(y + x)" }
        ],
        "final_answer": "(y + x)(y - 4)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "מה הפירוק של \\( x^3 + 2x^2 + 3x + 6 \\) באמצעות קבוצות?&rlm;",
        "options": ["(x^2 + 3)(x + 2)", "(x^2 + 2)(x + 3)", "x^2(x + 2) + 3", "(x + 1)(x^2 + 6)"],
        "correctAnswer": 0,
        "hint": "מהקבוצה הראשונה הוציאו את החזקה הנמוכה (x בריבוע). מהשנייה הוציאו 3.",
        "solution_steps": [
            { "verbal_explanation": "נארגן את האיברים לשתי קבוצות לפי סדר הופעתם.", "math_expression": "(x^3 + 2x^2) + (3x + 6)" },
            { "verbal_explanation": "בצד שמאל, נוציא כגורם את החזקה המקסימלית האפשרית לשניהם, שהיא איקס בריבוע.", "math_expression": "x^2(x + 2)" },
            { "verbal_explanation": "בצד ימין, נחלק את שני האיברים במספר שלוש כגורם המשותף.", "math_expression": "3(x + 2)" },
            { "verbal_explanation": "שוב הגענו לסוגריים זהים שאפשר להוציא החוצה כגורם על-משותף.", "math_expression": "x^2(x + 2) + 3(x + 2)" },
            { "verbal_explanation": "הפתרון מוצג כמכפלה של שני הביטויים.", "math_expression": "(x + 2)(x^2 + 3)" }
        ],
        "final_answer": "(x^2 + 3)(x + 2)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "פירוק לקבוצות של: \\( 2am - 2an + bm - bn \\)&rlm;",
        "options": ["(2a + b)(m - n)", "(a + 2b)(m - n)", "(2a - b)(m + n)", "2a(m - n) + b"],
        "correctAnswer": 0,
        "hint": "מהזוג הראשון מוציאים 2a. מהזוג השני מוציאים b.",
        "solution_steps": [
            { "verbal_explanation": "נקבץ את האיברים לצמדים שמכילים אותיות משותפות ככל הניתן.", "math_expression": "(2am - 2an) + (bm - bn)" },
            { "verbal_explanation": "מהצמד הראשון נוכל להוציא החוצה מספר ומשתנה יחד.", "math_expression": "2a(m - n)" },
            { "verbal_explanation": "מהצמד השני נוכל להוציא משתנה יחיד החוצה.", "math_expression": "b(m - n)" },
            { "verbal_explanation": "נרכיב את המשוואה ונוודא שהסוגריים הפנימיים יצאו זהים לחלוטין.", "math_expression": "2a(m - n) + b(m - n)" },
            { "verbal_explanation": "נוציא את סוגרי הנגזרת המשותפת כמכפיל אחד.", "math_expression": "(m - n)(2a + b)" }
        ],
        "final_answer": "(2a + b)(m - n)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "שימו לב לסימנים בפירוק לקבוצות: \\( mx - nx - m + n \\)&rlm;",
        "options": ["(m - n)(x - 1)", "(m + n)(x - 1)", "(m - n)(x + 1)", "x(m - n) - 1"],
        "correctAnswer": 0,
        "hint": "מהזוג הראשון הוציאו x. מהזוג השני הוציאו את המספר מינוס 1 (כדי שהסימנים בסוגריים יהיו זהים לראשונים).",
        "solution_steps": [
            { "verbal_explanation": "נחלק את המשוואה לשני זוגות. נשים לב לסימנים בשארית.", "math_expression": "(mx - nx) \\quad , \\quad (-m + n)" },
            { "verbal_explanation": "מהזוג הראשון קל להוציא את המשתנה כאות משותפת.", "math_expression": "x(m - n)" },
            { "verbal_explanation": "כדי שבזוג השני נקבל סוגריים של (אמ פחות אן), עלינו להוציא מינוס אחד החוצה.", "math_expression": "-1(m - n)" },
            { "verbal_explanation": "נאחד את שני החלקים עם הגורם המשותף המורכב.", "math_expression": "x(m - n) - 1(m - n)" },
            { "verbal_explanation": "הפתרון משלב את המקדמים החיצוניים לסוגריים משלהם.", "math_expression": "(m - n)(x - 1)" }
        ],
        "final_answer": "(m - n)(x - 1)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "פרקו לגורמים: \\( 6y^2 + 15y + 4y + 10 \\)&rlm;",
        "options": ["(3y + 2)(2y + 5)", "(2y + 5)(3y + 4)", "(3y - 2)(2y - 5)", "(6y + 5)(y + 2)"],
        "correctAnswer": 0,
        "hint": "מהזוג הראשון ניתן להוציא 3y. מהזוג השני הוציאו 2.",
        "solution_steps": [
            { "verbal_explanation": "נארגן את הביטוי לשתי קבוצות עבודה רצופות.", "math_expression": "(6y^2 + 15y) + (4y + 10)" },
            { "verbal_explanation": "מהקבוצה הראשונה נחפש את המחלק הגדול ביותר, שהוא שלוש, יחד עם המשתנה.", "math_expression": "3y(2y + 5)" },
            { "verbal_explanation": "מהקבוצה השנייה נחפש את המחלק המשותף למספרים בלבד, שהוא שתיים.", "math_expression": "2(2y + 5)" },
            { "verbal_explanation": "נכתוב את הביטוי ונראה שהסוגריים הפנימיים זהים להפליא.", "math_expression": "3y(2y + 5) + 2(2y + 5)" },
            { "verbal_explanation": "נאסוף את השאריות לסוגריים חדשים שמכפילים את הגורם שהוצאנו.", "math_expression": "(2y + 5)(3y + 2)" }
        ],
        "final_answer": "(3y + 2)(2y + 5)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "לעיתים יש צורך להוציא גורם משותף מכל הביטוי לפני הפירוק לקבוצות: \\( 2x^3 - 4x^2 + 6x - 12 \\). מהו הפירוק המלא?&rlm;",
        "options": ["2(x^2 + 3)(x - 2)", "(2x^2 + 6)(x - 2)", "2x(x^2 - 2x + 3)", "2(x^2 - 3)(x + 2)"],
        "correctAnswer": 0,
        "hint": "הוציאו קודם את המספר 2 מכל הביטוי. ואז פרקו לקבוצות את מה שנשאר בתוך הסוגריים הגדולים.",
        "solution_steps": [
            { "verbal_explanation": "נזהה שלכל ארבעת האיברים בביטוי יש גורם מספרי משותף: כל המספרים הם זוגיים ומתחלקים בשתיים.", "math_expression": "2(x^3 - 2x^2 + 3x - 6)" },
            { "verbal_explanation": "עכשיו נתמקד רק בתוכן הסוגריים ונבצע עליו פירוק לקבוצות כרגיל. נחלק לזוגות.", "math_expression": "(x^3 - 2x^2) + (3x - 6)" },
            { "verbal_explanation": "נוציא גורם משותף משמאל וגורם משותף מימין בתוך הסוגריים הגדולים.", "math_expression": "x^2(x - 2) + 3(x - 2)" },
            { "verbal_explanation": "נארוז את התוצאה הפנימית למכפלת סוגריים.", "math_expression": "(x^2 + 3)(x - 2)" },
            { "verbal_explanation": "נוסיף את המכפיל שתיים שהוצאנו בהתחלה אל קדמת הביטוי המלא והמפורק.", "math_expression": "2(x^2 + 3)(x - 2)" }
        ],
        "final_answer": "2(x^2 + 3)(x - 2)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "מה קורה כאשר לא ניתן לפרק מיד לפי הסדר הכתוב? \\( x^2 + ab + bx + ax \\). נסו לסדר מחדש את האיברים כדי לפרק לזוגות.&rlm;",
        "options": ["(x + b)(x + a)", "(x + a)(x - b)", "(x^2 + ab)(bx + ax)", "אי אפשר לפרק"],
        "correctAnswer": 0,
        "hint": "החליפו את המקומות של האיברים האמצעיים כך שיווצרו שני זוגות עם גורם משותף. (x^2 + ax) ועוד (bx + ab).",
        "solution_steps": [
            { "verbal_explanation": "כפי שהביטוי רשום, לשני האיברים הראשונים (איקס בריבוע ואיי בי) אין שום גורם משותף. נחליף את הסדר שלהם.", "math_expression": "x^2 + ax + bx + ab" },
            { "verbal_explanation": "עכשיו נחלק את הביטוי המסודר לשתי קבוצות עבודה בעלות היגיון משותף.", "math_expression": "(x^2 + ax) + (bx + ab)" },
            { "verbal_explanation": "מהצמד הראשון נוציא את המשתנה איקס החוצה.", "math_expression": "x(x + a)" },
            { "verbal_explanation": "מהצמד השני נאתר ונוציא את המשתנה בי.", "math_expression": "b(x + a)" },
            { "verbal_explanation": "קיבלנו סוגריים פנימיים משותפים. נאחד את הפירוק.", "math_expression": "(x + a)(x + b)" }
        ],
        "final_answer": "(x + b)(x + a)"
    },
    {
        "topic": "distributive_law_factoring_grade_8",
        "subTopic": "פירוק לפי קבוצות",
        "question_text": "פרקו לפי קבוצות את הביטוי: \\( 5x - 5y + ax - ay \\)&rlm;",
        "options": ["(5 + a)(x - y)", "(5 - a)(x + y)", "5a(x - y)", "(5 + x)(a - y)"],
        "correctAnswer": 0,
        "hint": "הקבוצה הראשונה תיתן 5 כפול (x-y). השנייה תיתן a כפול (x-y).",
        "solution_steps": [
            { "verbal_explanation": "הביטוי הנתון כבר מסודר בצורה נוחה לחלוקה לזוגות.", "math_expression": "(5x - 5y) + (ax - ay)" },
            { "verbal_explanation": "ניקח את הזוג הראשון ונוציא ממנו את המספר המשותף חמש.", "math_expression": "5(x - y)" },
            { "verbal_explanation": "ניקח את הזוג השני ונוציא ממנו את המשתנה המשותף איי.", "math_expression": "a(x - y)" },
            { "verbal_explanation": "נאחד את שני הביטויים המפורקים לשורה אחת ונבדוק האם הסוגריים זהים.", "math_expression": "5(x - y) + a(x - y)" },
            { "verbal_explanation": "מכיוון שהם זהים, נוציא אותם כגורם אחד יחד עם סכום המקדמים.", "math_expression": "(x - y)(5 + a)" }
        ],
        "final_answer": "(5 + a)(x - y)"
    }
];