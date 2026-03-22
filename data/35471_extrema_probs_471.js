const questionsDB = [
    // ==========================================
    // תת נושא 1: בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית (10 שאלות)
    // ==========================================
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "סכום שני מספרים חיוביים הוא 20. מצאו את המספרים שעבורם סכום הריבועים שלהם הוא המינימלי ביותר.&rlm;",
        "options": ["10, 10", "15, 5", "8, 12", "16, 4"],
        "correctAnswer": 0,
        "hint": "הגדירו את המספר הראשון כ-x ואת השני כ-20 פחות x. בנו פונקציה המייצגת את סכום הריבועים וגזרו אותה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שני המספרים באמצעות משתנה יחיד, בהסתמך על סכומם הידוע.", "math_expression": "x \\quad , \\quad 20 - x" },
            { "verbal_explanation": "נבנה את פונקציית המטרה המייצגת את סכום ריבועיהם.", "math_expression": "f(x) = x^{2} + (20 - x)^{2}" },
            { "verbal_explanation": "נפתח את הסוגריים לפי נוסחת כפל מקוצר של ריבוע הפרש.", "math_expression": "f(x) = x^{2} + 400 - 40x + x^{2} = 2x^{2} - 40x + 400" },
            { "verbal_explanation": "נגזור את הפונקציה לקראת מציאת נקודת הקיצון.", "math_expression": "f'(x) = 4x - 40" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס ונחלץ את המשתנה.", "math_expression": "4x - 40 = 0 \\Rightarrow 4x = 40 \\Rightarrow x = 10" },
            { "verbal_explanation": "נציב את הערך שמצאנו כדי למצוא את המספר השני, ונראה ששניהם שווים זה לזה.", "math_expression": "20 - 10 = 10" }
        ],
        "final_answer": "10, 10"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "ההפרש בין שני מספרים חיוביים הוא 8. מצאו את שני המספרים שעבורם המכפלה שלהם היא המינימלית ביותר (המספרים עצמם יכולים להיות שליליים, למרות שההפרש חיובי).&rlm;",
        "options": ["-4, 4", "0, 8", "-2, 6", "-6, 2"],
        "correctAnswer": 0,
        "hint": "המספר האחד הוא x, והשני הוא x פלוס 8. הכפילו אותם ליצירת פונקציית המטרה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המספרים. אם ההפרש הוא 8, אזי מספר אחד גדול ב-8 מהשני.", "math_expression": "x \\quad , \\quad x + 8" },
            { "verbal_explanation": "נבנה פונקציה המתארת את מכפלתם.", "math_expression": "f(x) = x(x + 8)" },
            { "verbal_explanation": "נפתח סוגריים לקבלת פונקציה ריבועית פשוטה.", "math_expression": "f(x) = x^{2} + 8x" },
            { "verbal_explanation": "נגזור ונשווה לאפס למציאת המינימום.", "math_expression": "f'(x) = 2x + 8 = 0" },
            { "verbal_explanation": "נחלץ את המשתנה הראשון.", "math_expression": "2x = -8 \\Rightarrow x = -4" },
            { "verbal_explanation": "נציב את הערך בביטוי של המספר השני כדי למצוא אותו.", "math_expression": "-4 + 8 = 4" }
        ],
        "final_answer": "-4, 4"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "סכום שלושה מספרים חיוביים הוא 36. ידוע כי המספר הראשון גדול פי שניים מהמספר השני. מצאו את שלושת המספרים כך שמכפלתם תהיה מקסימלית.&rlm;",
        "options": ["16, 8, 12", "12, 6, 18", "20, 10, 6", "18, 9, 9"],
        "correctAnswer": 0,
        "hint": "הגדירו את השני כ-x, את הראשון כ-2x. השלישי הוא המשלים ל-36.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שלושת המספרים באמצעות משתנה אחד בהסתמך על תנאי השאלה.", "math_expression": "2x \\quad , \\quad x \\quad , \\quad 36 - 3x" },
            { "verbal_explanation": "נבנה את פונקציית המכפלה שלהם.", "math_expression": "f(x) = 2x \\times x \\times (36 - 3x)" },
            { "verbal_explanation": "נכפול את שני האיברים הראשונים ונפתח סוגריים לקבלת פולינום.", "math_expression": "f(x) = 2x^{2}(36 - 3x) = 72x^{2} - 6x^{3}" },
            { "verbal_explanation": "נגזור את הפונקציה כדי למצוא את המקסימום.", "math_expression": "f'(x) = 144x - 18x^{2}" },
            { "verbal_explanation": "נשווה לאפס ונוציא גורם משותף. (הפתרון של אפס נפסל כי המספרים חיוביים).", "math_expression": "18x(8 - x) = 0 \\Rightarrow x = 8" },
            { "verbal_explanation": "נציב את הערך שמצאנו בהגדרות המקוריות כדי לקבל את כלל המספרים.", "math_expression": "2 \\times 8 = 16 \\quad , \\quad 8 \\quad , \\quad 36 - 24 = 12" }
        ],
        "final_answer": "16, 8, 12"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "לחקלאי יש 60 מטרים של גדר. הוא מעוניין לגדר גינה מלבנית שצמודה לקיר אבן ישר (כך שאין צורך בגדר בצד של הקיר). מצאו את ממדי הגינה בעלת השטח המקסימלי האפשרי.&rlm;",
        "options": ["15, 30", "20, 20", "10, 40", "12, 36"],
        "correctAnswer": 0,
        "hint": "הגדר מורכבת משתי צלעות מקבילות וצלע אחת ארוכה. 2x + y = 60.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את צלעות הגינה. מכיוון שצלע אחת אינה מגודרת, סכום שלוש הצלעות הנותרות הוא אורך הגדר.", "math_expression": "2x + y = 60 \\Rightarrow y = 60 - 2x" },
            { "verbal_explanation": "נבנה את פונקציית השטח של הגינה המלבנית.", "math_expression": "S(x) = x(60 - 2x)" },
            { "verbal_explanation": "נפתח סוגריים ליצירת פרבולה.", "math_expression": "S(x) = 60x - 2x^{2}" },
            { "verbal_explanation": "נגזור ונשווה לאפס למציאת הקודקוד המקסימלי.", "math_expression": "S'(x) = 60 - 4x = 0" },
            { "verbal_explanation": "נחלץ את הממד הראשון של הגינה.", "math_expression": "4x = 60 \\Rightarrow x = 15" },
            { "verbal_explanation": "נציב חזרה כדי למצוא את הממד השני (הצלע המקבילה לקיר).", "math_expression": "y = 60 - 2 \\times 15 = 30" }
        ],
        "final_answer": "15, 30"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "לתיבה בעלת בסיס ריבועי וללא מכסה עליון יש נפח של 32 סמ''ק. מצאו את אורך צלע הבסיס שעבורו שטח הפנים של התיבה הוא מינימלי.&rlm;",
        "options": ["4", "2", "8", "6"],
        "correctAnswer": 0,
        "hint": "נפח התיבה הוא צלע הבסיס בריבוע כפול הגובה. בטאו את הגובה בעזרת הצלע, והציבו בפונקציית שטח הפנים (בסיס ועוד 4 פאות צדדיות).",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משוואת הנפח ונבודד את גובה התיבה באמצעות צלע הבסיס.", "math_expression": "x^{2}h = 32 \\Rightarrow h = \\dfrac{32}{x^{2}}" },
            { "verbal_explanation": "נבנה את פונקציית שטח הפנים. התיבה פתוחה מלמעלה, לכן יש רק בסיס אחד וארבע פאות צדדיות.", "math_expression": "S(x) = x^{2} + 4xh" },
            { "verbal_explanation": "נציב את הביטוי של הגובה לתוך פונקציית השטח ונפשט.", "math_expression": "S(x) = x^{2} + 4x \\times \\dfrac{32}{x^{2}} = x^{2} + \\dfrac{128}{x}" },
            { "verbal_explanation": "נגזור את הפונקציה הרציונלית שהתקבלה.", "math_expression": "S'(x) = 2x - \\dfrac{128}{x^{2}}" },
            { "verbal_explanation": "נשווה לאפס ונכפיל במכנה כדי לפתור את המשוואה.", "math_expression": "2x = \\dfrac{128}{x^{2}} \\Rightarrow 2x^{3} = 128" },
            { "verbal_explanation": "נחלק בשתיים ונוציא שורש שלישי למציאת הממד האופטימלי.", "math_expression": "x^{3} = 64 \\Rightarrow x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "סכום שני מספרים חיוביים הוא 12. מצאו את שני המספרים שעבורם המכפלה של המספר הראשון בריבוע של המספר השני היא מקסימלית.&rlm;",
        "options": ["4, 8", "6, 6", "3, 9", "2, 10"],
        "correctAnswer": 0,
        "hint": "הציבו פונקציה מהצורה x כפול הריבוע של (12 פחות x).",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שני המספרים כאשר סכומם קבוע.", "math_expression": "x \\quad , \\quad 12 - x" },
            { "verbal_explanation": "נרכיב את פונקציית המטרה על סמך הדרישה שניתנה (המספר הראשון כפול השני בריבוע).", "math_expression": "f(x) = x(12 - x)^{2}" },
            { "verbal_explanation": "נפתח את הסוגריים לפי נוסחת כפל מקוצר ואז נכפיל במשתנה שבחוץ.", "math_expression": "f(x) = x(144 - 24x + x^{2}) = x^{3} - 24x^{2} + 144x" },
            { "verbal_explanation": "נגזור את הפולינום.", "math_expression": "f'(x) = 3x^{2} - 48x + 144" },
            { "verbal_explanation": "נשווה לאפס ונחלק בשלוש למען פשטות החישוב.", "math_expression": "x^{2} - 16x + 48 = 0" },
            { "verbal_explanation": "נפרק לגורמים ונבחר בפתרון שנותן מקסימום (ניתן לבדוק על ידי נגזרת שנייה שהיא שלילית ב-4 וחיובית ב-12).", "math_expression": "(x - 12)(x - 4) = 0 \\Rightarrow x = 4" },
            { "verbal_explanation": "המספרים הם הערך שמצאנו והמשלים שלו ל-12.", "math_expression": "x = 4 \\quad , \\quad 12 - 4 = 8" }
        ],
        "final_answer": "4, 8"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "חברת תיירות גובה 200 שקלים לאדם עבור קבוצה של 30 מטיילים. על כל נוסע נוסף שמצטרף לקבוצה, המחיר לכל משתתף (כולל המקוריים) יורד ב-5 שקלים. כמה משתתפים נוספים יביאו להכנסה מקסימלית לחברה?&rlm;",
        "options": ["5", "10", "4", "6"],
        "correctAnswer": 0,
        "hint": "ההכנסה שווה למספר האנשים הכולל כפול המחיר לאדם. בנו משוואה התלויה במספר המצטרפים הנוספים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את המשתנה כמספר המטיילים הנוספים שמצטרפים לקבוצה.", "math_expression": "x" },
            { "verbal_explanation": "נכתוב את הביטוי המייצג את מספר המטיילים הכולל ואת הביטוי למחיר לאדם לאחר ההוזלה.", "math_expression": "P = 30 + x \\quad , \\quad C = 200 - 5x" },
            { "verbal_explanation": "פונקציית ההכנסות היא המכפלה של שני הביטויים הללו.", "math_expression": "R(x) = (30 + x)(200 - 5x)" },
            { "verbal_explanation": "נפתח סוגריים ונסדר כמשוואה ריבועית.", "math_expression": "R(x) = 6000 - 150x + 200x - 5x^{2} = -5x^{2} + 50x + 6000" },
            { "verbal_explanation": "נגזור את פונקציית ההכנסה.", "math_expression": "R'(x) = -10x + 50" },
            { "verbal_explanation": "נשווה לאפס ונמצא את נקודת המקסימום.", "math_expression": "10x = 50 \\Rightarrow x = 5" }
        ],
        "final_answer": "5"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "חוט ברזל שאורכו 40 ס''מ נחתך לשני חלקים, שכל אחד מהם מקופל ליצירת ריבוע. מצאו את אורך צלעות הריבועים כך שסכום שטחי שני הריבועים יהיה מינימלי.&rlm;",
        "options": ["5, 5", "4, 6", "2, 8", "10, 0"],
        "correctAnswer": 0,
        "hint": "צלע ריבוע אחד היא x והשני y. סכום ההיקפים הוא 40. בודדו משתנה אחד, בנו פונקציית סכום שטחים וגזרו.",
        "solution_steps": [
            { "verbal_explanation": "סכום ההיקפים של שני הריבועים שווה לאורך החוט המקורי.", "math_expression": "4x + 4y = 40" },
            { "verbal_explanation": "נחלק בארבע ונבודד את אחת הצלעות.", "math_expression": "x + y = 10 \\Rightarrow y = 10 - x" },
            { "verbal_explanation": "נבנה את פונקציית המטרה שהיא סכום שטחי הריבועים הללו.", "math_expression": "S(x) = x^{2} + (10 - x)^{2}" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את הפולינום.", "math_expression": "S(x) = x^{2} + 100 - 20x + x^{2} = 2x^{2} - 20x + 100" },
            { "verbal_explanation": "נגזור את הפונקציה ונשווה לאפס למציאת מינימום.", "math_expression": "S'(x) = 4x - 20 = 0" },
            { "verbal_explanation": "נחלץ את המשתנה ואת הצלע המשלימה.", "math_expression": "4x = 20 \\Rightarrow x = 5 \\quad , \\quad y = 10 - 5 = 5" }
        ],
        "final_answer": "5, 5"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "פונקציית ההכנסות ממכירת מוצר נתונה על ידי הביטוי \\( 100x - x^{2} \\), ופונקציית העלויות של הייצור היא \\( 20x + 300 \\). מהי הכמות \\( x \\) שיש לייצר כדי למקסם את הרווח הנקי של המפעל?&rlm;",
        "options": ["40", "50", "30", "60"],
        "correctAnswer": 0,
        "hint": "הרווח הנקי שווה להכנסות פחות ההוצאות.",
        "solution_steps": [
            { "verbal_explanation": "נבנה את פונקציית הרווח על ידי חיסור העלויות מתוך ההכנסות הנתונות.", "math_expression": "P(x) = (100x - x^{2}) - (20x + 300)" },
            { "verbal_explanation": "נפתח סוגריים ונקפיד על החלפת הסימנים הנדרשת מפעולת החיסור.", "math_expression": "P(x) = -x^{2} + 100x - 20x - 300" },
            { "verbal_explanation": "נכנס איברים למשוואת רווח תמציתית.", "math_expression": "P(x) = -x^{2} + 80x - 300" },
            { "verbal_explanation": "נגזור את פונקציית הרווח.", "math_expression": "P'(x) = -2x + 80" },
            { "verbal_explanation": "נשווה לאפס ונחלץ את הכמות האופטימלית המביאה לנקודת המקסימום.", "math_expression": "2x = 80 \\Rightarrow x = 40" }
        ],
        "final_answer": "40"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בניית פונקציית המטרה מתוך בעיה מילולית או גיאומטרית",
        "question_text": "היקפו של מלבן הוא קבוע ושווה ל-40 ס''מ. מצאו את אורכי צלעות המלבן שעבורם שטחו של המלבן הוא מקסימלי.&rlm;",
        "options": ["10, 10", "15, 5", "12, 8", "16, 4"],
        "correctAnswer": 0,
        "hint": "סכום צלע ורוחב במלבן שווה למחצית מהיקפו. בנו פונקציית שטח של מכפלתם.",
        "solution_steps": [
            { "verbal_explanation": "היקף מלבן שווה לפעמיים סכום צלעותיו הסמוכות. נחלק בשתיים ונבודד צלע אחת.", "math_expression": "2x + 2y = 40 \\Rightarrow x + y = 20 \\Rightarrow y = 20 - x" },
            { "verbal_explanation": "נבנה את פונקציית השטח המייצגת מכפלת צלעות.", "math_expression": "S(x) = x(20 - x)" },
            { "verbal_explanation": "נפתח סוגריים לקבלת פרבולה הפוכה.", "math_expression": "S(x) = 20x - x^{2}" },
            { "verbal_explanation": "נגזור ונשווה לאפס למציאת נקודת הקיצון.", "math_expression": "S'(x) = 20 - 2x = 0" },
            { "verbal_explanation": "נחלץ את הערך האופטימלי.", "math_expression": "2x = 20 \\Rightarrow x = 10" },
            { "verbal_explanation": "נציב ונראה שהמלבן בעל השטח המקסימלי הוא למעשה ריבוע.", "math_expression": "y = 20 - 10 = 10" }
        ],
        "final_answer": "10, 10"
    },

    // ==========================================
    // תת נושא 2: בעיות קיצון בפולינומים (10 שאלות)
    // ==========================================
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "מלבן חסום בין הפרבולה \\( y = 12 - x^{2} \\) לבין ציר האופקי, כך ששניים מקודקודיו מונחים על ציר האופקי, ושניים מונחים על הפרבולה בצורה סימטרית. מצאו את שיעור ה-\\( x \\) של קודקוד המלבן (הנמצא ברביע הראשון) שעבורו שטח המלבן הוא מקסימלי.&rlm;",
        "options": ["2", "3", "1.5", "4"],
        "correctAnswer": 0,
        "hint": "רוחב המלבן הוא פעמיים x, וגובהו הוא פונקציית הפרבולה.",
        "solution_steps": [
            { "verbal_explanation": "נקבע את ממדי המלבן החסום. רוחבו מתפרש באופן סימטרי סביב ציר האנכי, לכן אורכו הוא פעמיים המשתנה. גובהו נקבע על ידי הפונקציה.", "math_expression": "w = 2x \\quad , \\quad h = 12 - x^{2}" },
            { "verbal_explanation": "נבנה פונקציית שטח מכפלתית.", "math_expression": "S(x) = 2x(12 - x^{2})" },
            { "verbal_explanation": "נפתח סוגריים ליצירת פולינום.", "math_expression": "S(x) = 24x - 2x^{3}" },
            { "verbal_explanation": "נגזור את הפולינום.", "math_expression": "S'(x) = 24 - 6x^{2}" },
            { "verbal_explanation": "נשווה לאפס ונפתור כדי לאתר את המקסימום המקומי.", "math_expression": "6x^{2} = 24 \\Rightarrow x^{2} = 4" },
            { "verbal_explanation": "נוציא שורש. כיוון שמבוקש הקודקוד ברביע הראשון, ניקח את התשובה החיובית.", "math_expression": "x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "משולש ישר זווית נוצר על ידי ראשית הצירים, נקודה על הפרבולה \\( y = -x^{2} + 6x \\) ברביע הראשון, והיטלה של אותה הנקודה על ציר האופקי. מצאו את ה-\\( x \\) שעבורו שטח המשולש הוא מקסימלי.&rlm;",
        "options": ["4", "3", "2", "5"],
        "correctAnswer": 0,
        "hint": "בסיס המשולש הוא x וגובהו הוא משוואת הפרבולה. שטח משולש הוא בסיס כפול גובה חלקי 2.",
        "solution_steps": [
            { "verbal_explanation": "נבנה את פונקציית השטח של המשולש באמצעות הכפלת המשתנה בפונקציה וחלוקה בשתיים.", "math_expression": "S(x) = \\dfrac{x(-x^{2} + 6x)}{2}" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את הפולינום למראה שנוח לגזור.", "math_expression": "S(x) = -0.5x^{3} + 3x^{2}" },
            { "verbal_explanation": "נגזור את הפונקציה המייצגת את השטח.", "math_expression": "S'(x) = -1.5x^{2} + 6x" },
            { "verbal_explanation": "נשווה לאפס כדי למצוא נקודות מינימום ומקסימום.", "math_expression": "-1.5x^{2} + 6x = 0" },
            { "verbal_explanation": "נוציא גורם משותף מחוץ לסוגריים.", "math_expression": "x(-1.5x + 6) = 0" },
            { "verbal_explanation": "נפסול את הפתרון האפסי שאינו יוצר משולש, ונפתור את הסוגריים למציאת ערך הקיצון החיובי.", "math_expression": "1.5x = 6 \\Rightarrow x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "מריבוע קרטון שממדיו 12 על 12 ס''מ חותכים מכל פינה ריבוע שאורך צלעו \\( x \\). לאחר מכן מקפלים את הדפנות ליצירת תיבה פתוחה. מצאו את \\( x \\) שעבורו נפח התיבה יהיה מקסימלי.&rlm;",
        "options": ["2", "3", "4", "1"],
        "correctAnswer": 0,
        "hint": "הבסיס של התיבה יהיה ריבוע שממדיו 12 פחות פעמיים x. הגובה שלה יהיה x.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ממדי הבסיס ואת הגובה של התיבה שתיווצר מן הקיפול.", "math_expression": "w = 12 - 2x \\quad , \\quad h = x" },
            { "verbal_explanation": "נבנה פונקציית נפח על סמך מכפלת שטח הבסיס הריבועי בגובה.", "math_expression": "V(x) = x(12 - 2x)^{2}" },
            { "verbal_explanation": "נפתח את הסוגריים לפי נוסחת כפל מקוצר של ריבוע הפרש.", "math_expression": "V(x) = x(144 - 48x + 4x^{2}) = 4x^{3} - 48x^{2} + 144x" },
            { "verbal_explanation": "נגזור את פונקציית הנפח.", "math_expression": "V'(x) = 12x^{2} - 96x + 144" },
            { "verbal_explanation": "נשווה לאפס ונחלק בשתים עשרה להקלת החישוב.", "math_expression": "x^{2} - 8x + 12 = 0" },
            { "verbal_explanation": "נפתור ונקבל שורשים. הפתרון הגדול מרוקן את בסיס התיבה ולכן נפסל. נבחר בפתרון הקטן.", "math_expression": "(x - 6)(x - 2) = 0 \\Rightarrow x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "לפונקציה \\( f(x) = a x^{3} - b x^{2} \\) יש נקודת קיצון מקומית ב-\\( x = 2 \\) שערכה הוא מינוס 4. מצאו את ערכי הפרמטרים \\( a \\) ו-\\( b \\).&rlm;",
        "options": ["a=1, b=3", "a=2, b=4", "a=3, b=1", "a=1, b=2"],
        "correctAnswer": 0,
        "hint": "זוהי מערכת משוואות: הציבו את הנקודה בפונקציה המקורית, ואת איפוס הנגזרת עבור ערך האופקי הנתון.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה כאשר הפרמטרים הם קבועים.", "math_expression": "f'(x) = 3ax^{2} - 2bx" },
            { "verbal_explanation": "ידוע שבנקודת הקיצון הנגזרת מתאפסת. נציב את הנתונים ונקבל קשר ראשון.", "math_expression": "f'(2) = 12a - 4b = 0 \\Rightarrow b = 3a" },
            { "verbal_explanation": "בנוסף, הנקודה קיימת על הגרף ולכן מקיימת את הפונקציה המקורית.", "math_expression": "f(2) = 8a - 4b = -4" },
            { "verbal_explanation": "נחלק משוואה זו בארבע לפישוט.", "math_expression": "2a - b = -1" },
            { "verbal_explanation": "נציב את הקשר שמצאנו מהנגזרת לתוך המשוואה המקורית המפושטת.", "math_expression": "2a - 3a = -1" },
            { "verbal_explanation": "נחלץ את הפרמטר הראשון.", "math_expression": "-a = -1 \\Rightarrow a = 1" },
            { "verbal_explanation": "נציב חזרה כדי לקבל את הפרמטר השני.", "math_expression": "b = 3 \\times 1 = 3" }
        ],
        "final_answer": "a=1, b=3"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "מלבן חסום בין הפרבולה המוטית מטה \\( y = 4 - x^{2} \\) לבין ציר האופקי, כך ששניים מקודקודיו על הציר והשניים האחרים על הפרבולה. מצאו את \\( x \\) (ברביע הראשון) שעבורו היקף המלבן הוא מקסימלי.&rlm;",
        "options": ["1", "0.5", "1.5", "2"],
        "correctAnswer": 0,
        "hint": "ההיקף הוא סכום צלעות: פעמיים הבסיס (שהוא 2x) ופעמיים הגובה (שהוא משוואת הפרבולה).",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ממדי המלבן החסום. רוחבו הוא פעמיים המרחק ממרכז הציר, וגובהו נקבע על ידי הפונקציה.", "math_expression": "w = 2x \\quad , \\quad h = 4 - x^{2}" },
            { "verbal_explanation": "נבנה פונקציה המתארת את ההיקף: פעמיים הרוחב ועוד פעמיים הגובה.", "math_expression": "P(x) = 2(2x) + 2(4 - x^{2})" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את פונקציית המטרה.", "math_expression": "P(x) = 4x + 8 - 2x^{2}" },
            { "verbal_explanation": "נגזור את הפונקציה לקראת חיפוש המקסימום.", "math_expression": "P'(x) = 4 - 4x" },
            { "verbal_explanation": "נשווה לאפס ונמצא את הערך האופטימלי.", "math_expression": "4 - 4x = 0 \\Rightarrow 4x = 4 \\Rightarrow x = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "ישר שמשוואתו \\( y = -2x + 10 \\) יוצר משולש עם הצירים החיוביים. מלבן חסום במשולש כך שקודקוד אחד שלו בראשית הצירים והקודקוד הנגדי על הישר. מצאו את \\( x \\) הממקסם את שטח המלבן.&rlm;",
        "options": ["2.5", "5", "2", "3"],
        "correctAnswer": 0,
        "hint": "שטח המלבן הוא מכפלת שיעורי הנקודה. בנו פונקציה מסוג x כפול משוואת הישר.",
        "solution_steps": [
            { "verbal_explanation": "שטח המלבן שווה למכפלת ממדיו. הרוחב הוא הערך האופקי, והגובה מוגבל על ידי הישר.", "math_expression": "S(x) = x(-2x + 10)" },
            { "verbal_explanation": "נפתח את הסוגריים.", "math_expression": "S(x) = -2x^{2} + 10x" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "S'(x) = -4x + 10" },
            { "verbal_explanation": "נשווה לאפס כדי לאתר את נקודת המקסימום.", "math_expression": "4x = 10" },
            { "verbal_explanation": "נחלק בארבע ונקבל את התשובה.", "math_expression": "x = 2.5" }
        ],
        "final_answer": "2.5"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "מצאו את שיעור ה-\\( x \\) החיובי של הנקודה על הפרבולה \\( y = x^{2} + 3 \\) שהיא הקרובה ביותר לנקודה \\( (0, 4.5) \\).&rlm;",
        "options": ["1", "1.5", "2", "0.5"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת המרחק. ניתן לחקור את ריבוע המרחק (ללא השורש) כדי לפשט את הגזירה.",
        "solution_steps": [
            { "verbal_explanation": "נכתוב את פונקציית ריבוע המרחק בין הנקודה הנתונה לנקודה כללית על הפרבולה.", "math_expression": "D^{2} = (x - 0)^{2} + (x^{2} + 3 - 4.5)^{2}" },
            { "verbal_explanation": "נפשט את הביטוי בתוך הסוגריים השניים.", "math_expression": "D^{2} = x^{2} + (x^{2} - 1.5)^{2}" },
            { "verbal_explanation": "נפתח את ריבוע ההפרש.", "math_expression": "D^{2} = x^{2} + x^{4} - 3x^{2} + 2.25" },
            { "verbal_explanation": "נכנס איברים למשוואת פולינום סופית.", "math_expression": "D^{2} = x^{4} - 2x^{2} + 2.25" },
            { "verbal_explanation": "נגזור את פונקציית המרחק המרובעת.", "math_expression": "(D^{2})' = 4x^{3} - 4x" },
            { "verbal_explanation": "נשווה לאפס, נוציא גורם משותף, ונחלץ את השורש החיובי כנדרש.", "math_expression": "4x(x^{2} - 1) = 0 \\Rightarrow x = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "טרפז מונח כך שבסיסו הגדול מתלכד עם קטע על ציר האופקי בין \\( x = 0 \\) ל-\\( x = 6 \\), ושני קודקודיו האחרים מונחים על הפרבולה \\( y = 6x - x^{2} \\). מצאו את \\( x \\) של הקודקוד השמאלי העליון שעבורו שטח הטרפז מקסימלי.&rlm;",
        "options": ["2", "1", "3", "1.5"],
        "correctAnswer": 0,
        "hint": "הבסיס התחתון הוא 6. הבסיס העליון נמדד בין x ל- (6 פחות x). הגובה הוא משוואת הפרבולה.",
        "solution_steps": [
            { "verbal_explanation": "נקבע את אורך הבסיס התחתון, שקבוע לפי נקודות החיתוך של הפרבולה.", "math_expression": "B_{1} = 6" },
            { "verbal_explanation": "בסיסו העליון של הטרפז שווה למרחק האופקי שבין שתי הנקודות על הפרבולה.", "math_expression": "B_{2} = (6 - x) - x = 6 - 2x" },
            { "verbal_explanation": "גובה הטרפז הוא ערך הפונקציה בנקודה.", "math_expression": "h = 6x - x^{2}" },
            { "verbal_explanation": "נבנה פונקציית שטח לפי מחצית סכום הבסיסים כפול הגובה.", "math_expression": "S(x) = \\dfrac{6 + 6 - 2x}{2} \\times (6x - x^{2}) = (6 - x)(6x - x^{2})" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את הפולינום.", "math_expression": "S(x) = 36x - 6x^{2} - 6x^{2} + x^{3} = x^{3} - 12x^{2} + 36x" },
            { "verbal_explanation": "נגזור ונשווה לאפס.", "math_expression": "S'(x) = 3x^{2} - 24x + 36 = 0" },
            { "verbal_explanation": "נחלק בשלוש ונקבל משוואה ריבועית פשוטה שפתרונה הקטן תואם למיקום השמאלי.", "math_expression": "x^{2} - 8x + 12 = 0 \\Rightarrow (x - 2)(x - 6) = 0 \\Rightarrow x = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "בתיבה בעלת בסיס ריבועי, סכום כל 12 המקצועות שלה הוא 48 ס''מ. מצאו את אורך צלע הבסיס המביא לנפח מקסימלי.&rlm;",
        "options": ["4", "2", "6", "3"],
        "correctAnswer": 0,
        "hint": "ישנם 8 מקצועות של בסיסים ו-4 מקצועות של גובה. בודדו את הגובה ובנו פונקציית נפח.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואה המבטאת את סכום כל מקצועות התיבה (בסיס כפול ארבע, למעלה ולמטה, פלוס ארבעה עמודים גובה).", "math_expression": "8x + 4h = 48" },
            { "verbal_explanation": "נחלק בארבע ונבודד את הגובה לשם הצבה עתידית.", "math_expression": "2x + h = 12 \\Rightarrow h = 12 - 2x" },
            { "verbal_explanation": "נרכיב פונקציית נפח המבוססת על ריבוע צלע הבסיס כפול הגובה.", "math_expression": "V(x) = x^{2}(12 - 2x)" },
            { "verbal_explanation": "נפתח סוגריים לקבלת הפולינום.", "math_expression": "V(x) = 12x^{2} - 2x^{3}" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "V'(x) = 24x - 6x^{2}" },
            { "verbal_explanation": "נשווה לאפס, נוציא גורם משותף, ונחלץ את הממד החיובי המספק את הדרישה.", "math_expression": "6x(4 - x) = 0 \\Rightarrow x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בפולינומים",
        "question_text": "מצאו את שיעור ה-\\( x \\) שבו למשיק של גרף הפונקציה \\( y = x^{3} - 3x \\) יש את השיפוע המינימלי ביותר.&rlm;",
        "options": ["0", "1", "-1", "3"],
        "correctAnswer": 0,
        "hint": "שיפוע המשיק הוא הנגזרת הראשונה. כדי למצוא את המינימום של הנגזרת, גזרו אותה שוב (נגזרת שנייה) והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "פונקציית המטרה שלנו במקרה זה היא השיפוע עצמו. לכן, נמצא את הנגזרת הראשונה שתהווה את הפונקציה לחקירה.", "math_expression": "m(x) = y' = 3x^{2} - 3" },
            { "verbal_explanation": "כדי למצוא את נקודת המינימום של פונקציית השיפוע, נגזור אותה, כלומר נבצע למעשה נגזרת שנייה לפונקציה המקורית.", "math_expression": "m'(x) = 6x" },
            { "verbal_explanation": "נשווה את הנגזרת של השיפוע לאפס.", "math_expression": "6x = 0" },
            { "verbal_explanation": "נחלץ את הערך הנדרש.", "math_expression": "x = 0" }
        ],
        "final_answer": "0"
    },

    // ==========================================
    // תת נושא 3: בעיות קיצון בשברים (רציונליות) (10 שאלות)
    // ==========================================
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "מצאו את המספר החיובי \\( x \\) שעבורו הסכום שלו ושל ההופכי שלו המוכפל ב-16, כלומר הביטוי \\( x + \\dfrac{16}{x} \\), הוא מינימלי.&rlm;",
        "options": ["4", "2", "8", "16"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה (הנגזרת של שבר יסודי היא מינוס המונה חלקי המכנה בריבוע) והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נבנה את הפונקציה על פי התיאור השאלה.", "math_expression": "f(x) = x + \\dfrac{16}{x}" },
            { "verbal_explanation": "נגזור את הפונקציה. הנגזרת של איבר פשוט היא אחד, והנגזרת של מספר חלקי משתנה הופכת לשלילית עם מכנה ריבועי.", "math_expression": "f'(x) = 1 - \\dfrac{16}{x^{2}}" },
            { "verbal_explanation": "נשווה לאפס על מנת למצוא נקודות קיצון.", "math_expression": "1 - \\dfrac{16}{x^{2}} = 0" },
            { "verbal_explanation": "נעביר אגף ונכפול במכנה המשותף.", "math_expression": "x^{2} = 16" },
            { "verbal_explanation": "נוציא שורש ריבועי. מאחר והגדרנו מספר חיובי, ניקח רק את התוצאה הרלוונטית.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "מצאו את שיעור ה-\\( x \\) החיובי של הנקודה על הפונקציה הרציונלית \\( y = \\dfrac{16}{x} \\) שהיא הקרובה ביותר לראשית הצירים.&rlm;",
        "options": ["4", "2", "8", "16"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת ריבוע המרחק. הנגזרת תכיל חזקה שלילית שאותה תשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נבנה פונקציית מטרה המייצגת את ריבוע המרחק מראשית הצירים על בסיס משפט פיתגורס.", "math_expression": "D^{2} = x^{2} + (\\dfrac{16}{x})^{2}" },
            { "verbal_explanation": "נפשט את חזקת השבר.", "math_expression": "D^{2} = x^{2} + \\dfrac{256}{x^{2}}" },
            { "verbal_explanation": "נגזור את הפונקציה שהרכבנו למציאת נקודת הקיצון הממזערת מרחק.", "math_expression": "(D^{2})' = 2x - \\dfrac{512}{x^{3}}" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס.", "math_expression": "2x - \\dfrac{512}{x^{3}} = 0" },
            { "verbal_explanation": "נעביר אגף ונכפיל במכנה כדי לחלץ את החזקה.", "math_expression": "2x^{4} = 512 \\Rightarrow x^{4} = 256" },
            { "verbal_explanation": "נוציא שורש רביעי למציאת הערך החיובי כפי שהוגדר.", "math_expression": "x = 4" }
        ],
        "final_answer": "4"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "נתונה הפונקציה הרציונלית \\( y = \\dfrac{x^{2} + 9}{x} \\) עבור ערכי \\( x \\) חיוביים. מצאו את הנקודה שבה הפונקציה מקבלת את ערכה המינימלי.&rlm;",
        "options": ["3", "9", "1", "4.5"],
        "correctAnswer": 0,
        "hint": "אפשר לפצל את השבר לשני ביטויים פשוטים ולגזור אותם בקלות.",
        "solution_steps": [
            { "verbal_explanation": "לפני הגזירה, כדאי לפצל את השבר לשני איברים נפרדים להקלת העבודה.", "math_expression": "y = \\dfrac{x^{2}}{x} + \\dfrac{9}{x} = x + \\dfrac{9}{x}" },
            { "verbal_explanation": "כעת נגזור את הפונקציה המפושטת.", "math_expression": "y' = 1 - \\dfrac{9}{x^{2}}" },
            { "verbal_explanation": "נשווה לאפס למציאת מינימום מקומי.", "math_expression": "1 - \\dfrac{9}{x^{2}} = 0" },
            { "verbal_explanation": "נכפיל במכנה ונעביר אגפים.", "math_expression": "x^{2} = 9" },
            { "verbal_explanation": "בתחום ההגדרה הנתון, קיים שורש אחד רלוונטי בלבד.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "קופסה פתוחה מלמעלה ובעלת בסיס ריבועי צריכה להכיל נפח של 500 סמ''ק. מצאו את אורך צלע הבסיס שממזער את שטח הפנים של הקופסה.&rlm;",
        "options": ["10", "5", "20", "25"],
        "correctAnswer": 0,
        "hint": "חלצו את הגובה מתוך הנפח, והציבו אותו בפונקציית שטח הפנים (בסיס ועוד ארבע דפנות צדדיות).",
        "solution_steps": [
            { "verbal_explanation": "על בסיס נתון הנפח, נבטא את הגובה של הקופסה באמצעות צלע הבסיס שלה.", "math_expression": "x^{2}h = 500 \\Rightarrow h = \\dfrac{500}{x^{2}}" },
            { "verbal_explanation": "נגדיר את פונקציית המטרה כשטח הפנים הנדרש. הקופסה פתוחה לכן יש רק בסיס אחד.", "math_expression": "S(x) = x^{2} + 4xh" },
            { "verbal_explanation": "נציב את הגובה שיצרנו ונקבל פונקציה רציונלית בעלת משתנה אחד.", "math_expression": "S(x) = x^{2} + 4x(\\dfrac{500}{x^{2}}) = x^{2} + \\dfrac{2000}{x}" },
            { "verbal_explanation": "נגזור את פונקציית השטח ונשווה לאפס למציאת קיצון.", "math_expression": "S'(x) = 2x - \\dfrac{2000}{x^{2}} = 0" },
            { "verbal_explanation": "נעביר אגף, נכפול במכנה, ונחלק את המקדם.", "math_expression": "2x^{3} = 2000 \\Rightarrow x^{3} = 1000" },
            { "verbal_explanation": "נוציא שורש שלישי לקבלת הצלע האופטימלית.", "math_expression": "x = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "נתונה הפונקציה \\( y = \\dfrac{x^{2} - 4x + 5}{x - 2} \\) בתחום שבו \\( x > 2 \\). מצאו את שיעור ה-\\( x \\) של נקודת המינימום שלה.&rlm;",
        "options": ["3", "1", "4", "2.5"],
        "correctAnswer": 0,
        "hint": "גזרו על ידי כלל המנה, והשוו את מונה הנגזרת לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה לפי הכללים הרשמיים לגזירת מנה.", "math_expression": "y' = \\dfrac{(2x - 4)(x - 2) - (x^{2} - 4x + 5) \\times 1}{(x - 2)^{2}}" },
            { "verbal_explanation": "נפתח סוגריים במונה כדי לסדר אותו בצורת פולינום רגיל.", "math_expression": "Num = 2x^{2} - 4x - 4x + 8 - x^{2} + 4x - 5" },
            { "verbal_explanation": "נכנס איברים דומים בחלק העליון.", "math_expression": "Num = x^{2} - 4x + 3" },
            { "verbal_explanation": "נשווה לאפס את המונה לקבלת נקודות קריטיות.", "math_expression": "x^{2} - 4x + 3 = 0" },
            { "verbal_explanation": "נמצא את השורשים באמצעות טרינום.", "math_expression": "(x - 3)(x - 1) = 0 \\Rightarrow x = 3 , x = 1" },
            { "verbal_explanation": "התחום הנדרש מחייב ערכים הגדולים משתיים, ולכן נבחר אך ורק בשורש הרלוונטי.", "math_expression": "x = 3" }
        ],
        "final_answer": "3"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "שטח ההדפסה הנדרש בעמוד ספר הוא 150 סמ''ר. השוליים העליונים והתחתונים של הדף הם בני 3 ס''מ כל אחד, והשוליים בצדדים הם בני 2 ס''מ כל אחד. מצאו את רוחב ההדפסה הפנימי (נסמן ב-\\( x \\)) המביא לשטח דף כולל מינימלי.&rlm;",
        "options": ["10", "15", "12", "8"],
        "correctAnswer": 0,
        "hint": "אורך הדף כולו הוא y פלוס 6. רוחב הדף כולו הוא x פלוס 4. השתמשו בקשר שבין x ל-y ובנו פונקציית שטח.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הקשר בין ממדי שטח ההדפסה בתוך הדף.", "math_expression": "x \\times y = 150 \\Rightarrow y = \\dfrac{150}{x}" },
            { "verbal_explanation": "נבנה את פונקציית השטח הכולל של הנייר הכוללת את תוספות השוליים מכל הכיוונים.", "math_expression": "S(x) = (x + 4)(y + 6)" },
            { "verbal_explanation": "נציב את הביטוי עבור המשתנה השני כדי לקבל פונקציה עם נעלם אחד.", "math_expression": "S(x) = (x + 4)(\\dfrac{150}{x} + 6)" },
            { "verbal_explanation": "נפתח סוגריים ונסדר למראה של פונקציה רציונלית פשוטה.", "math_expression": "S(x) = 150 + 6x + \\dfrac{600}{x} + 24 = 174 + 6x + \\dfrac{600}{x}" },
            { "verbal_explanation": "נגזור את הפונקציה ונשווה לאפס.", "math_expression": "S'(x) = 6 - \\dfrac{600}{x^{2}} = 0" },
            { "verbal_explanation": "נכפול במכנה, נעביר אגפים ונמצא את השורש האופטימלי לרוחב ההדפסה.", "math_expression": "6x^{2} = 600 \\Rightarrow x^{2} = 100 \\Rightarrow x = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "נתונה הפונקציה \\( y = \\dfrac{2x}{x^{2} + 1} \\). מצאו את הערך המקסימלי (הגובה המקסימלי) של הפונקציה.&rlm;",
        "options": ["1", "2", "0.5", "0"],
        "correctAnswer": 0,
        "hint": "גזרו לפי כלל המנה, השוו לאפס, ולאחר מציאת ה-x הציבו חזרה למציאת הגובה.",
        "solution_steps": [
            { "verbal_explanation": "נבצע גזירה בעזרת כלל המנה כדי לאתר את נקודת המקסימום.", "math_expression": "y' = \\dfrac{2(x^{2} + 1) - 2x(2x)}{(x^{2} + 1)^{2}}" },
            { "verbal_explanation": "נפשט את המונה לביטוי ריבועי מצומצם.", "math_expression": "y' = \\dfrac{2x^{2} + 2 - 4x^{2}}{(x^{2} + 1)^{2}} = \\dfrac{2 - 2x^{2}}{(x^{2} + 1)^{2}}" },
            { "verbal_explanation": "נשווה את המונה של הנגזרת לאפס למציאת הנקודות הקריטיות.", "math_expression": "2 - 2x^{2} = 0 \\Rightarrow 2x^{2} = 2 \\Rightarrow x^{2} = 1" },
            { "verbal_explanation": "נחלץ את שני הפתרונות ונבחר לבדוק את החיובי (יוצר את הערך הגבוה עבור פונקציה מסוג זה).", "math_expression": "x = 1" },
            { "verbal_explanation": "נציב את הנקודה בפונקציה המקורית לקבלת הגובה.", "math_expression": "y(1) = \\dfrac{2 \\times 1}{1^{2} + 1} = \\dfrac{2}{2}" },
            { "verbal_explanation": "נקבל את הערך הסופי והמרבי של הפונקציה.", "math_expression": "y = 1" }
        ],
        "final_answer": "1"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "פונקציית עלות ההפעלה השעתית של מנוע נתונה על ידי הנוסחה \\( C(v) = \\dfrac{100000}{v} + 1000v \\), כאשר \\( v \\) היא מהירות ההפעלה. מצאו את המהירות \\( v \\) הממזערת את העלות הכוללת.&rlm;",
        "options": ["10", "100", "50", "20"],
        "correctAnswer": 0,
        "hint": "הפונקציה כבר בנויה עבורכם. כל שעליכם לעשות הוא לגזור (זהירות עם החזקה השלילית) ולהשוות לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את פונקציית המטרה, תוך התייחסות לשבר כמעריך שלילי ולמקדם הרגיל בנפרד.", "math_expression": "C'(v) = -\\dfrac{100000}{v^{2}} + 1000" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס על מנת לאתר נקודת קיצון.", "math_expression": "-\\dfrac{100000}{v^{2}} + 1000 = 0" },
            { "verbal_explanation": "נעביר אגף כדי לעבוד עם ערכים חיוביים.", "math_expression": "1000 = \\dfrac{100000}{v^{2}}" },
            { "verbal_explanation": "נבצע כפל בהצלבה ונחלק באלף כדי לבודד את המשתנה הריבועי.", "math_expression": "1000v^{2} = 100000 \\Rightarrow v^{2} = 100" },
            { "verbal_explanation": "נוציא שורש כדי למצוא את המהירות האופטימלית החיובית.", "math_expression": "v = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "סכום שני מספרים חיוביים הוא 20. מצאו את המספר הראשון \\( x \\) שממזער את סכום ההופכיים שלהם (כלומר, את תוצאת החיבור של אחד חלקי המספר הראשון ועוד אחד חלקי השני).&rlm;",
        "options": ["10", "5", "15", "8"],
        "correctAnswer": 0,
        "hint": "בנו פונקציה מהצורה 1 חלקי x פלוס 1 חלקי (20 מינוס x). השוו נגזרת לאפס ופתרו על ידי מכנה משותף ריבועי.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את הפונקציה שמייצגת את סכום ההופכיים.", "math_expression": "f(x) = \\dfrac{1}{x} + \\dfrac{1}{20 - x}" },
            { "verbal_explanation": "נבצע גזירה תוך שימוש בכללי המנה והשרשרת. באיבר השני נוצר כפל במינוס אחת (נגזרת פנימית) המבטל את המינוס של השבר.", "math_expression": "f'(x) = -\\dfrac{1}{x^{2}} + \\dfrac{1}{(20 - x)^{2}}" },
            { "verbal_explanation": "נשווה לאפס ונשווה בין שני האיברים.", "math_expression": "\\dfrac{1}{x^{2}} = \\dfrac{1}{(20 - x)^{2}}" },
            { "verbal_explanation": "כיוון ששני המונים שווים לאחת, נשווה ישירות את המכנים.", "math_expression": "x^{2} = (20 - x)^{2}" },
            { "verbal_explanation": "נוציא שורש. היות ואנו מחפשים מספרים חיוביים, נשווה את הביטויים כמות שהם.", "math_expression": "x = 20 - x" },
            { "verbal_explanation": "נעביר אגפים ונמצא את המספר.", "math_expression": "2x = 20 \\Rightarrow x = 10" }
        ],
        "final_answer": "10"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בשברים (רציונליות)",
        "question_text": "לפונקציה הרציונלית \\( y = \\dfrac{x^{2} + a}{x - 1} \\) יש נקודת מינימום בנקודה שבה \\( x = 3 \\). מצאו את ערכו של הפרמטר \\( a \\).&rlm;",
        "options": ["3", "1", "9", "5"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה והציבו 3 במקום המשתנה x. השוו את התוצאה לאפס כדי למצוא את הפרמטר המספרי.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את פונקציית המנה, כשהפרמטר נחשב למספר קבוע שנגזרתו מתאפסת.", "math_expression": "y' = \\dfrac{2x(x - 1) - (x^{2} + a) \\times 1}{(x - 1)^{2}}" },
            { "verbal_explanation": "נפשט את המונה של פונקציית השיפוע שקיבלנו.", "math_expression": "y' = \\dfrac{2x^{2} - 2x - x^{2} - a}{(x - 1)^{2}} = \\dfrac{x^{2} - 2x - a}{(x - 1)^{2}}" },
            { "verbal_explanation": "ידוע שבנקודת הקיצון הנתונה השיפוע מתאפס. לכן, המונה חייב להיות שווה לאפס בנקודה זו.", "math_expression": "x^{2} - 2x - a = 0" },
            { "verbal_explanation": "נציב את הערך הידוע של נקודת המינימום למשוואה שיצרנו.", "math_expression": "3^{2} - 2 \\times 3 - a = 0" },
            { "verbal_explanation": "נחשב את הערכים המספריים.", "math_expression": "9 - 6 - a = 0" },
            { "verbal_explanation": "נעביר את הפרמטר הצידה ונקבל את גודלו המדויק.", "math_expression": "3 - a = 0 \\Rightarrow a = 3" }
        ],
        "final_answer": "3"
    },

    // ==========================================
    // תת נושא 4: בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים) (10 שאלות)
    // ==========================================
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "נתונה הפונקציה \\( y = \\sqrt{x} \\). מצאו את שיעור ה-\\( x \\) של הנקודה על הגרף שהיא הקרובה ביותר לנקודה הקבועה במרחב \\( (2, 0) \\).&rlm;",
        "options": ["1.5", "2", "1", "0.5"],
        "correctAnswer": 0,
        "hint": "המרחק בריבוע הוא פולינום. נוח יותר למזער את ריבוע המרחק מאשר לגזור פונקציית שורש מורכבת.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר פונקציה המייצגת את ריבוע המרחק בין נקודה כללית על הגרף לנקודה הנתונה באמצעות נוסחת המרחק.", "math_expression": "D^{2} = (x - 2)^{2} + (\\sqrt{x} - 0)^{2}" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את הפולינום שהתקבל ללא השורשים.", "math_expression": "D^{2} = x^{2} - 4x + 4 + x" },
            { "verbal_explanation": "נכנס איברים דומים לקבלת פונקציית מטרה פשוטה למרחק.", "math_expression": "f(x) = x^{2} - 3x + 4" },
            { "verbal_explanation": "נגזור את הפונקציה המפושטת ונשווה אותה לאפס למציאת מינימום מוחלט.", "math_expression": "f'(x) = 2x - 3 = 0" },
            { "verbal_explanation": "נחלץ את המשתנה ומצאנו את הנקודה הקרובה ביותר.", "math_expression": "2x = 3 \\Rightarrow x = 1.5" }
        ],
        "final_answer": "1.5"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "מלבן חסום בתוך מעגל שרדיוסו 5 ס''מ (כך שכל קודקודיו מונחים על המעגל ומרכזו מתלכד עם מרכז המעגל). מצאו את השטח המקסימלי האפשרי של המלבן.&rlm;",
        "options": ["50", "25", "100", "75"],
        "correctAnswer": 0,
        "hint": "רבע מהמלבן נמצא ברביע הראשון, והקודקוד שלו (x,y) מקיים את משוואת המעגל x²+y²=25. שטח המלבן הכולל הוא 4xy.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש במשוואת המעגל כדי לבטא את הגובה של קודקוד המלבן באמצעות מיקומו האופקי.", "math_expression": "x^{2} + y^{2} = 25 \\Rightarrow y = \\sqrt{25 - x^{2}}" },
            { "verbal_explanation": "נרכיב את פונקציית השטח המלאה. המלבן מתפרש על כל ארבעת הרביעים בצורה סימטרית.", "math_expression": "S(x) = 2x \\times 2y = 4x\\sqrt{25 - x^{2}}" },
            { "verbal_explanation": "כדי לעקוף גזירת שורש, נמקסם את ריבוע השטח (פעולה שקולה מתמטית). להכנסת הגורם לתוך השורש הוא יעלה בריבוע.", "math_expression": "S^{2} = 16x^{2}(25 - x^{2}) = 400x^{2} - 16x^{4}" },
            { "verbal_explanation": "נגזור את פונקציית הריבוע של השטח.", "math_expression": "(S^{2})' = 800x - 64x^{3}" },
            { "verbal_explanation": "נשווה לאפס ונחלץ את נקודת המקסימום החיובית.", "math_expression": "64x^{3} = 800x \\Rightarrow x^{2} = 12.5" },
            { "verbal_explanation": "נציב את הערך שקיבלנו ישירות לתוך הפונקציה של ריבוע השטח כדי למצוא אותו.", "math_expression": "S^{2} = 400(12.5) - 16(12.5)^{2} = 5000 - 2500 = 2500" },
            { "verbal_explanation": "נוציא שורש כדי לחזור לשטח הרגיל, וזוהי התוצאה.", "math_expression": "S = \\sqrt{2500} = 50" }
        ],
        "final_answer": "50"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "נתונות הנקודות הקבועות A(0, 8) ו-B(6, 0). מעבירים ישר המחבר ביניהן. הנקודה P נמצאת על הקטע AB, ומורידים ממנה אנכים לצירים ליצירת מלבן. מצאו את השטח המקסימלי של המלבן שקודקודיו הם ראשית הצירים, הנקודה P, והיטליה על הצירים.&rlm;",
        "options": ["12", "16", "24", "10"],
        "correctAnswer": 0,
        "hint": "מצאו קודם את משוואת הישר AB המחבר את שתי הנקודות. הנקודה P נמצאת עליו ולכן מקיימת את משוואתו.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שיפוע הישר שעליו מונחת הנקודה.", "math_expression": "m = \\dfrac{8 - 0}{0 - 6} = -\\dfrac{4}{3}" },
            { "verbal_explanation": "נרכיב את משוואת הישר הכוללת את נקודת החיתוך עם הציר האנכי הנתונה לנו מראש.", "math_expression": "y = -\\dfrac{4}{3}x + 8" },
            { "verbal_explanation": "נבנה פונקציית שטח של מלבן - מכפלה של הממדים.", "math_expression": "S(x) = x \\times y = x(-\\dfrac{4}{3}x + 8)" },
            { "verbal_explanation": "נפתח סוגריים ליצירת פרבולה בעלת מקסימום.", "math_expression": "S(x) = -\\dfrac{4}{3}x^{2} + 8x" },
            { "verbal_explanation": "נגזור ונשווה לאפס למציאת הנקודה האידיאלית.", "math_expression": "S'(x) = -\\dfrac{8}{3}x + 8 = 0 \\Rightarrow \\dfrac{8}{3}x = 8 \\Rightarrow x = 3" },
            { "verbal_explanation": "נציב את הערך במשוואת הפונקציה לקבלת השטח המרבי.", "math_expression": "S(3) = -\\dfrac{4}{3}(3^{2}) + 8 \\times 3 = -12 + 24 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "במשולש ישר זווית, אורך היתר הוא קבוע ושווה ל-10 ס''מ. מצאו את השטח המקסימלי האפשרי של משולש זה.&rlm;",
        "options": ["25", "50", "20", "30"],
        "correctAnswer": 0,
        "hint": "הגדירו ניצב אחד כ-x, והביעו את הניצב השני בעזרתו דרך משפט פיתגורס. מקסמו את השטח.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש במשפט פיתגורס כדי לבטא את הניצב השני כתלות בראשון וביתר הקבוע.", "math_expression": "x^{2} + y^{2} = 100 \\Rightarrow y = \\sqrt{100 - x^{2}}" },
            { "verbal_explanation": "נרכיב פונקציית שטח למשולש - מחצית מכפלת הניצבים.", "math_expression": "S(x) = \\dfrac{1}{2} x \\sqrt{100 - x^{2}}" },
            { "verbal_explanation": "כדי למנוע גזירה סבוכה, נמקסם את ריבוע השטח. הרבע נותר קבוע ולכן לא משפיע על מיקום הקיצון, נמקסם רק את הפונקציה הפנימית.", "math_expression": "f(x) = x^{2}(100 - x^{2}) = 100x^{2} - x^{4}" },
            { "verbal_explanation": "נגזור את הפולינום שיצרנו ונשווה לאפס.", "math_expression": "f'(x) = 200x - 4x^{3} = 0" },
            { "verbal_explanation": "נחלץ את הפתרון החיובי האפשרי.", "math_expression": "4x^{3} = 200x \\Rightarrow x^{2} = 50" },
            { "verbal_explanation": "נציב חזרה לפונקציית השטח המקורית (מועלית בריבוע לשם פשטות) ונוציא שורש.", "math_expression": "S^{2} = \\dfrac{1}{4} \\times 50(100 - 50) = \\dfrac{2500}{4} = 625" },
            { "verbal_explanation": "שורש התוצאה נותן את השטח האופטימלי.", "math_expression": "S = 25" }
        ],
        "final_answer": "25"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "משולש חסום בין הישר \\( y = -2x + 6 \\) לבין הצירים החיוביים במערכת צירים. מלבן חסום במשולש כך שקודקוד אחד שלו מונח בראשית הצירים והקודקוד הנגדי לו נוגע בדיוק בישר הנתון. מהו השטח המקסימלי האפשרי של מלבן זה?&rlm;",
        "options": ["4.5", "9", "6", "3"],
        "correctAnswer": 0,
        "hint": "הקודקוד שעל הישר מגדיר את ממדי המלבן. הרוחב הוא ה-x והגובה הוא משוואת הישר.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את שטח המלבן כמכפלת קואורדינטות הנקודה עליה הוא נשען על הישר.", "math_expression": "S(x) = x \\times y = x(-2x + 6)" },
            { "verbal_explanation": "נפתח סוגריים לקבלת פרבולה הפוכה קלה לעבודה.", "math_expression": "S(x) = -2x^{2} + 6x" },
            { "verbal_explanation": "נגזור את הפונקציה לקראת מציאת הקודקוד.", "math_expression": "S'(x) = -4x + 6" },
            { "verbal_explanation": "נשווה לאפס ונמצא את הערך של שיעור האופקי של הנקודה המיטבית.", "math_expression": "4x = 6 \\Rightarrow x = 1.5" },
            { "verbal_explanation": "נציב את הערך בחזרה לפונקציית השטח כדי לחשב אותו במלואו.", "math_expression": "S(1.5) = -2(1.5^{2}) + 6(1.5) = -2(2.25) + 9 = -4.5 + 9 = 4.5" }
        ],
        "final_answer": "4.5"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "ישר העובר דרך הנקודה הקבועה \\( (2, 3) \\) יוצר יחד עם הצירים החיוביים משולש ישר זווית. מצאו את השטח המינימלי האפשרי של משולש זה.&rlm;",
        "options": ["12", "10", "6", "15"],
        "correctAnswer": 0,
        "hint": "משוואת ישר כללית: y - 3 = m(x - 2). מצאו את נקודות החיתוך עם הצירים (הבסיס והגובה) כפונקציה של השיפוע השלילי m.",
        "solution_steps": [
            { "verbal_explanation": "נבנה את משוואת הישר הכללית על בסיס הנקודה הנתונה.", "math_expression": "y - 3 = m(x - 2) \\Rightarrow y = mx - 2m + 3" },
            { "verbal_explanation": "נמצא את החיתוך עם ציר האנכי, המהווה את גובה המשולש.", "math_expression": "H = 3 - 2m" },
            { "verbal_explanation": "נמצא את החיתוך עם ציר האופקי, המהווה את בסיס המשולש (הישר חותך צירים חיוביים ולכן שיפועו חייב להיות שלילי).", "math_expression": "mx = 2m - 3 \\Rightarrow B = 2 - \\dfrac{3}{m}" },
            { "verbal_explanation": "נרכיב פונקציית שטח למשולש התלויה בשיפוע.", "math_expression": "S(m) = \\dfrac{1}{2} (2 - \\dfrac{3}{m}) (3 - 2m)" },
            { "verbal_explanation": "נפתח סוגריים ונסדר את הביטוי.", "math_expression": "S(m) = \\dfrac{1}{2} (6 - 4m - \\dfrac{9}{m} + 6) = 6 - 2m - \\dfrac{4.5}{m}" },
            { "verbal_explanation": "נגזור לפי השיפוע ונשווה לאפס כדי למצוא את המינימום.", "math_expression": "S'(m) = -2 + \\dfrac{4.5}{m^{2}} = 0 \\Rightarrow 2m^{2} = 4.5 \\Rightarrow m^{2} = 2.25 \\Rightarrow m = -1.5" },
            { "verbal_explanation": "נציב את השיפוע שמצאנו בחזרה לפונקציית השטח.", "math_expression": "S(-1.5) = 6 - 2(-1.5) - \\dfrac{4.5}{-1.5} = 6 + 3 + 3 = 12" }
        ],
        "final_answer": "12"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "מצאו את שיעור ה-\\( x \\) החיובי של הנקודה על הפרבולה \\( y = x^{2} \\) אשר מרחקה מהישר \\( y = x - 1 \\) הוא המינימלי ביותר.&rlm;",
        "options": ["0.5", "1", "2", "0.25"],
        "correctAnswer": 0,
        "hint": "המרחק מינימלי כאשר המשיק לפרבולה בנקודה זו מקביל לישר הנתון.",
        "solution_steps": [
            { "verbal_explanation": "המרחק יהיה הקצר ביותר כאשר המשיק עקמומי לפרבולה מקביל לחלוטין לישר שאנו מודדים אליו.", "math_expression": "m_{tangent} = m_{line}" },
            { "verbal_explanation": "שיפוע הישר הנתון הוא המקדם של המשתנה שלו.", "math_expression": "m = 1" },
            { "verbal_explanation": "נגזור את הפרבולה כדי לקבל את משוואת השיפועים שלה.", "math_expression": "y' = 2x" },
            { "verbal_explanation": "נשווה בין פונקציית השיפועים לשיפוע היעד שמצאנו.", "math_expression": "2x = 1" },
            { "verbal_explanation": "נחלץ את הערך האופקי של הנקודה המבוקשת.", "math_expression": "x = 0.5" }
        ],
        "final_answer": "0.5"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "נתון משולש אשר סכום אורכי בסיסו והגובה היורד אל אותו הבסיס הוא קבוע ושווה ל-12 ס''מ. מצאו את השטח המקסימלי האפשרי של משולש זה.&rlm;",
        "options": ["18", "36", "24", "12"],
        "correctAnswer": 0,
        "hint": "הגדירו את הבסיס כמשתנה. בטאו את הגובה דרך הקשר ביניהם והרכיבו פונקציית שטח.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר שניתן כמשוואה וממנה נבודד את הגובה.", "math_expression": "a + h = 12 \\Rightarrow h = 12 - a" },
            { "verbal_explanation": "נרכיב פונקציה לשטח המשולש, המבוססת על מכפלת בסיס וגובה מחולקת בשתיים.", "math_expression": "S(a) = \\dfrac{a(12 - a)}{2}" },
            { "verbal_explanation": "נפתח סוגריים ונפשט.", "math_expression": "S(a) = \\dfrac{12a - a^{2}}{2} = 6a - 0.5a^{2}" },
            { "verbal_explanation": "נגזור את הפונקציה ליצירת כלי לחקירת הקיצון.", "math_expression": "S'(a) = 6 - a" },
            { "verbal_explanation": "נשווה לאפס כדי לחלץ את אורך הבסיס האידיאלי.", "math_expression": "6 - a = 0 \\Rightarrow a = 6" },
            { "verbal_explanation": "נציב את הערך שגילינו לתוך פונקציית השטח לקבלת הערך המרבי.", "math_expression": "S(6) = 6 \\times 6 - 0.5 \\times 6^{2} = 36 - 18 = 18" }
        ],
        "final_answer": "18"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "לגרף הפרבולה \\( y = x^{2} \\) מעבירים משיק בנקודה שבה \\( x = k \\) (כאשר \\( k \\) הוא מספר חיובי). המשיק יוצר משולש ישר זווית יחד עם הצירים במערכת, ושטחו של המשולש שווה ל-2. מצאו את ערכו של הפרמטר \\( k \\).&rlm;",
        "options": ["2", "4", "1", "3"],
        "correctAnswer": 0,
        "hint": "מציאת משוואת משיק כללית עם k. מצאו חיתוכי משיק עם הצירים ובנו משוואת שטח להשוואה ל-2.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הנגזרת בנקודת ההשקה המאפיינת את שיפוע הישר.", "math_expression": "m = 2k" },
            { "verbal_explanation": "נרכיב את משוואת המשיק לפי נקודה המונחת על הפרבולה.", "math_expression": "y - k^{2} = 2k(x - k) \\Rightarrow y = 2kx - 2k^{2} + k^{2} = 2kx - k^{2}" },
            { "verbal_explanation": "נמצא את נקודת החיתוך של המשיק עם הציר האנכי, המייצגת את אחד מניצבי המשולש.", "math_expression": "y_{int} = -k^{2}" },
            { "verbal_explanation": "נמצא את החיתוך עם הציר האופקי המהווה את הניצב השני במשולש.", "math_expression": "2kx = k^{2} \\Rightarrow x_{int} = \\dfrac{k}{2}" },
            { "verbal_explanation": "נחשב שטח משולש לפי הערכים המוחלטים של הניצבים (מרחקים חיובים), ונשווה לנתון.", "math_expression": "S = \\dfrac{1}{2} \\times \\dfrac{k}{2} \\times k^{2} = \\dfrac{k^{3}}{4} = 2" },
            { "verbal_explanation": "נכפול בארבע ונוציא שורש שלישי למציאת המשתנה.", "math_expression": "k^{3} = 8 \\Rightarrow k = 2" }
        ],
        "final_answer": "2"
    },
    {
        "topic": "extrema_probs_471",
        "subTopic": "בעיות קיצון בגיאומטריה של המישור ובגרפים (מרחקים ושטחים)",
        "question_text": "סכום ריבועי שני מספרים חיוביים הוא קבוע ושווה ל-50. מהו הסכום המקסימלי האפשרי של שני המספרים עצמם?&rlm;",
        "options": ["10", "14.14", "12", "8"],
        "correctAnswer": 0,
        "hint": "בודדו משתנה אחד בעזרת שורש, והרכיבו פונקציה המחברת את השניים. גזרו את הפונקציה להשגת המקסימום.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את המשוואה המגדירה את הנתון הידוע ונחלץ ממנה משתנה אחד.", "math_expression": "x^{2} + y^{2} = 50 \\Rightarrow y = \\sqrt{50 - x^{2}}" },
            { "verbal_explanation": "נבנה את פונקציית המטרה שמייצגת את סכום שני המספרים יחד.", "math_expression": "f(x) = x + \\sqrt{50 - x^{2}}" },
            { "verbal_explanation": "נגזור את הפונקציה המכילה את השורש הריבועי.", "math_expression": "f'(x) = 1 + \\dfrac{-2x}{2\\sqrt{50 - x^{2}}} = 1 - \\dfrac{x}{\\sqrt{50 - x^{2}}}" },
            { "verbal_explanation": "נשווה לאפס ונפתור באמצעות השוואת איברים משני צידי המשוואה.", "math_expression": "1 = \\dfrac{x}{\\sqrt{50 - x^{2}}} \\Rightarrow \\sqrt{50 - x^{2}} = x" },
            { "verbal_explanation": "נעלה בריבוע את שני האגפים ונקבץ את המשתנים.", "math_expression": "50 - x^{2} = x^{2} \\Rightarrow 2x^{2} = 50 \\Rightarrow x^{2} = 25" },
            { "verbal_explanation": "נבחר בשורש החיובי כמוגדר בבעיה.", "math_expression": "x = 5" },
            { "verbal_explanation": "נחשב את הסכום המקסימלי האפשרי.", "math_expression": "Sum = 5 + \\sqrt{50 - 25} = 5 + 5 = 10" }
        ],
        "final_answer": "10"
    }
];