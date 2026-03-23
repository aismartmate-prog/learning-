const questionsDB = [
    // ==========================================
    // תת נושא 1: צמצום שברים אלגבריים (10 שאלות)
    // ==========================================
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר האלגברי הבא: \\( \\frac{12x^2}{4x} \\)&rlm;",
        "options": ["3x", "8x", "3x^2", "3"],
        "correctAnswer": 0,
        "hint": "צמצמו את המספרים בנפרד ואת המשתנים בנפרד. שנים עשר לחלק לארבע שווה שלוש.",
        "solution_steps": [
            { "verbal_explanation": "נפצל את השבר לשני חלקים כדי להקל על הפתרון: חלק למספרים וחלק למשתנים.", "math_expression": "\\frac{12}{4} \\times \\frac{x^2}{x}" },
            { "verbal_explanation": "נחשב את החלק המספרי על ידי חילוק רגיל.", "math_expression": "12 \\div 4 = 3" },
            { "verbal_explanation": "נצמצם את החלק המשתנה. איקס בריבוע חלקי איקס שווה לאיקס בודד אחד.", "math_expression": "x^2 \\div x = x" },
            { "verbal_explanation": "נחבר את התוצאות לביטוי אחד שלם.", "math_expression": "3x" }
        ],
        "final_answer": "3x"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר האלגברי הבא: \\( \\frac{5x + 15}{5} \\)&rlm;",
        "options": ["x + 3", "x + 15", "5x + 3", "x + 5"],
        "correctAnswer": 0,
        "hint": "הוציאו תחילה גורם משותף מתוך המונה. לאחר מכן תוכלו לצמצם אותו עם המכנה.",
        "solution_steps": [
            { "verbal_explanation": "נסתכל על המונה בלבד ונחפש גורם משותף. המספר חמש משותף לשני האיברים.", "math_expression": "5(x + 3)" },
            { "verbal_explanation": "נרשום את השבר מחדש עם המונה המפורק.", "math_expression": "\\frac{5(x + 3)}{5}" },
            { "verbal_explanation": "מכיוון שהמספר חמש מופיע ככופל גם במונה וגם במכנה, ניתן לצמצמו (למחוק אותו).", "math_expression": "5 \\div 5 = 1" },
            { "verbal_explanation": "נשארנו רק עם הביטוי שהיה בתוך הסוגריים.", "math_expression": "x + 3" }
        ],
        "final_answer": "x + 3"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר: \\( \\frac{x^2 - 4x}{x} \\)&rlm;",
        "options": ["x - 4", "x^2 - 4", "x - 4x", "1 - 4x"],
        "correctAnswer": 0,
        "hint": "הוציאו את איקס כגורם משותף מחוץ לסוגריים במונה, ואז בצעו צמצום.",
        "solution_steps": [
            { "verbal_explanation": "המונה מורכב משני איברים המכילים את המשתנה איקס. נוציא איקס מחוץ לסוגריים.", "math_expression": "x(x - 4)" },
            { "verbal_explanation": "נכתוב את השבר מחדש עם הפירוק שביצענו.", "math_expression": "\\frac{x(x - 4)}{x}" },
            { "verbal_explanation": "ניתן לצמצם את האיקס שנמצא מחוץ לסוגריים במונה יחד עם האיקס שבמכנה.", "math_expression": "x \\div x = 1" },
            { "verbal_explanation": "הביטוי הנותר הוא מה שהיה בתוך הסוגריים.", "math_expression": "x - 4" }
        ],
        "final_answer": "x - 4"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר הבא בעזרת נוסחת הפרש ריבועים: \\( \\frac{x^2 - 25}{x - 5} \\)&rlm;",
        "options": ["x + 5", "x - 5", "x^2 - 5", "x - 20"],
        "correctAnswer": 0,
        "hint": "מונה השבר הוא הפרש ריבועים. לפי הנוסחה, הוא שווה ל- (x-5) כפול (x+5).",
        "solution_steps": [
            { "verbal_explanation": "נזהה שהמונה הוא הפרש בין שני ריבועים (איקס בריבוע וחמש בריבוע).", "math_expression": "x^2 - 5^2" },
            { "verbal_explanation": "נפרק את המונה לפי הנוסחה להפרש ריבועים לשני סוגריים.", "math_expression": "(x - 5)(x + 5)" },
            { "verbal_explanation": "נרשום את השבר מחדש עם המונה המפורק.", "math_expression": "\\frac{(x - 5)(x + 5)}{x - 5}" },
            { "verbal_explanation": "הביטוי איקס פחות חמש מופיע במלואו גם במונה וגם במכנה. נצמצם אותו.", "math_expression": "1" },
            { "verbal_explanation": "התוצאה הסופית שנותרה היא הסוגריים השניים.", "math_expression": "x + 5" }
        ],
        "final_answer": "x + 5"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר האלגברי: \\( \\frac{6a^2b}{3ab} \\)&rlm;",
        "options": ["2a", "2ab", "3a", "2a^2"],
        "correctAnswer": 0,
        "hint": "צמצמו את המספרים בנפרד, את האות a בנפרד ואת האות b בנפרד.",
        "solution_steps": [
            { "verbal_explanation": "נפריד את השבר לשלושה חלקים לחישוב קל יותר: חלק מספרי, משתנה ראשון ומשתנה שני.", "math_expression": "\\frac{6}{3} \\times \\frac{a^2}{a} \\times \\frac{b}{b}" },
            { "verbal_explanation": "נחלק את המספר שש בשלוש לקבלת שתיים.", "math_expression": "6 \\div 3 = 2" },
            { "verbal_explanation": "נחלק איי בריבוע באיי ונקבל איי יחיד.", "math_expression": "a^2 \\div a = a" },
            { "verbal_explanation": "חלוקת בי בבי מצטמצמת לאחד ונעלמת.", "math_expression": "b \\div b = 1" },
            { "verbal_explanation": "נרכיב את התשובה הסופית מהחלקים שנשארו.", "math_expression": "2a" }
        ],
        "final_answer": "2a"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "מהי התוצאה לאחר צמצום השבר: \\( \\frac{2x + 8}{3x + 12} \\)?&rlm;",
        "options": ["2/3", "2x/3x", "8/12", "x + 4"],
        "correctAnswer": 0,
        "hint": "הוציאו גורם משותף גם מהמונה (2) וגם מהמכנה (3). תראו שיש סוגריים זהים שאפשר למחוק.",
        "solution_steps": [
            { "verbal_explanation": "נפרק את המונה לגורמים על ידי הוצאת המספר שתיים מחוץ לסוגריים.", "math_expression": "2(x + 4)" },
            { "verbal_explanation": "נפרק את המכנה לגורמים על ידי הוצאת המספר שלוש מחוץ לסוגריים.", "math_expression": "3(x + 4)" },
            { "verbal_explanation": "נכתוב את השבר מחדש לאחר שני הפירוקים.", "math_expression": "\\frac{2(x + 4)}{3(x + 4)}" },
            { "verbal_explanation": "הסוגריים איקס ועוד ארבע זהים במונה ובמכנה ולכן מצטמצמים כליל.", "math_expression": "1" },
            { "verbal_explanation": "השבר הפשוט שנותר הוא שני שלישים.", "math_expression": "\\frac{2}{3}" }
        ],
        "final_answer": "2/3"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר על ידי הוצאת גורם משותף שלילי: \\( \\frac{5 - x}{x - 5} \\)&rlm;",
        "options": ["-1", "1", "0", "5/x"],
        "correctAnswer": 0,
        "hint": "המונה והמכנה דומים מאוד, אך סדר החיסור שלהם הפוך. הוציאו מינוס אחד מהמונה והשוו אותם.",
        "solution_steps": [
            { "verbal_explanation": "הביטוי במונה הפוך בסימניו לביטוי שבמכנה.", "math_expression": "(5 - x) \\quad , \\quad (x - 5)" },
            { "verbal_explanation": "כדי להשוות ביניהם, נוציא מינוס אחד כגורם משותף מהמונה. הדבר הופך את כל הסימנים בפנים.", "math_expression": "-1(-5 + x) = -1(x - 5)" },
            { "verbal_explanation": "נרשום את השבר מחדש עם המונה המותאם.", "math_expression": "\\frac{-1(x - 5)}{x - 5}" },
            { "verbal_explanation": "כעת נוכל לצמצם את הסוגריים בשלמותם.", "math_expression": "1" },
            { "verbal_explanation": "התוצאה הסופית והמפתיעה היא מינוס אחד.", "math_expression": "-1" }
        ],
        "final_answer": "-1"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר הבא (היעזרו בנוסחת כפל מקוצר במונה): \\( \\frac{x^2 + 6x + 9}{x + 3} \\)&rlm;",
        "options": ["x + 3", "x^2 + 3", "x + 9", "2x + 3"],
        "correctAnswer": 0,
        "hint": "המונה הוא למעשה תוצאה של סוגריים שעלו בריבוע. חשבו אילו סוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נזהה שהמונה מתאים בצורתו לנוסחת ריבוע סכום של כפל מקוצר.", "math_expression": "x^2 + 2ax + a^2" },
            { "verbal_explanation": "המספר האחרון הוא תשע, שהוא השורש של שלוש בריבוע. לכן המונה שווה לאיקס ועוד שלוש, הכל בריבוע.", "math_expression": "(x + 3)^2" },
            { "verbal_explanation": "נכתוב את השבר מחדש עם המונה כפול עצמו.", "math_expression": "\\frac{(x + 3)(x + 3)}{x + 3}" },
            { "verbal_explanation": "נצמצם זוג אחד של סוגריים מהמונה עם המכנה השלם.", "math_expression": "1" },
            { "verbal_explanation": "נשארנו רק עם זוג סוגריים אחד כתוצאה סופית.", "math_expression": "x + 3" }
        ],
        "final_answer": "x + 3"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר: \\( \\frac{4x^3 - 8x^2}{2x^2} \\)&rlm;",
        "options": ["2x - 4", "2x - 2", "4x - 8", "2x^2 - 4"],
        "correctAnswer": 0,
        "hint": "הוציאו גורם משותף מירבי מתוך המונה (גם מספר וגם אות עם חזקה).",
        "solution_steps": [
            { "verbal_explanation": "נחפש את הגורם המשותף הגדול ביותר במונה. זהו המספר שתיים ואיקס בריבוע.", "math_expression": "2x^2" },
            { "verbal_explanation": "נוציא גורם זה אל מחוץ לסוגריים. בתוך הסוגריים ייוותר שני איקס פחות ארבע.", "math_expression": "2x^2(2x - 4)" },
            { "verbal_explanation": "נרשום את השבר המעודכן לצורך הצמצום.", "math_expression": "\\frac{2x^2(2x - 4)}{2x^2}" },
            { "verbal_explanation": "הגורם המשותף החיצוני מצטמצם לחלוטין עם המכנה שזהה לו.", "math_expression": "1" },
            { "verbal_explanation": "תוכן הסוגריים מהווה את התשובה הסופית.", "math_expression": "2x - 4" }
        ],
        "final_answer": "2x - 4"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "צמצום שברים אלגבריים",
        "question_text": "צמצמו את השבר הבא (היעזרו בפירוק לקבוצות במונה): \\( \\frac{ax + bx + ay + by}{a + b} \\)&rlm;",
        "options": ["x + y", "a + b", "ax + by", "xy"],
        "correctAnswer": 0,
        "hint": "פרקו את המונה לשני זוגות: (ax+bx) ו-(ay+by). הוציאו מכל זוג גורם משותף.",
        "solution_steps": [
            { "verbal_explanation": "המונה מורכב מארבעה איברים הדורשים פירוק לקבוצות. נחלק לשני צמדים.", "math_expression": "(ax + bx) + (ay + by)" },
            { "verbal_explanation": "מהצמד הראשון נוציא את המשתנה איקס החוצה כגורם משותף.", "math_expression": "x(a + b)" },
            { "verbal_explanation": "מהצמד השני נוציא את המשתנה וואי החוצה כגורם משותף.", "math_expression": "y(a + b)" },
            { "verbal_explanation": "המונה כולו נכתב מחדש כמכפלה של שני זוגות סוגריים.", "math_expression": "(a + b)(x + y)" },
            { "verbal_explanation": "נציב בשבר. הסוגריים המשותפים מצטמצמים עם המכנה.", "math_expression": "\\frac{(a + b)(x + y)}{a + b}" },
            { "verbal_explanation": "נותרנו עם התשובה המפושטת בלבד.", "math_expression": "x + y" }
        ],
        "final_answer": "x + y"
    },

    // ==========================================
    // תת נושא 2: כפל וחילוק שברים אלגבריים (10 שאלות)
    // ==========================================
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "חשבו את מכפלת השברים הבאה: \\( \\frac{2x}{3} \\times \\frac{9}{4x} \\)&rlm;",
        "options": ["3/2", "18x/12x", "x/2", "2/3"],
        "correctAnswer": 0,
        "hint": "ניתן לכפול מונה במונה ומכנה במכנה, ואז לצמצם את התוצאה.",
        "solution_steps": [
            { "verbal_explanation": "בכפל שברים, נכפול את המונים זה בזה ואת המכנים זה בזה בנפרד.", "math_expression": "\\frac{2x \\times 9}{3 \\times 4x}" },
            { "verbal_explanation": "נחשב את המכפלה העליונה (מונה).", "math_expression": "18x" },
            { "verbal_explanation": "נחשב את המכפלה התחתונה (מכנה).", "math_expression": "12x" },
            { "verbal_explanation": "נכתוב את השבר השלם שנוצר ונחל בצמצום. המשתנים מתבטלים לחלוטין.", "math_expression": "\\frac{18x}{12x} = \\frac{18}{12}" },
            { "verbal_explanation": "נצמצם את השבר המספרי על ידי חלוקת המונה והמכנה בשש.", "math_expression": "\\frac{3}{2}" }
        ],
        "final_answer": "3/2"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "חשבו את תרגיל הכפל הבא על ידי צמצום אלכסוני (לפני ההכפלה): \\( \\frac{x - 2}{5} \\times \\frac{10}{x - 2} \\)&rlm;",
        "options": ["2", "10/5", "1/2", "x - 2"],
        "correctAnswer": 0,
        "hint": "שימו לב ש-(x-2) מופיע גם במונה השמאלי וגם במכנה הימני. אפשר לצמצם אותם מיד.",
        "solution_steps": [
            { "verbal_explanation": "בכפל שברים, מותר לצמצם גורמים זהים המופיעים במונה של שבר אחד ובמכנה של השני.", "math_expression": "\\text{Cross Reduce}" },
            { "verbal_explanation": "נצמצם את הסוגריים השלמים הנמצאים בהצלבה. הם נעלמים מהמשוואה.", "math_expression": "(x - 2) \\div (x - 2) = 1" },
            { "verbal_explanation": "נצמצם גם את המספרים בהצלבה השנייה. עשר מתחלק בחמש לשתיים.", "math_expression": "10 \\div 5 = 2" },
            { "verbal_explanation": "כל מה שנותר לאחר הצמצום המהיר הוא המספר שתיים.", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "חשבו את תרגיל החילוק הבא: \\( \\frac{3x}{4} \\div \\frac{9x^2}{8} \\)&rlm;",
        "options": ["2/3x", "3x/2", "27x^3/32", "1/x"],
        "correctAnswer": 0,
        "hint": "חילוק בשבר שווה לכפל בשבר ההופכי שלו. הפכו את השבר השני, ואז כפלו וצמצמו.",
        "solution_steps": [
            { "verbal_explanation": "כלל יסוד בחילוק שברים הוא להפוך את השבר השני ולהמיר את הפעולה לכפל.", "math_expression": "\\frac{3x}{4} \\times \\frac{8}{9x^2}" },
            { "verbal_explanation": "כעת נוכל לצמצם בהצלבה. נחלק את השמונה בארבע, ויישאר לנו שתיים במונה.", "math_expression": "8 \\div 4 = 2" },
            { "verbal_explanation": "נצמצם בהצלבה את האיקסים והמספרים. תשעה איקס בריבוע חלקי שלושה איקס משאיר שלושה איקס במכנה.", "math_expression": "9x^2 \\div 3x = 3x" },
            { "verbal_explanation": "נרכיב את השבר הסופי מכל מה שנותר לאחר הצמצומים.", "math_expression": "\\frac{2}{3x}" }
        ],
        "final_answer": "2/3x"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "כפלו את השברים: \\( \\frac{x + 1}{x} \\times \\frac{x^2}{x + 1} \\)&rlm;",
        "options": ["x", "x^2", "x + 1", "1/x"],
        "correctAnswer": 0,
        "hint": "צמצמו גורמים דומים בין המונים למכנים לפני ביצוע ההכפלה המלאה.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק אילו איברים נמצאים גם למעלה וגם למטה וניתן למחקם.", "math_expression": "\\text{Cancel out}" },
            { "verbal_explanation": "הביטוי שבתוך הסוגריים מופיע פעמיים ולכן נמחק אותו לגמרי.", "math_expression": "(x + 1) \\div (x + 1) = 1" },
            { "verbal_explanation": "המשתנה איקס בריבוע במונה יצטמצם עם המשתנה הרגיל במכנה, ויישאר איקס אחד במונה.", "math_expression": "x^2 \\div x = x" },
            { "verbal_explanation": "כל שאר האיברים נעלמו ונותרנו עם התשובה.", "math_expression": "x" }
        ],
        "final_answer": "x"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "בצעו את פעולת החילוק הבאה: \\( \\frac{x^2 - 9}{2} \\div \\frac{x - 3}{4} \\)&rlm;",
        "options": ["2(x + 3)", "x + 3", "2(x - 3)", "0.5(x + 3)"],
        "correctAnswer": 0,
        "hint": "הפכו את השבר השני וכפלו. פרקו את המונה הראשון לפי נוסחת הפרש ריבועים.",
        "solution_steps": [
            { "verbal_explanation": "נהפוך את השבר הימני ונשנה את סימן הפעולה לכפל.", "math_expression": "\\frac{x^2 - 9}{2} \\times \\frac{4}{x - 3}" },
            { "verbal_explanation": "נפרק את המונה של השבר השמאלי לזוג סוגריים בעזרת נוסחת הפרש ריבועים.", "math_expression": "x^2 - 9 = (x - 3)(x + 3)" },
            { "verbal_explanation": "נרשום את התרגיל המלא לקראת שלב הצמצום.", "math_expression": "\\frac{(x - 3)(x + 3)}{2} \\times \\frac{4}{x - 3}" },
            { "verbal_explanation": "נצמצם את הסוגריים של איקס פחות שלוש לחלוטין. נצמצם את הארבע בשתיים ונקבל שתיים במונה.", "math_expression": "\\frac{4}{2} = 2 \\quad , \\quad \\frac{x - 3}{x - 3} = 1" },
            { "verbal_explanation": "נרשום את התוצאה כהכפלה של מה שנשאר.", "math_expression": "2(x + 3)" }
        ],
        "final_answer": "2(x + 3)"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "חשבו את תרגיל הכפל: \\( \\frac{5a}{a + 2} \\times \\frac{2a + 4}{10a^2} \\)&rlm;",
        "options": ["1/a", "a", "1/2a", "10a/(a+2)"],
        "correctAnswer": 0,
        "hint": "הוציאו גורם משותף מ-(2a+4). לאחר מכן, צמצמו כל מה שאפשר במונה ובמכנה.",
        "solution_steps": [
            { "verbal_explanation": "נפרק את המונה הימני לגורמים על ידי הוצאת המספר שתיים מחוץ לסוגריים.", "math_expression": "2a + 4 = 2(a + 2)" },
            { "verbal_explanation": "נכתוב מחדש את התרגיל מוכן לפעולת צמצום.", "math_expression": "\\frac{5a}{a + 2} \\times \\frac{2(a + 2)}{10a^2}" },
            { "verbal_explanation": "נצמצם את הסוגריים המשותפים למונה ולמכנה.", "math_expression": "1" },
            { "verbal_explanation": "נכפול את המספרים במונים ואת המספרים במכנים.", "math_expression": "\\frac{5a \\times 2}{10a^2} = \\frac{10a}{10a^2}" },
            { "verbal_explanation": "המספרים עשר מתבטלים. המשתנה במונה מבטל את החזקה במכנה.", "math_expression": "\\frac{1}{a}" }
        ],
        "final_answer": "1/a"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "בצעו את חילוק השברים: \\( \\frac{x^2 + 5x}{6} \\div \\frac{x}{3} \\)&rlm;",
        "options": ["(x + 5)/2", "x(x + 5)/2", "(x + 5)/18", "2(x + 5)"],
        "correctAnswer": 0,
        "hint": "הוציאו x כגורם משותף במונה הראשון. הפכו את השבר השני כדי לכפול.",
        "solution_steps": [
            { "verbal_explanation": "נמיר את פעולת החילוק לכפל על ידי הפיכת השבר שבצד ימין.", "math_expression": "\\frac{x^2 + 5x}{6} \\times \\frac{3}{x}" },
            { "verbal_explanation": "נפרק את המונה השמאלי לגורמים בעזרת המשתנה כגורם משותף.", "math_expression": "x(x + 5)" },
            { "verbal_explanation": "נציב בתרגיל החדש ונצמצם את המספר שלוש עם השש (יישאר שתיים במכנה).", "math_expression": "\\frac{x(x + 5)}{2} \\times \\frac{1}{x}" },
            { "verbal_explanation": "נצמצם את המשתנה הבודד במונה עם חברו במכנה.", "math_expression": "1" },
            { "verbal_explanation": "השבר הסופי יורכב מהחלקים המעטים שנותרו.", "math_expression": "\\frac{x + 5}{2}" }
        ],
        "final_answer": "(x + 5)/2"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "חשבו: \\( \\frac{1}{x - 1} \\times (x^2 - 1) \\)&rlm;",
        "options": ["x + 1", "x - 1", "1/(x + 1)", "x^2 - 1"],
        "correctAnswer": 0,
        "hint": "אפשר לראות את (x^2 - 1) כשבר שהמכנה שלו הוא 1. השתמשו בנוסחת הפרש ריבועים במונה וצמצמו.",
        "solution_steps": [
            { "verbal_explanation": "נתייחס למספר השלם כשבר, נכניס אותו למונה ונשתמש בנוסחת הפרש הריבועים לפירוקו.", "math_expression": "x^2 - 1 = (x - 1)(x + 1)" },
            { "verbal_explanation": "הביטוי כולו נכתב כשבר אחד גדול לאחר הכפל במונה.", "math_expression": "\\frac{1 \\times (x - 1)(x + 1)}{x - 1}" },
            { "verbal_explanation": "נזהה את הסוגריים הזהים במונה ובמכנה ונצמצם אותם.", "math_expression": "(x - 1) \\div (x - 1) = 1" },
            { "verbal_explanation": "מה שנותר במונה הוא הפתרון לשאלה.", "math_expression": "x + 1" }
        ],
        "final_answer": "x + 1"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "חילוק מורכב: \\( \\frac{ab + a}{b^2} \\div \\frac{b + 1}{b} \\)&rlm;",
        "options": ["a/b", "a/b^2", "ab", "(a+1)/b"],
        "correctAnswer": 0,
        "hint": "הפכו את השבר השני. הוציאו a מהמונה הראשון. בצעו צמצומים.",
        "solution_steps": [
            { "verbal_explanation": "ראשית נהפוך את השבר המחלק לשבר הופכי ונשנה את הפעולה לכפל.", "math_expression": "\\frac{ab + a}{b^2} \\times \\frac{b}{b + 1}" },
            { "verbal_explanation": "נוציא את המשתנה המשותף מהמונה של השבר הראשון.", "math_expression": "ab + a = a(b + 1)" },
            { "verbal_explanation": "נסדר את התרגיל עם המונה המפורק ונבטל סוגריים משותפים.", "math_expression": "\\frac{a(b + 1)}{b^2} \\times \\frac{b}{b + 1}" },
            { "verbal_explanation": "המשתנה במונה מבטל אחד מהמשתנים בחזקה שבמכנה.", "math_expression": "b \\div b^2 = \\frac{1}{b}" },
            { "verbal_explanation": "נאחד את שיירי הצמצום לשבר סופי וקצר.", "math_expression": "\\frac{a}{b}" }
        ],
        "final_answer": "a/b"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "כפל וחילוק שברים אלגבריים",
        "question_text": "חשבו: \\( \\frac{2x}{x + 3} \\times \\frac{x^2 + 6x + 9}{4x^2} \\)&rlm;",
        "options": ["(x + 3)/2x", "2x(x + 3)", "(x + 3)/4x", "1/2x"],
        "correctAnswer": 0,
        "hint": "המונה של השבר השני הוא נוסחת כפל מקוצר של (x+3) בריבוע. צמצמו מונים עם מכנים.",
        "solution_steps": [
            { "verbal_explanation": "נזהה במונה השבר הימני נוסחת ריבוע סכום, ונכתוב אותה בצורתה הסגורה.", "math_expression": "x^2 + 6x + 9 = (x + 3)^2 = (x + 3)(x + 3)" },
            { "verbal_explanation": "נרשום את התרגיל מחדש עם צורתו המפורקת של המונה.", "math_expression": "\\frac{2x}{x + 3} \\times \\frac{(x + 3)(x + 3)}{4x^2}" },
            { "verbal_explanation": "נצמצם את הביטוי שבמכנה מול אחד משני הביטויים הזהים במונה.", "math_expression": "1" },
            { "verbal_explanation": "נצמצם את המקדמים: שתיים חלקי ארבע שווה לחצי (שתיים במכנה).", "math_expression": "2 \\div 4 = \\frac{1}{2}" },
            { "verbal_explanation": "נצמצם את המשתנים: איקס חלקי איקס בריבוע שווה לאיקס במכנה.", "math_expression": "x \\div x^2 = \\frac{1}{x}" },
            { "verbal_explanation": "נבנה את השבר המסכם את החישוב.", "math_expression": "\\frac{x + 3}{2x}" }
        ],
        "final_answer": "(x + 3)/2x"
    },

    // ==========================================
    // תת נושא 3: חיבור וחיסור שברים אלגבריים (10 שאלות)
    // ==========================================
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חשבו את הסכום: \\( \\frac{2x}{5} + \\frac{x}{5} \\)&rlm;",
        "options": ["3x/5", "3x/10", "2x^2/25", "2x/5"],
        "correctAnswer": 0,
        "hint": "כאשר המכנה שווה, מחברים רק את המונים. המכנה נשאר כפי שהוא.",
        "solution_steps": [
            { "verbal_explanation": "הבסיס לחשבון שברים נשמר: מכנים זהים מאפשרים חיבור ישיר.", "math_expression": "\\text{Common Denominator}" },
            { "verbal_explanation": "נחבר את האיברים הנמצאים בחלק העליון של שני השברים יחד אל מעל קו שבר משותף.", "math_expression": "\\frac{2x + x}{5}" },
            { "verbal_explanation": "נבצע את הכינוס הפשוט במונה. שתיים ועוד אחד שווה שלוש.", "math_expression": "3x" },
            { "verbal_explanation": "התוצאה תישאר בצורת השבר עם המכנה המקורי.", "math_expression": "\\frac{3x}{5}" }
        ],
        "final_answer": "3x/5"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "בצעו את החיסור הבא: \\( \\frac{7a}{3} - \\frac{a}{3} \\)&rlm;",
        "options": ["2a", "6a/3", "8a/3", "2a/3"],
        "correctAnswer": 0,
        "hint": "חסרו את המונים וצמצמו את השבר אם אפשר (6 לחלק ל-3).",
        "solution_steps": [
            { "verbal_explanation": "מכיוון שהמכנים זהים, נוכל לאחד את התרגיל לשבר אחד ולהתמקד בחיסור המונים.", "math_expression": "\\frac{7a - a}{3}" },
            { "verbal_explanation": "שבע פחות אחד משאיר אותנו עם שש.", "math_expression": "\\frac{6a}{3}" },
            { "verbal_explanation": "ניתן ואף מומלץ לצמצם את התוצאה. המקדם שש מתחלק בשלוש ללא שארית.", "math_expression": "6 \\div 3 = 2" },
            { "verbal_explanation": "הביטוי הסופי מתקבל ללא קו שבר.", "math_expression": "2a" }
        ],
        "final_answer": "2a"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חשבו: \\( \\frac{x}{2} + \\frac{x}{4} \\)&rlm;",
        "options": ["3x/4", "2x/6", "3x/8", "x/6"],
        "correctAnswer": 0,
        "hint": "המכנה המשותף כאן הוא 4. הרחיבו את השבר הראשון על ידי הכפלת המונה והמכנה ב-2.",
        "solution_steps": [
            { "verbal_explanation": "המכנים שונים. עלינו למצוא מכנה משותף מינימלי כדי לאחד את השברים, שהוא במקרה זה ארבע.", "math_expression": "4" },
            { "verbal_explanation": "נרחיב את השבר השמאלי פי שתיים כך שגם המכנה שלו יהפוך לארבע.", "math_expression": "\\frac{x \\times 2}{2 \\times 2} = \\frac{2x}{4}" },
            { "verbal_explanation": "נחבר את השבר המורחב עם השבר המקורי הימני מעל מכנה אחד.", "math_expression": "\\frac{2x + x}{4}" },
            { "verbal_explanation": "נכנס את האיברים במונה לקבלת השבר המסכם.", "math_expression": "\\frac{3x}{4}" }
        ],
        "final_answer": "3x/4"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חסרו את השברים: \\( \\frac{5}{x} - \\frac{2}{x} \\)&rlm;",
        "options": ["3/x", "3/x^2", "7/x", "3"],
        "correctAnswer": 0,
        "hint": "גם כאשר המכנה הוא אות (x), אם הוא זהה בשני השברים, פשוט מחסרים את המונים.",
        "solution_steps": [
            { "verbal_explanation": "לשני השברים יש מכנה אלגברי משותף, ולכן חוקי החשבון נשמרים כרגיל.", "math_expression": "x" },
            { "verbal_explanation": "נאחד את הביטויים לשבר יחיד ונחסר את החלק העליון.", "math_expression": "\\frac{5 - 2}{x}" },
            { "verbal_explanation": "החיסור הפשוט מספק את המונה הסופי.", "math_expression": "3" },
            { "verbal_explanation": "נציב את התוצאה מעל המכנה ליצירת הפתרון.", "math_expression": "\\frac{3}{x}" }
        ],
        "final_answer": "3/x"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חשבו את הסכום הבא ומצאו מכנה משותף: \\( \\frac{1}{x} + \\frac{1}{y} \\)&rlm;",
        "options": ["(y + x) / xy", "2 / xy", "2 / (x + y)", "xy / (x + y)"],
        "correctAnswer": 0,
        "hint": "המכנה המשותף של שני משתנים שונים הוא המכפלה שלהם (xy). הרחיבו כל שבר במשתנה שחסר לו.",
        "solution_steps": [
            { "verbal_explanation": "כאשר המכנים הם אותיות שונות, הדרך המהירה למצוא מכנה משותף היא לכפול אותם זה בזה.", "math_expression": "x \\times y = xy" },
            { "verbal_explanation": "נרחיב את השבר הראשון. נכפול את המונה והמכנה במשתנה של השבר השני.", "math_expression": "\\frac{1 \\times y}{x \\times y} = \\frac{y}{xy}" },
            { "verbal_explanation": "נרחיב את השבר השני. נכפול את המונה והמכנה במשתנה של השבר הראשון.", "math_expression": "\\frac{1 \\times x}{y \\times x} = \\frac{x}{xy}" },
            { "verbal_explanation": "כעת נחבר את המונים שנוצרו לנו מעל המכנה האחיד.", "math_expression": "\\frac{y + x}{xy}" }
        ],
        "final_answer": "(y + x) / xy"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "בצעו את החיסור: \\( \\frac{x + 4}{3} - \\frac{x}{3} \\)&rlm;",
        "options": ["4/3", "2x/3", "(2x + 4)/3", "4"],
        "correctAnswer": 0,
        "hint": "המכנה זהה. כתבו את המונים על שבר אחד וחסרו: x + 4 פחות x.",
        "solution_steps": [
            { "verbal_explanation": "המכנה משותף לשניהם, לכן נרשום קו שבר ארוך ונחבר את כל מה שלמעלה.", "math_expression": "\\frac{(x + 4) - x}{3}" },
            { "verbal_explanation": "נכנס את האיברים הדומים במונה. המשתנים מקזזים זה את זה לאפס.", "math_expression": "x - x = 0" },
            { "verbal_explanation": "במונה נותר המספר החופשי בלבד.", "math_expression": "4" },
            { "verbal_explanation": "נקבל שבר מספרי ללא משתנים כתשובה לתרגיל.", "math_expression": "\\frac{4}{3}" }
        ],
        "final_answer": "4/3"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חשבו את התרגיל הבא: \\( \\frac{3}{2x} + \\frac{1}{x} \\)&rlm;",
        "options": ["5/2x", "4/3x", "4/2x", "2/x"],
        "correctAnswer": 0,
        "hint": "המכנה המשותף הוא 2x. השבר הראשון כבר מכיל אותו, את השני יש להרחיב פי 2.",
        "solution_steps": [
            { "verbal_explanation": "המכנה המשותף שמכיל את שני המכנים הנתונים הוא פעמיים המשתנה.", "math_expression": "2x" },
            { "verbal_explanation": "השבר השמאלי כבר מוכן. את השבר הימני נכפיל בשתיים במונה ובמכנה להתאמה.", "math_expression": "\\frac{1 \\times 2}{x \\times 2} = \\frac{2}{2x}" },
            { "verbal_explanation": "נרשום את התרגיל החדש ונחבר את המונים יחד מעל מכנה אחד.", "math_expression": "\\frac{3 + 2}{2x}" },
            { "verbal_explanation": "סכום המונים ייתן את הפתרון הסופי.", "math_expression": "\\frac{5}{2x}" }
        ],
        "final_answer": "5/2x"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חסרו ופשטו: \\( \\frac{2x + 1}{x - 1} - \\frac{x + 2}{x - 1} \\)&rlm;",
        "options": ["(x - 1)/(x - 1) = 1", "(x + 3)/(x - 1)", "x/(x - 1)", "(3x + 3)/(x - 1)"],
        "correctAnswer": 0,
        "hint": "שימו לב! סימן המינוס שבין השברים חל על כל המונה השני. לכן זה הופך להיות מינוס איקס ומינוס שתיים.",
        "solution_steps": [
            { "verbal_explanation": "המכנה משותף. נאחד לשבר אחד, ונקפיד להכניס את המונה השני לסוגריים עקב פעולת החיסור שלפניו.", "math_expression": "\\frac{2x + 1 - (x + 2)}{x - 1}" },
            { "verbal_explanation": "נפתח את הסוגריים במונה. המינוס כופל ומשנה את כל הסימנים שבפנים.", "math_expression": "\\frac{2x + 1 - x - 2}{x - 1}" },
            { "verbal_explanation": "נכנס איברים במונה. שני איקס פחות איקס נותן איקס. אחד פחות שתיים נותן מינוס אחד.", "math_expression": "\\frac{x - 1}{x - 1}" },
            { "verbal_explanation": "הגענו למצב שבו המונה זהה לחלוטין למכנה. חלוקה כזו שווה תמיד לאחד.", "math_expression": "1" }
        ],
        "final_answer": "(x - 1)/(x - 1) = 1"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חשבו בעזרת מציאת מכנה משותף: \\( \\frac{2}{x + 1} + \\frac{3}{x + 2} \\)&rlm;",
        "options": ["(5x + 7) / (x+1)(x+2)", "5 / (x+1)(x+2)", "(5x + 5) / (x+1)(x+2)", "(6) / (2x+3)"],
        "correctAnswer": 0,
        "hint": "המכנה המשותף הוא הכפל של שני המכנים (x+1)(x+2). הרחיבו כל שבר במכנה של השבר השני.",
        "solution_steps": [
            { "verbal_explanation": "המכנה המשותף הוא מכפלת שני הביטויים. כעת נרחיב כל שבר בהצלבה.", "math_expression": "(x + 1)(x + 2)" },
            { "verbal_explanation": "נכפול את המונה הראשון במכנה של השני, ואת המונה השני במכנה של הראשון.", "math_expression": "\\frac{2(x + 2)}{(x + 1)(x + 2)} + \\frac{3(x + 1)}{(x + 1)(x + 2)}" },
            { "verbal_explanation": "נאחד לקו שבר אחד ונפתח את הסוגריים שבמונה בעזרת חוק הפילוג.", "math_expression": "\\frac{2x + 4 + 3x + 3}{(x + 1)(x + 2)}" },
            { "verbal_explanation": "נכנס את האיברים הדומים במונה כדי להגיע לתשובה הסופית.", "math_expression": "\\frac{5x + 7}{(x + 1)(x + 2)}" }
        ],
        "final_answer": "(5x + 7) / (x+1)(x+2)"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "חיבור וחיסור שברים אלגבריים",
        "question_text": "חיסור שברים מורכב מעט יותר: \\( \\frac{3x}{x^2 - 4} - \\frac{1}{x - 2} \\)&rlm;",
        "options": ["(2x - 2) / (x^2 - 4)", "(2x + 2) / (x^2 - 4)", "(3x - 1) / (x^2 - 4)", "2 / (x + 2)"],
        "correctAnswer": 0,
        "hint": "המכנה הראשון מתפרק ל-(x-2)(x+2). המכנה המשותף הוא זה. לכן, צריך להרחיב רק את השבר השני ב-(x+2).",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת הפרש ריבועים כדי לפרק לגורמים את המכנה של השבר השמאלי.", "math_expression": "x^2 - 4 = (x - 2)(x + 2)" },
            { "verbal_explanation": "נזהה שהמכנה של השבר הימני מוכל בתוך המכנה שפירקנו. זהו המכנה המשותף שלנו.", "math_expression": "(x - 2)(x + 2)" },
            { "verbal_explanation": "השבר השמאלי נשאר כמות שהוא. את השבר הימני נרחיב בביטוי החסר לו.", "math_expression": "\\frac{1 \\times (x + 2)}{(x - 2)(x + 2)}" },
            { "verbal_explanation": "נרשום על שבר מאוחד. יש לחסר את כל המונה שהורחב.", "math_expression": "\\frac{3x - (x + 2)}{x^2 - 4}" },
            { "verbal_explanation": "נפתח סוגריים עם המינוס ונכנס איברים כדי לקבל את הביטוי האחרון.", "math_expression": "\\frac{3x - x - 2}{x^2 - 4} = \\frac{2x - 2}{x^2 - 4}" }
        ],
        "final_answer": "(2x - 2) / (x^2 - 4)"
    },

    // ==========================================
    // תת נושא 4: תחום הצבה (10 שאלות)
    // ==========================================
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מהו תחום ההצבה של הביטוי האלגברי: \\( \\frac{5}{x} \\)? (כלומר, אילו ערכים אסור להציב במקום x?)&rlm;",
        "options": ["x ≠ 0", "x ≠ 5", "כל מספר מותר", "x > 0"],
        "correctAnswer": 0,
        "hint": "במתמטיקה יש חוק ברזל: אסור בתכלית האיסור לחלק באפס.",
        "solution_steps": [
            { "verbal_explanation": "תחום ההצבה מטרתו למנוע מצבים שאינם מוגדרים במתמטיקה, כמו חלוקה באפס.", "math_expression": "\\div 0 \\Rightarrow \\times" },
            { "verbal_explanation": "נבדוק את המכנה של השבר, ונרכיב משוואה שבודקת מתי הוא שווה לאפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "מכיוון שהמשתנה עצמו נמצא במכנה, אסור לו לקבל את הערך אפס.", "math_expression": "x \\neq 0" },
            { "verbal_explanation": "תחום ההצבה הוא כל המספרים מלבד אפס.", "math_expression": "x \\neq 0" }
        ],
        "final_answer": "x ≠ 0"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מהו תחום ההצבה של הביטוי: \\( \\frac{12}{x - 4} \\)?&rlm;",
        "options": ["x ≠ 4", "x ≠ -4", "x ≠ 0", "x ≠ 12"],
        "correctAnswer": 0,
        "hint": "השוו את המכנה כולו ל-0 (x - 4 = 0) ופתרו כדי למצוא את המספר האסור.",
        "solution_steps": [
            { "verbal_explanation": "ניקח את הביטוי השלם שנמצא במכנה ונבדוק איזה ערך יאפס אותו.", "math_expression": "x - 4 = 0" },
            { "verbal_explanation": "נפתור את המשוואה הפשוטה על ידי הוספת ארבע.", "math_expression": "x = 4" },
            { "verbal_explanation": "המספר ארבע גורם למכנה להיות אפס, דבר שאסור לעשות.", "math_expression": "4 - 4 = 0" },
            { "verbal_explanation": "לכן, המספר ארבע לא חוקי ונרשום זאת כתחום ההצבה.", "math_expression": "x \\neq 4" }
        ],
        "final_answer": "x ≠ 4"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מצאו את התחום שבו הביטוי \\( \\frac{3x + 1}{2x + 10} \\) אינו מוגדר.&rlm;",
        "options": ["x ≠ -5", "x ≠ 5", "x ≠ -1/3", "x ≠ 10"],
        "correctAnswer": 0,
        "hint": "המונה (החלק העליון) לא רלוונטי כלל לתחום ההצבה. התמקדו רק במכנה והשוו אותו ל-0.",
        "solution_steps": [
            { "verbal_explanation": "תחום הצבה תלוי אך ורק במכנה השבר. המונה אינו מעניין אותנו.", "math_expression": "2x + 10" },
            { "verbal_explanation": "נשווה את המכנה לאפס כדי לחשוף את הנקודה הבעייתית.", "math_expression": "2x + 10 = 0" },
            { "verbal_explanation": "נפתור את המשוואה. נחסר עשר ונחלק בשתיים.", "math_expression": "2x = -10 \\Rightarrow x = -5" },
            { "verbal_explanation": "המספר מינוס חמש יאפס את המכנה, ולכן הוא הערך שממנו יש להימנע.", "math_expression": "x \\neq -5" }
        ],
        "final_answer": "x ≠ -5"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מהו תחום ההצבה של הביטוי: \\( \\frac{7}{x^2 - 9} \\)?&rlm;",
        "options": ["x ≠ 3 וגם x ≠ -3", "x ≠ 9", "x ≠ 3", "x ≠ -9"],
        "correctAnswer": 0,
        "hint": "למשוואה x בריבוע שווה 9 יש שני פתרונות, גם חיובי וגם שלילי. שניהם אסורים.",
        "solution_steps": [
            { "verbal_explanation": "ניקח את המכנה הריבועי ונציב אותו שווה לאפס.", "math_expression": "x^2 - 9 = 0" },
            { "verbal_explanation": "נעביר את התשע אגף כדי לפתור את המשוואה.", "math_expression": "x^2 = 9" },
            { "verbal_explanation": "נחפש מספר שכפול עצמו נותן תשע. שלוש כפול שלוש מתאים, אך גם מינוס שלוש כפול מינוס שלוש.", "math_expression": "3^2 = 9 \\quad , \\quad (-3)^2 = 9" },
            { "verbal_explanation": "לכן, קיימים שני ערכים שיאפסו את המכנה ושניהם נחשבים לאסורים.", "math_expression": "x \\neq 3 \\quad , \\quad x \\neq -3" }
        ],
        "final_answer": "x ≠ 3 וגם x ≠ -3"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מהו תחום ההצבה של הביטוי המכיל שורש: \\( \\sqrt{x} \\)?&rlm;",
        "options": ["x ≥ 0", "x > 0", "x ≠ 0", "כל מספר מותר"],
        "correctAnswer": 0,
        "hint": "שורש ריבועי מוגדר רק עבור מספרים חיוביים או אפס. לא ניתן להוציא שורש למספר שלילי.",
        "solution_steps": [
            { "verbal_explanation": "בנוסף לשברים, גם שורשים יוצרים מגבלות על תחום ההצבה המותר.", "math_expression": "\\sqrt{\\dots}" },
            { "verbal_explanation": "מספר שלילי כפול עצמו נותן מספר חיובי. לכן, אין מספר ממשי שכפול עצמו ייתן מספר שלילי.", "math_expression": "- \\times - = +" },
            { "verbal_explanation": "הכלל אומר שהביטוי הנמצא תחת סימן השורש חייב להיות חיובי או אפס.", "math_expression": "\\ge 0" },
            { "verbal_explanation": "נרשום את התנאי המלא עבור המשתנה שלנו.", "math_expression": "x \\ge 0" }
        ],
        "final_answer": "x ≥ 0"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מהו תחום ההצבה של: \\( \\frac{1}{\\sqrt{x - 2}} \\)?&rlm;",
        "options": ["x > 2", "x ≥ 2", "x ≠ 2", "x < 2"],
        "correctAnswer": 0,
        "hint": "כאן יש שני כללים יחד: בגלל השורש הביטוי חייב להיות חיובי או אפס, אבל בגלל המכנה אסור לו להיות אפס.",
        "solution_steps": [
            { "verbal_explanation": "נתקלנו בביטוי המשלב גם מכנה וגם שורש יחד, לכן נבדוק את שני הכללים.", "math_expression": "\\frac{1}{\\sqrt{x - 2}}" },
            { "verbal_explanation": "בגלל קיום השורש, הביטוי שתחתיו חייב להיות גדול מאפס או שווה לו.", "math_expression": "x - 2 \\ge 0" },
            { "verbal_explanation": "בגלל שכל זה יושב במכנה, החלק של השווה לאפס פסול לחלוטין.", "math_expression": "x - 2 \\neq 0" },
            { "verbal_explanation": "נשלב את שני התנאים לאי שוויון אחד קפדני: הביטוי חייב להיות ממש גדול מאפס.", "math_expression": "x - 2 > 0" },
            { "verbal_explanation": "נפתור את אי השוויון ונגיע לטווח ההצבה המדויק.", "math_expression": "x > 2" }
        ],
        "final_answer": "x > 2"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מצאו את הערכים האסורים עבור הביטוי: \\( \\frac{x - 1}{x(x + 5)} \\)&rlm;",
        "options": ["x ≠ 0 וגם x ≠ -5", "x ≠ 0", "x ≠ -5", "x ≠ 1 וגם x ≠ -5"],
        "correctAnswer": 0,
        "hint": "המכנה מורכב משני גורמים כפולים. אם אחד מהם יהיה שווה ל-0, כל המכנה יתאפס.",
        "solution_steps": [
            { "verbal_explanation": "המכנה מורכב ממכפלה של שני איברים שונים.", "math_expression": "x(x + 5)" },
            { "verbal_explanation": "לפי חוק המכפלה, אם אחד מהגורמים יקבל את הערך אפס, כל המכפלה תתאפס והמכנה יהפוך לפסול.", "math_expression": "0 \\times \\dots = 0" },
            { "verbal_explanation": "נבדוק מה מאפס את הגורם הראשון. התשובה היא כמובן אפס.", "math_expression": "x = 0" },
            { "verbal_explanation": "נבדוק מה מאפס את הגורם בתוך הסוגריים. התשובה היא מינוס חמש.", "math_expression": "x + 5 = 0 \\Rightarrow x = -5" },
            { "verbal_explanation": "שני הערכים הללו הם מספרים אסורים בתחום ההצבה.", "math_expression": "x \\neq 0 \\quad , \\quad x \\neq -5" }
        ],
        "final_answer": "x ≠ 0 וגם x ≠ -5"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מהו תחום ההצבה של הביטוי: \\( 2x^2 + 5x - 7 \\)?&rlm;",
        "options": ["כל מספר", "x > 0", "x ≠ 0", "x ≠ 7"],
        "correctAnswer": 0,
        "hint": "האם יש כאן שבר שיכול להתאפס? האם יש שורש? אם לא, אין מגבלות.",
        "solution_steps": [
            { "verbal_explanation": "כדי למצוא את תחום ההצבה, נחפש מרכיבים בעייתיים בביטוי.", "math_expression": "2x^2 + 5x - 7" },
            { "verbal_explanation": "אין בביטוי קו שבר, לכן אין חשש לחלוקה באפס.", "math_expression": "\\text{No Fraction}" },
            { "verbal_explanation": "אין בביטוי סימן של שורש זוגי, לכן אין חשש לתוכן שלילי לא חוקי.", "math_expression": "\\text{No Root}" },
            { "verbal_explanation": "כאשר אין מגבלות מובנות, ניתן להציב כל מספר שנבחר במשתנה ללא בעיה.", "math_expression": "\\text{Any Number}" }
        ],
        "final_answer": "כל מספר"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מצאו את התחום עבור הביטוי: \\( \\frac{10}{x^2 + 4} \\)&rlm;",
        "options": ["כל מספר", "x ≠ 2 וגם x ≠ -2", "x ≠ -4", "x > -4"],
        "correctAnswer": 0,
        "hint": "האם (x בריבוע + 4) יכול אי פעם להיות שווה ל-0? זכרו שמספר בריבוע הוא תמיד חיובי (או אפס).",
        "solution_steps": [
            { "verbal_explanation": "נציב את המכנה למשוואה כדי לראות אם הוא יכול להתאפס אי פעם.", "math_expression": "x^2 + 4 = 0" },
            { "verbal_explanation": "ננסה לפתור. נעביר את הארבע ונראה שאיקס בריבוע צריך להיות שלילי.", "math_expression": "x^2 = -4" },
            { "verbal_explanation": "כל מספר, חיובי או שלילי, שיעלה בחזקה שנייה ייתן תוצאה חיובית תמיד (או אפס).", "math_expression": "x^2 \\ge 0" },
            { "verbal_explanation": "לכן לעולם לא נוכל לקבל מינוס ארבע, והמכנה תמיד יישאר גדול מאפס.", "math_expression": "\\text{Impossible}" },
            { "verbal_explanation": "מאחר והמכנה מוגן מאיפוס, התחום אינו מוגבל וניתן להציב כל מספר.", "math_expression": "\\text{Any Number}" }
        ],
        "final_answer": "כל מספר"
    },
    {
        "topic": "algebraic_technique_grade_9",
        "subTopic": "תחום הצבה",
        "question_text": "מהו תחום ההצבה כאשר יש שני שברים שונים בביטוי: \\( \\frac{4}{x - 3} + \\frac{1}{x + 5} \\)?&rlm;",
        "options": ["x ≠ 3 וגם x ≠ -5", "x ≠ 3", "x ≠ -5", "x ≠ -3 וגם x ≠ 5"],
        "correctAnswer": 0,
        "hint": "אסור שאף אחד מהמכנים יתאפס. עליכם להגדיר תנאי לכל שבר בנפרד ולאחד אותם.",
        "solution_steps": [
            { "verbal_explanation": "כשיש מספר שברים במקביל, עלינו לוודא שאף אחד מהמכנים לא מהווה סכנה.", "math_expression": "\\frac{1}{A} + \\frac{1}{B}" },
            { "verbal_explanation": "נבדוק את השבר השמאלי. כדי שהמכנה שלו יתאפס המשתנה צריך להיות שלוש. זהו הערך האסור הראשון.", "math_expression": "x - 3 = 0 \\Rightarrow x \\neq 3" },
            { "verbal_explanation": "נבדוק את השבר הימני. כדי שהמכנה שלו יתאפס המשתנה צריך להיות מינוס חמש. זהו הערך האסור השני.", "math_expression": "x + 5 = 0 \\Rightarrow x \\neq -5" },
            { "verbal_explanation": "תחום ההצבה הכולל מכיל את שתי ההגבלות הללו יחד.", "math_expression": "x \\neq 3 \\quad , \\quad x \\neq -5" }
        ],
        "final_answer": "x ≠ 3 וגם x ≠ -5"
    }
];