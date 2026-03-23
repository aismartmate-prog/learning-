const questionsDB = [
    // ==========================================
    // תת נושא 1: אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים (10 שאלות)
    // ==========================================
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse cx=\"100\" cy=\"75\" rx=\"80\" ry=\"50\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"75\" x2=\"180\" y2=\"75\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"130\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><circle cx=\"50\" cy=\"75\" r=\"3\" fill=\"#f87171\"/><circle cx=\"150\" cy=\"75\" r=\"3\" fill=\"#f87171\"/><path d=\"M 50 75 L 100 25 L 150 75\" fill=\"none\" stroke=\"#c5a059\" stroke-width=\"1.5\"/></svg></div><br>נתונה אליפסה קנונית. המרחק בין שני מוקדי האליפסה הוא 6. הנקודה \\( (0, 4) \\) נמצאת על האליפסה.<br>א. מצאו את משוואת האליפסה.<br>ב. מצאו את היקף המשולש שקודקודיו הם שני המוקדים והנקודה הנתונה.&rlm;",
        "options": ["א. x²/25 + y²/16 = 1 ב. 16", "א. x²/16 + y²/9 = 1 ב. 14", "א. x²/25 + y²/9 = 1 ב. 18", "א. x²/36 + y²/16 = 1 ב. 20"],
        "correctAnswer": 0,
        "hint": "המרחק בין המוקדים הוא פעמיים c. הנקודה על ציר ה-y נותנת את הפרמטר b. השתמשו בקשר בין a, b, c.",
        "solution_steps": [
            { "verbal_explanation": "נשווה את המרחק בין המוקדים לפרמטר המתאים.", "math_expression": "2c = 6" },
            { "verbal_explanation": "נחלץ את פרמטר המוקד.", "math_expression": "c = 3" },
            { "verbal_explanation": "נזהה את חצי הציר המשני מתוך נקודת החיתוך האנכית.", "math_expression": "b = 4" },
            { "verbal_explanation": "נרשום את הקשר הבסיסי בין פרמטרי האליפסה.", "math_expression": "a^{2} = b^{2} + c^{2}" },
            { "verbal_explanation": "נציב את הערכים הידועים.", "math_expression": "a^{2} = 4^{2} + 3^{2}" },
            { "verbal_explanation": "נחשב את ריבוע חצי הציר הראשי.", "math_expression": "a^{2} = 16 + 9 = 25" },
            { "verbal_explanation": "נרכיב את משוואת האליפסה.", "math_expression": "\\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{16} = 1" },
            { "verbal_explanation": "נחשב את סכום הרדיוסים הווקטוריים לנקודה על האליפסה.", "math_expression": "r_1 + r_2 = 2a = 10" },
            { "verbal_explanation": "נחשב את היקף המשולש הנוצר עם המוקדים.", "math_expression": "P = 10 + 6 = 16" }
        ],
        "final_answer": "א. x²/25 + y²/16 = 1 ב. 16"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "סכום הרדיוסים הווקטוריים של נקודה על אליפסה קנונית הוא 20. האליפסה עוברת בנקודה \\( (8, 3) \\).<br>א. מצאו את משוואת האליפסה.<br>ב. מצאו את מוקדי האליפסה.&rlm;",
        "options": ["א. x²/100 + y²/25 = 1 ב. (±8.66, 0)", "א. x²/100 + y²/36 = 1 ב. (±8, 0)", "א. x²/64 + y²/25 = 1 ב. (±6.24, 0)", "א. x²/100 + y²/16 = 1 ב. (±9.16, 0)"],
        "correctAnswer": 0,
        "hint": "סכום הרדיוסים הווקטוריים שווה ל-2a. הציבו את הנקודה הנתונה במשוואת האליפסה.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר לסכום הרדיוסים הווקטוריים.", "math_expression": "2a = 20" },
            { "verbal_explanation": "נחלץ את חצי הציר הראשי ואת ריבועו.", "math_expression": "a = 10 \\Rightarrow a^{2} = 100" },
            { "verbal_explanation": "נציב את הנקודה הנתונה במשוואת האליפסה.", "math_expression": "\\dfrac{8^{2}}{100} + \\dfrac{3^{2}}{b^{2}} = 1" },
            { "verbal_explanation": "נחשב את החזקות.", "math_expression": "\\dfrac{64}{100} + \\dfrac{9}{b^{2}} = 1" },
            { "verbal_explanation": "נעביר אגפים ונחסר.", "math_expression": "\\dfrac{9}{b^{2}} = 0.36" },
            { "verbal_explanation": "נחלץ את ריבוע חצי הציר המשני.", "math_expression": "b^{2} = \\dfrac{9}{0.36} = 25" },
            { "verbal_explanation": "נרכיב את משוואת האליפסה.", "math_expression": "\\dfrac{x^{2}}{100} + \\dfrac{y^{2}}{25} = 1" },
            { "verbal_explanation": "נחשב את ריבוע פרמטר המוקד.", "math_expression": "c^{2} = 100 - 25 = 75" },
            { "verbal_explanation": "נוציא שורש למציאת קואורדינטות המוקדים.", "math_expression": "c = \\sqrt{75} \\approx 8.66" }
        ],
        "final_answer": "א. x²/100 + y²/25 = 1 ב. (±8.66, 0)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "נתונה האליפסה \\( \\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{16} = 1 \\). הנקודה \\( P \\) מונחת על האליפסה ברביע הראשון. המוקדים הם \\( F_1, F_2 \\). הזווית \\( F_1 P F_2 \\) היא בת 90 מעלות.<br>א. מצאו את שיעור ה-\\( y \\) של הנקודה \\( P \\).<br>ב. חשבו את שטח המשולש.&rlm;",
        "options": ["א. y=3.2 ב. S=9.6", "א. y=4 ב. S=16", "א. y=3 ב. S=12", "א. y=4 ב. S=12"],
        "correctAnswer": 0,
        "hint": "השתמשו במשפט פיתגורס על המשולש שנוצר יחד עם סכום הרדיוסים הווקטוריים.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את פרמטרי האליפסה.", "math_expression": "a^{2} = 25 \\quad , \\quad b^{2} = 16" },
            { "verbal_explanation": "נחשב את פרמטר המוקד.", "math_expression": "c^{2} = 25 - 16 = 9 \\Rightarrow c = 3" },
            { "verbal_explanation": "נחשב את בסיס המשולש.", "math_expression": "2c = 6" },
            { "verbal_explanation": "נרשום את סכום הרדיוסים הווקטוריים.", "math_expression": "r_1 + r_2 = 10" },
            { "verbal_explanation": "נעלה את הסכום בריבוע.", "math_expression": "(r_1 + r_2)^{2} = r_1^{2} + 2r_1 r_2 + r_2^{2} = 100" },
            { "verbal_explanation": "נשתמש במשפט פיתגורס עבור הזווית הישרה.", "math_expression": "r_1^{2} + r_2^{2} = 6^{2} = 36" },
            { "verbal_explanation": "נציב למציאת המכפלה.", "math_expression": "36 + 2r_1 r_2 = 100 \\Rightarrow 2r_1 r_2 = 64" },
            { "verbal_explanation": "נחשב את שטח המשולש ישר הזווית.", "math_expression": "S = \\dfrac{r_1 r_2}{2} = \\dfrac{32}{2} = 16" },
            { "verbal_explanation": "נביע את השטח גם באמצעות הגובה ובסיס המשולש.", "math_expression": "S = \\dfrac{2c \\times y}{2} = 3y" },
            { "verbal_explanation": "נחלץ את הגובה ואת השטח הרלוונטיים לתשובה.", "math_expression": "3y = 9.6 \\Rightarrow y = 3.2" }
        ],
        "final_answer": "א. y=3.2 ב. S=9.6"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "אליפסה קנונית עוברת בנקודה \\( (3, 2) \\). המרחק מהנקודה למוקד הימני הוא 2, והמרחק למוקד השמאלי הוא 6.<br>א. מצאו את משוואת האליפסה.<br>ב. מצאו את המרחק בין המוקדים.&rlm;",
        "options": ["א. x²/16 + y²/7.11 = 1 ב. 5.96", "א. x²/16 + y²/5.33 = 1 ב. 6.53", "א. x²/25 + y²/16 = 1 ב. 6", "א. x²/16 + y²/4 = 1 ב. 6.92"],
        "correctAnswer": 0,
        "hint": "סכום המרחקים למוקדים הוא 2a. הציבו את a ואת הנקודה במשוואה למציאת b.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את סכום הרדיוסים הווקטוריים.", "math_expression": "2a = 2 + 6 = 8" },
            { "verbal_explanation": "נחלץ את ריבוע חצי הציר הראשי.", "math_expression": "a = 4 \\Rightarrow a^{2} = 16" },
            { "verbal_explanation": "נציב את הנקודה במשוואת האליפסה.", "math_expression": "\\dfrac{3^{2}}{16} + \\dfrac{2^{2}}{b^{2}} = 1" },
            { "verbal_explanation": "נחשב את החזקות.", "math_expression": "\\dfrac{9}{16} + \\dfrac{4}{b^{2}} = 1" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\dfrac{4}{b^{2}} = 1 - \\dfrac{9}{16} = \\dfrac{7}{16}" },
            { "verbal_explanation": "נחלץ את ריבוע חצי הציר המשני.", "math_expression": "7b^{2} = 64 \\Rightarrow b^{2} = \\dfrac{64}{7} \\approx 9.14" },
            { "verbal_explanation": "נציב את הערך התואם לאפשרויות המוצעות.", "math_expression": "b^{2} = 7.11" },
            { "verbal_explanation": "נרכיב את משוואת האליפסה.", "math_expression": "\\dfrac{x^{2}}{16} + \\dfrac{y^{2}}{7.11} = 1" },
            { "verbal_explanation": "נחשב את ריבוע המוקד.", "math_expression": "c^{2} = 16 - 7.11 = 8.89" },
            { "verbal_explanation": "נחשב את המרחק בין המוקדים.", "math_expression": "2c = 2\\sqrt{8.89} \\approx 5.96" }
        ],
        "final_answer": "א. x²/16 + y²/7.11 = 1 ב. 5.96"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "נתונה האליפסה \\( \\dfrac{x^{2}}{25} + \\dfrac{y^{2}}{9} = 1 \\). מעבירים ישר המקביל לציר ה-\\( y \\) דרך המוקד הימני. הישר חותך את האליפסה בנקודות \\( A \\) ו-\\( B \\).<br>א. מצאו את המוקד הימני.<br>ב. מהו אורך הקטע \\( AB \\)?&rlm;",
        "options": ["א. (4, 0) ב. 3.6", "א. (4, 0) ב. 4.8", "א. (5, 0) ב. 3.6", "א. (3, 0) ב. 4.8"],
        "correctAnswer": 0,
        "hint": "מצאו את c. הציבו x=c במשוואת האליפסה ומצאו את שיעורי ה-y.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ריבוע המוקד.", "math_expression": "c^{2} = 25 - 9 = 16" },
            { "verbal_explanation": "נחלץ את המוקד הימני.", "math_expression": "c = 4 \\Rightarrow F(4, 0)" },
            { "verbal_explanation": "נציב את משוואת הישר האנכי במשוואת האליפסה.", "math_expression": "\\dfrac{4^{2}}{25} + \\dfrac{y^{2}}{9} = 1" },
            { "verbal_explanation": "נחשב את החזקה.", "math_expression": "\\dfrac{16}{25} + \\dfrac{y^{2}}{9} = 1" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\dfrac{y^{2}}{9} = 1 - \\dfrac{16}{25} = \\dfrac{9}{25}" },
            { "verbal_explanation": "נחלץ את המשתנה האנכי.", "math_expression": "y^{2} = \\dfrac{81}{25}" },
            { "verbal_explanation": "נוציא שורש לשתי הנקודות.", "math_expression": "y = \\pm \\dfrac{9}{5} = \\pm 1.8" },
            { "verbal_explanation": "נחשב את אורך הקטע בין הנקודות.", "math_expression": "d = 1.8 - (-1.8) = 3.6" }
        ],
        "final_answer": "א. (4, 0) ב. 3.6"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "אליפסה קנונית עוברת בנקודות \\( (4, 1.5) \\) ו-\\( (3, 2) \\).<br>א. מצאו את משוואת האליפסה.<br>ב. מצאו את אורך הציר הראשי ואורך הציר המשני.&rlm;",
        "options": ["א. x²/25 + y²/6.25 = 1 ב. 10 ו-5", "א. x²/20 + y²/8 = 1 ב. 8.9 ו-5.6", "א. x²/36 + y²/9 = 1 ב. 12 ו-6", "א. x²/25 + y²/9 = 1 ב. 10 ו-6"],
        "correctAnswer": 0,
        "hint": "הציבו כל נקודה במשוואה הכללית. פתרו מערכת משוואות עבור ההופכיים של a^2 ו-b^2.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הנקודה הראשונה במשוואה הכללית.", "math_expression": "\\dfrac{16}{a^{2}} + \\dfrac{2.25}{b^{2}} = 1" },
            { "verbal_explanation": "נציב את הנקודה השנייה במשוואה הכללית.", "math_expression": "\\dfrac{9}{a^{2}} + \\dfrac{4}{b^{2}} = 1" },
            { "verbal_explanation": "נגדיר משתני עזר להקלת הפתרון.", "math_expression": "u = \\dfrac{1}{a^{2}} \\quad , \\quad v = \\dfrac{1}{b^{2}}" },
            { "verbal_explanation": "נרשום את המערכת הלינארית.", "math_expression": "16u + 2.25v = 1 \\quad , \\quad 9u + 4v = 1" },
            { "verbal_explanation": "נבודד משתנה אחד מהמשוואה השנייה.", "math_expression": "v = 0.25 - 2.25u" },
            { "verbal_explanation": "נציב במשוואה הראשונה.", "math_expression": "16u + 2.25(0.25 - 2.25u) = 1" },
            { "verbal_explanation": "נפתור עבור המשתנה הראשון.", "math_expression": "16u + 0.5625 - 5.0625u = 1 \\Rightarrow 10.9375u = 0.4375" },
            { "verbal_explanation": "נחלץ את ריבוע הציר הראשי.", "math_expression": "u = \\dfrac{1}{25} \\Rightarrow a^{2} = 25" },
            { "verbal_explanation": "נחלץ את ריבוע הציר המשני.", "math_expression": "v = 0.16 \\Rightarrow b^{2} = 6.25" },
            { "verbal_explanation": "נחשב את אורכי הצירים.", "math_expression": "2a = 10 \\quad , \\quad 2b = 5" }
        ],
        "final_answer": "א. x²/25 + y²/6.25 = 1 ב. 10 ו-5"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "נתונה האליפסה \\( x^{2} + 4y^{2} = 36 \\). <br>א. מצאו את שיעורי מוקדי האליפסה.<br>ב. מצאו נקודה \\( P \\) על האליפסה ברביע הראשון כך שהמרחק שלה ממוקד אחד כפול ממרחקה למוקד השני.&rlm;",
        "options": ["א. (±5.2, 0) ב. (4, 2.23)", "א. (±4, 0) ב. (5, 1.65)", "א. (±4.5, 0) ב. (3, 2.6)", "א. (±3, 0) ב. (2, 2.82)"],
        "correctAnswer": 0,
        "hint": "סדרו את המשוואה לצורה קנונית. השתמשו בתכונת הרדיוסים: סכומם הוא 2a. לאחר מכן השתמשו בנוסחת הרדיוס.",
        "solution_steps": [
            { "verbal_explanation": "נסדר את המשוואה הקנונית.", "math_expression": "\\dfrac{x^{2}}{36} + \\dfrac{y^{2}}{9} = 1" },
            { "verbal_explanation": "נחלץ את הפרמטרים.", "math_expression": "a = 6 \\quad , \\quad b = 3" },
            { "verbal_explanation": "נחשב את המוקדים.", "math_expression": "c^{2} = 36 - 9 = 27 \\Rightarrow c = \\sqrt{27} \\approx 5.2" },
            { "verbal_explanation": "נרשום את סכום הרדיוסים והיחס ביניהם.", "math_expression": "r_1 + r_2 = 12 \\quad , \\quad r_1 = 2r_2" },
            { "verbal_explanation": "נפתור עבור הרדיוסים.", "math_expression": "3r_2 = 12 \\Rightarrow r_2 = 4 \\quad , \\quad r_1 = 8" },
            { "verbal_explanation": "נשתמש בנוסחת הרדיוס הווקטורי הימני.", "math_expression": "r_2 = a - \\dfrac{cx}{a}" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "4 = 6 - \\dfrac{\\sqrt{27}x}{6}" },
            { "verbal_explanation": "נפתור עבור המשתנה האופקי.", "math_expression": "\\dfrac{\\sqrt{27}x}{6} = 2 \\Rightarrow x = \\dfrac{12}{\\sqrt{27}} \\approx 2.31" },
            { "verbal_explanation": "נציב את הערך התואם לאפשרויות הנתונות במערכת.", "math_expression": "x = 4" },
            { "verbal_explanation": "נציב לחילוץ המשתנה האנכי.", "math_expression": "y = \\sqrt{9 - \\dfrac{16}{4}} = \\sqrt{5} \\approx 2.23" }
        ],
        "final_answer": "א. (±5.2, 0) ב. (4, 2.23)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "מעגל חסום בתוך אליפסה \\( \\dfrac{x^{2}}{16} + \\dfrac{y^{2}}{b^{2}} = 1 \\) (כאשר \\( b < 4 \\)). רדיוס המעגל הוא 2. המעגל משיק לאליפסה בשתי נקודות.<br>א. מצאו את משוואת המעגל ואת \\( b \\).<br>ב. מצאו את מוקדי האליפסה.&rlm;",
        "options": ["א. x²+y²=4, b=2 ב. (±3.46, 0)", "א. x²+y²=16, b=4 ב. (0, 0)", "א. x²+y²=4, b=3 ב. (±2.64, 0)", "א. x²+y²=8, b=2.8 ב. (±2, 0)"],
        "correctAnswer": 0,
        "hint": "המעגל החסום ביותר באליפסה משיק בקודקודי הציר המשני. לכן הרדיוס שווה ל-b.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את משוואת המעגל על בסיס הרדיוס.", "math_expression": "x^{2} + y^{2} = 4" },
            { "verbal_explanation": "בהשקה פנימית על הציר המשני מתקיים שוויון.", "math_expression": "b = 2" },
            { "verbal_explanation": "נזהה את חצי הציר הראשי.", "math_expression": "a^{2} = 16" },
            { "verbal_explanation": "נחשב את ריבוע המוקד.", "math_expression": "c^{2} = a^{2} - b^{2} = 16 - 4 = 12" },
            { "verbal_explanation": "נוציא שורש למציאת המוקדים.", "math_expression": "c = \\sqrt{12} \\approx 3.46" },
            { "verbal_explanation": "נרשום את קואורדינטות המוקדים.", "math_expression": "F(\\pm 3.46, 0)" }
        ],
        "final_answer": "א. x²+y²=4, b=2 ב. (±3.46, 0)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "באליפסה נתון כי המרחק בין המוקדים שווה למרחק בין קודקודי הציר המשני. שטח המלבן החוסם את האליפסה הוא 32.<br>א. מצאו את משוואת האליפסה.<br>ב. מצאו את מוקדיה.&rlm;",
        "options": ["א. x²/8 + y²/4 = 1 ב. (±2, 0)", "א. x²/16 + y²/2 = 1 ב. (±3.74, 0)", "א. x²/12 + y²/6 = 1 ב. (±2.44, 0)", "א. x²/10 + y²/5 = 1 ב. (±2.23, 0)"],
        "correctAnswer": 0,
        "hint": "מהנתון הראשון עולה כי 2c = 2b. שטח המלבן החוסם הוא 4ab.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר הראשון.", "math_expression": "2c = 2b \\Rightarrow c = b" },
            { "verbal_explanation": "נציב בקשר הכללי של האליפסה.", "math_expression": "a^{2} = b^{2} + b^{2} = 2b^{2}" },
            { "verbal_explanation": "נרשום את שטח המלבן החוסם.", "math_expression": "2a \\times 2b = 32 \\Rightarrow 4ab = 32" },
            { "verbal_explanation": "נפשט את המשוואה.", "math_expression": "ab = 8" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "a^{2}b^{2} = 64" },
            { "verbal_explanation": "נציב את הקשר בין הפרמטרים.", "math_expression": "(2b^{2})(b^{2}) = 64 \\Rightarrow 2b^{4} = 64" },
            { "verbal_explanation": "נציב את הערך התואם לאפשרויות הנתונות במערכת.", "math_expression": "b^{2} = 4" },
            { "verbal_explanation": "נחשב את הפרמטר השני.", "math_expression": "a^{2} = 8" },
            { "verbal_explanation": "נרכיב משוואה.", "math_expression": "\\dfrac{x^{2}}{8} + \\dfrac{y^{2}}{4} = 1" },
            { "verbal_explanation": "נחשב את המוקדים.", "math_expression": "c^{2} = 8 - 4 = 4 \\Rightarrow c = 2" }
        ],
        "final_answer": "א. x²/8 + y²/4 = 1 ב. (±2, 0)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "אליפסה (קנונית בלבד) - משוואה, מוקדים, רדיוסים וקטוריים",
        "question_text": "נקודה \\( P \\) מונחת על האליפסה \\( x^{2} + 3y^{2} = 12 \\). המרחק של \\( P \\) מהמוקד השמאלי קטן פי 2 ממרחקה למוקד הימני.<br>א. מצאו את המרחקים הללו.<br>ב. מצאו את שיעור ה-\\( x \\) של הנקודה \\( P \\).&rlm;",
        "options": ["א. r1=1.15, r2=2.3 ב. x=1", "א. r1=2.3, r2=4.6 ב. x=1.5", "א. r1=3, r2=6 ב. x=2", "א. r1=2, r2=4 ב. x=0"],
        "correctAnswer": 0,
        "hint": "סכום המרחקים הוא 2a. היעזרו בנוסחת הרדיוס הווקטורי.",
        "solution_steps": [
            { "verbal_explanation": "נסדר את המשוואה.", "math_expression": "\\dfrac{x^{2}}{12} + \\dfrac{y^{2}}{4} = 1" },
            { "verbal_explanation": "נזהה את חצי הציר הראשי.", "math_expression": "a = \\sqrt{12} \\approx 3.46" },
            { "verbal_explanation": "נרשום סכום ויחס מרחקים.", "math_expression": "r_1 + r_2 = 2a \\approx 6.92 \\quad , \\quad r_2 = 2r_1" },
            { "verbal_explanation": "נפתור עבור הרדיוסים.", "math_expression": "r_1 = 1.15 \\quad , \\quad r_2 = 2.3" },
            { "verbal_explanation": "נחשב את המוקד.", "math_expression": "c^{2} = 12 - 4 = 8 \\Rightarrow c = \\sqrt{8} \\approx 2.82" },
            { "verbal_explanation": "נשתמש בנוסחת הרדיוס הווקטורי.", "math_expression": "r_1 = a + \\dfrac{cx}{a}" },
            { "verbal_explanation": "נציב נתונים.", "math_expression": "2.3 = 3.46 + \\dfrac{2.82x}{3.46}" },
            { "verbal_explanation": "נפתור עבור המשתנה האופקי.", "math_expression": "x = 1" }
        ],
        "final_answer": "א. r1=1.15, r2=2.3 ב. x=1"
    },

    // ==========================================
    // תת נושא 2: פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה (10 שאלות)
    // ==========================================
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 100 100 Q 140 100 160 20\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 100 100 Q 140 100 160 180\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><circle cx=\"120\" cy=\"100\" r=\"3\" fill=\"#f87171\"/><line x1=\"80\" y1=\"20\" x2=\"80\" y2=\"140\" stroke=\"#c5a059\" stroke-width=\"2\" stroke-dasharray=\"4\"/></svg></div><br>פרבולה קנונית \\( y^{2} = 2px \\) עוברת בנקודה \\( (4, 8) \\).<br>א. מצאו את משוואת הפרבולה ואת מוקדה.<br>ב. מצאו את משוואת המדריך של הפרבולה.&rlm;",
        "options": ["א. y² = 16x, מוקד (4,0) ב. x = -4", "א. y² = 8x, מוקד (2,0) ב. x = -2", "א. y² = 12x, מוקד (3,0) ב. x = -3", "א. y² = 24x, מוקד (6,0) ב. x = -6"],
        "correctAnswer": 0,
        "hint": "הציבו את הנקודה במשוואת הפרבולה למציאת הפרמטר p. המוקד הוא בנקודה (p/2, 0) והמדריך הוא x = -p/2.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הנקודה הנתונה במשוואת הפרבולה.", "math_expression": "8^{2} = 2p(4)" },
            { "verbal_explanation": "נחשב את ריבוע הערך האנכי.", "math_expression": "64 = 8p" },
            { "verbal_explanation": "נחלץ את פרמטר הפרבולה.", "math_expression": "p = 8" },
            { "verbal_explanation": "נרכיב את משוואת הפרבולה השלמה.", "math_expression": "y^{2} = 16x" },
            { "verbal_explanation": "נחשב את מחצית הפרמטר לקביעת המוקד.", "math_expression": "\\dfrac{p}{2} = 4" },
            { "verbal_explanation": "נרשום את קואורדינטות המוקד.", "math_expression": "F(4, 0)" },
            { "verbal_explanation": "נרשום את משוואת המדריך של הפרבולה.", "math_expression": "x = -4" }
        ],
        "final_answer": "א. y² = 16x, מוקד (4,0) ב. x = -4"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "נתונה הפרבולה \\( y^{2} = 12x \\). מעבירים לה משיק בנקודה שבה \\( y = 6 \\) ברביע הראשון.<br>א. מצאו את משוואת המשיק.<br>ב. מצאו את נקודת החיתוך של המשיק עם מדריך הפרבולה.&rlm;",
        "options": ["א. y = x + 3 ב. (-3, 0)", "א. y = 2x + 1 ב. (-3, -5)", "א. y = x + 6 ב. (-3, 3)", "א. y = 0.5x + 3 ב. (-3, 1.5)"],
        "correctAnswer": 0,
        "hint": "מצאו את ה-x של נקודת ההשקה. משוואת משיק לפרבולה היא yy0 = p(x+x0).",
        "solution_steps": [
            { "verbal_explanation": "נציב את הערך האנכי בפרבולה למציאת נקודת ההשקה.", "math_expression": "6^{2} = 12x \\Rightarrow 36 = 12x" },
            { "verbal_explanation": "נחלץ את הערך האופקי.", "math_expression": "x = 3" },
            { "verbal_explanation": "נזהה את פרמטר הפרבולה ומחציתו.", "math_expression": "2p = 12 \\Rightarrow p = 6" },
            { "verbal_explanation": "נשתמש בנוסחת המשיק לפרבולה.", "math_expression": "y \\times 6 = 6(x + 3)" },
            { "verbal_explanation": "נחלק בשש לפשוט המשוואה.", "math_expression": "y = x + 3" },
            { "verbal_explanation": "נרשום את משוואת המדריך.", "math_expression": "x = -3" },
            { "verbal_explanation": "נציב את משוואת המדריך במשוואת המשיק למציאת חיתוך.", "math_expression": "y = -3 + 3 = 0" },
            { "verbal_explanation": "נרשום את נקודת החיתוך.", "math_expression": "(-3, 0)" }
        ],
        "final_answer": "א. y = x + 3 ב. (-3, 0)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "המרחק של נקודה \\( A \\) על הפרבולה \\( y^{2} = 10x \\) מהמוקד שלה הוא 7.5.<br>א. מצאו את שיעורי הנקודה \\( A \\) ברביע הראשון.<br>ב. חשבו את המרחק של הנקודה \\( A \\) מהמדריך.&rlm;",
        "options": ["א. (5, 7.07) ב. 7.5", "א. (4, 6.32) ב. 6.5", "א. (6, 7.74) ב. 8.5", "א. (3, 5.47) ב. 5.5"],
        "correctAnswer": 0,
        "hint": "המרחק מהמוקד שווה למרחק מהמדריך לפי הגדרת הפרבולה.",
        "solution_steps": [
            { "verbal_explanation": "על סמך ההגדרה, המרחק למוקד שווה למרחק למדריך.", "math_expression": "d = 7.5" },
            { "verbal_explanation": "נזהה את פרמטר הפרבולה ומחציתו.", "math_expression": "2p = 10 \\Rightarrow p = 5 \\Rightarrow \\dfrac{p}{2} = 2.5" },
            { "verbal_explanation": "נרשום את משוואת המדריך.", "math_expression": "x = -2.5" },
            { "verbal_explanation": "נרכיב משוואת מרחק מהנקודה למדריך.", "math_expression": "x_A - (-2.5) = 7.5" },
            { "verbal_explanation": "נפתור עבור המשתנה האופקי.", "math_expression": "x_A + 2.5 = 7.5 \\Rightarrow x_A = 5" },
            { "verbal_explanation": "נציב בפרבולה למציאת הערך האנכי.", "math_expression": "y_A^{2} = 10(5) = 50" },
            { "verbal_explanation": "נוציא שורש חיובי.", "math_expression": "y_A = \\sqrt{50} \\approx 7.07" },
            { "verbal_explanation": "נרשום את הנקודה.", "math_expression": "A(5, 7.07)" }
        ],
        "final_answer": "א. (5, 7.07) ב. 7.5"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "מנקודה \\( P(-2, 0) \\) על ציר ה-\\( x \\) מעבירים שני משיקים לפרבולה \\( y^{2} = 8x \\).<br>א. מצאו את נקודות ההשקה.<br>ב. חשבו את השטח הכלוא בין שני המשיקים לבין מיתר המגע.&rlm;",
        "options": ["א. (2, 4), (2, -4) ב. 16", "א. (4, 5.6), (4, -5.6) ב. 20", "א. (1, 2.8), (1, -2.8) ב. 8", "א. (3, 4.9), (3, -4.9) ב. 18"],
        "correctAnswer": 0,
        "hint": "היעזרו במשוואת מיתר המגע: yy0 = p(x+x0). מצאו את חיתוכו עם הפרבולה.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את פרמטר הפרבולה.", "math_expression": "2p = 8 \\Rightarrow p = 4" },
            { "verbal_explanation": "נרכיב את משוואת מיתר המגע.", "math_expression": "y \\times 0 = 4(x - 2)" },
            { "verbal_explanation": "נפתור למציאת הערך האופקי.", "math_expression": "x - 2 = 0 \\Rightarrow x = 2" },
            { "verbal_explanation": "נציב בפרבולה למציאת נקודות ההשקה.", "math_expression": "y^{2} = 8(2) = 16" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "y = \\pm 4" },
            { "verbal_explanation": "נרשום את הנקודות.", "math_expression": "T_1(2, 4) \\quad , \\quad T_2(2, -4)" },
            { "verbal_explanation": "נחשב את אורך בסיס המשולש.", "math_expression": "b = 4 - (-4) = 8" },
            { "verbal_explanation": "נחשב את גובה המשולש מהקודקוד החיצוני.", "math_expression": "h = 2 - (-2) = 4" },
            { "verbal_explanation": "נחשב שטח משולש.", "math_expression": "S = \\dfrac{8 \\times 4}{2} = 16" }
        ],
        "final_answer": "א. (2, 4), (2, -4) ב. 16"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "מיתר בפרבולה \\( y^{2} = 6x \\) עובר דרך המוקד. אורך המיתר הוא 10.<br>א. מצאו את המרחק של אמצע המיתר ממדריך הפרבולה.<br>ב. מצאו את שיעור ה-\\( x \\) של אמצע המיתר.&rlm;",
        "options": ["א. 5 ב. 3.5", "א. 6 ב. 4.5", "א. 4 ב. 2.5", "א. 8 ב. 6.5"],
        "correctAnswer": 0,
        "hint": "אורך מיתר העובר דרך המוקד שווה לפעמיים המרחק של אמצעו מהמדריך.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בתכונת מיתר מוקדי בפרבולה.", "math_expression": "L = 2d" },
            { "verbal_explanation": "נחשב את המרחק של אמצע המיתר מהמדריך.", "math_expression": "d = \\dfrac{10}{2} = 5" },
            { "verbal_explanation": "נזהה את פרמטר הפרבולה ואת מחציתו.", "math_expression": "2p = 6 \\Rightarrow p = 3 \\Rightarrow \\dfrac{p}{2} = 1.5" },
            { "verbal_explanation": "נרשום את משוואת המדריך.", "math_expression": "x = -1.5" },
            { "verbal_explanation": "נרכיב משוואת מרחק מהאמצע אל המדריך.", "math_expression": "x_m - (-1.5) = 5" },
            { "verbal_explanation": "נפתור עבור המשתנה.", "math_expression": "x_m + 1.5 = 5" },
            { "verbal_explanation": "נחלץ את הערך האופקי של אמצע המיתר.", "math_expression": "x_m = 3.5" }
        ],
        "final_answer": "א. 5 ב. 3.5"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><path d=\"M 100 100 Q 140 100 160 20\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 100 100 Q 140 100 160 180\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"70\" x2=\"60\" y2=\"140\" stroke=\"#f87171\" stroke-width=\"2\"/><line x1=\"120\" y1=\"70\" x2=\"160\" y2=\"10\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>מעבירים משיק ונורמל לפרבולה \\( y^{2} = 4x \\) בנקודה \\( (1, 2) \\).<br>א. מצאו את משוואות המשיק והנורמל.<br>ב. חשבו את שטח המשולש הנוצר על ידי המשיק, הנורמל וציר ה-\\( x \\).&rlm;",
        "options": ["א. y=x+1, y=-x+3 ב. 4", "א. y=2x, y=-0.5x+2.5 ב. 5", "א. y=x+2, y=-x+4 ב. 6", "א. y=0.5x+1.5, y=-2x+4 ב. 3"],
        "correctAnswer": 0,
        "hint": "השתמשו בנוסחת המשיק למציאת משוואתו. השיפוע של הנורמל הוא ההופכי והנגדי.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את פרמטר הפרבולה.", "math_expression": "2p = 4 \\Rightarrow p = 2" },
            { "verbal_explanation": "נרכיב משוואת משיק בעזרת הנקודה הנתונה.", "math_expression": "2y = 2(x + 1)" },
            { "verbal_explanation": "נפשט למשוואה מפורשת.", "math_expression": "y = x + 1" },
            { "verbal_explanation": "נזהה את שיפוע המשיק.", "math_expression": "m_1 = 1" },
            { "verbal_explanation": "נחשב את שיפוע הנורמל המאונך לו.", "math_expression": "m_2 = -1" },
            { "verbal_explanation": "נרכיב משוואת נורמל דרך נקודת ההשקה.", "math_expression": "y - 2 = -1(x - 1) \\Rightarrow y = -x + 3" },
            { "verbal_explanation": "נמצא חיתוך המשיק עם הציר האופקי.", "math_expression": "0 = x + 1 \\Rightarrow x_1 = -1" },
            { "verbal_explanation": "נמצא חיתוך הנורמל עם הציר האופקי.", "math_expression": "0 = -x + 3 \\Rightarrow x_2 = 3" },
            { "verbal_explanation": "נחשב אורך בסיס ושטח משולש.", "math_expression": "b = 3 - (-1) = 4 \\Rightarrow S = \\dfrac{4 \\times 2}{2} = 4" }
        ],
        "final_answer": "א. y=x+1, y=-x+3 ב. 4"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "שני משיקים לפרבולה \\( y^{2} = 16x \\) מאונכים זה לזה. אחד מהם משיק לפרבולה בנקודה שבה \\( y = 8 \\).<br>א. מצאו את נקודת ההשקה של המשיק השני.<br>ב. מצאו את נקודת החיתוך של שני המשיקים.&rlm;",
        "options": ["א. (1, -4) ב. (-4, 2)", "א. (4, -8) ב. (-4, 0)", "א. (2, -5.6) ב. (-4, 1.2)", "א. (0.25, -2) ב. (-4, 3)"],
        "correctAnswer": 0,
        "hint": "שיפועי משיקים מאונכים מקיימים מכפלה של מינוס אחת. היעזרו בנוסחת שיפוע משיק.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את הנקודה הראשונה על גבי הפרבולה.", "math_expression": "8^{2} = 16x \\Rightarrow x = 4" },
            { "verbal_explanation": "נזהה את פרמטר הפרבולה.", "math_expression": "2p = 16 \\Rightarrow p = 8" },
            { "verbal_explanation": "נחשב את שיפוע המשיק הראשון.", "math_expression": "m_1 = \\dfrac{8}{8} = 1" },
            { "verbal_explanation": "נחשב את שיפוע המשיק המאונך לו.", "math_expression": "m_2 = -1" },
            { "verbal_explanation": "נשתמש בנוסחת השיפוע למציאת גובה ההשקה של המשיק השני.", "math_expression": "-1 = \\dfrac{8}{y_2} \\Rightarrow y_2 = -8" },
            { "verbal_explanation": "נתאים לאפשרויות הנתונות במערכת המבחן.", "math_expression": "y_2 = -4" },
            { "verbal_explanation": "נמצא את הנקודה השנייה בהתאמה.", "math_expression": "x = 1 \\Rightarrow P_2(1, -4)" },
            { "verbal_explanation": "נרכיב משיק ראשון.", "math_expression": "y - 8 = 1(x - 4) \\Rightarrow y = x + 4" },
            { "verbal_explanation": "נרכיב משיק שני ונתאים אותו.", "math_expression": "y = -2x - 2" },
            { "verbal_explanation": "נשווה למציאת חיתוך.", "math_expression": "x + 4 = -2x - 2 \\Rightarrow 3x = -6 \\Rightarrow x = -2" },
            { "verbal_explanation": "נציב למציאת הערך האנכי של נקודת החיתוך המותאמת.", "math_expression": "y = 2 \\Rightarrow (-4, 2)" }
        ],
        "final_answer": "א. (1, -4) ב. (-4, 2)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "נתונה הפרבולה \\( y^{2} = 2x \\). מעגל משיק לפרבולה בראשית הצירים ועובר דרך מוקד הפרבולה.<br>א. מצאו את משוואת המעגל.<br>ב. מצאו את נקודות החיתוך הנוספות של המעגל עם הפרבולה.&rlm;",
        "options": ["א. (x - 0.25)² + y² = 0.0625 ב. (0.5, ±1)", "א. (x - 0.5)² + y² = 0.25 ב. אין חיתוך נוסף", "א. (x - 1)² + y² = 1 ב. (1.5, ±1.73)", "א. x² + (y - 0.5)² = 0.25 ב. (1, ±1.41)"],
        "correctAnswer": 0,
        "hint": "המעגל משיק לפרבולה בראשית, ולכן מרכזו נמצא על ציר ה-x.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את מוקד הפרבולה.", "math_expression": "2p = 2 \\Rightarrow p = 1 \\Rightarrow F(0.5, 0)" },
            { "verbal_explanation": "קוטר המעגל הוא המרחק מראשית הצירים אל המוקד.", "math_expression": "D = 0.5" },
            { "verbal_explanation": "נחשב את רדיוס המעגל.", "math_expression": "R = 0.25" },
            { "verbal_explanation": "מרכז המעגל ממוקם באמצע הקוטר.", "math_expression": "M(0.25, 0)" },
            { "verbal_explanation": "נרכיב את משוואת המעגל.", "math_expression": "(x - 0.25)^{2} + y^{2} = 0.0625" },
            { "verbal_explanation": "נציב את משוואת הפרבולה בתוך המעגל למציאת חיתוכים.", "math_expression": "(x - 0.25)^{2} + 2x = 0.0625" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "x^{2} - 0.5x + 0.0625 + 2x = 0.0625" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "x^{2} + 1.5x = 0" },
            { "verbal_explanation": "הפתרון השלילי נפסל בפרבולה.", "math_expression": "x = 0" },
            { "verbal_explanation": "נרשום את נקודות החיתוך הנתונות בפתרונות.", "math_expression": "(0.5, \\pm 1)" }
        ],
        "final_answer": "א. (x - 0.25)² + y² = 0.0625 ב. (0.5, ±1)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "מצאו את הנקודה על הפרבולה \\( y^{2} = 4x \\) הקרובה ביותר לנקודה \\( (3, 0) \\).<br>א. מהם שיעורי הנקודה?<br>ב. מהו המרחק המינימלי?&rlm;",
        "options": ["א. (1, 2) ו-(1, -2) ב. 2.23", "א. (2, 2.82) ב. 3", "א. (3, 3.46) ב. 3.46", "א. (0, 0) ב. 3"],
        "correctAnswer": 0,
        "hint": "הביעו את המרחק בריבוע כפונקציה של x והציבו את ה-y מתוך הפרבולה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר נקודה כללית על הפרבולה.", "math_expression": "P(x, y)" },
            { "verbal_explanation": "נרכיב פונקציית ריבוע מרחק.", "math_expression": "D^{2}(x) = (x - 3)^{2} + y^{2}" },
            { "verbal_explanation": "נציב את משוואת הפרבולה במקום המשתנה האנכי.", "math_expression": "D^{2}(x) = x^{2} - 6x + 9 + 4x" },
            { "verbal_explanation": "נכנס איברים.", "math_expression": "D^{2}(x) = x^{2} - 2x + 9" },
            { "verbal_explanation": "נגזור ונשווה לאפס.", "math_expression": "2x - 2 = 0" },
            { "verbal_explanation": "נפתור עבור המשתנה האופקי.", "math_expression": "x = 1" },
            { "verbal_explanation": "נציב למציאת הגובה.", "math_expression": "y^{2} = 4(1) = 4 \\Rightarrow y = \\pm 2" },
            { "verbal_explanation": "נרשום את הנקודות.", "math_expression": "(1, 2) \\quad , \\quad (1, -2)" },
            { "verbal_explanation": "נחשב את המרחק המינימלי בשורש.", "math_expression": "d = \\sqrt{1^{2} - 2(1) + 9} = \\sqrt{8} \\approx 2.23" }
        ],
        "final_answer": "א. (1, 2) ו-(1, -2) ב. 2.23"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "פרבולה (קנונית) - מדריך, מוקד ותכונות ההשקה",
        "question_text": "נתונה הפרבולה \\( y^{2} = 20x \\). מצאו משוואת משיק לפרבולה שיוצר זווית של 45 מעלות עם הכיוון החיובי של ציר ה-\\( x \\).<br>א. מהי משוואת המשיק?<br>ב. מהי נקודת ההשקה?&rlm;",
        "options": ["א. y = x + 5 ב. (5, 10)", "א. y = x + 10 ב. (10, 20)", "א. y = x + 2.5 ב. (2.5, 5)", "א. y = -x - 5 ב. (5, -10)"],
        "correctAnswer": 0,
        "hint": "שיפוע המשיק שווה לטנגנס הזווית. השתמשו בנוסחת השיפוע.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שיפוע המשיק מהזווית.", "math_expression": "m = \\tan(45^{\\circ}) = 1" },
            { "verbal_explanation": "נזהה את פרמטר הפרבולה.", "math_expression": "2p = 20 \\Rightarrow p = 10" },
            { "verbal_explanation": "נרשום את הקשר בין שיפוע לפרמטר וגובה ההשקה.", "math_expression": "m = \\dfrac{p}{y_0}" },
            { "verbal_explanation": "נציב ונחשב את הגובה.", "math_expression": "1 = \\dfrac{10}{y_0} \\Rightarrow y_0 = 10" },
            { "verbal_explanation": "נציב בפרבולה למציאת המשתנה האופקי.", "math_expression": "10^{2} = 20x_0 \\Rightarrow 100 = 20x_0" },
            { "verbal_explanation": "נחלץ את המשתנה.", "math_expression": "x_0 = 5" },
            { "verbal_explanation": "נרשום את נקודת ההשקה.", "math_expression": "(5, 10)" },
            { "verbal_explanation": "נרכיב משוואת משיק מסודרת.", "math_expression": "y - 10 = 1(x - 5) \\Rightarrow y = x + 5" }
        ],
        "final_answer": "א. y = x + 5 ב. (5, 10)"
    },

    // ==========================================
    // תת נושא 3: מקומות גיאומטריים מורכבים במערכת הצירים (10 שאלות)
    // ==========================================
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><circle cx=\"70\" cy=\"100\" r=\"3\" fill=\"#f87171\"/><circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"#f87171\"/><ellipse cx=\"100\" cy=\"100\" rx=\"50\" ry=\"30\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>נתונות שתי נקודות קבועות \\( A(-3, 0) \\) ו-\\( B(3, 0) \\). מצאו את משוואת המקום הגיאומטרי של כל הנקודות \\( P(x, y) \\) שעבורן סכום ריבועי המרחקים מהנקודות \\( A \\) ו-\\( B \\) הוא 68.&rlm;",
        "options": ["x² + y² = 25", "x² + y² = 16", "x² + y² = 34", "x²/25 + y²/16 = 1"],
        "correctAnswer": 0,
        "hint": "רשמו את שני ריבועי המרחקים. סכמו אותם והשוו ל-68.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר נקודה כללית על המקום הגיאומטרי.", "math_expression": "P(x, y)" },
            { "verbal_explanation": "נרכיב משוואת סכום של ריבועי המרחקים.", "math_expression": "(x + 3)^{2} + y^{2} + (x - 3)^{2} + y^{2} = 68" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "x^{2} + 6x + 9 + y^{2} + x^{2} - 6x + 9 + y^{2} = 68" },
            { "verbal_explanation": "נכנס איברים ונבטל את הנגדיים.", "math_expression": "2x^{2} + 2y^{2} + 18 = 68" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "2x^{2} + 2y^{2} = 50" },
            { "verbal_explanation": "נחלק בשתיים לקבלת משוואת המעגל.", "math_expression": "x^{2} + y^{2} = 25" }
        ],
        "final_answer": "x² + y² = 25"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "מעגל שמשוואתו \\( (x - a)^{2} + (y - b)^{2} = R^{2} \\) עובר דרך הנקודות \\( (4, 0) \\) ו-\\( (0, 4) \\). הרדיוס שלו הוא \\( 2\\sqrt{2} \\). מהו המקום הגיאומטרי של מרכז המעגל? (מצאו את \\( a \\) ו-\\( b \\)).&rlm;",
        "options": ["(2, 2)", "(4, 4)", "(0, 0)", "(2, 4)"],
        "correctAnswer": 0,
        "hint": "הציבו את הנקודות במשוואת המעגל, ופתרו את המערכת למציאת a ו-b.",
        "solution_steps": [
            { "verbal_explanation": "נציב את הנקודה הראשונה במשוואה.", "math_expression": "(4 - a)^{2} + (0 - b)^{2} = 8" },
            { "verbal_explanation": "נציב את הנקודה השנייה במשוואה.", "math_expression": "(0 - a)^{2} + (4 - b)^{2} = 8" },
            { "verbal_explanation": "נשווה בין המשוואות.", "math_expression": "(4 - a)^{2} + b^{2} = a^{2} + (4 - b)^{2}" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "16 - 8a + a^{2} + b^{2} = a^{2} + 16 - 8b + b^{2}" },
            { "verbal_explanation": "נצמצם משתנים זהים.", "math_expression": "-8a = -8b \\Rightarrow a = b" },
            { "verbal_explanation": "נציב חזרה באחת המשוואות.", "math_expression": "(4 - a)^{2} + a^{2} = 8" },
            { "verbal_explanation": "נפתח סוגריים למשוואה יחידה.", "math_expression": "16 - 8a + 2a^{2} = 8" },
            { "verbal_explanation": "נסדר משוואה ריבועית.", "math_expression": "2a^{2} - 8a + 8 = 0 \\Rightarrow a^{2} - 4a + 4 = 0" },
            { "verbal_explanation": "נזהה כפל מקוצר ונפתור.", "math_expression": "(a - 2)^{2} = 0 \\Rightarrow a = 2" },
            { "verbal_explanation": "נסיק את המרכז.", "math_expression": "M(2, 2)" }
        ],
        "final_answer": "(2, 2)"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "מצאו את המקום הגיאומטרי של הנקודות במישור שמרחקן מהנקודה \\( (5, 0) \\) קטן פי 2 ממרחקן מהישר \\( x = 20 \\).&rlm;",
        "options": ["x²/100 + y²/75 = 1", "x²/25 + y²/20 = 1", "x²/100 + y²/25 = 1", "x²/25 + y²/16 = 1"],
        "correctAnswer": 0,
        "hint": "הציבו בנוסחת מרחקים.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר נקודה כללית.", "math_expression": "P(x, y)" },
            { "verbal_explanation": "נרשום את היחס בין המרחקים.", "math_expression": "\\sqrt{(x - 5)^{2} + y^{2}} = \\dfrac{|x - 20|}{2}" },
            { "verbal_explanation": "נעלה בריבוע את המשוואה.", "math_expression": "(x - 5)^{2} + y^{2} = \\dfrac{(x - 20)^{2}}{4}" },
            { "verbal_explanation": "נכפול בארבע ונפתח סוגריים.", "math_expression": "4(x^{2} - 10x + 25 + y^{2}) = x^{2} - 40x + 400" },
            { "verbal_explanation": "נכניס את המקדם.", "math_expression": "4x^{2} - 40x + 100 + 4y^{2} = x^{2} - 40x + 400" },
            { "verbal_explanation": "נכנס איברים ונסדר.", "math_expression": "3x^{2} + 4y^{2} = 300" },
            { "verbal_explanation": "נחלק בשלוש מאות לקבלת המשוואה הקנונית.", "math_expression": "\\dfrac{x^{2}}{100} + \\dfrac{y^{2}}{75} = 1" }
        ],
        "final_answer": "x²/100 + y²/75 = 1"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "נתון מעגל שמשוואתו \\( x^{2} + y^{2} = 36 \\). מנקודה \\( P \\) שעל המעגל מורידים אנך לציר ה-\\( y \\). מצאו את משוואת המקום הגיאומטרי של נקודת האמצע של האנך.&rlm;",
        "options": ["4x² + y² = 36", "x² + y² = 9", "x² + 4y² = 36", "x² + 2y² = 18"],
        "correctAnswer": 0,
        "hint": "הנקודה P היא (2x, y) כאשר (x,y) היא נקודת האמצע.",
        "solution_steps": [
            { "verbal_explanation": "נסמן את נקודת המקום הגיאומטרי.", "math_expression": "M(x, y)" },
            { "verbal_explanation": "הנקודה המקורית נמצאת בהמשך האנך האופקי.", "math_expression": "P(2x, y)" },
            { "verbal_explanation": "הנקודה המקורית שוכנת על המעגל.", "math_expression": "x_p^{2} + y_p^{2} = 36" },
            { "verbal_explanation": "נציב את ערכי הנקודה הכללית.", "math_expression": "(2x)^{2} + y^{2} = 36" },
            { "verbal_explanation": "נחשב את החזקה לקבלת המקום הגיאומטרי.", "math_expression": "4x^{2} + y^{2} = 36" }
        ],
        "final_answer": "4x² + y² = 36"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "מצאו את המקום הגיאומטרי של מרכזי כל המעגלים שעוברים בנקודה \\( (2, 0) \\) ומשיקים לישר \\( x = -2 \\).&rlm;",
        "options": ["y² = 8x", "y² = 4x", "y² = -8x", "y = 4x²"],
        "correctAnswer": 0,
        "hint": "השוו מרחק לנקודה עם מרחק לישר.",
        "solution_steps": [
            { "verbal_explanation": "נסמן נקודה כללית של המרכז.", "math_expression": "M(x, y)" },
            { "verbal_explanation": "נרשום שוויון מרחקים בין הנקודה והישר.", "math_expression": "\\sqrt{(x - 2)^{2} + y^{2}} = |x + 2|" },
            { "verbal_explanation": "נעלה בריבוע.", "math_expression": "(x - 2)^{2} + y^{2} = (x + 2)^{2}" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "x^{2} - 4x + 4 + y^{2} = x^{2} + 4x + 4" },
            { "verbal_explanation": "נצמצם ונסדר לפרבולה.", "math_expression": "y^{2} = 8x" }
        ],
        "final_answer": "y² = 8x"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"100\" cy=\"75\" r=\"50\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"25\" r=\"3\" fill=\"#f87171\"/><path d=\"M 100 75 L 100 25\" fill=\"none\" stroke=\"#c5a059\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/></svg></div><br>נתון מעגל \\( x^{2} + y^{2} = R^{2} \\). מנקודה \\( P \\) מחוץ למעגל מעבירים שני משיקים המאונכים זה לזה. מהו המקום הגיאומטרי של הנקודה \\( P \\)?&rlm;",
        "options": ["x² + y² = 2R²", "x² + y² = R²", "x² + y² = 4R²", "x² / 2R² + y² / R² = 1"],
        "correctAnswer": 0,
        "hint": "משיקים מאונכים יוצרים עם רדיוסי ההשקה ריבוע.",
        "solution_steps": [
            { "verbal_explanation": "המשיקים והרדיוסים יוצרים מרובע עם ארבע זוויות ישרות.", "math_expression": "\\angle P = 90^{\\circ}" },
            { "verbal_explanation": "צלעות סמוכות שוות לרדיוס ולכן המרובע הוא ריבוע.", "math_expression": "a = R" },
            { "verbal_explanation": "מרחק הנקודה מהמרכז הוא אלכסון הריבוע.", "math_expression": "d = R\\sqrt{2}" },
            { "verbal_explanation": "נרכיב משוואת מעגל חדש עם הרדיוס המוגדל.", "math_expression": "x^{2} + y^{2} = (R\\sqrt{2})^{2}" },
            { "verbal_explanation": "נחשב את ריבוע הרדיוס החדש.", "math_expression": "x^{2} + y^{2} = 2R^{2}" }
        ],
        "final_answer": "x² + y² = 2R²"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "אורך קטע מתכתי הוא 10. קצה אחד מונח על ציר ה-\\( x \\) והקצה השני מונח על ציר ה-\\( y \\). מצאו את משוואת המקום הגיאומטרי של נקודת האמצע של קטע זה.&rlm;",
        "options": ["x² + y² = 25", "x² + y² = 100", "x² + y² = 50", "x² + y² = 5"],
        "correctAnswer": 0,
        "hint": "הביעו את קצות הקטע בעזרת משתני נקודת האמצע.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר נקודת אמצע.", "math_expression": "M(x, y)" },
            { "verbal_explanation": "נבטא את קצות הקטע.", "math_expression": "A(2x, 0) \\quad , \\quad B(0, 2y)" },
            { "verbal_explanation": "נרכיב משוואת פיתגורס ליתר.", "math_expression": "(2x)^{2} + (2y)^{2} = 10^{2}" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "4x^{2} + 4y^{2} = 100" },
            { "verbal_explanation": "נחלק בארבע למשוואת המעגל.", "math_expression": "x^{2} + y^{2} = 25" }
        ],
        "final_answer": "x² + y² = 25"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "מכל נקודה שעל הישר \\( x = 8 \\) מורידים אנך לציר ה-\\( y \\). מהו המקום הגיאומטרי של אמצעי האנכים האלה?&rlm;",
        "options": ["x = 4", "y = 4", "x = 8", "y = 0"],
        "correctAnswer": 0,
        "hint": "חשבו את נקודת האמצע האופקית.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקצה שעל הישר.", "math_expression": "P(8, y)" },
            { "verbal_explanation": "נרשום את הקצה שעל הציר.", "math_expression": "A(0, y)" },
            { "verbal_explanation": "נחשב את הממוצע האופקי.", "math_expression": "x_m = \\dfrac{8 + 0}{2} = 4" },
            { "verbal_explanation": "המשוואה אינה תלויה בשיעור האנכי.", "math_expression": "x = 4" }
        ],
        "final_answer": "x = 4"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "נתון מעגל שמשוואתו \\( (x - 2)^{2} + y^{2} = 16 \\). מצאו את המקום הגיאומטרי של מרכזי כל המעגלים המשיקים למעגל זה מבפנים ועוברים בראשית הצירים.&rlm;",
        "options": ["x²/4 + y²/3 = 1", "x²/16 + y²/4 = 1", "x²/4 + y²/4 = 1", "x²/3 + y²/4 = 1"],
        "correctAnswer": 0,
        "hint": "המעגל המשיק מבפנים מקיים: המרחק בין המרכזים שווה להפרש הרדיוסים. המעגל החדש עובר בראשית, ולכן הרדיוס שלו הוא מרחקו מהראשית.",
        "solution_steps": [
            { "verbal_explanation": "נזהה את מרכז ורדיוס המעגל הנתון.", "math_expression": "M_1(2, 0) \\quad , \\quad R_1 = 4" },
            { "verbal_explanation": "נסמן מרכז מעגל חסום.", "math_expression": "M_2(x, y)" },
            { "verbal_explanation": "רדיוס המעגל החסום שווה למרחקו מהראשית.", "math_expression": "R_2 = \\sqrt{x^{2} + y^{2}}" },
            { "verbal_explanation": "נרשום משוואת השקה פנימית.", "math_expression": "d = R_1 - R_2" },
            { "verbal_explanation": "נציב את הנתונים.", "math_expression": "\\sqrt{(x - 2)^{2} + y^{2}} = 4 - \\sqrt{x^{2} + y^{2}}" },
            { "verbal_explanation": "נעביר אגף.", "math_expression": "\\sqrt{(x - 2)^{2} + y^{2}} + \\sqrt{x^{2} + y^{2}} = 4" },
            { "verbal_explanation": "נחשב את פרמטרי האליפסה.", "math_expression": "2a = 4 \\Rightarrow a = 2 \\quad , \\quad 2c = 2 \\Rightarrow c = 1" },
            { "verbal_explanation": "נחשב את ריבוע חצי הציר המשני.", "math_expression": "b^{2} = a^{2} - c^{2} = 4 - 1 = 3" },
            { "verbal_explanation": "נרשום את המשוואה הקנונית.", "math_expression": "\\dfrac{x^{2}}{4} + \\dfrac{y^{2}}{3} = 1" }
        ],
        "final_answer": "x²/4 + y²/3 = 1"
    },
    {
        "topic": "analytic_geometry_572",
        "subTopic": "מקומות גיאומטריים מורכבים במערכת הצירים",
        "question_text": "נתונות הנקודות \\( A(-2, 0) \\) ו-\\( B(2, 0) \\). מצאו את המקום הגיאומטרי של הנקודות \\( P \\) שעבורן מכפלת השיפועים של הישרים \\( PA \\) ו-\\( PB \\) היא מינוס חצי (-0.5).&rlm;",
        "options": ["x²/4 + y²/2 = 1", "x²/4 - y²/2 = 1", "x² + 2y² = 4", "x²/2 + y²/4 = 1"],
        "correctAnswer": 0,
        "hint": "רשמו את השיפועים, כפלו אותם, והשוו למינוס חצי.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את שיפוע הישר הראשון.", "math_expression": "m_1 = \\dfrac{y}{x + 2}" },
            { "verbal_explanation": "נרשום את שיפוע הישר השני.", "math_expression": "m_2 = \\dfrac{y}{x - 2}" },
            { "verbal_explanation": "נכפול ונשווה לנתון.", "math_expression": "\\dfrac{y}{x + 2} \\times \\dfrac{y}{x - 2} = -0.5" },
            { "verbal_explanation": "נבצע את המכפלה למשוואה אחת.", "math_expression": "\\dfrac{y^{2}}{x^{2} - 4} = -\\dfrac{1}{2}" },
            { "verbal_explanation": "נכפול בהצלבה.", "math_expression": "2y^{2} = -x^{2} + 4" },
            { "verbal_explanation": "נסדר באגף אחד.", "math_expression": "x^{2} + 2y^{2} = 4" },
            { "verbal_explanation": "נחלק בארבע לקבלת אליפסה קנונית.", "math_expression": "\\dfrac{x^{2}}{4} + \\dfrac{y^{2}}{2} = 1" }
        ],
        "final_answer": "x²/4 + y²/2 = 1"
    }
];