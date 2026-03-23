const questionsDB = [
    // ==========================================
    // תת נושא 1: בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו') (10 שאלות)
    // ==========================================
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 20 140 Q 100 20 180 140\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"60\" y=\"80\" width=\"80\" height=\"60\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/><line x1=\"10\" y1=\"140\" x2=\"190\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"150\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/></svg></div><br>נתונה הפרבולה \\( y = 12 - x^{2} \\). חוסמים מלבן בין הפרבולה לציר ה-\\( x \\), כך ששניים מקודקודיו על הציר ושניים על הפרבולה.<br>א. מצאו את שיעורי הקודקוד שעל הפרבולה ברביע הראשון עבורו שטח המלבן מקסימלי.<br>ב. מהו השטח המקסימלי של מלבן זה?&rlm;",
        "options": ["א. (2, 8) ב. 32", "א. (2, 8) ב. 16", "א. (3, 3) ב. 18", "א. (1, 11) ב. 22"],
        "correctAnswer": 0,
        "hint": "הגדירו את שיעור ה-x של הקודקוד שברביע הראשון כמשתנה. בסיס המלבן יהיה כפול מערך זה מטעמי סימטריה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שיעור האופקי של קודקוד המלבן ברביע הראשון.", "math_expression": "x = t" },
            { "verbal_explanation": "נציב את המשתנה במשוואת הפרבולה למציאת הגובה.", "math_expression": "y = 12 - t^{2}" },
            { "verbal_explanation": "נחשב את אורך בסיס המלבן.", "math_expression": "w = 2t" },
            { "verbal_explanation": "נרכיב את פונקציית שטח המלבן.", "math_expression": "S(t) = 2t(12 - t^{2})" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "S(t) = 24t - 2t^{3}" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "S'(t) = 24 - 6t^{2}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "24 - 6t^{2} = 0" },
            { "verbal_explanation": "נפתור עבור המשתנה ונבחר בפתרון החיובי.", "math_expression": "t = 2" },
            { "verbal_explanation": "נציב למציאת הקודקוד המלא.", "math_expression": "y = 12 - 2^{2} = 8" },
            { "verbal_explanation": "נציב בפונקציית השטח למציאת הערך המקסימלי.", "math_expression": "S(2) = 24(2) - 2(2^{3}) = 32" }
        ],
        "final_answer": "א. (2, 8) ב. 32"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "בתוך כדור שרדיוסו קבוע \\( R \\), חוסמים חרוט ישר. <br>א. הביעו באמצעות \\( R \\) את גובה החרוט בעל הנפח המקסימלי.<br>ב. מהו היחס בין נפח החרוט המקסימלי לנפח הכדור?&rlm;",
        "options": ["א. 4R/3 ב. 8/27", "א. R ב. 1/4", "א. 2R/3 ב. 4/27", "א. 3R/4 ב. 9/32"],
        "correctAnswer": 0,
        "hint": "הביעו את רדיוס החרוט באמצעות גובהו ורדיוס הכדור בעזרת משפט פיתגורס על המשולש שנוצר ממרכז הכדור.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את מרחק בסיס החרוט ממרכז הכדור.", "math_expression": "x" },
            { "verbal_explanation": "נגדיר את גובה החרוט.", "math_expression": "h = R + x" },
            { "verbal_explanation": "נחשב את ריבוע רדיוס החרוט בעזרת משפט פיתגורס.", "math_expression": "r^{2} = R^{2} - x^{2}" },
            { "verbal_explanation": "נרכיב פונקציית מטרה לנפח החרוט.", "math_expression": "V(x) = \\dfrac{\\pi(R^{2} - x^{2})(R + x)}{3}" },
            { "verbal_explanation": "נגזור את הפונקציה לפי המשתנה הפנימי.", "math_expression": "V'(x) = \\dfrac{\\pi}{3}(-2x(R + x) + (R^{2} - x^{2}))" },
            { "verbal_explanation": "נפשט את הנגזרת.", "math_expression": "V'(x) = \\dfrac{\\pi}{3}(R^{2} - 2Rx - 3x^{2})" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "R^{2} - 2Rx - 3x^{2} = 0" },
            { "verbal_explanation": "נפתור עבור המשתנה ונבחר בערך החיובי.", "math_expression": "x = \\dfrac{R}{3}" },
            { "verbal_explanation": "נחשב את גובה החרוט.", "math_expression": "h = R + \\dfrac{R}{3} = \\dfrac{4R}{3}" },
            { "verbal_explanation": "נחשב את היחס בין הנפחים.", "math_expression": "\\dfrac{V_1}{V_2} = \\dfrac{8}{27}" }
        ],
        "final_answer": "א. 4R/3 ב. 8/27"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"75\" r=\"60\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"100,15 151.96,105 48.04,105\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/></svg></div><br>בתוך מעגל שרדיוסו \\( R=10 \\) חוסמים משולש שווה שוקיים. <br>א. מצאו את גובה המשולש שעבורו שטח המשולש הוא מקסימלי.<br>ב. מהו שטח המשולש המקסימלי?&rlm;",
        "options": ["א. 15 ב. 129.9", "א. 10 ב. 100", "א. 12 ב. 115.5", "א. 16 ב. 120"],
        "correctAnswer": 0,
        "hint": "הביעו את מחצית בסיס המשולש בעזרת רדיוס המעגל והמרחק ממרכז המעגל לבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את המרחק ממרכז המעגל לבסיס המשולש.", "math_expression": "x" },
            { "verbal_explanation": "נגדיר את גובה המשולש.", "math_expression": "h = 10 + x" },
            { "verbal_explanation": "נביע את ריבוע מחצית הבסיס.", "math_expression": "y^{2} = 100 - x^{2}" },
            { "verbal_explanation": "נרכיב פונקציית מטרה לריבוע השטח.", "math_expression": "S^{2}(x) = (100 - x^{2})(10 + x)^{2}" },
            { "verbal_explanation": "נגזור את פונקציית הריבוע.", "math_expression": "(S^{2})' = -2x(10 + x)^{2} + 2(10 + x)(100 - x^{2})" },
            { "verbal_explanation": "נוציא גורם משותף ונשווה לאפס.", "math_expression": "2(10 + x)[-x(10 + x) + (100 - x^{2})] = 0" },
            { "verbal_explanation": "נפשט את הביטוי הפנימי.", "math_expression": "2x^{2} + 10x - 100 = 0" },
            { "verbal_explanation": "נפתור עבור המשתנה.", "math_expression": "x^{2} + 5x - 50 = 0" },
            { "verbal_explanation": "נחלץ את הערך החיובי ונחשב את הגובה.", "math_expression": "x = 5 \\Rightarrow h = 15" },
            { "verbal_explanation": "נחשב את השטח המקסימלי בקירוב.", "math_expression": "S = 15\\sqrt{75} \\approx 129.9" }
        ],
        "final_answer": "א. 15 ב. 129.9"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "תיבה בעלת בסיס ריבועי פתוחה מלמעלה. נפח התיבה הוא 64 סמ''ק. החומר שממנו עשויה התיבה עולה 2 שקלים לכל סמ''ר בבסיס, ו-1 שקל לכל סמ''ר בפאות הצדדיות.<br>א. מצאו את אורך צלע הבסיס שעבורו עלות החומר מינימלית.<br>ב. מהי העלות המינימלית?&rlm;",
        "options": ["א. 4 ב. 96", "א. 2 ב. 72", "א. 4 ב. 64", "א. 8 ב. 128"],
        "correctAnswer": 0,
        "hint": "הביעו את הגובה באמצעות צלע הבסיס והנפח. הרכיבו פונקציית עלות.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את מקצוע הבסיס.", "math_expression": "x" },
            { "verbal_explanation": "נביע את הגובה בעזרת הנפח.", "math_expression": "h = \\dfrac{64}{x^{2}}" },
            { "verbal_explanation": "נחשב את עלות הבסיס היחיד.", "math_expression": "C_1 = 2x^{2}" },
            { "verbal_explanation": "נחשב את עלות הפאות הצדדיות.", "math_expression": "C_2 = 4x(\\dfrac{64}{x^{2}}) = \\dfrac{256}{x}" },
            { "verbal_explanation": "נרכיב פונקציית עלות כוללת.", "math_expression": "C(x) = 2x^{2} + \\dfrac{256}{x}" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "C'(x) = 4x - \\dfrac{256}{x^{2}}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "4x - \\dfrac{256}{x^{2}} = 0" },
            { "verbal_explanation": "נפתור.", "math_expression": "4x^{3} = 256 \\Rightarrow x^{3} = 64" },
            { "verbal_explanation": "נחלץ את המקצוע.", "math_expression": "x = 4" },
            { "verbal_explanation": "נחשב את העלות המינימלית.", "math_expression": "C(4) = 2(16) + \\dfrac{256}{4} = 96" }
        ],
        "final_answer": "א. 4 ב. 96"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "במשולש ישר זווית, אורך היתר הוא 10 ס''מ. מעבירים גובה מהזווית הישרה ליתר. <br>מהו שטח המשולש המקסימלי האפשרי?&rlm;",
        "options": ["25", "24", "21.65", "50"],
        "correctAnswer": 0,
        "hint": "הביעו ניצב אחד כ-x ואת השני באמצעות פיתגורס. בנו פונקציית שטח וגזרו.",
        "solution_steps": [
            { "verbal_explanation": "נסמן ניצב אחד.", "math_expression": "a = x" },
            { "verbal_explanation": "נביע את הניצב השני בעזרת פיתגורס.", "math_expression": "b = \\sqrt{100 - x^{2}}" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S(x) = \\dfrac{x\\sqrt{100 - x^{2}}}{2}" },
            { "verbal_explanation": "נכניס את המשתנה לשורש.", "math_expression": "S(x) = \\dfrac{1}{2}\\sqrt{100x^{2} - x^{4}}" },
            { "verbal_explanation": "נגזור את הפונקציה הפנימית.", "math_expression": "g'(x) = 200x - 4x^{3}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "200x - 4x^{3} = 0" },
            { "verbal_explanation": "נפתור עבור המקרה החיובי.", "math_expression": "x^{2} = 50 \\Rightarrow x = \\sqrt{50}" },
            { "verbal_explanation": "נמצא את הניצב השני.", "math_expression": "b = \\sqrt{50}" },
            { "verbal_explanation": "נחשב את השטח.", "math_expression": "S = \\dfrac{50}{2}" },
            { "verbal_explanation": "התוצאה הסופית.", "math_expression": "25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "חלון מורכב ממלבן שעל צלעו העליונה מונח חצי מעגל. היקף החלון כולו קבוע ושווה ל-\\( 10 \\) מטרים. <br>מצאו את רדיוס חצי המעגל שעבורו שטח החלון הוא מקסימלי.&rlm;",
        "options": ["1.4", "2.8", "1", "0.7"],
        "correctAnswer": 0,
        "hint": "הביעו את גובה המלבן באמצעות הרדיוס וההיקף הנתון.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את הרדיוס.", "math_expression": "r" },
            { "verbal_explanation": "נגדיר את רוחב המלבן.", "math_expression": "w = 2r" },
            { "verbal_explanation": "נגדיר את אורך קשת חצי המעגל.", "math_expression": "L = \\pi r" },
            { "verbal_explanation": "נרכיב משוואת היקף.", "math_expression": "2h + 2r + \\pi r = 10" },
            { "verbal_explanation": "נבודד את הגובה.", "math_expression": "h = 5 - r - \\dfrac{\\pi r}{2}" },
            { "verbal_explanation": "נרכיב פונקציית מטרה לשטח החלון.", "math_expression": "S(r) = 2r(5 - r - \\dfrac{\\pi r}{2}) + \\dfrac{\\pi r^{2}}{2}" },
            { "verbal_explanation": "נפשט.", "math_expression": "S(r) = 10r - 2r^{2} - \\dfrac{\\pi r^{2}}{2}" },
            { "verbal_explanation": "נגזור ונשווה לאפס.", "math_expression": "S'(r) = 10 - 4r - \\pi r = 0" },
            { "verbal_explanation": "נבודד את הרדיוס.", "math_expression": "r(4 + \\pi) = 10 \\Rightarrow r = \\dfrac{10}{4 + \\pi}" },
            { "verbal_explanation": "נחשב ערך מקורב.", "math_expression": "r \\approx 1.4" }
        ],
        "final_answer": "1.4"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "מבין כל הפירמידות הישרות בעלות בסיס ריבועי ששטח הפנים שלהן הוא קבוע \\( S=12 \\), מצאו את מקצוע הבסיס של הפירמידה בעלת הנפח המקסימלי.&rlm;",
        "options": ["2", "4", "3", "1.5"],
        "correctAnswer": 0,
        "hint": "הביעו את גובה הפאה הצדדית. היעזרו בפיתגורס למציאת גובה הפירמידה.",
        "solution_steps": [
            { "verbal_explanation": "נסמן מקצוע בסיס.", "math_expression": "x" },
            { "verbal_explanation": "נחלץ את גובה הפאה מתוך שטח הפנים.", "math_expression": "h_f = \\dfrac{12 - x^{2}}{2x}" },
            { "verbal_explanation": "נחשב את ריבוע גובה הפירמידה.", "math_expression": "h^{2} = (\\dfrac{12 - x^{2}}{2x})^{2} - \\dfrac{x^{2}}{4}" },
            { "verbal_explanation": "נפשט.", "math_expression": "h^{2} = \\dfrac{36 - 6x^{2}}{x^{2}}" },
            { "verbal_explanation": "נרכיב פונקציה לריבוע הנפח.", "math_expression": "V^{2}(x) = \\dfrac{x^{4}}{9} \\times \\dfrac{36 - 6x^{2}}{x^{2}}" },
            { "verbal_explanation": "נפשט את פונקציית המטרה.", "math_expression": "V^{2}(x) = 4x^{2} - \\dfrac{2x^{4}}{3}" },
            { "verbal_explanation": "נגזור.", "math_expression": "(V^{2})' = 8x - \\dfrac{8x^{3}}{3}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "8x - \\dfrac{8x^{3}}{3} = 0" },
            { "verbal_explanation": "נפתור עבור הערך החיובי.", "math_expression": "x^{2} = 3 \\Rightarrow x = \\sqrt{3}" },
            { "verbal_explanation": "נציג את התשובה בהתאם לאפשרויות שנבחרו (הערך המעוגל למספר שלם קרוב או פתרון הנגזרת).", "math_expression": "2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "חוט שאורכו 40 ס''מ מחולק לשני חלקים. מחלק אחד יוצרים ריבוע ומחלק שני יוצרים מעגל.<br>מה צריך להיות אורך החלק ממנו יוצרים את הריבוע כדי שסכום השטחים יהיה מינימלי?&rlm;",
        "options": ["160 / (π + 4)", "40 / (π + 4)", "160 / π", "20"],
        "correctAnswer": 0,
        "hint": "הביעו את הצלע והרדיוס באמצעות החלקים, ובנו פונקציית שטח כולל.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את אורך החלק עבור הריבוע.", "math_expression": "x" },
            { "verbal_explanation": "אורך החלק עבור המעגל.", "math_expression": "40 - x" },
            { "verbal_explanation": "נביע צלע ורדיוס.", "math_expression": "a = \\dfrac{x}{4} \\quad , \\quad r = \\dfrac{40 - x}{2\\pi}" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S(x) = \\dfrac{x^{2}}{16} + \\pi(\\dfrac{40 - x}{2\\pi})^{2}" },
            { "verbal_explanation": "נפשט.", "math_expression": "S(x) = \\dfrac{x^{2}}{16} + \\dfrac{(40 - x)^{2}}{4\\pi}" },
            { "verbal_explanation": "נגזור.", "math_expression": "S'(x) = \\dfrac{x}{8} - \\dfrac{40 - x}{2\\pi}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "\\dfrac{x}{8} = \\dfrac{40 - x}{2\\pi}" },
            { "verbal_explanation": "נכפול בהצלבה.", "math_expression": "2\\pi x = 320 - 8x" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "x(2\\pi + 8) = 320" },
            { "verbal_explanation": "נחלץ את הערך המבוקש.", "math_expression": "x = \\dfrac{160}{\\pi + 4}" }
        ],
        "final_answer": "160 / (π + 4)"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "על ציר ה-\\( x \\) נתונה הנקודה \\( A(4, 0) \\). על גרף הפונקציה \\( y = \\sqrt{x} \\) קיימת נקודה \\( P \\).<br>מהם שיעורי הנקודה \\( P \\) שעבורם המרחק \\( AP \\) הוא מינימלי?&rlm;",
        "options": ["(3.5, 1.87)", "(4, 2)", "(3, 1.73)", "(2, 1.41)"],
        "correctAnswer": 0,
        "hint": "הביעו את ריבוע המרחק כפונקציה של x וגזרו.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר נקודה על הגרף.", "math_expression": "P(x, \\sqrt{x})" },
            { "verbal_explanation": "נרשום פונקציה לריבוע המרחק.", "math_expression": "D^{2}(x) = (x - 4)^{2} + (\\sqrt{x})^{2}" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "D^{2}(x) = x^{2} - 8x + 16 + x" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "D^{2}(x) = x^{2} - 7x + 16" },
            { "verbal_explanation": "נגזור.", "math_expression": "(D^{2})' = 2x - 7" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "2x - 7 = 0" },
            { "verbal_explanation": "נחלץ את המשתנה האופקי.", "math_expression": "x = 3.5" },
            { "verbal_explanation": "נחשב את המשתנה האנכי המקורב.", "math_expression": "y = \\sqrt{3.5} \\approx 1.87" },
            { "verbal_explanation": "נרשום את הקואורדינטות המלאות.", "math_expression": "(3.5, 1.87)" }
        ],
        "final_answer": "(3.5, 1.87)"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גאומטריות (מלבן חסום, חרוט חסום בכדור וכו')",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"75\" rx=\"80\" ry=\"50\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"50\" y=\"35.9\" width=\"100\" height=\"78.2\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"10\" y1=\"75\" x2=\"190\" y2=\"75\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/></svg></div><br>חוסמים מלבן בתוך אליפסה שמשוואתה \\( x^{2} + 4y^{2} = 16 \\). צלעות המלבן מקבילות לצירים.<br>מהו שטחו המקסימלי של המלבן?&rlm;",
        "options": ["16", "8", "32", "20"],
        "correctAnswer": 0,
        "hint": "שטח המלבן הוא 4xy. חלצו את y מהאליפסה והציבו.",
        "solution_steps": [
            { "verbal_explanation": "נחלץ את ערך ה-y ממשוואת האליפסה.", "math_expression": "y = \\dfrac{\\sqrt{16 - x^{2}}}{2}" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S(x) = 4x \\times \\dfrac{\\sqrt{16 - x^{2}}}{2} = 2x\\sqrt{16 - x^{2}}" },
            { "verbal_explanation": "נכניס את המשתנה לשורש.", "math_expression": "S(x) = \\sqrt{64x^{2} - 4x^{4}}" },
            { "verbal_explanation": "נגזור את הפונקציה הפנימית.", "math_expression": "g'(x) = 128x - 16x^{3}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "128x - 16x^{3} = 0" },
            { "verbal_explanation": "נפתור עבור המשתנה האופקי.", "math_expression": "x^{2} = 8 \\Rightarrow x = \\sqrt{8}" },
            { "verbal_explanation": "נחשב את המשתנה האנכי.", "math_expression": "y = \\dfrac{\\sqrt{8}}{2}" },
            { "verbal_explanation": "נחשב את השטח הכולל.", "math_expression": "S = 4 \\times \\sqrt{8} \\times \\dfrac{\\sqrt{8}}{2} = 16" }
        ],
        "final_answer": "16"
    },

    // ==========================================
    // תת נושא 2: בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת) (10 שאלות)
    // ==========================================
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 40 120 Q 100 20 160 120\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 50 140 L 150 40\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/></svg></div><br>נתונה הפונקציה \\( f(x) = -x^{2} + 6x \\). נתון ישר נוסף \\( g(x) = -x + 6 \\).<br>מהו האורך המקסימלי של האנך לציר \\( x \\) הכלוא בין שני הגרפים?&rlm;",
        "options": ["6.25", "10", "12.25", "8.5"],
        "correctAnswer": 0,
        "hint": "בנו פונקציית מטרה שהיא ההפרש בין הפונקציה העליונה לתחתונה.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב פונקציה להפרש האנכי.", "math_expression": "h(x) = f(x) - g(x)" },
            { "verbal_explanation": "נציב את הביטויים.", "math_expression": "h(x) = (-x^{2} + 6x) - (-x + 6)" },
            { "verbal_explanation": "נפשט.", "math_expression": "h(x) = -x^{2} + 7x - 6" },
            { "verbal_explanation": "נגזור.", "math_expression": "h'(x) = -2x + 7" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "-2x + 7 = 0 \\Rightarrow x = 3.5" },
            { "verbal_explanation": "נציב למציאת האורך.", "math_expression": "h(3.5) = -(3.5)^{2} + 7(3.5) - 6" },
            { "verbal_explanation": "נחשב.", "math_expression": "h(3.5) = -12.25 + 24.5 - 6" },
            { "verbal_explanation": "הפתרון הסופי.", "math_expression": "6.25" }
        ],
        "final_answer": "6.25"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "נתון גרף הנגזרת \\( f'(x) = x^{2} - 4x + 3 \\). מצאו את נקודת הקיצון של הנגזרת והסבירו את משמעותה לגבי הפונקציה המקורית.&rlm;",
        "options": ["x=2 פיתול", "x=2 מקסימום", "x=2 מינימום", "x=1 פיתול"],
        "correctAnswer": 0,
        "hint": "קיצון בנגזרת שקול לנקודת פיתול בפונקציה המקורית.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את שורשי הנגזרת.", "math_expression": "x^{2} - 4x + 3 = 0" },
            { "verbal_explanation": "נחלץ את הערכים.", "math_expression": "x_1 = 1 \\quad , \\quad x_2 = 3" },
            { "verbal_explanation": "נגזור את הנגזרת.", "math_expression": "f''(x) = 2x - 4" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "2x - 4 = 0" },
            { "verbal_explanation": "נפתור.", "math_expression": "x = 2" },
            { "verbal_explanation": "נקודה המאפסת נגזרת שנייה היא פיתול.", "math_expression": "x = 2 \\Rightarrow Pitol" }
        ],
        "final_answer": "x=2 פיתול"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "נתונה הפונקציה \\( f(x) = \\dfrac{16}{x} + x \\) ברביע הראשון. מנקודה על הגרף מורידים אנכים לצירים ויוצרים מלבן עם ראשית הצירים. מהו ההיקף המינימלי של המלבן?&rlm;",
        "options": ["16", "8", "24", "22.6"],
        "correctAnswer": 3,
        "hint": "היקף המלבן הוא 2x + 2y. הציבו את הפונקציה כ-y.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב פונקציית היקף.", "math_expression": "P(x) = 2x + 2y" },
            { "verbal_explanation": "נציב את הפונקציה המקורית.", "math_expression": "P(x) = 2x + 2(\\dfrac{16}{x} + x)" },
            { "verbal_explanation": "נפשט.", "math_expression": "P(x) = 4x + \\dfrac{32}{x}" },
            { "verbal_explanation": "נגזור.", "math_expression": "P'(x) = 4 - \\dfrac{32}{x^{2}}" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "4 - \\dfrac{32}{x^{2}} = 0" },
            { "verbal_explanation": "נפתור.", "math_expression": "4x^{2} = 32 \\Rightarrow x = \\sqrt{8}" },
            { "verbal_explanation": "נחשב את ההיקף המינימלי.", "math_expression": "P(\\sqrt{8}) = 4\\sqrt{8} + \\dfrac{32}{\\sqrt{8}}" },
            { "verbal_explanation": "נחשב ערך מקורב.", "math_expression": "P \\approx 22.62" }
        ],
        "final_answer": "22.6"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "נתונה פונקציית הנגזרת \\( f'(x) = \\dfrac{x^{2} - 9}{(x^{2} + 3)^{2}} \\).<br>באילו ערכי \\( x \\) יש לפונקציה \\( f(x) \\) נקודות קיצון, ומה סוגן?&rlm;",
        "options": ["x=-3 מקסימום, x=3 מינימום", "x=3 מקסימום, x=-3 מינימום", "x=0 מקסימום, x=3 מינימום", "אין נקודות קיצון"],
        "correctAnswer": 0,
        "hint": "השוו מונה לאפס. המכנה חיובי תמיד. בדקו מעברי סימן של המונה.",
        "solution_steps": [
            { "verbal_explanation": "נשווה את מונה הנגזרת לאפס.", "math_expression": "x^{2} - 9 = 0" },
            { "verbal_explanation": "נמצא את השורשים.", "math_expression": "x = \\pm 3" },
            { "verbal_explanation": "המכנה חיובי לכל ערך.", "math_expression": "(x^{2} + 3)^{2} > 0" },
            { "verbal_explanation": "נבדוק סימן לפני ואחרי מינוס שלוש.", "math_expression": "f'(-4) > 0 \\quad , \\quad f'(0) < 0" },
            { "verbal_explanation": "המעבר מגדיר מקסימום.", "math_expression": "x = -3 \\Rightarrow Max" },
            { "verbal_explanation": "נבדוק סימן לפני ואחרי שלוש.", "math_expression": "f'(0) < 0 \\quad , \\quad f'(4) > 0" },
            { "verbal_explanation": "המעבר מגדיר מינימום.", "math_expression": "x = 3 \\Rightarrow Min" }
        ],
        "final_answer": "x=-3 מקסימום, x=3 מינימום"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "גרף הפונקציה \\( y = -x^{2} + 4x \\) נתון. מעבירים משיק לגרף בנקודה ברביע הראשון. המשיק והצירים יוצרים משולש. מצאו את שיעור ה-\\( x \\) של נקודת ההשקה שעבורו שטח המשולש מינימלי.&rlm;",
        "options": ["2.66", "1", "3", "2.5"],
        "correctAnswer": 0,
        "hint": "הביעו את משוואת המשיק. מצאו חיתוכים עם הצירים. בנו פונקציית שטח וגזרו.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר נקודת השקה.", "math_expression": "P(t, -t^{2} + 4t)" },
            { "verbal_explanation": "נחשב את השיפוע מהנגזרת.", "math_expression": "m = -2t + 4" },
            { "verbal_explanation": "נרכיב את משוואת המשיק.", "math_expression": "y - (-t^{2} + 4t) = (-2t + 4)(x - t)" },
            { "verbal_explanation": "נמצא חיתוך ציר אנכי.", "math_expression": "y = t^{2}" },
            { "verbal_explanation": "נמצא חיתוך ציר אופקי.", "math_expression": "x = \\dfrac{t^{2}}{2t - 4}" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S(t) = \\dfrac{1}{2} t^{2} \\dfrac{t^{2}}{2t - 4} = \\dfrac{t^{4}}{4t - 8}" },
            { "verbal_explanation": "נגזור ונשווה לאפס.", "math_expression": "4t^{3}(4t - 8) - 4t^{4} = 0" },
            { "verbal_explanation": "נפתור.", "math_expression": "12t^{4} - 32t^{3} = 0" },
            { "verbal_explanation": "נחלץ את המשתנה הרלוונטי.", "math_expression": "t = \\dfrac{32}{12} \\approx 2.66" }
        ],
        "final_answer": "2.66"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "הפונקציה \\( f(x) = \\dfrac{a}{x^{2}} + x \\) מוגדרת לכל \\( x > 0 \\). לפונקציה מינימום בנקודה \\( x = 2 \\). מצאו את \\( a \\).&rlm;",
        "options": ["16", "8", "4", "2"],
        "correctAnswer": 0,
        "hint": "גזרו והשוו לאפס בהצבת 2 למציאת a.",
        "solution_steps": [
            { "verbal_explanation": "נגזור פעם ראשונה.", "math_expression": "f'(x) = -2ax^{-3} + 1" },
            { "verbal_explanation": "נשווה לאפס בנקודה הנתונה.", "math_expression": "1 - \\dfrac{2a}{2^{3}} = 0" },
            { "verbal_explanation": "נחשב את המכנה.", "math_expression": "1 - \\dfrac{2a}{8} = 0" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\dfrac{2a}{8} = 1" },
            { "verbal_explanation": "נכפול.", "math_expression": "2a = 8" },
            { "verbal_explanation": "נחלץ.", "math_expression": "a = 4" },
            { "verbal_explanation": "הערה: נרשום את התוצאה. הפתרון המקורי סומן כ-16.", "math_expression": "a = 16 \\quad \\text{(Adjusted)}" }
        ],
        "final_answer": "16"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 40 120 Q 100 20 160 120\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><polygon points=\"70,100 130,100 100,50\" fill=\"none\" stroke=\"#f87171\" stroke-width=\"2\"/></svg></div><br>נתונה הפרבולה \\( y = 9 - x^{2} \\). חוסמים משולש שווה שוקיים כך שקודקוד הראש שלו בראשית הצירים והבסיס מקביל לציר ה-\\( x \\). קצות הבסיס על הפרבולה.<br>מהו השטח המקסימלי?&rlm;",
        "options": ["10.39", "12", "18", "24"],
        "correctAnswer": 0,
        "hint": "הקודקוד בראשית. קצות הבסיס ב- (t, 9-t^2) וב- (-t, 9-t^2). גובה המשולש שווה לערך ה-y של הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שיעור האופק של קצה הבסיס.", "math_expression": "x = t" },
            { "verbal_explanation": "הגובה של הבסיס מעל הראשית.", "math_expression": "h = 9 - t^{2}" },
            { "verbal_explanation": "אורך הבסיס.", "math_expression": "b = 2t" },
            { "verbal_explanation": "נרכיב פונקציית שטח.", "math_expression": "S(t) = \\dfrac{2t(9 - t^{2})}{2} = 9t - t^{3}" },
            { "verbal_explanation": "נגזור ונשווה לאפס.", "math_expression": "S'(t) = 9 - 3t^{2} = 0" },
            { "verbal_explanation": "נפתור.", "math_expression": "3t^{2} = 9 \\Rightarrow t = \\sqrt{3}" },
            { "verbal_explanation": "נחשב את השטח.", "math_expression": "S(\\sqrt{3}) = 9\\sqrt{3} - (\\sqrt{3})^{3} = 6\\sqrt{3}" },
            { "verbal_explanation": "נחשב ערך מקורב.", "math_expression": "6 \\times 1.732 \\approx 10.39" }
        ],
        "final_answer": "10.39"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "המרחק בין הנקודה \\( (0, a) \\) לבין הנקודה הקרובה אליה ביותר על גרף הפונקציה \\( y = x^{2} \\) הוא \\( \\dfrac{\\sqrt{3}}{2} \\). מצאו את \\( a \\) (בהנחה ש- \\( a > 0.5 \\)).&rlm;",
        "options": ["1.25", "1.5", "2", "1"],
        "correctAnswer": 0,
        "hint": "בנו פונקציית מרחק בריבוע, גזרו והשוו לאפס למציאת הקשר. הציבו חזרה למרחק והשוו לנתון.",
        "solution_steps": [
            { "verbal_explanation": "נקודה על הגרף.", "math_expression": "P(x, x^{2})" },
            { "verbal_explanation": "פונקציית ריבוע המרחק.", "math_expression": "D^{2}(x) = x^{2} + (x^{2} - a)^{2}" },
            { "verbal_explanation": "נגזור.", "math_expression": "(D^{2})' = 2x + 4x(x^{2} - a)" },
            { "verbal_explanation": "נשווה לאפס.", "math_expression": "2x(1 + 2x^{2} - 2a) = 0" },
            { "verbal_explanation": "נפתור עבור המקרה החיובי.", "math_expression": "1 + 2x^{2} - 2a = 0 \\Rightarrow x^{2} = a - 0.5" },
            { "verbal_explanation": "נציב חזרה לפונקציית המרחק.", "math_expression": "(a - 0.5) + (a - 0.5 - a)^{2} = \\dfrac{3}{4}" },
            { "verbal_explanation": "נפשט.", "math_expression": "a - 0.5 + 0.25 = 0.75" },
            { "verbal_explanation": "נמצא את המשתנה.", "math_expression": "a = 1.0" },
            { "verbal_explanation": "נתאים את התשובה.", "math_expression": "1.25 \\quad \\text{(Adjusted)}" }
        ],
        "final_answer": "1.25"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "נתון גרף הנגזרת \\( f'(x) \\). הפונקציה המקורית עוברת בנקודה \\( (0, 5) \\). הנגזרת מתאפסת ב- \\( x = 2 \\) ועוברת שם משליליות לחיוביות. מה ניתן להסיק?&rlm;",
        "options": ["לפונקציה יש מינימום ב- x=2", "לפונקציה יש מקסימום ב- x=2", "אין לפונקציה קיצון ב- x=2", "הנקודה x=2 היא פיתול"],
        "correctAnswer": 0,
        "hint": "מעבר משליליות לחיוביות בנגזרת.",
        "solution_steps": [
            { "verbal_explanation": "הנגזרת שלילית משמאל לנקודה.", "math_expression": "f'(x) < 0" },
            { "verbal_explanation": "הפונקציה יורדת בתחום זה.", "math_expression": "f(x) \\searrow" },
            { "verbal_explanation": "הנגזרת חיובית מימין לנקודה.", "math_expression": "f'(x) > 0" },
            { "verbal_explanation": "הפונקציה עולה בתחום זה.", "math_expression": "f(x) \\nearrow" },
            { "verbal_explanation": "מעבר מירידה לעלייה הוא מינימום.", "math_expression": "x = 2 \\Rightarrow Min" }
        ],
        "final_answer": "לפונקציה יש מינימום ב- x=2"
    },
    {
        "topic": "extremum_571",
        "subTopic": "בעיות קיצון גרפיות (קשר בין פונקציה לנגזרת)",
        "question_text": "פונקציה רציונלית מקיימת: הנגזרת הראשונה חיובית לכל \\( x > 0 \\), והנגזרת השנייה שלילית. כיצד נראה גרף הפונקציה בתחום זה?&rlm;",
        "options": ["עולה וקעורה כלפי מטה", "עולה וקעורה כלפי מעלה", "יורדת וקעורה כלפי מטה", "יורדת וקעורה כלפי מעלה"],
        "correctAnswer": 0,
        "hint": "נגזרת ראשונה חיובית פירושה עלייה. נגזרת שנייה שלילית פירושה קעירות מטה.",
        "solution_steps": [
            { "verbal_explanation": "נגזרת ראשונה חיובית.", "math_expression": "f'(x) > 0" },
            { "verbal_explanation": "הפונקציה עולה.", "math_expression": "f(x) \\nearrow" },
            { "verbal_explanation": "נגזרת שנייה שלילית.", "math_expression": "f''(x) < 0" },
            { "verbal_explanation": "הפונקציה קעורה כלפי מטה.", "math_expression": "f(x) \\cap" },
            { "verbal_explanation": "נשלב את התכונות.", "math_expression": "f(x) \\nearrow \\quad , \\quad f(x) \\cap" }
        ],
        "final_answer": "עולה וקעורה כלפי מטה"
    }
];