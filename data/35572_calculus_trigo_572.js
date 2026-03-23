const questionsDB = [
    // ==========================================
    // תת נושא 1: חקירת פונקציות מחזוריות (סינוס, קוסינוס) (10 שאלות)
    // ==========================================
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"80\" x2=\"180\" y2=\"80\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 80 Q 70 30 100 80 T 160 80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>נתונה הפונקציה \\( f(x) = \\sin^{2}(x) + \\cos(x) \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\).<br>א. מצאו את נקודות הקיצון של הפונקציה.<br>ב. קבעו אילו מהן נקודות מקסימום ואילו מינימום.&rlm;",
        "options": ["א. (π/3, 1.25), (5π/3, 1.25) מקס', (π, -1) מינ'", "א. (π/2, 1), (3π/2, 1) מקס', (π, -1) מינ'", "א. (π/3, 1.25) מקס', (π, 0) מינ'", "א. (π/4, 1.5) מקס', (π, -1) מינ'"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה תוך שימוש בכלל השרשרת. הוציאו גורם משותף של סינוס להקלת פתרון המשוואה הטריגונומטרית.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = 2\\sin(x)\\cos(x) - \\sin(x)" },
            { "verbal_explanation": "נשווה לאפס ונוציא גורם משותף.", "math_expression": "\\sin(x)(2\\cos(x) - 1) = 0" },
            { "verbal_explanation": "נפתור את החלק הראשון.", "math_expression": "\\sin(x) = 0" },
            { "verbal_explanation": "נמצא את הפתרונות בתחום.", "math_expression": "x_1 = 0 \\quad , \\quad x_2 = \\pi \\quad , \\quad x_3 = 2\\pi" },
            { "verbal_explanation": "נפתור את החלק השני.", "math_expression": "2\\cos(x) - 1 = 0 \\Rightarrow \\cos(x) = 0.5" },
            { "verbal_explanation": "נמצא את הפתרונות בתחום.", "math_expression": "x_4 = \\dfrac{\\pi}{3} \\quad , \\quad x_5 = \\dfrac{5\\pi}{3}" },
            { "verbal_explanation": "נציב בפונקציה למציאת שיעור האנך.", "math_expression": "f(\\dfrac{\\pi}{3}) = (\\dfrac{\\sqrt{3}}{2})^{2} + 0.5 = 1.25" },
            { "verbal_explanation": "נציב את ערך המינימום בפונקציה.", "math_expression": "f(\\pi) = 0^{2} - 1 = -1" }
        ],
        "final_answer": "א. (π/3, 1.25), (5π/3, 1.25) מקס', (π, -1) מינ'"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "נתונה הפונקציה \\( f(x) = x + \\sin(x) \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\).<br>א. מצאו את נקודות החיתוך עם ציר ה-\\( x \\).<br>ב. מצאו את נקודת הפיתול של הפונקציה בתחום זה.&rlm;",
        "options": ["א. (0,0) ב. (π, π)", "א. (0,0) ב. (π/2, π/2)", "א. (π, 0) ב. (π, π)", "א. (0,0) ב. אין פיתול"],
        "correctAnswer": 0,
        "hint": "לחיתוך עם הציר, שימו לב שהפונקציה עולה תמיד. לפיתול גזרו פעמיים והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נשווה לאפס למציאת חיתוך צירים.", "math_expression": "x + \\sin(x) = 0" },
            { "verbal_explanation": "הפתרון היחיד האפשרי.", "math_expression": "x = 0" },
            { "verbal_explanation": "נגזור פעם ראשונה.", "math_expression": "f'(x) = 1 + \\cos(x)" },
            { "verbal_explanation": "נגזור פעם שנייה.", "math_expression": "f''(x) = -\\sin(x)" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "-\\sin(x) = 0" },
            { "verbal_explanation": "נמצא את הפתרון הפנימי בתחום.", "math_expression": "x = \\pi" },
            { "verbal_explanation": "נציב את שיעור האופק בפונקציה.", "math_expression": "f(\\pi) = \\pi + \\sin(\\pi) = \\pi" }
        ],
        "final_answer": "א. (0,0) ב. (π, π)"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "נתונה הפונקציה \\( f(x) = x - 2\\sin(x) \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\).<br>מצאו את תחומי העלייה והירידה של הפונקציה.&rlm;",
        "options": ["עלייה: π/3<x<5π/3, ירידה: 0<x<π/3 או 5π/3<x<2π", "עלייה: 0<x<π/3, ירידה: π/3<x<5π/3", "עלייה: π/2<x<3π/2, ירידה בשאר", "עלייה: 0<x<2π, אין ירידה"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה, מצאו נקודות איפוס, ובדקו את סימן הנגזרת בכל תת-תחום.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = 1 - 2\\cos(x)" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "1 - 2\\cos(x) = 0" },
            { "verbal_explanation": "נבודד את הפונקציה.", "math_expression": "\\cos(x) = 0.5" },
            { "verbal_explanation": "נמצא את הפתרונות בתחום.", "math_expression": "x = \\dfrac{\\pi}{3} \\quad , \\quad x = \\dfrac{5\\pi}{3}" },
            { "verbal_explanation": "נבדוק סימן נגזרת בתחום הפנימי.", "math_expression": "f'(\\pi) = 1 - 2(-1) = 3" },
            { "verbal_explanation": "נסיק לגבי המגמה הפנימית.", "math_expression": "\\dfrac{\\pi}{3} < x < \\dfrac{5\\pi}{3}" },
            { "verbal_explanation": "נבדוק סימן נגזרת בתחומים החיצוניים.", "math_expression": "f'(0) = -1 \\quad , \\quad f'(2\\pi) = -1" },
            { "verbal_explanation": "נסיק לגבי המגמה החיצונית.", "math_expression": "0 < x < \\dfrac{\\pi}{3} \\quad , \\quad \\dfrac{5\\pi}{3} < x < 2\\pi" }
        ],
        "final_answer": "עלייה: π/3<x<5π/3, ירידה: 0<x<π/3 או 5π/3<x<2π"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "נתונה הפונקציה \\( f(x) = a\\sin(x) + \\cos(2x) \\). לפונקציה יש נקודת קיצון ב-\\( x = \\dfrac{\\pi}{6} \\).<br>א. מצאו את ערך הפרמטר \\( a \\).<br>ב. מצאו את הערך של הפונקציה בנקודה זו.&rlm;",
        "options": ["א. a=2 ב. 1.5", "א. a=1 ב. 1", "א. a=4 ב. 2", "א. a=2 ב. 2.5"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה, הציבו את הערך הנתון בנגזרת, השוו לאפס וחלצו את a.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = a\\cos(x) - 2\\sin(2x)" },
            { "verbal_explanation": "נציב את הערך הנתון בנגזרת המאופסת.", "math_expression": "a\\cos(\\dfrac{\\pi}{6}) - 2\\sin(\\dfrac{\\pi}{3}) = 0" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "a(\\dfrac{\\sqrt{3}}{2}) - 2(\\dfrac{\\sqrt{3}}{2}) = 0" },
            { "verbal_explanation": "נפתור עבור הפרמטר.", "math_expression": "a\\sqrt{3} = 2\\sqrt{3} \\Rightarrow a = 2" },
            { "verbal_explanation": "נרשום את הפונקציה המלאה.", "math_expression": "f(x) = 2\\sin(x) + \\cos(2x)" },
            { "verbal_explanation": "נציב את הערך בפונקציה המקורית.", "math_expression": "f(\\dfrac{\\pi}{6}) = 2(0.5) + \\cos(\\dfrac{\\pi}{3})" },
            { "verbal_explanation": "נחשב את הערך.", "math_expression": "f(\\dfrac{\\pi}{6}) = 1 + 0.5 = 1.5" }
        ],
        "final_answer": "א. a=2 ב. 1.5"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "נתונה הפונקציה \\( f(x) = \\sin(x)\\cos(x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\).<br>א. מצאו את נקודות הקיצון המקומיות של הפונקציה.<br>ב. קבעו את סוגן.&rlm;",
        "options": ["א. (π/4, 0.5) מקס', (3π/4, -0.5) מינ'", "א. (π/2, 1) מקס', (π, -1) מינ'", "א. (π/4, 1) מקס', (3π/4, -1) מינ'", "א. (π/3, 0.43) מקס', (2π/3, -0.43) מינ'"],
        "correctAnswer": 0,
        "hint": "השתמשו בזהות לזווית כפולה להמרת הפונקציה לביטוי עם סינוס של זווית כפולה.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בזהות טריגונומטרית.", "math_expression": "f(x) = 0.5\\sin(2x)" },
            { "verbal_explanation": "נגזור.", "math_expression": "f'(x) = 0.5 \\times 2\\cos(2x) = \\cos(2x)" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "\\cos(2x) = 0" },
            { "verbal_explanation": "נמצא את הפתרונות לזווית הכפולה.", "math_expression": "2x = \\dfrac{\\pi}{2} \\quad , \\quad 2x = \\dfrac{3\\pi}{2}" },
            { "verbal_explanation": "נחלץ את הפתרונות למשתנה.", "math_expression": "x = \\dfrac{\\pi}{4} \\quad , \\quad x = \\dfrac{3\\pi}{4}" },
            { "verbal_explanation": "נציב את הערך הראשון.", "math_expression": "f(\\dfrac{\\pi}{4}) = 0.5\\sin(\\dfrac{\\pi}{2}) = 0.5" },
            { "verbal_explanation": "נציב את הערך השני.", "math_expression": "f(\\dfrac{3\\pi}{4}) = 0.5\\sin(\\dfrac{3\\pi}{2}) = -0.5" }
        ],
        "final_answer": "א. (π/4, 0.5) מקס', (3π/4, -0.5) מינ'"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"110\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 40 Q 80 100 120 100 T 180 40\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"60\" y1=\"100\" x2=\"100\" y2=\"20\" stroke=\"#f87171\" stroke-width=\"1.5\"/></svg></div><br>מצאו את משוואת המשיק לגרף הפונקציה \\( f(x) = \\cos^{2}(x) \\) בנקודה שבה \\( x = \\dfrac{\\pi}{4} \\).&rlm;",
        "options": ["y = -x + π/4 + 0.5", "y = -2x + π/2 + 1", "y = x - π/4 + 0.5", "y = -x + 1"],
        "correctAnswer": 0,
        "hint": "חשבו את ערך הפונקציה. גזרו בעזרת כלל השרשרת, הציבו את x למציאת השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הערך הנתון בפונקציה.", "math_expression": "f(\\dfrac{\\pi}{4}) = (\\dfrac{\\sqrt{2}}{2})^{2} = 0.5" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = -2\\cos(x)\\sin(x)" },
            { "verbal_explanation": "נשתמש בזהות זווית כפולה.", "math_expression": "f'(x) = -\\sin(2x)" },
            { "verbal_explanation": "נציב בנגזרת.", "math_expression": "m = -\\sin(2 \\times \\dfrac{\\pi}{4}) = -\\sin(\\dfrac{\\pi}{2})" },
            { "verbal_explanation": "נחשב את השיפוע.", "math_expression": "m = -1" },
            { "verbal_explanation": "נרכיב משוואת ישר.", "math_expression": "y - 0.5 = -1(x - \\dfrac{\\pi}{4})" },
            { "verbal_explanation": "נפשט למשוואה מפורשת.", "math_expression": "y = -x + \\dfrac{\\pi}{4} + 0.5" }
        ],
        "final_answer": "y = -x + π/4 + 0.5"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "נתונה הפונקציה \\( f(x) = a\\sin(x) + b\\cos(x) \\). הפונקציה עוברת בנקודה \\( (0, 2) \\) ויש לה נקודת קיצון שבה \\( x = \\dfrac{\\pi}{4} \\).<br>א. מצאו את \\( a \\) ואת \\( b \\).<br>ב. מהו הערך בנקודת הקיצון?&rlm;",
        "options": ["א. a=2, b=2 ב. 2.82", "א. a=1, b=2 ב. 2.23", "א. a=2, b=1 ב. 2.23", "א. a=2, b=2 ב. 4"],
        "correctAnswer": 0,
        "hint": "הציבו את הנקודה הנתונה למציאת b. גזרו את הפונקציה למציאת a.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הנקודה.", "math_expression": "f(0) = a(0) + b(1) = 2 \\Rightarrow b = 2" },
            { "verbal_explanation": "נגזור.", "math_expression": "f'(x) = a\\cos(x) - 2\\sin(x)" },
            { "verbal_explanation": "נציב את נקודת הקיצון.", "math_expression": "a\\cos(\\dfrac{\\pi}{4}) - 2\\sin(\\dfrac{\\pi}{4}) = 0" },
            { "verbal_explanation": "נציב את הערכים.", "math_expression": "a(\\dfrac{\\sqrt{2}}{2}) - 2(\\dfrac{\\sqrt{2}}{2}) = 0" },
            { "verbal_explanation": "נפתור עבור הפרמטר.", "math_expression": "a - 2 = 0 \\Rightarrow a = 2" },
            { "verbal_explanation": "נציב את הערך למציאת הגובה.", "math_expression": "f(\\dfrac{\\pi}{4}) = 2(\\dfrac{\\sqrt{2}}{2}) + 2(\\dfrac{\\sqrt{2}}{2})" },
            { "verbal_explanation": "נחשב סכום מקורב.", "math_expression": "f(\\dfrac{\\pi}{4}) = 2\\sqrt{2} \\approx 2.828" }
        ],
        "final_answer": "א. a=2, b=2 ב. 2.82"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "נתונה הפונקציה \\( f(x) = \\sin(x) - \\cos(x) \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\).<br>א. מצאו את נקודות החיתוך עם ציר ה-\\( x \\).<br>ב. מצאו את נקודות הקיצון וסווגו אותן.&rlm;",
        "options": ["א. (π/4, 0), (5π/4, 0) ב. (3π/4, 1.41) מקס', (7π/4, -1.41) מינ'", "א. (π/2, 0), (3π/2, 0) ב. (π, 1) מקס', (2π, -1) מינ'", "א. (π/4, 0), (3π/4, 0) ב. (5π/4, 1.41) מקס', (7π/4, -1.41) מינ'", "א. (0, 0), (π, 0) ב. (π/2, 1) מקס', (3π/2, -1) מינ'"],
        "correctAnswer": 0,
        "hint": "לחיתוך, השוו לאפס ופתרו על ידי מעבר לפונקציית טנגנס.",
        "solution_steps": [
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "\\sin(x) - \\cos(x) = 0" },
            { "verbal_explanation": "נמיר לטנגנס.", "math_expression": "\\tan(x) = 1" },
            { "verbal_explanation": "נמצא את החיתוכים.", "math_expression": "x = \\dfrac{\\pi}{4} \\quad , \\quad x = \\dfrac{5\\pi}{4}" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = \\cos(x) + \\sin(x)" },
            { "verbal_explanation": "נשווה לאפס את הנגזרת.", "math_expression": "\\tan(x) = -1" },
            { "verbal_explanation": "נמצא את פתרונות הנגזרת.", "math_expression": "x = \\dfrac{3\\pi}{4} \\quad , \\quad x = \\dfrac{7\\pi}{4}" },
            { "verbal_explanation": "נציב בפונקציה למציאת הערכים והסיווג.", "math_expression": "f(\\dfrac{3\\pi}{4}) = \\dfrac{\\sqrt{2}}{2} - (-\\dfrac{\\sqrt{2}}{2}) = \\sqrt{2} \\approx 1.41" },
            { "verbal_explanation": "נציב את הפתרון השני.", "math_expression": "f(\\dfrac{7\\pi}{4}) = -\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{2}}{2} = -\\sqrt{2} \\approx -1.41" }
        ],
        "final_answer": "א. (π/4, 0), (5π/4, 0) ב. (3π/4, 1.41) מקס', (7π/4, -1.41) מינ'"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "קבעו האם הפונקציה \\( f(x) = \\sin(x) \\cdot \\cos(2x) \\) היא זוגית, אי-זוגית, או כללית.&rlm;",
        "options": ["אי-זוגית", "זוגית", "כללית", "מחזורית אך לא זוגית ולא אי-זוגית"],
        "correctAnswer": 0,
        "hint": "הציבו מינוס x בפונקציה.",
        "solution_steps": [
            { "verbal_explanation": "נציב משתנה שלילי.", "math_expression": "f(-x) = \\sin(-x) \\cdot \\cos(-2x)" },
            { "verbal_explanation": "נשתמש בתכונת פונקציית סינוס.", "math_expression": "\\sin(-x) = -\\sin(x)" },
            { "verbal_explanation": "נשתמש בתכונת פונקציית קוסינוס.", "math_expression": "\\cos(-2x) = \\cos(2x)" },
            { "verbal_explanation": "נרכיב מחדש את הפונקציה.", "math_expression": "f(-x) = -\\sin(x) \\cdot \\cos(2x)" },
            { "verbal_explanation": "נזהה את הקשר.", "math_expression": "f(-x) = -f(x)" },
            { "verbal_explanation": "נסיק את מסקנת הזוגיות.", "math_expression": "\\text{Odd Function}" }
        ],
        "final_answer": "אי-זוגית"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "חקירת פונקציות מחזוריות (סינוס, קוסינוס)",
        "question_text": "נתונה הפונקציה \\( f(x) = x - \\cos(2x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\).<br>מצאו את משוואת המשיק לגרף הפונקציה בנקודה שבה הנגזרת השנייה מתאפסת בפעם הראשונה בתחום החיובי.&rlm;",
        "options": ["y = 3x - 1.57", "y = x + 1", "y = 2x - 1.57", "y = x - 3.14"],
        "correctAnswer": 0,
        "hint": "גזרו פעמיים והשוו לאפס למציאת הנקודה.",
        "solution_steps": [
            { "verbal_explanation": "נגזור פעם ראשונה.", "math_expression": "f'(x) = 1 + 2\\sin(2x)" },
            { "verbal_explanation": "נגזור פעם שנייה.", "math_expression": "f''(x) = 4\\cos(2x)" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "4\\cos(2x) = 0 \\Rightarrow \\cos(2x) = 0" },
            { "verbal_explanation": "נמצא את הפתרון החיובי הראשון.", "math_expression": "2x = \\dfrac{\\pi}{2} \\Rightarrow x = \\dfrac{\\pi}{4}" },
            { "verbal_explanation": "נחשב את ערך הפונקציה בנקודה.", "math_expression": "f(\\dfrac{\\pi}{4}) = \\dfrac{\\pi}{4} - \\cos(\\dfrac{\\pi}{2}) = \\dfrac{\\pi}{4}" },
            { "verbal_explanation": "נחשב את שיפוע המשיק מהנגזרת.", "math_expression": "m = f'(\\dfrac{\\pi}{4}) = 1 + 2\\sin(\\dfrac{\\pi}{2}) = 3" },
            { "verbal_explanation": "נרכיב משוואת משיק.", "math_expression": "y - \\dfrac{\\pi}{4} = 3(x - \\dfrac{\\pi}{4})" },
            { "verbal_explanation": "נפשט.", "math_expression": "y = 3x - \\dfrac{3\\pi}{4} + \\dfrac{\\pi}{4} = 3x - \\dfrac{\\pi}{2}" },
            { "verbal_explanation": "נציג כערך עשרוני.", "math_expression": "y \\approx 3x - 1.57" }
        ],
        "final_answer": "y = 3x - 1.57"
    },

    // ==========================================
    // תת נושא 2: מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס) (10 שאלות)
    // ==========================================
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"60\" x2=\"180\" y2=\"60\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"110\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"110\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"110\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><path d=\"M 65 110 Q 100 60 135 10\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>מהן האסימפטוטות האנכיות של הפונקציה \\( f(x) = \\tan(x) \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\)?&rlm;",
        "options": ["x = π/2, x = 3π/2", "x = 0, x = π, x = 2π", "x = π/4, x = 3π/4", "אין אסימפטוטות"],
        "correctAnswer": 0,
        "hint": "חפשו היכן המכנה של פונקציית הטנגנס מתאפס.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הזהות לפונקציה.", "math_expression": "f(x) = \\dfrac{\\sin(x)}{\\cos(x)}" },
            { "verbal_explanation": "נשווה את המכנה לאפס.", "math_expression": "\\cos(x) = 0" },
            { "verbal_explanation": "נמצא פתרון ראשון בתחום.", "math_expression": "x_1 = \\dfrac{\\pi}{2}" },
            { "verbal_explanation": "נמצא פתרון שני בתחום.", "math_expression": "x_2 = \\dfrac{3\\pi}{2}" },
            { "verbal_explanation": "נוודא שהמונה אינו מתאפס בנקודות אלו.", "math_expression": "\\sin(\\dfrac{\\pi}{2}) = 1 \\neq 0" },
            { "verbal_explanation": "נסיק שאלו האסימפטוטות האנכיות.", "math_expression": "x = \\dfrac{\\pi}{2} \\quad , \\quad x = \\dfrac{3\\pi}{2}" }
        ],
        "final_answer": "x = π/2, x = 3π/2"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "מהן האסימפטוטות האנכיות של הפונקציה \\( f(x) = \\dfrac{1}{\\sin(x) - \\cos(x)} \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\)?&rlm;",
        "options": ["x = π/4, x = 5π/4", "x = π/2, x = 3π/2", "x = 0, x = π", "x = 3π/4, x = 7π/4"],
        "correctAnswer": 0,
        "hint": "השוו את המכנה לאפס ופתרו את המשוואה על ידי חלוקה בקוסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נשווה את המכנה לאפס.", "math_expression": "\\sin(x) - \\cos(x) = 0" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\sin(x) = \\cos(x)" },
            { "verbal_explanation": "נחלק בקוסינוס.", "math_expression": "\\tan(x) = 1" },
            { "verbal_explanation": "נמצא פתרון ראשון.", "math_expression": "x_1 = \\dfrac{\\pi}{4}" },
            { "verbal_explanation": "נמצא פתרון נוסף במחזוריות.", "math_expression": "x_2 = \\dfrac{\\pi}{4} + \\pi = \\dfrac{5\\pi}{4}" },
            { "verbal_explanation": "נרשום את האסימפטוטות המלאות.", "math_expression": "x = \\dfrac{\\pi}{4} \\quad , \\quad x = \\dfrac{5\\pi}{4}" }
        ],
        "final_answer": "x = π/4, x = 5π/4"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{\\sin(x)}{\\sin(2x)} \\) בתחום \\( 0 \\leq x \\leq \\pi \\). מצאו את האסימפטוטות האנכיות שלה (כאלה שאינן חורים).&rlm;",
        "options": ["x = π/2 בלבד", "x = 0, x = π/2, x = π", "x = 0, x = π", "אין אסימפטוטות, הכל חורים"],
        "correctAnswer": 0,
        "hint": "השתמשו בזהות זווית כפולה במכנה, וצמצמו את הגורם המשותף.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את זהות הזווית הכפולה.", "math_expression": "\\sin(2x) = 2\\sin(x)\\cos(x)" },
            { "verbal_explanation": "נציב את הזהות בפונקציה.", "math_expression": "f(x) = \\dfrac{\\sin(x)}{2\\sin(x)\\cos(x)}" },
            { "verbal_explanation": "נצמצם את הגורם המשותף.", "math_expression": "f(x) = \\dfrac{1}{2\\cos(x)}" },
            { "verbal_explanation": "הנקודות שצומצמו מהוות חורים.", "math_expression": "\\sin(x) = 0 \\Rightarrow x = 0 \\quad , \\quad x = \\pi" },
            { "verbal_explanation": "הגורם שנותר במכנה מהווה אסימפטוטה ממשית.", "math_expression": "2\\cos(x) = 0 \\Rightarrow \\cos(x) = 0" },
            { "verbal_explanation": "נמצא את הערך בתחום.", "math_expression": "x = \\dfrac{\\pi}{2}" }
        ],
        "final_answer": "x = π/2 בלבד"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "מהי האסימפטוטה האופקית של הפונקציה \\( f(x) = \\dfrac{3x + \\sin(x)}{x} \\) עבור ערכי \\( x \\) חיוביים גדולים מאוד?&rlm;",
        "options": ["y = 3", "y = 0", "y = 4", "אין אסימפטוטה אופקית"],
        "correctAnswer": 0,
        "hint": "פצלו את השבר. הפונקציה סינוס חסומה.",
        "solution_steps": [
            { "verbal_explanation": "נפצל את השבר להערכת גבולות.", "math_expression": "f(x) = \\dfrac{3x}{x} + \\dfrac{\\sin(x)}{x}" },
            { "verbal_explanation": "נצמצם את הביטוי הראשון.", "math_expression": "f(x) = 3 + \\dfrac{\\sin(x)}{x}" },
            { "verbal_explanation": "נבחן את גבול הביטוי השני המכיל פונקציה חסומה.", "math_expression": "-1 \\leq \\sin(x) \\leq 1" },
            { "verbal_explanation": "נחשב את הגבול.", "math_expression": "\\lim_{x \\to \\infty} \\dfrac{\\sin(x)}{x} = 0" },
            { "verbal_explanation": "נחבר את הגבולות.", "math_expression": "y = 3 + 0 = 3" }
        ],
        "final_answer": "y = 3"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "מצאו את הפרמטר \\( a \\) אם לפונקציה \\( f(x) = \\dfrac{ax^{2} + \\cos(x)}{2x^{2} + 1} \\) יש אסימפטוטה אופקית שמשוואתה \\( y = 4 \\).&rlm;",
        "options": ["8", "4", "2", "16"],
        "correctAnswer": 0,
        "hint": "פונקציות טריגונומטריות חסומות הופכות לזניחות ביחס לחזקות של המשתנה באינסוף.",
        "solution_steps": [
            { "verbal_explanation": "נבחן התנהגות גבולית. הפונקציה הטריגונומטרית זניחה.", "math_expression": "x \\rightarrow \\infty \\Rightarrow \\cos(x) \\approx 0" },
            { "verbal_explanation": "נגדיר קירוב לפונקציה.", "math_expression": "f(x) \\approx \\dfrac{ax^{2}}{2x^{2}}" },
            { "verbal_explanation": "נחשב יחס מקדמים.", "math_expression": "y = \\dfrac{a}{2}" },
            { "verbal_explanation": "נשווה לנתון.", "math_expression": "\\dfrac{a}{2} = 4" },
            { "verbal_explanation": "נחשב את הפרמטר.", "math_expression": "a = 8" }
        ],
        "final_answer": "8"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "מהן האסימפטוטות האנכיות של הפונקציה \\( f(x) = \\dfrac{1}{\\sin^{2}(x) - 1} \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\)?&rlm;",
        "options": ["x = π/2, x = 3π/2", "x = 0, x = π, x = 2π", "x = π/4, x = 3π/4", "אין אסימפטוטות"],
        "correctAnswer": 0,
        "hint": "השוו את המכנה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נשווה את המכנה לאפס.", "math_expression": "\\sin^{2}(x) - 1 = 0" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\sin^{2}(x) = 1" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "\\sin(x) = 1 \\quad , \\quad \\sin(x) = -1" },
            { "verbal_explanation": "נמצא פתרון חיובי בתחום.", "math_expression": "x = \\dfrac{\\pi}{2}" },
            { "verbal_explanation": "נמצא פתרון שלילי בתחום.", "math_expression": "x = \\dfrac{3\\pi}{2}" },
            { "verbal_explanation": "האסימפטוטות התקבלו.", "math_expression": "x = \\dfrac{\\pi}{2} \\quad , \\quad x = \\dfrac{3\\pi}{2}" }
        ],
        "final_answer": "x = π/2, x = 3π/2"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "מצאו את הפרמטר \\( b \\) אם לפונקציה \\( f(x) = \\dfrac{\\tan(x)}{x - b} \\) יש נקודת אי-רציפות סליקה (חור) ב-\\( x = 0 \\).&rlm;",
        "options": ["0", "1", "π", "אין ערך כזה"],
        "correctAnswer": 0,
        "hint": "בנקודת חור, המונה והמכנה צריכים להתאפס שניהם.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ערך המונה בנקודה.", "math_expression": "\\tan(0) = 0" },
            { "verbal_explanation": "בכדי ליצור חור, גם המכנה צריך להתאפס.", "math_expression": "0 - b = 0" },
            { "verbal_explanation": "נפתור עבור המקדם.", "math_expression": "b = 0" },
            { "verbal_explanation": "נוודא את קיום החור בעזרת גבול יסודי.", "math_expression": "\\lim_{x \\to 0} \\dfrac{\\tan(x)}{x} = 1" }
        ],
        "final_answer": "0"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "מהן האסימפטוטות האנכיות של הפונקציה \\( f(x) = \\dfrac{1}{\\cos(2x)} \\) בתחום \\( 0 \\leq x \\leq \\pi \\)?&rlm;",
        "options": ["x = π/4, x = 3π/4", "x = π/2", "x = 0, x = π", "x = π/8, x = 3π/8"],
        "correctAnswer": 0,
        "hint": "השוו את המכנה לאפס, ובדקו מהן הזוויות המאפסות.",
        "solution_steps": [
            { "verbal_explanation": "נשווה מכנה לאפס.", "math_expression": "\\cos(2x) = 0" },
            { "verbal_explanation": "נמצא את פתרונות הזווית הכפולה.", "math_expression": "2x = \\dfrac{\\pi}{2} \\quad , \\quad 2x = \\dfrac{3\\pi}{2}" },
            { "verbal_explanation": "נחלק בשתיים לכל משוואה.", "math_expression": "x = \\dfrac{\\pi}{4} \\quad , \\quad x = \\dfrac{3\\pi}{4}" },
            { "verbal_explanation": "נוודא שהערכים בתוך התחום המבוקש.", "math_expression": "x \\in [0, \\pi]" }
        ],
        "final_answer": "x = π/4, x = 3π/4"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{\\cos(x)}{1 + \\sin(x)} \\). מהי האסימפטוטה האנכית שלה בתחום \\( 0 \\leq x \\leq 2\\pi \\)?&rlm;",
        "options": ["x = 3π/2", "x = π/2", "x = π", "x = 0"],
        "correctAnswer": 0,
        "hint": "השוו מכנה לאפס. ניתן להראות שהנקודה היא אסימפטוטה ולא חור.",
        "solution_steps": [
            { "verbal_explanation": "נשווה מכנה לאפס.", "math_expression": "1 + \\sin(x) = 0 \\Rightarrow \\sin(x) = -1" },
            { "verbal_explanation": "נמצא את הפתרון בתחום.", "math_expression": "x = \\dfrac{3\\pi}{2}" },
            { "verbal_explanation": "נבדוק את ערך המונה.", "math_expression": "\\cos(\\dfrac{3\\pi}{2}) = 0" },
            { "verbal_explanation": "נשתמש בכפל בצמוד לבדיקת הגבול בנקודה.", "math_expression": "f(x) \\times \\dfrac{1 - \\sin(x)}{1 - \\sin(x)} = \\dfrac{\\cos(x)(1 - \\sin(x))}{1 - \\sin^{2}(x)}" },
            { "verbal_explanation": "נפשט.", "math_expression": "\\dfrac{\\cos(x)(1 - \\sin(x))}{\\cos^{2}(x)} = \\dfrac{1 - \\sin(x)}{\\cos(x)}" },
            { "verbal_explanation": "נציב את הנקודה לזיהוי חלוקה באפס.", "math_expression": "\\dfrac{2}{0}" }
        ],
        "final_answer": "x = 3π/2"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "מציאת אסימפטוטות לפונקציות טריגונומטריות (כולל טנגנס)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"80\" x2=\"180\" y2=\"80\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 80 Q 70 30 100 80 T 160 80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"30\" x2=\"180\" y2=\"30\" stroke=\"#f87171\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/></svg></div><br>מהי האסימפטוטה האופקית של הפונקציה \\( f(x) = x \\cdot \\sin\\left(\\dfrac{1}{x}\\right) \\) כאשר \\( x \\) שואף לאינסוף חיובי?&rlm;",
        "options": ["y = 1", "y = 0", "אין אסימפטוטה אופקית", "y = π"],
        "correctAnswer": 0,
        "hint": "הציבו משתנה עזר במקום 1 חלקי x.",
        "solution_steps": [
            { "verbal_explanation": "נבצע הצבת משתנה עזר.", "math_expression": "t = \\dfrac{1}{x} \\Rightarrow x = \\dfrac{1}{t}" },
            { "verbal_explanation": "נגדיר את גבול משתנה העזר.", "math_expression": "x \\rightarrow \\infty \\Rightarrow t \\rightarrow 0" },
            { "verbal_explanation": "נשכתב את הפונקציה המקורית.", "math_expression": "f(t) = \\dfrac{1}{t} \\cdot \\sin(t) = \\dfrac{\\sin(t)}{t}" },
            { "verbal_explanation": "נשתמש במשפט גבולות יסודי להערכת השבר.", "math_expression": "\\lim_{t \\to 0} \\dfrac{\\sin(t)}{t} = 1" },
            { "verbal_explanation": "האסימפטוטה חושבה.", "math_expression": "y = 1" }
        ],
        "final_answer": "y = 1"
    },

    // ==========================================
    // תת נושא 3: נקודות קיצון מוחלט ומקומי בקטע סגור (10 שאלות)
    // ==========================================
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "נתונה הפונקציה \\( f(x) = \\sin(x) + \\cos(x) \\) בתחום הסגור \\( 0 \\leq x \\leq \\pi \\).<br>א. מצאו את נקודת המקסימום המוחלט של הפונקציה בתחום זה.<br>ב. מצאו את נקודת המינימום המוחלט של הפונקציה בתחום זה.&rlm;",
        "options": ["א. (π/4, 1.41) ב. (π, -1)", "א. (0, 1) ב. (π/2, 0)", "א. (π/2, 1) ב. (π, -1)", "א. (π/4, 1.41) ב. (3π/4, -1.41)"],
        "correctAnswer": 0,
        "hint": "גזרו והשוו לאפס. הציבו את הנקודה שמצאתם ואת קצוות התחום כדי להשוות מי גבוהה ומי נמוכה.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = \\cos(x) - \\sin(x)" },
            { "verbal_explanation": "נשווה לאפס ונמיר לטנגנס.", "math_expression": "\\cos(x) = \\sin(x) \\Rightarrow \\tan(x) = 1" },
            { "verbal_explanation": "נמצא פתרון חיובי ראשון.", "math_expression": "x = \\dfrac{\\pi}{4}" },
            { "verbal_explanation": "נחשב את ערך הפונקציה בנקודה.", "math_expression": "f(\\dfrac{\\pi}{4}) = \\dfrac{\\sqrt{2}}{2} + \\dfrac{\\sqrt{2}}{2} = \\sqrt{2} \\approx 1.414" },
            { "verbal_explanation": "נחשב את הקצה השמאלי.", "math_expression": "f(0) = 0 + 1 = 1" },
            { "verbal_explanation": "נחשב את הקצה הימני.", "math_expression": "f(\\pi) = 0 - 1 = -1" },
            { "verbal_explanation": "נשווה ערכים ונקבע את סוג הקיצון המוחלט.", "math_expression": "Max(\\dfrac{\\pi}{4} , \\sqrt{2}) \\quad , \\quad Min(\\pi , -1)" }
        ],
        "final_answer": "א. (π/4, 1.41) ב. (π, -1)"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "מצאו את נקודות המקסימום והמינימום המוחלטים של הפונקציה \\( f(x) = x - 2\\cos(x) \\) בקטע הסגור \\( 0 \\leq x \\leq \\pi \\).&rlm;",
        "options": ["מקס': (π, 5.14), מינ': (0, -2)", "מקס': (π/2, 1.57), מינ': (0, -2)", "מקס': (π, 5.14), מינ': (π/2, 0)", "מקס': (π, 3.14), מינ': (0, 0)"],
        "correctAnswer": 0,
        "hint": "שימו לב שבתחום הנתון הנגזרת תמיד חיובית.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = 1 + 2\\sin(x)" },
            { "verbal_explanation": "נבחן את התנהגות הנגזרת בתחום.", "math_expression": "\\sin(x) \\geq 0 \\Rightarrow f'(x) > 0" },
            { "verbal_explanation": "הפונקציה עולה תמיד בתחום הנתון.", "math_expression": "f(x) \\nearrow" },
            { "verbal_explanation": "הערך הנמוך ביותר מתקבל בקצה השמאלי.", "math_expression": "f(0) = 0 - 2\\cos(0) = -2" },
            { "verbal_explanation": "הערך הגבוה ביותר מתקבל בקצה הימני.", "math_expression": "f(\\pi) = \\pi - 2\\cos(\\pi) = \\pi + 2 \\approx 5.14" }
        ],
        "final_answer": "מקס': (π, 5.14), מינ': (0, -2)"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"80\" x2=\"180\" y2=\"80\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 100 Q 70 20 100 40 T 160 20\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>נתונה הפונקציה \\( f(x) = \\sin^{2}(x) - \\cos(x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\). מצאו את נקודות הקיצון המוחלטות שלה.&rlm;",
        "options": ["מקס': (2π/3, 1.25), מינ': (0, -1)", "מקס': (π/2, 1), מינ': (0, -1)", "מקס': (π, 1), מינ': (π/3, -0.5)", "מקס': (2π/3, 1.25), מינ': (π, 1)"],
        "correctAnswer": 0,
        "hint": "הנגזרת מכילה גורם משותף. בדקו גם את קצוות התחום.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה המורכבת.", "math_expression": "f'(x) = 2\\sin(x)\\cos(x) + \\sin(x)" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "\\sin(x)(2\\cos(x) + 1) = 0" },
            { "verbal_explanation": "פתרונות למשוואה הראשונה נמצאים בקצוות.", "math_expression": "\\sin(x) = 0 \\Rightarrow x = 0 \\quad , \\quad x = \\pi" },
            { "verbal_explanation": "נמצא פתרון מהמשוואה השנייה.", "math_expression": "2\\cos(x) + 1 = 0 \\Rightarrow \\cos(x) = -0.5 \\Rightarrow x = \\dfrac{2\\pi}{3}" },
            { "verbal_explanation": "נחשב את ערך הקצה השמאלי.", "math_expression": "f(0) = 0 - 1 = -1" },
            { "verbal_explanation": "נחשב את ערך הקצה הימני.", "math_expression": "f(\\pi) = 0 - (-1) = 1" },
            { "verbal_explanation": "נחשב את ערך הפונקציה בנקודה הפנימית.", "math_expression": "f(\\dfrac{2\\pi}{3}) = (\\dfrac{\\sqrt{3}}{2})^{2} - (-0.5) = 0.75 + 0.5 = 1.25" },
            { "verbal_explanation": "נשווה ערכים ונקבע מקסימום ומינימום.", "math_expression": "Max(\\dfrac{2\\pi}{3} , 1.25) \\quad , \\quad Min(0 , -1)" }
        ],
        "final_answer": "מקס': (2π/3, 1.25), מינ': (0, -1)"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "הערך המקסימלי המוחלט של הפונקציה \\( f(x) = a\\sin(x) - \\cos(2x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\) הוא 3 (נתון \\( a > 0 \\)).<br>מצאו את הערך של הפרמטר \\( a \\).&rlm;",
        "options": ["2", "1", "3", "4"],
        "correctAnswer": 0,
        "hint": "גזרו והשוו לאפס למציאת הנקודה הפנימית. הציבו אותה בחזרה והשוו ל-3.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה בעלת הפרמטר.", "math_expression": "f'(x) = a\\cos(x) + 2\\sin(2x)" },
            { "verbal_explanation": "נשתמש בזהות זווית כפולה להוצאת גורם משותף.", "math_expression": "f'(x) = a\\cos(x) + 4\\sin(x)\\cos(x) = \\cos(x)(a + 4\\sin(x))" },
            { "verbal_explanation": "נשווה לאפס למציאת נקודה פנימית.", "math_expression": "\\cos(x) = 0 \\Rightarrow x = \\dfrac{\\pi}{2}" },
            { "verbal_explanation": "נציב את הנקודה במשוואה המקורית ונשווה למקסימום הנתון.", "math_expression": "f(\\dfrac{\\pi}{2}) = a(1) - (-1) = 3" },
            { "verbal_explanation": "נפתור עבור הפרמטר.", "math_expression": "a + 1 = 3 \\Rightarrow a = 2" },
            { "verbal_explanation": "נוודא שערכי הקצוות נמוכים יותר.", "math_expression": "f(0) = -1 \\quad , \\quad f(\\pi) = -1" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "נתונה הפונקציה \\( f(x) = \\cos^{2}(x) + \\cos(x) \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\). מצאו את נקודות המינימום (המוחלט) של הפונקציה בתחום זה.&rlm;",
        "options": ["(2π/3, -0.25), (4π/3, -0.25)", "(π, 0)", "(π/2, 0), (3π/2, 0)", "(π/3, 0.75), (5π/3, 0.75)"],
        "correctAnswer": 0,
        "hint": "גזרו והשוו לאפס, והציבו בחזרה לקביעת הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = -2\\cos(x)\\sin(x) - \\sin(x)" },
            { "verbal_explanation": "נוציא גורם משותף.", "math_expression": "-\\sin(x)(2\\cos(x) + 1) = 0" },
            { "verbal_explanation": "נמצא קצוות ואמצע התחום מהמשוואה הראשונה.", "math_expression": "\\sin(x) = 0 \\Rightarrow x = 0 \\quad , \\quad x = \\pi \\quad , \\quad x = 2\\pi" },
            { "verbal_explanation": "נמצא פתרונות מהמשוואה השנייה.", "math_expression": "\\cos(x) = -0.5 \\Rightarrow x = \\dfrac{2\\pi}{3} \\quad , \\quad x = \\dfrac{4\\pi}{3}" },
            { "verbal_explanation": "נחשב ערכים מהמשוואה הראשונה.", "math_expression": "f(0) = 2 \\quad , \\quad f(\\pi) = 0 \\quad , \\quad f(2\\pi) = 2" },
            { "verbal_explanation": "נחשב ערך מהמשוואה השנייה.", "math_expression": "f(\\dfrac{2\\pi}{3}) = (-0.5)^{2} - 0.5 = -0.25" },
            { "verbal_explanation": "הנקודות שוות והן המינימום.", "math_expression": "f(\\dfrac{4\\pi}{3}) = -0.25" }
        ],
        "final_answer": "(2π/3, -0.25), (4π/3, -0.25)"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{1}{2}\\sin(2x) - \\sin(x) \\) בקטע \\( 0 \\leq x \\leq 2\\pi \\). מהו ערכה של נקודת המינימום המוחלט בקטע?&rlm;",
        "options": ["-1.3", "0", "-1", "-0.86"],
        "correctAnswer": 0,
        "hint": "גזרו והמירו את קוסינוס הזווית הכפולה לקוסינוס בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = \\cos(2x) - \\cos(x)" },
            { "verbal_explanation": "נמיר את הזווית הכפולה.", "math_expression": "2\\cos^{2}(x) - 1 - \\cos(x) = 0" },
            { "verbal_explanation": "נסדר משוואה ריבועית.", "math_expression": "2\\cos^{2}(x) - \\cos(x) - 1 = 0" },
            { "verbal_explanation": "נפרק לגורמים.", "math_expression": "(2\\cos(x) + 1)(\\cos(x) - 1) = 0" },
            { "verbal_explanation": "פתרונות המקרה הראשון.", "math_expression": "\\cos(x) = 1 \\Rightarrow x = 0 \\quad , \\quad x = 2\\pi" },
            { "verbal_explanation": "פתרונות המקרה השני.", "math_expression": "\\cos(x) = -0.5 \\Rightarrow x = \\dfrac{2\\pi}{3} \\quad , \\quad x = \\dfrac{4\\pi}{3}" },
            { "verbal_explanation": "נחשב ערכי קצוות.", "math_expression": "f(0) = 0 \\quad , \\quad f(2\\pi) = 0" },
            { "verbal_explanation": "נחשב ערך פנימי שיספק מינימום.", "math_expression": "f(\\dfrac{2\\pi}{3}) = 0.5(-\\dfrac{\\sqrt{3}}{2}) - \\dfrac{\\sqrt{3}}{2} = -\\dfrac{3\\sqrt{3}}{4}" },
            { "verbal_explanation": "נחשב ערך מקורב.", "math_expression": "-1.3" }
        ],
        "final_answer": "-1.3"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 120\" width=\"200\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"80\" x2=\"180\" y2=\"80\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"110\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 50 Q 80 10 120 50 T 180 10\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>נתונה הפונקציה \\( f(x) = a\\sin(x) + b\\cos(x) \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\). נקודת המקסימום המוחלט של הפונקציה מתקבלת ב- \\( (\\dfrac{\\pi}{6}, 2) \\).<br>מצאו את הערכים של \\( a \\) ו-\\( b \\).&rlm;",
        "options": ["a=1, b=1.73", "a=1.73, b=1", "a=2, b=0", "a=1, b=2"],
        "correctAnswer": 0,
        "hint": "גזרו והציבו בנגזרת השווה לאפס כדי למצוא קשר בין המשתנים.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = a\\cos(x) - b\\sin(x)" },
            { "verbal_explanation": "נציב את שיעור הקיצון בנגזרת.", "math_expression": "a\\cos(\\dfrac{\\pi}{6}) - b\\sin(\\dfrac{\\pi}{6}) = 0" },
            { "verbal_explanation": "נציב ערכים ונבודד.", "math_expression": "a\\dfrac{\\sqrt{3}}{2} - b\\dfrac{1}{2} = 0 \\Rightarrow b = a\\sqrt{3}" },
            { "verbal_explanation": "נציב את הנקודה במשוואה המקורית.", "math_expression": "a\\sin(\\dfrac{\\pi}{6}) + b\\cos(\\dfrac{\\pi}{6}) = 2" },
            { "verbal_explanation": "נציב את הקשר במשוואה.", "math_expression": "0.5a + (a\\sqrt{3})(\\dfrac{\\sqrt{3}}{2}) = 2" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "0.5a + 1.5a = 2 \\Rightarrow 2a = 2" },
            { "verbal_explanation": "נחלץ את המקדם הראשון.", "math_expression": "a = 1" },
            { "verbal_explanation": "נחלץ את המקדם השני.", "math_expression": "b = \\sqrt{3} \\approx 1.73" }
        ],
        "final_answer": "a=1, b=1.73"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "מצאו את נקודות הקיצון המוחלטות (מקסימום ומינימום) של הפונקציה \\( f(x) = x\\sin(x) + \\cos(x) \\) בתחום \\( 0 \\leq x \\leq \\pi \\).&rlm;",
        "options": ["מקס': (π/2, 1.57), מינ': (π, -1)", "מקס': (π, 2.14), מינ': (0, 1)", "מקס': (π/4, 1.41), מינ': (0, 1)", "מקס': (π/2, 1.57), מינ': (0, 1)"],
        "correctAnswer": 0,
        "hint": "השתמשו בכלל המכפלה לגזירת האיבר הראשון.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = \\sin(x) + x\\cos(x) - \\sin(x)" },
            { "verbal_explanation": "נפשט את הנגזרת.", "math_expression": "f'(x) = x\\cos(x)" },
            { "verbal_explanation": "נשווה לאפס בתחום.", "math_expression": "x = 0 \\quad , \\quad \\cos(x) = 0 \\Rightarrow x = \\dfrac{\\pi}{2}" },
            { "verbal_explanation": "נחשב את ערך הקצה השמאלי.", "math_expression": "f(0) = 1" },
            { "verbal_explanation": "נחשב את ערך הנקודה הפנימית.", "math_expression": "f(\\dfrac{\\pi}{2}) = \\dfrac{\\pi}{2} \\approx 1.57" },
            { "verbal_explanation": "נחשב את ערך הקצה הימני.", "math_expression": "f(\\pi) = -1" },
            { "verbal_explanation": "נסיק זהות קיצון.", "math_expression": "Max(\\dfrac{\\pi}{2} , 1.57) \\quad , \\quad Min(\\pi , -1)" }
        ],
        "final_answer": "מקס': (π/2, 1.57), מינ': (π, -1)"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "מצאו את שיעורי נקודת המקסימום המוחלט ואת נקודת המינימום המוחלט של הפונקציה \\( f(x) = \\dfrac{\\sin(x)}{2 + \\cos(x)} \\) בתחום \\( 0 \\leq x \\leq 2\\pi \\).&rlm;",
        "options": ["מקס': (2π/3, 0.58), מינ': (4π/3, -0.58)", "מקס': (π/2, 0.5), מינ': (3π/2, -0.5)", "מקס': (π/3, 0.58), מינ': (5π/3, -0.58)", "מקס': (2π/3, 1), מינ': (4π/3, -1)"],
        "correctAnswer": 0,
        "hint": "גזרו בעזרת כלל המנה ופשטו בעזרת זהות פיתגורס.",
        "solution_steps": [
            { "verbal_explanation": "נגזור פונקציית מנה.", "math_expression": "f'(x) = \\dfrac{\\cos(x)(2 + \\cos(x)) - \\sin(x)(-\\sin(x))}{(2 + \\cos(x))^{2}}" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "f'(x) = \\dfrac{2\\cos(x) + \\cos^{2}(x) + \\sin^{2}(x)}{(2 + \\cos(x))^{2}}" },
            { "verbal_explanation": "נשתמש בזהות.", "math_expression": "f'(x) = \\dfrac{2\\cos(x) + 1}{(2 + \\cos(x))^{2}}" },
            { "verbal_explanation": "נשווה מונה לאפס.", "math_expression": "2\\cos(x) + 1 = 0 \\Rightarrow \\cos(x) = -0.5" },
            { "verbal_explanation": "נמצא פתרונות בתחום.", "math_expression": "x = \\dfrac{2\\pi}{3} \\quad , \\quad x = \\dfrac{4\\pi}{3}" },
            { "verbal_explanation": "נחשב ערך לנקודה הראשונה.", "math_expression": "f(\\dfrac{2\\pi}{3}) = \\dfrac{\\sqrt{3}}{3} \\approx 0.577" },
            { "verbal_explanation": "נחשב ערך לנקודה השנייה.", "math_expression": "f(\\dfrac{4\\pi}{3}) = -\\dfrac{\\sqrt{3}}{3} \\approx -0.577" },
            { "verbal_explanation": "ערכי הקצוות מתאפסים. נסיק קיצון.", "math_expression": "f(0) = 0 \\quad , \\quad f(2\\pi) = 0" }
        ],
        "final_answer": "מקס': (2π/3, 0.58), מינ': (4π/3, -0.58)"
    },
    {
        "topic": "calculus_trig_572",
        "subTopic": "נקודות קיצון מוחלט ומקומי בקטע סגור",
        "question_text": "מצאו את נקודת המקסימום המוחלט של הפונקציה \\( f(x) = \\sin^{3}(x) \\) בתחום הסגור \\( 0 \\leq x \\leq \\pi \\).&rlm;",
        "options": ["(π/2, 1)", "(π/4, 0.35)", "(3π/4, 0.35)", "(π, 0)"],
        "correctAnswer": 0,
        "hint": "השתמשו בכלל השרשרת.",
        "solution_steps": [
            { "verbal_explanation": "נגזור בעזרת כלל השרשרת.", "math_expression": "f'(x) = 3\\sin^{2}(x)\\cos(x)" },
            { "verbal_explanation": "נשווה לאפס למציאת מאפסים.", "math_expression": "3\\sin^{2}(x)\\cos(x) = 0" },
            { "verbal_explanation": "נפתור משוואה ראשונה שנותנת קצוות.", "math_expression": "\\sin(x) = 0 \\Rightarrow x = 0 \\quad , \\quad x = \\pi" },
            { "verbal_explanation": "נפתור משוואה שנייה.", "math_expression": "\\cos(x) = 0 \\Rightarrow x = \\dfrac{\\pi}{2}" },
            { "verbal_explanation": "נחשב ערכי קצוות.", "math_expression": "f(0) = 0 \\quad , \\quad f(\\pi) = 0" },
            { "verbal_explanation": "נחשב ערך פנימי למקסימום.", "math_expression": "f(\\dfrac{\\pi}{2}) = 1^{3} = 1" }
        ],
        "final_answer": "(π/2, 1)"
    }
];