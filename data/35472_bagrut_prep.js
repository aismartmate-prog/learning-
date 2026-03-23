const questionsDB = [
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2023 מועד קיץ א'<br>נתונה הפונקציה \\( f(x) = x - \\sqrt{4x - 3} \\).\nא. מצאו את תחום ההגדרה של הפונקציה.\nב. מצאו את נקודות הקיצון של הפונקציה (מקומיות ומוחלטות) וקבעו את סוגן.\nג. מצאו את משוואת המשיק לגרף הפונקציה בנקודה שבה \\( x = 3 \\).&rlm;",
        "options": ["א. x ≥ 0.75 ב. (1.75, 0.25) מינ', (0.75, 0.75) מקס' ג. y = 0.33x - 1", "א. x > 0.75 ב. (1.75, 0.25) מקס' ג. y = 3x - 1", "א. x ≥ 0.75 ב. (0.75, 0.75) מינ' ג. y = x - 3", "א. x ≥ 0 ב. (1, 0) מינ' ג. y = 0.33x"],
        "correctAnswer": 0,
        "hint": "בתחום ההגדרה, שימו לב שהביטוי תחת השורש חייב להיות אי-שלילי. לגזירה, זכרו כי נגזרת של x היא 1. נקודת קצה התחום היא גם נקודת קיצון.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את תחום ההגדרה על ידי דרישת אי-שליליות לביטוי שתחת השורש.", "math_expression": "4x - 3 \\geq 0" },
            { "verbal_explanation": "נחלץ את המשתנה.", "math_expression": "4x \\geq 3 \\Rightarrow x \\geq 0.75" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = 1 - \\dfrac{4}{2\\sqrt{4x - 3}} = 1 - \\dfrac{2}{\\sqrt{4x - 3}}" },
            { "verbal_explanation": "נשווה את הנגזרת לאפס ונבודד את השורש.", "math_expression": "1 = \\dfrac{2}{\\sqrt{4x - 3}} \\Rightarrow \\sqrt{4x - 3} = 2" },
            { "verbal_explanation": "נעלה בריבוע ונמצא את נקודת הקיצון המקומית.", "math_expression": "4x - 3 = 4 \\Rightarrow 4x = 7 \\Rightarrow x = 1.75" },
            { "verbal_explanation": "נחשב את ערך הפונקציה בנקודה זו ובנקודת הקצה, ונקבע סוג לפי הגובה.", "math_expression": "f(1.75) = 1.75 - 2 = -0.25 \\Rightarrow Min \\quad , \\quad f(0.75) = 0.75 - 0 = 0.75 \\Rightarrow Max" },
            { "verbal_explanation": "נחשב את ערך הפונקציה והנגזרת (השיפוע) עבור הנקודה הנתונה למשיק.", "math_expression": "f(3) = 3 - \\sqrt{9} = 0 \\quad , \\quad m = f'(3) = 1 - \\dfrac{2}{3} = \\dfrac{1}{3}" },
            { "verbal_explanation": "נרכיב משוואת משיק.", "math_expression": "y - 0 = \\dfrac{1}{3}(x - 3) \\Rightarrow y = \\dfrac{1}{3}x - 1" }
        ],
        "final_answer": "א. x ≥ 0.75 ב. (1.75, 0.25) מינ', (0.75, 0.75) מקס' ג. y = 0.33x - 1"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 100 20 L 40 120 L 160 120 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"100\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4\"/><ellipse cx=\"100\" cy=\"115\" rx=\"60\" ry=\"15\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/><line x1=\"100\" y1=\"100\" x2=\"160\" y2=\"115\" stroke=\"#c5a059\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"160\" y2=\"115\" stroke=\"#c5a059\" stroke-width=\"2\"/></svg></div><br>בגרות 2023 מועד חורף<br>בפירמידה ישרה ומשוכללת הבסיס הוא ריבוע שאורך מקצועו הוא 8 ס''מ. הזווית בין פאה צדדית למישור הבסיס היא בת 60 מעלות.\nא. מצאו את גובה הפירמידה.\nב. חשבו את נפח הפירמידה.&rlm;",
        "options": ["א. 6.93 ב. 147.8", "א. 8 ב. 170.6", "א. 4 ב. 85.3", "א. 6.93 ב. 200"],
        "correctAnswer": 0,
        "hint": "ההיטל של גובה הפאה הצדדית על הבסיס שווה למחצית אורך מקצוע הבסיס. השתמשו בטנגנס 60 מעלות.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההיטל (המרחק ממרכז הבסיס לאמצע המקצוע).", "math_expression": "x = \\dfrac{8}{2} = 4" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית הדו-מישורית למציאת גובה הפירמידה.", "math_expression": "\\tan(60^{\\circ}) = \\dfrac{h}{x} = \\dfrac{h}{4}" },
            { "verbal_explanation": "נבודד את הגובה.", "math_expression": "h = 4 \\times \\tan(60^{\\circ})" },
            { "verbal_explanation": "נציב את הערך המדויק.", "math_expression": "h = 4\\sqrt{3} \\approx 6.928" },
            { "verbal_explanation": "נחשב את שטח בסיס הפירמידה.", "math_expression": "S_{base} = 8^{2} = 64" },
            { "verbal_explanation": "נחשב את נפח הפירמידה באמצעות השטח והגובה.", "math_expression": "V = \\dfrac{S_{base} \\times h}{3} = \\dfrac{64 \\times 6.928}{3}" },
            { "verbal_explanation": "נשלים את חישוב הנפח.", "math_expression": "V \\approx 147.8" }
        ],
        "final_answer": "א. 6.93 ב. 147.8"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2022 מועד קיץ ב'<br>בסדרה חשבונית נתון כי סכום 10 האיברים הראשונים הוא 215, והאיבר הרביעי הוא 17.\nא. מצאו את האיבר הראשון ואת הפרש הסדרה.\nב. מהו ערכו של האיבר ה-15 בסדרה?&rlm;",
        "options": ["א. a1=8, d=3 ב. 50", "א. a1=5, d=4 ב. 61", "א. a1=11, d=2 ב. 39", "א. a1=8, d=3 ב. 47"],
        "correctAnswer": 0,
        "hint": "בנו שתי משוואות: אחת מנוסחת האיבר הכללי ואחת מנוסחת הסכום. בטאו את a1 באמצעות d והציבו במשוואת הסכום.",
        "solution_steps": [
            { "verbal_explanation": "נרכיב משוואה ראשונה מהאיבר הרביעי.", "math_expression": "a_1 + 3d = 17 \\Rightarrow a_1 = 17 - 3d" },
            { "verbal_explanation": "נרכיב משוואה שנייה מנתון הסכום.", "math_expression": "S_{10} = \\dfrac{10(2a_1 + 9d)}{2} = 5(2a_1 + 9d) = 215" },
            { "verbal_explanation": "נחלק בחמש לפשט את המשוואה.", "math_expression": "2a_1 + 9d = 43" },
            { "verbal_explanation": "נציב את הביטוי עבור האיבר הראשון בתוך המשוואה המפושטת.", "math_expression": "2(17 - 3d) + 9d = 43" },
            { "verbal_explanation": "נפתח סוגריים.", "math_expression": "34 - 6d + 9d = 43" },
            { "verbal_explanation": "נכנס איברים ונמצא את ההפרש.", "math_expression": "3d = 9 \\Rightarrow d = 3" },
            { "verbal_explanation": "נחשב את האיבר הראשון.", "math_expression": "a_1 = 17 - 3(3) = 8" },
            { "verbal_explanation": "נחשב את האיבר ה-15 בעזרת הנוסחה לאיבר כללי.", "math_expression": "a_{15} = a_1 + 14d = 8 + 14(3) = 8 + 42 = 50" }
        ],
        "final_answer": "א. a1=8, d=3 ב. 50"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><line x1=\"10\" y1=\"75\" x2=\"190\" y2=\"75\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"100\" y1=\"10\" x2=\"100\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"140\" stroke=\"#f87171\" stroke-width=\"1\" stroke-dasharray=\"4\"/><line x1=\"130\" y1=\"10\" x2=\"130\" y2=\"140\" stroke=\"#f87171\" stroke-width=\"1\" stroke-dasharray=\"4\"/><path d=\"M 10 70 Q 40 70 65 10\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 75 140 Q 100 0 125 140\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 135 10 Q 160 70 190 70\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>בגרות 2022 מועד חורף<br>נתונה הפונקציה הרציונלית \\( f(x) = \\dfrac{2x^{2} - 8}{x^{2} - 1} \\).\nא. מצאו את תחום ההגדרה של הפונקציה ואת האסימפטוטות שלה (אנכיות ואופקיות).\nב. מצאו את נקודות החיתוך של הפונקציה עם ציר ה-\\( x \\).&rlm;",
        "options": ["א. x≠±1, אנכיות x=±1, אופקית y=2 ב. (2,0), (-2,0)", "א. x≠1, אנכית x=1, אופקית y=2 ב. (4,0), (-4,0)", "א. x≠±2, אנכיות x=±2, אופקית y=1 ב. (1,0), (-1,0)", "א. כל x, אופקית y=2 ב. (2,0), (-2,0)"],
        "correctAnswer": 0,
        "hint": "השוו את המכנה לאפס למציאת תחום הגדרה ואסימפטוטות אנכיות. השוו מונה לאפס למציאת חיתוך. יחס המקדמים קובע אסימפטוטה אופקית.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את תחום ההגדרה על ידי מניעת איפוס המכנה.", "math_expression": "x^{2} - 1 \\neq 0 \\Rightarrow x^{2} \\neq 1 \\Rightarrow x \\neq \\pm 1" },
            { "verbal_explanation": "הנקודות שמאפסות את המכנה (ואינן מאפסות את המונה) מהוות אסימפטוטות אנכיות.", "math_expression": "x = 1 \\quad , \\quad x = -1" },
            { "verbal_explanation": "נמצא אסימפטוטה אופקית על ידי חלוקת מקדמי החזקות הגבוהות (ששתיהן ריבועיות).", "math_expression": "y = \\dfrac{2}{1} = 2" },
            { "verbal_explanation": "נמצא את נקודות החיתוך עם הציר האופקי על ידי השוואת המונה לאפס.", "math_expression": "2x^{2} - 8 = 0" },
            { "verbal_explanation": "נפתור עבור המשתנה.", "math_expression": "2x^{2} = 8 \\Rightarrow x^{2} = 4" },
            { "verbal_explanation": "נוציא שורש לקבלת שתי נקודות החיתוך.", "math_expression": "x = 2 \\quad , \\quad x = -2" },
            { "verbal_explanation": "נרשום את הנקודות במלואן.", "math_expression": "(2, 0) \\quad , \\quad (-2, 0)" }
        ],
        "final_answer": "א. x≠±1, אנכיות x=±1, אופקית y=2 ב. (2,0), (-2,0)"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2021 מועד קיץ א'<br>בסדרה הנדסית אינסופית מתכנסת, סכום כל איברי הסדרה הוא 24. יוצרים סדרה חדשה על ידי העלאה בריבוע של כל איבר מהסדרה המקורית. סכום הסדרה החדשה (הריבועית) הוא 192. מצאו את מנת הסדרה המקורית ואת האיבר הראשון שלה.&rlm;",
        "options": ["a1=12, q=0.5", "a1=16, q=0.33", "a1=18, q=0.25", "a1=8, q=0.66"],
        "correctAnswer": 0,
        "hint": "הסדרה החדשה היא סדרה הנדסית שהאיבר הראשון שלה הוא ריבוע האיבר הראשון, והמנה שלה היא ריבוע המנה המקורית. בנו שתי משוואות.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה עבור הסכום של הסדרה המקורית.", "math_expression": "\\dfrac{a_1}{1 - q} = 24 \\Rightarrow a_1 = 24(1 - q)" },
            { "verbal_explanation": "נרשום משוואה עבור הסכום של סדרת הריבועים.", "math_expression": "\\dfrac{(a_1)^{2}}{1 - q^{2}} = 192" },
            { "verbal_explanation": "נציב את הביטוי עבור האיבר הראשון ונפרק את המכנה לפי הפרש ריבועים.", "math_expression": "\\dfrac{(24(1 - q))^{2}}{(1 - q)(1 + q)} = 192" },
            { "verbal_explanation": "נחשב את הריבוע במונה ונצמצם גורמים דומים.", "math_expression": "\\dfrac{576(1 - q)^{2}}{(1 - q)(1 + q)} = 192 \\Rightarrow \\dfrac{576(1 - q)}{1 + q} = 192" },
            { "verbal_explanation": "נחלק ב-192.", "math_expression": "\\dfrac{3(1 - q)}{1 + q} = 1" },
            { "verbal_explanation": "נכפול במכנה ונעביר אגפים.", "math_expression": "3 - 3q = 1 + q \\Rightarrow 4q = 2 \\Rightarrow q = 0.5" },
            { "verbal_explanation": "נציב את המנה למשוואה הראשונה למציאת האיבר הראשון.", "math_expression": "a_1 = 24(1 - 0.5) = 24 \\times 0.5 = 12" }
        ],
        "final_answer": "a1=12, q=0.5"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 40 50 L 120 50 L 120 130 L 40 130 Z\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 70 20 L 150 20 L 150 100 L 70 100 Z\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><line x1=\"40\" y1=\"50\" x2=\"70\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"50\" x2=\"150\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"130\" x2=\"150\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"130\" x2=\"70\" y2=\"100\" stroke=\"#cbd5e1\" stroke-width=\"2\" stroke-dasharray=\"4\"/><line x1=\"40\" y1=\"130\" x2=\"150\" y2=\"20\" stroke=\"#c5a059\" stroke-width=\"2\"/><line x1=\"40\" y1=\"130\" x2=\"150\" y2=\"100\" stroke=\"#c5a059\" stroke-width=\"2\" stroke-dasharray=\"4\"/></svg></div><br>בגרות 2021 מועד חורף<br>בתיבה שאינה קובייה, ממדי הבסיס הם 8 ו-6. ידוע שהזווית שיוצר האלכסון הראשי של התיבה עם מישור הבסיס היא בת 30 מעלות. מצאו את נפח התיבה.&rlm;",
        "options": ["276.96", "480", "144", "312.5"],
        "correctAnswer": 0,
        "hint": "חשבו את אלכסון הבסיס תחילה. הוא מהווה ניצב סמוך לזווית של 30 מעלות, כאשר גובה התיבה הוא הניצב שממול. לאחר מציאת הגובה, חשבו נפח.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את אורך אלכסון הבסיס באמצעות משפט פיתגורס.", "math_expression": "d^{2} = 8^{2} + 6^{2} = 64 + 36 = 100" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "d = 10" },
            { "verbal_explanation": "נשתמש בטנגנס הזווית הנתונה כדי לקשור בין הגובה לאלכסון הבסיס.", "math_expression": "\\tan(30^{\\circ}) = \\dfrac{h}{10}" },
            { "verbal_explanation": "נחלץ את הגובה.", "math_expression": "h = 10 \\times \\tan(30^{\\circ})" },
            { "verbal_explanation": "נציב את הערך העשרוני.", "math_expression": "h = 10 \\times \\dfrac{\\sqrt{3}}{3} \\approx 5.77" },
            { "verbal_explanation": "נחשב את נפח התיבה, שהוא מכפלת כל שלושת הממדים.", "math_expression": "V = 8 \\times 6 \\times 5.77" },
            { "verbal_explanation": "נבצע את פעולת הכפל הסופית.", "math_expression": "V = 48 \\times 5.77 = 276.96" }
        ],
        "final_answer": "276.96"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2020 מועד קיץ ב'<br>נתונה הפונקציה \\( f(x) = \\sqrt{36 - x^{2}} \\). חוסמים מלבן בין ציר ה-\\( x \\) לבין גרף הפונקציה, כך ששניים מקודקודיו מונחים על הציר והשניים האחרים על גרף הפונקציה. מצאו את השטח המקסימלי האפשרי של מלבן זה.&rlm;",
        "options": ["36", "72", "18", "24"],
        "correctAnswer": 0,
        "hint": "הפונקציה מייצגת חצי מעגל עליון. סמנו את קואורדינטת ה-x של קודקוד המלבן שברביע הראשון. רוחב המלבן יהיה 2x וגובהו ערך הפונקציה.",
        "solution_steps": [
            { "verbal_explanation": "נגדיר את ממדי המלבן החסום בעזרת משתנה המייצג מחצית מרוחבו.", "math_expression": "w = 2x \\quad , \\quad h = \\sqrt{36 - x^{2}}" },
            { "verbal_explanation": "נבנה את פונקציית שטח המלבן.", "math_expression": "S(x) = 2x\\sqrt{36 - x^{2}}" },
            { "verbal_explanation": "נגזור את פונקציית המטרה לפי כלל מכפלה ונגזרת שורש.", "math_expression": "S'(x) = 2\\sqrt{36 - x^{2}} + 2x \\times \\dfrac{-2x}{2\\sqrt{36 - x^{2}}}" },
            { "verbal_explanation": "ניצור מכנה משותף לאיחוד הנגזרת.", "math_expression": "S'(x) = \\dfrac{2(36 - x^{2}) - 2x^{2}}{\\sqrt{36 - x^{2}}}" },
            { "verbal_explanation": "נפשט את המונה ונשווה לאפס.", "math_expression": "72 - 2x^{2} - 2x^{2} = 72 - 4x^{2} = 0" },
            { "verbal_explanation": "נחלץ את המשתנה.", "math_expression": "4x^{2} = 72 \\Rightarrow x^{2} = 18 \\Rightarrow x = \\sqrt{18}" },
            { "verbal_explanation": "נציב את הערך חזרה לפונקציית השטח למציאת השטח המקסימלי.", "math_expression": "S(\\sqrt{18}) = 2\\sqrt{18}\\sqrt{36 - 18} = 2\\sqrt{18}\\sqrt{18} = 2 \\times 18 = 36" }
        ],
        "final_answer": "36"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2020 מועד חורף<br>נתונה הפונקציה בעלת הפרמטר \\( f(x) = \\dfrac{ax + 6}{x^{2} - 9} \\). נתון כי שיפוע המשיק לגרף הפונקציה בנקודה שבה \\( x = 0 \\) הוא 2. מצאו את ערך הפרמטר \\( a \\).&rlm;",
        "options": ["-18", "9", "-9", "18"],
        "correctAnswer": 0,
        "hint": "גזרו את הפונקציה לפי כלל המנה, והציבו x=0. השוו את התוצאה ל-2.",
        "solution_steps": [
            { "verbal_explanation": "נגזור את הפונקציה הנתונה בעזרת כלל המנה.", "math_expression": "f'(x) = \\dfrac{a(x^{2} - 9) - (ax + 6)(2x)}{(x^{2} - 9)^{2}}" },
            { "verbal_explanation": "נציב בנגזרת את שיעור האופקי של הנקודה הנתונה.", "math_expression": "f'(0) = \\dfrac{a(0^{2} - 9) - (a \\times 0 + 6)(0)}{(0^{2} - 9)^{2}}" },
            { "verbal_explanation": "נפשט את הביטוי שהתקבל.", "math_expression": "f'(0) = \\dfrac{-9a - 0}{81} = \\dfrac{-9a}{81}" },
            { "verbal_explanation": "נצמצם את השבר בחלוקה לתשע.", "math_expression": "f'(0) = -\\dfrac{a}{9}" },
            { "verbal_explanation": "נשווה את הנגזרת לשיפוע הנתון.", "math_expression": "-\\dfrac{a}{9} = 2" },
            { "verbal_explanation": "נכפול במינוס תשע לחילוץ הפרמטר.", "math_expression": "a = -18" }
        ],
        "final_answer": "-18"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2019 מועד קיץ א'<br>בסדרה חשבונית יש 10 איברים. סכום האיברים הנמצאים במקומות הזוגיים גדול ב-15 מסכום האיברים במקומות האי-זוגיים. האיבר העשירי והאחרון שווה ל-40.\nא. מצאו את הפרש הסדרה.\nב. מצאו את האיבר הראשון.&rlm;",
        "options": ["א. d=3 ב. a1=13", "א. d=4 ב. a1=4", "א. d=2 ב. a1=22", "א. d=3 ב. a1=10"],
        "correctAnswer": 0,
        "hint": "ההפרש בין סכום האיברים הזוגיים לאי-זוגיים שווה למספר הזוגות (5) כפול d. לאחר מכן הציבו בנוסחת האיבר העשירי.",
        "solution_steps": [
            { "verbal_explanation": "נרשום את הקשר בין סכום הזוגיים לאי-זוגיים. כל זוג תורם הפרש אחד.", "math_expression": "S_{even} - S_{odd} = n_{pairs} \\times d" },
            { "verbal_explanation": "בסדרה של עשרה איברים ישנם חמישה זוגות עוקבים.", "math_expression": "n_{pairs} = \\dfrac{10}{2} = 5" },
            { "verbal_explanation": "נציב את הנתונים כדי למצוא את ההפרש.", "math_expression": "15 = 5 \\times d \\Rightarrow d = 3" },
            { "verbal_explanation": "נשתמש בנוסחת האיבר הכללי עבור האיבר העשירי הנתון.", "math_expression": "a_{10} = a_1 + 9d" },
            { "verbal_explanation": "נציב את ההפרש שמצאנו ואת ערך האיבר העשירי.", "math_expression": "40 = a_1 + 9 \\times 3 = a_1 + 27" },
            { "verbal_explanation": "נחסר ונמצא את האיבר הראשון.", "math_expression": "a_1 = 40 - 27 = 13" }
        ],
        "final_answer": "א. d=3 ב. a1=13"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "<div dir=\"ltr\" style=\"text-align:center;\"><svg viewBox=\"0 0 200 150\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"70,20 170,20 100,100\" fill=\"none\" stroke=\"#cbd5e1\" stroke-width=\"2\"/><polygon points=\"20,50 120,50 50,130\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"50\" x2=\"70\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"120\" y1=\"50\" x2=\"170\" y2=\"20\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"50\" y1=\"130\" x2=\"100\" y2=\"100\" stroke=\"#0f172a\" stroke-width=\"2\"/></svg></div><br>בגרות 2019 מועד חורף<br>במנסרה משולשת ישרה, הבסיס הוא משולש שווה צלעות שאורך צלעו \\( a=6 \\). נפח המנסרה הוא \\( 90\\sqrt{3} \\) סמ''ק. מצאו את הזווית שיוצר אלכסון פאה צדדית עם מישור הבסיס.&rlm;",
        "options": ["59.03°", "45°", "60°", "30°"],
        "correctAnswer": 0,
        "hint": "מצאו תחילה את גובה המנסרה דרך נתון הנפח ושטח הבסיס. במנסרה ישרה, היטל אלכסון הפאה מתלכד עם מקצוע הבסיס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את שטח משולש הבסיס שווה הצלעות.", "math_expression": "S_{base} = \\dfrac{a^{2}\\sqrt{3}}{4} = \\dfrac{6^{2}\\sqrt{3}}{4} = \\dfrac{36\\sqrt{3}}{4} = 9\\sqrt{3}" },
            { "verbal_explanation": "נשתמש בנוסחת הנפח כדי לחלץ את גובה המנסרה.", "math_expression": "V = S_{base} \\times h \\Rightarrow 90\\sqrt{3} = 9\\sqrt{3} \\times h" },
            { "verbal_explanation": "נחלק ונמצא את הגובה.", "math_expression": "h = 10" },
            { "verbal_explanation": "היטל אלכסון הפאה הצדדית על הבסיס הוא מקצוע הבסיס.", "math_expression": "x = a = 6" },
            { "verbal_explanation": "נשתמש בטנגנס למציאת הזווית הנוצרת.", "math_expression": "\\tan A = \\dfrac{h}{x} = \\dfrac{10}{6}" },
            { "verbal_explanation": "נצמצם ונהפוך לעשרוני.", "math_expression": "\\tan A = \\dfrac{5}{3} \\approx 1.666" },
            { "verbal_explanation": "נחלץ את הזווית.", "math_expression": "A \\approx 59.03^{\\circ}" }
        ],
        "final_answer": "59.03°"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2018 מועד קיץ א'<br>מצאו את נקודת המינימום המקומית של הפונקציה \\( y = \\sqrt{x} + \\dfrac{16}{\\sqrt{x}} \\).&rlm;",
        "options": ["(16, 8)", "(4, 10)", "(8, 8.48)", "(1, 17)"],
        "correctAnswer": 0,
        "hint": "המירו את המכנה לחזקה שלילית וגזרו. בצעו מכנה משותף והשוו את המונה לאפס.",
        "solution_steps": [
            { "verbal_explanation": "תחום ההגדרה דורש תוכן חיובי ממש עקב השורש במכנה.", "math_expression": "x > 0" },
            { "verbal_explanation": "נשכתב את הפונקציה לחזקות.", "math_expression": "y = x^{0.5} + 16x^{-0.5}" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "y' = 0.5x^{-0.5} - 8x^{-1.5} = \\dfrac{1}{2\\sqrt{x}} - \\dfrac{8}{x\\sqrt{x}}" },
            { "verbal_explanation": "ניצור מכנה משותף בנגזרת.", "math_expression": "y' = \\dfrac{x - 16}{2x\\sqrt{x}}" },
            { "verbal_explanation": "נשווה את המונה לאפס למציאת קיצון.", "math_expression": "x - 16 = 0 \\Rightarrow x = 16" },
            { "verbal_explanation": "נציב את הערך חזרה לפונקציה.", "math_expression": "y(16) = \\sqrt{16} + \\dfrac{16}{\\sqrt{16}} = 4 + \\dfrac{16}{4}" },
            { "verbal_explanation": "נחשב את ערך הפונקציה.", "math_expression": "y(16) = 4 + 4 = 8 \\Rightarrow (16, 8)" }
        ],
        "final_answer": "(16, 8)"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2018 מועד חורף<br>נתונה הפונקציה \\( f(x) = \\dfrac{x^{2} - 7x + 10}{x^{2} - 4} \\).\nא. מצאו את האסימפטוטות האנכיות.\nב. האם יש לפונקציה נקודת חור סליקה? אם כן, מצאו אותה.&rlm;",
        "options": ["א. x = -2 ב. כן, בנקודה (2, -0.75)", "א. x = 2, x = -2 ב. אין חור", "א. x = 2 ב. כן, בנקודה (-2, 1)", "א. x = -2 ב. כן, בנקודה (2, 0)"],
        "correctAnswer": 0,
        "hint": "פרקו את המונה לפי טרינום ואת המכנה לפי הפרש ריבועים. הגורם שמצטמצם הוא נקודת חור, הגורם שנשאר במכנה הוא אסימפטוטה.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את תחום ההגדרה מהמכנה.", "math_expression": "x^{2} - 4 \\neq 0 \\Rightarrow x \\neq 2 \\quad , \\quad x \\neq -2" },
            { "verbal_explanation": "נפרק את המונה לגורמים.", "math_expression": "x^{2} - 7x + 10 = (x - 2)(x - 5)" },
            { "verbal_explanation": "נפרק את המכנה לגורמים.", "math_expression": "x^{2} - 4 = (x - 2)(x + 2)" },
            { "verbal_explanation": "נציב ונצמצם את הפונקציה.", "math_expression": "f(x) = \\dfrac{(x - 2)(x - 5)}{(x - 2)(x + 2)} = \\dfrac{x - 5}{x + 2}" },
            { "verbal_explanation": "הגורם שנשאר במכנה מהווה אסימפטוטה אנכית.", "math_expression": "x + 2 = 0 \\Rightarrow x = -2 \\Rightarrow VA" },
            { "verbal_explanation": "הגורם שהצטמצם מהווה חור. נציב בפונקציה המצומצמת.", "math_expression": "f(2) = \\dfrac{2 - 5}{2 + 2} = \\dfrac{-3}{4} = -0.75" },
            { "verbal_explanation": "נקודת החור נמצאה.", "math_expression": "(2, -0.75)" }
        ],
        "final_answer": "א. x = -2 ב. כן, בנקודה (2, -0.75)"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2017 מועד קיץ ב'<br>בסדרה הנדסית כל האיברים חיוביים. נתון כי \\( a_1 + a_2 = 12 \\) ו-\\( a_3 + a_4 = 108 \\). מצאו את סכום חמשת האיברים הראשונים (\\( S_5 \\)).&rlm;",
        "options": ["363", "243", "121", "484"],
        "correctAnswer": 0,
        "hint": "בטאו הכל בעזרת האיבר הראשון והמנה. חלקו את שתי המשוואות כדי לבודד את המנה בריבוע.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה מהנתון הראשון ונפרק לפי איבר כללי.", "math_expression": "a_1 + a_1 q = 12 \\Rightarrow a_1(1 + q) = 12" },
            { "verbal_explanation": "נרשום משוואה שנייה ונוציא גורם משותף.", "math_expression": "a_1 q^{2} + a_1 q^{3} = 108 \\Rightarrow a_1 q^{2}(1 + q) = 108" },
            { "verbal_explanation": "נחלק את המשוואה השנייה בראשונה.", "math_expression": "\\dfrac{a_1 q^{2}(1 + q)}{a_1(1 + q)} = \\dfrac{108}{12}" },
            { "verbal_explanation": "נצמצם ונמצא את המנה. כיוון שאיברים חיוביים, המנה חיובית.", "math_expression": "q^{2} = 9 \\Rightarrow q = 3" },
            { "verbal_explanation": "נציב לחילוץ האיבר הראשון.", "math_expression": "a_1(1 + 3) = 12 \\Rightarrow 4a_1 = 12 \\Rightarrow a_1 = 3" },
            { "verbal_explanation": "נחשב את הסכום בעזרת הנוסחה לסדרה הנדסית.", "math_expression": "S_5 = \\dfrac{3(3^{5} - 1)}{3 - 1}" },
            { "verbal_explanation": "נשלים את החישוב.", "math_expression": "S_5 = \\dfrac{3(243 - 1)}{2} = \\dfrac{3 \\times 242}{2} = 3 \\times 121 = 363" }
        ],
        "final_answer": "363"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2017 מועד חורף<br>בפירמידה ישרה ומשוכללת שבסיסה ריבוע, אורך מקצוע הבסיס הוא 10 ואורך המקצוע הצדדי הוא 13. חשבו את הזווית בין פאה צדדית למישור הבסיס.&rlm;",
        "options": ["65.37°", "54.7°", "60°", "45°"],
        "correctAnswer": 0,
        "hint": "חשבו את ההיטל (חצי בסיס). השתמשו בפיתגורס למציאת גובה הפאה הצדדית. לאחר מכן היעזרו בקוסינוס.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את ההיטל, שהוא חצי ממקצוע הבסיס.", "math_expression": "x = \\dfrac{10}{2} = 5" },
            { "verbal_explanation": "נחשב את גובה הפאה מתוך משולש הפאה הצדדית (יתר הוא מקצוע צדדי, ניצב הוא חצי מקצוע בסיס).", "math_expression": "m^{2} = s^{2} - x^{2} = 13^{2} - 5^{2}" },
            { "verbal_explanation": "נחשב את הריבועים וההפרש.", "math_expression": "m^{2} = 169 - 25 = 144" },
            { "verbal_explanation": "נוציא שורש למציאת גובה הפאה הצדדית.", "math_expression": "m = 12" },
            { "verbal_explanation": "הזווית הדו-מישורית נוצרת בין ההיטל (ניצב סמוך) לגובה הפאה (יתר). נשתמש בקוסינוס.", "math_expression": "\\cos A = \\dfrac{x}{m} = \\dfrac{5}{12}" },
            { "verbal_explanation": "נחשב קירוב עשרוני.", "math_expression": "\\cos A \\approx 0.416" },
            { "verbal_explanation": "נמצא את הזווית בעזרת המחשבון.", "math_expression": "A \\approx 65.37^{\\circ}" }
        ],
        "final_answer": "65.37°"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2016 מועד קיץ א'<br>לפונקציה \\( f(x) = \\dfrac{a}{\\sqrt{bx - x^{2}}} \\) תחום הגדרה \\( 0 < x < 6 \\). נתון כי \\( f(3) = 2 \\). מצאו את הערכים של \\( a \\) ו-\\( b \\).&rlm;",
        "options": ["a=6, b=6", "a=4, b=6", "a=6, b=3", "a=2, b=8"],
        "correctAnswer": 0,
        "hint": "תחום ההגדרה של השורש במכנה מוגדר בין שורשי הפולינום. אחד השורשים חייב להיות 6.",
        "solution_steps": [
            { "verbal_explanation": "תחום ההגדרה דורש שהביטוי במכנה יהיה חיובי.", "math_expression": "bx - x^{2} > 0 \\Rightarrow x(b - x) > 0" },
            { "verbal_explanation": "שורשי הפרבולה הם 0 ו-b. מכיוון שהתחום הנתון הוא 0 עד 6, מסיקים את הפרמטר השני.", "math_expression": "b = 6" },
            { "verbal_explanation": "נציב את הנתונים הנוספים בפונקציה.", "math_expression": "f(3) = \\dfrac{a}{\\sqrt{6(3) - 3^{2}}} = 2" },
            { "verbal_explanation": "נחשב את ערך הביטוי תחת השורש.", "math_expression": "\\dfrac{a}{\\sqrt{18 - 9}} = 2" },
            { "verbal_explanation": "נפשט את השורש.", "math_expression": "\\dfrac{a}{\\sqrt{9}} = \\dfrac{a}{3} = 2" },
            { "verbal_explanation": "נכפול לחילוץ הפרמטר הראשון.", "math_expression": "a = 6" },
            { "verbal_explanation": "אלו הם המקדמים הנדרשים.", "math_expression": "a=6 \\quad , \\quad b=6" }
        ],
        "final_answer": "a=6, b=6"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2016 מועד חורף<br>מצאו את נקודות הקיצון של הפונקציה \\( f(x) = \\dfrac{x^{2} + 4x + 4}{x - 1} \\) וקבעו את סוגן.&rlm;",
        "options": ["(4, 12) מינ', (-2, 0) מקס'", "(4, 12) מקס', (-2, 0) מינ'", "(-4, -12) מינ', (2, 0) מקס'", "אין קיצון"],
        "correctAnswer": 0,
        "hint": "גזרו בעזרת כלל המנה, פשטו את המונה והשוו לאפס.",
        "solution_steps": [
            { "verbal_explanation": "נמצא את תחום ההגדרה.", "math_expression": "x \\neq 1" },
            { "verbal_explanation": "נגזור בעזרת כלל המנה.", "math_expression": "f'(x) = \\dfrac{(2x + 4)(x - 1) - (x^{2} + 4x + 4)(1)}{(x - 1)^{2}}" },
            { "verbal_explanation": "נפתח סוגריים ונכנס איברים במונה.", "math_expression": "Num = 2x^{2} - 2x + 4x - 4 - x^{2} - 4x - 4 = x^{2} - 2x - 8" },
            { "verbal_explanation": "נשווה לאפס ונמצא שורשים.", "math_expression": "x^{2} - 2x - 8 = 0 \\Rightarrow (x - 4)(x + 2) = 0" },
            { "verbal_explanation": "נחלץ את הערכים הקריטיים.", "math_expression": "x = 4 \\quad , \\quad x = -2" },
            { "verbal_explanation": "נציב בפונקציה למציאת הערכים האנכיים.", "math_expression": "f(4) = \\dfrac{16 + 16 + 4}{3} = \\dfrac{36}{3} = 12" },
            { "verbal_explanation": "נציב את הערך השני.", "math_expression": "f(-2) = \\dfrac{4 - 8 + 4}{-3} = 0" },
            { "verbal_explanation": "על סמך בדיקת סימנים, הנקודה (4,12) היא מינימום ו-(-2,0) היא מקסימום.", "math_expression": "Min(4, 12) \\quad , \\quad Max(-2, 0)" }
        ],
        "final_answer": "(4, 12) מינ', (-2, 0) מקס'"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2015 מועד קיץ ב'<br>בסדרה הנדסית אינסופית מתכנסת, סכום הסדרה הוא 18 והאיבר השני הוא 4. מצאו את שתי האפשרויות למנת הסדרה.&rlm;",
        "options": ["q = 2/3 או q = 1/3", "q = 0.5 או q = 0.25", "q = 0.8 או q = 0.2", "q = 3/4 או q = 1/4"],
        "correctAnswer": 0,
        "hint": "בטאו את האיבר הראשון בעזרת משוואת הסכום, והציבו לתוך משוואת האיבר השני.",
        "solution_steps": [
            { "verbal_explanation": "נרשום משוואה עבור סכום הסדרה ונבודד את האיבר הראשון.", "math_expression": "\\dfrac{a_1}{1 - q} = 18 \\Rightarrow a_1 = 18(1 - q)" },
            { "verbal_explanation": "נרשום משוואה עבור האיבר השני על ידי האיבר הראשון והמנה.", "math_expression": "a_1 q = 4" },
            { "verbal_explanation": "נציב את הביטוי מהמשוואה הראשונה לתוך השנייה.", "math_expression": "18q(1 - q) = 4" },
            { "verbal_explanation": "נפתח סוגריים ונסדר משוואה ריבועית.", "math_expression": "18q - 18q^{2} = 4 \\Rightarrow 18q^{2} - 18q + 4 = 0" },
            { "verbal_explanation": "נחלק בשתיים להקלת החישוב.", "math_expression": "9q^{2} - 9q + 2 = 0" },
            { "verbal_explanation": "נפתור באמצעות נוסחת שורשים.", "math_expression": "q = \\dfrac{9 \\pm \\sqrt{81 - 72}}{18} = \\dfrac{9 \\pm 3}{18}" },
            { "verbal_explanation": "נחשב את האפשרות הראשונה.", "math_expression": "q_1 = \\dfrac{12}{18} = \\dfrac{2}{3}" },
            { "verbal_explanation": "נחשב את האפשרות השנייה.", "math_expression": "q_2 = \\dfrac{6}{18} = \\dfrac{1}{3}" }
        ],
        "final_answer": "q = 2/3 או q = 1/3"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2015 מועד חורף<br>בתיבה, אורך אלכסון הבסיס הוא 15 וגובה התיבה הוא 8. מצאו את אורך אלכסון התיבה ואת הזווית שהוא יוצר עם מישור הבסיס.&rlm;",
        "options": ["אלכסון: 17, זווית: 28.07°", "אלכסון: 15, זווית: 32.5°", "אלכסון: 20, זווית: 45°", "אלכסון: 17, זווית: 36.8°"],
        "correctAnswer": 0,
        "hint": "היעזרו במשפט פיתגורס למציאת האלכסון, ובפונקציית טנגנס למציאת הזווית.",
        "solution_steps": [
            { "verbal_explanation": "נשתמש בטנגנס למציאת הזווית הנוצרת בין אלכסון התיבה, הגובה וההיטל (אלכסון הבסיס).", "math_expression": "\\tan A = \\dfrac{h}{d_{base}} = \\dfrac{8}{15}" },
            { "verbal_explanation": "נחשב קירוב עשרוני ונפעיל פונקציה הפוכה.", "math_expression": "\\tan A \\approx 0.533 \\Rightarrow A \\approx 28.07^{\\circ}" },
            { "verbal_explanation": "נחשב את ריבוע אלכסון התיבה בעזרת משפט פיתגורס במרחב.", "math_expression": "D^{2} = d_{base}^{2} + h^{2} = 15^{2} + 8^{2}" },
            { "verbal_explanation": "נחשב את הסכום.", "math_expression": "D^{2} = 225 + 64 = 289" },
            { "verbal_explanation": "נוציא שורש.", "math_expression": "D = \\sqrt{289} = 17" }
        ],
        "final_answer": "אלכסון: 17, זווית: 28.07°"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2014 מועד קיץ א'<br>לפונקציה \\( f(x) = x + \\dfrac{4}{x} \\) מעבירים משיק בנקודה שבה \\( x = 2 \\). מצאו את משוואת המשיק והסיקו מה קורה בנקודה זו.&rlm;",
        "options": ["y = 4, נקודת מינימום", "y = 2x, חיתוך עם הציר", "y = x + 2, אין קיצון", "y = 4x - 4, נקודת מקסימום"],
        "correctAnswer": 0,
        "hint": "חשבו את ערך הפונקציה ואת שיפוע הנגזרת. שיפוע אפס מעיד על ישר מקביל לציר x (משיק אופקי).",
        "solution_steps": [
            { "verbal_explanation": "נמצא את שיעור האנכי של הנקודה.", "math_expression": "f(2) = 2 + \\dfrac{4}{2} = 4 \\Rightarrow (2, 4)" },
            { "verbal_explanation": "נגזור את הפונקציה.", "math_expression": "f'(x) = 1 - \\dfrac{4}{x^{2}}" },
            { "verbal_explanation": "נציב את הערך למציאת השיפוע.", "math_expression": "m = 1 - \\dfrac{4}{4} = 0" },
            { "verbal_explanation": "נרכיב את משוואת המשיק.", "math_expression": "y - 4 = 0(x - 2) \\Rightarrow y = 4" },
            { "verbal_explanation": "משיק אופקי ששיפועו אפס מעיד על נקודת קיצון (במקרה זה מינימום בבדיקת סביבה).", "math_expression": "m = 0 \\Rightarrow Extremum \\, (Min)" }
        ],
        "final_answer": "y = 4, נקודת מינימום"
    },
    {
        "topic": "bagrut_prep_472",
        "subTopic": "הכנה לבחינת בגרות",
        "question_text": "בגרות 2014 מועד חורף<br>בסדרה מוגדר סכום \\( n \\) האיברים הראשונים על ידי הנוסחה \\( S_n = 2n^{2} + 3n \\). מצאו את נוסחת האיבר הכללי \\( a_n \\) ואת הפרש הסדרה \\( d \\).&rlm;",
        "options": ["an = 4n + 1, d = 4", "an = 4n + 3, d = 4", "an = 2n + 3, d = 2", "an = 3n + 2, d = 3"],
        "correctAnswer": 0,
        "hint": "האיבר הכללי שווה לסכום n איברים פחות סכום n-1 איברים.",
        "solution_steps": [
            { "verbal_explanation": "נחשב את סכום קבוצת האיברים הקטנה באחת.", "math_expression": "S_{n-1} = 2(n - 1)^{2} + 3(n - 1)" },
            { "verbal_explanation": "נפתח סוגריים בביטוי.", "math_expression": "S_{n-1} = 2(n^{2} - 2n + 1) + 3n - 3 = 2n^{2} - 4n + 2 + 3n - 3" },
            { "verbal_explanation": "נכנס איברים למשוואה מסודרת.", "math_expression": "S_{n-1} = 2n^{2} - n - 1" },
            { "verbal_explanation": "האיבר הכללי הוא ההפרש בין שני הסכומים העוקבים.", "math_expression": "a_n = S_n - S_{n-1} = (2n^{2} + 3n) - (2n^{2} - n - 1)" },
            { "verbal_explanation": "נפשט ונקבל את הנוסחה לאיבר.", "math_expression": "a_n = 4n + 1" },
            { "verbal_explanation": "ההפרש הוא קבוע המקדם של המשתנה בנוסחה לינארית זו.", "math_expression": "a_{n+1} - a_n = (4(n + 1) + 1) - (4n + 1) = 4n + 5 - 4n - 1 = 4" },
            { "verbal_explanation": "נרשום את התוצאות.", "math_expression": "d = 4" }
        ],
        "final_answer": "an = 4n + 1, d = 4"
    }
];