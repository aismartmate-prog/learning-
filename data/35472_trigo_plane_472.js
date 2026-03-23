const questionsDB = [
    // ==========================================
    // תת נושא 1: זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1) (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את הביטוי הטריגונומטרי הבא: \\( (1 - \\sin^{2}x) \\times \\tan^{2}x \\).&rlm;",
        "options": ["sin²x", "cos²x", "tan²x", "1"],
        "correctAnswer": 0,
        "hint": "היעזרו בזהות הפיתגורית הבסיסית כדי לפשט את הסוגריים, ולאחר מכן בזהות הטנגנס כדי לצמצם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הזהות הטריגונומטרית הפיתגורית היסודית.", "math_expression": "\\sin^{2}x + \\cos^{2}x = 1" },
            { "verbal_explanation": "נבודד את פונקציית הקוסינוס בריבוע כדי להתאים לביטוי שבסוגריים.", "math_expression": "\\cos^{2}x = 1 - \\sin^{2}x" },
            { "verbal_explanation": "נציב את התוצאה לתוך הביטוי המקורי שהתבקשנו לפשט.", "math_expression": "\\cos^{2}x \\times \\tan^{2}x" },
            { "verbal_explanation": "ניזכר בזהות המגדירה את פונקציית הטנגנס באמצעות סינוס וקוסינוס.", "math_expression": "\\tan x = \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נעלה את הזהות בריבוע משני אגפיה.", "math_expression": "\\tan^{2}x = \\dfrac{\\sin^{2}x}{\\cos^{2}x}" },
            { "verbal_explanation": "נציב את הביטוי השברי החדש בחזרה אל תוך המכפלה שיצרנו.", "math_expression": "\\cos^{2}x \\times \\dfrac{\\sin^{2}x}{\\cos^{2}x}" },
            { "verbal_explanation": "נצמצם את הגורם המשותף המופיע במונה ובמכנה לקבלת התוצאה הסופית.", "math_expression": "\\sin^{2}x" }
        ],
        "final_answer": "sin²x"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את הביטוי הבא עד לקבלת מספר שלם: \\( \\dfrac{1}{\\cos^{2}x} - \\tan^{2}x \\).&rlm;",
        "options": ["1", "0", "-1", "sin²x"],
        "correctAnswer": 0,
        "hint": "המירו את הטנגנס לביטוי של סינוס חלקי קוסינוס, אחדו את השברים והשתמשו בזהות הפיתגורית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את זהות הטנגנס הבסיסית.", "math_expression": "\\tan x = \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נעלה את זהות הטנגנס בריבוע כדי להתאים לתרגיל הנתון.", "math_expression": "\\tan^{2}x = \\dfrac{\\sin^{2}x}{\\cos^{2}x}" },
            { "verbal_explanation": "נציב את השבר במקום פונקציית הטנגנס בביטוי המקורי.", "math_expression": "\\dfrac{1}{\\cos^{2}x} - \\dfrac{\\sin^{2}x}{\\cos^{2}x}" },
            { "verbal_explanation": "נבחין כי לשני השברים יש מכנה משותף זהה, ולכן ניתן לאחדם לשבר יחיד.", "math_expression": "\\dfrac{1 - \\sin^{2}x}{\\cos^{2}x}" },
            { "verbal_explanation": "נרשום את הזהות הפיתגורית הקושרת בין סינוס לקוסינוס.", "math_expression": "\\sin^{2}x + \\cos^{2}x = 1" },
            { "verbal_explanation": "נחלץ את הקוסינוס בריבוע כדי לזהות את המונה של השבר המאוחד.", "math_expression": "\\cos^{2}x = 1 - \\sin^{2}x" },
            { "verbal_explanation": "נציב קוסינוס בריבוע במונה במקום ההפרש ונצמצם את השבר השלם למספר.", "math_expression": "\\dfrac{\\cos^{2}x}{\\cos^{2}x} = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את הביטוי: \\( \\cos x + \\sin x \\times \\tan x \\).&rlm;",
        "options": ["1 / cosx", "sinx", "1 / sinx", "tanx"],
        "correctAnswer": 0,
        "hint": "המירו את פונקציית הטנגנס, בצעו כפל של הסינוס, ומצאו מכנה משותף כדי לאחד את הביטוי.",
        "solution_steps": [
            { "verbal_explanation": "נרשום תחילה את הזהות של פונקציית הטנגנס.", "math_expression": "\\tan x = \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נציב את הזהות בתוך הביטוי המקורי.", "math_expression": "\\cos x + \\sin x \\times \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נבצע את הכפל של פונקציות הסינוס במונה השבר.", "math_expression": "\\cos x + \\dfrac{\\sin^{2}x}{\\cos x}" },
            { "verbal_explanation": "ניצור מכנה משותף לכל הביטוי על ידי הכפלת האיבר הראשון בקוסינוס וחלוקתו בקוסינוס.", "math_expression": "\\dfrac{\\cos x \\times \\cos x}{\\cos x} + \\dfrac{\\sin^{2}x}{\\cos x}" },
            { "verbal_explanation": "נאחד את השברים תחת מכנה משותף יחיד.", "math_expression": "\\dfrac{\\cos^{2}x + \\sin^{2}x}{\\cos x}" },
            { "verbal_explanation": "ניעזר בזהות הפיתגורית הקובעת שסכום הריבועים של סינוס וקוסינוס הוא אחת.", "math_expression": "\\cos^{2}x + \\sin^{2}x = 1" },
            { "verbal_explanation": "נציב אחת במונה השבר ונקבל את התוצאה הסופית המפושטת.", "math_expression": "\\dfrac{1}{\\cos x}" }
        ],
        "final_answer": "1 / cosx"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את הביטוי הבא: \\( (\\sin x + \\cos x)^{2} - 2\\sin x \\times \\cos x \\).&rlm;",
        "options": ["1", "0", "sin²x", "cos²x"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת כפל מקוצר של סכום בריבוע, ולאחר מכן כנסו איברים דומים.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בנוסחת כפל מקוצר לפתיחת סוגריים בריבוע.", "math_expression": "(A + B)^{2} = A^{2} + 2AB + B^{2}" },
            { "verbal_explanation": "נפתח את הסוגריים שבביטוי שלנו לפי הנוסחה.", "math_expression": "\\sin^{2}x + 2\\sin x \\times \\cos x + \\cos^{2}x" },
            { "verbal_explanation": "נציב את הביטוי הפתוח בחזרה לתרגיל המלא.", "math_expression": "\\sin^{2}x + 2\\sin x \\times \\cos x + \\cos^{2}x - 2\\sin x \\times \\cos x" },
            { "verbal_explanation": "נכנס איברים דומים, נבחין שאיברי המכפלה מבטלים זה את זה.", "math_expression": "2\\sin x \\times \\cos x - 2\\sin x \\times \\cos x = 0" },
            { "verbal_explanation": "נרשום את האיברים שנותרו לאחר הצמצום.", "math_expression": "\\sin^{2}x + \\cos^{2}x" },
            { "verbal_explanation": "נשתמש בזהות הפיתגורית הידועה.", "math_expression": "\\sin^{2}x + \\cos^{2}x = 1" },
            { "verbal_explanation": "הגענו לערך הסופי של הביטוי כולו.", "math_expression": "1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "נתון כי \\( \\sin x = 0.6 \\) וגם ידוע ש-\\x היא זווית חדה (ברביע הראשון). חשבו את ערכו של \\( \\tan x \\).&rlm;",
        "options": ["0.75", "0.8", "1.33", "0.6"],
        "correctAnswer": 0,
        "hint": "השתמשו בזהות הפיתגורית למציאת הקוסינוס (הזווית חדה ולכן הקוסינוס חיובי), ולאחר מכן חלקו סינוס בקוסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הזהות המקשרת בין סינוס לקוסינוס.", "math_expression": "\\sin^{2}x + \\cos^{2}x = 1" },
            { "verbal_explanation": "נציב את הערך הידוע של הסינוס לתוך המשוואה.", "math_expression": "0.6^{2} + \\cos^{2}x = 1" },
            { "verbal_explanation": "נחשב את הריבוע של השבר העשרוני.", "math_expression": "0.36 + \\cos^{2}x = 1" },
            { "verbal_explanation": "נעביר אגפים על ידי חיסור כדי לבודד את הקוסינוס בריבוע.", "math_expression": "\\cos^{2}x = 1 - 0.36 = 0.64" },
            { "verbal_explanation": "נוציא שורש ריבועי. מכיוון שהזווית ברביע הראשון, ערך הקוסינוס חייב להיות חיובי.", "math_expression": "\\cos x = 0.8" },
            { "verbal_explanation": "נרשום את זהות הטנגנס לצורך חישובו.", "math_expression": "\\tan x = \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נציב את הערכים ונפשט לשבר פשוט (שש עשיריות חלקי שמונה עשיריות).", "math_expression": "\\tan x = \\dfrac{0.6}{0.8} = \\dfrac{3}{4} = 0.75" }
        ],
        "final_answer": "0.75"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את הביטוי: \\( \\cos^{4}x - \\sin^{4}x + 2\\sin^{2}x \\).&rlm;",
        "options": ["1", "0", "sin²x", "cos²x"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת הפרש ריבועים כדי לפרק את שני האיברים הראשונים למכפלה של חיבור וחיסור.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את שני האיברים הראשונים כהפרש של שני ריבועים.", "math_expression": "a^{2} - b^{2} = (a - b)(a + b)" },
            { "verbal_explanation": "נפרק את הפרש החזקות הרביעיות למכפלה של סכום והפרש של חזקות שניות.", "math_expression": "\\cos^{4}x - \\sin^{4}x = (\\cos^{2}x - \\sin^{2}x)(\\cos^{2}x + \\sin^{2}x)" },
            { "verbal_explanation": "נשתמש בזהות הפיתגורית עבור הגורם המכיל את פעולת החיבור.", "math_expression": "\\cos^{2}x + \\sin^{2}x = 1" },
            { "verbal_explanation": "נציב אחת ונקבל פישוט לחלק הראשון של התרגיל.", "math_expression": "(\\cos^{2}x - \\sin^{2}x) \\times 1 = \\cos^{2}x - \\sin^{2}x" },
            { "verbal_explanation": "נציב את התוצאה בחזרה לתרגיל המלא יחד עם האיבר השלישי המקורי.", "math_expression": "\\cos^{2}x - \\sin^{2}x + 2\\sin^{2}x" },
            { "verbal_explanation": "נכנס איברים דומים המכילים סינוס בריבוע.", "math_expression": "- \\sin^{2}x + 2\\sin^{2}x = \\sin^{2}x" },
            { "verbal_explanation": "נרשום את הביטוי הנותר וניזכר בזהות הפיתגורית שוב לקבלת התוצאה הסופית.", "math_expression": "\\cos^{2}x + \\sin^{2}x = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את השבר הבא: \\( \\dfrac{1 - \\cos^{2}x}{\\sin x \\times \\cos x} \\).&rlm;",
        "options": ["tanx", "sinx", "cosx", "1"],
        "correctAnswer": 0,
        "hint": "השתמשו בזהות הפיתגורית כדי להחליף את המונה בביטוי יחיד, ולאחר מכן צמצמו את השבר.",
        "solution_steps": [
            { "verbal_explanation": "נתבונן בזהות הפיתגורית הבסיסית.", "math_expression": "\\sin^{2}x + \\cos^{2}x = 1" },
            { "verbal_explanation": "נבודד את הסינוס בריבוע כדי לקבל ביטוי זהה למונה השבר שבתרגיל.", "math_expression": "\\sin^{2}x = 1 - \\cos^{2}x" },
            { "verbal_explanation": "נציב את הסינוס בריבוע במקום מונה השבר הנתון.", "math_expression": "\\dfrac{\\sin^{2}x}{\\sin x \\times \\cos x}" },
            { "verbal_explanation": "נפרק את הסינוס בריבוע למכפלה כדי להקל על ראיית הצמצום.", "math_expression": "\\dfrac{\\sin x \\times \\sin x}{\\sin x \\times \\cos x}" },
            { "verbal_explanation": "נצמצם את פונקציית הסינוס המופיעה גם במונה וגם במכנה.", "math_expression": "\\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נזהה את השבר הנותר על פי הזהות המוכרת של פונקציה טריגונומטרית נוספת.", "math_expression": "\\tan x = \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נרשום את התוצאה הסופית.", "math_expression": "\\tan x" }
        ],
        "final_answer": "tanx"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את הביטוי: \\( \\dfrac{\\cos x}{1 - \\sin x} - \\dfrac{\\cos x}{1 + \\sin x} \\).&rlm;",
        "options": ["2tanx", "2sinx", "2cosx", "0"],
        "correctAnswer": 0,
        "hint": "בצעו מכנה משותף לשני השברים. המכנה המשותף ייצור נוסחת הפרש ריבועים שתוביל לזהות הפיתגורית.",
        "solution_steps": [
            { "verbal_explanation": "ניצור מכנה משותף על ידי הכפלת המכנים זה בזה.", "math_expression": "(1 - \\sin x)(1 + \\sin x)" },
            { "verbal_explanation": "נשתמש בנוסחת כפל מקוצר לפתיחת המכנה המשותף.", "math_expression": "1^{2} - \\sin^{2}x = 1 - \\sin^{2}x" },
            { "verbal_explanation": "לפי הזהות הפיתגורית, המכנה הופך לפונקציה יחידה בריבוע.", "math_expression": "1 - \\sin^{2}x = \\cos^{2}x" },
            { "verbal_explanation": "נכפול את המונה של השבר הראשון במכנה של השבר השני, ואת המונה השני במכנה הראשון.", "math_expression": "\\cos x(1 + \\sin x) - \\cos x(1 - \\sin x)" },
            { "verbal_explanation": "נפתח סוגריים במונה המשותף.", "math_expression": "\\cos x + \\cos x \\times \\sin x - \\cos x + \\cos x \\times \\sin x" },
            { "verbal_explanation": "נכנס איברים במונה ונראה שהקוסינוס הבודד מתבטל.", "math_expression": "2 \\times \\cos x \\times \\sin x" },
            { "verbal_explanation": "נרכיב את השבר החדש ממונה ומכנה שפישטנו.", "math_expression": "\\dfrac{2 \\times \\cos x \\times \\sin x}{\\cos^{2}x}" },
            { "verbal_explanation": "נצמצם קוסינוס אחד מהמונה ומהמכנה.", "math_expression": "\\dfrac{2 \\times \\sin x}{\\cos x}" },
            { "verbal_explanation": "נמיר את השבר שנותר בעזרת זהות הטנגנס.", "math_expression": "2 \\times \\tan x" }
        ],
        "final_answer": "2tanx"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "פשטו את המכפלה הבאה: \\( (\\dfrac{1}{\\sin x} - \\sin x) \\times \\tan x \\). הניחו שהזווית חדה ומתאפשרת הגדרת הביטוי.&rlm;",
        "options": ["cosx", "sinx", "1", "tanx"],
        "correctAnswer": 0,
        "hint": "בצעו מכנה משותף בתוך הסוגריים העגולים. השתמשו בזהות פיתגורס למונה, ולאחר מכן המירו את הטנגנס מחוץ לסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נטפל קודם בחיסור הנמצא בתוך הסוגריים וניצור עבורו מכנה משותף.", "math_expression": "\\dfrac{1}{\\sin x} - \\dfrac{\\sin^{2}x}{\\sin x}" },
            { "verbal_explanation": "נאחד את שני הביטויים לשבר יחיד.", "math_expression": "\\dfrac{1 - \\sin^{2}x}{\\sin x}" },
            { "verbal_explanation": "ניעזר בזהות הפיתגורית הבסיסית כדי לחלץ ערך פשוט יותר למונה.", "math_expression": "\\cos^{2}x = 1 - \\sin^{2}x" },
            { "verbal_explanation": "נציב את הפישוט חזרה אל תוך הסוגריים.", "math_expression": "\\dfrac{\\cos^{2}x}{\\sin x}" },
            { "verbal_explanation": "כעת ניגש לגורם החיצוני, שהוא הטנגנס, ונרשום את זהותו כהכנה לכפל.", "math_expression": "\\tan x = \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נציב את שני השברים זה ליד זה ונבצע הכפלה ביניהם.", "math_expression": "\\dfrac{\\cos^{2}x}{\\sin x} \\times \\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נצמצם את הסינוסים המשותפים וכן חזקה אחת של קוסינוס עם המכנה, לקבלת הפתרון.", "math_expression": "\\cos x" }
        ],
        "final_answer": "cosx"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "זהויות טריגונומטריות בסיסיות (tan, sin²+cos²=1)",
        "question_text": "נתון כי \\( \\tan x = 3 \\). חשבו את הערך של הביטוי: \\( \\dfrac{2\\sin x - \\cos x}{\\sin x + 2\\cos x} \\).&rlm;",
        "options": ["1", "5 / 7", "2", "3 / 5"],
        "correctAnswer": 0,
        "hint": "חלקו את המונה ואת המכנה בפונקציית הקוסינוס כדי ליצור ביטויים של טנגנס שניתן להציב בהם את הנתון הישיר.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הביטוי המקורי אותו אנו נדרשים לחשב.", "math_expression": "\\dfrac{2\\sin x - \\cos x}{\\sin x + 2\\cos x}" },
            { "verbal_explanation": "נחלק גם את מונה השבר וגם את מכנה השבר בפונקציית הקוסינוס.", "math_expression": "\\dfrac{\\dfrac{2\\sin x - \\cos x}{\\cos x}}{\\dfrac{\\sin x + 2\\cos x}{\\cos x}}" },
            { "verbal_explanation": "נפריד את השברים במונה ובמכנה לחלוקה אינדיבידואלית של כל איבר.", "math_expression": "\\dfrac{\\dfrac{2\\sin x}{\\cos x} - \\dfrac{\\cos x}{\\cos x}}{\\dfrac{\\sin x}{\\cos x} + \\dfrac{2\\cos x}{\\cos x}}" },
            { "verbal_explanation": "נשתמש בזהות הטנגנס ונצמצם את הקוסינוסים לאחת.", "math_expression": "\\dfrac{2\\tan x - 1}{\\tan x + 2}" },
            { "verbal_explanation": "נציב את הערך המספרי של הטנגנס שניתן לנו בנתוני השאלה.", "math_expression": "\\dfrac{2 \\times 3 - 1}{3 + 2}" },
            { "verbal_explanation": "נבצע את פעולות הכפל, החיסור והחיבור במונה ובמכנה.", "math_expression": "\\dfrac{6 - 1}{5} = \\dfrac{5}{5}" },
            { "verbal_explanation": "קבלנו את הערך המספרי הסופי המבוקש.", "math_expression": "1" }
        ],
        "final_answer": "1"
    },

    // ==========================================
    // תת נושא 2: פונקציות טריגונומטריות של זווית כפולה (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "נתון ש- \\( \\sin x = 0.8 \\) והזווית נמצאת ברביע הראשון. חשבו את הערך המדויק של \\( \\sin(2x) \\).&rlm;",
        "options": ["0.96", "1.6", "0.64", "0.48"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת סינוס זווית כפולה. לשם כך עליכם לחשב גם את קוסינוס הזווית בעזרת הזהות הפיתגורית.",
        "solution_steps": [
            { "verbal_explanation": "על מנת למצוא סינוס של זווית כפולה נצטרך תחילה לדעת את ערכו של הקוסינוס.", "math_expression": "\\sin^{2}x + \\cos^{2}x = 1" },
            { "verbal_explanation": "נציב את הערך שניתן בשאלה.", "math_expression": "0.8^{2} + \\cos^{2}x = 1" },
            { "verbal_explanation": "נחשב את הריבוע.", "math_expression": "0.64 + \\cos^{2}x = 1" },
            { "verbal_explanation": "נבודד את הקוסינוס על ידי חיסור והוצאת שורש, תוך התחשבות ברביע הראשון.", "math_expression": "\\cos^{2}x = 0.36 \\Rightarrow \\cos x = 0.6" },
            { "verbal_explanation": "נרשום את נוסחת סינוס הזווית הכפולה.", "math_expression": "\\sin(2x) = 2 \\times \\sin x \\times \\cos x" },
            { "verbal_explanation": "נציב את כל הערכים שחישבנו וניתנו למשוואת הזהות.", "math_expression": "\\sin(2x) = 2 \\times 0.8 \\times 0.6" },
            { "verbal_explanation": "נבצע את המכפלות לקבלת התוצאה הסופית העשרונית.", "math_expression": "\\sin(2x) = 1.6 \\times 0.6 = 0.96" }
        ],
        "final_answer": "0.96"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "נתון ש- \\( \\cos x = 0.5 \\). חשבו את הערך של \\( \\cos(2x) \\) מבלי למצוא את גודל הזווית \\( x \\) עצמה.&rlm;",
        "options": ["-0.5", "0.5", "-0.25", "0"],
        "correctAnswer": 0,
        "hint": "קיימות מספר צורות לזהות קוסינוס זווית כפולה. בחרו בזו שמשתמשת רק בקוסינוס הזווית הבודדת.",
        "solution_steps": [
            { "verbal_explanation": "נבחר מבין כלל הזהויות של קוסינוס זווית כפולה את זו המבוססת אך ורק על פונקציית קוסינוס יחידה.", "math_expression": "\\cos(2x) = 2\\cos^{2}x - 1" },
            { "verbal_explanation": "נכין את הערך הנתון בשאלה להצבה, על ידי העלאתו בריבוע.", "math_expression": "\\cos^{2}x = 0.5^{2}" },
            { "verbal_explanation": "נחשב את הריבוע.", "math_expression": "\\cos^{2}x = 0.25" },
            { "verbal_explanation": "נציב את הריבוע שמצאנו לתוך הזהות שבחרנו קודם לכן.", "math_expression": "\\cos(2x) = 2 \\times 0.25 - 1" },
            { "verbal_explanation": "נבצע את פעולת הכפל.", "math_expression": "\\cos(2x) = 0.5 - 1" },
            { "verbal_explanation": "נחסר ונקבל את התוצאה הנדרשת.", "math_expression": "\\cos(2x) = -0.5" },
            { "verbal_explanation": "התהליך הושלם ישירות ללא שימוש בזוויות.", "math_expression": "-0.5" }
        ],
        "final_answer": "-0.5"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "פשטו את השבר הבא בעזרת זהויות זווית כפולה: \\( \\dfrac{\\sin(2x)}{2\\sin x} \\). הניחו שהמכנה אינו מתאפס.&rlm;",
        "options": ["cosx", "sinx", "1", "tanx"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת הפתיחה הקלאסית לסינוס של פעמיים זווית, וצמצמו גורמים משותפים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הזהות של סינוס זווית כפולה, הקושרת אותה למכפלה.", "math_expression": "\\sin(2x) = 2 \\times \\sin x \\times \\cos x" },
            { "verbal_explanation": "נציב את הפירוק הזה בחזרה אל המונה של התרגיל שניתן לנו.", "math_expression": "\\dfrac{2 \\times \\sin x \\times \\cos x}{2\\sin x}" },
            { "verbal_explanation": "נבחין כי המספר שתיים מופיע כגורם מכפיל גם במונה וגם במכנה. נצמצם אותו.", "math_expression": "\\dfrac{\\sin x \\times \\cos x}{\\sin x}" },
            { "verbal_explanation": "נבחין כי פונקציית הסינוס מופיעה ככופל משותף עליון ותחתון. נצמצם גם אותה.", "math_expression": "\\dfrac{\\cos x}{1}" },
            { "verbal_explanation": "הביטוי הופך ללא שבר.", "math_expression": "\\cos x" },
            { "verbal_explanation": "פישטנו את הביטוי במלואו כפי שנדרש.", "math_expression": "\\cos x" },
            { "verbal_explanation": "התהליך הסתיים.", "math_expression": "\\cos x" }
        ],
        "final_answer": "cosx"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "הוכיחו או פשטו את הביטוי: \\( \\dfrac{1 - \\cos(2x)}{2} \\) לקבלת פונקציה טריגונומטרית פשוטה יחידה בריבוע.&rlm;",
        "options": ["sin²x", "cos²x", "tan²x", "1"],
        "correctAnswer": 0,
        "hint": "בחרו את הזהות לקוסינוס זווית כפולה שתבטל את המספר אחת במונה. איזו מבין שלוש הנוסחאות עדיפה כאן?",
        "solution_steps": [
            { "verbal_explanation": "פונקציית קוסינוס של זווית כפולה ניתנת להצגה במספר דרכים. נבחר בזו שמכילה רק פונקציית סינוס, כדי שתעזור לנו לצמצם את האחד הקבוע.", "math_expression": "\\cos(2x) = 1 - 2\\sin^{2}x" },
            { "verbal_explanation": "נציב את הזהות שנבחרה אל תוך הביטוי המקורי, תוך הקפדה על שמירת הסוגריים עקב חיסור.", "math_expression": "\\dfrac{1 - (1 - 2\\sin^{2}x)}{2}" },
            { "verbal_explanation": "נפתח את הסוגריים במונה על ידי הכפלת כל האיברים שבהם בסימן השלילי.", "math_expression": "\\dfrac{1 - 1 + 2\\sin^{2}x}{2}" },
            { "verbal_explanation": "נכנס איברים במונה. המספר אחת פחות אחת מתאפס ונעלם.", "math_expression": "\\dfrac{2\\sin^{2}x}{2}" },
            { "verbal_explanation": "נצמצם את המקדם המשותף שתיים ממונה ומהמכנה.", "math_expression": "\\dfrac{\\sin^{2}x}{1}" },
            { "verbal_explanation": "נרשום את התשובה הסופית כפונקציה מפושטת לחלוטין וללא שברים.", "math_expression": "\\sin^{2}x" },
            { "verbal_explanation": "זוהי פונקציה טריגונומטרית יחידה מועלית בריבוע.", "math_expression": "\\sin^{2}x" }
        ],
        "final_answer": "sin²x"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "מה ערכו המדויק של הביטוי המורכב \\( \\cos^{2}(15^{\\circ}) - \\sin^{2}(15^{\\circ}) \\)?&rlm;",
        "options": ["0.866", "0.5", "1", "0"],
        "correctAnswer": 0,
        "hint": "הביטוי בנוי בדיוק כמו הנוסחה הרשמית של קוסינוס זווית כפולה. סגרו אותו לזווית אחת גדולה.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את התבנית המוכרת המהווה את הזהות העיקרית של קוסינוס זווית כפולה.", "math_expression": "\\cos^{2}x - \\sin^{2}x = \\cos(2x)" },
            { "verbal_explanation": "נבחין כי הזווית בתרגיל מתאימה למשתנה בנוסחה שהצגנו.", "math_expression": "x = 15^{\\circ}" },
            { "verbal_explanation": "נציב את הזווית לתוך הנוסחה הכללית כדי לדחוס את הביטוי הארוך לביטוי קצר יחיד.", "math_expression": "\\cos^{2}(15^{\\circ}) - \\sin^{2}(15^{\\circ}) = \\cos(2 \\times 15^{\\circ})" },
            { "verbal_explanation": "נבצע את המכפלה הפנימית בזווית החדשה שנוצרה.", "math_expression": "\\cos(30^{\\circ})" },
            { "verbal_explanation": "נשתמש בידע על ערכים טריגונומטריים של זוויות מיוחדות נפוצות.", "math_expression": "\\cos(30^{\\circ}) = \\dfrac{\\sqrt{3}}{2}" },
            { "verbal_explanation": "הערך העשרוני המקורב של שורש שלוש הוא בערך 1.732, כך שחלוקה בשתיים נותנת שבר עשרוני מוכר.", "math_expression": "\\approx 0.866" },
            { "verbal_explanation": "הגענו לערך המספרי הנדרש.", "math_expression": "0.866" }
        ],
        "final_answer": "0.866"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "פשטו את השבר \\( \\dfrac{\\sin(2x)}{\\cos(2x) + 1} \\) להבעה באמצעות פונקציה טריגונומטרית אחת.&rlm;",
        "options": ["tanx", "sinx", "cosx", "cotx"],
        "correctAnswer": 0,
        "hint": "המירו את מונה השבר בעזרת זהות סינוס, ואת מכנה השבר בעזרת זהות קוסינוס שתצמצם את החיבור של אחת.",
        "solution_steps": [
            { "verbal_explanation": "נטפל תחילה במונה השבר, באמצעות הנוסחה היחידה עבור פונקציה זו.", "math_expression": "\\sin(2x) = 2 \\times \\sin x \\times \\cos x" },
            { "verbal_explanation": "נטפל כעת במכנה. יש לנו מספר אפשרויות לקוסינוס זווית כפולה. נבחר בזו המכילה את הקבוע שלילי כדי שנוכל לבטלו עם הקבוע החיובי שבמכנה.", "math_expression": "\\cos(2x) = 2\\cos^{2}x - 1" },
            { "verbal_explanation": "נציב את הזהות של המכנה לתוך השבר המקורי.", "math_expression": "\\cos(2x) + 1 = 2\\cos^{2}x - 1 + 1" },
            { "verbal_explanation": "נפשט את המכנה לאחר ההצבה, על ידי חיסור של אפס.", "math_expression": "2\\cos^{2}x" },
            { "verbal_explanation": "נציב כעת גם את המונה המפורק וגם את המכנה המפושט ליצירת שבר חדש.", "math_expression": "\\dfrac{2 \\times \\sin x \\times \\cos x}{2\\cos^{2}x}" },
            { "verbal_explanation": "נצמצם את המקדם שתיים, ונצמצם גורם של קוסינוס ממונה וממכנה גם יחד.", "math_expression": "\\dfrac{\\sin x}{\\cos x}" },
            { "verbal_explanation": "נשתמש בזהות הטנגנס לקבלת התשובה הפשוטה ביותר.", "math_expression": "\\tan x" }
        ],
        "final_answer": "tanx"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "מצאו מהו הערך של הביטוי \\( 2\\sin(22.5^{\\circ}) \\times \\cos(22.5^{\\circ}) \\).&rlm;",
        "options": ["0.707", "1", "0.5", "0.866"],
        "correctAnswer": 0,
        "hint": "הפעילו את נוסחת סינוס הזווית הכפולה בצורה הפוכה, כך שתקבלו סינוס של זווית גדולה יותר המוכרת לנו.",
        "solution_steps": [
            { "verbal_explanation": "נזהה שהביטוי המספרי נראה בדיוק כמו אגף ימין של זהות טריגונומטרית מוכרת.", "math_expression": "2 \\times \\sin x \\times \\cos x = \\sin(2x)" },
            { "verbal_explanation": "במקרה הנוכחי, הזווית שלנו היא זווית שאינה שלמה, אך מופיעה פעמיים.", "math_expression": "x = 22.5^{\\circ}" },
            { "verbal_explanation": "נכווץ את הביטוי על ידי מעבר לאגף שמאל של הזהות, כלומר הכפלת הזווית.", "math_expression": "2 \\times \\sin(22.5^{\\circ}) \\times \\cos(22.5^{\\circ}) = \\sin(2 \\times 22.5^{\\circ})" },
            { "verbal_explanation": "נחשב את מכפלת הזווית בשתיים.", "math_expression": "\\sin(45^{\\circ})" },
            { "verbal_explanation": "זווית זו היא אחת מהזויות הידועות במעגל הטריגונומטרי. נרשום את ערכה המדויק לשבר.", "math_expression": "\\sin(45^{\\circ}) = \\dfrac{\\sqrt{2}}{2}" },
            { "verbal_explanation": "ערך השורש הוא בערך 1.414 ולכן ניתן גם לתרגמו לעשרוני.", "math_expression": "\\approx 0.707" },
            { "verbal_explanation": "הפתרון המלא התקבל בצורה פשוטה.", "math_expression": "0.707" }
        ],
        "final_answer": "0.707"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "נתונה המשוואה \\( \\cos(2x) + \\sin^{2}x = 0.5 \\). פתרו את המשוואה ומצאו ערך ל-\\( \\cos x \\), בהנחה שהזווית חדה.&rlm;",
        "options": ["0.707", "0.5", "0.866", "1"],
        "correctAnswer": 0,
        "hint": "השתמשו בזהות הפותחת את הקוסינוס הכפול כך שתכיל סינוס בריבוע, על מנת לצמצם ולפשט את המשוואה לחלוטין.",
        "solution_steps": [
            { "verbal_explanation": "נתחיל מהזהות שכוללת גם קוסינוס וגם סינוס עבור קוסינוס של הזווית הכפולה.", "math_expression": "\\cos(2x) = \\cos^{2}x - \\sin^{2}x" },
            { "verbal_explanation": "נציב את הזהות במקום הביטוי המורכב שבמשוואה שניתנה לנו.", "math_expression": "(\\cos^{2}x - \\sin^{2}x) + \\sin^{2}x = 0.5" },
            { "verbal_explanation": "נבטל את הסוגריים.", "math_expression": "\\cos^{2}x - \\sin^{2}x + \\sin^{2}x = 0.5" },
            { "verbal_explanation": "נצמצם את האיברים הנגדיים הכוללים סינוס.", "math_expression": "\\cos^{2}x = 0.5" },
            { "verbal_explanation": "נרשום את השבר העשרוני גם כצורת שבר פשוט להקלת החישוב.", "math_expression": "\\cos^{2}x = \\dfrac{1}{2}" },
            { "verbal_explanation": "נוציא שורש לשני האגפים. בהתאם לדרישות הבעיה ניקח את השורש החיובי.", "math_expression": "\\cos x = \\sqrt{\\dfrac{1}{2}} = \\dfrac{1}{\\sqrt{2}}" },
            { "verbal_explanation": "זהו שורש חצי השווה למספר הידוע.", "math_expression": "0.707" }
        ],
        "final_answer": "0.707"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "פשטו את הביטוי: \\( \\cos(2x) + 2\\sin^{2}x \\).&rlm;",
        "options": ["1", "0", "cosx", "sinx"],
        "correctAnswer": 0,
        "hint": "המירו את קוסינוס הזווית הכפולה בעזרת אחת הנוסחאות שמשתמשת בסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את אחת הנוסחאות המוכרות לקוסינוס זווית כפולה. נבחר בזו שמשתמשת בסינוס כדי שנוכל לאחד איברים.", "math_expression": "\\cos(2x) = 1 - 2\\sin^{2}x" },
            { "verbal_explanation": "נציב את הזהות אל תוך הביטוי שהתבקשנו לפשט.", "math_expression": "1 - 2\\sin^{2}x + 2\\sin^{2}x" },
            { "verbal_explanation": "נכנס איברים דומים. אנו רואים שיש כאן איברים נגדיים המבטלים זה את זה.", "math_expression": "- 2\\sin^{2}x + 2\\sin^{2}x = 0" },
            { "verbal_explanation": "לאחר צמצום האיברים הללו, נותר רק המספר הקבוע.", "math_expression": "1 + 0 = 1" },
            { "verbal_explanation": "הביטוי פשוט לחלוטין ואין צורך בשלבים נוספים.", "math_expression": "1" },
            { "verbal_explanation": "סיום הפישוט.", "math_expression": "1" },
            { "verbal_explanation": "תשובה סופית.", "math_expression": "1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פונקציות טריגונומטריות של זווית כפולה",
        "question_text": "פשטו את הביטוי הבא: \\( (\\sin x + \\cos x)^{2} - 1 \\).&rlm;",
        "options": ["sin(2x)", "cos(2x)", "2sinx", "1"],
        "correctAnswer": 0,
        "hint": "פתחו סוגריים עם נוסחת כפל מקוצר. השתמשו בזהות הפיתגורית לאיפוס חלקים, ובזהות זווית כפולה למה שנשאר.",
        "solution_steps": [
            { "verbal_explanation": "נפתח את הסוגריים לפי נוסחת הריבוע המוכרת באלגברה.", "math_expression": "(A + B)^{2} = A^{2} + 2AB + B^{2}" },
            { "verbal_explanation": "נציב את הפונקציות הטריגונומטריות לתוך הפתיחה.", "math_expression": "\\sin^{2}x + 2 \\times \\sin x \\times \\cos x + \\cos^{2}x" },
            { "verbal_explanation": "נציב את הביטוי הפתוח בחזרה לתרגיל השלם הכולל חיסור.", "math_expression": "\\sin^{2}x + 2 \\times \\sin x \\times \\cos x + \\cos^{2}x - 1" },
            { "verbal_explanation": "נסדר את האיברים כך שחזקות הריבוע יופיעו סמוכות זו לזו לשם זיהוי נוח.", "math_expression": "(\\sin^{2}x + \\cos^{2}x) + 2 \\times \\sin x \\times \\cos x - 1" },
            { "verbal_explanation": "ניעזר בזהות הפיתגורית לאיחוד סכום הריבועים לאחת.", "math_expression": "1 + 2 \\times \\sin x \\times \\cos x - 1" },
            { "verbal_explanation": "נחסר את המספרים ונקבל ביטוי מצומצם.", "math_expression": "2 \\times \\sin x \\times \\cos x" },
            { "verbal_explanation": "ביטוי זה זהה לחלוטין לנוסחת סינוס של זווית כפולה.", "math_expression": "\\sin(2x)" }
        ],
        "final_answer": "sin(2x)"
    },

    // ==========================================
    // תת נושא 3: פתרון משוואות טריגונומטריות (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "פתרו את המשוואה הטריגונומטרית הבאה: \\( \\sin x = \\sin(60^{\\circ}) \\). רשמו את התשובה הכללית.&rlm;",
        "options": ["x = 60° + 360°k  או  x = 120° + 360°k", "x = 60° + 180°k", "x = 30° + 360°k  או  x = 150° + 360°k", "x = 60° + 360°k  או  x = -60° + 360°k"],
        "correctAnswer": 0,
        "hint": "למשוואת סינוס יש שני פתרונות כלליים: האחד זהה לזווית ועוד מחזור שלם, והשני הוא המשלים שלה ל-180 מעלות ועוד מחזור.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את תבנית הפתרון הכללית למשוואה מסוג סינוס שווה לסינוס.", "math_expression": "\\sin x = \\sin A" },
            { "verbal_explanation": "הפתרון הראשון נובע מזהות הזווית, בתוספת מחזוריות שלמה של מעגל.", "math_expression": "x = A + 360^{\\circ}k" },
            { "verbal_explanation": "הפתרון השני נובע מסימטריה של הפונקציה במעגל, המחייבת השלמה למאה ושמונים.", "math_expression": "x = 180^{\\circ} - A + 360^{\\circ}k" },
            { "verbal_explanation": "נציב את הזווית המוכרת מהמשוואה שלנו לתוך הפתרון הראשון.", "math_expression": "x = 60^{\\circ} + 360^{\\circ}k" },
            { "verbal_explanation": "נציב את הזווית לפתרון השני.", "math_expression": "x = 180^{\\circ} - 60^{\\circ} + 360^{\\circ}k" },
            { "verbal_explanation": "נבצע חיסור זוויות בענף השני.", "math_expression": "x = 120^{\\circ} + 360^{\\circ}k" },
            { "verbal_explanation": "נאחד את שני הענפים המלאים.", "math_expression": "60^{\\circ} + 360^{\\circ}k \\quad , \\quad 120^{\\circ} + 360^{\\circ}k" }
        ],
        "final_answer": "x = 60° + 360°k  או  x = 120° + 360°k"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "פתרו את המשוואה הבאה ומצאו פתרון כללי: \\( \\cos(2x) = 1 \\).&rlm;",
        "options": ["x = 180°k", "x = 360°k", "x = 90°k", "x = 180° + 360°k"],
        "correctAnswer": 0,
        "hint": "קוסינוס מקבל את הערך אחת רק בזוויות שהן כפולות שלמות של 360. השוו את הזווית הפנימית למחזור.",
        "solution_steps": [
            { "verbal_explanation": "נבחן היכן על המעגל הטריגונומטרי פונקציית הקוסינוס שווה לאחת חיובית.", "math_expression": "\\cos A = 1" },
            { "verbal_explanation": "התשובה לכך היא בראשית המעגל וכל סיבוב שלם לאחר מכן. זוהי נקודה יחידה במחזור.", "math_expression": "A = 0^{\\circ} + 360^{\\circ}k = 360^{\\circ}k" },
            { "verbal_explanation": "נשווה כעת את הזווית הפנימית של המשוואה הנתונה לפתרון הכללי שמצאנו.", "math_expression": "2x = 360^{\\circ}k" },
            { "verbal_explanation": "נחלק את שני צידי המשוואה בשתיים כדי לבודד את המשתנה היחיד.", "math_expression": "x = \\dfrac{360^{\\circ}k}{2}" },
            { "verbal_explanation": "נבצע את פעולת החילוק על המספר הקבוע בלבד.", "math_expression": "x = 180^{\\circ}k" },
            { "verbal_explanation": "זהו הפתרון הכללי והיחיד הנדרש למקרה פרטי זה של משוואת קוסינוס השווה לאחת.", "math_expression": "x = 180^{\\circ}k" },
            { "verbal_explanation": "הפתרון הושלם בהצלחה.", "math_expression": "x = 180^{\\circ}k" }
        ],
        "final_answer": "x = 180°k"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "פתרו את המשוואה בתחום \\( 0^{\\circ} \\leq x \\leq 180^{\\circ} \\):  \\( \\sin(2x) = \\sin x \\).&rlm;",
        "options": ["0°, 60°, 180°", "0°, 90°, 180°", "60°, 120°", "0°, 180°"],
        "correctAnswer": 0,
        "hint": "המירו את סינוס זווית כפולה. לאחר מכן, העבירו הכל לאגף אחד והוציאו סינוס x כגורם משותף מחוץ לסוגריים.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בזהות הטריגונומטרית לזווית כפולה באגף שמאל.", "math_expression": "2 \\times \\sin x \\times \\cos x = \\sin x" },
            { "verbal_explanation": "נעביר את כל האיברים לאגף אחד למטרת איפוס.", "math_expression": "2 \\times \\sin x \\times \\cos x - \\sin x = 0" },
            { "verbal_explanation": "נוציא את הפונקציה המשותפת לגורמים מחוץ לסוגריים כמכפלה.", "math_expression": "\\sin x (2\\cos x - 1) = 0" },
            { "verbal_explanation": "המכפלה שווה אפס, לכן יש לנו שתי משוואות. המשוואה הראשונה.", "math_expression": "\\sin x = 0" },
            { "verbal_explanation": "פתרונותיה בתחום המוגבל הנתון הם קצוות המעגל החצי-עליון.", "math_expression": "x = 0^{\\circ} \\quad , \\quad x = 180^{\\circ}" },
            { "verbal_explanation": "המשוואה השנייה הנובעת מאיפוס תכולת הסוגריים.", "math_expression": "2\\cos x - 1 = 0 \\Rightarrow \\cos x = 0.5" },
            { "verbal_explanation": "פתרונה בתחום המוגבל הוא זווית חדה ברביע הראשון. מספק נקודה שלישית.", "math_expression": "x = 60^{\\circ}" }
        ],
        "final_answer": "0°, 60°, 180°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "מצאו את הפתרון הכללי של המשוואה \\( \\tan x = 1 \\).&rlm;",
        "options": ["x = 45° + 180°k", "x = 45° + 360°k", "x = 135° + 180°k", "x = 45° + 90°k"],
        "correctAnswer": 0,
        "hint": "לפונקציית הטנגנס יש מחזור של 180 מעלות. מצאו את הזווית החדה שעבורה הטנגנס שווה לאחת.",
        "solution_steps": [
            { "verbal_explanation": "פונקציית הטנגנס מתאפיינת במחזוריות של חצי מעגל במקום מעגל שלם כמו השאר.", "math_expression": "\\tan x = \\tan A \\Rightarrow x = A + 180^{\\circ}k" },
            { "verbal_explanation": "נחפש את הזווית הבסיסית הראשונה שבה היחס שווה לאחת. זה קורה כשסינוס וקוסינוס שווים.", "math_expression": "\\tan(45^{\\circ}) = 1" },
            { "verbal_explanation": "נרכיב את הפתרון הכללי תוך שימוש במחזור הקצר.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" },
            { "verbal_explanation": "ענף פתרונות יחיד זה מכסה את כלל המצבים במעגל.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" },
            { "verbal_explanation": "אין צורך בשני ענפי פתרונות כפי שקיים בפונקציות אחרות.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" },
            { "verbal_explanation": "סיימנו למצוא את הייצוג המדויק לפתרון המשוואה.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" },
            { "verbal_explanation": "הפתרון הושלם ואינו דורש פישוטים נוספים.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" }
        ],
        "final_answer": "x = 45° + 180°k"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "פתרו את המשוואה הבאה בתחום שבין 0 ל-360 מעלות: \\( \\sin^{2}x - \\sin x = 0 \\).&rlm;",
        "options": ["0°, 90°, 180°, 360°", "0°, 180°, 360°", "90°, 270°", "0°, 90°"],
        "correctAnswer": 0,
        "hint": "הוציאו גורם משותף מחוץ לסוגריים ופתרו שתי משוואות פשוטות נפרדות, בדקו את ערכיהן במעגל השלם.",
        "solution_steps": [
            { "verbal_explanation": "נבצע פירוק לגורמים של הביטוי הריבועי שהוצג בפנינו.", "math_expression": "\\sin x (\\sin x - 1) = 0" },
            { "verbal_explanation": "המשוואה הראשונה הנוצרת מאיפוס של הגורם המבודד החיצוני.", "math_expression": "\\sin x = 0" },
            { "verbal_explanation": "נחלץ את הזוויות המתאימות למשוואה זו בתחום המבוקש.", "math_expression": "x_1 = 0^{\\circ} \\quad , \\quad x_2 = 180^{\\circ} \\quad , \\quad x_3 = 360^{\\circ}" },
            { "verbal_explanation": "המשוואה השנייה נובעת מהאיבר הפנימי של הסוגריים.", "math_expression": "\\sin x - 1 = 0 \\Rightarrow \\sin x = 1" },
            { "verbal_explanation": "נחלץ את הזווית המיוחדת עבורה הפונקציה בשיאה.", "math_expression": "x_4 = 90^{\\circ}" },
            { "verbal_explanation": "כיוון שאין עוד זוויות בתחום המספקות ערך זה, סיימנו את החיפוש עבור הענף השני.", "math_expression": "x_4 = 90^{\\circ}" },
            { "verbal_explanation": "נאגד את כלל הפתרונות שנמצאו למערך תשובות סופי מקיף.", "math_expression": "0^{\\circ} , 90^{\\circ} , 180^{\\circ} , 360^{\\circ}" }
        ],
        "final_answer": "0°, 90°, 180°, 360°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "מצאו פתרון כללי למשוואה המורכבת מהפרש ריבועים: \\( \\cos^{2}x = 0.75 \\).&rlm;",
        "options": ["x = ±30° + 360°k  או  x = ±150° + 360°k", "x = 30° + 180°k", "x = ±60° + 360°k", "x = 150° + 180°k"],
        "correctAnswer": 0,
        "hint": "הוצאת שורש ריבועי מניבה שני ערכים: פלוס ומינוס. פתרו משוואת קוסינוס עבור כל אחד מהערכים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את המשוואה בצורה שברית נוחה לעבודה.", "math_expression": "\\cos^{2}x = \\dfrac{3}{4}" },
            { "verbal_explanation": "נוציא שורש לשני צידי המשוואה. נזכור כי מתקבלים פתרונות חיוביים ושליליים גם יחד.", "math_expression": "\\cos x = \\pm \\sqrt{\\dfrac{3}{4}} = \\pm \\dfrac{\\sqrt{3}}{2}" },
            { "verbal_explanation": "נפרק למערכת הראשונה המטפלת בערך החיובי.", "math_expression": "\\cos x = \\dfrac{\\sqrt{3}}{2}" },
            { "verbal_explanation": "פונקציית קוסינוס סימטרית לסימן הזווית, לכן פתרונותיה כוללים זווית חיובית ושלילית במחזור שלם.", "math_expression": "x = \\pm 30^{\\circ} + 360^{\\circ}k" },
            { "verbal_explanation": "ניגש לפתור את המערכת השנייה עבור הערך השלילי הנוצר מהשורש.", "math_expression": "\\cos x = -\\dfrac{\\sqrt{3}}{2}" },
            { "verbal_explanation": "הזווית המתאימה ברביע השני היא מאה וחמישים מעלות. גם כאן נוסיף סימן וכן מחזוריות.", "math_expression": "x = \\pm 150^{\\circ} + 360^{\\circ}k" },
            { "verbal_explanation": "איגדנו בכך את שתי קבוצות הפתרונות המלאות והשלמות.", "math_expression": "x = \\pm 30^{\\circ} + 360^{\\circ}k \\quad , \\quad x = \\pm 150^{\\circ} + 360^{\\circ}k" }
        ],
        "final_answer": "x = ±30° + 360°k  או  x = ±150° + 360°k"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "פתרו את המשוואה הבאה: \\( \\sin x = \\cos x \\) ורשמו פתרון כללי.&rlm;",
        "options": ["x = 45° + 180°k", "x = 45° + 360°k", "x = 135° + 180°k", "x = 45° + 90°k"],
        "correctAnswer": 0,
        "hint": "חלקו את שני אגפי המשוואה בקוסינוס (בהנחה שאינו אפס), כדי להפוך את המשוואה למשוואת טנגנס פשוטה.",
        "solution_steps": [
            { "verbal_explanation": "נבדוק האם הקוסינוס יכול להיות אפס בפתרון. אם היה אפס, הסינוס היה אפס, וזה סותר את הזהות הפיתגורית. לכן ניתן לחלק בו בבטחה.", "math_expression": "\\cos x \\neq 0" },
            { "verbal_explanation": "נחלק את המשוואה בקוסינוס לאיחוד הפונקציות.", "math_expression": "\\dfrac{\\sin x}{\\cos x} = \\dfrac{\\cos x}{\\cos x}" },
            { "verbal_explanation": "הביטוי מצד שמאל הופך לפונקציה מוכרת, בעוד אגף ימין מצטמצם לאחת.", "math_expression": "\\tan x = 1" },
            { "verbal_explanation": "הזווית הבסיסית המקיימת זאת ידועה מהמשולש שווה שוקיים ישר זווית.", "math_expression": "A = 45^{\\circ}" },
            { "verbal_explanation": "נוסיף את המחזור הייחודי הקצר של פונקציית טנגנס להשלמת הפתרון.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" },
            { "verbal_explanation": "אין צורך לבדוק מקרים נוספים שכן הפתרון הכללי תופס הכל.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" },
            { "verbal_explanation": "התשובה מתקבלת במלואה.", "math_expression": "x = 45^{\\circ} + 180^{\\circ}k" }
        ],
        "final_answer": "x = 45° + 180°k"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "פתרו את המשוואה הריבועית: \\( 2\\cos^{2}x - 3\\cos x + 1 = 0 \\). מצאו את הפתרונות בתחום של זווית חדה (בין 0 ל-90 מעלות, כולל).&rlm;",
        "options": ["0°, 60°", "30°, 60°", "0°, 90°", "60° בלבד"],
        "correctAnswer": 0,
        "hint": "הציבו משתנה עזר במקום הקוסינוס (למשל y). פתרו את המשוואה הריבועית המתקבלת, ואז חיזרו לפונקציה המקורית והשוו לערכים שמצאתם.",
        "solution_steps": [
            { "verbal_explanation": "נציב משתנה זמני כדי לפשט את המשוואה לצורה אלגברית קונבנציונלית.", "math_expression": "y = \\cos x" },
            { "verbal_explanation": "נרשום את המשוואה החדשה.", "math_expression": "2y^{2} - 3y + 1 = 0" },
            { "verbal_explanation": "נפתור באמצעות פירוק מורחב של האיבר האמצעי לשניים והוצאת גורמים משותפים.", "math_expression": "2y^{2} - 2y - y + 1 = 0 \\Rightarrow 2y(y - 1) - 1(y - 1) = 0" },
            { "verbal_explanation": "נחלץ את שני הגורמים של המכפלה.", "math_expression": "(2y - 1)(y - 1) = 0" },
            { "verbal_explanation": "נקבל שני שורשים מספריים עבור המשתנה העזר שלנו.", "math_expression": "y_1 = 1 \\quad , \\quad y_2 = 0.5" },
            { "verbal_explanation": "נבצע הצבה הפוכה בחזרה לטריגונומטריה עם השורש הראשון ונמצא פתרון חיובי שבתחום.", "math_expression": "\\cos x = 1 \\Rightarrow x = 0^{\\circ}" },
            { "verbal_explanation": "נבצע הצבה הפוכה לשורש השני, ונמצא את הזווית החדה האופיינית.", "math_expression": "\\cos x = 0.5 \\Rightarrow x = 60^{\\circ}" }
        ],
        "final_answer": "0°, 60°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "נתונה המשוואה \\( \\sin(3x) = 0 \\). מצאו את כמות הפתרונות המדויקת בתחום הסגור שבין 0 ל-180 מעלות (כולל הקצוות).&rlm;",
        "options": ["4", "3", "2", "5"],
        "correctAnswer": 0,
        "hint": "הפונקציה מתאפסת עבור כפולות של 180. במשוואה 3x, חלקו הכל ב-3 וקבלו סדרה של פתרונות המרווחים ב-60 מעלות זה מזה. רשמו אותם ידנית עד לחציית התחום.",
        "solution_steps": [
            { "verbal_explanation": "פונקציית סינוס מקבלת ערך אפסי בנקודות במרווחים של חצי מעגל שלם.", "math_expression": "\\sin A = 0 \\Rightarrow A = 180^{\\circ}k" },
            { "verbal_explanation": "נשווה את הזווית הפנימית והמורחבת שיש לנו בתרגיל לנוסחת האיפוס הכללית.", "math_expression": "3x = 180^{\\circ}k" },
            { "verbal_explanation": "נחלק בשלוש ליצירת נוסחת פתרונות מבודדת.", "math_expression": "x = 60^{\\circ}k" },
            { "verbal_explanation": "נמצא פתרונות בתוך התחום על ידי הצבת ערכים שלמים במקום המקדם המחזורי, החל מאפס.", "math_expression": "k = 0 \\Rightarrow x_1 = 0^{\\circ}" },
            { "verbal_explanation": "נציב ערך הבא בתור ונחשב.", "math_expression": "k = 1 \\Rightarrow x_2 = 60^{\\circ}" },
            { "verbal_explanation": "נציב את הערך שלאחריו.", "math_expression": "k = 2 \\Rightarrow x_3 = 120^{\\circ}" },
            { "verbal_explanation": "נציב ערך נוסף ובכך מגיעים בדיוק לקצה התחום المותר. סה''כ יש 4 פתרונות.", "math_expression": "k = 3 \\Rightarrow x_4 = 180^{\\circ}" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משוואות טריגונומטריות",
        "question_text": "פתרו את המשוואה הבאה המכילה קשר פנימי בין פונקציות שונות: \\( \\sin x = \\cos(20^{\\circ}) \\). מצאו את הפתרון החיובי הטהור הקטן ביותר במעלות.&rlm;",
        "options": ["70°", "20°", "110°", "160°"],
        "correctAnswer": 0,
        "hint": "כדי להשוות פונקציות מסוג שונה, השתמשו בזהות זווית משלימה ל-90 מעלות המחליפה ביניהן.",
        "solution_steps": [
            { "verbal_explanation": "ניעזר בזהות הזווית המשלימה הממירה קוסינוס לסינוס על מנת להשוות פונקציות זהות משני אגפי המשוואה.", "math_expression": "\\cos A = \\sin(90^{\\circ} - A)" },
            { "verbal_explanation": "נפעיל את הזהות על הערך הנתון באגף ימין כדי לקבל זווית עבודה חליפית.", "math_expression": "\\cos(20^{\\circ}) = \\sin(90^{\\circ} - 20^{\\circ}) = \\sin(70^{\\circ})" },
            { "verbal_explanation": "כעת נרשום את המשוואה המקורית כשהיא כוללת רק פונקציות זהות משני הצדדים.", "math_expression": "\\sin x = \\sin(70^{\\circ})" },
            { "verbal_explanation": "נבנה את ענף הפתרון הראשי המבוסס על שוויון ישיר של הזוויות עם מחזוריות שלמה.", "math_expression": "x = 70^{\\circ} + 360^{\\circ}k" },
            { "verbal_explanation": "נבנה את ענף הפתרון המשני המבוסס על השלמה למאה ושמונים מעלות.", "math_expression": "x = 180^{\\circ} - 70^{\\circ} + 360^{\\circ}k = 110^{\\circ} + 360^{\\circ}k" },
            { "verbal_explanation": "נתבקשנו למצוא את הפתרון החיובי הקטן ביותר. נבדוק את ההצבה ההתחלתית בענפים ונמצא את שתי הזוויות המרכזיות.", "math_expression": "k = 0 \\Rightarrow x_1 = 70^{\\circ} \\quad , \\quad x_2 = 110^{\\circ}" },
            { "verbal_explanation": "הערך הקטן ביותר מביניהם הוא הערך הרצוי כתשובה.", "math_expression": "70^{\\circ}" }
        ],
        "final_answer": "70°"
    },

    // ==========================================
    // תת נושא 4: משפט הסינוסים (כולל רדיוס המעגל החוסם) (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במשולש \\( ABC \\) נתון כי צלע \\( a = 12 \\) ס''מ והזווית שמולה \\( A = 30^{\\circ} \\). חשבו את רדיוס המעגל החוסם את המשולש (\\( R \\)).&rlm;",
        "options": ["12", "24", "6", "8.5"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט הקושר צלע וסינוס הזווית ממול לקוטר המעגל החוסם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט הסינוסים המקשר בין צלע, זווית נגדית, ורדיוס המעגל החוסם.", "math_expression": "\\dfrac{a}{\\sin A} = 2R" },
            { "verbal_explanation": "נציב את הצלע והזווית הנתונות בשאלה לתוך הנוסחה הגיאומטרית.", "math_expression": "\\dfrac{12}{\\sin(30^{\\circ})} = 2R" },
            { "verbal_explanation": "נזכור כי ערך פונקציית סינוס בזווית ספציפית זו הוא שבר פשוט ידוע.", "math_expression": "\\sin(30^{\\circ}) = 0.5" },
            { "verbal_explanation": "נציב את הערך השברי למכנה ונבצע פעולת חילוק על ידי כפל בהופכי לקבלת תוצאה מדויקת.", "math_expression": "\\dfrac{12}{0.5} = 24" },
            { "verbal_explanation": "כעת נוצר קשר פשוט למציאת קוטר המעגל כולו.", "math_expression": "24 = 2R" },
            { "verbal_explanation": "נחלק בשתיים להשגת רדיוס המעגל כנדרש בתרגיל.", "math_expression": "R = 12" },
            { "verbal_explanation": "הפתרון הסופי התקבל בשלמותו.", "math_expression": "12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במשולש כלשהו נתונות שתי זוויות: 45 מעלות ו-60 מעלות. הצלע שמול הזווית הקטנה היא באורך 10 ס''מ. מהו אורך הצלע שמול הזווית הגדולה מביניהן?&rlm;",
        "options": ["12.25", "14.14", "10", "8.66"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט הסינוסים ליצירת פרופורציה בין הצלעות והזוויות. מצאו ערך מקורב של השורשים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את היחסים הנתונים בהסתמך על משפט הסינוסים המחבר צלעות לזוויותיהן הנגדיות.", "math_expression": "\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}" },
            { "verbal_explanation": "נציב את האורך והזווית הראשונים, אל מול האורך הנעלם והזווית השנייה.", "math_expression": "\\dfrac{10}{\\sin(45^{\\circ})} = \\dfrac{b}{\\sin(60^{\\circ})}" },
            { "verbal_explanation": "נכפיל את המכנה הימני באגף השמאלי לבידוד הצלע החסרה.", "math_expression": "b = \\dfrac{10 \\times \\sin(60^{\\circ})}{\\sin(45^{\\circ})}" },
            { "verbal_explanation": "נציב את ערכי הסינוסים המדויקים, המורכבים משורשים.", "math_expression": "b = \\dfrac{10 \\times \\dfrac{\\sqrt{3}}{2}}{\\dfrac{\\sqrt{2}}{2}}" },
            { "verbal_explanation": "נצמצם את המכנים המשותפים שהם שתיים, להשגת שבר פשוט יותר.", "math_expression": "b = \\dfrac{10\\sqrt{3}}{\\sqrt{2}}" },
            { "verbal_explanation": "נכפול מונה ומכנה בשורש שתיים להעלמת השורש מהמכנה ולצמצום. התוצאה היא שורש שש כפול חמש.", "math_expression": "b = 5\\sqrt{6}" },
            { "verbal_explanation": "חישוב מקורב של המספר בעזרת מחשבון נותן ערך עשרוני התואם לתשובה.", "math_expression": "\\approx 12.25" }
        ],
        "final_answer": "12.25"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במשולש נתונות שתי צלעות: \\( a = 8 \\) ו-\\( b = 12 \\). הזווית שמול צלע \\( a \\) היא 30 מעלות. מצאו את הזווית החדה האפשרית שמול הצלע \\( b \\). (הניחו שמתקיימים תנאי המשולש).&rlm;",
        "options": ["48.59°", "30°", "60°", "131.4°"],
        "correctAnswer": 0,
        "hint": "צלע חלקי סינוס הזווית שמולה נותן את הפרופורציה. בודדו את סינוס הזווית המבוקשת והשתמשו בפעולה ההפוכה לסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש במשפט הסינוסים הקושר צלעות לסינוס הזווית ממול.", "math_expression": "\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}" },
            { "verbal_explanation": "נציב את כל הנתונים הידועים במשוואה כבסיס לפתרון.", "math_expression": "\\dfrac{8}{\\sin(30^{\\circ})} = \\dfrac{12}{\\sin B}" },
            { "verbal_explanation": "נזכור שערך הסינוס של זווית של שלושים מעלות שווה למחצית.", "math_expression": "\\sin(30^{\\circ}) = 0.5" },
            { "verbal_explanation": "נציב זאת ונחשב את מנת השבר השמאלי כולה.", "math_expression": "\\dfrac{8}{0.5} = 16" },
            { "verbal_explanation": "נשווה את התוצאה לשבר הימני המכיל את הנעלם.", "math_expression": "16 = \\dfrac{12}{\\sin B}" },
            { "verbal_explanation": "נכפול באלכסון ונבודד את פונקציית הסינוס, תוך צמצום השבר שנוצר.", "math_expression": "\\sin B = \\dfrac{12}{16} = 0.75" },
            { "verbal_explanation": "נשתמש בפעולת סינוס הפוך במחשבון כדי למצוא את הזווית החדה המתאימה לערך השבר.", "math_expression": "B = \\arcsin(0.75) \\approx 48.59^{\\circ}" }
        ],
        "final_answer": "48.59°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "רדיוס המעגל החוסם משולש שווה צלעות הוא 10 ס''מ. מהו אורך צלע המשולש (בערך מקורב)?&rlm;",
        "options": ["17.32", "10", "15", "8.66"],
        "correctAnswer": 0,
        "hint": "במשולש שווה צלעות כל הזוויות הן בנות 60 מעלות. היעזרו בקשר הישיר בין צלע, זווית וקוטר המעגל.",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה צלעות כל זוויות המשולש חולקות ערך זהה.", "math_expression": "A = 60^{\\circ}" },
            { "verbal_explanation": "נשתמש במשפט ההרחבה שקושר צלע עם זווית ורדיוס במעגל.", "math_expression": "\\dfrac{a}{\\sin(60^{\\circ})} = 2R" },
            { "verbal_explanation": "נציב את אורך הרדיוס הנתון כקבוע מספרי למשוואה.", "math_expression": "\\dfrac{a}{\\sin(60^{\\circ})} = 2 \\times 10 = 20" },
            { "verbal_explanation": "נבודד את הצלע על ידי הכפלה בסינוס הזווית הפנימית.", "math_expression": "a = 20 \\times \\sin(60^{\\circ})" },
            { "verbal_explanation": "נציב את הערך המדויק לסינוס של שישים מעלות על מנת לאפשר חישוב.", "math_expression": "a = 20 \\times \\dfrac{\\sqrt{3}}{2}" },
            { "verbal_explanation": "נצמצם את המקדם של השורש במספרים השלמים מחוצה לו.", "math_expression": "a = 10\\sqrt{3}" },
            { "verbal_explanation": "נחשב את ערך השורש כעשרוני לקבלת הקירוב הסופי עבור הצלע המבוקשת.", "math_expression": "\\approx 17.32" }
        ],
        "final_answer": "17.32"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במשולש \\( ABC \\) הזווית \\( A = 45^{\\circ} \\) והזווית \\( B = 75^{\\circ} \\). אורך הצלע \\( c \\) שמול הזווית השלישית הוא 20. מצאו את רדיוס המעגל החוסם את המשולש הזה.&rlm;",
        "options": ["11.55", "10", "20", "23.1"],
        "correctAnswer": 0,
        "hint": "ראשית חשבו את הזווית השלישית במשולש (סכום הזוויות הוא 180). לאחר מכן השתמשו בה ובצלע הידועה ליצירת קשר עם הקוטר.",
        "solution_steps": [
            { "verbal_explanation": "כדי להשתמש בצלע הנתונה עלינו למצוא את הזווית הנגדית לה במדויק. סכום הזוויות משלים למאה ושמונים.", "math_expression": "C = 180^{\\circ} - (45^{\\circ} + 75^{\\circ})" },
            { "verbal_explanation": "נבצע את חיבור הזוויות הידועות בסוגריים.", "math_expression": "C = 180^{\\circ} - 120^{\\circ}" },
            { "verbal_explanation": "נמצא את הערך הסופי של הזווית השלישית במשולש המדובר.", "math_expression": "C = 60^{\\circ}" },
            { "verbal_explanation": "נשתמש במשפט המרחיב של הסינוסים למציאת קוטר המעגל באמצעות הנתונים שמצאנו זה עתה.", "math_expression": "\\dfrac{c}{\\sin C} = 2R" },
            { "verbal_explanation": "נציב את הערכים המספריים לתוך המשוואה הטריגונומטרית.", "math_expression": "\\dfrac{20}{\\sin(60^{\\circ})} = 2R" },
            { "verbal_explanation": "נחלק בשתיים את שני אגפי המשוואה לפני החישוב המורכב עם הסינוס כדי לקבל רדיוס ולא קוטר.", "math_expression": "R = \\dfrac{10}{\\sin(60^{\\circ})}" },
            { "verbal_explanation": "נבצע חילוק מספרי להשגת הקירוב העשרוני לתוצאת אורך הרדיוס. סינוס שישים הוא בערך 0.866.", "math_expression": "R \\approx \\dfrac{10}{0.866} \\approx 11.55" }
        ],
        "final_answer": "11.55"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במעגל חסום מרובע \\( ABCD \\). הזווית הפנימית בנקודה \\( B \\) היא בת 100 מעלות. אורך האלכסון הנגדי \\( AC \\) הוא 15. חשבו את רדיוס המעגל החוסם.&rlm;",
        "options": ["7.61", "15", "10", "15.22"],
        "correctAnswer": 0,
        "hint": "הזווית ההיקפית נשענת על המיתר שהוא האלכסון. המשולש ABC גם הוא חסום במעגל באותו הרדיוס. הציבו בנוסחה.",
        "solution_steps": [
            { "verbal_explanation": "האלכסון של המרובע משמש כמיתר במעגל. המשולש הנוצר משלושת הקודקודים שלו והזווית הכלואה ביניהם הוא משולש חסום למעגל עצמו.", "math_expression": "\\Delta ABC \\text{ is inscribed}" },
            { "verbal_explanation": "מכיוון שכך, ניתן להשתמש במשפט הסינוסים הכללי על פני המשולש החלקי.", "math_expression": "\\dfrac{AC}{\\sin B} = 2R" },
            { "verbal_explanation": "נציב את הזווית ואת אורך המיתר הידוע לתוך המשוואה המורחבת.", "math_expression": "\\dfrac{15}{\\sin(100^{\\circ})} = 2R" },
            { "verbal_explanation": "נבודד את הרדיוס באמצעות חלוקה מקדימה בשתיים של המונה השמאלי.", "math_expression": "R = \\dfrac{7.5}{\\sin(100^{\\circ})}" },
            { "verbal_explanation": "נעזרים במחשבון כדי לחשב את ערכו המספרי של סינוס ממאה מעלות.", "math_expression": "\\sin(100^{\\circ}) \\approx 0.9848" },
            { "verbal_explanation": "מבצעים את פעולת החילוק הפשוטה תוך שמירה על הקירוב הנדרש ליצירת המספר העשרוני.", "math_expression": "R \\approx \\dfrac{7.5}{0.9848}" },
            { "verbal_explanation": "הפתרון הסופי מוגש בשתי ספרות לאחר הנקודה למען הדיוק.", "math_expression": "\\approx 7.61" }
        ],
        "final_answer": "7.61"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "נתון משולש שרדיוס המעגל החוסם אותו הוא 12. ידוע כי היחס בין שתי צלעות הוא 1:2. הזווית שמול הצלע הקטנה מבין השתיים היא 30 מעלות. מצאו את אורך הצלע הגדולה יותר מביניהן.&rlm;",
        "options": ["24", "12", "6", "18"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את הצלע הקטנה באמצעות משפט הסינוסים והרדיוס. לאחר מכן, הכפילו אותה פי 2 לפי יחס הצלעות שניתן לכם.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המשתנים בהתאם ליחס הנתון: הצלע הקטנה ופי שתיים ממנה לצלע הגדולה.", "math_expression": "a \\quad , \\quad b = 2a" },
            { "verbal_explanation": "נשתמש במשפט המורחב בצירוף הזווית הקטנה השייכת לצלע בעלת הגודל הקטן.", "math_expression": "\\dfrac{a}{\\sin(30^{\\circ})} = 2R" },
            { "verbal_explanation": "נציב את אורך הרדיוס שניתן לנו להשלמת כל חלקי המשוואה.", "math_expression": "\\dfrac{a}{\\sin(30^{\\circ})} = 2 \\times 12 = 24" },
            { "verbal_explanation": "נבודד את הצלע הראשונה במכפלה אלכסונית.", "math_expression": "a = 24 \\times \\sin(30^{\\circ})" },
            { "verbal_explanation": "סינוס של שלושים מעלות שווה למחצית הדרך בדיוק למעלה במעגל הטריגונומטרי ולכן מדובר במספר קל ונוח לחישוב מהיר בראש.", "math_expression": "a = 24 \\times 0.5 = 12" },
            { "verbal_explanation": "נחזור להגדרות ההתחלתיות המייצגות את היחס במבנה הצלעות במשולש הנידון על מנת למצוא את הגדולה.", "math_expression": "b = 2 \\times a" },
            { "verbal_explanation": "נציב את הממד המחושב אל התבנית ונקבל את אורך הצלע השנייה של המשולש שסיימה את המסע.", "math_expression": "b = 2 \\times 12 = 24" }
        ],
        "final_answer": "24"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במשולש כלשהו נתון שצלע אחת היא פעמיים הרדיוס החוסם (\\( a = 2R \\)). מה ניתן לומר על המשולש בוודאות רבה ללא שום נתונים חסרים נוספים?&rlm;",
        "options": ["הוא משולש ישר זווית", "הוא משולש שווה שוקיים", "הוא משולש שווה צלעות", "הוא חייב להיות חד זווית"],
        "correctAnswer": 0,
        "hint": "הציבו במשפט סינוסים את ההנחה שצלע שווה לפעמיים הרדיוס. מה תוכלו להגיד על הזווית?",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר המורחב מהמשפט כפי שמקובל לשימוש עבור מקרה של מעגלים חוסמים.", "math_expression": "\\dfrac{a}{\\sin A} = 2R" },
            { "verbal_explanation": "נתון שקיים קשר מיוחד בין אחת מצלעות המשולש ורדיוס המעגל המגדיר אותה כקוטר רשמי.", "math_expression": "a = 2R" },
            { "verbal_explanation": "נציב את הנתון הזה אל תוך המשוואה הראשונה שיצרנו על מנת לבדוק איזה ביטוי מתקבל.", "math_expression": "\\dfrac{2R}{\\sin A} = 2R" },
            { "verbal_explanation": "נחלק את שני האגפים בקוטר שמופיע פעמיים משני צדי המשוואה כדי להשאיר משוואה מבוססת פונקציה טריגונומטרית.", "math_expression": "\\dfrac{1}{\\sin A} = 1" },
            { "verbal_explanation": "נבצע כפל באלכסון המציב את פונקציית הסינוס כערך עצמאי השווה לאחת.", "math_expression": "\\sin A = 1" },
            { "verbal_explanation": "הזווית היחידה בתוך משולש שהסינוס שלה הוא אחד שלם היא הזווית הישרה.", "math_expression": "A = 90^{\\circ}" },
            { "verbal_explanation": "משולש בעל זווית ישרה מוגדר כמשולש ישר זווית באופן מוחלט.", "math_expression": "\\text{Right Triangle}" }
        ],
        "final_answer": "הוא משולש ישר זווית"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במשולש שווה שוקיים זווית הבסיס היא בת 75 מעלות. בסיס המשולש (הצלע השונה) הוא באורך 10. חשבו את רדיוס המעגל החוסם משולש זה.&rlm;",
        "options": ["10", "5", "8.66", "11.5"],
        "correctAnswer": 0,
        "hint": "מצאו תחילה את זווית הראש (סכום זוויות 180). ולאחר מכן השתמשו בבסיס ובזווית שמולו למציאת הרדיוס במשפט המרכזי.",
        "solution_steps": [
            { "verbal_explanation": "משולש שווה שוקיים מאופיין בכך ששתי זוויות הבסיס שלו זהות. נחשב את סכומן.", "math_expression": "2 \\times 75^{\\circ} = 150^{\\circ}" },
            { "verbal_explanation": "סכום זוויות במשולש הוא תמיד קבוע. נחשב את זווית הראש המשלימה לסכום הכללי.", "math_expression": "C = 180^{\\circ} - 150^{\\circ} = 30^{\\circ}" },
            { "verbal_explanation": "זווית הראש ממוקמת באופן מדויק מול בסיס המשולש שהוא הצלע השונה הנתונה כ-10.", "math_expression": "c = 10 \\quad , \\quad C = 30^{\\circ}" },
            { "verbal_explanation": "נציב צמד נתונים זה אל תוך נוסחת משפט הסינוסים הקושרת אותם לרדיוס החוסם באותו מעגל.", "math_expression": "\\dfrac{10}{\\sin(30^{\\circ})} = 2R" },
            { "verbal_explanation": "נציב את הערך הידוע של סינוס שלושים כפי שנלמד השווה בדיוק למחצית שלמה המקלה עלינו.", "math_expression": "\\dfrac{10}{0.5} = 2R" },
            { "verbal_explanation": "נבצע את חלוקת המונה במכנה השברי, דבר השקול לחלוטין לכפל בשניים במקרה הנידון.", "math_expression": "20 = 2R" },
            { "verbal_explanation": "נחלק בקבוע שתיים כדי לסיים ולחלץ את מבוקשנו כראוי.", "math_expression": "R = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הסינוסים (כולל רדיוס המעגל החוסם)",
        "question_text": "במשולש כלשהו יחס הצלעות הוא \\( a:b = 3:4 \\). נתון כי \\( \\sin B = 0.8 \\). מהו הערך של \\( \\sin A \\)?&rlm;",
        "options": ["0.6", "0.8", "0.5", "1"],
        "correctAnswer": 0,
        "hint": "היחס בין הצלעות שווה בדיוק ליחס בין הסינוסים של הזוויות הנגדיות להן במשולש. בנו משוואת שברים והציבו.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש במשפט המרכזי של הסינוסים המגדיר את היחסים בין הצלעות והזוויות כפרופורציה עקבית.", "math_expression": "\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B}" },
            { "verbal_explanation": "כדי לעשות שימוש נוח ויעיל יותר בנתוני היחסים, נסדר את המשוואה בצורה חדשה השמה את הצלעות בצד אחד ואת הפונקציות בצד השני.", "math_expression": "\\dfrac{a}{b} = \\dfrac{\\sin A}{\\sin B}" },
            { "verbal_explanation": "ידוע לנו נתון בסיסי חשוב אודות היחס בין שתי הצלעות המוצגות בפרופורציה המהווה שבר פשוט הניתן להצבה.", "math_expression": "\\dfrac{a}{b} = \\dfrac{3}{4} = 0.75" },
            { "verbal_explanation": "בנוסף אנו מקבלים נתון לגבי ערכה העשרוני של הפונקציה בזווית אחת מתוך השתיים שאותן אנו חוקרים כעת ולכן נציב אותה.", "math_expression": "\\sin B = 0.8" },
            { "verbal_explanation": "נרכיב את הפאזל על ידי שילוב כל חלקי המידע שאספנו לכדי משוואה יחידה.", "math_expression": "0.75 = \\dfrac{\\sin A}{0.8}" },
            { "verbal_explanation": "נחלץ את המשתנה הרצוי לנו באמצעות הכפלת המספר השלם במכנה העשרוני הקיים בצד ימין למטרת בידוד הפונקציה.", "math_expression": "\\sin A = 0.75 \\times 0.8" },
            { "verbal_explanation": "נחשב את המכפלה של שני המספרים השבורים לקבלת מספר עשרוני חדש וזהו סוף התרגיל.", "math_expression": "\\sin A = 0.6" }
        ],
        "final_answer": "0.6"
    },
    // ==========================================
    // תת נושא 1: משפט הקוסינוסים (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במשולש כלשהו נתון כי אורך צלע אחת הוא 5 ס''מ, אורך הצלע השנייה הוא 8 ס''מ, והזווית הכלואה ביניהן היא בת 60 מעלות. מצאו את אורך הצלע השלישית במשולש.&rlm;",
        "options": ["7", "9", "6.2", "8.5"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט הקוסינוסים כדי למצוא את הצלע שמול הזווית. קוסינוס של 60 מעלות שווה ל-0.5.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה של משפט הקוסינוסים למציאת צלע שמול זווית ידועה.", "math_expression": "c^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos C" },
            { "verbal_explanation": "נציב את הנתונים המספריים הנתונים לנו בשאלה אל תוך המשוואה.", "math_expression": "c^{2} = 5^{2} + 8^{2} - 2 \\times 5 \\times 8 \\times \\cos(60^{\\circ})" },
            { "verbal_explanation": "נציב את הערך הידוע של פונקציית הקוסינוס עבור זווית של שישים מעלות.", "math_expression": "\\cos(60^{\\circ}) = 0.5" },
            { "verbal_explanation": "נחשב את הריבועים של הצלעות וכן את המכפלה.", "math_expression": "c^{2} = 25 + 64 - 80 \\times 0.5" },
            { "verbal_explanation": "נבצע את פעולת הכפל באגף הימני.", "math_expression": "c^{2} = 89 - 40" },
            { "verbal_explanation": "נחסר ונקבל את ריבוע הצלע השלישית.", "math_expression": "c^{2} = 49" },
            { "verbal_explanation": "נוציא שורש ריבועי כדי לקבל את האורך הסופי של הצלע (אורך הוא תמיד חיובי).", "math_expression": "c = 7" }
        ],
        "final_answer": "7"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במשולש נתונים אורכי שלוש הצלעות: 3 ס''מ, 5 ס''מ ו-7 ס''מ. חשבו את גודל הזווית הנמצאת מול הצלע שאורכה 7 ס''מ.&rlm;",
        "options": ["120°", "60°", "135°", "90°"],
        "correctAnswer": 0,
        "hint": "הציבו את כל הצלעות במשפט הקוסינוסים. בודדו את פונקציית הקוסינוס. שים לב אם התוצאה שלילית, המשמעות היא שהזווית קהה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט הקוסינוסים כדי למצוא זווית מתוך שלוש צלעות נתונות.", "math_expression": "c^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos C" },
            { "verbal_explanation": "נציב את הצלע הגדולה בבידוד בצד שמאל, כיוון שאנו מחפשים את הזווית שמולה.", "math_expression": "7^{2} = 3^{2} + 5^{2} - 2 \\times 3 \\times 5 \\times \\cos C" },
            { "verbal_explanation": "נחשב את החזקות השניות ואת המכפלה הקבועה.", "math_expression": "49 = 9 + 25 - 30 \\times \\cos C" },
            { "verbal_explanation": "נחבר את המספרים החופשיים באגף ימין.", "math_expression": "49 = 34 - 30 \\times \\cos C" },
            { "verbal_explanation": "נעביר את המספר החופשי לאגף השמאלי על ידי חיסור.", "math_expression": "15 = -30 \\times \\cos C" },
            { "verbal_explanation": "נחלק במקדם של הפונקציה כדי לבודד אותה לחלוטין.", "math_expression": "\\cos C = -0.5" },
            { "verbal_explanation": "נשתמש בפונקציה ההפוכה לקוסינוס במחשבון כדי למצוא את הזווית הקהה המתאימה.", "math_expression": "C = 120^{\\circ}" }
        ],
        "final_answer": "120°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במקבילית, אורכי הצלעות הסמוכות הם 4 ס''מ ו-6 ס''מ. הזווית החדה של המקבילית היא 60 מעלות. מהו אורך האלכסון הקצר של המקבילית?&rlm;",
        "options": ["5.29", "8.72", "6.5", "4.8"],
        "correctAnswer": 0,
        "hint": "האלכסון הקצר נמצא מול הזווית החדה של המקבילית ויוצר משולש עם שתי הצלעות. הפעילו את משפט הקוסינוסים במשולש זה.",
        "solution_steps": [
            { "verbal_explanation": "האלכסון מחלק את המקבילית לשני משולשים חופפים. נתבונן במשולש שנוצר מזווית של שישים מעלות.", "math_expression": "d^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos A" },
            { "verbal_explanation": "נציב את אורכי הצלעות של המקבילית ואת הזווית החדה.", "math_expression": "d^{2} = 4^{2} + 6^{2} - 2 \\times 4 \\times 6 \\times \\cos(60^{\\circ})" },
            { "verbal_explanation": "נציב את הערך הידוע של קוסינוס שישים מעלות.", "math_expression": "\\cos(60^{\\circ}) = 0.5" },
            { "verbal_explanation": "נחשב את הריבועים ונבצע את פעולת המכפלה הרציפה.", "math_expression": "d^{2} = 16 + 36 - 48 \\times 0.5" },
            { "verbal_explanation": "נשלים את המכפלה המספרית.", "math_expression": "d^{2} = 52 - 24" },
            { "verbal_explanation": "נבצע חיסור לקבלת ריבוע האלכסון הקצר.", "math_expression": "d^{2} = 28" },
            { "verbal_explanation": "נוציא שורש ריבועי כדי לקבל את ערך הקירוב העשרוני לאורך האלכסון.", "math_expression": "d \\approx 5.29" }
        ],
        "final_answer": "5.29"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "בהמשך לנתוני המקבילית הקודמת (צלעות 4 ו-6, זווית חדה 60°), מהו אורך האלכסון הארוך של המקבילית?&rlm;",
        "options": ["8.72", "10", "7.21", "9.4"],
        "correctAnswer": 0,
        "hint": "האלכסון הארוך נמצא מול הזווית הקהה. זווית קהה במקבילית משלימה ל-180 מעלות את הזווית החדה הסמוכה לה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את גודל הזווית הקהה של המקבילית, שמשלימה את הזווית החדה הסמוכה לה למאה ושמונים מעלות.", "math_expression": "B = 180^{\\circ} - 60^{\\circ} = 120^{\\circ}" },
            { "verbal_explanation": "נרשום את משפט הקוסינוסים עבור המשולש המכיל את הזווית הקהה.", "math_expression": "D^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos B" },
            { "verbal_explanation": "נציב את הנתונים לתוך המשוואה החדשה.", "math_expression": "D^{2} = 4^{2} + 6^{2} - 2 \\times 4 \\times 6 \\times \\cos(120^{\\circ})" },
            { "verbal_explanation": "נציב את הערך הידוע של קוסינוס זווית קהה, שהוא מספר שלילי.", "math_expression": "\\cos(120^{\\circ}) = -0.5" },
            { "verbal_explanation": "נבצע את המכפלה ונזהה שמינוס כפול מינוס הופך לחיבור.", "math_expression": "D^{2} = 16 + 36 - 48 \\times (-0.5)" },
            { "verbal_explanation": "נסכם את כל המספרים באגף ימין.", "math_expression": "D^{2} = 52 + 24 = 76" },
            { "verbal_explanation": "נוציא שורש ריבועי לקבלת הקירוב לאורך האלכסון הארוך.", "math_expression": "D \\approx 8.72" }
        ],
        "final_answer": "8.72"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במשולש כלשהו נתונות צלעות באורכים 7, 8 ו-9. מצאו את הזווית הגדולה ביותר במשולש זה.&rlm;",
        "options": ["73.4°", "80.2°", "60°", "90°"],
        "correctAnswer": 0,
        "hint": "בכל משולש, הזווית הגדולה ביותר נמצאת בדיוק מול הצלע הארוכה ביותר. השתמשו במשפט הקוסינוסים למציאת זווית זו.",
        "solution_steps": [
            { "verbal_explanation": "הזווית הגדולה ממוקמת מול הצלע הארוכה, שאורכה תשע. נרשום את המשפט עבורה.", "math_expression": "c^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos C" },
            { "verbal_explanation": "נציב את נתוני הצלעות, כאשר תשע מבודד בצד שמאל.", "math_expression": "9^{2} = 7^{2} + 8^{2} - 2 \\times 7 \\times 8 \\times \\cos C" },
            { "verbal_explanation": "נחשב את הריבועים ואת המכפלה המשולשת.", "math_expression": "81 = 49 + 64 - 112 \\times \\cos C" },
            { "verbal_explanation": "נחבר את המספרים שבאגף הימני.", "math_expression": "81 = 113 - 112 \\times \\cos C" },
            { "verbal_explanation": "נחסר מכל אגף את המספר החופשי להפרדת הפונקציה.", "math_expression": "-32 = -112 \\times \\cos C" },
            { "verbal_explanation": "נחלק במקדם הפונקציה ליצירת שבר חיובי ופשוט.", "math_expression": "\\cos C = \\dfrac{32}{112} = \\dfrac{2}{7}" },
            { "verbal_explanation": "נחשב את הערך העשרוני של השבר.", "math_expression": "\\cos C \\approx 0.2857" },
            { "verbal_explanation": "נשתמש בפעולה ההפוכה כדי למצוא את הזווית המקורבת בתוך המשולש.", "math_expression": "C \\approx 73.4^{\\circ}" }
        ],
        "final_answer": "73.4°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במעוין, אורך כל צלע הוא 10 ס''מ ואחת מזוויותיו הפנימיות היא בת 120 מעלות. מהו אורך האלכסון הארוך של המעוין?&rlm;",
        "options": ["17.32", "20", "14.14", "10"],
        "correctAnswer": 0,
        "hint": "האלכסון הארוך מחבר את שתי הזוויות החדות ועובר מול הזווית הקהה בת ה-120 מעלות. מעוין מחולק למשולשים שווי שוקיים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט הקוסינוסים עבור המשולש שווה השוקיים הנוצר במעוין ומכיל את הזווית הקהה.", "math_expression": "d^{2} = a^{2} + a^{2} - 2 \\times a \\times a \\times \\cos A" },
            { "verbal_explanation": "נציב את אורך צלע המעוין ואת הזווית הקהה.", "math_expression": "d^{2} = 10^{2} + 10^{2} - 2 \\times 10 \\times 10 \\times \\cos(120^{\\circ})" },
            { "verbal_explanation": "נציב את הערך המספרי והשלילי של פונקציית הזווית.", "math_expression": "\\cos(120^{\\circ}) = -0.5" },
            { "verbal_explanation": "נבצע את כל המכפלות ונשים לב להפיכת הסימן לחיבור בגלל המכפלה בשלילי.", "math_expression": "d^{2} = 100 + 100 - 200 \\times (-0.5)" },
            { "verbal_explanation": "נשלים את המכפלה האחרונה באגף ימין.", "math_expression": "d^{2} = 200 + 100" },
            { "verbal_explanation": "נסכום את כלל האיברים לקבלת ריבוע האלכסון.", "math_expression": "d^{2} = 300" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את אורך האלכסון העשרוני המקורב.", "math_expression": "d \\approx 17.32" }
        ],
        "final_answer": "17.32"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במשולש שווה שוקיים נתון כי אורך הבסיס הוא 12 ס''מ, וזווית הבסיס היא בת 30 מעלות. חשבו את אורך השוק (הצלע השווה) בעזרת משפט הקוסינוסים.&rlm;",
        "options": ["6.93", "8", "6", "10.39"],
        "correctAnswer": 0,
        "hint": "חשבו תחילה את זווית הראש. לאחר מכן הציבו הכל במשפט הקוסינוסים כאשר השוק מסומנת כמשתנה.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את זווית הראש של המשולש, המהווה משלימה למאה ושמונים מעלות יחד עם שתי זוויות הבסיס השוות.", "math_expression": "C = 180^{\\circ} - 30^{\\circ} - 30^{\\circ} = 120^{\\circ}" },
            { "verbal_explanation": "נרשום את הנוסחה של משפט הקוסינוסים עבור הבסיס, כאשר השוקיים שוות ולכן מסומנות באותו משתנה.", "math_expression": "c^{2} = a^{2} + a^{2} - 2 \\times a \\times a \\times \\cos C" },
            { "verbal_explanation": "נציב את אורך הבסיס הידוע לנו ואת הזווית שמצאנו זה עתה.", "math_expression": "12^{2} = 2a^{2} - 2a^{2} \\times \\cos(120^{\\circ})" },
            { "verbal_explanation": "נציב את הערך של הפונקציה הקהה.", "math_expression": "144 = 2a^{2} - 2a^{2} \\times (-0.5)" },
            { "verbal_explanation": "נבצע את המכפלה הכוללת מינוס לקבלת סכום חיבורי פשוט יותר.", "math_expression": "144 = 2a^{2} + a^{2}" },
            { "verbal_explanation": "נחבר את המשתנים הריבועיים זהותיים יחדיו.", "math_expression": "144 = 3a^{2}" },
            { "verbal_explanation": "נחלק בשלוש לבידוד ריבוע השוק הנדרש לבסוף.", "math_expression": "a^{2} = 48" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את אורך השוק המקורב כפי שנדרשנו להציג.", "math_expression": "a \\approx 6.93" }
        ],
        "final_answer": "6.93"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במשולש כלשהו נתונות שתי צלעות באורכים \\( x \\) ו-\\( 2x \\). הזווית הכלואה ביניהן היא בת 60 מעלות. אורך הצלע השלישית במשולש הוא שורש 27. מצאו את הערך של \\( x \\).&rlm;",
        "options": ["3", "4", "1.5", "2"],
        "correctAnswer": 0,
        "hint": "הציבו את כל הביטויים עם x בתוך המשוואה הקלאסית, וזכרו ששורש בריבוע מתבטל.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה הבסיסית והמוכרת של משפט הקוסינוסים.", "math_expression": "c^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos C" },
            { "verbal_explanation": "נציב את כל הנתונים, לרבות אורך הצלע השלישית השורשית.", "math_expression": "(\\sqrt{27})^{2} = x^{2} + (2x)^{2} - 2 \\times x \\times 2x \\times \\cos(60^{\\circ})" },
            { "verbal_explanation": "נפתח חזקות ונציב את ערך הפונקציה הנתונה.", "math_expression": "27 = x^{2} + 4x^{2} - 4x^{2} \\times 0.5" },
            { "verbal_explanation": "נבצע את המכפלה המספרית בתוך אגף המשתנים.", "math_expression": "27 = 5x^{2} - 2x^{2}" },
            { "verbal_explanation": "נחסר את המקדמים כדי לקבל ביטוי מצומצם המכיל נעלם יחיד.", "math_expression": "27 = 3x^{2}" },
            { "verbal_explanation": "נחלק בשלוש למציאת ריבועו של המשתנה המקורי שלנו.", "math_expression": "x^{2} = 9" },
            { "verbal_explanation": "נוציא שורש. היות ומדובר באורך צלע גיאומטרית, ניקח בחשבון את התשובה החיובית בלבד.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "במשולש שווה שוקיים נתון כי אורך השוק הוא 5 ס''מ, ואורך הבסיס הוא 8 ס''מ. מצאו את גודלה של זווית הבסיס במשולש באמצעות משפט הקוסינוסים.&rlm;",
        "options": ["36.87°", "53.13°", "45°", "30°"],
        "correctAnswer": 0,
        "hint": "הציבו את אורכי הצלעות ככה שזווית הבסיס היא הנעלם. זווית הבסיס נמצאת מול אחת מהשוקיים (שהן באורך 5).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה כאשר הצלע המבודדת בצד שמאל היא השוק, כיוון שאנו רוצים למצוא את הזווית שמולה.", "math_expression": "a^{2} = b^{2} + c^{2} - 2 \\times b \\times c \\times \\cos A" },
            { "verbal_explanation": "נציב את הנתונים, כאשר צד אחד של המשוואה מכיל את אורך השוק.", "math_expression": "5^{2} = 5^{2} + 8^{2} - 2 \\times 5 \\times 8 \\times \\cos A" },
            { "verbal_explanation": "נחשב את הריבועים ואת המכפלה המהווה מקדם לזווית.", "math_expression": "25 = 25 + 64 - 80 \\times \\cos A" },
            { "verbal_explanation": "נחבר את המספרים החופשיים לקבלת איבר שלם באגף אחד.", "math_expression": "25 = 89 - 80 \\times \\cos A" },
            { "verbal_explanation": "נחסר ונבודד את הפונקציה יחד עם המקדם שלה.", "math_expression": "-64 = -80 \\times \\cos A" },
            { "verbal_explanation": "נחלק כדי למצוא את ערך הפונקציה الטהור למספר עשרוני.", "math_expression": "\\cos A = \\dfrac{64}{80} = 0.8" },
            { "verbal_explanation": "נשתמש בפעולה ההפוכה לחילוץ הזווית החדה המשמשת כבסיס.", "math_expression": "A \\approx 36.87^{\\circ}" }
        ],
        "final_answer": "36.87°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "משפט הקוסינוסים",
        "question_text": "נתון משולש בעל צלעות שאורכן 10 ס''מ ו-15 ס''מ, והזווית הכלואה ביניהן היא זווית ישרה. הראו כי משפט הקוסינוסים מתכנס למשפט פיתגורס, וחשבו את הצלע השלישית.&rlm;",
        "options": ["18.03", "25", "11.18", "20"],
        "correctAnswer": 0,
        "hint": "משפט הקוסינוסים הוא למעשה הכללה של משפט פיתגורס לזוויות שאינן בהכרח 90 מעלות. כשהזווית ישרה, הפונקציה מתאפסת.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה הכללית למשפט המורחב למציאת צלע חסרה.", "math_expression": "c^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos C" },
            { "verbal_explanation": "נציב את הצלעות ואת הזווית הישרה לתוך משוואה מלאה.", "math_expression": "c^{2} = 10^{2} + 15^{2} - 2 \\times 10 \\times 15 \\times \\cos(90^{\\circ})" },
            { "verbal_explanation": "נציין את הערך המאפס של הפונקציה בזווית זו המצויה על גבי הציר.", "math_expression": "\\cos(90^{\\circ}) = 0" },
            { "verbal_explanation": "הצבת האפס במכפלה מעלימה את האיבר האחרון, וכך מתקבל משפט פיתגורס קלאסי.", "math_expression": "c^{2} = 100 + 225 - 0" },
            { "verbal_explanation": "נסכום את הריבועים.", "math_expression": "c^{2} = 325" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את האורך המדויק של היתר (הצלע הארוכה) המהווה את המרחק הסופי.", "math_expression": "c \\approx 18.03" }
        ],
        "final_answer": "18.03"
    },

    // ==========================================
    // תת נושא 2: נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "במשולש כלשהו נתונות שתי צלעות שאורכן 8 ס''מ ו-10 ס''מ. הזווית הכלואה ביניהן היא בת 30 מעלות. חשבו את שטחו של המשולש.&rlm;",
        "options": ["20", "40", "34.64", "15"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת השטח הטריגונומטרית המבוססת על מכפלת שתי צלעות וסינוס הזווית שביניהן, חלקי שתיים.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את נוסחת השטח הטריגונומטרית הכללית למשולשים.", "math_expression": "S = \\dfrac{a \\times b \\times \\sin C}{2}" },
            { "verbal_explanation": "נציב את הנתונים הידועים מתוך תיאור הבעיה.", "math_expression": "S = \\dfrac{8 \\times 10 \\times \\sin(30^{\\circ})}{2}" },
            { "verbal_explanation": "נציב את ערכו המספרי הפשוט והמוכר של הסינוס הנדרש כאן לחישוב.", "math_expression": "\\sin(30^{\\circ}) = 0.5" },
            { "verbal_explanation": "נבצע את המכפלה במונה תוך שילוב השבר העשרוני.", "math_expression": "S = \\dfrac{80 \\times 0.5}{2}" },
            { "verbal_explanation": "הכפלה בחצי מקטינה את המספר בדיוק לחציו, נרשום זאת.", "math_expression": "S = \\dfrac{40}{2}" },
            { "verbal_explanation": "נבצע את פעולת החלוקה הנותרת ונקבל את השטח המלא.", "math_expression": "S = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "אורכי שתי הצלעות הסמוכות של מקבילית הם 5 ס''מ ו-12 ס''מ. הזווית החדה בין הצלעות הללו היא בת 45 מעלות. מהו שטח המקבילית כולה?&rlm;",
        "options": ["42.42", "30", "60", "51.96"],
        "correctAnswer": 0,
        "hint": "שטח מקבילית הוא פעמיים שטח המשולש שנוצר על ידי האלכסון. לכן, אין צורך לחלק בשתיים בנוסחה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה לחישוב שטח מקבילית באמצעות טריגונומטריה.", "math_expression": "S = a \\times b \\times \\sin A" },
            { "verbal_explanation": "נציב את הנתונים למשוואה המיועדת לכך.", "math_expression": "S = 5 \\times 12 \\times \\sin(45^{\\circ})" },
            { "verbal_explanation": "נציב את הערך העשרוני המקורב של הפונקציה הטריגונומטרית לזווית זו.", "math_expression": "\\sin(45^{\\circ}) \\approx 0.707" },
            { "verbal_explanation": "נחשב את מכפלת אורכי הצלעות בלבד בשלב זה.", "math_expression": "S = 60 \\times 0.707" },
            { "verbal_explanation": "נבצע את ההכפלה הסופית המשלבת שלם עם שבר עשרוני לקבלת ערך מספרי סופי לשטח.", "math_expression": "S \\approx 42.42" }
        ],
        "final_answer": "42.42"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "במעוין מסוים, אורך הצלע הוא 6 ס''מ. אחת מהזוויות הפנימיות של המעוין היא קהה ושווה ל-150 מעלות. מהו שטחו של המעוין?&rlm;",
        "options": ["18", "36", "31.18", "15.59"],
        "correctAnswer": 0,
        "hint": "במעוין כל הצלעות שוות, לכן הוא סוג של מקבילית. השתמשו בנוסחה למקבילית עם צלעות שוות.",
        "solution_steps": [
            { "verbal_explanation": "שטח מעוין המוגדר כמקרה פרטי של מקבילית ניתן לחישוב באמצעות צלעותיו והזווית שביניהן.", "math_expression": "S = a \\times a \\times \\sin A" },
            { "verbal_explanation": "נציב את אורכי הצלעות השוות ואת הזווית הקהה שניתנה לנו בבעיה לתוך הביטוי.", "math_expression": "S = 6 \\times 6 \\times \\sin(150^{\\circ})" },
            { "verbal_explanation": "נזכור שפונקציית סינוס לזווית קהה שווה בערכה לסינוס של הזווית המשלימה ל-180 (כלומר 30 מעלות).", "math_expression": "\\sin(150^{\\circ}) = 0.5" },
            { "verbal_explanation": "נחשב את הריבוע של הצלע מתוך המכפלה.", "math_expression": "S = 36 \\times 0.5" },
            { "verbal_explanation": "נבצע את המכפלה על מנת לקבל את השטח המלא.", "math_expression": "S = 18" }
        ],
        "final_answer": "18"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "שטחו של משולש כלשהו הוא 30 סמ''ר. אורכי שתי צלעות של המשולש הם 12 ס''מ ו-10 ס''מ בהתאמה. מצאו את הזווית החדה הכלואה בין שתי הצלעות הללו.&rlm;",
        "options": ["30°", "60°", "45°", "15°"],
        "correctAnswer": 0,
        "hint": "הציבו את כל הנתונים (כולל השטח הידוע) בנוסחת שטח משולש טריגונומטרית, ובודדו את הסינוס כדי למצוא את הזווית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה שלפיה מחשבים שטח משולש.", "math_expression": "S = \\dfrac{a \\times b \\times \\sin C}{2}" },
            { "verbal_explanation": "נציב את נתוני השטח הקיים ואת אורכי שתי הצלעות לתוך התבנית.", "math_expression": "30 = \\dfrac{12 \\times 10 \\times \\sin C}{2}" },
            { "verbal_explanation": "נבצע את פעולת המכפלה הנמצאת בתוך מונה השבר לפני החלוקה.", "math_expression": "30 = \\dfrac{120 \\times \\sin C}{2}" },
            { "verbal_explanation": "נחלק בשתיים להפשטת אגף המשוואה.", "math_expression": "30 = 60 \\times \\sin C" },
            { "verbal_explanation": "נבודד את הפונקציה על ידי חלוקה מנוגדת של המספר החופשי במקדם.", "math_expression": "\\sin C = \\dfrac{30}{60} = 0.5" },
            { "verbal_explanation": "נחלץ את הזווית החדה מהערך שהתקבל בעזרת פעולה הפוכה.", "math_expression": "C = 30^{\\circ}" }
        ],
        "final_answer": "30°"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "במרובע כללי, אורכי שני האלכסונים הם 10 ס''מ ו-16 ס''מ. הזווית החדה הנוצרת מנקודת החיתוך שבין שני האלכסונים הללו היא בת 30 מעלות. מהו שטח המרובע המלא?&rlm;",
        "options": ["40", "80", "69.28", "20"],
        "correctAnswer": 0,
        "hint": "שטח של כל מרובע ניתן לחישוב על ידי מחצית מכפלת שני האלכסונים בסינוס הזווית שביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה לחישוב שטח של מרובע קמור באמצעות האלכסונים החוצים אותו.", "math_expression": "S = \\dfrac{d_1 \\times d_2 \\times \\sin A}{2}" },
            { "verbal_explanation": "נציב את הנתונים לשטח אל תוך הנוסחה שקבענו.", "math_expression": "S = \\dfrac{10 \\times 16 \\times \\sin(30^{\\circ})}{2}" },
            { "verbal_explanation": "נציב את הערך המספרי של פונקציית הסינוס לזווית זו.", "math_expression": "\\sin(30^{\\circ}) = 0.5" },
            { "verbal_explanation": "נבצע את המכפלה המשולשת המופיעה במונה השבר בשלמותה.", "math_expression": "S = \\dfrac{160 \\times 0.5}{2}" },
            { "verbal_explanation": "נחשב את ערכו המלא של המונה לפני פעולת החלוקה.", "math_expression": "S = \\dfrac{80}{2}" },
            { "verbal_explanation": "נחלק על מנת לקבל את השטח המדויק.", "math_expression": "S = 40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "חשבו את שטחו של משולש שווה צלעות שאורך כל צלע שלו הוא בדיוק 8 ס''מ. (עגלו לשתי ספרות עשרוניות).&rlm;",
        "options": ["27.71", "32", "16", "55.43"],
        "correctAnswer": 0,
        "hint": "במשולש שווה צלעות, כל אחת משלוש הזוויות הפנימיות שווה ל-60 מעלות. השתמשו בנוסחת שטח משולש المבוססת על שתי צלעות וזווית.",
        "solution_steps": [
            { "verbal_explanation": "במשולש שווה צלעות כל זווית שווה לשישים מעלות.", "math_expression": "A = 60^{\\circ}" },
            { "verbal_explanation": "נרשום את הנוסחה הכללית לשטח משולש.", "math_expression": "S = \\dfrac{a \\times a \\times \\sin A}{2}" },
            { "verbal_explanation": "נציב את הנתונים שמצאנו ואת אורך הצלע שניתן בשאלה לתוך התבנית המתמטית.", "math_expression": "S = \\dfrac{8 \\times 8 \\times \\sin(60^{\\circ})}{2}" },
            { "verbal_explanation": "נציב את הערך העשרוני המקורב לפונקציית סינוס שישים כדי לאפשר חישוב מתקדם ונוח.", "math_expression": "\\sin(60^{\\circ}) \\approx 0.866" },
            { "verbal_explanation": "נבצע כפל במונה כשלב ביניים בדרך לפתרון.", "math_expression": "S = \\dfrac{64 \\times 0.866}{2}" },
            { "verbal_explanation": "נחלק בשתיים להפשטת הביטוי.", "math_expression": "S = 32 \\times 0.866" },
            { "verbal_explanation": "נבצע את מכפלת השלם והעשרוני לקבלת התוצאה המקורבת.", "math_expression": "S \\approx 27.71" }
        ],
        "final_answer": "27.71"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "שטחו של משולש נתון הוא 40 סמ''ר. אורך אחת מצלעותיו הוא 10 ס''מ, והזווית הסמוכה לה (אשר כולאת את השטח יחד עם הצלע השנייה) היא בת 60 מעלות. מצאו את אורך הצלע השנייה הנדרשת לצורך חישוב זה.&rlm;",
        "options": ["9.24", "8", "4.62", "12.5"],
        "correctAnswer": 0,
        "hint": "הציבו את השטח ואת הצלע הידועה בנוסחה ונסו לחלץ את הצלע השנייה בעזרת פעולות אלגבריות פשוטות להפרדת הנעלם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה שלפיה מחשבים שטח משולש באמצעות תכונות טריגונומטריות.", "math_expression": "S = \\dfrac{a \\times b \\times \\sin C}{2}" },
            { "verbal_explanation": "נציב את נתוני השטח הקיים ואת הצלע והזווית لתוך התבנית.", "math_expression": "40 = \\dfrac{10 \\times b \\times \\sin(60^{\\circ})}{2}" },
            { "verbal_explanation": "נציב את הערך העשרוני המקורב עבור סינוס שישים מעלות.", "math_expression": "\\sin(60^{\\circ}) \\approx 0.866" },
            { "verbal_explanation": "נבצע הצבה במונה לפני ביצוע סדרת הפעולות הנדרשת.", "math_expression": "40 = \\dfrac{10 \\times b \\times 0.866}{2}" },
            { "verbal_explanation": "נכפול ונחלק את המקדמים כדי לפשט את המשוואה וליצור מקדם יחיד לנעלם המבוקש.", "math_expression": "40 = \\dfrac{8.66 \\times b}{2} = 4.33 \\times b" },
            { "verbal_explanation": "נבודד את הצלע השנייה על ידי חלוקה פשוטה.", "math_expression": "b = \\dfrac{40}{4.33}" },
            { "verbal_explanation": "נחשב את ערך הקירוב העשרוני לקבלת אורך מדויק דיו.", "math_expression": "b \\approx 9.24" }
        ],
        "final_answer": "9.24"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "שטחה של מקבילית הוא 100 סמ''ר. אורך אלכסון אחד שלה הוא 20 ס''מ ואורך האלכסון השני הוא \\( x \\). הזווית החדה שבה נחתכים שני האלכסונים הללו היא בת 30 מעלות. מצאו את ערכו של \\( x \\).&rlm;",
        "options": ["20", "10", "40", "15"],
        "correctAnswer": 0,
        "hint": "כל מקבילית היא מרובע, ולכן ניתן לחשב את שטחה על ידי מחצית מכפלת שני אלכסוניה בסינוס הזווית שביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה המאפשרת לחשב שטח כל מרובע על בסיס קווי האלכסון החוצים אותו והזווית בנקודת המפגש.", "math_expression": "S = \\dfrac{d_1 \\times d_2 \\times \\sin A}{2}" },
            { "verbal_explanation": "נציב את כל הערכים שניתנו מתוך השאלה אל תוך התבנית כדי ליצור משוואה.", "math_expression": "100 = \\dfrac{20 \\times x \\times \\sin(30^{\\circ})}{2}" },
            { "verbal_explanation": "נציב את הערך הטריגונומטרי הידוע לזווית זו.", "math_expression": "\\sin(30^{\\circ}) = 0.5" },
            { "verbal_explanation": "נבצע הצבה לשבר ונקבל תבנית ברורה יותר.", "math_expression": "100 = \\dfrac{20 \\times x \\times 0.5}{2}" },
            { "verbal_explanation": "נחשב את המונה על ידי הכפלת המספרים זה בזה.", "math_expression": "100 = \\dfrac{10 \\times x}{2}" },
            { "verbal_explanation": "נחלק בשתיים להסרת המכנה.", "math_expression": "100 = 5 \\times x" },
            { "verbal_explanation": "נחלץ את המשתנה הסופי באמצעות פעולת חילוק יסודית.", "math_expression": "x = 20" }
        ],
        "final_answer": "20"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "משושה משוכלל (מצולע בעל שש צלעות שוות וזוויות שוות) חסום במעגל שרדיוסו הוא 10 ס''מ. במשושה משוכלל, המרחק ממרכז המעגל לכל קודקוד שווה לאורך צלע המשושה. חשבו את שטחו הכולל של המשושה.&rlm;",
        "options": ["259.8", "300", "129.9", "519.6"],
        "correctAnswer": 0,
        "hint": "המשושה מורכב מ-6 משולשים חופפים שווי צלעות. חשבו שטח של משולש אחד והכפילו ב-6.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את זווית הראש של כל אחד מששת המשולשים המרכיבים את המצולע הכולל מתוך מעגל שלם של שלוש מאות ושישים מעלות.", "math_expression": "A = \\dfrac{360^{\\circ}}{6} = 60^{\\circ}" },
            { "verbal_explanation": "נרשום את הנוסחה לחישוב השטח עבור משולש אחד בודד מתוך המערך.", "math_expression": "S_1 = \\dfrac{R \\times R \\times \\sin A}{2}" },
            { "verbal_explanation": "נציב את הרדיוס הידוע ואת הזווית המרכזית שחישבנו.", "math_expression": "S_1 = \\dfrac{10 \\times 10 \\times \\sin(60^{\\circ})}{2}" },
            { "verbal_explanation": "נחשב את ערכו המספרי המקורב של הסינוס הנדרש להשלמת פעולת ההכפלה.", "math_expression": "\\sin(60^{\\circ}) \\approx 0.866" },
            { "verbal_explanation": "נבצע את המכפלה והחלוקה לקבלת השטח המדויק של חתיכה יחידה.", "math_expression": "S_1 = 50 \\times 0.866 = 43.3" },
            { "verbal_explanation": "נכפיל את השטח החלקי בשישה רכיבים זהים המרכיבים יחד את מלוא שטחה של הצורה הגיאומטרית כולה.", "math_expression": "S = 6 \\times S_1" },
            { "verbal_explanation": "נבצע את פעולת החשבון המסיימת לקבלת הערך הנדרש.", "math_expression": "S = 6 \\times 43.3 = 259.8" }
        ],
        "final_answer": "259.8"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "נוסחאות שטח משולש ומרובע בעזרת טריגונומטריה",
        "question_text": "במלבן נתון כי אורך כל אחד מאלכסוניו הוא 12 ס''מ. הזווית הקהה שבה נחתכים שני האלכסונים הללו היא בת 150 מעלות. חשבו את שטחו של המלבן זה.&rlm;",
        "options": ["36", "72", "144", "18"],
        "correctAnswer": 0,
        "hint": "מלבן הוא מרובע, ולכן ניתן להשתמש בנוסחת השטח המבוססת על מכפלת אלכסונים וסינוס הזווית הכלואה ביניהם.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הנוסחה הכללית לחישוב שטחים עבור כל המרובעים בעזרת אלכסונים.", "math_expression": "S = \\dfrac{d \\times d \\times \\sin A}{2}" },
            { "verbal_explanation": "נציב את הנתונים המלאים של אורכי האלכסונים ואת הזווית הקהה.", "math_expression": "S = \\dfrac{12 \\times 12 \\times \\sin(150^{\\circ})}{2}" },
            { "verbal_explanation": "נציב את הערך הידוע של הסינוס הקהה השווה למשלימתו החדה.", "math_expression": "\\sin(150^{\\circ}) = 0.5" },
            { "verbal_explanation": "נציב אותו אל המונה הממתין לפתרון.", "math_expression": "S = \\dfrac{144 \\times 0.5}{2}" },
            { "verbal_explanation": "נחשב את המונה לקבלת מספר שלם יחיד לפני חלוקה סופית.", "math_expression": "S = \\dfrac{72}{2}" },
            { "verbal_explanation": "נחלק ונקבל את התשובה הסופית לחישוב שטח המלבן.", "math_expression": "S = 36" }
        ],
        "final_answer": "36"
    },

    // ==========================================
    // תת נושא 3: פתרון משולשים ומצולעים מורכבים במרחב המישור (10 שאלות)
    // ==========================================
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "מרובע חסום במעגל \\( ABCD \\). אורכי הצלעות הם: \\( AB = 5 \\), \\( BC = 5 \\), ו-\\( CD = 8 \\). הזווית \\( B \\) של המרובע היא בת 120 מעלות. מצאו את אורך הצלע הרביעית \\( AD \\).&rlm;",
        "options": ["9.19", "10", "8.5", "11.2"],
        "correctAnswer": 0,
        "hint": "העבירו אלכסון וחשבו אותו דרך משולש עליון. לאחר מכן השתמשו בתכונת מרובע חסום כדי למצוא זווית תחתונה, ופתרו משוואה ריבועית בעזרת משפט הקוסינוסים.",
        "solution_steps": [
            { "verbal_explanation": "נעביר אלכסון. נשתמש במשפט הקוסינוסים במשולש העליון לחשב את ריבועו של האלכסון המשותף.", "math_expression": "x^{2} = 5^{2} + 5^{2} - 2 \\times 5 \\times 5 \\times \\cos(120^{\\circ})" },
            { "verbal_explanation": "נחשב את ההעלאה בריבוע ונציב את ערך הקוסינוס הקהה תוך הקפדה על סימנים חשבוניים נכונים.", "math_expression": "x^{2} = 25 + 25 - 50 \\times (-0.5)" },
            { "verbal_explanation": "נשלים את חישוב המונה לאלכסון המרכזי במלואו.", "math_expression": "x^{2} = 50 + 25 = 75" },
            { "verbal_explanation": "במרובע חסום, הזוויות הנגדיות משלימות זו את זו ל-180. נחשב את הזווית התחתונה.", "math_expression": "D = 180^{\\circ} - 120^{\\circ} = 60^{\\circ}" },
            { "verbal_explanation": "נפעיל שוב את משפט הקוסינוסים על המשולש התחתון בעל הזווית החדה, כאשר האלכסון המשותף משמש כצלע נגדית.", "math_expression": "x^{2} = y^{2} + 8^{2} - 2 \\times y \\times 8 \\times \\cos(60^{\\circ})" },
            { "verbal_explanation": "נציב את הריבוע של האלכסון למשוואה כדי למצוא את הנעלם של הצלע הרביעית.", "math_expression": "75 = y^{2} + 64 - 16y \\times 0.5" },
            { "verbal_explanation": "נסדר לצורת משוואה ריבועית קלאסית מאופסת לקראת שימוש בנוסחת השורשים.", "math_expression": "y^{2} - 8y - 11 = 0" },
            { "verbal_explanation": "נפתור ונקבל ערך עשרוני בקירוב המציג את אורך הצלע הדרושה להשלמת התשובה.", "math_expression": "y \\approx 9.19" }
        ],
        "final_answer": "9.19"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "בטרפז, הבסיס העליון מקביל לבסיס התחתון. אורכי הצלעות הם: בסיס עליון 5, בסיס תחתון 11, והשוק השמאלית באורך 6. הזווית שבין השוק השמאלית לבסיס התחתון היא בת 60 מעלות. מצאו את אורך השוק הימנית.&rlm;",
        "options": ["6", "7.2", "5", "6.5"],
        "correctAnswer": 0,
        "hint": "הורידו גובה מהבסיס העליון ליצירת משולש ישר זווית משמאל ומלבן באמצע. חשבו את גובה הטרפז ואת החלק הנותר מהבסיס התחתון. לאחר מכן היעזרו במשפט פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את גובה הטרפז על ידי טריגונומטריה בסיסית במשולש ישר הזווית השמאלי שנוצר מהורדת הגובה.", "math_expression": "h = 6 \\times \\sin(60^{\\circ})" },
            { "verbal_explanation": "נציב את הערך העשרוני של סינוס שישים כדי להגיע לערך מקורב של הגובה.", "math_expression": "h = 6 \\times 0.866 = 5.196" },
            { "verbal_explanation": "נחשב את היטל השוק השמאלית על הבסיס התחתון באמצעות שימוש בקוסינוס רגיל.", "math_expression": "x = 6 \\times \\cos(60^{\\circ}) = 6 \\times 0.5 = 3" },
            { "verbal_explanation": "נחשב את אורך ההיטל הימני שנותר מהבסיס התחתון לאחר שהורדנו את ההיטל השמאלי ואת חלק המלבן המרכזי.", "math_expression": "y = 11 - 3 - 5" },
            { "verbal_explanation": "נבצע את פעולת החיסור לקבלת הבסיס למשולש הימני.", "math_expression": "y = 3" },
            { "verbal_explanation": "כעת נשתמש במשפט פיתגורס המוכר במשולש הימני למציאת אורך השוק הנדרשת.", "math_expression": "c^{2} = y^{2} + h^{2}" },
            { "verbal_explanation": "נציב את הערכים המדויקים למשוואת המשפט המורחבת שיצרנו כרגע.", "math_expression": "c^{2} = 3^{2} + 5.196^{2}" },
            { "verbal_explanation": "נחשב ריבועים (החלק העשרוני הוא בעצם שורש 27 בריבוע).", "math_expression": "c^{2} = 9 + 27 = 36" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את האורך המבוקש של הצלע שהייתה חסרה להשלמת הניתוח.", "math_expression": "c = 6" }
        ],
        "final_answer": "6"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "בדלתון, אורכי צלעות המשולש העליון (הקצרות) הן 10, ואורכי צלעות התחתון (הארוכות) הן 17. הזווית הכלואה בין שתי הצלעות הקצרות היא בת 60 מעלות. מצאו את אורך האלכסון הראשי של הדלתון.&rlm;",
        "options": ["24.91", "20", "26.5", "22.3"],
        "correctAnswer": 0,
        "hint": "המשולש העליון הוא שווה צלעות. מצאו את האלכסון המשני (הקצר). האלכסון הראשי מאונך לו וחוצה אותו. השתמשו בפיתגורס למציאת שני חלקי האלכסון הראשי.",
        "solution_steps": [
            { "verbal_explanation": "נזהה שהמשולש העליון, בעל שתי צלעות של עשר וזווית של שישים, הוא בהכרח משולש שווה צלעות. לכן אורך האלכסון המשני של המרובע הוא 10.", "math_expression": "d_1 = 10" },
            { "verbal_explanation": "בדלתון, האלכסון הראשי חוצה את האלכסון המשני ומאונך לו. לכן נוצרים ארבעה משולשים ישרי זווית קטנים לחקירה.", "math_expression": "x = \\dfrac{d_1}{2} = 5" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס במשולש העליון למציאת החלק הראשון של האלכסון הראשי המבוקש.", "math_expression": "h_1^{2} = 10^{2} - 5^{2} = 100 - 25 = 75" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את הערך המקורב של גובה זה.", "math_expression": "h_1 \\approx 8.66" },
            { "verbal_explanation": "נפעיל שוב את משפט פיתגורס, הפעם על המשולש התחתון כדי לאתר את החלק המשלים של האלכסון המרכזי.", "math_expression": "h_2^{2} = 17^{2} - 5^{2} = 289 - 25 = 264" },
            { "verbal_explanation": "נוציא שורש לקבלת החלק הארוך יותר של האלכסון החוצה את הצורה.", "math_expression": "h_2 \\approx 16.25" },
            { "verbal_explanation": "נסיים על ידי סכימת שני החלקים ליצירת האורך המלא והכולל של האלכסון הראשי.", "math_expression": "D = h_1 + h_2 = 8.66 + 16.25 = 24.91" }
        ],
        "final_answer": "24.91"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "במשולש כללי נתונים אורכי שלוש הצלעות: \\( a = 13 \\), \\( b = 14 \\), ו-\\( c = 15 \\). מצאו את אורך הגובה היורד לצלע \\( c \\) בעזרת טריגונומטריה ושימוש במשפטים המקובלים.&rlm;",
        "options": ["11.2", "12", "10.5", "11.8"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט הקוסינוסים כדי למצוא זווית מסוימת. עברו בעזרתה לסינוס, חשבו שטח, והשתמשו בו למציאת הגובה הנעלם ללא קושי מיוחד.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט הקוסינוסים במטרה למצוא את הזווית הממוקמת מול הצלע הקצרה ביותר.", "math_expression": "a^{2} = b^{2} + c^{2} - 2 \\times b \\times c \\times \\cos A" },
            { "verbal_explanation": "נציב את אורכי הצלעות כולם לתוך התבנית המתמטית המשמשת אותנו ככלי עבודה יעיל.", "math_expression": "13^{2} = 14^{2} + 15^{2} - 2 \\times 14 \\times 15 \\times \\cos A" },
            { "verbal_explanation": "נחשב את ריבועי המספרים ואת המכפלות הגדולות לקראת פישוט המשוואה הכללית.", "math_expression": "169 = 196 + 225 - 420 \\times \\cos A" },
            { "verbal_explanation": "נכנס איברים חופשיים ונבודד את הפונקציה הלא ידועה שלנו.", "math_expression": "169 = 421 - 420 \\times \\cos A" },
            { "verbal_explanation": "נחסר את המספרים ונקבל משוואה שאפשר להמיר לחיובית בקלות.", "math_expression": "-252 = -420 \\times \\cos A \\Rightarrow \\cos A = 0.6" },
            { "verbal_explanation": "כעת, ניעזר בזהות פיתגורס לחילוץ ערכה של פונקציית סינוס המקבילה.", "math_expression": "\\sin^{2}A + \\cos^{2}A = 1 \\Rightarrow \\sin A = 0.8" },
            { "verbal_explanation": "נשתמש בסינוס המדויק לחישוב השטח הכולל של המשולש במסגרת הנוסחה הטריגונומטרית הכללית.", "math_expression": "S = \\dfrac{b \\times c \\times \\sin A}{2} = \\dfrac{14 \\times 15 \\times 0.8}{2} = 84" },
            { "verbal_explanation": "נשווה את השטח שמצאנו לנוסחת שטח פשוטה המבוססת על הצלע הנדונה מראש והגובה אליה על מנת לאתרו.", "math_expression": "S = \\dfrac{c \\times h}{2} \\Rightarrow 84 = \\dfrac{15 \\times h}{2}" },
            { "verbal_explanation": "נכפול את שני האגפים ונקבל משוואה קלה לסיום.", "math_expression": "168 = 15 \\times h" },
            { "verbal_explanation": "נבצע את החלוקה הנדרשת לשם חילוץ סופי של הגובה המדויק.", "math_expression": "h = 11.2" }
        ],
        "final_answer": "11.2"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "במעגל שרדיוסו 10 חסום משולש. ממרכז המעגל מורידים אנך לאחת הצלעות, והאנך מחלק את המיתר לשני חצאים שאורך כל אחד מהם הוא 6 (כלומר אורך הצלע השלמה הוא 12). המשיקים למעגל בשני קצות המיתר הזה נפגשים בנקודה \\( P \\) מחוץ למעגל. מהו המרחק מאותה נקודת מפגש ועד לאחד מקצוות המיתר (אורך המשיק החיצוני)?&rlm;",
        "options": ["7.5", "8", "6", "10"],
        "correctAnswer": 0,
        "hint": "חברו את מרכז המעגל לקצוות המיתר ולנקודה החיצונית. נוצרים משולשים ישרי זווית שניתן לחשב בהם גדלים בעזרת פונקציות טריגונומטריות.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את הניצב המייצג חצי מיתר, שהוא אחד מניצבי המשולש הקטן בתוך המעגל.", "math_expression": "x = 6" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס לאתר את המרחק ממרכז המעגל אל המיתר עצמו.", "math_expression": "y^{2} = R^{2} - x^{2} = 10^{2} - 6^{2}" },
            { "verbal_explanation": "נחשב את ריבוע המרחק.", "math_expression": "y^{2} = 100 - 36 = 64" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את האורך הפנימי.", "math_expression": "y = 8" },
            { "verbal_explanation": "נחשב פונקציות טריגונומטריות בסיסיות לזווית המרכזית הקטנה. נתחיל בסינוס.", "math_expression": "\\sin A = \\dfrac{x}{R} = \\dfrac{6}{10} = 0.6" },
            { "verbal_explanation": "נחשב את הקוסינוס של אותה זווית ממרכז המעגל.", "math_expression": "\\cos A = \\dfrac{y}{R} = \\dfrac{8}{10} = 0.8" },
            { "verbal_explanation": "נשתמש בזהות כדי למצוא את פונקציית הטנגנס של הזווית המרכזית החשובה לפתרון.", "math_expression": "\\tan A = \\dfrac{\\sin A}{\\cos A} = \\dfrac{0.6}{0.8} = 0.75" },
            { "verbal_explanation": "במשולש הגדול והחיצוני שנוצר על ידי המשיק והמרחק המלא מהמרכז, קיימת אותה זווית בדיוק עקב זוויות מתחלפות ומתאימות במעגלים. לכן נשתמש בטנגנס למציאת המשיק המסומן בנעלם.", "math_expression": "\\tan A = \\dfrac{P}{R} \\Rightarrow 0.75 = \\dfrac{P}{10}" },
            { "verbal_explanation": "נבצע את המכפלה האחרונה בהחלט כדי לקבל מספר עשרוני המייצג אורך משיק.", "math_expression": "P = 7.5" }
        ],
        "final_answer": "7.5"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "במקבילית כלשהי, אורכי שתי הצלעות הסמוכות הם 10 ו-6 בהתאמה. אורך האלכסון הארוך המפריד בין שתי הצלעות הללו הוא 14 יחידות אורך. חשבו את שטחה המלא של המקבילית הנתונה בבעיה זו.&rlm;",
        "options": ["51.96", "60", "30", "103.92"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט הקוסינוסים כדי לחלץ את הזווית הקהה שמופיעה בתוך המקבילית, ולאחר מכן השתמשו בנוסחת שטח מקבילית טריגונומטרית לחישוב סופי ואמין.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט הקוסינוסים המיועד למציאת זווית משולש פנימי המהווה מחצית מקבילית.", "math_expression": "d^{2} = a^{2} + b^{2} - 2 \\times a \\times b \\times \\cos A" },
            { "verbal_explanation": "נציב את הנתונים המפורשים הידועים לנו הכוללים את צלעות המבנה ואת האלכסון הארוך המחבר את הזוויות החדות.", "math_expression": "14^{2} = 10^{2} + 6^{2} - 2 \\times 10 \\times 6 \\times \\cos A" },
            { "verbal_explanation": "נחשב את ריבועי הצלעות ואת המכפלה הנדרשת לשם הפשטת המשוואה.", "math_expression": "196 = 100 + 36 - 120 \\times \\cos A" },
            { "verbal_explanation": "נכנס איברים המהווים מספרים חופשיים באגף אחד של המשוואה.", "math_expression": "196 = 136 - 120 \\times \\cos A" },
            { "verbal_explanation": "נחסר את המספרים ונקבל משוואה פשוטה בה הנעלם הוא הפונקציה היחידה.", "math_expression": "60 = -120 \\times \\cos A" },
            { "verbal_explanation": "נחלק במקדם הפונקציה השלילי כדי לבודד אותה לחלוטין לקראת מציאת הזווית הקהה.", "math_expression": "\\cos A = -0.5" },
            { "verbal_explanation": "נשתמש במחשבון לחילוץ הזווית הקהה האופיינית לפונקציית קוסינוס שלילית השווה למחצית.", "math_expression": "A = 120^{\\circ}" },
            { "verbal_explanation": "כעת, נרשום את נוסחת שטח המקבילית הכללית המשתמשת בזווית שנמצאה ובשתי הצלעות הסמוכות.", "math_expression": "S = a \\times b \\times \\sin A = 10 \\times 6 \\times \\sin(120^{\\circ})" },
            { "verbal_explanation": "נציב את הערך העשרוני של סינוס הזווית הקהה ונבצע את פעולת הכפל.", "math_expression": "S = 60 \\times 0.866" },
            { "verbal_explanation": "נחשב את התוצאה הסופית והמקורבת לשטח הצורה المדוברת.", "math_expression": "51.96" }
        ],
        "final_answer": "51.96"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "במשולש נתונות זוויות של 45 מעלות ו-60 מעלות. המשולש חסום במעגל שרדיוסו קבוע ושווה ל-8 יחידות. מצאו את שטחו של המשולש בקירוב עשרוני התואם לאפשרויות השונות המוצגות בפניכם למטה.&rlm;",
        "options": ["75.7", "150", "64", "88.3"],
        "correctAnswer": 0,
        "hint": "חשבו קודם את הזווית השלישית והמשלימה במשולש. לאחר מכן, השתמשו במשפט הסינוסים المורחב כדי למצוא את שתי הצלעות, ובסוף הציבו הכל בנוסחת שטח.",
        "solution_steps": [
            { "verbal_explanation": "נחשב תחילה את הזווית השלישית במשולש על סמך הידיעה שסכומן משלים ל-180.", "math_expression": "C = 180^{\\circ} - 45^{\\circ} - 60^{\\circ} = 75^{\\circ}" },
            { "verbal_explanation": "נשתמש במשפט המורחב לחילוץ אורך צלע אחת במשולש, בהסתמך על הרדיוס הנקוב.", "math_expression": "a = 2R \\times \\sin A = 16 \\times \\sin(45^{\\circ})" },
            { "verbal_explanation": "נחשב את המכפלה ליצירת אורך מדויק מקורב.", "math_expression": "a = 16 \\times 0.707 = 11.31" },
            { "verbal_explanation": "נשתמש שוב באותו המשפט עבור הצלע השנייה במשולש.", "math_expression": "b = 2R \\times \\sin B = 16 \\times \\sin(60^{\\circ})" },
            { "verbal_explanation": "נחשב את ערכה המספרי העשרוני גם כן להשלמת מערך הנתונים הנדרש לנו.", "math_expression": "b = 16 \\times 0.866 = 13.86" },
            { "verbal_explanation": "נרשום את הנוסחה השלמה הטריגונומטרית לחישוב השטח המבוקש.", "math_expression": "S = \\dfrac{a \\times b \\times \\sin C}{2}" },
            { "verbal_explanation": "נציב את כל הערכים שחישבנו לתוך התבנית הנוכחית.", "math_expression": "S = \\dfrac{11.31 \\times 13.86 \\times \\sin(75^{\\circ})}{2}" },
            { "verbal_explanation": "נציב את ערך הסינוס לזווית שחושבה.", "math_expression": "\\sin(75^{\\circ}) \\approx 0.966" },
            { "verbal_explanation": "נציב ונסדר לקראת שורת סיום המראה על יכולת ביצועית גבוהה.", "math_expression": "S = \\dfrac{156.75 \\times 0.966}{2}" },
            { "verbal_explanation": "מבצעים חלוקה סופית المציגה לנו תוצאה עשרונית יפה וברורה.", "math_expression": "S \\approx 75.7" }
        ],
        "final_answer": "75.7"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"200\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"20,130 180,130 20,20\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"20\" x2=\"100\" y2=\"130\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>במשולש ישר זווית נתון שאורך היתר הוא 20. הזווית החדה אחת בו היא בת 30 מעלות. מעבירים חוצה זווית לזווית האחרת (הגדולה יותר מבין השתיים שאינן ישרות) אשר חותך את הניצב המונח ממולו בנקודה הנקראת \\( D \\). מצאו את אורך החלק מהניצב הנמתח מהזווית הישרה אל הנקודה שבה פוגש אותו חוצה הזווית.&rlm;",
        "options": ["5.77", "11.55", "10", "8.66"],
        "correctAnswer": 0,
        "hint": "מצאו תחילה את כל צלעות המשולש וזוויותיו. לאחר העברת חוצה הזווית, נוצר משולש ישר זווית קטן שניתן לחשב בו ניצב בעזרת פונקציית טנגנס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הזווית החסרה במשולש הגדול שהיא זווית חדה המשלימה לתשעים מעלות.", "math_expression": "B = 180^{\\circ} - 90^{\\circ} - 30^{\\circ} = 60^{\\circ}" },
            { "verbal_explanation": "נחשב את הניצב הראשון שניצב מול הזווית הידועה בעזרת סינוס בסיסי במשולש ישר זווית פשוט.", "math_expression": "a = c \\times \\sin A = 20 \\times \\sin(30^{\\circ})" },
            { "verbal_explanation": "נשלים את חישובו למספר קבוע.", "math_expression": "a = 20 \\times 0.5 = 10" },
            { "verbal_explanation": "נחשב את הניצב השני המונח ליד הזווית שחישבנו קודם לכן בעזרת קוסינוס.", "math_expression": "b = c \\times \\cos A = 20 \\times \\cos(30^{\\circ})" },
            { "verbal_explanation": "נחשב לקבלת הערך המקורב אך המדויק מספיק לצרכינו.", "math_expression": "b = 20 \\times 0.866 = 17.32" },
            { "verbal_explanation": "חוצה הזווית שהעברנו מחלק את הזווית הגדולה לשני חצאים שווים. נחשב את ערך החצי שמשמש כזווית במשולש הקטן החדש שיצרנו למטה.", "math_expression": "B_1 = \\dfrac{60^{\\circ}}{2} = 30^{\\circ}" },
            { "verbal_explanation": "נשתמש במשולש הקטן המכיל את הניצב הראשון (שאורכו 10) והזווית החצויה כדי למצוא את החלק המבוקש בעזרת טנגנס.", "math_expression": "\\tan(30^{\\circ}) = \\dfrac{x}{a} \\Rightarrow x = a \\times \\tan(30^{\\circ})" },
            { "verbal_explanation": "נציב את המספרים ונקבל את התשובה שמבקשת להציג את החלק היחסי המבוקש.", "math_expression": "x = 10 \\times 0.577 = 5.77" }
        ],
        "final_answer": "5.77"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "במשולש כלשהו נתונים אלו קיימים: אורך צלע \\( AB \\) הוא 8, ואורך הצלע \\( AC \\) הוא 12. בנוסף, מעבירים תיכון מהקודקוד \\( A \\) לצלע השלישית \\( BC \\). אורך התיכון הנתון הזה הוא 7 בלבד. מצאו את אורכה המלא של הצלע השלישית החסרה להשלמת המשולש הכללי שלפנינו.&rlm;",
        "options": ["14.84", "10", "12.5", "16"],
        "correctAnswer": 0,
        "hint": "היעזרו במשפט התיכון (הנובע ממשפט הקוסינוסים פעמיים) שאומר כי סכום ריבועי שתי צלעות שווה לפעמיים ריבוע התיכון פלוס פעמיים ריבוע מחצית הצלע השלישית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משפט התיכון המוכר לנו המקשר בין הצלעות לתיכון המשותף היורד לאחת מהן וחולק אותה לשניים.", "math_expression": "c^{2} + b^{2} = 2 \\times m^{2} + 2 \\times x^{2}" },
            { "verbal_explanation": "נציב את המספרים המייצגים אורכי צלעות אלו כפי שמצוין בתחילה.", "math_expression": "8^{2} + 12^{2} = 2 \\times 7^{2} + 2 \\times x^{2}" },
            { "verbal_explanation": "נחשב את הריבועים של כולם לקראת פישוט צדדי המשוואה.", "math_expression": "64 + 144 = 2 \\times 49 + 2x^{2}" },
            { "verbal_explanation": "נסכם את האגף השמאלי ואת המספר הנותר באגף הימני המחובר למשתנה שלנו.", "math_expression": "208 = 98 + 2x^{2}" },
            { "verbal_explanation": "נחסר כדי לבודד את החזקה עם המקדם.", "math_expression": "110 = 2x^{2}" },
            { "verbal_explanation": "נחלק בשתיים להסרת המקדם ונוציא שורש כדי למצוא את אורך מחצית הצלע.", "math_expression": "x^{2} = 55 \\Rightarrow x \\approx 7.42" },
            { "verbal_explanation": "נסיים על ידי הכפלת המחצית שמצאנו בשתיים לקבלת אורך הצלע המלא المבוקש בשאלה הנדונה שזה עתה הגענו אליה בשעה טובה ומוצלחת.", "math_expression": "a = 2 \\times x = 2 \\times 7.42 = 14.84" }
        ],
        "final_answer": "14.84"
    },
    {
        "topic": "trigo_plane_472",
        "subTopic": "פתרון משולשים ומצולעים מורכבים במרחב המישור",
        "question_text": "במשולש ישר זווית אורך היתר הוא 10. הזווית הניצבת מול אחד הניצבים היא בת 30 מעלות. מעבירים גובה ליתר. חשבו את אורך הגובה שנוצר.&rlm;",
        "options": ["4.33", "5", "8.66", "2.5"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את הניצבים. שטח המשולש שווה למחצית מכפלת הניצבים, וגם למחצית מכפלת היתר בגובה. השוו שטחים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את הניצב הנמצא מול הזווית של 30 מעלות בעזרת פונקציית סינוס.", "math_expression": "a = 10 \\times \\sin(30^{\\circ}) = 10 \\times 0.5 = 5" },
            { "verbal_explanation": "נחשב את הניצב השני הנמצא מול הזווית המשלימה (60 מעלות) בעזרת קוסינוס או סינוס הזווית השנייה.", "math_expression": "b = 10 \\times \\cos(30^{\\circ}) = 10 \\times 0.866 = 8.66" },
            { "verbal_explanation": "נחשב את שטח המשולש המלא באמצעות מכפלת הניצבים שלו חלוקה לשתיים.", "math_expression": "S = \\dfrac{5 \\times 8.66}{2} = 21.65" },
            { "verbal_explanation": "נבטא את השטח שוב, אך הפעם תוך שימוש ביתר ובגובה היורד אליו כמשתנה שאנו מחפשים.", "math_expression": "S = \\dfrac{10 \\times h}{2}" },
            { "verbal_explanation": "נשווה את הביטוי החדש לערך השטח שחישבנו קודם לכן.", "math_expression": "\\dfrac{10 \\times h}{2} = 21.65" },
            { "verbal_explanation": "נפשט את המשוואה על ידי חלוקת המקדם.", "math_expression": "5 \\times h = 21.65" },
            { "verbal_explanation": "נחלק בחמש להשגת ערכו הסופי של הגובה המבוקש ליתר.", "math_expression": "h = 4.33" }
        ],
        "final_answer": "4.33"
    }
];